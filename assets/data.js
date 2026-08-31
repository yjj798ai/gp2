const UPDATE_TIME = "2026-08-31 22:19";
const THS_HOT = [
  {
    "name": "液冷服务器",
    "rise": 2.95,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "AI应用",
    "rise": 2.02,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续40天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "AI视频",
    "rise": 5.74,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "PCB概念",
    "rise": 2.39,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "创新药",
    "rise": -1.65,
    "rate": 0,
    "tag": "",
    "hotTag": "连续112天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "人工智能",
    "rise": 1.63,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "算力租赁",
    "rise": 2.22,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续146天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "存储芯片",
    "rise": 1.93,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续235天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "AIGC概念",
    "rise": 3.24,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "科创创业人工智能ETF",
    "code": "886019"
  },
  {
    "name": "短剧游戏",
    "rise": 5.35,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.26,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续282天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "消费电子概念",
    "rise": 2.34,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "885800"
  },
  {
    "name": "东数西算(算力)",
    "rise": 2.32,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "粮食概念",
    "rise": -1.54,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "商业航天",
    "rise": 1.54,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续211天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "煤化工概念",
    "rise": 0.85,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885398"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 1.68,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "人形机器人",
    "rise": 1.97,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续446天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "黄金概念",
    "rise": -2.5,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "芯片概念",
    "rise": 1.71,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "国内首部AIGC长剧《后西游记》8月31日开播",
    "desc": "",
    "heat": 1104013,
    "direction": "AI剧集",
    "themes": [
      "AI漫剧"
    ],
    "stocks": [
      {
        "name": "中文在线",
        "code": "300364",
        "chg": 20.017598
      }
    ]
  },
  {
    "title": "我国首次实现地月双向高速激光通信",
    "desc": "",
    "heat": 592170,
    "direction": "地月激光通信",
    "themes": [
      "地月激光通信"
    ],
    "stocks": [
      {
        "name": "睿创微纳",
        "code": "688002",
        "chg": 14.4094
      }
    ]
  },
  {
    "title": "覆铜板龙头，年内第七次涨价",
    "desc": "",
    "heat": 449324,
    "direction": "覆铜板",
    "themes": [
      "覆铜板"
    ],
    "stocks": [
      {
        "name": "诺德股份",
        "code": "600110",
        "chg": 9.963437
      }
    ]
  },
  {
    "title": "国家数据局：在32个城市布局新一批数据标注先行先试",
    "desc": "",
    "heat": 342299,
    "direction": "数据标注",
    "themes": [
      "数据标注"
    ],
    "stocks": [
      {
        "name": "中广天择",
        "code": "603721",
        "chg": 10.023041
      }
    ]
  },
  {
    "title": "房地产基础制度全面改革！封顶预售与现房销售并行，告别“购房盲盒”",
    "desc": "",
    "heat": 313716,
    "direction": "房地产",
    "themes": [
      "房地产",
      "租售同权"
    ],
    "stocks": [
      {
        "name": "深物业A",
        "code": "000011",
        "chg": 10.054645
      }
    ]
  },
  {
    "title": "马斯克旗下SpaceX将自产燃气轮机叶片",
    "desc": "",
    "heat": 213759,
    "direction": "燃气轮机",
    "themes": [
      "整机研发制造",
      "热端核心零部件",
      "高温合金材料",
      "GE Vernova供应商",
      "Bloom energy供应商"
    ],
    "stocks": [
      {
        "name": "飞沃科技",
        "code": "301232",
        "chg": 8.899177
      }
    ]
  },
  {
    "title": "伊朗革命卫队：伊朗向美军基地发射导弹",
    "desc": "",
    "heat": 59878,
    "direction": "美伊战争",
    "themes": [
      "石油加工贸易",
      "油气开采及服务",
      "稀土永磁",
      "天然气"
    ],
    "stocks": [
      {
        "name": "潞化科技",
        "code": "600691",
        "chg": 9.863946
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "短剧/互动影游",
    "change": "+7.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+6.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+6.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+5.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+4.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+4.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+4.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+4.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+4.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+4.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "多模态",
    "change": "+3.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AIGC概念",
    "change": "+3.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超节点",
    "change": "+3.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识产权",
    "change": "+3.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "广电",
    "change": "+3.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "NFT",
    "change": "+3.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+3.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 6,
    "hot_rank_chg": -4,
    "stock_cnt": 5794,
    "price": "6.16",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "16339712000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "项目中标",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "装修装饰",
        "change_pct": 1.76
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.93
      },
      {
        "name": "航天",
        "change_pct": 1.45
      },
      {
        "name": "旧改",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 9,
    "hot_rank_chg": -3,
    "stock_cnt": 5794,
    "price": "5.39",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "6125196000.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "液冷",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 1.82
      },
      {
        "name": "锂电池",
        "change_pct": 0.52
      },
      {
        "name": "石墨烯",
        "change_pct": 0.72
      },
      {
        "name": "新能源整车",
        "change_pct": -0.83
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.96
      },
      {
        "name": "汽车整车",
        "change_pct": -1.32
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.88
      },
      {
        "name": "白色家电",
        "change_pct": 1.53
      },
      {
        "name": "家电",
        "change_pct": 1.58
      },
      {
        "name": "汽车热管理",
        "change_pct": 2.02
      },
      {
        "name": "热泵",
        "change_pct": 2.23
      },
      {
        "name": "轮边电机",
        "change_pct": 1.85
      },
      {
        "name": "超级电容",
        "change_pct": 0.79
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.55
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 11,
    "hot_rank_chg": -7,
    "stock_cnt": 5794,
    "price": "12.04",
    "change": "2.29",
    "market_id": "17",
    "circulate_market_value": "7727069900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.71
      },
      {
        "name": "农业种植",
        "change_pct": -1.7
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.16
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.38
      },
      {
        "name": "休闲食品",
        "change_pct": -0.14
      },
      {
        "name": "食品",
        "change_pct": -0.98
      },
      {
        "name": "食品安全",
        "change_pct": 0.28
      },
      {
        "name": "社区团购",
        "change_pct": -1.13
      },
      {
        "name": "大农业",
        "change_pct": -0.38
      },
      {
        "name": "预制菜",
        "change_pct": -0.96
      },
      {
        "name": "人造肉",
        "change_pct": -0.57
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 12,
    "hot_rank_chg": 1,
    "stock_cnt": 5794,
    "price": "5.04",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "6439103000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 3.35
      },
      {
        "name": "化肥",
        "change_pct": -0.39
      },
      {
        "name": "保健品",
        "change_pct": -1.3
      },
      {
        "name": "民营医院",
        "change_pct": -0.65
      },
      {
        "name": "医药",
        "change_pct": -1.61
      },
      {
        "name": "煤化工",
        "change_pct": 2.36
      },
      {
        "name": "食品",
        "change_pct": -0.98
      },
      {
        "name": "大农业",
        "change_pct": -0.38
      },
      {
        "name": "干细胞",
        "change_pct": -1.65
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 13,
    "hot_rank_chg": 4,
    "stock_cnt": 5794,
    "price": "12.03",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "20874227000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "高端PCB",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.16
      },
      {
        "name": "核电",
        "change_pct": 0.91
      },
      {
        "name": "锂电池",
        "change_pct": 0.52
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.36
      },
      {
        "name": "PCB板",
        "change_pct": 2.83
      },
      {
        "name": "中科院系",
        "change_pct": 1.51
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.88
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.85
      },
      {
        "name": "固态电池",
        "change_pct": 0.02
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.7
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 16,
    "hot_rank_chg": 14,
    "stock_cnt": 5794,
    "price": "4.30",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "3056434900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "互动影游",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 2.11
      },
      {
        "name": "影视",
        "change_pct": 6.85
      },
      {
        "name": "旅游",
        "change_pct": 0.13
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.23
      },
      {
        "name": "AI营销",
        "change_pct": 4.76
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 7.13
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.67
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 17,
    "hot_rank_chg": 5,
    "stock_cnt": 5794,
    "price": "8.03",
    "change": "2.29",
    "market_id": "33",
    "circulate_market_value": "13064760000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.84
      },
      {
        "name": "电竞",
        "change_pct": 2.23
      },
      {
        "name": "手游",
        "change_pct": 2.33
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "人工智能",
        "change_pct": 2.11
      },
      {
        "name": "游戏",
        "change_pct": 3.46
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.76
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.48
      },
      {
        "name": "快手概念股",
        "change_pct": 4.18
      },
      {
        "name": "元宇宙",
        "change_pct": 3.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.23
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.39
      },
      {
        "name": "web3.0",
        "change_pct": 2.32
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.91
      },
      {
        "name": "数据要素",
        "change_pct": 2.05
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.28
      },
      {
        "name": "AI营销",
        "change_pct": 4.76
      },
      {
        "name": "ChatGPT",
        "change_pct": 2.95
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.14
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.05
      },
      {
        "name": "人形机器人",
        "change_pct": 2.02
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 7.13
      },
      {
        "name": "多模态",
        "change_pct": 3.95
      },
      {
        "name": "AI视频",
        "change_pct": 4.59
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.67
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.6
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 18,
    "hot_rank_chg": -9,
    "stock_cnt": 5794,
    "price": "2.90",
    "change": "9.85",
    "market_id": "33",
    "circulate_market_value": "6793795500.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "净利增长",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.54
      },
      {
        "name": "人工智能",
        "change_pct": 2.11
      },
      {
        "name": "VR&AR",
        "change_pct": 2.49
      },
      {
        "name": "京津冀",
        "change_pct": 0.09
      },
      {
        "name": "装修装饰",
        "change_pct": 1.76
      },
      {
        "name": "住房租赁",
        "change_pct": -0.27
      },
      {
        "name": "破净股",
        "change_pct": -0.28
      },
      {
        "name": "数字经济",
        "change_pct": 1.76
      },
      {
        "name": "房产经纪",
        "change_pct": 3.3
      },
      {
        "name": "物业管理",
        "change_pct": -0.16
      },
      {
        "name": "低价股",
        "change_pct": -0.74
      },
      {
        "name": "华为产业链",
        "change_pct": 2.03
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.05
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 24,
    "hot_rank_chg": 8,
    "stock_cnt": 5794,
    "price": "6.01",
    "change": "1.52",
    "market_id": "33",
    "circulate_market_value": "212556480000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.75
      },
      {
        "name": "手机产业链",
        "change_pct": 2.52
      },
      {
        "name": "超高清视频",
        "change_pct": 2.72
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.4
      },
      {
        "name": "电竞",
        "change_pct": 2.23
      },
      {
        "name": "半导体",
        "change_pct": 2.16
      },
      {
        "name": "人工智能",
        "change_pct": 2.11
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.01
      },
      {
        "name": "VR&AR",
        "change_pct": 2.49
      },
      {
        "name": "OLED",
        "change_pct": 1.6
      },
      {
        "name": "京津冀",
        "change_pct": 0.09
      },
      {
        "name": "物联网",
        "change_pct": 1.79
      },
      {
        "name": "指纹识别",
        "change_pct": 1.8
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.47
      },
      {
        "name": "白马股",
        "change_pct": 0.06
      },
      {
        "name": "智能制造",
        "change_pct": 1.85
      },
      {
        "name": "小米概念股",
        "change_pct": 2.64
      },
      {
        "name": "国产芯片",
        "change_pct": 2.07
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.46
      },
      {
        "name": "全息概念",
        "change_pct": 2.81
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.47
      },
      {
        "name": "MicroLED",
        "change_pct": 1.88
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.55
      },
      {
        "name": "智能手表",
        "change_pct": 3.25
      },
      {
        "name": "MiniLED",
        "change_pct": 1.91
      },
      {
        "name": "传感器",
        "change_pct": 1.91
      },
      {
        "name": "大硅片",
        "change_pct": 0.02
      },
      {
        "name": "AI PC",
        "change_pct": 3.15
      },
      {
        "name": "华为产业链",
        "change_pct": 2.03
      },
      {
        "name": "回购",
        "change_pct": 0.37
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.18
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.14
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 25,
    "hot_rank_chg": 1,
    "stock_cnt": 5794,
    "price": "12.98",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "11626628900.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "证券业务",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.81
      },
      {
        "name": "期货概念",
        "change_pct": -1.1
      },
      {
        "name": "券商",
        "change_pct": 0.42
      },
      {
        "name": "大金融",
        "change_pct": 0.71
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.39
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 26,
    "hot_rank_chg": 1,
    "stock_cnt": 5794,
    "price": "12.69",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "3712814800.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "7",
    "change_reason": "转基因玉米",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -1.7
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "转基因",
        "change_pct": -1.4
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.38
      },
      {
        "name": "大农业",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 27,
    "hot_rank_chg": -17,
    "stock_cnt": 5794,
    "price": "9.12",
    "change": "1.33",
    "market_id": "17",
    "circulate_market_value": "22968810000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.84
      },
      {
        "name": "密集调研",
        "change_pct": 0.29
      },
      {
        "name": "工业大麻",
        "change_pct": 0.92
      },
      {
        "name": "中药",
        "change_pct": -1.82
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "保健品",
        "change_pct": -1.3
      },
      {
        "name": "民营医院",
        "change_pct": -0.65
      },
      {
        "name": "医药",
        "change_pct": -1.61
      },
      {
        "name": "化学原料药",
        "change_pct": -1.53
      },
      {
        "name": "流感",
        "change_pct": -1.48
      },
      {
        "name": "振兴东北",
        "change_pct": 0.09
      },
      {
        "name": "食品",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 31,
    "hot_rank_chg": 10,
    "stock_cnt": 5794,
    "price": "7.10",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "7333844200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.19
      },
      {
        "name": "锂电池",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.36
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.28
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.88
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.87
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 33,
    "hot_rank_chg": -5,
    "stock_cnt": 5794,
    "price": "11.16",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "5349211000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.82
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "医药商业",
        "change_pct": -1.71
      },
      {
        "name": "医药",
        "change_pct": -1.61
      },
      {
        "name": "流感",
        "change_pct": -1.48
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 37,
    "hot_rank_chg": 10,
    "stock_cnt": 5794,
    "price": "6.38",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4112767700.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "6",
    "change_reason": "控制权拟变更",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.18
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "装修装饰",
        "change_pct": 1.76
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.93
      },
      {
        "name": "家具家居",
        "change_pct": 1.7
      },
      {
        "name": "智能制造",
        "change_pct": 1.85
      },
      {
        "name": "3D打印",
        "change_pct": 2.38
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 2.23
      },
      {
        "name": "旧改",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 38,
    "hot_rank_chg": 17,
    "stock_cnt": 5794,
    "price": "4.75",
    "change": "3.26",
    "market_id": "33",
    "circulate_market_value": "27810286000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.05
      },
      {
        "name": "人工智能",
        "change_pct": 2.11
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.96
      },
      {
        "name": "水利",
        "change_pct": 0.74
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.64
      },
      {
        "name": "大数据",
        "change_pct": 1.66
      },
      {
        "name": "园林",
        "change_pct": 0.42
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 2.64
      },
      {
        "name": "数字经济",
        "change_pct": 1.76
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.48
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.47
      },
      {
        "name": "第三代半导体",
        "change_pct": 1.52
      },
      {
        "name": "快手概念股",
        "change_pct": 4.18
      },
      {
        "name": "IGBT",
        "change_pct": 0.42
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.23
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.91
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.28
      },
      {
        "name": "氮化镓",
        "change_pct": 1.76
      },
      {
        "name": "AI营销",
        "change_pct": 4.76
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.05
      },
      {
        "name": "多模态",
        "change_pct": 3.95
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.55
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.6
      },
      {
        "name": "区块链",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 42,
    "hot_rank_chg": 16,
    "stock_cnt": 5794,
    "price": "4.91",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "5982403100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "煤炭",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.31
      },
      {
        "name": "煤炭",
        "change_pct": 1.34
      },
      {
        "name": "有色金属",
        "change_pct": -0.32
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 49,
    "hot_rank_chg": -10,
    "stock_cnt": 5794,
    "price": "4.37",
    "change": "-10.08",
    "market_id": "33",
    "circulate_market_value": "9188695500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.29
      },
      {
        "name": "中药",
        "change_pct": -1.82
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "维生素",
        "change_pct": -0.82
      },
      {
        "name": "基因测序",
        "change_pct": -1.14
      },
      {
        "name": "民营医院",
        "change_pct": -0.65
      },
      {
        "name": "医药",
        "change_pct": -1.61
      },
      {
        "name": "化学原料药",
        "change_pct": -1.53
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -2.51
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 50,
    "hot_rank_chg": -12,
    "stock_cnt": 5794,
    "price": "3.81",
    "change": "-1.04",
    "market_id": "17",
    "circulate_market_value": "8428973700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.37
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.96
      },
      {
        "name": "光通信",
        "change_pct": 1.04
      },
      {
        "name": "林业",
        "change_pct": 1.78
      },
      {
        "name": "军民融合",
        "change_pct": 1.45
      },
      {
        "name": "军工",
        "change_pct": 1.28
      },
      {
        "name": "人造肉",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 52,
    "hot_rank_chg": -38,
    "stock_cnt": 5794,
    "price": "4.97",
    "change": "-7.28",
    "market_id": "17",
    "circulate_market_value": "16244137000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.8
      },
      {
        "name": "养老产业",
        "change_pct": 0.64
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.28
      },
      {
        "name": "民营医院",
        "change_pct": -0.65
      },
      {
        "name": "地摊经济",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 56,
    "hot_rank_chg": 26,
    "stock_cnt": 5794,
    "price": "11.88",
    "change": "6.55",
    "market_id": "17",
    "circulate_market_value": "7066562500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 2.07
      },
      {
        "name": "VR&AR",
        "change_pct": 2.49
      },
      {
        "name": "装修装饰",
        "change_pct": 1.76
      },
      {
        "name": "数字经济",
        "change_pct": 1.76
      },
      {
        "name": "百度概念股",
        "change_pct": 2.35
      },
      {
        "name": "全息概念",
        "change_pct": 2.81
      },
      {
        "name": "NFT",
        "change_pct": 3.61
      },
      {
        "name": "元宇宙",
        "change_pct": 3.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.23
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.17
      },
      {
        "name": "ChatGPT",
        "change_pct": 2.95
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.14
      },
      {
        "name": "多模态",
        "change_pct": 3.95
      },
      {
        "name": "AI视频",
        "change_pct": 4.59
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 57,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "8.02",
    "change": "-4.30",
    "market_id": "17",
    "circulate_market_value": "9132833500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.18
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "光伏",
        "change_pct": -0.31
      },
      {
        "name": "特高压",
        "change_pct": 0.13
      },
      {
        "name": "智能电网",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 58,
    "hot_rank_chg": 17,
    "stock_cnt": 5794,
    "price": "5.56",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "3232455900.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "业绩增长",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -1.7
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.15
      },
      {
        "name": "农垦",
        "change_pct": -0.74
      },
      {
        "name": "棉花",
        "change_pct": -0.78
      },
      {
        "name": "新疆概念",
        "change_pct": 0.08
      },
      {
        "name": "风电",
        "change_pct": 0.72
      },
      {
        "name": "大农业",
        "change_pct": -0.38
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 63,
    "hot_rank_chg": -19,
    "stock_cnt": 5794,
    "price": "11.21",
    "change": "-2.10",
    "market_id": "33",
    "circulate_market_value": "4941614100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.9
      },
      {
        "name": "锂电池",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.88
      },
      {
        "name": "两轮车",
        "change_pct": 0.74
      },
      {
        "name": "珠宝饰品",
        "change_pct": -4.58
      }
    ]
  },
  {
    "code": "600551",
    "name": "时代出版",
    "hot_rank": 68,
    "hot_rank_chg": 16,
    "stock_cnt": 5794,
    "price": "8.25",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5593955700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报扣非增长",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.13
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.22
      },
      {
        "name": "教育",
        "change_pct": 1.94
      },
      {
        "name": "破净股",
        "change_pct": -0.28
      },
      {
        "name": "传媒",
        "change_pct": 4.31
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      },
      {
        "name": "在线教育",
        "change_pct": 2.4
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 69,
    "hot_rank_chg": 16,
    "stock_cnt": 5794,
    "price": "5.61",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "6523573500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "影视院线",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 6.85
      },
      {
        "name": "新疆概念",
        "change_pct": 0.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.43
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.48
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 7.13
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.67
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 71,
    "hot_rank_chg": -37,
    "stock_cnt": 5794,
    "price": "8.59",
    "change": "2.63",
    "market_id": "33",
    "circulate_market_value": "6251504800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.0
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.93
      },
      {
        "name": "风电",
        "change_pct": 0.72
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.07
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.38
      },
      {
        "name": "建筑节能",
        "change_pct": 0.59
      },
      {
        "name": "旧改",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "002328",
    "name": "新朋股份",
    "hot_rank": 73,
    "hot_rank_chg": 43,
    "stock_cnt": 5794,
    "price": "8.50",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4850830100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "液冷机柜",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.02
      },
      {
        "name": "特斯拉",
        "change_pct": 1.16
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.96
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.47
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.88
      },
      {
        "name": "储能",
        "change_pct": 0.5
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.46
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.55
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 75,
    "hot_rank_chg": -7,
    "stock_cnt": 5794,
    "price": "9.17",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "6107220000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "半年报增长",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.54
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 77,
    "hot_rank_chg": -29,
    "stock_cnt": 5794,
    "price": "7.65",
    "change": "7.14",
    "market_id": "17",
    "circulate_market_value": "18289715000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 1.34
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 84,
    "hot_rank_chg": 37,
    "stock_cnt": 5794,
    "price": "2.57",
    "change": "9.83",
    "market_id": "17",
    "circulate_market_value": "8968755600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI应用",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 3.68
      },
      {
        "name": "超高清视频",
        "change_pct": 2.72
      },
      {
        "name": "人工智能",
        "change_pct": 2.11
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.96
      },
      {
        "name": "影视",
        "change_pct": 6.85
      },
      {
        "name": "智慧城市",
        "change_pct": 1.64
      },
      {
        "name": "国产芯片",
        "change_pct": 2.07
      },
      {
        "name": "振兴东北",
        "change_pct": 0.09
      },
      {
        "name": "传媒",
        "change_pct": 4.31
      },
      {
        "name": "低价股",
        "change_pct": -0.74
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      },
      {
        "name": "在线教育",
        "change_pct": 2.4
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.05
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.67
      }
    ]
  },
  {
    "code": "600691",
    "name": "潞化科技",
    "hot_rank": 88,
    "hot_rank_chg": 10,
    "stock_cnt": 5794,
    "price": "3.23",
    "change": "9.86",
    "market_id": "17",
    "circulate_market_value": "7673142600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "业绩扭亏",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 3.35
      },
      {
        "name": "化肥",
        "change_pct": -0.39
      },
      {
        "name": "山西国企改革",
        "change_pct": 0.62
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.14
      },
      {
        "name": "烧碱",
        "change_pct": 0.32
      },
      {
        "name": "PVC",
        "change_pct": 0.54
      },
      {
        "name": "煤化工",
        "change_pct": 2.36
      },
      {
        "name": "大农业",
        "change_pct": -0.38
      },
      {
        "name": "丁辛醇",
        "change_pct": 0.6
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 90,
    "hot_rank_chg": -16,
    "stock_cnt": 5794,
    "price": "11.57",
    "change": "-3.10",
    "market_id": "17",
    "circulate_market_value": "20700330000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.19
      },
      {
        "name": "纯碱",
        "change_pct": -1.03
      },
      {
        "name": "食品",
        "change_pct": -0.98
      },
      {
        "name": "土壤修复",
        "change_pct": 0.13
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.39
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 3.24
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.64
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 92,
    "hot_rank_chg": 4,
    "stock_cnt": 5794,
    "price": "10.07",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "5301608700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "房地产开发",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.9
      },
      {
        "name": "房地产",
        "change_pct": -0.8
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.28
      },
      {
        "name": "住房租赁",
        "change_pct": -0.27
      },
      {
        "name": "物业管理",
        "change_pct": -0.16
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.82
      },
      {
        "name": "旧改",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 93,
    "hot_rank_chg": -15,
    "stock_cnt": 5794,
    "price": "11.82",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "5884527900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.82
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.13
      },
      {
        "name": "农业种植",
        "change_pct": -1.7
      },
      {
        "name": "强势人气股",
        "change_pct": 0.27
      },
      {
        "name": "医药",
        "change_pct": -1.61
      },
      {
        "name": "流感",
        "change_pct": -1.48
      },
      {
        "name": "大农业",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "603559",
    "name": "中通国脉",
    "hot_rank": 98,
    "hot_rank_chg": 8,
    "stock_cnt": 5794,
    "price": "10.54",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "4229459400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力",
    "xgb_concepts": [
      {
        "name": "5G",
        "change_pct": 1.96
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.72
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.96
      },
      {
        "name": "大数据",
        "change_pct": 1.66
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.39
      },
      {
        "name": "华为产业链",
        "change_pct": 2.03
      },
      {
        "name": "时空大数据",
        "change_pct": 1.66
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5794, "price": "564.90", "change": "-3.44", "market_id": "17", "circulate_market_value": "16996553000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5794, "price": "85.18", "change": "9.99", "market_id": "33", "circulate_market_value": "124951876000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报增长"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 3, "hot_rank_chg": 5, "stock_cnt": 5794, "price": "40.36", "change": "10.00", "market_id": "33", "circulate_market_value": "30569274000.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "数据中心交换机"}, {"code": "600722", "name": "金牛化工", "hot_rank": 4, "hot_rank_chg": -3, "stock_cnt": 5794, "price": "16.80", "change": "10.02", "market_id": "17", "circulate_market_value": "11429370600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长"}, {"code": "300364", "name": "中文在线", "hot_rank": 5, "hot_rank_chg": 10, "stock_cnt": 5794, "price": "27.28", "change": "20.02", "market_id": "33", "circulate_market_value": "18034417000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧"}, {"code": "002081", "name": "金螳螂", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5794, "price": "6.16", "change": "10.00", "market_id": "33", "circulate_market_value": "16339712000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "项目中标", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.27}, {"name": "装修装饰", "change_pct": 1.76}, {"name": "装配式建筑", "change_pct": 0.93}, {"name": "航天", "change_pct": 1.45}, {"name": "旧改", "change_pct": 0.96}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 7, "hot_rank_chg": 13, "stock_cnt": 5794, "price": "16.98", "change": "20.00", "market_id": "33", "circulate_market_value": "17348465000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AIGC长剧"}, {"code": "000938", "name": "紫光股份", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5794, "price": "38.95", "change": "8.53", "market_id": "33", "circulate_market_value": "111399831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002418", "name": "康盛股份", "hot_rank": 9, "hot_rank_chg": -3, "stock_cnt": 5794, "price": "5.39", "change": "10.00", "market_id": "33", "circulate_market_value": "6125196000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "液冷", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 1.82}, {"name": "锂电池", "change_pct": 0.52}, {"name": "石墨烯", "change_pct": 0.72}, {"name": "新能源整车", "change_pct": -0.83}, {"name": "云计算数据中心", "change_pct": 1.96}, {"name": "汽车整车", "change_pct": -1.32}, {"name": "新能源汽车", "change_pct": 0.88}, {"name": "白色家电", "change_pct": 1.53}, {"name": "家电", "change_pct": 1.58}, {"name": "汽车热管理", "change_pct": 2.02}, {"name": "热泵", "change_pct": 2.23}, {"name": "轮边电机", "change_pct": 1.85}, {"name": "超级电容", "change_pct": 0.79}, {"name": "液冷服务器", "change_pct": 3.55}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 10, "hot_rank_chg": 8, "stock_cnt": 5794, "price": "43.93", "change": "1.69", "market_id": "17", "circulate_market_value": "174471820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5794, "price": "12.04", "change": "2.29", "market_id": "17", "circulate_market_value": "7727069900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.71}, {"name": "农业种植", "change_pct": -1.7}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "湖南国企改革", "change_pct": 0.16}, {"name": "乡村振兴", "change_pct": -0.38}, {"name": "休闲食品", "change_pct": -0.14}, {"name": "食品", "change_pct": -0.98}, {"name": "食品安全", "change_pct": 0.28}, {"name": "社区团购", "change_pct": -1.13}, {"name": "大农业", "change_pct": -0.38}, {"name": "预制菜", "change_pct": -0.96}, {"name": "人造肉", "change_pct": -0.57}, {"name": "国企改革", "change_pct": 0.12}]}, {"code": "600227", "name": "赤天化", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5794, "price": "5.04", "change": "10.04", "market_id": "17", "circulate_market_value": "6439103000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "中报扭亏", "xgb_concepts": [{"name": "甲醇", "change_pct": 3.35}, {"name": "化肥", "change_pct": -0.39}, {"name": "保健品", "change_pct": -1.3}, {"name": "民营医院", "change_pct": -0.65}, {"name": "医药", "change_pct": -1.61}, {"name": "煤化工", "change_pct": 2.36}, {"name": "食品", "change_pct": -0.98}, {"name": "大农业", "change_pct": -0.38}, {"name": "干细胞", "change_pct": -1.65}, {"name": "阿尔茨海默病", "change_pct": -1.31}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 13, "hot_rank_chg": 4, "stock_cnt": 5794, "price": "12.03", "change": "9.96", "market_id": "17", "circulate_market_value": "20874227000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端PCB", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.16}, {"name": "核电", "change_pct": 0.91}, {"name": "锂电池", "change_pct": 0.52}, {"name": "铜箔/覆铜板", "change_pct": 2.36}, {"name": "PCB板", "change_pct": 2.83}, {"name": "中科院系", "change_pct": 1.51}, {"name": "新能源汽车", "change_pct": 0.88}, {"name": "宁德时代概念股", "change_pct": 0.85}, {"name": "固态电池", "change_pct": 0.02}, {"name": "PET复合铜箔", "change_pct": 1.7}]}, {"code": "002837", "name": "英维克", "hot_rank": 14, "hot_rank_chg": 2, "stock_cnt": 5794, "price": "68.21", "change": "5.79", "market_id": "33", "circulate_market_value": "77298307000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603269", "name": "海鸥股份", "hot_rank": 15, "hot_rank_chg": 9, "stock_cnt": 5794, "price": "24.40", "change": "10.01", "market_id": "17", "circulate_market_value": "10539470000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报增长"}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 16, "hot_rank_chg": 14, "stock_cnt": 5794, "price": "4.30", "change": "9.97", "market_id": "33", "circulate_market_value": "3056434900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "互动影游", "xgb_concepts": [{"name": "人工智能", "change_pct": 2.11}, {"name": "影视", "change_pct": 6.85}, {"name": "旅游", "change_pct": 0.13}, {"name": "虚拟数字人", "change_pct": 3.23}, {"name": "AI营销", "change_pct": 4.76}, {"name": "AI大模型/智能体", "change_pct": 2.05}, {"name": "短剧/互动影游", "change_pct": 7.13}, {"name": "IP经济/谷子经济", "change_pct": 2.67}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 17, "hot_rank_chg": 5, "stock_cnt": 5794, "price": "8.03", "change": "2.29", "market_id": "33", "circulate_market_value": "13064760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.84}, {"name": "电竞", "change_pct": 2.23}, {"name": "手游", "change_pct": 2.33}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "人工智能", "change_pct": 2.11}, {"name": "游戏", "change_pct": 3.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.76}, {"name": "腾讯概念股", "change_pct": 2.48}, {"name": "快手概念股", "change_pct": 4.18}, {"name": "元宇宙", "change_pct": 3.06}, {"name": "虚拟数字人", "change_pct": 3.23}, {"name": "东数西算/算力", "change_pct": 2.39}, {"name": "web3.0", "change_pct": 2.32}, {"name": "AIGC概念", "change_pct": 3.91}, {"name": "数据要素", "change_pct": 2.05}, {"name": "字节跳动概念股", "change_pct": 3.28}, {"name": "AI营销", "change_pct": 4.76}, {"name": "ChatGPT", "change_pct": 2.95}, {"name": "智能眼镜/MR头显", "change_pct": 3.14}, {"name": "AI大模型/智能体", "change_pct": 2.05}, {"name": "人形机器人", "change_pct": 2.02}, {"name": "短剧/互动影游", "change_pct": 7.13}, {"name": "多模态", "change_pct": 3.95}, {"name": "AI视频", "change_pct": 4.59}, {"name": "IP经济/谷子经济", "change_pct": 2.67}, {"name": "小红书概念股", "change_pct": 3.6}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 18, "hot_rank_chg": -9, "stock_cnt": 5794, "price": "2.90", "change": "9.85", "market_id": "33", "circulate_market_value": "6793795500.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "净利增长", "xgb_concepts": [{"name": "新零售", "change_pct": -0.54}, {"name": "人工智能", "change_pct": 2.11}, {"name": "VR&AR", "change_pct": 2.49}, {"name": "京津冀", "change_pct": 0.09}, {"name": "装修装饰", "change_pct": 1.76}, {"name": "住房租赁", "change_pct": -0.27}, {"name": "破净股", "change_pct": -0.28}, {"name": "数字经济", "change_pct": 1.76}, {"name": "房产经纪", "change_pct": 3.3}, {"name": "物业管理", "change_pct": -0.16}, {"name": "低价股", "change_pct": -0.74}, {"name": "华为产业链", "change_pct": 2.03}, {"name": "AI大模型/智能体", "change_pct": 2.05}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 19, "hot_rank_chg": 2, "stock_cnt": 5794, "price": "58.01", "change": "-1.01", "market_id": "17", "circulate_market_value": "261221290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 20, "hot_rank_chg": 33, "stock_cnt": 5794, "price": "194.59", "change": "10.00", "market_id": "17", "circulate_market_value": "82328996000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "Microduck催化"}, {"code": "600487", "name": "亨通光电", "hot_rank": 21, "hot_rank_chg": -2, "stock_cnt": 5794, "price": "67.38", "change": "-1.92", "market_id": "17", "circulate_market_value": "165326680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 22, "hot_rank_chg": 3, "stock_cnt": 5794, "price": "29.04", "change": "10.00", "market_id": "33", "circulate_market_value": "6071629900.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "PTFE薄膜"}, {"code": "600183", "name": "生益科技", "hot_rank": 23, "hot_rank_chg": -11, "stock_cnt": 5794, "price": "153.40", "change": "5.32", "market_id": "17", "circulate_market_value": "369962270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 24, "hot_rank_chg": 8, "stock_cnt": 5794, "price": "6.01", "change": "1.52", "market_id": "33", "circulate_market_value": "212556480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.75}, {"name": "手机产业链", "change_pct": 2.52}, {"name": "超高清视频", "change_pct": 2.72}, {"name": "苹果产业链", "change_pct": 2.4}, {"name": "电竞", "change_pct": 2.23}, {"name": "半导体", "change_pct": 2.16}, {"name": "人工智能", "change_pct": 2.11}, {"name": "互联网医疗", "change_pct": -0.01}, {"name": "VR&AR", "change_pct": 2.49}, {"name": "OLED", "change_pct": 1.6}, {"name": "京津冀", "change_pct": 0.09}, {"name": "物联网", "change_pct": 1.79}, {"name": "指纹识别", "change_pct": 1.8}, {"name": "汽车零部件", "change_pct": 1.47}, {"name": "白马股", "change_pct": 0.06}, {"name": "智能制造", "change_pct": 1.85}, {"name": "小米概念股", "change_pct": 2.64}, {"name": "国产芯片", "change_pct": 2.07}, {"name": "液晶面板/LCD", "change_pct": 1.46}, {"name": "全息概念", "change_pct": 2.81}, {"name": "理想汽车概念股", "change_pct": 1.47}, {"name": "MicroLED", "change_pct": 1.88}, {"name": "钙钛矿电池", "change_pct": -0.55}, {"name": "智能手表", "change_pct": 3.25}, {"name": "MiniLED", "change_pct": 1.91}, {"name": "传感器", "change_pct": 1.91}, {"name": "大硅片", "change_pct": 0.02}, {"name": "AI PC", "change_pct": 3.15}, {"name": "华为产业链", "change_pct": 2.03}, {"name": "回购", "change_pct": 0.37}, {"name": "光电共封装CPO", "change_pct": 1.18}, {"name": "智能眼镜/MR头显", "change_pct": 3.14}, {"name": "玻璃基板封装", "change_pct": 1.85}]}, {"code": "000712", "name": "锦龙股份", "hot_rank": 25, "hot_rank_chg": 1, "stock_cnt": 5794, "price": "12.98", "change": "10.00", "market_id": "33", "circulate_market_value": "11626628900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "证券业务", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.81}, {"name": "期货概念", "change_pct": -1.1}, {"name": "券商", "change_pct": 0.42}, {"name": "大金融", "change_pct": 0.71}, {"name": "东数西算/算力", "change_pct": 2.39}]}, {"code": "600371", "name": "万向德农", "hot_rank": 26, "hot_rank_chg": 1, "stock_cnt": 5794, "price": "12.69", "change": "9.96", "market_id": "17", "circulate_market_value": "3712814800.00", "change_type": "1", "change_section": "10", "change_days": "7", "change_reason": "转基因玉米", "xgb_concepts": [{"name": "农业种植", "change_pct": -1.7}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "转基因", "change_pct": -1.4}, {"name": "乡村振兴", "change_pct": -0.38}, {"name": "大农业", "change_pct": -0.38}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 27, "hot_rank_chg": -17, "stock_cnt": 5794, "price": "9.12", "change": "1.33", "market_id": "17", "circulate_market_value": "22968810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.84}, {"name": "密集调研", "change_pct": 0.29}, {"name": "工业大麻", "change_pct": 0.92}, {"name": "中药", "change_pct": -1.82}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "保健品", "change_pct": -1.3}, {"name": "民营医院", "change_pct": -0.65}, {"name": "医药", "change_pct": -1.61}, {"name": "化学原料药", "change_pct": -1.53}, {"name": "流感", "change_pct": -1.48}, {"name": "振兴东北", "change_pct": 0.09}, {"name": "食品", "change_pct": -0.98}]}, {"code": "002008", "name": "大族激光", "hot_rank": 28, "hot_rank_chg": 26, "stock_cnt": 5794, "price": "96.38", "change": "10.00", "market_id": "33", "circulate_market_value": "92209628000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI PCB"}, {"code": "600869", "name": "远东股份", "hot_rank": 29, "hot_rank_chg": -22, "stock_cnt": 5794, "price": "19.08", "change": "2.31", "market_id": "17", "circulate_market_value": "42345250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 30, "hot_rank_chg": 5, "stock_cnt": 5794, "price": "16.10", "change": "9.97", "market_id": "33", "circulate_market_value": "3964258400.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "折叠屏"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 31, "hot_rank_chg": 10, "stock_cnt": 5794, "price": "7.10", "change": "10.08", "market_id": "33", "circulate_market_value": "7333844200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.19}, {"name": "锂电池", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "铜箔/覆铜板", "change_pct": 2.36}, {"name": "粤港澳大湾区", "change_pct": -0.28}, {"name": "新能源汽车", "change_pct": 0.88}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.87}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 32, "hot_rank_chg": 13, "stock_cnt": 5794, "price": "22.59", "change": "9.98", "market_id": "17", "circulate_market_value": "9914679500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "短剧出海"}, {"code": "600613", "name": "神奇制药", "hot_rank": 33, "hot_rank_chg": -5, "stock_cnt": 5794, "price": "11.16", "change": "-10.00", "market_id": "17", "circulate_market_value": "5349211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.82}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "医药商业", "change_pct": -1.71}, {"name": "医药", "change_pct": -1.61}, {"name": "流感", "change_pct": -1.48}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 34, "hot_rank_chg": 2, "stock_cnt": 5794, "price": "75.75", "change": "3.51", "market_id": "33", "circulate_market_value": "54936670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 35, "hot_rank_chg": 8, "stock_cnt": 5794, "price": "851.90", "change": "-0.75", "market_id": "33", "circulate_market_value": "945556420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003005", "name": "竞业达", "hot_rank": 36, "hot_rank_chg": -3, "stock_cnt": 5794, "price": "16.53", "change": "9.98", "market_id": "33", "circulate_market_value": "2218238000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI教育"}, {"code": "002084", "name": "海鸥住工", "hot_rank": 37, "hot_rank_chg": 10, "stock_cnt": 5794, "price": "6.38", "change": "10.00", "market_id": "33", "circulate_market_value": "4112767700.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.18}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "装修装饰", "change_pct": 1.76}, {"name": "装配式建筑", "change_pct": 0.93}, {"name": "家具家居", "change_pct": 1.7}, {"name": "智能制造", "change_pct": 1.85}, {"name": "3D打印", "change_pct": 2.38}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 2.23}, {"name": "旧改", "change_pct": 0.96}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 38, "hot_rank_chg": 17, "stock_cnt": 5794, "price": "4.75", "change": "3.26", "market_id": "33", "circulate_market_value": "27810286000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.05}, {"name": "人工智能", "change_pct": 2.11}, {"name": "云计算数据中心", "change_pct": 1.96}, {"name": "水利", "change_pct": 0.74}, {"name": "直播/短视频", "change_pct": 4.64}, {"name": "大数据", "change_pct": 1.66}, {"name": "园林", "change_pct": 0.42}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 2.64}, {"name": "数字经济", "change_pct": 1.76}, {"name": "腾讯概念股", "change_pct": 2.48}, {"name": "理想汽车概念股", "change_pct": 1.47}, {"name": "第三代半导体", "change_pct": 1.52}, {"name": "快手概念股", "change_pct": 4.18}, {"name": "IGBT", "change_pct": 0.42}, {"name": "虚拟数字人", "change_pct": 3.23}, {"name": "AIGC概念", "change_pct": 3.91}, {"name": "字节跳动概念股", "change_pct": 3.28}, {"name": "氮化镓", "change_pct": 1.76}, {"name": "AI营销", "change_pct": 4.76}, {"name": "AI大模型/智能体", "change_pct": 2.05}, {"name": "多模态", "change_pct": 3.95}, {"name": "液冷服务器", "change_pct": 3.55}, {"name": "小红书概念股", "change_pct": 3.6}, {"name": "区块链", "change_pct": 1.33}]}, {"code": "603118", "name": "共进股份", "hot_rank": 39, "hot_rank_chg": 26, "stock_cnt": 5794, "price": "18.60", "change": "4.91", "market_id": "17", "circulate_market_value": "14643341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 40, "hot_rank_chg": -17, "stock_cnt": 5794, "price": "55.88", "change": "0.78", "market_id": "33", "circulate_market_value": "64121739000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 41, "hot_rank_chg": -12, "stock_cnt": 5794, "price": "53.01", "change": "-0.56", "market_id": "17", "circulate_market_value": "56856690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 42, "hot_rank_chg": 16, "stock_cnt": 5794, "price": "4.91", "change": "10.09", "market_id": "17", "circulate_market_value": "5982403100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "煤炭", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.31}, {"name": "煤炭", "change_pct": 1.34}, {"name": "有色金属", "change_pct": -0.32}, {"name": "国企改革", "change_pct": 0.12}, {"name": "河南国企改革", "change_pct": 0.53}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 43, "hot_rank_chg": 7, "stock_cnt": 5794, "price": "123.97", "change": "8.38", "market_id": "33", "circulate_market_value": "102773057000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 44, "hot_rank_chg": -4, "stock_cnt": 5794, "price": "34.99", "change": "-2.59", "market_id": "17", "circulate_market_value": "24191233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 45, "hot_rank_chg": 21, "stock_cnt": 5794, "price": "94.97", "change": "9.99", "market_id": "17", "circulate_market_value": "7507555000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块PCB"}, {"code": "003040", "name": "楚天龙", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "17.80", "change": "-3.78", "market_id": "33", "circulate_market_value": "8131934600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 47, "hot_rank_chg": 4, "stock_cnt": 5794, "price": "14.10", "change": "5.46", "market_id": "33", "circulate_market_value": "49038817000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 48, "hot_rank_chg": -11, "stock_cnt": 5794, "price": "36.47", "change": "-1.27", "market_id": "33", "circulate_market_value": "39421090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 49, "hot_rank_chg": -10, "stock_cnt": 5794, "price": "4.37", "change": "-10.08", "market_id": "33", "circulate_market_value": "9188695500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.29}, {"name": "中药", "change_pct": -1.82}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "维生素", "change_pct": -0.82}, {"name": "基因测序", "change_pct": -1.14}, {"name": "民营医院", "change_pct": -0.65}, {"name": "医药", "change_pct": -1.61}, {"name": "化学原料药", "change_pct": -1.53}, {"name": "PD-1抑制剂", "change_pct": -2.51}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 50, "hot_rank_chg": -12, "stock_cnt": 5794, "price": "3.81", "change": "-1.04", "market_id": "17", "circulate_market_value": "8428973700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 0.37}, {"name": "云计算数据中心", "change_pct": 1.96}, {"name": "光通信", "change_pct": 1.04}, {"name": "林业", "change_pct": 1.78}, {"name": "军民融合", "change_pct": 1.45}, {"name": "军工", "change_pct": 1.28}, {"name": "人造肉", "change_pct": -0.57}]}, {"code": "600721", "name": "百花医药", "hot_rank": 51, "hot_rank_chg": -20, "stock_cnt": 5794, "price": "13.90", "change": "-9.97", "market_id": "17", "circulate_market_value": "5345212100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 52, "hot_rank_chg": -38, "stock_cnt": 5794, "price": "4.97", "change": "-7.28", "market_id": "17", "circulate_market_value": "16244137000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -0.8}, {"name": "养老产业", "change_pct": 0.64}, {"name": "粤港澳大湾区", "change_pct": -0.28}, {"name": "民营医院", "change_pct": -0.65}, {"name": "地摊经济", "change_pct": -1.08}]}, {"code": "601138", "name": "工业富联", "hot_rank": 54, "hot_rank_chg": 18, "stock_cnt": 5794, "price": "64.84", "change": "1.25", "market_id": "17", "circulate_market_value": "1286690940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601799", "name": "星宇股份", "hot_rank": 55, "hot_rank_chg": 22, "stock_cnt": 5794, "price": "78.39", "change": "-3.79", "market_id": "17", "circulate_market_value": "22394410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 56, "hot_rank_chg": 26, "stock_cnt": 5794, "price": "11.88", "change": "6.55", "market_id": "17", "circulate_market_value": "7066562500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": 2.07}, {"name": "VR&AR", "change_pct": 2.49}, {"name": "装修装饰", "change_pct": 1.76}, {"name": "数字经济", "change_pct": 1.76}, {"name": "百度概念股", "change_pct": 2.35}, {"name": "全息概念", "change_pct": 2.81}, {"name": "NFT", "change_pct": 3.61}, {"name": "元宇宙", "change_pct": 3.06}, {"name": "虚拟数字人", "change_pct": 3.23}, {"name": "网红/MCN", "change_pct": 2.17}, {"name": "ChatGPT", "change_pct": 2.95}, {"name": "智能眼镜/MR头显", "change_pct": 3.14}, {"name": "多模态", "change_pct": 3.95}, {"name": "AI视频", "change_pct": 4.59}]}, {"code": "601700", "name": "风范股份", "hot_rank": 57, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "8.02", "change": "-4.30", "market_id": "17", "circulate_market_value": "9132833500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.18}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "光伏", "change_pct": -0.31}, {"name": "特高压", "change_pct": 0.13}, {"name": "智能电网", "change_pct": 0.93}]}, {"code": "600540", "name": "新赛股份", "hot_rank": 58, "hot_rank_chg": 17, "stock_cnt": 5794, "price": "5.56", "change": "10.10", "market_id": "17", "circulate_market_value": "3232455900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "业绩增长", "xgb_concepts": [{"name": "农业种植", "change_pct": -1.7}, {"name": "新疆国企改革", "change_pct": 0.15}, {"name": "农垦", "change_pct": -0.74}, {"name": "棉花", "change_pct": -0.78}, {"name": "新疆概念", "change_pct": 0.08}, {"name": "风电", "change_pct": 0.72}, {"name": "大农业", "change_pct": -0.38}, {"name": "国企改革", "change_pct": 0.12}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 59, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "406.00", "change": "2.31", "market_id": "17", "circulate_market_value": "272311640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003018", "name": "金富科技", "hot_rank": 60, "hot_rank_chg": -4, "stock_cnt": 5794, "price": "49.38", "change": "10.00", "market_id": "33", "circulate_market_value": "14049180000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷散热"}, {"code": "002428", "name": "云南锗业", "hot_rank": 61, "hot_rank_chg": 2, "stock_cnt": 5794, "price": "100.70", "change": "1.04", "market_id": "33", "circulate_market_value": "65757855000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 62, "hot_rank_chg": -13, "stock_cnt": 5794, "price": "22.22", "change": "-0.04", "market_id": "33", "circulate_market_value": "26141137000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 63, "hot_rank_chg": -19, "stock_cnt": 5794, "price": "11.21", "change": "-2.10", "market_id": "33", "circulate_market_value": "4941614100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.9}, {"name": "锂电池", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "新能源汽车", "change_pct": 0.88}, {"name": "两轮车", "change_pct": 0.74}, {"name": "珠宝饰品", "change_pct": -4.58}]}, {"code": "300418", "name": "昆仑万维", "hot_rank": 64, "hot_rank_chg": 25, "stock_cnt": 5794, "price": "43.99", "change": "8.89", "market_id": "33", "circulate_market_value": "51664394000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 65, "hot_rank_chg": 2, "stock_cnt": 5794, "price": "75.75", "change": "1.09", "market_id": "17", "circulate_market_value": "135548150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 66, "hot_rank_chg": 24, "stock_cnt": 5794, "price": "57.62", "change": "1.80", "market_id": "33", "circulate_market_value": "422070980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 67, "hot_rank_chg": 4, "stock_cnt": 5794, "price": "14.46", "change": "0.28", "market_id": "17", "circulate_market_value": "18570669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600551", "name": "时代出版", "hot_rank": 68, "hot_rank_chg": 16, "stock_cnt": 5794, "price": "8.25", "change": "10.00", "market_id": "17", "circulate_market_value": "5593955700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报扣非增长", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": 0.13}, {"name": "安徽国企改革", "change_pct": 0.22}, {"name": "教育", "change_pct": 1.94}, {"name": "破净股", "change_pct": -0.28}, {"name": "传媒", "change_pct": 4.31}, {"name": "国企改革", "change_pct": 0.12}, {"name": "在线教育", "change_pct": 2.4}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 69, "hot_rank_chg": 16, "stock_cnt": 5794, "price": "5.61", "change": "10.00", "market_id": "33", "circulate_market_value": "6523573500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "影视院线", "xgb_concepts": [{"name": "影视", "change_pct": 6.85}, {"name": "新疆概念", "change_pct": 0.08}, {"name": "阿里巴巴概念股", "change_pct": 2.43}, {"name": "腾讯概念股", "change_pct": 2.48}, {"name": "短剧/互动影游", "change_pct": 7.13}, {"name": "IP经济/谷子经济", "change_pct": 2.67}]}, {"code": "600498", "name": "烽火通信", "hot_rank": 70, "hot_rank_chg": -6, "stock_cnt": 5794, "price": "42.46", "change": "3.11", "market_id": "17", "circulate_market_value": "53993047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 71, "hot_rank_chg": -37, "stock_cnt": 5794, "price": "8.59", "change": "2.63", "market_id": "33", "circulate_market_value": "6251504800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.0}, {"name": "装配式建筑", "change_pct": 0.93}, {"name": "风电", "change_pct": 0.72}, {"name": "环氧丙烷", "change_pct": 0.07}, {"name": "乡村振兴", "change_pct": -0.38}, {"name": "建筑节能", "change_pct": 0.59}, {"name": "旧改", "change_pct": 0.96}]}, {"code": "001309", "name": "德明利", "hot_rank": 72, "hot_rank_chg": 15, "stock_cnt": 5794, "price": "436.50", "change": "1.74", "market_id": "33", "circulate_market_value": "72035182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002328", "name": "新朋股份", "hot_rank": 73, "hot_rank_chg": 43, "stock_cnt": 5794, "price": "8.50", "change": "9.96", "market_id": "33", "circulate_market_value": "4850830100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷机柜", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.02}, {"name": "特斯拉", "change_pct": 1.16}, {"name": "云计算数据中心", "change_pct": 1.96}, {"name": "汽车零部件", "change_pct": 1.47}, {"name": "新能源汽车", "change_pct": 0.88}, {"name": "储能", "change_pct": 0.5}, {"name": "新能源车零部件", "change_pct": 1.46}, {"name": "液冷服务器", "change_pct": 3.55}]}, {"code": "603629", "name": "利通电子", "hot_rank": 74, "hot_rank_chg": -12, "stock_cnt": 5794, "price": "122.16", "change": "1.84", "market_id": "17", "circulate_market_value": "44065971000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 75, "hot_rank_chg": -7, "stock_cnt": 5794, "price": "9.17", "change": "9.95", "market_id": "17", "circulate_market_value": "6107220000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报增长", "xgb_concepts": [{"name": "新零售", "change_pct": -0.54}]}, {"code": "600667", "name": "太极实业", "hot_rank": 76, "hot_rank_chg": -6, "stock_cnt": 5794, "price": "19.34", "change": "-0.97", "market_id": "17", "circulate_market_value": "40450426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 77, "hot_rank_chg": -29, "stock_cnt": 5794, "price": "7.65", "change": "7.14", "market_id": "17", "circulate_market_value": "18289715000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 1.34}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "国企改革", "change_pct": 0.12}, {"name": "河南国企改革", "change_pct": 0.53}]}, {"code": "600206", "name": "有研新材", "hot_rank": 78, "hot_rank_chg": -18, "stock_cnt": 5794, "price": "51.72", "change": "0.14", "market_id": "17", "circulate_market_value": "43783738000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 79, "hot_rank_chg": -6, "stock_cnt": 5794, "price": "35.18", "change": "0.40", "market_id": "17", "circulate_market_value": "120067569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 80, "hot_rank_chg": 39, "stock_cnt": 5794, "price": "31.00", "change": "2.65", "market_id": "33", "circulate_market_value": "43536181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 82, "hot_rank_chg": -21, "stock_cnt": 5794, "price": "91.50", "change": "-6.34", "market_id": "33", "circulate_market_value": "145258690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603721", "name": "中广天择", "hot_rank": 83, "hot_rank_chg": 25, "stock_cnt": 5794, "price": "19.10", "change": "10.02", "market_id": "17", "circulate_market_value": "2483000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI语料"}, {"code": "601929", "name": "吉视传媒", "hot_rank": 84, "hot_rank_chg": 37, "stock_cnt": 5794, "price": "2.57", "change": "9.83", "market_id": "17", "circulate_market_value": "8968755600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI应用", "xgb_concepts": [{"name": "广电", "change_pct": 3.68}, {"name": "超高清视频", "change_pct": 2.72}, {"name": "人工智能", "change_pct": 2.11}, {"name": "云计算数据中心", "change_pct": 1.96}, {"name": "影视", "change_pct": 6.85}, {"name": "智慧城市", "change_pct": 1.64}, {"name": "国产芯片", "change_pct": 2.07}, {"name": "振兴东北", "change_pct": 0.09}, {"name": "传媒", "change_pct": 4.31}, {"name": "低价股", "change_pct": -0.74}, {"name": "国企改革", "change_pct": 0.12}, {"name": "在线教育", "change_pct": 2.4}, {"name": "医疗信息化", "change_pct": 1.72}, {"name": "AI大模型/智能体", "change_pct": 2.05}, {"name": "IP经济/谷子经济", "change_pct": 2.67}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 85, "hot_rank_chg": -9, "stock_cnt": 5794, "price": "418.57", "change": "-0.90", "market_id": "17", "circulate_market_value": "170081030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 86, "hot_rank_chg": 42, "stock_cnt": 5794, "price": "88.27", "change": "2.85", "market_id": "17", "circulate_market_value": "129143807000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600691", "name": "潞化科技", "hot_rank": 88, "hot_rank_chg": 10, "stock_cnt": 5794, "price": "3.23", "change": "9.86", "market_id": "17", "circulate_market_value": "7673142600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "业绩扭亏", "xgb_concepts": [{"name": "甲醇", "change_pct": 3.35}, {"name": "化肥", "change_pct": -0.39}, {"name": "山西国企改革", "change_pct": 0.62}, {"name": "氢能源/燃料电池", "change_pct": 0.14}, {"name": "烧碱", "change_pct": 0.32}, {"name": "PVC", "change_pct": 0.54}, {"name": "煤化工", "change_pct": 2.36}, {"name": "大农业", "change_pct": -0.38}, {"name": "丁辛醇", "change_pct": 0.6}, {"name": "国企改革", "change_pct": 0.12}]}, {"code": "002156", "name": "通富微电", "hot_rank": 89, "hot_rank_chg": 11, "stock_cnt": 5794, "price": "64.56", "change": "1.27", "market_id": "33", "circulate_market_value": "97966715000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 90, "hot_rank_chg": -16, "stock_cnt": 5794, "price": "11.57", "change": "-3.10", "market_id": "17", "circulate_market_value": "20700330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.19}, {"name": "纯碱", "change_pct": -1.03}, {"name": "食品", "change_pct": -0.98}, {"name": "土壤修复", "change_pct": 0.13}, {"name": "东数西算/算力", "change_pct": 2.39}, {"name": "OpenClaw概念", "change_pct": 3.24}, {"name": "DeepSeek概念股", "change_pct": 2.64}]}, {"code": "002185", "name": "华天科技", "hot_rank": 91, "hot_rank_chg": 24, "stock_cnt": 5794, "price": "17.05", "change": "0.77", "market_id": "33", "circulate_market_value": "56708752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000011", "name": "深物业A", "hot_rank": 92, "hot_rank_chg": 4, "stock_cnt": 5794, "price": "10.07", "change": "10.05", "market_id": "33", "circulate_market_value": "5301608700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "房地产开发", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.9}, {"name": "房地产", "change_pct": -0.8}, {"name": "粤港澳大湾区", "change_pct": -0.28}, {"name": "住房租赁", "change_pct": -0.27}, {"name": "物业管理", "change_pct": -0.16}, {"name": "新型城镇化", "change_pct": 0.82}, {"name": "旧改", "change_pct": 0.96}]}, {"code": "002412", "name": "汉森制药", "hot_rank": 93, "hot_rank_chg": -15, "stock_cnt": 5794, "price": "11.82", "change": "-9.98", "market_id": "33", "circulate_market_value": "5884527900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.82}, {"name": "优化生育（三孩）", "change_pct": 0.13}, {"name": "农业种植", "change_pct": -1.7}, {"name": "强势人气股", "change_pct": 0.27}, {"name": "医药", "change_pct": -1.61}, {"name": "流感", "change_pct": -1.48}, {"name": "大农业", "change_pct": -0.38}]}, {"code": "002241", "name": "歌尔股份", "hot_rank": 94, "hot_rank_chg": 33, "stock_cnt": 5794, "price": "24.25", "change": "3.15", "market_id": "33", "circulate_market_value": "76283476000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 95, "hot_rank_chg": 8, "stock_cnt": 5794, "price": "34.16", "change": "-0.03", "market_id": "17", "circulate_market_value": "56844694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 96, "hot_rank_chg": -27, "stock_cnt": 5794, "price": "31.52", "change": "-3.25", "market_id": "17", "circulate_market_value": "12639520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 97, "hot_rank_chg": 17, "stock_cnt": 5794, "price": "37.85", "change": "6.65", "market_id": "17", "circulate_market_value": "136806680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603559", "name": "中通国脉", "hot_rank": 98, "hot_rank_chg": 8, "stock_cnt": 5794, "price": "10.54", "change": "10.02", "market_id": "17", "circulate_market_value": "4229459400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力", "xgb_concepts": [{"name": "5G", "change_pct": 1.96}, {"name": "ST摘帽", "change_pct": 0.72}, {"name": "云计算数据中心", "change_pct": 1.96}, {"name": "大数据", "change_pct": 1.66}, {"name": "东数西算/算力", "change_pct": 2.39}, {"name": "华为产业链", "change_pct": 2.03}, {"name": "时空大数据", "change_pct": 1.66}]}, {"code": "603256", "name": "宏和科技", "hot_rank": 99, "hot_rank_chg": 40, "stock_cnt": 5794, "price": "147.55", "change": "6.02", "market_id": "17", "circulate_market_value": "129803793000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 100, "hot_rank_chg": 2, "stock_cnt": 5794, "price": "27.77", "change": "-4.57", "market_id": "17", "circulate_market_value": "6727837900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "301262", "name": "海看股份", "price": 22.33, "change_pct": 19.99, "reason": "公司借助移动端视听牌照，正在布局微短剧项目", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 28.65, "first_limit_up": 1788153402, "break_limit_up_times": 5}, {"code": "603201", "name": "常润股份", "price": 16.37, "change_pct": 10.01, "reason": "中国最大的千斤顶制造企业；公司的产品主要分为4大系列，即商用千斤顶及工具、随车配套零部件、专业汽保维修设备以及外购辅助产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.86, "first_limit_up": 1788152986, "break_limit_up_times": 0}, {"code": "001221", "name": "悍高集团", "price": 41.27, "change_pct": 9.99, "reason": "公司主要从事家居五金及户外家具等产品的研产销\n", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 9.55, "first_limit_up": 1788139995, "break_limit_up_times": 10}, {"code": "600121", "name": "郑州煤电", "price": 4.91, "change_pct": 10.09, "reason": "1、实控人河南省国资委；公司是郑州煤炭龙头，拥有部分火电业务，参股公司复晟铝业（持股40%）拥有氧化铝粉产能；\n2、两大煤矿有望注入公司，未来或新增可采储量16.2亿吨", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 10.46, "first_limit_up": 1788142150, "break_limit_up_times": 0}, {"code": "003005", "name": "竞业达", "price": 16.53, "change_pct": 9.98, "reason": "公司“星空教育大模型”通过国家网信办备案，累计完成文生文、文生图、文生视频等7项深度合成算法备案，形成教育垂类大模型+深度合成算法+应用落地的完整AI服务体系", "plates": ["AI大模型/智能体"], "limit_up_days": 2, "turnover_ratio": 18.75, "first_limit_up": 1788143130, "break_limit_up_times": 0}, {"code": "000560", "name": "我爱我家", "price": 2.9, "change_pct": 9.85, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 2.73, "first_limit_up": 1788139500, "break_limit_up_times": 0}, {"code": "600246", "name": "万通发展", "price": 13.33, "change_pct": 9.98, "reason": "公司拟投资8.54亿元取得数渡科技62.98%股权，标的PCIe5.0交换芯片有望于2025年底逐步开始批量供货", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.92, "first_limit_up": 1788154188, "break_limit_up_times": 1}, {"code": "002328", "name": "新朋股份", "price": 8.5, "change_pct": 9.96, "reason": "公司液冷服务器机柜已完成样品生产并展示给客户，表示未来可提供智算中心基础架构的整体解决方案，将机柜、PDU、CDU、供回液歧管和监控系统等集成在一起，向客户提供AI数据中心液冷散热所需的多种产品组合", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 8.9, "first_limit_up": 1788141210, "break_limit_up_times": 0}, {"code": "601330", "name": "绿色动力", "price": 7.81, "change_pct": 10.0, "reason": "公司下属垃圾焚烧发电项目生产的电力通过公共电网系统上网", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1788140197, "break_limit_up_times": 0}, {"code": "601882", "name": "海天精工", "price": 21.91, "change_pct": 9.99, "reason": "国内领先的数控机床研发、生产企业，公司在数控机床研发领域已经有十余年的经验积累，主要产品包括包括数控龙门加工中心、数控卧式加工中心等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.98, "first_limit_up": 1788140010, "break_limit_up_times": 1}, {"code": "603001", "name": "奥康国际", "price": 9.03, "change_pct": 9.99, "reason": "公司为定位中高端商务时尚的国内皮鞋龙头，一季度业绩扭亏为盈", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.25, "first_limit_up": 1788156506, "break_limit_up_times": 0}, {"code": "600371", "name": "万向德农", "price": 12.69, "change_pct": 9.97, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 5, "turnover_ratio": 4.69, "first_limit_up": 1788139500, "break_limit_up_times": 0}, {"code": "002830", "name": "名雕股份", "price": 15.77, "change_pct": 9.97, "reason": "深圳地区装修龙头；近日广东云犀互动传媒成立，该公司由名雕股份全资持股，含多项AI业务，经营范围涵盖人工智能基础软件开发、应用软件开发及公共服务平台技术咨询服务", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.93, "first_limit_up": 1788141273, "break_limit_up_times": 0}, {"code": "603139", "name": "康惠股份", "price": 38.09, "change_pct": 9.99, "reason": "1、公司完成规模化算力集群部署，为AI模型训练、推理及科学计算提供算力服务；\n2、陕西省知名中药企业；公司拥有100多个国药准字号批文，消银颗粒、复方双花片等核心产品列入国家医保或基药目录", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.05, "first_limit_up": 1788153600, "break_limit_up_times": 2}, {"code": "000965", "name": "天保基建", "price": 3.62, "change_pct": 10.03, "reason": "天津滨海新区核心区天津保税区的地产公司", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 12.12, "first_limit_up": 1788139500, "break_limit_up_times": 4}, {"code": "603270", "name": "金帝股份", "price": 30.25, "change_pct": 10.0, "reason": "1、公司拟投资建设液冷关键换热部件及高效散热模组总成、液冷关键部件及集成式散热模组总成项目，投资额分别为2.10亿元、2.16亿元；\n2、公司在减速器领域主要有谐波减速机保持架、谐波减速机带齿保持架两类产品，谐波减速机保持架是针对机器人手指关节设计的一款保持架产品\n", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 12.81, "first_limit_up": 1788140082, "break_limit_up_times": 2}, {"code": "605118", "name": "力鼎光电", "price": 32.82, "change_pct": 9.99, "reason": "1、公司镜头产品在AI或机器人领域的作用主要是为其提供更加清晰、完整、高效的视觉捕捉和视觉识别，已沉淀了多年机器视觉应用领域的开发和生产技术；\n2、公司参股20%上海理鑫光学，后者主要产品包括激光超短焦投影镜头、增强现实眼镜核心元器件、AR/VR镜头等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.42, "first_limit_up": 1788146706, "break_limit_up_times": 0}, {"code": "300413", "name": "芒果超媒", "price": 16.98, "change_pct": 20.0, "reason": "公司已在芒果TV推出AIGC内容专属频道，并上线漫剧、仿真人剧、动画等内容", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 6.41, "first_limit_up": 1788140121, "break_limit_up_times": 0}, {"code": "603893", "name": "瑞芯微", "price": 194.59, "change_pct": 10.0, "reason": "公司RK182X协处理器顺利量产，已有数百个客户、几十个行业在深化研发中，应用场景覆盖各类机器人、车载AI BOX等领域，首批客户已进入量产阶段，将在下半年放量", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1788140243, "break_limit_up_times": 1}, {"code": "000011", "name": "深物业A", "price": 10.07, "change_pct": 10.05, "reason": "深圳国资委控股的深圳投资控股公司旗下；主营房地产开发、房屋租赁、物业管理，餐饮业务和仓储业务", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 2.18, "first_limit_up": 1788139500, "break_limit_up_times": 0}, {"code": "600227", "name": "赤天化", "price": 5.04, "change_pct": 10.04, "reason": "贵州最大的甲醇生产企业；公司化工业务涵盖尿素、甲醇及复合肥的生产和销售，具备年产52万吨尿素、10万吨复合肥、5万吨车用尿素的生产能力", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 16.54, "first_limit_up": 1788140115, "break_limit_up_times": 3}, {"code": "001330", "name": "博纳影业", "price": 5.61, "change_pct": 10.0, "reason": "公司短剧业务坚持 “主旋律 + 精品化” 路线，2025年推出《长津湖之冰雪尖兵》《红海行动：蛟龙小队》等短剧，延续电影叙事风格，在央视影音、腾讯视频播放量均破1.5亿；搭建 “博纳短剧工作室”，引入电影级制作团队，控制单部短剧成本超500万元，目前已储备6部主旋律短剧项目", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 11.11, "first_limit_up": 1788143130, "break_limit_up_times": 2}, {"code": "002098", "name": "浔兴股份", "price": 8.15, "change_pct": 9.99, "reason": "公司位于福建省晋江市，国内拉链行业的头部企业，第二季度净利润同比增长26.49%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.98, "first_limit_up": 1788139878, "break_limit_up_times": 0}, {"code": "603459", "name": "红板科技", "price": 94.97, "change_pct": 10.0, "reason": "公司面向光模块领域开展了800G三阶盲孔光模块PCB产品、高传输速率光模块电路板等多项研发项目，有生产1.6T光模块电路板的技术能力，相关业务正根据客户需求有序推进", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 27.25, "first_limit_up": 1788156963, "break_limit_up_times": 2}, {"code": "002903", "name": "宇环数控", "price": 31.85, "change_pct": 10.02, "reason": "公司智能装备包括工业机器人及智能化成套装备等，为客户提供数字化、网络化的智能制造技术综合解决方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.73, "first_limit_up": 1788140832, "break_limit_up_times": 0}, {"code": "603090", "name": "宏盛股份", "price": 42.13, "change_pct": 10.0, "reason": "公司开发的冷却分配单元CDU及列间空调已批量应用于数据中心液冷系统", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 4.81, "first_limit_up": 1788154263, "break_limit_up_times": 0}, {"code": "603178", "name": "圣龙股份", "price": 17.85, "change_pct": 9.98, "reason": "国内动力系统泵类产品龙头企业；公司在电机、减速器、控制器领域的技术积累，均可以支持对人形机器人相关领域的研发；一季度业绩同比扭亏", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.41, "first_limit_up": 1788142663, "break_limit_up_times": 3}, {"code": "300911", "name": "亿田智能", "price": 26.63, "change_pct": 20.01, "reason": "子公司签署10亿元算力中心建设合同", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 16.96, "first_limit_up": 1788154050, "break_limit_up_times": 0}, {"code": "603950", "name": "长源东谷", "price": 65.84, "change_pct": 10.01, "reason": "公司拟收购康豪机电，标的终端应用覆盖数据中心、发电及储能等场景，主要客户包括康明斯集团、卡特彼勒、MTU、广西玉柴、潍柴动力等国内外知名动力系统制造商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1788152744, "break_limit_up_times": 0}, {"code": "002133", "name": "广宇集团", "price": 3.1, "change_pct": 9.93, "reason": "深耕杭州的房地产开发商", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.05, "first_limit_up": 1788139500, "break_limit_up_times": 0}, {"code": "300364", "name": "中文在线", "price": 27.28, "change_pct": 20.02, "reason": "1、公司推出自研AI语言大模型“中文逍遥 1.0”，依托十多年在文学领域的深厚积累，利用超550万种数字内容资源训练而成；\n2、公司以优质 IP 为核心，开发各类衍生品，形成国谷、日谷、美谷品类矩阵，影视业务专注于微短剧（真人短剧和 AI 动漫短剧）制作与发行", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 21.64, "first_limit_up": 1788152442, "break_limit_up_times": 0}, {"code": "603297", "name": "永新光学", "price": 115.86, "change_pct": 10.0, "reason": "公司产品广泛应用于光刻设备、半导体光学量/检测设备等关键制程装备，并切入光刻机对准系统、照明系统等核心环节，在手订单快速增加", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.51, "first_limit_up": 1788158124, "break_limit_up_times": 0}, {"code": "002008", "name": "大族激光", "price": 96.38, "change_pct": 10.0, "reason": "全球领先的智能制造装备整体解决方案服务商，控股子公司大族数控研发、生产并销售PCB专用设备；一季报净利润同比上涨116.59%", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.05, "first_limit_up": 1788156861, "break_limit_up_times": 0}, {"code": "002856", "name": "*ST美芝", "price": 18.51, "change_pct": 9.98, "reason": "公司主要业务为建筑装饰工程的设计与施工", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.34, "first_limit_up": 1788144438, "break_limit_up_times": 4}, {"code": "002881", "name": "美格智能", "price": 44.9, "change_pct": 10.0, "reason": "公司5G模组已用于国内人形机器人并小批量发货，高算力AI模组为合作伙伴人形机器人原型机提供端侧AI算力", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.64, "first_limit_up": 1788142065, "break_limit_up_times": 2}, {"code": "600110", "name": "诺德股份", "price": 12.03, "change_pct": 9.96, "reason": "公司主营电解铜箔，新一代HVLP铜箔通过认证", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.28, "first_limit_up": 1788140016, "break_limit_up_times": 1}, {"code": "002886", "name": "沃特股份", "price": 29.04, "change_pct": 10.0, "reason": "1、公司已有PCB用聚四氟乙烯（PTFE）材料、散热用液晶高分子（LCP）和聚醚醚酮（PEEK）材料、数据连接用LCP和高温尼龙（PPA）材料等方案；\n2、公司的聚芳醚酮产线正在建设中，其中包含PEEK产线", "plates": ["氟化工"], "limit_up_days": 3, "turnover_ratio": 31.39, "first_limit_up": 1788139827, "break_limit_up_times": 7}, {"code": "603068", "name": "博通集成", "price": 39.31, "change_pct": 9.99, "reason": "1、公司BK7259等Wi-Fi6 MCU产品集成端侧智能能力，面向智能家居、智能硬件等场景；\n2、公司已有多款融合AI技术的AIoT芯片产品实现量产销售，应用领域涵盖AI眼镜、AI玩具等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.19, "first_limit_up": 1788153912, "break_limit_up_times": 0}, {"code": "600892", "name": "大晟文化", "price": 4.42, "change_pct": 9.95, "reason": "1、公司游戏影视双驱动，主营业务包括短剧制作、发行业务；\n2、公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 10.51, "first_limit_up": 1788153755, "break_limit_up_times": 0}, {"code": "600722", "name": "金牛化工", "price": 16.8, "change_pct": 10.02, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 2, "turnover_ratio": 23.68, "first_limit_up": 1788142220, "break_limit_up_times": 1}, {"code": "603216", "name": "梦天家居", "price": 22.65, "change_pct": 10.0, "reason": "公司在家具行业特别是木门领域具有领导地位，此前以7000万元增资重庆凌芯微电子并持股35%，切入功率半导体晶圆代工赛道", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.29, "first_limit_up": 1788140194, "break_limit_up_times": 2}, {"code": "601086", "name": "国芳集团", "price": 9.17, "change_pct": 9.95, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 3.81, "first_limit_up": 1788139500, "break_limit_up_times": 1}, {"code": "301231", "name": "荣信文化", "price": 31.28, "change_pct": 19.98, "reason": "公司始终坚持“内容+IP+AI 应用”的战略路径，控股子公司杭州余禾文化传播有限公司专注AI漫剧制作业务", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 19.48, "first_limit_up": 1788143715, "break_limit_up_times": 0}, {"code": "002875", "name": "安奈儿", "price": 14.49, "change_pct": 10.02, "reason": "我国知名的童装品牌之一，一季度净利润同比增长280.18%", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.95, "first_limit_up": 1788154890, "break_limit_up_times": 0}, {"code": "603269", "name": "海鸥股份", "price": 24.4, "change_pct": 10.01, "reason": "公司冷却塔已应用于数据算力中心", "plates": ["液冷服务器"], "limit_up_days": 3, "turnover_ratio": 10.55, "first_limit_up": 1788140129, "break_limit_up_times": 6}, {"code": "600551", "name": "时代出版", "price": 8.25, "change_pct": 10.0, "reason": "公司AI智能审校工具已实现所属出版单位全覆盖，并在AI制图、音视频制作、软件开发及文字处理领域深度应用", "plates": ["AI大模型/智能体"], "limit_up_days": 2, "turnover_ratio": 6.52, "first_limit_up": 1788153696, "break_limit_up_times": 0}, {"code": "600540", "name": "新赛股份", "price": 5.56, "change_pct": 10.1, "reason": "公司农业主要产品为棉籽、葵花籽、菜籽及其他油料作物，立足于新疆棉花产业，聚焦棉业全产业链", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 1.22, "first_limit_up": 1788139501, "break_limit_up_times": 0}, {"code": "002909", "name": "集泰股份", "price": 6.02, "change_pct": 10.05, "reason": "公司当前研发的液冷导热硅油，其应用主要聚焦于数据中心及储能领域的热管理解决方案", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 4.76, "first_limit_up": 1788140676, "break_limit_up_times": 0}, {"code": "605577", "name": "龙版传媒", "price": 10.62, "change_pct": 10.05, "reason": "1、公司探索运用生成式人工智能技术，加快品牌教育资源数字化聚合，推进中小学智慧教育服务平台建设并在智能 AI等与主业相关领域挖掘适合投资商机；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 2.92, "first_limit_up": 1788144170, "break_limit_up_times": 0}, {"code": "603113", "name": "金能科技", "price": 6.07, "change_pct": 9.96, "reason": "山东焦炭龙头；公司甲醇实际产能为10万吨/年，所产甲醇全部对外销售", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 7.71, "first_limit_up": 1788153161, "break_limit_up_times": 0}, {"code": "002303", "name": "美盈森", "price": 5.69, "change_pct": 10.06, "reason": "国际领先的包装一体化综合服务商；公司主营运输包装、精品包装、标签及电子功能材料模切产品，并持续为消费电子、白酒、家电等行业龙头提供一体化包装服务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.84, "first_limit_up": 1788153723, "break_limit_up_times": 1}, {"code": "603685", "name": "晨丰科技", "price": 26.43, "change_pct": 9.99, "reason": "1、公司主要产品包括印制电路板，主要应用于照明市场及显示背光源市场；\n2、公司以9,000万元增资北网智算，依托增量配电网低价绿电切入“绿色电力+算力服务”赛道，打造高绿电占比、低电价成本的算力中心整体解决方案", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.41, "first_limit_up": 1788142821, "break_limit_up_times": 0}, {"code": "002081", "name": "金 螳 螂", "price": 6.16, "change_pct": 10.0, "reason": "1、洁净室是公司重点布局的战略新赛道，已具备在电子半导体、新能源、大健康、实验室等高附加值领域构建系统集成能力，代表项目包括南京集成电路产业服务中心、杰华特微电子高性能电源芯片项目等；\n2、综合性专业化装饰集团；公司曾中标海南商业航天发射场项目，目前该工程已完工并投入使用，已为多次卫星发射任务提供稳定保障", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.18, "first_limit_up": 1788140532, "break_limit_up_times": 0}, {"code": "002921", "name": "联诚精密", "price": 23.22, "change_pct": 10.0, "reason": "公司减速类产品主要应用于工程机械行走马达等，表示现正积极开发机器人零部件产品市场，如机械臂和关节头等相关零件产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.53, "first_limit_up": 1788141804, "break_limit_up_times": 0}, {"code": "603313", "name": "梦百合", "price": 6.74, "change_pct": 9.95, "reason": "记忆绵家居制品供应商；公司主要从事致力于提升人类深度睡眠的家居产品—记忆绵床垫、记忆绵枕头等家居产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.05, "first_limit_up": 1788155801, "break_limit_up_times": 7}, {"code": "002534", "name": "西子洁能", "price": 16.52, "change_pct": 9.99, "reason": "1、公司熔盐储能可应用于数据中心，通过移峰填谷及储热温控实现“电—热—算”协同，并推进算力中心储能模式创新\n2、公司及子公司以承接太阳能光伏总承包项目为主，部分分布式光伏项目自持；公司在熔盐储能、电化学储能等领域有深厚技术积累和众多专利，参与建设多个储能项目，为火电厂灵活性调峰、电网侧储能调峰、用户侧储能等提供设备及解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.02, "first_limit_up": 1788139896, "break_limit_up_times": 1}, {"code": "003036", "name": "泰坦股份", "price": 59.61, "change_pct": 10.0, "reason": "1、公司电子布织机目前处于研发阶段；\n2、公司纺织机器人已完成纱筒抓取与生头关节研发", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.02, "first_limit_up": 1788141123, "break_limit_up_times": 0}, {"code": "601929", "name": "吉视传媒", "price": 2.57, "change_pct": 9.83, "reason": "1、吉林有线网络运营商，公司旗下影院公司开有影城，基于吉林台海量广播电视媒资资源及来画公司布局AI视频和可视化AI智能体；\n2、公司一直在开展和谋划数据服务业务，例如为政企客户提供机柜租赁服务、大数据云计算服务，政府云（吉林祥云）及多个行业云平台都部署在公司", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 6.01, "first_limit_up": 1788153284, "break_limit_up_times": 0}, {"code": "000892", "name": "欢瑞世纪", "price": 4.3, "change_pct": 9.97, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 7.52, "first_limit_up": 1788140091, "break_limit_up_times": 0}, {"code": "603358", "name": "华达科技", "price": 49.72, "change_pct": 10.0, "reason": "公司此前与埃夫特在工业/人形机器人制造研发生产、轻量化材料产品开发及汽车零部件行业应用等领域达成全面战略合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.86, "first_limit_up": 1788141961, "break_limit_up_times": 0}, {"code": "002169", "name": "智光电气", "price": 13.41, "change_pct": 10.01, "reason": "公司通过产业基金间接持有粤芯半导体股权，粤芯为粤港澳大湾区唯一量产12英寸特色工艺晶圆厂，三期厂房已封顶", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.08, "first_limit_up": 1788139902, "break_limit_up_times": 1}, {"code": "002757", "name": "南兴股份", "price": 17.48, "change_pct": 10.01, "reason": "公司开发了小鹭AIGC智能助手；全资子公司唯一网络是国内领先的数字经济基础设施服务提供商，主要经营范围包括IDC、云计算（含公有云、混合云、私有云及云增值等服务）、云联网、数字化解决方案等服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.96, "first_limit_up": 1788154269, "break_limit_up_times": 0}, {"code": "600671", "name": "天目药业", "price": 22.86, "change_pct": 10.01, "reason": "全国第一家中药制剂上市企业，拥有“天目山”、“新安江”、“黄山”三个医药品牌", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.86, "first_limit_up": 1788154404, "break_limit_up_times": 7}, {"code": "603058", "name": "永吉股份", "price": 10.32, "change_pct": 10.02, "reason": "1、子公司上海埃延生产的半导体材料衬底外延设备，目前设备处于客户验证阶段；\n2、贵州省内大规模的专业烟标印刷企业，主营业务为烟标和其他包装印刷品；控股子公司澳大利亚公司TB与曲靖云麻公司，分别开展医用大麻及工业大麻领域的业务", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.21, "first_limit_up": 1788144461, "break_limit_up_times": 2}, {"code": "002679", "name": "福建金森", "price": 11.74, "change_pct": 10.03, "reason": "公司经营区林地总面积近80万亩", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 2.15, "first_limit_up": 1788139500, "break_limit_up_times": 0}, {"code": "603978", "name": "深圳新星", "price": 20.92, "change_pct": 9.99, "reason": "公司自身是全球头部铝晶粒细化剂制造商，全资子公司松岩新能源建设有5800吨/年的六氟磷酸锂生产产能，投资设立全资子公司赣州市松辉氟新材料有限公司，主要从事氟化锂、PVDF等新能源材料研产销", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 10.58, "first_limit_up": 1788140356, "break_limit_up_times": 4}, {"code": "002396", "name": "星网锐捷", "price": 40.36, "change_pct": 10.0, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["超节点"], "limit_up_days": 3, "turnover_ratio": 18.57, "first_limit_up": 1788155187, "break_limit_up_times": 2}, {"code": "601595", "name": "上海电影", "price": 18.33, "change_pct": 10.02, "reason": "公司拥有“专业发行+综合院线+高端影院”完整电影发行放映产业链，控股股东上海电影集团已于前期在上海影视乐园启动真人互动剧游项目，相关剧本策划、演员统筹、投资测算正在积极推进中；旗下的大IP开发主体上影元与互影科技、阅文集团等联合出品了首个双人互动影游项目《谍影成双》", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1788143738, "break_limit_up_times": 0}, {"code": "002660", "name": "茂硕电源", "price": 8.38, "change_pct": 9.97, "reason": "公司主营消费电子类电源和LED驱动电源两大主营业务，部分电源产品可用于扫地机器人等机器人领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.59, "first_limit_up": 1788142779, "break_limit_up_times": 1}, {"code": "003018", "name": "金富科技", "price": 49.38, "change_pct": 10.0, "reason": "1、公司拟收购卓晖金属和联益热能各51%股权，标的公司均聚焦液冷散热产品；\n2、公司是国内最大的塑料防盗瓶盖供应商之一，长期稳定供应华润怡宝、可口可乐、达能等头部饮料品牌", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.93, "first_limit_up": 1788140646, "break_limit_up_times": 2}, {"code": "301218", "name": "华是科技", "price": 58.14, "change_pct": 20.0, "reason": "1、公司卫星导航产品为单北斗卫星定位终端，已用于内河船舶定位，可实时采集航速、航向等信息，目前有部分订单；\n2、公司此前以2250万元增资杭州宇创机器人科技有限公司，持股15%，布局具身智能与空间智能机器人赛道，双方在机器人高精度建图、自主导航等领域展开合作", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 24.17, "first_limit_up": 1788145563, "break_limit_up_times": 2}, {"code": "603533", "name": "掌阅科技", "price": 22.59, "change_pct": 9.98, "reason": "1、字节跳动参股，数字阅读行业龙头；公司已接入国内AI创业公司月之暗面旗下AI对话助手产品Kimi；\n2、公司推出海外短剧平台iDrama，现已上线数千部短剧作品，英语、日语、韩语、西班牙语、葡萄牙语等多语种版本", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 8.78, "first_limit_up": 1788143138, "break_limit_up_times": 1}, {"code": "000977", "name": "浪潮信息", "price": 85.18, "change_pct": 9.99, "reason": "浪潮AI服务器市场份额全球第一；公司从部件、整机到数据中心，持续进行液冷产品创新，包含全液冷冷板服务器、全液冷机柜、兆瓦级冷量分配单元、液冷智算算力仓、兆瓦级两相液冷整机柜等，连续4年蝉联中国液冷服务器市场第一", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.95, "first_limit_up": 1788155517, "break_limit_up_times": 1}, {"code": "000712", "name": "锦龙股份", "price": 12.98, "change_pct": 10.0, "reason": "公司主要经营业务为证券公司业务，持有中山证券67.78%股权", "plates": ["大金融"], "limit_up_days": 4, "turnover_ratio": 27.44, "first_limit_up": 1788139893, "break_limit_up_times": 5}, {"code": "603559", "name": "中通国脉", "price": 10.54, "change_pct": 10.02, "reason": "公司共同持股成立吉林省华君算力科技有限公司，经营范围包含云计算设备销售等", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 10.77, "first_limit_up": 1788142557, "break_limit_up_times": 3}, {"code": "002418", "name": "康盛股份", "price": 5.39, "change_pct": 10.0, "reason": "公司研发设计的浸没式液冷产品主要应用于数据中心散热", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 25.62, "first_limit_up": 1788141318, "break_limit_up_times": 0}, {"code": "603236", "name": "移远通信", "price": 61.64, "change_pct": 9.99, "reason": "公司机器人方案已落地商业服务、医疗、农业、家用、四足及人形机器人等多个领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.73, "first_limit_up": 1788156862, "break_limit_up_times": 2}, {"code": "002084", "name": "海鸥住工", "price": 6.38, "change_pct": 10.0, "reason": "公司主营业务聚焦在卫浴及厨房产品整组龙头及部品部件的制造服务与销售，控股股东拟变更为博泰车联", "plates": ["股权转让"], "limit_up_days": 6, "turnover_ratio": 0.97, "first_limit_up": 1788139500, "break_limit_up_times": 0}, {"code": "600691", "name": "潞化科技", "price": 3.23, "change_pct": 9.86, "reason": "公司拥有甲醇设计产能40万吨，上半年净利润同比扭亏为盈", "plates": ["石油化工", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 5.81, "first_limit_up": 1788139929, "break_limit_up_times": 1}, {"code": "603721", "name": "中广天择", "price": 19.1, "change_pct": 10.02, "reason": "具有全国影响力的综合性传媒集团；公司主要从事综艺、纪录片、影视剧、短视频等视频内容的生产和运营，与Kimi智能助手的关联主要体现在公司为AI大模型提供数据支持和交易平台方面", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.09, "first_limit_up": 1788140131, "break_limit_up_times": 1}, {"code": "002141", "name": "贤丰控股", "price": 7.1, "change_pct": 10.08, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 14.64, "first_limit_up": 1788141891, "break_limit_up_times": 0}, {"code": "002375", "name": "亚厦股份", "price": 4.07, "change_pct": 10.0, "reason": "1、国内建筑装饰行业龙头之一，此前是国内唯一一家同时拥有被住建部认定 “国家住宅产业基地”和“国家装配式建筑产业基地”的装饰企业；\n2、旗下子公司盈创科技以技术众包模式参与美国超级高铁建设；\n3、公司表示将积极探索建筑光伏一体化市场，开拓新的盈利增长点；\n4、公司参与了亚运会媒体村、亚运会运动员村、亚运会亚运村国际区（滨水区北区块）幕墙工程、运河亚运公园（原城西公园）项目幕墙工程等项目", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.24, "first_limit_up": 1788139815, "break_limit_up_times": 4}, {"code": "601136", "name": "首创证券", "price": 15.86, "change_pct": 9.99, "reason": "公司作为具有全牌照经营资质的综合性证券公司，一季度净利润同比增长30.19%", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 1.54, "first_limit_up": 1788157467, "break_limit_up_times": 0}, {"code": "603989", "name": "艾华集团", "price": 31.46, "change_pct": 10.0, "reason": "1、国内铝电解电容器行业龙头，上半年净利润同比增长17.21%；\n2、公司的产品是AI算力硬件供电与电能管理链条中的关键基础元件，可应用在AI基础设施的各个关键部位，如服务器电源及供电保障与能源系统等", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 10.24, "first_limit_up": 1788140554, "break_limit_up_times": 3}, {"code": "002855", "name": "捷荣技术", "price": 16.1, "change_pct": 9.97, "reason": "华为Mate XT 2新一代三折叠官宣2026年9月7日首发，公司的客户代工厂家向华为品牌产品提供公司的产品精密结构件", "plates": ["其他"], "limit_up_days": 5, "turnover_ratio": 14.49, "first_limit_up": 1788139863, "break_limit_up_times": 6}, {"code": "301151", "name": "冠龙节能", "price": 20.74, "change_pct": 20.02, "reason": "公司专注于节水阀门的设计研发、生产制造及销售服务领域，致力于为城镇给排水系统、水利工程建设、数据中心液冷系统等多个下游关键领域提供全面的产品及解决方案", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 5.03, "first_limit_up": 1788140475, "break_limit_up_times": 0}, {"code": "605287", "name": "德才股份", "price": 41.58, "change_pct": 10.0, "reason": "1、控股孙公司奇想无限作为漫剧制作以及提出AIGC领域智能体一站式解决方案的团队，受邀参与火山引擎大模型游戏+漫剧 AI 工坊”广州企业沙龙；\n2、公司主营业务涵盖内装装饰工程、建筑幕墙工程、智能化工程、古建筑工程等", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 6.58, "first_limit_up": 1788140188, "break_limit_up_times": 2}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600745": "ST/风险警示股"};