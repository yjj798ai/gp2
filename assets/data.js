const UPDATE_TIME = "2026-09-01 07:08";
const THS_HOT = [
  {
    "name": "粮食概念",
    "rise": 6.27,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "AI应用",
    "rise": 1.8,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续40天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": 1.0,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续112天上榜",
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
    "rankChg": 1,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "AI视频",
    "rise": 2.29,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.64,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续282天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "液冷服务器",
    "rise": -1.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "PCB概念",
    "rise": -2.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": -2.94,
    "rate": 0,
    "tag": "",
    "hotTag": "连续235天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": 0.59,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续146天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "数字货币",
    "rise": 2.37,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
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
    "name": "猪肉",
    "rise": 1.78,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "MLCC概念",
    "rise": -3.23,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": 1,
    "etfName": "鹏华创新动力LOF",
    "code": "886112"
  },
  {
    "name": "玉米",
    "rise": 6.69,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": -1,
    "etfName": "粮食ETF",
    "code": "885811"
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
    "name": "光纤概念",
    "rise": -1.47,
    "rate": 0,
    "tag": "",
    "hotTag": "连续111天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "AIGC概念",
    "rise": 1.81,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886019"
  },
  {
    "name": "黄金概念",
    "rise": 0.37,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "商业航天",
    "rise": -0.55,
    "rate": 0,
    "tag": "",
    "hotTag": "连续211天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  }
];
const THS_EVENTS = [
  {
    "title": "柴油成粮价最大推手，美国政策扰动影响全球农产品市场",
    "desc": "",
    "heat": 595451,
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
    "heat": 546466,
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
    "heat": 426180,
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
    "heat": 299305,
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
    "heat": 267063,
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
    "heat": 83067,
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
    "heat": 40000,
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
    "heat": 340,
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
    "name": "短剧/互动影游",
    "change": "+3.44%",
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
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 4,
    "hot_rank_chg": 5,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
        "name": "低价股",
        "change_pct": 1.49
      },
      {
        "name": "华为产业链",
        "change_pct": 0.04
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 5,
    "hot_rank_chg": 50,
    "stock_cnt": 5776,
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
        "change_pct": 1.32
      },
      {
        "name": "多模态",
        "change_pct": 1.92
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.29
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
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 6,
    "hot_rank_chg": -4,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 9,
    "hot_rank_chg": 19,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 10,
    "hot_rank_chg": 28,
    "stock_cnt": 5776,
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
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 12,
    "hot_rank_chg": 10,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
        "change_pct": 1.32
      },
      {
        "name": "人形机器人",
        "change_pct": -0.99
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.44
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
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 13,
    "hot_rank_chg": -3,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 14,
    "hot_rank_chg": -1,
    "stock_cnt": 5776,
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
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 16,
    "hot_rank_chg": -10,
    "stock_cnt": 5776,
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
        "change_pct": -1.29
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 18,
    "hot_rank_chg": 135,
    "stock_cnt": 5776,
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
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 27,
    "hot_rank_chg": -13,
    "stock_cnt": 5776,
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
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 28,
    "hot_rank_chg": 46,
    "stock_cnt": 5776,
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
    "hot_rank": 32,
    "hot_rank_chg": 105,
    "stock_cnt": 5776,
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
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 34,
    "hot_rank_chg": 5,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 35,
    "hot_rank_chg": 137,
    "stock_cnt": 5776,
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
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 40,
    "hot_rank_chg": 28,
    "stock_cnt": 5776,
    "price": "10.09",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "6719940000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "半年报增长",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 3.55
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 42,
    "hot_rank_chg": -10,
    "stock_cnt": 5776,
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
        "change_pct": 1.96
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
        "change_pct": -1.23
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
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 44,
    "hot_rank_chg": 340,
    "stock_cnt": 5776,
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
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 46,
    "hot_rank_chg": 32,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 47,
    "hot_rank_chg": 52,
    "stock_cnt": 5776,
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
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 49,
    "hot_rank_chg": -32,
    "stock_cnt": 5776,
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
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 50,
    "hot_rank_chg": 75,
    "stock_cnt": 5776,
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
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 51,
    "hot_rank_chg": -7,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 54,
    "hot_rank_chg": -24,
    "stock_cnt": 5776,
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
        "change_pct": 1.32
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.44
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 57,
    "hot_rank_chg": -23,
    "stock_cnt": 5776,
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
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 61,
    "hot_rank_chg": -14,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 62,
    "hot_rank_chg": -4,
    "stock_cnt": 5776,
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
    "code": "600551",
    "name": "时代出版",
    "hot_rank": 63,
    "hot_rank_chg": 21,
    "stock_cnt": 5776,
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
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 65,
    "hot_rank_chg": 10,
    "stock_cnt": 5776,
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
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 68,
    "hot_rank_chg": 393,
    "stock_cnt": 5776,
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
        "change_pct": 3.44
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 69,
    "hot_rank_chg": -28,
    "stock_cnt": 5776,
    "price": "6.94",
    "change": "-2.25",
    "market_id": "33",
    "circulate_market_value": "7168574400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.38
      },
      {
        "name": "锂电池",
        "change_pct": -1.27
      },
      {
        "name": "强势人气股",
        "change_pct": 0.56
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -4.04
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.3
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.56
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 1.81
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 70,
    "hot_rank_chg": -13,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 80,
    "hot_rank_chg": 449,
    "stock_cnt": 5776,
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
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 88,
    "hot_rank_chg": 336,
    "stock_cnt": 5776,
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
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 93,
    "hot_rank_chg": 2,
    "stock_cnt": 5776,
    "price": "10.85",
    "change": "0.09",
    "market_id": "33",
    "circulate_market_value": "25198861000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -1.04
      },
      {
        "name": "有色 · 铜",
        "change_pct": -0.5
      },
      {
        "name": "有色 · 锑",
        "change_pct": -1.6
      },
      {
        "name": "湖南国企改革",
        "change_pct": 2.5
      },
      {
        "name": "有色 · 锌",
        "change_pct": -0.39
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
        "name": "白银",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 94,
    "hot_rank_chg": 11,
    "stock_cnt": 5776,
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
        "change_pct": 0.56
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
    "code": "002041",
    "name": "登海种业",
    "hot_rank": 96,
    "hot_rank_chg": 147,
    "stock_cnt": 5776,
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
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 99,
    "hot_rank_chg": -14,
    "stock_cnt": 5776,
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
        "change_pct": 3.44
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.16
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600127", "name": "金健米业", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5776, "price": "13.24", "change": "9.97", "market_id": "17", "circulate_market_value": "8497209800.00", "change_type": "1", "change_section": "12", "change_days": "7", "change_reason": "粮油加工"}, {"code": "600722", "name": "金牛化工", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5776, "price": "18.06", "change": "7.50", "market_id": "17", "circulate_market_value": "12286573300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 3, "hot_rank_chg": 15, "stock_cnt": 5776, "price": "43.02", "change": "-2.07", "market_id": "17", "circulate_market_value": "170857670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 4, "hot_rank_chg": 5, "stock_cnt": 5776, "price": "3.19", "change": "10.00", "market_id": "33", "circulate_market_value": "7473175100.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": 3.55}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "人工智能", "change_pct": 0.88}, {"name": "VR&AR", "change_pct": -0.37}, {"name": "京津冀", "change_pct": 1.03}, {"name": "装修装饰", "change_pct": 0.14}, {"name": "住房租赁", "change_pct": 0.62}, {"name": "破净股", "change_pct": 1.24}, {"name": "数字经济", "change_pct": 1.6}, {"name": "房产经纪", "change_pct": 2.2}, {"name": "物业管理", "change_pct": 0.98}, {"name": "低价股", "change_pct": 1.49}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "AI大模型/智能体", "change_pct": 1.32}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 5, "hot_rank_chg": 50, "stock_cnt": 5776, "price": "5.10", "change": "7.37", "market_id": "33", "circulate_market_value": "29859464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.08}, {"name": "人工智能", "change_pct": 0.88}, {"name": "云计算数据中心", "change_pct": -0.58}, {"name": "水利", "change_pct": 1.15}, {"name": "直播/短视频", "change_pct": 3.61}, {"name": "大数据", "change_pct": 1.14}, {"name": "园林", "change_pct": 1.22}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.09}, {"name": "数字经济", "change_pct": 1.6}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "理想汽车概念股", "change_pct": 0.97}, {"name": "第三代半导体", "change_pct": -2.28}, {"name": "快手概念股", "change_pct": 3.1}, {"name": "IGBT", "change_pct": -1.75}, {"name": "虚拟数字人", "change_pct": 2.67}, {"name": "AIGC概念", "change_pct": 1.79}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "氮化镓", "change_pct": -2.2}, {"name": "AI营销", "change_pct": 3.43}, {"name": "AI大模型/智能体", "change_pct": 1.32}, {"name": "多模态", "change_pct": 1.92}, {"name": "液冷服务器", "change_pct": -1.29}, {"name": "小红书概念股", "change_pct": 2.97}, {"name": "区块链", "change_pct": 2.2}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5776, "price": "5.69", "change": "-7.63", "market_id": "33", "circulate_market_value": "15093013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.56}, {"name": "装修装饰", "change_pct": 0.14}, {"name": "装配式建筑", "change_pct": 0.64}, {"name": "航天", "change_pct": -0.6}, {"name": "旧改", "change_pct": 0.67}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 7, "hot_rank_chg": 13, "stock_cnt": 5776, "price": "20.38", "change": "20.02", "market_id": "33", "circulate_market_value": "20822245000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AIGC长剧"}, {"code": "300364", "name": "中文在线", "hot_rank": 8, "hot_rank_chg": 7, "stock_cnt": 5776, "price": "28.31", "change": "3.78", "market_id": "33", "circulate_market_value": "18715335000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 9, "hot_rank_chg": 19, "stock_cnt": 5776, "price": "11.16", "change": "0.00", "market_id": "17", "circulate_market_value": "5349211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.46}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "医药商业", "change_pct": 1.98}, {"name": "医药", "change_pct": 1.05}, {"name": "流感", "change_pct": 1.06}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 10, "hot_rank_chg": 28, "stock_cnt": 5776, "price": "4.19", "change": "9.97", "market_id": "17", "circulate_market_value": "9269658700.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "光模块", "xgb_concepts": [{"name": "造纸", "change_pct": 0.67}, {"name": "云计算数据中心", "change_pct": -0.58}, {"name": "光通信", "change_pct": -2.42}, {"name": "林业", "change_pct": 3.81}, {"name": "军民融合", "change_pct": -0.09}, {"name": "军工", "change_pct": 0.11}, {"name": "人造肉", "change_pct": 3.49}]}, {"code": "600371", "name": "万向德农", "hot_rank": 11, "hot_rank_chg": 16, "stock_cnt": 5776, "price": "13.96", "change": "10.01", "market_id": "17", "circulate_market_value": "4084388900.00", "change_type": "1", "change_section": "11", "change_days": "8", "change_reason": "转基因玉米"}, {"code": "002354", "name": "天娱数科", "hot_rank": 12, "hot_rank_chg": 10, "stock_cnt": 5776, "price": "8.36", "change": "4.11", "market_id": "33", "circulate_market_value": "13601668000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "电竞", "change_pct": 0.97}, {"name": "手游", "change_pct": 2.28}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "人工智能", "change_pct": 0.88}, {"name": "游戏", "change_pct": 2.23}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.6}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "快手概念股", "change_pct": 3.1}, {"name": "元宇宙", "change_pct": 1.71}, {"name": "虚拟数字人", "change_pct": 2.67}, {"name": "东数西算/算力", "change_pct": 0.22}, {"name": "web3.0", "change_pct": 2.47}, {"name": "AIGC概念", "change_pct": 1.79}, {"name": "数据要素", "change_pct": 1.73}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "AI营销", "change_pct": 3.43}, {"name": "ChatGPT", "change_pct": 1.58}, {"name": "智能眼镜/MR头显", "change_pct": -1.05}, {"name": "AI大模型/智能体", "change_pct": 1.32}, {"name": "人形机器人", "change_pct": -0.99}, {"name": "短剧/互动影游", "change_pct": 3.44}, {"name": "多模态", "change_pct": 1.92}, {"name": "AI视频", "change_pct": 1.84}, {"name": "IP经济/谷子经济", "change_pct": 2.16}, {"name": "小红书概念股", "change_pct": 2.97}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5776, "price": "9.49", "change": "4.06", "market_id": "17", "circulate_market_value": "23900659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "工业大麻", "change_pct": 0.44}, {"name": "中药", "change_pct": 1.46}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "保健品", "change_pct": 1.61}, {"name": "民营医院", "change_pct": 1.49}, {"name": "医药", "change_pct": 1.05}, {"name": "化学原料药", "change_pct": 1.08}, {"name": "流感", "change_pct": 1.06}, {"name": "振兴东北", "change_pct": 1.38}, {"name": "食品", "change_pct": 1.73}]}, {"code": "600227", "name": "赤天化", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5776, "price": "5.17", "change": "2.58", "market_id": "17", "circulate_market_value": "6605191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.26}, {"name": "化肥", "change_pct": 2.26}, {"name": "保健品", "change_pct": 1.61}, {"name": "民营医院", "change_pct": 1.49}, {"name": "医药", "change_pct": 1.05}, {"name": "煤化工", "change_pct": 0.54}, {"name": "食品", "change_pct": 1.73}, {"name": "大农业", "change_pct": 2.26}, {"name": "干细胞", "change_pct": 1.52}, {"name": "阿尔茨海默病", "change_pct": 1.38}]}, {"code": "600721", "name": "百花医药", "hot_rank": 15, "hot_rank_chg": 16, "stock_cnt": 5776, "price": "13.19", "change": "-5.11", "market_id": "17", "circulate_market_value": "5072183300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002418", "name": "康盛股份", "hot_rank": 16, "hot_rank_chg": -10, "stock_cnt": 5776, "price": "5.68", "change": "5.38", "market_id": "33", "circulate_market_value": "6454752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.07}, {"name": "锂电池", "change_pct": -1.27}, {"name": "石墨烯", "change_pct": -0.47}, {"name": "新能源整车", "change_pct": 1.67}, {"name": "云计算数据中心", "change_pct": -0.58}, {"name": "汽车整车", "change_pct": 1.47}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "白色家电", "change_pct": -0.49}, {"name": "家电", "change_pct": 0.08}, {"name": "汽车热管理", "change_pct": -0.21}, {"name": "热泵", "change_pct": -0.02}, {"name": "轮边电机", "change_pct": 0.28}, {"name": "超级电容", "change_pct": -1.19}, {"name": "液冷服务器", "change_pct": -1.29}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 17, "hot_rank_chg": -12, "stock_cnt": 5776, "price": "85.60", "change": "0.49", "market_id": "33", "circulate_market_value": "125567981000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 18, "hot_rank_chg": 135, "stock_cnt": 5776, "price": "7.55", "change": "20.03", "market_id": "33", "circulate_market_value": "6691190700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "农作物种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "土地流转", "change_pct": 3.56}, {"name": "海南概念", "change_pct": 2.06}, {"name": "自由贸易港", "change_pct": 1.66}, {"name": "海南自由贸易港", "change_pct": 2.63}, {"name": "大农业", "change_pct": 2.26}, {"name": "水产养殖", "change_pct": 5.19}, {"name": "自贸区", "change_pct": 1.56}]}, {"code": "600869", "name": "远东股份", "hot_rank": 19, "hot_rank_chg": -12, "stock_cnt": 5776, "price": "17.73", "change": "-7.08", "market_id": "17", "circulate_market_value": "39349124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 20, "hot_rank_chg": -17, "stock_cnt": 5776, "price": "571.10", "change": "1.10", "market_id": "17", "circulate_market_value": "17183097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 21, "hot_rank_chg": 24, "stock_cnt": 5776, "price": "24.85", "change": "10.00", "market_id": "17", "circulate_market_value": "10906586300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI短剧"}, {"code": "000938", "name": "紫光股份", "hot_rank": 22, "hot_rank_chg": -11, "stock_cnt": 5776, "price": "38.32", "change": "-1.62", "market_id": "33", "circulate_market_value": "109597985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 23, "hot_rank_chg": -4, "stock_cnt": 5776, "price": "67.34", "change": "-0.06", "market_id": "17", "circulate_market_value": "165228540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 24, "hot_rank_chg": 22, "stock_cnt": 5776, "price": "19.58", "change": "10.00", "market_id": "33", "circulate_market_value": "8945128100.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "数字人民币"}, {"code": "603221", "name": "爱丽家居", "hot_rank": 25, "hot_rank_chg": 77, "stock_cnt": 5776, "price": "30.55", "change": "10.01", "market_id": "17", "circulate_market_value": "7401348500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "跨界收购"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 26, "hot_rank_chg": -18, "stock_cnt": 5776, "price": "39.75", "change": "-1.51", "market_id": "33", "circulate_market_value": "30107250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 27, "hot_rank_chg": -13, "stock_cnt": 5776, "price": "4.92", "change": "-1.01", "market_id": "17", "circulate_market_value": "16080716000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.21}, {"name": "养老产业", "change_pct": 1.37}, {"name": "粤港澳大湾区", "change_pct": 1.3}, {"name": "民营医院", "change_pct": 1.49}, {"name": "地摊经济", "change_pct": 2.64}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 28, "hot_rank_chg": 46, "stock_cnt": 5776, "price": "11.63", "change": "0.52", "market_id": "17", "circulate_market_value": "20807678000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.35}, {"name": "纯碱", "change_pct": 0.61}, {"name": "食品", "change_pct": 1.73}, {"name": "土壤修复", "change_pct": 0.63}, {"name": "东数西算/算力", "change_pct": 0.22}, {"name": "OpenClaw概念", "change_pct": 0.66}, {"name": "DeepSeek概念股", "change_pct": 1.18}]}, {"code": "600183", "name": "生益科技", "hot_rank": 29, "hot_rank_chg": -17, "stock_cnt": 5776, "price": "144.42", "change": "-5.85", "market_id": "17", "circulate_market_value": "348304770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 30, "hot_rank_chg": 21, "stock_cnt": 5776, "price": "14.03", "change": "-0.50", "market_id": "33", "circulate_market_value": "48795362000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601123", "name": "马矿股份", "hot_rank": 31, "hot_rank_chg": 688, "stock_cnt": 5776, "price": "26.00", "change": "290.98", "market_id": "17", "circulate_market_value": "2491534700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 32, "hot_rank_chg": 105, "stock_cnt": 5776, "price": "6.97", "change": "4.03", "market_id": "33", "circulate_market_value": "13348194400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.92}, {"name": "林业", "change_pct": 3.81}, {"name": "碳中和", "change_pct": 1.04}, {"name": "自贸区", "change_pct": 1.56}]}, {"code": "000636", "name": "风华高科", "hot_rank": 33, "hot_rank_chg": -10, "stock_cnt": 5776, "price": "51.87", "change": "-7.18", "market_id": "33", "circulate_market_value": "59520305000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 34, "hot_rank_chg": 5, "stock_cnt": 5776, "price": "4.35", "change": "-0.46", "market_id": "33", "circulate_market_value": "9146642000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.02}, {"name": "中药", "change_pct": 1.46}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "维生素", "change_pct": 0.6}, {"name": "基因测序", "change_pct": 1.12}, {"name": "民营医院", "change_pct": 1.49}, {"name": "医药", "change_pct": 1.05}, {"name": "化学原料药", "change_pct": 1.08}, {"name": "PD-1抑制剂", "change_pct": 0.94}]}, {"code": "600313", "name": "农发种业", "hot_rank": 35, "hot_rank_chg": 137, "stock_cnt": 5776, "price": "7.90", "change": "10.03", "market_id": "17", "circulate_market_value": "8549369400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "种业", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.65}, {"name": "农业种植", "change_pct": 6.6}, {"name": "化肥", "change_pct": 2.26}, {"name": "转基因", "change_pct": 7.84}, {"name": "土地流转", "change_pct": 3.56}, {"name": "农垦", "change_pct": 4.24}, {"name": "乡村振兴", "change_pct": 3.02}, {"name": "大农业", "change_pct": 2.26}, {"name": "国企改革", "change_pct": 1.02}, {"name": "大豆", "change_pct": 5.99}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 36, "hot_rank_chg": 33, "stock_cnt": 5776, "price": "34.67", "change": "9.99", "market_id": "17", "circulate_market_value": "13902670000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "603269", "name": "海鸥股份", "hot_rank": 37, "hot_rank_chg": -13, "stock_cnt": 5776, "price": "25.34", "change": "3.85", "market_id": "17", "circulate_market_value": "10945498700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 38, "hot_rank_chg": -17, "stock_cnt": 5776, "price": "56.50", "change": "-2.60", "market_id": "17", "circulate_market_value": "254421700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 39, "hot_rank_chg": -2, "stock_cnt": 5776, "price": "34.86", "change": "-4.42", "market_id": "33", "circulate_market_value": "37680812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 40, "hot_rank_chg": 28, "stock_cnt": 5776, "price": "10.09", "change": "10.03", "market_id": "17", "circulate_market_value": "6719940000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半年报增长", "xgb_concepts": [{"name": "新零售", "change_pct": 3.55}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 41, "hot_rank_chg": -12, "stock_cnt": 5776, "price": "48.86", "change": "-7.83", "market_id": "17", "circulate_market_value": "52405544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 42, "hot_rank_chg": -10, "stock_cnt": 5776, "price": "5.91", "change": "-1.66", "market_id": "33", "circulate_market_value": "209019760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.34}, {"name": "手机产业链", "change_pct": -1.59}, {"name": "超高清视频", "change_pct": 0.65}, {"name": "苹果产业链", "change_pct": -2.11}, {"name": "电竞", "change_pct": 0.97}, {"name": "半导体", "change_pct": -2.69}, {"name": "人工智能", "change_pct": 0.88}, {"name": "互联网医疗", "change_pct": 1.96}, {"name": "VR&AR", "change_pct": -0.37}, {"name": "OLED", "change_pct": -2.0}, {"name": "京津冀", "change_pct": 1.03}, {"name": "物联网", "change_pct": 0.48}, {"name": "指纹识别", "change_pct": -0.7}, {"name": "汽车零部件", "change_pct": 0.34}, {"name": "白马股", "change_pct": 0.25}, {"name": "智能制造", "change_pct": -0.54}, {"name": "小米概念股", "change_pct": -1.09}, {"name": "国产芯片", "change_pct": -1.85}, {"name": "液晶面板/LCD", "change_pct": -1.56}, {"name": "全息概念", "change_pct": 0.73}, {"name": "理想汽车概念股", "change_pct": 0.97}, {"name": "MicroLED", "change_pct": -2.06}, {"name": "钙钛矿电池", "change_pct": -0.65}, {"name": "智能手表", "change_pct": -0.74}, {"name": "MiniLED", "change_pct": -1.87}, {"name": "传感器", "change_pct": -1.07}, {"name": "大硅片", "change_pct": -3.33}, {"name": "AI PC", "change_pct": -1.23}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "回购", "change_pct": -0.1}, {"name": "光电共封装CPO", "change_pct": -2.87}, {"name": "智能眼镜/MR头显", "change_pct": -1.05}, {"name": "玻璃基板封装", "change_pct": -3.45}]}, {"code": "002855", "name": "捷荣技术", "hot_rank": 43, "hot_rank_chg": -8, "stock_cnt": 5776, "price": "17.71", "change": "10.00", "market_id": "33", "circulate_market_value": "4360684300.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "折叠屏"}, {"code": "600693", "name": "东百集团", "hot_rank": 44, "hot_rank_chg": 340, "stock_cnt": 5776, "price": "10.24", "change": "9.99", "market_id": "17", "circulate_market_value": "8898076500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "快递物流", "change_pct": 0.98}, {"name": "新零售", "change_pct": 3.55}, {"name": "福建自贸/海西概念", "change_pct": 1.92}, {"name": "旅游", "change_pct": 1.98}, {"name": "阿里巴巴概念股", "change_pct": 1.25}, {"name": "物业管理", "change_pct": 0.98}, {"name": "免税店概念", "change_pct": 2.64}, {"name": "自贸区", "change_pct": 1.56}]}, {"code": "000712", "name": "锦龙股份", "hot_rank": 45, "hot_rank_chg": -19, "stock_cnt": 5776, "price": "13.50", "change": "4.01", "market_id": "33", "circulate_market_value": "12092410700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 46, "hot_rank_chg": 32, "stock_cnt": 5776, "price": "11.16", "change": "-5.58", "market_id": "33", "circulate_market_value": "5555950200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.46}, {"name": "优化生育（三孩）", "change_pct": 1.26}, {"name": "农业种植", "change_pct": 6.6}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "医药", "change_pct": 1.05}, {"name": "流感", "change_pct": 1.06}, {"name": "大农业", "change_pct": 2.26}]}, {"code": "600354", "name": "敦煌种业", "hot_rank": 47, "hot_rank_chg": 52, "stock_cnt": 5776, "price": "9.12", "change": "10.01", "market_id": "17", "circulate_market_value": "4813555000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "中报增长", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "棉花", "change_pct": 4.48}, {"name": "大农业", "change_pct": 2.26}, {"name": "供销社", "change_pct": 3.59}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 49, "hot_rank_chg": -32, "stock_cnt": 5776, "price": "11.91", "change": "-1.00", "market_id": "17", "circulate_market_value": "20666005000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.74}, {"name": "核电", "change_pct": -0.17}, {"name": "锂电池", "change_pct": -1.27}, {"name": "铜箔/覆铜板", "change_pct": -4.04}, {"name": "PCB板", "change_pct": -3.63}, {"name": "中科院系", "change_pct": 0.15}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "宁德时代概念股", "change_pct": -1.09}, {"name": "固态电池", "change_pct": -0.9}, {"name": "PET复合铜箔", "change_pct": -3.8}]}, {"code": "600785", "name": "新华百货", "hot_rank": 50, "hot_rank_chg": 75, "stock_cnt": 5776, "price": "12.66", "change": "9.99", "market_id": "17", "circulate_market_value": "3999088800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "股份回购", "xgb_concepts": [{"name": "新零售", "change_pct": 3.55}, {"name": "冷链", "change_pct": 0.73}, {"name": "宁夏概念", "change_pct": 1.6}, {"name": "IP经济/谷子经济", "change_pct": 2.16}, {"name": "首发经济", "change_pct": 2.67}]}, {"code": "000017", "name": "深中华A", "hot_rank": 51, "hot_rank_chg": -7, "stock_cnt": 5776, "price": "11.75", "change": "4.82", "market_id": "33", "circulate_market_value": "5179657900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.46}, {"name": "锂电池", "change_pct": -1.27}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "两轮车", "change_pct": 0.16}, {"name": "珠宝饰品", "change_pct": 1.97}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 52, "hot_rank_chg": -3, "stock_cnt": 5776, "price": "21.15", "change": "-4.82", "market_id": "33", "circulate_market_value": "24882315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 53, "hot_rank_chg": -10, "stock_cnt": 5776, "price": "859.30", "change": "0.87", "market_id": "33", "circulate_market_value": "953768870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 54, "hot_rank_chg": -24, "stock_cnt": 5776, "price": "4.73", "change": "10.00", "market_id": "33", "circulate_market_value": "3362078300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AIGC影视", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.88}, {"name": "影视", "change_pct": 3.73}, {"name": "旅游", "change_pct": 1.98}, {"name": "虚拟数字人", "change_pct": 2.67}, {"name": "AI营销", "change_pct": 3.43}, {"name": "AI大模型/智能体", "change_pct": 1.32}, {"name": "短剧/互动影游", "change_pct": 3.44}, {"name": "IP经济/谷子经济", "change_pct": 2.16}]}, {"code": "603893", "name": "瑞芯微", "hot_rank": 55, "hot_rank_chg": -2, "stock_cnt": 5776, "price": "203.60", "change": "4.63", "market_id": "17", "circulate_market_value": "86141032000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 56, "hot_rank_chg": -40, "stock_cnt": 5776, "price": "65.90", "change": "-3.39", "market_id": "33", "circulate_market_value": "74680522000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 57, "hot_rank_chg": -23, "stock_cnt": 5776, "price": "9.11", "change": "6.05", "market_id": "33", "circulate_market_value": "6629942800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 0.73}, {"name": "装配式建筑", "change_pct": 0.64}, {"name": "风电", "change_pct": -0.18}, {"name": "环氧丙烷", "change_pct": -0.03}, {"name": "乡村振兴", "change_pct": 3.02}, {"name": "建筑节能", "change_pct": 0.65}, {"name": "旧改", "change_pct": 0.67}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 58, "hot_rank_chg": 351, "stock_cnt": 5776, "price": "15.22", "change": "9.97", "market_id": "17", "circulate_market_value": "16688649000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力"}, {"code": "600667", "name": "太极实业", "hot_rank": 59, "hot_rank_chg": 11, "stock_cnt": 5776, "price": "18.52", "change": "-4.24", "market_id": "17", "circulate_market_value": "38735361000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 60, "hot_rank_chg": -20, "stock_cnt": 5776, "price": "33.84", "change": "-3.29", "market_id": "17", "circulate_market_value": "23396151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002084", "name": "海鸥住工", "hot_rank": 61, "hot_rank_chg": -14, "stock_cnt": 5776, "price": "7.02", "change": "10.03", "market_id": "33", "circulate_market_value": "4525333800.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.57}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "装修装饰", "change_pct": 0.14}, {"name": "装配式建筑", "change_pct": 0.64}, {"name": "家具家居", "change_pct": 0.59}, {"name": "智能制造", "change_pct": -0.54}, {"name": "3D打印", "change_pct": -1.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.02}, {"name": "旧改", "change_pct": 0.67}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 62, "hot_rank_chg": -4, "stock_cnt": 5776, "price": "5.40", "change": "9.98", "market_id": "17", "circulate_market_value": "6579425000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "煤炭", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.04}, {"name": "煤炭", "change_pct": -0.6}, {"name": "有色金属", "change_pct": -0.89}, {"name": "国企改革", "change_pct": 1.02}, {"name": "河南国企改革", "change_pct": 1.12}]}, {"code": "600551", "name": "时代出版", "hot_rank": 63, "hot_rank_chg": 21, "stock_cnt": 5776, "price": "9.08", "change": "10.06", "market_id": "17", "circulate_market_value": "6156741600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报扣非增长", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": 1.26}, {"name": "安徽国企改革", "change_pct": 1.05}, {"name": "教育", "change_pct": 1.77}, {"name": "传媒", "change_pct": 2.7}, {"name": "国企改革", "change_pct": 1.02}, {"name": "在线教育", "change_pct": 1.98}]}, {"code": "603629", "name": "利通电子", "hot_rank": 64, "hot_rank_chg": -2, "stock_cnt": 5776, "price": "113.58", "change": "-7.02", "market_id": "17", "circulate_market_value": "40970964000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 65, "hot_rank_chg": 10, "stock_cnt": 5776, "price": "6.12", "change": "10.07", "market_id": "17", "circulate_market_value": "3558027000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "棉花全产业链", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "新疆国企改革", "change_pct": 2.17}, {"name": "农垦", "change_pct": 4.24}, {"name": "棉花", "change_pct": 4.48}, {"name": "新疆概念", "change_pct": 1.48}, {"name": "风电", "change_pct": -0.18}, {"name": "大农业", "change_pct": 2.26}, {"name": "国企改革", "change_pct": 1.02}]}, {"code": "600272", "name": "开开实业", "hot_rank": 66, "hot_rank_chg": 31, "stock_cnt": 5776, "price": "20.09", "change": "10.02", "market_id": "17", "circulate_market_value": "3214400000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 67, "hot_rank_chg": -7, "stock_cnt": 5776, "price": "48.87", "change": "-5.51", "market_id": "17", "circulate_market_value": "41371061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 68, "hot_rank_chg": 393, "stock_cnt": 5776, "price": "9.58", "change": "9.99", "market_id": "33", "circulate_market_value": "10868865500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI视频", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.02}, {"name": "足球", "change_pct": 2.19}, {"name": "粤港澳大湾区", "change_pct": 1.3}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.6}, {"name": "传媒", "change_pct": 2.7}, {"name": "AIGC概念", "change_pct": 1.79}, {"name": "字节跳动概念股", "change_pct": 2.19}, {"name": "国企改革", "change_pct": 1.02}, {"name": "网红/MCN", "change_pct": 2.35}, {"name": "短剧/互动影游", "change_pct": 3.44}]}, {"code": "002141", "name": "贤丰控股", "hot_rank": 69, "hot_rank_chg": -28, "stock_cnt": 5776, "price": "6.94", "change": "-2.25", "market_id": "33", "circulate_market_value": "7168574400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.38}, {"name": "锂电池", "change_pct": -1.27}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "铜箔/覆铜板", "change_pct": -4.04}, {"name": "粤港澳大湾区", "change_pct": 1.3}, {"name": "新能源汽车", "change_pct": -0.56}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 1.81}]}, {"code": "601700", "name": "风范股份", "hot_rank": 70, "hot_rank_chg": -13, "stock_cnt": 5776, "price": "8.40", "change": "4.74", "market_id": "17", "circulate_market_value": "9565561300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.57}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "光伏", "change_pct": -0.72}, {"name": "特高压", "change_pct": -0.32}, {"name": "智能电网", "change_pct": 0.04}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 71, "hot_rank_chg": -35, "stock_cnt": 5776, "price": "72.91", "change": "-3.75", "market_id": "33", "circulate_market_value": "52876998000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 72, "hot_rank_chg": 17, "stock_cnt": 5776, "price": "45.94", "change": "4.43", "market_id": "33", "circulate_market_value": "53954587000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 73, "hot_rank_chg": 6, "stock_cnt": 5776, "price": "188.69", "change": "-4.70", "market_id": "33", "circulate_market_value": "261585050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 74, "hot_rank_chg": -7, "stock_cnt": 5776, "price": "73.29", "change": "-3.25", "market_id": "17", "circulate_market_value": "131146194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 75, "hot_rank_chg": -16, "stock_cnt": 5776, "price": "393.00", "change": "-3.20", "market_id": "17", "circulate_market_value": "263592300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 76, "hot_rank_chg": -13, "stock_cnt": 5776, "price": "94.90", "change": "-5.76", "market_id": "33", "circulate_market_value": "61970412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 77, "hot_rank_chg": -4, "stock_cnt": 5776, "price": "34.01", "change": "-3.33", "market_id": "17", "circulate_market_value": "116074418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003005", "name": "竞业达", "hot_rank": 78, "hot_rank_chg": -45, "stock_cnt": 5776, "price": "18.18", "change": "9.98", "market_id": "33", "circulate_market_value": "2439659200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI教育"}, {"code": "603118", "name": "共进股份", "hot_rank": 79, "hot_rank_chg": -14, "stock_cnt": 5776, "price": "17.91", "change": "-3.71", "market_id": "17", "circulate_market_value": "14100120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 80, "hot_rank_chg": 449, "stock_cnt": 5776, "price": "12.28", "change": "10.04", "market_id": "33", "circulate_market_value": "7461593800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.57}, {"name": "金融科技", "change_pct": 2.42}, {"name": "移动支付", "change_pct": 1.91}, {"name": "物联网", "change_pct": 0.48}, {"name": "数字经济", "change_pct": 1.6}, {"name": "电子身份证", "change_pct": 1.98}, {"name": "ETC", "change_pct": 1.2}, {"name": "数字人民币", "change_pct": 2.45}, {"name": "智慧政务", "change_pct": 1.66}, {"name": "eSIM", "change_pct": 1.83}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "区块链", "change_pct": 2.2}, {"name": "RWA", "change_pct": 3.6}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 81, "hot_rank_chg": 63, "stock_cnt": 5776, "price": "18.24", "change": "10.01", "market_id": "33", "circulate_market_value": "10689516900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "无人驾驶"}, {"code": "600396", "name": "华电辽能", "hot_rank": 82, "hot_rank_chg": 22, "stock_cnt": 5776, "price": "14.01", "change": "1.97", "market_id": "17", "circulate_market_value": "20632623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 83, "hot_rank_chg": -58, "stock_cnt": 5776, "price": "28.04", "change": "-3.44", "market_id": "33", "circulate_market_value": "5862551700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 84, "hot_rank_chg": -34, "stock_cnt": 5776, "price": "114.23", "change": "-7.86", "market_id": "33", "circulate_market_value": "94698446000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 85, "hot_rank_chg": 34, "stock_cnt": 5776, "price": "28.15", "change": "-9.19", "market_id": "33", "circulate_market_value": "39533661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 86, "hot_rank_chg": -15, "stock_cnt": 5776, "price": "14.64", "change": "1.25", "market_id": "17", "circulate_market_value": "18801839000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 87, "hot_rank_chg": 55, "stock_cnt": 5776, "price": "17.42", "change": "9.97", "market_id": "33", "circulate_market_value": "28278315000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算电协同"}, {"code": "000505", "name": "京粮控股", "hot_rank": 88, "hot_rank_chg": 336, "stock_cnt": 5776, "price": "7.74", "change": "9.94", "market_id": "33", "circulate_market_value": "5123688400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮食概念", "xgb_concepts": [{"name": "饲料", "change_pct": 2.0}, {"name": "京津冀", "change_pct": 1.03}, {"name": "调味品", "change_pct": 1.35}, {"name": "海南概念", "change_pct": 2.06}, {"name": "休闲食品", "change_pct": 1.71}, {"name": "食品", "change_pct": 1.73}, {"name": "人造肉", "change_pct": 3.49}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 89, "hot_rank_chg": -13, "stock_cnt": 5776, "price": "400.03", "change": "-4.43", "market_id": "17", "circulate_market_value": "162547520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 90, "hot_rank_chg": 13, "stock_cnt": 5776, "price": "32.35", "change": "-5.30", "market_id": "17", "circulate_market_value": "53832724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 91, "hot_rank_chg": -8, "stock_cnt": 5776, "price": "13.80", "change": "4.55", "market_id": "33", "circulate_market_value": "12879838200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 92, "hot_rank_chg": -20, "stock_cnt": 5776, "price": "62.94", "change": "-2.93", "market_id": "17", "circulate_market_value": "1248987170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 93, "hot_rank_chg": 2, "stock_cnt": 5776, "price": "10.85", "change": "0.09", "market_id": "33", "circulate_market_value": "25198861000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -1.04}, {"name": "有色 · 铜", "change_pct": -0.5}, {"name": "有色 · 锑", "change_pct": -1.6}, {"name": "湖南国企改革", "change_pct": 2.5}, {"name": "有色 · 锌", "change_pct": -0.39}, {"name": "有色金属", "change_pct": -0.89}, {"name": "国企改革", "change_pct": 1.02}, {"name": "白银", "change_pct": -0.62}]}, {"code": "003032", "name": "传智教育", "hot_rank": 94, "hot_rank_chg": 11, "stock_cnt": 5776, "price": "11.78", "change": "7.58", "market_id": "33", "circulate_market_value": "3351193300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 1.23}, {"name": "强势人气股", "change_pct": 0.56}, {"name": "教育", "change_pct": 1.77}, {"name": "阿里巴巴概念股", "change_pct": 1.25}, {"name": "职业教育", "change_pct": 2.02}, {"name": "在线教育", "change_pct": 1.98}, {"name": "华为鸿蒙", "change_pct": 1.84}, {"name": "华为产业链", "change_pct": 0.04}, {"name": "智谱AI", "change_pct": 1.4}]}, {"code": "600479", "name": "千金药业", "hot_rank": 95, "hot_rank_chg": -43, "stock_cnt": 5776, "price": "13.37", "change": "10.04", "market_id": "17", "circulate_market_value": "5595440200.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "女性健康"}, {"code": "002041", "name": "登海种业", "hot_rank": 96, "hot_rank_chg": 147, "stock_cnt": 5776, "price": "11.88", "change": "10.00", "market_id": "33", "circulate_market_value": "10454400000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮食概念", "xgb_concepts": [{"name": "农业种植", "change_pct": 6.6}, {"name": "转基因", "change_pct": 7.84}, {"name": "乡村振兴", "change_pct": 3.02}, {"name": "大农业", "change_pct": 2.26}, {"name": "人造肉", "change_pct": 3.49}, {"name": "大豆", "change_pct": 5.99}]}, {"code": "001309", "name": "德明利", "hot_rank": 97, "hot_rank_chg": -10, "stock_cnt": 5776, "price": "418.04", "change": "-4.23", "market_id": "33", "circulate_market_value": "68988746000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 99, "hot_rank_chg": -14, "stock_cnt": 5776, "price": "6.17", "change": "9.98", "market_id": "33", "circulate_market_value": "7174768000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI影视", "xgb_concepts": [{"name": "影视", "change_pct": 3.73}, {"name": "新疆概念", "change_pct": 1.48}, {"name": "阿里巴巴概念股", "change_pct": 1.25}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "短剧/互动影游", "change_pct": 3.44}, {"name": "IP经济/谷子经济", "change_pct": 2.16}]}, {"code": "002156", "name": "通富微电", "hot_rank": 100, "hot_rank_chg": 0, "stock_cnt": 5776, "price": "61.38", "change": "-4.93", "market_id": "33", "circulate_market_value": "93141217000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};