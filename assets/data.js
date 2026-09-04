const UPDATE_TIME = "2026-09-04 10:25";
const THS_HOT = [
  {
    "name": "猪肉",
    "rise": 5.89,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "数字货币",
    "rise": 1.87,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "AI应用",
    "rise": 0.83,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "液冷服务器",
    "rise": -2.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.73,
    "rate": 0,
    "tag": "",
    "hotTag": "连续285天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -0.48,
    "rate": 0,
    "tag": "",
    "hotTag": "连续115天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粮食概念",
    "rise": 1.82,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "存储芯片",
    "rise": -3.04,
    "rate": 0,
    "tag": "",
    "hotTag": "连续238天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI视频",
    "rise": 2.09,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "PCB概念",
    "rise": -2.55,
    "rate": 0,
    "tag": "",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "培育钻石",
    "rise": -1.41,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "中船系",
    "rise": 2.42,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 2,
    "etfName": "军工ETF",
    "code": "885860"
  },
  {
    "name": "算力租赁",
    "rise": -0.34,
    "rate": 0,
    "tag": "",
    "hotTag": "连续149天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "兵装重组概念",
    "rise": 2.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -2,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "养鸡",
    "rise": 4.57,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885808"
  },
  {
    "name": "商业航天",
    "rise": -0.75,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续214天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "白酒概念",
    "rise": 2.19,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "光纤概念",
    "rise": -1.97,
    "rate": 0,
    "tag": "",
    "hotTag": "连续114天上榜",
    "rankChg": 0,
    "etfName": "深成长ETF",
    "code": "886084"
  },
  {
    "name": "海峡两岸",
    "rise": -0.32,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "互联网金融",
    "rise": 1.24,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "金融科技ETF",
    "code": "885456"
  }
];
const THS_EVENTS = [
  {
    "title": "供应压力缓和价格整体回暖 机构看好产能进一步加速去化 猪肉概念股涨幅居前",
    "desc": "",
    "heat": 689140,
    "direction": "猪肉",
    "themes": [
      "猪肉"
    ],
    "stocks": [
      {
        "name": "大禹生物",
        "code": "920970",
        "chg": 17.701863
      }
    ]
  },
  {
    "title": "芒果超媒董事长：以《后西游记》为战略起点 布局AI精品内容赛道",
    "desc": "",
    "heat": 249235,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "易点天下",
        "code": "301171",
        "chg": 11.117562
      }
    ]
  },
  {
    "title": "宏观因素提振比特币 加密货币概念股上涨",
    "desc": "",
    "heat": 217247,
    "direction": "数字货币",
    "themes": [
      "数字货币",
      "RWA"
    ],
    "stocks": [
      {
        "name": "四方精创",
        "code": "300468",
        "chg": 14.583333
      }
    ]
  },
  {
    "title": "GPT-6 Astra横空出世，AGI纪元正式开启",
    "desc": "",
    "heat": 192271,
    "direction": "AI应用",
    "themes": [
      "AI应用",
      "人工智能",
      "AI智能体",
      "多模态AI",
      "ChatGPT概念"
    ],
    "stocks": [
      {
        "name": "柏星龙",
        "code": "920075",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "2026医保国谈将于9月5日举行",
    "desc": "",
    "heat": 154801,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗",
      "实验猴"
    ],
    "stocks": [
      {
        "name": "诺思格",
        "code": "301333",
        "chg": 6.382576
      }
    ]
  },
  {
    "title": "随着国储收购落地、深加工开机率逐步回升，后续玉米价格继续深跌的空间非常有限",
    "desc": "",
    "heat": 152092,
    "direction": "转基因",
    "themes": [
      "转基因",
      "粮食概念",
      "玉米",
      "大豆",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "亚盛集团",
        "code": "600108",
        "chg": 10.10101
      }
    ]
  },
  {
    "title": "促进中小企业发展“十五五”规划发布",
    "desc": "",
    "heat": 68715,
    "direction": "创投",
    "themes": [
      "创投"
    ],
    "stocks": [
      {
        "name": "海峡创新",
        "code": "300300",
        "chg": 16.010165
      }
    ]
  },
  {
    "title": "特斯拉：Cybercab正式在美国奥斯汀投入运营",
    "desc": "",
    "heat": 67133,
    "direction": "无人驾驶",
    "themes": [
      "无人驾驶"
    ],
    "stocks": [
      {
        "name": "大地电气",
        "code": "920436",
        "chg": 11.101243
      }
    ]
  },
  {
    "title": "美联储加息预期降温，贵金属板块迎来反弹，白银有色涨停",
    "desc": "",
    "heat": 59681,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "中国瑞林",
        "code": "603257",
        "chg": 9.321129
      }
    ]
  },
  {
    "title": "华为Mate 90系列入网：直接标注5G！首发韬定律麒麟芯",
    "desc": "",
    "heat": 40240,
    "direction": "华为5G",
    "themes": [
      "华为5G",
      "华为概念",
      "5G"
    ],
    "stocks": [
      {
        "name": "德龙激光",
        "code": "688170",
        "chg": 17.501898
      }
    ]
  },
  {
    "title": "今年第三轮！模拟芯片大厂，涨价",
    "desc": "",
    "heat": 7331,
    "direction": "模拟芯片",
    "themes": [
      "模拟芯片"
    ],
    "stocks": [
      {
        "name": "南芯科技",
        "code": "688484",
        "chg": 0.115574
      }
    ]
  },
  {
    "title": "英伟达宣布英伟达Rtx Spark Windows个人电脑将于2026年10月上市",
    "desc": "",
    "heat": 6106,
    "direction": "AI PC",
    "themes": [
      "AI PC"
    ],
    "stocks": [
      {
        "name": "景旺电子",
        "code": "603228",
        "chg": 8.957249
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄酒",
    "change": "+8.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+5.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+4.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+3.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饲料",
    "change": "+3.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+3.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+3.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "预制菜",
    "change": "+3.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+3.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+3.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+2.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+2.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "邮轮游艇",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+2.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+2.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+2.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+2.41%",
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
    "hot_rank": 2,
    "hot_rank_chg": 3,
    "stock_cnt": 5779,
    "price": "12.65",
    "change": "3.60",
    "market_id": "17",
    "circulate_market_value": "8424900000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.0
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 4,
    "hot_rank_chg": 0,
    "stock_cnt": 5779,
    "price": "12.30",
    "change": "-2.92",
    "market_id": "17",
    "circulate_market_value": "7893933600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.16
      },
      {
        "name": "农业种植",
        "change_pct": 2.53
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.71
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.88
      },
      {
        "name": "休闲食品",
        "change_pct": 1.78
      },
      {
        "name": "食品",
        "change_pct": 1.31
      },
      {
        "name": "食品安全",
        "change_pct": 0.35
      },
      {
        "name": "社区团购",
        "change_pct": 2.03
      },
      {
        "name": "大农业",
        "change_pct": 1.41
      },
      {
        "name": "预制菜",
        "change_pct": 3.29
      },
      {
        "name": "人造肉",
        "change_pct": 2.35
      },
      {
        "name": "国企改革",
        "change_pct": 0.38
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 5,
    "hot_rank_chg": 2,
    "stock_cnt": 5779,
    "price": "7.78",
    "change": "-9.01",
    "market_id": "17",
    "circulate_market_value": "19594007000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.12
      },
      {
        "name": "工业大麻",
        "change_pct": -0.26
      },
      {
        "name": "中药",
        "change_pct": -0.07
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "保健品",
        "change_pct": 0.27
      },
      {
        "name": "民营医院",
        "change_pct": -0.3
      },
      {
        "name": "医药",
        "change_pct": -0.43
      },
      {
        "name": "化学原料药",
        "change_pct": -0.53
      },
      {
        "name": "流感",
        "change_pct": -0.32
      },
      {
        "name": "振兴东北",
        "change_pct": 0.31
      },
      {
        "name": "食品",
        "change_pct": 1.31
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 6,
    "hot_rank_chg": 58,
    "stock_cnt": 5779,
    "price": "8.45",
    "change": "8.75",
    "market_id": "33",
    "circulate_market_value": "13748097000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.12
      },
      {
        "name": "电竞",
        "change_pct": 1.8
      },
      {
        "name": "手游",
        "change_pct": 2.2
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "人工智能",
        "change_pct": 0.13
      },
      {
        "name": "游戏",
        "change_pct": 1.79
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.8
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.61
      },
      {
        "name": "快手概念股",
        "change_pct": 2.24
      },
      {
        "name": "元宇宙",
        "change_pct": 0.7
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.57
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.59
      },
      {
        "name": "web3.0",
        "change_pct": 1.5
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.21
      },
      {
        "name": "数据要素",
        "change_pct": 1.12
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.07
      },
      {
        "name": "AI营销",
        "change_pct": 2.91
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.02
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.65
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.69
      },
      {
        "name": "人形机器人",
        "change_pct": -2.09
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.04
      },
      {
        "name": "多模态",
        "change_pct": 0.89
      },
      {
        "name": "AI视频",
        "change_pct": 2.38
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.48
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.1
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 10,
    "hot_rank_chg": 17,
    "stock_cnt": 5779,
    "price": "3.15",
    "change": "10.14",
    "market_id": "33",
    "circulate_market_value": "7379467600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.0
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "人工智能",
        "change_pct": 0.13
      },
      {
        "name": "VR&AR",
        "change_pct": -1.04
      },
      {
        "name": "京津冀",
        "change_pct": 0.6
      },
      {
        "name": "装修装饰",
        "change_pct": 0.41
      },
      {
        "name": "住房租赁",
        "change_pct": 2.18
      },
      {
        "name": "破净股",
        "change_pct": 0.68
      },
      {
        "name": "数字经济",
        "change_pct": 0.8
      },
      {
        "name": "房产经纪",
        "change_pct": 3.98
      },
      {
        "name": "物业管理",
        "change_pct": 1.61
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 12,
    "hot_rank_chg": 34,
    "stock_cnt": 5779,
    "price": "5.18",
    "change": "4.22",
    "market_id": "33",
    "circulate_market_value": "13740212000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "装修装饰",
        "change_pct": 0.41
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.49
      },
      {
        "name": "航天",
        "change_pct": -0.8
      },
      {
        "name": "旧改",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 14,
    "hot_rank_chg": 21,
    "stock_cnt": 5779,
    "price": "5.59",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "3973365300.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "AIGC影视",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.13
      },
      {
        "name": "影视",
        "change_pct": 1.94
      },
      {
        "name": "旅游",
        "change_pct": 1.44
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.57
      },
      {
        "name": "AI营销",
        "change_pct": 2.91
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.69
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.04
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 23,
    "hot_rank_chg": 59,
    "stock_cnt": 5779,
    "price": "4.81",
    "change": "2.78",
    "market_id": "33",
    "circulate_market_value": "28161573000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.42
      },
      {
        "name": "人工智能",
        "change_pct": 0.13
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.04
      },
      {
        "name": "水利",
        "change_pct": 0.06
      },
      {
        "name": "直播/短视频",
        "change_pct": 2.49
      },
      {
        "name": "大数据",
        "change_pct": 0.58
      },
      {
        "name": "园林",
        "change_pct": 0.18
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.8
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.61
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.28
      },
      {
        "name": "第三代半导体",
        "change_pct": -2.17
      },
      {
        "name": "快手概念股",
        "change_pct": 2.24
      },
      {
        "name": "IGBT",
        "change_pct": -1.91
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.57
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.21
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.07
      },
      {
        "name": "氮化镓",
        "change_pct": -1.9
      },
      {
        "name": "AI营销",
        "change_pct": 2.91
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.69
      },
      {
        "name": "多模态",
        "change_pct": 0.89
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.97
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.1
      },
      {
        "name": "区块链",
        "change_pct": 1.04
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 25,
    "hot_rank_chg": -4,
    "stock_cnt": 5779,
    "price": "5.01",
    "change": "-2.72",
    "market_id": "17",
    "circulate_market_value": "7832215000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.96
      },
      {
        "name": "共享经济",
        "change_pct": 0.26
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.04
      },
      {
        "name": "旅游",
        "change_pct": 1.44
      },
      {
        "name": "物业管理",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 27,
    "hot_rank_chg": -10,
    "stock_cnt": 5779,
    "price": "11.88",
    "change": "-4.04",
    "market_id": "17",
    "circulate_market_value": "21254963000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.37
      },
      {
        "name": "纯碱",
        "change_pct": 0.22
      },
      {
        "name": "食品",
        "change_pct": 1.31
      },
      {
        "name": "土壤修复",
        "change_pct": -0.29
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.59
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.43
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.2
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 34,
    "hot_rank_chg": 186,
    "stock_cnt": 5779,
    "price": "11.18",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "7292445100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数字人民币",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.13
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 1.45
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.96
      },
      {
        "name": "新零售",
        "change_pct": 1.0
      },
      {
        "name": "移动支付",
        "change_pct": 0.68
      },
      {
        "name": "京津冀",
        "change_pct": 0.6
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.08
      },
      {
        "name": "国产芯片",
        "change_pct": -2.22
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.42
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.61
      },
      {
        "name": "物业管理",
        "change_pct": 1.61
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.07
      },
      {
        "name": "国企改革",
        "change_pct": 0.38
      },
      {
        "name": "数字人民币",
        "change_pct": 1.9
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 35,
    "hot_rank_chg": 31,
    "stock_cnt": 5779,
    "price": "4.29",
    "change": "-2.94",
    "market_id": "17",
    "circulate_market_value": "5480903200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.63
      },
      {
        "name": "化肥",
        "change_pct": 0.02
      },
      {
        "name": "保健品",
        "change_pct": 0.27
      },
      {
        "name": "民营医院",
        "change_pct": -0.3
      },
      {
        "name": "医药",
        "change_pct": -0.43
      },
      {
        "name": "煤化工",
        "change_pct": -0.37
      },
      {
        "name": "食品",
        "change_pct": 1.31
      },
      {
        "name": "大农业",
        "change_pct": 1.41
      },
      {
        "name": "干细胞",
        "change_pct": -0.62
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 41,
    "hot_rank_chg": 19,
    "stock_cnt": 5779,
    "price": "11.94",
    "change": "1.19",
    "market_id": "17",
    "circulate_market_value": "4591498800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.48
      },
      {
        "name": "股权转让",
        "change_pct": -0.48
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "新疆概念",
        "change_pct": 0.98
      },
      {
        "name": "医药",
        "change_pct": -0.43
      },
      {
        "name": "流感",
        "change_pct": -0.32
      },
      {
        "name": "国资入股",
        "change_pct": -0.15
      },
      {
        "name": "减肥药",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 42,
    "hot_rank_chg": -23,
    "stock_cnt": 5779,
    "price": "10.93",
    "change": "-1.00",
    "market_id": "17",
    "circulate_market_value": "9497653900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.12
      },
      {
        "name": "快递物流",
        "change_pct": 0.52
      },
      {
        "name": "新零售",
        "change_pct": 1.0
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.84
      },
      {
        "name": "旅游",
        "change_pct": 1.44
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.42
      },
      {
        "name": "物业管理",
        "change_pct": 1.61
      },
      {
        "name": "免税店概念",
        "change_pct": 1.26
      },
      {
        "name": "自贸区",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 43,
    "hot_rank_chg": -13,
    "stock_cnt": 5779,
    "price": "5.67",
    "change": "-1.90",
    "market_id": "33",
    "circulate_market_value": "5615529700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.29
      },
      {
        "name": "旅游",
        "change_pct": 1.44
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.57
      },
      {
        "name": "国企改革",
        "change_pct": 0.38
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 44,
    "hot_rank_chg": -19,
    "stock_cnt": 5779,
    "price": "5.21",
    "change": "-7.79",
    "market_id": "33",
    "circulate_market_value": "5920644000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.96
      },
      {
        "name": "锂电池",
        "change_pct": -1.7
      },
      {
        "name": "石墨烯",
        "change_pct": -1.06
      },
      {
        "name": "新能源整车",
        "change_pct": 0.26
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.04
      },
      {
        "name": "汽车整车",
        "change_pct": 0.69
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.2
      },
      {
        "name": "白色家电",
        "change_pct": -0.65
      },
      {
        "name": "家电",
        "change_pct": -0.7
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.19
      },
      {
        "name": "热泵",
        "change_pct": -1.54
      },
      {
        "name": "轮边电机",
        "change_pct": -1.12
      },
      {
        "name": "超级电容",
        "change_pct": -1.53
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.97
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 45,
    "hot_rank_chg": 6,
    "stock_cnt": 5779,
    "price": "9.02",
    "change": "-0.77",
    "market_id": "17",
    "circulate_market_value": "4323466200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.07
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "医药商业",
        "change_pct": 0.86
      },
      {
        "name": "医药",
        "change_pct": -0.43
      },
      {
        "name": "流感",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 47,
    "hot_rank_chg": -32,
    "stock_cnt": 5779,
    "price": "7.21",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "2742881400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.15
      },
      {
        "name": "有机硅",
        "change_pct": -2.05
      },
      {
        "name": "装修装饰",
        "change_pct": 0.41
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.49
      },
      {
        "name": "光伏",
        "change_pct": -0.86
      },
      {
        "name": "船舶",
        "change_pct": 2.28
      },
      {
        "name": "固态电池",
        "change_pct": -1.76
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.37
      },
      {
        "name": "旧改",
        "change_pct": 0.44
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.92
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.97
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 48,
    "hot_rank_chg": 43,
    "stock_cnt": 5779,
    "price": "12.29",
    "change": "5.86",
    "market_id": "33",
    "circulate_market_value": "11470522600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.25
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.46
      },
      {
        "name": "新疆概念",
        "change_pct": 0.98
      },
      {
        "name": "光伏",
        "change_pct": -0.86
      },
      {
        "name": "风电",
        "change_pct": -0.21
      },
      {
        "name": "储能",
        "change_pct": -0.57
      },
      {
        "name": "国企改革",
        "change_pct": 0.38
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 50,
    "hot_rank_chg": 13,
    "stock_cnt": 5779,
    "price": "9.52",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "4196625000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -0.34
      },
      {
        "name": "锂电池",
        "change_pct": -1.7
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.2
      },
      {
        "name": "两轮车",
        "change_pct": -0.36
      },
      {
        "name": "珠宝饰品",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 56,
    "hot_rank_chg": -36,
    "stock_cnt": 5779,
    "price": "5.12",
    "change": "-10.02",
    "market_id": "17",
    "circulate_market_value": "6238269600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -0.96
      },
      {
        "name": "煤炭",
        "change_pct": -0.36
      },
      {
        "name": "有色金属",
        "change_pct": -1.56
      },
      {
        "name": "国企改革",
        "change_pct": 0.38
      },
      {
        "name": "河南国企改革",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 65,
    "hot_rank_chg": 27,
    "stock_cnt": 5779,
    "price": "4.36",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "8488549900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "玉米制种",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.12
      },
      {
        "name": "农业种植",
        "change_pct": 2.53
      },
      {
        "name": "土地流转",
        "change_pct": 1.84
      },
      {
        "name": "农垦",
        "change_pct": 3.46
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.88
      },
      {
        "name": "食品",
        "change_pct": 1.31
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 1.05
      },
      {
        "name": "大农业",
        "change_pct": 1.41
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 67,
    "hot_rank_chg": 155,
    "stock_cnt": 5779,
    "price": "8.66",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4570766000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 2.53
      },
      {
        "name": "棉花",
        "change_pct": 1.6
      },
      {
        "name": "大农业",
        "change_pct": 1.41
      },
      {
        "name": "供销社",
        "change_pct": 1.16
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 68,
    "hot_rank_chg": -3,
    "stock_cnt": 5779,
    "price": "5.61",
    "change": "-1.75",
    "market_id": "33",
    "circulate_market_value": "198409620000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.42
      },
      {
        "name": "手机产业链",
        "change_pct": -2.13
      },
      {
        "name": "超高清视频",
        "change_pct": -0.7
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.71
      },
      {
        "name": "电竞",
        "change_pct": 1.8
      },
      {
        "name": "半导体",
        "change_pct": -2.76
      },
      {
        "name": "人工智能",
        "change_pct": 0.13
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.36
      },
      {
        "name": "VR&AR",
        "change_pct": -1.04
      },
      {
        "name": "OLED",
        "change_pct": -1.98
      },
      {
        "name": "京津冀",
        "change_pct": 0.6
      },
      {
        "name": "物联网",
        "change_pct": -0.64
      },
      {
        "name": "指纹识别",
        "change_pct": -1.86
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.11
      },
      {
        "name": "白马股",
        "change_pct": 0.29
      },
      {
        "name": "智能制造",
        "change_pct": -1.08
      },
      {
        "name": "小米概念股",
        "change_pct": -1.85
      },
      {
        "name": "国产芯片",
        "change_pct": -2.22
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.24
      },
      {
        "name": "全息概念",
        "change_pct": -0.19
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.28
      },
      {
        "name": "MicroLED",
        "change_pct": -1.86
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.19
      },
      {
        "name": "智能手表",
        "change_pct": -1.98
      },
      {
        "name": "MiniLED",
        "change_pct": -1.62
      },
      {
        "name": "传感器",
        "change_pct": -1.54
      },
      {
        "name": "大硅片",
        "change_pct": -3.74
      },
      {
        "name": "AI PC",
        "change_pct": -2.16
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "回购",
        "change_pct": -0.06
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -2.7
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.65
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.52
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 71,
    "hot_rank_chg": 4,
    "stock_cnt": 5779,
    "price": "9.72",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "2765161200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -0.31
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "教育",
        "change_pct": 0.51
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.42
      },
      {
        "name": "职业教育",
        "change_pct": 0.57
      },
      {
        "name": "在线教育",
        "change_pct": -0.16
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.54
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "智谱AI",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 73,
    "hot_rank_chg": -11,
    "stock_cnt": 5779,
    "price": "3.55",
    "change": "-3.79",
    "market_id": "17",
    "circulate_market_value": "7853768100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.31
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.04
      },
      {
        "name": "光通信",
        "change_pct": -2.72
      },
      {
        "name": "林业",
        "change_pct": 1.88
      },
      {
        "name": "军民融合",
        "change_pct": -0.62
      },
      {
        "name": "军工",
        "change_pct": -0.33
      },
      {
        "name": "人造肉",
        "change_pct": 2.35
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 76,
    "hot_rank_chg": 34,
    "stock_cnt": 5779,
    "price": "7.05",
    "change": "0.28",
    "market_id": "33",
    "circulate_market_value": "6248065500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 2.53
      },
      {
        "name": "土地流转",
        "change_pct": 1.84
      },
      {
        "name": "海南概念",
        "change_pct": 1.34
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.08
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.58
      },
      {
        "name": "大农业",
        "change_pct": 1.41
      },
      {
        "name": "水产养殖",
        "change_pct": 3.77
      },
      {
        "name": "自贸区",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "002328",
    "name": "新朋股份",
    "hot_rank": 82,
    "hot_rank_chg": -54,
    "stock_cnt": 5779,
    "price": "9.96",
    "change": "-1.39",
    "market_id": "33",
    "circulate_market_value": "5684031500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.23
      },
      {
        "name": "特斯拉",
        "change_pct": -1.61
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.04
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.11
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.2
      },
      {
        "name": "储能",
        "change_pct": -0.57
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.23
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.97
      }
    ]
  },
  {
    "code": "002721",
    "name": "金一文化",
    "hot_rank": 85,
    "hot_rank_chg": 169,
    "stock_cnt": 5779,
    "price": "3.15",
    "change": "4.65",
    "market_id": "33",
    "circulate_market_value": "8377042600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.19
      },
      {
        "name": "金融科技",
        "change_pct": 1.87
      },
      {
        "name": "人工智能",
        "change_pct": 0.13
      },
      {
        "name": "珠宝饰品",
        "change_pct": -0.05
      },
      {
        "name": "数字人民币",
        "change_pct": 1.9
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 86,
    "hot_rank_chg": 8,
    "stock_cnt": 5779,
    "price": "3.94",
    "change": "-7.29",
    "market_id": "33",
    "circulate_market_value": "8284544700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.07
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "维生素",
        "change_pct": 0.94
      },
      {
        "name": "基因测序",
        "change_pct": -0.37
      },
      {
        "name": "民营医院",
        "change_pct": -0.3
      },
      {
        "name": "医药",
        "change_pct": -0.43
      },
      {
        "name": "化学原料药",
        "change_pct": -0.53
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.78
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 88,
    "hot_rank_chg": -20,
    "stock_cnt": 5779,
    "price": "12.35",
    "change": "-2.22",
    "market_id": "33",
    "circulate_market_value": "11062316400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.48
      },
      {
        "name": "期货概念",
        "change_pct": 1.26
      },
      {
        "name": "券商",
        "change_pct": 0.76
      },
      {
        "name": "大金融",
        "change_pct": 0.83
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 90,
    "hot_rank_chg": -56,
    "stock_cnt": 5779,
    "price": "11.22",
    "change": "-3.19",
    "market_id": "33",
    "circulate_market_value": "26058177000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -1.35
      },
      {
        "name": "有色 · 铜",
        "change_pct": -1.71
      },
      {
        "name": "有色 · 锑",
        "change_pct": -2.37
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.71
      },
      {
        "name": "有色 · 锌",
        "change_pct": -2.07
      },
      {
        "name": "有色金属",
        "change_pct": -1.56
      },
      {
        "name": "国企改革",
        "change_pct": 0.38
      },
      {
        "name": "白银",
        "change_pct": -2.39
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 91,
    "hot_rank_chg": -22,
    "stock_cnt": 5779,
    "price": "5.77",
    "change": "-1.03",
    "market_id": "33",
    "circulate_market_value": "6709629000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 1.94
      },
      {
        "name": "新疆概念",
        "change_pct": 0.98
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.42
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.61
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.04
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "600657",
    "name": "信达地产",
    "hot_rank": 100,
    "hot_rank_chg": -23,
    "stock_cnt": 5779,
    "price": "3.50",
    "change": "4.17",
    "market_id": "17",
    "circulate_market_value": "9981575100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 1.04
      },
      {
        "name": "房地产",
        "change_pct": 0.93
      },
      {
        "name": "京津冀",
        "change_pct": 0.6
      },
      {
        "name": "破净股",
        "change_pct": 0.68
      },
      {
        "name": "物业管理",
        "change_pct": 1.61
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "003040", "name": "楚天龙", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "21.12", "change": "10.00", "market_id": "33", "circulate_market_value": "9648677400.00", "change_type": "1", "change_section": "11", "change_days": "7", "change_reason": "数字人民币"}, {"code": "601086", "name": "国芳集团", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5779, "price": "12.65", "change": "3.60", "market_id": "17", "circulate_market_value": "8424900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.0}, {"name": "强势人气股", "change_pct": -1.47}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 3, "hot_rank_chg": 5, "stock_cnt": 5779, "price": "17.20", "change": "-0.75", "market_id": "17", "circulate_market_value": "11701498400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5779, "price": "12.30", "change": "-2.92", "market_id": "17", "circulate_market_value": "7893933600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.16}, {"name": "农业种植", "change_pct": 2.53}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "湖南国企改革", "change_pct": 0.71}, {"name": "乡村振兴", "change_pct": 0.88}, {"name": "休闲食品", "change_pct": 1.78}, {"name": "食品", "change_pct": 1.31}, {"name": "食品安全", "change_pct": 0.35}, {"name": "社区团购", "change_pct": 2.03}, {"name": "大农业", "change_pct": 1.41}, {"name": "预制菜", "change_pct": 3.29}, {"name": "人造肉", "change_pct": 2.35}, {"name": "国企改革", "change_pct": 0.38}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 5, "hot_rank_chg": 2, "stock_cnt": 5779, "price": "7.78", "change": "-9.01", "market_id": "17", "circulate_market_value": "19594007000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.12}, {"name": "工业大麻", "change_pct": -0.26}, {"name": "中药", "change_pct": -0.07}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "保健品", "change_pct": 0.27}, {"name": "民营医院", "change_pct": -0.3}, {"name": "医药", "change_pct": -0.43}, {"name": "化学原料药", "change_pct": -0.53}, {"name": "流感", "change_pct": -0.32}, {"name": "振兴东北", "change_pct": 0.31}, {"name": "食品", "change_pct": 1.31}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 6, "hot_rank_chg": 58, "stock_cnt": 5779, "price": "8.45", "change": "8.75", "market_id": "33", "circulate_market_value": "13748097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.12}, {"name": "电竞", "change_pct": 1.8}, {"name": "手游", "change_pct": 2.2}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "人工智能", "change_pct": 0.13}, {"name": "游戏", "change_pct": 1.79}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.8}, {"name": "腾讯概念股", "change_pct": 0.61}, {"name": "快手概念股", "change_pct": 2.24}, {"name": "元宇宙", "change_pct": 0.7}, {"name": "虚拟数字人", "change_pct": 1.57}, {"name": "东数西算/算力", "change_pct": -0.59}, {"name": "web3.0", "change_pct": 1.5}, {"name": "AIGC概念", "change_pct": 1.21}, {"name": "数据要素", "change_pct": 1.12}, {"name": "字节跳动概念股", "change_pct": 1.07}, {"name": "AI营销", "change_pct": 2.91}, {"name": "ChatGPT", "change_pct": 1.02}, {"name": "智能眼镜/MR头显", "change_pct": -1.65}, {"name": "AI大模型/智能体", "change_pct": 0.69}, {"name": "人形机器人", "change_pct": -2.09}, {"name": "短剧/互动影游", "change_pct": 2.04}, {"name": "多模态", "change_pct": 0.89}, {"name": "AI视频", "change_pct": 2.38}, {"name": "IP经济/谷子经济", "change_pct": 1.48}, {"name": "小红书概念股", "change_pct": 2.1}]}, {"code": "600869", "name": "远东股份", "hot_rank": 7, "hot_rank_chg": -6, "stock_cnt": 5779, "price": "21.20", "change": "0.71", "market_id": "17", "circulate_market_value": "47050278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 8, "hot_rank_chg": -5, "stock_cnt": 5779, "price": "15.79", "change": "-0.82", "market_id": "17", "circulate_market_value": "20278759000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 9, "hot_rank_chg": 13, "stock_cnt": 5779, "price": "14.05", "change": "7.66", "market_id": "33", "circulate_market_value": "8537084100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 10, "hot_rank_chg": 17, "stock_cnt": 5779, "price": "3.15", "change": "10.14", "market_id": "33", "circulate_market_value": "7379467600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.0}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "人工智能", "change_pct": 0.13}, {"name": "VR&AR", "change_pct": -1.04}, {"name": "京津冀", "change_pct": 0.6}, {"name": "装修装饰", "change_pct": 0.41}, {"name": "住房租赁", "change_pct": 2.18}, {"name": "破净股", "change_pct": 0.68}, {"name": "数字经济", "change_pct": 0.8}, {"name": "房产经纪", "change_pct": 3.98}, {"name": "物业管理", "change_pct": 1.61}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "AI大模型/智能体", "change_pct": 0.69}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 11, "hot_rank_chg": 133, "stock_cnt": 5779, "price": "13.97", "change": "5.91", "market_id": "33", "circulate_market_value": "48586686000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 12, "hot_rank_chg": 34, "stock_cnt": 5779, "price": "5.18", "change": "4.22", "market_id": "33", "circulate_market_value": "13740212000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.47}, {"name": "装修装饰", "change_pct": 0.41}, {"name": "装配式建筑", "change_pct": 0.49}, {"name": "航天", "change_pct": -0.8}, {"name": "旧改", "change_pct": 0.44}]}, {"code": "301171", "name": "易点天下", "hot_rank": 13, "hot_rank_chg": 331, "stock_cnt": 5779, "price": "38.28", "change": "11.12", "market_id": "33", "circulate_market_value": "19212145000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 14, "hot_rank_chg": 21, "stock_cnt": 5779, "price": "5.59", "change": "10.04", "market_id": "33", "circulate_market_value": "3973365300.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "AIGC影视", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.13}, {"name": "影视", "change_pct": 1.94}, {"name": "旅游", "change_pct": 1.44}, {"name": "虚拟数字人", "change_pct": 1.57}, {"name": "AI营销", "change_pct": 2.91}, {"name": "AI大模型/智能体", "change_pct": 0.69}, {"name": "短剧/互动影游", "change_pct": 2.04}, {"name": "IP经济/谷子经济", "change_pct": 1.48}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 16, "hot_rank_chg": 2, "stock_cnt": 5779, "price": "15.55", "change": "9.97", "market_id": "17", "circulate_market_value": "6911111100.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "AI漫剧"}, {"code": "605179", "name": "一鸣食品", "hot_rank": 17, "hot_rank_chg": 15, "stock_cnt": 5779, "price": "28.68", "change": "2.14", "market_id": "17", "circulate_market_value": "11500680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 18, "hot_rank_chg": 35, "stock_cnt": 5779, "price": "21.25", "change": "5.46", "market_id": "33", "circulate_market_value": "21711124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 19, "hot_rank_chg": 22, "stock_cnt": 5779, "price": "77.72", "change": "-9.99", "market_id": "33", "circulate_market_value": "114008685000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300468", "name": "四方精创", "hot_rank": 20, "hot_rank_chg": 303, "stock_cnt": 5779, "price": "27.50", "change": "14.58", "market_id": "33", "circulate_market_value": "14575035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 21, "hot_rank_chg": 10, "stock_cnt": 5779, "price": "17.11", "change": "-5.78", "market_id": "33", "circulate_market_value": "10027282500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 22, "hot_rank_chg": -12, "stock_cnt": 5779, "price": "36.46", "change": "-7.11", "market_id": "17", "circulate_market_value": "25207555000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 23, "hot_rank_chg": 59, "stock_cnt": 5779, "price": "4.81", "change": "2.78", "market_id": "33", "circulate_market_value": "28161573000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.42}, {"name": "人工智能", "change_pct": 0.13}, {"name": "云计算数据中心", "change_pct": -1.04}, {"name": "水利", "change_pct": 0.06}, {"name": "直播/短视频", "change_pct": 2.49}, {"name": "大数据", "change_pct": 0.58}, {"name": "园林", "change_pct": 0.18}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.85}, {"name": "数字经济", "change_pct": 0.8}, {"name": "腾讯概念股", "change_pct": 0.61}, {"name": "理想汽车概念股", "change_pct": -1.28}, {"name": "第三代半导体", "change_pct": -2.17}, {"name": "快手概念股", "change_pct": 2.24}, {"name": "IGBT", "change_pct": -1.91}, {"name": "虚拟数字人", "change_pct": 1.57}, {"name": "AIGC概念", "change_pct": 1.21}, {"name": "字节跳动概念股", "change_pct": 1.07}, {"name": "氮化镓", "change_pct": -1.9}, {"name": "AI营销", "change_pct": 2.91}, {"name": "AI大模型/智能体", "change_pct": 0.69}, {"name": "多模态", "change_pct": 0.89}, {"name": "液冷服务器", "change_pct": -2.97}, {"name": "小红书概念股", "change_pct": 2.1}, {"name": "区块链", "change_pct": 1.04}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 24, "hot_rank_chg": 2, "stock_cnt": 5779, "price": "62.22", "change": "-4.70", "market_id": "17", "circulate_market_value": "152665870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 25, "hot_rank_chg": -4, "stock_cnt": 5779, "price": "5.01", "change": "-2.72", "market_id": "17", "circulate_market_value": "7832215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.96}, {"name": "共享经济", "change_pct": 0.26}, {"name": "云计算数据中心", "change_pct": -1.04}, {"name": "旅游", "change_pct": 1.44}, {"name": "物业管理", "change_pct": 1.61}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 26, "hot_rank_chg": 26, "stock_cnt": 5779, "price": "35.27", "change": "-7.50", "market_id": "33", "circulate_market_value": "100874763000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 27, "hot_rank_chg": -10, "stock_cnt": 5779, "price": "11.88", "change": "-4.04", "market_id": "17", "circulate_market_value": "21254963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.37}, {"name": "纯碱", "change_pct": 0.22}, {"name": "食品", "change_pct": 1.31}, {"name": "土壤修复", "change_pct": -0.29}, {"name": "东数西算/算力", "change_pct": -0.59}, {"name": "OpenClaw概念", "change_pct": -0.43}, {"name": "DeepSeek概念股", "change_pct": 0.2}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 28, "hot_rank_chg": 10, "stock_cnt": 5779, "price": "40.18", "change": "-5.75", "market_id": "17", "circulate_market_value": "159578370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 29, "hot_rank_chg": 7, "stock_cnt": 5779, "price": "37.01", "change": "-6.66", "market_id": "33", "circulate_market_value": "28031933000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 30, "hot_rank_chg": -7, "stock_cnt": 5779, "price": "63.91", "change": "-6.69", "market_id": "33", "circulate_market_value": "72425374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 32, "hot_rank_chg": -16, "stock_cnt": 5779, "price": "21.32", "change": "-3.09", "market_id": "33", "circulate_market_value": "12218594700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 33, "hot_rank_chg": -22, "stock_cnt": 5779, "price": "530.30", "change": "-3.66", "market_id": "17", "circulate_market_value": "15955518000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 34, "hot_rank_chg": 186, "stock_cnt": 5779, "price": "11.18", "change": "10.04", "market_id": "17", "circulate_market_value": "7292445100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.13}, {"name": "蚂蚁集团概念股", "change_pct": 1.45}, {"name": "无人驾驶", "change_pct": -0.96}, {"name": "新零售", "change_pct": 1.0}, {"name": "移动支付", "change_pct": 0.68}, {"name": "京津冀", "change_pct": 0.6}, {"name": "北京城市规划", "change_pct": 1.08}, {"name": "国产芯片", "change_pct": -2.22}, {"name": "阿里巴巴概念股", "change_pct": 0.42}, {"name": "腾讯概念股", "change_pct": 0.61}, {"name": "物业管理", "change_pct": 1.61}, {"name": "字节跳动概念股", "change_pct": 1.07}, {"name": "国企改革", "change_pct": 0.38}, {"name": "数字人民币", "change_pct": 1.9}, {"name": "AI大模型/智能体", "change_pct": 0.69}]}, {"code": "600227", "name": "赤天化", "hot_rank": 35, "hot_rank_chg": 31, "stock_cnt": 5779, "price": "4.29", "change": "-2.94", "market_id": "17", "circulate_market_value": "5480903200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.63}, {"name": "化肥", "change_pct": 0.02}, {"name": "保健品", "change_pct": 0.27}, {"name": "民营医院", "change_pct": -0.3}, {"name": "医药", "change_pct": -0.43}, {"name": "煤化工", "change_pct": -0.37}, {"name": "食品", "change_pct": 1.31}, {"name": "大农业", "change_pct": 1.41}, {"name": "干细胞", "change_pct": -0.62}, {"name": "阿尔茨海默病", "change_pct": -0.22}]}, {"code": "002384", "name": "东山精密", "hot_rank": 36, "hot_rank_chg": 62, "stock_cnt": 5779, "price": "178.67", "change": "-0.27", "market_id": "33", "circulate_market_value": "247694100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003005", "name": "竞业达", "hot_rank": 37, "hot_rank_chg": -8, "stock_cnt": 5779, "price": "18.48", "change": "-9.98", "market_id": "33", "circulate_market_value": "2479917600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 38, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "814.00", "change": "0.12", "market_id": "33", "circulate_market_value": "903488720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 39, "hot_rank_chg": 19, "stock_cnt": 5779, "price": "67.36", "change": "-5.49", "market_id": "17", "circulate_market_value": "120534965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 40, "hot_rank_chg": 175, "stock_cnt": 5779, "price": "13.09", "change": "3.72", "market_id": "17", "circulate_market_value": "54589139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 41, "hot_rank_chg": 19, "stock_cnt": 5779, "price": "11.94", "change": "1.19", "market_id": "17", "circulate_market_value": "4591498800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.48}, {"name": "股权转让", "change_pct": -0.48}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "新疆概念", "change_pct": 0.98}, {"name": "医药", "change_pct": -0.43}, {"name": "流感", "change_pct": -0.32}, {"name": "国资入股", "change_pct": -0.15}, {"name": "减肥药", "change_pct": -0.49}]}, {"code": "600693", "name": "东百集团", "hot_rank": 42, "hot_rank_chg": -23, "stock_cnt": 5779, "price": "10.93", "change": "-1.00", "market_id": "17", "circulate_market_value": "9497653900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.12}, {"name": "快递物流", "change_pct": 0.52}, {"name": "新零售", "change_pct": 1.0}, {"name": "福建自贸/海西概念", "change_pct": 1.84}, {"name": "旅游", "change_pct": 1.44}, {"name": "阿里巴巴概念股", "change_pct": 0.42}, {"name": "物业管理", "change_pct": 1.61}, {"name": "免税店概念", "change_pct": 1.26}, {"name": "自贸区", "change_pct": 1.15}]}, {"code": "002059", "name": "云南旅游", "hot_rank": 43, "hot_rank_chg": -13, "stock_cnt": 5779, "price": "5.67", "change": "-1.90", "market_id": "33", "circulate_market_value": "5615529700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.29}, {"name": "旅游", "change_pct": 1.44}, {"name": "虚拟数字人", "change_pct": 1.57}, {"name": "国企改革", "change_pct": 0.38}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 44, "hot_rank_chg": -19, "stock_cnt": 5779, "price": "5.21", "change": "-7.79", "market_id": "33", "circulate_market_value": "5920644000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.96}, {"name": "锂电池", "change_pct": -1.7}, {"name": "石墨烯", "change_pct": -1.06}, {"name": "新能源整车", "change_pct": 0.26}, {"name": "云计算数据中心", "change_pct": -1.04}, {"name": "汽车整车", "change_pct": 0.69}, {"name": "新能源汽车", "change_pct": -1.2}, {"name": "白色家电", "change_pct": -0.65}, {"name": "家电", "change_pct": -0.7}, {"name": "汽车热管理", "change_pct": -1.19}, {"name": "热泵", "change_pct": -1.54}, {"name": "轮边电机", "change_pct": -1.12}, {"name": "超级电容", "change_pct": -1.53}, {"name": "液冷服务器", "change_pct": -2.97}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 45, "hot_rank_chg": 6, "stock_cnt": 5779, "price": "9.02", "change": "-0.77", "market_id": "17", "circulate_market_value": "4323466200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.07}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "医药商业", "change_pct": 0.86}, {"name": "医药", "change_pct": -0.43}, {"name": "流感", "change_pct": -0.32}]}, {"code": "000636", "name": "风华高科", "hot_rank": 46, "hot_rank_chg": -1, "stock_cnt": 5779, "price": "48.41", "change": "-4.37", "market_id": "33", "circulate_market_value": "55549989000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002909", "name": "集泰股份", "hot_rank": 47, "hot_rank_chg": -32, "stock_cnt": 5779, "price": "7.21", "change": "-9.99", "market_id": "33", "circulate_market_value": "2742881400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.15}, {"name": "有机硅", "change_pct": -2.05}, {"name": "装修装饰", "change_pct": 0.41}, {"name": "装配式建筑", "change_pct": 0.49}, {"name": "光伏", "change_pct": -0.86}, {"name": "船舶", "change_pct": 2.28}, {"name": "固态电池", "change_pct": -1.76}, {"name": "新型城镇化", "change_pct": 0.37}, {"name": "旧改", "change_pct": 0.44}, {"name": "飞行汽车/eVTOL", "change_pct": -0.92}, {"name": "液冷服务器", "change_pct": -2.97}]}, {"code": "001258", "name": "立新能源", "hot_rank": 48, "hot_rank_chg": 43, "stock_cnt": 5779, "price": "12.29", "change": "5.86", "market_id": "33", "circulate_market_value": "11470522600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.25}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "新疆国企改革", "change_pct": 1.46}, {"name": "新疆概念", "change_pct": 0.98}, {"name": "光伏", "change_pct": -0.86}, {"name": "风电", "change_pct": -0.21}, {"name": "储能", "change_pct": -0.57}, {"name": "国企改革", "change_pct": 0.38}]}, {"code": "300364", "name": "中文在线", "hot_rank": 49, "hot_rank_chg": 122, "stock_cnt": 5779, "price": "25.71", "change": "2.55", "market_id": "33", "circulate_market_value": "16996512000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 50, "hot_rank_chg": 13, "stock_cnt": 5779, "price": "9.52", "change": "-10.02", "market_id": "33", "circulate_market_value": "4196625000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.34}, {"name": "锂电池", "change_pct": -1.7}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "新能源汽车", "change_pct": -1.2}, {"name": "两轮车", "change_pct": -0.36}, {"name": "珠宝饰品", "change_pct": -0.05}]}, {"code": "600272", "name": "开开实业", "hot_rank": 51, "hot_rank_chg": 138, "stock_cnt": 5779, "price": "17.57", "change": "7.66", "market_id": "17", "circulate_market_value": "2811200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 52, "hot_rank_chg": -5, "stock_cnt": 5779, "price": "32.80", "change": "-5.42", "market_id": "33", "circulate_market_value": "35454120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 53, "hot_rank_chg": 40, "stock_cnt": 5779, "price": "17.95", "change": "4.91", "market_id": "33", "circulate_market_value": "4419778800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 54, "hot_rank_chg": -42, "stock_cnt": 5779, "price": "13.23", "change": "-4.75", "market_id": "17", "circulate_market_value": "66004718000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 55, "hot_rank_chg": -22, "stock_cnt": 5779, "price": "54.80", "change": "-1.35", "market_id": "17", "circulate_market_value": "246766540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 56, "hot_rank_chg": -36, "stock_cnt": 5779, "price": "5.12", "change": "-10.02", "market_id": "17", "circulate_market_value": "6238269600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.96}, {"name": "煤炭", "change_pct": -0.36}, {"name": "有色金属", "change_pct": -1.56}, {"name": "国企改革", "change_pct": 0.38}, {"name": "河南国企改革", "change_pct": -1.23}]}, {"code": "601138", "name": "工业富联", "hot_rank": 57, "hot_rank_chg": 14, "stock_cnt": 5779, "price": "63.69", "change": "0.78", "market_id": "17", "circulate_market_value": "1263870240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 58, "hot_rank_chg": 163, "stock_cnt": 5779, "price": "66.15", "change": "9.99", "market_id": "33", "circulate_market_value": "18257326000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控股股东拟变更"}, {"code": "600183", "name": "生益科技", "hot_rank": 59, "hot_rank_chg": 14, "stock_cnt": 5779, "price": "137.50", "change": "-3.97", "market_id": "17", "circulate_market_value": "331615470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 60, "hot_rank_chg": -46, "stock_cnt": 5779, "price": "13.15", "change": "-7.78", "market_id": "17", "circulate_market_value": "5503368600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 61, "hot_rank_chg": -48, "stock_cnt": 5779, "price": "14.32", "change": "1.78", "market_id": "33", "circulate_market_value": "9452704400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600967", "name": "内蒙一机", "hot_rank": 62, "hot_rank_chg": -19, "stock_cnt": 5779, "price": "13.66", "change": "0.74", "market_id": "17", "circulate_market_value": "23246515000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 63, "hot_rank_chg": 55, "stock_cnt": 5779, "price": "13.64", "change": "0.52", "market_id": "17", "circulate_market_value": "20087721000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 64, "hot_rank_chg": 407, "stock_cnt": 5779, "price": "14.10", "change": "2.62", "market_id": "33", "circulate_market_value": "8226479400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600108", "name": "亚盛集团", "hot_rank": 65, "hot_rank_chg": 27, "stock_cnt": 5779, "price": "4.36", "change": "10.10", "market_id": "17", "circulate_market_value": "8488549900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "玉米制种", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.12}, {"name": "农业种植", "change_pct": 2.53}, {"name": "土地流转", "change_pct": 1.84}, {"name": "农垦", "change_pct": 3.46}, {"name": "乡村振兴", "change_pct": 0.88}, {"name": "食品", "change_pct": 1.31}, {"name": "甜味剂/代糖", "change_pct": 1.05}, {"name": "大农业", "change_pct": 1.41}, {"name": "蜜雪冰城概念股", "change_pct": 0.65}]}, {"code": "600371", "name": "万向德农", "hot_rank": 66, "hot_rank_chg": -11, "stock_cnt": 5779, "price": "13.70", "change": "4.74", "market_id": "17", "circulate_market_value": "4008318600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 67, "hot_rank_chg": 155, "stock_cnt": 5779, "price": "8.66", "change": "10.04", "market_id": "17", "circulate_market_value": "4570766000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.53}, {"name": "棉花", "change_pct": 1.6}, {"name": "大农业", "change_pct": 1.41}, {"name": "供销社", "change_pct": 1.16}]}, {"code": "000725", "name": "京东方A", "hot_rank": 68, "hot_rank_chg": -3, "stock_cnt": 5779, "price": "5.61", "change": "-1.75", "market_id": "33", "circulate_market_value": "198409620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.42}, {"name": "手机产业链", "change_pct": -2.13}, {"name": "超高清视频", "change_pct": -0.7}, {"name": "苹果产业链", "change_pct": -2.71}, {"name": "电竞", "change_pct": 1.8}, {"name": "半导体", "change_pct": -2.76}, {"name": "人工智能", "change_pct": 0.13}, {"name": "互联网医疗", "change_pct": 0.36}, {"name": "VR&AR", "change_pct": -1.04}, {"name": "OLED", "change_pct": -1.98}, {"name": "京津冀", "change_pct": 0.6}, {"name": "物联网", "change_pct": -0.64}, {"name": "指纹识别", "change_pct": -1.86}, {"name": "汽车零部件", "change_pct": -1.11}, {"name": "白马股", "change_pct": 0.29}, {"name": "智能制造", "change_pct": -1.08}, {"name": "小米概念股", "change_pct": -1.85}, {"name": "国产芯片", "change_pct": -2.22}, {"name": "液晶面板/LCD", "change_pct": -2.24}, {"name": "全息概念", "change_pct": -0.19}, {"name": "理想汽车概念股", "change_pct": -1.28}, {"name": "MicroLED", "change_pct": -1.86}, {"name": "钙钛矿电池", "change_pct": -0.19}, {"name": "智能手表", "change_pct": -1.98}, {"name": "MiniLED", "change_pct": -1.62}, {"name": "传感器", "change_pct": -1.54}, {"name": "大硅片", "change_pct": -3.74}, {"name": "AI PC", "change_pct": -2.16}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "回购", "change_pct": -0.06}, {"name": "光电共封装CPO", "change_pct": -2.7}, {"name": "智能眼镜/MR头显", "change_pct": -1.65}, {"name": "玻璃基板封装", "change_pct": -2.52}]}, {"code": "003018", "name": "金富科技", "hot_rank": 69, "hot_rank_chg": -45, "stock_cnt": 5779, "price": "55.50", "change": "-1.65", "market_id": "33", "circulate_market_value": "15790391000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 70, "hot_rank_chg": 6, "stock_cnt": 5779, "price": "45.75", "change": "-5.92", "market_id": "17", "circulate_market_value": "49069865000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 71, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "9.72", "change": "-10.00", "market_id": "33", "circulate_market_value": "2765161200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -0.31}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "教育", "change_pct": 0.51}, {"name": "阿里巴巴概念股", "change_pct": 0.42}, {"name": "职业教育", "change_pct": 0.57}, {"name": "在线教育", "change_pct": -0.16}, {"name": "华为鸿蒙", "change_pct": 0.54}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "智谱AI", "change_pct": 0.83}]}, {"code": "002017", "name": "东信和平", "hot_rank": 72, "hot_rank_chg": 170, "stock_cnt": 5779, "price": "17.06", "change": "3.58", "market_id": "33", "circulate_market_value": "9897741000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 73, "hot_rank_chg": -11, "stock_cnt": 5779, "price": "3.55", "change": "-3.79", "market_id": "17", "circulate_market_value": "7853768100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.31}, {"name": "云计算数据中心", "change_pct": -1.04}, {"name": "光通信", "change_pct": -2.72}, {"name": "林业", "change_pct": 1.88}, {"name": "军民融合", "change_pct": -0.62}, {"name": "军工", "change_pct": -0.33}, {"name": "人造肉", "change_pct": 2.35}]}, {"code": "300418", "name": "昆仑万维", "hot_rank": 74, "hot_rank_chg": 194, "stock_cnt": 5779, "price": "45.43", "change": "2.64", "market_id": "33", "circulate_market_value": "53355613000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 75, "hot_rank_chg": -26, "stock_cnt": 5779, "price": "34.81", "change": "0.35", "market_id": "17", "circulate_market_value": "25210391000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 76, "hot_rank_chg": 34, "stock_cnt": 5779, "price": "7.05", "change": "0.28", "market_id": "33", "circulate_market_value": "6248065500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.53}, {"name": "土地流转", "change_pct": 1.84}, {"name": "海南概念", "change_pct": 1.34}, {"name": "自由贸易港", "change_pct": 1.08}, {"name": "海南自由贸易港", "change_pct": 1.58}, {"name": "大农业", "change_pct": 1.41}, {"name": "水产养殖", "change_pct": 3.77}, {"name": "自贸区", "change_pct": 1.15}]}, {"code": "300773", "name": "拉卡拉", "hot_rank": 77, "hot_rank_chg": 460, "stock_cnt": 5779, "price": "16.90", "change": "6.42", "market_id": "33", "circulate_market_value": "17383521000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 78, "hot_rank_chg": 257, "stock_cnt": 5779, "price": "96.34", "change": "8.96", "market_id": "17", "circulate_market_value": "94606906000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 79, "hot_rank_chg": 11, "stock_cnt": 5779, "price": "17.17", "change": "0.59", "market_id": "33", "circulate_market_value": "27872484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 80, "hot_rank_chg": 46, "stock_cnt": 5779, "price": "64.61", "change": "-5.78", "market_id": "33", "circulate_market_value": "46857534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 81, "hot_rank_chg": 7, "stock_cnt": 5779, "price": "17.22", "change": "-4.23", "market_id": "17", "circulate_market_value": "36016356000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002328", "name": "新朋股份", "hot_rank": 82, "hot_rank_chg": -54, "stock_cnt": 5779, "price": "9.96", "change": "-1.39", "market_id": "33", "circulate_market_value": "5684031500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.23}, {"name": "特斯拉", "change_pct": -1.61}, {"name": "云计算数据中心", "change_pct": -1.04}, {"name": "汽车零部件", "change_pct": -1.11}, {"name": "新能源汽车", "change_pct": -1.2}, {"name": "储能", "change_pct": -0.57}, {"name": "新能源车零部件", "change_pct": -1.23}, {"name": "液冷服务器", "change_pct": -2.97}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 83, "hot_rank_chg": 94, "stock_cnt": 5779, "price": "24.00", "change": "3.05", "market_id": "17", "circulate_market_value": "10533524000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 84, "hot_rank_chg": 3, "stock_cnt": 5779, "price": "371.88", "change": "-2.95", "market_id": "17", "circulate_market_value": "249426730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002721", "name": "金一文化", "hot_rank": 85, "hot_rank_chg": 169, "stock_cnt": 5779, "price": "3.15", "change": "4.65", "market_id": "33", "circulate_market_value": "8377042600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.19}, {"name": "金融科技", "change_pct": 1.87}, {"name": "人工智能", "change_pct": 0.13}, {"name": "珠宝饰品", "change_pct": -0.05}, {"name": "数字人民币", "change_pct": 1.9}, {"name": "AI大模型/智能体", "change_pct": 0.69}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 86, "hot_rank_chg": 8, "stock_cnt": 5779, "price": "3.94", "change": "-7.29", "market_id": "33", "circulate_market_value": "8284544700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.07}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "维生素", "change_pct": 0.94}, {"name": "基因测序", "change_pct": -0.37}, {"name": "民营医院", "change_pct": -0.3}, {"name": "医药", "change_pct": -0.43}, {"name": "化学原料药", "change_pct": -0.53}, {"name": "PD-1抑制剂", "change_pct": -0.78}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 87, "hot_rank_chg": -26, "stock_cnt": 5779, "price": "27.58", "change": "-8.16", "market_id": "17", "circulate_market_value": "6681806600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000712", "name": "锦龙股份", "hot_rank": 88, "hot_rank_chg": -20, "stock_cnt": 5779, "price": "12.35", "change": "-2.22", "market_id": "33", "circulate_market_value": "11062316400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.48}, {"name": "期货概念", "change_pct": 1.26}, {"name": "券商", "change_pct": 0.76}, {"name": "大金融", "change_pct": 0.83}, {"name": "东数西算/算力", "change_pct": -0.59}]}, {"code": "603270", "name": "金帝股份", "hot_rank": 89, "hot_rank_chg": -52, "stock_cnt": 5779, "price": "33.37", "change": "-4.52", "market_id": "17", "circulate_market_value": "2359815200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 90, "hot_rank_chg": -56, "stock_cnt": 5779, "price": "11.22", "change": "-3.19", "market_id": "33", "circulate_market_value": "26058177000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -1.35}, {"name": "有色 · 铜", "change_pct": -1.71}, {"name": "有色 · 锑", "change_pct": -2.37}, {"name": "湖南国企改革", "change_pct": 0.71}, {"name": "有色 · 锌", "change_pct": -2.07}, {"name": "有色金属", "change_pct": -1.56}, {"name": "国企改革", "change_pct": 0.38}, {"name": "白银", "change_pct": -2.39}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 91, "hot_rank_chg": -22, "stock_cnt": 5779, "price": "5.77", "change": "-1.03", "market_id": "33", "circulate_market_value": "6709629000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 1.94}, {"name": "新疆概念", "change_pct": 0.98}, {"name": "阿里巴巴概念股", "change_pct": 0.42}, {"name": "腾讯概念股", "change_pct": 0.61}, {"name": "短剧/互动影游", "change_pct": 2.04}, {"name": "IP经济/谷子经济", "change_pct": 1.48}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 92, "hot_rank_chg": -7, "stock_cnt": 5779, "price": "20.38", "change": "-3.23", "market_id": "33", "circulate_market_value": "23976434000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 93, "hot_rank_chg": 106, "stock_cnt": 5779, "price": "248.70", "change": "-0.04", "market_id": "33", "circulate_market_value": "270682110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 94, "hot_rank_chg": -13, "stock_cnt": 5779, "price": "108.35", "change": "-2.92", "market_id": "17", "circulate_market_value": "39084380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 95, "hot_rank_chg": 11, "stock_cnt": 5779, "price": "45.22", "change": "-4.30", "market_id": "17", "circulate_market_value": "38281142000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002980", "name": "华盛昌", "hot_rank": 96, "hot_rank_chg": -13, "stock_cnt": 5779, "price": "107.36", "change": "0.66", "market_id": "33", "circulate_market_value": "10874152900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 97, "hot_rank_chg": -43, "stock_cnt": 5779, "price": "25.11", "change": "-9.55", "market_id": "33", "circulate_market_value": "5249952700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 98, "hot_rank_chg": 36, "stock_cnt": 5779, "price": "386.00", "change": "0.32", "market_id": "33", "circulate_market_value": "484137860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 99, "hot_rank_chg": 18, "stock_cnt": 5779, "price": "31.70", "change": "-3.68", "market_id": "17", "circulate_market_value": "108190504000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600657", "name": "信达地产", "hot_rank": 100, "hot_rank_chg": -23, "stock_cnt": 5779, "price": "3.50", "change": "4.17", "market_id": "17", "circulate_market_value": "9981575100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 1.04}, {"name": "房地产", "change_pct": 0.93}, {"name": "京津冀", "change_pct": 0.6}, {"name": "破净股", "change_pct": 0.68}, {"name": "物业管理", "change_pct": 1.61}]}];
const LIMIT_UP_POOL = [{"code": "002862", "name": "实丰文化", "price": 16.04, "change_pct": 10.01, "reason": "公司表示将根据疯狂动物城IP的独特属性、目标受众需求及市场趋势，开发合适的IP潮流产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.27, "first_limit_up": 1788498921, "break_limit_up_times": 0}, {"code": "002124", "name": "天邦食品", "price": 2.42, "change_pct": 10.0, "reason": "公司养猪采用公司+家庭农场养殖模式，同时也是国内规模最大膨化水产饲料企业之一", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 14.64, "first_limit_up": 1788486888, "break_limit_up_times": 1}, {"code": "605580", "name": "恒盛能源", "price": 22.47, "change_pct": 9.99, "reason": "公司采用MPCVD技术生产20×20毫米金刚石，导热性能优于陶瓷，目标切入高功率芯片、GPU散热市场", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 1.29, "first_limit_up": 1788485100, "break_limit_up_times": 0}, {"code": "002827", "name": "高争民爆", "price": 66.15, "change_pct": 9.99, "reason": "西藏民爆行业龙头；公司34%股份拟无偿划转，控股股东或变更为地矿集团", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.5, "first_limit_up": 1788485439, "break_limit_up_times": 4}, {"code": "603390", "name": "通达电气", "price": 11.11, "change_pct": 10.0, "reason": "公司与厦门金龙联手打造自动驾驶物流车", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.88, "first_limit_up": 1788485898, "break_limit_up_times": 1}, {"code": "600354", "name": "敦煌种业", "price": 8.66, "change_pct": 10.04, "reason": "国家育繁推一体化企业；上半年净利润同比预增157.1%左右，因“公司持续优化产品营销策略，依托精准市场定位与多渠道推广举措，自有核心优势品种销量稳步攀升”", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 27.93, "first_limit_up": 1788486668, "break_limit_up_times": 41}, {"code": "000735", "name": "罗 牛 山", "price": 6.13, "change_pct": 10.05, "reason": "海南本地股，主营畜禽养殖为主", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 6.91, "first_limit_up": 1788491436, "break_limit_up_times": 0}, {"code": "000876", "name": "新 希 望", "price": 7.7, "change_pct": 10.0, "reason": "公司拥有全国最大的聚落式生猪繁育体系；同时也是国内第一大父母代鸭苗，第二大商品代鸡苗、鸭苗供应商", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 4.02, "first_limit_up": 1788498291, "break_limit_up_times": 21}, {"code": "002564", "name": "天沃科技", "price": 4.93, "change_pct": 10.04, "reason": "公司主营压力容器设备制造和电力工程EPC业务，与上海微电子均为上海国资委下属公司", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.9, "first_limit_up": 1788486612, "break_limit_up_times": 0}, {"code": "600802", "name": "福建水泥", "price": 5.21, "change_pct": 9.92, "reason": "公司为福建省水泥行业的传统龙头企业，是福建地区产能规模最大的水泥制造企业", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 5.37, "first_limit_up": 1788489187, "break_limit_up_times": 0}, {"code": "002856", "name": "*ST美芝", "price": 20.35, "change_pct": 10.0, "reason": "公司主要业务为建筑装饰工程的设计与施工", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.55, "first_limit_up": 1788485415, "break_limit_up_times": 0}, {"code": "003040", "name": "楚天龙", "price": 21.12, "change_pct": 10.0, "reason": "国内较早从事数字人民币相关技术研究与产品开发的企业之一", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 10.8, "first_limit_up": 1788485400, "break_limit_up_times": 0}, {"code": "603151", "name": "邦基科技", "price": 18.13, "change_pct": 10.01, "reason": "公司拟收购北溪农牧等公司股权，本次交易的标的公司以生猪养殖及销售为主", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 3.36, "first_limit_up": 1788488165, "break_limit_up_times": 0}, {"code": "000892", "name": "欢瑞世纪", "price": 5.59, "change_pct": 10.04, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 43.85, "first_limit_up": 1788486870, "break_limit_up_times": 25}, {"code": "000428", "name": "华天酒店", "price": 4.69, "change_pct": 10.09, "reason": "湖南省旅游酒店支柱企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.09, "first_limit_up": 1788487137, "break_limit_up_times": 0}, {"code": "000702", "name": "正虹科技", "price": 6.26, "change_pct": 10.02, "reason": "公司生猪养殖业务主要采用自繁自养和育肥猪“公司+农户”代养的运营模式", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 5.23, "first_limit_up": 1788491913, "break_limit_up_times": 0}, {"code": "002868", "name": "绿康生化", "price": 25.83, "change_pct": 10.01, "reason": "公司地处福建，专注动物保健品领域，核心产品为兽药原料药、制剂、益生菌以及绿色微生物功能添加剂等", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 12.93, "first_limit_up": 1788490290, "break_limit_up_times": 1}, {"code": "002949", "name": "华阳国际", "price": 14.07, "change_pct": 10.01, "reason": "1、公司是国家高新技术企业、建筑设计行业“国家住宅产业化基地”、首批“装配式建筑产业基地”、首批“全过程工程咨询试点单位”；\n2、公司涉及到低空经济的业务主要是关于航空小镇的相关规划设计", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 12.15, "first_limit_up": 1788498189, "break_limit_up_times": 14}, {"code": "603123", "name": "翠微股份", "price": 11.18, "change_pct": 10.04, "reason": "子公司海科融通已与央行数字货币研究所指定运营银行系统对接，在多商业场景中支持数字人民币支付收款，为商户提供数字人民币收单服务", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 4.87, "first_limit_up": 1788485400, "break_limit_up_times": 0}, {"code": "605398", "name": "新炬网络", "price": 26.66, "change_pct": 9.98, "reason": "公司是一家以提供IT数据中心运维服务及运维产品为主的多云全栈智能运维服务商，下属子公司新炬技术AIOPS智慧运维平台软件V4.0与华为云GaussDB、华为云公有云平台（鲲鹏）完成相互兼容性测试认证", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 2.52, "first_limit_up": 1788485100, "break_limit_up_times": 0}, {"code": "000592", "name": "平潭发展", "price": 7.49, "change_pct": 9.99, "reason": "A股唯一一家注册在平潭岛的上市公司，公司拥有90万亩林地，受益林业碳汇交易发展", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 17.8, "first_limit_up": 1788489783, "break_limit_up_times": 1}, {"code": "600059", "name": "古越龙山", "price": 9.19, "change_pct": 10.06, "reason": "公司拥有中国最大的黄酒生产基地，有少量的白酒生产和销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.91, "first_limit_up": 1788486430, "break_limit_up_times": 59}, {"code": "601949", "name": "中国出版", "price": 5.83, "change_pct": 10.0, "reason": "公司旗下中华书局打造先贤数字人智能体及先贤智能阅读空间", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1788486520, "break_limit_up_times": 0}, {"code": "600108", "name": "亚盛集团", "price": 4.36, "change_pct": 10.1, "reason": "我国当前最大规模的农艺种植基地；公司主营啤酒花、苜蓿牧草、马铃薯、制种玉米、大麦、食葵、果蔬等作物规模化种植", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 11.69, "first_limit_up": 1788485783, "break_limit_up_times": 1}, {"code": "603696", "name": "安记食品", "price": 15.13, "change_pct": 10.04, "reason": "公司位于福建泉州市，系复合调味品小龙头，主要产品包括复合调味粉、天然提取物调味料、香辛料、酱类、风味清汤等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 14.22, "first_limit_up": 1788489904, "break_limit_up_times": 32}, {"code": "600302", "name": "ST标准", "price": 6.93, "change_pct": 10.0, "reason": "公司在自动化领域围绕汽车内饰研发机械臂3D机器人缝纫项目，已完成试缝测试并具备交付能力；控股股东已完成公开征集转让方案制定，拟协议转让不超过27.77%股份，正推进审批，控制权变更预期升温", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.53, "first_limit_up": 1788499423, "break_limit_up_times": 3}, {"code": "600506", "name": "统一股份", "price": 18.46, "change_pct": 10.01, "reason": "国产润滑油龙头品牌，依托润滑油领域技术积淀切入液冷赛道；控股股东及一致行动人拟转让28.09%公司股份", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 13.66, "first_limit_up": 1788488362, "break_limit_up_times": 2}, {"code": "605577", "name": "龙版传媒", "price": 15.55, "change_pct": 9.97, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 5, "turnover_ratio": 7.27, "first_limit_up": 1788485469, "break_limit_up_times": 2}, {"code": "001366", "name": "播恩集团", "price": 14.36, "change_pct": 10.04, "reason": "公司的主要产品为猪用饲料，拟1.25亿元收购3家饲料公司", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 9.39, "first_limit_up": 1788486288, "break_limit_up_times": 0}, {"code": "002403", "name": "爱仕达", "price": 11.28, "change_pct": 10.05, "reason": "公司与智元机器人签署战略合作协议", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 4.09, "first_limit_up": 1788485493, "break_limit_up_times": 0}, {"code": "600975", "name": "新五丰", "price": 5.59, "change_pct": 10.04, "reason": "湖南省国资委旗下，国内活大猪主要出口商之一，湖南唯一国有上市猪企", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 4.61, "first_limit_up": 1788498013, "break_limit_up_times": 46}, {"code": "000798", "name": "中水渔业", "price": 10.14, "change_pct": 9.98, "reason": "中国农业发展集团旗下，主营远洋水产品，有金枪饺子、金枪鱼圈等预制食品\n", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.9, "first_limit_up": 1788486510, "break_limit_up_times": 0}, {"code": "600698", "name": "湖南天雁", "price": 7.91, "change_pct": 10.01, "reason": "公司间接控股股东将变更为兵器装备集团汽车业务分立的中央企业", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 9.44, "first_limit_up": 1788486942, "break_limit_up_times": 8}, {"code": "001316", "name": "润贝航科", "price": 30.18, "change_pct": 9.99, "reason": "控股子公司杭州轻云将主要负责航空、航天先进复合材料的研发、生产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.24, "first_limit_up": 1788492591, "break_limit_up_times": 3}, {"code": "002702", "name": "海欣食品", "price": 5.61, "change_pct": 10.0, "reason": "公司位于福建省福州市，为国内鱼丸龙头，主营速冻鱼糜，速冻肉制品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.23, "first_limit_up": 1788489747, "break_limit_up_times": 0}, {"code": "001222", "name": "源飞宠物", "price": 16.1, "change_pct": 9.97, "reason": "公司主要产品包括宠物牵引用具、宠物注塑玩具等宠物用品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.24, "first_limit_up": 1788501042, "break_limit_up_times": 0}, {"code": "600865", "name": "百大集团", "price": 11.35, "change_pct": 9.98, "reason": "公司主要从事百货零售、酒店服务、物业管理业务", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 15.3, "first_limit_up": 1788501174, "break_limit_up_times": 2}, {"code": "603122", "name": "合富中国", "price": 13.56, "change_pct": 9.98, "reason": "公司为唯一一家海峡两岸市场“双上市”的医疗企业，其母公司合富医疗控股在台湾上市，公司实际控制人为台湾企业家王琼芝，在两岸医疗流通领域有深度合作", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 8.57, "first_limit_up": 1788489392, "break_limit_up_times": 2}, {"code": "603162", "name": "海通发展", "price": 14.64, "change_pct": 9.99, "reason": "公司地处福建福州，主要从事国内沿海以及国际远洋的干散货运输业务，公司运营的航线遍布30余个国家和地区的200余个港口，为客户提供矿石、煤炭、化肥等多种货物的海上运输", "plates": ["福建自贸/海西概念"], "limit_up_days": 2, "turnover_ratio": 19.81, "first_limit_up": 1788485920, "break_limit_up_times": 14}, {"code": "601579", "name": "会稽山", "price": 24.07, "change_pct": 10.01, "reason": "国内龙头黄酒供应商；公司在生产黄酒的同时，也利用黄酒生产过程产生的醪糟作为原料，通过蒸馏生产糟烧白酒，并一直有销售糟烧白酒等副产品的传统", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1788485689, "break_limit_up_times": 1}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};