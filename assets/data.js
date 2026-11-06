const UPDATE_TIME = "2026-11-06 04:48";
const THS_HOT = [
  {
    "name": "光伏概念",
    "rise": -1.15,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "光伏龙头ETF",
    "code": "885531"
  },
  {
    "name": "转基因",
    "rise": 2.67,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.76,
    "rate": 0,
    "tag": "",
    "hotTag": "连续324天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -1.4,
    "rate": 0,
    "tag": "",
    "hotTag": "连续154天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": -1.47,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续82天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "短剧游戏",
    "rise": -0.58,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "人形机器人",
    "rise": -2.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "粮食概念",
    "rise": 1.17,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "商业航天",
    "rise": -1.71,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续253天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": -3.23,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续147天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "猪肉",
    "rise": 0.35,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "存储芯片",
    "rise": -2.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续277天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "冰雪产业",
    "rise": -0.58,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "机器人概念",
    "rise": -1.7,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "玉米",
    "rise": 1.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "黄金概念",
    "rise": -1.74,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "AI视频",
    "rise": -0.99,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "固态电池",
    "rise": -1.69,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "886032"
  },
  {
    "name": "白酒概念",
    "rise": -1.62,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "算力租赁",
    "rise": -1.63,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  }
];
const THS_EVENTS = [
  {
    "title": "今年前9个月泰国大米对东盟出口增长109%",
    "desc": "",
    "heat": 96392,
    "direction": "粮食",
    "themes": [
      "玉米",
      "大豆",
      "猪肉",
      "代糖概念"
    ],
    "stocks": [
      {
        "name": "秋乐种业",
        "code": "920087",
        "chg": 13.49454
      }
    ]
  },
  {
    "title": "美国首只人形机器人股Agility(AGLT.US)今晚登陆纳斯达克 富士康、英伟达站台",
    "desc": "",
    "heat": 84836,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "N森峰",
        "code": "920085",
        "chg": 151.208544
      }
    ]
  },
  {
    "title": "上交所召开两场并购重组专题座谈会！",
    "desc": "",
    "heat": 73247,
    "direction": "并购重组",
    "themes": [
      "股权转让(并购重组)"
    ],
    "stocks": [
      {
        "name": "新亚制程",
        "code": "002388",
        "chg": 10.066007
      }
    ]
  },
  {
    "title": "超聚变IPO，11月12日上会",
    "desc": "",
    "heat": 1330,
    "direction": "超聚变IPO",
    "themes": [
      "股权相关",
      "代理经销",
      "硬件供应链"
    ],
    "stocks": [
      {
        "name": "东方明珠",
        "code": "600637",
        "chg": 6.874189
      }
    ]
  },
  {
    "title": "民主党中期选举大胜后，AI巨头迎监管与数据中心双重压力",
    "desc": "",
    "heat": 530,
    "direction": "Token出海",
    "themes": [
      "东数西算(算力)",
      "算力租赁"
    ],
    "stocks": [
      {
        "name": "开普云",
        "code": "688228",
        "chg": 8.371322
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "转基因",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+2.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+2.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+1.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+1.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "+0.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新疆国企改革",
    "change": "+0.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电力体制改革",
    "change": "+0.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+0.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+0.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+0.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+0.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+0.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乡村振兴",
    "change": "+0.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "宁夏概念",
    "change": "+0.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山东自贸区",
    "change": "+0.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "成渝城市群",
    "change": "+0.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航母",
    "change": "+0.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+0.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 1,
    "hot_rank_chg": 7,
    "stock_cnt": 5779,
    "price": "5.40",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "7209286000.00",
    "change_type": "1",
    "change_section": "12",
    "change_days": "7",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "LED",
        "change_pct": -1.22
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.51
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5779,
    "price": "3.97",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6276455900.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "8",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.42
      },
      {
        "name": "体外诊断",
        "change_pct": -1.51
      },
      {
        "name": "医疗器械",
        "change_pct": -1.34
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "基因测序",
        "change_pct": -1.43
      },
      {
        "name": "预制菜",
        "change_pct": -0.66
      },
      {
        "name": "水产养殖",
        "change_pct": 0.77
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.18
      },
      {
        "name": "海洋经济",
        "change_pct": -1.18
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 5,
    "hot_rank_chg": 53,
    "stock_cnt": 5779,
    "price": "11.09",
    "change": "5.92",
    "market_id": "17",
    "circulate_market_value": "7117375900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.64
      },
      {
        "name": "农业种植",
        "change_pct": 2.01
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.67
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.18
      },
      {
        "name": "休闲食品",
        "change_pct": -1.07
      },
      {
        "name": "食品",
        "change_pct": -0.83
      },
      {
        "name": "食品安全",
        "change_pct": -1.45
      },
      {
        "name": "社区团购",
        "change_pct": -0.3
      },
      {
        "name": "大农业",
        "change_pct": -0.46
      },
      {
        "name": "预制菜",
        "change_pct": -0.66
      },
      {
        "name": "人造肉",
        "change_pct": -0.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 7,
    "hot_rank_chg": 27,
    "stock_cnt": 5779,
    "price": "5.08",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "5895555700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "纺织服装",
        "change_pct": -1.0
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.23
      },
      {
        "name": "影视",
        "change_pct": -0.03
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.75
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 8,
    "hot_rank_chg": 59,
    "stock_cnt": 5779,
    "price": "5.01",
    "change": "10.11",
    "market_id": "33",
    "circulate_market_value": "4314424400.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "6",
    "change_reason": "光伏边框",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.19
      },
      {
        "name": "一带一路",
        "change_pct": -1.14
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.92
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "有色金属",
        "change_pct": -1.71
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.41
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.1
      },
      {
        "name": "自贸区",
        "change_pct": -0.66
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.54
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 14,
    "hot_rank_chg": 15,
    "stock_cnt": 5779,
    "price": "4.32",
    "change": "-1.59",
    "market_id": "33",
    "circulate_market_value": "25292723000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -1.69
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.39
      },
      {
        "name": "水利",
        "change_pct": -0.9
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.06
      },
      {
        "name": "大数据",
        "change_pct": -1.64
      },
      {
        "name": "园林",
        "change_pct": -1.21
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.08
      },
      {
        "name": "数字经济",
        "change_pct": -1.57
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.81
      },
      {
        "name": "传媒",
        "change_pct": -0.39
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.79
      },
      {
        "name": "第三代半导体",
        "change_pct": -2.09
      },
      {
        "name": "快手概念股",
        "change_pct": -0.62
      },
      {
        "name": "IGBT",
        "change_pct": -1.2
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.27
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.95
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.2
      },
      {
        "name": "氮化镓",
        "change_pct": -2.2
      },
      {
        "name": "AI营销",
        "change_pct": -0.94
      },
      {
        "name": "华为产业链",
        "change_pct": -1.86
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.47
      },
      {
        "name": "多模态",
        "change_pct": -1.44
      },
      {
        "name": "AI视频",
        "change_pct": -0.96
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.54
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.79
      },
      {
        "name": "区块链",
        "change_pct": -1.34
      }
    ]
  },
  {
    "code": "002506",
    "name": "协鑫集成",
    "hot_rank": 19,
    "hot_rank_chg": 70,
    "stock_cnt": 5779,
    "price": "2.55",
    "change": "0.39",
    "market_id": "33",
    "circulate_market_value": "14903327000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -1.1
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "储能",
        "change_pct": -0.95
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.18
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.81
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.16
      },
      {
        "name": "低价股",
        "change_pct": -0.75
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.8
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.54
      },
      {
        "name": "华为产业链",
        "change_pct": -1.86
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 21,
    "hot_rank_chg": -6,
    "stock_cnt": 5779,
    "price": "9.11",
    "change": "0.77",
    "market_id": "33",
    "circulate_market_value": "5467063400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.98
      },
      {
        "name": "边缘计算",
        "change_pct": -1.95
      },
      {
        "name": "核电",
        "change_pct": -1.11
      },
      {
        "name": "海工装备",
        "change_pct": -1.52
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.39
      },
      {
        "name": "冷链",
        "change_pct": -1.3
      },
      {
        "name": "地热",
        "change_pct": -2.17
      },
      {
        "name": "储能",
        "change_pct": -0.95
      },
      {
        "name": "碳中和",
        "change_pct": -0.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.82
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.34
      },
      {
        "name": "热泵",
        "change_pct": -1.26
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.54
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.61
      },
      {
        "name": "海洋经济",
        "change_pct": -1.18
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 23,
    "hot_rank_chg": -3,
    "stock_cnt": 5779,
    "price": "4.55",
    "change": "-3.81",
    "market_id": "33",
    "circulate_market_value": "12069105100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "装修装饰",
        "change_pct": -1.5
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.14
      },
      {
        "name": "破净股",
        "change_pct": -0.5
      },
      {
        "name": "航天",
        "change_pct": -1.56
      },
      {
        "name": "旧改",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 28,
    "hot_rank_chg": 154,
    "stock_cnt": 5779,
    "price": "12.39",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "3625041400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "玉米种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 2.01
      },
      {
        "name": "转基因",
        "change_pct": 2.79
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.18
      },
      {
        "name": "大农业",
        "change_pct": -0.46
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 30,
    "hot_rank_chg": 88,
    "stock_cnt": 5779,
    "price": "10.32",
    "change": "1.38",
    "market_id": "17",
    "circulate_market_value": "15198334000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.72
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.56
      },
      {
        "name": "火电",
        "change_pct": 0.33
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.08
      },
      {
        "name": "风电",
        "change_pct": -0.73
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 32,
    "hot_rank_chg": 3,
    "stock_cnt": 5779,
    "price": "8.99",
    "change": "1.12",
    "market_id": "33",
    "circulate_market_value": "4258385800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.87
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "VR&AR",
        "change_pct": -2.01
      },
      {
        "name": "游戏",
        "change_pct": -1.76
      },
      {
        "name": "影视",
        "change_pct": -0.03
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.06
      },
      {
        "name": "动漫",
        "change_pct": -0.55
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.81
      },
      {
        "name": "传媒",
        "change_pct": -0.39
      },
      {
        "name": "元宇宙",
        "change_pct": -1.16
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.75
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 33,
    "hot_rank_chg": 3,
    "stock_cnt": 5779,
    "price": "12.06",
    "change": "2.29",
    "market_id": "33",
    "circulate_market_value": "6831728200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "石墨烯",
        "change_pct": -1.89
      },
      {
        "name": "军民融合",
        "change_pct": -1.41
      },
      {
        "name": "物联网",
        "change_pct": -1.65
      },
      {
        "name": "LED",
        "change_pct": -1.22
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.19
      },
      {
        "name": "海洋经济",
        "change_pct": -1.18
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 34,
    "hot_rank_chg": 70,
    "stock_cnt": 5779,
    "price": "2.87",
    "change": "-1.71",
    "market_id": "33",
    "circulate_market_value": "6905599700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.82
      },
      {
        "name": "5G",
        "change_pct": -2.76
      },
      {
        "name": "一带一路",
        "change_pct": -1.14
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "光通信",
        "change_pct": -3.73
      },
      {
        "name": "军民融合",
        "change_pct": -1.41
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.41
      },
      {
        "name": "储能",
        "change_pct": -0.95
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.16
      },
      {
        "name": "低价股",
        "change_pct": -0.75
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.8
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.54
      },
      {
        "name": "智能电网",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "002045",
    "name": "国光电器",
    "hot_rank": 41,
    "hot_rank_chg": 301,
    "stock_cnt": 5779,
    "price": "10.89",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "6118360100.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "AI眼镜",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -2.38
      },
      {
        "name": "电子烟",
        "change_pct": -1.94
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.85
      },
      {
        "name": "锂电池",
        "change_pct": -1.82
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "VR&AR",
        "change_pct": -2.01
      },
      {
        "name": "智能音箱",
        "change_pct": -2.16
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.41
      },
      {
        "name": "黑色家电",
        "change_pct": -0.76
      },
      {
        "name": "家电",
        "change_pct": -0.84
      },
      {
        "name": "固态电池",
        "change_pct": -1.72
      },
      {
        "name": "NFT",
        "change_pct": -0.58
      },
      {
        "name": "元宇宙",
        "change_pct": -1.16
      },
      {
        "name": "无线耳机",
        "change_pct": -2.45
      },
      {
        "name": "智能手表",
        "change_pct": -1.51
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.75
      },
      {
        "name": "华为产业链",
        "change_pct": -1.86
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.37
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 45,
    "hot_rank_chg": -14,
    "stock_cnt": 5779,
    "price": "2.39",
    "change": "-5.16",
    "market_id": "17",
    "circulate_market_value": "6841069700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.87
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "游戏",
        "change_pct": -1.76
      },
      {
        "name": "影视",
        "change_pct": -0.03
      },
      {
        "name": "低价股",
        "change_pct": -0.75
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.75
      },
      {
        "name": "AI视频",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 47,
    "hot_rank_chg": 704,
    "stock_cnt": 5779,
    "price": "9.57",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "8931887800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "风电光伏",
    "xgb_concepts": [
      {
        "name": "新疆国企改革",
        "change_pct": 0.61
      },
      {
        "name": "新疆概念",
        "change_pct": -0.14
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "风电",
        "change_pct": -0.73
      },
      {
        "name": "储能",
        "change_pct": -0.95
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "600986",
    "name": "浙文互联",
    "hot_rank": 49,
    "hot_rank_chg": 53,
    "stock_cnt": 5779,
    "price": "7.82",
    "change": "2.22",
    "market_id": "17",
    "circulate_market_value": "11631265200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.1
      },
      {
        "name": "电竞",
        "change_pct": -0.6
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -1.1
      },
      {
        "name": "共享经济",
        "change_pct": -0.5
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.23
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.06
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.54
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.81
      },
      {
        "name": "传媒",
        "change_pct": -0.39
      },
      {
        "name": "快手概念股",
        "change_pct": -0.62
      },
      {
        "name": "NFT",
        "change_pct": -0.58
      },
      {
        "name": "元宇宙",
        "change_pct": -1.16
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.27
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.8
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.95
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.2
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.91
      },
      {
        "name": "AI营销",
        "change_pct": -0.94
      },
      {
        "name": "华为产业链",
        "change_pct": -1.86
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.47
      },
      {
        "name": "小米汽车",
        "change_pct": -1.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.75
      },
      {
        "name": "多模态",
        "change_pct": -1.44
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.79
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.84
      },
      {
        "name": "区块链",
        "change_pct": -1.34
      }
    ]
  },
  {
    "code": "601012",
    "name": "隆基绿能",
    "hot_rank": 50,
    "hot_rank_chg": -17,
    "stock_cnt": 5779,
    "price": "12.34",
    "change": "-1.04",
    "market_id": "17",
    "circulate_market_value": "93513289000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.08
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "白马股",
        "change_pct": -0.56
      },
      {
        "name": "碳中和",
        "change_pct": -0.54
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.81
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.16
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.8
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.54
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 51,
    "hot_rank_chg": -13,
    "stock_cnt": 5779,
    "price": "5.76",
    "change": "-4.79",
    "market_id": "33",
    "circulate_market_value": "4407210600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.88
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.99
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "医药商业",
        "change_pct": -0.9
      },
      {
        "name": "保健品",
        "change_pct": -0.72
      },
      {
        "name": "民营医院",
        "change_pct": -0.69
      },
      {
        "name": "医药",
        "change_pct": -1.42
      },
      {
        "name": "食品",
        "change_pct": -0.83
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.57
      },
      {
        "name": "口腔",
        "change_pct": -0.66
      },
      {
        "name": "医美",
        "change_pct": -1.24
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.18
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 55,
    "hot_rank_chg": 5,
    "stock_cnt": 5779,
    "price": "8.37",
    "change": "0.24",
    "market_id": "17",
    "circulate_market_value": "2256654200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.1
      },
      {
        "name": "高股息",
        "change_pct": 0.12
      },
      {
        "name": "银行",
        "change_pct": 0.52
      },
      {
        "name": "白马股",
        "change_pct": -0.56
      },
      {
        "name": "破净股",
        "change_pct": -0.5
      },
      {
        "name": "大金融",
        "change_pct": 0.0
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 57,
    "hot_rank_chg": -34,
    "stock_cnt": 5779,
    "price": "8.41",
    "change": "-5.08",
    "market_id": "33",
    "circulate_market_value": "5596064100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "纺织服装",
        "change_pct": -1.0
      },
      {
        "name": "破净股",
        "change_pct": -0.5
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 65,
    "hot_rank_chg": -21,
    "stock_cnt": 5779,
    "price": "8.24",
    "change": "-2.02",
    "market_id": "33",
    "circulate_market_value": "13406428700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.1
      },
      {
        "name": "电竞",
        "change_pct": -0.6
      },
      {
        "name": "手游",
        "change_pct": -1.87
      },
      {
        "name": "人工智能",
        "change_pct": -1.69
      },
      {
        "name": "游戏",
        "change_pct": -1.76
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.57
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.81
      },
      {
        "name": "传媒",
        "change_pct": -0.39
      },
      {
        "name": "快手概念股",
        "change_pct": -0.62
      },
      {
        "name": "元宇宙",
        "change_pct": -1.16
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.27
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.8
      },
      {
        "name": "web3.0",
        "change_pct": -1.74
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.95
      },
      {
        "name": "数据要素",
        "change_pct": -1.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.2
      },
      {
        "name": "AI营销",
        "change_pct": -0.94
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.68
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.37
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.47
      },
      {
        "name": "人形机器人",
        "change_pct": -2.0
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.75
      },
      {
        "name": "多模态",
        "change_pct": -1.44
      },
      {
        "name": "AI视频",
        "change_pct": -0.96
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.0
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.79
      }
    ]
  },
  {
    "code": "600207",
    "name": "安彩高科",
    "hot_rank": 70,
    "hot_rank_chg": 940,
    "stock_cnt": 5779,
    "price": "4.88",
    "change": "9.91",
    "market_id": "17",
    "circulate_market_value": "5315845300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光伏玻璃",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -1.0
      },
      {
        "name": "天然气",
        "change_pct": -0.59
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "储能",
        "change_pct": -0.95
      },
      {
        "name": "光热发电",
        "change_pct": -0.69
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 72,
    "hot_rank_chg": -18,
    "stock_cnt": 5779,
    "price": "9.63",
    "change": "-1.94",
    "market_id": "33",
    "circulate_market_value": "10207368300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.41
      },
      {
        "name": "电子烟",
        "change_pct": -1.94
      },
      {
        "name": "一带一路",
        "change_pct": -1.14
      },
      {
        "name": "造纸",
        "change_pct": -1.24
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "包装印刷",
        "change_pct": -1.25
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.51
      },
      {
        "name": "太空算力",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 74,
    "hot_rank_chg": 115,
    "stock_cnt": 5779,
    "price": "12.26",
    "change": "-2.39",
    "market_id": "17",
    "circulate_market_value": "4612706300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "物业管理",
        "change_pct": -1.17
      },
      {
        "name": "免税店概念",
        "change_pct": -0.65
      },
      {
        "name": "地摊经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 75,
    "hot_rank_chg": -19,
    "stock_cnt": 5779,
    "price": "4.46",
    "change": "-2.83",
    "market_id": "33",
    "circulate_market_value": "157737420000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.29
      },
      {
        "name": "折叠屏",
        "change_pct": -2.64
      },
      {
        "name": "手机产业链",
        "change_pct": -2.38
      },
      {
        "name": "超高清视频",
        "change_pct": -1.76
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.85
      },
      {
        "name": "电竞",
        "change_pct": -0.6
      },
      {
        "name": "半导体",
        "change_pct": -2.68
      },
      {
        "name": "人工智能",
        "change_pct": -1.69
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.23
      },
      {
        "name": "VR&AR",
        "change_pct": -2.01
      },
      {
        "name": "OLED",
        "change_pct": -2.29
      },
      {
        "name": "京津冀",
        "change_pct": -0.96
      },
      {
        "name": "物联网",
        "change_pct": -1.65
      },
      {
        "name": "指纹识别",
        "change_pct": -2.78
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.23
      },
      {
        "name": "白马股",
        "change_pct": -0.56
      },
      {
        "name": "智能制造",
        "change_pct": -1.88
      },
      {
        "name": "小米概念股",
        "change_pct": -2.08
      },
      {
        "name": "国产芯片",
        "change_pct": -2.53
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.3
      },
      {
        "name": "全息概念",
        "change_pct": -1.54
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.79
      },
      {
        "name": "MicroLED",
        "change_pct": -2.6
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.8
      },
      {
        "name": "智能手表",
        "change_pct": -1.51
      },
      {
        "name": "MiniLED",
        "change_pct": -2.57
      },
      {
        "name": "传感器",
        "change_pct": -2.25
      },
      {
        "name": "大硅片",
        "change_pct": -0.84
      },
      {
        "name": "AI PC",
        "change_pct": -2.86
      },
      {
        "name": "华为产业链",
        "change_pct": -1.86
      },
      {
        "name": "回购",
        "change_pct": -2.12
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -4.66
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.37
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.07
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 76,
    "hot_rank_chg": 33,
    "stock_cnt": 5779,
    "price": "10.99",
    "change": "-5.18",
    "market_id": "17",
    "circulate_market_value": "14114685000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "智能制造",
        "change_pct": -1.88
      },
      {
        "name": "工业互联网",
        "change_pct": -1.72
      },
      {
        "name": "培育钻石",
        "change_pct": -3.16
      },
      {
        "name": "金刚线",
        "change_pct": -1.2
      },
      {
        "name": "国资入股",
        "change_pct": -1.02
      },
      {
        "name": "深地经济",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 77,
    "hot_rank_chg": 11,
    "stock_cnt": 5779,
    "price": "10.68",
    "change": "-8.01",
    "market_id": "17",
    "circulate_market_value": "4281419600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -0.21
      },
      {
        "name": "新零售",
        "change_pct": -1.34
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "物业管理",
        "change_pct": -1.17
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "地摊经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "002529",
    "name": "海源复材",
    "hot_rank": 78,
    "hot_rank_chg": 368,
    "stock_cnt": 5779,
    "price": "7.21",
    "change": "7.29",
    "market_id": "33",
    "circulate_market_value": "1874600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": -0.99
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.72
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.41
      },
      {
        "name": "碳纤维",
        "change_pct": -1.05
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.86
      },
      {
        "name": "智能制造",
        "change_pct": -1.88
      },
      {
        "name": "3D打印",
        "change_pct": -1.87
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "605188",
    "name": "国光连锁",
    "hot_rank": 79,
    "hot_rank_chg": 464,
    "stock_cnt": 5779,
    "price": "12.13",
    "change": "-2.33",
    "market_id": "17",
    "circulate_market_value": "6170512800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.34
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 80,
    "hot_rank_chg": 1058,
    "stock_cnt": 5779,
    "price": "8.24",
    "change": "6.87",
    "market_id": "17",
    "circulate_market_value": "27702054000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -0.84
      },
      {
        "name": "高管增持",
        "change_pct": -1.35
      },
      {
        "name": "超高清视频",
        "change_pct": -1.76
      },
      {
        "name": "电竞",
        "change_pct": -0.6
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.21
      },
      {
        "name": "游戏",
        "change_pct": -1.76
      },
      {
        "name": "物联网",
        "change_pct": -1.65
      },
      {
        "name": "教育",
        "change_pct": -1.5
      },
      {
        "name": "智慧城市",
        "change_pct": -1.57
      },
      {
        "name": "破净股",
        "change_pct": -0.5
      },
      {
        "name": "传媒",
        "change_pct": -0.39
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.8
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "在线教育",
        "change_pct": -1.65
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.47
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.75
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 82,
    "hot_rank_chg": 171,
    "stock_cnt": 5779,
    "price": "9.66",
    "change": "-1.13",
    "market_id": "33",
    "circulate_market_value": "6616157200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.9
      },
      {
        "name": "核电",
        "change_pct": -1.11
      },
      {
        "name": "充电桩",
        "change_pct": -1.29
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.39
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.41
      },
      {
        "name": "储能",
        "change_pct": -0.95
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.54
      },
      {
        "name": "智能电网",
        "change_pct": -1.12
      },
      {
        "name": "核聚变",
        "change_pct": -1.68
      }
    ]
  },
  {
    "code": "600667",
    "name": "太极实业",
    "hot_rank": 85,
    "hot_rank_chg": -4,
    "stock_cnt": 5779,
    "price": "12.78",
    "change": "-3.33",
    "market_id": "17",
    "circulate_market_value": "26729909000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.81
      },
      {
        "name": "半导体",
        "change_pct": -2.68
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "风电",
        "change_pct": -0.73
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.66
      },
      {
        "name": "国产芯片",
        "change_pct": -2.53
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.16
      },
      {
        "name": "内存",
        "change_pct": -4.0
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "闪存",
        "change_pct": -3.36
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -2.16
      }
    ]
  },
  {
    "code": "603212",
    "name": "赛伍技术",
    "hot_rank": 86,
    "hot_rank_chg": 268,
    "stock_cnt": 5779,
    "price": "10.98",
    "change": "2.90",
    "market_id": "17",
    "circulate_market_value": "4803647200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.64
      },
      {
        "name": "特斯拉",
        "change_pct": -1.73
      },
      {
        "name": "锂电池",
        "change_pct": -1.82
      },
      {
        "name": "OLED",
        "change_pct": -2.29
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.41
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.86
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.1
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.3
      },
      {
        "name": "IGBT",
        "change_pct": -1.2
      },
      {
        "name": "固态电池",
        "change_pct": -1.72
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.34
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.8
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.54
      },
      {
        "name": "光伏胶膜",
        "change_pct": -1.34
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 89,
    "hot_rank_chg": 74,
    "stock_cnt": 5779,
    "price": "6.67",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "3376510700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "电解液",
    "xgb_concepts": [
      {
        "name": "电子特气",
        "change_pct": -1.53
      },
      {
        "name": "资产重组",
        "change_pct": -1.44
      },
      {
        "name": "仪器仪表",
        "change_pct": -1.64
      },
      {
        "name": "锂电池",
        "change_pct": -1.82
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.72
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "有机硅",
        "change_pct": -0.41
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.41
      },
      {
        "name": "华为产业链",
        "change_pct": -1.86
      },
      {
        "name": "供应链金融",
        "change_pct": -0.01
      },
      {
        "name": "服务器",
        "change_pct": -2.46
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 93,
    "hot_rank_chg": -25,
    "stock_cnt": 5779,
    "price": "10.70",
    "change": "-2.10",
    "market_id": "33",
    "circulate_market_value": "3576570400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.11
      },
      {
        "name": "饲料",
        "change_pct": -0.24
      },
      {
        "name": "一带一路",
        "change_pct": -1.14
      },
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "保健品",
        "change_pct": -0.72
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.86
      },
      {
        "name": "污水处理",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.85
      },
      {
        "name": "食品",
        "change_pct": -0.83
      },
      {
        "name": "预制菜",
        "change_pct": -0.66
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "水产养殖",
        "change_pct": 0.77
      },
      {
        "name": "广西概念",
        "change_pct": -0.75
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 97,
    "hot_rank_chg": 372,
    "stock_cnt": 5779,
    "price": "5.55",
    "change": "7.14",
    "market_id": "33",
    "circulate_market_value": "4918689900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 2.01
      },
      {
        "name": "转基因",
        "change_pct": 2.79
      },
      {
        "name": "土地流转",
        "change_pct": -0.09
      },
      {
        "name": "海南概念",
        "change_pct": -1.01
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.45
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.99
      },
      {
        "name": "大农业",
        "change_pct": -0.46
      },
      {
        "name": "水产养殖",
        "change_pct": 0.77
      },
      {
        "name": "自贸区",
        "change_pct": -0.66
      }
    ]
  },
  {
    "code": "601857",
    "name": "中国石油",
    "hot_rank": 98,
    "hot_rank_chg": -51,
    "stock_cnt": 5779,
    "price": "12.42",
    "change": "-0.96",
    "market_id": "17",
    "circulate_market_value": "2011072200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": 0.12
      },
      {
        "name": "央企改革",
        "change_pct": -0.72
      },
      {
        "name": "一带一路",
        "change_pct": -1.14
      },
      {
        "name": "石油化工",
        "change_pct": -1.48
      },
      {
        "name": "天然气",
        "change_pct": -0.59
      },
      {
        "name": "油气改革",
        "change_pct": -1.08
      },
      {
        "name": "可燃冰",
        "change_pct": -1.06
      },
      {
        "name": "中字头",
        "change_pct": -0.58
      },
      {
        "name": "页岩气",
        "change_pct": -1.24
      },
      {
        "name": "丁辛醇",
        "change_pct": -0.96
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 99,
    "hot_rank_chg": 178,
    "stock_cnt": 5779,
    "price": "3.81",
    "change": "10.12",
    "market_id": "17",
    "circulate_market_value": "4973840400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.0
      },
      {
        "name": "高速公路",
        "change_pct": 1.14
      },
      {
        "name": "振兴东北",
        "change_pct": -0.69
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 1.1
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 100,
    "hot_rank_chg": 1882,
    "stock_cnt": 5779,
    "price": "5.38",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "6125971200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "储能并网",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -0.72
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.92
      },
      {
        "name": "航母",
        "change_pct": -0.01
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "风电",
        "change_pct": -0.73
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "储能",
        "change_pct": -0.95
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.16
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600261", "name": "阳光照明", "hot_rank": 1, "hot_rank_chg": 7, "stock_cnt": 5779, "price": "5.40", "change": "9.98", "market_id": "17", "circulate_market_value": "7209286000.00", "change_type": "1", "change_section": "12", "change_days": "7", "change_reason": "商业航天", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.0}, {"name": "LED", "change_pct": -1.22}, {"name": "卫星互联网", "change_pct": -1.51}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5779, "price": "3.97", "change": "9.97", "market_id": "33", "circulate_market_value": "6276455900.00", "change_type": "1", "change_section": "13", "change_days": "8", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.42}, {"name": "体外诊断", "change_pct": -1.51}, {"name": "医疗器械", "change_pct": -1.34}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "基因测序", "change_pct": -1.43}, {"name": "预制菜", "change_pct": -0.66}, {"name": "水产养殖", "change_pct": 0.77}, {"name": "新冠病毒防治", "change_pct": -1.18}, {"name": "海洋经济", "change_pct": -1.18}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5779, "price": "450.00", "change": "-8.78", "market_id": "33", "circulate_market_value": "499471650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5779, "price": "81.17", "change": "-8.90", "market_id": "33", "circulate_market_value": "112527734000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 5, "hot_rank_chg": 53, "stock_cnt": 5779, "price": "11.09", "change": "5.92", "market_id": "17", "circulate_market_value": "7117375900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.64}, {"name": "农业种植", "change_pct": 2.01}, {"name": "湖南国企改革", "change_pct": -0.67}, {"name": "乡村振兴", "change_pct": 0.18}, {"name": "休闲食品", "change_pct": -1.07}, {"name": "食品", "change_pct": -0.83}, {"name": "食品安全", "change_pct": -1.45}, {"name": "社区团购", "change_pct": -0.3}, {"name": "大农业", "change_pct": -0.46}, {"name": "预制菜", "change_pct": -0.66}, {"name": "人造肉", "change_pct": -0.4}, {"name": "国企改革", "change_pct": -0.61}]}, {"code": "300502", "name": "新易盛", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5779, "price": "172.55", "change": "-7.04", "market_id": "33", "circulate_market_value": "216502580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601599", "name": "浙文影业", "hot_rank": 7, "hot_rank_chg": 27, "stock_cnt": 5779, "price": "5.08", "change": "9.96", "market_id": "17", "circulate_market_value": "5895555700.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.0}, {"name": "纺织服装", "change_pct": -1.0}, {"name": "浙江国企改革", "change_pct": -0.23}, {"name": "影视", "change_pct": -0.03}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.61}, {"name": "短剧/互动影游", "change_pct": -0.75}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 8, "hot_rank_chg": 59, "stock_cnt": 5779, "price": "5.01", "change": "10.11", "market_id": "33", "circulate_market_value": "4314424400.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "光伏边框", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.19}, {"name": "一带一路", "change_pct": -1.14}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "福建自贸/海西概念", "change_pct": -0.92}, {"name": "光伏", "change_pct": -0.52}, {"name": "有色金属", "change_pct": -1.71}, {"name": "新能源汽车", "change_pct": -1.41}, {"name": "新能源车零部件", "change_pct": -1.1}, {"name": "自贸区", "change_pct": -0.66}, {"name": "液冷服务器", "change_pct": -2.54}]}, {"code": "600206", "name": "有研新材", "hot_rank": 9, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "38.37", "change": "-0.05", "market_id": "17", "circulate_market_value": "32482251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 10, "hot_rank_chg": 6, "stock_cnt": 5779, "price": "25.27", "change": "3.69", "market_id": "33", "circulate_market_value": "19249817000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 11, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "16.91", "change": "-6.06", "market_id": "33", "circulate_market_value": "2999969300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 12, "hot_rank_chg": -9, "stock_cnt": 5779, "price": "82.48", "change": "-3.12", "market_id": "33", "circulate_market_value": "130933673000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 13, "hot_rank_chg": -2, "stock_cnt": 5779, "price": "18.24", "change": "-7.60", "market_id": "33", "circulate_market_value": "8383319200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 14, "hot_rank_chg": 15, "stock_cnt": 5779, "price": "4.32", "change": "-1.59", "market_id": "33", "circulate_market_value": "25292723000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -1.69}, {"name": "云计算数据中心", "change_pct": -2.39}, {"name": "水利", "change_pct": -0.9}, {"name": "直播/短视频", "change_pct": -1.06}, {"name": "大数据", "change_pct": -1.64}, {"name": "园林", "change_pct": -1.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.08}, {"name": "数字经济", "change_pct": -1.57}, {"name": "腾讯概念股", "change_pct": -1.81}, {"name": "传媒", "change_pct": -0.39}, {"name": "理想汽车概念股", "change_pct": -1.79}, {"name": "第三代半导体", "change_pct": -2.09}, {"name": "快手概念股", "change_pct": -0.62}, {"name": "IGBT", "change_pct": -1.2}, {"name": "虚拟数字人", "change_pct": -1.27}, {"name": "AIGC概念", "change_pct": -0.95}, {"name": "字节跳动概念股", "change_pct": -1.2}, {"name": "氮化镓", "change_pct": -2.2}, {"name": "AI营销", "change_pct": -0.94}, {"name": "华为产业链", "change_pct": -1.86}, {"name": "AI大模型/智能体", "change_pct": -1.47}, {"name": "多模态", "change_pct": -1.44}, {"name": "AI视频", "change_pct": -0.96}, {"name": "液冷服务器", "change_pct": -2.54}, {"name": "小红书概念股", "change_pct": -0.79}, {"name": "区块链", "change_pct": -1.34}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 15, "hot_rank_chg": -8, "stock_cnt": 5779, "price": "40.63", "change": "-4.47", "market_id": "17", "circulate_market_value": "182958470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 16, "hot_rank_chg": -11, "stock_cnt": 5779, "price": "73.43", "change": "-7.05", "market_id": "33", "circulate_market_value": "47950341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002865", "name": "钧达股份", "hot_rank": 17, "hot_rank_chg": 45, "stock_cnt": 5779, "price": "45.47", "change": "4.12", "market_id": "33", "circulate_market_value": "10404511400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 18, "hot_rank_chg": 116, "stock_cnt": 5779, "price": "60.30", "change": "5.11", "market_id": "33", "circulate_market_value": "13062667400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002506", "name": "协鑫集成", "hot_rank": 19, "hot_rank_chg": 70, "stock_cnt": 5779, "price": "2.55", "change": "0.39", "market_id": "33", "circulate_market_value": "14903327000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -1.1}, {"name": "光伏", "change_pct": -0.52}, {"name": "储能", "change_pct": -0.95}, {"name": "乡村振兴", "change_pct": 0.18}, {"name": "颗粒硅", "change_pct": -0.81}, {"name": "BIPV概念", "change_pct": -0.16}, {"name": "低价股", "change_pct": -0.75}, {"name": "钙钛矿电池", "change_pct": -0.8}, {"name": "异质结电池HJT", "change_pct": -0.54}, {"name": "华为产业链", "change_pct": -1.86}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 20, "hot_rank_chg": -11, "stock_cnt": 5779, "price": "33.89", "change": "3.39", "market_id": "33", "circulate_market_value": "34625412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 21, "hot_rank_chg": -6, "stock_cnt": 5779, "price": "9.11", "change": "0.77", "market_id": "33", "circulate_market_value": "5467063400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.98}, {"name": "边缘计算", "change_pct": -1.95}, {"name": "核电", "change_pct": -1.11}, {"name": "海工装备", "change_pct": -1.52}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "云计算数据中心", "change_pct": -2.39}, {"name": "冷链", "change_pct": -1.3}, {"name": "地热", "change_pct": -2.17}, {"name": "储能", "change_pct": -0.95}, {"name": "碳中和", "change_pct": -0.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -0.82}, {"name": "汽车热管理", "change_pct": -1.34}, {"name": "热泵", "change_pct": -1.26}, {"name": "液冷服务器", "change_pct": -2.54}, {"name": "蜜雪冰城概念股", "change_pct": -0.61}, {"name": "海洋经济", "change_pct": -1.18}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 22, "hot_rank_chg": -8, "stock_cnt": 5779, "price": "253.33", "change": "-4.06", "market_id": "33", "circulate_market_value": "1079342130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 23, "hot_rank_chg": -3, "stock_cnt": 5779, "price": "4.55", "change": "-3.81", "market_id": "33", "circulate_market_value": "12069105100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.0}, {"name": "装修装饰", "change_pct": -1.5}, {"name": "装配式建筑", "change_pct": -1.14}, {"name": "破净股", "change_pct": -0.5}, {"name": "航天", "change_pct": -1.56}, {"name": "旧改", "change_pct": -1.03}]}, {"code": "603381", "name": "永臻股份", "hot_rank": 24, "hot_rank_chg": 59, "stock_cnt": 5779, "price": "20.74", "change": "10.03", "market_id": "17", "circulate_market_value": "2947935600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "光伏"}, {"code": "688836", "name": "宇树科技", "hot_rank": 25, "hot_rank_chg": -15, "stock_cnt": 5779, "price": "667.90", "change": "-2.35", "market_id": "17", "circulate_market_value": "20095588000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301697", "name": "贝特利", "hot_rank": 26, "hot_rank_chg": 64, "stock_cnt": 5779, "price": "36.60", "change": "20.00", "market_id": "33", "circulate_market_value": "1610071800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光伏银粉"}, {"code": "600487", "name": "亨通光电", "hot_rank": 27, "hot_rank_chg": 0, "stock_cnt": 5779, "price": "41.18", "change": "-5.79", "market_id": "17", "circulate_market_value": "101041153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 28, "hot_rank_chg": 154, "stock_cnt": 5779, "price": "12.39", "change": "10.04", "market_id": "17", "circulate_market_value": "3625041400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "玉米种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.01}, {"name": "转基因", "change_pct": 2.79}, {"name": "乡村振兴", "change_pct": 0.18}, {"name": "大农业", "change_pct": -0.46}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 29, "hot_rank_chg": -4, "stock_cnt": 5779, "price": "243.41", "change": "-7.50", "market_id": "17", "circulate_market_value": "163259550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 30, "hot_rank_chg": 88, "stock_cnt": 5779, "price": "10.32", "change": "1.38", "market_id": "17", "circulate_market_value": "15198334000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.72}, {"name": "电力体制改革", "change_pct": 0.56}, {"name": "火电", "change_pct": 0.33}, {"name": "氢能源/燃料电池", "change_pct": -1.08}, {"name": "风电", "change_pct": -0.73}, {"name": "国企改革", "change_pct": -0.61}]}, {"code": "603598", "name": "引力传媒", "hot_rank": 31, "hot_rank_chg": 41, "stock_cnt": 5779, "price": "22.08", "change": "1.94", "market_id": "17", "circulate_market_value": "5966309700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 32, "hot_rank_chg": 3, "stock_cnt": 5779, "price": "8.99", "change": "1.12", "market_id": "33", "circulate_market_value": "4258385800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -1.87}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "VR&AR", "change_pct": -2.01}, {"name": "游戏", "change_pct": -1.76}, {"name": "影视", "change_pct": -0.03}, {"name": "直播/短视频", "change_pct": -1.06}, {"name": "动漫", "change_pct": -0.55}, {"name": "腾讯概念股", "change_pct": -1.81}, {"name": "传媒", "change_pct": -0.39}, {"name": "元宇宙", "change_pct": -1.16}, {"name": "短剧/互动影游", "change_pct": -0.75}, {"name": "IP经济/谷子经济", "change_pct": -1.0}]}, {"code": "002724", "name": "海洋王", "hot_rank": 33, "hot_rank_chg": 3, "stock_cnt": 5779, "price": "12.06", "change": "2.29", "market_id": "33", "circulate_market_value": "6831728200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.0}, {"name": "石墨烯", "change_pct": -1.89}, {"name": "军民融合", "change_pct": -1.41}, {"name": "物联网", "change_pct": -1.65}, {"name": "LED", "change_pct": -1.22}, {"name": "军工", "change_pct": -1.23}, {"name": "智慧灯杆", "change_pct": -1.19}, {"name": "海洋经济", "change_pct": -1.18}]}, {"code": "002309", "name": "中利集团", "hot_rank": 34, "hot_rank_chg": 70, "stock_cnt": 5779, "price": "2.87", "change": "-1.71", "market_id": "33", "circulate_market_value": "6905599700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.82}, {"name": "5G", "change_pct": -2.76}, {"name": "一带一路", "change_pct": -1.14}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "光通信", "change_pct": -3.73}, {"name": "军民融合", "change_pct": -1.41}, {"name": "光伏", "change_pct": -0.52}, {"name": "军工", "change_pct": -1.23}, {"name": "新能源汽车", "change_pct": -1.41}, {"name": "储能", "change_pct": -0.95}, {"name": "BIPV概念", "change_pct": -0.16}, {"name": "低价股", "change_pct": -0.75}, {"name": "钙钛矿电池", "change_pct": -0.8}, {"name": "异质结电池HJT", "change_pct": -0.54}, {"name": "智能电网", "change_pct": -1.12}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 35, "hot_rank_chg": -7, "stock_cnt": 5779, "price": "122.65", "change": "-5.29", "market_id": "33", "circulate_market_value": "133490794000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 36, "hot_rank_chg": -18, "stock_cnt": 5779, "price": "13.31", "change": "1.76", "market_id": "17", "circulate_market_value": "13907457000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 37, "hot_rank_chg": 8, "stock_cnt": 5779, "price": "41.12", "change": "-7.16", "market_id": "17", "circulate_market_value": "815989070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 38, "hot_rank_chg": -21, "stock_cnt": 5779, "price": "13.37", "change": "0.00", "market_id": "33", "circulate_market_value": "46499928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 39, "hot_rank_chg": -15, "stock_cnt": 5779, "price": "66.33", "change": "0.68", "market_id": "33", "circulate_market_value": "48104941000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301171", "name": "易点天下", "hot_rank": 40, "hot_rank_chg": -8, "stock_cnt": 5779, "price": "35.52", "change": "3.05", "market_id": "33", "circulate_market_value": "17826943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002045", "name": "国光电器", "hot_rank": 41, "hot_rank_chg": 301, "stock_cnt": 5779, "price": "10.89", "change": "10.00", "market_id": "33", "circulate_market_value": "6118360100.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "AI眼镜", "xgb_concepts": [{"name": "手机产业链", "change_pct": -2.38}, {"name": "电子烟", "change_pct": -1.94}, {"name": "苹果产业链", "change_pct": -2.85}, {"name": "锂电池", "change_pct": -1.82}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "VR&AR", "change_pct": -2.01}, {"name": "智能音箱", "change_pct": -2.16}, {"name": "新能源汽车", "change_pct": -1.41}, {"name": "黑色家电", "change_pct": -0.76}, {"name": "家电", "change_pct": -0.84}, {"name": "固态电池", "change_pct": -1.72}, {"name": "NFT", "change_pct": -0.58}, {"name": "元宇宙", "change_pct": -1.16}, {"name": "无线耳机", "change_pct": -2.45}, {"name": "智能手表", "change_pct": -1.51}, {"name": "华为鸿蒙", "change_pct": -1.75}, {"name": "华为产业链", "change_pct": -1.86}, {"name": "智能眼镜/MR头显", "change_pct": -2.37}]}, {"code": "002156", "name": "通富微电", "hot_rank": 42, "hot_rank_chg": -23, "stock_cnt": 5779, "price": "43.86", "change": "-3.07", "market_id": "33", "circulate_market_value": "66555454000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001381", "name": "皇冠新材", "hot_rank": 43, "hot_rank_chg": -22, "stock_cnt": 5779, "price": "51.51", "change": "-9.79", "market_id": "33", "circulate_market_value": "2271448900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 44, "hot_rank_chg": -22, "stock_cnt": 5779, "price": "52.85", "change": "-1.45", "market_id": "17", "circulate_market_value": "94570560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 45, "hot_rank_chg": -14, "stock_cnt": 5779, "price": "2.39", "change": "-5.16", "market_id": "17", "circulate_market_value": "6841069700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -1.87}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "游戏", "change_pct": -1.76}, {"name": "影视", "change_pct": -0.03}, {"name": "低价股", "change_pct": -0.75}, {"name": "国企改革", "change_pct": -0.61}, {"name": "短剧/互动影游", "change_pct": -0.75}, {"name": "AI视频", "change_pct": -0.96}]}, {"code": "002185", "name": "华天科技", "hot_rank": 46, "hot_rank_chg": -20, "stock_cnt": 5779, "price": "14.51", "change": "-3.59", "market_id": "33", "circulate_market_value": "48319286000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 47, "hot_rank_chg": 704, "stock_cnt": 5779, "price": "9.57", "change": "10.00", "market_id": "33", "circulate_market_value": "8931887800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "风电光伏", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": 0.61}, {"name": "新疆概念", "change_pct": -0.14}, {"name": "光伏", "change_pct": -0.52}, {"name": "风电", "change_pct": -0.73}, {"name": "储能", "change_pct": -0.95}, {"name": "国企改革", "change_pct": -0.61}]}, {"code": "002709", "name": "天赐材料", "hot_rank": 48, "hot_rank_chg": 31, "stock_cnt": 5779, "price": "28.72", "change": "-1.00", "market_id": "33", "circulate_market_value": "43338796000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600986", "name": "浙文互联", "hot_rank": 49, "hot_rank_chg": 53, "stock_cnt": 5779, "price": "7.82", "change": "2.22", "market_id": "17", "circulate_market_value": "11631265200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.1}, {"name": "电竞", "change_pct": -0.6}, {"name": "蚂蚁集团概念股", "change_pct": -1.1}, {"name": "共享经济", "change_pct": -0.5}, {"name": "浙江国企改革", "change_pct": -0.23}, {"name": "直播/短视频", "change_pct": -1.06}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.08}, {"name": "阿里巴巴概念股", "change_pct": -1.54}, {"name": "腾讯概念股", "change_pct": -1.81}, {"name": "传媒", "change_pct": -0.39}, {"name": "快手概念股", "change_pct": -0.62}, {"name": "NFT", "change_pct": -0.58}, {"name": "元宇宙", "change_pct": -1.16}, {"name": "虚拟数字人", "change_pct": -1.27}, {"name": "东数西算/算力", "change_pct": -1.8}, {"name": "AIGC概念", "change_pct": -0.95}, {"name": "字节跳动概念股", "change_pct": -1.2}, {"name": "国企改革", "change_pct": -0.61}, {"name": "网红/MCN", "change_pct": -0.91}, {"name": "AI营销", "change_pct": -0.94}, {"name": "华为产业链", "change_pct": -1.86}, {"name": "AI大模型/智能体", "change_pct": -1.47}, {"name": "小米汽车", "change_pct": -1.4}, {"name": "短剧/互动影游", "change_pct": -0.75}, {"name": "多模态", "change_pct": -1.44}, {"name": "小红书概念股", "change_pct": -0.79}, {"name": "DeepSeek概念股", "change_pct": -1.84}, {"name": "区块链", "change_pct": -1.34}]}, {"code": "601012", "name": "隆基绿能", "hot_rank": 50, "hot_rank_chg": -17, "stock_cnt": 5779, "price": "12.34", "change": "-1.04", "market_id": "17", "circulate_market_value": "93513289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": -1.08}, {"name": "光伏", "change_pct": -0.52}, {"name": "白马股", "change_pct": -0.56}, {"name": "碳中和", "change_pct": -0.54}, {"name": "颗粒硅", "change_pct": -0.81}, {"name": "BIPV概念", "change_pct": -0.16}, {"name": "钙钛矿电池", "change_pct": -0.8}, {"name": "异质结电池HJT", "change_pct": -0.54}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 51, "hot_rank_chg": -13, "stock_cnt": 5779, "price": "5.76", "change": "-4.79", "market_id": "33", "circulate_market_value": "4407210600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.88}, {"name": "优化生育（三孩）", "change_pct": -0.99}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "医药商业", "change_pct": -0.9}, {"name": "保健品", "change_pct": -0.72}, {"name": "民营医院", "change_pct": -0.69}, {"name": "医药", "change_pct": -1.42}, {"name": "食品", "change_pct": -0.83}, {"name": "辅助生殖", "change_pct": -1.57}, {"name": "口腔", "change_pct": -0.66}, {"name": "医美", "change_pct": -1.24}, {"name": "新冠病毒防治", "change_pct": -1.18}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 52, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "74.65", "change": "-7.84", "market_id": "33", "circulate_market_value": "143853800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002275", "name": "桂林三金", "hot_rank": 53, "hot_rank_chg": 13, "stock_cnt": 5779, "price": "17.74", "change": "1.02", "market_id": "33", "circulate_market_value": "10018688200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 54, "hot_rank_chg": -4, "stock_cnt": 5779, "price": "188.35", "change": "-6.19", "market_id": "33", "circulate_market_value": "43775947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 55, "hot_rank_chg": 5, "stock_cnt": 5779, "price": "8.37", "change": "0.24", "market_id": "17", "circulate_market_value": "2256654200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.1}, {"name": "高股息", "change_pct": 0.12}, {"name": "银行", "change_pct": 0.52}, {"name": "白马股", "change_pct": -0.56}, {"name": "破净股", "change_pct": -0.5}, {"name": "大金融", "change_pct": 0.0}]}, {"code": "600183", "name": "生益科技", "hot_rank": 56, "hot_rank_chg": -10, "stock_cnt": 5779, "price": "70.98", "change": "-8.74", "market_id": "17", "circulate_market_value": "171185930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002029", "name": "七匹狼", "hot_rank": 57, "hot_rank_chg": -34, "stock_cnt": 5779, "price": "8.41", "change": "-5.08", "market_id": "33", "circulate_market_value": "5596064100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.0}, {"name": "纺织服装", "change_pct": -1.0}, {"name": "破净股", "change_pct": -0.5}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "300085", "name": "银之杰", "hot_rank": 58, "hot_rank_chg": -15, "stock_cnt": 5779, "price": "29.14", "change": "-2.05", "market_id": "33", "circulate_market_value": "17388046000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 59, "hot_rank_chg": -18, "stock_cnt": 5779, "price": "14.38", "change": "-4.64", "market_id": "17", "circulate_market_value": "4914500100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920085", "name": "森峰激光", "hot_rank": 60, "hot_rank_chg": 4923, "stock_cnt": 5779, "price": "44.69", "change": "151.21", "market_id": "151", "circulate_market_value": "832298920.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 61, "hot_rank_chg": 19, "stock_cnt": 5779, "price": "31.83", "change": "2.61", "market_id": "17", "circulate_market_value": "29621950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 62, "hot_rank_chg": -20, "stock_cnt": 5779, "price": "22.81", "change": "-1.81", "market_id": "33", "circulate_market_value": "4338405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 63, "hot_rank_chg": -33, "stock_cnt": 5779, "price": "18.12", "change": "-5.77", "market_id": "33", "circulate_market_value": "8196379100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 64, "hot_rank_chg": 30, "stock_cnt": 5779, "price": "50.79", "change": "-8.98", "market_id": "17", "circulate_market_value": "7259364500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 65, "hot_rank_chg": -21, "stock_cnt": 5779, "price": "8.24", "change": "-2.02", "market_id": "33", "circulate_market_value": "13406428700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.1}, {"name": "电竞", "change_pct": -0.6}, {"name": "手游", "change_pct": -1.87}, {"name": "人工智能", "change_pct": -1.69}, {"name": "游戏", "change_pct": -1.76}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.57}, {"name": "腾讯概念股", "change_pct": -1.81}, {"name": "传媒", "change_pct": -0.39}, {"name": "快手概念股", "change_pct": -0.62}, {"name": "元宇宙", "change_pct": -1.16}, {"name": "虚拟数字人", "change_pct": -1.27}, {"name": "东数西算/算力", "change_pct": -1.8}, {"name": "web3.0", "change_pct": -1.74}, {"name": "AIGC概念", "change_pct": -0.95}, {"name": "数据要素", "change_pct": -1.6}, {"name": "字节跳动概念股", "change_pct": -1.2}, {"name": "AI营销", "change_pct": -0.94}, {"name": "ChatGPT", "change_pct": -1.68}, {"name": "智能眼镜/MR头显", "change_pct": -2.37}, {"name": "AI大模型/智能体", "change_pct": -1.47}, {"name": "人形机器人", "change_pct": -2.0}, {"name": "短剧/互动影游", "change_pct": -0.75}, {"name": "多模态", "change_pct": -1.44}, {"name": "AI视频", "change_pct": -0.96}, {"name": "IP经济/谷子经济", "change_pct": -1.0}, {"name": "小红书概念股", "change_pct": -0.79}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 66, "hot_rank_chg": -1, "stock_cnt": 5779, "price": "13.31", "change": "-5.06", "market_id": "17", "circulate_market_value": "8864460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300093", "name": "金刚光伏", "hot_rank": 67, "hot_rank_chg": 40, "stock_cnt": 5779, "price": "19.86", "change": "6.43", "market_id": "33", "circulate_market_value": "5540940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 68, "hot_rank_chg": -31, "stock_cnt": 5779, "price": "16.04", "change": "-4.52", "market_id": "17", "circulate_market_value": "7128888900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 69, "hot_rank_chg": 8, "stock_cnt": 5779, "price": "27.35", "change": "-5.79", "market_id": "17", "circulate_market_value": "108622905000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600207", "name": "安彩高科", "hot_rank": 70, "hot_rank_chg": 940, "stock_cnt": 5779, "price": "4.88", "change": "9.91", "market_id": "17", "circulate_market_value": "5315845300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光伏玻璃", "xgb_concepts": [{"name": "玻璃", "change_pct": -1.0}, {"name": "天然气", "change_pct": -0.59}, {"name": "光伏", "change_pct": -0.52}, {"name": "储能", "change_pct": -0.95}, {"name": "光热发电", "change_pct": -0.69}, {"name": "国企改革", "change_pct": -0.61}, {"name": "河南国企改革", "change_pct": -0.04}]}, {"code": "600519", "name": "贵州茅台", "hot_rank": 71, "hot_rank_chg": -7, "stock_cnt": 5779, "price": "1441.56", "change": "-0.72", "market_id": "17", "circulate_market_value": "1802067600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 72, "hot_rank_chg": -18, "stock_cnt": 5779, "price": "9.63", "change": "-1.94", "market_id": "33", "circulate_market_value": "10207368300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.41}, {"name": "电子烟", "change_pct": -1.94}, {"name": "一带一路", "change_pct": -1.14}, {"name": "造纸", "change_pct": -1.24}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "包装印刷", "change_pct": -1.25}, {"name": "卫星互联网", "change_pct": -1.51}, {"name": "太空算力", "change_pct": -0.36}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 73, "hot_rank_chg": -24, "stock_cnt": 5779, "price": "28.13", "change": "-4.58", "market_id": "17", "circulate_market_value": "579528440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600865", "name": "百大集团", "hot_rank": 74, "hot_rank_chg": 115, "stock_cnt": 5779, "price": "12.26", "change": "-2.39", "market_id": "17", "circulate_market_value": "4612706300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.0}, {"name": "物业管理", "change_pct": -1.17}, {"name": "免税店概念", "change_pct": -0.65}, {"name": "地摊经济", "change_pct": -1.54}]}, {"code": "000725", "name": "京东方A", "hot_rank": 75, "hot_rank_chg": -19, "stock_cnt": 5779, "price": "4.46", "change": "-2.83", "market_id": "33", "circulate_market_value": "157737420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.29}, {"name": "折叠屏", "change_pct": -2.64}, {"name": "手机产业链", "change_pct": -2.38}, {"name": "超高清视频", "change_pct": -1.76}, {"name": "苹果产业链", "change_pct": -2.85}, {"name": "电竞", "change_pct": -0.6}, {"name": "半导体", "change_pct": -2.68}, {"name": "人工智能", "change_pct": -1.69}, {"name": "互联网医疗", "change_pct": -1.23}, {"name": "VR&AR", "change_pct": -2.01}, {"name": "OLED", "change_pct": -2.29}, {"name": "京津冀", "change_pct": -0.96}, {"name": "物联网", "change_pct": -1.65}, {"name": "指纹识别", "change_pct": -2.78}, {"name": "汽车零部件", "change_pct": -1.23}, {"name": "白马股", "change_pct": -0.56}, {"name": "智能制造", "change_pct": -1.88}, {"name": "小米概念股", "change_pct": -2.08}, {"name": "国产芯片", "change_pct": -2.53}, {"name": "液晶面板/LCD", "change_pct": -2.3}, {"name": "全息概念", "change_pct": -1.54}, {"name": "理想汽车概念股", "change_pct": -1.79}, {"name": "MicroLED", "change_pct": -2.6}, {"name": "钙钛矿电池", "change_pct": -0.8}, {"name": "智能手表", "change_pct": -1.51}, {"name": "MiniLED", "change_pct": -2.57}, {"name": "传感器", "change_pct": -2.25}, {"name": "大硅片", "change_pct": -0.84}, {"name": "AI PC", "change_pct": -2.86}, {"name": "华为产业链", "change_pct": -1.86}, {"name": "回购", "change_pct": -2.12}, {"name": "光电共封装CPO", "change_pct": -4.66}, {"name": "智能眼镜/MR头显", "change_pct": -2.37}, {"name": "玻璃基板封装", "change_pct": -3.07}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 76, "hot_rank_chg": 33, "stock_cnt": 5779, "price": "10.99", "change": "-5.18", "market_id": "17", "circulate_market_value": "14114685000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "智能制造", "change_pct": -1.88}, {"name": "工业互联网", "change_pct": -1.72}, {"name": "培育钻石", "change_pct": -3.16}, {"name": "金刚线", "change_pct": -1.2}, {"name": "国资入股", "change_pct": -1.02}, {"name": "深地经济", "change_pct": -0.97}]}, {"code": "600838", "name": "上海九百", "hot_rank": 77, "hot_rank_chg": 11, "stock_cnt": 5779, "price": "10.68", "change": "-8.01", "market_id": "17", "circulate_market_value": "4281419600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -0.21}, {"name": "新零售", "change_pct": -1.34}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "物业管理", "change_pct": -1.17}, {"name": "国企改革", "change_pct": -0.61}, {"name": "地摊经济", "change_pct": -1.54}]}, {"code": "002529", "name": "海源复材", "hot_rank": 78, "hot_rank_chg": 368, "stock_cnt": 5779, "price": "7.21", "change": "7.29", "market_id": "33", "circulate_market_value": "1874600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": -0.99}, {"name": "ST摘帽", "change_pct": -0.72}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "光伏", "change_pct": -0.52}, {"name": "汽车零部件", "change_pct": -1.23}, {"name": "新能源汽车", "change_pct": -1.41}, {"name": "碳纤维", "change_pct": -1.05}, {"name": "宁德时代概念股", "change_pct": -1.86}, {"name": "智能制造", "change_pct": -1.88}, {"name": "3D打印", "change_pct": -1.87}, {"name": "独角兽", "change_pct": 0.85}, {"name": "新能源车零部件", "change_pct": -1.1}]}, {"code": "605188", "name": "国光连锁", "hot_rank": 79, "hot_rank_chg": 464, "stock_cnt": 5779, "price": "12.13", "change": "-2.33", "market_id": "17", "circulate_market_value": "6170512800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.34}]}, {"code": "600637", "name": "东方明珠", "hot_rank": 80, "hot_rank_chg": 1058, "stock_cnt": 5779, "price": "8.24", "change": "6.87", "market_id": "17", "circulate_market_value": "27702054000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -0.84}, {"name": "高管增持", "change_pct": -1.35}, {"name": "超高清视频", "change_pct": -1.76}, {"name": "电竞", "change_pct": -0.6}, {"name": "上海国企改革", "change_pct": -0.21}, {"name": "游戏", "change_pct": -1.76}, {"name": "物联网", "change_pct": -1.65}, {"name": "教育", "change_pct": -1.5}, {"name": "智慧城市", "change_pct": -1.57}, {"name": "破净股", "change_pct": -0.5}, {"name": "传媒", "change_pct": -0.39}, {"name": "东数西算/算力", "change_pct": -1.8}, {"name": "国企改革", "change_pct": -0.61}, {"name": "在线教育", "change_pct": -1.65}, {"name": "AI大模型/智能体", "change_pct": -1.47}, {"name": "短剧/互动影游", "change_pct": -0.75}]}, {"code": "603893", "name": "瑞芯微", "hot_rank": 81, "hot_rank_chg": -30, "stock_cnt": 5779, "price": "215.16", "change": "-1.22", "market_id": "17", "circulate_market_value": "91087717000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 82, "hot_rank_chg": 171, "stock_cnt": 5779, "price": "9.66", "change": "-1.13", "market_id": "33", "circulate_market_value": "6616157200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.9}, {"name": "核电", "change_pct": -1.11}, {"name": "充电桩", "change_pct": -1.29}, {"name": "云计算数据中心", "change_pct": -2.39}, {"name": "新能源汽车", "change_pct": -1.41}, {"name": "储能", "change_pct": -0.95}, {"name": "阿里巴巴概念股", "change_pct": -1.54}, {"name": "智能电网", "change_pct": -1.12}, {"name": "核聚变", "change_pct": -1.68}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 83, "hot_rank_chg": -28, "stock_cnt": 5779, "price": "51.00", "change": "3.51", "market_id": "17", "circulate_market_value": "15222411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 84, "hot_rank_chg": 121, "stock_cnt": 5779, "price": "105.22", "change": "-9.64", "market_id": "17", "circulate_market_value": "28997409000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 85, "hot_rank_chg": -4, "stock_cnt": 5779, "price": "12.78", "change": "-3.33", "market_id": "17", "circulate_market_value": "26729909000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.81}, {"name": "半导体", "change_pct": -2.68}, {"name": "光伏", "change_pct": -0.52}, {"name": "风电", "change_pct": -0.73}, {"name": "江苏国企改革", "change_pct": -0.66}, {"name": "国产芯片", "change_pct": -2.53}, {"name": "BIPV概念", "change_pct": -0.16}, {"name": "内存", "change_pct": -4.0}, {"name": "国企改革", "change_pct": -0.61}, {"name": "闪存", "change_pct": -3.36}, {"name": "中芯国际概念股", "change_pct": -2.16}]}, {"code": "603212", "name": "赛伍技术", "hot_rank": 86, "hot_rank_chg": 268, "stock_cnt": 5779, "price": "10.98", "change": "2.90", "market_id": "17", "circulate_market_value": "4803647200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.64}, {"name": "特斯拉", "change_pct": -1.73}, {"name": "锂电池", "change_pct": -1.82}, {"name": "OLED", "change_pct": -2.29}, {"name": "光伏", "change_pct": -0.52}, {"name": "新能源汽车", "change_pct": -1.41}, {"name": "宁德时代概念股", "change_pct": -1.86}, {"name": "新能源车零部件", "change_pct": -1.1}, {"name": "液晶面板/LCD", "change_pct": -2.3}, {"name": "IGBT", "change_pct": -1.2}, {"name": "固态电池", "change_pct": -1.72}, {"name": "汽车热管理", "change_pct": -1.34}, {"name": "钙钛矿电池", "change_pct": -0.8}, {"name": "异质结电池HJT", "change_pct": -0.54}, {"name": "光伏胶膜", "change_pct": -1.34}]}, {"code": "603259", "name": "药明康德", "hot_rank": 87, "hot_rank_chg": -48, "stock_cnt": 5779, "price": "146.79", "change": "-4.97", "market_id": "17", "circulate_market_value": "363052810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 88, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "124.03", "change": "-8.13", "market_id": "33", "circulate_market_value": "107310129000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 89, "hot_rank_chg": 74, "stock_cnt": 5779, "price": "6.67", "change": "10.07", "market_id": "33", "circulate_market_value": "3376510700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "电解液", "xgb_concepts": [{"name": "电子特气", "change_pct": -1.53}, {"name": "资产重组", "change_pct": -1.44}, {"name": "仪器仪表", "change_pct": -1.64}, {"name": "锂电池", "change_pct": -1.82}, {"name": "ST摘帽", "change_pct": -0.72}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "有机硅", "change_pct": -0.41}, {"name": "新能源汽车", "change_pct": -1.41}, {"name": "华为产业链", "change_pct": -1.86}, {"name": "供应链金融", "change_pct": -0.01}, {"name": "服务器", "change_pct": -2.46}]}, {"code": "002487", "name": "大金重工", "hot_rank": 90, "hot_rank_chg": -17, "stock_cnt": 5779, "price": "33.70", "change": "-3.22", "market_id": "33", "circulate_market_value": "21262013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 91, "hot_rank_chg": -51, "stock_cnt": 5779, "price": "26.48", "change": "-2.50", "market_id": "33", "circulate_market_value": "17505548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 92, "hot_rank_chg": -33, "stock_cnt": 5779, "price": "30.06", "change": "-3.00", "market_id": "17", "circulate_market_value": "13193238900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 93, "hot_rank_chg": -25, "stock_cnt": 5779, "price": "10.70", "change": "-2.10", "market_id": "33", "circulate_market_value": "3576570400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.11}, {"name": "饲料", "change_pct": -0.24}, {"name": "一带一路", "change_pct": -1.14}, {"name": "强势人气股", "change_pct": -1.0}, {"name": "保健品", "change_pct": -0.72}, {"name": "山东国企改革", "change_pct": -0.86}, {"name": "污水处理", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.85}, {"name": "食品", "change_pct": -0.83}, {"name": "预制菜", "change_pct": -0.66}, {"name": "国企改革", "change_pct": -0.61}, {"name": "水产养殖", "change_pct": 0.77}, {"name": "广西概念", "change_pct": -0.75}]}, {"code": "300223", "name": "君正股份", "hot_rank": 94, "hot_rank_chg": -37, "stock_cnt": 5779, "price": "105.39", "change": "-6.75", "market_id": "33", "circulate_market_value": "44566635000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 95, "hot_rank_chg": -17, "stock_cnt": 5779, "price": "14.98", "change": "1.15", "market_id": "33", "circulate_market_value": "9888697900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 96, "hot_rank_chg": -44, "stock_cnt": 5779, "price": "40.20", "change": "-1.90", "market_id": "33", "circulate_market_value": "9393100800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 97, "hot_rank_chg": 372, "stock_cnt": 5779, "price": "5.55", "change": "7.14", "market_id": "33", "circulate_market_value": "4918689900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.01}, {"name": "转基因", "change_pct": 2.79}, {"name": "土地流转", "change_pct": -0.09}, {"name": "海南概念", "change_pct": -1.01}, {"name": "自由贸易港", "change_pct": -0.45}, {"name": "海南自由贸易港", "change_pct": -0.99}, {"name": "大农业", "change_pct": -0.46}, {"name": "水产养殖", "change_pct": 0.77}, {"name": "自贸区", "change_pct": -0.66}]}, {"code": "601857", "name": "中国石油", "hot_rank": 98, "hot_rank_chg": -51, "stock_cnt": 5779, "price": "12.42", "change": "-0.96", "market_id": "17", "circulate_market_value": "2011072200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": 0.12}, {"name": "央企改革", "change_pct": -0.72}, {"name": "一带一路", "change_pct": -1.14}, {"name": "石油化工", "change_pct": -1.48}, {"name": "天然气", "change_pct": -0.59}, {"name": "油气改革", "change_pct": -1.08}, {"name": "可燃冰", "change_pct": -1.06}, {"name": "中字头", "change_pct": -0.58}, {"name": "页岩气", "change_pct": -1.24}, {"name": "丁辛醇", "change_pct": -0.96}, {"name": "国企改革", "change_pct": -0.61}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 99, "hot_rank_chg": 178, "stock_cnt": 5779, "price": "3.81", "change": "10.12", "market_id": "17", "circulate_market_value": "4973840400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.0}, {"name": "高速公路", "change_pct": 1.14}, {"name": "振兴东北", "change_pct": -0.69}, {"name": "黑龙江自贸区", "change_pct": 1.1}]}, {"code": "000595", "name": "新能股份", "hot_rank": 100, "hot_rank_chg": 1882, "stock_cnt": 5779, "price": "5.38", "change": "10.02", "market_id": "33", "circulate_market_value": "6125971200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "储能并网", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -0.72}, {"name": "高铁轨交", "change_pct": -0.92}, {"name": "航母", "change_pct": -0.01}, {"name": "光伏", "change_pct": -0.52}, {"name": "风电", "change_pct": -0.73}, {"name": "军工", "change_pct": -1.23}, {"name": "储能", "change_pct": -0.95}, {"name": "国企改革", "change_pct": -0.61}, {"name": "宁夏概念", "change_pct": 0.16}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};