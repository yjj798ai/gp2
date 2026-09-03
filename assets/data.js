const UPDATE_TIME = "2026-09-03 07:40";
const THS_HOT = [
  {
    "name": "液冷服务器",
    "rise": 1.84,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "培育钻石",
    "rise": 3.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.69,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续284天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -0.2,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续114天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": -0.87,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续42天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "PCB概念",
    "rise": 0.26,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "AI视频",
    "rise": -0.42,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "存储芯片",
    "rise": -0.24,
    "rate": 0,
    "tag": "",
    "hotTag": "连续237天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "粮食概念",
    "rise": -1.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "黄金概念",
    "rise": 0.51,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "人形机器人",
    "rise": 0.45,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": 0.32,
    "rate": 0,
    "tag": "",
    "hotTag": "连续24天上榜",
    "rankChg": -1,
    "etfName": "鹏华创新动力LOF",
    "code": "886112"
  },
  {
    "name": "光纤概念",
    "rise": -0.0,
    "rate": 0,
    "tag": "",
    "hotTag": "连续113天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "算力租赁",
    "rise": -0.49,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续148天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "军工",
    "rise": -0.34,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "军工龙头ETF",
    "code": "885700"
  },
  {
    "name": "免税店",
    "rise": 0.95,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885898"
  },
  {
    "name": "商业航天",
    "rise": -0.3,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续213天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "数字货币",
    "rise": -1.31,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "兵装重组概念",
    "rise": -2.85,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.24,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  }
];
const THS_EVENTS = [
  {
    "title": "950亿美元服务器积压订单背后 液冷从故事变成生意",
    "desc": "",
    "heat": 402281,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "思泉新材",
        "code": "301489",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "2026年被业内视作金刚石散热材料商用化落地元年",
    "desc": "",
    "heat": 392401,
    "direction": "金刚石散热",
    "themes": [
      "金刚石散热",
      "培育钻石"
    ],
    "stocks": [
      {
        "name": "惠丰钻石",
        "code": "920725",
        "chg": 10.714758
      }
    ]
  },
  {
    "title": "马斯克：未来十年人形机器人将达10亿台",
    "desc": "",
    "heat": 194121,
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
        "chg": 20.0
      }
    ]
  },
  {
    "title": "厄尔尼诺致供水紧张，印尼最大镍工业园或减产至多四成",
    "desc": "",
    "heat": 143131,
    "direction": "镍",
    "themes": [
      "金属镍"
    ],
    "stocks": [
      {
        "name": "白银有色",
        "code": "601212",
        "chg": 10.06006
      }
    ]
  },
  {
    "title": "Snowflake二季度营收15.5亿美元，分析师预期14.9亿美元",
    "desc": "",
    "heat": 102782,
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
    "title": "国家能源局： 加快输电通道等重大电网工程核准建设",
    "desc": "",
    "heat": 50075,
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
    "title": "智谱入驻天猫，开网店卖Token",
    "desc": "",
    "heat": 35250,
    "direction": "词元概念（Token）",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "金禄电子",
        "code": "301282",
        "chg": 12.30982
      }
    ]
  },
  {
    "title": "芒果超媒落地首部上星AIGC长剧 《后西游记》打开新空间",
    "desc": "",
    "heat": 28531,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "龙版传媒",
        "code": "605577",
        "chg": 10.038911
      }
    ]
  },
  {
    "title": "全球首个多模态世界模型发布",
    "desc": "",
    "heat": 26276,
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
    "title": "我国科研团队破解量子随机存取存储器扩展难题",
    "desc": "",
    "heat": 12448,
    "direction": "量子科技",
    "themes": [
      "量子科技"
    ],
    "stocks": [
      {
        "name": "*ST禾信",
        "code": "688622",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "月之暗面向港交所秘密交表，正式启动IPO",
    "desc": "",
    "heat": 9826,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "返利科技",
        "code": "600228",
        "chg": 5.435897
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "培育钻石",
    "change": "+4.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+2.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+2.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+2.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液冷服务器",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+2.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+2.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+1.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+1.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "回购增持再贷款",
    "change": "+1.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+1.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "轮边电机",
    "change": "+1.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高价股",
    "change": "+1.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+1.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "稀土磁材",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁悬浮压缩机",
    "change": "+1.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "业绩增长",
    "change": "+1.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车热管理",
    "change": "+0.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 2,
    "hot_rank_chg": 2,
    "stock_cnt": 5776,
    "price": "12.67",
    "change": "2.18",
    "market_id": "17",
    "circulate_market_value": "8131393400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.82
      },
      {
        "name": "农业种植",
        "change_pct": -0.53
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.87
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.79
      },
      {
        "name": "休闲食品",
        "change_pct": -1.15
      },
      {
        "name": "食品",
        "change_pct": -0.94
      },
      {
        "name": "食品安全",
        "change_pct": -0.16
      },
      {
        "name": "社区团购",
        "change_pct": -1.35
      },
      {
        "name": "大农业",
        "change_pct": -1.07
      },
      {
        "name": "预制菜",
        "change_pct": -1.25
      },
      {
        "name": "人造肉",
        "change_pct": -1.13
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 4,
    "hot_rank_chg": 11,
    "stock_cnt": 5776,
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
        "change_pct": -0.23
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 9,
    "hot_rank_chg": 48,
    "stock_cnt": 5776,
    "price": "5.08",
    "change": "-2.31",
    "market_id": "33",
    "circulate_market_value": "3610857900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.65
      },
      {
        "name": "影视",
        "change_pct": -1.0
      },
      {
        "name": "旅游",
        "change_pct": -1.22
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.14
      },
      {
        "name": "AI营销",
        "change_pct": -1.14
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.74
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.13
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.05
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 13,
    "hot_rank_chg": 1,
    "stock_cnt": 5776,
    "price": "8.55",
    "change": "-7.47",
    "market_id": "17",
    "circulate_market_value": "21533259000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.5
      },
      {
        "name": "工业大麻",
        "change_pct": -0.08
      },
      {
        "name": "中药",
        "change_pct": -0.84
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "保健品",
        "change_pct": -0.92
      },
      {
        "name": "民营医院",
        "change_pct": -0.95
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
        "name": "流感",
        "change_pct": -0.56
      },
      {
        "name": "振兴东北",
        "change_pct": -0.54
      },
      {
        "name": "食品",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 16,
    "hot_rank_chg": 147,
    "stock_cnt": 5776,
    "price": "5.83",
    "change": "1.22",
    "market_id": "33",
    "circulate_market_value": "6779399900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -1.0
      },
      {
        "name": "新疆概念",
        "change_pct": -0.66
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.59
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.47
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.13
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.05
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 26,
    "hot_rank_chg": -18,
    "stock_cnt": 5776,
    "price": "2.86",
    "change": "-10.06",
    "market_id": "33",
    "circulate_market_value": "6700088000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.23
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "人工智能",
        "change_pct": -0.65
      },
      {
        "name": "VR&AR",
        "change_pct": -0.47
      },
      {
        "name": "京津冀",
        "change_pct": -0.67
      },
      {
        "name": "装修装饰",
        "change_pct": 0.05
      },
      {
        "name": "住房租赁",
        "change_pct": -0.05
      },
      {
        "name": "破净股",
        "change_pct": -0.46
      },
      {
        "name": "数字经济",
        "change_pct": -0.77
      },
      {
        "name": "房产经纪",
        "change_pct": -3.27
      },
      {
        "name": "物业管理",
        "change_pct": -0.95
      },
      {
        "name": "低价股",
        "change_pct": -1.14
      },
      {
        "name": "华为产业链",
        "change_pct": -0.22
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 28,
    "hot_rank_chg": 2,
    "stock_cnt": 5776,
    "price": "5.69",
    "change": "7.36",
    "market_id": "17",
    "circulate_market_value": "6932764500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.47
      },
      {
        "name": "煤炭",
        "change_pct": -0.17
      },
      {
        "name": "有色金属",
        "change_pct": 0.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 30,
    "hot_rank_chg": -10,
    "stock_cnt": 5776,
    "price": "5.65",
    "change": "-2.75",
    "market_id": "33",
    "circulate_market_value": "6420660000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.2
      },
      {
        "name": "锂电池",
        "change_pct": 0.21
      },
      {
        "name": "石墨烯",
        "change_pct": 0.29
      },
      {
        "name": "新能源整车",
        "change_pct": -0.7
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.49
      },
      {
        "name": "汽车整车",
        "change_pct": -0.54
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.22
      },
      {
        "name": "白色家电",
        "change_pct": 0.3
      },
      {
        "name": "家电",
        "change_pct": -0.08
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.97
      },
      {
        "name": "热泵",
        "change_pct": 0.89
      },
      {
        "name": "轮边电机",
        "change_pct": 1.31
      },
      {
        "name": "超级电容",
        "change_pct": -0.07
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.41
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 31,
    "hot_rank_chg": 13,
    "stock_cnt": 5776,
    "price": "7.77",
    "change": "-3.00",
    "market_id": "33",
    "circulate_market_value": "12641741700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.5
      },
      {
        "name": "电竞",
        "change_pct": -0.47
      },
      {
        "name": "手游",
        "change_pct": -0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "人工智能",
        "change_pct": -0.65
      },
      {
        "name": "游戏",
        "change_pct": -0.46
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.77
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.47
      },
      {
        "name": "快手概念股",
        "change_pct": -1.64
      },
      {
        "name": "元宇宙",
        "change_pct": -1.1
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.14
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.28
      },
      {
        "name": "web3.0",
        "change_pct": -1.51
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.01
      },
      {
        "name": "数据要素",
        "change_pct": -0.85
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.99
      },
      {
        "name": "AI营销",
        "change_pct": -1.14
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.68
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.25
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.74
      },
      {
        "name": "人形机器人",
        "change_pct": 0.89
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.13
      },
      {
        "name": "多模态",
        "change_pct": -0.47
      },
      {
        "name": "AI视频",
        "change_pct": -1.43
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.05
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.52
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 32,
    "hot_rank_chg": -11,
    "stock_cnt": 5776,
    "price": "9.09",
    "change": "-9.46",
    "market_id": "17",
    "circulate_market_value": "4357018600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.84
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "医药商业",
        "change_pct": -0.98
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "流感",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 36,
    "hot_rank_chg": -2,
    "stock_cnt": 5776,
    "price": "4.97",
    "change": "-6.93",
    "market_id": "33",
    "circulate_market_value": "13183176300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "装修装饰",
        "change_pct": 0.05
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.76
      },
      {
        "name": "破净股",
        "change_pct": -0.46
      },
      {
        "name": "航天",
        "change_pct": -0.18
      },
      {
        "name": "旧改",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 38,
    "hot_rank_chg": 9,
    "stock_cnt": 5776,
    "price": "12.38",
    "change": "4.38",
    "market_id": "17",
    "circulate_market_value": "22149532000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.27
      },
      {
        "name": "纯碱",
        "change_pct": -1.21
      },
      {
        "name": "食品",
        "change_pct": -0.94
      },
      {
        "name": "土壤修复",
        "change_pct": -0.69
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.28
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.75
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 39,
    "hot_rank_chg": 52,
    "stock_cnt": 5776,
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
        "change_pct": -0.3
      },
      {
        "name": "旅游",
        "change_pct": -1.22
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.14
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 42,
    "hot_rank_chg": 35,
    "stock_cnt": 5776,
    "price": "7.99",
    "change": "-3.15",
    "market_id": "17",
    "circulate_market_value": "9098670800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.25
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "光伏",
        "change_pct": -0.3
      },
      {
        "name": "特高压",
        "change_pct": 0.25
      },
      {
        "name": "智能电网",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 45,
    "hot_rank_chg": 67,
    "stock_cnt": 5776,
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
        "change_pct": 0.25
      },
      {
        "name": "充电桩",
        "change_pct": 0.69
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.16
      },
      {
        "name": "军民融合",
        "change_pct": -0.23
      },
      {
        "name": "光伏",
        "change_pct": -0.3
      },
      {
        "name": "风电",
        "change_pct": 0.25
      },
      {
        "name": "军工",
        "change_pct": -0.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.22
      },
      {
        "name": "特高压",
        "change_pct": 0.25
      },
      {
        "name": "自贸区",
        "change_pct": -0.05
      },
      {
        "name": "海洋经济",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 46,
    "hot_rank_chg": -19,
    "stock_cnt": 5776,
    "price": "4.42",
    "change": "-9.98",
    "market_id": "17",
    "circulate_market_value": "5646991100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -2.28
      },
      {
        "name": "化肥",
        "change_pct": -1.41
      },
      {
        "name": "保健品",
        "change_pct": -0.92
      },
      {
        "name": "民营医院",
        "change_pct": -0.95
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "煤化工",
        "change_pct": -2.01
      },
      {
        "name": "食品",
        "change_pct": -0.94
      },
      {
        "name": "大农业",
        "change_pct": -1.07
      },
      {
        "name": "干细胞",
        "change_pct": -1.35
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 48,
    "hot_rank_chg": -20,
    "stock_cnt": 5776,
    "price": "3.69",
    "change": "-6.11",
    "market_id": "17",
    "circulate_market_value": "8163494200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.96
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.49
      },
      {
        "name": "光通信",
        "change_pct": 0.53
      },
      {
        "name": "林业",
        "change_pct": -2.49
      },
      {
        "name": "军民融合",
        "change_pct": -0.23
      },
      {
        "name": "军工",
        "change_pct": -0.33
      },
      {
        "name": "人造肉",
        "change_pct": -1.13
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 49,
    "hot_rank_chg": -16,
    "stock_cnt": 5776,
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
        "change_pct": -0.75
      },
      {
        "name": "锂电池",
        "change_pct": 0.21
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.22
      },
      {
        "name": "两轮车",
        "change_pct": -0.16
      },
      {
        "name": "珠宝饰品",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 50,
    "hot_rank_chg": -26,
    "stock_cnt": 5776,
    "price": "11.80",
    "change": "-8.24",
    "market_id": "17",
    "circulate_market_value": "4537662100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.07
      },
      {
        "name": "股权转让",
        "change_pct": -0.28
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "新疆概念",
        "change_pct": -0.66
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "流感",
        "change_pct": -0.56
      },
      {
        "name": "国资入股",
        "change_pct": -0.5
      },
      {
        "name": "减肥药",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 51,
    "hot_rank_chg": -1,
    "stock_cnt": 5776,
    "price": "4.68",
    "change": "-2.30",
    "market_id": "33",
    "circulate_market_value": "27400450000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.12
      },
      {
        "name": "人工智能",
        "change_pct": -0.65
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.49
      },
      {
        "name": "水利",
        "change_pct": -0.29
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.46
      },
      {
        "name": "大数据",
        "change_pct": -0.78
      },
      {
        "name": "园林",
        "change_pct": -0.86
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.03
      },
      {
        "name": "数字经济",
        "change_pct": -0.77
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.47
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.48
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.13
      },
      {
        "name": "快手概念股",
        "change_pct": -1.64
      },
      {
        "name": "IGBT",
        "change_pct": -0.13
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.14
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.01
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.99
      },
      {
        "name": "氮化镓",
        "change_pct": -0.04
      },
      {
        "name": "AI营销",
        "change_pct": -1.14
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.74
      },
      {
        "name": "多模态",
        "change_pct": -0.47
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.41
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.52
      },
      {
        "name": "区块链",
        "change_pct": -1.2
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 54,
    "hot_rank_chg": 11,
    "stock_cnt": 5776,
    "price": "10.68",
    "change": "3.09",
    "market_id": "17",
    "circulate_market_value": "6137124800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -1.17
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.16
      },
      {
        "name": "自贸区",
        "change_pct": -0.05
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.05
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 55,
    "hot_rank_chg": -16,
    "stock_cnt": 5776,
    "price": "4.25",
    "change": "-6.18",
    "market_id": "33",
    "circulate_market_value": "8936374400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.84
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "维生素",
        "change_pct": 0.65
      },
      {
        "name": "基因测序",
        "change_pct": -1.04
      },
      {
        "name": "民营医院",
        "change_pct": -0.95
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
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 57,
    "hot_rank_chg": -5,
    "stock_cnt": 5776,
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
        "change_pct": -0.72
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "教育",
        "change_pct": -0.94
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.59
      },
      {
        "name": "职业教育",
        "change_pct": -1.45
      },
      {
        "name": "在线教育",
        "change_pct": -1.52
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.01
      },
      {
        "name": "华为产业链",
        "change_pct": -0.22
      },
      {
        "name": "智谱AI",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 60,
    "hot_rank_chg": 10,
    "stock_cnt": 5776,
    "price": "11.41",
    "change": "-2.06",
    "market_id": "17",
    "circulate_market_value": "19798414000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 0.2
      },
      {
        "name": "核电",
        "change_pct": 0.25
      },
      {
        "name": "锂电池",
        "change_pct": 0.21
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.4
      },
      {
        "name": "PCB板",
        "change_pct": 0.73
      },
      {
        "name": "中科院系",
        "change_pct": -0.85
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.22
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.38
      },
      {
        "name": "固态电池",
        "change_pct": 0.19
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 63,
    "hot_rank_chg": -3,
    "stock_cnt": 5776,
    "price": "5.71",
    "change": "-1.38",
    "market_id": "33",
    "circulate_market_value": "201946340000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.63
      },
      {
        "name": "手机产业链",
        "change_pct": -0.12
      },
      {
        "name": "超高清视频",
        "change_pct": -0.75
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.48
      },
      {
        "name": "电竞",
        "change_pct": -0.47
      },
      {
        "name": "半导体",
        "change_pct": 0.03
      },
      {
        "name": "人工智能",
        "change_pct": -0.65
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.89
      },
      {
        "name": "VR&AR",
        "change_pct": -0.47
      },
      {
        "name": "OLED",
        "change_pct": -0.16
      },
      {
        "name": "京津冀",
        "change_pct": -0.67
      },
      {
        "name": "物联网",
        "change_pct": -0.83
      },
      {
        "name": "指纹识别",
        "change_pct": 0.11
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.13
      },
      {
        "name": "白马股",
        "change_pct": 0.3
      },
      {
        "name": "智能制造",
        "change_pct": 0.09
      },
      {
        "name": "小米概念股",
        "change_pct": 0.03
      },
      {
        "name": "国产芯片",
        "change_pct": -0.19
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.49
      },
      {
        "name": "全息概念",
        "change_pct": -0.58
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.48
      },
      {
        "name": "MicroLED",
        "change_pct": 0.55
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.07
      },
      {
        "name": "智能手表",
        "change_pct": -0.94
      },
      {
        "name": "MiniLED",
        "change_pct": 0.18
      },
      {
        "name": "传感器",
        "change_pct": -0.21
      },
      {
        "name": "大硅片",
        "change_pct": -0.44
      },
      {
        "name": "AI PC",
        "change_pct": 0.25
      },
      {
        "name": "华为产业链",
        "change_pct": -0.22
      },
      {
        "name": "回购",
        "change_pct": 0.08
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.91
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.25
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.2
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 65,
    "hot_rank_chg": 44,
    "stock_cnt": 5776,
    "price": "5.45",
    "change": "1.87",
    "market_id": "17",
    "circulate_market_value": "3048291500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.16
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.72
      },
      {
        "name": "游戏",
        "change_pct": -0.46
      },
      {
        "name": "影视",
        "change_pct": -1.0
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.13
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 66,
    "hot_rank_chg": 5,
    "stock_cnt": 5776,
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
        "change_pct": -0.25
      },
      {
        "name": "有机硅",
        "change_pct": 0.06
      },
      {
        "name": "装修装饰",
        "change_pct": 0.05
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.76
      },
      {
        "name": "光伏",
        "change_pct": -0.3
      },
      {
        "name": "船舶",
        "change_pct": 0.63
      },
      {
        "name": "固态电池",
        "change_pct": 0.19
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.5
      },
      {
        "name": "旧改",
        "change_pct": -0.17
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.17
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.41
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 67,
    "hot_rank_chg": 32,
    "stock_cnt": 5776,
    "price": "11.59",
    "change": "7.81",
    "market_id": "33",
    "circulate_market_value": "26917493000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 1.92
      },
      {
        "name": "有色 · 铜",
        "change_pct": 0.86
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.48
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.87
      },
      {
        "name": "有色 · 锌",
        "change_pct": 1.47
      },
      {
        "name": "有色金属",
        "change_pct": 0.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      },
      {
        "name": "白银",
        "change_pct": 2.83
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 70,
    "hot_rank_chg": 171,
    "stock_cnt": 5776,
    "price": "6.87",
    "change": "5.37",
    "market_id": "33",
    "circulate_market_value": "22855089000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.09
      },
      {
        "name": "核电",
        "change_pct": 0.25
      },
      {
        "name": "5G",
        "change_pct": -0.11
      },
      {
        "name": "一带一路",
        "change_pct": -0.25
      },
      {
        "name": "充电桩",
        "change_pct": 0.69
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.05
      },
      {
        "name": "风电",
        "change_pct": 0.25
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.22
      },
      {
        "name": "储能",
        "change_pct": 0.23
      },
      {
        "name": "特高压",
        "change_pct": 0.25
      },
      {
        "name": "智能电网",
        "change_pct": -0.05
      },
      {
        "name": "海洋经济",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 73,
    "hot_rank_chg": -47,
    "stock_cnt": 5776,
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
        "change_pct": -0.53
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.83
      },
      {
        "name": "农垦",
        "change_pct": -0.21
      },
      {
        "name": "棉花",
        "change_pct": -2.47
      },
      {
        "name": "新疆概念",
        "change_pct": -0.66
      },
      {
        "name": "风电",
        "change_pct": 0.25
      },
      {
        "name": "大农业",
        "change_pct": -1.07
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 77,
    "hot_rank_chg": -36,
    "stock_cnt": 5776,
    "price": "6.91",
    "change": "-2.95",
    "market_id": "33",
    "circulate_market_value": "4454424000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.25
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "装修装饰",
        "change_pct": 0.05
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.76
      },
      {
        "name": "家具家居",
        "change_pct": -0.77
      },
      {
        "name": "智能制造",
        "change_pct": 0.09
      },
      {
        "name": "3D打印",
        "change_pct": -0.17
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.89
      },
      {
        "name": "旧改",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 79,
    "hot_rank_chg": -28,
    "stock_cnt": 5776,
    "price": "11.61",
    "change": "-7.27",
    "market_id": "33",
    "circulate_market_value": "10835863900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.14
      },
      {
        "name": "强势人气股",
        "change_pct": -2.61
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.83
      },
      {
        "name": "新疆概念",
        "change_pct": -0.66
      },
      {
        "name": "光伏",
        "change_pct": -0.3
      },
      {
        "name": "风电",
        "change_pct": 0.25
      },
      {
        "name": "储能",
        "change_pct": 0.23
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 83,
    "hot_rank_chg": 19,
    "stock_cnt": 5776,
    "price": "7.03",
    "change": "5.08",
    "market_id": "33",
    "circulate_market_value": "6230340500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -0.53
      },
      {
        "name": "土地流转",
        "change_pct": 0.36
      },
      {
        "name": "海南概念",
        "change_pct": -0.56
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.04
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.46
      },
      {
        "name": "大农业",
        "change_pct": -1.07
      },
      {
        "name": "水产养殖",
        "change_pct": -1.91
      },
      {
        "name": "自贸区",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 86,
    "hot_rank_chg": -23,
    "stock_cnt": 5776,
    "price": "12.63",
    "change": "-4.03",
    "market_id": "33",
    "circulate_market_value": "11313122000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.28
      },
      {
        "name": "期货概念",
        "change_pct": -0.64
      },
      {
        "name": "券商",
        "change_pct": 0.51
      },
      {
        "name": "大金融",
        "change_pct": -0.13
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.28
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 87,
    "hot_rank_chg": -23,
    "stock_cnt": 5776,
    "price": "8.08",
    "change": "-3.69",
    "market_id": "33",
    "circulate_market_value": "5880344400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.11
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.76
      },
      {
        "name": "风电",
        "change_pct": 0.25
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.03
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.79
      },
      {
        "name": "建筑节能",
        "change_pct": -0.85
      },
      {
        "name": "旧改",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 90,
    "hot_rank_chg": -15,
    "stock_cnt": 5776,
    "price": "10.55",
    "change": "-4.44",
    "market_id": "33",
    "circulate_market_value": "8909717500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.29
      },
      {
        "name": "大飞机",
        "change_pct": 0.08
      },
      {
        "name": "北斗导航",
        "change_pct": -1.08
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.38
      },
      {
        "name": "军民融合",
        "change_pct": -0.23
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.45
      },
      {
        "name": "军工",
        "change_pct": -0.33
      },
      {
        "name": "碳纤维",
        "change_pct": -0.43
      },
      {
        "name": "无人机",
        "change_pct": -0.24
      },
      {
        "name": "航天",
        "change_pct": -0.18
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.62
      },
      {
        "name": "低空经济",
        "change_pct": -0.22
      },
      {
        "name": "海洋经济",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 91,
    "hot_rank_chg": 5,
    "stock_cnt": 5776,
    "price": "9.38",
    "change": "-4.38",
    "market_id": "33",
    "circulate_market_value": "10641958000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.53
      },
      {
        "name": "足球",
        "change_pct": -0.74
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.63
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.77
      },
      {
        "name": "传媒",
        "change_pct": -1.19
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.01
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.99
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.29
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.13
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 93,
    "hot_rank_chg": 273,
    "stock_cnt": 5776,
    "price": "5.15",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "8051079300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "无人驾驶",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.2
      },
      {
        "name": "共享经济",
        "change_pct": -0.21
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.49
      },
      {
        "name": "旅游",
        "change_pct": -1.22
      },
      {
        "name": "物业管理",
        "change_pct": -0.95
      }
    ]
  },
  {
    "code": "000796",
    "name": "凯撒旅业",
    "hot_rank": 99,
    "hot_rank_chg": 244,
    "stock_cnt": 5776,
    "price": "4.26",
    "change": "-2.96",
    "market_id": "33",
    "circulate_market_value": "5669075200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.53
      },
      {
        "name": "金融科技",
        "change_pct": -0.92
      },
      {
        "name": "旅游",
        "change_pct": -1.22
      },
      {
        "name": "海南概念",
        "change_pct": -0.56
      },
      {
        "name": "人民币升值受益",
        "change_pct": -0.5
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.04
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.46
      },
      {
        "name": "餐饮",
        "change_pct": -1.18
      },
      {
        "name": "免税店概念",
        "change_pct": 0.93
      },
      {
        "name": "邮轮游艇",
        "change_pct": 0.07
      },
      {
        "name": "自贸区",
        "change_pct": -0.05
      },
      {
        "name": "饮料",
        "change_pct": -1.4
      },
      {
        "name": "服务消费",
        "change_pct": -0.38
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600869", "name": "远东股份", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5776, "price": "21.05", "change": "7.95", "market_id": "17", "circulate_market_value": "46717375000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5776, "price": "12.67", "change": "2.18", "market_id": "17", "circulate_market_value": "8131393400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.82}, {"name": "农业种植", "change_pct": -0.53}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "湖南国企改革", "change_pct": 0.87}, {"name": "乡村振兴", "change_pct": -0.79}, {"name": "休闲食品", "change_pct": -1.15}, {"name": "食品", "change_pct": -0.94}, {"name": "食品安全", "change_pct": -0.16}, {"name": "社区团购", "change_pct": -1.35}, {"name": "大农业", "change_pct": -1.07}, {"name": "预制菜", "change_pct": -1.25}, {"name": "人造肉", "change_pct": -1.13}, {"name": "国企改革", "change_pct": -0.42}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5776, "price": "19.20", "change": "-9.09", "market_id": "33", "circulate_market_value": "8771525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 4, "hot_rank_chg": 11, "stock_cnt": 5776, "price": "12.21", "change": "10.00", "market_id": "17", "circulate_market_value": "8131860000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "连锁零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.23}, {"name": "强势人气股", "change_pct": -2.61}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 5, "hot_rank_chg": 2, "stock_cnt": 5776, "price": "39.25", "change": "5.45", "market_id": "17", "circulate_market_value": "27136493000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5776, "price": "17.33", "change": "-10.02", "market_id": "17", "circulate_market_value": "11789940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600967", "name": "内蒙一机", "hot_rank": 7, "hot_rank_chg": 22, "stock_cnt": 5776, "price": "13.56", "change": "1.12", "market_id": "17", "circulate_market_value": "23076336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 8, "hot_rank_chg": 27, "stock_cnt": 5776, "price": "20.15", "change": "-1.80", "market_id": "33", "circulate_market_value": "20587254000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 9, "hot_rank_chg": 48, "stock_cnt": 5776, "price": "5.08", "change": "-2.31", "market_id": "33", "circulate_market_value": "3610857900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.65}, {"name": "影视", "change_pct": -1.0}, {"name": "旅游", "change_pct": -1.22}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "AI营销", "change_pct": -1.14}, {"name": "AI大模型/智能体", "change_pct": -0.74}, {"name": "短剧/互动影游", "change_pct": -1.13}, {"name": "IP经济/谷子经济", "change_pct": -1.05}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5776, "price": "15.92", "change": "7.93", "market_id": "17", "circulate_market_value": "20445715000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003005", "name": "竞业达", "hot_rank": 11, "hot_rank_chg": 35, "stock_cnt": 5776, "price": "20.53", "change": "2.65", "market_id": "33", "circulate_market_value": "2755016700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 12, "hot_rank_chg": 193, "stock_cnt": 5776, "price": "13.89", "change": "9.98", "market_id": "17", "circulate_market_value": "69297470000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "重整撤回"}, {"code": "600664", "name": "哈药股份", "hot_rank": 13, "hot_rank_chg": 1, "stock_cnt": 5776, "price": "8.55", "change": "-7.47", "market_id": "17", "circulate_market_value": "21533259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.5}, {"name": "工业大麻", "change_pct": -0.08}, {"name": "中药", "change_pct": -0.84}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "保健品", "change_pct": -0.92}, {"name": "民营医院", "change_pct": -0.95}, {"name": "医药", "change_pct": -0.48}, {"name": "化学原料药", "change_pct": -0.47}, {"name": "流感", "change_pct": -0.56}, {"name": "振兴东北", "change_pct": -0.54}, {"name": "食品", "change_pct": -0.94}]}, {"code": "601606", "name": "长城军工", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5776, "price": "34.69", "change": "-5.27", "market_id": "17", "circulate_market_value": "25123483000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 15, "hot_rank_chg": -6, "stock_cnt": 5776, "price": "42.63", "change": "-3.40", "market_id": "17", "circulate_market_value": "169308760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 16, "hot_rank_chg": 147, "stock_cnt": 5776, "price": "5.83", "change": "1.22", "market_id": "33", "circulate_market_value": "6779399900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.0}, {"name": "新疆概念", "change_pct": -0.66}, {"name": "阿里巴巴概念股", "change_pct": -0.59}, {"name": "腾讯概念股", "change_pct": -0.47}, {"name": "短剧/互动影游", "change_pct": -1.13}, {"name": "IP经济/谷子经济", "change_pct": -1.05}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5776, "price": "65.29", "change": "-2.41", "market_id": "17", "circulate_market_value": "160198560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 18, "hot_rank_chg": 13, "stock_cnt": 5776, "price": "14.07", "change": "6.03", "market_id": "33", "circulate_market_value": "9287678100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 19, "hot_rank_chg": -13, "stock_cnt": 5776, "price": "550.45", "change": "0.81", "market_id": "17", "circulate_market_value": "16561785000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 20, "hot_rank_chg": 29, "stock_cnt": 5776, "price": "86.35", "change": "0.77", "market_id": "33", "circulate_market_value": "126668168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 22, "hot_rank_chg": 1, "stock_cnt": 5776, "price": "39.65", "change": "-0.45", "market_id": "33", "circulate_market_value": "30031509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 23, "hot_rank_chg": -5, "stock_cnt": 5776, "price": "28.08", "change": "-10.00", "market_id": "17", "circulate_market_value": "11260080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 24, "hot_rank_chg": 30, "stock_cnt": 5776, "price": "38.13", "change": "0.37", "market_id": "33", "circulate_market_value": "109054571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 25, "hot_rank_chg": -14, "stock_cnt": 5776, "price": "13.05", "change": "-3.40", "market_id": "33", "circulate_market_value": "7929462500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 26, "hot_rank_chg": -18, "stock_cnt": 5776, "price": "2.86", "change": "-10.06", "market_id": "33", "circulate_market_value": "6700088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.23}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "人工智能", "change_pct": -0.65}, {"name": "VR&AR", "change_pct": -0.47}, {"name": "京津冀", "change_pct": -0.67}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "住房租赁", "change_pct": -0.05}, {"name": "破净股", "change_pct": -0.46}, {"name": "数字经济", "change_pct": -0.77}, {"name": "房产经纪", "change_pct": -3.27}, {"name": "物业管理", "change_pct": -0.95}, {"name": "低价股", "change_pct": -1.14}, {"name": "华为产业链", "change_pct": -0.22}, {"name": "AI大模型/智能体", "change_pct": -0.74}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 28, "hot_rank_chg": 2, "stock_cnt": 5776, "price": "5.69", "change": "7.36", "market_id": "17", "circulate_market_value": "6932764500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.47}, {"name": "煤炭", "change_pct": -0.17}, {"name": "有色金属", "change_pct": 0.4}, {"name": "国企改革", "change_pct": -0.42}, {"name": "河南国企改革", "change_pct": 0.16}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 29, "hot_rank_chg": -13, "stock_cnt": 5776, "price": "30.03", "change": "-10.01", "market_id": "17", "circulate_market_value": "7275368100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002418", "name": "康盛股份", "hot_rank": 30, "hot_rank_chg": -10, "stock_cnt": 5776, "price": "5.65", "change": "-2.75", "market_id": "33", "circulate_market_value": "6420660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.2}, {"name": "锂电池", "change_pct": 0.21}, {"name": "石墨烯", "change_pct": 0.29}, {"name": "新能源整车", "change_pct": -0.7}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "汽车整车", "change_pct": -0.54}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "白色家电", "change_pct": 0.3}, {"name": "家电", "change_pct": -0.08}, {"name": "汽车热管理", "change_pct": 0.97}, {"name": "热泵", "change_pct": 0.89}, {"name": "轮边电机", "change_pct": 1.31}, {"name": "超级电容", "change_pct": -0.07}, {"name": "液冷服务器", "change_pct": 2.41}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 31, "hot_rank_chg": 13, "stock_cnt": 5776, "price": "7.77", "change": "-3.00", "market_id": "33", "circulate_market_value": "12641741700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.5}, {"name": "电竞", "change_pct": -0.47}, {"name": "手游", "change_pct": -0.16}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "人工智能", "change_pct": -0.65}, {"name": "游戏", "change_pct": -0.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.77}, {"name": "腾讯概念股", "change_pct": -0.47}, {"name": "快手概念股", "change_pct": -1.64}, {"name": "元宇宙", "change_pct": -1.1}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "东数西算/算力", "change_pct": -0.28}, {"name": "web3.0", "change_pct": -1.51}, {"name": "AIGC概念", "change_pct": -1.01}, {"name": "数据要素", "change_pct": -0.85}, {"name": "字节跳动概念股", "change_pct": -0.99}, {"name": "AI营销", "change_pct": -1.14}, {"name": "ChatGPT", "change_pct": -0.68}, {"name": "智能眼镜/MR头显", "change_pct": -0.25}, {"name": "AI大模型/智能体", "change_pct": -0.74}, {"name": "人形机器人", "change_pct": 0.89}, {"name": "短剧/互动影游", "change_pct": -1.13}, {"name": "多模态", "change_pct": -0.47}, {"name": "AI视频", "change_pct": -1.43}, {"name": "IP经济/谷子经济", "change_pct": -1.05}, {"name": "小红书概念股", "change_pct": -1.52}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 32, "hot_rank_chg": -11, "stock_cnt": 5776, "price": "9.09", "change": "-9.46", "market_id": "17", "circulate_market_value": "4357018600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.84}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "医药商业", "change_pct": -0.98}, {"name": "医药", "change_pct": -0.48}, {"name": "流感", "change_pct": -0.56}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 33, "hot_rank_chg": -20, "stock_cnt": 5776, "price": "813.00", "change": "-1.14", "market_id": "33", "circulate_market_value": "902378780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 34, "hot_rank_chg": -15, "stock_cnt": 5776, "price": "27.76", "change": "-9.99", "market_id": "33", "circulate_market_value": "5804009800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 35, "hot_rank_chg": 7, "stock_cnt": 5776, "price": "143.19", "change": "-1.24", "market_id": "17", "circulate_market_value": "345338320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 36, "hot_rank_chg": -2, "stock_cnt": 5776, "price": "4.97", "change": "-6.93", "market_id": "33", "circulate_market_value": "13183176300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.61}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "破净股", "change_pct": -0.46}, {"name": "航天", "change_pct": -0.18}, {"name": "旧改", "change_pct": -0.17}]}, {"code": "000636", "name": "风华高科", "hot_rank": 37, "hot_rank_chg": 3, "stock_cnt": 5776, "price": "50.62", "change": "1.69", "market_id": "33", "circulate_market_value": "58085942000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 38, "hot_rank_chg": 9, "stock_cnt": 5776, "price": "12.38", "change": "4.38", "market_id": "17", "circulate_market_value": "22149532000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.27}, {"name": "纯碱", "change_pct": -1.21}, {"name": "食品", "change_pct": -0.94}, {"name": "土壤修复", "change_pct": -0.69}, {"name": "东数西算/算力", "change_pct": -0.28}, {"name": "OpenClaw概念", "change_pct": -0.75}, {"name": "DeepSeek概念股", "change_pct": -0.91}]}, {"code": "002059", "name": "云南旅游", "hot_rank": 39, "hot_rank_chg": 52, "stock_cnt": 5776, "price": "5.78", "change": "10.10", "market_id": "33", "circulate_market_value": "5724473000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "景区运营", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.3}, {"name": "旅游", "change_pct": -1.22}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "国企改革", "change_pct": -0.42}]}, {"code": "600371", "name": "万向德农", "hot_rank": 40, "hot_rank_chg": -18, "stock_cnt": 5776, "price": "13.08", "change": "-9.29", "market_id": "17", "circulate_market_value": "3826920200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603890", "name": "春秋电子", "hot_rank": 41, "hot_rank_chg": 33, "stock_cnt": 5776, "price": "19.64", "change": "0.10", "market_id": "17", "circulate_market_value": "9898879500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 42, "hot_rank_chg": 35, "stock_cnt": 5776, "price": "7.99", "change": "-3.15", "market_id": "17", "circulate_market_value": "9098670800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.25}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "光伏", "change_pct": -0.3}, {"name": "特高压", "change_pct": 0.25}, {"name": "智能电网", "change_pct": -0.05}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 43, "hot_rank_chg": -18, "stock_cnt": 5776, "price": "48.63", "change": "-3.59", "market_id": "17", "circulate_market_value": "52158854000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 44, "hot_rank_chg": -12, "stock_cnt": 5776, "price": "55.55", "change": "2.26", "market_id": "17", "circulate_market_value": "250143810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002300", "name": "太阳电缆", "hot_rank": 45, "hot_rank_chg": 67, "stock_cnt": 5776, "price": "8.39", "change": "9.96", "market_id": "33", "circulate_market_value": "6060028300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电网设备", "xgb_concepts": [{"name": "核电", "change_pct": 0.25}, {"name": "充电桩", "change_pct": 0.69}, {"name": "福建自贸/海西概念", "change_pct": 0.16}, {"name": "军民融合", "change_pct": -0.23}, {"name": "光伏", "change_pct": -0.3}, {"name": "风电", "change_pct": 0.25}, {"name": "军工", "change_pct": -0.33}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "特高压", "change_pct": 0.25}, {"name": "自贸区", "change_pct": -0.05}, {"name": "海洋经济", "change_pct": -0.47}]}, {"code": "600227", "name": "赤天化", "hot_rank": 46, "hot_rank_chg": -19, "stock_cnt": 5776, "price": "4.42", "change": "-9.98", "market_id": "17", "circulate_market_value": "5646991100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -2.28}, {"name": "化肥", "change_pct": -1.41}, {"name": "保健品", "change_pct": -0.92}, {"name": "民营医院", "change_pct": -0.95}, {"name": "医药", "change_pct": -0.48}, {"name": "煤化工", "change_pct": -2.01}, {"name": "食品", "change_pct": -0.94}, {"name": "大农业", "change_pct": -1.07}, {"name": "干细胞", "change_pct": -1.35}, {"name": "阿尔茨海默病", "change_pct": -0.5}]}, {"code": "601138", "name": "工业富联", "hot_rank": 47, "hot_rank_chg": 42, "stock_cnt": 5776, "price": "63.20", "change": "2.27", "market_id": "17", "circulate_market_value": "1254146630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 48, "hot_rank_chg": -20, "stock_cnt": 5776, "price": "3.69", "change": "-6.11", "market_id": "17", "circulate_market_value": "8163494200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.96}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "光通信", "change_pct": 0.53}, {"name": "林业", "change_pct": -2.49}, {"name": "军民融合", "change_pct": -0.23}, {"name": "军工", "change_pct": -0.33}, {"name": "人造肉", "change_pct": -1.13}]}, {"code": "000017", "name": "深中华A", "hot_rank": 49, "hot_rank_chg": -16, "stock_cnt": 5776, "price": "10.58", "change": "-9.96", "market_id": "33", "circulate_market_value": "4663896200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.75}, {"name": "锂电池", "change_pct": 0.21}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "两轮车", "change_pct": -0.16}, {"name": "珠宝饰品", "change_pct": -0.55}]}, {"code": "600721", "name": "百花医药", "hot_rank": 50, "hot_rank_chg": -26, "stock_cnt": 5776, "price": "11.80", "change": "-8.24", "market_id": "17", "circulate_market_value": "4537662100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.07}, {"name": "股权转让", "change_pct": -0.28}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "新疆概念", "change_pct": -0.66}, {"name": "医药", "change_pct": -0.48}, {"name": "流感", "change_pct": -0.56}, {"name": "国资入股", "change_pct": -0.5}, {"name": "减肥药", "change_pct": 0.53}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 51, "hot_rank_chg": -1, "stock_cnt": 5776, "price": "4.68", "change": "-2.30", "market_id": "33", "circulate_market_value": "27400450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.12}, {"name": "人工智能", "change_pct": -0.65}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "水利", "change_pct": -0.29}, {"name": "直播/短视频", "change_pct": -1.46}, {"name": "大数据", "change_pct": -0.78}, {"name": "园林", "change_pct": -0.86}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "数字经济", "change_pct": -0.77}, {"name": "腾讯概念股", "change_pct": -0.47}, {"name": "理想汽车概念股", "change_pct": 0.48}, {"name": "第三代半导体", "change_pct": 0.13}, {"name": "快手概念股", "change_pct": -1.64}, {"name": "IGBT", "change_pct": -0.13}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "AIGC概念", "change_pct": -1.01}, {"name": "字节跳动概念股", "change_pct": -0.99}, {"name": "氮化镓", "change_pct": -0.04}, {"name": "AI营销", "change_pct": -1.14}, {"name": "AI大模型/智能体", "change_pct": -0.74}, {"name": "多模态", "change_pct": -0.47}, {"name": "液冷服务器", "change_pct": 2.41}, {"name": "小红书概念股", "change_pct": -1.52}, {"name": "区块链", "change_pct": -1.2}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 52, "hot_rank_chg": 26, "stock_cnt": 5776, "price": "14.14", "change": "10.04", "market_id": "17", "circulate_market_value": "6284444500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AI漫剧"}, {"code": "002297", "name": "博云新材", "hot_rank": 53, "hot_rank_chg": 8, "stock_cnt": 5776, "price": "22.00", "change": "10.00", "market_id": "33", "circulate_market_value": "12608306000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "军工材料"}, {"code": "601566", "name": "九牧王", "hot_rank": 54, "hot_rank_chg": 11, "stock_cnt": 5776, "price": "10.68", "change": "3.09", "market_id": "17", "circulate_market_value": "6137124800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -1.17}, {"name": "福建自贸/海西概念", "change_pct": 0.16}, {"name": "自贸区", "change_pct": -0.05}, {"name": "IP经济/谷子经济", "change_pct": -1.05}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 55, "hot_rank_chg": -16, "stock_cnt": 5776, "price": "4.25", "change": "-6.18", "market_id": "33", "circulate_market_value": "8936374400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.84}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "维生素", "change_pct": 0.65}, {"name": "基因测序", "change_pct": -1.04}, {"name": "民营医院", "change_pct": -0.95}, {"name": "医药", "change_pct": -0.48}, {"name": "化学原料药", "change_pct": -0.47}, {"name": "PD-1抑制剂", "change_pct": -0.13}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 56, "hot_rank_chg": -8, "stock_cnt": 5776, "price": "21.06", "change": "-1.86", "market_id": "33", "circulate_market_value": "24776433000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 57, "hot_rank_chg": -5, "stock_cnt": 5776, "price": "10.80", "change": "-10.00", "market_id": "33", "circulate_market_value": "3072401400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -0.72}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "教育", "change_pct": -0.94}, {"name": "阿里巴巴概念股", "change_pct": -0.59}, {"name": "职业教育", "change_pct": -1.45}, {"name": "在线教育", "change_pct": -1.52}, {"name": "华为鸿蒙", "change_pct": -1.01}, {"name": "华为产业链", "change_pct": -0.22}, {"name": "智谱AI", "change_pct": -0.67}]}, {"code": "002837", "name": "英维克", "hot_rank": 58, "hot_rank_chg": -13, "stock_cnt": 5776, "price": "68.49", "change": "3.41", "market_id": "33", "circulate_market_value": "77615614000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 59, "hot_rank_chg": 0, "stock_cnt": 5776, "price": "34.68", "change": "2.91", "market_id": "33", "circulate_market_value": "37486247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 60, "hot_rank_chg": 10, "stock_cnt": 5776, "price": "11.41", "change": "-2.06", "market_id": "17", "circulate_market_value": "19798414000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 0.2}, {"name": "核电", "change_pct": 0.25}, {"name": "锂电池", "change_pct": 0.21}, {"name": "铜箔/覆铜板", "change_pct": -0.4}, {"name": "PCB板", "change_pct": 0.73}, {"name": "中科院系", "change_pct": -0.85}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "宁德时代概念股", "change_pct": 0.38}, {"name": "固态电池", "change_pct": 0.19}, {"name": "PET复合铜箔", "change_pct": -0.03}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 61, "hot_rank_chg": 152, "stock_cnt": 5776, "price": "186.31", "change": "3.51", "market_id": "17", "circulate_market_value": "51344870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 62, "hot_rank_chg": 55, "stock_cnt": 5776, "price": "18.16", "change": "3.06", "market_id": "33", "circulate_market_value": "10642633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 63, "hot_rank_chg": -3, "stock_cnt": 5776, "price": "5.71", "change": "-1.38", "market_id": "33", "circulate_market_value": "201946340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.63}, {"name": "手机产业链", "change_pct": -0.12}, {"name": "超高清视频", "change_pct": -0.75}, {"name": "苹果产业链", "change_pct": 0.48}, {"name": "电竞", "change_pct": -0.47}, {"name": "半导体", "change_pct": 0.03}, {"name": "人工智能", "change_pct": -0.65}, {"name": "互联网医疗", "change_pct": -0.89}, {"name": "VR&AR", "change_pct": -0.47}, {"name": "OLED", "change_pct": -0.16}, {"name": "京津冀", "change_pct": -0.67}, {"name": "物联网", "change_pct": -0.83}, {"name": "指纹识别", "change_pct": 0.11}, {"name": "汽车零部件", "change_pct": 0.13}, {"name": "白马股", "change_pct": 0.3}, {"name": "智能制造", "change_pct": 0.09}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "国产芯片", "change_pct": -0.19}, {"name": "液晶面板/LCD", "change_pct": -0.49}, {"name": "全息概念", "change_pct": -0.58}, {"name": "理想汽车概念股", "change_pct": 0.48}, {"name": "MicroLED", "change_pct": 0.55}, {"name": "钙钛矿电池", "change_pct": -1.07}, {"name": "智能手表", "change_pct": -0.94}, {"name": "MiniLED", "change_pct": 0.18}, {"name": "传感器", "change_pct": -0.21}, {"name": "大硅片", "change_pct": -0.44}, {"name": "AI PC", "change_pct": 0.25}, {"name": "华为产业链", "change_pct": -0.22}, {"name": "回购", "change_pct": 0.08}, {"name": "光电共封装CPO", "change_pct": 0.91}, {"name": "智能眼镜/MR头显", "change_pct": -0.25}, {"name": "玻璃基板封装", "change_pct": 0.2}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 64, "hot_rank_chg": 2, "stock_cnt": 5776, "price": "17.07", "change": "0.12", "market_id": "33", "circulate_market_value": "27710151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 65, "hot_rank_chg": 44, "stock_cnt": 5776, "price": "5.45", "change": "1.87", "market_id": "17", "circulate_market_value": "3048291500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.16}, {"name": "ST摘帽", "change_pct": -0.72}, {"name": "游戏", "change_pct": -0.46}, {"name": "影视", "change_pct": -1.0}, {"name": "短剧/互动影游", "change_pct": -1.13}]}, {"code": "002909", "name": "集泰股份", "hot_rank": 66, "hot_rank_chg": 5, "stock_cnt": 5776, "price": "8.01", "change": "10.03", "market_id": "33", "circulate_market_value": "3047223300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.25}, {"name": "有机硅", "change_pct": 0.06}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "光伏", "change_pct": -0.3}, {"name": "船舶", "change_pct": 0.63}, {"name": "固态电池", "change_pct": 0.19}, {"name": "新型城镇化", "change_pct": -0.5}, {"name": "旧改", "change_pct": -0.17}, {"name": "飞行汽车/eVTOL", "change_pct": 0.17}, {"name": "液冷服务器", "change_pct": 2.41}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 67, "hot_rank_chg": 32, "stock_cnt": 5776, "price": "11.59", "change": "7.81", "market_id": "33", "circulate_market_value": "26917493000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 1.92}, {"name": "有色 · 铜", "change_pct": 0.86}, {"name": "有色 · 锑", "change_pct": 2.48}, {"name": "湖南国企改革", "change_pct": 0.87}, {"name": "有色 · 锌", "change_pct": 1.47}, {"name": "有色金属", "change_pct": 0.4}, {"name": "国企改革", "change_pct": -0.42}, {"name": "白银", "change_pct": 2.83}]}, {"code": "603629", "name": "利通电子", "hot_rank": 68, "hot_rank_chg": -31, "stock_cnt": 5776, "price": "111.61", "change": "-2.96", "market_id": "17", "circulate_market_value": "40260339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 69, "hot_rank_chg": 4, "stock_cnt": 5776, "price": "17.98", "change": "-1.37", "market_id": "17", "circulate_market_value": "37605928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002498", "name": "汉缆股份", "hot_rank": 70, "hot_rank_chg": 171, "stock_cnt": 5776, "price": "6.87", "change": "5.37", "market_id": "33", "circulate_market_value": "22855089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.09}, {"name": "核电", "change_pct": 0.25}, {"name": "5G", "change_pct": -0.11}, {"name": "一带一路", "change_pct": -0.25}, {"name": "充电桩", "change_pct": 0.69}, {"name": "氢能源/燃料电池", "change_pct": -0.05}, {"name": "风电", "change_pct": 0.25}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "储能", "change_pct": 0.23}, {"name": "特高压", "change_pct": 0.25}, {"name": "智能电网", "change_pct": -0.05}, {"name": "海洋经济", "change_pct": -0.47}]}, {"code": "600749", "name": "西藏旅游", "hot_rank": 71, "hot_rank_chg": 388, "stock_cnt": 5776, "price": "15.73", "change": "2.88", "market_id": "17", "circulate_market_value": "3570167600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 72, "hot_rank_chg": 35, "stock_cnt": 5776, "price": "23.29", "change": "-3.56", "market_id": "17", "circulate_market_value": "10221907300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 73, "hot_rank_chg": -47, "stock_cnt": 5776, "price": "6.06", "change": "-9.96", "market_id": "17", "circulate_market_value": "3523144400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.53}, {"name": "新疆国企改革", "change_pct": -0.83}, {"name": "农垦", "change_pct": -0.21}, {"name": "棉花", "change_pct": -2.47}, {"name": "新疆概念", "change_pct": -0.66}, {"name": "风电", "change_pct": 0.25}, {"name": "大农业", "change_pct": -1.07}, {"name": "国企改革", "change_pct": -0.42}]}, {"code": "600206", "name": "有研新材", "hot_rank": 74, "hot_rank_chg": 12, "stock_cnt": 5776, "price": "47.25", "change": "-2.09", "market_id": "17", "circulate_market_value": "39999645000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 75, "hot_rank_chg": -32, "stock_cnt": 5776, "price": "14.26", "change": "10.03", "market_id": "17", "circulate_market_value": "5967911500.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "女性健康"}, {"code": "300364", "name": "中文在线", "hot_rank": 76, "hot_rank_chg": 48, "stock_cnt": 5776, "price": "25.07", "change": "-4.60", "market_id": "33", "circulate_market_value": "16573418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002084", "name": "海鸥住工", "hot_rank": 77, "hot_rank_chg": -36, "stock_cnt": 5776, "price": "6.91", "change": "-2.95", "market_id": "33", "circulate_market_value": "4454424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.25}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "家具家居", "change_pct": -0.77}, {"name": "智能制造", "change_pct": 0.09}, {"name": "3D打印", "change_pct": -0.17}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.89}, {"name": "旧改", "change_pct": -0.17}]}, {"code": "002384", "name": "东山精密", "hot_rank": 78, "hot_rank_chg": -9, "stock_cnt": 5776, "price": "179.16", "change": "-2.33", "market_id": "33", "circulate_market_value": "248373400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 79, "hot_rank_chg": -28, "stock_cnt": 5776, "price": "11.61", "change": "-7.27", "market_id": "33", "circulate_market_value": "10835863900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.14}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "新疆国企改革", "change_pct": -0.83}, {"name": "新疆概念", "change_pct": -0.66}, {"name": "光伏", "change_pct": -0.3}, {"name": "风电", "change_pct": 0.25}, {"name": "储能", "change_pct": 0.23}, {"name": "国企改革", "change_pct": -0.42}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 80, "hot_rank_chg": 39, "stock_cnt": 5776, "price": "13.57", "change": "1.04", "market_id": "17", "circulate_market_value": "19984632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 81, "hot_rank_chg": -14, "stock_cnt": 5776, "price": "383.20", "change": "-1.46", "market_id": "17", "circulate_market_value": "257019260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 82, "hot_rank_chg": -27, "stock_cnt": 5776, "price": "393.46", "change": "-3.52", "market_id": "17", "circulate_market_value": "159877870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 83, "hot_rank_chg": 19, "stock_cnt": 5776, "price": "7.03", "change": "5.08", "market_id": "33", "circulate_market_value": "6230340500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.53}, {"name": "土地流转", "change_pct": 0.36}, {"name": "海南概念", "change_pct": -0.56}, {"name": "自由贸易港", "change_pct": 0.04}, {"name": "海南自由贸易港", "change_pct": -0.46}, {"name": "大农业", "change_pct": -1.07}, {"name": "水产养殖", "change_pct": -1.91}, {"name": "自贸区", "change_pct": -0.05}]}, {"code": "003018", "name": "金富科技", "hot_rank": 84, "hot_rank_chg": 90, "stock_cnt": 5776, "price": "56.43", "change": "10.00", "market_id": "33", "circulate_market_value": "16054987000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷散热"}, {"code": "600584", "name": "长电科技", "hot_rank": 85, "hot_rank_chg": 5, "stock_cnt": 5776, "price": "71.27", "change": "-0.06", "market_id": "17", "circulate_market_value": "127531576000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000712", "name": "锦龙股份", "hot_rank": 86, "hot_rank_chg": -23, "stock_cnt": 5776, "price": "12.63", "change": "-4.03", "market_id": "33", "circulate_market_value": "11313122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.28}, {"name": "期货概念", "change_pct": -0.64}, {"name": "券商", "change_pct": 0.51}, {"name": "大金融", "change_pct": -0.13}, {"name": "东数西算/算力", "change_pct": -0.28}]}, {"code": "002165", "name": "红宝丽", "hot_rank": 87, "hot_rank_chg": -23, "stock_cnt": 5776, "price": "8.08", "change": "-3.69", "market_id": "33", "circulate_market_value": "5880344400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.11}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "风电", "change_pct": 0.25}, {"name": "环氧丙烷", "change_pct": 0.03}, {"name": "乡村振兴", "change_pct": -0.79}, {"name": "建筑节能", "change_pct": -0.85}, {"name": "旧改", "change_pct": -0.17}]}, {"code": "300502", "name": "新易盛", "hot_rank": 88, "hot_rank_chg": -9, "stock_cnt": 5776, "price": "384.76", "change": "-0.50", "market_id": "33", "circulate_market_value": "482582600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 89, "hot_rank_chg": -1, "stock_cnt": 5776, "price": "32.91", "change": "-2.17", "market_id": "17", "circulate_market_value": "112320173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 90, "hot_rank_chg": -15, "stock_cnt": 5776, "price": "10.55", "change": "-4.44", "market_id": "33", "circulate_market_value": "8909717500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.29}, {"name": "大飞机", "change_pct": 0.08}, {"name": "北斗导航", "change_pct": -1.08}, {"name": "高铁轨交", "change_pct": -0.38}, {"name": "军民融合", "change_pct": -0.23}, {"name": "磁悬浮", "change_pct": -0.45}, {"name": "军工", "change_pct": -0.33}, {"name": "碳纤维", "change_pct": -0.43}, {"name": "无人机", "change_pct": -0.24}, {"name": "航天", "change_pct": -0.18}, {"name": "卫星互联网", "change_pct": -0.62}, {"name": "低空经济", "change_pct": -0.22}, {"name": "海洋经济", "change_pct": -0.47}]}, {"code": "002181", "name": "粤传媒", "hot_rank": 91, "hot_rank_chg": 5, "stock_cnt": 5776, "price": "9.38", "change": "-4.38", "market_id": "33", "circulate_market_value": "10641958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.53}, {"name": "足球", "change_pct": -0.74}, {"name": "粤港澳大湾区", "change_pct": -0.63}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.77}, {"name": "传媒", "change_pct": -1.19}, {"name": "AIGC概念", "change_pct": -1.01}, {"name": "字节跳动概念股", "change_pct": -0.99}, {"name": "国企改革", "change_pct": -0.42}, {"name": "网红/MCN", "change_pct": -1.29}, {"name": "短剧/互动影游", "change_pct": -1.13}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 92, "hot_rank_chg": -24, "stock_cnt": 5776, "price": "22.19", "change": "1.23", "market_id": "33", "circulate_market_value": "10037398000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 93, "hot_rank_chg": 273, "stock_cnt": 5776, "price": "5.15", "change": "10.04", "market_id": "17", "circulate_market_value": "8051079300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "无人驾驶", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.2}, {"name": "共享经济", "change_pct": -0.21}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "旅游", "change_pct": -1.22}, {"name": "物业管理", "change_pct": -0.95}]}, {"code": "603118", "name": "共进股份", "hot_rank": 94, "hot_rank_chg": 51, "stock_cnt": 5776, "price": "17.19", "change": "-2.44", "market_id": "17", "circulate_market_value": "13533281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 95, "hot_rank_chg": 28, "stock_cnt": 5776, "price": "13.19", "change": "-2.66", "market_id": "33", "circulate_market_value": "45873900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 96, "hot_rank_chg": -58, "stock_cnt": 5776, "price": "17.11", "change": "-9.99", "market_id": "33", "circulate_market_value": "4212947900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603270", "name": "金帝股份", "hot_rank": 97, "hot_rank_chg": 54, "stock_cnt": 5776, "price": "34.95", "change": "10.01", "market_id": "17", "circulate_market_value": "2471547500.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "液冷散热"}, {"code": "002428", "name": "云南锗业", "hot_rank": 98, "hot_rank_chg": 6, "stock_cnt": 5776, "price": "91.60", "change": "-0.68", "market_id": "33", "circulate_market_value": "59815487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000796", "name": "凯撒旅业", "hot_rank": 99, "hot_rank_chg": 244, "stock_cnt": 5776, "price": "4.26", "change": "-2.96", "market_id": "33", "circulate_market_value": "5669075200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.53}, {"name": "金融科技", "change_pct": -0.92}, {"name": "旅游", "change_pct": -1.22}, {"name": "海南概念", "change_pct": -0.56}, {"name": "人民币升值受益", "change_pct": -0.5}, {"name": "自由贸易港", "change_pct": 0.04}, {"name": "海南自由贸易港", "change_pct": -0.46}, {"name": "餐饮", "change_pct": -1.18}, {"name": "免税店概念", "change_pct": 0.93}, {"name": "邮轮游艇", "change_pct": 0.07}, {"name": "自贸区", "change_pct": -0.05}, {"name": "饮料", "change_pct": -1.4}, {"name": "服务消费", "change_pct": -0.38}]}, {"code": "603269", "name": "海鸥股份", "hot_rank": 100, "hot_rank_chg": -64, "stock_cnt": 5776, "price": "28.04", "change": "2.30", "market_id": "17", "circulate_market_value": "12111751500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};