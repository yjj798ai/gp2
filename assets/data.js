const UPDATE_TIME = "2026-07-01 07:13";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 4.71,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续68天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "2026中报预增",
    "rise": 5.86,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "猪肉",
    "rise": 6.98,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "存储芯片",
    "rise": 0.22,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续191天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.22,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续238天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": 0.85,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续167天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": -0.75,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续61天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": 1.61,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "连续402天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "氟化工概念",
    "rise": 4.63,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "石化ETF",
    "code": "885551"
  },
  {
    "name": "光纤概念",
    "rise": -2.09,
    "rate": 0,
    "tag": "",
    "hotTag": "连续67天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "算力租赁",
    "rise": 1.89,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续102天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "先进封装",
    "rise": -1.02,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "互联网金融",
    "rise": 3.52,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "机器人概念",
    "rise": 1.47,
    "rate": 0,
    "tag": "43家涨停",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI应用",
    "rise": 2.7,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "芯片概念",
    "rise": 0.69,
    "rate": 0,
    "tag": "41家涨停",
    "hotTag": "连续62天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "ST板块",
    "rise": 3.2,
    "rate": 0,
    "tag": "69家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光刻胶",
    "rise": 1.09,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "培育钻石",
    "rise": -2.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "养鸡",
    "rise": 6.12,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885808"
  }
];
const THS_EVENTS = [
  {
    "title": "优必选发布超仿生人形机器人",
    "desc": "",
    "heat": 766031,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "华民股份",
        "code": "300345",
        "chg": 20.034247
      }
    ]
  },
  {
    "title": "八部门出台新政促工业互联网发展 明确2030年核心产业增加值将破2.5万亿元",
    "desc": "",
    "heat": 546032,
    "direction": "工业互联网",
    "themes": [
      "工业互联网"
    ],
    "stocks": [
      {
        "name": "C惠科",
        "code": "001399",
        "chg": 21.215296
      }
    ]
  },
  {
    "title": "18 万一吨！被严重低估的电子氢氟酸，半导体的隐形护城河",
    "desc": "",
    "heat": 544929,
    "direction": "电子特气",
    "themes": [
      "电子特气"
    ],
    "stocks": [
      {
        "name": "金宏气体",
        "code": "688106",
        "chg": 20.009643
      }
    ]
  },
  {
    "title": "东兴证券：证券业利润逐步兑现 板块估值修复可期",
    "desc": "",
    "heat": 534992,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "天风证券",
        "code": "601162",
        "chg": 10.089021
      }
    ]
  },
  {
    "title": "三星电机获价值4540亿韩元AI服务器MLCC合同",
    "desc": "",
    "heat": 224894,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "振华科技",
        "code": "000733",
        "chg": 9.992938
      }
    ]
  },
  {
    "title": "闪迪涨858%、美光涨300%！美股上半年收官，存储巨头集体狂飙",
    "desc": "",
    "heat": 179117,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "金宏气体",
        "code": "688106",
        "chg": 20.009643
      }
    ]
  },
  {
    "title": "SK海力士拟订购半导体检测设备 总价最高可达4000亿韩元",
    "desc": "",
    "heat": 805,
    "direction": "半导体检测设备",
    "themes": [
      "半导体检测设备"
    ],
    "stocks": [
      {
        "name": "金海通",
        "code": "603061",
        "chg": 4.137629
      }
    ]
  },
  {
    "title": "富乔工业提价30%引领电子布涨价周期启动",
    "desc": "",
    "heat": 35,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "国际复材",
        "code": "301526",
        "chg": 0.171416
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "制冷剂",
    "change": "+9.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+7.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+7.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氟化工",
    "change": "+6.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+5.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+5.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+5.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PVDF概念",
    "change": "+5.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "征信概念",
    "change": "+5.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+5.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+5.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "期货概念",
    "change": "+5.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+4.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+4.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+4.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "+4.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+4.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "骨科材料",
    "change": "+4.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液氯",
    "change": "+4.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "长寿药NMN",
    "change": "+4.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5856,
    "price": "8.77",
    "change": "1.04",
    "market_id": "33",
    "circulate_market_value": "310169770000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 8,
    "hot_rank_chg": 62,
    "stock_cnt": 5856,
    "price": "7.79",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "96565534000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "绿电大基地",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.6
      },
      {
        "name": "核电",
        "change_pct": 0.97
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "电力体制改革",
        "change_pct": 2.43
      },
      {
        "name": "水电",
        "change_pct": 3.33
      },
      {
        "name": "火电",
        "change_pct": 2.65
      },
      {
        "name": "光伏",
        "change_pct": 0.46
      },
      {
        "name": "风电",
        "change_pct": 1.03
      },
      {
        "name": "国企改革",
        "change_pct": 2.13
      },
      {
        "name": "算电协同",
        "change_pct": 0.45
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 13,
    "hot_rank_chg": -10,
    "stock_cnt": 5856,
    "price": "6.12",
    "change": "5.16",
    "market_id": "33",
    "circulate_market_value": "117088050000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.76
      },
      {
        "name": "手机产业链",
        "change_pct": 0.12
      },
      {
        "name": "超高清视频",
        "change_pct": 1.01
      },
      {
        "name": "半导体",
        "change_pct": -0.27
      },
      {
        "name": "OLED",
        "change_pct": 0.06
      },
      {
        "name": "光伏",
        "change_pct": 0.46
      },
      {
        "name": "黑色家电",
        "change_pct": 0.87
      },
      {
        "name": "家电",
        "change_pct": 1.5
      },
      {
        "name": "智能制造",
        "change_pct": 1.61
      },
      {
        "name": "工业互联网",
        "change_pct": 2.03
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.63
      },
      {
        "name": "国产芯片",
        "change_pct": -0.47
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.81
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.56
      },
      {
        "name": "MicroLED",
        "change_pct": -0.87
      },
      {
        "name": "MiniLED",
        "change_pct": 0.41
      },
      {
        "name": "华为产业链",
        "change_pct": 1.13
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.13
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 14,
    "hot_rank_chg": 4,
    "stock_cnt": 5856,
    "price": "9.40",
    "change": "1.07",
    "market_id": "33",
    "circulate_market_value": "15281522000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 3.01
      },
      {
        "name": "电竞",
        "change_pct": 0.95
      },
      {
        "name": "手游",
        "change_pct": 1.16
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "游戏",
        "change_pct": 1.97
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.4
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.81
      },
      {
        "name": "快手概念股",
        "change_pct": 2.41
      },
      {
        "name": "元宇宙",
        "change_pct": 2.41
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.56
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.59
      },
      {
        "name": "web3.0",
        "change_pct": 2.75
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.82
      },
      {
        "name": "数据要素",
        "change_pct": 2.64
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.97
      },
      {
        "name": "AI营销",
        "change_pct": 2.33
      },
      {
        "name": "ChatGPT",
        "change_pct": 2.14
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.17
      },
      {
        "name": "人工智能大模型",
        "change_pct": 2.13
      },
      {
        "name": "人形机器人",
        "change_pct": 1.71
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.0
      },
      {
        "name": "多模态",
        "change_pct": 2.13
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 2.56
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.77
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.68
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 42,
    "hot_rank_chg": -10,
    "stock_cnt": 5856,
    "price": "11.90",
    "change": "-1.00",
    "market_id": "33",
    "circulate_market_value": "48073380000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.27
      },
      {
        "name": "一带一路",
        "change_pct": 1.61
      },
      {
        "name": "京津冀",
        "change_pct": 2.3
      },
      {
        "name": "光伏",
        "change_pct": 0.46
      },
      {
        "name": "碳中和",
        "change_pct": 2.28
      },
      {
        "name": "国产芯片",
        "change_pct": -0.47
      },
      {
        "name": "IGBT",
        "change_pct": -1.56
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.56
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 1.11
      },
      {
        "name": "大硅片",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 47,
    "hot_rank_chg": -11,
    "stock_cnt": 5856,
    "price": "3.85",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "17986233000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 2.5
      },
      {
        "name": "房地产",
        "change_pct": 2.61
      },
      {
        "name": "京津冀",
        "change_pct": 2.3
      },
      {
        "name": "旅游",
        "change_pct": 2.91
      },
      {
        "name": "国产芯片",
        "change_pct": -0.47
      },
      {
        "name": "内存",
        "change_pct": -1.33
      },
      {
        "name": "闪存",
        "change_pct": -0.67
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.77
      }
    ]
  },
  {
    "code": "000783",
    "name": "长江证券",
    "hot_rank": 73,
    "hot_rank_chg": 255,
    "stock_cnt": 5856,
    "price": "10.54",
    "change": "8.10",
    "market_id": "33",
    "circulate_market_value": "58286969000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "期货概念",
        "change_pct": 5.09
      },
      {
        "name": "券商",
        "change_pct": 4.79
      },
      {
        "name": "大金融",
        "change_pct": 2.76
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 85,
    "hot_rank_chg": 41,
    "stock_cnt": 5856,
    "price": "12.97",
    "change": "-7.36",
    "market_id": "17",
    "circulate_market_value": "23205124000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 2.9
      },
      {
        "name": "纯碱",
        "change_pct": 2.03
      },
      {
        "name": "食品",
        "change_pct": 3.26
      },
      {
        "name": "土壤修复",
        "change_pct": 2.39
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.59
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.34
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.88
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 88,
    "hot_rank_chg": -12,
    "stock_cnt": 5856,
    "price": "5.49",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "7119078600.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "5",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 4.4
      },
      {
        "name": "创新药",
        "change_pct": 5.25
      },
      {
        "name": "央企改革",
        "change_pct": 1.6
      },
      {
        "name": "医疗器械",
        "change_pct": 3.78
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.01
      },
      {
        "name": "保健品",
        "change_pct": 3.57
      },
      {
        "name": "民营医院",
        "change_pct": 3.58
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 4.15
      },
      {
        "name": "医药",
        "change_pct": 4.52
      },
      {
        "name": "化学原料药",
        "change_pct": 4.85
      },
      {
        "name": "海南概念",
        "change_pct": 2.95
      },
      {
        "name": "脑科学",
        "change_pct": 3.21
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 3.07
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 3.19
      },
      {
        "name": "食品",
        "change_pct": 3.26
      },
      {
        "name": "国企改革",
        "change_pct": 2.13
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.75
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 3.48
      },
      {
        "name": "自贸区",
        "change_pct": 2.9
      },
      {
        "name": "合成生物",
        "change_pct": 4.43
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5856, "price": "8.77", "change": "1.04", "market_id": "33", "circulate_market_value": "310169770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "001399", "name": "惠科股份", "hot_rank": 2, "hot_rank_chg": 14, "stock_cnt": 5856, "price": "46.28", "change": "21.21", "market_id": "33", "circulate_market_value": "19926628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 4, "stock_cnt": 5856, "price": "32.10", "change": "10.01", "market_id": "17", "circulate_market_value": "67138504000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 4, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "106.64", "change": "2.98", "market_id": "17", "circulate_market_value": "190823170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 5, "hot_rank_chg": 14, "stock_cnt": 5856, "price": "55.42", "change": "-8.67", "market_id": "17", "circulate_market_value": "189145670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "62.26", "change": "-3.13", "market_id": "33", "circulate_market_value": "98006926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5856, "price": "59.94", "change": "-10.00", "market_id": "17", "circulate_market_value": "50742407000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 8, "hot_rank_chg": 62, "stock_cnt": 5856, "price": "7.79", "change": "10.03", "market_id": "17", "circulate_market_value": "96565534000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "绿电大基地", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.6}, {"name": "核电", "change_pct": 0.97}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "电力体制改革", "change_pct": 2.43}, {"name": "水电", "change_pct": 3.33}, {"name": "火电", "change_pct": 2.65}, {"name": "光伏", "change_pct": 0.46}, {"name": "风电", "change_pct": 1.03}, {"name": "国企改革", "change_pct": 2.13}, {"name": "算电协同", "change_pct": 0.45}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 9, "hot_rank_chg": 8, "stock_cnt": 5856, "price": "772.01", "change": "-5.28", "market_id": "17", "circulate_market_value": "516082460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": 15, "stock_cnt": 5856, "price": "101.93", "change": "-6.78", "market_id": "17", "circulate_market_value": "249237310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 11, "hot_rank_chg": 4, "stock_cnt": 5856, "price": "21.86", "change": "-2.02", "market_id": "33", "circulate_market_value": "72633167000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 12, "hot_rank_chg": -8, "stock_cnt": 5856, "price": "74.40", "change": "2.99", "market_id": "33", "circulate_market_value": "86081775000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 13, "hot_rank_chg": -10, "stock_cnt": 5856, "price": "6.12", "change": "5.16", "market_id": "33", "circulate_market_value": "117088050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.76}, {"name": "手机产业链", "change_pct": 0.12}, {"name": "超高清视频", "change_pct": 1.01}, {"name": "半导体", "change_pct": -0.27}, {"name": "OLED", "change_pct": 0.06}, {"name": "光伏", "change_pct": 0.46}, {"name": "黑色家电", "change_pct": 0.87}, {"name": "家电", "change_pct": 1.5}, {"name": "智能制造", "change_pct": 1.61}, {"name": "工业互联网", "change_pct": 2.03}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.63}, {"name": "国产芯片", "change_pct": -0.47}, {"name": "腾讯概念股", "change_pct": 1.81}, {"name": "液晶面板/LCD", "change_pct": 0.56}, {"name": "MicroLED", "change_pct": -0.87}, {"name": "MiniLED", "change_pct": 0.41}, {"name": "华为产业链", "change_pct": 1.13}, {"name": "玻璃基板封装", "change_pct": -1.13}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 14, "hot_rank_chg": 4, "stock_cnt": 5856, "price": "9.40", "change": "1.07", "market_id": "33", "circulate_market_value": "15281522000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 3.01}, {"name": "电竞", "change_pct": 0.95}, {"name": "手游", "change_pct": 1.16}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "人工智能", "change_pct": 2.08}, {"name": "游戏", "change_pct": 1.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.4}, {"name": "腾讯概念股", "change_pct": 1.81}, {"name": "快手概念股", "change_pct": 2.41}, {"name": "元宇宙", "change_pct": 2.41}, {"name": "虚拟数字人", "change_pct": 2.56}, {"name": "东数西算/算力", "change_pct": 1.59}, {"name": "web3.0", "change_pct": 2.75}, {"name": "AIGC概念", "change_pct": 1.82}, {"name": "数据要素", "change_pct": 2.64}, {"name": "字节跳动概念股", "change_pct": 1.97}, {"name": "AI营销", "change_pct": 2.33}, {"name": "ChatGPT", "change_pct": 2.14}, {"name": "智能眼镜/MR头显", "change_pct": 0.17}, {"name": "人工智能大模型", "change_pct": 2.13}, {"name": "人形机器人", "change_pct": 1.71}, {"name": "短剧/互动影游", "change_pct": 2.0}, {"name": "多模态", "change_pct": 2.13}, {"name": "Sora/AI视频", "change_pct": 2.56}, {"name": "IP经济/谷子经济", "change_pct": 2.77}, {"name": "小红书概念股", "change_pct": 1.68}]}, {"code": "002407", "name": "多氟多", "hot_rank": 15, "hot_rank_chg": -10, "stock_cnt": 5856, "price": "55.25", "change": "9.99", "market_id": "33", "circulate_market_value": "59601896000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半导体级氢氟酸涨价"}, {"code": "300059", "name": "东方财富", "hot_rank": 16, "hot_rank_chg": 202, "stock_cnt": 5856, "price": "21.45", "change": "5.25", "market_id": "33", "circulate_market_value": "286428190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 17, "hot_rank_chg": 14, "stock_cnt": 5856, "price": "79.84", "change": "2.89", "market_id": "17", "circulate_market_value": "61652398000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 18, "hot_rank_chg": -12, "stock_cnt": 5856, "price": "17.66", "change": "4.56", "market_id": "17", "circulate_market_value": "63358247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 19, "hot_rank_chg": 1, "stock_cnt": 5856, "price": "70.27", "change": "-3.58", "market_id": "17", "circulate_market_value": "281300420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 20, "hot_rank_chg": 9, "stock_cnt": 5856, "price": "19.84", "change": "-6.50", "market_id": "17", "circulate_market_value": "98982132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 21, "hot_rank_chg": -7, "stock_cnt": 5856, "price": "53.15", "change": "-2.76", "market_id": "17", "circulate_market_value": "88445419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 22, "hot_rank_chg": 93, "stock_cnt": 5856, "price": "54.47", "change": "5.91", "market_id": "33", "circulate_market_value": "82195830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 23, "hot_rank_chg": 179, "stock_cnt": 5856, "price": "136.92", "change": "-13.90", "market_id": "33", "circulate_market_value": "217364360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 24, "hot_rank_chg": 62, "stock_cnt": 5856, "price": "15.36", "change": "2.67", "market_id": "17", "circulate_market_value": "22620777000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 25, "hot_rank_chg": 17, "stock_cnt": 5856, "price": "193.40", "change": "8.16", "market_id": "17", "circulate_market_value": "49903195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 26, "hot_rank_chg": 28, "stock_cnt": 5856, "price": "246.31", "change": "-6.11", "market_id": "33", "circulate_market_value": "341464900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 27, "hot_rank_chg": 54, "stock_cnt": 5856, "price": "55.85", "change": "5.36", "market_id": "17", "circulate_market_value": "150780820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 28, "hot_rank_chg": -16, "stock_cnt": 5856, "price": "236.09", "change": "5.16", "market_id": "33", "circulate_market_value": "75200035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 29, "hot_rank_chg": -7, "stock_cnt": 5856, "price": "81.00", "change": "7.46", "market_id": "17", "circulate_market_value": "86877794000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 30, "hot_rank_chg": -17, "stock_cnt": 5856, "price": "24.66", "change": "3.18", "market_id": "33", "circulate_market_value": "82944035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 31, "hot_rank_chg": 2, "stock_cnt": 5856, "price": "73.91", "change": "-2.58", "market_id": "33", "circulate_market_value": "112154894000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 32, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "24.28", "change": "10.01", "market_id": "33", "circulate_market_value": "18421551000.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "锆产品涨价"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 33, "hot_rank_chg": 15, "stock_cnt": 5856, "price": "62.46", "change": "-7.44", "market_id": "17", "circulate_market_value": "91316195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 34, "hot_rank_chg": 33, "stock_cnt": 5856, "price": "1223.17", "change": "-3.69", "market_id": "33", "circulate_market_value": "1357645000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 35, "hot_rank_chg": -25, "stock_cnt": 5856, "price": "102.45", "change": "-4.46", "market_id": "17", "circulate_market_value": "149889920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 36, "hot_rank_chg": 270, "stock_cnt": 5856, "price": "17.43", "change": "4.94", "market_id": "33", "circulate_market_value": "26594369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 37, "hot_rank_chg": 24, "stock_cnt": 5856, "price": "70.00", "change": "-2.98", "market_id": "17", "circulate_market_value": "1389086500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 38, "hot_rank_chg": -8, "stock_cnt": 5856, "price": "173.55", "change": "-5.99", "market_id": "33", "circulate_market_value": "174415260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 39, "hot_rank_chg": 19, "stock_cnt": 5856, "price": "575.56", "change": "-5.18", "market_id": "33", "circulate_market_value": "721892190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 40, "hot_rank_chg": -14, "stock_cnt": 5856, "price": "29.65", "change": "-8.99", "market_id": "17", "circulate_market_value": "28007594000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 41, "hot_rank_chg": 6, "stock_cnt": 5856, "price": "145.01", "change": "-5.10", "market_id": "33", "circulate_market_value": "278826750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 42, "hot_rank_chg": -10, "stock_cnt": 5856, "price": "11.90", "change": "-1.00", "market_id": "33", "circulate_market_value": "48073380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.27}, {"name": "一带一路", "change_pct": 1.61}, {"name": "京津冀", "change_pct": 2.3}, {"name": "光伏", "change_pct": 0.46}, {"name": "碳中和", "change_pct": 2.28}, {"name": "国产芯片", "change_pct": -0.47}, {"name": "IGBT", "change_pct": -1.56}, {"name": "颗粒硅", "change_pct": 1.56}, {"name": "异质结电池HJT", "change_pct": 1.11}, {"name": "大硅片", "change_pct": 0.48}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 43, "hot_rank_chg": 40, "stock_cnt": 5856, "price": "29.59", "change": "-8.67", "market_id": "33", "circulate_market_value": "34811714000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 44, "hot_rank_chg": 2, "stock_cnt": 5856, "price": "16.39", "change": "-2.44", "market_id": "17", "circulate_market_value": "20917832000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 45, "hot_rank_chg": 6, "stock_cnt": 5856, "price": "137.98", "change": "-8.08", "market_id": "33", "circulate_market_value": "132009244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 46, "hot_rank_chg": -35, "stock_cnt": 5856, "price": "40.20", "change": "0.70", "market_id": "33", "circulate_market_value": "15086417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 47, "hot_rank_chg": -11, "stock_cnt": 5856, "price": "3.85", "change": "10.00", "market_id": "33", "circulate_market_value": "17986233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 2.5}, {"name": "房地产", "change_pct": 2.61}, {"name": "京津冀", "change_pct": 2.3}, {"name": "旅游", "change_pct": 2.91}, {"name": "国产芯片", "change_pct": -0.47}, {"name": "内存", "change_pct": -1.33}, {"name": "闪存", "change_pct": -0.67}, {"name": "IP经济/谷子经济", "change_pct": 2.77}]}, {"code": "600183", "name": "生益科技", "hot_rank": 48, "hot_rank_chg": 21, "stock_cnt": 5856, "price": "164.80", "change": "-4.96", "market_id": "17", "circulate_market_value": "394613850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 49, "hot_rank_chg": -9, "stock_cnt": 5856, "price": "242.43", "change": "-5.65", "market_id": "33", "circulate_market_value": "189216220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 50, "hot_rank_chg": 38, "stock_cnt": 5856, "price": "47.48", "change": "-6.81", "market_id": "33", "circulate_market_value": "72071337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 51, "hot_rank_chg": -7, "stock_cnt": 5856, "price": "63.80", "change": "1.38", "market_id": "17", "circulate_market_value": "20541889000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 52, "hot_rank_chg": 38, "stock_cnt": 5856, "price": "98.82", "change": "-4.23", "market_id": "33", "circulate_market_value": "84359534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 53, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "114.85", "change": "-4.43", "market_id": "33", "circulate_market_value": "75001142000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 54, "hot_rank_chg": 112, "stock_cnt": 5856, "price": "85.65", "change": "4.39", "market_id": "17", "circulate_market_value": "101280194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 55, "hot_rank_chg": 58, "stock_cnt": 5856, "price": "667.84", "change": "-5.11", "market_id": "33", "circulate_market_value": "188231970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 56, "hot_rank_chg": 88, "stock_cnt": 5856, "price": "285.00", "change": "-5.84", "market_id": "33", "circulate_market_value": "310190590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 57, "hot_rank_chg": 0, "stock_cnt": 5856, "price": "66.24", "change": "-5.91", "market_id": "33", "circulate_market_value": "483653220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 58, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "893.22", "change": "-5.27", "market_id": "33", "circulate_market_value": "147305220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 59, "hot_rank_chg": 47, "stock_cnt": 5856, "price": "125.20", "change": "0.55", "market_id": "17", "circulate_market_value": "309654690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300319", "name": "麦捷科技", "hot_rank": 60, "hot_rank_chg": 177, "stock_cnt": 5856, "price": "31.80", "change": "7.32", "market_id": "33", "circulate_market_value": "27070393000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300442", "name": "润泽科技", "hot_rank": 61, "hot_rank_chg": 147, "stock_cnt": 5856, "price": "90.06", "change": "8.41", "market_id": "33", "circulate_market_value": "147358730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 62, "hot_rank_chg": 27, "stock_cnt": 5856, "price": "315.89", "change": "1.93", "market_id": "17", "circulate_market_value": "362144670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 63, "hot_rank_chg": 17, "stock_cnt": 5856, "price": "18.29", "change": "-3.99", "market_id": "33", "circulate_market_value": "58996038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 64, "hot_rank_chg": 9, "stock_cnt": 5856, "price": "22.33", "change": "6.08", "market_id": "33", "circulate_market_value": "15460388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 65, "hot_rank_chg": 77, "stock_cnt": 5856, "price": "112.16", "change": "-5.95", "market_id": "33", "circulate_market_value": "92554459000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002106", "name": "莱宝高科", "hot_rank": 66, "hot_rank_chg": -29, "stock_cnt": 5856, "price": "18.05", "change": "3.02", "market_id": "33", "circulate_market_value": "12723489500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300033", "name": "同花顺", "hot_rank": 67, "hot_rank_chg": 392, "stock_cnt": 5856, "price": "258.00", "change": "7.05", "market_id": "33", "circulate_market_value": "113110016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 69, "hot_rank_chg": -9, "stock_cnt": 5856, "price": "148.50", "change": "-8.88", "market_id": "17", "circulate_market_value": "33364777000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 70, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "21.41", "change": "-1.25", "market_id": "33", "circulate_market_value": "12490848700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 71, "hot_rank_chg": 40, "stock_cnt": 5856, "price": "26.00", "change": "1.36", "market_id": "33", "circulate_market_value": "15468236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 72, "hot_rank_chg": -45, "stock_cnt": 5856, "price": "52.65", "change": "-2.27", "market_id": "17", "circulate_market_value": "34336840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000783", "name": "长江证券", "hot_rank": 73, "hot_rank_chg": 255, "stock_cnt": 5856, "price": "10.54", "change": "8.10", "market_id": "33", "circulate_market_value": "58286969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "期货概念", "change_pct": 5.09}, {"name": "券商", "change_pct": 4.79}, {"name": "大金融", "change_pct": 2.76}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 74, "hot_rank_chg": -8, "stock_cnt": 5856, "price": "111.36", "change": "-7.18", "market_id": "33", "circulate_market_value": "80659765000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300085", "name": "银之杰", "hot_rank": 75, "hot_rank_chg": 412, "stock_cnt": 5856, "price": "38.52", "change": "10.15", "market_id": "33", "circulate_market_value": "25115535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600673", "name": "东阳光", "hot_rank": 76, "hot_rank_chg": 424, "stock_cnt": 5856, "price": "36.94", "change": "10.01", "market_id": "17", "circulate_market_value": "110877550000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力大单"}, {"code": "600110", "name": "诺德股份", "hot_rank": 77, "hot_rank_chg": 39, "stock_cnt": 5856, "price": "15.33", "change": "1.59", "market_id": "17", "circulate_market_value": "26600324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 78, "hot_rank_chg": 65, "stock_cnt": 5856, "price": "259.05", "change": "4.08", "market_id": "33", "circulate_market_value": "109239890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 79, "hot_rank_chg": 51, "stock_cnt": 5856, "price": "22.72", "change": "1.07", "market_id": "17", "circulate_market_value": "11639243500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 80, "hot_rank_chg": 29, "stock_cnt": 5856, "price": "95.94", "change": "0.23", "market_id": "33", "circulate_market_value": "139393660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 81, "hot_rank_chg": -46, "stock_cnt": 5856, "price": "17.80", "change": "2.65", "market_id": "33", "circulate_market_value": "128154745000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 82, "hot_rank_chg": 82, "stock_cnt": 5856, "price": "170.46", "change": "2.13", "market_id": "33", "circulate_market_value": "318726780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 83, "hot_rank_chg": 19, "stock_cnt": 5856, "price": "508.51", "change": "-6.85", "market_id": "17", "circulate_market_value": "206627100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 84, "hot_rank_chg": -9, "stock_cnt": 5856, "price": "88.74", "change": "-4.22", "market_id": "33", "circulate_market_value": "58212556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 85, "hot_rank_chg": 41, "stock_cnt": 5856, "price": "12.97", "change": "-7.36", "market_id": "17", "circulate_market_value": "23205124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 2.9}, {"name": "纯碱", "change_pct": 2.03}, {"name": "食品", "change_pct": 3.26}, {"name": "土壤修复", "change_pct": 2.39}, {"name": "东数西算/算力", "change_pct": 1.59}, {"name": "OpenClaw概念", "change_pct": 1.34}, {"name": "DeepSeek概念股", "change_pct": 1.88}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 86, "hot_rank_chg": 60, "stock_cnt": 5856, "price": "164.84", "change": "-0.14", "market_id": "33", "circulate_market_value": "136654920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 87, "hot_rank_chg": -44, "stock_cnt": 5856, "price": "92.49", "change": "-5.60", "market_id": "17", "circulate_market_value": "56832644000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 88, "hot_rank_chg": -12, "stock_cnt": 5856, "price": "5.49", "change": "10.02", "market_id": "33", "circulate_market_value": "7119078600.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 4.4}, {"name": "创新药", "change_pct": 5.25}, {"name": "央企改革", "change_pct": 1.6}, {"name": "医疗器械", "change_pct": 3.78}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "互联网医疗", "change_pct": 3.01}, {"name": "保健品", "change_pct": 3.57}, {"name": "民营医院", "change_pct": 3.58}, {"name": "CAR-T疗法", "change_pct": 4.15}, {"name": "医药", "change_pct": 4.52}, {"name": "化学原料药", "change_pct": 4.85}, {"name": "海南概念", "change_pct": 2.95}, {"name": "脑科学", "change_pct": 3.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 3.07}, {"name": "海南自由贸易港", "change_pct": 3.19}, {"name": "食品", "change_pct": 3.26}, {"name": "国企改革", "change_pct": 2.13}, {"name": "医疗信息化", "change_pct": 2.75}, {"name": "新冠病毒防治", "change_pct": 3.48}, {"name": "自贸区", "change_pct": 2.9}, {"name": "合成生物", "change_pct": 4.43}]}, {"code": "300433", "name": "蓝思科技", "hot_rank": 89, "hot_rank_chg": 47, "stock_cnt": 5856, "price": "53.42", "change": "-0.45", "market_id": "33", "circulate_market_value": "265481370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 90, "hot_rank_chg": -16, "stock_cnt": 5856, "price": "44.21", "change": "0.87", "market_id": "33", "circulate_market_value": "162878370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300975", "name": "商络电子", "hot_rank": 91, "hot_rank_chg": -13, "stock_cnt": 5856, "price": "50.61", "change": "-2.20", "market_id": "33", "circulate_market_value": "24903829000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 92, "hot_rank_chg": -69, "stock_cnt": 5856, "price": "29.93", "change": "3.71", "market_id": "33", "circulate_market_value": "85601975000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 93, "hot_rank_chg": 35, "stock_cnt": 5856, "price": "14.93", "change": "-0.80", "market_id": "33", "circulate_market_value": "12078653500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 94, "hot_rank_chg": 236, "stock_cnt": 5856, "price": "36.98", "change": "5.69", "market_id": "33", "circulate_market_value": "140531070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600030", "name": "中信证券", "hot_rank": 95, "hot_rank_chg": 253, "stock_cnt": 5856, "price": "29.47", "change": "2.58", "market_id": "17", "circulate_market_value": "358842960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 96, "hot_rank_chg": -34, "stock_cnt": 5856, "price": "43.85", "change": "10.01", "market_id": "17", "circulate_market_value": "40808122000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "减持终止"}, {"code": "603459", "name": "红板科技", "hot_rank": 97, "hot_rank_chg": -59, "stock_cnt": 5856, "price": "104.69", "change": "-6.70", "market_id": "17", "circulate_market_value": "8275939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 98, "hot_rank_chg": 19, "stock_cnt": 5856, "price": "394.33", "change": "6.98", "market_id": "33", "circulate_market_value": "87192587000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 99, "hot_rank_chg": 143, "stock_cnt": 5856, "price": "53.78", "change": "3.34", "market_id": "17", "circulate_market_value": "343062740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 100, "hot_rank_chg": 73, "stock_cnt": 5856, "price": "463.07", "change": "-6.40", "market_id": "17", "circulate_market_value": "218368370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};