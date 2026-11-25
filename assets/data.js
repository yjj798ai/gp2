const UPDATE_TIME = "2026-11-25 17:46";
const THS_HOT = [
  {
    "name": "流感",
    "rise": 0.58,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885879"
  },
  {
    "name": "人形机器人",
    "rise": -5.77,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "创新药",
    "rise": -0.8,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续168天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "青蒿素",
    "rise": 1.42,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -5.58,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续338天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "机器人概念",
    "rise": -4.81,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "猪肉",
    "rise": -0.98,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "ST板块",
    "rise": 0.26,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "算力租赁",
    "rise": -4.37,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "商业航天",
    "rise": -4.76,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续267天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": -6.0,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续161天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "仿制药一致性评价",
    "rise": 0.72,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "885856"
  },
  {
    "name": "东数西算(算力)",
    "rise": -4.49,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "光刻胶",
    "rise": -7.19,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "存储芯片",
    "rise": -7.3,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续291天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "黄金概念",
    "rise": -2.94,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "AI应用",
    "rise": -3.46,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续96天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "超级品牌",
    "rise": -0.04,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "食品ETF",
    "code": "885761"
  },
  {
    "name": "短剧游戏",
    "rise": -3.44,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "人工智能",
    "rise": -3.79,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续45天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  }
];
const THS_EVENTS = [
  {
    "title": "中央宣传部、中央军委国防动员部联合印发《全民国防教育“十五五”规划》",
    "desc": "",
    "heat": 414044,
    "direction": "教育",
    "themes": [
      "教育",
      "职业教育",
      "AI教育"
    ],
    "stocks": [
      {
        "name": "*ST开元",
        "code": "300338",
        "chg": 10.204082
      }
    ]
  },
  {
    "title": "国家疾控局：流感已进入流行季 及时接种流感疫苗",
    "desc": "",
    "heat": 279977,
    "direction": "流感",
    "themes": [
      "流感",
      "医药商业"
    ],
    "stocks": [
      {
        "name": "康芝药业",
        "code": "300086",
        "chg": 20.049505
      }
    ]
  },
  {
    "title": "服务零售额增速快于商品零售近4个百分点，消费结构持续优化",
    "desc": "",
    "heat": 174586,
    "direction": "大消费",
    "themes": [
      "零售",
      "消费",
      "白酒概念",
      "啤酒概念",
      "免税店",
      "饮料制造",
      "乳业",
      "食品加工制造",
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "创源股份",
        "code": "300703",
        "chg": 20.026972
      }
    ]
  },
  {
    "title": "小鹏放出 IRON 人形机器人预热视频：可自主拿起书本、倒酒、充电",
    "desc": "",
    "heat": 102981,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "汇洲智能",
        "code": "002122",
        "chg": 10.122699
      }
    ]
  },
  {
    "title": "《半导体设备与零部件质量管理体系》行业标准发布",
    "desc": "",
    "heat": 99054,
    "direction": "半导体设备",
    "themes": [
      "半导体设备",
      "芯片概念",
      "半导体"
    ],
    "stocks": [
      {
        "name": "北鼎股份",
        "code": "300824",
        "chg": 13.448276
      }
    ]
  },
  {
    "title": "6G创新发展部省协同试点在上海启动",
    "desc": "",
    "heat": 84204,
    "direction": "6G概念",
    "themes": [
      "6G概念",
      "通信服务"
    ],
    "stocks": [
      {
        "name": "中京电子",
        "code": "002579",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "神舟二十四号载人飞船发射取得圆满成功",
    "desc": "",
    "heat": 31956,
    "direction": "商业航天",
    "themes": [
      "火箭发射",
      "卫星测控",
      "卫星通信",
      "卫星遥感",
      "火箭回收"
    ],
    "stocks": [
      {
        "name": "中京电子",
        "code": "002579",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "“海南服务”加速出海",
    "desc": "",
    "heat": 22065,
    "direction": "海南自贸区",
    "themes": [
      "海南免税",
      "海南文旅",
      "海南交运",
      "海南"
    ],
    "stocks": [
      {
        "name": "康芝药业",
        "code": "300086",
        "chg": 20.049505
      }
    ]
  },
  {
    "title": "商务部：经批准，2024年第46号（《关于加强相关两用物项对美国出口管制的公告》）第二款暂停实施",
    "desc": "",
    "heat": 0,
    "direction": "对美管制暂停",
    "themes": [
      "超硬材料",
      "金属锗",
      "金属锑"
    ],
    "stocks": [
      {
        "name": "华锡有色",
        "code": "600301",
        "chg": 0.045683
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "麦角硫因",
    "change": "+1.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+0.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芬太尼概念",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+0.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药商业",
    "change": "+0.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "啤酒",
    "change": "+0.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "长寿药NMN",
    "change": "+0.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中药",
    "change": "+0.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+0.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+0.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "强势人气股",
    "change": "+0.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "免税店概念",
    "change": "+0.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "海南概念",
    "change": "+0.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "流感",
    "change": "+0.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "海南自由贸易港",
    "change": "+0.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+0.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "ST股",
    "change": "+0.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "0.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "-0.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新零售",
    "change": "-0.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 4,
    "hot_rank_chg": 3,
    "stock_cnt": 5898,
    "price": "8.99",
    "change": "0.45",
    "market_id": "33",
    "circulate_market_value": "9058228000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -3.02
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "工业自动化",
        "change_pct": -5.18
      },
      {
        "name": "机械",
        "change_pct": -3.16
      },
      {
        "name": "智能制造",
        "change_pct": -4.79
      },
      {
        "name": "国产芯片",
        "change_pct": -6.57
      },
      {
        "name": "信创",
        "change_pct": -3.87
      },
      {
        "name": "AI算力芯片",
        "change_pct": -7.56
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 6,
    "hot_rank_chg": 9,
    "stock_cnt": 5898,
    "price": "3.78",
    "change": "9.88",
    "market_id": "17",
    "circulate_market_value": "8362603800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "光模块",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -2.7
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.53
      },
      {
        "name": "光通信",
        "change_pct": -5.18
      },
      {
        "name": "林业",
        "change_pct": -0.28
      },
      {
        "name": "军民融合",
        "change_pct": -4.56
      },
      {
        "name": "军工",
        "change_pct": -4.23
      },
      {
        "name": "人造肉",
        "change_pct": -1.83
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 7,
    "hot_rank_chg": 2,
    "stock_cnt": 5898,
    "price": "4.34",
    "change": "-4.41",
    "market_id": "33",
    "circulate_market_value": "6861415300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.63
      },
      {
        "name": "体外诊断",
        "change_pct": -1.77
      },
      {
        "name": "医疗器械",
        "change_pct": -2.72
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "基因测序",
        "change_pct": -2.18
      },
      {
        "name": "预制菜",
        "change_pct": -0.37
      },
      {
        "name": "水产养殖",
        "change_pct": -0.14
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      },
      {
        "name": "海洋经济",
        "change_pct": -3.06
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 8,
    "hot_rank_chg": 14,
    "stock_cnt": 5898,
    "price": "3.60",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "5259579500.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "6",
    "change_reason": "海参",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.43
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "冷链",
        "change_pct": -2.94
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "食品",
        "change_pct": -0.75
      },
      {
        "name": "食品安全",
        "change_pct": -2.79
      },
      {
        "name": "预制菜",
        "change_pct": -0.37
      },
      {
        "name": "水产养殖",
        "change_pct": -0.14
      },
      {
        "name": "海洋经济",
        "change_pct": -3.06
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 11,
    "hot_rank_chg": 1,
    "stock_cnt": 5898,
    "price": "2.83",
    "change": "-9.87",
    "market_id": "17",
    "circulate_market_value": "8100513400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.37
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "游戏",
        "change_pct": -3.58
      },
      {
        "name": "影视",
        "change_pct": -4.82
      },
      {
        "name": "低价股",
        "change_pct": -1.11
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.88
      },
      {
        "name": "AI视频",
        "change_pct": -4.32
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 12,
    "hot_rank_chg": -1,
    "stock_cnt": 5898,
    "price": "10.27",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "4632043300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -4.1
      },
      {
        "name": "手游",
        "change_pct": -3.37
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "游戏",
        "change_pct": -3.58
      },
      {
        "name": "物联网",
        "change_pct": -4.61
      },
      {
        "name": "机器人",
        "change_pct": -5.3
      },
      {
        "name": "无人机",
        "change_pct": -4.24
      },
      {
        "name": "国产芯片",
        "change_pct": -6.57
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -4.26
      },
      {
        "name": "低空经济",
        "change_pct": -4.09
      },
      {
        "name": "无人物流车",
        "change_pct": -4.3
      }
    ]
  },
  {
    "code": "002548",
    "name": "金新农",
    "hot_rank": 14,
    "hot_rank_chg": 11,
    "stock_cnt": 5898,
    "price": "5.01",
    "change": "10.11",
    "market_id": "33",
    "circulate_market_value": "4030402200.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "6",
    "change_reason": "生猪养殖",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -2.14
      },
      {
        "name": "养猪",
        "change_pct": -0.77
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "大农业",
        "change_pct": -1.95
      }
    ]
  },
  {
    "code": "600814",
    "name": "杭州解百",
    "hot_rank": 15,
    "hot_rank_chg": 28,
    "stock_cnt": 5898,
    "price": "8.35",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "6137906300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.06
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "浙江国企改革",
        "change_pct": -2.1
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      },
      {
        "name": "医美",
        "change_pct": -0.39
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 18,
    "hot_rank_chg": 11,
    "stock_cnt": 5898,
    "price": "2.61",
    "change": "10.13",
    "market_id": "17",
    "circulate_market_value": "3437196500.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "5",
    "change_reason": "先进光源",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "长三角一体化",
        "change_pct": -1.95
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "装修装饰",
        "change_pct": -3.58
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.69
      },
      {
        "name": "建筑节能",
        "change_pct": -3.25
      },
      {
        "name": "新型城镇化",
        "change_pct": -3.15
      },
      {
        "name": "低价股",
        "change_pct": -1.11
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -7.39
      },
      {
        "name": "旧改",
        "change_pct": -2.94
      }
    ]
  },
  {
    "code": "002122",
    "name": "汇洲智能",
    "hot_rank": 21,
    "hot_rank_chg": 30,
    "stock_cnt": 5898,
    "price": "3.59",
    "change": "10.12",
    "market_id": "33",
    "circulate_market_value": "7132689300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "撤销风险警示",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -2.33
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "人工智能",
        "change_pct": -3.99
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.53
      },
      {
        "name": "智慧停车",
        "change_pct": -3.73
      },
      {
        "name": "大数据",
        "change_pct": -3.59
      },
      {
        "name": "风电",
        "change_pct": -3.76
      },
      {
        "name": "复牌股",
        "change_pct": -1.57
      },
      {
        "name": "智能制造",
        "change_pct": -4.79
      },
      {
        "name": "工业母机",
        "change_pct": -5.67
      }
    ]
  },
  {
    "code": "002642",
    "name": "荣联科技",
    "hot_rank": 22,
    "hot_rank_chg": 5,
    "stock_cnt": 5898,
    "price": "8.54",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "5649895900.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "存储设备集采",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -4.1
      },
      {
        "name": "边缘计算",
        "change_pct": -4.22
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -4.58
      },
      {
        "name": "数字孪生",
        "change_pct": -3.92
      },
      {
        "name": "精准医疗",
        "change_pct": -1.63
      },
      {
        "name": "国产软件",
        "change_pct": -3.8
      },
      {
        "name": "金融科技",
        "change_pct": -3.18
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "人工智能",
        "change_pct": -3.99
      },
      {
        "name": "网络安全",
        "change_pct": -3.75
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.53
      },
      {
        "name": "基因测序",
        "change_pct": -2.18
      },
      {
        "name": "物联网",
        "change_pct": -4.61
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.77
      },
      {
        "name": "大数据",
        "change_pct": -3.59
      },
      {
        "name": "智慧城市",
        "change_pct": -3.57
      },
      {
        "name": "智慧物流",
        "change_pct": -3.76
      },
      {
        "name": "智能制造",
        "change_pct": -4.79
      },
      {
        "name": "工业互联网",
        "change_pct": -4.04
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -3.41
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.74
      },
      {
        "name": "信创",
        "change_pct": -3.87
      },
      {
        "name": "国资云",
        "change_pct": -2.49
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.38
      },
      {
        "name": "数字乡村",
        "change_pct": -2.18
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      },
      {
        "name": "智慧政务",
        "change_pct": -3.51
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      },
      {
        "name": "远程办公",
        "change_pct": -2.99
      },
      {
        "name": "华为产业链",
        "change_pct": -4.41
      },
      {
        "name": "算力租赁",
        "change_pct": -4.31
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.39
      },
      {
        "name": "星闪概念",
        "change_pct": -5.22
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 27,
    "hot_rank_chg": -1,
    "stock_cnt": 5898,
    "price": "4.37",
    "change": "-9.90",
    "market_id": "17",
    "circulate_market_value": "5834181500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": -4.37
      },
      {
        "name": "物联网",
        "change_pct": -4.61
      },
      {
        "name": "LED",
        "change_pct": -4.93
      },
      {
        "name": "卫星互联网",
        "change_pct": -4.65
      }
    ]
  },
  {
    "code": "002872",
    "name": "天圣制药",
    "hot_rank": 31,
    "hot_rank_chg": 95,
    "stock_cnt": 5898,
    "price": "7.10",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "1525918800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "撤销风险警示",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.43
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.51
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.33
      },
      {
        "name": "复牌股",
        "change_pct": -1.57
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.14
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 32,
    "hot_rank_chg": 42,
    "stock_cnt": 5898,
    "price": "10.75",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "7159500000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 33,
    "hot_rank_chg": -13,
    "stock_cnt": 5898,
    "price": "9.20",
    "change": "-0.22",
    "market_id": "17",
    "circulate_market_value": "2480432400000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -3.25
      },
      {
        "name": "高股息",
        "change_pct": -0.36
      },
      {
        "name": "银行",
        "change_pct": -0.02
      },
      {
        "name": "白马股",
        "change_pct": -0.99
      },
      {
        "name": "破净股",
        "change_pct": -1.4
      },
      {
        "name": "大金融",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "000711",
    "name": "京蓝科技",
    "hot_rank": 34,
    "hot_rank_chg": 8,
    "stock_cnt": 5898,
    "price": "4.52",
    "change": "6.60",
    "market_id": "33",
    "circulate_market_value": "10653707200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -4.01
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.33
      },
      {
        "name": "物联网",
        "change_pct": -4.61
      },
      {
        "name": "大数据",
        "change_pct": -3.59
      },
      {
        "name": "固废处理",
        "change_pct": -2.81
      },
      {
        "name": "智慧城市",
        "change_pct": -3.57
      },
      {
        "name": "有色 · 锌",
        "change_pct": -3.57
      },
      {
        "name": "有色金属",
        "change_pct": -4.06
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -3.41
      },
      {
        "name": "土壤修复",
        "change_pct": -2.55
      },
      {
        "name": "磷化铟",
        "change_pct": -4.84
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 35,
    "hot_rank_chg": 78,
    "stock_cnt": 5898,
    "price": "3.23",
    "change": "9.86",
    "market_id": "17",
    "circulate_market_value": "4126647400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "尿素",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.42
      },
      {
        "name": "化肥",
        "change_pct": -1.5
      },
      {
        "name": "保健品",
        "change_pct": -0.17
      },
      {
        "name": "民营医院",
        "change_pct": -1.31
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "煤化工",
        "change_pct": -0.14
      },
      {
        "name": "食品",
        "change_pct": -0.75
      },
      {
        "name": "大农业",
        "change_pct": -1.95
      },
      {
        "name": "干细胞",
        "change_pct": -1.56
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 36,
    "hot_rank_chg": 4,
    "stock_cnt": 5898,
    "price": "9.54",
    "change": "-9.66",
    "market_id": "33",
    "circulate_market_value": "5403889200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -5.39
      },
      {
        "name": "军民融合",
        "change_pct": -4.56
      },
      {
        "name": "物联网",
        "change_pct": -4.61
      },
      {
        "name": "LED",
        "change_pct": -4.93
      },
      {
        "name": "军工",
        "change_pct": -4.23
      },
      {
        "name": "智慧灯杆",
        "change_pct": -4.17
      },
      {
        "name": "海洋经济",
        "change_pct": -3.06
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 37,
    "hot_rank_chg": -1,
    "stock_cnt": 5898,
    "price": "9.64",
    "change": "-9.99",
    "market_id": "17",
    "circulate_market_value": "7837783700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "充电桩",
        "change_pct": -4.47
      },
      {
        "name": "光伏",
        "change_pct": -4.41
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.89
      },
      {
        "name": "家电",
        "change_pct": -3.73
      },
      {
        "name": "储能",
        "change_pct": -4.87
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -4.73
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -3.28
      },
      {
        "name": "厨卫家电",
        "change_pct": -3.23
      },
      {
        "name": "华为产业链",
        "change_pct": -4.41
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 39,
    "hot_rank_chg": -4,
    "stock_cnt": 5898,
    "price": "9.32",
    "change": "8.88",
    "market_id": "17",
    "circulate_market_value": "3747671700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.53
      },
      {
        "name": "纺织服装",
        "change_pct": -2.03
      },
      {
        "name": "湖南国企改革",
        "change_pct": -1.83
      },
      {
        "name": "外贸受益概念",
        "change_pct": -4.19
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.38
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      },
      {
        "name": "液冷服务器",
        "change_pct": -5.42
      }
    ]
  },
  {
    "code": "600280",
    "name": "中央商场",
    "hot_rank": 40,
    "hot_rank_chg": 137,
    "stock_cnt": 5898,
    "price": "2.82",
    "change": "10.16",
    "market_id": "17",
    "circulate_market_value": "3181904100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.06
      },
      {
        "name": "低价股",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "002651",
    "name": "利君股份",
    "hot_rank": 42,
    "hot_rank_chg": 44,
    "stock_cnt": 5898,
    "price": "7.90",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "4467162800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "航空军工",
    "xgb_concepts": [
      {
        "name": "业绩爆雷",
        "change_pct": -1.07
      },
      {
        "name": "通用航空",
        "change_pct": -3.38
      },
      {
        "name": "大飞机",
        "change_pct": -4.23
      },
      {
        "name": "军工",
        "change_pct": -4.23
      },
      {
        "name": "无人机",
        "change_pct": -4.24
      },
      {
        "name": "航天",
        "change_pct": -4.86
      }
    ]
  },
  {
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 47,
    "hot_rank_chg": 98,
    "stock_cnt": 5898,
    "price": "6.41",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "3422940100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": -3.8
      },
      {
        "name": "深圳本地股",
        "change_pct": -3.3
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.33
      },
      {
        "name": "金融科技",
        "change_pct": -3.18
      },
      {
        "name": "网络安全",
        "change_pct": -3.75
      },
      {
        "name": "充电桩",
        "change_pct": -4.47
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.53
      },
      {
        "name": "移动支付",
        "change_pct": -3.55
      },
      {
        "name": "教育",
        "change_pct": -2.32
      },
      {
        "name": "智慧城市",
        "change_pct": -3.57
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.14
      },
      {
        "name": "LED",
        "change_pct": -4.93
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.89
      },
      {
        "name": "机器人",
        "change_pct": -5.3
      },
      {
        "name": "数字经济",
        "change_pct": -3.41
      },
      {
        "name": "国产芯片",
        "change_pct": -6.57
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -3.47
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.74
      },
      {
        "name": "信创",
        "change_pct": -3.87
      },
      {
        "name": "NFT",
        "change_pct": -1.88
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.38
      },
      {
        "name": "数字乡村",
        "change_pct": -2.18
      },
      {
        "name": "教育信息化",
        "change_pct": -3.42
      },
      {
        "name": "数字人民币",
        "change_pct": -3.33
      },
      {
        "name": "智慧政务",
        "change_pct": -3.51
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.99
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -3.28
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -3.42
      },
      {
        "name": "智慧灯杆",
        "change_pct": -4.17
      },
      {
        "name": "华为产业链",
        "change_pct": -4.41
      },
      {
        "name": "算力租赁",
        "change_pct": -4.31
      }
    ]
  },
  {
    "code": "603122",
    "name": "合富中国",
    "hot_rank": 48,
    "hot_rank_chg": 57,
    "stock_cnt": 5898,
    "price": "10.09",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "4016351100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "医药商业",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.77
      },
      {
        "name": "医疗器械",
        "change_pct": -2.72
      },
      {
        "name": "人工智能",
        "change_pct": -3.99
      },
      {
        "name": "医药商业",
        "change_pct": 0.49
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.58
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "猴痘概念",
        "change_pct": -1.43
      },
      {
        "name": "自贸区",
        "change_pct": -1.62
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -0.8
      },
      {
        "name": "AI医疗",
        "change_pct": -2.47
      }
    ]
  },
  {
    "code": "002728",
    "name": "特一药业",
    "hot_rank": 49,
    "hot_rank_chg": 131,
    "stock_cnt": 5898,
    "price": "8.35",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "4185929400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "流感",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.43
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "化学原料药",
        "change_pct": -0.65
      },
      {
        "name": "流感",
        "change_pct": 0.2
      },
      {
        "name": "长寿药NMN",
        "change_pct": 0.44
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.14
      },
      {
        "name": "医美",
        "change_pct": -0.39
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 51,
    "hot_rank_chg": -17,
    "stock_cnt": 5898,
    "price": "8.79",
    "change": "1.97",
    "market_id": "33",
    "circulate_market_value": "4229214800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.77
      },
      {
        "name": "医疗器械",
        "change_pct": -2.72
      },
      {
        "name": "锂电池",
        "change_pct": -5.6
      },
      {
        "name": "基因测序",
        "change_pct": -2.18
      },
      {
        "name": "PCB板",
        "change_pct": -6.16
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.89
      },
      {
        "name": "化学原料药",
        "change_pct": -0.65
      },
      {
        "name": "食品安全",
        "change_pct": -2.79
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.29
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -7.39
      },
      {
        "name": "异丙醇",
        "change_pct": -4.15
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -4.61
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 52,
    "hot_rank_chg": -2,
    "stock_cnt": 5898,
    "price": "4.21",
    "change": "-6.86",
    "market_id": "17",
    "circulate_market_value": "5496028300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "高速公路",
        "change_pct": -1.54
      },
      {
        "name": "振兴东北",
        "change_pct": -1.19
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "000158",
    "name": "常山北明",
    "hot_rank": 53,
    "hot_rank_chg": -22,
    "stock_cnt": 5898,
    "price": "12.62",
    "change": "-8.95",
    "market_id": "33",
    "circulate_market_value": "20073923000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -4.1
      },
      {
        "name": "国产软件",
        "change_pct": -3.8
      },
      {
        "name": "金融科技",
        "change_pct": -3.18
      },
      {
        "name": "人工智能",
        "change_pct": -3.99
      },
      {
        "name": "网络安全",
        "change_pct": -3.75
      },
      {
        "name": "充电桩",
        "change_pct": -4.47
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.53
      },
      {
        "name": "京津冀",
        "change_pct": -2.85
      },
      {
        "name": "冷链",
        "change_pct": -2.94
      },
      {
        "name": "大数据",
        "change_pct": -3.59
      },
      {
        "name": "智慧城市",
        "change_pct": -3.57
      },
      {
        "name": "雄安新区",
        "change_pct": -2.27
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.89
      },
      {
        "name": "智能制造",
        "change_pct": -4.79
      },
      {
        "name": "工业互联网",
        "change_pct": -4.04
      },
      {
        "name": "数字经济",
        "change_pct": -3.41
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -3.47
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.74
      },
      {
        "name": "信创",
        "change_pct": -3.87
      },
      {
        "name": "NFT",
        "change_pct": -1.88
      },
      {
        "name": "华为昇腾",
        "change_pct": -3.93
      },
      {
        "name": "国资云",
        "change_pct": -2.49
      },
      {
        "name": "数字乡村",
        "change_pct": -2.18
      },
      {
        "name": "智慧政务",
        "change_pct": -3.51
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -3.28
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -3.42
      },
      {
        "name": "华为HMS",
        "change_pct": -3.64
      },
      {
        "name": "华为产业链",
        "change_pct": -4.41
      },
      {
        "name": "算力租赁",
        "change_pct": -4.31
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.39
      },
      {
        "name": "智谱AI",
        "change_pct": -4.19
      },
      {
        "name": "区块链",
        "change_pct": -3.43
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 55,
    "hot_rank_chg": 134,
    "stock_cnt": 5898,
    "price": "8.48",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "5105209500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "东数西算",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": -4.53
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -3.47
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.74
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.38
      },
      {
        "name": "华为产业链",
        "change_pct": -4.41
      },
      {
        "name": "算力租赁",
        "change_pct": -4.31
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 56,
    "hot_rank_chg": 5,
    "stock_cnt": 5898,
    "price": "4.77",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "4220398300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.06
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.51
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "信托",
        "change_pct": -0.88
      },
      {
        "name": "民营医院",
        "change_pct": -1.31
      },
      {
        "name": "汽车销售",
        "change_pct": -2.32
      },
      {
        "name": "社区团购",
        "change_pct": -0.89
      },
      {
        "name": "大金融",
        "change_pct": -0.72
      },
      {
        "name": "餐饮",
        "change_pct": 0.92
      },
      {
        "name": "首发经济",
        "change_pct": -2.38
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 57,
    "hot_rank_chg": 8,
    "stock_cnt": 5898,
    "price": "11.75",
    "change": "-2.08",
    "market_id": "17",
    "circulate_market_value": "12277432200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -4.36
      },
      {
        "name": "上海国企改革",
        "change_pct": -2.31
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -2.17
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      }
    ]
  },
  {
    "code": "603360",
    "name": "百傲化学",
    "hot_rank": 62,
    "hot_rank_chg": 140,
    "stock_cnt": 5898,
    "price": "10.56",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "7457721800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "回购",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -7.3
      },
      {
        "name": "农药",
        "change_pct": -2.57
      },
      {
        "name": "大农业",
        "change_pct": -1.95
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 64,
    "hot_rank_chg": 24,
    "stock_cnt": 5898,
    "price": "6.10",
    "change": "3.21",
    "market_id": "33",
    "circulate_market_value": "4275457300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.06
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.14
      },
      {
        "name": "物业管理",
        "change_pct": -2.0
      },
      {
        "name": "预制菜",
        "change_pct": -0.37
      },
      {
        "name": "地摊经济",
        "change_pct": -1.68
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 65,
    "hot_rank_chg": -2,
    "stock_cnt": 5898,
    "price": "6.95",
    "change": "0.58",
    "market_id": "33",
    "circulate_market_value": "5057969500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -2.94
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.69
      },
      {
        "name": "风电",
        "change_pct": -3.76
      },
      {
        "name": "环氧丙烷",
        "change_pct": -2.85
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.45
      },
      {
        "name": "建筑节能",
        "change_pct": -3.25
      },
      {
        "name": "旧改",
        "change_pct": -2.94
      }
    ]
  },
  {
    "code": "300086",
    "name": "康芝药业",
    "hot_rank": 66,
    "hot_rank_chg": 31,
    "stock_cnt": 5898,
    "price": "4.85",
    "change": "20.05",
    "market_id": "33",
    "circulate_market_value": "2137310200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "印尼血竭进口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.43
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.51
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "海南概念",
        "change_pct": 0.26
      },
      {
        "name": "流感",
        "change_pct": 0.2
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.15
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.71
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.14
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      },
      {
        "name": "自贸区",
        "change_pct": -1.62
      },
      {
        "name": "驱蚊概念",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 67,
    "hot_rank_chg": -18,
    "stock_cnt": 5898,
    "price": "4.43",
    "change": "0.23",
    "market_id": "33",
    "circulate_market_value": "155831010000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -6.04
      },
      {
        "name": "手机产业链",
        "change_pct": -5.5
      },
      {
        "name": "超高清视频",
        "change_pct": -4.02
      },
      {
        "name": "苹果产业链",
        "change_pct": -5.62
      },
      {
        "name": "电竞",
        "change_pct": -3.38
      },
      {
        "name": "半导体",
        "change_pct": -7.3
      },
      {
        "name": "人工智能",
        "change_pct": -3.99
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.45
      },
      {
        "name": "VR&AR",
        "change_pct": -4.79
      },
      {
        "name": "OLED",
        "change_pct": -6.21
      },
      {
        "name": "京津冀",
        "change_pct": -2.85
      },
      {
        "name": "物联网",
        "change_pct": -4.61
      },
      {
        "name": "指纹识别",
        "change_pct": -5.24
      },
      {
        "name": "汽车零部件",
        "change_pct": -4.83
      },
      {
        "name": "白马股",
        "change_pct": -0.99
      },
      {
        "name": "智能制造",
        "change_pct": -4.79
      },
      {
        "name": "小米概念股",
        "change_pct": -5.46
      },
      {
        "name": "国产芯片",
        "change_pct": -6.57
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.51
      },
      {
        "name": "全息概念",
        "change_pct": -3.84
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -4.87
      },
      {
        "name": "MicroLED",
        "change_pct": -5.33
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -5.47
      },
      {
        "name": "智能手表",
        "change_pct": -5.85
      },
      {
        "name": "MiniLED",
        "change_pct": -5.1
      },
      {
        "name": "传感器",
        "change_pct": -5.75
      },
      {
        "name": "大硅片",
        "change_pct": -7.22
      },
      {
        "name": "AI PC",
        "change_pct": -5.49
      },
      {
        "name": "华为产业链",
        "change_pct": -4.41
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -4.46
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -5.53
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -6.27
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 68,
    "hot_rank_chg": 63,
    "stock_cnt": 5898,
    "price": "8.39",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "4865265300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "医药商业",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": 0.49
      },
      {
        "name": "民营医院",
        "change_pct": -1.31
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "振兴东北",
        "change_pct": -1.19
      },
      {
        "name": "宠物经济",
        "change_pct": -2.21
      },
      {
        "name": "眼科",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 71,
    "hot_rank_chg": -23,
    "stock_cnt": 5898,
    "price": "5.75",
    "change": "1.59",
    "market_id": "17",
    "circulate_market_value": "26536012000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -4.02
      },
      {
        "name": "国产软件",
        "change_pct": -3.8
      },
      {
        "name": "锂电池",
        "change_pct": -5.6
      },
      {
        "name": "人工智能",
        "change_pct": -3.99
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.53
      },
      {
        "name": "养老产业",
        "change_pct": -1.76
      },
      {
        "name": "大飞机",
        "change_pct": -4.23
      },
      {
        "name": "军民融合",
        "change_pct": -4.56
      },
      {
        "name": "物联网",
        "change_pct": -4.61
      },
      {
        "name": "大数据",
        "change_pct": -3.59
      },
      {
        "name": "智慧城市",
        "change_pct": -3.57
      },
      {
        "name": "军工",
        "change_pct": -4.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.89
      },
      {
        "name": "机器人",
        "change_pct": -5.3
      },
      {
        "name": "黑色家电",
        "change_pct": -3.54
      },
      {
        "name": "家电",
        "change_pct": -3.73
      },
      {
        "name": "储能",
        "change_pct": -4.87
      },
      {
        "name": "智能制造",
        "change_pct": -4.79
      },
      {
        "name": "工业互联网",
        "change_pct": -4.04
      },
      {
        "name": "数字经济",
        "change_pct": -3.41
      },
      {
        "name": "百度概念股",
        "change_pct": -3.29
      },
      {
        "name": "NFT",
        "change_pct": -1.88
      },
      {
        "name": "跨境支付",
        "change_pct": -3.23
      },
      {
        "name": "华为海思",
        "change_pct": -4.59
      },
      {
        "name": "云游戏",
        "change_pct": -3.85
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.83
      },
      {
        "name": "华为产业链",
        "change_pct": -4.41
      },
      {
        "name": "毫米波雷达",
        "change_pct": -4.95
      },
      {
        "name": "服务器",
        "change_pct": -5.17
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.39
      },
      {
        "name": "星闪概念",
        "change_pct": -5.22
      },
      {
        "name": "低空经济",
        "change_pct": -4.09
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 72,
    "hot_rank_chg": -8,
    "stock_cnt": 5898,
    "price": "8.55",
    "change": "0.23",
    "market_id": "17",
    "circulate_market_value": "5487246500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.4
      },
      {
        "name": "农业种植",
        "change_pct": -1.72
      },
      {
        "name": "湖南国企改革",
        "change_pct": -1.83
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.45
      },
      {
        "name": "休闲食品",
        "change_pct": -0.55
      },
      {
        "name": "食品",
        "change_pct": -0.75
      },
      {
        "name": "食品安全",
        "change_pct": -2.79
      },
      {
        "name": "社区团购",
        "change_pct": -0.89
      },
      {
        "name": "大农业",
        "change_pct": -1.95
      },
      {
        "name": "预制菜",
        "change_pct": -0.37
      },
      {
        "name": "人造肉",
        "change_pct": -1.83
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      }
    ]
  },
  {
    "code": "000756",
    "name": "新华制药",
    "hot_rank": 76,
    "hot_rank_chg": 64,
    "stock_cnt": 5898,
    "price": "12.16",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "6066294600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "流感",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -1.07
      },
      {
        "name": "动物保健",
        "change_pct": -2.74
      },
      {
        "name": "维生素",
        "change_pct": -1.34
      },
      {
        "name": "保健品",
        "change_pct": -0.17
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.77
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "化学原料药",
        "change_pct": -0.65
      },
      {
        "name": "食品",
        "change_pct": -0.75
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.14
      },
      {
        "name": "宠物经济",
        "change_pct": -2.21
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      },
      {
        "name": "医美",
        "change_pct": -0.39
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.89
      },
      {
        "name": "生物安全",
        "change_pct": -2.83
      },
      {
        "name": "合成生物",
        "change_pct": -1.96
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 78,
    "hot_rank_chg": -26,
    "stock_cnt": 5898,
    "price": "8.61",
    "change": "-7.42",
    "market_id": "17",
    "circulate_market_value": "15404481000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.3
      },
      {
        "name": "纯碱",
        "change_pct": -2.45
      },
      {
        "name": "食品",
        "change_pct": -0.75
      },
      {
        "name": "土壤修复",
        "change_pct": -2.55
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.38
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -3.97
      },
      {
        "name": "算力租赁",
        "change_pct": -4.31
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -4.32
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 79,
    "hot_rank_chg": -12,
    "stock_cnt": 5898,
    "price": "3.76",
    "change": "-6.47",
    "market_id": "17",
    "circulate_market_value": "4363639600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -2.03
      },
      {
        "name": "浙江国企改革",
        "change_pct": -2.1
      },
      {
        "name": "影视",
        "change_pct": -4.82
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.88
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 81,
    "hot_rank_chg": 31,
    "stock_cnt": 5898,
    "price": "4.68",
    "change": "0.43",
    "market_id": "17",
    "circulate_market_value": "11786626200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "工业大麻",
        "change_pct": -1.9
      },
      {
        "name": "中药",
        "change_pct": 0.43
      },
      {
        "name": "保健品",
        "change_pct": -0.17
      },
      {
        "name": "民营医院",
        "change_pct": -1.31
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "化学原料药",
        "change_pct": -0.65
      },
      {
        "name": "流感",
        "change_pct": 0.2
      },
      {
        "name": "振兴东北",
        "change_pct": -1.19
      },
      {
        "name": "食品",
        "change_pct": -0.75
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "603708",
    "name": "家家悦",
    "hot_rank": 82,
    "hot_rank_chg": 324,
    "stock_cnt": 5898,
    "price": "9.68",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5992969600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.06
      },
      {
        "name": "社区团购",
        "change_pct": -0.89
      },
      {
        "name": "大消费",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "601939",
    "name": "建设银行",
    "hot_rank": 89,
    "hot_rank_chg": -9,
    "stock_cnt": 5898,
    "price": "12.59",
    "change": "1.29",
    "market_id": "17",
    "circulate_market_value": "120784149000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": -0.36
      },
      {
        "name": "银行",
        "change_pct": -0.02
      },
      {
        "name": "破净股",
        "change_pct": -1.4
      },
      {
        "name": "大金融",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 91,
    "hot_rank_chg": 164,
    "stock_cnt": 5898,
    "price": "4.90",
    "change": "10.11",
    "market_id": "33",
    "circulate_market_value": "4175754500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.9
      },
      {
        "name": "创新药",
        "change_pct": -1.07
      },
      {
        "name": "基因测序",
        "change_pct": -2.18
      },
      {
        "name": "民营医院",
        "change_pct": -1.31
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "疫苗",
        "change_pct": -0.31
      },
      {
        "name": "化学原料药",
        "change_pct": -0.65
      },
      {
        "name": "流感",
        "change_pct": 0.2
      },
      {
        "name": "长寿药NMN",
        "change_pct": 0.44
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.29
      },
      {
        "name": "肝素",
        "change_pct": 0.74
      },
      {
        "name": "基因编辑",
        "change_pct": -2.25
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.14
      },
      {
        "name": "医美",
        "change_pct": -0.39
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.89
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -2.16
      },
      {
        "name": "减肥药",
        "change_pct": -1.66
      }
    ]
  },
  {
    "code": "601857",
    "name": "中国石油",
    "hot_rank": 93,
    "hot_rank_chg": 22,
    "stock_cnt": 5898,
    "price": "12.30",
    "change": "-0.41",
    "market_id": "17",
    "circulate_market_value": "1991641600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": -0.36
      },
      {
        "name": "央企改革",
        "change_pct": -2.39
      },
      {
        "name": "一带一路",
        "change_pct": -3.02
      },
      {
        "name": "石油化工",
        "change_pct": -2.36
      },
      {
        "name": "天然气",
        "change_pct": -2.05
      },
      {
        "name": "油气改革",
        "change_pct": -1.44
      },
      {
        "name": "可燃冰",
        "change_pct": -2.67
      },
      {
        "name": "中字头",
        "change_pct": -1.62
      },
      {
        "name": "页岩气",
        "change_pct": -2.56
      },
      {
        "name": "丁辛醇",
        "change_pct": -0.82
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 95,
    "hot_rank_chg": -24,
    "stock_cnt": 5898,
    "price": "5.05",
    "change": "-6.48",
    "market_id": "33",
    "circulate_market_value": "3863960700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.43
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.51
      },
      {
        "name": "医药商业",
        "change_pct": 0.49
      },
      {
        "name": "保健品",
        "change_pct": -0.17
      },
      {
        "name": "民营医院",
        "change_pct": -1.31
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "食品",
        "change_pct": -0.75
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.29
      },
      {
        "name": "口腔",
        "change_pct": -1.8
      },
      {
        "name": "医美",
        "change_pct": -0.39
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.36
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 96,
    "hot_rank_chg": 8,
    "stock_cnt": 5898,
    "price": "11.16",
    "change": "-7.16",
    "market_id": "17",
    "circulate_market_value": "3265170500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -1.72
      },
      {
        "name": "转基因",
        "change_pct": -2.33
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.45
      },
      {
        "name": "大农业",
        "change_pct": -1.95
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 97,
    "hot_rank_chg": 11,
    "stock_cnt": 5898,
    "price": "3.97",
    "change": "-7.89",
    "market_id": "33",
    "circulate_market_value": "3418815400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -4.11
      },
      {
        "name": "一带一路",
        "change_pct": -3.02
      },
      {
        "name": "强势人气股",
        "change_pct": 0.28
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.58
      },
      {
        "name": "光伏",
        "change_pct": -4.41
      },
      {
        "name": "有色金属",
        "change_pct": -4.06
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.89
      },
      {
        "name": "新能源车零部件",
        "change_pct": -5.19
      },
      {
        "name": "自贸区",
        "change_pct": -1.62
      },
      {
        "name": "液冷服务器",
        "change_pct": -5.42
      }
    ]
  },
  {
    "code": "601288",
    "name": "农业银行",
    "hot_rank": 98,
    "hot_rank_chg": -25,
    "stock_cnt": 5898,
    "price": "7.96",
    "change": "0.38",
    "market_id": "17",
    "circulate_market_value": "2541183900000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -3.25
      },
      {
        "name": "高股息",
        "change_pct": -0.36
      },
      {
        "name": "银行",
        "change_pct": -0.02
      },
      {
        "name": "破净股",
        "change_pct": -1.4
      },
      {
        "name": "大金融",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "600223",
    "name": "福瑞达",
    "hot_rank": 99,
    "hot_rank_chg": 311,
    "stock_cnt": 5898,
    "price": "5.49",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "5580962600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "零售",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.43
      },
      {
        "name": "养老产业",
        "change_pct": -1.76
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.77
      },
      {
        "name": "医药",
        "change_pct": -0.63
      },
      {
        "name": "化学原料药",
        "change_pct": -0.65
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.74
      },
      {
        "name": "国企改革",
        "change_pct": -2.21
      },
      {
        "name": "眼科",
        "change_pct": -0.85
      },
      {
        "name": "医美",
        "change_pct": -0.39
      },
      {
        "name": "化妆品",
        "change_pct": -1.84
      },
      {
        "name": "麦角硫因",
        "change_pct": 1.05
      },
      {
        "name": "合成生物",
        "change_pct": -1.96
      },
      {
        "name": "微信小店",
        "change_pct": -0.92
      }
    ]
  },
  {
    "code": "301066",
    "name": "万事利",
    "hot_rank": 100,
    "hot_rank_chg": 136,
    "stock_cnt": 5898,
    "price": "12.74",
    "change": "19.96",
    "market_id": "33",
    "circulate_market_value": "2969771700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "丝绸文创",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -3.99
      },
      {
        "name": "纺织服装",
        "change_pct": -2.03
      },
      {
        "name": "流感",
        "change_pct": 0.2
      },
      {
        "name": "数字经济",
        "change_pct": -3.41
      },
      {
        "name": "NFT",
        "change_pct": -1.88
      },
      {
        "name": "化妆品",
        "change_pct": -1.84
      },
      {
        "name": "回购",
        "change_pct": -4.59
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.39
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5898, "price": "38.56", "change": "10.01", "market_id": "33", "circulate_market_value": "29373683000.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "机器人投资"}, {"code": "000530", "name": "冰山冷热", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5898, "price": "14.70", "change": "9.54", "market_id": "33", "circulate_market_value": "8821715900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5898, "price": "17.82", "change": "10.00", "market_id": "33", "circulate_market_value": "10396869700.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "高阶HDI"}, {"code": "002685", "name": "华东重机", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5898, "price": "8.99", "change": "0.45", "market_id": "33", "circulate_market_value": "9058228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -3.02}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "工业自动化", "change_pct": -5.18}, {"name": "机械", "change_pct": -3.16}, {"name": "智能制造", "change_pct": -4.79}, {"name": "国产芯片", "change_pct": -6.57}, {"name": "信创", "change_pct": -3.87}, {"name": "AI算力芯片", "change_pct": -7.56}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5898, "price": "17.92", "change": "4.37", "market_id": "17", "circulate_market_value": "19649185000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 6, "hot_rank_chg": 9, "stock_cnt": 5898, "price": "3.78", "change": "9.88", "market_id": "17", "circulate_market_value": "8362603800.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "光模块", "xgb_concepts": [{"name": "造纸", "change_pct": -2.7}, {"name": "云计算数据中心", "change_pct": -4.53}, {"name": "光通信", "change_pct": -5.18}, {"name": "林业", "change_pct": -0.28}, {"name": "军民融合", "change_pct": -4.56}, {"name": "军工", "change_pct": -4.23}, {"name": "人造肉", "change_pct": -1.83}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5898, "price": "4.34", "change": "-4.41", "market_id": "33", "circulate_market_value": "6861415300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.63}, {"name": "体外诊断", "change_pct": -1.77}, {"name": "医疗器械", "change_pct": -2.72}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "基因测序", "change_pct": -2.18}, {"name": "预制菜", "change_pct": -0.37}, {"name": "水产养殖", "change_pct": -0.14}, {"name": "新冠病毒防治", "change_pct": -1.36}, {"name": "海洋经济", "change_pct": -3.06}]}, {"code": "600467", "name": "好当家", "hot_rank": 8, "hot_rank_chg": 14, "stock_cnt": 5898, "price": "3.60", "change": "10.09", "market_id": "17", "circulate_market_value": "5259579500.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "海参", "xgb_concepts": [{"name": "中药", "change_pct": 0.43}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "冷链", "change_pct": -2.94}, {"name": "医药", "change_pct": -0.63}, {"name": "食品", "change_pct": -0.75}, {"name": "食品安全", "change_pct": -2.79}, {"name": "预制菜", "change_pct": -0.37}, {"name": "水产养殖", "change_pct": -0.14}, {"name": "海洋经济", "change_pct": -3.06}]}, {"code": "002771", "name": "真视通", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5898, "price": "18.73", "change": "8.08", "market_id": "33", "circulate_market_value": "3382494800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 10, "hot_rank_chg": 7, "stock_cnt": 5898, "price": "13.15", "change": "10.04", "market_id": "17", "circulate_market_value": "8946203700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "甲醇"}, {"code": "600715", "name": "文投控股", "hot_rank": 11, "hot_rank_chg": 1, "stock_cnt": 5898, "price": "2.83", "change": "-9.87", "market_id": "17", "circulate_market_value": "8100513400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.37}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "游戏", "change_pct": -3.58}, {"name": "影视", "change_pct": -4.82}, {"name": "低价股", "change_pct": -1.11}, {"name": "国企改革", "change_pct": -2.21}, {"name": "短剧/互动影游", "change_pct": -3.88}, {"name": "AI视频", "change_pct": -4.32}]}, {"code": "002148", "name": "北纬科技", "hot_rank": 12, "hot_rank_chg": -1, "stock_cnt": 5898, "price": "10.27", "change": "-9.99", "market_id": "33", "circulate_market_value": "4632043300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -4.1}, {"name": "手游", "change_pct": -3.37}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "游戏", "change_pct": -3.58}, {"name": "物联网", "change_pct": -4.61}, {"name": "机器人", "change_pct": -5.3}, {"name": "无人机", "change_pct": -4.24}, {"name": "国产芯片", "change_pct": -6.57}, {"name": "5G消息/RCS", "change_pct": -4.26}, {"name": "低空经济", "change_pct": -4.09}, {"name": "无人物流车", "change_pct": -4.3}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 13, "hot_rank_chg": 1, "stock_cnt": 5898, "price": "208.42", "change": "-8.33", "market_id": "33", "circulate_market_value": "887997810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002548", "name": "金新农", "hot_rank": 14, "hot_rank_chg": 11, "stock_cnt": 5898, "price": "5.01", "change": "10.11", "market_id": "33", "circulate_market_value": "4030402200.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "生猪养殖", "xgb_concepts": [{"name": "饲料", "change_pct": -2.14}, {"name": "养猪", "change_pct": -0.77}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "大农业", "change_pct": -1.95}]}, {"code": "600814", "name": "杭州解百", "hot_rank": 15, "hot_rank_chg": 28, "stock_cnt": 5898, "price": "8.35", "change": "10.01", "market_id": "17", "circulate_market_value": "6137906300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.06}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "浙江国企改革", "change_pct": -2.1}, {"name": "国企改革", "change_pct": -2.21}, {"name": "医美", "change_pct": -0.39}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 16, "hot_rank_chg": -3, "stock_cnt": 5898, "price": "19.96", "change": "1.94", "market_id": "33", "circulate_market_value": "9173851500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 17, "hot_rank_chg": 7, "stock_cnt": 5898, "price": "20.03", "change": "9.99", "market_id": "17", "circulate_market_value": "8902222200.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "AI漫剧"}, {"code": "603030", "name": "全筑股份", "hot_rank": 18, "hot_rank_chg": 11, "stock_cnt": 5898, "price": "2.61", "change": "10.13", "market_id": "17", "circulate_market_value": "3437196500.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "先进光源", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "长三角一体化", "change_pct": -1.95}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "装修装饰", "change_pct": -3.58}, {"name": "装配式建筑", "change_pct": -2.69}, {"name": "建筑节能", "change_pct": -3.25}, {"name": "新型城镇化", "change_pct": -3.15}, {"name": "低价股", "change_pct": -1.11}, {"name": "光刻机（胶）", "change_pct": -7.39}, {"name": "旧改", "change_pct": -2.94}]}, {"code": "603324", "name": "盛剑科技", "hot_rank": 19, "hot_rank_chg": 2, "stock_cnt": 5898, "price": "32.27", "change": "9.99", "market_id": "17", "circulate_market_value": "4707496600.00", "change_type": "1", "change_section": "7", "change_days": "6", "change_reason": "光刻胶配套"}, {"code": "300308", "name": "中际旭创", "hot_rank": 20, "hot_rank_chg": -14, "stock_cnt": 5898, "price": "409.00", "change": "-1.92", "market_id": "33", "circulate_market_value": "453964230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002122", "name": "汇洲智能", "hot_rank": 21, "hot_rank_chg": 30, "stock_cnt": 5898, "price": "3.59", "change": "10.12", "market_id": "33", "circulate_market_value": "7132689300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "撤销风险警示", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -2.33}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "人工智能", "change_pct": -3.99}, {"name": "云计算数据中心", "change_pct": -4.53}, {"name": "智慧停车", "change_pct": -3.73}, {"name": "大数据", "change_pct": -3.59}, {"name": "风电", "change_pct": -3.76}, {"name": "复牌股", "change_pct": -1.57}, {"name": "智能制造", "change_pct": -4.79}, {"name": "工业母机", "change_pct": -5.67}]}, {"code": "002642", "name": "荣联科技", "hot_rank": 22, "hot_rank_chg": 5, "stock_cnt": 5898, "price": "8.54", "change": "10.05", "market_id": "33", "circulate_market_value": "5649895900.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "存储设备集采", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -4.1}, {"name": "边缘计算", "change_pct": -4.22}, {"name": "泛在电力物联网", "change_pct": -4.58}, {"name": "数字孪生", "change_pct": -3.92}, {"name": "精准医疗", "change_pct": -1.63}, {"name": "国产软件", "change_pct": -3.8}, {"name": "金融科技", "change_pct": -3.18}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "人工智能", "change_pct": -3.99}, {"name": "网络安全", "change_pct": -3.75}, {"name": "云计算数据中心", "change_pct": -4.53}, {"name": "基因测序", "change_pct": -2.18}, {"name": "物联网", "change_pct": -4.61}, {"name": "山东国企改革", "change_pct": -1.77}, {"name": "大数据", "change_pct": -3.59}, {"name": "智慧城市", "change_pct": -3.57}, {"name": "智慧物流", "change_pct": -3.76}, {"name": "智能制造", "change_pct": -4.79}, {"name": "工业互联网", "change_pct": -4.04}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -3.41}, {"name": "腾讯概念股", "change_pct": -3.74}, {"name": "信创", "change_pct": -3.87}, {"name": "国资云", "change_pct": -2.49}, {"name": "东数西算/算力", "change_pct": -4.38}, {"name": "数字乡村", "change_pct": -2.18}, {"name": "国企改革", "change_pct": -2.21}, {"name": "智慧政务", "change_pct": -3.51}, {"name": "新冠病毒防治", "change_pct": -1.36}, {"name": "远程办公", "change_pct": -2.99}, {"name": "华为产业链", "change_pct": -4.41}, {"name": "算力租赁", "change_pct": -4.31}, {"name": "AI大模型/智能体", "change_pct": -3.39}, {"name": "星闪概念", "change_pct": -5.22}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 23, "hot_rank_chg": -18, "stock_cnt": 5898, "price": "130.87", "change": "7.65", "market_id": "33", "circulate_market_value": "142437340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603960", "name": "克来机电", "hot_rank": 24, "hot_rank_chg": -1, "stock_cnt": 5898, "price": "18.60", "change": "9.99", "market_id": "17", "circulate_market_value": "4876880900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "工业机器人"}, {"code": "002384", "name": "东山精密", "hot_rank": 25, "hot_rank_chg": -9, "stock_cnt": 5898, "price": "69.80", "change": "-3.99", "market_id": "33", "circulate_market_value": "96765256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 26, "hot_rank_chg": -7, "stock_cnt": 5898, "price": "33.60", "change": "-7.34", "market_id": "17", "circulate_market_value": "151302110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 27, "hot_rank_chg": -1, "stock_cnt": 5898, "price": "4.37", "change": "-9.90", "market_id": "17", "circulate_market_value": "5834181500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": -4.37}, {"name": "物联网", "change_pct": -4.61}, {"name": "LED", "change_pct": -4.93}, {"name": "卫星互联网", "change_pct": -4.65}]}, {"code": "002164", "name": "宁波东力", "hot_rank": 28, "hot_rank_chg": 13, "stock_cnt": 5898, "price": "21.70", "change": "9.98", "market_id": "33", "circulate_market_value": "10411120600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "人形机器人"}, {"code": "300502", "name": "新易盛", "hot_rank": 29, "hot_rank_chg": -21, "stock_cnt": 5898, "price": "181.30", "change": "0.72", "market_id": "33", "circulate_market_value": "227481420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 30, "hot_rank_chg": -12, "stock_cnt": 5898, "price": "688.01", "change": "-4.18", "market_id": "17", "circulate_market_value": "20700652000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002872", "name": "天圣制药", "hot_rank": 31, "hot_rank_chg": 95, "stock_cnt": 5898, "price": "7.10", "change": "10.08", "market_id": "33", "circulate_market_value": "1525918800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "撤销风险警示", "xgb_concepts": [{"name": "中药", "change_pct": 0.43}, {"name": "优化生育（三孩）", "change_pct": -1.51}, {"name": "ST摘帽", "change_pct": -2.33}, {"name": "复牌股", "change_pct": -1.57}, {"name": "医药", "change_pct": -0.63}, {"name": "肝炎概念", "change_pct": 0.14}, {"name": "新冠病毒防治", "change_pct": -1.36}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 32, "hot_rank_chg": 42, "stock_cnt": 5898, "price": "10.75", "change": "10.03", "market_id": "17", "circulate_market_value": "7159500000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.06}]}, {"code": "601398", "name": "工商银行", "hot_rank": 33, "hot_rank_chg": -13, "stock_cnt": 5898, "price": "9.20", "change": "-0.22", "market_id": "17", "circulate_market_value": "2480432400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -3.25}, {"name": "高股息", "change_pct": -0.36}, {"name": "银行", "change_pct": -0.02}, {"name": "白马股", "change_pct": -0.99}, {"name": "破净股", "change_pct": -1.4}, {"name": "大金融", "change_pct": -0.72}]}, {"code": "000711", "name": "京蓝科技", "hot_rank": 34, "hot_rank_chg": 8, "stock_cnt": 5898, "price": "4.52", "change": "6.60", "market_id": "33", "circulate_market_value": "10653707200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -4.01}, {"name": "ST摘帽", "change_pct": -2.33}, {"name": "物联网", "change_pct": -4.61}, {"name": "大数据", "change_pct": -3.59}, {"name": "固废处理", "change_pct": -2.81}, {"name": "智慧城市", "change_pct": -3.57}, {"name": "有色 · 锌", "change_pct": -3.57}, {"name": "有色金属", "change_pct": -4.06}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -3.41}, {"name": "土壤修复", "change_pct": -2.55}, {"name": "磷化铟", "change_pct": -4.84}]}, {"code": "600227", "name": "赤天化", "hot_rank": 35, "hot_rank_chg": 78, "stock_cnt": 5898, "price": "3.23", "change": "9.86", "market_id": "17", "circulate_market_value": "4126647400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "尿素", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.42}, {"name": "化肥", "change_pct": -1.5}, {"name": "保健品", "change_pct": -0.17}, {"name": "民营医院", "change_pct": -1.31}, {"name": "医药", "change_pct": -0.63}, {"name": "煤化工", "change_pct": -0.14}, {"name": "食品", "change_pct": -0.75}, {"name": "大农业", "change_pct": -1.95}, {"name": "干细胞", "change_pct": -1.56}, {"name": "阿尔茨海默病", "change_pct": -0.89}]}, {"code": "002724", "name": "海洋王", "hot_rank": 36, "hot_rank_chg": 4, "stock_cnt": 5898, "price": "9.54", "change": "-9.66", "market_id": "33", "circulate_market_value": "5403889200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -5.39}, {"name": "军民融合", "change_pct": -4.56}, {"name": "物联网", "change_pct": -4.61}, {"name": "LED", "change_pct": -4.93}, {"name": "军工", "change_pct": -4.23}, {"name": "智慧灯杆", "change_pct": -4.17}, {"name": "海洋经济", "change_pct": -3.06}]}, {"code": "603366", "name": "日出东方", "hot_rank": 37, "hot_rank_chg": -1, "stock_cnt": 5898, "price": "9.64", "change": "-9.99", "market_id": "17", "circulate_market_value": "7837783700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.28}, {"name": "充电桩", "change_pct": -4.47}, {"name": "光伏", "change_pct": -4.41}, {"name": "新能源汽车", "change_pct": -4.89}, {"name": "家电", "change_pct": -3.73}, {"name": "储能", "change_pct": -4.87}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -4.73}, {"name": "华为鸿蒙", "change_pct": -3.28}, {"name": "厨卫家电", "change_pct": -3.23}, {"name": "华为产业链", "change_pct": -4.41}]}, {"code": "000823", "name": "超声电子", "hot_rank": 38, "hot_rank_chg": -8, "stock_cnt": 5898, "price": "19.32", "change": "1.15", "market_id": "33", "circulate_market_value": "11494089500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600156", "name": "华升股份", "hot_rank": 39, "hot_rank_chg": -4, "stock_cnt": 5898, "price": "9.32", "change": "8.88", "market_id": "17", "circulate_market_value": "3747671700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "云计算数据中心", "change_pct": -4.53}, {"name": "纺织服装", "change_pct": -2.03}, {"name": "湖南国企改革", "change_pct": -1.83}, {"name": "外贸受益概念", "change_pct": -4.19}, {"name": "东数西算/算力", "change_pct": -4.38}, {"name": "国企改革", "change_pct": -2.21}, {"name": "新冠病毒防治", "change_pct": -1.36}, {"name": "液冷服务器", "change_pct": -5.42}]}, {"code": "600280", "name": "中央商场", "hot_rank": 40, "hot_rank_chg": 137, "stock_cnt": 5898, "price": "2.82", "change": "10.16", "market_id": "17", "circulate_market_value": "3181904100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.06}, {"name": "低价股", "change_pct": -1.11}]}, {"code": "001219", "name": "青岛食品", "hot_rank": 41, "hot_rank_chg": 19, "stock_cnt": 5898, "price": "19.94", "change": "7.15", "market_id": "33", "circulate_market_value": "3792538200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002651", "name": "利君股份", "hot_rank": 42, "hot_rank_chg": 44, "stock_cnt": 5898, "price": "7.90", "change": "10.03", "market_id": "33", "circulate_market_value": "4467162800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "航空军工", "xgb_concepts": [{"name": "业绩爆雷", "change_pct": -1.07}, {"name": "通用航空", "change_pct": -3.38}, {"name": "大飞机", "change_pct": -4.23}, {"name": "军工", "change_pct": -4.23}, {"name": "无人机", "change_pct": -4.24}, {"name": "航天", "change_pct": -4.86}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 43, "hot_rank_chg": -10, "stock_cnt": 5898, "price": "198.28", "change": "-6.69", "market_id": "17", "circulate_market_value": "132990030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 44, "hot_rank_chg": 22, "stock_cnt": 5898, "price": "31.96", "change": "1.01", "market_id": "17", "circulate_market_value": "782004240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300703", "name": "创源股份", "hot_rank": 45, "hot_rank_chg": 25, "stock_cnt": 5898, "price": "17.80", "change": "20.03", "market_id": "33", "circulate_market_value": "3019976200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "祈福文创"}, {"code": "600519", "name": "贵州茅台", "hot_rank": 46, "hot_rank_chg": 10, "stock_cnt": 5898, "price": "1474.84", "change": "1.02", "market_id": "17", "circulate_market_value": "1843670300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002197", "name": "证通电子", "hot_rank": 47, "hot_rank_chg": 98, "stock_cnt": 5898, "price": "6.41", "change": "9.95", "market_id": "33", "circulate_market_value": "3422940100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "国产软件", "change_pct": -3.8}, {"name": "深圳本地股", "change_pct": -3.3}, {"name": "ST摘帽", "change_pct": -2.33}, {"name": "金融科技", "change_pct": -3.18}, {"name": "网络安全", "change_pct": -3.75}, {"name": "充电桩", "change_pct": -4.47}, {"name": "云计算数据中心", "change_pct": -4.53}, {"name": "移动支付", "change_pct": -3.55}, {"name": "教育", "change_pct": -2.32}, {"name": "智慧城市", "change_pct": -3.57}, {"name": "粤港澳大湾区", "change_pct": -2.14}, {"name": "LED", "change_pct": -4.93}, {"name": "新能源汽车", "change_pct": -4.89}, {"name": "机器人", "change_pct": -5.3}, {"name": "数字经济", "change_pct": -3.41}, {"name": "国产芯片", "change_pct": -6.57}, {"name": "阿里巴巴概念股", "change_pct": -3.47}, {"name": "腾讯概念股", "change_pct": -3.74}, {"name": "信创", "change_pct": -3.87}, {"name": "NFT", "change_pct": -1.88}, {"name": "东数西算/算力", "change_pct": -4.38}, {"name": "数字乡村", "change_pct": -2.18}, {"name": "教育信息化", "change_pct": -3.42}, {"name": "数字人民币", "change_pct": -3.33}, {"name": "智慧政务", "change_pct": -3.51}, {"name": "医疗信息化", "change_pct": -2.99}, {"name": "华为鸿蒙", "change_pct": -3.28}, {"name": "华为云·鲲鹏", "change_pct": -3.42}, {"name": "智慧灯杆", "change_pct": -4.17}, {"name": "华为产业链", "change_pct": -4.41}, {"name": "算力租赁", "change_pct": -4.31}]}, {"code": "603122", "name": "合富中国", "hot_rank": 48, "hot_rank_chg": 57, "stock_cnt": 5898, "price": "10.09", "change": "10.03", "market_id": "17", "circulate_market_value": "4016351100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "医药商业", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.77}, {"name": "医疗器械", "change_pct": -2.72}, {"name": "人工智能", "change_pct": -3.99}, {"name": "医药商业", "change_pct": 0.49}, {"name": "福建自贸/海西概念", "change_pct": -2.58}, {"name": "医药", "change_pct": -0.63}, {"name": "猴痘概念", "change_pct": -1.43}, {"name": "自贸区", "change_pct": -1.62}, {"name": "医疗耗材供应链SPD", "change_pct": -0.8}, {"name": "AI医疗", "change_pct": -2.47}]}, {"code": "002728", "name": "特一药业", "hot_rank": 49, "hot_rank_chg": 131, "stock_cnt": 5898, "price": "8.35", "change": "10.01", "market_id": "33", "circulate_market_value": "4185929400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "流感", "xgb_concepts": [{"name": "中药", "change_pct": 0.43}, {"name": "医药", "change_pct": -0.63}, {"name": "化学原料药", "change_pct": -0.65}, {"name": "流感", "change_pct": 0.2}, {"name": "长寿药NMN", "change_pct": 0.44}, {"name": "肝炎概念", "change_pct": 0.14}, {"name": "医美", "change_pct": -0.39}, {"name": "新冠病毒防治", "change_pct": -1.36}]}, {"code": "605018", "name": "长华集团", "hot_rank": 50, "hot_rank_chg": -5, "stock_cnt": 5898, "price": "13.03", "change": "4.91", "market_id": "17", "circulate_market_value": "6124957300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 51, "hot_rank_chg": -17, "stock_cnt": 5898, "price": "8.79", "change": "1.97", "market_id": "33", "circulate_market_value": "4229214800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.77}, {"name": "医疗器械", "change_pct": -2.72}, {"name": "锂电池", "change_pct": -5.6}, {"name": "基因测序", "change_pct": -2.18}, {"name": "PCB板", "change_pct": -6.16}, {"name": "医药", "change_pct": -0.63}, {"name": "新能源汽车", "change_pct": -4.89}, {"name": "化学原料药", "change_pct": -0.65}, {"name": "食品安全", "change_pct": -2.79}, {"name": "辅助生殖", "change_pct": -1.29}, {"name": "光刻机（胶）", "change_pct": -7.39}, {"name": "异丙醇", "change_pct": -4.15}, {"name": "新冠病毒防治", "change_pct": -1.36}, {"name": "磷酸铁锂", "change_pct": -4.61}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 52, "hot_rank_chg": -2, "stock_cnt": 5898, "price": "4.21", "change": "-6.86", "market_id": "17", "circulate_market_value": "5496028300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.28}, {"name": "高速公路", "change_pct": -1.54}, {"name": "振兴东北", "change_pct": -1.19}, {"name": "黑龙江自贸区", "change_pct": -1.16}]}, {"code": "000158", "name": "常山北明", "hot_rank": 53, "hot_rank_chg": -22, "stock_cnt": 5898, "price": "12.62", "change": "-8.95", "market_id": "33", "circulate_market_value": "20073923000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -4.1}, {"name": "国产软件", "change_pct": -3.8}, {"name": "金融科技", "change_pct": -3.18}, {"name": "人工智能", "change_pct": -3.99}, {"name": "网络安全", "change_pct": -3.75}, {"name": "充电桩", "change_pct": -4.47}, {"name": "云计算数据中心", "change_pct": -4.53}, {"name": "京津冀", "change_pct": -2.85}, {"name": "冷链", "change_pct": -2.94}, {"name": "大数据", "change_pct": -3.59}, {"name": "智慧城市", "change_pct": -3.57}, {"name": "雄安新区", "change_pct": -2.27}, {"name": "新能源汽车", "change_pct": -4.89}, {"name": "智能制造", "change_pct": -4.79}, {"name": "工业互联网", "change_pct": -4.04}, {"name": "数字经济", "change_pct": -3.41}, {"name": "阿里巴巴概念股", "change_pct": -3.47}, {"name": "腾讯概念股", "change_pct": -3.74}, {"name": "信创", "change_pct": -3.87}, {"name": "NFT", "change_pct": -1.88}, {"name": "华为昇腾", "change_pct": -3.93}, {"name": "国资云", "change_pct": -2.49}, {"name": "数字乡村", "change_pct": -2.18}, {"name": "智慧政务", "change_pct": -3.51}, {"name": "华为鸿蒙", "change_pct": -3.28}, {"name": "华为云·鲲鹏", "change_pct": -3.42}, {"name": "华为HMS", "change_pct": -3.64}, {"name": "华为产业链", "change_pct": -4.41}, {"name": "算力租赁", "change_pct": -4.31}, {"name": "AI大模型/智能体", "change_pct": -3.39}, {"name": "智谱AI", "change_pct": -4.19}, {"name": "区块链", "change_pct": -3.43}]}, {"code": "603887", "name": "城地香江", "hot_rank": 55, "hot_rank_chg": 134, "stock_cnt": 5898, "price": "8.48", "change": "9.99", "market_id": "17", "circulate_market_value": "5105209500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "东数西算", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": -4.53}, {"name": "阿里巴巴概念股", "change_pct": -3.47}, {"name": "腾讯概念股", "change_pct": -3.74}, {"name": "东数西算/算力", "change_pct": -4.38}, {"name": "华为产业链", "change_pct": -4.41}, {"name": "算力租赁", "change_pct": -4.31}]}, {"code": "600327", "name": "大东方", "hot_rank": 56, "hot_rank_chg": 5, "stock_cnt": 5898, "price": "4.77", "change": "-10.00", "market_id": "17", "circulate_market_value": "4220398300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.06}, {"name": "优化生育（三孩）", "change_pct": -1.51}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "信托", "change_pct": -0.88}, {"name": "民营医院", "change_pct": -1.31}, {"name": "汽车销售", "change_pct": -2.32}, {"name": "社区团购", "change_pct": -0.89}, {"name": "大金融", "change_pct": -0.72}, {"name": "餐饮", "change_pct": 0.92}, {"name": "首发经济", "change_pct": -2.38}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 57, "hot_rank_chg": 8, "stock_cnt": 5898, "price": "11.75", "change": "-2.08", "market_id": "17", "circulate_market_value": "12277432200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -4.36}, {"name": "上海国企改革", "change_pct": -2.31}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -2.17}, {"name": "国企改革", "change_pct": -2.21}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 58, "hot_rank_chg": 11, "stock_cnt": 5898, "price": "22.97", "change": "-1.03", "market_id": "17", "circulate_market_value": "473223190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002275", "name": "桂林三金", "hot_rank": 59, "hot_rank_chg": 70, "stock_cnt": 5898, "price": "13.82", "change": "10.03", "market_id": "33", "circulate_market_value": "7804863000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "流感"}, {"code": "600487", "name": "亨通光电", "hot_rank": 60, "hot_rank_chg": -2, "stock_cnt": 5898, "price": "34.20", "change": "-6.30", "market_id": "17", "circulate_market_value": "83914702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 61, "hot_rank_chg": -33, "stock_cnt": 5898, "price": "39.61", "change": "-3.30", "market_id": "17", "circulate_market_value": "786024500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603360", "name": "百傲化学", "hot_rank": 62, "hot_rank_chg": 140, "stock_cnt": 5898, "price": "10.56", "change": "10.00", "market_id": "17", "circulate_market_value": "7457721800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "回购", "xgb_concepts": [{"name": "半导体", "change_pct": -7.3}, {"name": "农药", "change_pct": -2.57}, {"name": "大农业", "change_pct": -1.95}]}, {"code": "001309", "name": "德明利", "hot_rank": 63, "hot_rank_chg": 13, "stock_cnt": 5898, "price": "158.00", "change": "-6.32", "market_id": "33", "circulate_market_value": "36722058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002187", "name": "广百股份", "hot_rank": 64, "hot_rank_chg": 24, "stock_cnt": 5898, "price": "6.10", "change": "3.21", "market_id": "33", "circulate_market_value": "4275457300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.06}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "粤港澳大湾区", "change_pct": -2.14}, {"name": "物业管理", "change_pct": -2.0}, {"name": "预制菜", "change_pct": -0.37}, {"name": "地摊经济", "change_pct": -1.68}]}, {"code": "002165", "name": "红宝丽", "hot_rank": 65, "hot_rank_chg": -2, "stock_cnt": 5898, "price": "6.95", "change": "0.58", "market_id": "33", "circulate_market_value": "5057969500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -2.94}, {"name": "装配式建筑", "change_pct": -2.69}, {"name": "风电", "change_pct": -3.76}, {"name": "环氧丙烷", "change_pct": -2.85}, {"name": "乡村振兴", "change_pct": -2.45}, {"name": "建筑节能", "change_pct": -3.25}, {"name": "旧改", "change_pct": -2.94}]}, {"code": "300086", "name": "康芝药业", "hot_rank": 66, "hot_rank_chg": 31, "stock_cnt": 5898, "price": "4.85", "change": "20.05", "market_id": "33", "circulate_market_value": "2137310200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "印尼血竭进口", "xgb_concepts": [{"name": "中药", "change_pct": 0.43}, {"name": "优化生育（三孩）", "change_pct": -1.51}, {"name": "医药", "change_pct": -0.63}, {"name": "海南概念", "change_pct": 0.26}, {"name": "流感", "change_pct": 0.2}, {"name": "自由贸易港", "change_pct": -1.15}, {"name": "海南自由贸易港", "change_pct": 0.71}, {"name": "肝炎概念", "change_pct": 0.14}, {"name": "新冠病毒防治", "change_pct": -1.36}, {"name": "自贸区", "change_pct": -1.62}, {"name": "驱蚊概念", "change_pct": -0.09}]}, {"code": "000725", "name": "京东方A", "hot_rank": 67, "hot_rank_chg": -18, "stock_cnt": 5898, "price": "4.43", "change": "0.23", "market_id": "33", "circulate_market_value": "155831010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -6.04}, {"name": "手机产业链", "change_pct": -5.5}, {"name": "超高清视频", "change_pct": -4.02}, {"name": "苹果产业链", "change_pct": -5.62}, {"name": "电竞", "change_pct": -3.38}, {"name": "半导体", "change_pct": -7.3}, {"name": "人工智能", "change_pct": -3.99}, {"name": "互联网医疗", "change_pct": -1.45}, {"name": "VR&AR", "change_pct": -4.79}, {"name": "OLED", "change_pct": -6.21}, {"name": "京津冀", "change_pct": -2.85}, {"name": "物联网", "change_pct": -4.61}, {"name": "指纹识别", "change_pct": -5.24}, {"name": "汽车零部件", "change_pct": -4.83}, {"name": "白马股", "change_pct": -0.99}, {"name": "智能制造", "change_pct": -4.79}, {"name": "小米概念股", "change_pct": -5.46}, {"name": "国产芯片", "change_pct": -6.57}, {"name": "液晶面板/LCD", "change_pct": -6.51}, {"name": "全息概念", "change_pct": -3.84}, {"name": "理想汽车概念股", "change_pct": -4.87}, {"name": "MicroLED", "change_pct": -5.33}, {"name": "钙钛矿电池", "change_pct": -5.47}, {"name": "智能手表", "change_pct": -5.85}, {"name": "MiniLED", "change_pct": -5.1}, {"name": "传感器", "change_pct": -5.75}, {"name": "大硅片", "change_pct": -7.22}, {"name": "AI PC", "change_pct": -5.49}, {"name": "华为产业链", "change_pct": -4.41}, {"name": "光电共封装CPO", "change_pct": -4.46}, {"name": "智能眼镜/MR头显", "change_pct": -5.53}, {"name": "玻璃基板封装", "change_pct": -6.27}]}, {"code": "600829", "name": "人民同泰", "hot_rank": 68, "hot_rank_chg": 63, "stock_cnt": 5898, "price": "8.39", "change": "9.96", "market_id": "17", "circulate_market_value": "4865265300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "医药商业", "xgb_concepts": [{"name": "医药商业", "change_pct": 0.49}, {"name": "民营医院", "change_pct": -1.31}, {"name": "医药", "change_pct": -0.63}, {"name": "振兴东北", "change_pct": -1.19}, {"name": "宠物经济", "change_pct": -2.21}, {"name": "眼科", "change_pct": -0.85}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 69, "hot_rank_chg": -23, "stock_cnt": 5898, "price": "22.80", "change": "-1.26", "market_id": "33", "circulate_market_value": "11619572000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000819", "name": "岳阳兴长", "hot_rank": 70, "hot_rank_chg": 39, "stock_cnt": 5898, "price": "14.94", "change": "5.06", "market_id": "33", "circulate_market_value": "5468340400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 71, "hot_rank_chg": -23, "stock_cnt": 5898, "price": "5.75", "change": "1.59", "market_id": "17", "circulate_market_value": "26536012000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -4.02}, {"name": "国产软件", "change_pct": -3.8}, {"name": "锂电池", "change_pct": -5.6}, {"name": "人工智能", "change_pct": -3.99}, {"name": "云计算数据中心", "change_pct": -4.53}, {"name": "养老产业", "change_pct": -1.76}, {"name": "大飞机", "change_pct": -4.23}, {"name": "军民融合", "change_pct": -4.56}, {"name": "物联网", "change_pct": -4.61}, {"name": "大数据", "change_pct": -3.59}, {"name": "智慧城市", "change_pct": -3.57}, {"name": "军工", "change_pct": -4.23}, {"name": "新能源汽车", "change_pct": -4.89}, {"name": "机器人", "change_pct": -5.3}, {"name": "黑色家电", "change_pct": -3.54}, {"name": "家电", "change_pct": -3.73}, {"name": "储能", "change_pct": -4.87}, {"name": "智能制造", "change_pct": -4.79}, {"name": "工业互联网", "change_pct": -4.04}, {"name": "数字经济", "change_pct": -3.41}, {"name": "百度概念股", "change_pct": -3.29}, {"name": "NFT", "change_pct": -1.88}, {"name": "跨境支付", "change_pct": -3.23}, {"name": "华为海思", "change_pct": -4.59}, {"name": "云游戏", "change_pct": -3.85}, {"name": "网红/MCN", "change_pct": -2.83}, {"name": "华为产业链", "change_pct": -4.41}, {"name": "毫米波雷达", "change_pct": -4.95}, {"name": "服务器", "change_pct": -5.17}, {"name": "AI大模型/智能体", "change_pct": -3.39}, {"name": "星闪概念", "change_pct": -5.22}, {"name": "低空经济", "change_pct": -4.09}]}, {"code": "600127", "name": "金健米业", "hot_rank": 72, "hot_rank_chg": -8, "stock_cnt": 5898, "price": "8.55", "change": "0.23", "market_id": "17", "circulate_market_value": "5487246500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.4}, {"name": "农业种植", "change_pct": -1.72}, {"name": "湖南国企改革", "change_pct": -1.83}, {"name": "乡村振兴", "change_pct": -2.45}, {"name": "休闲食品", "change_pct": -0.55}, {"name": "食品", "change_pct": -0.75}, {"name": "食品安全", "change_pct": -2.79}, {"name": "社区团购", "change_pct": -0.89}, {"name": "大农业", "change_pct": -1.95}, {"name": "预制菜", "change_pct": -0.37}, {"name": "人造肉", "change_pct": -1.83}, {"name": "国企改革", "change_pct": -2.21}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 73, "hot_rank_chg": 4, "stock_cnt": 5898, "price": "17.02", "change": "4.29", "market_id": "17", "circulate_market_value": "3593997400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001358", "name": "兴欣新材", "hot_rank": 74, "hot_rank_chg": 9, "stock_cnt": 5898, "price": "33.54", "change": "5.57", "market_id": "33", "circulate_market_value": "1709745400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 75, "hot_rank_chg": -43, "stock_cnt": 5898, "price": "37.99", "change": "-2.19", "market_id": "17", "circulate_market_value": "32160561000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000756", "name": "新华制药", "hot_rank": 76, "hot_rank_chg": 64, "stock_cnt": 5898, "price": "12.16", "change": "10.04", "market_id": "33", "circulate_market_value": "6066294600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "流感", "xgb_concepts": [{"name": "创新药", "change_pct": -1.07}, {"name": "动物保健", "change_pct": -2.74}, {"name": "维生素", "change_pct": -1.34}, {"name": "保健品", "change_pct": -0.17}, {"name": "山东国企改革", "change_pct": -1.77}, {"name": "医药", "change_pct": -0.63}, {"name": "化学原料药", "change_pct": -0.65}, {"name": "食品", "change_pct": -0.75}, {"name": "肝炎概念", "change_pct": 0.14}, {"name": "宠物经济", "change_pct": -2.21}, {"name": "国企改革", "change_pct": -2.21}, {"name": "医美", "change_pct": -0.39}, {"name": "阿尔茨海默病", "change_pct": -0.89}, {"name": "生物安全", "change_pct": -2.83}, {"name": "合成生物", "change_pct": -1.96}]}, {"code": "600887", "name": "伊利股份", "hot_rank": 77, "hot_rank_chg": 50, "stock_cnt": 5898, "price": "33.58", "change": "1.76", "market_id": "17", "circulate_market_value": "211350160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 78, "hot_rank_chg": -26, "stock_cnt": 5898, "price": "8.61", "change": "-7.42", "market_id": "17", "circulate_market_value": "15404481000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.3}, {"name": "纯碱", "change_pct": -2.45}, {"name": "食品", "change_pct": -0.75}, {"name": "土壤修复", "change_pct": -2.55}, {"name": "东数西算/算力", "change_pct": -4.38}, {"name": "OpenClaw概念", "change_pct": -3.97}, {"name": "算力租赁", "change_pct": -4.31}, {"name": "DeepSeek概念股", "change_pct": -4.32}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 79, "hot_rank_chg": -12, "stock_cnt": 5898, "price": "3.76", "change": "-6.47", "market_id": "17", "circulate_market_value": "4363639600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -2.03}, {"name": "浙江国企改革", "change_pct": -2.1}, {"name": "影视", "change_pct": -4.82}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -2.21}, {"name": "短剧/互动影游", "change_pct": -3.88}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 80, "hot_rank_chg": -33, "stock_cnt": 5898, "price": "49.61", "change": "-3.58", "market_id": "17", "circulate_market_value": "14807526000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 81, "hot_rank_chg": 31, "stock_cnt": 5898, "price": "4.68", "change": "0.43", "market_id": "17", "circulate_market_value": "11786626200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "工业大麻", "change_pct": -1.9}, {"name": "中药", "change_pct": 0.43}, {"name": "保健品", "change_pct": -0.17}, {"name": "民营医院", "change_pct": -1.31}, {"name": "医药", "change_pct": -0.63}, {"name": "化学原料药", "change_pct": -0.65}, {"name": "流感", "change_pct": 0.2}, {"name": "振兴东北", "change_pct": -1.19}, {"name": "食品", "change_pct": -0.75}, {"name": "肝炎概念", "change_pct": 0.14}]}, {"code": "603708", "name": "家家悦", "hot_rank": 82, "hot_rank_chg": 324, "stock_cnt": 5898, "price": "9.68", "change": "10.00", "market_id": "17", "circulate_market_value": "5992969600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.06}, {"name": "社区团购", "change_pct": -0.89}, {"name": "大消费", "change_pct": -0.24}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 83, "hot_rank_chg": 13, "stock_cnt": 5898, "price": "74.45", "change": "-1.99", "market_id": "33", "circulate_market_value": "259612270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 84, "hot_rank_chg": -47, "stock_cnt": 5898, "price": "80.30", "change": "-3.02", "market_id": "33", "circulate_market_value": "6317523400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 85, "hot_rank_chg": -10, "stock_cnt": 5898, "price": "15.20", "change": "0.53", "market_id": "17", "circulate_market_value": "9041445900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 86, "hot_rank_chg": 13, "stock_cnt": 5898, "price": "14.31", "change": "-3.96", "market_id": "33", "circulate_market_value": "2538708500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 87, "hot_rank_chg": -30, "stock_cnt": 5898, "price": "47.19", "change": "-7.87", "market_id": "17", "circulate_market_value": "84442474000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 88, "hot_rank_chg": -16, "stock_cnt": 5898, "price": "14.14", "change": "3.14", "market_id": "33", "circulate_market_value": "9831019300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601939", "name": "建设银行", "hot_rank": 89, "hot_rank_chg": -9, "stock_cnt": 5898, "price": "12.59", "change": "1.29", "market_id": "17", "circulate_market_value": "120784149000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": -0.36}, {"name": "银行", "change_pct": -0.02}, {"name": "破净股", "change_pct": -1.4}, {"name": "大金融", "change_pct": -0.72}]}, {"code": "601088", "name": "中国神华", "hot_rank": 90, "hot_rank_chg": 97, "stock_cnt": 5898, "price": "51.82", "change": "1.79", "market_id": "17", "circulate_market_value": "878281830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002038", "name": "双鹭药业", "hot_rank": 91, "hot_rank_chg": 164, "stock_cnt": 5898, "price": "4.90", "change": "10.11", "market_id": "33", "circulate_market_value": "4175754500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.9}, {"name": "创新药", "change_pct": -1.07}, {"name": "基因测序", "change_pct": -2.18}, {"name": "民营医院", "change_pct": -1.31}, {"name": "医药", "change_pct": -0.63}, {"name": "疫苗", "change_pct": -0.31}, {"name": "化学原料药", "change_pct": -0.65}, {"name": "流感", "change_pct": 0.2}, {"name": "长寿药NMN", "change_pct": 0.44}, {"name": "辅助生殖", "change_pct": -1.29}, {"name": "肝素", "change_pct": 0.74}, {"name": "基因编辑", "change_pct": -2.25}, {"name": "肝炎概念", "change_pct": 0.14}, {"name": "医美", "change_pct": -0.39}, {"name": "阿尔茨海默病", "change_pct": -0.89}, {"name": "新冠病毒防治", "change_pct": -1.36}, {"name": "肿瘤疫苗", "change_pct": -2.16}, {"name": "减肥药", "change_pct": -1.66}]}, {"code": "603926", "name": "铁流股份", "hot_rank": 92, "hot_rank_chg": 149, "stock_cnt": 5898, "price": "17.97", "change": "9.98", "market_id": "17", "circulate_market_value": "4148169800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器人零部件"}, {"code": "601857", "name": "中国石油", "hot_rank": 93, "hot_rank_chg": 22, "stock_cnt": 5898, "price": "12.30", "change": "-0.41", "market_id": "17", "circulate_market_value": "1991641600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": -0.36}, {"name": "央企改革", "change_pct": -2.39}, {"name": "一带一路", "change_pct": -3.02}, {"name": "石油化工", "change_pct": -2.36}, {"name": "天然气", "change_pct": -2.05}, {"name": "油气改革", "change_pct": -1.44}, {"name": "可燃冰", "change_pct": -2.67}, {"name": "中字头", "change_pct": -1.62}, {"name": "页岩气", "change_pct": -2.56}, {"name": "丁辛醇", "change_pct": -0.82}, {"name": "国企改革", "change_pct": -2.21}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 94, "hot_rank_chg": 4, "stock_cnt": 5898, "price": "46.00", "change": "-9.41", "market_id": "33", "circulate_market_value": "33360882000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 95, "hot_rank_chg": -24, "stock_cnt": 5898, "price": "5.05", "change": "-6.48", "market_id": "33", "circulate_market_value": "3863960700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.43}, {"name": "优化生育（三孩）", "change_pct": -1.51}, {"name": "医药商业", "change_pct": 0.49}, {"name": "保健品", "change_pct": -0.17}, {"name": "民营医院", "change_pct": -1.31}, {"name": "医药", "change_pct": -0.63}, {"name": "食品", "change_pct": -0.75}, {"name": "辅助生殖", "change_pct": -1.29}, {"name": "口腔", "change_pct": -1.8}, {"name": "医美", "change_pct": -0.39}, {"name": "新冠病毒防治", "change_pct": -1.36}]}, {"code": "600371", "name": "万向德农", "hot_rank": 96, "hot_rank_chg": 8, "stock_cnt": 5898, "price": "11.16", "change": "-7.16", "market_id": "17", "circulate_market_value": "3265170500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -1.72}, {"name": "转基因", "change_pct": -2.33}, {"name": "乡村振兴", "change_pct": -2.45}, {"name": "大农业", "change_pct": -1.95}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 97, "hot_rank_chg": 11, "stock_cnt": 5898, "price": "3.97", "change": "-7.89", "market_id": "33", "circulate_market_value": "3418815400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -4.11}, {"name": "一带一路", "change_pct": -3.02}, {"name": "强势人气股", "change_pct": 0.28}, {"name": "福建自贸/海西概念", "change_pct": -2.58}, {"name": "光伏", "change_pct": -4.41}, {"name": "有色金属", "change_pct": -4.06}, {"name": "新能源汽车", "change_pct": -4.89}, {"name": "新能源车零部件", "change_pct": -5.19}, {"name": "自贸区", "change_pct": -1.62}, {"name": "液冷服务器", "change_pct": -5.42}]}, {"code": "601288", "name": "农业银行", "hot_rank": 98, "hot_rank_chg": -25, "stock_cnt": 5898, "price": "7.96", "change": "0.38", "market_id": "17", "circulate_market_value": "2541183900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -3.25}, {"name": "高股息", "change_pct": -0.36}, {"name": "银行", "change_pct": -0.02}, {"name": "破净股", "change_pct": -1.4}, {"name": "大金融", "change_pct": -0.72}]}, {"code": "600223", "name": "福瑞达", "hot_rank": 99, "hot_rank_chg": 311, "stock_cnt": 5898, "price": "5.49", "change": "10.02", "market_id": "17", "circulate_market_value": "5580962600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "零售", "xgb_concepts": [{"name": "中药", "change_pct": 0.43}, {"name": "养老产业", "change_pct": -1.76}, {"name": "山东国企改革", "change_pct": -1.77}, {"name": "医药", "change_pct": -0.63}, {"name": "化学原料药", "change_pct": -0.65}, {"name": "腾讯概念股", "change_pct": -3.74}, {"name": "国企改革", "change_pct": -2.21}, {"name": "眼科", "change_pct": -0.85}, {"name": "医美", "change_pct": -0.39}, {"name": "化妆品", "change_pct": -1.84}, {"name": "麦角硫因", "change_pct": 1.05}, {"name": "合成生物", "change_pct": -1.96}, {"name": "微信小店", "change_pct": -0.92}]}, {"code": "301066", "name": "万事利", "hot_rank": 100, "hot_rank_chg": 136, "stock_cnt": 5898, "price": "12.74", "change": "19.96", "market_id": "33", "circulate_market_value": "2969771700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "丝绸文创", "xgb_concepts": [{"name": "人工智能", "change_pct": -3.99}, {"name": "纺织服装", "change_pct": -2.03}, {"name": "流感", "change_pct": 0.2}, {"name": "数字经济", "change_pct": -3.41}, {"name": "NFT", "change_pct": -1.88}, {"name": "化妆品", "change_pct": -1.84}, {"name": "回购", "change_pct": -4.59}, {"name": "AI大模型/智能体", "change_pct": -3.39}]}];
const LIMIT_UP_POOL = [{"code": "002122", "name": "汇洲智能", "price": 3.59, "change_pct": 10.12, "reason": "公司股票11月23日起撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 3, "turnover_ratio": 11.36, "first_limit_up": 1795569900, "break_limit_up_times": 0}, {"code": "300290", "name": "ST荣科", "price": 5.1, "change_pct": 20.0, "reason": "公司子公司辽宁智维云是超聚变的金牌经销商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 9.44, "first_limit_up": 1795584255, "break_limit_up_times": 2}, {"code": "002900", "name": "哈三联", "price": 9.68, "change_pct": 10.0, "reason": "1、公司旗下礼德生物作为创新药研发平台，聚焦抗肿瘤领域和免疫制剂研发 ，公司拥有包括创新药等在内的 40 余项在研项目，持续加大研发投入；\n2、公司美妆系列聚焦日常多护肤场景，打造精细化面膜矩阵；“哈三联”II 类医疗器械敷料系列搭载重组胶原蛋白与透明质酸钠两大核心成分，深耕问题性肌肤赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.26, "first_limit_up": 1795570713, "break_limit_up_times": 0}, {"code": "600229", "name": "城市传媒", "price": 5.41, "change_pct": 9.96, "reason": "1、公司推进头部IP全链条运营，开发人工智能生成内容应用产品，并推进以IP深度开发运营为核心的文化科技业务；\n2、公司针对出版行业开放了“万象出版大模型”，属于出版行业第一个垂直细分的大模型", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 6.73, "first_limit_up": 1795582893, "break_limit_up_times": 8}, {"code": "000838", "name": "*ST发展", "price": 1.34, "change_pct": 9.84, "reason": "公司携手产业投资人签约两江新区，拟布局2万吨高值资源循环基地", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.64, "first_limit_up": 1795572804, "break_limit_up_times": 1}, {"code": "600814", "name": "杭州解百", "price": 8.35, "change_pct": 10.01, "reason": "公司拥有解百购物广场，杭州大厦购物城，解百义乌店等，有望在免税政策开放背景下参与免税运营", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 5.44, "first_limit_up": 1795570202, "break_limit_up_times": 0}, {"code": "603960", "name": "克来机电", "price": 18.6, "change_pct": 9.99, "reason": "1、公司将柔性自动化装备与机器人系统应用于新能源汽车电驱、电控、功率半导体模组及汽车内饰安全件等领域；\n2、公司在光通讯领域研发的自动化组装测试装备已供货至光通讯器件生产商Finisar", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 1.46, "first_limit_up": 1795569900, "break_limit_up_times": 0}, {"code": "301089", "name": "拓新药业", "price": 21.34, "change_pct": 20.02, "reason": "1、公司产品尿苷是生产EIDD-2801的原料，EIDD-2801是生产新冠口服药Molnupiravir的原料；\n2、公司表示2024年新增了营养强化剂、食品添加剂及保健食品的研发与生产，并储备了麦角硫因、谷胱甘肽、辅酶Q10、γ - 氨基丁酸等功能食品的核心技术", "plates": ["麦角硫因"], "limit_up_days": 1, "turnover_ratio": 7.88, "first_limit_up": 1795570746, "break_limit_up_times": 0}, {"code": "600088", "name": "中视传媒", "price": 12.64, "change_pct": 10.01, "reason": "中央电视台旗下唯一上市公司，已形成影视、广告、旅游三大主营业务，在影视内容创制业务中承接少量短剧、短视频项目", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1795577041, "break_limit_up_times": 0}, {"code": "605577", "name": "龙版传媒", "price": 20.03, "change_pct": 9.99, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 11.63, "first_limit_up": 1795587801, "break_limit_up_times": 1}, {"code": "600722", "name": "金牛化工", "price": 13.15, "change_pct": 10.04, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 2, "turnover_ratio": 22.04, "first_limit_up": 1795584985, "break_limit_up_times": 0}, {"code": "000078", "name": "ST海王", "price": 1.18, "change_pct": 10.28, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1795574031, "break_limit_up_times": 29}, {"code": "603360", "name": "百傲化学", "price": 10.56, "change_pct": 10.0, "reason": "全资子公司芯傲华拟以7亿元增资苏州芯慧联半导体科技有限公司，后者主营业务为涂胶显影机、光刻机等黄光制程设备", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 8.21, "first_limit_up": 1795589415, "break_limit_up_times": 0}, {"code": "002579", "name": "中京电子", "price": 17.82, "change_pct": 10.0, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["其他"], "limit_up_days": 5, "turnover_ratio": 42.49, "first_limit_up": 1795589688, "break_limit_up_times": 0}, {"code": "002242", "name": "九阳股份", "price": 38.56, "change_pct": 10.01, "reason": "国内小家电行业领导品牌、豆浆机龙头；公司持有深思考7.92%股权，其深耕类脑人工智能与多模态语义理解技术；公司通过全资子公司参股享刻智能，以财务性投资方式布局机器人相关领域，相关业务尚处于早期阶段", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 14.18, "first_limit_up": 1795571121, "break_limit_up_times": 7}, {"code": "301066", "name": "万事利", "price": 12.74, "change_pct": 19.96, "reason": "公司主营丝绸文化创意品及数码印花加工，打造丝绸行业首个垂类实用图形AIGC大模型，构建智能设计下单平台，联动AI智能工厂实现柔性生产与即时交付", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 12.38, "first_limit_up": 1795572429, "break_limit_up_times": 2}, {"code": "002038", "name": "双鹭药业", "price": 4.9, "change_pct": 10.11, "reason": "公司表示硝酸甘油喷雾剂作为目前国内独家剂型，在心绞痛、心梗时急救产品的迅速起效十分重要", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.86, "first_limit_up": 1795570815, "break_limit_up_times": 8}, {"code": "002820", "name": "桂发祥", "price": 8.86, "change_pct": 10.06, "reason": "中国麻花行业龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.74, "first_limit_up": 1795574508, "break_limit_up_times": 0}, {"code": "688066", "name": "*ST航图", "price": 4.14, "change_pct": 20.0, "reason": "公司被债权人申请重整", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.96, "first_limit_up": 1795572153, "break_limit_up_times": 0}, {"code": "002275", "name": "桂林三金", "price": 13.82, "change_pct": 10.03, "reason": "公司拥有国家中药保护品种21种，核心产品三金片、西瓜霜等产品为全国知名品牌，作用有清热泻火，消肿止痛、治疗咽炎等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.75, "first_limit_up": 1795570851, "break_limit_up_times": 5}, {"code": "603030", "name": "全筑股份", "price": 2.61, "change_pct": 10.13, "reason": "1、公司与华芯极光在上海合资成立华芯全筑，华芯全筑致力于极紫外光源核心精密测量设备的研发与制造，同时为传统化光源路径攻关以及创新型光源技术落地提供支撑；\n2、公司成立云阙智算苏州物联科技有限公司，基于分布式数字与AI原生服务平台，聚焦数据产生端，推动分布式边缘AI算力服务及应用，目前业务尚处于早期试点培育阶段；\n3、公司主营建筑装饰工程，表示研发智能建筑装饰施工机器人", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 11.3, "first_limit_up": 1795569900, "break_limit_up_times": 1}, {"code": "002642", "name": "荣联科技", "price": 8.54, "change_pct": 10.05, "reason": "企业云计算和大数据专业服务提供商；公司中选存储设备集采项目，预计成交总金额8.49亿元", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 29.98, "first_limit_up": 1795572492, "break_limit_up_times": 7}, {"code": "000908", "name": "石药景峰", "price": 4.81, "change_pct": 10.07, "reason": "公司致力于创新药物研发，拥有多个创新药项目", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.26, "first_limit_up": 1795570371, "break_limit_up_times": 0}, {"code": "600223", "name": "福瑞达", "price": 5.49, "change_pct": 10.02, "reason": "子公司焦点福瑞达具备生物合成高纯麦角硫因能力，并参与起草《化妆品用原料麦角硫因》（T/FDSA 042-2023）团体标准", "plates": ["麦角硫因"], "limit_up_days": 1, "turnover_ratio": 2.74, "first_limit_up": 1795570448, "break_limit_up_times": 0}, {"code": "000593", "name": "德龙汇能", "price": 20.54, "change_pct": 10.02, "reason": "公司主营城市管道燃气和零售商业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.67, "first_limit_up": 1795570218, "break_limit_up_times": 0}, {"code": "002069", "name": "獐子岛", "price": 3.54, "change_pct": 9.94, "reason": "公司主要从事海珍品育种育苗、海水养殖增殖、海洋食品", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.9, "first_limit_up": 1795572888, "break_limit_up_times": 0}, {"code": "600180", "name": "*ST瑞茂", "price": 0.61, "change_pct": 10.91, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 3.89, "first_limit_up": 1795570246, "break_limit_up_times": 2}, {"code": "603122", "name": "合富中国", "price": 10.09, "change_pct": 10.03, "reason": "公司为唯一一家海峡两岸市场“双上市”的医疗企业，其母公司合富医疗控股在台湾上市，公司实际控制人为台湾企业家王琼芝，在两岸医疗流通领域有深度合作", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 12.91, "first_limit_up": 1795574214, "break_limit_up_times": 2}, {"code": "603708", "name": "家家悦", "price": 9.68, "change_pct": 10.0, "reason": "公司主营连锁超市经营，以大卖场和综合超市为主要业态，加强新零售业务推广，推动O2O及社区团购业务在公司连锁网络布局区域内全覆盖", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.33, "first_limit_up": 1795572290, "break_limit_up_times": 0}, {"code": "600227", "name": "赤天化", "price": 3.23, "change_pct": 9.86, "reason": "贵州最大的甲醇生产企业；公司化工业务涵盖尿素、甲醇及复合肥的生产和销售，具备年产52万吨尿素、10万吨复合肥、5万吨车用尿素的生产能力", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 21.4, "first_limit_up": 1795570404, "break_limit_up_times": 1}, {"code": "002164", "name": "宁波东力", "price": 21.7, "change_pct": 9.98, "reason": "公司重点布局谐波减速器与精密行星减速器，相关产品已实现批量试样及供货，配套业务进入产业化落地推进阶段", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 7.8, "first_limit_up": 1795570209, "break_limit_up_times": 3}, {"code": "002651", "name": "利君股份", "price": 7.9, "change_pct": 10.03, "reason": "1、子公司利君环际从事智能装备制造、工业机器人制造，已储备相关核心技术，部分产品正推动工业落地应用；\n2、全资子公司成都德坤航空设备制造有限公司主营航空航天零部件制造业务，德坤航空参与的长征系列火箭产品及朱雀系列火箭产品应用于商业航天领域", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 8.4, "first_limit_up": 1795570200, "break_limit_up_times": 3}, {"code": "002728", "name": "特一药业", "price": 8.35, "change_pct": 10.01, "reason": "广东省中成药、中药饮片行业领军品牌", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.78, "first_limit_up": 1795570293, "break_limit_up_times": 0}, {"code": "600280", "name": "中央商场", "price": 2.82, "change_pct": 10.16, "reason": "公司主营百货零售业以及部分房地产开发业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.79, "first_limit_up": 1795570838, "break_limit_up_times": 1}, {"code": "000826", "name": "*ST启环", "price": 1.17, "change_pct": 10.38, "reason": "公司专注于固废收集处置和水务生态综合治理；子公司启迪合加新能源已开发出各类环卫专用车220余款，其中新能源纯电动产品40余款，已开发出L4级纯电动无人驾驶环卫车辆", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 10.2, "first_limit_up": 1795573398, "break_limit_up_times": 17}, {"code": "002548", "name": "金新农", "price": 5.01, "change_pct": 10.11, "reason": "公司以“自繁自养”模式中种猪繁育为主，生猪产品主要包括种猪、仔猪和育肥猪", "plates": ["大农业"], "limit_up_days": 4, "turnover_ratio": 22.57, "first_limit_up": 1795569900, "break_limit_up_times": 2}, {"code": "300703", "name": "创源股份", "price": 17.8, "change_pct": 20.03, "reason": "公司拟收购酷乐潮玩旗下新设子公司90%股权，切入线下零售赛道", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 24.36, "first_limit_up": 1795572903, "break_limit_up_times": 1}, {"code": "002197", "name": "证通电子", "price": 6.41, "change_pct": 9.95, "reason": "1、公司算力业务依据客户订单进行扩容，现阶段全力推进机柜订单落地；\n2、国内最早研发金融电子设备的高新技术企业之一；公司已围绕数字货币加密算法、数字钱包设备及其应用、数字货币支付模组及支付设备、数字货币收单设备等关键领域开展一套完整的数字货币安全支付方案研究工作，可根据客户需求提供数字人民币支付对接到银行系统的应用开发解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.63, "first_limit_up": 1795571880, "break_limit_up_times": 0}, {"code": "002861", "name": "瀛通通讯", "price": 13.17, "change_pct": 10.03, "reason": "公司开发各类智能眼镜、音频眼镜产品，并对骨传导音频技术投入了研发", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.24, "first_limit_up": 1795570563, "break_limit_up_times": 0}, {"code": "600467", "name": "好当家", "price": 3.6, "change_pct": 10.09, "reason": "公司为海参养殖龙头，拥有国内面积最大、投资最多、产量最高的海参产业基地", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 19.29, "first_limit_up": 1795570293, "break_limit_up_times": 3}, {"code": "002480", "name": "新筑股份", "price": 5.2, "change_pct": 9.94, "reason": "公司拟购买蜀道清洁能源60%股权、出售轨交相关资产的重大重组已获四川省国资委批准，尚需深交所审核及证监会注册", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.41, "first_limit_up": 1795570632, "break_limit_up_times": 0}, {"code": "002145", "name": "钛能化学", "price": 3.72, "change_pct": 10.06, "reason": "公司拟6亿元—12亿元回购股份", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.23, "first_limit_up": 1795570203, "break_limit_up_times": 0}, {"code": "000756", "name": "新华制药", "price": 12.16, "change_pct": 10.05, "reason": "公司治疗阿尔茨海默病的一类创新药OAB-14正在进行I期临床研究", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.85, "first_limit_up": 1795573254, "break_limit_up_times": 3}, {"code": "603926", "name": "铁流股份", "price": 17.97, "change_pct": 9.98, "reason": "公司空心电机轴处在客户产品开发阶段，子公司广东中配互联网科技公司在云计算、BI分析、智能机器人等方面已进行投入", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 11.43, "first_limit_up": 1795570544, "break_limit_up_times": 15}, {"code": "603887", "name": "城地香江", "price": 8.48, "change_pct": 9.99, "reason": "1、公司为上海电信客户字节提供定制化数据中心服务，合计实现计费销售18兆瓦；\n2、子公司香江科技主营IDC相关设备和解决方案、IDC系统集成以及IDC运营管理和增值服务业务，与华为签署全面合作协议。\n3、实际控制人将由谢晓东及其一致行动人卢静芳变更为国务院国有资产监督管理委员会", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 10.77, "first_limit_up": 1795572227, "break_limit_up_times": 1}, {"code": "002864", "name": "盘龙药业", "price": 19.86, "change_pct": 10.03, "reason": "集药材GAP种植、药品研产销和医药物流为一体的现代中药企业；公司冠状病毒3CL蛋白酶PROTACs获美国2项专利授权", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.76, "first_limit_up": 1795570737, "break_limit_up_times": 0}, {"code": "002872", "name": "天圣制药", "price": 7.1, "change_pct": 10.08, "reason": "公司撤销撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 2, "turnover_ratio": 1.47, "first_limit_up": 1795569900, "break_limit_up_times": 0}, {"code": "002144", "name": "宏达高科", "price": 9.08, "change_pct": 10.06, "reason": "1、孙公司浙江威尔德开发有智能按摩机器人；\n2、国内经编面料龙头，为宝马，长城，比亚迪等汽车品牌的新能源车型供应汽车内饰面料产品；\n3、全资子公司威尔德主要从事超声诊断、治疗设备、体外诊断试剂", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.27, "first_limit_up": 1795575753, "break_limit_up_times": 0}, {"code": "601086", "name": "国芳集团", "price": 10.75, "change_pct": 10.03, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.25, "first_limit_up": 1795572361, "break_limit_up_times": 0}, {"code": "000702", "name": "正虹科技", "price": 4.88, "change_pct": 9.91, "reason": "公司生猪养殖业务主要采用自繁自养和育肥猪“公司+农户”代养的运营模式", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 3.71, "first_limit_up": 1795570221, "break_limit_up_times": 0}, {"code": "301211", "name": "亨迪药业", "price": 11.11, "change_pct": 19.98, "reason": "公司原料药产品主要为非甾体抗炎类原料药布洛芬和右旋布洛芬等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.65, "first_limit_up": 1795570404, "break_limit_up_times": 0}, {"code": "600103", "name": "青山纸业", "price": 3.78, "change_pct": 9.88, "reason": "1、控股子公司恒宝通光主营光通信模块及组件产品的研产销，系国家级高新技术企业，产品主要应用于移动通信领域，为全球大型模拟半导体设备供应厂商Avago逾十年的供应商；\n2、综合性造纸上市公司，实控人福建省国资委；公司主要产品为“青山牌”系列伸性纸袋纸、牛皮包装纸、溶解浆等产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 30.59, "first_limit_up": 1795571720, "break_limit_up_times": 3}, {"code": "603069", "name": "海汽集团", "price": 11.02, "change_pct": 9.98, "reason": "海南本地股，公司重大资产重组继续推进，拟以现金及/或资产方式收购剥离华庭项目后的海旅免税控制权", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.0, "first_limit_up": 1795570524, "break_limit_up_times": 0}, {"code": "605136", "name": "丽人丽妆", "price": 7.85, "change_pct": 9.94, "reason": "国内领先化妆品网络零售服务商，推出了“千金极光饮”产品，同步搭配白番茄浓缩粉、麦角硫因、胶原三肽等科技成分，养出“千金白”", "plates": ["麦角硫因"], "limit_up_days": 1, "turnover_ratio": 2.17, "first_limit_up": 1795570340, "break_limit_up_times": 0}, {"code": "300086", "name": "康芝药业", "price": 4.85, "change_pct": 20.05, "reason": "海南本地股，主营儿童用药，涵盖解热镇痛类、感冒类；全资子公司中山爱护专注于母婴健康护理产品，产品涵盖驱蚊液、驱蚊花露等驱蚊产品", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 15.2, "first_limit_up": 1795571976, "break_limit_up_times": 2}, {"code": "603324", "name": "盛剑科技", "price": 32.27, "change_pct": 9.99, "reason": "1、公司持续推进电子化学品材料研发、制备生产、客户验证等工作；电子化学品材料（主要为光刻胶剥离液）已经实现生产销售，光刻胶显影液（TMAH）回收技术在客户端测试验证成功；\n2、公司为华为武汉研发生产项目-海思光工厂洁净室提供工艺废气治理系统", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 21.98, "first_limit_up": 1795571946, "break_limit_up_times": 10}, {"code": "600829", "name": "人民同泰", "price": 8.39, "change_pct": 9.96, "reason": "黑龙江省内最大的医药商业公司，哈药集团医疗商业上市平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.07, "first_limit_up": 1795572608, "break_limit_up_times": 4}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000820": "[行政处罚事先告知书] 神雾节能：关于收到《行政处罚事先告知书》的公告", "688225": "[行政处罚事先告知书] 亚信集团：关于公司财务总监因非本公司事项收到行政处罚事先告知书暨辞去职务的公告", "300670": "[行政处罚事先告知书] 大烨智能：关于收到《行政处罚事先告知书》的公告", "300500": "[行政处罚事先告知书] 启迪设计：关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》的公告", "301030": "[行政处罚事先告知书] *ST仕净：关于收到《行政处罚事先告知书》的公告", "688033": "[行政处罚事先告知书] *ST天宜：关于公司收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的", "000892": "[行政处罚事先告知书] 欢瑞世纪：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920249": "[行政处罚事先告知书] [临时公告]利尔达:关于公司及相关当事人收到中国证券监督管理委员会浙江监管局行政", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行"};