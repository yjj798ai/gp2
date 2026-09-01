const UPDATE_TIME = "2026-09-01 17:16";
const THS_HOT = [
  {
    "name": "AI应用",
    "rise": 1.8,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "粮食概念",
    "rise": 6.27,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "创新药",
    "rise": 1.0,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续113天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "转基因",
    "rise": 8.52,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "液冷服务器",
    "rise": -1.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "农业种植",
    "rise": 4.09,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "数字货币",
    "rise": 2.37,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.64,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续283天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "化肥",
    "rise": 2.02,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885967"
  },
  {
    "name": "AI视频",
    "rise": 2.29,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886068"
  },
  {
    "name": "存储芯片",
    "rise": -2.94,
    "rate": 0,
    "tag": "",
    "hotTag": "连续236天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "猪肉",
    "rise": 1.78,
    "rate": 0,
    "tag": "",
    "hotTag": "连续18天上榜",
    "rankChg": 1,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "算力租赁",
    "rise": 0.59,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续147天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "PCB概念",
    "rise": -2.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "黄金概念",
    "rise": 0.37,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "AIGC概念",
    "rise": 1.81,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886019"
  },
  {
    "name": "军工",
    "rise": -0.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "人工智能",
    "rise": 1.01,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "互联网金融",
    "rise": 2.07,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "玉米",
    "rise": 6.69,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  }
];
const THS_EVENTS = [
  {
    "title": "柴油成粮价最大推手，美国政策扰动影响全球农产品市场",
    "desc": "",
    "heat": 597099,
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
        "name": "绿亨科技",
        "code": "920866",
        "chg": 21.699545
      }
    ]
  },
  {
    "title": "7部门发文推动商品消费扩容升级",
    "desc": "",
    "heat": 553136,
    "direction": "大消费",
    "themes": [
      "零售",
      "消费",
      "乳业",
      "啤酒概念",
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "绿亨科技",
        "code": "920866",
        "chg": 21.699545
      }
    ]
  },
  {
    "title": "工信部启动人工智能应用服务商培育专项行动",
    "desc": "",
    "heat": 417705,
    "direction": "AI应用",
    "themes": [
      "AI应用",
      "人工智能",
      "AI智能体",
      "多模态AI"
    ],
    "stocks": [
      {
        "name": "华信永道",
        "code": "920592",
        "chg": 29.95896
      }
    ]
  },
  {
    "title": "首部AIGC上星长剧《后西游记》，火了",
    "desc": "",
    "heat": 298985,
    "direction": "AI剧集",
    "themes": [
      "AI漫剧",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "掌阅科技",
        "code": "603533",
        "chg": 10.004427
      }
    ]
  },
  {
    "title": "央视财经：人民币跨境支付覆盖192个国家和地区",
    "desc": "",
    "heat": 267198,
    "direction": "跨境支付（CIPS）",
    "themes": [
      "跨境支付(CIPS)"
    ],
    "stocks": [
      {
        "name": "翠微股份",
        "code": "603123",
        "chg": 10.010537
      }
    ]
  },
  {
    "title": "液冷市场加速升温 融资资金大幅加仓9股",
    "desc": "",
    "heat": 64722,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "集泰股份",
        "code": "002909",
        "chg": 9.966777
      }
    ]
  },
  {
    "title": "24 小时订单超 260 万美元，Hugging Face 机器鸭 Microduck 爆单",
    "desc": "",
    "heat": 40105,
    "direction": "芯片半导体",
    "themes": [
      "芯片概念",
      "半导体",
      "EDA"
    ],
    "stocks": [
      {
        "name": "慧为智能",
        "code": "920876",
        "chg": 11.091445
      }
    ]
  },
  {
    "title": "电子布龙头已正式上调9月份电子布价格",
    "desc": "",
    "heat": 20,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "菲利华",
        "code": "300395",
        "chg": -1.403141
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "转基因",
    "change": "+7.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+6.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+5.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+5.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+4.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+4.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "林业",
    "change": "+3.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+3.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+3.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "RWA",
    "change": "+3.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "供销社",
    "change": "+3.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+3.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新零售",
    "change": "+3.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人造肉",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "微信小店",
    "change": "+3.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "NFT",
    "change": "+3.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为HMS",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "土地流转",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 5,
    "hot_rank_chg": 3,
    "stock_cnt": 5886,
    "price": "4.19",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "9269658700.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "4",
    "change_reason": "光模块",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.67
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.58
      },
      {
        "name": "光通信",
        "change_pct": -2.42
      },
      {
        "name": "林业",
        "change_pct": 3.81
      },
      {
        "name": "军民融合",
        "change_pct": -0.09
      },
      {
        "name": "军工",
        "change_pct": 0.11
      },
      {
        "name": "人造肉",
        "change_pct": 3.49
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 8,
    "hot_rank_chg": 9,
    "stock_cnt": 5886,
    "price": "10.09",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "6719940000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "连锁零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 3.55
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 9,
    "hot_rank_chg": -4,
    "stock_cnt": 5886,
    "price": "3.19",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "7473175100.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "4",
    "change_reason": "房产经纪",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 3.55
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "人工智能",
        "change_pct": 0.88
      },
      {
        "name": "VR&AR",
        "change_pct": -0.37
      },
      {
        "name": "京津冀",
        "change_pct": 1.03
      },
      {
        "name": "装修装饰",
        "change_pct": 0.14
      },
      {
        "name": "住房租赁",
        "change_pct": 0.62
      },
      {
        "name": "破净股",
        "change_pct": 1.24
      },
      {
        "name": "数字经济",
        "change_pct": 1.6
      },
      {
        "name": "房产经纪",
        "change_pct": 2.2
      },
      {
        "name": "物业管理",
        "change_pct": 0.98
      },
      {
        "name": "华为产业链",
        "change_pct": 0.04
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.36
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 10,
    "hot_rank_chg": 0,
    "stock_cnt": 5886,
    "price": "9.49",
    "change": "4.06",
    "market_id": "17",
    "circulate_market_value": "23900659000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "工业大麻",
        "change_pct": 0.44
      },
      {
        "name": "中药",
        "change_pct": 1.46
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "保健品",
        "change_pct": 1.61
      },
      {
        "name": "民营医院",
        "change_pct": 1.49
      },
      {
        "name": "医药",
        "change_pct": 1.05
      },
      {
        "name": "化学原料药",
        "change_pct": 1.08
      },
      {
        "name": "流感",
        "change_pct": 1.06
      },
      {
        "name": "振兴东北",
        "change_pct": 1.38
      },
      {
        "name": "食品",
        "change_pct": 1.73
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 11,
    "hot_rank_chg": -4,
    "stock_cnt": 5886,
    "price": "5.10",
    "change": "7.37",
    "market_id": "33",
    "circulate_market_value": "29859464000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.08
      },
      {
        "name": "人工智能",
        "change_pct": 0.88
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.58
      },
      {
        "name": "水利",
        "change_pct": 1.15
      },
      {
        "name": "直播/短视频",
        "change_pct": 3.61
      },
      {
        "name": "大数据",
        "change_pct": 1.14
      },
      {
        "name": "园林",
        "change_pct": 1.22
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.09
      },
      {
        "name": "数字经济",
        "change_pct": 1.6
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.2
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.97
      },
      {
        "name": "第三代半导体",
        "change_pct": -2.28
      },
      {
        "name": "快手概念股",
        "change_pct": 3.1
      },
      {
        "name": "IGBT",
        "change_pct": -1.75
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.67
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.79
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.19
      },
      {
        "name": "氮化镓",
        "change_pct": -2.2
      },
      {
        "name": "AI营销",
        "change_pct": 3.43
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.36
      },
      {
        "name": "多模态",
        "change_pct": 1.92
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.42
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.97
      },
      {
        "name": "区块链",
        "change_pct": 2.2
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 12,
    "hot_rank_chg": -3,
    "stock_cnt": 5886,
    "price": "11.16",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "5349211000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.46
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "医药商业",
        "change_pct": 1.98
      },
      {
        "name": "医药",
        "change_pct": 1.05
      },
      {
        "name": "流感",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 15,
    "hot_rank_chg": -3,
    "stock_cnt": 5886,
    "price": "5.69",
    "change": "-7.63",
    "market_id": "33",
    "circulate_market_value": "15093013000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "装修装饰",
        "change_pct": 0.14
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.64
      },
      {
        "name": "航天",
        "change_pct": -0.6
      },
      {
        "name": "旧改",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 16,
    "hot_rank_chg": 9,
    "stock_cnt": 5886,
    "price": "7.02",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "4525333800.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "7",
    "change_reason": "控制权拟变更",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.57
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "装修装饰",
        "change_pct": 0.14
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.64
      },
      {
        "name": "家具家居",
        "change_pct": 0.59
      },
      {
        "name": "智能制造",
        "change_pct": -0.54
      },
      {
        "name": "3D打印",
        "change_pct": -1.66
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.02
      },
      {
        "name": "旧改",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 22,
    "hot_rank_chg": -9,
    "stock_cnt": 5886,
    "price": "8.36",
    "change": "4.11",
    "market_id": "33",
    "circulate_market_value": "13601668000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "电竞",
        "change_pct": 0.97
      },
      {
        "name": "手游",
        "change_pct": 2.28
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "人工智能",
        "change_pct": 0.88
      },
      {
        "name": "游戏",
        "change_pct": 2.23
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.6
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.2
      },
      {
        "name": "快手概念股",
        "change_pct": 3.1
      },
      {
        "name": "元宇宙",
        "change_pct": 1.71
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.67
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.22
      },
      {
        "name": "web3.0",
        "change_pct": 2.47
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.79
      },
      {
        "name": "数据要素",
        "change_pct": 1.73
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.19
      },
      {
        "name": "AI营销",
        "change_pct": 3.43
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.58
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.05
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.36
      },
      {
        "name": "人形机器人",
        "change_pct": -0.99
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.58
      },
      {
        "name": "多模态",
        "change_pct": 1.92
      },
      {
        "name": "AI视频",
        "change_pct": 1.84
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.16
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.97
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 23,
    "hot_rank_chg": 22,
    "stock_cnt": 5886,
    "price": "6.12",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "3558027000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "棉花全产业链",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 6.6
      },
      {
        "name": "新疆国企改革",
        "change_pct": 2.17
      },
      {
        "name": "农垦",
        "change_pct": 4.24
      },
      {
        "name": "棉花",
        "change_pct": 4.48
      },
      {
        "name": "新疆概念",
        "change_pct": 1.48
      },
      {
        "name": "风电",
        "change_pct": -0.18
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 24,
    "hot_rank_chg": 20,
    "stock_cnt": 5886,
    "price": "4.73",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3362078300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AIGC影视",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.88
      },
      {
        "name": "影视",
        "change_pct": 3.73
      },
      {
        "name": "旅游",
        "change_pct": 1.98
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.67
      },
      {
        "name": "AI营销",
        "change_pct": 3.43
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.36
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.58
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 25,
    "hot_rank_chg": -7,
    "stock_cnt": 5886,
    "price": "5.17",
    "change": "2.58",
    "market_id": "17",
    "circulate_market_value": "6605191000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.26
      },
      {
        "name": "化肥",
        "change_pct": 2.26
      },
      {
        "name": "保健品",
        "change_pct": 1.61
      },
      {
        "name": "民营医院",
        "change_pct": 1.49
      },
      {
        "name": "医药",
        "change_pct": 1.05
      },
      {
        "name": "煤化工",
        "change_pct": 0.54
      },
      {
        "name": "食品",
        "change_pct": 1.73
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      },
      {
        "name": "干细胞",
        "change_pct": 1.52
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 26,
    "hot_rank_chg": -7,
    "stock_cnt": 5886,
    "price": "7.55",
    "change": "20.03",
    "market_id": "33",
    "circulate_market_value": "6691190700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "农作物种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 6.6
      },
      {
        "name": "土地流转",
        "change_pct": 3.56
      },
      {
        "name": "海南概念",
        "change_pct": 2.06
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.66
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.63
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      },
      {
        "name": "水产养殖",
        "change_pct": 5.19
      },
      {
        "name": "自贸区",
        "change_pct": 1.56
      }
    ]
  },
  {
    "code": "600551",
    "name": "时代出版",
    "hot_rank": 27,
    "hot_rank_chg": 19,
    "stock_cnt": 5886,
    "price": "9.08",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "6156741600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "中报扣非增长",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.26
      },
      {
        "name": "安徽国企改革",
        "change_pct": 1.05
      },
      {
        "name": "教育",
        "change_pct": 1.77
      },
      {
        "name": "传媒",
        "change_pct": 2.7
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      },
      {
        "name": "在线教育",
        "change_pct": 1.98
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 30,
    "hot_rank_chg": 7,
    "stock_cnt": 5886,
    "price": "5.40",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6579425000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "煤炭",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.04
      },
      {
        "name": "煤炭",
        "change_pct": -0.6
      },
      {
        "name": "有色金属",
        "change_pct": -0.89
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      },
      {
        "name": "河南国企改革",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 31,
    "hot_rank_chg": 18,
    "stock_cnt": 5886,
    "price": "10.24",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "8898076500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "快递物流",
        "change_pct": 0.98
      },
      {
        "name": "新零售",
        "change_pct": 3.55
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.92
      },
      {
        "name": "旅游",
        "change_pct": 1.98
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.25
      },
      {
        "name": "物业管理",
        "change_pct": 0.98
      },
      {
        "name": "免税店概念",
        "change_pct": 2.64
      },
      {
        "name": "自贸区",
        "change_pct": 1.56
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 32,
    "hot_rank_chg": -9,
    "stock_cnt": 5886,
    "price": "5.68",
    "change": "5.38",
    "market_id": "33",
    "circulate_market_value": "6454752000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.07
      },
      {
        "name": "锂电池",
        "change_pct": -1.27
      },
      {
        "name": "石墨烯",
        "change_pct": -0.47
      },
      {
        "name": "新能源整车",
        "change_pct": 1.67
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.58
      },
      {
        "name": "汽车整车",
        "change_pct": 1.47
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.56
      },
      {
        "name": "白色家电",
        "change_pct": -0.49
      },
      {
        "name": "家电",
        "change_pct": 0.08
      },
      {
        "name": "汽车热管理",
        "change_pct": -0.21
      },
      {
        "name": "热泵",
        "change_pct": -0.02
      },
      {
        "name": "轮边电机",
        "change_pct": 0.28
      },
      {
        "name": "超级电容",
        "change_pct": -1.19
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.42
      }
    ]
  },
  {
    "code": "000998",
    "name": "隆平高科",
    "hot_rank": 36,
    "hot_rank_chg": 26,
    "stock_cnt": 5886,
    "price": "9.97",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "13111053900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 6.6
      },
      {
        "name": "转基因",
        "change_pct": 7.84
      },
      {
        "name": "棉花",
        "change_pct": 4.48
      },
      {
        "name": "乡村振兴",
        "change_pct": 3.02
      },
      {
        "name": "基因编辑",
        "change_pct": 1.68
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      },
      {
        "name": "大消费",
        "change_pct": 1.51
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 41,
    "hot_rank_chg": 9,
    "stock_cnt": 5886,
    "price": "7.90",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "8549369400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "种业",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.65
      },
      {
        "name": "农业种植",
        "change_pct": 6.6
      },
      {
        "name": "化肥",
        "change_pct": 2.26
      },
      {
        "name": "转基因",
        "change_pct": 7.84
      },
      {
        "name": "土地流转",
        "change_pct": 3.56
      },
      {
        "name": "农垦",
        "change_pct": 4.24
      },
      {
        "name": "乡村振兴",
        "change_pct": 3.02
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      },
      {
        "name": "大豆",
        "change_pct": 5.99
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 42,
    "hot_rank_chg": -2,
    "stock_cnt": 5886,
    "price": "9.12",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "4813555000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 6.6
      },
      {
        "name": "棉花",
        "change_pct": 4.48
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      },
      {
        "name": "供销社",
        "change_pct": 3.59
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 46,
    "hot_rank_chg": -12,
    "stock_cnt": 5886,
    "price": "9.11",
    "change": "6.05",
    "market_id": "33",
    "circulate_market_value": "6629942800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 0.73
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.64
      },
      {
        "name": "风电",
        "change_pct": -0.18
      },
      {
        "name": "环氧丙烷",
        "change_pct": -0.03
      },
      {
        "name": "乡村振兴",
        "change_pct": 3.02
      },
      {
        "name": "建筑节能",
        "change_pct": 0.65
      },
      {
        "name": "旧改",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 47,
    "hot_rank_chg": 5,
    "stock_cnt": 5886,
    "price": "11.75",
    "change": "4.82",
    "market_id": "33",
    "circulate_market_value": "5179657900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.46
      },
      {
        "name": "锂电池",
        "change_pct": -1.27
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.56
      },
      {
        "name": "两轮车",
        "change_pct": 0.16
      },
      {
        "name": "珠宝饰品",
        "change_pct": 1.97
      }
    ]
  },
  {
    "code": "000564",
    "name": "供销大集",
    "hot_rank": 50,
    "hot_rank_chg": 15,
    "stock_cnt": 5886,
    "price": "1.66",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "25057500000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "粮食贸易",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "新零售",
        "change_pct": 3.55
      },
      {
        "name": "冷链",
        "change_pct": 0.73
      },
      {
        "name": "社区团购",
        "change_pct": 2.99
      },
      {
        "name": "物业管理",
        "change_pct": 0.98
      },
      {
        "name": "低价股",
        "change_pct": 1.3
      },
      {
        "name": "供销社",
        "change_pct": 3.59
      },
      {
        "name": "数字乡村",
        "change_pct": 2.3
      },
      {
        "name": "免税店概念",
        "change_pct": 2.64
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 51,
    "hot_rank_chg": 3,
    "stock_cnt": 5886,
    "price": "6.17",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "7174768000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI影视",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 3.73
      },
      {
        "name": "新疆概念",
        "change_pct": 1.48
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.2
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.58
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 52,
    "hot_rank_chg": 18,
    "stock_cnt": 5886,
    "price": "11.78",
    "change": "7.58",
    "market_id": "33",
    "circulate_market_value": "3351193300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 1.23
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "教育",
        "change_pct": 1.77
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.25
      },
      {
        "name": "职业教育",
        "change_pct": 2.02
      },
      {
        "name": "在线教育",
        "change_pct": 1.98
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.84
      },
      {
        "name": "华为产业链",
        "change_pct": 0.04
      },
      {
        "name": "智谱AI",
        "change_pct": 1.4
      }
    ]
  },
  {
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 54,
    "hot_rank_chg": 13,
    "stock_cnt": 5886,
    "price": "12.66",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "3999088800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "股份回购",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 3.55
      },
      {
        "name": "冷链",
        "change_pct": 0.73
      },
      {
        "name": "宁夏概念",
        "change_pct": 1.6
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.16
      },
      {
        "name": "首发经济",
        "change_pct": 2.67
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 55,
    "hot_rank_chg": 19,
    "stock_cnt": 5886,
    "price": "12.28",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "7461593800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数字人民币",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.57
      },
      {
        "name": "金融科技",
        "change_pct": 2.42
      },
      {
        "name": "移动支付",
        "change_pct": 1.91
      },
      {
        "name": "物联网",
        "change_pct": 0.48
      },
      {
        "name": "数字经济",
        "change_pct": 1.6
      },
      {
        "name": "电子身份证",
        "change_pct": 1.98
      },
      {
        "name": "ETC",
        "change_pct": 1.2
      },
      {
        "name": "数字人民币",
        "change_pct": 2.45
      },
      {
        "name": "智慧政务",
        "change_pct": 1.66
      },
      {
        "name": "eSIM",
        "change_pct": 1.83
      },
      {
        "name": "华为产业链",
        "change_pct": 0.04
      },
      {
        "name": "区块链",
        "change_pct": 2.2
      },
      {
        "name": "RWA",
        "change_pct": 3.6
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 56,
    "hot_rank_chg": 33,
    "stock_cnt": 5886,
    "price": "9.58",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "10868865500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI视频",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.02
      },
      {
        "name": "足球",
        "change_pct": 2.19
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.3
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.6
      },
      {
        "name": "传媒",
        "change_pct": 2.7
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.79
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.19
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.35
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.58
      }
    ]
  },
  {
    "code": "002679",
    "name": "福建金森",
    "hot_rank": 59,
    "hot_rank_chg": 47,
    "stock_cnt": 5886,
    "price": "12.91",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "3043610000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "林业主业",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.92
      },
      {
        "name": "林业",
        "change_pct": 3.81
      },
      {
        "name": "碳中和",
        "change_pct": 1.04
      },
      {
        "name": "自贸区",
        "change_pct": 1.56
      },
      {
        "name": "林业碳汇",
        "change_pct": 2.86
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 60,
    "hot_rank_chg": 31,
    "stock_cnt": 5886,
    "price": "7.74",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "5123688400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "粮食概念",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 2.0
      },
      {
        "name": "京津冀",
        "change_pct": 1.03
      },
      {
        "name": "调味品",
        "change_pct": 1.35
      },
      {
        "name": "海南概念",
        "change_pct": 2.06
      },
      {
        "name": "休闲食品",
        "change_pct": 1.71
      },
      {
        "name": "食品",
        "change_pct": 1.73
      },
      {
        "name": "人造肉",
        "change_pct": 3.49
      }
    ]
  },
  {
    "code": "002721",
    "name": "金一文化",
    "hot_rank": 61,
    "hot_rank_chg": 23,
    "stock_cnt": 5886,
    "price": "3.18",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "8456824000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI金融",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.02
      },
      {
        "name": "金融科技",
        "change_pct": 2.42
      },
      {
        "name": "人工智能",
        "change_pct": 0.88
      },
      {
        "name": "珠宝饰品",
        "change_pct": 1.97
      },
      {
        "name": "数字人民币",
        "change_pct": 2.45
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.36
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 67,
    "hot_rank_chg": -3,
    "stock_cnt": 5886,
    "price": "5.91",
    "change": "-1.66",
    "market_id": "33",
    "circulate_market_value": "209019760000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.34
      },
      {
        "name": "手机产业链",
        "change_pct": -1.59
      },
      {
        "name": "超高清视频",
        "change_pct": 0.65
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.11
      },
      {
        "name": "电竞",
        "change_pct": 0.97
      },
      {
        "name": "半导体",
        "change_pct": -2.69
      },
      {
        "name": "人工智能",
        "change_pct": 0.88
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.94
      },
      {
        "name": "VR&AR",
        "change_pct": -0.37
      },
      {
        "name": "OLED",
        "change_pct": -2.0
      },
      {
        "name": "京津冀",
        "change_pct": 1.03
      },
      {
        "name": "物联网",
        "change_pct": 0.48
      },
      {
        "name": "指纹识别",
        "change_pct": -0.7
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.34
      },
      {
        "name": "白马股",
        "change_pct": 0.25
      },
      {
        "name": "智能制造",
        "change_pct": -0.54
      },
      {
        "name": "小米概念股",
        "change_pct": -1.09
      },
      {
        "name": "国产芯片",
        "change_pct": -1.85
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.56
      },
      {
        "name": "全息概念",
        "change_pct": 0.73
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.97
      },
      {
        "name": "MicroLED",
        "change_pct": -2.06
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.65
      },
      {
        "name": "智能手表",
        "change_pct": -0.74
      },
      {
        "name": "MiniLED",
        "change_pct": -1.87
      },
      {
        "name": "传感器",
        "change_pct": -1.07
      },
      {
        "name": "大硅片",
        "change_pct": -3.33
      },
      {
        "name": "AI PC",
        "change_pct": -1.37
      },
      {
        "name": "华为产业链",
        "change_pct": 0.04
      },
      {
        "name": "回购",
        "change_pct": -0.1
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -2.87
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.05
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.45
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 68,
    "hot_rank_chg": -25,
    "stock_cnt": 5886,
    "price": "8.40",
    "change": "4.74",
    "market_id": "17",
    "circulate_market_value": "9565561300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.57
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "光伏",
        "change_pct": -0.72
      },
      {
        "name": "特高压",
        "change_pct": -0.32
      },
      {
        "name": "智能电网",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 70,
    "hot_rank_chg": 11,
    "stock_cnt": 5886,
    "price": "11.16",
    "change": "-5.58",
    "market_id": "33",
    "circulate_market_value": "5555950200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.46
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.26
      },
      {
        "name": "农业种植",
        "change_pct": 6.6
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "医药",
        "change_pct": 1.05
      },
      {
        "name": "流感",
        "change_pct": 1.06
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      }
    ]
  },
  {
    "code": "002041",
    "name": "登海种业",
    "hot_rank": 74,
    "hot_rank_chg": 14,
    "stock_cnt": 5886,
    "price": "11.88",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "10454400000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "粮食概念",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 6.6
      },
      {
        "name": "转基因",
        "change_pct": 7.84
      },
      {
        "name": "乡村振兴",
        "change_pct": 3.02
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      },
      {
        "name": "人造肉",
        "change_pct": 3.49
      },
      {
        "name": "大豆",
        "change_pct": 5.99
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 76,
    "hot_rank_chg": 60,
    "stock_cnt": 5886,
    "price": "6.62",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "2518429300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "液冷硅油",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.57
      },
      {
        "name": "有机硅",
        "change_pct": -0.52
      },
      {
        "name": "装修装饰",
        "change_pct": 0.14
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.64
      },
      {
        "name": "光伏",
        "change_pct": -0.72
      },
      {
        "name": "船舶",
        "change_pct": 0.2
      },
      {
        "name": "固态电池",
        "change_pct": -0.9
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.81
      },
      {
        "name": "旧改",
        "change_pct": 0.67
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.08
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.42
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 78,
    "hot_rank_chg": -18,
    "stock_cnt": 5886,
    "price": "11.63",
    "change": "0.52",
    "market_id": "17",
    "circulate_market_value": "20807678000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.35
      },
      {
        "name": "纯碱",
        "change_pct": 0.61
      },
      {
        "name": "食品",
        "change_pct": 1.73
      },
      {
        "name": "土壤修复",
        "change_pct": 0.63
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.22
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.66
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 80,
    "hot_rank_chg": -7,
    "stock_cnt": 5886,
    "price": "6.97",
    "change": "4.03",
    "market_id": "33",
    "circulate_market_value": "13348194400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.92
      },
      {
        "name": "林业",
        "change_pct": 3.81
      },
      {
        "name": "碳中和",
        "change_pct": 1.04
      },
      {
        "name": "自贸区",
        "change_pct": 1.56
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 82,
    "hot_rank_chg": -46,
    "stock_cnt": 5886,
    "price": "11.91",
    "change": "-1.00",
    "market_id": "17",
    "circulate_market_value": "20666005000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.74
      },
      {
        "name": "核电",
        "change_pct": -0.17
      },
      {
        "name": "锂电池",
        "change_pct": -1.27
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -4.04
      },
      {
        "name": "PCB板",
        "change_pct": -3.63
      },
      {
        "name": "中科院系",
        "change_pct": 0.15
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.56
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.09
      },
      {
        "name": "固态电池",
        "change_pct": -0.9
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -3.8
      }
    ]
  },
  {
    "code": "002470",
    "name": "金正大",
    "hot_rank": 83,
    "hot_rank_chg": 29,
    "stock_cnt": 5886,
    "price": "2.32",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "7622929900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "复合肥",
    "xgb_concepts": [
      {
        "name": "磷化工",
        "change_pct": 0.93
      },
      {
        "name": "锂电池",
        "change_pct": -1.27
      },
      {
        "name": "化肥",
        "change_pct": 2.26
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.4
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.56
      },
      {
        "name": "大农业",
        "change_pct": 2.26
      },
      {
        "name": "低价股",
        "change_pct": 1.3
      },
      {
        "name": "数字乡村",
        "change_pct": 2.3
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 84,
    "hot_rank_chg": -16,
    "stock_cnt": 5886,
    "price": "4.35",
    "change": "-0.46",
    "market_id": "33",
    "circulate_market_value": "9146642000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.02
      },
      {
        "name": "中药",
        "change_pct": 1.46
      },
      {
        "name": "强势人气股",
        "change_pct": 0.68
      },
      {
        "name": "维生素",
        "change_pct": 0.6
      },
      {
        "name": "基因测序",
        "change_pct": 1.12
      },
      {
        "name": "民营医院",
        "change_pct": 1.49
      },
      {
        "name": "医药",
        "change_pct": 1.05
      },
      {
        "name": "化学原料药",
        "change_pct": 1.08
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.94
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 85,
    "hot_rank_chg": -16,
    "stock_cnt": 5886,
    "price": "4.92",
    "change": "-1.01",
    "market_id": "17",
    "circulate_market_value": "16080716000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.21
      },
      {
        "name": "养老产业",
        "change_pct": 1.37
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.3
      },
      {
        "name": "民营医院",
        "change_pct": 1.49
      },
      {
        "name": "地摊经济",
        "change_pct": 2.64
      }
    ]
  },
  {
    "code": "000536",
    "name": "华映科技",
    "hot_rank": 86,
    "hot_rank_chg": 46,
    "stock_cnt": 5886,
    "price": "3.96",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "10941806800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "显示面板",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -1.59
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.92
      },
      {
        "name": "OLED",
        "change_pct": -2.0
      },
      {
        "name": "3D玻璃",
        "change_pct": 0.11
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.56
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      },
      {
        "name": "华为产业链",
        "change_pct": 0.04
      },
      {
        "name": "自贸区",
        "change_pct": 1.56
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 88,
    "hot_rank_chg": 17,
    "stock_cnt": 5886,
    "price": "10.44",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "6809760900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数字人民币",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.91
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 1.84
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.07
      },
      {
        "name": "新零售",
        "change_pct": 3.55
      },
      {
        "name": "移动支付",
        "change_pct": 1.91
      },
      {
        "name": "京津冀",
        "change_pct": 1.03
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.66
      },
      {
        "name": "国产芯片",
        "change_pct": -1.85
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.2
      },
      {
        "name": "物业管理",
        "change_pct": 0.98
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.19
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      },
      {
        "name": "数字人民币",
        "change_pct": 2.45
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.36
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 89,
    "hot_rank_chg": 44,
    "stock_cnt": 5886,
    "price": "4.86",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "2718292900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "短剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 2.28
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.23
      },
      {
        "name": "游戏",
        "change_pct": 2.23
      },
      {
        "name": "影视",
        "change_pct": 3.73
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.58
      }
    ]
  },
  {
    "code": "601933",
    "name": "永辉超市",
    "hot_rank": 90,
    "hot_rank_chg": -10,
    "stock_cnt": 5886,
    "price": "3.28",
    "change": "6.15",
    "market_id": "17",
    "circulate_market_value": "29274122000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "新零售",
        "change_pct": 3.55
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.2
      },
      {
        "name": "社区团购",
        "change_pct": 2.99
      },
      {
        "name": "大消费",
        "change_pct": 1.51
      }
    ]
  },
  {
    "code": "002349",
    "name": "精华制药",
    "hot_rank": 91,
    "hot_rank_chg": 55,
    "stock_cnt": 5886,
    "price": "8.36",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "6806552400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "中药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.46
      },
      {
        "name": "锂电池",
        "change_pct": -1.27
      },
      {
        "name": "养老产业",
        "change_pct": 1.37
      },
      {
        "name": "江苏国企改革",
        "change_pct": 1.76
      },
      {
        "name": "医药",
        "change_pct": 1.05
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.56
      },
      {
        "name": "化学原料药",
        "change_pct": 1.08
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.94
      },
      {
        "name": "流感",
        "change_pct": 1.06
      },
      {
        "name": "国企改革",
        "change_pct": 1.02
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.8
      }
    ]
  },
  {
    "code": "600130",
    "name": "波导股份",
    "hot_rank": 93,
    "hot_rank_chg": 26,
    "stock_cnt": 5886,
    "price": "4.93",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "3697500000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "参股华大北斗",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -1.59
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.23
      },
      {
        "name": "北斗导航",
        "change_pct": 0.42
      },
      {
        "name": "国产芯片",
        "change_pct": -1.85
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 95,
    "hot_rank_chg": 40,
    "stock_cnt": 5886,
    "price": "3.60",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "3312669300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "游戏IP",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 2.28
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.23
      },
      {
        "name": "人工智能",
        "change_pct": 0.88
      },
      {
        "name": "VR&AR",
        "change_pct": -0.37
      },
      {
        "name": "游戏",
        "change_pct": 2.23
      },
      {
        "name": "动漫",
        "change_pct": 3.12
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.2
      },
      {
        "name": "快手概念股",
        "change_pct": 3.1
      },
      {
        "name": "NFT",
        "change_pct": 3.41
      },
      {
        "name": "元宇宙",
        "change_pct": 1.71
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.67
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.19
      },
      {
        "name": "云游戏",
        "change_pct": 0.49
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "002291",
    "name": "遥望科技",
    "hot_rank": 97,
    "hot_rank_chg": 46,
    "stock_cnt": 5886,
    "price": "6.01",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "5223442900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI应用",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "数字孪生",
        "change_pct": 1.09
      },
      {
        "name": "新零售",
        "change_pct": 3.55
      },
      {
        "name": "人工智能",
        "change_pct": 0.88
      },
      {
        "name": "直播/短视频",
        "change_pct": 3.61
      },
      {
        "name": "数字经济",
        "change_pct": 1.6
      },
      {
        "name": "传媒",
        "change_pct": 2.7
      },
      {
        "name": "快手概念股",
        "change_pct": 3.1
      },
      {
        "name": "NFT",
        "change_pct": 3.41
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.67
      },
      {
        "name": "web3.0",
        "change_pct": 2.47
      },
      {
        "name": "数据要素",
        "change_pct": 1.73
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.19
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.35
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.58
      },
      {
        "name": "首发经济",
        "change_pct": 2.67
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.97
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "605179", "name": "一鸣食品", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5886, "price": "34.67", "change": "9.99", "market_id": "17", "circulate_market_value": "13902670000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "大消费"}, {"code": "600127", "name": "金健米业", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5886, "price": "13.24", "change": "9.97", "market_id": "17", "circulate_market_value": "8497209800.00", "change_type": "1", "change_section": "12", "change_days": "7", "change_reason": "粮油加工"}, {"code": "600371", "name": "万向德农", "hot_rank": 3, "hot_rank_chg": 8, "stock_cnt": 5886, "price": "13.96", "change": "10.01", "market_id": "17", "circulate_market_value": "4084388900.00", "change_type": "1", "change_section": "11", "change_days": "8", "change_reason": "转基因玉米"}, {"code": "003040", "name": "楚天龙", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5886, "price": "19.58", "change": "10.00", "market_id": "33", "circulate_market_value": "8945128100.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "数字人民币"}, {"code": "600103", "name": "青山纸业", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5886, "price": "4.19", "change": "9.97", "market_id": "17", "circulate_market_value": "9269658700.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "光模块", "xgb_concepts": [{"name": "造纸", "change_pct": 0.67}, {"name": "云计算数据中心", "change_pct": -0.58}, {"name": "光通信", "change_pct": -2.42}, {"name": "林业", "change_pct": 3.81}, {"name": "军民融合", "change_pct": -0.09}, {"name": "军工", "change_pct": 0.11}, {"name": "人造肉", "change_pct": 3.49}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5886, "price": "18.06", "change": "7.50", "market_id": "17", "circulate_market_value": "12286573300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5886, "price": "571.10", "change": "1.10", "market_id": "17", "circulate_market_value": "17183097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 8, "hot_rank_chg": 9, "stock_cnt": 5886, "price": "10.09", "change": "10.03", "market_id": "17", "circulate_market_value": "6719940000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "连锁零售", "xgb_concepts": [{"name": "新零售", "change_pct": 3.55}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 9, "hot_rank_chg": -4, "stock_cnt": 5886, "price": "3.19", "change": "10.00", "market_id": "33", "circulate_market_value": "7473175100.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": 3.55}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "人工智能", "change_pct": 0.88}, {"name": "VR&AR", "change_pct": -0.37}, {"name": "京津冀", "change_pct": 1.03}, {"name": "装修装饰", "change_pct": 0.14}, {"name": "住房租赁", "change_pct": 0.62}, {"name": "破净股", "change_pct": 1.24}, {"name": "数字经济", "change_pct": 1.6}, {"name": "房产经纪", "change_pct": 2.2}, {"name": "物业管理", "change_pct": 0.98}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "AI大模型/智能体", "change_pct": 1.36}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5886, "price": "9.49", "change": "4.06", "market_id": "17", "circulate_market_value": "23900659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "工业大麻", "change_pct": 0.44}, {"name": "中药", "change_pct": 1.46}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "保健品", "change_pct": 1.61}, {"name": "民营医院", "change_pct": 1.49}, {"name": "医药", "change_pct": 1.05}, {"name": "化学原料药", "change_pct": 1.08}, {"name": "流感", "change_pct": 1.06}, {"name": "振兴东北", "change_pct": 1.38}, {"name": "食品", "change_pct": 1.73}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5886, "price": "5.10", "change": "7.37", "market_id": "33", "circulate_market_value": "29859464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.08}, {"name": "人工智能", "change_pct": 0.88}, {"name": "云计算数据中心", "change_pct": -0.58}, {"name": "水利", "change_pct": 1.15}, {"name": "直播/短视频", "change_pct": 3.61}, {"name": "大数据", "change_pct": 1.14}, {"name": "园林", "change_pct": 1.22}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.09}, {"name": "数字经济", "change_pct": 1.6}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "理想汽车概念股", "change_pct": 0.97}, {"name": "第三代半导体", "change_pct": -2.28}, {"name": "快手概念股", "change_pct": 3.1}, {"name": "IGBT", "change_pct": -1.75}, {"name": "虚拟数字人", "change_pct": 2.67}, {"name": "AIGC概念", "change_pct": 1.79}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "氮化镓", "change_pct": -2.2}, {"name": "AI营销", "change_pct": 3.43}, {"name": "AI大模型/智能体", "change_pct": 1.36}, {"name": "多模态", "change_pct": 1.92}, {"name": "液冷服务器", "change_pct": -1.42}, {"name": "小红书概念股", "change_pct": 2.97}, {"name": "区块链", "change_pct": 2.2}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 12, "hot_rank_chg": -3, "stock_cnt": 5886, "price": "11.16", "change": "0.00", "market_id": "17", "circulate_market_value": "5349211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.46}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "医药商业", "change_pct": 1.98}, {"name": "医药", "change_pct": 1.05}, {"name": "流感", "change_pct": 1.06}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 13, "hot_rank_chg": 9, "stock_cnt": 5886, "price": "30.55", "change": "10.01", "market_id": "17", "circulate_market_value": "7401348500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "跨界收购"}, {"code": "003005", "name": "竞业达", "hot_rank": 14, "hot_rank_chg": 17, "stock_cnt": 5886, "price": "18.18", "change": "9.98", "market_id": "33", "circulate_market_value": "2439659200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI教育"}, {"code": "002081", "name": "金螳螂", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5886, "price": "5.69", "change": "-7.63", "market_id": "33", "circulate_market_value": "15093013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.68}, {"name": "装修装饰", "change_pct": 0.14}, {"name": "装配式建筑", "change_pct": 0.64}, {"name": "航天", "change_pct": -0.6}, {"name": "旧改", "change_pct": 0.67}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 16, "hot_rank_chg": 9, "stock_cnt": 5886, "price": "7.02", "change": "10.03", "market_id": "33", "circulate_market_value": "4525333800.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.57}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "装修装饰", "change_pct": 0.14}, {"name": "装配式建筑", "change_pct": 0.64}, {"name": "家具家居", "change_pct": 0.59}, {"name": "智能制造", "change_pct": -0.54}, {"name": "3D打印", "change_pct": -1.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.02}, {"name": "旧改", "change_pct": 0.67}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 17, "hot_rank_chg": -2, "stock_cnt": 5886, "price": "20.38", "change": "20.02", "market_id": "33", "circulate_market_value": "20822245000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AIGC长剧"}, {"code": "002015", "name": "协鑫能科", "hot_rank": 18, "hot_rank_chg": -2, "stock_cnt": 5886, "price": "17.42", "change": "9.97", "market_id": "33", "circulate_market_value": "28278315000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算电协同"}, {"code": "002855", "name": "捷荣技术", "hot_rank": 19, "hot_rank_chg": 9, "stock_cnt": 5886, "price": "17.71", "change": "10.00", "market_id": "33", "circulate_market_value": "4360684300.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "折叠屏"}, {"code": "600479", "name": "千金药业", "hot_rank": 20, "hot_rank_chg": 27, "stock_cnt": 5886, "price": "13.37", "change": "10.04", "market_id": "17", "circulate_market_value": "5595440200.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "女性健康"}, {"code": "600410", "name": "华胜天成", "hot_rank": 21, "hot_rank_chg": 8, "stock_cnt": 5886, "price": "15.22", "change": "9.97", "market_id": "17", "circulate_market_value": "16688649000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力"}, {"code": "002354", "name": "天娱数科", "hot_rank": 22, "hot_rank_chg": -9, "stock_cnt": 5886, "price": "8.36", "change": "4.11", "market_id": "33", "circulate_market_value": "13601668000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "电竞", "change_pct": 0.97}, {"name": "手游", "change_pct": 2.28}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "人工智能", "change_pct": 0.88}, {"name": "游戏", "change_pct": 2.23}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.6}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "快手概念股", "change_pct": 3.1}, {"name": "元宇宙", "change_pct": 1.71}, {"name": "虚拟数字人", "change_pct": 2.67}, {"name": "东数西算/算力", "change_pct": 0.22}, {"name": "web3.0", "change_pct": 2.47}, {"name": "AIGC概念", "change_pct": 1.79}, {"name": "数据要素", "change_pct": 1.73}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "AI营销", "change_pct": 3.43}, {"name": "ChatGPT", "change_pct": 1.58}, {"name": "智能眼镜/MR头显", "change_pct": -1.05}, {"name": "AI大模型/智能体", "change_pct": 1.36}, {"name": "人形机器人", "change_pct": -0.99}, {"name": "短剧/互动影游", "change_pct": 3.58}, {"name": "多模态", "change_pct": 1.92}, {"name": "AI视频", "change_pct": 1.84}, {"name": "IP经济/谷子经济", "change_pct": 2.16}, {"name": "小红书概念股", "change_pct": 2.97}]}, {"code": "600540", "name": "新赛股份", "hot_rank": 23, "hot_rank_chg": 22, "stock_cnt": 5886, "price": "6.12", "change": "10.07", "market_id": "17", "circulate_market_value": "3558027000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "棉花全产业链", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "新疆国企改革", "change_pct": 2.17}, {"name": "农垦", "change_pct": 4.24}, {"name": "棉花", "change_pct": 4.48}, {"name": "新疆概念", "change_pct": 1.48}, {"name": "风电", "change_pct": -0.18}, {"name": "大农业", "change_pct": 2.26}, {"name": "国企改革", "change_pct": 1.02}]}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 24, "hot_rank_chg": 20, "stock_cnt": 5886, "price": "4.73", "change": "10.00", "market_id": "33", "circulate_market_value": "3362078300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AIGC影视", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.88}, {"name": "影视", "change_pct": 3.73}, {"name": "旅游", "change_pct": 1.98}, {"name": "虚拟数字人", "change_pct": 2.67}, {"name": "AI营销", "change_pct": 3.43}, {"name": "AI大模型/智能体", "change_pct": 1.36}, {"name": "短剧/互动影游", "change_pct": 3.58}, {"name": "IP经济/谷子经济", "change_pct": 2.16}]}, {"code": "600227", "name": "赤天化", "hot_rank": 25, "hot_rank_chg": -7, "stock_cnt": 5886, "price": "5.17", "change": "2.58", "market_id": "17", "circulate_market_value": "6605191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.26}, {"name": "化肥", "change_pct": 2.26}, {"name": "保健品", "change_pct": 1.61}, {"name": "民营医院", "change_pct": 1.49}, {"name": "医药", "change_pct": 1.05}, {"name": "煤化工", "change_pct": 0.54}, {"name": "食品", "change_pct": 1.73}, {"name": "大农业", "change_pct": 2.26}, {"name": "干细胞", "change_pct": 1.52}, {"name": "阿尔茨海默病", "change_pct": 1.38}]}, {"code": "300189", "name": "神农种业", "hot_rank": 26, "hot_rank_chg": -7, "stock_cnt": 5886, "price": "7.55", "change": "20.03", "market_id": "33", "circulate_market_value": "6691190700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "农作物种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "土地流转", "change_pct": 3.56}, {"name": "海南概念", "change_pct": 2.06}, {"name": "自由贸易港", "change_pct": 1.66}, {"name": "海南自由贸易港", "change_pct": 2.63}, {"name": "大农业", "change_pct": 2.26}, {"name": "水产养殖", "change_pct": 5.19}, {"name": "自贸区", "change_pct": 1.56}]}, {"code": "600551", "name": "时代出版", "hot_rank": 27, "hot_rank_chg": 19, "stock_cnt": 5886, "price": "9.08", "change": "10.06", "market_id": "17", "circulate_market_value": "6156741600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报扣非增长", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": 1.26}, {"name": "安徽国企改革", "change_pct": 1.05}, {"name": "教育", "change_pct": 1.77}, {"name": "传媒", "change_pct": 2.7}, {"name": "国企改革", "change_pct": 1.02}, {"name": "在线教育", "change_pct": 1.98}]}, {"code": "000158", "name": "常山北明", "hot_rank": 28, "hot_rank_chg": 25, "stock_cnt": 5886, "price": "13.88", "change": "9.98", "market_id": "33", "circulate_market_value": "22078134000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI应用"}, {"code": "600487", "name": "亨通光电", "hot_rank": 29, "hot_rank_chg": -9, "stock_cnt": 5886, "price": "67.34", "change": "-0.06", "market_id": "17", "circulate_market_value": "165228540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 30, "hot_rank_chg": 7, "stock_cnt": 5886, "price": "5.40", "change": "9.98", "market_id": "17", "circulate_market_value": "6579425000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "煤炭", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.04}, {"name": "煤炭", "change_pct": -0.6}, {"name": "有色金属", "change_pct": -0.89}, {"name": "国企改革", "change_pct": 1.02}, {"name": "河南国企改革", "change_pct": 1.12}]}, {"code": "600693", "name": "东百集团", "hot_rank": 31, "hot_rank_chg": 18, "stock_cnt": 5886, "price": "10.24", "change": "9.99", "market_id": "17", "circulate_market_value": "8898076500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "快递物流", "change_pct": 0.98}, {"name": "新零售", "change_pct": 3.55}, {"name": "福建自贸/海西概念", "change_pct": 1.92}, {"name": "旅游", "change_pct": 1.98}, {"name": "阿里巴巴概念股", "change_pct": 1.25}, {"name": "物业管理", "change_pct": 0.98}, {"name": "免税店概念", "change_pct": 2.64}, {"name": "自贸区", "change_pct": 1.56}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 32, "hot_rank_chg": -9, "stock_cnt": 5886, "price": "5.68", "change": "5.38", "market_id": "33", "circulate_market_value": "6454752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.07}, {"name": "锂电池", "change_pct": -1.27}, {"name": "石墨烯", "change_pct": -0.47}, {"name": "新能源整车", "change_pct": 1.67}, {"name": "云计算数据中心", "change_pct": -0.58}, {"name": "汽车整车", "change_pct": 1.47}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "白色家电", "change_pct": -0.49}, {"name": "家电", "change_pct": 0.08}, {"name": "汽车热管理", "change_pct": -0.21}, {"name": "热泵", "change_pct": -0.02}, {"name": "轮边电机", "change_pct": 0.28}, {"name": "超级电容", "change_pct": -1.19}, {"name": "液冷服务器", "change_pct": -1.42}]}, {"code": "000712", "name": "锦龙股份", "hot_rank": 33, "hot_rank_chg": 0, "stock_cnt": 5886, "price": "13.50", "change": "4.01", "market_id": "33", "circulate_market_value": "12092410700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 34, "hot_rank_chg": 8, "stock_cnt": 5886, "price": "24.85", "change": "10.00", "market_id": "17", "circulate_market_value": "10906586300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI短剧"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 35, "hot_rank_chg": -14, "stock_cnt": 5886, "price": "39.75", "change": "-1.51", "market_id": "33", "circulate_market_value": "30107250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000998", "name": "隆平高科", "hot_rank": 36, "hot_rank_chg": 26, "stock_cnt": 5886, "price": "9.97", "change": "10.04", "market_id": "33", "circulate_market_value": "13111053900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "转基因", "change_pct": 7.84}, {"name": "棉花", "change_pct": 4.48}, {"name": "乡村振兴", "change_pct": 3.02}, {"name": "基因编辑", "change_pct": 1.68}, {"name": "大农业", "change_pct": 2.26}, {"name": "大消费", "change_pct": 1.51}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 37, "hot_rank_chg": -5, "stock_cnt": 5886, "price": "18.24", "change": "10.01", "market_id": "33", "circulate_market_value": "10689516900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "无人驾驶"}, {"code": "001258", "name": "立新能源", "hot_rank": 38, "hot_rank_chg": 13, "stock_cnt": 5886, "price": "13.80", "change": "4.55", "market_id": "33", "circulate_market_value": "12879838200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 39, "hot_rank_chg": -25, "stock_cnt": 5886, "price": "43.02", "change": "-2.07", "market_id": "17", "circulate_market_value": "170857670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 40, "hot_rank_chg": -16, "stock_cnt": 5886, "price": "13.19", "change": "-5.11", "market_id": "17", "circulate_market_value": "5072183300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600313", "name": "农发种业", "hot_rank": 41, "hot_rank_chg": 9, "stock_cnt": 5886, "price": "7.90", "change": "10.03", "market_id": "17", "circulate_market_value": "8549369400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "种业", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.65}, {"name": "农业种植", "change_pct": 6.6}, {"name": "化肥", "change_pct": 2.26}, {"name": "转基因", "change_pct": 7.84}, {"name": "土地流转", "change_pct": 3.56}, {"name": "农垦", "change_pct": 4.24}, {"name": "乡村振兴", "change_pct": 3.02}, {"name": "大农业", "change_pct": 2.26}, {"name": "国企改革", "change_pct": 1.02}, {"name": "大豆", "change_pct": 5.99}]}, {"code": "600354", "name": "敦煌种业", "hot_rank": 42, "hot_rank_chg": -2, "stock_cnt": 5886, "price": "9.12", "change": "10.01", "market_id": "17", "circulate_market_value": "4813555000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "中报增长", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "棉花", "change_pct": 4.48}, {"name": "大农业", "change_pct": 2.26}, {"name": "供销社", "change_pct": 3.59}]}, {"code": "600272", "name": "开开实业", "hot_rank": 43, "hot_rank_chg": 18, "stock_cnt": 5886, "price": "20.09", "change": "10.02", "market_id": "17", "circulate_market_value": "3214400000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "医药商业"}, {"code": "600869", "name": "远东股份", "hot_rank": 44, "hot_rank_chg": -18, "stock_cnt": 5886, "price": "17.73", "change": "-7.08", "market_id": "17", "circulate_market_value": "39349124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 45, "hot_rank_chg": -6, "stock_cnt": 5886, "price": "859.30", "change": "0.87", "market_id": "33", "circulate_market_value": "953768870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 46, "hot_rank_chg": -12, "stock_cnt": 5886, "price": "9.11", "change": "6.05", "market_id": "33", "circulate_market_value": "6629942800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 0.73}, {"name": "装配式建筑", "change_pct": 0.64}, {"name": "风电", "change_pct": -0.18}, {"name": "环氧丙烷", "change_pct": -0.03}, {"name": "乡村振兴", "change_pct": 3.02}, {"name": "建筑节能", "change_pct": 0.65}, {"name": "旧改", "change_pct": 0.67}]}, {"code": "000017", "name": "深中华A", "hot_rank": 47, "hot_rank_chg": 5, "stock_cnt": 5886, "price": "11.75", "change": "4.82", "market_id": "33", "circulate_market_value": "5179657900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.46}, {"name": "锂电池", "change_pct": -1.27}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "两轮车", "change_pct": 0.16}, {"name": "珠宝饰品", "change_pct": 1.97}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 48, "hot_rank_chg": -13, "stock_cnt": 5886, "price": "56.50", "change": "-2.60", "market_id": "17", "circulate_market_value": "254421700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603269", "name": "海鸥股份", "hot_rank": 49, "hot_rank_chg": 9, "stock_cnt": 5886, "price": "25.34", "change": "3.85", "market_id": "17", "circulate_market_value": "10945498700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000564", "name": "供销大集", "hot_rank": 50, "hot_rank_chg": 15, "stock_cnt": 5886, "price": "1.66", "change": "9.93", "market_id": "33", "circulate_market_value": "25057500000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮食贸易", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "新零售", "change_pct": 3.55}, {"name": "冷链", "change_pct": 0.73}, {"name": "社区团购", "change_pct": 2.99}, {"name": "物业管理", "change_pct": 0.98}, {"name": "低价股", "change_pct": 1.3}, {"name": "供销社", "change_pct": 3.59}, {"name": "数字乡村", "change_pct": 2.3}, {"name": "免税店概念", "change_pct": 2.64}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 51, "hot_rank_chg": 3, "stock_cnt": 5886, "price": "6.17", "change": "9.98", "market_id": "33", "circulate_market_value": "7174768000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI影视", "xgb_concepts": [{"name": "影视", "change_pct": 3.73}, {"name": "新疆概念", "change_pct": 1.48}, {"name": "阿里巴巴概念股", "change_pct": 1.25}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "短剧/互动影游", "change_pct": 3.58}, {"name": "IP经济/谷子经济", "change_pct": 2.16}]}, {"code": "003032", "name": "传智教育", "hot_rank": 52, "hot_rank_chg": 18, "stock_cnt": 5886, "price": "11.78", "change": "7.58", "market_id": "33", "circulate_market_value": "3351193300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 1.23}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "教育", "change_pct": 1.77}, {"name": "阿里巴巴概念股", "change_pct": 1.25}, {"name": "职业教育", "change_pct": 2.02}, {"name": "在线教育", "change_pct": 1.98}, {"name": "华为鸿蒙", "change_pct": 1.84}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "智谱AI", "change_pct": 1.4}]}, {"code": "000636", "name": "风华高科", "hot_rank": 53, "hot_rank_chg": -26, "stock_cnt": 5886, "price": "51.87", "change": "-7.18", "market_id": "33", "circulate_market_value": "59520305000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600785", "name": "新华百货", "hot_rank": 54, "hot_rank_chg": 13, "stock_cnt": 5886, "price": "12.66", "change": "9.99", "market_id": "17", "circulate_market_value": "3999088800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "股份回购", "xgb_concepts": [{"name": "新零售", "change_pct": 3.55}, {"name": "冷链", "change_pct": 0.73}, {"name": "宁夏概念", "change_pct": 1.6}, {"name": "IP经济/谷子经济", "change_pct": 2.16}, {"name": "首发经济", "change_pct": 2.67}]}, {"code": "002104", "name": "恒宝股份", "hot_rank": 55, "hot_rank_chg": 19, "stock_cnt": 5886, "price": "12.28", "change": "10.04", "market_id": "33", "circulate_market_value": "7461593800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.57}, {"name": "金融科技", "change_pct": 2.42}, {"name": "移动支付", "change_pct": 1.91}, {"name": "物联网", "change_pct": 0.48}, {"name": "数字经济", "change_pct": 1.6}, {"name": "电子身份证", "change_pct": 1.98}, {"name": "ETC", "change_pct": 1.2}, {"name": "数字人民币", "change_pct": 2.45}, {"name": "智慧政务", "change_pct": 1.66}, {"name": "eSIM", "change_pct": 1.83}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "区块链", "change_pct": 2.2}, {"name": "RWA", "change_pct": 3.6}]}, {"code": "002181", "name": "粤传媒", "hot_rank": 56, "hot_rank_chg": 33, "stock_cnt": 5886, "price": "9.58", "change": "9.99", "market_id": "33", "circulate_market_value": "10868865500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI视频", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.02}, {"name": "足球", "change_pct": 2.19}, {"name": "粤港澳大湾区", "change_pct": 1.3}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.6}, {"name": "传媒", "change_pct": 2.7}, {"name": "AIGC概念", "change_pct": 1.79}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "国企改革", "change_pct": 1.02}, {"name": "网红/MCN", "change_pct": 2.35}, {"name": "短剧/互动影游", "change_pct": 3.58}]}, {"code": "601123", "name": "马矿股份", "hot_rank": 57, "hot_rank_chg": -27, "stock_cnt": 5886, "price": "26.00", "change": "290.98", "market_id": "17", "circulate_market_value": "2491534700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 58, "hot_rank_chg": -17, "stock_cnt": 5886, "price": "85.60", "change": "0.49", "market_id": "33", "circulate_market_value": "125567981000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002679", "name": "福建金森", "hot_rank": 59, "hot_rank_chg": 47, "stock_cnt": 5886, "price": "12.91", "change": "9.97", "market_id": "33", "circulate_market_value": "3043610000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "林业主业", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.92}, {"name": "林业", "change_pct": 3.81}, {"name": "碳中和", "change_pct": 1.04}, {"name": "自贸区", "change_pct": 1.56}, {"name": "林业碳汇", "change_pct": 2.86}]}, {"code": "000505", "name": "京粮控股", "hot_rank": 60, "hot_rank_chg": 31, "stock_cnt": 5886, "price": "7.74", "change": "9.94", "market_id": "33", "circulate_market_value": "5123688400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮食概念", "xgb_concepts": [{"name": "饲料", "change_pct": 2.0}, {"name": "京津冀", "change_pct": 1.03}, {"name": "调味品", "change_pct": 1.35}, {"name": "海南概念", "change_pct": 2.06}, {"name": "休闲食品", "change_pct": 1.71}, {"name": "食品", "change_pct": 1.73}, {"name": "人造肉", "change_pct": 3.49}]}, {"code": "002721", "name": "金一文化", "hot_rank": 61, "hot_rank_chg": 23, "stock_cnt": 5886, "price": "3.18", "change": "10.04", "market_id": "33", "circulate_market_value": "8456824000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI金融", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.02}, {"name": "金融科技", "change_pct": 2.42}, {"name": "人工智能", "change_pct": 0.88}, {"name": "珠宝饰品", "change_pct": 1.97}, {"name": "数字人民币", "change_pct": 2.45}, {"name": "AI大模型/智能体", "change_pct": 1.36}]}, {"code": "002886", "name": "沃特股份", "hot_rank": 62, "hot_rank_chg": 20, "stock_cnt": 5886, "price": "28.04", "change": "-3.44", "market_id": "33", "circulate_market_value": "5862551700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 63, "hot_rank_chg": -4, "stock_cnt": 5886, "price": "48.86", "change": "-7.83", "market_id": "17", "circulate_market_value": "52405544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 64, "hot_rank_chg": -9, "stock_cnt": 5886, "price": "34.86", "change": "-4.42", "market_id": "33", "circulate_market_value": "37680812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603721", "name": "中广天择", "hot_rank": 65, "hot_rank_chg": 50, "stock_cnt": 5886, "price": "21.01", "change": "10.00", "market_id": "17", "circulate_market_value": "2731300000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI语料"}, {"code": "605188", "name": "国光连锁", "hot_rank": 66, "hot_rank_chg": 28, "stock_cnt": 5886, "price": "14.98", "change": "9.98", "market_id": "17", "circulate_market_value": "7606042600.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "零售"}, {"code": "000725", "name": "京东方A", "hot_rank": 67, "hot_rank_chg": -3, "stock_cnt": 5886, "price": "5.91", "change": "-1.66", "market_id": "33", "circulate_market_value": "209019760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.34}, {"name": "手机产业链", "change_pct": -1.59}, {"name": "超高清视频", "change_pct": 0.65}, {"name": "苹果产业链", "change_pct": -2.11}, {"name": "电竞", "change_pct": 0.97}, {"name": "半导体", "change_pct": -2.69}, {"name": "人工智能", "change_pct": 0.88}, {"name": "互联网医疗", "change_pct": 1.94}, {"name": "VR&AR", "change_pct": -0.37}, {"name": "OLED", "change_pct": -2.0}, {"name": "京津冀", "change_pct": 1.03}, {"name": "物联网", "change_pct": 0.48}, {"name": "指纹识别", "change_pct": -0.7}, {"name": "汽车零部件", "change_pct": 0.34}, {"name": "白马股", "change_pct": 0.25}, {"name": "智能制造", "change_pct": -0.54}, {"name": "小米概念股", "change_pct": -1.09}, {"name": "国产芯片", "change_pct": -1.85}, {"name": "液晶面板/LCD", "change_pct": -1.56}, {"name": "全息概念", "change_pct": 0.73}, {"name": "理想汽车概念股", "change_pct": 0.97}, {"name": "MicroLED", "change_pct": -2.06}, {"name": "钙钛矿电池", "change_pct": -0.65}, {"name": "智能手表", "change_pct": -0.74}, {"name": "MiniLED", "change_pct": -1.87}, {"name": "传感器", "change_pct": -1.07}, {"name": "大硅片", "change_pct": -3.33}, {"name": "AI PC", "change_pct": -1.37}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "回购", "change_pct": -0.1}, {"name": "光电共封装CPO", "change_pct": -2.87}, {"name": "智能眼镜/MR头显", "change_pct": -1.05}, {"name": "玻璃基板封装", "change_pct": -3.45}]}, {"code": "601700", "name": "风范股份", "hot_rank": 68, "hot_rank_chg": -25, "stock_cnt": 5886, "price": "8.40", "change": "4.74", "market_id": "17", "circulate_market_value": "9565561300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.57}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "光伏", "change_pct": -0.72}, {"name": "特高压", "change_pct": -0.32}, {"name": "智能电网", "change_pct": 0.04}]}, {"code": "603629", "name": "利通电子", "hot_rank": 69, "hot_rank_chg": 9, "stock_cnt": 5886, "price": "113.58", "change": "-7.02", "market_id": "17", "circulate_market_value": "40970964000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 70, "hot_rank_chg": 11, "stock_cnt": 5886, "price": "11.16", "change": "-5.58", "market_id": "33", "circulate_market_value": "5555950200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.46}, {"name": "优化生育（三孩）", "change_pct": 1.26}, {"name": "农业种植", "change_pct": 6.6}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "医药", "change_pct": 1.05}, {"name": "流感", "change_pct": 1.06}, {"name": "大农业", "change_pct": 2.26}]}, {"code": "300364", "name": "中文在线", "hot_rank": 71, "hot_rank_chg": -33, "stock_cnt": 5886, "price": "28.31", "change": "3.78", "market_id": "33", "circulate_market_value": "18715335000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 72, "hot_rank_chg": 5, "stock_cnt": 5886, "price": "65.90", "change": "-3.39", "market_id": "33", "circulate_market_value": "74680522000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 73, "hot_rank_chg": -25, "stock_cnt": 5886, "price": "14.64", "change": "1.25", "market_id": "17", "circulate_market_value": "18801839000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002041", "name": "登海种业", "hot_rank": 74, "hot_rank_chg": 14, "stock_cnt": 5886, "price": "11.88", "change": "10.00", "market_id": "33", "circulate_market_value": "10454400000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮食概念", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "转基因", "change_pct": 7.84}, {"name": "乡村振兴", "change_pct": 3.02}, {"name": "大农业", "change_pct": 2.26}, {"name": "人造肉", "change_pct": 3.49}, {"name": "大豆", "change_pct": 5.99}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 75, "hot_rank_chg": 0, "stock_cnt": 5886, "price": "393.00", "change": "-3.20", "market_id": "17", "circulate_market_value": "263592300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002909", "name": "集泰股份", "hot_rank": 76, "hot_rank_chg": 60, "stock_cnt": 5886, "price": "6.62", "change": "9.97", "market_id": "33", "circulate_market_value": "2518429300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.57}, {"name": "有机硅", "change_pct": -0.52}, {"name": "装修装饰", "change_pct": 0.14}, {"name": "装配式建筑", "change_pct": 0.64}, {"name": "光伏", "change_pct": -0.72}, {"name": "船舶", "change_pct": 0.2}, {"name": "固态电池", "change_pct": -0.9}, {"name": "新型城镇化", "change_pct": 0.81}, {"name": "旧改", "change_pct": 0.67}, {"name": "飞行汽车/eVTOL", "change_pct": -0.08}, {"name": "液冷服务器", "change_pct": -1.42}]}, {"code": "600183", "name": "生益科技", "hot_rank": 77, "hot_rank_chg": -20, "stock_cnt": 5886, "price": "144.42", "change": "-5.85", "market_id": "17", "circulate_market_value": "348304770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 78, "hot_rank_chg": -18, "stock_cnt": 5886, "price": "11.63", "change": "0.52", "market_id": "17", "circulate_market_value": "20807678000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.35}, {"name": "纯碱", "change_pct": 0.61}, {"name": "食品", "change_pct": 1.73}, {"name": "土壤修复", "change_pct": 0.63}, {"name": "东数西算/算力", "change_pct": 0.22}, {"name": "OpenClaw概念", "change_pct": 0.66}, {"name": "DeepSeek概念股", "change_pct": 1.18}]}, {"code": "601799", "name": "星宇股份", "hot_rank": 79, "hot_rank_chg": 14, "stock_cnt": 5886, "price": "78.22", "change": "-0.22", "market_id": "17", "circulate_market_value": "22345844000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 80, "hot_rank_chg": -7, "stock_cnt": 5886, "price": "6.97", "change": "4.03", "market_id": "33", "circulate_market_value": "13348194400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.92}, {"name": "林业", "change_pct": 3.81}, {"name": "碳中和", "change_pct": 1.04}, {"name": "自贸区", "change_pct": 1.56}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 81, "hot_rank_chg": -5, "stock_cnt": 5886, "price": "33.84", "change": "-3.29", "market_id": "17", "circulate_market_value": "23396151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 82, "hot_rank_chg": -46, "stock_cnt": 5886, "price": "11.91", "change": "-1.00", "market_id": "17", "circulate_market_value": "20666005000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.74}, {"name": "核电", "change_pct": -0.17}, {"name": "锂电池", "change_pct": -1.27}, {"name": "铜箔/覆铜板", "change_pct": -4.04}, {"name": "PCB板", "change_pct": -3.63}, {"name": "中科院系", "change_pct": 0.15}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "宁德时代概念股", "change_pct": -1.09}, {"name": "固态电池", "change_pct": -0.9}, {"name": "PET复合铜箔", "change_pct": -3.8}]}, {"code": "002470", "name": "金正大", "hot_rank": 83, "hot_rank_chg": 29, "stock_cnt": 5886, "price": "2.32", "change": "9.95", "market_id": "33", "circulate_market_value": "7622929900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "复合肥", "xgb_concepts": [{"name": "磷化工", "change_pct": 0.93}, {"name": "锂电池", "change_pct": -1.27}, {"name": "化肥", "change_pct": 2.26}, {"name": "山东国企改革", "change_pct": 0.4}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "大农业", "change_pct": 2.26}, {"name": "低价股", "change_pct": 1.3}, {"name": "数字乡村", "change_pct": 2.3}, {"name": "国企改革", "change_pct": 1.02}, {"name": "磷酸铁锂", "change_pct": -0.29}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 84, "hot_rank_chg": -16, "stock_cnt": 5886, "price": "4.35", "change": "-0.46", "market_id": "33", "circulate_market_value": "9146642000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.02}, {"name": "中药", "change_pct": 1.46}, {"name": "强势人气股", "change_pct": 0.68}, {"name": "维生素", "change_pct": 0.6}, {"name": "基因测序", "change_pct": 1.12}, {"name": "民营医院", "change_pct": 1.49}, {"name": "医药", "change_pct": 1.05}, {"name": "化学原料药", "change_pct": 1.08}, {"name": "PD-1抑制剂", "change_pct": 0.94}]}, {"code": "600162", "name": "香江控股", "hot_rank": 85, "hot_rank_chg": -16, "stock_cnt": 5886, "price": "4.92", "change": "-1.01", "market_id": "17", "circulate_market_value": "16080716000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.21}, {"name": "养老产业", "change_pct": 1.37}, {"name": "粤港澳大湾区", "change_pct": 1.3}, {"name": "民营医院", "change_pct": 1.49}, {"name": "地摊经济", "change_pct": 2.64}]}, {"code": "000536", "name": "华映科技", "hot_rank": 86, "hot_rank_chg": 46, "stock_cnt": 5886, "price": "3.96", "change": "10.00", "market_id": "33", "circulate_market_value": "10941806800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "显示面板", "xgb_concepts": [{"name": "手机产业链", "change_pct": -1.59}, {"name": "福建自贸/海西概念", "change_pct": 1.92}, {"name": "OLED", "change_pct": -2.0}, {"name": "3D玻璃", "change_pct": 0.11}, {"name": "液晶面板/LCD", "change_pct": -1.56}, {"name": "国企改革", "change_pct": 1.02}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "自贸区", "change_pct": 1.56}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 87, "hot_rank_chg": -31, "stock_cnt": 5886, "price": "38.32", "change": "-1.62", "market_id": "33", "circulate_market_value": "109597985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 88, "hot_rank_chg": 17, "stock_cnt": 5886, "price": "10.44", "change": "10.01", "market_id": "17", "circulate_market_value": "6809760900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.91}, {"name": "蚂蚁集团概念股", "change_pct": 1.84}, {"name": "无人驾驶", "change_pct": 0.07}, {"name": "新零售", "change_pct": 3.55}, {"name": "移动支付", "change_pct": 1.91}, {"name": "京津冀", "change_pct": 1.03}, {"name": "北京城市规划", "change_pct": 0.66}, {"name": "国产芯片", "change_pct": -1.85}, {"name": "阿里巴巴概念股", "change_pct": 1.25}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "物业管理", "change_pct": 0.98}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "国企改革", "change_pct": 1.02}, {"name": "数字人民币", "change_pct": 2.45}, {"name": "AI大模型/智能体", "change_pct": 1.36}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 89, "hot_rank_chg": 44, "stock_cnt": 5886, "price": "4.86", "change": "9.96", "market_id": "17", "circulate_market_value": "2718292900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "短剧", "xgb_concepts": [{"name": "手游", "change_pct": 2.28}, {"name": "ST摘帽", "change_pct": 1.23}, {"name": "游戏", "change_pct": 2.23}, {"name": "影视", "change_pct": 3.73}, {"name": "短剧/互动影游", "change_pct": 3.58}]}, {"code": "601933", "name": "永辉超市", "hot_rank": 90, "hot_rank_chg": -10, "stock_cnt": 5886, "price": "3.28", "change": "6.15", "market_id": "17", "circulate_market_value": "29274122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "新零售", "change_pct": 3.55}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "社区团购", "change_pct": 2.99}, {"name": "大消费", "change_pct": 1.51}]}, {"code": "002349", "name": "精华制药", "hot_rank": 91, "hot_rank_chg": 55, "stock_cnt": 5886, "price": "8.36", "change": "10.00", "market_id": "33", "circulate_market_value": "6806552400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": 1.46}, {"name": "锂电池", "change_pct": -1.27}, {"name": "养老产业", "change_pct": 1.37}, {"name": "江苏国企改革", "change_pct": 1.76}, {"name": "医药", "change_pct": 1.05}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "化学原料药", "change_pct": 1.08}, {"name": "PD-1抑制剂", "change_pct": 0.94}, {"name": "流感", "change_pct": 1.06}, {"name": "国企改革", "change_pct": 1.02}, {"name": "新冠病毒防治", "change_pct": 0.8}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 92, "hot_rank_chg": -7, "stock_cnt": 5886, "price": "94.90", "change": "-5.76", "market_id": "33", "circulate_market_value": "61970412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600130", "name": "波导股份", "hot_rank": 93, "hot_rank_chg": 26, "stock_cnt": 5886, "price": "4.93", "change": "10.04", "market_id": "17", "circulate_market_value": "3697500000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "参股华大北斗", "xgb_concepts": [{"name": "手机产业链", "change_pct": -1.59}, {"name": "ST摘帽", "change_pct": 1.23}, {"name": "北斗导航", "change_pct": 0.42}, {"name": "国产芯片", "change_pct": -1.85}]}, {"code": "600667", "name": "太极实业", "hot_rank": 94, "hot_rank_chg": -15, "stock_cnt": 5886, "price": "18.52", "change": "-4.24", "market_id": "17", "circulate_market_value": "38735361000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 95, "hot_rank_chg": 40, "stock_cnt": 5886, "price": "3.60", "change": "10.09", "market_id": "33", "circulate_market_value": "3312669300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "游戏IP", "xgb_concepts": [{"name": "手游", "change_pct": 2.28}, {"name": "ST摘帽", "change_pct": 1.23}, {"name": "人工智能", "change_pct": 0.88}, {"name": "VR&AR", "change_pct": -0.37}, {"name": "游戏", "change_pct": 2.23}, {"name": "动漫", "change_pct": 3.12}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "快手概念股", "change_pct": 3.1}, {"name": "NFT", "change_pct": 3.41}, {"name": "元宇宙", "change_pct": 1.71}, {"name": "虚拟数字人", "change_pct": 2.67}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "云游戏", "change_pct": 0.49}, {"name": "IP经济/谷子经济", "change_pct": 2.16}]}, {"code": "002291", "name": "遥望科技", "hot_rank": 97, "hot_rank_chg": 46, "stock_cnt": 5886, "price": "6.01", "change": "10.07", "market_id": "33", "circulate_market_value": "5223442900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI应用", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "数字孪生", "change_pct": 1.09}, {"name": "新零售", "change_pct": 3.55}, {"name": "人工智能", "change_pct": 0.88}, {"name": "直播/短视频", "change_pct": 3.61}, {"name": "数字经济", "change_pct": 1.6}, {"name": "传媒", "change_pct": 2.7}, {"name": "快手概念股", "change_pct": 3.1}, {"name": "NFT", "change_pct": 3.41}, {"name": "虚拟数字人", "change_pct": 2.67}, {"name": "web3.0", "change_pct": 2.47}, {"name": "数据要素", "change_pct": 1.73}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "网红/MCN", "change_pct": 2.35}, {"name": "短剧/互动影游", "change_pct": 3.58}, {"name": "首发经济", "change_pct": 2.67}, {"name": "小红书概念股", "change_pct": 2.97}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 98, "hot_rank_chg": -26, "stock_cnt": 5886, "price": "21.15", "change": "-4.82", "market_id": "33", "circulate_market_value": "24882315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 99, "hot_rank_chg": 2, "stock_cnt": 5886, "price": "56.92", "change": "-1.22", "market_id": "33", "circulate_market_value": "416943430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 100, "hot_rank_chg": -34, "stock_cnt": 5886, "price": "188.69", "change": "-4.70", "market_id": "33", "circulate_market_value": "261585050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603123", "name": "翠微股份", "price": 10.44, "change_pct": 10.01, "reason": "子公司海科融通已与央行数字货币研究所指定运营银行系统对接，在多商业场景中支持数字人民币支付收款，为商户提供数字人民币收单服务", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 8.19, "first_limit_up": 1788227830, "break_limit_up_times": 0}, {"code": "605179", "name": "一鸣食品", "price": 34.67, "change_pct": 9.99, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.97, "first_limit_up": 1788244097, "break_limit_up_times": 4}, {"code": "003005", "name": "竞业达", "price": 18.18, "change_pct": 9.98, "reason": "公司“星空教育大模型”通过国家网信办备案，累计完成文生文、文生图、文生视频等7项深度合成算法备案，形成教育垂类大模型+深度合成算法+应用落地的完整AI服务体系", "plates": ["AI大模型/智能体"], "limit_up_days": 3, "turnover_ratio": 3.02, "first_limit_up": 1788225900, "break_limit_up_times": 0}, {"code": "601566", "name": "九牧王", "price": 9.42, "change_pct": 10.05, "reason": "公司位于福建厦门市，是国内男裤龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.73, "first_limit_up": 1788229177, "break_limit_up_times": 0}, {"code": "002172", "name": "澳洋健康", "price": 4.74, "change_pct": 9.98, "reason": "子公司江苏澳洋医药物流有限公司具体经营内容包括中药材配送、销售业务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 18.32, "first_limit_up": 1788226644, "break_limit_up_times": 3}, {"code": "600103", "name": "青山纸业", "price": 4.19, "change_pct": 9.97, "reason": "1、控股子公司恒宝通光主营光通信模块及组件产品的研产销，系国家级高新技术企业，产品主要应用于移动通信领域，为全球大型模拟半导体设备供应厂商Avago逾十年的供应商；\n2、综合性造纸上市公司，实控人福建省国资委；公司主要产品为“青山牌”系列伸性纸袋纸、牛皮包装纸、溶解浆等产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 33.97, "first_limit_up": 1788239287, "break_limit_up_times": 4}, {"code": "002909", "name": "集泰股份", "price": 6.62, "change_pct": 9.97, "reason": "公司当前研发的液冷导热硅油，其应用主要聚焦于数据中心及储能领域的热管理解决方案", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 15.63, "first_limit_up": 1788239283, "break_limit_up_times": 0}, {"code": "002291", "name": "遥望科技", "price": 6.01, "change_pct": 10.07, "reason": "公司主要从事数字营销相关业务，“遥望云AI”系统已落地抖音、快手、淘宝、视频号等全渠道", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 12.96, "first_limit_up": 1788231417, "break_limit_up_times": 0}, {"code": "600828", "name": "茂业商业", "price": 4.37, "change_pct": 10.08, "reason": "呼和浩特零售市场龙头，旗下深圳地区的所有门店和成都地区的人东店、光华店为离境退税店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 0.94, "first_limit_up": 1788226648, "break_limit_up_times": 0}, {"code": "603293", "name": "埃泰克", "price": 39.45, "change_pct": 10.01, "reason": "公司4D成像毫米波雷达已获奇瑞新项目定点，激光雷达产品线亦获新项目定点", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 14.63, "first_limit_up": 1788228468, "break_limit_up_times": 0}, {"code": "600272", "name": "开开实业", "price": 20.09, "change_pct": 10.02, "reason": "公司医药板块主要是中、西成药的批发、零售及以中华老字号“雷允上”为品牌的中医药药学服务和自主品牌“上雷”牌高档滋补品（枫斗、虫草、燕窝、海参等）的销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 31.0, "first_limit_up": 1788245785, "break_limit_up_times": 0}, {"code": "000713", "name": "国投丰乐", "price": 7.14, "change_pct": 10.02, "reason": "国内种业龙头之一，子公司丰乐农化有草甘膦制剂产品", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 11.89, "first_limit_up": 1788245628, "break_limit_up_times": 0}, {"code": "601086", "name": "国芳集团", "price": 10.09, "change_pct": 10.03, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 4.54, "first_limit_up": 1788226299, "break_limit_up_times": 0}, {"code": "000564", "name": "供销大集", "price": 1.66, "change_pct": 9.93, "reason": "公司实控人中华全国供销合作总社，自身是大型全国性商品流通服务企业，业务包括百货购物中心、商超便利店、写字楼等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.16, "first_limit_up": 1788226818, "break_limit_up_times": 0}, {"code": "002104", "name": "恒宝股份", "price": 12.28, "change_pct": 10.04, "reason": "1、首批参与中国人民银行数字货币研究所“数字人民币试点”工作的金融科技公司之一；\n2、公司重点攻关量子加密在金融场景的抗量子计算破译能力，为移动支付、跨境结算提供 “三位一体” 安全解决方案，量子加密模组获东南亚多国央行订单", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 6.62, "first_limit_up": 1788226551, "break_limit_up_times": 0}, {"code": "000998", "name": "隆平高科", "price": 9.97, "change_pct": 10.04, "reason": "国内种业龙头", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.88, "first_limit_up": 1788228327, "break_limit_up_times": 0}, {"code": "002015", "name": "协鑫能科", "price": 17.42, "change_pct": 9.97, "reason": "1、公司签约乌兰察布绿色算电协同项目；\n2、公司新能源发电聚焦光伏电站开发运营，光伏装机 2374.88MW（分布式 1910.54MW、集中式 464.34MW），打造 “鑫零碳”“鑫阳光” 品牌光伏产品", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 8.65, "first_limit_up": 1788228633, "break_limit_up_times": 1}, {"code": "600313", "name": "农发种业", "price": 7.9, "change_pct": 10.03, "reason": "1、中国农业发展集团旗下，国内优质育繁推一体化种子生产商，核心产品是玉米种子、小麦种子和水稻种子，拥有50万亩耕地、90万亩林地和180万亩草地；\n2、公司化肥贸易业务由所属子公司华垦公司开展，主要从事用于农业种植的化肥产品进口，根据国内市场需求进行采购和销售;种业综合实力位居行业前列;种业综合实力位居行业前列", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 8.49, "first_limit_up": 1788226591, "break_limit_up_times": 0}, {"code": "600693", "name": "东百集团", "price": 10.24, "change_pct": 9.99, "reason": "公司主营以百货零售为主业，同时经营商业地产开发和房产租赁", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.16, "first_limit_up": 1788226559, "break_limit_up_times": 0}, {"code": "002084", "name": "海鸥住工", "price": 7.02, "change_pct": 10.03, "reason": "公司主营业务聚焦在卫浴及厨房产品整组龙头及部品部件的制造服务与销售，控股股东拟变更为博泰车联", "plates": ["股权转让"], "limit_up_days": 7, "turnover_ratio": 13.81, "first_limit_up": 1788225900, "break_limit_up_times": 0}, {"code": "600121", "name": "郑州煤电", "price": 5.4, "change_pct": 9.98, "reason": "1、实控人河南省国资委；公司是郑州煤炭龙头，拥有部分火电业务，参股公司复晟铝业（持股40%）拥有氧化铝粉产能；\n2、两大煤矿有望注入公司，未来或新增可采储量16.2亿吨", "plates": ["煤炭"], "limit_up_days": 2, "turnover_ratio": 19.98, "first_limit_up": 1788227588, "break_limit_up_times": 13}, {"code": "002041", "name": "登海种业", "price": 11.88, "change_pct": 10.0, "reason": "国内杂交玉米种子龙头企业", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 7.92, "first_limit_up": 1788227634, "break_limit_up_times": 0}, {"code": "600892", "name": "大晟文化", "price": 4.86, "change_pct": 9.95, "reason": "1、公司游戏影视双驱动，主营业务包括短剧制作、发行业务；\n2、公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 1.44, "first_limit_up": 1788225901, "break_limit_up_times": 0}, {"code": "002514", "name": "*ST宝馨", "price": 2.06, "change_pct": 10.16, "reason": "参股公司海胶智能主要从事智能农业机器人研发、生产及销售等相关业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 9.02, "first_limit_up": 1788229935, "break_limit_up_times": 0}, {"code": "605068", "name": "明新旭腾", "price": 20.38, "change_pct": 9.98, "reason": "公司正积极接触柔性传感器公司，实现皮肤与传感器业务结合", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.7, "first_limit_up": 1788228261, "break_limit_up_times": 1}, {"code": "300927", "name": "江天化学", "price": 34.92, "change_pct": 20.0, "reason": "公司主营高端专用精细化学品，上半年净利润同比增长22955.37%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 19.45, "first_limit_up": 1788230343, "break_limit_up_times": 0}, {"code": "600410", "name": "华胜天成", "price": 15.22, "change_pct": 9.97, "reason": "公司全面推进“AI+算力”战略，拥有新一代人工智能算力中心整体解决方案，并获头部科技企业智能计算ISV核心认证，为华为云软件认证合作伙伴、华为云服务合作伙伴和华为政企金牌合作伙伴", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 12.43, "first_limit_up": 1788239476, "break_limit_up_times": 0}, {"code": "600318", "name": "新力金融", "price": 7.49, "change_pct": 9.99, "reason": "公司控股股东拟变更为辉隆投资，实控人仍为安徽省供销合作社联合社；公司拥有地方AMC、小贷、租赁、担保、典当多牌照金融子公司", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 6.28, "first_limit_up": 1788232054, "break_limit_up_times": 1}, {"code": "000892", "name": "欢瑞世纪", "price": 4.73, "change_pct": 10.0, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 1.83, "first_limit_up": 1788225900, "break_limit_up_times": 0}, {"code": "600127", "name": "金健米业", "price": 13.24, "change_pct": 9.97, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 21.63, "first_limit_up": 1788226686, "break_limit_up_times": 0}, {"code": "603376", "name": "大明电子", "price": 28.48, "change_pct": 10.0, "reason": "公司专注于汽车电子零部件配套领域，驾驶辅助系统产品包括方向盘控制总成、电子驻车总成等，已进入长安UNI系列、AITO问界系列等新能源车型供应链，主要配套长安汽车、比亚迪等整车厂商\n", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 15.62, "first_limit_up": 1788228061, "break_limit_up_times": 0}, {"code": "002945", "name": "华林证券", "price": 16.04, "change_pct": 10.01, "reason": "全牌照证券公司", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 2.01, "first_limit_up": 1788227142, "break_limit_up_times": 3}, {"code": "600371", "name": "万向德农", "price": 13.96, "change_pct": 10.01, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 6, "turnover_ratio": 15.59, "first_limit_up": 1788226344, "break_limit_up_times": 3}, {"code": "600785", "name": "新华百货", "price": 12.66, "change_pct": 9.99, "reason": "宁夏地区最大的商业零售企业，拟斥资2亿元至4亿元回购公司股份", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 18.38, "first_limit_up": 1788226862, "break_limit_up_times": 2}, {"code": "300189", "name": "神农种业", "price": 7.55, "change_pct": 20.03, "reason": "海南本地股；公司为国内遗传智能化育种技术领先供应商，主营产品为杂交水稻种子、玉米种子、蔬菜瓜果种子、棉花种子等", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 37.26, "first_limit_up": 1788227397, "break_limit_up_times": 0}, {"code": "603721", "name": "中广天择", "price": 21.01, "change_pct": 10.0, "reason": "具有全国影响力的综合性传媒集团；公司主要从事综艺、纪录片、影视剧、短视频等视频内容的生产和运营，与Kimi智能助手的关联主要体现在公司为AI大模型提供数据支持和交易平台方面", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 3.74, "first_limit_up": 1788225900, "break_limit_up_times": 0}, {"code": "000019", "name": "深粮控股", "price": 7.92, "change_pct": 10.0, "reason": "深圳国资委控股的农产品集团旗下，主营茶及天然植物精深加工为主的食品原料（配料）生产、研发和销售，并同时拥有粮油储备、粮油贸易、粮油加工等粮油流通及粮油储备服务业务", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.01, "first_limit_up": 1788226416, "break_limit_up_times": 1}, {"code": "002696", "name": "百洋股份", "price": 7.28, "change_pct": 9.97, "reason": "公司为全球加工规模最大、国内领先的罗非鱼食品综合提供商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.45, "first_limit_up": 1788226356, "break_limit_up_times": 1}, {"code": "600540", "name": "新赛股份", "price": 6.12, "change_pct": 10.07, "reason": "公司农业主要产品为棉籽、葵花籽、菜籽及其他油料作物，立足于新疆棉花产业，聚焦棉业全产业链", "plates": ["大农业"], "limit_up_days": 4, "turnover_ratio": 11.32, "first_limit_up": 1788226200, "break_limit_up_times": 0}, {"code": "002955", "name": "鸿合科技", "price": 39.12, "change_pct": 10.01, "reason": "1、公司AI研究院自主研发的“鸿合教学大模型”已通过国家网信办备案，并推出搭载15T算力平台的新一代AI智慧屏、AI课堂分析平台等产品，实现AI对教育全场景深度赋能；\n2、公司已完成对迹动体育51%股权收购，布局“AI+体育”智慧体育教育", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 3.88, "first_limit_up": 1788239400, "break_limit_up_times": 0}, {"code": "000610", "name": "*ST西旅", "price": 7.43, "change_pct": 10.07, "reason": "法院同意启动预重整并指定临时管理人", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 11.07, "first_limit_up": 1788226722, "break_limit_up_times": 1}, {"code": "002855", "name": "捷荣技术", "price": 17.71, "change_pct": 10.0, "reason": "华为Mate XT 2新一代三折叠官宣2026年9月7日首发，公司的客户代工厂家向华为品牌产品提供公司的产品精密结构件", "plates": ["折叠屏"], "limit_up_days": 6, "turnover_ratio": 10.01, "first_limit_up": 1788226206, "break_limit_up_times": 10}, {"code": "000596", "name": "古井贡酒", "price": 100.88, "change_pct": 10.0, "reason": "安徽地区白酒龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.89, "first_limit_up": 1788229266, "break_limit_up_times": 0}, {"code": "600830", "name": "香溢融通", "price": 9.23, "change_pct": 10.01, "reason": "公司实际控制人为中国烟草总公司浙江分公司，主营典当、担保等业务", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 3.26, "first_limit_up": 1788226814, "break_limit_up_times": 1}, {"code": "000505", "name": "京粮控股", "price": 7.74, "change_pct": 9.94, "reason": "1、海南本地股；公司主营植物油加工、休闲食品、面包制作等，主要产品有大豆油、植物蛋白等大豆制品，拥有大豆蛋白肉生产工艺；\n2、旗下五星级酒店三亚珠江国际度假酒店是海南旅游市场的旗舰酒店之一", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.52, "first_limit_up": 1788226287, "break_limit_up_times": 0}, {"code": "603021", "name": "*ST华鹏", "price": 5.96, "change_pct": 9.96, "reason": "公司上半年亏损同比扩大", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.18, "first_limit_up": 1788233223, "break_limit_up_times": 3}, {"code": "000711", "name": "京蓝科技", "price": 6.48, "change_pct": 10.02, "reason": "公司撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 5.02, "first_limit_up": 1788226758, "break_limit_up_times": 1}, {"code": "002589", "name": "瑞康医药", "price": 3.5, "change_pct": 10.06, "reason": "中医药全产业链精准服务型企业，拥有种植、中药饮片加工业务，控股子公司马鞍山井泉中药主要从事中药饮片生产和销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.67, "first_limit_up": 1788241071, "break_limit_up_times": 0}, {"code": "002425", "name": "凯撒文化", "price": 3.6, "change_pct": 10.09, "reason": "公司在国漫、小说等拥有多款人气IP的游戏改编权", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 11.13, "first_limit_up": 1788226272, "break_limit_up_times": 1}, {"code": "300642", "name": "透景生命", "price": 20.35, "change_pct": 19.99, "reason": "国内最主要的流式荧光发光产品供应商，上半年净利润同比上升315.9%", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 31.34, "first_limit_up": 1788240915, "break_limit_up_times": 1}, {"code": "003040", "name": "楚天龙", "price": 19.58, "change_pct": 10.0, "reason": "国内较早从事数字人民币相关技术研究与产品开发的企业之一", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 20.56, "first_limit_up": 1788228324, "break_limit_up_times": 0}, {"code": "002679", "name": "福建金森", "price": 12.91, "change_pct": 9.97, "reason": "公司经营区林地总面积近80万亩", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 2.59, "first_limit_up": 1788225900, "break_limit_up_times": 0}, {"code": "000536", "name": "华映科技", "price": 3.96, "change_pct": 10.0, "reason": "公司地处福州，主要从事LCD显示面板、液晶模组的研产销，已成功进入传音、联想、三星、 vivo、 HMD(诺基亚)、中兴、华为、荣耀等世界知名品牌的供应商体系", "plates": ["折叠屏"], "limit_up_days": 1, "turnover_ratio": 6.53, "first_limit_up": 1788239172, "break_limit_up_times": 1}, {"code": "600354", "name": "敦煌种业", "price": 9.12, "change_pct": 10.01, "reason": "国家育繁推一体化企业；上半年净利润同比预增157.1%左右，因“公司持续优化产品营销策略，依托精准市场定位与多渠道推广举措，自有核心优势品种销量稳步攀升”", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 24.22, "first_limit_up": 1788227312, "break_limit_up_times": 2}, {"code": "603980", "name": "吉华集团", "price": 7.92, "change_pct": 10.0, "reason": "大型的染料及染料中间体生产企业；公司为宇树机器人间接投资方之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.71, "first_limit_up": 1788226234, "break_limit_up_times": 1}, {"code": "001330", "name": "博纳影业", "price": 6.17, "change_pct": 9.98, "reason": "公司短剧业务坚持 “主旋律 + 精品化” 路线，2025年推出《长津湖之冰雪尖兵》《红海行动：蛟龙小队》等短剧，延续电影叙事风格，在央视影音、腾讯视频播放量均破1.5亿；搭建 “博纳短剧工作室”，引入电影级制作团队，控制单部短剧成本超500万元，目前已储备6部主旋律短剧项目", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 20.84, "first_limit_up": 1788230973, "break_limit_up_times": 1}, {"code": "603207", "name": "小方制药", "price": 25.4, "change_pct": 10.0, "reason": "外用药生产商，产品以消化类、皮肤类为主\n", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.92, "first_limit_up": 1788229485, "break_limit_up_times": 0}, {"code": "002882", "name": "金龙羽", "price": 23.77, "change_pct": 10.0, "reason": "公司固态电解质、半固态电芯已进入中试试验；全资子公司惠州金龙羽投资3亿元与锦添翼共同开发固态电池相关技术，锦添翼实际控制人李新禄及其研究团队在锂离子电池领域积累了20多年的研究基础，已成功掌握了氧化物固态电解质的宏量制备、硅碳负极材料的批量化生产、固态电芯的原位集成等研究成果", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 7.92, "first_limit_up": 1788227208, "break_limit_up_times": 2}, {"code": "605300", "name": "佳禾食品", "price": 10.73, "change_pct": 10.05, "reason": "公司已成为国内外奶茶、咖啡等领域具有较高知名度的原料产品，蜜雪冰城和古茗均为公司下游客户", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.79, "first_limit_up": 1788227455, "break_limit_up_times": 1}, {"code": "002295", "name": "精艺股份", "price": 10.62, "change_pct": 10.05, "reason": "公司签订阴极铜采购合同，累计金额达21.86亿元", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.82, "first_limit_up": 1788226215, "break_limit_up_times": 3}, {"code": "600130", "name": "波导股份", "price": 4.93, "change_pct": 10.04, "reason": "公司参股公司华大北斗专注从事导航定位芯片、算法及产品的自主设计、研发、销售及相关业务，其自主设计研发了国内首颗量产供货的55nm基带和射频一体化北斗多模导航定位芯片，该芯片也是国内首颗进入国际排名前十位的专业导航定位芯片", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.63, "first_limit_up": 1788242518, "break_limit_up_times": 0}, {"code": "300413", "name": "芒果超媒", "price": 20.38, "change_pct": 20.02, "reason": "由公司出品、芒果TV AIGC创新内容中心制作、伯璟文化承制，Seedance 2.0、Seedance 2.5 提供AI技术支持的神话题材季播剧《后西游记》第一季“花果山篇”将于8月31日在芒果TV上线", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 13.45, "first_limit_up": 1788226200, "break_limit_up_times": 1}, {"code": "605577", "name": "龙版传媒", "price": 11.68, "change_pct": 9.98, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 5.79, "first_limit_up": 1788226237, "break_limit_up_times": 4}, {"code": "002721", "name": "金一文化", "price": 3.18, "change_pct": 10.03, "reason": "公司主营业务为贵金属工艺品及黄金珠宝首饰的研发设计及销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.42, "first_limit_up": 1788228177, "break_limit_up_times": 2}, {"code": "600967", "name": "内蒙一机", "price": 12.19, "change_pct": 10.02, "reason": "1、公司为兵器工业集团旗下企业，是我国唯一主战坦克及中重型轮式装甲车公司\n2、公司研制的两栖无人查险机器人系列产品是公司承担的国家应急管理部揭榜攻关项目，目前已完成研制，正在试验中。", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.03, "first_limit_up": 1788231065, "break_limit_up_times": 1}, {"code": "002107", "name": "沃华医药", "price": 7.37, "change_pct": 10.0, "reason": "联手宜从容推动参枝苓口服液应用于阿尔茨海默病防治", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.76, "first_limit_up": 1788238998, "break_limit_up_times": 1}, {"code": "605365", "name": "立达信", "price": 15.66, "change_pct": 9.97, "reason": "公司注册地址位于福建厦门，连续多年排名全国LED照明产品出口规模第一，与华为鸿蒙系统有合作", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.62, "first_limit_up": 1788226574, "break_limit_up_times": 1}, {"code": "000158", "name": "常山北明", "price": 13.88, "change_pct": 9.98, "reason": "1、公司研发完成了政务服务大模型、智能知识库问答系统、大模型应用开发平台、数字人等一系列产品；\n2、全资子公司北明软件是华为重要的核心战略合作伙伴、华为多产品钻石级经销商，在数通、IT等多种产品具备五钻的交付能力，旗下拥有常山云数据中心", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 5.92, "first_limit_up": 1788240603, "break_limit_up_times": 0}, {"code": "600479", "name": "千金药业", "price": 13.37, "change_pct": 10.04, "reason": "妇科中药龙头；公司的西药抗病毒类药品主要有拉米夫定片和利巴韦林颗粒等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 26.02, "first_limit_up": 1788240091, "break_limit_up_times": 2}, {"code": "603221", "name": "爱丽家居", "price": 30.55, "change_pct": 10.01, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 3.72, "first_limit_up": 1788226264, "break_limit_up_times": 1}, {"code": "603533", "name": "掌阅科技", "price": 24.85, "change_pct": 10.0, "reason": "1、字节跳动参股，数字阅读行业龙头；公司已接入国内AI创业公司月之暗面旗下AI对话助手产品Kimi；\n2、公司推出海外短剧平台iDrama，现已上线数千部短剧作品，英语、日语、韩语、西班牙语、葡萄牙语等多语种版本", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 11.5, "first_limit_up": 1788226236, "break_limit_up_times": 3}, {"code": "605188", "name": "国光连锁", "price": 14.98, "change_pct": 9.99, "reason": "江西省商贸流通行业首家上市企业，主营连锁超市、百货商场的运营业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.88, "first_limit_up": 1788226684, "break_limit_up_times": 3}, {"code": "002395", "name": "双象股份", "price": 13.68, "change_pct": 9.97, "reason": "1、公司光学级PMMA材料可应用于光学仪器、光学镜片等领域；\n2、公司生产的足球革主要用于训练用球、校园用球、礼品球等", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.93, "first_limit_up": 1788242013, "break_limit_up_times": 0}, {"code": "000635", "name": "英 力 特", "price": 7.22, "change_pct": 10.06, "reason": "公司从事PVC（聚氯乙烯）和烧碱的生产，控股股东拟公开征集转让39.41%股份，转让底价不低于6.27元/股，控制权或变更", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.84, "first_limit_up": 1788225900, "break_limit_up_times": 0}, {"code": "000560", "name": "我爱我家", "price": 3.19, "change_pct": 10.0, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 3, "turnover_ratio": 37.08, "first_limit_up": 1788226380, "break_limit_up_times": 5}, {"code": "002470", "name": "金正大", "price": 2.32, "change_pct": 9.95, "reason": "1、老牌肥料企业；公司的主营业务为常规复合肥、新型肥料、磷肥以及土壤调理剂等植物所需全系列产品的研产销；\n2、公司拟6亿元投建年产10万吨磷酸铁电池正极前驱体材料项目，形成磷矿—磷酸—磷化工产品—新能源材料综合利用的磷化工全产业链", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.31, "first_limit_up": 1788227052, "break_limit_up_times": 0}, {"code": "002181", "name": "粤 传 媒", "price": 9.58, "change_pct": 9.99, "reason": "1、公司启动短剧13部、已上映5部，并采用自制和投资双线布局微短剧业务；\n2、公司全资子公司先锋报业经营足球类媒体，包括《足球》报以及足球+app、足球+小程序、足球报官方微博、微信公众号足球报等新媒体平台", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 3.63, "first_limit_up": 1788226383, "break_limit_up_times": 0}, {"code": "002769", "name": "普路通", "price": 7.85, "change_pct": 9.94, "reason": "公司拟收购国内领先电商服务商乐其开曼及杭州乐麦，标的公司为天猫、抖音等平台头部服务商，以“AI+电商”为核心，已落地智能投放、数字人主播等AI产品矩阵\n", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.79, "first_limit_up": 1788240444, "break_limit_up_times": 2}, {"code": "002349", "name": "精华制药", "price": 8.36, "change_pct": 10.0, "reason": "公司正柴胡饮颗粒近期被国家中医药管理局中医疫病防治专家委员会纳入《新冠病毒感染者居家中医药干预指南》", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.06, "first_limit_up": 1788232932, "break_limit_up_times": 0}, {"code": "000721", "name": "西安饮食", "price": 7.59, "change_pct": 10.0, "reason": "公司大股东为西安曲江新区国有资产管理委员会，拥有西安饭庄、德发长酒店、西安烤鸭店、大香港酒楼、西安永宁兴业酒店有限责任公司等20家分公司、17家子公司，目前已开业2家社区餐饮便民店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.79, "first_limit_up": 1788227724, "break_limit_up_times": 4}, {"code": "600792", "name": "云煤能源", "price": 4.42, "change_pct": 9.95, "reason": "云南省大型的焦炭生产与焦化工企业之一；旗下拥有焦炉气制甲醇，产能10万吨/年", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 5.08, "first_limit_up": 1788229227, "break_limit_up_times": 0}, {"code": "600551", "name": "时代出版", "price": 9.08, "change_pct": 10.06, "reason": "公司AI智能审校工具已实现所属出版单位全覆盖，并在AI制图、音视频制作、软件开发及文字处理领域深度应用", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 16.0, "first_limit_up": 1788226245, "break_limit_up_times": 10}, {"code": "002703", "name": "浙江世宝", "price": 18.24, "change_pct": 10.01, "reason": "公司在线控转向和后轮转向领域技术储备深厚，已获多家主流车企定点，线控转向首个量产项目预计于2026年下半年开始量产", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 13.19, "first_limit_up": 1788227928, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};