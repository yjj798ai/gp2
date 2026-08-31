const UPDATE_TIME = "2026-08-31 03:07";
const THS_HOT = [
  {
    "name": "粮食概念",
    "rise": -0.11,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885995"
  },
  {
    "name": "创新药",
    "rise": -2.27,
    "rate": 0,
    "tag": "",
    "hotTag": "连续111天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "液冷服务器",
    "rise": 1.13,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.12,
    "rate": 0,
    "tag": "",
    "hotTag": "连续281天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": 0.26,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "AI应用",
    "rise": 0.54,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续39天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "化肥",
    "rise": -0.65,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885967"
  },
  {
    "name": "存储芯片",
    "rise": -0.87,
    "rate": 0,
    "tag": "",
    "hotTag": "连续234天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "光纤概念",
    "rise": -0.37,
    "rate": 0,
    "tag": "",
    "hotTag": "连续110天上榜",
    "rankChg": 1,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "PET铜箔",
    "rise": -0.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "黄金概念",
    "rise": -4.34,
    "rate": 0,
    "tag": "",
    "hotTag": "连续19天上榜",
    "rankChg": -2,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "算力租赁",
    "rise": 0.42,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续145天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "商业航天",
    "rise": -0.09,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续210天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "AI视频",
    "rise": 3.44,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 3,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "猪肉",
    "rise": 0.13,
    "rate": 0,
    "tag": "",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "MLCC概念",
    "rise": -1.28,
    "rate": 0,
    "tag": "",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "农业种植",
    "rise": -1.15,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -5,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "短剧游戏",
    "rise": 3.08,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 3,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "人形机器人",
    "rise": 0.35,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续445天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "玉米",
    "rise": 0.31,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "粮食ETF",
    "code": "885811"
  }
];
const THS_EVENTS = [
  {
    "title": "国内首部AIGC长剧《后西游记》8月31日开播",
    "desc": "",
    "heat": 741389,
    "direction": "AI剧集",
    "themes": [
      "AI漫剧"
    ],
    "stocks": [
      {
        "name": "荣信文化",
        "code": "301231",
        "chg": 19.984657
      }
    ]
  },
  {
    "title": "我国首次实现地月双向高速激光通信",
    "desc": "",
    "heat": 260474,
    "direction": "地月激光通信",
    "themes": [
      "地月激光通信"
    ],
    "stocks": [
      {
        "name": "睿创微纳",
        "code": "688002",
        "chg": 8.639456
      }
    ]
  },
  {
    "title": "覆铜板龙头，年内第七次涨价",
    "desc": "",
    "heat": 245538,
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
    "heat": 206363,
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
    "heat": 179281,
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
    "heat": 21081,
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
        "name": "福鞍股份",
        "code": "603315",
        "chg": 7.665505
      }
    ]
  },
  {
    "title": "伊朗革命卫队：伊朗向美军基地发射导弹",
    "desc": "",
    "heat": 10091,
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
    "name": "影视",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+4.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+3.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+3.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+3.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+2.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+2.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+2.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "+2.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+2.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+2.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "炭黑",
    "change": "+2.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+2.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "NFT",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+1.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "多模态",
    "change": "+1.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识产权",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AIGC概念",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5846,
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
        "change_pct": -0.69
      },
      {
        "name": "人工智能",
        "change_pct": 0.47
      },
      {
        "name": "VR&AR",
        "change_pct": 0.68
      },
      {
        "name": "京津冀",
        "change_pct": -0.66
      },
      {
        "name": "装修装饰",
        "change_pct": 1.2
      },
      {
        "name": "住房租赁",
        "change_pct": 0.48
      },
      {
        "name": "破净股",
        "change_pct": -0.41
      },
      {
        "name": "数字经济",
        "change_pct": 0.35
      },
      {
        "name": "房产经纪",
        "change_pct": 3.71
      },
      {
        "name": "物业管理",
        "change_pct": -0.17
      },
      {
        "name": "低价股",
        "change_pct": -0.66
      },
      {
        "name": "华为产业链",
        "change_pct": 0.31
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.52
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 3,
    "hot_rank_chg": -1,
    "stock_cnt": 5846,
    "price": "5.03",
    "change": "-6.16",
    "market_id": "17",
    "circulate_market_value": "16440244000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.76
      },
      {
        "name": "养老产业",
        "change_pct": -0.56
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.57
      },
      {
        "name": "民营医院",
        "change_pct": -1.21
      },
      {
        "name": "地摊经济",
        "change_pct": -1.52
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 4,
    "hot_rank_chg": 0,
    "stock_cnt": 5846,
    "price": "12.45",
    "change": "5.78",
    "market_id": "17",
    "circulate_market_value": "7990201100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.74
      },
      {
        "name": "农业种植",
        "change_pct": -0.44
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.02
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.6
      },
      {
        "name": "休闲食品",
        "change_pct": -0.28
      },
      {
        "name": "食品",
        "change_pct": -1.16
      },
      {
        "name": "食品安全",
        "change_pct": -0.8
      },
      {
        "name": "社区团购",
        "change_pct": -1.28
      },
      {
        "name": "大农业",
        "change_pct": -0.44
      },
      {
        "name": "预制菜",
        "change_pct": -1.06
      },
      {
        "name": "人造肉",
        "change_pct": -0.86
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 5,
    "hot_rank_chg": 0,
    "stock_cnt": 5846,
    "price": "8.72",
    "change": "4.30",
    "market_id": "33",
    "circulate_market_value": "6353391900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.59
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.52
      },
      {
        "name": "风电",
        "change_pct": -0.33
      },
      {
        "name": "环氧丙烷",
        "change_pct": -1.02
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.6
      },
      {
        "name": "建筑节能",
        "change_pct": 0.02
      },
      {
        "name": "旧改",
        "change_pct": 0.41
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 6,
    "hot_rank_chg": 0,
    "stock_cnt": 5846,
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
        "change_pct": -0.44
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "转基因",
        "change_pct": -0.43
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.6
      },
      {
        "name": "大农业",
        "change_pct": -0.44
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 7,
    "hot_rank_chg": 6,
    "stock_cnt": 5846,
    "price": "8.06",
    "change": "2.80",
    "market_id": "33",
    "circulate_market_value": "13129839800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.03
      },
      {
        "name": "电竞",
        "change_pct": 0.77
      },
      {
        "name": "手游",
        "change_pct": 0.85
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "人工智能",
        "change_pct": 0.47
      },
      {
        "name": "游戏",
        "change_pct": 1.7
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.35
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.57
      },
      {
        "name": "快手概念股",
        "change_pct": 2.14
      },
      {
        "name": "元宇宙",
        "change_pct": 1.31
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.57
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.44
      },
      {
        "name": "web3.0",
        "change_pct": 0.84
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.77
      },
      {
        "name": "数据要素",
        "change_pct": 0.79
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.46
      },
      {
        "name": "AI营销",
        "change_pct": 3.12
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.17
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.86
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.52
      },
      {
        "name": "人形机器人",
        "change_pct": 0.32
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.6
      },
      {
        "name": "多模态",
        "change_pct": 1.85
      },
      {
        "name": "AI视频",
        "change_pct": 2.28
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.42
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.86
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 8,
    "hot_rank_chg": 2,
    "stock_cnt": 5846,
    "price": "10.99",
    "change": "-4.02",
    "market_id": "33",
    "circulate_market_value": "4844633200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.03
      },
      {
        "name": "锂电池",
        "change_pct": -0.92
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.36
      },
      {
        "name": "两轮车",
        "change_pct": -0.54
      },
      {
        "name": "珠宝饰品",
        "change_pct": -5.42
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": 6,
    "stock_cnt": 5846,
    "price": "8.86",
    "change": "-1.56",
    "market_id": "17",
    "circulate_market_value": "22313998000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.03
      },
      {
        "name": "密集调研",
        "change_pct": -0.78
      },
      {
        "name": "工业大麻",
        "change_pct": -0.28
      },
      {
        "name": "中药",
        "change_pct": -2.28
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "保健品",
        "change_pct": -1.63
      },
      {
        "name": "民营医院",
        "change_pct": -1.21
      },
      {
        "name": "医药",
        "change_pct": -2.19
      },
      {
        "name": "化学原料药",
        "change_pct": -2.09
      },
      {
        "name": "流感",
        "change_pct": -1.96
      },
      {
        "name": "振兴东北",
        "change_pct": -0.47
      },
      {
        "name": "食品",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 10,
    "hot_rank_chg": 7,
    "stock_cnt": 5846,
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
        "change_pct": -2.28
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "医药商业",
        "change_pct": -2.15
      },
      {
        "name": "医药",
        "change_pct": -2.19
      },
      {
        "name": "流感",
        "change_pct": -1.96
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 11,
    "hot_rank_chg": 0,
    "stock_cnt": 5846,
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
        "change_pct": -0.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.05
      },
      {
        "name": "装修装饰",
        "change_pct": 1.2
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.52
      },
      {
        "name": "航天",
        "change_pct": -0.23
      },
      {
        "name": "旧改",
        "change_pct": 0.41
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 14,
    "hot_rank_chg": -5,
    "stock_cnt": 5846,
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
        "change_pct": 2.36
      },
      {
        "name": "化肥",
        "change_pct": -0.71
      },
      {
        "name": "保健品",
        "change_pct": -1.63
      },
      {
        "name": "民营医院",
        "change_pct": -1.21
      },
      {
        "name": "医药",
        "change_pct": -2.19
      },
      {
        "name": "煤化工",
        "change_pct": 1.68
      },
      {
        "name": "食品",
        "change_pct": -1.16
      },
      {
        "name": "大农业",
        "change_pct": -0.44
      },
      {
        "name": "干细胞",
        "change_pct": -2.15
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -1.91
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 19,
    "hot_rank_chg": 84,
    "stock_cnt": 5846,
    "price": "3.20",
    "change": "1.27",
    "market_id": "33",
    "circulate_market_value": "31088362000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": -0.54
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.03
      },
      {
        "name": "股权转让",
        "change_pct": -0.33
      },
      {
        "name": "房地产",
        "change_pct": -0.76
      },
      {
        "name": "养老产业",
        "change_pct": -0.56
      },
      {
        "name": "冷链",
        "change_pct": -0.59
      },
      {
        "name": "住房租赁",
        "change_pct": 0.48
      },
      {
        "name": "破净股",
        "change_pct": -0.41
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.14
      },
      {
        "name": "物业管理",
        "change_pct": -0.17
      },
      {
        "name": "旧改",
        "change_pct": 0.41
      },
      {
        "name": "REITs",
        "change_pct": -1.65
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 22,
    "hot_rank_chg": -8,
    "stock_cnt": 5846,
    "price": "4.38",
    "change": "-9.88",
    "market_id": "33",
    "circulate_market_value": "9209722300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.78
      },
      {
        "name": "中药",
        "change_pct": -2.28
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "维生素",
        "change_pct": -1.32
      },
      {
        "name": "基因测序",
        "change_pct": -1.68
      },
      {
        "name": "民营医院",
        "change_pct": -1.21
      },
      {
        "name": "医药",
        "change_pct": -2.19
      },
      {
        "name": "化学原料药",
        "change_pct": -2.09
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -3.16
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 23,
    "hot_rank_chg": 3,
    "stock_cnt": 5846,
    "price": "3.72",
    "change": "-3.38",
    "market_id": "17",
    "circulate_market_value": "8229864100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.81
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.05
      },
      {
        "name": "光通信",
        "change_pct": -0.91
      },
      {
        "name": "林业",
        "change_pct": 1.24
      },
      {
        "name": "军民融合",
        "change_pct": -0.13
      },
      {
        "name": "军工",
        "change_pct": -0.23
      },
      {
        "name": "人造肉",
        "change_pct": -0.86
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 25,
    "hot_rank_chg": -3,
    "stock_cnt": 5846,
    "price": "9.03",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "4766052800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -0.44
      },
      {
        "name": "棉花",
        "change_pct": -0.85
      },
      {
        "name": "大农业",
        "change_pct": -0.44
      },
      {
        "name": "供销社",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 27,
    "hot_rank_chg": 12,
    "stock_cnt": 5846,
    "price": "12.32",
    "change": "4.41",
    "market_id": "33",
    "circulate_market_value": "11035444400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.33
      },
      {
        "name": "期货概念",
        "change_pct": -1.82
      },
      {
        "name": "券商",
        "change_pct": -1.01
      },
      {
        "name": "大金融",
        "change_pct": 0.34
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 28,
    "hot_rank_chg": 54,
    "stock_cnt": 5846,
    "price": "11.42",
    "change": "3.54",
    "market_id": "17",
    "circulate_market_value": "8459680200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.76
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "光通信",
        "change_pct": -0.91
      },
      {
        "name": "京津冀",
        "change_pct": -0.66
      },
      {
        "name": "土地流转",
        "change_pct": -1.08
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.63
      },
      {
        "name": "物业管理",
        "change_pct": -0.17
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 29,
    "hot_rank_chg": 13,
    "stock_cnt": 5846,
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
        "change_pct": -2.28
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.55
      },
      {
        "name": "农业种植",
        "change_pct": -0.44
      },
      {
        "name": "强势人气股",
        "change_pct": -0.93
      },
      {
        "name": "医药",
        "change_pct": -2.19
      },
      {
        "name": "流感",
        "change_pct": -1.96
      },
      {
        "name": "大农业",
        "change_pct": -0.44
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 31,
    "hot_rank_chg": -3,
    "stock_cnt": 5846,
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
        "change_pct": 0.03
      },
      {
        "name": "房地产",
        "change_pct": -0.76
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.57
      },
      {
        "name": "住房租赁",
        "change_pct": 0.48
      },
      {
        "name": "物业管理",
        "change_pct": -0.17
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.26
      },
      {
        "name": "旧改",
        "change_pct": 0.41
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 32,
    "hot_rank_chg": -5,
    "stock_cnt": 5846,
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
        "change_pct": -0.44
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.53
      },
      {
        "name": "农垦",
        "change_pct": -0.26
      },
      {
        "name": "棉花",
        "change_pct": -0.85
      },
      {
        "name": "新疆概念",
        "change_pct": -0.4
      },
      {
        "name": "风电",
        "change_pct": -0.33
      },
      {
        "name": "大农业",
        "change_pct": -0.44
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "600479",
    "name": "千金药业",
    "hot_rank": 34,
    "hot_rank_chg": -15,
    "stock_cnt": 5846,
    "price": "12.49",
    "change": "-6.30",
    "market_id": "17",
    "circulate_market_value": "5227153900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.56
      },
      {
        "name": "中药",
        "change_pct": -2.28
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.55
      },
      {
        "name": "农业种植",
        "change_pct": -0.44
      },
      {
        "name": "人工智能",
        "change_pct": 0.47
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.02
      },
      {
        "name": "医药",
        "change_pct": -2.19
      },
      {
        "name": "流感",
        "change_pct": -1.96
      },
      {
        "name": "大农业",
        "change_pct": -0.44
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 35,
    "hot_rank_chg": 13,
    "stock_cnt": 5846,
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
        "change_pct": 0.24
      },
      {
        "name": "锂电池",
        "change_pct": -0.92
      },
      {
        "name": "石墨烯",
        "change_pct": -0.62
      },
      {
        "name": "新能源整车",
        "change_pct": -1.1
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.05
      },
      {
        "name": "汽车整车",
        "change_pct": -1.62
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.36
      },
      {
        "name": "白色家电",
        "change_pct": 0.19
      },
      {
        "name": "家电",
        "change_pct": 0.37
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.83
      },
      {
        "name": "热泵",
        "change_pct": 0.89
      },
      {
        "name": "轮边电机",
        "change_pct": 0.8
      },
      {
        "name": "超级电容",
        "change_pct": -0.77
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.4
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 36,
    "hot_rank_chg": -4,
    "stock_cnt": 5846,
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
        "change_pct": -0.6
      },
      {
        "name": "强势人气股",
        "change_pct": -0.96
      },
      {
        "name": "装修装饰",
        "change_pct": 1.23
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.52
      },
      {
        "name": "家具家居",
        "change_pct": 1.23
      },
      {
        "name": "智能制造",
        "change_pct": 0.35
      },
      {
        "name": "3D打印",
        "change_pct": 0.44
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
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "002742",
    "name": "冀衡医药",
    "hot_rank": 37,
    "hot_rank_chg": -6,
    "stock_cnt": 5846,
    "price": "5.62",
    "change": "-9.94",
    "market_id": "33",
    "circulate_market_value": "2944436700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.6
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.31
      },
      {
        "name": "强势人气股",
        "change_pct": -0.96
      },
      {
        "name": "医药",
        "change_pct": -2.19
      },
      {
        "name": "化学原料药",
        "change_pct": -2.09
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": -2.01
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.19
      },
      {
        "name": "减肥药",
        "change_pct": -2.14
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 44,
    "hot_rank_chg": 84,
    "stock_cnt": 5846,
    "price": "10.49",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "24362770000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -6.59
      },
      {
        "name": "有色 · 铜",
        "change_pct": -3.41
      },
      {
        "name": "有色 · 锑",
        "change_pct": -5.68
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.07
      },
      {
        "name": "有色 · 锌",
        "change_pct": -4.36
      },
      {
        "name": "有色金属",
        "change_pct": -1.76
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "白银",
        "change_pct": -6.28
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 46,
    "hot_rank_chg": -6,
    "stock_cnt": 5846,
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
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 47,
    "hot_rank_chg": -26,
    "stock_cnt": 5846,
    "price": "8.09",
    "change": "-3.46",
    "market_id": "17",
    "circulate_market_value": "9212546600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.6
      },
      {
        "name": "强势人气股",
        "change_pct": -0.96
      },
      {
        "name": "光伏",
        "change_pct": -1.61
      },
      {
        "name": "特高压",
        "change_pct": -1.21
      },
      {
        "name": "智能电网",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 49,
    "hot_rank_chg": -16,
    "stock_cnt": 5846,
    "price": "5.83",
    "change": "-1.52",
    "market_id": "33",
    "circulate_market_value": "206190390000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.64
      },
      {
        "name": "手机产业链",
        "change_pct": 0.6
      },
      {
        "name": "超高清视频",
        "change_pct": 0.68
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.48
      },
      {
        "name": "电竞",
        "change_pct": 0.78
      },
      {
        "name": "半导体",
        "change_pct": -0.85
      },
      {
        "name": "人工智能",
        "change_pct": 0.5
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.88
      },
      {
        "name": "VR&AR",
        "change_pct": 0.67
      },
      {
        "name": "OLED",
        "change_pct": -0.6
      },
      {
        "name": "京津冀",
        "change_pct": -0.63
      },
      {
        "name": "物联网",
        "change_pct": 0.26
      },
      {
        "name": "指纹识别",
        "change_pct": -0.29
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.44
      },
      {
        "name": "白马股",
        "change_pct": -0.78
      },
      {
        "name": "智能制造",
        "change_pct": 0.35
      },
      {
        "name": "小米概念股",
        "change_pct": 0.58
      },
      {
        "name": "国产芯片",
        "change_pct": -0.68
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.49
      },
      {
        "name": "全息概念",
        "change_pct": 1.44
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.25
      },
      {
        "name": "MicroLED",
        "change_pct": -0.25
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.77
      },
      {
        "name": "智能手表",
        "change_pct": 0.95
      },
      {
        "name": "MiniLED",
        "change_pct": -0.22
      },
      {
        "name": "传感器",
        "change_pct": -0.15
      },
      {
        "name": "大硅片",
        "change_pct": -3.14
      },
      {
        "name": "AI PC",
        "change_pct": 0.95
      },
      {
        "name": "华为产业链",
        "change_pct": 0.32
      },
      {
        "name": "回购",
        "change_pct": -0.77
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.07
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.85
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "600654",
    "name": "中安科",
    "hot_rank": 55,
    "hot_rank_chg": -17,
    "stock_cnt": 5846,
    "price": "3.33",
    "change": "-8.27",
    "market_id": "17",
    "circulate_market_value": "7717048000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -1.0
      },
      {
        "name": "国产软件",
        "change_pct": 0.33
      },
      {
        "name": "人工智能",
        "change_pct": 0.5
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.06
      },
      {
        "name": "智慧城市",
        "change_pct": 0.38
      },
      {
        "name": "智慧安防",
        "change_pct": 0.91
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.47
      },
      {
        "name": "消防",
        "change_pct": -0.2
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.29
      },
      {
        "name": "传感器",
        "change_pct": -0.15
      },
      {
        "name": "华为产业链",
        "change_pct": 0.32
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 59,
    "hot_rank_chg": -1,
    "stock_cnt": 5846,
    "price": "11.49",
    "change": "-3.77",
    "market_id": "17",
    "circulate_market_value": "20557199000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.37
      },
      {
        "name": "纯碱",
        "change_pct": -1.31
      },
      {
        "name": "食品",
        "change_pct": -1.16
      },
      {
        "name": "土壤修复",
        "change_pct": -0.42
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.47
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.21
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 63,
    "hot_rank_chg": 22,
    "stock_cnt": 5846,
    "price": "7.49",
    "change": "-0.13",
    "market_id": "17",
    "circulate_market_value": "8105668000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.78
      },
      {
        "name": "农业种植",
        "change_pct": -0.48
      },
      {
        "name": "化肥",
        "change_pct": -0.69
      },
      {
        "name": "转基因",
        "change_pct": -0.51
      },
      {
        "name": "土地流转",
        "change_pct": -1.06
      },
      {
        "name": "农垦",
        "change_pct": -0.28
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.57
      },
      {
        "name": "大农业",
        "change_pct": -0.42
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "大豆",
        "change_pct": -1.24
      }
    ]
  },
  {
    "code": "000402",
    "name": "金融街",
    "hot_rank": 64,
    "hot_rank_chg": 1014,
    "stock_cnt": 5846,
    "price": "2.59",
    "change": "1.96",
    "market_id": "33",
    "circulate_market_value": "7770534600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.75
      },
      {
        "name": "雄安新区",
        "change_pct": -0.12
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.59
      },
      {
        "name": "破净股",
        "change_pct": -0.41
      },
      {
        "name": "碳中和",
        "change_pct": -0.62
      },
      {
        "name": "低价股",
        "change_pct": -0.64
      }
    ]
  },
  {
    "code": "600048",
    "name": "保利发展",
    "hot_rank": 66,
    "hot_rank_chg": 49,
    "stock_cnt": 5846,
    "price": "5.08",
    "change": "-2.31",
    "market_id": "17",
    "circulate_market_value": "60690148000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.78
      },
      {
        "name": "房地产",
        "change_pct": -0.75
      },
      {
        "name": "白马股",
        "change_pct": -0.78
      },
      {
        "name": "住房租赁",
        "change_pct": 0.51
      },
      {
        "name": "破净股",
        "change_pct": -0.41
      },
      {
        "name": "物业管理",
        "change_pct": -0.22
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "旧改",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 69,
    "hot_rank_chg": 147,
    "stock_cnt": 5846,
    "price": "7.61",
    "change": "6.72",
    "market_id": "17",
    "circulate_market_value": "18217991000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.73
      },
      {
        "name": "强势人气股",
        "change_pct": -0.96
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 70,
    "hot_rank_chg": 61,
    "stock_cnt": 5846,
    "price": "3.16",
    "change": "-6.21",
    "market_id": "33",
    "circulate_market_value": "14809444000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.39
      },
      {
        "name": "股权转让",
        "change_pct": -0.32
      },
      {
        "name": "房地产",
        "change_pct": -0.75
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.06
      },
      {
        "name": "京津冀",
        "change_pct": -0.63
      },
      {
        "name": "旅游",
        "change_pct": 0.35
      },
      {
        "name": "国产芯片",
        "change_pct": -0.68
      },
      {
        "name": "内存",
        "change_pct": -1.24
      },
      {
        "name": "闪存",
        "change_pct": -0.61
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.57
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "002208",
    "name": "合肥城建",
    "hot_rank": 73,
    "hot_rank_chg": 282,
    "stock_cnt": 5846,
    "price": "10.81",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "8680848400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.78
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.14
      },
      {
        "name": "房地产",
        "change_pct": -0.75
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.82
      },
      {
        "name": "住房租赁",
        "change_pct": 0.51
      },
      {
        "name": "物业管理",
        "change_pct": -0.22
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "旧改",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "002918",
    "name": "蒙娜丽莎",
    "hot_rank": 79,
    "hot_rank_chg": 8,
    "stock_cnt": 5846,
    "price": "11.55",
    "change": "1.85",
    "market_id": "33",
    "circulate_market_value": "2471925300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.75
      },
      {
        "name": "装修装饰",
        "change_pct": 1.23
      },
      {
        "name": "家具家居",
        "change_pct": 1.23
      },
      {
        "name": "陶瓷基板",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 80,
    "hot_rank_chg": -14,
    "stock_cnt": 5846,
    "price": "6.42",
    "change": "-7.36",
    "market_id": "33",
    "circulate_market_value": "7491171800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.15
      },
      {
        "name": "国产软件",
        "change_pct": 0.33
      },
      {
        "name": "一带一路",
        "change_pct": -0.6
      },
      {
        "name": "量子通信",
        "change_pct": -0.55
      },
      {
        "name": "人工智能",
        "change_pct": 0.5
      },
      {
        "name": "网络安全",
        "change_pct": -0.16
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.06
      },
      {
        "name": "物联网",
        "change_pct": 0.26
      },
      {
        "name": "大数据",
        "change_pct": 0.26
      },
      {
        "name": "破净股",
        "change_pct": -0.41
      },
      {
        "name": "数字经济",
        "change_pct": 0.4
      },
      {
        "name": "国产芯片",
        "change_pct": -0.68
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.74
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.6
      },
      {
        "name": "信创",
        "change_pct": 0.12
      },
      {
        "name": "华为昇腾",
        "change_pct": -0.28
      },
      {
        "name": "跨境支付",
        "change_pct": -1.02
      },
      {
        "name": "web3.0",
        "change_pct": 0.89
      },
      {
        "name": "数字人民币",
        "change_pct": -1.07
      },
      {
        "name": "智慧政务",
        "change_pct": 0.3
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.19
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.03
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.09
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.66
      },
      {
        "name": "华为产业链",
        "change_pct": 0.32
      },
      {
        "name": "回购",
        "change_pct": -0.77
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.57
      },
      {
        "name": "智能电网",
        "change_pct": -0.36
      },
      {
        "name": "低空经济",
        "change_pct": 0.05
      },
      {
        "name": "量子计算",
        "change_pct": -0.68
      },
      {
        "name": "财税改革",
        "change_pct": -0.57
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "002349",
    "name": "精华制药",
    "hot_rank": 81,
    "hot_rank_chg": 38,
    "stock_cnt": 5846,
    "price": "7.58",
    "change": "-4.06",
    "market_id": "33",
    "circulate_market_value": "6163349500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.29
      },
      {
        "name": "锂电池",
        "change_pct": -0.9
      },
      {
        "name": "养老产业",
        "change_pct": -0.52
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.36
      },
      {
        "name": "医药",
        "change_pct": -2.19
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.34
      },
      {
        "name": "化学原料药",
        "change_pct": -2.09
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -3.16
      },
      {
        "name": "流感",
        "change_pct": -1.95
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.19
      }
    ]
  },
  {
    "code": "600376",
    "name": "首开股份",
    "hot_rank": 85,
    "hot_rank_chg": 298,
    "stock_cnt": 5846,
    "price": "3.54",
    "change": "4.12",
    "market_id": "17",
    "circulate_market_value": "9131661000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.75
      },
      {
        "name": "京津冀",
        "change_pct": -0.63
      },
      {
        "name": "雄安新区",
        "change_pct": -0.12
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.59
      },
      {
        "name": "住房租赁",
        "change_pct": 0.51
      },
      {
        "name": "物业管理",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "000736",
    "name": "中交发展",
    "hot_rank": 86,
    "hot_rank_chg": 147,
    "stock_cnt": 5846,
    "price": "4.78",
    "change": "2.14",
    "market_id": "33",
    "circulate_market_value": "3571130400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.56
      },
      {
        "name": "央企改革",
        "change_pct": -0.78
      },
      {
        "name": "股权转让",
        "change_pct": -0.32
      },
      {
        "name": "房地产",
        "change_pct": -0.75
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.31
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.06
      },
      {
        "name": "物业管理",
        "change_pct": -0.22
      },
      {
        "name": "成渝城市群",
        "change_pct": 0.28
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 87,
    "hot_rank_chg": 88,
    "stock_cnt": 5846,
    "price": "6.69",
    "change": "1.06",
    "market_id": "33",
    "circulate_market_value": "5929015300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -0.48
      },
      {
        "name": "土地流转",
        "change_pct": -1.06
      },
      {
        "name": "海南概念",
        "change_pct": -1.69
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.27
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -1.57
      },
      {
        "name": "大农业",
        "change_pct": -0.42
      },
      {
        "name": "水产养殖",
        "change_pct": -0.94
      },
      {
        "name": "自贸区",
        "change_pct": -0.77
      }
    ]
  },
  {
    "code": "000514",
    "name": "渝开发",
    "hot_rank": 91,
    "hot_rank_chg": 964,
    "stock_cnt": 5846,
    "price": "4.20",
    "change": "0.72",
    "market_id": "33",
    "circulate_market_value": "3543838100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.78
      },
      {
        "name": "房地产",
        "change_pct": -0.75
      },
      {
        "name": "重庆国企改革",
        "change_pct": -0.92
      },
      {
        "name": "物业管理",
        "change_pct": -0.22
      },
      {
        "name": "成渝城市群",
        "change_pct": 0.28
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 93,
    "hot_rank_chg": -14,
    "stock_cnt": 5846,
    "price": "2.44",
    "change": "4.29",
    "market_id": "33",
    "circulate_market_value": "4808992800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.78
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.04
      },
      {
        "name": "共享经济",
        "change_pct": -0.19
      },
      {
        "name": "养老产业",
        "change_pct": -0.52
      },
      {
        "name": "住房租赁",
        "change_pct": 0.51
      },
      {
        "name": "房产经纪",
        "change_pct": 3.85
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.9
      },
      {
        "name": "物业管理",
        "change_pct": -0.22
      },
      {
        "name": "低价股",
        "change_pct": -0.64
      },
      {
        "name": "旧改",
        "change_pct": 0.42
      },
      {
        "name": "横琴新区",
        "change_pct": 0.54
      },
      {
        "name": "氮化镓",
        "change_pct": -0.66
      },
      {
        "name": "REITs",
        "change_pct": -1.67
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 94,
    "hot_rank_chg": -24,
    "stock_cnt": 5846,
    "price": "6.68",
    "change": "-4.85",
    "market_id": "33",
    "circulate_market_value": "12773666600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.56
      },
      {
        "name": "林业",
        "change_pct": 1.42
      },
      {
        "name": "碳中和",
        "change_pct": -0.62
      },
      {
        "name": "自贸区",
        "change_pct": -0.77
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000560", "name": "我爱我家", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5846, "price": "2.90", "change": "9.85", "market_id": "33", "circulate_market_value": "6793795500.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "净利增长", "xgb_concepts": [{"name": "新零售", "change_pct": -0.69}, {"name": "人工智能", "change_pct": 0.47}, {"name": "VR&AR", "change_pct": 0.68}, {"name": "京津冀", "change_pct": -0.66}, {"name": "装修装饰", "change_pct": 1.2}, {"name": "住房租赁", "change_pct": 0.48}, {"name": "破净股", "change_pct": -0.41}, {"name": "数字经济", "change_pct": 0.35}, {"name": "房产经纪", "change_pct": 3.71}, {"name": "物业管理", "change_pct": -0.17}, {"name": "低价股", "change_pct": -0.66}, {"name": "华为产业链", "change_pct": 0.31}, {"name": "AI大模型/智能体", "change_pct": 0.52}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5846, "price": "16.55", "change": "8.45", "market_id": "17", "circulate_market_value": "11266093800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5846, "price": "5.03", "change": "-6.16", "market_id": "17", "circulate_market_value": "16440244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -0.76}, {"name": "养老产业", "change_pct": -0.56}, {"name": "粤港澳大湾区", "change_pct": -0.57}, {"name": "民营医院", "change_pct": -1.21}, {"name": "地摊经济", "change_pct": -1.52}]}, {"code": "600127", "name": "金健米业", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5846, "price": "12.45", "change": "5.78", "market_id": "17", "circulate_market_value": "7990201100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.74}, {"name": "农业种植", "change_pct": -0.44}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "湖南国企改革", "change_pct": 0.02}, {"name": "乡村振兴", "change_pct": -0.6}, {"name": "休闲食品", "change_pct": -0.28}, {"name": "食品", "change_pct": -1.16}, {"name": "食品安全", "change_pct": -0.8}, {"name": "社区团购", "change_pct": -1.28}, {"name": "大农业", "change_pct": -0.44}, {"name": "预制菜", "change_pct": -1.06}, {"name": "人造肉", "change_pct": -0.86}, {"name": "国企改革", "change_pct": -0.57}]}, {"code": "002165", "name": "红宝丽", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5846, "price": "8.72", "change": "4.30", "market_id": "33", "circulate_market_value": "6353391900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.59}, {"name": "装配式建筑", "change_pct": 0.52}, {"name": "风电", "change_pct": -0.33}, {"name": "环氧丙烷", "change_pct": -1.02}, {"name": "乡村振兴", "change_pct": -0.6}, {"name": "建筑节能", "change_pct": 0.02}, {"name": "旧改", "change_pct": 0.41}]}, {"code": "600371", "name": "万向德农", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5846, "price": "12.69", "change": "9.96", "market_id": "17", "circulate_market_value": "3712814800.00", "change_type": "1", "change_section": "10", "change_days": "7", "change_reason": "转基因玉米", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.44}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "转基因", "change_pct": -0.43}, {"name": "乡村振兴", "change_pct": -0.6}, {"name": "大农业", "change_pct": -0.44}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 7, "hot_rank_chg": 6, "stock_cnt": 5846, "price": "8.06", "change": "2.80", "market_id": "33", "circulate_market_value": "13129839800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.03}, {"name": "电竞", "change_pct": 0.77}, {"name": "手游", "change_pct": 0.85}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "人工智能", "change_pct": 0.47}, {"name": "游戏", "change_pct": 1.7}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.35}, {"name": "腾讯概念股", "change_pct": 0.57}, {"name": "快手概念股", "change_pct": 2.14}, {"name": "元宇宙", "change_pct": 1.31}, {"name": "虚拟数字人", "change_pct": 1.57}, {"name": "东数西算/算力", "change_pct": 0.44}, {"name": "web3.0", "change_pct": 0.84}, {"name": "AIGC概念", "change_pct": 1.77}, {"name": "数据要素", "change_pct": 0.79}, {"name": "字节跳动概念股", "change_pct": 1.46}, {"name": "AI营销", "change_pct": 3.12}, {"name": "ChatGPT", "change_pct": 1.17}, {"name": "智能眼镜/MR头显", "change_pct": 0.86}, {"name": "AI大模型/智能体", "change_pct": 0.52}, {"name": "人形机器人", "change_pct": 0.32}, {"name": "短剧/互动影游", "change_pct": 4.6}, {"name": "多模态", "change_pct": 1.85}, {"name": "AI视频", "change_pct": 2.28}, {"name": "IP经济/谷子经济", "change_pct": 1.42}, {"name": "小红书概念股", "change_pct": 1.86}]}, {"code": "000017", "name": "深中华A", "hot_rank": 8, "hot_rank_chg": 2, "stock_cnt": 5846, "price": "10.99", "change": "-4.02", "market_id": "33", "circulate_market_value": "4844633200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.03}, {"name": "锂电池", "change_pct": -0.92}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "新能源汽车", "change_pct": -0.36}, {"name": "两轮车", "change_pct": -0.54}, {"name": "珠宝饰品", "change_pct": -5.42}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": 6, "stock_cnt": 5846, "price": "8.86", "change": "-1.56", "market_id": "17", "circulate_market_value": "22313998000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.03}, {"name": "密集调研", "change_pct": -0.78}, {"name": "工业大麻", "change_pct": -0.28}, {"name": "中药", "change_pct": -2.28}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "保健品", "change_pct": -1.63}, {"name": "民营医院", "change_pct": -1.21}, {"name": "医药", "change_pct": -2.19}, {"name": "化学原料药", "change_pct": -2.09}, {"name": "流感", "change_pct": -1.96}, {"name": "振兴东北", "change_pct": -0.47}, {"name": "食品", "change_pct": -1.16}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 10, "hot_rank_chg": 7, "stock_cnt": 5846, "price": "11.16", "change": "-10.00", "market_id": "17", "circulate_market_value": "5349211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.28}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "医药商业", "change_pct": -2.15}, {"name": "医药", "change_pct": -2.19}, {"name": "流感", "change_pct": -1.96}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5846, "price": "6.16", "change": "10.00", "market_id": "33", "circulate_market_value": "16339712000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "项目中标", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.93}, {"name": "云计算数据中心", "change_pct": 0.05}, {"name": "装修装饰", "change_pct": 1.2}, {"name": "装配式建筑", "change_pct": 0.52}, {"name": "航天", "change_pct": -0.23}, {"name": "旧改", "change_pct": 0.41}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 12, "hot_rank_chg": 12, "stock_cnt": 5846, "price": "34.33", "change": "-4.43", "market_id": "17", "circulate_market_value": "23734925000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 13, "hot_rank_chg": 10, "stock_cnt": 5846, "price": "13.90", "change": "-9.97", "market_id": "17", "circulate_market_value": "5345212100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5846, "price": "5.04", "change": "10.04", "market_id": "17", "circulate_market_value": "6439103000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "中报扭亏", "xgb_concepts": [{"name": "甲醇", "change_pct": 2.36}, {"name": "化肥", "change_pct": -0.71}, {"name": "保健品", "change_pct": -1.63}, {"name": "民营医院", "change_pct": -1.21}, {"name": "医药", "change_pct": -2.19}, {"name": "煤化工", "change_pct": 1.68}, {"name": "食品", "change_pct": -1.16}, {"name": "大农业", "change_pct": -0.44}, {"name": "干细胞", "change_pct": -2.15}, {"name": "阿尔茨海默病", "change_pct": -1.91}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 15, "hot_rank_chg": 10, "stock_cnt": 5846, "price": "57.38", "change": "-2.10", "market_id": "17", "circulate_market_value": "258339350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 16, "hot_rank_chg": -8, "stock_cnt": 5846, "price": "51.51", "change": "-3.36", "market_id": "17", "circulate_market_value": "55258568000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300917", "name": "特发服务", "hot_rank": 17, "hot_rank_chg": 145, "stock_cnt": 5846, "price": "31.95", "change": "8.86", "market_id": "33", "circulate_market_value": "5399550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 18, "hot_rank_chg": -2, "stock_cnt": 5846, "price": "65.80", "change": "-4.22", "market_id": "17", "circulate_market_value": "161449920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 19, "hot_rank_chg": 84, "stock_cnt": 5846, "price": "3.20", "change": "1.27", "market_id": "33", "circulate_market_value": "31088362000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": -0.54}, {"name": "深圳本地股", "change_pct": 0.03}, {"name": "股权转让", "change_pct": -0.33}, {"name": "房地产", "change_pct": -0.76}, {"name": "养老产业", "change_pct": -0.56}, {"name": "冷链", "change_pct": -0.59}, {"name": "住房租赁", "change_pct": 0.48}, {"name": "破净股", "change_pct": -0.41}, {"name": "冰雪产业", "change_pct": 0.14}, {"name": "物业管理", "change_pct": -0.17}, {"name": "旧改", "change_pct": 0.41}, {"name": "REITs", "change_pct": -1.65}]}, {"code": "002407", "name": "多氟多", "hot_rank": 21, "hot_rank_chg": -14, "stock_cnt": 5846, "price": "35.88", "change": "-2.87", "market_id": "33", "circulate_market_value": "38783348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 22, "hot_rank_chg": -8, "stock_cnt": 5846, "price": "4.38", "change": "-9.88", "market_id": "33", "circulate_market_value": "9209722300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.78}, {"name": "中药", "change_pct": -2.28}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "维生素", "change_pct": -1.32}, {"name": "基因测序", "change_pct": -1.68}, {"name": "民营医院", "change_pct": -1.21}, {"name": "医药", "change_pct": -2.19}, {"name": "化学原料药", "change_pct": -2.09}, {"name": "PD-1抑制剂", "change_pct": -3.16}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 23, "hot_rank_chg": 3, "stock_cnt": 5846, "price": "3.72", "change": "-3.38", "market_id": "17", "circulate_market_value": "8229864100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.81}, {"name": "云计算数据中心", "change_pct": 0.05}, {"name": "光通信", "change_pct": -0.91}, {"name": "林业", "change_pct": 1.24}, {"name": "军民融合", "change_pct": -0.13}, {"name": "军工", "change_pct": -0.23}, {"name": "人造肉", "change_pct": -0.86}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 24, "hot_rank_chg": 13, "stock_cnt": 5846, "price": "557.76", "change": "-4.62", "market_id": "17", "circulate_market_value": "16788647000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 25, "hot_rank_chg": -3, "stock_cnt": 5846, "price": "9.03", "change": "9.99", "market_id": "17", "circulate_market_value": "4766052800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.44}, {"name": "棉花", "change_pct": -0.85}, {"name": "大农业", "change_pct": -0.44}, {"name": "供销社", "change_pct": -1.11}]}, {"code": "002886", "name": "沃特股份", "hot_rank": 26, "hot_rank_chg": -8, "stock_cnt": 5846, "price": "29.04", "change": "10.00", "market_id": "33", "circulate_market_value": "6071629900.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "PTFE薄膜"}, {"code": "000712", "name": "锦龙股份", "hot_rank": 27, "hot_rank_chg": 12, "stock_cnt": 5846, "price": "12.32", "change": "4.41", "market_id": "33", "circulate_market_value": "11035444400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.33}, {"name": "期货概念", "change_pct": -1.82}, {"name": "券商", "change_pct": -1.01}, {"name": "大金融", "change_pct": 0.34}, {"name": "东数西算/算力", "change_pct": 0.44}]}, {"code": "600683", "name": "京投发展", "hot_rank": 28, "hot_rank_chg": 54, "stock_cnt": 5846, "price": "11.42", "change": "3.54", "market_id": "17", "circulate_market_value": "8459680200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -0.76}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "光通信", "change_pct": -0.91}, {"name": "京津冀", "change_pct": -0.66}, {"name": "土地流转", "change_pct": -1.08}, {"name": "北京城市规划", "change_pct": -0.63}, {"name": "物业管理", "change_pct": -0.17}, {"name": "国企改革", "change_pct": -0.57}]}, {"code": "002412", "name": "汉森制药", "hot_rank": 29, "hot_rank_chg": 13, "stock_cnt": 5846, "price": "11.82", "change": "-9.98", "market_id": "33", "circulate_market_value": "5884527900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.28}, {"name": "优化生育（三孩）", "change_pct": -0.55}, {"name": "农业种植", "change_pct": -0.44}, {"name": "强势人气股", "change_pct": -0.93}, {"name": "医药", "change_pct": -2.19}, {"name": "流感", "change_pct": -1.96}, {"name": "大农业", "change_pct": -0.44}]}, {"code": "000636", "name": "风华高科", "hot_rank": 30, "hot_rank_chg": 6, "stock_cnt": 5846, "price": "52.73", "change": "-4.94", "market_id": "33", "circulate_market_value": "60484196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000011", "name": "深物业A", "hot_rank": 31, "hot_rank_chg": -3, "stock_cnt": 5846, "price": "10.07", "change": "10.05", "market_id": "33", "circulate_market_value": "5301608700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "房地产开发", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.03}, {"name": "房地产", "change_pct": -0.76}, {"name": "粤港澳大湾区", "change_pct": -0.57}, {"name": "住房租赁", "change_pct": 0.48}, {"name": "物业管理", "change_pct": -0.17}, {"name": "新型城镇化", "change_pct": 0.26}, {"name": "旧改", "change_pct": 0.41}]}, {"code": "600540", "name": "新赛股份", "hot_rank": 32, "hot_rank_chg": -5, "stock_cnt": 5846, "price": "5.56", "change": "10.10", "market_id": "17", "circulate_market_value": "3232455900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "业绩增长", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.44}, {"name": "新疆国企改革", "change_pct": -0.53}, {"name": "农垦", "change_pct": -0.26}, {"name": "棉花", "change_pct": -0.85}, {"name": "新疆概念", "change_pct": -0.4}, {"name": "风电", "change_pct": -0.33}, {"name": "大农业", "change_pct": -0.44}, {"name": "国企改革", "change_pct": -0.57}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 33, "hot_rank_chg": 12, "stock_cnt": 5846, "price": "21.73", "change": "-2.25", "market_id": "33", "circulate_market_value": "25564667000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 34, "hot_rank_chg": -15, "stock_cnt": 5846, "price": "12.49", "change": "-6.30", "market_id": "17", "circulate_market_value": "5227153900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.56}, {"name": "中药", "change_pct": -2.28}, {"name": "优化生育（三孩）", "change_pct": -0.55}, {"name": "农业种植", "change_pct": -0.44}, {"name": "人工智能", "change_pct": 0.47}, {"name": "湖南国企改革", "change_pct": 0.02}, {"name": "医药", "change_pct": -2.19}, {"name": "流感", "change_pct": -1.96}, {"name": "大农业", "change_pct": -0.44}, {"name": "国企改革", "change_pct": -0.57}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 35, "hot_rank_chg": 13, "stock_cnt": 5846, "price": "5.39", "change": "10.00", "market_id": "33", "circulate_market_value": "6125196000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "液冷", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.24}, {"name": "锂电池", "change_pct": -0.92}, {"name": "石墨烯", "change_pct": -0.62}, {"name": "新能源整车", "change_pct": -1.1}, {"name": "云计算数据中心", "change_pct": 0.05}, {"name": "汽车整车", "change_pct": -1.62}, {"name": "新能源汽车", "change_pct": -0.36}, {"name": "白色家电", "change_pct": 0.19}, {"name": "家电", "change_pct": 0.37}, {"name": "汽车热管理", "change_pct": 0.83}, {"name": "热泵", "change_pct": 0.89}, {"name": "轮边电机", "change_pct": 0.8}, {"name": "超级电容", "change_pct": -0.77}, {"name": "液冷服务器", "change_pct": 1.4}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 36, "hot_rank_chg": -4, "stock_cnt": 5846, "price": "6.38", "change": "10.00", "market_id": "33", "circulate_market_value": "4112767700.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.6}, {"name": "强势人气股", "change_pct": -0.96}, {"name": "装修装饰", "change_pct": 1.23}, {"name": "装配式建筑", "change_pct": 0.52}, {"name": "家具家居", "change_pct": 1.23}, {"name": "智能制造", "change_pct": 0.35}, {"name": "3D打印", "change_pct": 0.44}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.89}, {"name": "旧改", "change_pct": 0.42}]}, {"code": "002742", "name": "冀衡医药", "hot_rank": 37, "hot_rank_chg": -6, "stock_cnt": 5846, "price": "5.62", "change": "-9.94", "market_id": "33", "circulate_market_value": "2944436700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.6}, {"name": "ST摘帽", "change_pct": -0.31}, {"name": "强势人气股", "change_pct": -0.96}, {"name": "医药", "change_pct": -2.19}, {"name": "化学原料药", "change_pct": -2.09}, {"name": "幽门螺杆菌概念", "change_pct": -2.01}, {"name": "新冠病毒防治", "change_pct": -1.19}, {"name": "减肥药", "change_pct": -2.14}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 38, "hot_rank_chg": 29, "stock_cnt": 5846, "price": "42.80", "change": "-0.83", "market_id": "17", "circulate_market_value": "170142790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 39, "hot_rank_chg": 100, "stock_cnt": 5846, "price": "194.59", "change": "10.00", "market_id": "17", "circulate_market_value": "82328996000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "Microduck催化"}, {"code": "603629", "name": "利通电子", "hot_rank": 40, "hot_rank_chg": 20, "stock_cnt": 5846, "price": "115.32", "change": "-3.88", "market_id": "17", "circulate_market_value": "41591408000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 41, "hot_rank_chg": -21, "stock_cnt": 5846, "price": "19.48", "change": "4.45", "market_id": "17", "circulate_market_value": "43232991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 42, "hot_rank_chg": 30, "stock_cnt": 5846, "price": "836.11", "change": "-2.59", "market_id": "33", "circulate_market_value": "928074890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 44, "hot_rank_chg": 84, "stock_cnt": 5846, "price": "10.49", "change": "-9.96", "market_id": "33", "circulate_market_value": "24362770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -6.59}, {"name": "有色 · 铜", "change_pct": -3.41}, {"name": "有色 · 锑", "change_pct": -5.68}, {"name": "湖南国企改革", "change_pct": 0.07}, {"name": "有色 · 锌", "change_pct": -4.36}, {"name": "有色金属", "change_pct": -1.76}, {"name": "国企改革", "change_pct": -0.55}, {"name": "白银", "change_pct": -6.28}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 45, "hot_rank_chg": -16, "stock_cnt": 5846, "price": "16.69", "change": "-9.73", "market_id": "33", "circulate_market_value": "7629399300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 46, "hot_rank_chg": -6, "stock_cnt": 5846, "price": "9.17", "change": "9.95", "market_id": "17", "circulate_market_value": "6107220000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报增长", "xgb_concepts": [{"name": "新零售", "change_pct": -0.67}]}, {"code": "601700", "name": "风范股份", "hot_rank": 47, "hot_rank_chg": -26, "stock_cnt": 5846, "price": "8.09", "change": "-3.46", "market_id": "17", "circulate_market_value": "9212546600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.6}, {"name": "强势人气股", "change_pct": -0.96}, {"name": "光伏", "change_pct": -1.61}, {"name": "特高压", "change_pct": -1.21}, {"name": "智能电网", "change_pct": -0.36}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 48, "hot_rank_chg": -36, "stock_cnt": 5846, "price": "36.44", "change": "-0.68", "market_id": "33", "circulate_market_value": "27600206000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 49, "hot_rank_chg": -16, "stock_cnt": 5846, "price": "5.83", "change": "-1.52", "market_id": "33", "circulate_market_value": "206190390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.64}, {"name": "手机产业链", "change_pct": 0.6}, {"name": "超高清视频", "change_pct": 0.68}, {"name": "苹果产业链", "change_pct": 0.48}, {"name": "电竞", "change_pct": 0.78}, {"name": "半导体", "change_pct": -0.85}, {"name": "人工智能", "change_pct": 0.5}, {"name": "互联网医疗", "change_pct": -0.88}, {"name": "VR&AR", "change_pct": 0.67}, {"name": "OLED", "change_pct": -0.6}, {"name": "京津冀", "change_pct": -0.63}, {"name": "物联网", "change_pct": 0.26}, {"name": "指纹识别", "change_pct": -0.29}, {"name": "汽车零部件", "change_pct": 0.44}, {"name": "白马股", "change_pct": -0.78}, {"name": "智能制造", "change_pct": 0.35}, {"name": "小米概念股", "change_pct": 0.58}, {"name": "国产芯片", "change_pct": -0.68}, {"name": "液晶面板/LCD", "change_pct": -0.49}, {"name": "全息概念", "change_pct": 1.44}, {"name": "理想汽车概念股", "change_pct": 0.25}, {"name": "MicroLED", "change_pct": -0.25}, {"name": "钙钛矿电池", "change_pct": -1.77}, {"name": "智能手表", "change_pct": 0.95}, {"name": "MiniLED", "change_pct": -0.22}, {"name": "传感器", "change_pct": -0.15}, {"name": "大硅片", "change_pct": -3.14}, {"name": "AI PC", "change_pct": 0.95}, {"name": "华为产业链", "change_pct": 0.32}, {"name": "回购", "change_pct": -0.77}, {"name": "光电共封装CPO", "change_pct": -1.07}, {"name": "智能眼镜/MR头显", "change_pct": 0.85}, {"name": "玻璃基板封装", "change_pct": -0.47}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 50, "hot_rank_chg": 45, "stock_cnt": 5846, "price": "394.74", "change": "-0.52", "market_id": "17", "circulate_market_value": "264759350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 51, "hot_rank_chg": 2, "stock_cnt": 5846, "price": "31.03", "change": "-4.82", "market_id": "17", "circulate_market_value": "12435010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 52, "hot_rank_chg": 26, "stock_cnt": 5846, "price": "98.09", "change": "-1.58", "market_id": "33", "circulate_market_value": "64046976000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 53, "hot_rank_chg": 11, "stock_cnt": 5846, "price": "50.39", "change": "-2.44", "market_id": "17", "circulate_market_value": "42657822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002155", "name": "湖南黄金", "hot_rank": 54, "hot_rank_chg": 51, "stock_cnt": 5846, "price": "26.79", "change": "-7.40", "market_id": "33", "circulate_market_value": "41843721000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600654", "name": "中安科", "hot_rank": 55, "hot_rank_chg": -17, "stock_cnt": 5846, "price": "3.33", "change": "-8.27", "market_id": "17", "circulate_market_value": "7717048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -1.0}, {"name": "国产软件", "change_pct": 0.33}, {"name": "人工智能", "change_pct": 0.5}, {"name": "云计算数据中心", "change_pct": 0.06}, {"name": "智慧城市", "change_pct": 0.38}, {"name": "智慧安防", "change_pct": 0.91}, {"name": "东数西算/算力", "change_pct": 0.47}, {"name": "消防", "change_pct": -0.2}, {"name": "医疗信息化", "change_pct": 0.29}, {"name": "传感器", "change_pct": -0.15}, {"name": "华为产业链", "change_pct": 0.32}]}, {"code": "600272", "name": "开开实业", "hot_rank": 56, "hot_rank_chg": 60, "stock_cnt": 5846, "price": "18.44", "change": "-9.12", "market_id": "17", "circulate_market_value": "2950400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 57, "hot_rank_chg": 80, "stock_cnt": 5846, "price": "195.44", "change": "-0.10", "market_id": "33", "circulate_market_value": "270914990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603269", "name": "海鸥股份", "hot_rank": 58, "hot_rank_chg": -3, "stock_cnt": 5846, "price": "24.40", "change": "10.01", "market_id": "17", "circulate_market_value": "10539470000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报增长"}, {"code": "600186", "name": "莲花控股", "hot_rank": 59, "hot_rank_chg": -1, "stock_cnt": 5846, "price": "11.49", "change": "-3.77", "market_id": "17", "circulate_market_value": "20557199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.37}, {"name": "纯碱", "change_pct": -1.31}, {"name": "食品", "change_pct": -1.16}, {"name": "土壤修复", "change_pct": -0.42}, {"name": "东数西算/算力", "change_pct": 0.47}, {"name": "OpenClaw概念", "change_pct": 1.21}, {"name": "DeepSeek概念股", "change_pct": 0.73}]}, {"code": "600667", "name": "太极实业", "hot_rank": 60, "hot_rank_chg": 32, "stock_cnt": 5846, "price": "18.78", "change": "-3.84", "market_id": "17", "circulate_market_value": "39279162000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 61, "hot_rank_chg": 50, "stock_cnt": 5846, "price": "73.07", "change": "-2.47", "market_id": "17", "circulate_market_value": "130770417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 62, "hot_rank_chg": 6, "stock_cnt": 5846, "price": "32.92", "change": "-4.99", "market_id": "17", "circulate_market_value": "678211030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600313", "name": "农发种业", "hot_rank": 63, "hot_rank_chg": 22, "stock_cnt": 5846, "price": "7.49", "change": "-0.13", "market_id": "17", "circulate_market_value": "8105668000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.78}, {"name": "农业种植", "change_pct": -0.48}, {"name": "化肥", "change_pct": -0.69}, {"name": "转基因", "change_pct": -0.51}, {"name": "土地流转", "change_pct": -1.06}, {"name": "农垦", "change_pct": -0.28}, {"name": "乡村振兴", "change_pct": -0.57}, {"name": "大农业", "change_pct": -0.42}, {"name": "国企改革", "change_pct": -0.55}, {"name": "大豆", "change_pct": -1.24}]}, {"code": "000402", "name": "金融街", "hot_rank": 64, "hot_rank_chg": 1014, "stock_cnt": 5846, "price": "2.59", "change": "1.96", "market_id": "33", "circulate_market_value": "7770534600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -0.75}, {"name": "雄安新区", "change_pct": -0.12}, {"name": "北京城市规划", "change_pct": -0.59}, {"name": "破净股", "change_pct": -0.41}, {"name": "碳中和", "change_pct": -0.62}, {"name": "低价股", "change_pct": -0.64}]}, {"code": "600183", "name": "生益科技", "hot_rank": 65, "hot_rank_chg": -31, "stock_cnt": 5846, "price": "149.79", "change": "2.84", "market_id": "17", "circulate_market_value": "361255860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600048", "name": "保利发展", "hot_rank": 66, "hot_rank_chg": 49, "stock_cnt": 5846, "price": "5.08", "change": "-2.31", "market_id": "17", "circulate_market_value": "60690148000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.78}, {"name": "房地产", "change_pct": -0.75}, {"name": "白马股", "change_pct": -0.78}, {"name": "住房租赁", "change_pct": 0.51}, {"name": "破净股", "change_pct": -0.41}, {"name": "物业管理", "change_pct": -0.22}, {"name": "国企改革", "change_pct": -0.55}, {"name": "旧改", "change_pct": 0.42}]}, {"code": "002855", "name": "捷荣技术", "hot_rank": 67, "hot_rank_chg": -11, "stock_cnt": 5846, "price": "16.10", "change": "9.97", "market_id": "33", "circulate_market_value": "3964258400.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "折叠屏"}, {"code": "301520", "name": "万邦医药", "hot_rank": 68, "hot_rank_chg": 145, "stock_cnt": 5846, "price": "63.12", "change": "-11.24", "market_id": "33", "circulate_market_value": "2063925700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 69, "hot_rank_chg": 147, "stock_cnt": 5846, "price": "7.61", "change": "6.72", "market_id": "17", "circulate_market_value": "18217991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.73}, {"name": "强势人气股", "change_pct": -0.96}, {"name": "国企改革", "change_pct": -0.55}, {"name": "河南国企改革", "change_pct": -0.1}]}, {"code": "000620", "name": "盈新发展", "hot_rank": 70, "hot_rank_chg": 61, "stock_cnt": 5846, "price": "3.16", "change": "-6.21", "market_id": "33", "circulate_market_value": "14809444000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.39}, {"name": "股权转让", "change_pct": -0.32}, {"name": "房地产", "change_pct": -0.75}, {"name": "云计算数据中心", "change_pct": 0.06}, {"name": "京津冀", "change_pct": -0.63}, {"name": "旅游", "change_pct": 0.35}, {"name": "国产芯片", "change_pct": -0.68}, {"name": "内存", "change_pct": -1.24}, {"name": "闪存", "change_pct": -0.61}, {"name": "AI大模型/智能体", "change_pct": 0.57}, {"name": "IP经济/谷子经济", "change_pct": 1.44}]}, {"code": "000603", "name": "盛达资源", "hot_rank": 71, "hot_rank_chg": 106, "stock_cnt": 5846, "price": "35.25", "change": "-8.65", "market_id": "33", "circulate_market_value": "23501752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 72, "hot_rank_chg": 42, "stock_cnt": 5846, "price": "408.00", "change": "-3.40", "market_id": "17", "circulate_market_value": "165786030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 73, "hot_rank_chg": 282, "stock_cnt": 5846, "price": "10.81", "change": "0.00", "market_id": "33", "circulate_market_value": "8680848400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.78}, {"name": "蚂蚁集团概念股", "change_pct": -0.14}, {"name": "房地产", "change_pct": -0.75}, {"name": "安徽国企改革", "change_pct": -0.82}, {"name": "住房租赁", "change_pct": 0.51}, {"name": "物业管理", "change_pct": -0.22}, {"name": "国企改革", "change_pct": -0.55}, {"name": "旧改", "change_pct": 0.42}]}, {"code": "000506", "name": "招金黄金", "hot_rank": 74, "hot_rank_chg": 155, "stock_cnt": 5846, "price": "19.51", "change": "-9.05", "market_id": "33", "circulate_market_value": "18100499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 75, "hot_rank_chg": 8, "stock_cnt": 5846, "price": "34.67", "change": "-1.08", "market_id": "17", "circulate_market_value": "118292835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 76, "hot_rank_chg": -2, "stock_cnt": 5846, "price": "14.17", "change": "-1.73", "market_id": "17", "circulate_market_value": "18198228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 77, "hot_rank_chg": -2, "stock_cnt": 5846, "price": "36.88", "change": "2.79", "market_id": "33", "circulate_market_value": "105508081000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 78, "hot_rank_chg": -35, "stock_cnt": 5846, "price": "73.11", "change": "-0.10", "market_id": "33", "circulate_market_value": "53022045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002918", "name": "蒙娜丽莎", "hot_rank": 79, "hot_rank_chg": 8, "stock_cnt": 5846, "price": "11.55", "change": "1.85", "market_id": "33", "circulate_market_value": "2471925300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.75}, {"name": "装修装饰", "change_pct": 1.23}, {"name": "家具家居", "change_pct": 1.23}, {"name": "陶瓷基板", "change_pct": -0.32}]}, {"code": "002212", "name": "天融信", "hot_rank": 80, "hot_rank_chg": -14, "stock_cnt": 5846, "price": "6.42", "change": "-7.36", "market_id": "33", "circulate_market_value": "7491171800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.15}, {"name": "国产软件", "change_pct": 0.33}, {"name": "一带一路", "change_pct": -0.6}, {"name": "量子通信", "change_pct": -0.55}, {"name": "人工智能", "change_pct": 0.5}, {"name": "网络安全", "change_pct": -0.16}, {"name": "云计算数据中心", "change_pct": 0.06}, {"name": "物联网", "change_pct": 0.26}, {"name": "大数据", "change_pct": 0.26}, {"name": "破净股", "change_pct": -0.41}, {"name": "数字经济", "change_pct": 0.4}, {"name": "国产芯片", "change_pct": -0.68}, {"name": "阿里巴巴概念股", "change_pct": 0.74}, {"name": "腾讯概念股", "change_pct": 0.6}, {"name": "信创", "change_pct": 0.12}, {"name": "华为昇腾", "change_pct": -0.28}, {"name": "跨境支付", "change_pct": -1.02}, {"name": "web3.0", "change_pct": 0.89}, {"name": "数字人民币", "change_pct": -1.07}, {"name": "智慧政务", "change_pct": 0.3}, {"name": "华为鸿蒙", "change_pct": 0.19}, {"name": "华为云·鲲鹏", "change_pct": 0.03}, {"name": "卫星互联网", "change_pct": 0.09}, {"name": "智慧灯杆", "change_pct": 0.66}, {"name": "华为产业链", "change_pct": 0.32}, {"name": "回购", "change_pct": -0.77}, {"name": "AI大模型/智能体", "change_pct": 0.57}, {"name": "智能电网", "change_pct": -0.36}, {"name": "低空经济", "change_pct": 0.05}, {"name": "量子计算", "change_pct": -0.68}, {"name": "财税改革", "change_pct": -0.57}, {"name": "DeepSeek概念股", "change_pct": 0.73}]}, {"code": "002349", "name": "精华制药", "hot_rank": 81, "hot_rank_chg": 38, "stock_cnt": 5846, "price": "7.58", "change": "-4.06", "market_id": "33", "circulate_market_value": "6163349500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.29}, {"name": "锂电池", "change_pct": -0.9}, {"name": "养老产业", "change_pct": -0.52}, {"name": "江苏国企改革", "change_pct": -0.36}, {"name": "医药", "change_pct": -2.19}, {"name": "新能源汽车", "change_pct": -0.34}, {"name": "化学原料药", "change_pct": -2.09}, {"name": "PD-1抑制剂", "change_pct": -3.16}, {"name": "流感", "change_pct": -1.95}, {"name": "国企改革", "change_pct": -0.55}, {"name": "新冠病毒防治", "change_pct": -1.19}]}, {"code": "601138", "name": "工业富联", "hot_rank": 82, "hot_rank_chg": 22, "stock_cnt": 5846, "price": "63.07", "change": "-1.50", "market_id": "17", "circulate_market_value": "1251765340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 83, "hot_rank_chg": 46, "stock_cnt": 5846, "price": "32.93", "change": "-3.63", "market_id": "17", "circulate_market_value": "54797886000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 84, "hot_rank_chg": 57, "stock_cnt": 5846, "price": "424.88", "change": "-0.98", "market_id": "33", "circulate_market_value": "70110943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600376", "name": "首开股份", "hot_rank": 85, "hot_rank_chg": 298, "stock_cnt": 5846, "price": "3.54", "change": "4.12", "market_id": "17", "circulate_market_value": "9131661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -0.75}, {"name": "京津冀", "change_pct": -0.63}, {"name": "雄安新区", "change_pct": -0.12}, {"name": "北京城市规划", "change_pct": -0.59}, {"name": "住房租赁", "change_pct": 0.51}, {"name": "物业管理", "change_pct": -0.22}]}, {"code": "000736", "name": "中交发展", "hot_rank": 86, "hot_rank_chg": 147, "stock_cnt": 5846, "price": "4.78", "change": "2.14", "market_id": "33", "circulate_market_value": "3571130400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.56}, {"name": "央企改革", "change_pct": -0.78}, {"name": "股权转让", "change_pct": -0.32}, {"name": "房地产", "change_pct": -0.75}, {"name": "ST摘帽", "change_pct": -0.31}, {"name": "云计算数据中心", "change_pct": 0.06}, {"name": "物业管理", "change_pct": -0.22}, {"name": "成渝城市群", "change_pct": 0.28}, {"name": "国企改革", "change_pct": -0.55}]}, {"code": "300189", "name": "神农种业", "hot_rank": 87, "hot_rank_chg": 88, "stock_cnt": 5846, "price": "6.69", "change": "1.06", "market_id": "33", "circulate_market_value": "5929015300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.48}, {"name": "土地流转", "change_pct": -1.06}, {"name": "海南概念", "change_pct": -1.69}, {"name": "自由贸易港", "change_pct": -1.27}, {"name": "海南自由贸易港", "change_pct": -1.57}, {"name": "大农业", "change_pct": -0.42}, {"name": "水产养殖", "change_pct": -0.94}, {"name": "自贸区", "change_pct": -0.77}]}, {"code": "002837", "name": "英维克", "hot_rank": 88, "hot_rank_chg": -39, "stock_cnt": 5846, "price": "65.97", "change": "2.31", "market_id": "33", "circulate_market_value": "74759849000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 89, "hot_rank_chg": 319, "stock_cnt": 5846, "price": "50.10", "change": "-8.79", "market_id": "33", "circulate_market_value": "11718010100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 90, "hot_rank_chg": -33, "stock_cnt": 5846, "price": "40.90", "change": "-2.85", "market_id": "17", "circulate_market_value": "13168703100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000514", "name": "渝开发", "hot_rank": 91, "hot_rank_chg": 964, "stock_cnt": 5846, "price": "4.20", "change": "0.72", "market_id": "33", "circulate_market_value": "3543838100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.78}, {"name": "房地产", "change_pct": -0.75}, {"name": "重庆国企改革", "change_pct": -0.92}, {"name": "物业管理", "change_pct": -0.22}, {"name": "成渝城市群", "change_pct": 0.28}, {"name": "国企改革", "change_pct": -0.55}]}, {"code": "601799", "name": "星宇股份", "hot_rank": 92, "hot_rank_chg": -40, "stock_cnt": 5846, "price": "76.90", "change": "-5.62", "market_id": "17", "circulate_market_value": "21968747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 93, "hot_rank_chg": -14, "stock_cnt": 5846, "price": "2.44", "change": "4.29", "market_id": "33", "circulate_market_value": "4808992800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.78}, {"name": "深圳本地股", "change_pct": 0.04}, {"name": "共享经济", "change_pct": -0.19}, {"name": "养老产业", "change_pct": -0.52}, {"name": "住房租赁", "change_pct": 0.51}, {"name": "房产经纪", "change_pct": 3.85}, {"name": "第三代半导体", "change_pct": -0.9}, {"name": "物业管理", "change_pct": -0.22}, {"name": "低价股", "change_pct": -0.64}, {"name": "旧改", "change_pct": 0.42}, {"name": "横琴新区", "change_pct": 0.54}, {"name": "氮化镓", "change_pct": -0.66}, {"name": "REITs", "change_pct": -1.67}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 94, "hot_rank_chg": -24, "stock_cnt": 5846, "price": "6.68", "change": "-4.85", "market_id": "33", "circulate_market_value": "12773666600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.56}, {"name": "林业", "change_pct": 1.42}, {"name": "碳中和", "change_pct": -0.62}, {"name": "自贸区", "change_pct": -0.77}]}, {"code": "300502", "name": "新易盛", "hot_rank": 95, "hot_rank_chg": 133, "stock_cnt": 5846, "price": "395.44", "change": "-0.89", "market_id": "33", "circulate_market_value": "495977910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603395", "name": "红四方", "hot_rank": 96, "hot_rank_chg": -35, "stock_cnt": 5846, "price": "31.46", "change": "1.48", "market_id": "17", "circulate_market_value": "2044900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 97, "hot_rank_chg": 5, "stock_cnt": 5846, "price": "62.00", "change": "-2.75", "market_id": "33", "circulate_market_value": "94082038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 98, "hot_rank_chg": -1, "stock_cnt": 5846, "price": "27.65", "change": "-4.98", "market_id": "17", "circulate_market_value": "6698765500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 99, "hot_rank_chg": 26, "stock_cnt": 5846, "price": "13.42", "change": "-5.29", "market_id": "17", "circulate_market_value": "19763725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 100, "hot_rank_chg": 50, "stock_cnt": 5846, "price": "64.29", "change": "-2.77", "market_id": "17", "circulate_market_value": "26768280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};