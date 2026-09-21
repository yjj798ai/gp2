const UPDATE_TIME = "2026-09-21 08:39";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 4.27,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续126天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "MLCC概念",
    "rise": 1.92,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "PCB概念",
    "rise": 1.32,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续119天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续296天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "CRO概念",
    "rise": 4.74,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "存储芯片",
    "rise": 0.41,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续249天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "AI应用",
    "rise": 2.3,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续54天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "商业航天",
    "rise": 1.53,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续225天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "粮食概念",
    "rise": 2.79,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "光纤概念",
    "rise": 1.3,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续125天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "新股与次新股",
    "rise": 0.65,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "数字货币",
    "rise": 2.37,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "信息安全ETF",
    "code": "885866"
  },
  {
    "name": "猪肉",
    "rise": 2.7,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "培育钻石",
    "rise": 0.59,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "白酒概念",
    "rise": 2.8,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "液冷服务器",
    "rise": 1.13,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "算力租赁",
    "rise": 1.44,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续160天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "注册制次新股",
    "rise": 0.26,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885905"
  },
  {
    "name": "人形机器人",
    "rise": 1.32,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "细胞免疫治疗",
    "rise": 4.89,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885769"
  }
];
const THS_EVENTS = [
  {
    "title": "国家药监局表示：让创新药械跑出上市加速度",
    "desc": "",
    "heat": 765659,
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
        "name": "峆一药业",
        "code": "920478",
        "chg": 29.905561
      }
    ]
  },
  {
    "title": "特朗普宣布将任命新任人工智能顾问并组建\"AI部队\"",
    "desc": "",
    "heat": 630065,
    "direction": "人工智能",
    "themes": [
      "AI智能体",
      "AI应用",
      "人工智能",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "联合光电",
        "code": "300691",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "中美经贸磋商在美国纽约开始举行",
    "desc": "",
    "heat": 574024,
    "direction": "贸易降税",
    "themes": [
      "贸易降税"
    ],
    "stocks": [
      {
        "name": "华瓷股份",
        "code": "001216",
        "chg": 10.013717
      }
    ]
  },
  {
    "title": "“电子工业大米”MLCC价格最高涨十倍 行情剧烈波动",
    "desc": "",
    "heat": 256503,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "双星新材",
        "code": "002585",
        "chg": 10.04329
      }
    ]
  },
  {
    "title": "卡塔尔称美国希望与伊朗达成协议",
    "desc": "",
    "heat": 136347,
    "direction": "美伊战争/战后重建",
    "themes": [
      "战后重建",
      "白银",
      "黄金概念",
      "航运概念"
    ],
    "stocks": [
      {
        "name": "宁波中百",
        "code": "600857",
        "chg": 10.009398
      }
    ]
  },
  {
    "title": "固态变压器产业化元年：十余年实验室技术终迎千亿赛道",
    "desc": "",
    "heat": 108090,
    "direction": "固态变压器",
    "themes": [
      "固态变压器(SST)"
    ],
    "stocks": [
      {
        "name": "泰永长征",
        "code": "002927",
        "chg": 5.449871
      }
    ]
  },
  {
    "title": "机构：全球AI领域资本支出2027年升至1.4万亿美元 九成增量来自内存涨价",
    "desc": "",
    "heat": 73536,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "金太阳",
        "code": "300606",
        "chg": 11.764706
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄酒",
    "change": "+7.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+5.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+5.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+5.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "主题公园",
    "change": "+5.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "精准医疗",
    "change": "+4.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+4.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+4.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+4.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因测序",
    "change": "+4.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+4.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+4.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+4.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+4.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+4.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+4.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+4.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "流感",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物业管理",
    "change": "+4.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+4.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 4,
    "hot_rank_chg": -3,
    "stock_cnt": 5789,
    "price": "5.84",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6102145000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "资产重组",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 1.95
      },
      {
        "name": "复牌股",
        "change_pct": 2.63
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 1.66
      },
      {
        "name": "国企改革",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 5,
    "hot_rank_chg": 19,
    "stock_cnt": 5789,
    "price": "8.25",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "20777706000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药研发",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.42
      },
      {
        "name": "工业大麻",
        "change_pct": 2.99
      },
      {
        "name": "中药",
        "change_pct": 3.44
      },
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "保健品",
        "change_pct": 3.05
      },
      {
        "name": "民营医院",
        "change_pct": 3.64
      },
      {
        "name": "医药",
        "change_pct": 4.1
      },
      {
        "name": "化学原料药",
        "change_pct": 4.08
      },
      {
        "name": "流感",
        "change_pct": 4.18
      },
      {
        "name": "振兴东北",
        "change_pct": 1.89
      },
      {
        "name": "食品",
        "change_pct": 2.33
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 10,
    "hot_rank_chg": 15,
    "stock_cnt": 5789,
    "price": "6.07",
    "change": "2.53",
    "market_id": "33",
    "circulate_market_value": "214678500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.45
      },
      {
        "name": "手机产业链",
        "change_pct": 1.54
      },
      {
        "name": "超高清视频",
        "change_pct": 1.58
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.32
      },
      {
        "name": "电竞",
        "change_pct": 2.01
      },
      {
        "name": "半导体",
        "change_pct": 0.31
      },
      {
        "name": "人工智能",
        "change_pct": 1.91
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.97
      },
      {
        "name": "VR&AR",
        "change_pct": 1.34
      },
      {
        "name": "OLED",
        "change_pct": 0.62
      },
      {
        "name": "京津冀",
        "change_pct": 1.89
      },
      {
        "name": "物联网",
        "change_pct": 1.75
      },
      {
        "name": "指纹识别",
        "change_pct": 1.46
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.77
      },
      {
        "name": "白马股",
        "change_pct": 0.76
      },
      {
        "name": "智能制造",
        "change_pct": 1.44
      },
      {
        "name": "小米概念股",
        "change_pct": 1.19
      },
      {
        "name": "国产芯片",
        "change_pct": 0.68
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.74
      },
      {
        "name": "全息概念",
        "change_pct": 2.28
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.0
      },
      {
        "name": "MicroLED",
        "change_pct": 1.19
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.08
      },
      {
        "name": "智能手表",
        "change_pct": 1.27
      },
      {
        "name": "MiniLED",
        "change_pct": 1.49
      },
      {
        "name": "传感器",
        "change_pct": 1.34
      },
      {
        "name": "大硅片",
        "change_pct": -0.16
      },
      {
        "name": "AI PC",
        "change_pct": 1.2
      },
      {
        "name": "华为产业链",
        "change_pct": 1.65
      },
      {
        "name": "回购",
        "change_pct": 1.61
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.84
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.3
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.97
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 11,
    "hot_rank_chg": 17,
    "stock_cnt": 5789,
    "price": "12.71",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "11268581600.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "MLCC离型膜",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 1.51
      },
      {
        "name": "手机产业链",
        "change_pct": 1.54
      },
      {
        "name": "超高清视频",
        "change_pct": 1.58
      },
      {
        "name": "锂电池",
        "change_pct": 0.57
      },
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "OLED",
        "change_pct": 0.62
      },
      {
        "name": "包装印刷",
        "change_pct": 1.7
      },
      {
        "name": "光伏",
        "change_pct": 0.95
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.11
      },
      {
        "name": "小米概念股",
        "change_pct": 1.19
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.74
      },
      {
        "name": "可降解塑料",
        "change_pct": 3.18
      },
      {
        "name": "华为产业链",
        "change_pct": 1.65
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 20,
    "hot_rank_chg": 153,
    "stock_cnt": 5789,
    "price": "9.85",
    "change": "6.60",
    "market_id": "17",
    "circulate_market_value": "35338547000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 2.23
      },
      {
        "name": "OLED",
        "change_pct": 0.62
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.74
      },
      {
        "name": "国企改革",
        "change_pct": 1.61
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.97
      },
      {
        "name": "陕西国企改革",
        "change_pct": 1.77
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 24,
    "hot_rank_chg": 73,
    "stock_cnt": 5789,
    "price": "5.81",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4445467600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.44
      },
      {
        "name": "股权转让",
        "change_pct": 1.7
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.7
      },
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "医药商业",
        "change_pct": 3.06
      },
      {
        "name": "保健品",
        "change_pct": 3.05
      },
      {
        "name": "民营医院",
        "change_pct": 3.64
      },
      {
        "name": "医药",
        "change_pct": 4.1
      },
      {
        "name": "食品",
        "change_pct": 2.33
      },
      {
        "name": "辅助生殖",
        "change_pct": 4.19
      },
      {
        "name": "口腔",
        "change_pct": 2.83
      },
      {
        "name": "医美",
        "change_pct": 4.05
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.86
      }
    ]
  },
  {
    "code": "002453",
    "name": "华软科技",
    "hot_rank": 28,
    "hot_rank_chg": -16,
    "stock_cnt": 5789,
    "price": "5.87",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "3775005700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "光引发剂",
    "xgb_concepts": [
      {
        "name": "苹果产业链",
        "change_pct": 1.32
      },
      {
        "name": "锂电池",
        "change_pct": 0.57
      },
      {
        "name": "保健品",
        "change_pct": 3.05
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.11
      },
      {
        "name": "食品",
        "change_pct": 2.33
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.54
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.45
      },
      {
        "name": "横琴新区",
        "change_pct": 3.26
      },
      {
        "name": "供应链金融",
        "change_pct": 2.33
      }
    ]
  },
  {
    "code": "600448",
    "name": "华纺股份",
    "hot_rank": 33,
    "hot_rank_chg": -11,
    "stock_cnt": 5789,
    "price": "3.89",
    "change": "9.89",
    "market_id": "17",
    "circulate_market_value": "2449998500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "纺织印染",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 2.43
      },
      {
        "name": "印染",
        "change_pct": 1.62
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.46
      },
      {
        "name": "外贸受益概念",
        "change_pct": 2.23
      },
      {
        "name": "抗菌面料",
        "change_pct": 1.68
      },
      {
        "name": "国企改革",
        "change_pct": 1.61
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.86
      },
      {
        "name": "C2M",
        "change_pct": 2.58
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 39,
    "hot_rank_chg": -9,
    "stock_cnt": 5789,
    "price": "8.50",
    "change": "-1.51",
    "market_id": "33",
    "circulate_market_value": "16278286000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.71
      },
      {
        "name": "林业",
        "change_pct": 0.65
      },
      {
        "name": "碳中和",
        "change_pct": 1.11
      },
      {
        "name": "自贸区",
        "change_pct": 1.83
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 40,
    "hot_rank_chg": 224,
    "stock_cnt": 5789,
    "price": "9.25",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "4433709800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "抗肿瘤药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.44
      },
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "医药商业",
        "change_pct": 3.06
      },
      {
        "name": "医药",
        "change_pct": 4.1
      },
      {
        "name": "流感",
        "change_pct": 4.18
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 45,
    "hot_rank_chg": 18,
    "stock_cnt": 5789,
    "price": "2.95",
    "change": "-1.67",
    "market_id": "33",
    "circulate_market_value": "28064400000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.31
      },
      {
        "name": "无人驾驶",
        "change_pct": 1.37
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.77
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.11
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.72
      },
      {
        "name": "低价股",
        "change_pct": 2.12
      },
      {
        "name": "减速器",
        "change_pct": 1.31
      },
      {
        "name": "华为汽车",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 47,
    "hot_rank_chg": -31,
    "stock_cnt": 5789,
    "price": "9.12",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "3874737800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "纺织服装",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.42
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.95
      },
      {
        "name": "一带一路",
        "change_pct": 1.7
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.7
      },
      {
        "name": "纺织服装",
        "change_pct": 2.43
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 2.65
      },
      {
        "name": "进口博览会",
        "change_pct": 3.98
      },
      {
        "name": "自由贸易港",
        "change_pct": 2.27
      },
      {
        "name": "物业管理",
        "change_pct": 4.17
      },
      {
        "name": "国企改革",
        "change_pct": 1.61
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.86
      },
      {
        "name": "自贸区",
        "change_pct": 1.83
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 53,
    "hot_rank_chg": 23,
    "stock_cnt": 5789,
    "price": "8.39",
    "change": "0.36",
    "market_id": "33",
    "circulate_market_value": "3927539900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "旅游",
        "change_pct": 3.05
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.86
      },
      {
        "name": "广西概念",
        "change_pct": 1.64
      },
      {
        "name": "低空经济",
        "change_pct": 1.5
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 55,
    "hot_rank_chg": 3,
    "stock_cnt": 5789,
    "price": "9.76",
    "change": "0.10",
    "market_id": "33",
    "circulate_market_value": "4695919900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 3.98
      },
      {
        "name": "医疗器械",
        "change_pct": 3.49
      },
      {
        "name": "锂电池",
        "change_pct": 0.57
      },
      {
        "name": "基因测序",
        "change_pct": 4.56
      },
      {
        "name": "PCB板",
        "change_pct": 1.43
      },
      {
        "name": "医药",
        "change_pct": 4.1
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.11
      },
      {
        "name": "化学原料药",
        "change_pct": 4.08
      },
      {
        "name": "食品安全",
        "change_pct": 1.98
      },
      {
        "name": "辅助生殖",
        "change_pct": 4.19
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.45
      },
      {
        "name": "异丙醇",
        "change_pct": 1.29
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.86
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 61,
    "hot_rank_chg": 20,
    "stock_cnt": 5789,
    "price": "12.50",
    "change": "-0.87",
    "market_id": "17",
    "circulate_market_value": "22364229000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.39
      },
      {
        "name": "纯碱",
        "change_pct": 2.35
      },
      {
        "name": "食品",
        "change_pct": 2.33
      },
      {
        "name": "土壤修复",
        "change_pct": 1.86
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.33
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.79
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.99
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 81,
    "hot_rank_chg": -17,
    "stock_cnt": 5789,
    "price": "12.53",
    "change": "2.04",
    "market_id": "17",
    "circulate_market_value": "21741817000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.76
      },
      {
        "name": "核电",
        "change_pct": 1.25
      },
      {
        "name": "锂电池",
        "change_pct": 0.57
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.11
      },
      {
        "name": "PCB板",
        "change_pct": 1.43
      },
      {
        "name": "中科院系",
        "change_pct": 1.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.11
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.9
      },
      {
        "name": "固态电池",
        "change_pct": 0.46
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 82,
    "hot_rank_chg": 31,
    "stock_cnt": 5789,
    "price": "7.92",
    "change": "4.21",
    "market_id": "33",
    "circulate_market_value": "12885790700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.42
      },
      {
        "name": "电竞",
        "change_pct": 2.01
      },
      {
        "name": "手游",
        "change_pct": 1.47
      },
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "人工智能",
        "change_pct": 1.91
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
        "change_pct": 1.86
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.86
      },
      {
        "name": "快手概念股",
        "change_pct": 1.76
      },
      {
        "name": "元宇宙",
        "change_pct": 2.0
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.72
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.33
      },
      {
        "name": "web3.0",
        "change_pct": 2.31
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.39
      },
      {
        "name": "数据要素",
        "change_pct": 2.15
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.54
      },
      {
        "name": "AI营销",
        "change_pct": 1.3
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.7
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.3
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.99
      },
      {
        "name": "人形机器人",
        "change_pct": 1.36
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.99
      },
      {
        "name": "多模态",
        "change_pct": 1.48
      },
      {
        "name": "AI视频",
        "change_pct": 1.35
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.48
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 83,
    "hot_rank_chg": -47,
    "stock_cnt": 5789,
    "price": "11.01",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "3623637600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "细胞医疗",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 1.67
      },
      {
        "name": "锂电池",
        "change_pct": 0.57
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.03
      },
      {
        "name": "湖南国企改革",
        "change_pct": 2.71
      },
      {
        "name": "污水处理",
        "change_pct": 1.62
      },
      {
        "name": "智慧城市",
        "change_pct": 1.86
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.11
      },
      {
        "name": "环保",
        "change_pct": 1.44
      },
      {
        "name": "动力电池回收",
        "change_pct": 0.53
      },
      {
        "name": "干细胞",
        "change_pct": 4.75
      },
      {
        "name": "国企改革",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 87,
    "hot_rank_chg": -2,
    "stock_cnt": 5789,
    "price": "2.24",
    "change": "-2.18",
    "market_id": "33",
    "circulate_market_value": "11295168300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "新能源整车",
        "change_pct": 0.63
      },
      {
        "name": "汽车整车",
        "change_pct": 0.54
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.11
      },
      {
        "name": "低价股",
        "change_pct": 2.12
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 88,
    "hot_rank_chg": 40,
    "stock_cnt": 5789,
    "price": "5.16",
    "change": "4.88",
    "market_id": "33",
    "circulate_market_value": "13687161000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "装修装饰",
        "change_pct": 2.72
      },
      {
        "name": "装配式建筑",
        "change_pct": 2.09
      },
      {
        "name": "航天",
        "change_pct": 1.58
      },
      {
        "name": "旧改",
        "change_pct": 2.67
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 90,
    "hot_rank_chg": 63,
    "stock_cnt": 5789,
    "price": "3.84",
    "change": "2.95",
    "market_id": "17",
    "circulate_market_value": "8495343500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 1.67
      },
      {
        "name": "强势人气股",
        "change_pct": 3.73
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.43
      },
      {
        "name": "光通信",
        "change_pct": 0.84
      },
      {
        "name": "林业",
        "change_pct": 0.65
      },
      {
        "name": "军民融合",
        "change_pct": 1.71
      },
      {
        "name": "军工",
        "change_pct": 1.68
      },
      {
        "name": "人造肉",
        "change_pct": 3.48
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "601091", "name": "沈鼓集团", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5789, "price": "37.72", "change": "-34.71", "market_id": "17", "circulate_market_value": "7965075200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5789, "price": "18.55", "change": "2.88", "market_id": "33", "circulate_market_value": "61697792000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5789, "price": "59.25", "change": "1.80", "market_id": "33", "circulate_market_value": "67988781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 4, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "5.84", "change": "9.98", "market_id": "17", "circulate_market_value": "6102145000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "资产重组", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 1.95}, {"name": "复牌股", "change_pct": 2.63}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 1.66}, {"name": "国企改革", "change_pct": 1.61}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 5, "hot_rank_chg": 19, "stock_cnt": 5789, "price": "8.25", "change": "10.00", "market_id": "17", "circulate_market_value": "20777706000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药研发", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.42}, {"name": "工业大麻", "change_pct": 2.99}, {"name": "中药", "change_pct": 3.44}, {"name": "强势人气股", "change_pct": 3.73}, {"name": "保健品", "change_pct": 3.05}, {"name": "民营医院", "change_pct": 3.64}, {"name": "医药", "change_pct": 4.1}, {"name": "化学原料药", "change_pct": 4.08}, {"name": "流感", "change_pct": 4.18}, {"name": "振兴东北", "change_pct": 1.89}, {"name": "食品", "change_pct": 2.33}]}, {"code": "600869", "name": "远东股份", "hot_rank": 6, "hot_rank_chg": 40, "stock_cnt": 5789, "price": "22.94", "change": "7.15", "market_id": "17", "circulate_market_value": "50911952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 7, "hot_rank_chg": 11, "stock_cnt": 5789, "price": "17.67", "change": "10.03", "market_id": "17", "circulate_market_value": "11768220000.00", "change_type": "1", "change_section": "17", "change_days": "9", "change_reason": "连锁零售"}, {"code": "600127", "name": "金健米业", "hot_rank": 8, "hot_rank_chg": 2, "stock_cnt": 5789, "price": "15.75", "change": "9.99", "market_id": "17", "circulate_market_value": "10108085700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "粮油食品"}, {"code": "600487", "name": "亨通光电", "hot_rank": 9, "hot_rank_chg": 20, "stock_cnt": 5789, "price": "71.75", "change": "3.25", "market_id": "17", "circulate_market_value": "176049120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 10, "hot_rank_chg": 15, "stock_cnt": 5789, "price": "6.07", "change": "2.53", "market_id": "33", "circulate_market_value": "214678500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.45}, {"name": "手机产业链", "change_pct": 1.54}, {"name": "超高清视频", "change_pct": 1.58}, {"name": "苹果产业链", "change_pct": 1.32}, {"name": "电竞", "change_pct": 2.01}, {"name": "半导体", "change_pct": 0.31}, {"name": "人工智能", "change_pct": 1.91}, {"name": "互联网医疗", "change_pct": 2.97}, {"name": "VR&AR", "change_pct": 1.34}, {"name": "OLED", "change_pct": 0.62}, {"name": "京津冀", "change_pct": 1.89}, {"name": "物联网", "change_pct": 1.75}, {"name": "指纹识别", "change_pct": 1.46}, {"name": "汽车零部件", "change_pct": 1.77}, {"name": "白马股", "change_pct": 0.76}, {"name": "智能制造", "change_pct": 1.44}, {"name": "小米概念股", "change_pct": 1.19}, {"name": "国产芯片", "change_pct": 0.68}, {"name": "液晶面板/LCD", "change_pct": 1.74}, {"name": "全息概念", "change_pct": 2.28}, {"name": "理想汽车概念股", "change_pct": 2.0}, {"name": "MicroLED", "change_pct": 1.19}, {"name": "钙钛矿电池", "change_pct": 1.08}, {"name": "智能手表", "change_pct": 1.27}, {"name": "MiniLED", "change_pct": 1.49}, {"name": "传感器", "change_pct": 1.34}, {"name": "大硅片", "change_pct": -0.16}, {"name": "AI PC", "change_pct": 1.2}, {"name": "华为产业链", "change_pct": 1.65}, {"name": "回购", "change_pct": 1.61}, {"name": "光电共封装CPO", "change_pct": 0.84}, {"name": "智能眼镜/MR头显", "change_pct": 1.3}, {"name": "玻璃基板封装", "change_pct": 0.97}]}, {"code": "002585", "name": "双星新材", "hot_rank": 11, "hot_rank_chg": 17, "stock_cnt": 5789, "price": "12.71", "change": "10.04", "market_id": "33", "circulate_market_value": "11268581600.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "MLCC离型膜", "xgb_concepts": [{"name": "被动元件", "change_pct": 1.51}, {"name": "手机产业链", "change_pct": 1.54}, {"name": "超高清视频", "change_pct": 1.58}, {"name": "锂电池", "change_pct": 0.57}, {"name": "强势人气股", "change_pct": 3.73}, {"name": "OLED", "change_pct": 0.62}, {"name": "包装印刷", "change_pct": 1.7}, {"name": "光伏", "change_pct": 0.95}, {"name": "新能源汽车", "change_pct": 1.11}, {"name": "小米概念股", "change_pct": 1.19}, {"name": "液晶面板/LCD", "change_pct": 1.74}, {"name": "可降解塑料", "change_pct": 3.18}, {"name": "华为产业链", "change_pct": 1.65}, {"name": "PET复合铜箔", "change_pct": 0.53}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5789, "price": "45.87", "change": "1.89", "market_id": "17", "circulate_market_value": "182176700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 13, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "24.06", "change": "10.01", "market_id": "33", "circulate_market_value": "5938878900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "MLCC验证"}, {"code": "000993", "name": "闽东电力", "hot_rank": 14, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "20.43", "change": "4.24", "market_id": "33", "circulate_market_value": "9355948200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 15, "hot_rank_chg": 2, "stock_cnt": 5789, "price": "20.30", "change": "-0.78", "market_id": "17", "circulate_market_value": "42458306000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 16, "hot_rank_chg": -9, "stock_cnt": 5789, "price": "14.83", "change": "10.02", "market_id": "17", "circulate_market_value": "5242746100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "出版发行"}, {"code": "003040", "name": "楚天龙", "hot_rank": 17, "hot_rank_chg": 49, "stock_cnt": 5789, "price": "17.31", "change": "5.68", "market_id": "33", "circulate_market_value": "7908078000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 18, "hot_rank_chg": -12, "stock_cnt": 5789, "price": "56.88", "change": "2.41", "market_id": "17", "circulate_market_value": "256132860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 19, "hot_rank_chg": -10, "stock_cnt": 5789, "price": "17.19", "change": "4.06", "market_id": "17", "circulate_market_value": "18848744000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 20, "hot_rank_chg": 153, "stock_cnt": 5789, "price": "9.85", "change": "6.60", "market_id": "17", "circulate_market_value": "35338547000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 2.23}, {"name": "OLED", "change_pct": 0.62}, {"name": "液晶面板/LCD", "change_pct": 1.74}, {"name": "国企改革", "change_pct": 1.61}, {"name": "玻璃基板封装", "change_pct": 0.97}, {"name": "陕西国企改革", "change_pct": 1.77}]}, {"code": "600584", "name": "长电科技", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "72.22", "change": "-1.07", "market_id": "17", "circulate_market_value": "129231520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 22, "hot_rank_chg": 9, "stock_cnt": 5789, "price": "36.95", "change": "2.70", "market_id": "17", "circulate_market_value": "126108490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 23, "hot_rank_chg": 28, "stock_cnt": 5789, "price": "16.42", "change": "2.62", "market_id": "17", "circulate_market_value": "21087855000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 24, "hot_rank_chg": 73, "stock_cnt": 5789, "price": "5.81", "change": "10.04", "market_id": "33", "circulate_market_value": "4445467600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": 3.44}, {"name": "股权转让", "change_pct": 1.7}, {"name": "优化生育（三孩）", "change_pct": 2.7}, {"name": "强势人气股", "change_pct": 3.73}, {"name": "医药商业", "change_pct": 3.06}, {"name": "保健品", "change_pct": 3.05}, {"name": "民营医院", "change_pct": 3.64}, {"name": "医药", "change_pct": 4.1}, {"name": "食品", "change_pct": 2.33}, {"name": "辅助生殖", "change_pct": 4.19}, {"name": "口腔", "change_pct": 2.83}, {"name": "医美", "change_pct": 4.05}, {"name": "新冠病毒防治", "change_pct": 2.86}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 25, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "46.72", "change": "0.54", "market_id": "17", "circulate_market_value": "68304397000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5789, "price": "51.32", "change": "-0.54", "market_id": "17", "circulate_market_value": "43445117000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 27, "hot_rank_chg": 7, "stock_cnt": 5789, "price": "24.59", "change": "3.41", "market_id": "33", "circulate_market_value": "28929368000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002453", "name": "华软科技", "hot_rank": 28, "hot_rank_chg": -16, "stock_cnt": 5789, "price": "5.87", "change": "9.93", "market_id": "33", "circulate_market_value": "3775005700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光引发剂", "xgb_concepts": [{"name": "苹果产业链", "change_pct": 1.32}, {"name": "锂电池", "change_pct": 0.57}, {"name": "保健品", "change_pct": 3.05}, {"name": "新能源汽车", "change_pct": 1.11}, {"name": "食品", "change_pct": 2.33}, {"name": "字节跳动概念股", "change_pct": 1.54}, {"name": "光刻机（胶）", "change_pct": -0.45}, {"name": "横琴新区", "change_pct": 3.26}, {"name": "供应链金融", "change_pct": 2.33}]}, {"code": "601811", "name": "新华文轩", "hot_rank": 29, "hot_rank_chg": -15, "stock_cnt": 5789, "price": "15.29", "change": "10.00", "market_id": "17", "circulate_market_value": "12108210600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "教科书发行"}, {"code": "600721", "name": "百花医药", "hot_rank": 30, "hot_rank_chg": 25, "stock_cnt": 5789, "price": "13.15", "change": "10.04", "market_id": "17", "circulate_market_value": "5056801400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "CRO"}, {"code": "000657", "name": "中钨高新", "hot_rank": 31, "hot_rank_chg": -23, "stock_cnt": 5789, "price": "60.49", "change": "-2.06", "market_id": "33", "circulate_market_value": "87919312000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 32, "hot_rank_chg": 9, "stock_cnt": 5789, "price": "494.85", "change": "-3.91", "market_id": "17", "circulate_market_value": "14888908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600448", "name": "华纺股份", "hot_rank": 33, "hot_rank_chg": -11, "stock_cnt": 5789, "price": "3.89", "change": "9.89", "market_id": "17", "circulate_market_value": "2449998500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "纺织印染", "xgb_concepts": [{"name": "纺织服装", "change_pct": 2.43}, {"name": "印染", "change_pct": 1.62}, {"name": "山东国企改革", "change_pct": 1.46}, {"name": "外贸受益概念", "change_pct": 2.23}, {"name": "抗菌面料", "change_pct": 1.68}, {"name": "国企改革", "change_pct": 1.61}, {"name": "新冠病毒防治", "change_pct": 2.86}, {"name": "C2M", "change_pct": 2.58}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 34, "hot_rank_chg": 20, "stock_cnt": 5789, "price": "391.71", "change": "0.91", "market_id": "17", "circulate_market_value": "262727080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 35, "hot_rank_chg": 30, "stock_cnt": 5789, "price": "146.27", "change": "1.63", "market_id": "17", "circulate_market_value": "352766510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 36, "hot_rank_chg": 11, "stock_cnt": 5789, "price": "25.20", "change": "7.78", "market_id": "33", "circulate_market_value": "14992291000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002080", "name": "中材科技", "hot_rank": 37, "hot_rank_chg": 30, "stock_cnt": 5789, "price": "66.24", "change": "10.00", "market_id": "33", "circulate_market_value": "111158906000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低介电纤维布"}, {"code": "000592", "name": "平潭发展", "hot_rank": 39, "hot_rank_chg": -9, "stock_cnt": 5789, "price": "8.50", "change": "-1.51", "market_id": "33", "circulate_market_value": "16278286000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.71}, {"name": "林业", "change_pct": 0.65}, {"name": "碳中和", "change_pct": 1.11}, {"name": "自贸区", "change_pct": 1.83}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 40, "hot_rank_chg": 224, "stock_cnt": 5789, "price": "9.25", "change": "9.99", "market_id": "17", "circulate_market_value": "4433709800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "抗肿瘤药", "xgb_concepts": [{"name": "中药", "change_pct": 3.44}, {"name": "强势人气股", "change_pct": 3.73}, {"name": "医药商业", "change_pct": 3.06}, {"name": "医药", "change_pct": 4.1}, {"name": "流感", "change_pct": 4.18}]}, {"code": "300408", "name": "三环集团", "hot_rank": 41, "hot_rank_chg": -14, "stock_cnt": 5789, "price": "129.84", "change": "-0.85", "market_id": "33", "circulate_market_value": "242775640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 42, "hot_rank_chg": 32, "stock_cnt": 5789, "price": "40.68", "change": "1.93", "market_id": "17", "circulate_market_value": "28125160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 43, "hot_rank_chg": 112, "stock_cnt": 5789, "price": "456.73", "change": "2.64", "market_id": "33", "circulate_market_value": "573069980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603316", "name": "诚邦股份", "hot_rank": 44, "hot_rank_chg": -5, "stock_cnt": 5789, "price": "18.36", "change": "10.01", "market_id": "17", "circulate_market_value": "4851887000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体存储"}, {"code": "000981", "name": "山子高科", "hot_rank": 45, "hot_rank_chg": 18, "stock_cnt": 5789, "price": "2.95", "change": "-1.67", "market_id": "33", "circulate_market_value": "28064400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 0.31}, {"name": "无人驾驶", "change_pct": 1.37}, {"name": "汽车零部件", "change_pct": 1.77}, {"name": "新能源汽车", "change_pct": 1.11}, {"name": "新能源车零部件", "change_pct": 1.72}, {"name": "低价股", "change_pct": 2.12}, {"name": "减速器", "change_pct": 1.31}, {"name": "华为汽车", "change_pct": 1.61}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 46, "hot_rank_chg": 27, "stock_cnt": 5789, "price": "941.00", "change": "1.57", "market_id": "33", "circulate_market_value": "1044450720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 47, "hot_rank_chg": -31, "stock_cnt": 5789, "price": "9.12", "change": "10.01", "market_id": "17", "circulate_market_value": "3874737800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "纺织服装", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.42}, {"name": "上海国企改革", "change_pct": 1.95}, {"name": "一带一路", "change_pct": 1.7}, {"name": "优化生育（三孩）", "change_pct": 2.7}, {"name": "纺织服装", "change_pct": 2.43}, {"name": "上海自由贸易港", "change_pct": 2.65}, {"name": "进口博览会", "change_pct": 3.98}, {"name": "自由贸易港", "change_pct": 2.27}, {"name": "物业管理", "change_pct": 4.17}, {"name": "国企改革", "change_pct": 1.61}, {"name": "新冠病毒防治", "change_pct": 2.86}, {"name": "自贸区", "change_pct": 1.83}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 48, "hot_rank_chg": 0, "stock_cnt": 5789, "price": "67.38", "change": "0.33", "market_id": "33", "circulate_market_value": "57480058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 49, "hot_rank_chg": 22, "stock_cnt": 5789, "price": "44.33", "change": "3.38", "market_id": "33", "circulate_market_value": "67289773000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 50, "hot_rank_chg": 28, "stock_cnt": 5789, "price": "167.96", "change": "4.97", "market_id": "17", "circulate_market_value": "415412150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603248", "name": "锡华科技", "hot_rank": 51, "hot_rank_chg": -36, "stock_cnt": 5789, "price": "24.25", "change": "-1.30", "market_id": "17", "circulate_market_value": "1733995100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 52, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "19.46", "change": "-2.16", "market_id": "33", "circulate_market_value": "11353708500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 53, "hot_rank_chg": 23, "stock_cnt": 5789, "price": "8.39", "change": "0.36", "market_id": "33", "circulate_market_value": "3927539900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.73}, {"name": "旅游", "change_pct": 3.05}, {"name": "腾讯概念股", "change_pct": 1.86}, {"name": "广西概念", "change_pct": 1.64}, {"name": "低空经济", "change_pct": 1.5}]}, {"code": "002384", "name": "东山精密", "hot_rank": 54, "hot_rank_chg": 45, "stock_cnt": 5789, "price": "195.02", "change": "-0.58", "market_id": "33", "circulate_market_value": "270360460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 55, "hot_rank_chg": 3, "stock_cnt": 5789, "price": "9.76", "change": "0.10", "market_id": "33", "circulate_market_value": "4695919900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 3.98}, {"name": "医疗器械", "change_pct": 3.49}, {"name": "锂电池", "change_pct": 0.57}, {"name": "基因测序", "change_pct": 4.56}, {"name": "PCB板", "change_pct": 1.43}, {"name": "医药", "change_pct": 4.1}, {"name": "新能源汽车", "change_pct": 1.11}, {"name": "化学原料药", "change_pct": 4.08}, {"name": "食品安全", "change_pct": 1.98}, {"name": "辅助生殖", "change_pct": 4.19}, {"name": "光刻机（胶）", "change_pct": -0.45}, {"name": "异丙醇", "change_pct": 1.29}, {"name": "新冠病毒防治", "change_pct": 2.86}, {"name": "磷酸铁锂", "change_pct": 0.33}]}, {"code": "600367", "name": "红星发展", "hot_rank": 56, "hot_rank_chg": -24, "stock_cnt": 5789, "price": "37.62", "change": "-1.00", "market_id": "17", "circulate_market_value": "12112631100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603686", "name": "福龙马", "hot_rank": 57, "hot_rank_chg": -12, "stock_cnt": 5789, "price": "15.22", "change": "-1.62", "market_id": "17", "circulate_market_value": "6322850700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 58, "hot_rank_chg": 84, "stock_cnt": 5789, "price": "63.60", "change": "1.42", "market_id": "17", "circulate_market_value": "1262084270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 59, "hot_rank_chg": -9, "stock_cnt": 5789, "price": "61.18", "change": "-0.33", "market_id": "33", "circulate_market_value": "92837727000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 60, "hot_rank_chg": 243, "stock_cnt": 5789, "price": "183.20", "change": "5.09", "market_id": "33", "circulate_market_value": "82164676000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 61, "hot_rank_chg": 20, "stock_cnt": 5789, "price": "12.50", "change": "-0.87", "market_id": "17", "circulate_market_value": "22364229000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.39}, {"name": "纯碱", "change_pct": 2.35}, {"name": "食品", "change_pct": 2.33}, {"name": "土壤修复", "change_pct": 1.86}, {"name": "东数西算/算力", "change_pct": 1.33}, {"name": "OpenClaw概念", "change_pct": 1.79}, {"name": "DeepSeek概念股", "change_pct": 1.99}]}, {"code": "003026", "name": "中晶科技", "hot_rank": 62, "hot_rank_chg": -20, "stock_cnt": 5789, "price": "37.89", "change": "1.85", "market_id": "33", "circulate_market_value": "5462255700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 63, "hot_rank_chg": 39, "stock_cnt": 5789, "price": "458.99", "change": "0.88", "market_id": "17", "circulate_market_value": "186505220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 64, "hot_rank_chg": 6, "stock_cnt": 5789, "price": "37.74", "change": "-2.98", "market_id": "33", "circulate_market_value": "28584846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 65, "hot_rank_chg": 28, "stock_cnt": 5789, "price": "52.75", "change": "2.83", "market_id": "17", "circulate_market_value": "53287150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 66, "hot_rank_chg": 21, "stock_cnt": 5789, "price": "81.38", "change": "0.64", "market_id": "33", "circulate_market_value": "59019751000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 67, "hot_rank_chg": 5, "stock_cnt": 5789, "price": "44.15", "change": "0.36", "market_id": "17", "circulate_market_value": "56142087000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 68, "hot_rank_chg": -28, "stock_cnt": 5789, "price": "36.12", "change": "9.99", "market_id": "17", "circulate_market_value": "17318218000.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "高端黄酒"}, {"code": "000021", "name": "深科技", "hot_rank": 69, "hot_rank_chg": -12, "stock_cnt": 5789, "price": "37.22", "change": "0.73", "market_id": "33", "circulate_market_value": "58978319000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 70, "hot_rank_chg": -37, "stock_cnt": 5789, "price": "16.56", "change": "5.34", "market_id": "17", "circulate_market_value": "7360000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 71, "hot_rank_chg": -36, "stock_cnt": 5789, "price": "109.51", "change": "1.59", "market_id": "33", "circulate_market_value": "110055979000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 72, "hot_rank_chg": 7, "stock_cnt": 5789, "price": "33.84", "change": "-0.32", "market_id": "33", "circulate_market_value": "96784859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 73, "hot_rank_chg": 437, "stock_cnt": 5789, "price": "34.54", "change": "10.00", "market_id": "33", "circulate_market_value": "11708867600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "卫星通信"}, {"code": "688837", "name": "信诺维", "hot_rank": 74, "hot_rank_chg": 33, "stock_cnt": 5789, "price": "60.80", "change": "9.35", "market_id": "17", "circulate_market_value": "2954514300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 75, "hot_rank_chg": -54, "stock_cnt": 5789, "price": "18.65", "change": "1.19", "market_id": "17", "circulate_market_value": "14682705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 76, "hot_rank_chg": 12, "stock_cnt": 5789, "price": "33.27", "change": "1.53", "market_id": "17", "circulate_market_value": "55363670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 77, "hot_rank_chg": 28, "stock_cnt": 5789, "price": "297.10", "change": "-1.61", "market_id": "33", "circulate_market_value": "1265824830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 78, "hot_rank_chg": 48, "stock_cnt": 5789, "price": "39.76", "change": "6.59", "market_id": "17", "circulate_market_value": "37001846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 79, "hot_rank_chg": 162, "stock_cnt": 5789, "price": "110.16", "change": "5.47", "market_id": "17", "circulate_market_value": "108178293000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000756", "name": "新华制药", "hot_rank": 80, "hot_rank_chg": 16, "stock_cnt": 5789, "price": "14.67", "change": "9.97", "market_id": "33", "circulate_market_value": "7318465600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "药品注册"}, {"code": "600110", "name": "诺德股份", "hot_rank": 81, "hot_rank_chg": -17, "stock_cnt": 5789, "price": "12.53", "change": "2.04", "market_id": "17", "circulate_market_value": "21741817000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.76}, {"name": "核电", "change_pct": 1.25}, {"name": "锂电池", "change_pct": 0.57}, {"name": "铜箔/覆铜板", "change_pct": 1.11}, {"name": "PCB板", "change_pct": 1.43}, {"name": "中科院系", "change_pct": 1.33}, {"name": "新能源汽车", "change_pct": 1.11}, {"name": "宁德时代概念股", "change_pct": 0.9}, {"name": "固态电池", "change_pct": 0.46}, {"name": "PET复合铜箔", "change_pct": 0.53}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 82, "hot_rank_chg": 31, "stock_cnt": 5789, "price": "7.92", "change": "4.21", "market_id": "33", "circulate_market_value": "12885790700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.42}, {"name": "电竞", "change_pct": 2.01}, {"name": "手游", "change_pct": 1.47}, {"name": "强势人气股", "change_pct": 3.73}, {"name": "人工智能", "change_pct": 1.91}, {"name": "游戏", "change_pct": 1.79}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.86}, {"name": "腾讯概念股", "change_pct": 1.86}, {"name": "快手概念股", "change_pct": 1.76}, {"name": "元宇宙", "change_pct": 2.0}, {"name": "虚拟数字人", "change_pct": 1.72}, {"name": "东数西算/算力", "change_pct": 1.33}, {"name": "web3.0", "change_pct": 2.31}, {"name": "AIGC概念", "change_pct": 1.39}, {"name": "数据要素", "change_pct": 2.15}, {"name": "字节跳动概念股", "change_pct": 1.54}, {"name": "AI营销", "change_pct": 1.3}, {"name": "ChatGPT", "change_pct": 1.7}, {"name": "智能眼镜/MR头显", "change_pct": 1.3}, {"name": "AI大模型/智能体", "change_pct": 1.99}, {"name": "人形机器人", "change_pct": 1.36}, {"name": "短剧/互动影游", "change_pct": 1.99}, {"name": "多模态", "change_pct": 1.48}, {"name": "AI视频", "change_pct": 1.35}, {"name": "IP经济/谷子经济", "change_pct": 2.48}, {"name": "小红书概念股", "change_pct": 1.3}]}, {"code": "000504", "name": "南华生物", "hot_rank": 83, "hot_rank_chg": -47, "stock_cnt": 5789, "price": "11.01", "change": "9.99", "market_id": "33", "circulate_market_value": "3623637600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "细胞医疗", "xgb_concepts": [{"name": "资产重组", "change_pct": 1.67}, {"name": "锂电池", "change_pct": 0.57}, {"name": "ST摘帽", "change_pct": 2.03}, {"name": "湖南国企改革", "change_pct": 2.71}, {"name": "污水处理", "change_pct": 1.62}, {"name": "智慧城市", "change_pct": 1.86}, {"name": "新能源汽车", "change_pct": 1.11}, {"name": "环保", "change_pct": 1.44}, {"name": "动力电池回收", "change_pct": 0.53}, {"name": "干细胞", "change_pct": 4.75}, {"name": "国企改革", "change_pct": 1.61}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 84, "hot_rank_chg": 27, "stock_cnt": 5789, "price": "93.49", "change": "-0.01", "market_id": "33", "circulate_market_value": "61049671000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 85, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "39.70", "change": "0.25", "market_id": "33", "circulate_market_value": "25047535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000070", "name": "特发信息", "hot_rank": 86, "hot_rank_chg": 104, "stock_cnt": 5789, "price": "18.98", "change": "7.23", "market_id": "33", "circulate_market_value": "16260489000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 87, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "2.24", "change": "-2.18", "market_id": "33", "circulate_market_value": "11295168300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.73}, {"name": "新能源整车", "change_pct": 0.63}, {"name": "汽车整车", "change_pct": 0.54}, {"name": "新能源汽车", "change_pct": 1.11}, {"name": "低价股", "change_pct": 2.12}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 88, "hot_rank_chg": 40, "stock_cnt": 5789, "price": "5.16", "change": "4.88", "market_id": "33", "circulate_market_value": "13687161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.73}, {"name": "装修装饰", "change_pct": 2.72}, {"name": "装配式建筑", "change_pct": 2.09}, {"name": "航天", "change_pct": 1.58}, {"name": "旧改", "change_pct": 2.67}]}, {"code": "603629", "name": "利通电子", "hot_rank": 89, "hot_rank_chg": 30, "stock_cnt": 5789, "price": "111.50", "change": "-1.85", "market_id": "17", "circulate_market_value": "40220659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 90, "hot_rank_chg": 63, "stock_cnt": 5789, "price": "3.84", "change": "2.95", "market_id": "17", "circulate_market_value": "8495343500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 1.67}, {"name": "强势人气股", "change_pct": 3.73}, {"name": "云计算数据中心", "change_pct": 1.43}, {"name": "光通信", "change_pct": 0.84}, {"name": "林业", "change_pct": 0.65}, {"name": "军民融合", "change_pct": 1.71}, {"name": "军工", "change_pct": 1.68}, {"name": "人造肉", "change_pct": 3.48}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 91, "hot_rank_chg": -32, "stock_cnt": 5789, "price": "48.43", "change": "2.17", "market_id": "17", "circulate_market_value": "6921863600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 92, "hot_rank_chg": -40, "stock_cnt": 5789, "price": "13.79", "change": "1.03", "market_id": "17", "circulate_market_value": "20308627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 93, "hot_rank_chg": 157, "stock_cnt": 5789, "price": "248.00", "change": "9.23", "market_id": "33", "circulate_market_value": "214568350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 94, "hot_rank_chg": 53, "stock_cnt": 5789, "price": "46.04", "change": "4.85", "market_id": "17", "circulate_market_value": "293689260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 95, "hot_rank_chg": 115, "stock_cnt": 5789, "price": "31.32", "change": "0.45", "market_id": "33", "circulate_market_value": "43985586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601123", "name": "马矿股份", "hot_rank": 96, "hot_rank_chg": -16, "stock_cnt": 5789, "price": "19.56", "change": "10.01", "market_id": "17", "circulate_market_value": "1874400700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "次新股"}, {"code": "603186", "name": "华正新材", "hot_rank": 97, "hot_rank_chg": -41, "stock_cnt": 5789, "price": "231.70", "change": "2.17", "market_id": "17", "circulate_market_value": "36328363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 98, "hot_rank_chg": 3, "stock_cnt": 5789, "price": "16.39", "change": "6.43", "market_id": "17", "circulate_market_value": "4795353400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 99, "hot_rank_chg": 49, "stock_cnt": 5789, "price": "279.26", "change": "-1.90", "market_id": "33", "circulate_market_value": "303943250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 100, "hot_rank_chg": 29, "stock_cnt": 5789, "price": "415.00", "change": "0.46", "market_id": "33", "circulate_market_value": "68567816000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600630", "name": "龙头股份", "price": 9.12, "change_pct": 10.01, "reason": "上海纺织集团旗下，公司主营进出口业务，拥有优质品牌三枪，境外收入占比近半", "plates": ["外贸受益概念"], "limit_up_days": 3, "turnover_ratio": 10.8, "first_limit_up": 1789953900, "break_limit_up_times": 1}, {"code": "002022", "name": "科华生物", "price": 6.17, "change_pct": 9.98, "reason": "公司控股子公司西安天隆的相关核酸提取仪可用于提取基孔热病毒核酸的自动化提取，并有基孔肯雅热病毒RNA检测试剂盒（荧光PCR法）可以检测基孔肯雅热病毒。", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1789957917, "break_limit_up_times": 0}, {"code": "000020", "name": "深华发Ａ", "price": 14.26, "change_pct": 10.03, "reason": "1、公司地处深圳，在深圳市福田区华强北商圈及光明新区公明街道均拥有数万平方米的大型物业；\n2、公司主营精密注塑件及液晶显示器，现有新型生产流水线，拥有自动化设备自动涂胶机器人、注塑机等十多台", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 7.41, "first_limit_up": 1789960626, "break_limit_up_times": 1}, {"code": "000566", "name": "海南海药", "price": 5.07, "change_pct": 9.98, "reason": "1、公司参股上海力声特医学科技有限公司，其核心产品人工耳蜗被视为目前临床应用最成熟的脑机接口之一，通过电信号刺激听神经实现听觉重建；\n2、海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.98, "first_limit_up": 1789959297, "break_limit_up_times": 0}, {"code": "600743", "name": "华远控股", "price": 2.33, "change_pct": 9.91, "reason": "公司控股股东华远集团拟转让所持29.9%股份予金融街资本", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.7, "first_limit_up": 1789953900, "break_limit_up_times": 0}, {"code": "001317", "name": "三羊马", "price": 59.96, "change_pct": 10.0, "reason": "1、机器人业务是三羊马智人科技及合作伙伴冰零智能科技高度关注且重视的下游应用领域，智人科技目前无机器人领域的量产产品；\n2、公司布局无人车物流，并为小米景明科技有限公司的承运商之一，与重庆东风小康汽车销售有限公司及其关联方有汽车整车综合物流服务业务合作", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 13.42, "first_limit_up": 1789956879, "break_limit_up_times": 15}, {"code": "603819", "name": "神力股份", "price": 17.33, "change_pct": 10.03, "reason": "公司主营大中型电机定子、转子冲片和铁芯，终端产品应用领域包括数据中心等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1789959634, "break_limit_up_times": 0}, {"code": "600785", "name": "新华百货", "price": 11.35, "change_pct": 9.98, "reason": "宁夏地区最大的商业零售企业，拟斥资2亿元至4亿元回购公司股份", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.87, "first_limit_up": 1789955590, "break_limit_up_times": 0}, {"code": "600325", "name": "华发股份", "price": 2.73, "change_pct": 10.08, "reason": "珠海地产龙头，拟向控股股东定增募资不超30亿元", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.85, "first_limit_up": 1789968126, "break_limit_up_times": 9}, {"code": "002795", "name": "永和智控", "price": 8.04, "change_pct": 9.99, "reason": "公司以家用水暖阀门、管件生产经营为主营业务，产品主要销往欧美市场，是国内最大的水暖阀门生产销售基地之一", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 11.26, "first_limit_up": 1789969455, "break_limit_up_times": 2}, {"code": "601086", "name": "国芳集团", "price": 17.67, "change_pct": 10.02, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 9.47, "first_limit_up": 1789954613, "break_limit_up_times": 3}, {"code": "001373", "name": "翔腾新材", "price": 32.44, "change_pct": 10.0, "reason": "公司的主要产品偏光片、光学膜片和功能性胶粘材料可广泛应用于手机等各类光电显示产品中，且其产品最终应用于 LG、小米、三星、华为等知名手机品牌商", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.37, "first_limit_up": 1789955364, "break_limit_up_times": 0}, {"code": "002724", "name": "海洋王", "price": 7.84, "change_pct": 9.96, "reason": "公司是深海特种照明设备供应商，技术延展至水下机器人及探测装备，适配全海深场景‌", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 6.88, "first_limit_up": 1789956078, "break_limit_up_times": 1}, {"code": "603258", "name": "电魂网络", "price": 14.19, "change_pct": 10.0, "reason": "精品化网络游戏研运一体商；公司产品体系已涵盖AI游戏品类，旗下《吾家有女Ai》以AI互动玩法为核心，主打AI智能体角色养成交互体验，将AI技术深度融入精品化游戏研发运营", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 1.96, "first_limit_up": 1789955110, "break_limit_up_times": 0}, {"code": "000756", "name": "新华制药", "price": 14.67, "change_pct": 9.97, "reason": "公司治疗阿尔茨海默病的一类创新药OAB-14正在进行I期临床研究", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.26, "first_limit_up": 1789954251, "break_limit_up_times": 0}, {"code": "300691", "name": "联合光电", "price": 17.76, "change_pct": 20.0, "reason": "公司依托领先的光学制造工艺与整机集成能力，将自主研发的超微AR光机尺寸缩小至行业领先水平，配合成熟的XR整机解决方案，成为全球少数同时掌握Micro-LED光机量产技术与双目衍射光波导AR眼镜整机制造能力的厂商", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.56, "first_limit_up": 1789968579, "break_limit_up_times": 4}, {"code": "002349", "name": "精华制药", "price": 8.71, "change_pct": 9.97, "reason": "公司正柴胡饮颗粒近期被国家中医药管理局中医疫病防治专家委员会纳入《新冠病毒感染者居家中医药干预指南》", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.45, "first_limit_up": 1789955766, "break_limit_up_times": 0}, {"code": "688112", "name": "鼎阳科技", "price": 91.79, "change_pct": 20.0, "reason": "国内头部电子测量仪器供应商，可为光模块、AI芯片、电源等下游客户提供测试仪器，用于研发和产线测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.57, "first_limit_up": 1789954692, "break_limit_up_times": 25}, {"code": "002388", "name": "新亚制程", "price": 7.95, "change_pct": 9.96, "reason": "公司产品已批量用于人型机器人主板，与多家客户建立合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.43, "first_limit_up": 1789955898, "break_limit_up_times": 1}, {"code": "002321", "name": "华英农业", "price": 2.3, "change_pct": 10.05, "reason": "公司聚焦鸭产业，深耕食品与羽绒两大产业链，覆盖种鸭养殖、孵化、商品鸭饲养、禽苗销售、饲料生产、屠宰加工、冻品销售、熟食及预制菜、羽绒加工与销售等全环节", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.56, "first_limit_up": 1789957464, "break_limit_up_times": 0}, {"code": "600613", "name": "神奇制药", "price": 9.25, "change_pct": 9.99, "reason": "公司拥有中国驰名商标“神奇”品牌，其中枇杷止咳颗粒、强力枇杷露等较为知名", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 18.59, "first_limit_up": 1789954824, "break_limit_up_times": 2}, {"code": "000995", "name": "皇台酒业", "price": 11.92, "change_pct": 9.96, "reason": "甘肃小型白酒企业；公司白酒产业拥有“皇台”和“凉州皇台”两大品牌，目前拥有“窖底原浆”、“皇台经典”等系列产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.35, "first_limit_up": 1789966869, "break_limit_up_times": 0}, {"code": "600503", "name": "华丽家族", "price": 2.43, "change_pct": 9.95, "reason": "1、公司以高端地产开发为基石，开发类型涵盖低密住宅、别墅、公寓、商铺及城市更新项目，聚焦上海、苏州、遵义核心城市；\n2、公司控股的南江机器人主要产品包括为面向3C制造行业、医药行业、汽车制造行业和光伏行业中的智慧物流环节而设计的智能移动机器人iAGV系列、智能搬运机器人iCarrier系列以及相应的智能调度系统", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.49, "first_limit_up": 1789960497, "break_limit_up_times": 0}, {"code": "002585", "name": "双星新材", "price": 12.71, "change_pct": 10.04, "reason": "公司MLCC离型膜已切入国内头部客户并实现稳定供货，复合铜箔项目正常推进，受益国产替代", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 14.33, "first_limit_up": 1789954788, "break_limit_up_times": 0}, {"code": "603663", "name": "三祥新材", "price": 49.82, "change_pct": 10.0, "reason": "1、公司锆铪分离项目正处于项目建设中，现有半工业化产线已实现连续稳定生产，产出的锆铪产品均为4N级以上，并已将部分产品向下游半导体领域客户送样；\n2、公司锆基卤化物材料目前已向下游电池企业小批量供货", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 3.97, "first_limit_up": 1789954522, "break_limit_up_times": 2}, {"code": "300110", "name": "华仁药业", "price": 3.29, "change_pct": 20.07, "reason": "公司主要从事非PVC软袋大容量制剂及原料药等产品，新型冠状病毒抗原检测试剂盒尚未产生订单", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 15.89, "first_limit_up": 1789958328, "break_limit_up_times": 3}, {"code": "605566", "name": "福莱蒽特", "price": 30.44, "change_pct": 10.01, "reason": "1、公司拟出资300万元与钛深科技共设双曲线智能机器人公司，持股30%，切入机器人皮肤及柔性触觉传感赛道；\n2、控股子公司福莱蒽特新能源产品包括POE、EVA太阳能电池封装胶膜；\n3、公司主营业务为分散染料及其滤饼的研产销，主要产品为分散染料，用于涤纶及其混纺织物的染色", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.94, "first_limit_up": 1789971038, "break_limit_up_times": 0}, {"code": "002042", "name": "华孚时尚", "price": 4.22, "change_pct": 9.9, "reason": "公司上虞AIGC智算中心已对外租赁算力，阿克苏城市公共算力平台项目施工设备已进场，项目正在正常推进中；预计半年报净利润同比增长537.51%至696.88%", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.89, "first_limit_up": 1789972455, "break_limit_up_times": 0}, {"code": "600894", "name": "广日股份", "price": 7.92, "change_pct": 10.0, "reason": "公司主营电梯，与优必选共建人形机器人联合实验室，并布局机器人末端执行器研发，年报净利润增速下滑较三季报缩减", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.2, "first_limit_up": 1789955349, "break_limit_up_times": 2}, {"code": "002259", "name": "升达林业", "price": 4.52, "change_pct": 9.98, "reason": "公司主要业务包括天然气液化加工、城镇燃气运营和加气站运营", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.54, "first_limit_up": 1789960023, "break_limit_up_times": 11}, {"code": "600587", "name": "新华医疗", "price": 13.4, "change_pct": 10.02, "reason": "公司长期关注脑机接口技术在康复领域的应用潜力，重点推进该技术与现有运动康复、认知康复设备的产品融合与技术升级，目前已启动脑机接口与康复设备结合的初代样机研发", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1789957828, "break_limit_up_times": 0}, {"code": "000402", "name": "金 融 街", "price": 2.77, "change_pct": 9.92, "reason": "以商务地产为主业的大型国有控股公司", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.56, "first_limit_up": 1789969275, "break_limit_up_times": 13}, {"code": "001389", "name": "广合科技", "price": 185.93, "change_pct": 10.0, "reason": "公司拥有CPU PCB产品，上半年度净利同比预增85.12%—95.29%，主要受益于算力硬件需求激增、产品结构优化及泰国广合一期产能利用率提升带动盈利能力增强", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.17, "first_limit_up": 1789954479, "break_limit_up_times": 1}, {"code": "600301", "name": "华锡有色", "price": 49.97, "change_pct": 9.99, "reason": "据央视报道，AI算力爆发驱动半导体先进封装用锡消耗激增，AI单台服务器用锡量为传统服务器3倍以上，全球锡矿仅够开采15年，国内锡矿仅够开采12年左右，公司主营业务为有色金属勘探、开采、选矿以及工程监理等业务，主要产品为锡、锌、铅锑、铅、铜精矿和锡、铟等深加工产品", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1789953900, "break_limit_up_times": 2}, {"code": "000532", "name": "华金资本", "price": 14.26, "change_pct": 10.03, "reason": "1、实控人珠海国资委，珠海金控旗下唯一控股的上市平台，参股优必选等人工智能独角兽公司；\n2、控股子公司华冠电容主营铝电解电容器的研产销，核心产品有片式、导电高分子等多种类型铝电解电容器", "plates": ["大金融"], "limit_up_days": 2, "turnover_ratio": 16.38, "first_limit_up": 1789972668, "break_limit_up_times": 0}, {"code": "001201", "name": "东瑞股份", "price": 16.08, "change_pct": 9.99, "reason": "国内较大的自育自繁自养一体化的生猪养殖企业；形成了集饲料生产、生猪育种、种猪扩繁、商品猪饲养、活大猪供港及生猪内地销售于一体的完整生猪产业链，是内地供港活大猪前三大供应商之一和粤港澳大湾区“菜篮子”生产基地", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 7.89, "first_limit_up": 1789967433, "break_limit_up_times": 0}, {"code": "600712", "name": "南宁百货", "price": 5.89, "change_pct": 10.09, "reason": "南宁百货品牌，此前向广西壮族自治区及南宁市政府相关部门递交了关于免税品经营资质申报的请示", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 13.59, "first_limit_up": 1789957988, "break_limit_up_times": 8}, {"code": "002860", "name": "星帅尔", "price": 18.39, "change_pct": 9.99, "reason": "国内冰箱与冷柜压缩机热保护器和起动器的骨干研发生产企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.13, "first_limit_up": 1789954314, "break_limit_up_times": 8}, {"code": "603319", "name": "美湖股份", "price": 32.18, "change_pct": 10.02, "reason": "1、公司持有朗道智通 66.13%股权，后者主要产品及业务有工业物流机器人（AGV）；\n2、国内内燃机机油泵龙头，控股子公司东兴昌科技激光雷达电机产品已实现对全球图像级激光雷达领先企业的配套供货，并实车装配于某新能源汽车制造厂商", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.94, "first_limit_up": 1789954966, "break_limit_up_times": 8}, {"code": "002667", "name": "*ST威领", "price": 21.82, "change_pct": 9.98, "reason": "兴业银锡要约收购拟拿下公司控制权，要约收购价格18元/股", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 8.49, "first_limit_up": 1789973013, "break_limit_up_times": 6}, {"code": "002755", "name": "奥赛康", "price": 12.45, "change_pct": 9.98, "reason": "公司产品剂型主要定位于冻干粉针制剂、固体口服制剂，国内抗消化性溃疡药物质子泵抑制剂注射剂产品细分领域市场占有率第一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.84, "first_limit_up": 1789970727, "break_limit_up_times": 4}, {"code": "600127", "name": "金健米业", "price": 15.75, "change_pct": 9.99, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 28.45, "first_limit_up": 1789957484, "break_limit_up_times": 2}, {"code": "000560", "name": "我爱我家", "price": 3.19, "change_pct": 10.0, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 18.58, "first_limit_up": 1789967190, "break_limit_up_times": 0}, {"code": "002963", "name": "豪尔赛", "price": 22.62, "change_pct": 10.02, "reason": "1、公司参股的华奕新能源已中标某头部通讯公司的数据中心冷板试点项目，其基于蒸发冷却独有冷水技术，复合液冷板，可完全实现无压缩机补冷；\n2、公司智慧灯杆解决方案基于灯具节能、智能灯控等技术，结合物联网、大数据、5G、AI、机器视觉等新一代信息技术，通过智慧照明云平台对城市路灯等公共照明实现统一智能化管理", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.5, "first_limit_up": 1789967277, "break_limit_up_times": 0}, {"code": "603230", "name": "内蒙新华", "price": 14.83, "change_pct": 10.01, "reason": "公司是内蒙古规模最大的出版物发行企业，明确以教育服务、文化消费、现代物流为核心，向综合文化服务商转型，提供阅读空间设计、阅读活动策划及阅读课程开发等服务", "plates": ["传媒"], "limit_up_days": 4, "turnover_ratio": 10.63, "first_limit_up": 1789953900, "break_limit_up_times": 3}, {"code": "002622", "name": "皓宸医疗", "price": 2.72, "change_pct": 10.12, "reason": "公司主营口腔医疗服务与永磁开关及高低压成套设备的研产销，汇垠日丰将成为的第一大股东", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.44, "first_limit_up": 1789958835, "break_limit_up_times": 0}, {"code": "001234", "name": "泰慕士", "price": 26.59, "change_pct": 10.01, "reason": "公司出口占比约30%，主营业务为针织面料与针织服装的研产销，主要产品可以分为运动服装、休闲服装及儿童服装，为迪卡侬、森马服饰、Quiksilver、Kappa、佐丹奴、全棉时代等知名服装品牌提供贴牌加工服务，目前与安踏合作的产品主要是运动服装和儿童服装", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.68, "first_limit_up": 1789956312, "break_limit_up_times": 0}, {"code": "688121", "name": "*ST卓然", "price": 1.38, "change_pct": 20.0, "reason": "公司连续四年财务造假，将被强制退市", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.56, "first_limit_up": 1789955345, "break_limit_up_times": 1}, {"code": "002172", "name": "澳洋健康", "price": 5.81, "change_pct": 10.04, "reason": "子公司江苏澳洋医药物流有限公司具体经营内容包括中药材配送、销售业务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 15.07, "first_limit_up": 1789954203, "break_limit_up_times": 3}, {"code": "603093", "name": "南华期货", "price": 13.99, "change_pct": 9.98, "reason": "国内最有竞争力的期货公司之一", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1789972634, "break_limit_up_times": 0}, {"code": "603958", "name": "哈森股份", "price": 18.37, "change_pct": 10.0, "reason": "公司与关联方等拟共同出资1亿元设立参股公司，主营机器人零部件及产品销售、技术服务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.7, "first_limit_up": 1789967095, "break_limit_up_times": 11}, {"code": "002900", "name": "哈三联", "price": 13.04, "change_pct": 10.04, "reason": "1、公司旗下礼德生物作为创新药研发平台，聚焦抗肿瘤领域和免疫制剂研发 ，公司拥有包括创新药等在内的 40 余项在研项目，持续加大研发投入；\n2、公司美妆系列聚焦日常多护肤场景，打造精细化面膜矩阵；“哈三联”II 类医疗器械敷料系列搭载重组胶原蛋白与透明质酸钠两大核心成分，深耕问题性肌肤赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 12.49, "first_limit_up": 1789958235, "break_limit_up_times": 1}, {"code": "002285", "name": "世联行", "price": 3.18, "change_pct": 10.03, "reason": "公司专注房地产服务，旗下拥有“红璞公寓”、 “世联空间”、“小样社区”等多个品牌", "plates": ["房地产"], "limit_up_days": 4, "turnover_ratio": 14.73, "first_limit_up": 1789967826, "break_limit_up_times": 0}, {"code": "001376", "name": "百通能源", "price": 13.93, "change_pct": 10.03, "reason": "公司主营以煤炭为燃料的热电联产业务，境外全资子公司百通图达安哥拉铝业有限公司已完成注册，并取得企业境外投资证书及项目备案通知书，经营范围涵盖铝业产品生产、加工、销售及进出口", "plates": ["公告"], "limit_up_days": 2, "turnover_ratio": 7.71, "first_limit_up": 1789954332, "break_limit_up_times": 0}, {"code": "002869", "name": "金溢科技", "price": 17.04, "change_pct": 10.01, "reason": "公司打造了完整的智能网联车路云产品体系，硬件设备主要集中在车、路两端，包括车载TBOX、车载智能网关、V2X-OBU、V2X-RSU、ETC-RSU、ETC-OBU、边缘计算单元等设备，软件产品包括车路协同云平台、C-V2X车载HMI人机交互系统管理平台等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.84, "first_limit_up": 1789955040, "break_limit_up_times": 1}, {"code": "603175", "name": "超颖电子", "price": 110.17, "change_pct": 10.0, "reason": "公司间接控股股东定颖投控为中国台湾上市公司，主要产品为印制电路板，按照层数可分为双面板和多层板", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.48, "first_limit_up": 1789968316, "break_limit_up_times": 0}, {"code": "002303", "name": "美盈森", "price": 6.27, "change_pct": 10.0, "reason": "国际领先的包装一体化综合服务商；公司主营运输包装、精品包装、标签及电子功能材料模切产品，并持续为消费电子、白酒、家电等行业龙头提供一体化包装服务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.21, "first_limit_up": 1789954215, "break_limit_up_times": 0}, {"code": "688026", "name": "洁特生物", "price": 25.22, "change_pct": 19.98, "reason": "公司专注于为生物科研、生物制药、细胞与基因治疗、辅助生殖等领域提供全流程实验和生产工具，已开发IVF专用取卵针等辅助生殖系列产品", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.48, "first_limit_up": 1789956169, "break_limit_up_times": 8}, {"code": "600857", "name": "宁波中百", "price": 23.41, "change_pct": 10.01, "reason": "宁波大型百货零售商店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.68, "first_limit_up": 1789967327, "break_limit_up_times": 0}, {"code": "002178", "name": "延华智能", "price": 5.08, "change_pct": 9.96, "reason": "公司医疗板块AI助手“星仔”已融合人工智能技术，落地智能导诊、报告解读、辅助诊断等场景，实现医疗服务智能化升级", "plates": ["养老产业"], "limit_up_days": 1, "turnover_ratio": 6.6, "first_limit_up": 1789954428, "break_limit_up_times": 0}, {"code": "002080", "name": "中材科技", "price": 66.24, "change_pct": 10.0, "reason": "1、公司自主研发的第一代低介电产品，已成功应用于高端 PCB 领域；\n2、全资子公司泰山玻纤专业从事玻璃纤维及其制品的研发、制造及销售，拥有超140万吨的玻璃纤维年产能，在玻璃纤维配方、大型玻纤池窑设计、窑炉纯氧燃烧技术等方面拥有核心自主知识产权，居世界领先水平", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.94, "first_limit_up": 1789956813, "break_limit_up_times": 3}, {"code": "600992", "name": "贵绳股份", "price": 10.57, "change_pct": 9.99, "reason": "公司“巨龙”牌钢丝绳已用于“神舟”载人飞船等国家重大航天工程，产品配套长征系列火箭及深中通道等超级工程", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 6.28, "first_limit_up": 1789956477, "break_limit_up_times": 0}, {"code": "603316", "name": "诚邦股份", "price": 18.36, "change_pct": 10.01, "reason": "公司拟定增1.29亿元加码半导体存储业务", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 8.69, "first_limit_up": 1789954217, "break_limit_up_times": 2}, {"code": "601811", "name": "新华文轩", "price": 15.29, "change_pct": 10.0, "reason": "四川省出版传媒行业龙头，省内义务教育阶段学生教科书唯一供货方", "plates": ["传媒"], "limit_up_days": 2, "turnover_ratio": 5.4, "first_limit_up": 1789954221, "break_limit_up_times": 8}, {"code": "601123", "name": "马矿股份", "price": 19.56, "change_pct": 10.01, "reason": "公司主营铁矿石的开采、选矿及综合利用，拥有全国知名马坑铁矿采矿权，铁矿石保有资源储量约3.25亿吨，主要产品为TFe65%造球铁精粉，面向福建省及周边省份大型钢铁企业销售，是福建省规模最大的铁矿采选企业，属于铁矿石产业链上游资源开采与加工环节", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 15.86, "first_limit_up": 1789954201, "break_limit_up_times": 0}, {"code": "300829", "name": "金丹科技", "price": 25.72, "change_pct": 20.02, "reason": "公司是国内乳酸领域的龙头企业，拥有1.2万亩优质土地种植玉米", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 19.39, "first_limit_up": 1789966851, "break_limit_up_times": 1}, {"code": "603020", "name": "爱普股份", "price": 12.57, "change_pct": 9.97, "reason": "国内香料香精行业龙头，拥有一种天然风味素肉固体调味料的专利", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.78, "first_limit_up": 1789959945, "break_limit_up_times": 5}, {"code": "688137", "name": "近岸蛋白", "price": 118.84, "change_pct": 20.0, "reason": "国内重组蛋白解决方案专家、领先的mRNA应用服务商；公司整合AlphaFold等AI工具与自研机器学习系统，用于蛋白质设计、改造及表达，推动AI在生命科学领域的应用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 13.97, "first_limit_up": 1789958032, "break_limit_up_times": 15}, {"code": "600714", "name": "金瑞矿业", "price": 19.25, "change_pct": 10.0, "reason": "公司主营锶盐系列产品的生产和销售，可应用于液晶玻璃基板等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.3, "first_limit_up": 1789956857, "break_limit_up_times": 0}, {"code": "002367", "name": "康力电梯", "price": 6.28, "change_pct": 9.98, "reason": "1、中国民族电梯品牌第一家上市公司，主要生产的电梯类型为电梯、扶梯、自动人行步道整机产品、相关零部件，产品线丰富，包括金豹系列高速电梯；\n2、间接参股芯禾科技，芯禾科技专注电子设计自动化EDA软件、集成无源器件IPD和系统级封装SiP微系统的研发", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1789954476, "break_limit_up_times": 2}, {"code": "603289", "name": "泰瑞机器", "price": 10.51, "change_pct": 10.05, "reason": "公司为注塑机行业龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.97, "first_limit_up": 1789955401, "break_limit_up_times": 6}, {"code": "601579", "name": "会稽山", "price": 36.12, "change_pct": 9.99, "reason": "国内龙头黄酒供应商；公司在生产黄酒的同时，也利用黄酒生产过程产生的醪糟作为原料，通过蒸馏生产糟烧白酒，并一直有销售糟烧白酒等副产品的传统", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 7.19, "first_limit_up": 1789960728, "break_limit_up_times": 0}, {"code": "001216", "name": "华瓷股份", "price": 24.06, "change_pct": 10.01, "reason": "公司氧化锆粉体纯度最高可达99.995%，可适配新能源研磨、齿科陶瓷、MLCC等领域，向潮州三环供应的MLCC相关粉体仍处于小量验证阶段", "plates": ["被动元件"], "limit_up_days": 5, "turnover_ratio": 0.86, "first_limit_up": 1789953900, "break_limit_up_times": 0}, {"code": "600593", "name": "大连圣亚", "price": 48.57, "change_pct": 10.01, "reason": "公司景区项目为大连景区和哈尔滨景区，包括圣亚海洋世界、圣亚极地世界、圣亚珊瑚世界、银河星海等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 12.06, "first_limit_up": 1789955465, "break_limit_up_times": 42}, {"code": "603001", "name": "奥康国际", "price": 11.47, "change_pct": 9.97, "reason": "1、公司为定位中高端商务时尚的国内皮鞋龙头，控股股东及实控人拟8.17元/股协议转让12%股份；\n2、全资子公司奥港国际持有兰亭集势 10.86% 股权，而兰亭集势从事跨境电商业务", "plates": ["外贸受益概念"], "limit_up_days": 2, "turnover_ratio": 7.12, "first_limit_up": 1789954616, "break_limit_up_times": 7}, {"code": "603151", "name": "邦基科技", "price": 18.35, "change_pct": 10.01, "reason": "公司拟收购北溪农牧等公司股权，本次交易的标的公司以生猪养殖及销售为主", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 2.48, "first_limit_up": 1789957712, "break_limit_up_times": 0}, {"code": "300642", "name": "透景生命", "price": 20.35, "change_pct": 19.99, "reason": "国内最主要的流式荧光发光产品供应商", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 25.74, "first_limit_up": 1789957227, "break_limit_up_times": 0}, {"code": "002453", "name": "华软科技", "price": 5.87, "change_pct": 9.93, "reason": "公司不生产光刻胶产品，仅有少量光引发剂产品", "plates": ["国产芯片"], "limit_up_days": 3, "turnover_ratio": 6.71, "first_limit_up": 1789954200, "break_limit_up_times": 0}, {"code": "000910", "name": "大亚圣象", "price": 6.26, "change_pct": 10.02, "reason": "1、板材行业龙头；公司研发生产的超薄PCB纤维板有利于丰富公司产品矩阵，开拓高端电子材料市场；\n2、公司以自有资金1500万认购嘉兴翼龙股权投资合伙企业28.30189%的份额，该基金拟以股权投资的方式投资七腾机器人", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 9.09, "first_limit_up": 1789954206, "break_limit_up_times": 2}, {"code": "600664", "name": "哈药股份", "price": 8.25, "change_pct": 10.0, "reason": "全国医药行业首家上市公司；预计上半年净利润同比增长46.40%至68.36%，主要是受医药工业板块业绩提升影响", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.7, "first_limit_up": 1789954265, "break_limit_up_times": 1}, {"code": "002589", "name": "瑞康医药", "price": 3.6, "change_pct": 10.09, "reason": "中医药全产业链精准服务型企业，拥有种植、中药饮片加工业务，控股子公司马鞍山井泉中药主要从事中药饮片生产和销售", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 14.23, "first_limit_up": 1789954518, "break_limit_up_times": 2}, {"code": "603636", "name": "南威软件", "price": 7.28, "change_pct": 9.97, "reason": "公司首批高性能算力服务器已正式上架投入运营，开始面向全国用户提供算力服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.62, "first_limit_up": 1789954494, "break_limit_up_times": 3}, {"code": "605196", "name": "华通线缆", "price": 34.62, "change_pct": 10.01, "reason": "1、公司主营电线电缆与油服装备，产品涵盖潜油泵电缆、连续油管等；\n2、2026年1月公司安哥拉电解铝项目正式投产，标志公司形成“线缆+油服+铝业”产业布局，该项目是电线电缆业务的向上延伸", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1789967808, "break_limit_up_times": 0}, {"code": "002614", "name": "奥佳华", "price": 6.25, "change_pct": 10.04, "reason": "1、公司是全国最大的养老按摩器材生产制造服务商，主要经营包括保健按摩（按摩椅、按摩小电器）、健康环境（新风系统、空气净化器）等健康产品；\n2、旗下AI按摩机器人运用了语音交互、人脸识别、智能生理参数检测等技术，还接入DeepSeek，打造健康生态AI大模型", "plates": ["养老产业"], "limit_up_days": 1, "turnover_ratio": 2.5, "first_limit_up": 1789954200, "break_limit_up_times": 0}, {"code": "600721", "name": "百花医药", "price": 13.15, "change_pct": 10.04, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 29.02, "first_limit_up": 1789956127, "break_limit_up_times": 0}, {"code": "000607", "name": "华媒控股", "price": 4.53, "change_pct": 9.95, "reason": "公司主要从事广告策划发布、报刊发行与印刷、教育等业务，持有杭州文化产权交易所 40% 股权，该文交所聚焦文化艺术品等资产的确权、交易与流转", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 2.61, "first_limit_up": 1789953900, "break_limit_up_times": 0}, {"code": "002084", "name": "海鸥住工", "price": 6.12, "change_pct": 10.07, "reason": "公司主营业务聚焦在卫浴及厨房产品整组龙头及部品部件的制造服务与销售，控股股东拟变更为博泰车联", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 8.62, "first_limit_up": 1789955289, "break_limit_up_times": 0}, {"code": "600812", "name": "华北制药", "price": 5.08, "change_pct": 9.96, "reason": "公司是我国最大的抗生素、维生素生产基地之一，产品主要是维生素C和维生素B12", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1789957041, "break_limit_up_times": 3}, {"code": "600218", "name": "全柴动力", "price": 8.27, "change_pct": 9.97, "reason": "控股子公司元隽公司从事燃料电池电池、动力系统集成以及燃料电池的核心部件研发、生产和销售；元隽氢能的质子交换膜属于全氟磺酸膜，在氢燃料电池领域性能处于国内领先水平，拥有多项国家专利技术和自主知识产权", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.72, "first_limit_up": 1789954622, "break_limit_up_times": 4}, {"code": "688315", "name": "诺禾致源", "price": 18.18, "change_pct": 20.0, "reason": "国内基因测序服务领域领先者，公司建立了高通量、高性能的计算平台和数据中心，自主开发的生物信息分析软件和数据库为海量的基因序列解读及组学数据分析提供支撑", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.3, "first_limit_up": 1789954347, "break_limit_up_times": 1}, {"code": "000504", "name": "南华生物", "price": 11.01, "change_pct": 9.99, "reason": "湖南省政府旗下，干细胞储存和节能环保双主业，其中生物医药板块主要为细胞医疗服务，为客户提供干细胞、免疫细胞等生物资源的检测及储存服务", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 1.62, "first_limit_up": 1789953900, "break_limit_up_times": 0}, {"code": "000829", "name": "天音控股", "price": 9.77, "change_pct": 10.02, "reason": "公司开设了华为、苹果、小米、荣耀等多品牌门店", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.32, "first_limit_up": 1789957149, "break_limit_up_times": 2}, {"code": "600606", "name": "绿地控股", "price": 1.6, "change_pct": 10.34, "reason": "总部位于上海的全球化房地产开发企业", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 3.96, "first_limit_up": 1789960685, "break_limit_up_times": 0}, {"code": "600281", "name": "华阳新材", "price": 4.98, "change_pct": 9.93, "reason": "全资子公司太原华盛丰贵金属材料有限公司经营范围涵盖稀土高磁性材料的回收利用、加工等服务\n", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.9, "first_limit_up": 1789954898, "break_limit_up_times": 0}, {"code": "002907", "name": "华森制药", "price": 15.25, "change_pct": 10.03, "reason": "子公司磷酸ORIC-1327滴眼液获国家药监局临床试验批准通知书", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.2, "first_limit_up": 1789958250, "break_limit_up_times": 0}, {"code": "603042", "name": "华脉科技", "price": 19.03, "change_pct": 10.0, "reason": "1、信息通信网络基础设施解决方案提供商，实控人拟协议转让5.27%股份；\n2、公司主要产品覆盖了从局端OLT到用户端ONU的全系列ODN及无线通信网络建设产品，包括ODN物理连接及保护设备、光无源器件、光缆等光通信产品及微波无源器件、POI多路接入等无线通信网络建设产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 18.16, "first_limit_up": 1789955360, "break_limit_up_times": 2}, {"code": "002792", "name": "通宇通讯", "price": 34.54, "change_pct": 10.0, "reason": "1、公司构建 “星 - 地 - 端” 全链条卫星通信产品体系，为中国星网、千帆 / 鸿鹄星座等供应 Ka/Ku 频段星载相控阵天线、T/R 组件等载荷；\n2、佳贤通信与英伟达合作开发6G AI-RAN基站，公司拟入股25%股权", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 20.31, "first_limit_up": 1789956726, "break_limit_up_times": 1}, {"code": "603580", "name": "艾艾精工", "price": 71.53, "change_pct": 10.0, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.67, "first_limit_up": 1789954285, "break_limit_up_times": 1}, {"code": "600825", "name": "新华传媒", "price": 5.84, "change_pct": 9.98, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 0.24, "first_limit_up": 1789953900, "break_limit_up_times": 0}, {"code": "603395", "name": "红四方", "price": 28.14, "change_pct": 10.01, "reason": "公司为中盐集团农肥业务板块的运营主体", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 25.37, "first_limit_up": 1789959976, "break_limit_up_times": 2}, {"code": "002246", "name": "北化股份", "price": 26.27, "change_pct": 10.01, "reason": "中国兵器工业集团旗下，全球硝化棉龙头及军工防化稀缺供应商；子公司防化装备研究院生产航天员防毒面具、防护面罩等产品，应用于空间站、飞船发射等航天场景", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 6.69, "first_limit_up": 1789957941, "break_limit_up_times": 24}, {"code": "600448", "name": "华纺股份", "price": 3.89, "change_pct": 9.89, "reason": "国内纺织印染行业销售十强之一，旗下有“华纺”、“蓝铂”、“霄霓”、“衣诺德”、“纺卫”等品牌", "plates": ["外贸受益概念"], "limit_up_days": 3, "turnover_ratio": 39.33, "first_limit_up": 1789954260, "break_limit_up_times": 3}, {"code": "603068", "name": "博通集成", "price": 43.79, "change_pct": 10.0, "reason": "1、公司BK7259等Wi-Fi6 MCU产品集成端侧智能能力，面向智能家居、智能硬件等场景；\n2、公司已有多款融合AI技术的AIoT芯片产品实现量产销售，应用领域涵盖AI眼镜、AI玩具等", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 13.71, "first_limit_up": 1789954461, "break_limit_up_times": 34}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};