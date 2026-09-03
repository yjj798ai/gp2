const UPDATE_TIME = "2026-09-03 22:11";
const THS_HOT = [
  {
    "name": "液冷服务器",
    "rise": 1.84,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "培育钻石",
    "rise": 3.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "AI应用",
    "rise": -0.87,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -0.2,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续115天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "充电桩",
    "rise": 0.24,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "智能汽车ETF",
    "code": "885461"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.69,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续285天上榜",
    "rankChg": -1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "黄金概念",
    "rise": 0.51,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "数字货币",
    "rise": -1.31,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "无人驾驶",
    "rise": -0.32,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "智能汽车ETF",
    "code": "885736"
  },
  {
    "name": "PCB概念",
    "rise": 0.26,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "云计算",
    "rise": -0.7,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885362"
  },
  {
    "name": "人形机器人",
    "rise": 0.45,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "粮食概念",
    "rise": -1.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885995"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.24,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "军工",
    "rise": -0.34,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "互联网金融",
    "rise": -0.77,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "专精特新",
    "rise": -0.52,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "专精特新ETF",
    "code": "885929"
  },
  {
    "name": "算力租赁",
    "rise": -0.49,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续149天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "脑机接口",
    "rise": -0.34,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "存储芯片",
    "rise": -0.24,
    "rate": 0,
    "tag": "",
    "hotTag": "连续238天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  }
];
const THS_EVENTS = [
  {
    "title": "950亿美元服务器积压订单背后 液冷从故事变成生意",
    "desc": "",
    "heat": 427542,
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
    "heat": 394841,
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
    "heat": 185906,
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
    "heat": 137861,
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
    "heat": 101617,
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
    "heat": 50010,
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
    "title": "芒果超媒落地首部上星AIGC长剧 《后西游记》打开新空间",
    "desc": "",
    "heat": 36106,
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
    "title": "智谱入驻天猫，开网店卖Token",
    "desc": "",
    "heat": 30395,
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
    "title": "全球首个多模态世界模型发布",
    "desc": "",
    "heat": 24871,
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
    "heat": 12258,
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
    "heat": 10541,
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
    "hot_rank": 3,
    "hot_rank_chg": 1,
    "stock_cnt": 5839,
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
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 5,
    "hot_rank_chg": 10,
    "stock_cnt": 5839,
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
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 9,
    "hot_rank_chg": -4,
    "stock_cnt": 5839,
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
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 12,
    "hot_rank_chg": -5,
    "stock_cnt": 5839,
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
    "code": "002328",
    "name": "新朋股份",
    "hot_rank": 17,
    "hot_rank_chg": 11,
    "stock_cnt": 5839,
    "price": "10.10",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "5763927500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "液冷机柜",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.25
      },
      {
        "name": "特斯拉",
        "change_pct": 0.2
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.49
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.13
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
        "name": "新能源车零部件",
        "change_pct": 0.61
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.41
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 19,
    "hot_rank_chg": 11,
    "stock_cnt": 5839,
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
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 20,
    "hot_rank_chg": 1,
    "stock_cnt": 5839,
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
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 23,
    "hot_rank_chg": 19,
    "stock_cnt": 5839,
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
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 24,
    "hot_rank_chg": -5,
    "stock_cnt": 5839,
    "price": "11.04",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "9593238700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.5
      },
      {
        "name": "快递物流",
        "change_pct": -0.52
      },
      {
        "name": "新零售",
        "change_pct": -0.23
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.16
      },
      {
        "name": "旅游",
        "change_pct": -1.22
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.59
      },
      {
        "name": "物业管理",
        "change_pct": -0.95
      },
      {
        "name": "免税店概念",
        "change_pct": 0.93
      },
      {
        "name": "自贸区",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 26,
    "hot_rank_chg": -9,
    "stock_cnt": 5839,
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
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 28,
    "hot_rank_chg": 6,
    "stock_cnt": 5839,
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
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 37,
    "hot_rank_chg": -12,
    "stock_cnt": 5839,
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
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 40,
    "hot_rank_chg": -5,
    "stock_cnt": 5839,
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
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 43,
    "hot_rank_chg": -16,
    "stock_cnt": 5839,
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
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 46,
    "hot_rank_chg": 0,
    "stock_cnt": 5839,
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
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 49,
    "hot_rank_chg": 43,
    "stock_cnt": 5839,
    "price": "3.96",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "7709783900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "玉米制种",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.5
      },
      {
        "name": "农业种植",
        "change_pct": -0.53
      },
      {
        "name": "土地流转",
        "change_pct": 0.36
      },
      {
        "name": "农垦",
        "change_pct": -0.21
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.79
      },
      {
        "name": "食品",
        "change_pct": -0.94
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -0.81
      },
      {
        "name": "大农业",
        "change_pct": -1.07
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 53,
    "hot_rank_chg": 10,
    "stock_cnt": 5839,
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
    "code": "600185",
    "name": "珠免集团",
    "hot_rank": 54,
    "hot_rank_chg": -6,
    "stock_cnt": 5839,
    "price": "5.28",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "9952830600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "免税零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.5
      },
      {
        "name": "资产重组",
        "change_pct": -0.37
      },
      {
        "name": "股权转让",
        "change_pct": -0.28
      },
      {
        "name": "房地产",
        "change_pct": -0.28
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.63
      },
      {
        "name": "横琴新区",
        "change_pct": -0.12
      },
      {
        "name": "免税店概念",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 55,
    "hot_rank_chg": 9,
    "stock_cnt": 5839,
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
        "change_pct": -0.24
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
    "code": "300830",
    "name": "金现代",
    "hot_rank": 57,
    "hot_rank_chg": 51,
    "stock_cnt": 5839,
    "price": "10.09",
    "change": "19.98",
    "market_id": "33",
    "circulate_market_value": "3399671800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI低代码",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.09
      },
      {
        "name": "国产软件",
        "change_pct": -0.73
      },
      {
        "name": "金融科技",
        "change_pct": -0.92
      },
      {
        "name": "人工智能",
        "change_pct": -0.65
      },
      {
        "name": "军民融合",
        "change_pct": -0.23
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
        "name": "机器视觉",
        "change_pct": 0.33
      },
      {
        "name": "智能制造",
        "change_pct": 0.09
      },
      {
        "name": "工业互联网",
        "change_pct": -0.28
      },
      {
        "name": "数字经济",
        "change_pct": -0.77
      },
      {
        "name": "虚拟电厂",
        "change_pct": 0.17
      },
      {
        "name": "信创",
        "change_pct": -0.66
      },
      {
        "name": "职业教育",
        "change_pct": -1.45
      },
      {
        "name": "智慧政务",
        "change_pct": -0.83
      },
      {
        "name": "特高压",
        "change_pct": 0.25
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.01
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.59
      },
      {
        "name": "远程办公",
        "change_pct": -0.6
      },
      {
        "name": "AI营销",
        "change_pct": -1.14
      },
      {
        "name": "华为产业链",
        "change_pct": -0.22
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.74
      },
      {
        "name": "智能电网",
        "change_pct": -0.05
      },
      {
        "name": "多模态",
        "change_pct": -0.47
      },
      {
        "name": "智谱AI",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 58,
    "hot_rank_chg": -38,
    "stock_cnt": 5839,
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
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 63,
    "hot_rank_chg": 2,
    "stock_cnt": 5839,
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
        "change_pct": 0.09
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
        "change_pct": -0.24
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.2
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 67,
    "hot_rank_chg": 11,
    "stock_cnt": 5839,
    "price": "10.79",
    "change": "7.04",
    "market_id": "33",
    "circulate_market_value": "5014972900.00",
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
        "name": "云计算数据中心",
        "change_pct": 0.49
      },
      {
        "name": "水利",
        "change_pct": -0.29
      },
      {
        "name": "大数据",
        "change_pct": -0.78
      },
      {
        "name": "海绵城市",
        "change_pct": -0.23
      },
      {
        "name": "风电",
        "change_pct": 0.25
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.79
      },
      {
        "name": "数字经济",
        "change_pct": -0.77
      },
      {
        "name": "大基建",
        "change_pct": -0.46
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.28
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.5
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      },
      {
        "name": "旧改",
        "change_pct": -0.17
      },
      {
        "name": "西部大开发",
        "change_pct": -0.11
      },
      {
        "name": "低空经济",
        "change_pct": -0.22
      },
      {
        "name": "房屋检测",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 70,
    "hot_rank_chg": -8,
    "stock_cnt": 5839,
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
    "code": "600657",
    "name": "信达地产",
    "hot_rank": 71,
    "hot_rank_chg": 6,
    "stock_cnt": 5839,
    "price": "3.36",
    "change": "10.16",
    "market_id": "17",
    "circulate_market_value": "9582312100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "房地产",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.71
      },
      {
        "name": "房地产",
        "change_pct": -0.28
      },
      {
        "name": "京津冀",
        "change_pct": -0.67
      },
      {
        "name": "破净股",
        "change_pct": -0.46
      },
      {
        "name": "物业管理",
        "change_pct": -0.95
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 73,
    "hot_rank_chg": -7,
    "stock_cnt": 5839,
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
    "code": "002171",
    "name": "楚江新材",
    "hot_rank": 74,
    "hot_rank_chg": 15,
    "stock_cnt": 5839,
    "price": "10.50",
    "change": "5.32",
    "market_id": "33",
    "circulate_market_value": "16960035000.00",
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
        "name": "通用航空",
        "change_pct": 0.7
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
        "name": "有色 · 铜",
        "change_pct": 0.86
      },
      {
        "name": "大飞机",
        "change_pct": 0.08
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
        "name": "铜箔/覆铜板",
        "change_pct": -0.4
      },
      {
        "name": "固废处理",
        "change_pct": -0.31
      },
      {
        "name": "有色金属",
        "change_pct": 0.4
      },
      {
        "name": "可燃冰",
        "change_pct": -0.71
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
        "name": "环保",
        "change_pct": -0.33
      },
      {
        "name": "机器人",
        "change_pct": 0.36
      },
      {
        "name": "碳纤维",
        "change_pct": -0.43
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
        "name": "第三代半导体",
        "change_pct": 0.13
      },
      {
        "name": "固态电池",
        "change_pct": 0.19
      },
      {
        "name": "碳基材料",
        "change_pct": 0.12
      },
      {
        "name": "动力电池回收",
        "change_pct": 0.14
      },
      {
        "name": "培育钻石",
        "change_pct": 4.56
      },
      {
        "name": "钒电池",
        "change_pct": -0.33
      },
      {
        "name": "航天",
        "change_pct": -0.18
      },
      {
        "name": "氮化镓",
        "change_pct": -0.04
      },
      {
        "name": "头盔",
        "change_pct": -0.37
      },
      {
        "name": "碳化硅",
        "change_pct": 0.45
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 76,
    "hot_rank_chg": -25,
    "stock_cnt": 5839,
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
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 78,
    "hot_rank_chg": -11,
    "stock_cnt": 5839,
    "price": "9.49",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "6725816400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "季戊四醇",
    "xgb_concepts": []
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 81,
    "hot_rank_chg": 1,
    "stock_cnt": 5839,
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
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 86,
    "hot_rank_chg": -26,
    "stock_cnt": 5839,
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
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 87,
    "hot_rank_chg": -13,
    "stock_cnt": 5839,
    "price": "5.53",
    "change": "6.55",
    "market_id": "33",
    "circulate_market_value": "12162616600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 0.36
      },
      {
        "name": "轮胎",
        "change_pct": -0.76
      },
      {
        "name": "冷链",
        "change_pct": -0.11
      },
      {
        "name": "机器人",
        "change_pct": 0.36
      },
      {
        "name": "智能制造",
        "change_pct": 0.09
      },
      {
        "name": "工业母机",
        "change_pct": 0.54
      },
      {
        "name": "减速器",
        "change_pct": 1.92
      },
      {
        "name": "头盔",
        "change_pct": -0.37
      },
      {
        "name": "人形机器人",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 88,
    "hot_rank_chg": -20,
    "stock_cnt": 5839,
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
    "code": "000813",
    "name": "德展健康",
    "hot_rank": 91,
    "hot_rank_chg": 58,
    "stock_cnt": 5839,
    "price": "3.61",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "7568899400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -0.08
      },
      {
        "name": "创新药",
        "change_pct": -0.07
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
        "name": "民营医院",
        "change_pct": -0.95
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "疫苗",
        "change_pct": 0.14
      },
      {
        "name": "化学原料药",
        "change_pct": -0.47
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.14
      },
      {
        "name": "国企改革",
        "change_pct": -0.42
      },
      {
        "name": "医美",
        "change_pct": -0.63
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.6
      },
      {
        "name": "化妆品",
        "change_pct": -0.38
      },
      {
        "name": "国资入股",
        "change_pct": -0.5
      },
      {
        "name": "饮料",
        "change_pct": -1.4
      },
      {
        "name": "减肥药",
        "change_pct": 0.53
      },
      {
        "name": "合成生物",
        "change_pct": -0.73
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 92,
    "hot_rank_chg": 22,
    "stock_cnt": 5839,
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
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 97,
    "hot_rank_chg": -28,
    "stock_cnt": 5839,
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
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 98,
    "hot_rank_chg": 12,
    "stock_cnt": 5839,
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
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 100,
    "hot_rank_chg": -16,
    "stock_cnt": 5839,
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
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600869", "name": "远东股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5839, "price": "21.05", "change": "7.95", "market_id": "17", "circulate_market_value": "46717375000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "12.67", "change": "2.18", "market_id": "17", "circulate_market_value": "8131393400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.82}, {"name": "农业种植", "change_pct": -0.53}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "湖南国企改革", "change_pct": 0.87}, {"name": "乡村振兴", "change_pct": -0.79}, {"name": "休闲食品", "change_pct": -1.15}, {"name": "食品", "change_pct": -0.94}, {"name": "食品安全", "change_pct": -0.16}, {"name": "社区团购", "change_pct": -1.35}, {"name": "大农业", "change_pct": -1.07}, {"name": "预制菜", "change_pct": -1.25}, {"name": "人造肉", "change_pct": -1.13}, {"name": "国企改革", "change_pct": -0.42}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "15.92", "change": "7.93", "market_id": "17", "circulate_market_value": "20445715000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002909", "name": "集泰股份", "hot_rank": 5, "hot_rank_chg": 10, "stock_cnt": 5839, "price": "8.01", "change": "10.03", "market_id": "33", "circulate_market_value": "3047223300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.25}, {"name": "有机硅", "change_pct": 0.06}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "光伏", "change_pct": -0.3}, {"name": "船舶", "change_pct": 0.63}, {"name": "固态电池", "change_pct": 0.19}, {"name": "新型城镇化", "change_pct": -0.5}, {"name": "旧改", "change_pct": -0.17}, {"name": "飞行汽车/eVTOL", "change_pct": 0.17}, {"name": "液冷服务器", "change_pct": 2.41}]}, {"code": "600479", "name": "千金药业", "hot_rank": 6, "hot_rank_chg": 8, "stock_cnt": 5839, "price": "14.26", "change": "10.03", "market_id": "17", "circulate_market_value": "5967911500.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "女性健康"}, {"code": "003040", "name": "楚天龙", "hot_rank": 8, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "19.20", "change": "-9.09", "market_id": "33", "circulate_market_value": "8771525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 9, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "12.21", "change": "10.00", "market_id": "17", "circulate_market_value": "8131860000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "连锁零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.23}, {"name": "强势人气股", "change_pct": -2.61}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "550.45", "change": "0.81", "market_id": "17", "circulate_market_value": "16561785000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 11, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "13.89", "change": "9.98", "market_id": "17", "circulate_market_value": "69297470000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "重整撤回"}, {"code": "600664", "name": "哈药股份", "hot_rank": 12, "hot_rank_chg": -5, "stock_cnt": 5839, "price": "8.55", "change": "-7.47", "market_id": "17", "circulate_market_value": "21533259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.5}, {"name": "工业大麻", "change_pct": -0.08}, {"name": "中药", "change_pct": -0.84}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "保健品", "change_pct": -0.92}, {"name": "民营医院", "change_pct": -0.95}, {"name": "医药", "change_pct": -0.48}, {"name": "化学原料药", "change_pct": -0.47}, {"name": "流感", "change_pct": -0.56}, {"name": "振兴东北", "change_pct": -0.54}, {"name": "食品", "change_pct": -0.94}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5839, "price": "39.25", "change": "5.45", "market_id": "17", "circulate_market_value": "27136493000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 14, "hot_rank_chg": 2, "stock_cnt": 5839, "price": "22.00", "change": "10.00", "market_id": "33", "circulate_market_value": "12608306000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "军工材料"}, {"code": "605577", "name": "龙版传媒", "hot_rank": 15, "hot_rank_chg": 3, "stock_cnt": 5839, "price": "14.14", "change": "10.04", "market_id": "17", "circulate_market_value": "6284444500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AI漫剧"}, {"code": "600722", "name": "金牛化工", "hot_rank": 16, "hot_rank_chg": -8, "stock_cnt": 5839, "price": "17.33", "change": "-10.02", "market_id": "17", "circulate_market_value": "11789940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002328", "name": "新朋股份", "hot_rank": 17, "hot_rank_chg": 11, "stock_cnt": 5839, "price": "10.10", "change": "10.02", "market_id": "33", "circulate_market_value": "5763927500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷机柜", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.25}, {"name": "特斯拉", "change_pct": 0.2}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "汽车零部件", "change_pct": 0.13}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "储能", "change_pct": 0.23}, {"name": "新能源车零部件", "change_pct": 0.61}, {"name": "液冷服务器", "change_pct": 2.41}]}, {"code": "002837", "name": "英维克", "hot_rank": 18, "hot_rank_chg": 5, "stock_cnt": 5839, "price": "68.49", "change": "3.41", "market_id": "33", "circulate_market_value": "77615614000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002059", "name": "云南旅游", "hot_rank": 19, "hot_rank_chg": 11, "stock_cnt": 5839, "price": "5.78", "change": "10.10", "market_id": "33", "circulate_market_value": "5724473000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "景区运营", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.3}, {"name": "旅游", "change_pct": -1.22}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "国企改革", "change_pct": -0.42}]}, {"code": "600611", "name": "大众交通", "hot_rank": 20, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "5.15", "change": "10.04", "market_id": "17", "circulate_market_value": "8051079300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "无人驾驶", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.2}, {"name": "共享经济", "change_pct": -0.21}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "旅游", "change_pct": -1.22}, {"name": "物业管理", "change_pct": -0.95}]}, {"code": "603270", "name": "金帝股份", "hot_rank": 21, "hot_rank_chg": 16, "stock_cnt": 5839, "price": "34.95", "change": "10.01", "market_id": "17", "circulate_market_value": "2471547500.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "液冷散热"}, {"code": "002639", "name": "雪人集团", "hot_rank": 22, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "14.07", "change": "6.03", "market_id": "33", "circulate_market_value": "9287678100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002300", "name": "太阳电缆", "hot_rank": 23, "hot_rank_chg": 19, "stock_cnt": 5839, "price": "8.39", "change": "9.96", "market_id": "33", "circulate_market_value": "6060028300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电网设备", "xgb_concepts": [{"name": "核电", "change_pct": 0.25}, {"name": "充电桩", "change_pct": 0.69}, {"name": "福建自贸/海西概念", "change_pct": 0.16}, {"name": "军民融合", "change_pct": -0.23}, {"name": "光伏", "change_pct": -0.3}, {"name": "风电", "change_pct": 0.25}, {"name": "军工", "change_pct": -0.33}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "特高压", "change_pct": 0.25}, {"name": "自贸区", "change_pct": -0.05}, {"name": "海洋经济", "change_pct": -0.47}]}, {"code": "600693", "name": "东百集团", "hot_rank": 24, "hot_rank_chg": -5, "stock_cnt": 5839, "price": "11.04", "change": "9.96", "market_id": "17", "circulate_market_value": "9593238700.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.5}, {"name": "快递物流", "change_pct": -0.52}, {"name": "新零售", "change_pct": -0.23}, {"name": "福建自贸/海西概念", "change_pct": 0.16}, {"name": "旅游", "change_pct": -1.22}, {"name": "阿里巴巴概念股", "change_pct": -0.59}, {"name": "物业管理", "change_pct": -0.95}, {"name": "免税店概念", "change_pct": 0.93}, {"name": "自贸区", "change_pct": -0.05}]}, {"code": "003018", "name": "金富科技", "hot_rank": 25, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "56.43", "change": "10.00", "market_id": "33", "circulate_market_value": "16054987000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷散热"}, {"code": "600186", "name": "莲花控股", "hot_rank": 26, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "12.38", "change": "4.38", "market_id": "17", "circulate_market_value": "22149532000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.27}, {"name": "纯碱", "change_pct": -1.21}, {"name": "食品", "change_pct": -0.94}, {"name": "土壤修复", "change_pct": -0.69}, {"name": "东数西算/算力", "change_pct": -0.28}, {"name": "OpenClaw概念", "change_pct": -0.75}, {"name": "DeepSeek概念股", "change_pct": -0.91}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 27, "hot_rank_chg": 4, "stock_cnt": 5839, "price": "18.16", "change": "3.06", "market_id": "33", "circulate_market_value": "10642633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 28, "hot_rank_chg": 6, "stock_cnt": 5839, "price": "11.59", "change": "7.81", "market_id": "33", "circulate_market_value": "26917493000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 1.92}, {"name": "有色 · 铜", "change_pct": 0.86}, {"name": "有色 · 锑", "change_pct": 2.48}, {"name": "湖南国企改革", "change_pct": 0.87}, {"name": "有色 · 锌", "change_pct": 1.47}, {"name": "有色金属", "change_pct": 0.4}, {"name": "国企改革", "change_pct": -0.42}, {"name": "白银", "change_pct": 2.83}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 29, "hot_rank_chg": 4, "stock_cnt": 5839, "price": "55.55", "change": "2.26", "market_id": "17", "circulate_market_value": "250143810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 30, "hot_rank_chg": 20, "stock_cnt": 5839, "price": "15.58", "change": "10.03", "market_id": "33", "circulate_market_value": "7940040900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "002104", "name": "恒宝股份", "hot_rank": 31, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "13.05", "change": "-3.40", "market_id": "33", "circulate_market_value": "7929462500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603757", "name": "大元泵业", "hot_rank": 32, "hot_rank_chg": 8, "stock_cnt": 5839, "price": "79.44", "change": "10.00", "market_id": "17", "circulate_market_value": "14819314000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷泵"}, {"code": "600176", "name": "中国巨石", "hot_rank": 33, "hot_rank_chg": 5, "stock_cnt": 5839, "price": "42.63", "change": "-3.40", "market_id": "17", "circulate_market_value": "169308760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301489", "name": "思泉新材", "hot_rank": 34, "hot_rank_chg": 38, "stock_cnt": 5839, "price": "140.40", "change": "20.00", "market_id": "33", "circulate_market_value": "9769139700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷散热"}, {"code": "600487", "name": "亨通光电", "hot_rank": 35, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "65.29", "change": "-2.41", "market_id": "17", "circulate_market_value": "160198560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 36, "hot_rank_chg": 5, "stock_cnt": 5839, "price": "86.35", "change": "0.77", "market_id": "33", "circulate_market_value": "126668168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002418", "name": "康盛股份", "hot_rank": 37, "hot_rank_chg": -12, "stock_cnt": 5839, "price": "5.65", "change": "-2.75", "market_id": "33", "circulate_market_value": "6420660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.2}, {"name": "锂电池", "change_pct": 0.21}, {"name": "石墨烯", "change_pct": 0.29}, {"name": "新能源整车", "change_pct": -0.7}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "汽车整车", "change_pct": -0.54}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "白色家电", "change_pct": 0.3}, {"name": "家电", "change_pct": -0.08}, {"name": "汽车热管理", "change_pct": 0.97}, {"name": "热泵", "change_pct": 0.89}, {"name": "轮边电机", "change_pct": 1.31}, {"name": "超级电容", "change_pct": -0.07}, {"name": "液冷服务器", "change_pct": 2.41}]}, {"code": "003005", "name": "竞业达", "hot_rank": 38, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "20.53", "change": "2.65", "market_id": "33", "circulate_market_value": "2755016700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 39, "hot_rank_chg": -7, "stock_cnt": 5839, "price": "28.08", "change": "-10.00", "market_id": "17", "circulate_market_value": "11260080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5839, "price": "5.08", "change": "-2.31", "market_id": "33", "circulate_market_value": "3610857900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.65}, {"name": "影视", "change_pct": -1.0}, {"name": "旅游", "change_pct": -1.22}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "AI营销", "change_pct": -1.14}, {"name": "AI大模型/智能体", "change_pct": -0.74}, {"name": "短剧/互动影游", "change_pct": -1.13}, {"name": "IP经济/谷子经济", "change_pct": -1.05}]}, {"code": "601799", "name": "星宇股份", "hot_rank": 41, "hot_rank_chg": 18, "stock_cnt": 5839, "price": "74.88", "change": "-3.62", "market_id": "17", "circulate_market_value": "21391675000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 42, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "39.65", "change": "-0.45", "market_id": "33", "circulate_market_value": "30031509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 43, "hot_rank_chg": -16, "stock_cnt": 5839, "price": "2.86", "change": "-10.06", "market_id": "33", "circulate_market_value": "6700088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.23}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "人工智能", "change_pct": -0.65}, {"name": "VR&AR", "change_pct": -0.47}, {"name": "京津冀", "change_pct": -0.67}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "住房租赁", "change_pct": -0.05}, {"name": "破净股", "change_pct": -0.46}, {"name": "数字经济", "change_pct": -0.77}, {"name": "房产经纪", "change_pct": -3.27}, {"name": "物业管理", "change_pct": -0.95}, {"name": "低价股", "change_pct": -1.14}, {"name": "华为产业链", "change_pct": -0.22}, {"name": "AI大模型/智能体", "change_pct": -0.74}]}, {"code": "002407", "name": "多氟多", "hot_rank": 44, "hot_rank_chg": 3, "stock_cnt": 5839, "price": "34.68", "change": "2.91", "market_id": "33", "circulate_market_value": "37486247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 45, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "28.49", "change": "10.00", "market_id": "17", "circulate_market_value": "9598849400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "JH389"}, {"code": "002081", "name": "金螳螂", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5839, "price": "4.97", "change": "-6.93", "market_id": "33", "circulate_market_value": "13183176300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.61}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "破净股", "change_pct": -0.46}, {"name": "航天", "change_pct": -0.18}, {"name": "旧改", "change_pct": -0.17}]}, {"code": "600967", "name": "内蒙一机", "hot_rank": 47, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "13.56", "change": "1.12", "market_id": "17", "circulate_market_value": "23076336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 48, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "34.69", "change": "-5.27", "market_id": "17", "circulate_market_value": "25123483000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600108", "name": "亚盛集团", "hot_rank": 49, "hot_rank_chg": 43, "stock_cnt": 5839, "price": "3.96", "change": "10.00", "market_id": "17", "circulate_market_value": "7709783900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玉米制种", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.5}, {"name": "农业种植", "change_pct": -0.53}, {"name": "土地流转", "change_pct": 0.36}, {"name": "农垦", "change_pct": -0.21}, {"name": "乡村振兴", "change_pct": -0.79}, {"name": "食品", "change_pct": -0.94}, {"name": "甜味剂/代糖", "change_pct": -0.81}, {"name": "大农业", "change_pct": -1.07}, {"name": "蜜雪冰城概念股", "change_pct": -0.36}]}, {"code": "601138", "name": "工业富联", "hot_rank": 50, "hot_rank_chg": 21, "stock_cnt": 5839, "price": "63.20", "change": "2.27", "market_id": "17", "circulate_market_value": "1254146630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603989", "name": "艾华集团", "hot_rank": 51, "hot_rank_chg": 19, "stock_cnt": 5839, "price": "32.03", "change": "9.99", "market_id": "17", "circulate_market_value": "12772918900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLPC"}, {"code": "300308", "name": "中际旭创", "hot_rank": 52, "hot_rank_chg": -13, "stock_cnt": 5839, "price": "813.00", "change": "-1.14", "market_id": "33", "circulate_market_value": "902378780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 53, "hot_rank_chg": 10, "stock_cnt": 5839, "price": "10.58", "change": "-9.96", "market_id": "33", "circulate_market_value": "4663896200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.75}, {"name": "锂电池", "change_pct": 0.21}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "两轮车", "change_pct": -0.16}, {"name": "珠宝饰品", "change_pct": -0.55}]}, {"code": "600185", "name": "珠免集团", "hot_rank": 54, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "5.28", "change": "10.00", "market_id": "17", "circulate_market_value": "9952830600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "免税零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.5}, {"name": "资产重组", "change_pct": -0.37}, {"name": "股权转让", "change_pct": -0.28}, {"name": "房地产", "change_pct": -0.28}, {"name": "粤港澳大湾区", "change_pct": -0.63}, {"name": "横琴新区", "change_pct": -0.12}, {"name": "免税店概念", "change_pct": 0.93}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 55, "hot_rank_chg": 9, "stock_cnt": 5839, "price": "7.77", "change": "-3.00", "market_id": "33", "circulate_market_value": "12641741700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.5}, {"name": "电竞", "change_pct": -0.47}, {"name": "手游", "change_pct": -0.16}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "人工智能", "change_pct": -0.65}, {"name": "游戏", "change_pct": -0.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.77}, {"name": "腾讯概念股", "change_pct": -0.47}, {"name": "快手概念股", "change_pct": -1.64}, {"name": "元宇宙", "change_pct": -1.1}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "东数西算/算力", "change_pct": -0.28}, {"name": "web3.0", "change_pct": -1.51}, {"name": "AIGC概念", "change_pct": -1.01}, {"name": "数据要素", "change_pct": -0.85}, {"name": "字节跳动概念股", "change_pct": -0.99}, {"name": "AI营销", "change_pct": -1.14}, {"name": "ChatGPT", "change_pct": -0.68}, {"name": "智能眼镜/MR头显", "change_pct": -0.24}, {"name": "AI大模型/智能体", "change_pct": -0.74}, {"name": "人形机器人", "change_pct": 0.89}, {"name": "短剧/互动影游", "change_pct": -1.13}, {"name": "多模态", "change_pct": -0.47}, {"name": "AI视频", "change_pct": -1.43}, {"name": "IP经济/谷子经济", "change_pct": -1.05}, {"name": "小红书概念股", "change_pct": -1.52}]}, {"code": "001696", "name": "宗申动力", "hot_rank": 56, "hot_rank_chg": 0, "stock_cnt": 5839, "price": "17.04", "change": "5.18", "market_id": "33", "circulate_market_value": "15191390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300830", "name": "金现代", "hot_rank": 57, "hot_rank_chg": 51, "stock_cnt": 5839, "price": "10.09", "change": "19.98", "market_id": "33", "circulate_market_value": "3399671800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI低代码", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.09}, {"name": "国产软件", "change_pct": -0.73}, {"name": "金融科技", "change_pct": -0.92}, {"name": "人工智能", "change_pct": -0.65}, {"name": "军民融合", "change_pct": -0.23}, {"name": "风电", "change_pct": 0.25}, {"name": "军工", "change_pct": -0.33}, {"name": "机器视觉", "change_pct": 0.33}, {"name": "智能制造", "change_pct": 0.09}, {"name": "工业互联网", "change_pct": -0.28}, {"name": "数字经济", "change_pct": -0.77}, {"name": "虚拟电厂", "change_pct": 0.17}, {"name": "信创", "change_pct": -0.66}, {"name": "职业教育", "change_pct": -1.45}, {"name": "智慧政务", "change_pct": -0.83}, {"name": "特高压", "change_pct": 0.25}, {"name": "华为鸿蒙", "change_pct": -1.01}, {"name": "华为云·鲲鹏", "change_pct": -0.59}, {"name": "远程办公", "change_pct": -0.6}, {"name": "AI营销", "change_pct": -1.14}, {"name": "华为产业链", "change_pct": -0.22}, {"name": "AI大模型/智能体", "change_pct": -0.74}, {"name": "智能电网", "change_pct": -0.05}, {"name": "多模态", "change_pct": -0.47}, {"name": "智谱AI", "change_pct": -0.67}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 58, "hot_rank_chg": -38, "stock_cnt": 5839, "price": "5.69", "change": "7.36", "market_id": "17", "circulate_market_value": "6932764500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.47}, {"name": "煤炭", "change_pct": -0.17}, {"name": "有色金属", "change_pct": 0.4}, {"name": "国企改革", "change_pct": -0.42}, {"name": "河南国企改革", "change_pct": 0.16}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 59, "hot_rank_chg": -7, "stock_cnt": 5839, "price": "38.13", "change": "0.37", "market_id": "33", "circulate_market_value": "109054571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 60, "hot_rank_chg": -2, "stock_cnt": 5839, "price": "71.27", "change": "-0.06", "market_id": "17", "circulate_market_value": "127531576000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603728", "name": "鸣志电器", "hot_rank": 61, "hot_rank_chg": 46, "stock_cnt": 5839, "price": "53.35", "change": "10.00", "market_id": "17", "circulate_market_value": "22347381000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "600371", "name": "万向德农", "hot_rank": 62, "hot_rank_chg": -7, "stock_cnt": 5839, "price": "13.08", "change": "-9.29", "market_id": "17", "circulate_market_value": "3826920200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 63, "hot_rank_chg": 2, "stock_cnt": 5839, "price": "5.71", "change": "-1.38", "market_id": "33", "circulate_market_value": "201946340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.63}, {"name": "手机产业链", "change_pct": -0.12}, {"name": "超高清视频", "change_pct": -0.75}, {"name": "苹果产业链", "change_pct": 0.48}, {"name": "电竞", "change_pct": -0.47}, {"name": "半导体", "change_pct": 0.09}, {"name": "人工智能", "change_pct": -0.65}, {"name": "互联网医疗", "change_pct": -0.89}, {"name": "VR&AR", "change_pct": -0.47}, {"name": "OLED", "change_pct": -0.16}, {"name": "京津冀", "change_pct": -0.67}, {"name": "物联网", "change_pct": -0.83}, {"name": "指纹识别", "change_pct": 0.11}, {"name": "汽车零部件", "change_pct": 0.13}, {"name": "白马股", "change_pct": 0.3}, {"name": "智能制造", "change_pct": 0.09}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "国产芯片", "change_pct": -0.19}, {"name": "液晶面板/LCD", "change_pct": -0.49}, {"name": "全息概念", "change_pct": -0.58}, {"name": "理想汽车概念股", "change_pct": 0.48}, {"name": "MicroLED", "change_pct": 0.55}, {"name": "钙钛矿电池", "change_pct": -1.07}, {"name": "智能手表", "change_pct": -0.94}, {"name": "MiniLED", "change_pct": 0.18}, {"name": "传感器", "change_pct": -0.21}, {"name": "大硅片", "change_pct": -0.44}, {"name": "AI PC", "change_pct": 0.25}, {"name": "华为产业链", "change_pct": -0.22}, {"name": "回购", "change_pct": 0.08}, {"name": "光电共封装CPO", "change_pct": 0.91}, {"name": "智能眼镜/MR头显", "change_pct": -0.24}, {"name": "玻璃基板封装", "change_pct": 0.2}]}, {"code": "605580", "name": "恒盛能源", "hot_rank": 64, "hot_rank_chg": 38, "stock_cnt": 5839, "price": "20.43", "change": "10.02", "market_id": "17", "circulate_market_value": "5720400000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "培育钻石"}, {"code": "600737", "name": "中粮糖业", "hot_rank": 65, "hot_rank_chg": 78, "stock_cnt": 5839, "price": "15.51", "change": "3.06", "market_id": "17", "circulate_market_value": "33173536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 66, "hot_rank_chg": -12, "stock_cnt": 5839, "price": "27.76", "change": "-9.99", "market_id": "33", "circulate_market_value": "5804009800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 67, "hot_rank_chg": 11, "stock_cnt": 5839, "price": "10.79", "change": "7.04", "market_id": "33", "circulate_market_value": "5014972900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.25}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "水利", "change_pct": -0.29}, {"name": "大数据", "change_pct": -0.78}, {"name": "海绵城市", "change_pct": -0.23}, {"name": "风电", "change_pct": 0.25}, {"name": "乡村振兴", "change_pct": -0.79}, {"name": "数字经济", "change_pct": -0.77}, {"name": "大基建", "change_pct": -0.46}, {"name": "东数西算/算力", "change_pct": -0.28}, {"name": "新型城镇化", "change_pct": -0.5}, {"name": "国企改革", "change_pct": -0.42}, {"name": "旧改", "change_pct": -0.17}, {"name": "西部大开发", "change_pct": -0.11}, {"name": "低空经济", "change_pct": -0.22}, {"name": "房屋检测", "change_pct": -0.14}]}, {"code": "603269", "name": "海鸥股份", "hot_rank": 68, "hot_rank_chg": -11, "stock_cnt": 5839, "price": "28.04", "change": "2.30", "market_id": "17", "circulate_market_value": "12111751500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 69, "hot_rank_chg": -24, "stock_cnt": 5839, "price": "50.62", "change": "1.69", "market_id": "33", "circulate_market_value": "58085942000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 70, "hot_rank_chg": -8, "stock_cnt": 5839, "price": "3.69", "change": "-6.11", "market_id": "17", "circulate_market_value": "8163494200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.96}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "光通信", "change_pct": 0.53}, {"name": "林业", "change_pct": -2.49}, {"name": "军民融合", "change_pct": -0.23}, {"name": "军工", "change_pct": -0.33}, {"name": "人造肉", "change_pct": -1.13}]}, {"code": "600657", "name": "信达地产", "hot_rank": 71, "hot_rank_chg": 6, "stock_cnt": 5839, "price": "3.36", "change": "10.16", "market_id": "17", "circulate_market_value": "9582312100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "房地产", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.71}, {"name": "房地产", "change_pct": -0.28}, {"name": "京津冀", "change_pct": -0.67}, {"name": "破净股", "change_pct": -0.46}, {"name": "物业管理", "change_pct": -0.95}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 72, "hot_rank_chg": -19, "stock_cnt": 5839, "price": "20.15", "change": "-1.80", "market_id": "33", "circulate_market_value": "20587254000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 73, "hot_rank_chg": -7, "stock_cnt": 5839, "price": "4.42", "change": "-9.98", "market_id": "17", "circulate_market_value": "5646991100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -2.28}, {"name": "化肥", "change_pct": -1.41}, {"name": "保健品", "change_pct": -0.92}, {"name": "民营医院", "change_pct": -0.95}, {"name": "医药", "change_pct": -0.48}, {"name": "煤化工", "change_pct": -2.01}, {"name": "食品", "change_pct": -0.94}, {"name": "大农业", "change_pct": -1.07}, {"name": "干细胞", "change_pct": -1.35}, {"name": "阿尔茨海默病", "change_pct": -0.5}]}, {"code": "002171", "name": "楚江新材", "hot_rank": 74, "hot_rank_chg": 15, "stock_cnt": 5839, "price": "10.50", "change": "5.32", "market_id": "33", "circulate_market_value": "16960035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.14}, {"name": "通用航空", "change_pct": 0.7}, {"name": "锂电池", "change_pct": 0.21}, {"name": "石墨烯", "change_pct": 0.29}, {"name": "有色 · 铜", "change_pct": 0.86}, {"name": "大飞机", "change_pct": 0.08}, {"name": "军民融合", "change_pct": -0.23}, {"name": "磁悬浮", "change_pct": -0.45}, {"name": "铜箔/覆铜板", "change_pct": -0.4}, {"name": "固废处理", "change_pct": -0.31}, {"name": "有色金属", "change_pct": 0.4}, {"name": "可燃冰", "change_pct": -0.71}, {"name": "军工", "change_pct": -0.33}, {"name": "新能源汽车", "change_pct": 0.22}, {"name": "环保", "change_pct": -0.33}, {"name": "机器人", "change_pct": 0.36}, {"name": "碳纤维", "change_pct": -0.43}, {"name": "智能制造", "change_pct": 0.09}, {"name": "3D打印", "change_pct": -0.17}, {"name": "第三代半导体", "change_pct": 0.13}, {"name": "固态电池", "change_pct": 0.19}, {"name": "碳基材料", "change_pct": 0.12}, {"name": "动力电池回收", "change_pct": 0.14}, {"name": "培育钻石", "change_pct": 4.56}, {"name": "钒电池", "change_pct": -0.33}, {"name": "航天", "change_pct": -0.18}, {"name": "氮化镓", "change_pct": -0.04}, {"name": "头盔", "change_pct": -0.37}, {"name": "碳化硅", "change_pct": 0.45}]}, {"code": "002980", "name": "华盛昌", "hot_rank": 75, "hot_rank_chg": 8, "stock_cnt": 5839, "price": "106.66", "change": "10.00", "market_id": "33", "circulate_market_value": "10803252100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光通信测试"}, {"code": "600613", "name": "神奇制药", "hot_rank": 76, "hot_rank_chg": -25, "stock_cnt": 5839, "price": "9.09", "change": "-9.46", "market_id": "17", "circulate_market_value": "4357018600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.84}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "医药商业", "change_pct": -0.98}, {"name": "医药", "change_pct": -0.48}, {"name": "流感", "change_pct": -0.56}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 77, "hot_rank_chg": 23, "stock_cnt": 5839, "price": "33.31", "change": "1.09", "market_id": "17", "circulate_market_value": "686245730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600610", "name": "中毅达", "hot_rank": 78, "hot_rank_chg": -11, "stock_cnt": 5839, "price": "9.49", "change": "9.96", "market_id": "17", "circulate_market_value": "6725816400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "季戊四醇", "xgb_concepts": []}, {"code": "600183", "name": "生益科技", "hot_rank": 79, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "143.19", "change": "-1.24", "market_id": "17", "circulate_market_value": "345338320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 80, "hot_rank_chg": -19, "stock_cnt": 5839, "price": "30.03", "change": "-10.01", "market_id": "17", "circulate_market_value": "7275368100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 81, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "4.68", "change": "-2.30", "market_id": "33", "circulate_market_value": "27400450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.12}, {"name": "人工智能", "change_pct": -0.65}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "水利", "change_pct": -0.29}, {"name": "直播/短视频", "change_pct": -1.46}, {"name": "大数据", "change_pct": -0.78}, {"name": "园林", "change_pct": -0.86}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "数字经济", "change_pct": -0.77}, {"name": "腾讯概念股", "change_pct": -0.47}, {"name": "理想汽车概念股", "change_pct": 0.48}, {"name": "第三代半导体", "change_pct": 0.13}, {"name": "快手概念股", "change_pct": -1.64}, {"name": "IGBT", "change_pct": -0.13}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "AIGC概念", "change_pct": -1.01}, {"name": "字节跳动概念股", "change_pct": -0.99}, {"name": "氮化镓", "change_pct": -0.04}, {"name": "AI营销", "change_pct": -1.14}, {"name": "AI大模型/智能体", "change_pct": -0.74}, {"name": "多模态", "change_pct": -0.47}, {"name": "液冷服务器", "change_pct": 2.41}, {"name": "小红书概念股", "change_pct": -1.52}, {"name": "区块链", "change_pct": -1.2}]}, {"code": "603162", "name": "海通发展", "hot_rank": 82, "hot_rank_chg": 29, "stock_cnt": 5839, "price": "13.31", "change": "10.00", "market_id": "17", "circulate_market_value": "5622625500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "干散货航运"}, {"code": "002851", "name": "麦格米特", "hot_rank": 83, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "127.14", "change": "7.25", "market_id": "33", "circulate_market_value": "62513355000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603138", "name": "海量数据", "hot_rank": 84, "hot_rank_chg": 46, "stock_cnt": 5839, "price": "14.50", "change": "10.02", "market_id": "17", "circulate_market_value": "4180971300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "多模态数据库"}, {"code": "600378", "name": "昊华科技", "hot_rank": 85, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "48.63", "change": "-3.59", "market_id": "17", "circulate_market_value": "52158854000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 86, "hot_rank_chg": -26, "stock_cnt": 5839, "price": "11.80", "change": "-8.24", "market_id": "17", "circulate_market_value": "4537662100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.07}, {"name": "股权转让", "change_pct": -0.28}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "新疆概念", "change_pct": -0.66}, {"name": "医药", "change_pct": -0.48}, {"name": "流感", "change_pct": -0.56}, {"name": "国资入股", "change_pct": -0.5}, {"name": "减肥药", "change_pct": 0.53}]}, {"code": "002031", "name": "巨轮智能", "hot_rank": 87, "hot_rank_chg": -13, "stock_cnt": 5839, "price": "5.53", "change": "6.55", "market_id": "33", "circulate_market_value": "12162616600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": 0.36}, {"name": "轮胎", "change_pct": -0.76}, {"name": "冷链", "change_pct": -0.11}, {"name": "机器人", "change_pct": 0.36}, {"name": "智能制造", "change_pct": 0.09}, {"name": "工业母机", "change_pct": 0.54}, {"name": "减速器", "change_pct": 1.92}, {"name": "头盔", "change_pct": -0.37}, {"name": "人形机器人", "change_pct": 0.89}]}, {"code": "000712", "name": "锦龙股份", "hot_rank": 88, "hot_rank_chg": -20, "stock_cnt": 5839, "price": "12.63", "change": "-4.03", "market_id": "33", "circulate_market_value": "11313122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.28}, {"name": "期货概念", "change_pct": -0.64}, {"name": "券商", "change_pct": 0.51}, {"name": "大金融", "change_pct": -0.13}, {"name": "东数西算/算力", "change_pct": -0.28}]}, {"code": "002855", "name": "捷荣技术", "hot_rank": 89, "hot_rank_chg": 4, "stock_cnt": 5839, "price": "17.11", "change": "-9.99", "market_id": "33", "circulate_market_value": "4212947900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 90, "hot_rank_chg": 26, "stock_cnt": 5839, "price": "91.60", "change": "-0.68", "market_id": "33", "circulate_market_value": "59815487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000813", "name": "德展健康", "hot_rank": 91, "hot_rank_chg": 58, "stock_cnt": 5839, "price": "3.61", "change": "10.06", "market_id": "33", "circulate_market_value": "7568899400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "工业大麻", "change_pct": -0.08}, {"name": "创新药", "change_pct": -0.07}, {"name": "新疆国企改革", "change_pct": -0.83}, {"name": "新疆概念", "change_pct": -0.66}, {"name": "民营医院", "change_pct": -0.95}, {"name": "医药", "change_pct": -0.48}, {"name": "疫苗", "change_pct": 0.14}, {"name": "化学原料药", "change_pct": -0.47}, {"name": "长寿药NMN", "change_pct": -0.14}, {"name": "国企改革", "change_pct": -0.42}, {"name": "医美", "change_pct": -0.63}, {"name": "新冠病毒防治", "change_pct": -0.6}, {"name": "化妆品", "change_pct": -0.38}, {"name": "国资入股", "change_pct": -0.5}, {"name": "饮料", "change_pct": -1.4}, {"name": "减肥药", "change_pct": 0.53}, {"name": "合成生物", "change_pct": -0.73}]}, {"code": "600540", "name": "新赛股份", "hot_rank": 92, "hot_rank_chg": 22, "stock_cnt": 5839, "price": "6.06", "change": "-9.96", "market_id": "17", "circulate_market_value": "3523144400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.53}, {"name": "新疆国企改革", "change_pct": -0.83}, {"name": "农垦", "change_pct": -0.21}, {"name": "棉花", "change_pct": -2.47}, {"name": "新疆概念", "change_pct": -0.66}, {"name": "风电", "change_pct": 0.25}, {"name": "大农业", "change_pct": -1.07}, {"name": "国企改革", "change_pct": -0.42}]}, {"code": "600206", "name": "有研新材", "hot_rank": 93, "hot_rank_chg": 13, "stock_cnt": 5839, "price": "47.25", "change": "-2.09", "market_id": "17", "circulate_market_value": "39999645000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603090", "name": "宏盛股份", "hot_rank": 94, "hot_rank_chg": 26, "stock_cnt": 5839, "price": "44.35", "change": "9.99", "market_id": "17", "circulate_market_value": "4435000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷服务器"}, {"code": "002969", "name": "嘉美包装", "hot_rank": 95, "hot_rank_chg": 8, "stock_cnt": 5839, "price": "13.41", "change": "10.01", "market_id": "33", "circulate_market_value": "14653560000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "实控人变更（追觅）"}, {"code": "001330", "name": "博纳影业", "hot_rank": 97, "hot_rank_chg": -28, "stock_cnt": 5839, "price": "5.83", "change": "1.22", "market_id": "33", "circulate_market_value": "6779399900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.0}, {"name": "新疆概念", "change_pct": -0.66}, {"name": "阿里巴巴概念股", "change_pct": -0.59}, {"name": "腾讯概念股", "change_pct": -0.47}, {"name": "短剧/互动影游", "change_pct": -1.13}, {"name": "IP经济/谷子经济", "change_pct": -1.05}]}, {"code": "300189", "name": "神农种业", "hot_rank": 98, "hot_rank_chg": 12, "stock_cnt": 5839, "price": "7.03", "change": "5.08", "market_id": "33", "circulate_market_value": "6230340500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.53}, {"name": "土地流转", "change_pct": 0.36}, {"name": "海南概念", "change_pct": -0.56}, {"name": "自由贸易港", "change_pct": 0.04}, {"name": "海南自由贸易港", "change_pct": -0.46}, {"name": "大农业", "change_pct": -1.07}, {"name": "水产养殖", "change_pct": -1.91}, {"name": "自贸区", "change_pct": -0.05}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 99, "hot_rank_chg": -14, "stock_cnt": 5839, "price": "21.06", "change": "-1.86", "market_id": "33", "circulate_market_value": "24776433000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002084", "name": "海鸥住工", "hot_rank": 100, "hot_rank_chg": -16, "stock_cnt": 5839, "price": "6.91", "change": "-2.95", "market_id": "33", "circulate_market_value": "4454424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.25}, {"name": "强势人气股", "change_pct": -2.61}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "家具家居", "change_pct": -0.77}, {"name": "智能制造", "change_pct": 0.09}, {"name": "3D打印", "change_pct": -0.17}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.89}, {"name": "旧改", "change_pct": -0.17}]}];
const LIMIT_UP_POOL = [{"code": "605068", "name": "明新旭腾", "price": 23.5, "change_pct": 10.02, "reason": "公司正积极接触柔性传感器公司，实现皮肤与传感器业务结合", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.66, "first_limit_up": 1788399839, "break_limit_up_times": 4}, {"code": "603989", "name": "艾华集团", "price": 32.03, "change_pct": 9.99, "reason": "1、国内铝电解电容器行业龙头，上半年净利润同比增长17.21%；\n2、公司的产品是AI算力硬件供电与电能管理链条中的关键基础元件，可应用在AI基础设施的各个关键部位，如服务器电源及供电保障与能源系统等", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 11.69, "first_limit_up": 1788415298, "break_limit_up_times": 0}, {"code": "605088", "name": "冠盛股份", "price": 21.84, "change_pct": 10.03, "reason": "公司联合上海人工智能研究院等发布洁净环境机器人产品，已获授权发明专利6项，智能仿生关节臂仍处于研发迭代阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.39, "first_limit_up": 1788399538, "break_limit_up_times": 1}, {"code": "603162", "name": "海通发展", "price": 13.31, "change_pct": 10.0, "reason": "公司地处福建福州，主要从事国内沿海以及国际远洋的干散货运输业务，公司运营的航线遍布30余个国家和地区的200余个港口，为客户提供矿石、煤炭、化肥等多种货物的海上运输", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 18.36, "first_limit_up": 1788399264, "break_limit_up_times": 7}, {"code": "600611", "name": "大众交通", "price": 5.15, "change_pct": 10.04, "reason": "1、上海和长三角区域重要的综合交通服务供应商；公司25 年获首批智能网联汽车示范运营牌照，与百度智行深度合作开展主驾无人 Robotaxi 商业化运营，覆盖浦东等核心区域；\n2、公司通过基金间接持有长江存储约0.051%股份", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 12.04, "first_limit_up": 1788399727, "break_limit_up_times": 4}, {"code": "603728", "name": "鸣志电器", "price": 53.35, "change_pct": 10.0, "reason": "1、全球运动控制领域先进制造商，混合式步进电机的市占率稳居全球前三；公司及子公司安浦鸣志、美国AMP、美国LIN、瑞士T Motion、鸣志派博思均深度布局于移动机器人行业，目前已拥有步进系统、伺服系统、通用驱动系统和控制技术系统四大类产品线；\n2、公司的控制电机产品主要应用于通信基站、天线设施和其他相关基站设备中，华为是公司重要客户", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1788399176, "break_limit_up_times": 1}, {"code": "002969", "name": "嘉美包装", "price": 13.41, "change_pct": 10.01, "reason": "控股股东拟变更为逐越鸿智，追觅科技创始人俞浩将成公司新实控人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.66, "first_limit_up": 1788401976, "break_limit_up_times": 1}, {"code": "605577", "name": "龙版传媒", "price": 14.14, "change_pct": 10.04, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 4, "turnover_ratio": 11.12, "first_limit_up": 1788399128, "break_limit_up_times": 2}, {"code": "605398", "name": "新炬网络", "price": 24.24, "change_pct": 9.98, "reason": "公司是一家以提供IT数据中心运维服务及运维产品为主的多云全栈智能运维服务商，下属子公司新炬技术AIOPS智慧运维平台软件V4.0与华为云GaussDB、华为云公有云平台（鲲鹏）完成相互兼容性测试认证", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.12, "first_limit_up": 1788398700, "break_limit_up_times": 0}, {"code": "002581", "name": "*ST未名", "price": 5.64, "change_pct": 9.94, "reason": "公司主要产品恩经复（神经生长因子），联营公司北京科兴致力于人用疫苗及其相关产品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.02, "first_limit_up": 1788417159, "break_limit_up_times": 0}, {"code": "600610", "name": "中毅达", "price": 9.49, "change_pct": 9.97, "reason": "公司主要产品包括工业用季戊四醇、工业用双季戊四醇", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.66, "first_limit_up": 1788400803, "break_limit_up_times": 0}, {"code": "600479", "name": "千金药业", "price": 14.26, "change_pct": 10.03, "reason": "妇科中药龙头；公司的西药抗病毒类药品主要有拉米夫定片和利巴韦林颗粒等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 29.67, "first_limit_up": 1788418417, "break_limit_up_times": 0}, {"code": "002631", "name": "德尔未来", "price": 11.14, "change_pct": 9.97, "reason": "控股子公司烯成石墨烯有用于柔性屏的石墨烯透明导电薄膜产品布局，上半年业绩同比减亏", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.24, "first_limit_up": 1788405429, "break_limit_up_times": 1}, {"code": "603757", "name": "大元泵业", "price": 79.44, "change_pct": 10.0, "reason": "公司表示已完成在储能及数据机房液冷领域的产品储备，已开始小批量接受客户订单，公司与华为、中兴在IDC温控领域推进屏蔽齿轮泵项目", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 9.61, "first_limit_up": 1788414555, "break_limit_up_times": 1}, {"code": "001299", "name": "美能能源", "price": 11.36, "change_pct": 9.97, "reason": "公司主营城镇燃气输配与运营", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.53, "first_limit_up": 1788400860, "break_limit_up_times": 0}, {"code": "601212", "name": "白银有色", "price": 7.33, "change_pct": 10.06, "reason": "公司是我国多品种有色金属综合生产基地，具有年产白银500吨的生产能力，有年产金15吨的生产能力", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.95, "first_limit_up": 1788411696, "break_limit_up_times": 2}, {"code": "600865", "name": "百大集团", "price": 10.32, "change_pct": 10.02, "reason": "公司主要从事百货零售、酒店服务、物业管理业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.52, "first_limit_up": 1788401105, "break_limit_up_times": 2}, {"code": "600969", "name": "郴电国际", "price": 10.7, "change_pct": 9.97, "reason": "公司为唐山中邦控股股东，消息称后者氩气报价大涨", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.22, "first_limit_up": 1788399946, "break_limit_up_times": 0}, {"code": "600234", "name": "科新发展", "price": 22.86, "change_pct": 10.01, "reason": "公司主营建筑工程业务，控股子公司已增资开展算力租赁业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.23, "first_limit_up": 1788412472, "break_limit_up_times": 5}, {"code": "002300", "name": "太阳电缆", "price": 8.39, "change_pct": 9.96, "reason": "福建升级扩容“福淡”“厦金”海底光缆，推进“福州—深圳短路径光缆”项目建设；公司产品有海底电力电缆、海底光电复合电缆、柔性直流海底电缆", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 8.29, "first_limit_up": 1788399123, "break_limit_up_times": 0}, {"code": "688622", "name": "*ST禾信", "price": 103.74, "change_pct": 20.0, "reason": "公司拟收购量羲技术控股权，标的公司专注于极低温极微弱信号测量调控设备的研产销，产品可应用于超导量子计算、表面物理研究、拓扑超导、分子量子霍尔效应等相关领域", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.73, "first_limit_up": 1788411610, "break_limit_up_times": 5}, {"code": "003018", "name": "金富科技", "price": 56.43, "change_pct": 10.0, "reason": "1、公司拟收购卓晖金属和联益热能各51%股权，标的公司均聚焦液冷散热产品；\n2、公司是国内最大的塑料防盗瓶盖供应商之一，长期稳定供应华润怡宝、可口可乐、达能等头部饮料品牌", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.09, "first_limit_up": 1788401166, "break_limit_up_times": 0}, {"code": "600108", "name": "亚盛集团", "price": 3.96, "change_pct": 10.0, "reason": "我国当前最大规模的农艺种植基地；公司主营啤酒花、苜蓿牧草、马铃薯、制种玉米、大麦、食葵、果蔬等作物规模化种植", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 9.67, "first_limit_up": 1788399655, "break_limit_up_times": 1}, {"code": "000813", "name": "德展健康", "price": 3.61, "change_pct": 10.06, "reason": "参股公司东方略在研重点产品VGX-3100的首个适应症（用于HPV-16和/或HPV-18相关的宫颈高级别癌前病变的治疗）Ⅲ期临床试验已完成全部患者入组", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.59, "first_limit_up": 1788416568, "break_limit_up_times": 0}, {"code": "002059", "name": "云南旅游", "price": 5.78, "change_pct": 10.1, "reason": "云南省为数不多的综合性旅游上市公司", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 2.53, "first_limit_up": 1788398700, "break_limit_up_times": 0}, {"code": "002909", "name": "集泰股份", "price": 8.01, "change_pct": 10.03, "reason": "公司当前研发的液冷导热硅油，其应用主要聚焦于数据中心及储能领域的热管理解决方案", "plates": ["液冷服务器"], "limit_up_days": 4, "turnover_ratio": 12.09, "first_limit_up": 1788398700, "break_limit_up_times": 1}, {"code": "002708", "name": "光洋股份", "price": 15.58, "change_pct": 10.03, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 18.5, "first_limit_up": 1788400212, "break_limit_up_times": 51}, {"code": "002328", "name": "新朋股份", "price": 10.1, "change_pct": 10.02, "reason": "公司液冷服务器机柜已完成样品生产并展示给客户，表示未来可提供智算中心基础架构的整体解决方案，将机柜、PDU、CDU、供回液歧管和监控系统等集成在一起，向客户提供AI数据中心液冷散热所需的多种产品组合", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 26.37, "first_limit_up": 1788405873, "break_limit_up_times": 1}, {"code": "605288", "name": "凯迪股份", "price": 72.34, "change_pct": 10.01, "reason": "公司是线性驱动系统龙头，网传资料显示，公司招聘电机研发工程师，工作让内容包括负责机器人用伺服电机电磁方案分析及结构方案设计", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.87, "first_limit_up": 1788412414, "break_limit_up_times": 0}, {"code": "301489", "name": "思泉新材", "price": 140.4, "change_pct": 20.0, "reason": "公司主营热管理产品包括石墨散热片、液冷模组等，应用于机器人、AI服务器、消费电子、新能源汽车及数据中心等领域", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 22.45, "first_limit_up": 1788405717, "break_limit_up_times": 1}, {"code": "600693", "name": "东百集团", "price": 11.04, "change_pct": 9.96, "reason": "公司主营以百货零售为主业，同时经营商业地产开发和房产租赁", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 17.25, "first_limit_up": 1788411717, "break_limit_up_times": 0}, {"code": "600657", "name": "信达地产", "price": 3.36, "change_pct": 10.16, "reason": "公司主要从事房地产开发，配有商业运营、物业服务、房地产专业服务，是中国信达的房地产开发业务运作平台", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 4.72, "first_limit_up": 1788402476, "break_limit_up_times": 0}, {"code": "603538", "name": "美诺华", "price": 28.49, "change_pct": 10.0, "reason": "诺和诺德司美格鲁肽在中国的核心化合物专利到期；公司储备了减肥多肽类中间体，正在进行GLP-1的研发和技术的储备", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 19.27, "first_limit_up": 1788402208, "break_limit_up_times": 3}, {"code": "601086", "name": "国芳集团", "price": 12.21, "change_pct": 10.0, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 5, "turnover_ratio": 8.77, "first_limit_up": 1788399037, "break_limit_up_times": 3}, {"code": "603150", "name": "万朗磁塑", "price": 62.15, "change_pct": 10.0, "reason": "1、公司EPS产品已在L3级无人驾驶乘用车、无人物流车及智能驾驶电动摩托等场景实现量产；\n2、公司研发的PPO/POK合金材料具有高韧性、高强度、轻量化等特点，目前处于实验室研发阶段；\n3、公司钐铁氮稀土永磁材料目前正在中试阶段，尚未形成收入，量产尚需一定时间", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1788415188, "break_limit_up_times": 0}, {"code": "600185", "name": "珠免集团", "price": 5.28, "change_pct": 10.0, "reason": "公司已在粤港澳大湾区、横琴粤澳深度合作区等国家战略区域布局，已形成覆盖口岸免税、跨境商务、商业综合体及线上渠道的全产业链布局；2月8日，珠海免税拱北口岸进境免税店苹果Apple专区正式启幕", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.98, "first_limit_up": 1788399880, "break_limit_up_times": 0}, {"code": "603090", "name": "宏盛股份", "price": 44.35, "change_pct": 10.0, "reason": "公司开发的冷却分配单元CDU及列间空调已批量应用于数据中心液冷系统", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 15.0, "first_limit_up": 1788414240, "break_limit_up_times": 0}, {"code": "002403", "name": "爱仕达", "price": 10.25, "change_pct": 9.98, "reason": "公司与智元机器人签署战略合作协议", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.65, "first_limit_up": 1788401283, "break_limit_up_times": 0}, {"code": "603138", "name": "海量数据", "price": 14.5, "change_pct": 10.02, "reason": "国内主要的关系型数据库产品提供商；公司数据库产品能够为OpenClaw等智能体提供数据支撑，其技术路线与AI国产化趋势契合", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.35, "first_limit_up": 1788399146, "break_limit_up_times": 1}, {"code": "300830", "name": "金现代", "price": 10.09, "change_pct": 19.98, "reason": "公司“轻骑兵”低代码PaaS平台融合AI大模型、CV、OCR等技术，已落地电力、航天、制造等场景，客户含国家电网、航天科工、广汽集团等，主要产品已与包括鸿蒙操作系统等在内的国产化软硬件基础设施完成了国产化兼容适配", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 10.16, "first_limit_up": 1788399126, "break_limit_up_times": 0}, {"code": "002787", "name": "华源控股", "price": 24.4, "change_pct": 10.01, "reason": "公司2025年12月完成对暖芯科技51%股权收购，切入半导体温控设备及配套零配件赛道，并合资设立苏州致源真空科技布局分子泵，形成“核心温控设备+配套零配件”一体化体系，产品已导入华润微电子、拓荆科技、广州芯粤能等头部客户", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.63, "first_limit_up": 1788402903, "break_limit_up_times": 2}, {"code": "600703", "name": "三安光电", "price": 13.89, "change_pct": 9.98, "reason": "首批稳定量产Mini/Micro LED芯片制造商之一；公司可提供用于光模块的激光器、探测器产品，目前高速产品已实现批量出货", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.03, "first_limit_up": 1788399312, "break_limit_up_times": 2}, {"code": "002297", "name": "博云新材", "price": 22, "change_pct": 10.0, "reason": "1、控股子公司湖南博云东方粉末冶金有限公司有部分产品用于金刚石制作；\n2、公司主要从事航空机轮刹车系统及刹车材料、航天用碳 / 碳复合材料等产品", "plates": ["培育钻石"], "limit_up_days": 2, "turnover_ratio": 31.38, "first_limit_up": 1788402354, "break_limit_up_times": 8}, {"code": "605580", "name": "恒盛能源", "price": 20.43, "change_pct": 10.02, "reason": "公司采用MPCVD技术生产20×20毫米金刚石，导热性能优于陶瓷，目标切入高功率芯片、GPU散热市场", "plates": ["培育钻石"], "limit_up_days": 1, "turnover_ratio": 2.87, "first_limit_up": 1788399870, "break_limit_up_times": 1}, {"code": "002980", "name": "华盛昌", "price": 106.66, "change_pct": 10.0, "reason": "公司收购伽蓝特100%股权，后者专注光通信模块和光芯片测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 14.67, "first_limit_up": 1788399258, "break_limit_up_times": 2}, {"code": "603270", "name": "金帝股份", "price": 34.95, "change_pct": 10.01, "reason": "1、公司拟投资建设液冷关键换热部件及高效散热模组总成、液冷关键部件及集成式散热模组总成项目，投资额分别为2.10亿元、2.16亿元；\n2、公司在减速器领域主要有谐波减速机保持架、谐波减速机带齿保持架两类产品，谐波减速机保持架是针对机器人手指关节设计的一款保持架产品\n", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 12.77, "first_limit_up": 1788399231, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};