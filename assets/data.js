const UPDATE_TIME = "2026-11-23 17:11";
const THS_HOT = [
  {
    "name": "英伟达概念",
    "rise": 4.61,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "智能汽车ETF",
    "code": "886048"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 4.54,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续336天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人形机器人",
    "rise": 5.91,
    "rate": 0,
    "tag": "52家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": 4.61,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续159天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "机器人概念",
    "rise": 4.4,
    "rate": 0,
    "tag": "68家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "芯片概念",
    "rise": 3.77,
    "rate": 0,
    "tag": "29家涨停",
    "hotTag": "连续46天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "存储芯片",
    "rise": 2.98,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续289天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人工智能",
    "rise": 3.39,
    "rate": 0,
    "tag": "29家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "商业航天",
    "rise": 3.68,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续265天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "光刻胶",
    "rise": 4.16,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "算力租赁",
    "rise": 2.48,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "黄金概念",
    "rise": 3.13,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "AI应用",
    "rise": 3.51,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "猪肉",
    "rise": 2.81,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "短剧游戏",
    "rise": 5.44,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "减速器",
    "rise": 6.26,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "先进封装",
    "rise": 3.36,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "东数西算(算力)",
    "rise": 3.08,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "创新药",
    "rise": 2.63,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续166天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI视频",
    "rise": 5.68,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  }
];
const THS_EVENTS = [
  {
    "title": "工信部发布5项人形机器人标准 评测与训练数据同步立规 ",
    "desc": "",
    "heat": 1300732,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "N华晟",
        "code": "920067",
        "chg": 66.241497
      }
    ]
  },
  {
    "title": "《GTA6》带火主机游戏馆，PS5 Pro涨至1.6万元：工作日一座难求，有商家称营业额翻倍",
    "desc": "",
    "heat": 792590,
    "direction": "游戏",
    "themes": [
      "游戏",
      "手机游戏",
      "网络游戏"
    ],
    "stocks": [
      {
        "name": "芒果超媒",
        "code": "300413",
        "chg": 15.211786
      }
    ]
  },
  {
    "title": "广电总局持续扶持精品微短剧 推动行业向品质竞争转变",
    "desc": "",
    "heat": 725398,
    "direction": "AI影视",
    "themes": [
      "影视院线",
      "AI影视制作",
      "AI短剧"
    ],
    "stocks": [
      {
        "name": "果麦文化",
        "code": "301052",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "全球电子协会警告 PCB 或短缺至 2027 年上半年，风险堪比 2021 年芯片短缺",
    "desc": "",
    "heat": 593648,
    "direction": "PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB"
    ],
    "stocks": [
      {
        "name": "逸豪新材",
        "code": "301176",
        "chg": 15.266272
      }
    ]
  },
  {
    "title": "Neuralink 展示脑机接口新成果：瘫痪患者成功在《GTA 6》里自由驾驶、射击",
    "desc": "",
    "heat": 527783,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "汉威科技",
        "code": "300007",
        "chg": 20.013298
      }
    ]
  },
  {
    "title": "重大突破！量子计算机“高速内存”全球首次真机实现",
    "desc": "",
    "heat": 249964,
    "direction": "量子科技",
    "themes": [
      "量子计算",
      "量子通信",
      "量子测量",
      "国仪量子",
      "量子科技"
    ],
    "stocks": [
      {
        "name": "腾景科技",
        "code": "688195",
        "chg": 13.263675
      }
    ]
  },
  {
    "title": "监管层发布一揽子稳市举措：调整融资保证金比例 引入做市商制度 推出一揽子降费措施 稳定资本市场系列举措集中发布",
    "desc": "",
    "heat": 192024,
    "direction": "大金融",
    "themes": [
      "互联网金融",
      "银行",
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "汉威科技",
        "code": "300007",
        "chg": 20.013298
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "电子鼻",
    "change": "+8.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+7.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物理AI",
    "change": "+7.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人形机器人",
    "change": "+7.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+6.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机器人数据采集",
    "change": "+6.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "强势人气股",
    "change": "+6.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+6.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+6.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "矢量网络分析仪VNA",
    "change": "+6.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+6.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业母机",
    "change": "+5.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能音箱",
    "change": "+5.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+5.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+5.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+5.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+5.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光雷达",
    "change": "+5.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+5.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PEEK材料",
    "change": "+5.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "11.07",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4992864600.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "6",
    "change_reason": "四足机器人",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 2.98
      },
      {
        "name": "手游",
        "change_pct": 4.58
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "游戏",
        "change_pct": 5.29
      },
      {
        "name": "物联网",
        "change_pct": 3.32
      },
      {
        "name": "机器人",
        "change_pct": 5.33
      },
      {
        "name": "无人机",
        "change_pct": 3.23
      },
      {
        "name": "国产芯片",
        "change_pct": 3.41
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 3.29
      },
      {
        "name": "低空经济",
        "change_pct": 3.06
      },
      {
        "name": "无人物流车",
        "change_pct": 4.34
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "2.85",
    "change": "4.01",
    "market_id": "17",
    "circulate_market_value": "8157760900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 4.58
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "游戏",
        "change_pct": 5.29
      },
      {
        "name": "影视",
        "change_pct": 6.62
      },
      {
        "name": "低价股",
        "change_pct": 0.52
      },
      {
        "name": "国企改革",
        "change_pct": 1.33
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      },
      {
        "name": "AI视频",
        "change_pct": 5.36
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 3,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "9.15",
    "change": "-2.66",
    "market_id": "17",
    "circulate_market_value": "2466951700000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": 1.99
      },
      {
        "name": "高股息",
        "change_pct": -0.61
      },
      {
        "name": "银行",
        "change_pct": -0.21
      },
      {
        "name": "白马股",
        "change_pct": -0.19
      },
      {
        "name": "破净股",
        "change_pct": 0.27
      },
      {
        "name": "大金融",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 8,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "10.02",
    "change": "7.86",
    "market_id": "17",
    "circulate_market_value": "8146742000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "充电桩",
        "change_pct": 2.58
      },
      {
        "name": "光伏",
        "change_pct": 2.54
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.32
      },
      {
        "name": "家电",
        "change_pct": 2.8
      },
      {
        "name": "储能",
        "change_pct": 2.36
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 3.26
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 2.91
      },
      {
        "name": "厨卫家电",
        "change_pct": 1.78
      },
      {
        "name": "华为产业链",
        "change_pct": 3.48
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 9,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "3.65",
    "change": "9.94",
    "market_id": "17",
    "circulate_market_value": "4235980000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "影视业务",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "纺织服装",
        "change_pct": 2.29
      },
      {
        "name": "浙江国企改革",
        "change_pct": 2.45
      },
      {
        "name": "影视",
        "change_pct": 6.62
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 1.33
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 11,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "5.31",
    "change": "9.94",
    "market_id": "17",
    "circulate_market_value": "4698179200.00",
    "change_type": "1",
    "change_section": "15",
    "change_days": "8",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 2.48
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.6
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "信托",
        "change_pct": -0.35
      },
      {
        "name": "民营医院",
        "change_pct": 2.53
      },
      {
        "name": "汽车销售",
        "change_pct": 1.53
      },
      {
        "name": "社区团购",
        "change_pct": 3.19
      },
      {
        "name": "大金融",
        "change_pct": -0.02
      },
      {
        "name": "餐饮",
        "change_pct": 0.45
      },
      {
        "name": "首发经济",
        "change_pct": 3.08
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 13,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "9.60",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "5438191600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中国航展",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "石墨烯",
        "change_pct": 3.34
      },
      {
        "name": "军民融合",
        "change_pct": 3.43
      },
      {
        "name": "物联网",
        "change_pct": 3.32
      },
      {
        "name": "LED",
        "change_pct": 3.04
      },
      {
        "name": "军工",
        "change_pct": 3.08
      },
      {
        "name": "智慧灯杆",
        "change_pct": 2.44
      },
      {
        "name": "海洋经济",
        "change_pct": 2.48
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 14,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "11.80",
    "change": "6.12",
    "market_id": "17",
    "circulate_market_value": "12329676600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 2.78
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.29
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 4.18
      },
      {
        "name": "国企改革",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "601288",
    "name": "农业银行",
    "hot_rank": 15,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "7.83",
    "change": "0.77",
    "market_id": "17",
    "circulate_market_value": "2499682200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": 1.99
      },
      {
        "name": "高股息",
        "change_pct": -0.61
      },
      {
        "name": "银行",
        "change_pct": -0.21
      },
      {
        "name": "破净股",
        "change_pct": 0.27
      },
      {
        "name": "大金融",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 16,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "7.37",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3491023700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI影视",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 4.58
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "VR&AR",
        "change_pct": 4.68
      },
      {
        "name": "游戏",
        "change_pct": 5.29
      },
      {
        "name": "影视",
        "change_pct": 6.62
      },
      {
        "name": "直播/短视频",
        "change_pct": 5.17
      },
      {
        "name": "动漫",
        "change_pct": 6.21
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.25
      },
      {
        "name": "传媒",
        "change_pct": 4.18
      },
      {
        "name": "元宇宙",
        "change_pct": 4.78
      },
      {
        "name": "AIGC概念",
        "change_pct": 4.63
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 4.26
      }
    ]
  },
  {
    "code": "601939",
    "name": "建设银行",
    "hot_rank": 20,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "12.39",
    "change": "-2.90",
    "market_id": "17",
    "circulate_market_value": "118865418000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": -0.61
      },
      {
        "name": "银行",
        "change_pct": -0.21
      },
      {
        "name": "破净股",
        "change_pct": 0.27
      },
      {
        "name": "大金融",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 21,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "3.53",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "7809521500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光模块",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 1.61
      },
      {
        "name": "云计算数据中心",
        "change_pct": 3.23
      },
      {
        "name": "光通信",
        "change_pct": 4.78
      },
      {
        "name": "林业",
        "change_pct": 1.51
      },
      {
        "name": "军民融合",
        "change_pct": 3.43
      },
      {
        "name": "军工",
        "change_pct": 3.08
      },
      {
        "name": "人造肉",
        "change_pct": 2.54
      }
    ]
  },
  {
    "code": "601857",
    "name": "中国石油",
    "hot_rank": 23,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "12.53",
    "change": "-5.22",
    "market_id": "17",
    "circulate_market_value": "2028883600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": -0.61
      },
      {
        "name": "央企改革",
        "change_pct": 1.1
      },
      {
        "name": "一带一路",
        "change_pct": 1.5
      },
      {
        "name": "石油化工",
        "change_pct": 0.86
      },
      {
        "name": "天然气",
        "change_pct": 0.98
      },
      {
        "name": "油气改革",
        "change_pct": 0.46
      },
      {
        "name": "可燃冰",
        "change_pct": 0.75
      },
      {
        "name": "中字头",
        "change_pct": -0.52
      },
      {
        "name": "页岩气",
        "change_pct": 1.65
      },
      {
        "name": "丁辛醇",
        "change_pct": 0.35
      },
      {
        "name": "国企改革",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 24,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "5.13",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "3925171900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.68
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.6
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "医药商业",
        "change_pct": 1.88
      },
      {
        "name": "保健品",
        "change_pct": 1.12
      },
      {
        "name": "民营医院",
        "change_pct": 2.53
      },
      {
        "name": "医药",
        "change_pct": 2.78
      },
      {
        "name": "食品",
        "change_pct": 1.51
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.8
      },
      {
        "name": "口腔",
        "change_pct": 2.13
      },
      {
        "name": "医美",
        "change_pct": 1.95
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.33
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 29,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "11.50",
    "change": "7.58",
    "market_id": "17",
    "circulate_market_value": "3364647000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.12
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "转基因",
        "change_pct": 3.49
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.09
      },
      {
        "name": "大农业",
        "change_pct": 2.4
      }
    ]
  },
  {
    "code": "601988",
    "name": "中国银行",
    "hot_rank": 32,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "7.39",
    "change": "-2.12",
    "market_id": "17",
    "circulate_market_value": "1557557200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": -0.61
      },
      {
        "name": "银行",
        "change_pct": -0.21
      },
      {
        "name": "中字头",
        "change_pct": -0.52
      },
      {
        "name": "破净股",
        "change_pct": 0.27
      },
      {
        "name": "大金融",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 34,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "11.36",
    "change": "5.09",
    "market_id": "33",
    "circulate_market_value": "39509288000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.49
      },
      {
        "name": "人工智能",
        "change_pct": 3.75
      },
      {
        "name": "VR&AR",
        "change_pct": 4.68
      },
      {
        "name": "直播/短视频",
        "change_pct": 5.17
      },
      {
        "name": "大数据",
        "change_pct": 2.78
      },
      {
        "name": "教育",
        "change_pct": 2.93
      },
      {
        "name": "百度概念股",
        "change_pct": 3.89
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.23
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.25
      },
      {
        "name": "传媒",
        "change_pct": 4.18
      },
      {
        "name": "快手概念股",
        "change_pct": 4.68
      },
      {
        "name": "NFT",
        "change_pct": 4.91
      },
      {
        "name": "元宇宙",
        "change_pct": 4.78
      },
      {
        "name": "虚拟数字人",
        "change_pct": 4.97
      },
      {
        "name": "web3.0",
        "change_pct": 3.6
      },
      {
        "name": "AIGC概念",
        "change_pct": 4.63
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.87
      },
      {
        "name": "职业教育",
        "change_pct": 3.51
      },
      {
        "name": "云游戏",
        "change_pct": 4.58
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.53
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 3.29
      },
      {
        "name": "AI营销",
        "change_pct": 4.66
      },
      {
        "name": "词元概念/Token",
        "change_pct": 2.96
      },
      {
        "name": "华为产业链",
        "change_pct": 3.48
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      },
      {
        "name": "AI视频",
        "change_pct": 5.36
      },
      {
        "name": "智谱AI",
        "change_pct": 4.17
      },
      {
        "name": "小红书概念股",
        "change_pct": 4.56
      },
      {
        "name": "区块链",
        "change_pct": 2.32
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 37,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "4.13",
    "change": "6.44",
    "market_id": "33",
    "circulate_market_value": "3556601400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 2.57
      },
      {
        "name": "一带一路",
        "change_pct": 1.5
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.41
      },
      {
        "name": "光伏",
        "change_pct": 2.54
      },
      {
        "name": "有色金属",
        "change_pct": 2.67
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.32
      },
      {
        "name": "新能源车零部件",
        "change_pct": 4.67
      },
      {
        "name": "自贸区",
        "change_pct": 1.42
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.85
      }
    ]
  },
  {
    "code": "002749",
    "name": "国光股份",
    "hot_rank": 41,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "9.25",
    "change": "6.44",
    "market_id": "33",
    "circulate_market_value": "5034931300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "草甘膦",
        "change_pct": 1.72
      },
      {
        "name": "化肥",
        "change_pct": 1.52
      },
      {
        "name": "农药",
        "change_pct": 1.9
      },
      {
        "name": "大农业",
        "change_pct": 2.4
      },
      {
        "name": "虫害防治",
        "change_pct": 1.36
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 43,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "2.38",
    "change": "5.78",
    "market_id": "17",
    "circulate_market_value": "8305695800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 4.62
      },
      {
        "name": "车联网/车路云",
        "change_pct": 2.98
      },
      {
        "name": "超高清视频",
        "change_pct": 3.92
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "人工智能",
        "change_pct": 3.75
      },
      {
        "name": "云计算数据中心",
        "change_pct": 3.23
      },
      {
        "name": "影视",
        "change_pct": 6.62
      },
      {
        "name": "智慧城市",
        "change_pct": 2.67
      },
      {
        "name": "国产芯片",
        "change_pct": 3.41
      },
      {
        "name": "振兴东北",
        "change_pct": 2.11
      },
      {
        "name": "传媒",
        "change_pct": 4.18
      },
      {
        "name": "低价股",
        "change_pct": 0.52
      },
      {
        "name": "国企改革",
        "change_pct": 1.33
      },
      {
        "name": "在线教育",
        "change_pct": 3.61
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.86
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 4.26
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 44,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "5.43",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "6314261000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI影视",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "影视",
        "change_pct": 6.62
      },
      {
        "name": "新疆概念",
        "change_pct": 1.86
      },
      {
        "name": "动漫",
        "change_pct": 6.21
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.23
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.25
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      },
      {
        "name": "AI视频",
        "change_pct": 5.36
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 4.26
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 47,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "3.70",
    "change": "4.82",
    "market_id": "33",
    "circulate_market_value": "3218258000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 2.42
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 3.29
      },
      {
        "name": "华为产业链",
        "change_pct": 3.48
      },
      {
        "name": "Kimi概念",
        "change_pct": 4.48
      },
      {
        "name": "智谱AI",
        "change_pct": 4.17
      },
      {
        "name": "区块链",
        "change_pct": 2.32
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 49,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "8.93",
    "change": "3.48",
    "market_id": "33",
    "circulate_market_value": "6116178400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.6
      },
      {
        "name": "核电",
        "change_pct": 2.28
      },
      {
        "name": "充电桩",
        "change_pct": 2.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": 3.23
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.32
      },
      {
        "name": "储能",
        "change_pct": 2.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.23
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 2.51
      },
      {
        "name": "智能电网",
        "change_pct": 2.79
      },
      {
        "name": "核聚变",
        "change_pct": 2.93
      }
    ]
  },
  {
    "code": "600360",
    "name": "华微电子",
    "hot_rank": 54,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "9.08",
    "change": "0.78",
    "market_id": "17",
    "circulate_market_value": "8719481400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 3.48
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.25
      },
      {
        "name": "充电桩",
        "change_pct": 2.58
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.32
      },
      {
        "name": "国产芯片",
        "change_pct": 3.41
      },
      {
        "name": "第三代半导体",
        "change_pct": 2.54
      },
      {
        "name": "IGBT",
        "change_pct": 2.71
      },
      {
        "name": "氮化镓",
        "change_pct": 2.48
      },
      {
        "name": "碳化硅",
        "change_pct": 2.2
      },
      {
        "name": "华为产业链",
        "change_pct": 3.48
      }
    ]
  },
  {
    "code": "605018",
    "name": "长华集团",
    "hot_rank": 56,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "11.29",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "5307042800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "汽车零部件",
        "change_pct": 4.45
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.32
      },
      {
        "name": "新能源车零部件",
        "change_pct": 4.67
      },
      {
        "name": "人形机器人",
        "change_pct": 7.11
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 4.48
      }
    ]
  },
  {
    "code": "002036",
    "name": "联创电子",
    "hot_rank": 57,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "4.87",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "5140128100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器视觉",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": 3.1
      },
      {
        "name": "折叠屏",
        "change_pct": 4.37
      },
      {
        "name": "手机产业链",
        "change_pct": 4.25
      },
      {
        "name": "超高清视频",
        "change_pct": 3.92
      },
      {
        "name": "无线充电",
        "change_pct": 4.37
      },
      {
        "name": "特斯拉",
        "change_pct": 4.7
      },
      {
        "name": "无人驾驶",
        "change_pct": 3.91
      },
      {
        "name": "VR&AR",
        "change_pct": 4.68
      },
      {
        "name": "OLED",
        "change_pct": 3.19
      },
      {
        "name": "3D感应",
        "change_pct": 4.35
      },
      {
        "name": "人脸识别",
        "change_pct": 2.92
      },
      {
        "name": "3D玻璃",
        "change_pct": 3.43
      },
      {
        "name": "指纹识别",
        "change_pct": 4.17
      },
      {
        "name": "手势识别",
        "change_pct": 4.32
      },
      {
        "name": "虹膜识别",
        "change_pct": 3.48
      },
      {
        "name": "机器视觉",
        "change_pct": 4.97
      },
      {
        "name": "无人机",
        "change_pct": 3.23
      },
      {
        "name": "智能制造",
        "change_pct": 4.36
      },
      {
        "name": "国产芯片",
        "change_pct": 3.41
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 3.61
      },
      {
        "name": "激光雷达",
        "change_pct": 5.63
      },
      {
        "name": "元宇宙",
        "change_pct": 4.78
      },
      {
        "name": "电子后视镜",
        "change_pct": 4.09
      },
      {
        "name": "无线耳机",
        "change_pct": 4.44
      },
      {
        "name": "云游戏",
        "change_pct": 4.58
      },
      {
        "name": "AI PC",
        "change_pct": 4.28
      },
      {
        "name": "华为产业链",
        "change_pct": 3.48
      },
      {
        "name": "毫米波雷达",
        "change_pct": 4.49
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.79
      },
      {
        "name": "英伟达概念",
        "change_pct": 4.98
      },
      {
        "name": "人形机器人",
        "change_pct": 7.11
      },
      {
        "name": "智能座舱",
        "change_pct": 4.59
      },
      {
        "name": "AI手机",
        "change_pct": 4.16
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 62,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "6.53",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "12178990900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器人关节",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": 2.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": 3.23
      },
      {
        "name": "军民融合",
        "change_pct": 3.43
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 2.2
      },
      {
        "name": "风电",
        "change_pct": 2.39
      },
      {
        "name": "军工",
        "change_pct": 3.08
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.32
      },
      {
        "name": "新能源车零部件",
        "change_pct": 4.67
      },
      {
        "name": "轮边电机",
        "change_pct": 4.9
      },
      {
        "name": "人形机器人",
        "change_pct": 7.11
      }
    ]
  },
  {
    "code": "603993",
    "name": "洛阳钼业",
    "hot_rank": 64,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "12.14",
    "change": "3.67",
    "market_id": "17",
    "circulate_market_value": "211974620000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 5.08
      },
      {
        "name": "磷化工",
        "change_pct": 1.05
      },
      {
        "name": "有色 · 钴",
        "change_pct": 3.38
      },
      {
        "name": "有色 · 铜",
        "change_pct": 3.02
      },
      {
        "name": "有色 · 钨",
        "change_pct": 3.23
      },
      {
        "name": "有色 · 钼",
        "change_pct": 3.44
      },
      {
        "name": "有色金属",
        "change_pct": 2.67
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 3.45
      },
      {
        "name": "有色 · 镍",
        "change_pct": 2.61
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 68,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "6.57",
    "change": "7.35",
    "market_id": "17",
    "circulate_market_value": "3467659700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.12
      },
      {
        "name": "转基因",
        "change_pct": 3.49
      },
      {
        "name": "棉花",
        "change_pct": 2.67
      },
      {
        "name": "大农业",
        "change_pct": 2.4
      },
      {
        "name": "供销社",
        "change_pct": 2.24
      }
    ]
  },
  {
    "code": "001318",
    "name": "阳光乳业",
    "hot_rank": 73,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "11.86",
    "change": "7.04",
    "market_id": "33",
    "circulate_market_value": "3352347600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.87
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.6
      },
      {
        "name": "食品",
        "change_pct": 1.51
      },
      {
        "name": "大农业",
        "change_pct": 2.4
      },
      {
        "name": "饮料",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 74,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "2.15",
    "change": "1.90",
    "market_id": "17",
    "circulate_market_value": "2831407100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.49
      },
      {
        "name": "长三角一体化",
        "change_pct": 0.44
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "装修装饰",
        "change_pct": 1.87
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.45
      },
      {
        "name": "建筑节能",
        "change_pct": 2.46
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.57
      },
      {
        "name": "低价股",
        "change_pct": 0.52
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 4.31
      },
      {
        "name": "旧改",
        "change_pct": 1.71
      }
    ]
  },
  {
    "code": "000001",
    "name": "平安银行",
    "hot_rank": 75,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "12.34",
    "change": "0.98",
    "market_id": "33",
    "circulate_market_value": "239466150000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "银行",
        "change_pct": -0.21
      },
      {
        "name": "破净股",
        "change_pct": 0.27
      },
      {
        "name": "大金融",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "002045",
    "name": "国光电器",
    "hot_rank": 78,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "8.83",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4960984300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI眼镜",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": 4.25
      },
      {
        "name": "电子烟",
        "change_pct": 4.14
      },
      {
        "name": "苹果产业链",
        "change_pct": 4.62
      },
      {
        "name": "锂电池",
        "change_pct": 3.52
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "VR&AR",
        "change_pct": 4.68
      },
      {
        "name": "智能音箱",
        "change_pct": 5.75
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.32
      },
      {
        "name": "黑色家电",
        "change_pct": 2.62
      },
      {
        "name": "家电",
        "change_pct": 2.8
      },
      {
        "name": "固态电池",
        "change_pct": 3.48
      },
      {
        "name": "NFT",
        "change_pct": 4.91
      },
      {
        "name": "元宇宙",
        "change_pct": 4.78
      },
      {
        "name": "无线耳机",
        "change_pct": 4.44
      },
      {
        "name": "智能手表",
        "change_pct": 4.66
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 2.91
      },
      {
        "name": "华为产业链",
        "change_pct": 3.48
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.79
      }
    ]
  },
  {
    "code": "601012",
    "name": "隆基绿能",
    "hot_rank": 82,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "10.97",
    "change": "0.73",
    "market_id": "17",
    "circulate_market_value": "83131343000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": 2.2
      },
      {
        "name": "光伏",
        "change_pct": 2.54
      },
      {
        "name": "白马股",
        "change_pct": -0.19
      },
      {
        "name": "储能",
        "change_pct": 2.36
      },
      {
        "name": "碳中和",
        "change_pct": 1.26
      },
      {
        "name": "颗粒硅",
        "change_pct": 2.41
      },
      {
        "name": "BIPV概念",
        "change_pct": 1.38
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 3.25
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 2.99
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 89,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "9.70",
    "change": "6.48",
    "market_id": "17",
    "circulate_market_value": "6460200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 2.48
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 90,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "8.97",
    "change": "7.94",
    "market_id": "33",
    "circulate_market_value": "10176797800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 3.5
      },
      {
        "name": "足球",
        "change_pct": 2.91
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.78
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.71
      },
      {
        "name": "传媒",
        "change_pct": 4.18
      },
      {
        "name": "AIGC概念",
        "change_pct": 4.63
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.87
      },
      {
        "name": "国企改革",
        "change_pct": 1.33
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.53
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      },
      {
        "name": "AI视频",
        "change_pct": 5.36
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 92,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "10.25",
    "change": "5.24",
    "market_id": "33",
    "circulate_market_value": "21340519000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 6.62
      },
      {
        "name": "足球",
        "change_pct": 2.91
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.23
      },
      {
        "name": "拼多多概念股",
        "change_pct": 4.15
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.53
      },
      {
        "name": "盲盒",
        "change_pct": 4.37
      },
      {
        "name": "华为产业链",
        "change_pct": 3.48
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 4.26
      },
      {
        "name": "首发经济",
        "change_pct": 3.08
      },
      {
        "name": "小红书概念股",
        "change_pct": 4.56
      },
      {
        "name": "服务消费",
        "change_pct": 2.32
      }
    ]
  },
  {
    "code": "000521",
    "name": "长虹美菱",
    "hot_rank": 97,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "4.27",
    "change": "-1.16",
    "market_id": "33",
    "circulate_market_value": "3737483400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": 2.99
      },
      {
        "name": "一带一路",
        "change_pct": 1.5
      },
      {
        "name": "强势人气股",
        "change_pct": 6.42
      },
      {
        "name": "人工智能",
        "change_pct": 3.75
      },
      {
        "name": "冷链",
        "change_pct": 2.15
      },
      {
        "name": "小家电",
        "change_pct": 2.25
      },
      {
        "name": "白色家电",
        "change_pct": 3.05
      },
      {
        "name": "家电",
        "change_pct": 2.8
      },
      {
        "name": "破净股",
        "change_pct": 0.27
      },
      {
        "name": "智能制造",
        "change_pct": 4.36
      },
      {
        "name": "工业互联网",
        "change_pct": 3.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 3.26
      },
      {
        "name": "垃圾分类",
        "change_pct": 1.46
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.33
      },
      {
        "name": "C2M",
        "change_pct": 2.49
      },
      {
        "name": "生物安全",
        "change_pct": 1.84
      },
      {
        "name": "出海龙头",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "300654",
    "name": "世纪天鸿",
    "hot_rank": 98,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "10.96",
    "change": "15.98",
    "market_id": "33",
    "circulate_market_value": "3865025200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 3.75
      },
      {
        "name": "教育",
        "change_pct": 2.93
      },
      {
        "name": "传媒",
        "change_pct": 4.18
      },
      {
        "name": "教育信息化",
        "change_pct": 3.31
      },
      {
        "name": "在线教育",
        "change_pct": 3.61
      },
      {
        "name": "知识付费",
        "change_pct": 3.76
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.05
      }
    ]
  },
  {
    "code": "300133",
    "name": "华策影视",
    "hot_rank": 99,
    "hot_rank_chg": 0,
    "stock_cnt": 5794,
    "price": "8.18",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "13611523000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "VR&AR",
        "change_pct": 4.68
      },
      {
        "name": "影视",
        "change_pct": 6.62
      },
      {
        "name": "大数据",
        "change_pct": 2.78
      },
      {
        "name": "教育",
        "change_pct": 2.93
      },
      {
        "name": "动漫",
        "change_pct": 6.21
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": 3.37
      },
      {
        "name": "百度概念股",
        "change_pct": 3.89
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.25
      },
      {
        "name": "NFT",
        "change_pct": 4.91
      },
      {
        "name": "元宇宙",
        "change_pct": 4.78
      },
      {
        "name": "虚拟数字人",
        "change_pct": 4.97
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.54
      },
      {
        "name": "AIGC概念",
        "change_pct": 4.63
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.53
      },
      {
        "name": "华为产业链",
        "change_pct": 3.48
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.79
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.02
      },
      {
        "name": "多模态",
        "change_pct": 4.84
      },
      {
        "name": "AI视频",
        "change_pct": 5.36
      },
      {
        "name": "Kimi概念",
        "change_pct": 4.48
      },
      {
        "name": "智谱AI",
        "change_pct": 4.17
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 4.26
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002148", "name": "北纬科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "11.07", "change": "10.04", "market_id": "33", "circulate_market_value": "4992864600.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "四足机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 2.98}, {"name": "手游", "change_pct": 4.58}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "游戏", "change_pct": 5.29}, {"name": "物联网", "change_pct": 3.32}, {"name": "机器人", "change_pct": 5.33}, {"name": "无人机", "change_pct": 3.23}, {"name": "国产芯片", "change_pct": 3.41}, {"name": "5G消息/RCS", "change_pct": 3.29}, {"name": "低空经济", "change_pct": 3.06}, {"name": "无人物流车", "change_pct": 4.34}]}, {"code": "600715", "name": "文投控股", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "2.85", "change": "4.01", "market_id": "17", "circulate_market_value": "8157760900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 4.58}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "游戏", "change_pct": 5.29}, {"name": "影视", "change_pct": 6.62}, {"name": "低价股", "change_pct": 0.52}, {"name": "国企改革", "change_pct": 1.33}, {"name": "短剧/互动影游", "change_pct": 6.02}, {"name": "AI视频", "change_pct": 5.36}]}, {"code": "601398", "name": "工商银行", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "9.15", "change": "-2.66", "market_id": "17", "circulate_market_value": "2466951700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": 1.99}, {"name": "高股息", "change_pct": -0.61}, {"name": "银行", "change_pct": -0.21}, {"name": "白马股", "change_pct": -0.19}, {"name": "破净股", "change_pct": 0.27}, {"name": "大金融", "change_pct": -0.02}]}, {"code": "002384", "name": "东山精密", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "71.47", "change": "5.72", "market_id": "33", "circulate_market_value": "99080414000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "417.20", "change": "6.10", "market_id": "33", "circulate_market_value": "463065720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "70.99", "change": "20.00", "market_id": "33", "circulate_market_value": "5585068300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "具身智能数据"}, {"code": "605488", "name": "福莱新材", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "46.77", "change": "9.99", "market_id": "17", "circulate_market_value": "13959846000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "柔性传感"}, {"code": "603366", "name": "日出东方", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "10.02", "change": "7.86", "market_id": "17", "circulate_market_value": "8146742000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 6.42}, {"name": "充电桩", "change_pct": 2.58}, {"name": "光伏", "change_pct": 2.54}, {"name": "新能源汽车", "change_pct": 3.32}, {"name": "家电", "change_pct": 2.8}, {"name": "储能", "change_pct": 2.36}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 3.26}, {"name": "华为鸿蒙", "change_pct": 2.91}, {"name": "厨卫家电", "change_pct": 1.78}, {"name": "华为产业链", "change_pct": 3.48}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "3.65", "change": "9.94", "market_id": "17", "circulate_market_value": "4235980000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "影视业务", "xgb_concepts": [{"name": "强势人气股", "change_pct": 6.42}, {"name": "纺织服装", "change_pct": 2.29}, {"name": "浙江国企改革", "change_pct": 2.45}, {"name": "影视", "change_pct": 6.62}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 1.33}, {"name": "短剧/互动影游", "change_pct": 6.02}]}, {"code": "600206", "name": "有研新材", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "40.00", "change": "5.71", "market_id": "17", "circulate_market_value": "33862133000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "5.31", "change": "9.94", "market_id": "17", "circulate_market_value": "4698179200.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": 2.48}, {"name": "优化生育（三孩）", "change_pct": 2.6}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "信托", "change_pct": -0.35}, {"name": "民营医院", "change_pct": 2.53}, {"name": "汽车销售", "change_pct": 1.53}, {"name": "社区团购", "change_pct": 3.19}, {"name": "大金融", "change_pct": -0.02}, {"name": "餐饮", "change_pct": 0.45}, {"name": "首发经济", "change_pct": 3.08}]}, {"code": "603893", "name": "瑞芯微", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "202.88", "change": "10.00", "market_id": "17", "circulate_market_value": "85888994000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "端侧AI"}, {"code": "002724", "name": "海洋王", "hot_rank": 13, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "9.60", "change": "9.97", "market_id": "33", "circulate_market_value": "5438191600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中国航展", "xgb_concepts": [{"name": "强势人气股", "change_pct": 6.42}, {"name": "石墨烯", "change_pct": 3.34}, {"name": "军民融合", "change_pct": 3.43}, {"name": "物联网", "change_pct": 3.32}, {"name": "LED", "change_pct": 3.04}, {"name": "军工", "change_pct": 3.08}, {"name": "智慧灯杆", "change_pct": 2.44}, {"name": "海洋经济", "change_pct": 2.48}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 14, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "11.80", "change": "6.12", "market_id": "17", "circulate_market_value": "12329676600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 2.78}, {"name": "上海国企改革", "change_pct": 1.29}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 4.18}, {"name": "国企改革", "change_pct": 1.33}]}, {"code": "601288", "name": "农业银行", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "7.83", "change": "0.77", "market_id": "17", "circulate_market_value": "2499682200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": 1.99}, {"name": "高股息", "change_pct": -0.61}, {"name": "银行", "change_pct": -0.21}, {"name": "破净股", "change_pct": 0.27}, {"name": "大金融", "change_pct": -0.02}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "7.37", "change": "10.00", "market_id": "33", "circulate_market_value": "3491023700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI影视", "xgb_concepts": [{"name": "手游", "change_pct": 4.58}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "VR&AR", "change_pct": 4.68}, {"name": "游戏", "change_pct": 5.29}, {"name": "影视", "change_pct": 6.62}, {"name": "直播/短视频", "change_pct": 5.17}, {"name": "动漫", "change_pct": 6.21}, {"name": "腾讯概念股", "change_pct": 3.25}, {"name": "传媒", "change_pct": 4.18}, {"name": "元宇宙", "change_pct": 4.78}, {"name": "AIGC概念", "change_pct": 4.63}, {"name": "短剧/互动影游", "change_pct": 6.02}, {"name": "IP经济/谷子经济", "change_pct": 4.26}]}, {"code": "000636", "name": "风华高科", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "28.99", "change": "10.02", "market_id": "33", "circulate_market_value": "33265734000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "603629", "name": "利通电子", "hot_rank": 18, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "63.17", "change": "0.94", "market_id": "17", "circulate_market_value": "22786897000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 19, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "28.17", "change": "5.62", "market_id": "17", "circulate_market_value": "26215845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601939", "name": "建设银行", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "12.39", "change": "-2.90", "market_id": "17", "circulate_market_value": "118865418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": -0.61}, {"name": "银行", "change_pct": -0.21}, {"name": "破净股", "change_pct": 0.27}, {"name": "大金融", "change_pct": -0.02}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 21, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "3.53", "change": "9.97", "market_id": "17", "circulate_market_value": "7809521500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块", "xgb_concepts": [{"name": "造纸", "change_pct": 1.61}, {"name": "云计算数据中心", "change_pct": 3.23}, {"name": "光通信", "change_pct": 4.78}, {"name": "林业", "change_pct": 1.51}, {"name": "军民融合", "change_pct": 3.43}, {"name": "军工", "change_pct": 3.08}, {"name": "人造肉", "change_pct": 2.54}]}, {"code": "300829", "name": "金丹科技", "hot_rank": 22, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "31.44", "change": "20.00", "market_id": "33", "circulate_market_value": "5427639100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "涨价"}, {"code": "601857", "name": "中国石油", "hot_rank": 23, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "12.53", "change": "-5.22", "market_id": "17", "circulate_market_value": "2028883600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": -0.61}, {"name": "央企改革", "change_pct": 1.1}, {"name": "一带一路", "change_pct": 1.5}, {"name": "石油化工", "change_pct": 0.86}, {"name": "天然气", "change_pct": 0.98}, {"name": "油气改革", "change_pct": 0.46}, {"name": "可燃冰", "change_pct": 0.75}, {"name": "中字头", "change_pct": -0.52}, {"name": "页岩气", "change_pct": 1.65}, {"name": "丁辛醇", "change_pct": 0.35}, {"name": "国企改革", "change_pct": 1.33}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 24, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "5.13", "change": "10.09", "market_id": "33", "circulate_market_value": "3925171900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "中药", "change_pct": 1.68}, {"name": "优化生育（三孩）", "change_pct": 2.6}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "医药商业", "change_pct": 1.88}, {"name": "保健品", "change_pct": 1.12}, {"name": "民营医院", "change_pct": 2.53}, {"name": "医药", "change_pct": 2.78}, {"name": "食品", "change_pct": 1.51}, {"name": "辅助生殖", "change_pct": 2.8}, {"name": "口腔", "change_pct": 2.13}, {"name": "医美", "change_pct": 1.95}, {"name": "新冠病毒防治", "change_pct": 2.33}]}, {"code": "688981", "name": "中芯国际", "hot_rank": 25, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "121.60", "change": "-3.08", "market_id": "17", "circulate_market_value": "243272220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "31.35", "change": "-0.85", "market_id": "17", "circulate_market_value": "767078630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603103", "name": "横店影视", "hot_rank": 27, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "16.60", "change": "10.01", "market_id": "17", "circulate_market_value": "10527720000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧"}, {"code": "300085", "name": "银之杰", "hot_rank": 28, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "28.76", "change": "6.52", "market_id": "33", "circulate_market_value": "17161297000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 29, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "11.50", "change": "7.58", "market_id": "17", "circulate_market_value": "3364647000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.12}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "转基因", "change_pct": 3.49}, {"name": "乡村振兴", "change_pct": 2.09}, {"name": "大农业", "change_pct": 2.4}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "227.39", "change": "-0.17", "market_id": "33", "circulate_market_value": "968821720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 31, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "65.94", "change": "2.23", "market_id": "33", "circulate_market_value": "43059315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601988", "name": "中国银行", "hot_rank": 32, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "7.39", "change": "-2.12", "market_id": "17", "circulate_market_value": "1557557200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": -0.61}, {"name": "银行", "change_pct": -0.21}, {"name": "中字头", "change_pct": -0.52}, {"name": "破净股", "change_pct": 0.27}, {"name": "大金融", "change_pct": -0.02}]}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 33, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "32.00", "change": "4.54", "market_id": "33", "circulate_market_value": "7801108400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 34, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "11.36", "change": "5.09", "market_id": "33", "circulate_market_value": "39509288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.49}, {"name": "人工智能", "change_pct": 3.75}, {"name": "VR&AR", "change_pct": 4.68}, {"name": "直播/短视频", "change_pct": 5.17}, {"name": "大数据", "change_pct": 2.78}, {"name": "教育", "change_pct": 2.93}, {"name": "百度概念股", "change_pct": 3.89}, {"name": "阿里巴巴概念股", "change_pct": 3.23}, {"name": "腾讯概念股", "change_pct": 3.25}, {"name": "传媒", "change_pct": 4.18}, {"name": "快手概念股", "change_pct": 4.68}, {"name": "NFT", "change_pct": 4.91}, {"name": "元宇宙", "change_pct": 4.78}, {"name": "虚拟数字人", "change_pct": 4.97}, {"name": "web3.0", "change_pct": 3.6}, {"name": "AIGC概念", "change_pct": 4.63}, {"name": "字节跳动概念股", "change_pct": 3.87}, {"name": "职业教育", "change_pct": 3.51}, {"name": "云游戏", "change_pct": 4.58}, {"name": "网红/MCN", "change_pct": 3.53}, {"name": "5G消息/RCS", "change_pct": 3.29}, {"name": "AI营销", "change_pct": 4.66}, {"name": "词元概念/Token", "change_pct": 2.96}, {"name": "华为产业链", "change_pct": 3.48}, {"name": "AI大模型/智能体", "change_pct": 3.05}, {"name": "短剧/互动影游", "change_pct": 6.02}, {"name": "AI视频", "change_pct": 5.36}, {"name": "智谱AI", "change_pct": 4.17}, {"name": "小红书概念股", "change_pct": 4.56}, {"name": "区块链", "change_pct": 2.32}]}, {"code": "001309", "name": "德明利", "hot_rank": 35, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "172.99", "change": "1.61", "market_id": "33", "circulate_market_value": "40206005000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 36, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "24.94", "change": "10.01", "market_id": "17", "circulate_market_value": "10946087100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧"}, {"code": "002578", "name": "闽发铝业", "hot_rank": 37, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "4.13", "change": "6.44", "market_id": "33", "circulate_market_value": "3556601400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 2.57}, {"name": "一带一路", "change_pct": 1.5}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "福建自贸/海西概念", "change_pct": 2.41}, {"name": "光伏", "change_pct": 2.54}, {"name": "有色金属", "change_pct": 2.67}, {"name": "新能源汽车", "change_pct": 3.32}, {"name": "新能源车零部件", "change_pct": 4.67}, {"name": "自贸区", "change_pct": 1.42}, {"name": "液冷服务器", "change_pct": 3.85}]}, {"code": "002009", "name": "天奇股份", "hot_rank": 38, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "14.59", "change": "10.03", "market_id": "33", "circulate_market_value": "5168234900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能数据"}, {"code": "002050", "name": "三花智控", "hot_rank": 39, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "33.88", "change": "7.90", "market_id": "33", "circulate_market_value": "125052604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300561", "name": "汇金科技", "hot_rank": 40, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "17.23", "change": "5.25", "market_id": "33", "circulate_market_value": "4153422000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002749", "name": "国光股份", "hot_rank": 41, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "9.25", "change": "6.44", "market_id": "33", "circulate_market_value": "5034931300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "草甘膦", "change_pct": 1.72}, {"name": "化肥", "change_pct": 1.52}, {"name": "农药", "change_pct": 1.9}, {"name": "大农业", "change_pct": 2.4}, {"name": "虫害防治", "change_pct": 1.36}]}, {"code": "603228", "name": "景旺电子", "hot_rank": 42, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "56.88", "change": "6.84", "market_id": "17", "circulate_market_value": "55862154000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601929", "name": "吉视传媒", "hot_rank": 43, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "2.38", "change": "5.78", "market_id": "17", "circulate_market_value": "8305695800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 4.62}, {"name": "车联网/车路云", "change_pct": 2.98}, {"name": "超高清视频", "change_pct": 3.92}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "人工智能", "change_pct": 3.75}, {"name": "云计算数据中心", "change_pct": 3.23}, {"name": "影视", "change_pct": 6.62}, {"name": "智慧城市", "change_pct": 2.67}, {"name": "国产芯片", "change_pct": 3.41}, {"name": "振兴东北", "change_pct": 2.11}, {"name": "传媒", "change_pct": 4.18}, {"name": "低价股", "change_pct": 0.52}, {"name": "国企改革", "change_pct": 1.33}, {"name": "在线教育", "change_pct": 3.61}, {"name": "医疗信息化", "change_pct": 2.86}, {"name": "AI大模型/智能体", "change_pct": 3.05}, {"name": "短剧/互动影游", "change_pct": 6.02}, {"name": "IP经济/谷子经济", "change_pct": 4.26}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 44, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "5.43", "change": "9.92", "market_id": "33", "circulate_market_value": "6314261000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI影视", "xgb_concepts": [{"name": "强势人气股", "change_pct": 6.42}, {"name": "影视", "change_pct": 6.62}, {"name": "新疆概念", "change_pct": 1.86}, {"name": "动漫", "change_pct": 6.21}, {"name": "阿里巴巴概念股", "change_pct": 3.23}, {"name": "腾讯概念股", "change_pct": 3.25}, {"name": "短剧/互动影游", "change_pct": 6.02}, {"name": "AI视频", "change_pct": 5.36}, {"name": "IP经济/谷子经济", "change_pct": 4.26}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 45, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "24.90", "change": "1.80", "market_id": "33", "circulate_market_value": "37796421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "115.10", "change": "6.36", "market_id": "33", "circulate_market_value": "99583860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000889", "name": "中嘉博创", "hot_rank": 47, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "3.70", "change": "4.82", "market_id": "33", "circulate_market_value": "3218258000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": 2.42}, {"name": "5G消息/RCS", "change_pct": 3.29}, {"name": "华为产业链", "change_pct": 3.48}, {"name": "Kimi概念", "change_pct": 4.48}, {"name": "智谱AI", "change_pct": 4.17}, {"name": "区块链", "change_pct": 2.32}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 48, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "20.42", "change": "0.59", "market_id": "33", "circulate_market_value": "15466416000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 49, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "8.93", "change": "3.48", "market_id": "33", "circulate_market_value": "6116178400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.6}, {"name": "核电", "change_pct": 2.28}, {"name": "充电桩", "change_pct": 2.58}, {"name": "云计算数据中心", "change_pct": 3.23}, {"name": "新能源汽车", "change_pct": 3.32}, {"name": "储能", "change_pct": 2.36}, {"name": "阿里巴巴概念股", "change_pct": 3.23}, {"name": "中芯国际概念股", "change_pct": 2.51}, {"name": "智能电网", "change_pct": 2.79}, {"name": "核聚变", "change_pct": 2.93}]}, {"code": "601318", "name": "中国平安", "hot_rank": 50, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "53.70", "change": "-3.17", "market_id": "17", "circulate_market_value": "572445490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300528", "name": "幸福蓝海", "hot_rank": 51, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "14.14", "change": "11.51", "market_id": "33", "circulate_market_value": "5268677900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 52, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "22.41", "change": "2.33", "market_id": "33", "circulate_market_value": "64094229000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300613", "name": "富瀚微", "hot_rank": 53, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "72.03", "change": "11.80", "market_id": "33", "circulate_market_value": "15830061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 54, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "9.08", "change": "0.78", "market_id": "17", "circulate_market_value": "8719481400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 3.48}, {"name": "ST摘帽", "change_pct": 2.25}, {"name": "充电桩", "change_pct": 2.58}, {"name": "新能源汽车", "change_pct": 3.32}, {"name": "国产芯片", "change_pct": 3.41}, {"name": "第三代半导体", "change_pct": 2.54}, {"name": "IGBT", "change_pct": 2.71}, {"name": "氮化镓", "change_pct": 2.48}, {"name": "碳化硅", "change_pct": 2.2}, {"name": "华为产业链", "change_pct": 3.48}]}, {"code": "002929", "name": "润建股份", "hot_rank": 55, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "51.50", "change": "3.75", "market_id": "33", "circulate_market_value": "11156341200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605018", "name": "长华集团", "hot_rank": 56, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "11.29", "change": "10.04", "market_id": "17", "circulate_market_value": "5307042800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人", "xgb_concepts": [{"name": "强势人气股", "change_pct": 6.42}, {"name": "汽车零部件", "change_pct": 4.45}, {"name": "新能源汽车", "change_pct": 3.32}, {"name": "新能源车零部件", "change_pct": 4.67}, {"name": "人形机器人", "change_pct": 7.11}, {"name": "飞行汽车/eVTOL", "change_pct": 4.48}]}, {"code": "002036", "name": "联创电子", "hot_rank": 57, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "4.87", "change": "9.93", "market_id": "33", "circulate_market_value": "5140128100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器视觉", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 3.1}, {"name": "折叠屏", "change_pct": 4.37}, {"name": "手机产业链", "change_pct": 4.25}, {"name": "超高清视频", "change_pct": 3.92}, {"name": "无线充电", "change_pct": 4.37}, {"name": "特斯拉", "change_pct": 4.7}, {"name": "无人驾驶", "change_pct": 3.91}, {"name": "VR&AR", "change_pct": 4.68}, {"name": "OLED", "change_pct": 3.19}, {"name": "3D感应", "change_pct": 4.35}, {"name": "人脸识别", "change_pct": 2.92}, {"name": "3D玻璃", "change_pct": 3.43}, {"name": "指纹识别", "change_pct": 4.17}, {"name": "手势识别", "change_pct": 4.32}, {"name": "虹膜识别", "change_pct": 3.48}, {"name": "机器视觉", "change_pct": 4.97}, {"name": "无人机", "change_pct": 3.23}, {"name": "智能制造", "change_pct": 4.36}, {"name": "国产芯片", "change_pct": 3.41}, {"name": "液晶面板/LCD", "change_pct": 3.61}, {"name": "激光雷达", "change_pct": 5.63}, {"name": "元宇宙", "change_pct": 4.78}, {"name": "电子后视镜", "change_pct": 4.09}, {"name": "无线耳机", "change_pct": 4.44}, {"name": "云游戏", "change_pct": 4.58}, {"name": "AI PC", "change_pct": 4.28}, {"name": "华为产业链", "change_pct": 3.48}, {"name": "毫米波雷达", "change_pct": 4.49}, {"name": "智能眼镜/MR头显", "change_pct": 4.79}, {"name": "英伟达概念", "change_pct": 4.98}, {"name": "人形机器人", "change_pct": 7.11}, {"name": "智能座舱", "change_pct": 4.59}, {"name": "AI手机", "change_pct": 4.16}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 58, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "44.16", "change": "2.10", "market_id": "33", "circulate_market_value": "64778996000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600887", "name": "伊利股份", "hot_rank": 59, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "32.85", "change": "-1.50", "market_id": "17", "circulate_market_value": "206755590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 60, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "13.25", "change": "5.33", "market_id": "17", "circulate_market_value": "4514328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601088", "name": "中国神华", "hot_rank": 61, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "51.03", "change": "-1.86", "market_id": "17", "circulate_market_value": "864892360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002249", "name": "大洋电机", "hot_rank": 62, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "6.53", "change": "9.93", "market_id": "33", "circulate_market_value": "12178990900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人关节", "xgb_concepts": [{"name": "充电桩", "change_pct": 2.58}, {"name": "云计算数据中心", "change_pct": 3.23}, {"name": "军民融合", "change_pct": 3.43}, {"name": "氢能源/燃料电池", "change_pct": 2.2}, {"name": "风电", "change_pct": 2.39}, {"name": "军工", "change_pct": 3.08}, {"name": "新能源汽车", "change_pct": 3.32}, {"name": "新能源车零部件", "change_pct": 4.67}, {"name": "轮边电机", "change_pct": 4.9}, {"name": "人形机器人", "change_pct": 7.11}]}, {"code": "301010", "name": "晶雪节能", "hot_rank": 63, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "23.06", "change": "19.98", "market_id": "33", "circulate_market_value": "2490480000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪经济"}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 64, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "12.14", "change": "3.67", "market_id": "17", "circulate_market_value": "211974620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 5.08}, {"name": "磷化工", "change_pct": 1.05}, {"name": "有色 · 钴", "change_pct": 3.38}, {"name": "有色 · 铜", "change_pct": 3.02}, {"name": "有色 · 钨", "change_pct": 3.23}, {"name": "有色 · 钼", "change_pct": 3.44}, {"name": "有色金属", "change_pct": 2.67}, {"name": "宁德时代概念股", "change_pct": 3.45}, {"name": "有色 · 镍", "change_pct": 2.61}]}, {"code": "600030", "name": "中信证券", "hot_rank": 65, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "25.26", "change": "-0.51", "market_id": "17", "circulate_market_value": "307579680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 66, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "20.85", "change": "5.84", "market_id": "17", "circulate_market_value": "14415182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 67, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "17.50", "change": "1.63", "market_id": "17", "circulate_market_value": "39448118000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 68, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "6.57", "change": "7.35", "market_id": "17", "circulate_market_value": "3467659700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.12}, {"name": "转基因", "change_pct": 3.49}, {"name": "棉花", "change_pct": 2.67}, {"name": "大农业", "change_pct": 2.4}, {"name": "供销社", "change_pct": 2.24}]}, {"code": "301396", "name": "宏景科技", "hot_rank": 69, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "110.83", "change": "2.94", "market_id": "33", "circulate_market_value": "15683198000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 70, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "60.40", "change": "3.25", "market_id": "33", "circulate_market_value": "60701134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 71, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "27.91", "change": "4.14", "market_id": "33", "circulate_market_value": "13623963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 72, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "45.38", "change": "1.18", "market_id": "33", "circulate_market_value": "148871110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 73, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "11.86", "change": "7.04", "market_id": "33", "circulate_market_value": "3352347600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.87}, {"name": "优化生育（三孩）", "change_pct": 2.6}, {"name": "食品", "change_pct": 1.51}, {"name": "大农业", "change_pct": 2.4}, {"name": "饮料", "change_pct": 1.82}]}, {"code": "603030", "name": "全筑股份", "hot_rank": 74, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "2.15", "change": "1.90", "market_id": "17", "circulate_market_value": "2831407100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.49}, {"name": "长三角一体化", "change_pct": 0.44}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "装修装饰", "change_pct": 1.87}, {"name": "装配式建筑", "change_pct": 1.45}, {"name": "建筑节能", "change_pct": 2.46}, {"name": "新型城镇化", "change_pct": 1.57}, {"name": "低价股", "change_pct": 0.52}, {"name": "光刻机（胶）", "change_pct": 4.31}, {"name": "旧改", "change_pct": 1.71}]}, {"code": "000001", "name": "平安银行", "hot_rank": 75, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "12.34", "change": "0.98", "market_id": "33", "circulate_market_value": "239466150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "银行", "change_pct": -0.21}, {"name": "破净股", "change_pct": 0.27}, {"name": "大金融", "change_pct": -0.02}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 76, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "82.60", "change": "3.35", "market_id": "33", "circulate_market_value": "64926058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603119", "name": "浙江荣泰", "hot_rank": 77, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "50.82", "change": "10.00", "market_id": "17", "circulate_market_value": "24030744000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "002045", "name": "国光电器", "hot_rank": 78, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "8.83", "change": "9.96", "market_id": "33", "circulate_market_value": "4960984300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI眼镜", "xgb_concepts": [{"name": "手机产业链", "change_pct": 4.25}, {"name": "电子烟", "change_pct": 4.14}, {"name": "苹果产业链", "change_pct": 4.62}, {"name": "锂电池", "change_pct": 3.52}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "VR&AR", "change_pct": 4.68}, {"name": "智能音箱", "change_pct": 5.75}, {"name": "新能源汽车", "change_pct": 3.32}, {"name": "黑色家电", "change_pct": 2.62}, {"name": "家电", "change_pct": 2.8}, {"name": "固态电池", "change_pct": 3.48}, {"name": "NFT", "change_pct": 4.91}, {"name": "元宇宙", "change_pct": 4.78}, {"name": "无线耳机", "change_pct": 4.44}, {"name": "智能手表", "change_pct": 4.66}, {"name": "华为鸿蒙", "change_pct": 2.91}, {"name": "华为产业链", "change_pct": 3.48}, {"name": "智能眼镜/MR头显", "change_pct": 4.79}]}, {"code": "300033", "name": "同花顺", "hot_rank": 79, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "201.60", "change": "1.29", "market_id": "33", "circulate_market_value": "88383444000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 80, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "34.93", "change": "6.30", "market_id": "33", "circulate_market_value": "50769079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 81, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "21.32", "change": "8.28", "market_id": "17", "circulate_market_value": "33208725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601012", "name": "隆基绿能", "hot_rank": 82, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "10.97", "change": "0.73", "market_id": "17", "circulate_market_value": "83131343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": 2.2}, {"name": "光伏", "change_pct": 2.54}, {"name": "白马股", "change_pct": -0.19}, {"name": "储能", "change_pct": 2.36}, {"name": "碳中和", "change_pct": 1.26}, {"name": "颗粒硅", "change_pct": 2.41}, {"name": "BIPV概念", "change_pct": 1.38}, {"name": "钙钛矿电池", "change_pct": 3.25}, {"name": "异质结电池HJT", "change_pct": 2.99}]}, {"code": "300604", "name": "长川科技", "hot_rank": 83, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "177.91", "change": "-0.10", "market_id": "33", "circulate_market_value": "87672177000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300115", "name": "长盈精密", "hot_rank": 84, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "23.92", "change": "10.59", "market_id": "33", "circulate_market_value": "32468942000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 85, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "74.68", "change": "2.17", "market_id": "17", "circulate_market_value": "109202346000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300721", "name": "怡达股份", "hot_rank": 86, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "20.88", "change": "20.00", "market_id": "33", "circulate_market_value": "2889705200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "湿电子化学品"}, {"code": "688041", "name": "海光信息", "hot_rank": 87, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "164.00", "change": "-0.15", "market_id": "17", "circulate_market_value": "381106150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 88, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "42.46", "change": "3.56", "market_id": "33", "circulate_market_value": "28108347000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 89, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "9.70", "change": "6.48", "market_id": "17", "circulate_market_value": "6460200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 2.48}]}, {"code": "002181", "name": "粤传媒", "hot_rank": 90, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "8.97", "change": "7.94", "market_id": "33", "circulate_market_value": "10176797800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 3.5}, {"name": "足球", "change_pct": 2.91}, {"name": "粤港澳大湾区", "change_pct": 0.78}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.71}, {"name": "传媒", "change_pct": 4.18}, {"name": "AIGC概念", "change_pct": 4.63}, {"name": "字节跳动概念股", "change_pct": 3.87}, {"name": "国企改革", "change_pct": 1.33}, {"name": "网红/MCN", "change_pct": 3.53}, {"name": "短剧/互动影游", "change_pct": 6.02}, {"name": "AI视频", "change_pct": 5.36}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 91, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "15.12", "change": "4.13", "market_id": "33", "circulate_market_value": "6839362700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 92, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "10.25", "change": "5.24", "market_id": "33", "circulate_market_value": "21340519000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 6.62}, {"name": "足球", "change_pct": 2.91}, {"name": "阿里巴巴概念股", "change_pct": 3.23}, {"name": "拼多多概念股", "change_pct": 4.15}, {"name": "网红/MCN", "change_pct": 3.53}, {"name": "盲盒", "change_pct": 4.37}, {"name": "华为产业链", "change_pct": 3.48}, {"name": "短剧/互动影游", "change_pct": 6.02}, {"name": "IP经济/谷子经济", "change_pct": 4.26}, {"name": "首发经济", "change_pct": 3.08}, {"name": "小红书概念股", "change_pct": 4.56}, {"name": "服务消费", "change_pct": 2.32}]}, {"code": "002407", "name": "多氟多", "hot_rank": 93, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "20.09", "change": "2.50", "market_id": "33", "circulate_market_value": "21715649000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 94, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "24.90", "change": "2.47", "market_id": "33", "circulate_market_value": "39457978000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 95, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "19.25", "change": "6.88", "market_id": "17", "circulate_market_value": "26866658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300857", "name": "协创数据", "hot_rank": 96, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "123.91", "change": "3.69", "market_id": "33", "circulate_market_value": "60082927000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000521", "name": "长虹美菱", "hot_rank": 97, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "4.27", "change": "-1.16", "market_id": "33", "circulate_market_value": "3737483400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医疗器械", "change_pct": 2.99}, {"name": "一带一路", "change_pct": 1.5}, {"name": "强势人气股", "change_pct": 6.42}, {"name": "人工智能", "change_pct": 3.75}, {"name": "冷链", "change_pct": 2.15}, {"name": "小家电", "change_pct": 2.25}, {"name": "白色家电", "change_pct": 3.05}, {"name": "家电", "change_pct": 2.8}, {"name": "破净股", "change_pct": 0.27}, {"name": "智能制造", "change_pct": 4.36}, {"name": "工业互联网", "change_pct": 3.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 3.26}, {"name": "垃圾分类", "change_pct": 1.46}, {"name": "新冠病毒防治", "change_pct": 2.33}, {"name": "C2M", "change_pct": 2.49}, {"name": "生物安全", "change_pct": 1.84}, {"name": "出海龙头", "change_pct": 1.15}]}, {"code": "300654", "name": "世纪天鸿", "hot_rank": 98, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "10.96", "change": "15.98", "market_id": "33", "circulate_market_value": "3865025200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 3.75}, {"name": "教育", "change_pct": 2.93}, {"name": "传媒", "change_pct": 4.18}, {"name": "教育信息化", "change_pct": 3.31}, {"name": "在线教育", "change_pct": 3.61}, {"name": "知识付费", "change_pct": 3.76}, {"name": "AI大模型/智能体", "change_pct": 3.05}]}, {"code": "300133", "name": "华策影视", "hot_rank": 99, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "8.18", "change": "9.95", "market_id": "33", "circulate_market_value": "13611523000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "VR&AR", "change_pct": 4.68}, {"name": "影视", "change_pct": 6.62}, {"name": "大数据", "change_pct": 2.78}, {"name": "教育", "change_pct": 2.93}, {"name": "动漫", "change_pct": 6.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": 3.37}, {"name": "百度概念股", "change_pct": 3.89}, {"name": "腾讯概念股", "change_pct": 3.25}, {"name": "NFT", "change_pct": 4.91}, {"name": "元宇宙", "change_pct": 4.78}, {"name": "虚拟数字人", "change_pct": 4.97}, {"name": "东数西算/算力", "change_pct": 2.54}, {"name": "AIGC概念", "change_pct": 4.63}, {"name": "网红/MCN", "change_pct": 3.53}, {"name": "华为产业链", "change_pct": 3.48}, {"name": "智能眼镜/MR头显", "change_pct": 4.79}, {"name": "AI大模型/智能体", "change_pct": 3.05}, {"name": "短剧/互动影游", "change_pct": 6.02}, {"name": "多模态", "change_pct": 4.84}, {"name": "AI视频", "change_pct": 5.36}, {"name": "Kimi概念", "change_pct": 4.48}, {"name": "智谱AI", "change_pct": 4.17}, {"name": "IP经济/谷子经济", "change_pct": 4.26}]}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 100, "hot_rank_chg": 0, "stock_cnt": 5794, "price": "47.71", "change": "1.51", "market_id": "17", "circulate_market_value": "304342200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002696", "name": "百洋股份", "price": 7.34, "change_pct": 10.04, "reason": "公司为全球加工规模最大、国内领先的罗非鱼食品综合提供商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 22.23, "first_limit_up": 1795410972, "break_limit_up_times": 0}, {"code": "000530", "name": "冰山冷热", "price": 13.52, "change_pct": 10.01, "reason": "1、冷热产业链综合方案服务提供商；掌握全球先进的二氧化碳跨临界冷热“五合一”零碳技术，为北京冬奥会多个比赛及配套冰场、哈尔滨亚冬会三个冰上场馆提供制冷设备；\n2、公司主要研究数据中心液冷的冷源部分，着重研发干冷器、氟泵系统、冷水系统，部分产品已实现小批量交付", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 37.31, "first_limit_up": 1795413558, "break_limit_up_times": 4}, {"code": "300508", "name": "维宏股份", "price": 38.46, "change_pct": 20.0, "reason": "公司推出灵巧手专用关节驱动器，上半年汉姆电子灵巧手关节电机出货5万余台", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.53, "first_limit_up": 1795403025, "break_limit_up_times": 0}, {"code": "002913", "name": "奥士康", "price": 60.59, "change_pct": 10.0, "reason": "公司表示有通过供应体系向英伟达提供PCB系列产品，目前正在积极参与英伟达R系列产品的打样和测试工作，主要为GPU相关产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.82, "first_limit_up": 1795403970, "break_limit_up_times": 0}, {"code": "000819", "name": "岳阳兴长", "price": 14.08, "change_pct": 10.0, "reason": "公司已建设100吨/年的MOFs材料中试生产装置，并与岳阳县高新技术产业开发区正式签署合作协议，打造MOFs材料产业化基地", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 12.87, "first_limit_up": 1795401630, "break_limit_up_times": 3}, {"code": "603893", "name": "瑞芯微", "price": 202.88, "change_pct": 10.0, "reason": "公司RK182X协处理器顺利量产，已有数百个客户、几十个行业在深化研发中，应用场景覆盖各类机器人、车载AI BOX等领域，首批客户已进入量产阶段，将在下半年放量", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.42, "first_limit_up": 1795403267, "break_limit_up_times": 0}, {"code": "688286", "name": "敏芯股份", "price": 53.48, "change_pct": 19.99, "reason": "公司为国内领先的MEMS传感器设计企业，布局机器人用力传感器、力矩传感器及惯性测量单元，相关产品正按计划研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 17.64, "first_limit_up": 1795413080, "break_limit_up_times": 2}, {"code": "603037", "name": "凯众股份", "price": 10.52, "change_pct": 10.04, "reason": "公司已组建研发团队，探索聚氨酯材料技术在机器人领域的应用机会", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.4, "first_limit_up": 1795410243, "break_limit_up_times": 1}, {"code": "301265", "name": "华新科技", "price": 24.79, "change_pct": 19.99, "reason": "公司控股子公司慧镕科技专注于DRAM内存颗粒、NAND Flash闪存芯片等存储模组的回收检测与再制造，依托DIE测试、BGA植球封装等技术填补了国内高端存储器件再制造领域的技术空白", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.16, "first_limit_up": 1795412334, "break_limit_up_times": 10}, {"code": "301030", "name": "*ST仕净", "price": 3.95, "change_pct": 20.06, "reason": "公司为光伏制程污染防控设备龙头", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 18.43, "first_limit_up": 1795412136, "break_limit_up_times": 8}, {"code": "001278", "name": "一彬科技", "price": 13.43, "change_pct": 9.99, "reason": "公司通过参股共青城民生创新智能投资合伙企业（有限合伙）间接投资法奥意威（苏州）机器人系统有限公司，持股比例为1.28%", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1795398222, "break_limit_up_times": 1}, {"code": "003028", "name": "振邦智能", "price": 22, "change_pct": 10.0, "reason": "公司已布局人形机器人智能控制器、电池管理系统、电池包及外骨骼等核心零部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.49, "first_limit_up": 1795412652, "break_limit_up_times": 0}, {"code": "301010", "name": "晶雪节能", "price": 23.06, "change_pct": 19.98, "reason": "1、公司聚焦冰雪场馆围护系统核心需求，以金属面节能隔热保温夹芯板为核心产品，产品广泛应用于室内滑雪场、冰雪大世界的墙体与屋顶建设；\n2、公司参与了阿里飞天云数据中心等项目", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 18.57, "first_limit_up": 1795414713, "break_limit_up_times": 0}, {"code": "002289", "name": "宇顺电子", "price": 30.97, "change_pct": 10.02, "reason": "公司签署总金额73,140万元的算力服务重大合同，向头部运营商客户提供智算服务，推动业务向算力产业链下游延伸", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1795403859, "break_limit_up_times": 0}, {"code": "300006", "name": "莱美药业", "price": 8.74, "change_pct": 20.05, "reason": "四川大学华西医院联合恩施州中心医院把全球首个铁死亡诱导剂“纳米炭铁”的人体I期临床数据，发在了顶级期刊上，标志着我国在前沿抗癌疗法领域实现全球性首创突破，率先完成铁死亡抗癌理念的临床概念性验证；公司控股子公司四川瀛瑞医药是纳米炭铁混悬注射液的研发主体，纳米炭铁在公司原有纳米炭注射液基础上开发，依靠二价铁调控肿瘤铁死亡通路，本次华西医院发布的 I 期临床数据就是该药物，当前已经推进至联合放疗的 II 期临床试验，适应症针对晚期实体瘤，属于全球首个铁死亡诱导抗癌药物", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 20.19, "first_limit_up": 1795411671, "break_limit_up_times": 1}, {"code": "000636", "name": "风华高科", "price": 28.99, "change_pct": 10.02, "reason": "国内被动电子元件行业龙头；公司MLCC、合金电阻、大电流电感已批量导入国内头部AI服务器及机器人客户，AI算力订单充足", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 7.32, "first_limit_up": 1795414128, "break_limit_up_times": 0}, {"code": "603926", "name": "铁流股份", "price": 14.85, "change_pct": 10.0, "reason": "公司空心电机轴处在客户产品开发阶段，子公司广东中配互联网科技公司在云计算、BI分析、智能机器人等方面已进行投入", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1795416709, "break_limit_up_times": 2}, {"code": "002199", "name": "东晶电子", "price": 10.4, "change_pct": 10.05, "reason": "国内最具规模的石英晶体元器件制造商之一；公司多款石英晶体元器件产品已在高通、紫光展锐、恒玄科技、矽昌通信、物奇微、爱科微等电子行业平台上完成导入认证", "plates": ["被动元件"], "limit_up_days": 2, "turnover_ratio": 9.52, "first_limit_up": 1795397913, "break_limit_up_times": 4}, {"code": "301313", "name": "凡拓数创", "price": 70.99, "change_pct": 20.0, "reason": "公司成功中标“广东省具身智能训练场建设项目一期综合调度中心项目”及“深圳国创具身智能机器人公司仿真平台开发服务项目”，实现了物理AI核心软件产品的独立对外输出", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 33.78, "first_limit_up": 1795403007, "break_limit_up_times": 0}, {"code": "002747", "name": "埃斯顿", "price": 26.68, "change_pct": 10.02, "reason": "国产工业机器人龙头；公司参股的埃斯顿酷卓发布了第二代人形机器人Codroid 02", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.57, "first_limit_up": 1795412643, "break_limit_up_times": 1}, {"code": "002343", "name": "慈文传媒", "price": 7.37, "change_pct": 10.0, "reason": "公司核心影视业务主要包括影视剧的投资、制作及发行业务，推动《武林外史》《圆月弯刀》《多情剑客无情剑》等五部微短剧开发制作；互动剧方面，公司已与互影科技签署了战略框架合作协议，双方将利用AI联合研发改编经典IP衍生互动剧", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 27.05, "first_limit_up": 1795410723, "break_limit_up_times": 0}, {"code": "601599", "name": "浙文影业", "price": 3.65, "change_pct": 9.94, "reason": "公司出品的文旅微短剧《九龙湖之有间客栈》已于2025年度播出，竖屏微短剧《江南机动队》杀青待播，并将继续布局微短剧业务矩阵", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 20.12, "first_limit_up": 1795398203, "break_limit_up_times": 1}, {"code": "000711", "name": "京蓝科技", "price": 4.25, "change_pct": 10.1, "reason": "近日，京蓝科技禄丰产业园区勤丰片区铟靶新材二期生产线成功试产出7N级高纯铟产品，依托国内首次产业化落地的高纯铟提纯新技术，此次试产出的7N级高纯铟产品纯度达到99.99999%，杂质总含量不超过千万分之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 11.66, "first_limit_up": 1795403568, "break_limit_up_times": 0}, {"code": "002584", "name": "西陇科学", "price": 8.5, "change_pct": 9.96, "reason": "公司拥有光刻胶配套试剂产品，和英特尔产品（成都）有限公司，美维控股，兴森电子，信利半导体，超声电子、韩国东进世美肯公司等建立业务合作关系", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 26.62, "first_limit_up": 1795404600, "break_limit_up_times": 2}, {"code": "688033", "name": "*ST天宜", "price": 3.55, "change_pct": 19.93, "reason": "涉嫌年报虚假记载，公司及相关责任人合计拟被罚550万元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.39, "first_limit_up": 1795397491, "break_limit_up_times": 0}, {"code": "688004", "name": "博汇科技", "price": 31.2, "change_pct": 20.0, "reason": "公司聚焦传媒安全、智慧教育、智能显控三大业务，并推出“学道”教育大模型及AIGC数字人方案", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 18.31, "first_limit_up": 1795412387, "break_limit_up_times": 1}, {"code": "301318", "name": "维海德", "price": 21.53, "change_pct": 20.01, "reason": "公司主要从事高清及超高清视频会议摄像机、视频会议终端", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.54, "first_limit_up": 1795397775, "break_limit_up_times": 2}, {"code": "600243", "name": "*ST海华", "price": 2.73, "change_pct": 10.08, "reason": "公司专业从事机械制造、特殊齿轮、电梯配件研发生产", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1795413394, "break_limit_up_times": 1}, {"code": "000593", "name": "德龙汇能", "price": 19.26, "change_pct": 9.99, "reason": "公司主营城市管道燃气和零售商业", "plates": ["天然气"], "limit_up_days": 2, "turnover_ratio": 1.08, "first_limit_up": 1795397100, "break_limit_up_times": 0}, {"code": "001229", "name": "魅视科技", "price": 27.71, "change_pct": 10.0, "reason": "1、公司获最高11.64亿元算力服务订单，同步锁定不超7.34亿元算力采购；\n2、公司磷化铟半导体材料研发实验室20台工艺验证设备已到位，项目按既定进度推进，常规试验周期预计在三个月以内；\n3、公司AI边缘智能分析平台深度融合边缘计算与CV视觉分析技术，可对存量摄像头进行AI赋能，打造“事前预警-事中干预-事后追溯”的全流程闭环监管体系", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.38, "first_limit_up": 1795397415, "break_limit_up_times": 0}, {"code": "301052", "name": "果麦文化", "price": 44.16, "change_pct": 20.0, "reason": "1、以互联网驱动的新出版公司；公司拥有海量优质的IP和作家，以“出版 + 互联网”模式为核心，借助AI技术赋能短剧业务；\n2、公司“AI校对王”已服务超五十家机构，对应大模型“金字塔”获网信办备案，AI营销王预计年底或进入产品序列，形成出版全流程AI工具链", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 45.96, "first_limit_up": 1795412712, "break_limit_up_times": 21}, {"code": "002009", "name": "天奇股份", "price": 14.59, "change_pct": 10.03, "reason": "公司与银河通用、优必选科技等提供包括轮式、双足等多品类机器人产品及差异化智能制造解决方案，银河通用成为2026春晚指定具身大模型机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.36, "first_limit_up": 1795399368, "break_limit_up_times": 1}, {"code": "002771", "name": "真视通", "price": 17.4, "change_pct": 9.99, "reason": "公司数据中心业务主要为用户提供数据中心基础环境建设、基础设施建设等系统建设服务，与航源光热、广电五舟联合研发了两相液冷高效散热服务器等", "plates": ["云计算数据中心"], "limit_up_days": 5, "turnover_ratio": 60.41, "first_limit_up": 1795397100, "break_limit_up_times": 6}, {"code": "600980", "name": "北矿科技", "price": 16.53, "change_pct": 9.98, "reason": "世界最大永磁铁氧体预烧料生产企业之一；公司开展了矿冶领域专用机器人的研究，开发的选矿过程智能巡检机器人和冶金作业过程智能机器人已开展工业应用，同时开展了矿冶装备智能化方面的研究", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.65, "first_limit_up": 1795410260, "break_limit_up_times": 0}, {"code": "301529", "name": "福赛科技", "price": 154.8, "change_pct": 20.0, "reason": "公司已完成部分机器人零部件产品研发、小批量试制及送样实验工作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.58, "first_limit_up": 1795412424, "break_limit_up_times": 7}, {"code": "002687", "name": "乔治白", "price": 5.64, "change_pct": 9.94, "reason": "中高端职业装领导者；公司主要从事“乔治白”“giuseppe”品牌的职业装以及校服产品设计研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.84, "first_limit_up": 1795411179, "break_limit_up_times": 0}, {"code": "002724", "name": "海洋王", "price": 9.6, "change_pct": 9.97, "reason": "公司是深海特种照明设备供应商，旗下专设军品事业部，销售舰艇用各类专业照明设备，产品应用于 “神六”“神七” 等航天项目，技术延展至水下机器人及探测装备，适配全海深场景‌", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 13.14, "first_limit_up": 1795403367, "break_limit_up_times": 0}, {"code": "603528", "name": "多伦科技", "price": 6.2, "change_pct": 9.93, "reason": "1、公司已取得具身机器人产品销售、租赁及批量定制需求，智能交通指挥机器人已在多地试点；\n2、公司多多驾驶舱、多多教练接入DeepSeek，推动驾培产品智能化升级，并将AI应用于多项业务；\n3、公司积极探索无人驾驶领域车辆安全员及无人机飞手培训技术，并推出机场围界无人化智能防控产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.5, "first_limit_up": 1795398860, "break_limit_up_times": 0}, {"code": "300243", "name": "瑞丰高材", "price": 13.98, "change_pct": 20.0, "reason": "公司CSR增韧剂产于2025年取得突破，并实现小批量出货，主要用于汽车、覆铜板、风电、封装等领域环氧树脂等树脂材料或复合材料的增韧改性", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 13.97, "first_limit_up": 1795415112, "break_limit_up_times": 0}, {"code": "601188", "name": "龙江交通", "price": 4.61, "change_pct": 10.02, "reason": "公司所辖哈大分公司圆满完成冰雪旅游季等关键时期保畅任务", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 25.08, "first_limit_up": 1795399957, "break_limit_up_times": 1}, {"code": "000678", "name": "襄阳轴承", "price": 18.68, "change_pct": 10.01, "reason": "1、公司部分精密轴承产品可应用于谐波减速器等，目前已经完成产品试制并送样；\n2、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 29.94, "first_limit_up": 1795415445, "break_limit_up_times": 0}, {"code": "002414", "name": "高德红外", "price": 10.41, "change_pct": 10.04, "reason": "1、公司已为电力巡检机器人提供红外热成像测温集成应用产品方案；\n2、公司表示实现了65000个通道的脑机接口，并且实现了双向信息的读取与写入；\n3、公司大面阵2K红外探测器已配套商业航天及星载领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.83, "first_limit_up": 1795403178, "break_limit_up_times": 0}, {"code": "605287", "name": "德才股份", "price": 34.97, "change_pct": 10.0, "reason": "1、控股孙公司奇想无限作为漫剧制作以及提出AIGC领域智能体一站式解决方案的团队，受邀参与火山引擎大模型游戏+漫剧 AI 工坊”广州企业沙龙；\n2、公司主营业务涵盖内装装饰工程、建筑幕墙工程、智能化工程、古建筑工程等", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 7.9, "first_limit_up": 1795403517, "break_limit_up_times": 0}, {"code": "301261", "name": "恒工精密", "price": 66.66, "change_pct": 20.0, "reason": "公司连续铸铁及精密机加工件可应用于机器人减速器RV谐波核心部件，并设立恒工伟创具身智能科技公司布局人形机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.1, "first_limit_up": 1795403208, "break_limit_up_times": 0}, {"code": "603626", "name": "科森科技", "price": 23.84, "change_pct": 10.01, "reason": "1、公司已承接机器人核心结构件及模组订单，系头部终端品牌一级供应商，部分产品已进入小批量试产；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.43, "first_limit_up": 1795398140, "break_limit_up_times": 1}, {"code": "600340", "name": "*ST华幸", "price": 0.94, "change_pct": 10.59, "reason": "公司股价跌破1元，拉响退市警报", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.52, "first_limit_up": 1795397100, "break_limit_up_times": 0}, {"code": "688069", "name": "德林海", "price": 27.61, "change_pct": 19.99, "reason": "国内领先的专业化蓝藻治理企业；控股股东及股东拟协议转让14.97%公司股份", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.99, "first_limit_up": 1795399121, "break_limit_up_times": 6}, {"code": "603667", "name": "五洲新春", "price": 45.76, "change_pct": 10.0, "reason": "公司在机器人减速器轴承领域研发成功RV减速器轴承和谐波减速器柔性轴承，其中RV减速器轴承和谐波减速器轴承分别为国内知名机器人减速器企业南高齿、来福谐波等客户送样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.4, "first_limit_up": 1795411318, "break_limit_up_times": 0}, {"code": "003032", "name": "传智教育", "price": 8.87, "change_pct": 10.05, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.88, "first_limit_up": 1795410183, "break_limit_up_times": 1}, {"code": "301575", "name": "艾芬达", "price": 28.68, "change_pct": 20.0, "reason": "公司控股子公司浙江云芯机器人技术有限公司开展机器人精密金属结构件的研发、生产及销售，相关业务订单稳步推进", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 29.81, "first_limit_up": 1795398216, "break_limit_up_times": 6}, {"code": "600103", "name": "青山纸业", "price": 3.53, "change_pct": 9.97, "reason": "1、控股子公司恒宝通光主营光通信模块及组件产品的研产销，系国家级高新技术企业，产品主要应用于移动通信领域，为全球大型模拟半导体设备供应厂商Avago逾十年的供应商；\n2、综合性造纸上市公司，实控人福建省国资委；公司主要产品为“青山牌”系列伸性纸袋纸、牛皮包装纸、溶解浆等产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 14.12, "first_limit_up": 1795403961, "break_limit_up_times": 0}, {"code": "603166", "name": "福达股份", "price": 9.82, "change_pct": 9.97, "reason": "公司全自主开发精密齿轮减速器，完成10-30Nm减速器开发，为客户定制超10款产品，并战略入股长坂扬州机器人科技，布局谐波减速器、反向式行星滚柱丝杠等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.39, "first_limit_up": 1795412844, "break_limit_up_times": 2}, {"code": "603901", "name": "永创智能", "price": 9.68, "change_pct": 10.0, "reason": "公司新设人形智能机器人研发部门，加快人形机器人整机、核心零部件、以及人形机器人在包装领域应用技术的研发工作，目前已完成多款人形机器人产品及核心部件的设计定型", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.12, "first_limit_up": 1795412240, "break_limit_up_times": 0}, {"code": "000559", "name": "万向钱潮", "price": 10.53, "change_pct": 10.03, "reason": "机器人业务为公司第三大战略业务板块，产品覆盖机器人全系列关节万向节、精密减速器及各类关节专用轴承等，已具备10万套滚柱丝杠、1000万套关节万向节产能，2026年计划建成机器人专用轴承产能120万套，海外重点推进泰国生产基地建设", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.76, "first_limit_up": 1795412439, "break_limit_up_times": 0}, {"code": "601689", "name": "拓普集团", "price": 52.92, "change_pct": 10.0, "reason": "1、公司为特斯拉汽车提供轻量化底盘、热管理系统等零部件，是特斯拉人形机器人Optimus 电驱执行器等核心部件的供应商；\n2、公司主营汽车零部件，主要产品包括汽车NVH减震系统、智能座舱部件、底盘系统、空气悬架、智能驾驶系统等，智能驾驶系统包括线控转向、线控刹车、电调管柱等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.12, "first_limit_up": 1795411292, "break_limit_up_times": 1}, {"code": "603598", "name": "引力传媒", "price": 18.24, "change_pct": 10.01, "reason": "1、领先的数字营销服务公司，字节跳动巨量引擎核心代理商；公司形成独具特色的短剧业务体系，为客户提供短剧营销投前、投中到投后的全方位服务；\n2、公司内部自研上线“核力 AI”的 1.0 版本、已具备“营销文案 生成”、“图片识别与生成”及“数字分身复刻及驱动”等功能应用", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 9.8, "first_limit_up": 1795411618, "break_limit_up_times": 1}, {"code": "003021", "name": "兆威机电", "price": 84.51, "change_pct": 10.0, "reason": "1、公司产品应用于机器人领域，持续推动微型传动及驱动系统在灵巧手、机器人关节等场景应用，灵巧手产品商业化进程持续推进；\n2、公司的微型传动系统可以应用于AR/VR领域，如磁感应系统、瞳距调节驱动系统、头部自动松紧装置、智能眼镜隐藏式微型扬声器等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.47, "first_limit_up": 1795411500, "break_limit_up_times": 0}, {"code": "600838", "name": "上海九百", "price": 8.34, "change_pct": 10.03, "reason": "上海九百集团旗下，有位于上海市中心的静安寺珠宝古玩城，位于航华地区的九百家居和位于大华社区的九百购物中心", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 12.9, "first_limit_up": 1795410678, "break_limit_up_times": 0}, {"code": "603040", "name": "XD新坐标", "price": 33.08, "change_pct": 10.01, "reason": "公司为国内冷锻细分领域龙头，已完成多类行星滚柱丝杠开发，产品应用包括机器人线性执行关节，并配合客户进行定制化研发、迭代与送样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1795403062, "break_limit_up_times": 1}, {"code": "601177", "name": "杭齿前进", "price": 12.31, "change_pct": 10.01, "reason": "杭齿集团正式启动省尖兵科技计划项目，针对人形机器人旋转关节和直线关节组件，将突破驱动一传动一传感一体化关节集成技术难题，最终研制出高扭矩、高推力密度和高动态响应关节组件并实现国产化示范应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.86, "first_limit_up": 1795412587, "break_limit_up_times": 2}, {"code": "603179", "name": "新泉股份", "price": 41.73, "change_pct": 9.99, "reason": "全资子公司常州新泉智能机器人完成注册，注册资本1亿元，主营智能机器人部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.98, "first_limit_up": 1795399299, "break_limit_up_times": 2}, {"code": "603021", "name": "*ST华鹏", "price": 3.2, "change_pct": 9.97, "reason": "公司前三季度营业收入约2.74亿元，净利润亏损约1.17亿元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.04, "first_limit_up": 1795397636, "break_limit_up_times": 0}, {"code": "002045", "name": "国光电器", "price": 8.83, "change_pct": 9.96, "reason": "1、全球知名的电声制造厂商；公司音响电声类业务主要产品包括扬声器、蓝牙音箱、智能音箱等，应用于可穿戴产品（如VR/AR）、智能手机、平板电脑等消费电子产品；\n2、公司为VR/AR设备供应声学模组，有MR设备声学模组的技术储备，公司也将生产VR整机", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 10.08, "first_limit_up": 1795400082, "break_limit_up_times": 15}, {"code": "605288", "name": "凯迪股份", "price": 58.37, "change_pct": 10.01, "reason": "公司已完成具身机器人产品送样，报告期内机器人、智能产品实现核心技术突破", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.21, "first_limit_up": 1795411131, "break_limit_up_times": 0}, {"code": "603004", "name": "鼎龙科技", "price": 20.04, "change_pct": 9.99, "reason": "1、公司此前增资杭州翰亚微电子，后者主营半导体光刻胶树脂的研产销；\n2、公司PBO纤维具有力学强度突出、耐高温等核心性能，可以作为航天器外衣材料使用；\n3、公司生产的聚酰亚胺单体可以用于生产聚酰亚胺材料，据公开资料报道，部分聚酰亚胺材料可以用于固（液）态电池领域", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 22.29, "first_limit_up": 1795404593, "break_limit_up_times": 0}, {"code": "603283", "name": "赛腾股份", "price": 38.1, "change_pct": 9.99, "reason": "公司通过收购日本 Optima 掌握晶圆缺陷检测等核心技术，是国内唯一能量产 HBM 量测设备的企业，且半导体设备产品线丰富，涵盖晶圆字符检测机、激光开槽机等，为国产芯片生产提供关键设备支持", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.27, "first_limit_up": 1795412607, "break_limit_up_times": 0}, {"code": "002248", "name": "华东数控", "price": 8.44, "change_pct": 10.04, "reason": "公司为国内生产销售数控龙门导轨磨床规模较大的机床制造企业，新推出圆台磨床、随动转向磨床，正向谐波减速器加工等新兴行业拓展", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.66, "first_limit_up": 1795411737, "break_limit_up_times": 13}, {"code": "002565", "name": "顺灏股份", "price": 8.09, "change_pct": 10.07, "reason": "公司参股北京轨道辰光布局太空算力，其第一代试验星“辰光一号”正在开展在轨测试", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 10.02, "first_limit_up": 1795412664, "break_limit_up_times": 2}, {"code": "300721", "name": "怡达股份", "price": 20.88, "change_pct": 20.0, "reason": "1、公司可用于光刻胶领域的产品主要有电子级丙二醇甲醚（PM）和电子级丙二醇甲醚乙酸酯（PMA）等；\n2、国内醇醚及醇醚酯行业的龙头企业之一；公司采用HPPO法工艺拥有年产15万吨环氧丙烷及年产40万吨双氧水的生产能力，产品主要用于聚醚多元醇、丙二醇及表面活性剂等领域", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 26.44, "first_limit_up": 1795404582, "break_limit_up_times": 0}, {"code": "002708", "name": "光洋股份", "price": 20.99, "change_pct": 10.01, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.61, "first_limit_up": 1795397598, "break_limit_up_times": 3}, {"code": "603131", "name": "上海沪工", "price": 13.01, "change_pct": 9.97, "reason": "1、公司的航天业务板块由两部分构成，华宇科技为航天装备制造平台、沪航卫星科技为卫星业务平台；前三季度业绩同比扭亏：\n2、公司具备专业的商业卫星AIT生产能力，可同时在线装配多颗50KG以下的商业卫星；一季度净利润同比增长39.52%", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.19, "first_limit_up": 1795412434, "break_limit_up_times": 1}, {"code": "002642", "name": "荣联科技", "price": 7.99, "change_pct": 10.06, "reason": "企业云计算和大数据专业服务提供商；公司中选存储设备集采项目，预计成交总金额8.49亿元", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 5.96, "first_limit_up": 1795397400, "break_limit_up_times": 0}, {"code": "605398", "name": "新炬网络", "price": 20.25, "change_pct": 9.99, "reason": "1、公司三季度营业收入同比增长45.40%，主要系短剧及智能内容的制作和营销业务进入规模上升阶段；\n2、公司AI运维智能体是基于公司多年专业IT智慧运维经验和成熟的智能运维平台作为基础，以Agent为核心调度单元，整合感知、记忆、认知与行动四层能力，自动归因海量告警、自主编排修复动作、沉淀运维知识形成持续进化的智能体；\n3、公司是一家以提供IT数据中心运维服务及运维产品为主的多云全栈智能运维服务商，下属子公司新炬技术AIOPS智慧运维平台软件V4.0与华为云GaussDB、华为云公有云平台（鲲鹏）完成相互", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1795398428, "break_limit_up_times": 1}, {"code": "603286", "name": "日盈电子", "price": 48.94, "change_pct": 10.0, "reason": "公司压阻式的电子皮肤样品已研发成功，在人形机器人新领域，公司以布局柔性触觉传感电子皮肤新产品为契机，结合发展战略及市场需求加快布局柔性线束等其他人形机器人产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.78, "first_limit_up": 1795411374, "break_limit_up_times": 1}, {"code": "001358", "name": "兴欣新材", "price": 28.88, "change_pct": 10.02, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 25.01, "first_limit_up": 1795404123, "break_limit_up_times": 1}, {"code": "603516", "name": "淳中科技", "price": 45.38, "change_pct": 10.01, "reason": "公司与英伟达合作，对接的产品包括液冷测试平台、基于AI的检测平台、各种测试板卡等", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 3.48, "first_limit_up": 1795399246, "break_limit_up_times": 0}, {"code": "002249", "name": "大洋电机", "price": 6.53, "change_pct": 9.93, "reason": "1、公司机器人关节模组研发稳步推进，外骨骼关节模组已进入客户实测阶段，面向人形及四足机器人的60至130全系列模组处于研发验证与可靠性测试环节；\n2、公司开发氢燃料电池关键零部件，可用于SOFC", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.79, "first_limit_up": 1795412697, "break_limit_up_times": 2}, {"code": "002896", "name": "中大力德", "price": 53.2, "change_pct": 10.01, "reason": "公司核心零部件减速器主要运用于工业机器人和工业自动化场景，包括RV、谐波减速器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.24, "first_limit_up": 1795411503, "break_limit_up_times": 1}, {"code": "603324", "name": "盛剑科技", "price": 30.48, "change_pct": 10.0, "reason": "1、公司持续推进电子化学品材料研发、制备生产、客户验证等工作；电子化学品材料（主要为光刻胶剥离液）已经实现生产销售，光刻胶显影液（TMAH）回收技术在客户端测试验证成功；\n2、公司为华为武汉研发生产项目-海思光工厂洁净室提供工艺废气治理系统", "plates": ["光刻机（胶）"], "limit_up_days": 5, "turnover_ratio": 19.68, "first_limit_up": 1795410183, "break_limit_up_times": 0}, {"code": "002164", "name": "宁波东力", "price": 17.94, "change_pct": 9.99, "reason": "公司重点布局谐波减速器与精密行星减速器，相关产品已实现批量试样及供货，配套业务进入产业化落地推进阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.68, "first_limit_up": 1795397520, "break_limit_up_times": 1}, {"code": "301252", "name": "同星科技", "price": 35.4, "change_pct": 20.0, "reason": "1、公司布局人形机器人精密零部件及散热模组，精密零部件已实现批量稳定供货，散热模组已完成小批量交付；\n2、公司依托换热器领域长期技术积累布局液冷赛道，核心聚焦高效液冷换热设备的研发与生产，已有液冷散热产品成功应用于数据中心领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.23, "first_limit_up": 1795411344, "break_limit_up_times": 4}, {"code": "002685", "name": "华东重机", "price": 8.14, "change_pct": 10.0, "reason": "1、公司拟收购锐信图芯股权并增资，交易完成后，公司持有锐信图芯43.18%股权，锐信图芯主营业务为GPU芯片及解决方案；\n2、全资子公司润星科技主要产品包括中高档数控机床、工业机器人、以及自动化交钥匙工程等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 20.15, "first_limit_up": 1795397415, "break_limit_up_times": 1}, {"code": "688667", "name": "菱电电控", "price": 95.04, "change_pct": 20.0, "reason": "汽车动力电子控制系统提供商，积极拓展低空飞行领域应用，产品矩阵包含低空飞行EMS", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.89, "first_limit_up": 1795399327, "break_limit_up_times": 0}, {"code": "603236", "name": "移远通信", "price": 81.25, "change_pct": 10.01, "reason": "公司针对人形、四足、割草、工业、服务等机器人打造专属整体解决方案，支撑机器人完成环境感知、语音交互、自主决策与运动控制", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.86, "first_limit_up": 1795411040, "break_limit_up_times": 0}, {"code": "002983", "name": "芯瑞达", "price": 24.98, "change_pct": 10.0, "reason": "公司为背光模组光电系统龙头，依托Mini/Micro-LED技术协同中国科学技术大学、合肥工业大学等高校攻关MicroLED微显示全彩化技术，推进AI+AR眼镜核心光机组件样机验证，阶段性进展符合预期", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 5.49, "first_limit_up": 1795397619, "break_limit_up_times": 0}, {"code": "603151", "name": "邦基科技", "price": 20.14, "change_pct": 9.99, "reason": "公司拟收购北溪农牧等公司股权，本次交易的标的公司以生猪养殖及销售为主", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 4.63, "first_limit_up": 1795416292, "break_limit_up_times": 0}, {"code": "002548", "name": "金新农", "price": 4.14, "change_pct": 10.11, "reason": "公司以“自繁自养”模式中种猪繁育为主，生猪产品主要包括种猪、仔猪和育肥猪", "plates": ["养猪"], "limit_up_days": 2, "turnover_ratio": 15.79, "first_limit_up": 1795415736, "break_limit_up_times": 0}, {"code": "603127", "name": "昭衍新药", "price": 35.44, "change_pct": 9.99, "reason": "国内创新药龙头；公司核心业务为药物的非临床评价服务，是新药研发链条中非临床安全性评价的关键环节，主要为创新药客户提供药物非临床药理毒理学评价，受益于国内创新药融资与BD授权交易回暖带来的行业需求增长", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1795412735, "break_limit_up_times": 1}, {"code": "600467", "name": "好当家", "price": 3.15, "change_pct": 10.14, "reason": "公司为海参养殖龙头，拥有国内面积最大、投资最多、产量最高的海参产业基地", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 28.7, "first_limit_up": 1795415647, "break_limit_up_times": 0}, {"code": "603728", "name": "鸣志电器", "price": 48.97, "change_pct": 10.0, "reason": "公司以空心杯电机、无框电机、微型伺服及一体化关节模组作为人形机器人灵巧手与大关节的核心执行部件，已向宇树等国内外头部整机厂送样并获小批量订单", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.7, "first_limit_up": 1795411572, "break_limit_up_times": 1}, {"code": "002623", "name": "亚玛顿", "price": 18.57, "change_pct": 10.01, "reason": "公司是国内光伏镀膜玻璃、大尺寸超薄光伏玻璃的先行者，控股股东拟向骑形网络转让公司20%股份", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.7, "first_limit_up": 1795410423, "break_limit_up_times": 0}, {"code": "002036", "name": "联创电子", "price": 4.87, "change_pct": 9.93, "reason": "1、公司已成为国内外客户机器人项目光学镜头和影像模组的供应商，并战略发展机器视觉产业，高清广角镜头及影像模组在运动相机、无人机、警用监控等领域持续扩大优势；\n2、公司具备供应AI眼镜相关核心光学部件的能力，已有AR、VR、MR产品出货并产生营业收入；\n3、公司的微棱镜、模造玻璃透镜阵列、硅透镜阵列等光模块光学器件正在送样评测阶段；\n4、公司车载镜头（车内监控、前视ADAS、盲区监控）已获得特斯拉的认证通过，已有正式订单", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.25, "first_limit_up": 1795397100, "break_limit_up_times": 0}, {"code": "001266", "name": "宏英智能", "price": 29.46, "change_pct": 10.01, "reason": "1、公司机器人领域产品主要为清扫机器人和特定工业场景机器人，部分产品可适用于工业机器人，正加大力度开发机器人可用部件；\n2、公司已在电网侧储能完成多个大型项目，浸没式储能已经在数据中心、电信基站等商用化", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.55, "first_limit_up": 1795411716, "break_limit_up_times": 0}, {"code": "301218", "name": "华是科技", "price": 87, "change_pct": 20.0, "reason": "1、公司依托自有编剧团队打造原创内容 IP 及深度开展版权合作获取优质 IP 授权， 借助 AI 工具完成短剧成品制作后， 在主流视频平台开展内容分发变现；同时公司通过接入短剧及漫剧分销平台， 并通过巨量引擎平台开展全网优质内容分销发行；\n2、公司卫星导航产品为单北斗卫星定位终端，已用于内河船舶定位，可实时采集航速、航向等信息，目前有部分订单；\n3、公司此前以2250万元增资杭州宇创机器人科技有限公司，持股15%，布局具身智能与空间智能机器人赛道，双方在机器人高精度建图、自主导航等领域展开合作", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 28.84, "first_limit_up": 1795413807, "break_limit_up_times": 14}, {"code": "603103", "name": "横店影视", "price": 16.6, "change_pct": 10.01, "reason": "公司已建立专门团队负责短剧、微短剧业务，围绕短剧精品化开展布局，依托影视投资制作发行与放映体系切入短剧内容领域", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 3.79, "first_limit_up": 1795398918, "break_limit_up_times": 3}, {"code": "603119", "name": "浙江荣泰", "price": 50.82, "change_pct": 10.0, "reason": "公司上半年已向国内外客户交付机器人零部件，正推进泰国生产基地建设和产能搭建", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.52, "first_limit_up": 1795403033, "break_limit_up_times": 0}, {"code": "002815", "name": "崇达技术", "price": 14.96, "change_pct": 10.0, "reason": "公司是全球领先的小批量PCB企业，供给工业控制领域客户的PCB产品有应用于智能家居、人形机器人、工业机器人等方面", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 16.48, "first_limit_up": 1795397793, "break_limit_up_times": 1}, {"code": "002148", "name": "北纬科技", "price": 11.07, "change_pct": 10.04, "reason": "参股公司天宇经纬与宇树科技在机器狗应用领域开展生态合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 40.5, "first_limit_up": 1795410165, "break_limit_up_times": 1}, {"code": "300703", "name": "创源股份", "price": 12.36, "change_pct": 20.0, "reason": "公司拟收购酷乐潮玩旗下新设子公司90%股权，切入线下零售赛道", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.32, "first_limit_up": 1795411173, "break_limit_up_times": 1}, {"code": "603175", "name": "超颖电子", "price": 89.32, "change_pct": 10.0, "reason": "公司间接控股股东定颖投控为中国台湾上市公司，主要产品为印制电路板，按照层数可分为双面板和多层板", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.07, "first_limit_up": 1795412924, "break_limit_up_times": 3}, {"code": "000700", "name": "模塑科技", "price": 14.42, "change_pct": 9.99, "reason": "公司复用汽车外饰制造能力开发人形机器人外覆盖件，已与多家头部整机厂商开展对接、送样及交付", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.64, "first_limit_up": 1795410270, "break_limit_up_times": 0}, {"code": "001400", "name": "江顺科技", "price": 66.66, "change_pct": 10.0, "reason": "1、公司的相关模具产品可以用于航空航天方向，参股20%公司昆山汇云在低空领域还在初期探索阶段；\n2、近期公司基于微通道挤压技术开发出新一代液冷模块，采用铝合金一体成型工艺，支持更窄流道（≤100μm）和更高热密度", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.58, "first_limit_up": 1795412523, "break_limit_up_times": 0}, {"code": "603009", "name": "北特科技", "price": 45.21, "change_pct": 10.0, "reason": "1、公司根据客户需求，配合推进人形机器人用丝杠产品的样件研发工作；\n2、公司目前通过Tier one客户间接向华为问界系列车型配套供应转向器齿条、齿轮等产品，向特斯拉配套相应底盘零部件产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.15, "first_limit_up": 1795412396, "break_limit_up_times": 2}, {"code": "002122", "name": "汇洲智能", "price": 2.96, "change_pct": 10.04, "reason": "公司股票11月23日起撤销其他风险警示", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.07, "first_limit_up": 1795397670, "break_limit_up_times": 0}, {"code": "603278", "name": "大业股份", "price": 11.67, "change_pct": 9.99, "reason": "1、公司人形机器人灵巧手用钢丝尚处于市场调研和研究开发阶段；\n2、公司投资联营企业湖北三江航天江北机械工程主要从事航天动力系统、天线罩等航天型号产品及特种压力容器产品、高端机电成套装备、先进激光应用设备等民用产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.38, "first_limit_up": 1795411056, "break_limit_up_times": 0}, {"code": "601595", "name": "上海电影", "price": 32.52, "change_pct": 10.01, "reason": "公司拥有“专业发行+综合院线+高端影院”完整电影发行放映产业链，控股股东上海电影集团已于前期在上海影视乐园启动真人互动剧游项目，相关剧本策划、演员统筹、投资测算正在积极推进中；旗下的大IP开发主体上影元与互影科技、阅文集团等联合出品了首个双人互动影游项目《谍影成双》", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.39, "first_limit_up": 1795402373, "break_limit_up_times": 0}, {"code": "600156", "name": "华升股份", "price": 8.82, "change_pct": 9.98, "reason": "公司拟6.62亿元购买易信科技97.40%股份，标的公司深耕AIDC领域，业务涉及智算中心双冷源阶梯冷却技术；一季报业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 18.91, "first_limit_up": 1795416409, "break_limit_up_times": 0}, {"code": "001326", "name": "联域股份", "price": 57.2, "change_pct": 10.0, "reason": "公司已完成对洛阳奥维特18%股权投资，切入机器人核心零部件赛道，奥维特薄壁交叉滚子轴承用于谐波减速器、行星减速器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.12, "first_limit_up": 1795412928, "break_limit_up_times": 0}, {"code": "688585", "name": "上纬新材", "price": 178.99, "change_pct": 20.0, "reason": "公司消费级具身智能机器人“启元Q1”和“启元T1”下线10000台", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.14, "first_limit_up": 1795411404, "break_limit_up_times": 0}, {"code": "002173", "name": "创新医疗", "price": 14.39, "change_pct": 10.02, "reason": "公司此前出资设立的“杭州博灵医疗科技有限公司”，该公司运用脑机接口技术帮助偏瘫患者恢复对残疾肢体自主控制的技术研究工作取得了一定的进展", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.27, "first_limit_up": 1795411386, "break_limit_up_times": 8}, {"code": "002655", "name": "共达电声", "price": 24.17, "change_pct": 10.01, "reason": "1、公司拟以自有资金2000万元参与对合肥硅臻芯片的增资,布局光量子芯片领域；\n2、公司上半年设立全资子公司共达智算，聚焦“AI算力基础设施”，通过联合AIDC共建、算力租赁服务等构建AI算力生态闭环，布局训练服务器、推理服务器等产品，成为公司第二增长曲线；\n3、公司主营的微型麦克风、扬声器等声学器件可应用于AI手机，为AI手机的语音交互、音频播放等功能提供声学硬件支持", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.56, "first_limit_up": 1795403376, "break_limit_up_times": 0}, {"code": "301000", "name": "肇民科技", "price": 30.48, "change_pct": 20.0, "reason": "公司目前积极与客户共同开发人形机器人精密零部件新品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.91, "first_limit_up": 1795400067, "break_limit_up_times": 1}, {"code": "688203", "name": "海正生材", "price": 13.88, "change_pct": 19.97, "reason": "国内聚乳酸行业龙头，经过增韧改性的聚乳酸材料具有良好的加工性能，同时具备结晶速度慢、熔融温度适宜、高温下不会释放刺激性气体的特点，成为3D打印的理想成型材料", "plates": ["3D打印"], "limit_up_days": 1, "turnover_ratio": 7.93, "first_limit_up": 1795403354, "break_limit_up_times": 0}, {"code": "002086", "name": "东方海洋", "price": 4.13, "change_pct": 10.13, "reason": "公司主要从事海水苗种繁育、养殖，水产品加工等，水产品加工主要包括调理食品系列、冷冻鱼片系列、海参系列加工产品等", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 26.59, "first_limit_up": 1795397487, "break_limit_up_times": 18}, {"code": "300007", "name": "汉威科技", "price": 36.1, "change_pct": 20.01, "reason": "公司的柔性传感器产品能够与机器人高度融合，可以模拟人类的触觉感知能力，实现法向力、剪切力、温度等多模态工作场景，目前已与多家人形机器人本体厂商展开合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.82, "first_limit_up": 1795412676, "break_limit_up_times": 5}, {"code": "002046", "name": "国机精工", "price": 30.56, "change_pct": 10.01, "reason": "1、公司已将机器人轴承纳入“十五五”业务板块规划，未来重点聚焦交叉滚子轴承等高附加值产品；\n2、培育钻石产业链核心玩家，以“设备+产品”双轮驱动布局；子公司三磨所是超硬材料行业引领者，其六面顶压机市占率超 60%，为黄河旋风、力量钻石等头部企业供货；\n3、中国航空航天轴承领域领先企业，曾为嫦娥一号、嫦娥二号、长征二号捆绑式大推力火箭、长征四号甲等项目提供配套轴承及相关研发服务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.89, "first_limit_up": 1795412892, "break_limit_up_times": 1}, {"code": "600327", "name": "大东方", "price": 5.31, "change_pct": 9.94, "reason": "1、公司旗下老字号“三凤桥”品牌，在各大主流平台设有“三凤桥旗舰店”，提真空及保鲜包装的各类卤味和熟食制品或礼盒套装，本地实体店在特定节日出售“年夜饭”预制礼盒；\n2、下属医疗业务板块中的儿科业务，主体主要包括以儿童身高管理为主的“健高儿科”、以儿心健康为主的“雅恩健康” 、以普儿科和儿保为主的“知贝医疗”组成，三个方向初步覆盖了儿童生长发育的全阶段", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 29.42, "first_limit_up": 1795415878, "break_limit_up_times": 6}, {"code": "301502", "name": "华阳智能", "price": 55.68, "change_pct": 20.0, "reason": "公司在电机研发方面重点突破无框电机核心技术，开发高转矩密度磁路设计、高精度伺服控制算法及耐冲击轻量化结构，可配套服务机器人、协作机器人及高端医疗器械等领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 27.3, "first_limit_up": 1795411338, "break_limit_up_times": 1}, {"code": "603662", "name": "柯力传感", "price": 48.19, "change_pct": 10.0, "reason": "公司六维力传感器给华为送样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.47, "first_limit_up": 1795411095, "break_limit_up_times": 0}, {"code": "605577", "name": "龙版传媒", "price": 17.81, "change_pct": 10.01, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 11.13, "first_limit_up": 1795411171, "break_limit_up_times": 1}, {"code": "605018", "name": "长华集团", "price": 11.29, "change_pct": 10.04, "reason": "汽车金属零部件供应商；公司拓展人形机器人用行星滚柱丝杠，产品精度为C5级并向C3级提升，规划新生产线预计2026年三季度建成", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 4.25, "first_limit_up": 1795398563, "break_limit_up_times": 2}, {"code": "603920", "name": "世运电路", "price": 34.76, "change_pct": 10.0, "reason": "特斯拉汽车、人形机器人PCB供货商，产品包括高精密互连HDI，软板（FPC）等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1795403656, "break_limit_up_times": 0}, {"code": "301413", "name": "安培龙", "price": 74.76, "change_pct": 20.0, "reason": "公司机器人力传感器涵盖六维力、力矩、拉压力传感器等，部分客户已有批量订单并实现批量生产交付", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 15.82, "first_limit_up": 1795399158, "break_limit_up_times": 1}, {"code": "688611", "name": "杭州柯林", "price": 61.82, "change_pct": 19.99, "reason": "公司拟以自筹资金不超过3亿元收购上海开普勒机器人有限公司41.57%股权并取得控制权，开普勒是国内重载全尺寸工业人形机器人行业领先者", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.63, "first_limit_up": 1795411209, "break_limit_up_times": 2}, {"code": "300829", "name": "金丹科技", "price": 31.44, "change_pct": 20.0, "reason": "1、公司是国内乳酸领域的龙头企业，拥有年产23.3万吨乳酸及系列产品生产能力，乳酸产线满负荷生产，受3D打印需求增长影响聚乳酸需求提升带动乳酸市场需求增加；\n2、公司拥有1.2万亩优质土地种植玉米", "plates": ["3D打印"], "limit_up_days": 1, "turnover_ratio": 26.39, "first_limit_up": 1795398051, "break_limit_up_times": 10}, {"code": "000026", "name": "飞亚达", "price": 20.55, "change_pct": 10.01, "reason": "中国航空工业集团旗下，国产腕表龙头，拟收购长空齿轮全部或部分控股权，后者主要产品为精密齿轮、精密减速器，相关产品的下游市场应用场景广阔，包括航空航天、电子、机器人等高端装备领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.54, "first_limit_up": 1795399341, "break_limit_up_times": 3}, {"code": "002242", "name": "九阳股份", "price": 31.86, "change_pct": 10.01, "reason": "国内小家电行业领导品牌、豆浆机龙头；公司持有深思考7.92%股权，其深耕类脑人工智能与多模态语义理解技术；公司通过全资子公司参股享刻智能，以财务性投资方式布局机器人相关领域，相关业务尚处于早期阶段", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.62, "first_limit_up": 1795398279, "break_limit_up_times": 0}, {"code": "001283", "name": "豪鹏科技", "price": 48.61, "change_pct": 10.0, "reason": "1、公司结合积累多年的PACK模组优势，已成功进入包含云迹科技在内的多家服务型机器人、陪伴机器人、四足机器狗、人形机器人客户供应链；\n2、公司已覆盖硫化物、聚合物、氧化物在内的三条主流固态电池路线", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.29, "first_limit_up": 1795402665, "break_limit_up_times": 0}, {"code": "001331", "name": "胜通能源", "price": 28.05, "change_pct": 10.0, "reason": "中国LNG贸易企业前五，控股股东变更为七腾机器人", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 4.46, "first_limit_up": 1795412664, "break_limit_up_times": 1}, {"code": "002172", "name": "澳洋健康", "price": 5.13, "change_pct": 10.09, "reason": "公司计划以全资子公司澳洋老年病医院为业务主体，拟投资3500万元开展张家港澳洋老年病医院项目，以二级老年病专科医院为设计标准，计划核定床位约105张", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 16.75, "first_limit_up": 1795402638, "break_limit_up_times": 0}, {"code": "603048", "name": "浙江黎明", "price": 18.92, "change_pct": 10.0, "reason": "1、公司精锻件多以冷锻工艺为主，也有部分热锻工艺，公司的冷镦工艺主要采用国外进口设备，冷锻工艺一人形机器人滚珠丝杆技术；\n2、汽车发动机总成关键零部件制造商，比亚迪为公司的合作伙伴；公司具备多种工艺技术路线，冷锻工艺属于其中主要的一种", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.39, "first_limit_up": 1795412712, "break_limit_up_times": 1}, {"code": "000766", "name": "通化金马", "price": 10.96, "change_pct": 10.04, "reason": "公司自主研发治疗轻、中度阿尔茨海默病的琥珀八氢氨吖啶片，为国家1.1类新药", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.68, "first_limit_up": 1795412769, "break_limit_up_times": 29}, {"code": "002703", "name": "浙江世宝", "price": 14.09, "change_pct": 9.99, "reason": "公司在线控转向和后轮转向领域技术储备深厚，已获多家主流车企定点，线控转向首个量产项目预计于2026年下半年开始量产", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 15.41, "first_limit_up": 1795398585, "break_limit_up_times": 4}, {"code": "603960", "name": "克来机电", "price": 15.37, "change_pct": 10.02, "reason": "1、公司将柔性自动化装备与机器人系统应用于新能源汽车电驱、电控、功率半导体模组及汽车内饰安全件等领域；\n2、公司在光通讯领域研发的自动化组装测试装备已供货至光通讯器件生产商Finisar", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 0.92, "first_limit_up": 1795397100, "break_limit_up_times": 0}, {"code": "603305", "name": "旭升集团", "price": 11.36, "change_pct": 9.97, "reason": "公司深度挖掘自身铝合金精密加工专长，结合人形机器人独特的结构与性能需求，全力投入关节壳体、躯干结构件等关键产品研发，并斩获多家海内外客户项目定点", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.78, "first_limit_up": 1795414047, "break_limit_up_times": 0}, {"code": "688836", "name": "宇树科技", "price": 708, "change_pct": 20.0, "reason": "公司专注于高性能通用机器人的研发生产，形成人形与四足机器人双产品矩阵，并自研关节模组、灵巧手、协作机械臂等核心组件，具备仿生与双足运动能力，属于机器人板块代表性企业\n", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 23.99, "first_limit_up": 1795412689, "break_limit_up_times": 0}, {"code": "002579", "name": "中京电子", "price": 14.73, "change_pct": 10.01, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["PCB板"], "limit_up_days": 3, "turnover_ratio": 30.34, "first_limit_up": 1795397451, "break_limit_up_times": 6}, {"code": "002931", "name": "锋龙股份", "price": 42.46, "change_pct": 10.0, "reason": "优必选受让控股股东所持29.99%股份", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.8, "first_limit_up": 1795397637, "break_limit_up_times": 1}, {"code": "603666", "name": "亿嘉和", "price": 25.36, "change_pct": 10.02, "reason": "公司与与华为云签约深入合作，公司将基于在电力、康养等场景深耕的产品能力积累，提供场景和产品设计制造等能力；华为云将提供平台化大小脑产品能力，并协同电力军团进行场景化方案规划设计，双方共同推动具身智能机器人产品在商业场景的落地", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.94, "first_limit_up": 1795398343, "break_limit_up_times": 1}, {"code": "003041", "name": "真爱美家", "price": 31.9, "change_pct": 10.0, "reason": "公司主营中高端厚重型毛毯，年产能超2000万条，重点布局中东、北非等海外市场", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.99, "first_limit_up": 1795413564, "break_limit_up_times": 0}, {"code": "003033", "name": "征和工业", "price": 57.37, "change_pct": 10.01, "reason": "1、公司研发的微型链系统项目，重点攻关机器人灵巧手传动技术；\n2、公司是张雪机车链传动系统的核心供应商，双方更在赛事级链系统产品上展开联合研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.47, "first_limit_up": 1795412799, "break_limit_up_times": 2}, {"code": "603533", "name": "掌阅科技", "price": 24.94, "change_pct": 10.01, "reason": "1、字节跳动参股，数字阅读行业龙头；公司已接入国内AI创业公司月之暗面旗下AI对话助手产品Kimi；\n2、公司推出海外短剧平台iDrama，现已上线数千部短剧作品，英语、日语、韩语、西班牙语、葡萄牙语等多语种版本", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 11.99, "first_limit_up": 1795411518, "break_limit_up_times": 6}, {"code": "603337", "name": "杰克科技", "price": 38.94, "change_pct": 10.0, "reason": "公司为工业缝制机龙头，计划于近期正式发布上市人形机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.07, "first_limit_up": 1795412660, "break_limit_up_times": 0}, {"code": "600814", "name": "杭州解百", "price": 6.9, "change_pct": 10.05, "reason": "公司拥有解百购物广场，杭州大厦购物城，解百义乌店等，有望在免税政策开放背景下参与免税运营", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.51, "first_limit_up": 1795411212, "break_limit_up_times": 0}, {"code": "603706", "name": "东方环宇", "price": 23.69, "change_pct": 9.98, "reason": "公司地处新疆，业务包括CNG汽车加气、居民生活用气、工商业客户用气", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 7.96, "first_limit_up": 1795410387, "break_limit_up_times": 0}, {"code": "603051", "name": "鹿山新材", "price": 20.9, "change_pct": 10.0, "reason": "1、公司整合资源快速切入人形机器人电子皮肤、电子肌肉及仿真皮肤（TPE、硅胶等材料）领域；\n2、公司针对太空光伏不同应用提出三种封装方案，已持续向头部客户出货多年", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.96, "first_limit_up": 1795412689, "break_limit_up_times": 2}, {"code": "001360", "name": "南矿集团", "price": 17.49, "change_pct": 10.0, "reason": "1、国内技术领先的中高端矿机装备供应服务商之一；公司凭借在砂石骨料和金属矿山破碎、筛分设备领域的技术优势，在俄罗斯、南非、津巴布韦、马来西亚等沿线国家和地区开展诸多合作项目，产品与服务助力当地矿产资源开发；\n2、公司境外子公司与Sucpass Gold签订合作协议，负责津巴布韦Brownhill金矿地表氧化矿的开采与堆浸处理，合作方式为黄金成品销售收入分成，黄金成品概算销售收入3640万美元，子公司按75%比例分成", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 4.74, "first_limit_up": 1795410699, "break_limit_up_times": 0}, {"code": "605488", "name": "福莱新材", "price": 46.77, "change_pct": 10.0, "reason": "公司向全球灵巧手领军企业灵心巧手累计交付超3万套触觉传感器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.28, "first_limit_up": 1795398232, "break_limit_up_times": 2}, {"code": "001330", "name": "博纳影业", "price": 5.43, "change_pct": 9.92, "reason": "公司首部AI超写实院线电影《三星堆：未来往事》正式定档2026年10月23日登陆全国院线", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 9.66, "first_limit_up": 1795411590, "break_limit_up_times": 1}, {"code": "002527", "name": "新时达", "price": 9.45, "change_pct": 10.01, "reason": "1、国内为数不多通过控制器切入机器人本体的厂家，控制器与伺服系统中的伺服驱动器100%自供；海尔集团将成为公司实际控制人；\n2、目前公司有液冷产品，已批量应用于数据中心", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.68, "first_limit_up": 1795413606, "break_limit_up_times": 4}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "300500": "[行政处罚事先告知书] 启迪设计：关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》的公告", "301030": "[行政处罚事先告知书] *ST仕净：关于收到《行政处罚事先告知书》的公告", "688033": "[行政处罚事先告知书] *ST天宜：关于公司收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的", "000892": "[行政处罚事先告知书] 欢瑞世纪：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920249": "[行政处罚事先告知书] [临时公告]利尔达:关于公司及相关当事人收到中国证券监督管理委员会浙江监管局行政", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告"};