const UPDATE_TIME = "2026-11-16 13:19";
const THS_HOT = [
  {
    "name": "高股息精选",
    "rise": 1.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "红利ETF",
    "code": "886072"
  },
  {
    "name": "猪肉",
    "rise": 0.63,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -6.4,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续330天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "短剧游戏",
    "rise": -1.36,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -3.38,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "冰雪产业",
    "rise": 0.07,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "人形机器人",
    "rise": -3.84,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": -2.98,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "商业航天",
    "rise": -4.12,
    "rate": 0,
    "tag": "",
    "hotTag": "连续259天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "AI应用",
    "rise": -2.19,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续88天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -1.72,
    "rate": 0,
    "tag": "",
    "hotTag": "连续160天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粤港澳大湾区",
    "rise": -2.5,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885521"
  },
  {
    "name": "文化传媒概念",
    "rise": -1.36,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "储能",
    "rise": -2.43,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "885921"
  },
  {
    "name": "人工智能",
    "rise": -2.54,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续37天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "PCB概念",
    "rise": -5.47,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续153天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "白酒概念",
    "rise": -0.18,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "存储芯片",
    "rise": -5.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续283天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "芯片概念",
    "rise": -4.52,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续40天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "超级品牌",
    "rise": 0.4,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885761"
  }
];
const THS_EVENTS = [
  {
    "title": "BLG夺S16全球总决赛冠军，B站向全体用户赠送7天大会员",
    "desc": "",
    "heat": 340078,
    "direction": "游戏",
    "themes": [
      "游戏",
      "手机游戏",
      "云游戏",
      "网络游戏",
      "电子竞技"
    ],
    "stocks": [
      {
        "name": "凯撒文化",
        "code": "002425",
        "chg": 10.10101
      }
    ]
  },
  {
    "title": "新型储能“十五五”目标定了：2030年装机3亿千瓦，步入市场化阶段",
    "desc": "",
    "heat": 180456,
    "direction": "储能",
    "themes": [
      "储能"
    ],
    "stocks": [
      {
        "name": "领湃科技",
        "code": "300530",
        "chg": 20.008624
      }
    ]
  },
  {
    "title": "7000亿家电龙头，历史新高",
    "desc": "",
    "heat": 179200,
    "direction": "家用电器",
    "themes": [
      "小家电",
      "厨卫电器"
    ],
    "stocks": [
      {
        "name": "北鼎股份",
        "code": "300824",
        "chg": 19.944212
      }
    ]
  },
  {
    "title": "51个一类新药纳入新版医保目录 CAR-T疗法首次进入国家医保目录",
    "desc": "",
    "heat": 158126,
    "direction": "创新药",
    "themes": [
      "ADC药物",
      "PD-1",
      "创新药"
    ],
    "stocks": [
      {
        "name": "柳药集团",
        "code": "603368",
        "chg": 6.511057
      }
    ]
  },
  {
    "title": "SpaceX首次成功实现“筷子夹飞船”",
    "desc": "",
    "heat": 52695,
    "direction": "SpaceX",
    "themes": [
      "商业航天"
    ],
    "stocks": [
      {
        "name": "ST创意",
        "code": "300366",
        "chg": 8.40708
      }
    ]
  },
  {
    "title": "中信建投：谷歌新模型发布、黄仁勋离任英伟达，持续推荐国产算力产业链",
    "desc": "",
    "heat": 10835,
    "direction": "国产算力芯片",
    "themes": [
      "TPU",
      "CPU",
      "GPU"
    ],
    "stocks": [
      {
        "name": "华东重机",
        "code": "002685",
        "chg": 9.927798
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黑龙江自贸区",
    "change": "+2.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+1.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+1.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+1.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+1.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+1.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "+1.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+1.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "+1.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+1.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+0.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+0.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+0.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "进口博览会",
    "change": "+0.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "+0.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+0.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中欧班列",
    "change": "+0.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+0.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5811,
    "price": "3.74",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "10705272200.00",
    "change_type": "1",
    "change_section": "19",
    "change_days": "11",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.52
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "游戏",
        "change_pct": -1.75
      },
      {
        "name": "影视",
        "change_pct": -0.37
      },
      {
        "name": "国企改革",
        "change_pct": -0.97
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.59
      },
      {
        "name": "AI视频",
        "change_pct": -2.98
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 3,
    "hot_rank_chg": 5,
    "stock_cnt": 5811,
    "price": "4.34",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "6861415300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.61
      },
      {
        "name": "体外诊断",
        "change_pct": -1.57
      },
      {
        "name": "医疗器械",
        "change_pct": -1.91
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "基因测序",
        "change_pct": -1.84
      },
      {
        "name": "预制菜",
        "change_pct": -0.84
      },
      {
        "name": "水产养殖",
        "change_pct": -4.22
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.51
      },
      {
        "name": "海洋经济",
        "change_pct": -2.96
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 4,
    "hot_rank_chg": 11,
    "stock_cnt": 5811,
    "price": "11.00",
    "change": "6.49",
    "market_id": "33",
    "circulate_market_value": "6601284000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.38
      },
      {
        "name": "边缘计算",
        "change_pct": -3.02
      },
      {
        "name": "核电",
        "change_pct": -2.37
      },
      {
        "name": "海工装备",
        "change_pct": -1.78
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.87
      },
      {
        "name": "冷链",
        "change_pct": -0.38
      },
      {
        "name": "地热",
        "change_pct": -1.76
      },
      {
        "name": "储能",
        "change_pct": -1.97
      },
      {
        "name": "碳中和",
        "change_pct": -0.99
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.26
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.95
      },
      {
        "name": "热泵",
        "change_pct": -2.13
      },
      {
        "name": "液冷服务器",
        "change_pct": -4.74
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.02
      },
      {
        "name": "海洋经济",
        "change_pct": -2.96
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 5,
    "hot_rank_chg": 16,
    "stock_cnt": 5811,
    "price": "5.18",
    "change": "-9.60",
    "market_id": "17",
    "circulate_market_value": "6915574400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.76
      },
      {
        "name": "物联网",
        "change_pct": -2.97
      },
      {
        "name": "LED",
        "change_pct": -3.83
      },
      {
        "name": "卫星互联网",
        "change_pct": -4.99
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 8,
    "hot_rank_chg": -3,
    "stock_cnt": 5811,
    "price": "12.51",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "10171231700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "充电桩",
        "change_pct": -2.4
      },
      {
        "name": "光伏",
        "change_pct": -3.68
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.52
      },
      {
        "name": "家电",
        "change_pct": -1.02
      },
      {
        "name": "储能",
        "change_pct": -1.97
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -2.13
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -2.7
      },
      {
        "name": "厨卫家电",
        "change_pct": -0.32
      },
      {
        "name": "华为产业链",
        "change_pct": -3.26
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 9,
    "hot_rank_chg": -8,
    "stock_cnt": 5811,
    "price": "4.36",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "4012010600.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "AI游戏",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.52
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.18
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "人工智能",
        "change_pct": -2.88
      },
      {
        "name": "VR&AR",
        "change_pct": -3.87
      },
      {
        "name": "游戏",
        "change_pct": -1.75
      },
      {
        "name": "动漫",
        "change_pct": -2.32
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.59
      },
      {
        "name": "快手概念股",
        "change_pct": -2.41
      },
      {
        "name": "NFT",
        "change_pct": -2.07
      },
      {
        "name": "元宇宙",
        "change_pct": -2.83
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.93
      },
      {
        "name": "云游戏",
        "change_pct": -2.67
      },
      {
        "name": "华为产业链",
        "change_pct": -3.26
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 11,
    "hot_rank_chg": 30,
    "stock_cnt": 5811,
    "price": "4.73",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "6174872700.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "7",
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "高速公路",
        "change_pct": 1.89
      },
      {
        "name": "振兴东北",
        "change_pct": -0.02
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 2.22
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 12,
    "hot_rank_chg": -6,
    "stock_cnt": 5811,
    "price": "8.75",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3946482800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "四足机器人",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -3.02
      },
      {
        "name": "手游",
        "change_pct": -1.52
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "游戏",
        "change_pct": -1.75
      },
      {
        "name": "物联网",
        "change_pct": -2.97
      },
      {
        "name": "机器人",
        "change_pct": -3.38
      },
      {
        "name": "无人机",
        "change_pct": -3.87
      },
      {
        "name": "国产芯片",
        "change_pct": -5.17
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.83
      },
      {
        "name": "低空经济",
        "change_pct": -3.55
      },
      {
        "name": "无人物流车",
        "change_pct": -1.96
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 14,
    "hot_rank_chg": 8,
    "stock_cnt": 5811,
    "price": "11.80",
    "change": "-9.99",
    "market_id": "17",
    "circulate_market_value": "12329676600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -4.2
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.32
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -1.05
      },
      {
        "name": "国企改革",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 16,
    "hot_rank_chg": 37,
    "stock_cnt": 5811,
    "price": "2.68",
    "change": "-1.83",
    "market_id": "33",
    "circulate_market_value": "11789345300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -4.2
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "京津冀",
        "change_pct": -1.64
      },
      {
        "name": "旅游",
        "change_pct": -0.61
      },
      {
        "name": "园林",
        "change_pct": -2.22
      },
      {
        "name": "海绵城市",
        "change_pct": -0.63
      },
      {
        "name": "固废处理",
        "change_pct": -1.58
      },
      {
        "name": "光伏",
        "change_pct": -3.68
      },
      {
        "name": "风电",
        "change_pct": -1.83
      },
      {
        "name": "雄安新区",
        "change_pct": -1.8
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.36
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -2.17
      },
      {
        "name": "储能",
        "change_pct": -1.97
      },
      {
        "name": "碳中和",
        "change_pct": -0.99
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.24
      },
      {
        "name": "汽车拆解",
        "change_pct": -0.52
      },
      {
        "name": "土壤修复",
        "change_pct": -1.71
      },
      {
        "name": "核污染防治",
        "change_pct": -3.36
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.51
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.11
      },
      {
        "name": "低价股",
        "change_pct": -1.47
      },
      {
        "name": "西部大开发",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 18,
    "hot_rank_chg": 33,
    "stock_cnt": 5811,
    "price": "11.71",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "6633460800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "石墨烯",
        "change_pct": -3.21
      },
      {
        "name": "军民融合",
        "change_pct": -3.94
      },
      {
        "name": "物联网",
        "change_pct": -2.97
      },
      {
        "name": "LED",
        "change_pct": -3.83
      },
      {
        "name": "军工",
        "change_pct": -3.75
      },
      {
        "name": "智慧灯杆",
        "change_pct": -3.39
      },
      {
        "name": "海洋经济",
        "change_pct": -2.96
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 19,
    "hot_rank_chg": 67,
    "stock_cnt": 5811,
    "price": "2.96",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "10329773000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "AI微短剧",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -0.29
      },
      {
        "name": "车联网/车路云",
        "change_pct": -3.02
      },
      {
        "name": "超高清视频",
        "change_pct": -2.0
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "人工智能",
        "change_pct": -2.88
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.87
      },
      {
        "name": "影视",
        "change_pct": -0.37
      },
      {
        "name": "智慧城市",
        "change_pct": -2.63
      },
      {
        "name": "国产芯片",
        "change_pct": -5.17
      },
      {
        "name": "振兴东北",
        "change_pct": -0.02
      },
      {
        "name": "传媒",
        "change_pct": -1.05
      },
      {
        "name": "低价股",
        "change_pct": -1.47
      },
      {
        "name": "国企改革",
        "change_pct": -0.97
      },
      {
        "name": "在线教育",
        "change_pct": -1.39
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.04
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.29
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.59
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 22,
    "hot_rank_chg": -9,
    "stock_cnt": 5811,
    "price": "6.10",
    "change": "8.35",
    "market_id": "17",
    "circulate_market_value": "3411849200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.52
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.18
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "游戏",
        "change_pct": -1.75
      },
      {
        "name": "影视",
        "change_pct": -0.37
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.59
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 24,
    "hot_rank_chg": -5,
    "stock_cnt": 5811,
    "price": "5.81",
    "change": "-10.06",
    "market_id": "17",
    "circulate_market_value": "5140569000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.52
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "信托",
        "change_pct": 0.76
      },
      {
        "name": "民营医院",
        "change_pct": -1.34
      },
      {
        "name": "汽车销售",
        "change_pct": -0.33
      },
      {
        "name": "社区团购",
        "change_pct": -1.6
      },
      {
        "name": "大金融",
        "change_pct": 1.24
      },
      {
        "name": "餐饮",
        "change_pct": -0.37
      },
      {
        "name": "首发经济",
        "change_pct": 0.21
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 25,
    "hot_rank_chg": 5,
    "stock_cnt": 5811,
    "price": "5.06",
    "change": "0.40",
    "market_id": "17",
    "circulate_market_value": "5872344800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "纺织服装",
        "change_pct": -1.4
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.82
      },
      {
        "name": "影视",
        "change_pct": -0.37
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.97
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.59
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 26,
    "hot_rank_chg": 19,
    "stock_cnt": 5811,
    "price": "10.12",
    "change": "5.42",
    "market_id": "33",
    "circulate_market_value": "4793644500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.52
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "VR&AR",
        "change_pct": -3.87
      },
      {
        "name": "游戏",
        "change_pct": -1.75
      },
      {
        "name": "影视",
        "change_pct": -0.37
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.13
      },
      {
        "name": "动漫",
        "change_pct": -2.32
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.59
      },
      {
        "name": "传媒",
        "change_pct": -1.05
      },
      {
        "name": "元宇宙",
        "change_pct": -2.83
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.59
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 27,
    "hot_rank_chg": 13,
    "stock_cnt": 5811,
    "price": "9.18",
    "change": "-2.13",
    "market_id": "33",
    "circulate_market_value": "37084991000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -5.64
      },
      {
        "name": "一带一路",
        "change_pct": -1.37
      },
      {
        "name": "京津冀",
        "change_pct": -1.64
      },
      {
        "name": "光伏",
        "change_pct": -3.68
      },
      {
        "name": "复牌股",
        "change_pct": -2.49
      },
      {
        "name": "碳中和",
        "change_pct": -0.99
      },
      {
        "name": "国产芯片",
        "change_pct": -5.17
      },
      {
        "name": "IGBT",
        "change_pct": -3.93
      },
      {
        "name": "颗粒硅",
        "change_pct": -3.84
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -4.7
      },
      {
        "name": "大硅片",
        "change_pct": -4.94
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -5.05
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 29,
    "hot_rank_chg": -12,
    "stock_cnt": 5811,
    "price": "7.67",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "5375861800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.52
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.88
      },
      {
        "name": "物业管理",
        "change_pct": -1.87
      },
      {
        "name": "预制菜",
        "change_pct": -0.84
      },
      {
        "name": "地摊经济",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "600853",
    "name": "龙建股份",
    "hot_rank": 33,
    "hot_rank_chg": 69,
    "stock_cnt": 5811,
    "price": "4.44",
    "change": "6.22",
    "market_id": "17",
    "circulate_market_value": "4500848100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.37
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "水利",
        "change_pct": -1.07
      },
      {
        "name": "智慧城市",
        "change_pct": -2.63
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.26
      },
      {
        "name": "振兴东北",
        "change_pct": -0.02
      },
      {
        "name": "大基建",
        "change_pct": -0.91
      },
      {
        "name": "中俄贸易",
        "change_pct": -0.23
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.11
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 2.22
      },
      {
        "name": "旧改",
        "change_pct": -1.44
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 36,
    "hot_rank_chg": -7,
    "stock_cnt": 5811,
    "price": "4.90",
    "change": "-9.93",
    "market_id": "33",
    "circulate_market_value": "4219696500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -2.94
      },
      {
        "name": "一带一路",
        "change_pct": -1.37
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.89
      },
      {
        "name": "光伏",
        "change_pct": -3.68
      },
      {
        "name": "有色金属",
        "change_pct": -3.56
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.52
      },
      {
        "name": "新能源车零部件",
        "change_pct": -3.19
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      },
      {
        "name": "液冷服务器",
        "change_pct": -4.74
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 37,
    "hot_rank_chg": 51,
    "stock_cnt": 5811,
    "price": "9.05",
    "change": "2.26",
    "market_id": "17",
    "circulate_market_value": "2439990500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.3
      },
      {
        "name": "高股息",
        "change_pct": 1.33
      },
      {
        "name": "银行",
        "change_pct": 1.76
      },
      {
        "name": "白马股",
        "change_pct": 0.19
      },
      {
        "name": "破净股",
        "change_pct": -0.03
      },
      {
        "name": "大金融",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 48,
    "hot_rank_chg": -21,
    "stock_cnt": 5811,
    "price": "6.09",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "6136218900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "GPU芯片",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.37
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "工业自动化",
        "change_pct": -3.8
      },
      {
        "name": "机械",
        "change_pct": -1.04
      },
      {
        "name": "智能制造",
        "change_pct": -3.44
      },
      {
        "name": "国产芯片",
        "change_pct": -5.17
      },
      {
        "name": "信创",
        "change_pct": -3.23
      },
      {
        "name": "AI算力芯片",
        "change_pct": -5.55
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 49,
    "hot_rank_chg": 22,
    "stock_cnt": 5811,
    "price": "5.39",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "4124108500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.0
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "医药商业",
        "change_pct": -0.13
      },
      {
        "name": "保健品",
        "change_pct": -0.31
      },
      {
        "name": "民营医院",
        "change_pct": -1.34
      },
      {
        "name": "医药",
        "change_pct": -1.72
      },
      {
        "name": "食品",
        "change_pct": -0.15
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.47
      },
      {
        "name": "口腔",
        "change_pct": -2.54
      },
      {
        "name": "医美",
        "change_pct": -0.58
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.51
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 53,
    "hot_rank_chg": 69,
    "stock_cnt": 5811,
    "price": "6.96",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "3189408900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -0.73
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.89
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 57,
    "hot_rank_chg": 28,
    "stock_cnt": 5811,
    "price": "9.31",
    "change": "-2.92",
    "market_id": "33",
    "circulate_market_value": "9868182700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.92
      },
      {
        "name": "电子烟",
        "change_pct": -2.87
      },
      {
        "name": "一带一路",
        "change_pct": -1.37
      },
      {
        "name": "造纸",
        "change_pct": -1.26
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "包装印刷",
        "change_pct": -2.05
      },
      {
        "name": "卫星互联网",
        "change_pct": -4.99
      },
      {
        "name": "太空算力",
        "change_pct": -5.87
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 62,
    "hot_rank_chg": 96,
    "stock_cnt": 5811,
    "price": "3.15",
    "change": "-0.94",
    "market_id": "17",
    "circulate_market_value": "6968836500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -1.26
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.87
      },
      {
        "name": "光通信",
        "change_pct": -6.8
      },
      {
        "name": "林业",
        "change_pct": -2.43
      },
      {
        "name": "军民融合",
        "change_pct": -3.94
      },
      {
        "name": "军工",
        "change_pct": -3.75
      },
      {
        "name": "人造肉",
        "change_pct": -1.22
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 64,
    "hot_rank_chg": 29,
    "stock_cnt": 5811,
    "price": "6.16",
    "change": "-8.47",
    "market_id": "33",
    "circulate_market_value": "11796969500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.89
      },
      {
        "name": "林业",
        "change_pct": -2.43
      },
      {
        "name": "碳中和",
        "change_pct": -0.99
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 65,
    "hot_rank_chg": 206,
    "stock_cnt": 5811,
    "price": "3.75",
    "change": "5.63",
    "market_id": "17",
    "circulate_market_value": "3775500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.87
      },
      {
        "name": "钢铁",
        "change_pct": -0.48
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "煤化工",
        "change_pct": 0.6
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 68,
    "hot_rank_chg": 4,
    "stock_cnt": 5811,
    "price": "8.90",
    "change": "-9.18",
    "market_id": "17",
    "circulate_market_value": "5711870600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.74
      },
      {
        "name": "农业种植",
        "change_pct": -1.96
      },
      {
        "name": "湖南国企改革",
        "change_pct": -1.01
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.24
      },
      {
        "name": "休闲食品",
        "change_pct": -0.41
      },
      {
        "name": "食品",
        "change_pct": -0.15
      },
      {
        "name": "食品安全",
        "change_pct": -2.6
      },
      {
        "name": "社区团购",
        "change_pct": -1.6
      },
      {
        "name": "大农业",
        "change_pct": -1.14
      },
      {
        "name": "预制菜",
        "change_pct": -0.84
      },
      {
        "name": "人造肉",
        "change_pct": -1.22
      },
      {
        "name": "国企改革",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 70,
    "hot_rank_chg": 47,
    "stock_cnt": 5811,
    "price": "9.46",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "3162089400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.64
      },
      {
        "name": "饲料",
        "change_pct": -0.56
      },
      {
        "name": "一带一路",
        "change_pct": -1.37
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "保健品",
        "change_pct": -0.31
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.64
      },
      {
        "name": "污水处理",
        "change_pct": -1.76
      },
      {
        "name": "环保",
        "change_pct": -2.17
      },
      {
        "name": "食品",
        "change_pct": -0.15
      },
      {
        "name": "预制菜",
        "change_pct": -0.84
      },
      {
        "name": "国企改革",
        "change_pct": -0.97
      },
      {
        "name": "水产养殖",
        "change_pct": -4.22
      },
      {
        "name": "广西概念",
        "change_pct": -1.52
      }
    ]
  },
  {
    "code": "601288",
    "name": "农业银行",
    "hot_rank": 72,
    "hot_rank_chg": 135,
    "stock_cnt": 5811,
    "price": "7.59",
    "change": "2.98",
    "market_id": "17",
    "circulate_market_value": "2423063600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.3
      },
      {
        "name": "高股息",
        "change_pct": 1.33
      },
      {
        "name": "银行",
        "change_pct": 1.76
      },
      {
        "name": "破净股",
        "change_pct": -0.03
      },
      {
        "name": "大金融",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 73,
    "hot_rank_chg": 37,
    "stock_cnt": 5811,
    "price": "10.77",
    "change": "5.80",
    "market_id": "17",
    "circulate_market_value": "6245400200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": -0.13
      },
      {
        "name": "民营医院",
        "change_pct": -1.34
      },
      {
        "name": "医药",
        "change_pct": -1.72
      },
      {
        "name": "振兴东北",
        "change_pct": -0.02
      },
      {
        "name": "宠物经济",
        "change_pct": -1.15
      },
      {
        "name": "眼科",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 75,
    "hot_rank_chg": 59,
    "stock_cnt": 5811,
    "price": "10.89",
    "change": "-5.39",
    "market_id": "17",
    "circulate_market_value": "4365604800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -0.32
      },
      {
        "name": "新零售",
        "change_pct": -0.52
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "物业管理",
        "change_pct": -1.87
      },
      {
        "name": "国企改革",
        "change_pct": -0.97
      },
      {
        "name": "地摊经济",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 76,
    "hot_rank_chg": 56,
    "stock_cnt": 5811,
    "price": "10.44",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "5999211800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -1.4
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.89
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "002520",
    "name": "日发精机",
    "hot_rank": 80,
    "hot_rank_chg": -62,
    "stock_cnt": 5811,
    "price": "7.61",
    "change": "-1.17",
    "market_id": "33",
    "circulate_market_value": "5367509300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "通用航空",
        "change_pct": -3.86
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "工业自动化",
        "change_pct": -3.8
      },
      {
        "name": "大飞机",
        "change_pct": -4.1
      },
      {
        "name": "军民融合",
        "change_pct": -3.94
      },
      {
        "name": "风电",
        "change_pct": -1.83
      },
      {
        "name": "军工",
        "change_pct": -3.75
      },
      {
        "name": "机器人",
        "change_pct": -3.38
      },
      {
        "name": "智能制造",
        "change_pct": -3.44
      },
      {
        "name": "工业母机",
        "change_pct": -4.23
      },
      {
        "name": "减速器",
        "change_pct": -3.42
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 81,
    "hot_rank_chg": 18,
    "stock_cnt": 5811,
    "price": "7.54",
    "change": "-5.16",
    "market_id": "33",
    "circulate_market_value": "12267533100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.47
      },
      {
        "name": "电竞",
        "change_pct": -1.94
      },
      {
        "name": "手游",
        "change_pct": -1.52
      },
      {
        "name": "人工智能",
        "change_pct": -2.88
      },
      {
        "name": "游戏",
        "change_pct": -1.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.53
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.59
      },
      {
        "name": "传媒",
        "change_pct": -1.05
      },
      {
        "name": "快手概念股",
        "change_pct": -2.41
      },
      {
        "name": "元宇宙",
        "change_pct": -2.83
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.6
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.51
      },
      {
        "name": "web3.0",
        "change_pct": -3.51
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.7
      },
      {
        "name": "数据要素",
        "change_pct": -2.65
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.93
      },
      {
        "name": "AI营销",
        "change_pct": -2.75
      },
      {
        "name": "ChatGPT",
        "change_pct": -3.96
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -4.49
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.29
      },
      {
        "name": "人形机器人",
        "change_pct": -4.1
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.59
      },
      {
        "name": "多模态",
        "change_pct": -3.71
      },
      {
        "name": "AI视频",
        "change_pct": -2.98
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.35
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.02
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 82,
    "hot_rank_chg": 137,
    "stock_cnt": 5811,
    "price": "4.80",
    "change": "2.35",
    "market_id": "17",
    "circulate_market_value": "5848377800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -2.94
      },
      {
        "name": "煤炭",
        "change_pct": 0.87
      },
      {
        "name": "有色金属",
        "change_pct": -3.56
      },
      {
        "name": "国企改革",
        "change_pct": -0.97
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.58
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 83,
    "hot_rank_chg": -69,
    "stock_cnt": 5811,
    "price": "6.32",
    "change": "-6.79",
    "market_id": "33",
    "circulate_market_value": "7349195100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "影视",
        "change_pct": -0.37
      },
      {
        "name": "新疆概念",
        "change_pct": -1.71
      },
      {
        "name": "动漫",
        "change_pct": -2.32
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.71
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.59
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.59
      },
      {
        "name": "AI视频",
        "change_pct": -2.98
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 87,
    "hot_rank_chg": 102,
    "stock_cnt": 5811,
    "price": "8.96",
    "change": "-3.66",
    "market_id": "17",
    "circulate_market_value": "7785816900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.47
      },
      {
        "name": "快递物流",
        "change_pct": -0.29
      },
      {
        "name": "新零售",
        "change_pct": -0.52
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.89
      },
      {
        "name": "旅游",
        "change_pct": -0.61
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.71
      },
      {
        "name": "物业管理",
        "change_pct": -1.87
      },
      {
        "name": "免税店概念",
        "change_pct": 0.0
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 89,
    "hot_rank_chg": -42,
    "stock_cnt": 5811,
    "price": "10.20",
    "change": "1.49",
    "market_id": "33",
    "circulate_market_value": "21236419000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.37
      },
      {
        "name": "足球",
        "change_pct": -1.01
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.71
      },
      {
        "name": "拼多多概念股",
        "change_pct": -3.08
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.83
      },
      {
        "name": "盲盒",
        "change_pct": -1.93
      },
      {
        "name": "华为产业链",
        "change_pct": -3.26
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.59
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.35
      },
      {
        "name": "首发经济",
        "change_pct": 0.21
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.02
      },
      {
        "name": "服务消费",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "002548",
    "name": "金新农",
    "hot_rank": 92,
    "hot_rank_chg": -34,
    "stock_cnt": 5811,
    "price": "4.21",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "3386825000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "生猪养殖",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -0.56
      },
      {
        "name": "养猪",
        "change_pct": 0.66
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "大农业",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 97,
    "hot_rank_chg": 79,
    "stock_cnt": 5811,
    "price": "11.02",
    "change": "-9.97",
    "market_id": "17",
    "circulate_market_value": "7339320000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "002905",
    "name": "金逸影视",
    "hot_rank": 98,
    "hot_rank_chg": -56,
    "stock_cnt": 5811,
    "price": "10.89",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3805401600.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "电影院线",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "影视",
        "change_pct": -0.37
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5811, "price": "28.65", "change": "7.10", "market_id": "33", "circulate_market_value": "21824585000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5811, "price": "3.74", "change": "10.00", "market_id": "17", "circulate_market_value": "10705272200.00", "change_type": "1", "change_section": "19", "change_days": "11", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": -1.52}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "游戏", "change_pct": -1.75}, {"name": "影视", "change_pct": -0.37}, {"name": "国企改革", "change_pct": -0.97}, {"name": "短剧/互动影游", "change_pct": -1.59}, {"name": "AI视频", "change_pct": -2.98}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 3, "hot_rank_chg": 5, "stock_cnt": 5811, "price": "4.34", "change": "-9.96", "market_id": "33", "circulate_market_value": "6861415300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.61}, {"name": "体外诊断", "change_pct": -1.57}, {"name": "医疗器械", "change_pct": -1.91}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "基因测序", "change_pct": -1.84}, {"name": "预制菜", "change_pct": -0.84}, {"name": "水产养殖", "change_pct": -4.22}, {"name": "新冠病毒防治", "change_pct": -1.51}, {"name": "海洋经济", "change_pct": -2.96}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 4, "hot_rank_chg": 11, "stock_cnt": 5811, "price": "11.00", "change": "6.49", "market_id": "33", "circulate_market_value": "6601284000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.38}, {"name": "边缘计算", "change_pct": -3.02}, {"name": "核电", "change_pct": -2.37}, {"name": "海工装备", "change_pct": -1.78}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "云计算数据中心", "change_pct": -3.87}, {"name": "冷链", "change_pct": -0.38}, {"name": "地热", "change_pct": -1.76}, {"name": "储能", "change_pct": -1.97}, {"name": "碳中和", "change_pct": -0.99}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 0.26}, {"name": "汽车热管理", "change_pct": -2.95}, {"name": "热泵", "change_pct": -2.13}, {"name": "液冷服务器", "change_pct": -4.74}, {"name": "蜜雪冰城概念股", "change_pct": -1.02}, {"name": "海洋经济", "change_pct": -2.96}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 5, "hot_rank_chg": 16, "stock_cnt": 5811, "price": "5.18", "change": "-9.60", "market_id": "17", "circulate_market_value": "6915574400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.38}, {"name": "氢能源/燃料电池", "change_pct": -1.76}, {"name": "物联网", "change_pct": -2.97}, {"name": "LED", "change_pct": -3.83}, {"name": "卫星互联网", "change_pct": -4.99}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5811, "price": "13.90", "change": "-2.80", "market_id": "17", "circulate_market_value": "15241276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5811, "price": "408.97", "change": "-12.28", "market_id": "33", "circulate_market_value": "453930940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603366", "name": "日出东方", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5811, "price": "12.51", "change": "-10.00", "market_id": "17", "circulate_market_value": "10171231700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.38}, {"name": "充电桩", "change_pct": -2.4}, {"name": "光伏", "change_pct": -3.68}, {"name": "新能源汽车", "change_pct": -2.52}, {"name": "家电", "change_pct": -1.02}, {"name": "储能", "change_pct": -1.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -2.13}, {"name": "华为鸿蒙", "change_pct": -2.7}, {"name": "厨卫家电", "change_pct": -0.32}, {"name": "华为产业链", "change_pct": -3.26}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 9, "hot_rank_chg": -8, "stock_cnt": 5811, "price": "4.36", "change": "10.10", "market_id": "33", "circulate_market_value": "4012010600.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "AI游戏", "xgb_concepts": [{"name": "手游", "change_pct": -1.52}, {"name": "ST摘帽", "change_pct": -2.18}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "人工智能", "change_pct": -2.88}, {"name": "VR&AR", "change_pct": -3.87}, {"name": "游戏", "change_pct": -1.75}, {"name": "动漫", "change_pct": -2.32}, {"name": "腾讯概念股", "change_pct": -2.59}, {"name": "快手概念股", "change_pct": -2.41}, {"name": "NFT", "change_pct": -2.07}, {"name": "元宇宙", "change_pct": -2.83}, {"name": "虚拟数字人", "change_pct": -2.6}, {"name": "字节跳动概念股", "change_pct": -2.93}, {"name": "云游戏", "change_pct": -2.67}, {"name": "华为产业链", "change_pct": -3.26}, {"name": "IP经济/谷子经济", "change_pct": -1.35}]}, {"code": "002384", "name": "东山精密", "hot_rank": 10, "hot_rank_chg": 6, "stock_cnt": 5811, "price": "75.93", "change": "-10.00", "market_id": "33", "circulate_market_value": "105263408000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 11, "hot_rank_chg": 30, "stock_cnt": 5811, "price": "4.73", "change": "10.00", "market_id": "17", "circulate_market_value": "6174872700.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.38}, {"name": "高速公路", "change_pct": 1.89}, {"name": "振兴东北", "change_pct": -0.02}, {"name": "黑龙江自贸区", "change_pct": 2.22}]}, {"code": "002148", "name": "北纬科技", "hot_rank": 12, "hot_rank_chg": -6, "stock_cnt": 5811, "price": "8.75", "change": "10.06", "market_id": "33", "circulate_market_value": "3946482800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "四足机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -3.02}, {"name": "手游", "change_pct": -1.52}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "游戏", "change_pct": -1.75}, {"name": "物联网", "change_pct": -2.97}, {"name": "机器人", "change_pct": -3.38}, {"name": "无人机", "change_pct": -3.87}, {"name": "国产芯片", "change_pct": -5.17}, {"name": "5G消息/RCS", "change_pct": -1.83}, {"name": "低空经济", "change_pct": -3.55}, {"name": "无人物流车", "change_pct": -1.96}]}, {"code": "000831", "name": "中国稀土", "hot_rank": 13, "hot_rank_chg": 54, "stock_cnt": 5811, "price": "49.80", "change": "4.64", "market_id": "33", "circulate_market_value": "52848796000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 14, "hot_rank_chg": 8, "stock_cnt": 5811, "price": "11.80", "change": "-9.99", "market_id": "17", "circulate_market_value": "12329676600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -4.2}, {"name": "上海国企改革", "change_pct": -0.32}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -1.05}, {"name": "国企改革", "change_pct": -0.97}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 15, "hot_rank_chg": -5, "stock_cnt": 5811, "price": "17.78", "change": "-9.97", "market_id": "33", "circulate_market_value": "8171897800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 16, "hot_rank_chg": 37, "stock_cnt": 5811, "price": "2.68", "change": "-1.83", "market_id": "33", "circulate_market_value": "11789345300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -4.2}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "京津冀", "change_pct": -1.64}, {"name": "旅游", "change_pct": -0.61}, {"name": "园林", "change_pct": -2.22}, {"name": "海绵城市", "change_pct": -0.63}, {"name": "固废处理", "change_pct": -1.58}, {"name": "光伏", "change_pct": -3.68}, {"name": "风电", "change_pct": -1.83}, {"name": "雄安新区", "change_pct": -1.8}, {"name": "北京城市规划", "change_pct": -1.36}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -2.17}, {"name": "储能", "change_pct": -1.97}, {"name": "碳中和", "change_pct": -0.99}, {"name": "乡村振兴", "change_pct": -1.24}, {"name": "汽车拆解", "change_pct": -0.52}, {"name": "土壤修复", "change_pct": -1.71}, {"name": "核污染防治", "change_pct": -3.36}, {"name": "东数西算/算力", "change_pct": -3.51}, {"name": "新型城镇化", "change_pct": -2.11}, {"name": "低价股", "change_pct": -1.47}, {"name": "西部大开发", "change_pct": -0.67}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 17, "hot_rank_chg": 29, "stock_cnt": 5811, "price": "703.99", "change": "1.15", "market_id": "17", "circulate_market_value": "21181454000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 18, "hot_rank_chg": 33, "stock_cnt": 5811, "price": "11.71", "change": "-9.99", "market_id": "33", "circulate_market_value": "6633460800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.38}, {"name": "石墨烯", "change_pct": -3.21}, {"name": "军民融合", "change_pct": -3.94}, {"name": "物联网", "change_pct": -2.97}, {"name": "LED", "change_pct": -3.83}, {"name": "军工", "change_pct": -3.75}, {"name": "智慧灯杆", "change_pct": -3.39}, {"name": "海洋经济", "change_pct": -2.96}]}, {"code": "601929", "name": "吉视传媒", "hot_rank": 19, "hot_rank_chg": 67, "stock_cnt": 5811, "price": "2.96", "change": "10.04", "market_id": "17", "circulate_market_value": "10329773000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI微短剧", "xgb_concepts": [{"name": "广电", "change_pct": -0.29}, {"name": "车联网/车路云", "change_pct": -3.02}, {"name": "超高清视频", "change_pct": -2.0}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "人工智能", "change_pct": -2.88}, {"name": "云计算数据中心", "change_pct": -3.87}, {"name": "影视", "change_pct": -0.37}, {"name": "智慧城市", "change_pct": -2.63}, {"name": "国产芯片", "change_pct": -5.17}, {"name": "振兴东北", "change_pct": -0.02}, {"name": "传媒", "change_pct": -1.05}, {"name": "低价股", "change_pct": -1.47}, {"name": "国企改革", "change_pct": -0.97}, {"name": "在线教育", "change_pct": -1.39}, {"name": "医疗信息化", "change_pct": -2.04}, {"name": "AI大模型/智能体", "change_pct": -2.29}, {"name": "短剧/互动影游", "change_pct": -1.59}, {"name": "IP经济/谷子经济", "change_pct": -1.35}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 20, "hot_rank_chg": 39, "stock_cnt": 5811, "price": "18.79", "change": "2.29", "market_id": "33", "circulate_market_value": "3333496300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 21, "hot_rank_chg": 3, "stock_cnt": 5811, "price": "166.80", "change": "-11.08", "market_id": "33", "circulate_market_value": "209287920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 22, "hot_rank_chg": -9, "stock_cnt": 5811, "price": "6.10", "change": "8.35", "market_id": "17", "circulate_market_value": "3411849200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -1.52}, {"name": "ST摘帽", "change_pct": -2.18}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "游戏", "change_pct": -1.75}, {"name": "影视", "change_pct": -0.37}, {"name": "短剧/互动影游", "change_pct": -1.59}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 23, "hot_rank_chg": 16, "stock_cnt": 5811, "price": "13.05", "change": "-4.25", "market_id": "33", "circulate_market_value": "45386990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 24, "hot_rank_chg": -5, "stock_cnt": 5811, "price": "5.81", "change": "-10.06", "market_id": "17", "circulate_market_value": "5140569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.52}, {"name": "优化生育（三孩）", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "信托", "change_pct": 0.76}, {"name": "民营医院", "change_pct": -1.34}, {"name": "汽车销售", "change_pct": -0.33}, {"name": "社区团购", "change_pct": -1.6}, {"name": "大金融", "change_pct": 1.24}, {"name": "餐饮", "change_pct": -0.37}, {"name": "首发经济", "change_pct": 0.21}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 25, "hot_rank_chg": 5, "stock_cnt": 5811, "price": "5.06", "change": "0.40", "market_id": "17", "circulate_market_value": "5872344800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.38}, {"name": "纺织服装", "change_pct": -1.4}, {"name": "浙江国企改革", "change_pct": -0.82}, {"name": "影视", "change_pct": -0.37}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.97}, {"name": "短剧/互动影游", "change_pct": -1.59}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 26, "hot_rank_chg": 19, "stock_cnt": 5811, "price": "10.12", "change": "5.42", "market_id": "33", "circulate_market_value": "4793644500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -1.52}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "VR&AR", "change_pct": -3.87}, {"name": "游戏", "change_pct": -1.75}, {"name": "影视", "change_pct": -0.37}, {"name": "直播/短视频", "change_pct": -1.13}, {"name": "动漫", "change_pct": -2.32}, {"name": "腾讯概念股", "change_pct": -2.59}, {"name": "传媒", "change_pct": -1.05}, {"name": "元宇宙", "change_pct": -2.83}, {"name": "短剧/互动影游", "change_pct": -1.59}, {"name": "IP经济/谷子经济", "change_pct": -1.35}]}, {"code": "002129", "name": "TCL中环", "hot_rank": 27, "hot_rank_chg": 13, "stock_cnt": 5811, "price": "9.18", "change": "-2.13", "market_id": "33", "circulate_market_value": "37084991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -5.64}, {"name": "一带一路", "change_pct": -1.37}, {"name": "京津冀", "change_pct": -1.64}, {"name": "光伏", "change_pct": -3.68}, {"name": "复牌股", "change_pct": -2.49}, {"name": "碳中和", "change_pct": -0.99}, {"name": "国产芯片", "change_pct": -5.17}, {"name": "IGBT", "change_pct": -3.93}, {"name": "颗粒硅", "change_pct": -3.84}, {"name": "异质结电池HJT", "change_pct": -4.7}, {"name": "大硅片", "change_pct": -4.94}, {"name": "中芯国际概念股", "change_pct": -5.05}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 28, "hot_rank_chg": 9, "stock_cnt": 5811, "price": "30.92", "change": "-1.84", "market_id": "33", "circulate_market_value": "31590963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002187", "name": "广百股份", "hot_rank": 29, "hot_rank_chg": -12, "stock_cnt": 5811, "price": "7.67", "change": "10.04", "market_id": "33", "circulate_market_value": "5375861800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.52}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "粤港澳大湾区", "change_pct": -0.88}, {"name": "物业管理", "change_pct": -1.87}, {"name": "预制菜", "change_pct": -0.84}, {"name": "地摊经济", "change_pct": -1.43}]}, {"code": "601138", "name": "工业富联", "hot_rank": 30, "hot_rank_chg": 52, "stock_cnt": 5811, "price": "36.22", "change": "-9.68", "market_id": "17", "circulate_market_value": "718753020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301052", "name": "果麦文化", "hot_rank": 31, "hot_rank_chg": 53, "stock_cnt": 5811, "price": "48.01", "change": "4.17", "market_id": "33", "circulate_market_value": "3850494000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 32, "hot_rank_chg": 133, "stock_cnt": 5811, "price": "16.94", "change": "5.15", "market_id": "17", "circulate_market_value": "7528888900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600853", "name": "龙建股份", "hot_rank": 33, "hot_rank_chg": 69, "stock_cnt": 5811, "price": "4.44", "change": "6.22", "market_id": "17", "circulate_market_value": "4500848100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.37}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "水利", "change_pct": -1.07}, {"name": "智慧城市", "change_pct": -2.63}, {"name": "PPP", "change_pct": -0.9}, {"name": "冰雪产业", "change_pct": 0.26}, {"name": "振兴东北", "change_pct": -0.02}, {"name": "大基建", "change_pct": -0.91}, {"name": "中俄贸易", "change_pct": -0.23}, {"name": "新型城镇化", "change_pct": -2.11}, {"name": "黑龙江自贸区", "change_pct": 2.22}, {"name": "旧改", "change_pct": -1.44}]}, {"code": "603118", "name": "共进股份", "hot_rank": 34, "hot_rank_chg": 79, "stock_cnt": 5811, "price": "14.71", "change": "10.02", "market_id": "17", "circulate_market_value": "11580835900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "002639", "name": "雪人集团", "hot_rank": 35, "hot_rank_chg": 120, "stock_cnt": 5811, "price": "14.79", "change": "2.57", "market_id": "33", "circulate_market_value": "9763273800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5811, "price": "4.90", "change": "-9.93", "market_id": "33", "circulate_market_value": "4219696500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -2.94}, {"name": "一带一路", "change_pct": -1.37}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "福建自贸/海西概念", "change_pct": -2.89}, {"name": "光伏", "change_pct": -3.68}, {"name": "有色金属", "change_pct": -3.56}, {"name": "新能源汽车", "change_pct": -2.52}, {"name": "新能源车零部件", "change_pct": -3.19}, {"name": "自贸区", "change_pct": -1.14}, {"name": "液冷服务器", "change_pct": -4.74}]}, {"code": "601398", "name": "工商银行", "hot_rank": 37, "hot_rank_chg": 51, "stock_cnt": 5811, "price": "9.05", "change": "2.26", "market_id": "17", "circulate_market_value": "2439990500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.3}, {"name": "高股息", "change_pct": 1.33}, {"name": "银行", "change_pct": 1.76}, {"name": "白马股", "change_pct": 0.19}, {"name": "破净股", "change_pct": -0.03}, {"name": "大金融", "change_pct": 1.24}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 38, "hot_rank_chg": 35, "stock_cnt": 5811, "price": "53.30", "change": "1.72", "market_id": "17", "circulate_market_value": "15908912000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 39, "hot_rank_chg": 206, "stock_cnt": 5811, "price": "14.62", "change": "10.01", "market_id": "33", "circulate_market_value": "4132489200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈"}, {"code": "300750", "name": "宁德时代", "hot_rank": 40, "hot_rank_chg": 30, "stock_cnt": 5811, "price": "240.50", "change": "1.18", "market_id": "33", "circulate_market_value": "1024678410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 41, "hot_rank_chg": 24, "stock_cnt": 5811, "price": "13.51", "change": "-2.38", "market_id": "17", "circulate_market_value": "4617169400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 42, "hot_rank_chg": 50, "stock_cnt": 5811, "price": "18.72", "change": "-10.00", "market_id": "33", "circulate_market_value": "3560497200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 43, "hot_rank_chg": -8, "stock_cnt": 5811, "price": "38.34", "change": "-4.10", "market_id": "17", "circulate_market_value": "172646510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002205", "name": "国统股份", "hot_rank": 44, "hot_rank_chg": 6, "stock_cnt": 5811, "price": "14.22", "change": "9.98", "market_id": "33", "circulate_market_value": "2642690700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "PCCP管道"}, {"code": "002931", "name": "锋龙股份", "hot_rank": 45, "hot_rank_chg": 9, "stock_cnt": 5811, "price": "52.29", "change": "-10.00", "market_id": "33", "circulate_market_value": "10592691600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 46, "hot_rank_chg": 34, "stock_cnt": 5811, "price": "223.22", "change": "-9.27", "market_id": "17", "circulate_market_value": "149717740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 47, "hot_rank_chg": 128, "stock_cnt": 5811, "price": "35.75", "change": "-4.31", "market_id": "17", "circulate_market_value": "30264282000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002685", "name": "华东重机", "hot_rank": 48, "hot_rank_chg": -21, "stock_cnt": 5811, "price": "6.09", "change": "9.93", "market_id": "33", "circulate_market_value": "6136218900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "GPU芯片", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.37}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "工业自动化", "change_pct": -3.8}, {"name": "机械", "change_pct": -1.04}, {"name": "智能制造", "change_pct": -3.44}, {"name": "国产芯片", "change_pct": -5.17}, {"name": "信创", "change_pct": -3.23}, {"name": "AI算力芯片", "change_pct": -5.55}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 49, "hot_rank_chg": 22, "stock_cnt": 5811, "price": "5.39", "change": "-10.02", "market_id": "33", "circulate_market_value": "4124108500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.0}, {"name": "优化生育（三孩）", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "医药商业", "change_pct": -0.13}, {"name": "保健品", "change_pct": -0.31}, {"name": "民营医院", "change_pct": -1.34}, {"name": "医药", "change_pct": -1.72}, {"name": "食品", "change_pct": -0.15}, {"name": "辅助生殖", "change_pct": -1.47}, {"name": "口腔", "change_pct": -2.54}, {"name": "医美", "change_pct": -0.58}, {"name": "新冠病毒防治", "change_pct": -1.51}]}, {"code": "000823", "name": "超声电子", "hot_rank": 50, "hot_rank_chg": 131, "stock_cnt": 5811, "price": "17.26", "change": "-0.86", "market_id": "33", "circulate_market_value": "10268529200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000819", "name": "岳阳兴长", "hot_rank": 51, "hot_rank_chg": 4, "stock_cnt": 5811, "price": "14.10", "change": "9.98", "market_id": "33", "circulate_market_value": "5160883500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "MOFs材料"}, {"code": "002156", "name": "通富微电", "hot_rank": 52, "hot_rank_chg": 43, "stock_cnt": 5811, "price": "43.82", "change": "-5.76", "market_id": "33", "circulate_market_value": "66494756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 53, "hot_rank_chg": 69, "stock_cnt": 5811, "price": "6.96", "change": "-9.96", "market_id": "17", "circulate_market_value": "3189408900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -0.73}, {"name": "福建自贸/海西概念", "change_pct": -2.89}, {"name": "自贸区", "change_pct": -1.14}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 54, "hot_rank_chg": -21, "stock_cnt": 5811, "price": "110.20", "change": "-11.83", "market_id": "33", "circulate_market_value": "119940363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 55, "hot_rank_chg": 90, "stock_cnt": 5811, "price": "31.64", "change": "0.51", "market_id": "17", "circulate_market_value": "22914587000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 56, "hot_rank_chg": 74, "stock_cnt": 5811, "price": "38.51", "change": "-7.43", "market_id": "17", "circulate_market_value": "94489917000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 57, "hot_rank_chg": 28, "stock_cnt": 5811, "price": "9.31", "change": "-2.92", "market_id": "33", "circulate_market_value": "9868182700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.92}, {"name": "电子烟", "change_pct": -2.87}, {"name": "一带一路", "change_pct": -1.37}, {"name": "造纸", "change_pct": -1.26}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "包装印刷", "change_pct": -2.05}, {"name": "卫星互联网", "change_pct": -4.99}, {"name": "太空算力", "change_pct": -5.87}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 58, "hot_rank_chg": 4, "stock_cnt": 5811, "price": "20.01", "change": "-9.99", "market_id": "17", "circulate_market_value": "4225375300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603258", "name": "电魂网络", "hot_rank": 59, "hot_rank_chg": -10, "stock_cnt": 5811, "price": "18.18", "change": "-3.61", "market_id": "17", "circulate_market_value": "4387585700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 60, "hot_rank_chg": 126, "stock_cnt": 5811, "price": "16.70", "change": "-0.65", "market_id": "33", "circulate_market_value": "7554058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 61, "hot_rank_chg": 50, "stock_cnt": 5811, "price": "28.20", "change": "-2.35", "market_id": "17", "circulate_market_value": "12376890700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 62, "hot_rank_chg": 96, "stock_cnt": 5811, "price": "3.15", "change": "-0.94", "market_id": "17", "circulate_market_value": "6968836500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -1.26}, {"name": "云计算数据中心", "change_pct": -3.87}, {"name": "光通信", "change_pct": -6.8}, {"name": "林业", "change_pct": -2.43}, {"name": "军民融合", "change_pct": -3.94}, {"name": "军工", "change_pct": -3.75}, {"name": "人造肉", "change_pct": -1.22}]}, {"code": "600183", "name": "生益科技", "hot_rank": 63, "hot_rank_chg": 34, "stock_cnt": 5811, "price": "61.34", "change": "-9.99", "market_id": "17", "circulate_market_value": "147936670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 64, "hot_rank_chg": 29, "stock_cnt": 5811, "price": "6.16", "change": "-8.47", "market_id": "33", "circulate_market_value": "11796969500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -2.89}, {"name": "林业", "change_pct": -2.43}, {"name": "碳中和", "change_pct": -0.99}, {"name": "自贸区", "change_pct": -1.14}]}, {"code": "600408", "name": "安泰集团", "hot_rank": 65, "hot_rank_chg": 206, "stock_cnt": 5811, "price": "3.75", "change": "5.63", "market_id": "17", "circulate_market_value": "3775500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.87}, {"name": "钢铁", "change_pct": -0.48}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "煤化工", "change_pct": 0.6}]}, {"code": "603466", "name": "风语筑", "hot_rank": 66, "hot_rank_chg": -28, "stock_cnt": 5811, "price": "15.32", "change": "-7.15", "market_id": "17", "circulate_market_value": "9112825700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 67, "hot_rank_chg": 103, "stock_cnt": 5811, "price": "30.50", "change": "-8.63", "market_id": "17", "circulate_market_value": "28384213000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 68, "hot_rank_chg": 4, "stock_cnt": 5811, "price": "8.90", "change": "-9.18", "market_id": "17", "circulate_market_value": "5711870600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.74}, {"name": "农业种植", "change_pct": -1.96}, {"name": "湖南国企改革", "change_pct": -1.01}, {"name": "乡村振兴", "change_pct": -1.24}, {"name": "休闲食品", "change_pct": -0.41}, {"name": "食品", "change_pct": -0.15}, {"name": "食品安全", "change_pct": -2.6}, {"name": "社区团购", "change_pct": -1.6}, {"name": "大农业", "change_pct": -1.14}, {"name": "预制菜", "change_pct": -0.84}, {"name": "人造肉", "change_pct": -1.22}, {"name": "国企改革", "change_pct": -0.97}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 69, "hot_rank_chg": -9, "stock_cnt": 5811, "price": "22.96", "change": "-6.86", "market_id": "33", "circulate_market_value": "11701112900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 70, "hot_rank_chg": 47, "stock_cnt": 5811, "price": "9.46", "change": "-9.99", "market_id": "33", "circulate_market_value": "3162089400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.64}, {"name": "饲料", "change_pct": -0.56}, {"name": "一带一路", "change_pct": -1.37}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "保健品", "change_pct": -0.31}, {"name": "山东国企改革", "change_pct": -1.64}, {"name": "污水处理", "change_pct": -1.76}, {"name": "环保", "change_pct": -2.17}, {"name": "食品", "change_pct": -0.15}, {"name": "预制菜", "change_pct": -0.84}, {"name": "国企改革", "change_pct": -0.97}, {"name": "水产养殖", "change_pct": -4.22}, {"name": "广西概念", "change_pct": -1.52}]}, {"code": "601595", "name": "上海电影", "hot_rank": 71, "hot_rank_chg": -7, "stock_cnt": 5811, "price": "37.67", "change": "-8.57", "market_id": "17", "circulate_market_value": "16883694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601288", "name": "农业银行", "hot_rank": 72, "hot_rank_chg": 135, "stock_cnt": 5811, "price": "7.59", "change": "2.98", "market_id": "17", "circulate_market_value": "2423063600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.3}, {"name": "高股息", "change_pct": 1.33}, {"name": "银行", "change_pct": 1.76}, {"name": "破净股", "change_pct": -0.03}, {"name": "大金融", "change_pct": 1.24}]}, {"code": "600829", "name": "人民同泰", "hot_rank": 73, "hot_rank_chg": 37, "stock_cnt": 5811, "price": "10.77", "change": "5.80", "market_id": "17", "circulate_market_value": "6245400200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药商业", "change_pct": -0.13}, {"name": "民营医院", "change_pct": -1.34}, {"name": "医药", "change_pct": -1.72}, {"name": "振兴东北", "change_pct": -0.02}, {"name": "宠物经济", "change_pct": -1.15}, {"name": "眼科", "change_pct": -1.11}]}, {"code": "300364", "name": "中文在线", "hot_rank": 74, "hot_rank_chg": -8, "stock_cnt": 5811, "price": "26.28", "change": "-5.23", "market_id": "33", "circulate_market_value": "17373331000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 75, "hot_rank_chg": 59, "stock_cnt": 5811, "price": "10.89", "change": "-5.39", "market_id": "17", "circulate_market_value": "4365604800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -0.32}, {"name": "新零售", "change_pct": -0.52}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "物业管理", "change_pct": -1.87}, {"name": "国企改革", "change_pct": -0.97}, {"name": "地摊经济", "change_pct": -1.43}]}, {"code": "601566", "name": "九牧王", "hot_rank": 76, "hot_rank_chg": 56, "stock_cnt": 5811, "price": "10.44", "change": "-10.00", "market_id": "17", "circulate_market_value": "5999211800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -1.4}, {"name": "福建自贸/海西概念", "change_pct": -2.89}, {"name": "自贸区", "change_pct": -1.14}, {"name": "IP经济/谷子经济", "change_pct": -1.35}]}, {"code": "002058", "name": "紫竹高科", "hot_rank": 77, "hot_rank_chg": 517, "stock_cnt": 5811, "price": "22.40", "change": "10.02", "market_id": "33", "circulate_market_value": "3211394600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "603103", "name": "横店影视", "hot_rank": 78, "hot_rank_chg": -34, "stock_cnt": 5811, "price": "21.00", "change": "8.75", "market_id": "17", "circulate_market_value": "13318200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 79, "hot_rank_chg": 29, "stock_cnt": 5811, "price": "73.98", "change": "-10.00", "market_id": "33", "circulate_market_value": "142972930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002520", "name": "日发精机", "hot_rank": 80, "hot_rank_chg": -62, "stock_cnt": 5811, "price": "7.61", "change": "-1.17", "market_id": "33", "circulate_market_value": "5367509300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "通用航空", "change_pct": -3.86}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "工业自动化", "change_pct": -3.8}, {"name": "大飞机", "change_pct": -4.1}, {"name": "军民融合", "change_pct": -3.94}, {"name": "风电", "change_pct": -1.83}, {"name": "军工", "change_pct": -3.75}, {"name": "机器人", "change_pct": -3.38}, {"name": "智能制造", "change_pct": -3.44}, {"name": "工业母机", "change_pct": -4.23}, {"name": "减速器", "change_pct": -3.42}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 81, "hot_rank_chg": 18, "stock_cnt": 5811, "price": "7.54", "change": "-5.16", "market_id": "33", "circulate_market_value": "12267533100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.47}, {"name": "电竞", "change_pct": -1.94}, {"name": "手游", "change_pct": -1.52}, {"name": "人工智能", "change_pct": -2.88}, {"name": "游戏", "change_pct": -1.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.53}, {"name": "腾讯概念股", "change_pct": -2.59}, {"name": "传媒", "change_pct": -1.05}, {"name": "快手概念股", "change_pct": -2.41}, {"name": "元宇宙", "change_pct": -2.83}, {"name": "虚拟数字人", "change_pct": -2.6}, {"name": "东数西算/算力", "change_pct": -3.51}, {"name": "web3.0", "change_pct": -3.51}, {"name": "AIGC概念", "change_pct": -2.7}, {"name": "数据要素", "change_pct": -2.65}, {"name": "字节跳动概念股", "change_pct": -2.93}, {"name": "AI营销", "change_pct": -2.75}, {"name": "ChatGPT", "change_pct": -3.96}, {"name": "智能眼镜/MR头显", "change_pct": -4.49}, {"name": "AI大模型/智能体", "change_pct": -2.29}, {"name": "人形机器人", "change_pct": -4.1}, {"name": "短剧/互动影游", "change_pct": -1.59}, {"name": "多模态", "change_pct": -3.71}, {"name": "AI视频", "change_pct": -2.98}, {"name": "IP经济/谷子经济", "change_pct": -1.35}, {"name": "小红书概念股", "change_pct": -3.02}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 82, "hot_rank_chg": 137, "stock_cnt": 5811, "price": "4.80", "change": "2.35", "market_id": "17", "circulate_market_value": "5848377800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -2.94}, {"name": "煤炭", "change_pct": 0.87}, {"name": "有色金属", "change_pct": -3.56}, {"name": "国企改革", "change_pct": -0.97}, {"name": "河南国企改革", "change_pct": -0.58}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 83, "hot_rank_chg": -69, "stock_cnt": 5811, "price": "6.32", "change": "-6.79", "market_id": "33", "circulate_market_value": "7349195100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.38}, {"name": "影视", "change_pct": -0.37}, {"name": "新疆概念", "change_pct": -1.71}, {"name": "动漫", "change_pct": -2.32}, {"name": "阿里巴巴概念股", "change_pct": -2.71}, {"name": "腾讯概念股", "change_pct": -2.59}, {"name": "短剧/互动影游", "change_pct": -1.59}, {"name": "AI视频", "change_pct": -2.98}, {"name": "IP经济/谷子经济", "change_pct": -1.35}]}, {"code": "002164", "name": "宁波东力", "hot_rank": 84, "hot_rank_chg": 3, "stock_cnt": 5811, "price": "21.85", "change": "-7.84", "market_id": "33", "circulate_market_value": "10483086900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 85, "hot_rank_chg": 99, "stock_cnt": 5811, "price": "105.11", "change": "-10.00", "market_id": "17", "circulate_market_value": "28967094000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 86, "hot_rank_chg": 50, "stock_cnt": 5811, "price": "50.50", "change": "-4.17", "market_id": "17", "circulate_market_value": "90365436000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 87, "hot_rank_chg": 102, "stock_cnt": 5811, "price": "8.96", "change": "-3.66", "market_id": "17", "circulate_market_value": "7785816900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.47}, {"name": "快递物流", "change_pct": -0.29}, {"name": "新零售", "change_pct": -0.52}, {"name": "福建自贸/海西概念", "change_pct": -2.89}, {"name": "旅游", "change_pct": -0.61}, {"name": "阿里巴巴概念股", "change_pct": -2.71}, {"name": "物业管理", "change_pct": -1.87}, {"name": "免税店概念", "change_pct": 0.0}, {"name": "自贸区", "change_pct": -1.14}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 88, "hot_rank_chg": -40, "stock_cnt": 5811, "price": "897.97", "change": "-8.27", "market_id": "17", "circulate_market_value": "564692030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 89, "hot_rank_chg": -42, "stock_cnt": 5811, "price": "10.20", "change": "1.49", "market_id": "33", "circulate_market_value": "21236419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.37}, {"name": "足球", "change_pct": -1.01}, {"name": "阿里巴巴概念股", "change_pct": -2.71}, {"name": "拼多多概念股", "change_pct": -3.08}, {"name": "网红/MCN", "change_pct": -1.83}, {"name": "盲盒", "change_pct": -1.93}, {"name": "华为产业链", "change_pct": -3.26}, {"name": "短剧/互动影游", "change_pct": -1.59}, {"name": "IP经济/谷子经济", "change_pct": -1.35}, {"name": "首发经济", "change_pct": 0.21}, {"name": "小红书概念股", "change_pct": -3.02}, {"name": "服务消费", "change_pct": 0.16}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 90, "hot_rank_chg": 1, "stock_cnt": 5811, "price": "25.96", "change": "-1.59", "market_id": "17", "circulate_market_value": "534822550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 91, "hot_rank_chg": 71, "stock_cnt": 5811, "price": "54.68", "change": "-8.50", "market_id": "33", "circulate_market_value": "39655935000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002548", "name": "金新农", "hot_rank": 92, "hot_rank_chg": -34, "stock_cnt": 5811, "price": "4.21", "change": "9.92", "market_id": "33", "circulate_market_value": "3386825000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "生猪养殖", "xgb_concepts": [{"name": "饲料", "change_pct": -0.56}, {"name": "养猪", "change_pct": 0.66}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "大农业", "change_pct": -1.14}]}, {"code": "002149", "name": "西部材料", "hot_rank": 93, "hot_rank_chg": 12, "stock_cnt": 5811, "price": "33.91", "change": "-8.72", "market_id": "33", "circulate_market_value": "16552798000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 94, "hot_rank_chg": 62, "stock_cnt": 5811, "price": "13.96", "change": "-2.72", "market_id": "33", "circulate_market_value": "46487749000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 95, "hot_rank_chg": 59, "stock_cnt": 5811, "price": "67.02", "change": "-8.90", "market_id": "33", "circulate_market_value": "43764563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 96, "hot_rank_chg": 100, "stock_cnt": 5811, "price": "24.28", "change": "-3.65", "market_id": "33", "circulate_market_value": "18390039000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 97, "hot_rank_chg": 79, "stock_cnt": 5811, "price": "11.02", "change": "-9.97", "market_id": "17", "circulate_market_value": "7339320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.52}]}, {"code": "002905", "name": "金逸影视", "hot_rank": 98, "hot_rank_chg": -56, "stock_cnt": 5811, "price": "10.89", "change": "10.00", "market_id": "33", "circulate_market_value": "3805401600.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "电影院线", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.38}, {"name": "影视", "change_pct": -0.37}]}, {"code": "600900", "name": "长江电力", "hot_rank": 99, "hot_rank_chg": -18, "stock_cnt": 5811, "price": "30.49", "change": "1.94", "market_id": "17", "circulate_market_value": "746035960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 100, "hot_rank_chg": 48, "stock_cnt": 5811, "price": "62.48", "change": "-11.74", "market_id": "33", "circulate_market_value": "4915552500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002748", "name": "世龙实业", "price": 13.63, "change_pct": 10.01, "reason": "公司氯化亚砜下游客户主要集中于生产三氯蔗糖甜味剂、医药中间体、染料及其他精细化工行业,部分用于锂电池原料等行业", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 13.25, "first_limit_up": 1794795819, "break_limit_up_times": 2}, {"code": "600822", "name": "上海物贸", "price": 9.45, "change_pct": 10.01, "reason": "1、实控人为上海市国资委；公司旗下上海有色金属交易中心研发的有色金属现货指数查询产品，已在上海数据交易所备案并挂牌；\n2、公司长期深耕汽车流通领域，以客户用车全生命周期为中心，系统搭建“购车—用车—换车—养车”一体化服务体系", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1794793594, "break_limit_up_times": 0}, {"code": "002148", "name": "北纬科技", "price": 8.75, "change_pct": 10.06, "reason": "参股公司天宇经纬与宇树科技在机器狗应用领域开展生态合作", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 42.59, "first_limit_up": 1794792300, "break_limit_up_times": 7}, {"code": "600715", "name": "文投控股", "price": 3.74, "change_pct": 10.0, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 37.82, "first_limit_up": 1794792624, "break_limit_up_times": 12}, {"code": "603983", "name": "丸美生物", "price": 26.73, "change_pct": 10.0, "reason": "公司主营化妆品，首推全人源胶原蛋白，适用于医美术后修复等多种护肤场景", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.05, "first_limit_up": 1794796573, "break_limit_up_times": 2}, {"code": "600386", "name": "北巴传媒", "price": 3.81, "change_pct": 10.12, "reason": "北京公交集团旗下，北京市最大的广告传媒和汽车服务企业；公司控股子公司隆瑞三优公司作为公司新能源充电服务平台，主要负责新能源车辆充电服务设施的建设和运营工作", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1794793867, "break_limit_up_times": 0}, {"code": "605378", "name": "野马电池", "price": 15.52, "change_pct": 9.99, "reason": "国内领先的锌锰电池制造商和出口商；公司扣式一次锂电池产线已调试完成并投入生产，正布局搭建新产线，实现产品更新迭代", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.34, "first_limit_up": 1794793009, "break_limit_up_times": 0}, {"code": "002205", "name": "国统股份", "price": 14.22, "change_pct": 9.98, "reason": "中国物流集团旗下，我国大型管道输水工程PCCP骨干供应商之一", "plates": ["其他"], "limit_up_days": 3, "turnover_ratio": 20.39, "first_limit_up": 1794792885, "break_limit_up_times": 5}, {"code": "300824", "name": "北鼎股份", "price": 8.6, "change_pct": 19.94, "reason": "厨房小家电细分市场高端品牌；目前海外市场覆盖北美、日本、东南亚等地，主要通过北鼎海外官网、亚马逊及其他合作渠道开展业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.51, "first_limit_up": 1794797109, "break_limit_up_times": 7}, {"code": "002425", "name": "凯撒文化", "price": 4.36, "change_pct": 10.1, "reason": "国内较早布局精品IP游戏的老牌厂商，主营移动端网络游戏等", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 20.27, "first_limit_up": 1794792600, "break_limit_up_times": 1}, {"code": "002861", "name": "瀛通通讯", "price": 13.6, "change_pct": 10.03, "reason": "公司开发各类智能眼镜、音频眼镜产品，并对骨传导音频技术投入了研发", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 12.88, "first_limit_up": 1794805557, "break_limit_up_times": 0}, {"code": "601188", "name": "龙江交通", "price": 4.73, "change_pct": 10.0, "reason": "公司所辖哈大分公司圆满完成冰雪旅游季等关键时期保畅任务", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 16.69, "first_limit_up": 1794793108, "break_limit_up_times": 3}, {"code": "000521", "name": "长虹美菱", "price": 4.31, "change_pct": 9.95, "reason": "1、公司完成了综合白电的产业布局，覆盖了冰箱柜、洗衣机、空调、厨卫、小家电等全产品线；\n2、旗下全资子公司四川虹美智能科技有限公司获得华为鸿蒙生态模组技术认证证书，并开始提供鸿蒙OS模组", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.57, "first_limit_up": 1794793665, "break_limit_up_times": 0}, {"code": "600936", "name": "北投科技", "price": 4.02, "change_pct": 10.14, "reason": "公司“科宝”交通大模型及智检机器人、无人机机巢等成果已落地", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.77, "first_limit_up": 1794793661, "break_limit_up_times": 0}, {"code": "000819", "name": "岳阳兴长", "price": 14.1, "change_pct": 9.98, "reason": "公司已建设100吨/年的MOFs材料中试生产装置，并与岳阳县高新技术产业开发区正式签署合作协议，打造MOFs材料产业化基地", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 15.96, "first_limit_up": 1794792300, "break_limit_up_times": 10}, {"code": "300530", "name": "领湃科技", "price": 27.83, "change_pct": 20.01, "reason": "1、公司已经完成了NCM811电池化学体系研发，固态电解质及固态电池、干法电极及其制备技术的基础试验，相关专利正在申请或已获得授权；\n2、公司产品类别覆盖电芯、模组、系统集成，量产的产品是磷酸铁锂135Ah产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 10.43, "first_limit_up": 1794796557, "break_limit_up_times": 0}, {"code": "000156", "name": "华数传媒", "price": 8.54, "change_pct": 10.05, "reason": "公司制作推出全国首批通过广电总局备案的长篇动画《新父与子》以及国内首部 AIGC 文旅微短剧《不止山海》，制作 AIGC 真人历史剧集《明月照铁衣之碧蹄馆》将于2026年上映", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 5.84, "first_limit_up": 1794797610, "break_limit_up_times": 3}, {"code": "002959", "name": "小熊电器", "price": 36.27, "change_pct": 10.01, "reason": "国内领先的“创意小家电+互联网”企业，产品有养生壶、电炖盅、电动打蛋器等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.76, "first_limit_up": 1794796974, "break_limit_up_times": 0}, {"code": "000533", "name": "顺钠股份", "price": 9.82, "change_pct": 9.97, "reason": "1、公司是国内干式变压器领域的市场开拓者，尤其在核电等高端特种应用领域较具优势，可为核电站提供安全级干式变压器，累计取得了超过30个核电项目的供货订单\n2、全资子公司顺特电气设备有限公司产品广泛用于智能电网建设，干式变压器、开关柜等产品应用于数据中心基础设施建设等领域", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.61, "first_limit_up": 1794798849, "break_limit_up_times": 0}, {"code": "002058", "name": "紫竹高科", "price": 22.4, "change_pct": 10.02, "reason": "1、公司核心业务聚焦于铝塑膜业务及汽车检具业务，铝塑膜是软包锂电池电芯封装的关键材料，下游主要应用于3C消费电子、动力、储能三类软包电池；\n2、公司具备《民用核安全电气设备设计许可证》和《民用核安全电气设备制造许可证》，为福清/方家山核电站供货核级压力变送器；公司有能力生产核级的仪器仪表产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 10.22, "first_limit_up": 1794795507, "break_limit_up_times": 0}, {"code": "000595", "name": "新能股份", "price": 6.08, "change_pct": 9.95, "reason": "公司完成重大资产重组后，主营业务变更为风力发电、光伏发电及储能电站的投资运营，风光总装机容量达282.03万千瓦，已建成投运储能电站300MW/600MWh", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 13.84, "first_limit_up": 1794798891, "break_limit_up_times": 5}, {"code": "000628", "name": "高新发展", "price": 46.55, "change_pct": 10.0, "reason": "公司功率半导体业务已形成IGBT、SiC、Si MOSFET全谱系产品，第七代IGBT及混合型SiC功率模块实现批量供货", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.16, "first_limit_up": 1794798891, "break_limit_up_times": 1}, {"code": "603118", "name": "共进股份", "price": 14.71, "change_pct": 10.02, "reason": "1、公司深耕以太网交换机领域多年，产品覆盖园区、SMB 场景及 100G/400G/800G 等规格数据中心交换机，同时布局工业与白盒交换机赛道，作为 Arista Networks 核心代工厂间接供应英伟达、微软等头部客户；\n2、参股孙公司山东华云光电技术有限公司致力于光模块等产品的研发、生产及销售", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 19.16, "first_limit_up": 1794799334, "break_limit_up_times": 1}, {"code": "001318", "name": "阳光乳业", "price": 14.62, "change_pct": 10.01, "reason": "公司主营业务为液态乳，包括儿童调制乳、A2牛奶", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 15.42, "first_limit_up": 1794794223, "break_limit_up_times": 3}, {"code": "600530", "name": "ST交昂", "price": 5.36, "change_pct": 10.06, "reason": "1、公司运营6家营利性护理院/医院，为8家非营利性老年医疗护理机构输出管理咨询服务，总运营床位数近4000张，项目遍布江浙沪近10个城市；\n2、公司昂立益生菌卫生巾系列由演员佟丽娅代言，产品特别添加了昂立自有的4株复配菌株和2种益生元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.79, "first_limit_up": 1794806960, "break_limit_up_times": 1}, {"code": "002685", "name": "华东重机", "price": 6.09, "change_pct": 9.93, "reason": "1、公司拟收购锐信图芯股权并增资，交易完成后，公司持有锐信图芯43.18%股权，锐信图芯主营业务为GPU芯片及解决方案；\n2、全资子公司润星科技主要产品包括中高档数控机床、工业机器人、以及自动化交钥匙工程等", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 14.37, "first_limit_up": 1794792789, "break_limit_up_times": 2}, {"code": "002548", "name": "金新农", "price": 4.21, "change_pct": 9.92, "reason": "公司以“自繁自养”模式中种猪繁育为主，生猪产品主要包括种猪、仔猪和育肥猪", "plates": ["养猪"], "limit_up_days": 2, "turnover_ratio": 6.75, "first_limit_up": 1794792600, "break_limit_up_times": 0}, {"code": "002187", "name": "广百股份", "price": 7.67, "change_pct": 10.04, "reason": "1、公司是广州地区最大百货连锁零售企业，积极开发钻石DIY等定制商品，推出品牌IP盲盒；\n2、公司通过旗下广州商贸产业基金间接参股中科宇航", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 6.14, "first_limit_up": 1794792603, "break_limit_up_times": 0}, {"code": "002356", "name": "鹏飞绿能", "price": 2.52, "change_pct": 10.04, "reason": "能源板块为公司报告期主要业务，由控股子公司鹏飞氢美作为核心运营主体，核心布局综合能源站、风光电制绿氢绿醇、共享两轮车三大业务方向", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.33, "first_limit_up": 1794792960, "break_limit_up_times": 3}, {"code": "002035", "name": "华帝股份", "price": 4.68, "change_pct": 10.12, "reason": "厨电行业的高端领军品牌之一，公司吸油烟机、灶具销售额连续十九年位于行业前三，产品也包含空气能热泵类", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.93, "first_limit_up": 1794793725, "break_limit_up_times": 3}, {"code": "002419", "name": "天虹股份", "price": 5.4, "change_pct": 9.98, "reason": "1、深圳本地股；国内拥有门店最多的零售商；已确立百货、超市、购物中心、便利店四大实体业态与移动生活消费服务平台天虹APP的线上线下融合的多业态发展格局；\n2、公司自有品牌开发并推出了天优酱香酒，生产工厂位于贵州省仁怀市茅台镇核心产区，占地面积1200余亩", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.01, "first_limit_up": 1794792753, "break_limit_up_times": 3}, {"code": "002905", "name": "金逸影视", "price": 10.89, "change_pct": 10.0, "reason": "国内影投前五，院线前七的院线放映及发行方", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 1.29, "first_limit_up": 1794792300, "break_limit_up_times": 0}, {"code": "601929", "name": "吉视传媒", "price": 2.96, "change_pct": 10.04, "reason": "1、吉林有线网络运营商，公司旗下影院公司开有影城，基于吉林台海量广播电视媒资资源及来画公司布局AI视频和可视化AI智能体；\n2、公司一直在开展和谋划数据服务业务，例如为政企客户提供机柜租赁服务、大数据云计算服务，政府云（吉林祥云）及多个行业云平台都部署在公司", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 14.99, "first_limit_up": 1794795132, "break_limit_up_times": 0}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};