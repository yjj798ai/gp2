const UPDATE_TIME = "2026-07-01 11:20";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 4.71,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续68天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "猪肉",
    "rise": 6.98,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "存储芯片",
    "rise": 0.22,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续191天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "886042"
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
    "name": "光纤概念",
    "rise": -2.09,
    "rate": 0,
    "tag": "",
    "hotTag": "连续67天上榜",
    "rankChg": 0,
    "etfName": "工业40LOF",
    "code": "886084"
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
    "name": "PVDF概念",
    "rise": 5.59,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885931"
  }
];
const THS_EVENTS = [
  {
    "title": "优必选发布超仿生人形机器人",
    "desc": "",
    "heat": 733131,
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
    "title": "18 万一吨！被严重低估的电子氢氟酸，半导体的隐形护城河",
    "desc": "",
    "heat": 546524,
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
    "heat": 539022,
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
    "title": "八部门出台新政促工业互联网发展 明确2030年核心产业增加值将破2.5万亿元",
    "desc": "",
    "heat": 538342,
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
    "heat": 179257,
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
    "heat": 1075,
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
    "stock_cnt": 5851,
    "price": "8.77",
    "change": "1.04",
    "market_id": "33",
    "circulate_market_value": "310169770000.00",
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
        "name": "苹果产业链",
        "change_pct": -0.21
      },
      {
        "name": "半导体",
        "change_pct": -0.27
      },
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.01
      },
      {
        "name": "VR&AR",
        "change_pct": 0.75
      },
      {
        "name": "OLED",
        "change_pct": 0.06
      },
      {
        "name": "京津冀",
        "change_pct": 2.3
      },
      {
        "name": "物联网",
        "change_pct": 1.44
      },
      {
        "name": "指纹识别",
        "change_pct": -0.94
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.65
      },
      {
        "name": "白马股",
        "change_pct": 1.33
      },
      {
        "name": "智能制造",
        "change_pct": 1.61
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
        "name": "液晶面板/LCD",
        "change_pct": 0.56
      },
      {
        "name": "全息概念",
        "change_pct": 2.4
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.1
      },
      {
        "name": "MicroLED",
        "change_pct": -0.87
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.09
      },
      {
        "name": "智能手表",
        "change_pct": -0.22
      },
      {
        "name": "MiniLED",
        "change_pct": 0.41
      },
      {
        "name": "传感器",
        "change_pct": 1.34
      },
      {
        "name": "大硅片",
        "change_pct": 0.48
      },
      {
        "name": "AI PC",
        "change_pct": -0.34
      },
      {
        "name": "华为产业链",
        "change_pct": 1.13
      },
      {
        "name": "回购",
        "change_pct": 1.72
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.17
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 9,
    "hot_rank_chg": 61,
    "stock_cnt": 5851,
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
        "change_pct": 1.71
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
    "hot_rank": 14,
    "hot_rank_chg": -11,
    "stock_cnt": 5851,
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
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 16,
    "hot_rank_chg": 2,
    "stock_cnt": 5851,
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
        "change_pct": 1.71
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
        "change_pct": 1.85
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
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 33,
    "hot_rank_chg": 3,
    "stock_cnt": 5851,
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
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 37,
    "hot_rank_chg": 39,
    "stock_cnt": 5851,
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
        "change_pct": 1.71
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
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 50,
    "hot_rank_chg": -18,
    "stock_cnt": 5851,
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
    "code": "600500",
    "name": "中化国际",
    "hot_rank": 83,
    "hot_rank_chg": 295,
    "stock_cnt": 5851,
    "price": "7.96",
    "change": "1.66",
    "market_id": "17",
    "circulate_market_value": "28562918000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.6
      },
      {
        "name": "锂电池",
        "change_pct": 1.18
      },
      {
        "name": "环氧树脂",
        "change_pct": 1.31
      },
      {
        "name": "橡胶",
        "change_pct": 4.09
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.05
      },
      {
        "name": "环氧丙烷",
        "change_pct": 2.47
      },
      {
        "name": "动力电池回收",
        "change_pct": 1.69
      },
      {
        "name": "虫害防治",
        "change_pct": 2.93
      },
      {
        "name": "国企改革",
        "change_pct": 2.13
      },
      {
        "name": "电子树脂",
        "change_pct": 0.97
      }
    ]
  },
  {
    "code": "000783",
    "name": "长江证券",
    "hot_rank": 90,
    "hot_rank_chg": 238,
    "stock_cnt": 5851,
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
    "hot_rank": 96,
    "hot_rank_chg": 30,
    "stock_cnt": 5851,
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
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5851, "price": "8.77", "change": "1.04", "market_id": "33", "circulate_market_value": "310169770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.76}, {"name": "手机产业链", "change_pct": 0.12}, {"name": "超高清视频", "change_pct": 1.01}, {"name": "苹果产业链", "change_pct": -0.21}, {"name": "半导体", "change_pct": -0.27}, {"name": "人工智能", "change_pct": 2.08}, {"name": "互联网医疗", "change_pct": 3.01}, {"name": "VR&AR", "change_pct": 0.75}, {"name": "OLED", "change_pct": 0.06}, {"name": "京津冀", "change_pct": 2.3}, {"name": "物联网", "change_pct": 1.44}, {"name": "指纹识别", "change_pct": -0.94}, {"name": "汽车零部件", "change_pct": 1.65}, {"name": "白马股", "change_pct": 1.33}, {"name": "智能制造", "change_pct": 1.61}, {"name": "小米概念股", "change_pct": 0.63}, {"name": "国产芯片", "change_pct": -0.47}, {"name": "液晶面板/LCD", "change_pct": 0.56}, {"name": "全息概念", "change_pct": 2.4}, {"name": "理想汽车概念股", "change_pct": 2.1}, {"name": "MicroLED", "change_pct": -0.87}, {"name": "钙钛矿电池", "change_pct": 1.09}, {"name": "智能手表", "change_pct": -0.22}, {"name": "MiniLED", "change_pct": 0.41}, {"name": "传感器", "change_pct": 1.34}, {"name": "大硅片", "change_pct": 0.48}, {"name": "AI PC", "change_pct": -0.34}, {"name": "华为产业链", "change_pct": 1.13}, {"name": "回购", "change_pct": 1.72}, {"name": "智能眼镜/MR头显", "change_pct": 0.17}, {"name": "玻璃基板封装", "change_pct": -0.85}]}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5851, "price": "32.10", "change": "10.01", "market_id": "17", "circulate_market_value": "67138504000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片封测"}, {"code": "600206", "name": "有研新材", "hot_rank": 3, "hot_rank_chg": 5, "stock_cnt": 5851, "price": "59.94", "change": "-10.00", "market_id": "17", "circulate_market_value": "50742407000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 4, "hot_rank_chg": 5, "stock_cnt": 5851, "price": "106.64", "change": "2.98", "market_id": "17", "circulate_market_value": "190823170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 5, "hot_rank_chg": 11, "stock_cnt": 5851, "price": "46.28", "change": "21.21", "market_id": "33", "circulate_market_value": "19926628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5851, "price": "62.26", "change": "-3.13", "market_id": "33", "circulate_market_value": "98006926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 7, "hot_rank_chg": 12, "stock_cnt": 5851, "price": "55.42", "change": "-8.67", "market_id": "17", "circulate_market_value": "189145670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5851, "price": "55.25", "change": "9.99", "market_id": "33", "circulate_market_value": "59601896000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半导体级氢氟酸涨价"}, {"code": "601991", "name": "大唐发电", "hot_rank": 9, "hot_rank_chg": 61, "stock_cnt": 5851, "price": "7.79", "change": "10.03", "market_id": "17", "circulate_market_value": "96565534000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "绿电大基地", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.6}, {"name": "核电", "change_pct": 0.97}, {"name": "强势人气股", "change_pct": 1.71}, {"name": "电力体制改革", "change_pct": 2.43}, {"name": "水电", "change_pct": 3.33}, {"name": "火电", "change_pct": 2.65}, {"name": "光伏", "change_pct": 0.46}, {"name": "风电", "change_pct": 1.03}, {"name": "国企改革", "change_pct": 2.13}, {"name": "算电协同", "change_pct": 0.45}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 10, "hot_rank_chg": 7, "stock_cnt": 5851, "price": "772.01", "change": "-5.28", "market_id": "17", "circulate_market_value": "516082460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 11, "hot_rank_chg": 14, "stock_cnt": 5851, "price": "101.93", "change": "-6.78", "market_id": "17", "circulate_market_value": "249237310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5851, "price": "21.86", "change": "-2.02", "market_id": "33", "circulate_market_value": "72633167000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 13, "hot_rank_chg": -9, "stock_cnt": 5851, "price": "74.40", "change": "2.99", "market_id": "33", "circulate_market_value": "86081775000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 14, "hot_rank_chg": -11, "stock_cnt": 5851, "price": "6.12", "change": "5.16", "market_id": "33", "circulate_market_value": "117088050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.76}, {"name": "手机产业链", "change_pct": 0.12}, {"name": "超高清视频", "change_pct": 1.01}, {"name": "半导体", "change_pct": -0.27}, {"name": "OLED", "change_pct": 0.06}, {"name": "光伏", "change_pct": 0.46}, {"name": "黑色家电", "change_pct": 0.87}, {"name": "家电", "change_pct": 1.5}, {"name": "智能制造", "change_pct": 1.61}, {"name": "工业互联网", "change_pct": 2.03}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.63}, {"name": "国产芯片", "change_pct": -0.47}, {"name": "腾讯概念股", "change_pct": 1.81}, {"name": "液晶面板/LCD", "change_pct": 0.56}, {"name": "MicroLED", "change_pct": -0.87}, {"name": "MiniLED", "change_pct": 0.41}, {"name": "华为产业链", "change_pct": 1.13}, {"name": "玻璃基板封装", "change_pct": -0.85}]}, {"code": "603629", "name": "利通电子", "hot_rank": 15, "hot_rank_chg": 27, "stock_cnt": 5851, "price": "193.40", "change": "8.16", "market_id": "17", "circulate_market_value": "49903195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 16, "hot_rank_chg": 2, "stock_cnt": 5851, "price": "9.40", "change": "1.07", "market_id": "33", "circulate_market_value": "15281522000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 3.01}, {"name": "电竞", "change_pct": 0.95}, {"name": "手游", "change_pct": 1.16}, {"name": "强势人气股", "change_pct": 1.71}, {"name": "人工智能", "change_pct": 2.08}, {"name": "游戏", "change_pct": 1.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.4}, {"name": "腾讯概念股", "change_pct": 1.81}, {"name": "快手概念股", "change_pct": 2.41}, {"name": "元宇宙", "change_pct": 2.41}, {"name": "虚拟数字人", "change_pct": 2.56}, {"name": "东数西算/算力", "change_pct": 1.59}, {"name": "web3.0", "change_pct": 2.75}, {"name": "AIGC概念", "change_pct": 1.82}, {"name": "数据要素", "change_pct": 2.64}, {"name": "字节跳动概念股", "change_pct": 1.97}, {"name": "AI营销", "change_pct": 2.33}, {"name": "ChatGPT", "change_pct": 2.14}, {"name": "智能眼镜/MR头显", "change_pct": 0.17}, {"name": "人工智能大模型", "change_pct": 2.13}, {"name": "人形机器人", "change_pct": 1.85}, {"name": "短剧/互动影游", "change_pct": 2.0}, {"name": "多模态", "change_pct": 2.13}, {"name": "Sora/AI视频", "change_pct": 2.56}, {"name": "IP经济/谷子经济", "change_pct": 2.77}, {"name": "小红书概念股", "change_pct": 1.68}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 17, "hot_rank_chg": -11, "stock_cnt": 5851, "price": "17.66", "change": "4.56", "market_id": "17", "circulate_market_value": "63358247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 18, "hot_rank_chg": 4, "stock_cnt": 5851, "price": "81.00", "change": "7.46", "market_id": "17", "circulate_market_value": "86877794000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 19, "hot_rank_chg": -7, "stock_cnt": 5851, "price": "236.09", "change": "5.16", "market_id": "33", "circulate_market_value": "75200035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 20, "hot_rank_chg": 182, "stock_cnt": 5851, "price": "136.92", "change": "-13.90", "market_id": "33", "circulate_market_value": "217364360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 21, "hot_rank_chg": 10, "stock_cnt": 5851, "price": "79.84", "change": "2.89", "market_id": "17", "circulate_market_value": "61652398000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 22, "hot_rank_chg": -2, "stock_cnt": 5851, "price": "70.27", "change": "-3.58", "market_id": "17", "circulate_market_value": "281300420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 23, "hot_rank_chg": 5, "stock_cnt": 5851, "price": "24.28", "change": "10.01", "market_id": "33", "circulate_market_value": "18421551000.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "锆产品涨价"}, {"code": "600367", "name": "红星发展", "hot_rank": 24, "hot_rank_chg": 20, "stock_cnt": 5851, "price": "63.80", "change": "1.38", "market_id": "17", "circulate_market_value": "20541889000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 25, "hot_rank_chg": 4, "stock_cnt": 5851, "price": "19.84", "change": "-6.50", "market_id": "17", "circulate_market_value": "98982132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 26, "hot_rank_chg": -12, "stock_cnt": 5851, "price": "53.15", "change": "-2.76", "market_id": "17", "circulate_market_value": "88445419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 27, "hot_rank_chg": 27, "stock_cnt": 5851, "price": "246.31", "change": "-6.11", "market_id": "33", "circulate_market_value": "341464900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 28, "hot_rank_chg": 190, "stock_cnt": 5851, "price": "21.45", "change": "5.25", "market_id": "33", "circulate_market_value": "286428190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 29, "hot_rank_chg": -16, "stock_cnt": 5851, "price": "24.66", "change": "3.18", "market_id": "33", "circulate_market_value": "82944035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 30, "hot_rank_chg": 51, "stock_cnt": 5851, "price": "55.85", "change": "5.36", "market_id": "17", "circulate_market_value": "150780820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 31, "hot_rank_chg": 84, "stock_cnt": 5851, "price": "54.47", "change": "5.91", "market_id": "33", "circulate_market_value": "82195830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 32, "hot_rank_chg": 35, "stock_cnt": 5851, "price": "1223.17", "change": "-3.69", "market_id": "33", "circulate_market_value": "1357645000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 33, "hot_rank_chg": 3, "stock_cnt": 5851, "price": "3.85", "change": "10.00", "market_id": "33", "circulate_market_value": "17986233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 2.5}, {"name": "房地产", "change_pct": 2.61}, {"name": "京津冀", "change_pct": 2.3}, {"name": "旅游", "change_pct": 2.91}, {"name": "国产芯片", "change_pct": -0.47}, {"name": "内存", "change_pct": -1.33}, {"name": "闪存", "change_pct": -0.67}, {"name": "IP经济/谷子经济", "change_pct": 2.77}]}, {"code": "002156", "name": "通富微电", "hot_rank": 34, "hot_rank_chg": -1, "stock_cnt": 5851, "price": "73.91", "change": "-2.58", "market_id": "33", "circulate_market_value": "112154894000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 35, "hot_rank_chg": 51, "stock_cnt": 5851, "price": "15.36", "change": "2.67", "market_id": "17", "circulate_market_value": "22620777000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 36, "hot_rank_chg": -25, "stock_cnt": 5851, "price": "40.20", "change": "0.70", "market_id": "33", "circulate_market_value": "15086417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 37, "hot_rank_chg": 39, "stock_cnt": 5851, "price": "5.49", "change": "10.02", "market_id": "33", "circulate_market_value": "7119078600.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 4.4}, {"name": "创新药", "change_pct": 5.25}, {"name": "央企改革", "change_pct": 1.6}, {"name": "医疗器械", "change_pct": 3.78}, {"name": "强势人气股", "change_pct": 1.71}, {"name": "互联网医疗", "change_pct": 3.01}, {"name": "保健品", "change_pct": 3.57}, {"name": "民营医院", "change_pct": 3.58}, {"name": "CAR-T疗法", "change_pct": 4.15}, {"name": "医药", "change_pct": 4.52}, {"name": "化学原料药", "change_pct": 4.85}, {"name": "海南概念", "change_pct": 2.95}, {"name": "脑科学", "change_pct": 3.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 3.07}, {"name": "海南自由贸易港", "change_pct": 3.19}, {"name": "食品", "change_pct": 3.26}, {"name": "国企改革", "change_pct": 2.13}, {"name": "医疗信息化", "change_pct": 2.75}, {"name": "新冠病毒防治", "change_pct": 3.48}, {"name": "自贸区", "change_pct": 2.9}, {"name": "合成生物", "change_pct": 4.43}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 38, "hot_rank_chg": -28, "stock_cnt": 5851, "price": "102.45", "change": "-4.46", "market_id": "17", "circulate_market_value": "149889920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 39, "hot_rank_chg": 0, "stock_cnt": 5851, "price": "41.06", "change": "9.99", "market_id": "33", "circulate_market_value": "32125534000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 40, "hot_rank_chg": 8, "stock_cnt": 5851, "price": "62.46", "change": "-7.44", "market_id": "17", "circulate_market_value": "91316195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 41, "hot_rank_chg": -15, "stock_cnt": 5851, "price": "29.65", "change": "-8.99", "market_id": "17", "circulate_market_value": "28007594000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 42, "hot_rank_chg": 41, "stock_cnt": 5851, "price": "29.59", "change": "-8.67", "market_id": "33", "circulate_market_value": "34811714000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 43, "hot_rank_chg": 15, "stock_cnt": 5851, "price": "575.56", "change": "-5.18", "market_id": "33", "circulate_market_value": "721892190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 44, "hot_rank_chg": -14, "stock_cnt": 5851, "price": "173.55", "change": "-5.99", "market_id": "33", "circulate_market_value": "174415260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 45, "hot_rank_chg": 28, "stock_cnt": 5851, "price": "22.33", "change": "6.08", "market_id": "33", "circulate_market_value": "15460388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 46, "hot_rank_chg": 15, "stock_cnt": 5851, "price": "70.00", "change": "-2.98", "market_id": "17", "circulate_market_value": "1389086500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 47, "hot_rank_chg": 0, "stock_cnt": 5851, "price": "145.01", "change": "-5.10", "market_id": "33", "circulate_market_value": "278826750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 48, "hot_rank_chg": 3, "stock_cnt": 5851, "price": "137.98", "change": "-8.08", "market_id": "33", "circulate_market_value": "132009244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 49, "hot_rank_chg": -3, "stock_cnt": 5851, "price": "16.39", "change": "-2.44", "market_id": "17", "circulate_market_value": "20917832000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 50, "hot_rank_chg": -18, "stock_cnt": 5851, "price": "11.90", "change": "-1.00", "market_id": "33", "circulate_market_value": "48073380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.27}, {"name": "一带一路", "change_pct": 1.61}, {"name": "京津冀", "change_pct": 2.3}, {"name": "光伏", "change_pct": 0.46}, {"name": "碳中和", "change_pct": 2.28}, {"name": "国产芯片", "change_pct": -0.47}, {"name": "IGBT", "change_pct": -1.56}, {"name": "颗粒硅", "change_pct": 1.56}, {"name": "异质结电池HJT", "change_pct": 1.11}, {"name": "大硅片", "change_pct": 0.48}]}, {"code": "301308", "name": "江波龙", "hot_rank": 51, "hot_rank_chg": 62, "stock_cnt": 5851, "price": "667.84", "change": "-5.11", "market_id": "33", "circulate_market_value": "188231970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 52, "hot_rank_chg": 11, "stock_cnt": 5851, "price": "893.22", "change": "-5.27", "market_id": "33", "circulate_market_value": "147305220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002106", "name": "莱宝高科", "hot_rank": 53, "hot_rank_chg": -16, "stock_cnt": 5851, "price": "18.05", "change": "3.02", "market_id": "33", "circulate_market_value": "12723489500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300319", "name": "麦捷科技", "hot_rank": 54, "hot_rank_chg": 183, "stock_cnt": 5851, "price": "31.80", "change": "7.32", "market_id": "33", "circulate_market_value": "27070393000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 55, "hot_rank_chg": 5, "stock_cnt": 5851, "price": "148.50", "change": "-8.88", "market_id": "17", "circulate_market_value": "33364777000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 56, "hot_rank_chg": 250, "stock_cnt": 5851, "price": "17.43", "change": "4.94", "market_id": "33", "circulate_market_value": "26594369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 57, "hot_rank_chg": 12, "stock_cnt": 5851, "price": "164.80", "change": "-4.96", "market_id": "17", "circulate_market_value": "394613850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 58, "hot_rank_chg": 31, "stock_cnt": 5851, "price": "315.89", "change": "1.93", "market_id": "17", "circulate_market_value": "362144670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 59, "hot_rank_chg": 3, "stock_cnt": 5851, "price": "43.85", "change": "10.01", "market_id": "17", "circulate_market_value": "40808122000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "减持终止"}, {"code": "002281", "name": "光迅科技", "hot_rank": 60, "hot_rank_chg": -20, "stock_cnt": 5851, "price": "242.43", "change": "-5.65", "market_id": "33", "circulate_market_value": "189216220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 61, "hot_rank_chg": -9, "stock_cnt": 5851, "price": "114.85", "change": "-4.43", "market_id": "33", "circulate_market_value": "75001142000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 62, "hot_rank_chg": -5, "stock_cnt": 5851, "price": "66.24", "change": "-5.91", "market_id": "33", "circulate_market_value": "483653220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 63, "hot_rank_chg": 25, "stock_cnt": 5851, "price": "47.48", "change": "-6.81", "market_id": "33", "circulate_market_value": "72071337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 64, "hot_rank_chg": 42, "stock_cnt": 5851, "price": "125.20", "change": "0.55", "market_id": "17", "circulate_market_value": "309654690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 65, "hot_rank_chg": 25, "stock_cnt": 5851, "price": "98.82", "change": "-4.23", "market_id": "33", "circulate_market_value": "84359534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 66, "hot_rank_chg": 78, "stock_cnt": 5851, "price": "285.00", "change": "-5.84", "market_id": "33", "circulate_market_value": "310190590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 67, "hot_rank_chg": -1, "stock_cnt": 5851, "price": "111.36", "change": "-7.18", "market_id": "33", "circulate_market_value": "80659765000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 68, "hot_rank_chg": 43, "stock_cnt": 5851, "price": "26.00", "change": "1.36", "market_id": "33", "circulate_market_value": "15468236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 69, "hot_rank_chg": 33, "stock_cnt": 5851, "price": "508.51", "change": "-6.85", "market_id": "17", "circulate_market_value": "206627100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 70, "hot_rank_chg": 10, "stock_cnt": 5851, "price": "18.29", "change": "-3.99", "market_id": "33", "circulate_market_value": "58996038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 71, "hot_rank_chg": 95, "stock_cnt": 5851, "price": "85.65", "change": "4.39", "market_id": "17", "circulate_market_value": "101280194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 72, "hot_rank_chg": 70, "stock_cnt": 5851, "price": "112.16", "change": "-5.95", "market_id": "33", "circulate_market_value": "92554459000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 73, "hot_rank_chg": -46, "stock_cnt": 5851, "price": "52.65", "change": "-2.27", "market_id": "17", "circulate_market_value": "34336840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002326", "name": "永太科技", "hot_rank": 74, "hot_rank_chg": -24, "stock_cnt": 5851, "price": "26.02", "change": "10.02", "market_id": "33", "circulate_market_value": "21028298000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "600110", "name": "诺德股份", "hot_rank": 76, "hot_rank_chg": 40, "stock_cnt": 5851, "price": "15.33", "change": "1.59", "market_id": "17", "circulate_market_value": "26600324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 77, "hot_rank_chg": 97, "stock_cnt": 5851, "price": "32.22", "change": "-3.73", "market_id": "17", "circulate_market_value": "71507545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 78, "hot_rank_chg": -10, "stock_cnt": 5851, "price": "21.41", "change": "-1.25", "market_id": "33", "circulate_market_value": "12490848700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 79, "hot_rank_chg": -36, "stock_cnt": 5851, "price": "92.49", "change": "-5.60", "market_id": "17", "circulate_market_value": "56832644000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600673", "name": "东阳光", "hot_rank": 80, "hot_rank_chg": 420, "stock_cnt": 5851, "price": "36.94", "change": "10.01", "market_id": "17", "circulate_market_value": "110877550000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力大单"}, {"code": "000938", "name": "紫光股份", "hot_rank": 81, "hot_rank_chg": -58, "stock_cnt": 5851, "price": "29.93", "change": "3.71", "market_id": "33", "circulate_market_value": "85601975000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 82, "hot_rank_chg": -47, "stock_cnt": 5851, "price": "17.80", "change": "2.65", "market_id": "33", "circulate_market_value": "128154745000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600500", "name": "中化国际", "hot_rank": 83, "hot_rank_chg": 295, "stock_cnt": 5851, "price": "7.96", "change": "1.66", "market_id": "17", "circulate_market_value": "28562918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.6}, {"name": "锂电池", "change_pct": 1.18}, {"name": "环氧树脂", "change_pct": 1.31}, {"name": "橡胶", "change_pct": 4.09}, {"name": "新能源汽车", "change_pct": 1.05}, {"name": "环氧丙烷", "change_pct": 2.47}, {"name": "动力电池回收", "change_pct": 1.69}, {"name": "虫害防治", "change_pct": 2.93}, {"name": "国企改革", "change_pct": 2.13}, {"name": "电子树脂", "change_pct": 0.97}]}, {"code": "603938", "name": "三孚股份", "hot_rank": 84, "hot_rank_chg": 83, "stock_cnt": 5851, "price": "73.81", "change": "3.02", "market_id": "17", "circulate_market_value": "28241514000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 85, "hot_rank_chg": -47, "stock_cnt": 5851, "price": "104.69", "change": "-6.70", "market_id": "17", "circulate_market_value": "8275939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 86, "hot_rank_chg": 57, "stock_cnt": 5851, "price": "259.05", "change": "4.08", "market_id": "33", "circulate_market_value": "109239890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 87, "hot_rank_chg": 64, "stock_cnt": 5851, "price": "73.57", "change": "10.00", "market_id": "33", "circulate_market_value": "15929573000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力租赁"}, {"code": "603078", "name": "江化微", "hot_rank": 88, "hot_rank_chg": -35, "stock_cnt": 5851, "price": "52.66", "change": "6.56", "market_id": "17", "circulate_market_value": "20307657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 89, "hot_rank_chg": 20, "stock_cnt": 5851, "price": "95.94", "change": "0.23", "market_id": "33", "circulate_market_value": "139393660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000783", "name": "长江证券", "hot_rank": 90, "hot_rank_chg": 238, "stock_cnt": 5851, "price": "10.54", "change": "8.10", "market_id": "33", "circulate_market_value": "58286969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "期货概念", "change_pct": 5.09}, {"name": "券商", "change_pct": 4.79}, {"name": "大金融", "change_pct": 2.76}]}, {"code": "300346", "name": "南大光电", "hot_rank": 91, "hot_rank_chg": -16, "stock_cnt": 5851, "price": "88.74", "change": "-4.22", "market_id": "33", "circulate_market_value": "58212556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300033", "name": "同花顺", "hot_rank": 92, "hot_rank_chg": 367, "stock_cnt": 5851, "price": "258.00", "change": "7.05", "market_id": "33", "circulate_market_value": "113110016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300442", "name": "润泽科技", "hot_rank": 93, "hot_rank_chg": 115, "stock_cnt": 5851, "price": "90.06", "change": "8.41", "market_id": "33", "circulate_market_value": "147358730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 94, "hot_rank_chg": -70, "stock_cnt": 5851, "price": "1485.33", "change": "-6.91", "market_id": "17", "circulate_market_value": "933222400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 95, "hot_rank_chg": 22, "stock_cnt": 5851, "price": "394.33", "change": "6.98", "market_id": "33", "circulate_market_value": "87192587000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 96, "hot_rank_chg": 30, "stock_cnt": 5851, "price": "12.97", "change": "-7.36", "market_id": "17", "circulate_market_value": "23205124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 2.9}, {"name": "纯碱", "change_pct": 2.03}, {"name": "食品", "change_pct": 3.26}, {"name": "土壤修复", "change_pct": 2.39}, {"name": "东数西算/算力", "change_pct": 1.59}, {"name": "OpenClaw概念", "change_pct": 1.34}, {"name": "DeepSeek概念股", "change_pct": 1.88}]}, {"code": "603399", "name": "永杉锂业", "hot_rank": 97, "hot_rank_chg": 33, "stock_cnt": 5851, "price": "22.72", "change": "1.07", "market_id": "17", "circulate_market_value": "11639243500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 98, "hot_rank_chg": 144, "stock_cnt": 5851, "price": "53.78", "change": "3.34", "market_id": "17", "circulate_market_value": "343062740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 99, "hot_rank_chg": 231, "stock_cnt": 5851, "price": "36.98", "change": "5.69", "market_id": "33", "circulate_market_value": "140531070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 100, "hot_rank_chg": 28, "stock_cnt": 5851, "price": "14.93", "change": "-0.80", "market_id": "33", "circulate_market_value": "12078653500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002868", "name": "绿康生化", "price": 24.3, "change_pct": 10.0, "reason": "公司当前核心业务为动保产品生产和销售", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.14, "first_limit_up": 1782874236, "break_limit_up_times": 0}, {"code": "603363", "name": "傲农生物", "price": 2.95, "change_pct": 10.07, "reason": "公司主营业务包括饲料、养猪、食品和贸易，下属食品子公司如银祥肉业等有部分产品属于预制菜性质", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.19, "first_limit_up": 1782873505, "break_limit_up_times": 1}, {"code": "600119", "name": "*ST长投", "price": 4.48, "change_pct": 4.92, "reason": "公司年报及一季报业绩同比减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.04, "first_limit_up": 1782876189, "break_limit_up_times": 4}, {"code": "300607", "name": "拓斯达", "price": 49.48, "change_pct": 20.01, "reason": "公司有为华为及供应商提供工业机器人产品，以及围绕底层控制、AI工业机器人、具身智能等相关技术进行交流验证", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 15.02, "first_limit_up": 1782870345, "break_limit_up_times": 4}, {"code": "002268", "name": "电科网安", "price": 14.19, "change_pct": 10.0, "reason": "公司围绕卫星、终端、天地链路、地面设施等安全需求，打造数据密码机、星端安全组件等产品并实现应用，支撑国家卫星互联网建设", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.0, "first_limit_up": 1782869841, "break_limit_up_times": 1}, {"code": "000016", "name": "*ST康佳A", "price": 2.42, "change_pct": 5.22, "reason": "公司PCB业务为2025年唯一营收同比上涨板块", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.8, "first_limit_up": 1782869661, "break_limit_up_times": 1}, {"code": "603325", "name": "博隆技术", "price": 55.68, "change_pct": 10.0, "reason": "公司提供以气力输送为核心的粉粒体物料处理系统解决方案，在国内合成树脂领域合计市场占有率达到30%以上，已成功通过Tecnimont、Samsung等国际工程公司供应商资格审查，并在PGA、PMMA等新材料领域取得项目业绩", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.77, "first_limit_up": 1782882995, "break_limit_up_times": 1}, {"code": "000545", "name": "金浦钛业", "price": 2.62, "change_pct": 10.08, "reason": "国内较大的硫酸法钛白粉生产企业之一；公司利用硫酸法钛白粉副产的硫酸亚铁，在安徽（淮北）新型煤化工合成材料基地积极推进电池级磷酸铁等新能源电池材料一体化项目建设", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 9.23, "first_limit_up": 1782870816, "break_limit_up_times": 1}, {"code": "000820", "name": "*ST节能", "price": 2.86, "change_pct": 5.15, "reason": "公司一季度业绩同比减亏", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.67, "first_limit_up": 1782869400, "break_limit_up_times": 0}, {"code": "002193", "name": "ST如意", "price": 4.34, "change_pct": 5.08, "reason": "国内毛纺小龙头", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.38, "first_limit_up": 1782869424, "break_limit_up_times": 0}, {"code": "002052", "name": "同洲电子", "price": 8.55, "change_pct": 10.04, "reason": "公司高功率服务器电源已批量出货，氮化镓版本完成小批量验证，峰值效率>98%，切入AI服务器及数据中心供应链", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.46, "first_limit_up": 1782874050, "break_limit_up_times": 13}, {"code": "002717", "name": "*ST岭南", "price": 1.01, "change_pct": 5.21, "reason": "公司收到行政处罚事先告知书", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.07, "first_limit_up": 1782869502, "break_limit_up_times": 0}, {"code": "300561", "name": "汇金科技", "price": 16.94, "change_pct": 19.97, "reason": "国内金融行业内控风险管理整体解决方案的主要供应商之一，为逾500家省级分行和120000多个银行网点提供系统、产品和服务", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 14.84, "first_limit_up": 1782872103, "break_limit_up_times": 3}, {"code": "002468", "name": "申通快递", "price": 16.02, "change_pct": 10.03, "reason": "阿里系，国内最早成立的民营快递之一", "plates": ["快递物流"], "limit_up_days": 1, "turnover_ratio": 3.07, "first_limit_up": 1782869400, "break_limit_up_times": 16}, {"code": "000677", "name": "ST海龙", "price": 1.51, "change_pct": 4.86, "reason": "全资子公司拟收购群健航空不少于40%股权", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.05, "first_limit_up": 1782870753, "break_limit_up_times": 12}, {"code": "603351", "name": "威尔药业", "price": 26.85, "change_pct": 10.0, "reason": "公司是注射用药辅龙头", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.48, "first_limit_up": 1782885066, "break_limit_up_times": 2}, {"code": "001269", "name": "欧晶科技", "price": 22.86, "change_pct": 10.01, "reason": "公司36英寸半导体级石英坩埚已量产并为下游客户供货，实现进口替代，突破国产半导体应用技术壁垒", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1782871386, "break_limit_up_times": 1}, {"code": "000566", "name": "海南海药", "price": 5.49, "change_pct": 10.02, "reason": "海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 16.0, "first_limit_up": 1782882984, "break_limit_up_times": 0}, {"code": "000909", "name": "*ST数源", "price": 3.95, "change_pct": 5.05, "reason": "全资子公司拟挂牌转让温岭祥泰27.5%股权", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.22, "first_limit_up": 1782869412, "break_limit_up_times": 0}, {"code": "002514", "name": "*ST宝馨", "price": 2.36, "change_pct": 4.89, "reason": "参股公司海胶智能主要从事智能农业机器人研发、生产及销售等相关业务", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 6.64, "first_limit_up": 1782870606, "break_limit_up_times": 2}, {"code": "002547", "name": "*ST春兴", "price": 2.5, "change_pct": 5.04, "reason": "公司研发项目包括机器人取代人工上下料技术的研发", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.38, "first_limit_up": 1782870009, "break_limit_up_times": 0}, {"code": "605199", "name": "ST葫芦娃", "price": 5.45, "change_pct": 5.01, "reason": "公司地处海南，以儿科用药为发展特色，主要产品为小儿肺热咳喘颗粒、注射用盐酸溴己新、复方板蓝根颗粒等", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.56, "first_limit_up": 1782875713, "break_limit_up_times": 0}, {"code": "002691", "name": "*ST冀凯", "price": 4.17, "change_pct": 5.04, "reason": "公司产品防爆柴油机智能搬运机器人适用于准备巷道、掘进巷道等，钻锚机器人适用于煤矿、非煤矿山、隧道涵洞等巷道掘进工程中", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.28, "first_limit_up": 1782870876, "break_limit_up_times": 7}, {"code": "003007", "name": "直真科技", "price": 41.36, "change_pct": 10.0, "reason": "1、公司拥有数据中心智能运维软件系统产品，参加了电信运营商大型集团级数据中心、省级数据中心相关OSS系统的建设；\n2、公司承建“千帆星座”卫星互联网网络管理中心系统及“国网星座”运控流量预测系统已上线并通过专家评审，支撑卫星发射及在轨测试，深度参与天地一体化信息网络建设", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.74, "first_limit_up": 1782872991, "break_limit_up_times": 1}, {"code": "002982", "name": "湘佳股份", "price": 11.61, "change_pct": 10.05, "reason": "湖南禽类饲养龙头，子公司泰淼鲜丰建有1万头种猪养殖项目、20万头商品猪养殖场项目及年屠宰100万头生猪及肉制品深加工项目", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 8.55, "first_limit_up": 1782874182, "break_limit_up_times": 0}, {"code": "002592", "name": "ST八菱", "price": 6.17, "change_pct": 4.93, "reason": "公司25年净利润同比增长67.06%", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.09, "first_limit_up": 1782875844, "break_limit_up_times": 0}, {"code": "002971", "name": "和远气体", "price": 68.2, "change_pct": 10.0, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 21.21, "first_limit_up": 1782884364, "break_limit_up_times": 0}, {"code": "000925", "name": "众合科技", "price": 10.27, "change_pct": 9.96, "reason": "公司以庆阳时空大数据云中心为核心载体，联合生态伙伴共建时空大数据全国算力网络，算力总规模规划2000P，布局算力租赁", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 16.71, "first_limit_up": 1782885576, "break_limit_up_times": 6}, {"code": "002822", "name": "ST中装", "price": 3.36, "change_pct": 5.0, "reason": "公司申请撤销股票交易其他风险警示", "plates": ["ST股"], "limit_up_days": 7, "turnover_ratio": 1.1, "first_limit_up": 1782869421, "break_limit_up_times": 7}, {"code": "688571", "name": "杭华股份", "price": 10.5, "change_pct": 20.0, "reason": "股东TOKA拟将23.36%股份转让给青云汇", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 7.02, "first_limit_up": 1782871406, "break_limit_up_times": 6}, {"code": "600208", "name": "衢州发展", "price": 3.11, "change_pct": 9.89, "reason": "衢州国资委旗下的房地产开发商；公司拟购买先导电科95.46%股份，标的主营先进PVD溅射靶材和蒸镀材料业务", "plates": ["房地产", "国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.57, "first_limit_up": 1782870172, "break_limit_up_times": 2}, {"code": "002656", "name": "*ST摩登", "price": 2.82, "change_pct": 4.83, "reason": "公司控股股东及实控人拟发生变更为锐洋控股", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.74, "first_limit_up": 1782873702, "break_limit_up_times": 2}, {"code": "603330", "name": "天洋新材", "price": 8.51, "change_pct": 9.95, "reason": "公司电子胶板块光模块透镜固定用胶、底填胶等产品已经进入半导体及汽车电子领域小批量供货", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.49, "first_limit_up": 1782870975, "break_limit_up_times": 0}, {"code": "001256", "name": "炜冈科技", "price": 30.02, "change_pct": 10.0, "reason": "公司主要从事标签印刷设备的研产销，一季度净利润同比增长14.7%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.1, "first_limit_up": 1782869733, "break_limit_up_times": 0}, {"code": "605155", "name": "西大门", "price": 13.02, "change_pct": 9.97, "reason": "我国功能性遮阳材料细分领域的龙头，主要产品包括阳光面料、涂层面料和可调光面料等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1782882797, "break_limit_up_times": 0}, {"code": "300539", "name": "横河精密", "price": 24.44, "change_pct": 19.98, "reason": "1、公司主营精密塑料模具，已成功为客户开发了多款谐波减速器、扫地机器人减速箱；\n2、子公司海德欣已进入比亚迪主机厂一级供应商体系，为其开发与量产供应前端模块等轻量化应用产品；\n3、公司在汽车智能座舱领域主要合作客户有延锋集团、华为等，产品主要为传动、智能结构等相关精密结构件及模组", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.95, "first_limit_up": 1782871425, "break_limit_up_times": 0}, {"code": "600825", "name": "新华传媒", "price": 4.97, "change_pct": 9.96, "reason": "上海报业集团旗下，大股东下属界面公司等联合发布阶跃星辰大模型，后者近期发布 “AI小财神Pro” 智能体", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 2.71, "first_limit_up": 1782872855, "break_limit_up_times": 3}, {"code": "600233", "name": "圆通速递", "price": 17.33, "change_pct": 10.03, "reason": "阿里系，国内领先的综合性快递物流运营商，上半年净利润预计增长69.34%~85.73%", "plates": ["快递物流", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 0.35, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "000068", "name": "华控赛格", "price": 3.11, "change_pct": 9.89, "reason": "公司经营范围中涵盖工业机器人销售", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.96, "first_limit_up": 1782869991, "break_limit_up_times": 0}, {"code": "601162", "name": "天风证券", "price": 3.71, "change_pct": 10.09, "reason": " 天风国际获香港虚拟资产交易相关牌照", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 5.18, "first_limit_up": 1782872045, "break_limit_up_times": 1}, {"code": "002198", "name": "ST嘉应", "price": 3.18, "change_pct": 4.95, "reason": "公司主导产品双料喉风散、重感灵片为国家中药保护品种", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.92, "first_limit_up": 1782872232, "break_limit_up_times": 7}, {"code": "600857", "name": "宁波中百", "price": 21.91, "change_pct": 9.99, "reason": "宁波大型百货零售商店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.88, "first_limit_up": 1782872513, "break_limit_up_times": 1}, {"code": "002667", "name": "*ST威领", "price": 11.28, "change_pct": 5.03, "reason": "公司业务主要包括锂矿选矿、基础性锂电原料锂盐加工及冶炼业务等，通过收购嘉宇矿业74.3%股权，新增钨锡铅锌矿开采业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 8.64, "first_limit_up": 1782869400, "break_limit_up_times": 5}, {"code": "000603", "name": "盛达资源", "price": 25.41, "change_pct": 10.0, "reason": "公司预计中报净利润同比增长399.31%-470.64%，因“采矿及选矿能力有所提升，产能逐渐释放，2026年上半年度产品产销量增加；另外，叠加贵金属价格上涨，公司矿山主要产品销售价格较上年同期上涨，推动公司经营业绩同比显著增长”", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 7.77, "first_limit_up": 1782871695, "break_limit_up_times": 0}, {"code": "002883", "name": "*ST中设", "price": 8.55, "change_pct": 5.04, "reason": "无锡国资委旗下，围绕交通、市政、建筑、环境四大业务领域提供工程设计咨询和工程总承包两大类业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.25, "first_limit_up": 1782888828, "break_limit_up_times": 0}, {"code": "603738", "name": "泰晶科技", "price": 66.06, "change_pct": 10.01, "reason": "公司为国内晶振龙头，消息称公司对全系列晶振产品实施价格调整，各品类产品调涨区间为10%-30%", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 1.35, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "600423", "name": "*ST柳化", "price": 2.36, "change_pct": 4.89, "reason": "柳州市国资委旗下，广西最大的化肥化工生产企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.94, "first_limit_up": 1782873249, "break_limit_up_times": 5}, {"code": "002826", "name": "易明医药", "price": 16.53, "change_pct": 9.98, "reason": "聚焦心血管、糖尿病等慢性病的中药企业", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.4, "first_limit_up": 1782886602, "break_limit_up_times": 0}, {"code": "002124", "name": "天邦食品", "price": 2.32, "change_pct": 9.95, "reason": "公司养猪采用公司+家庭农场养殖模式，同时也是国内规模最大膨化水产饲料企业之一", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 6.84, "first_limit_up": 1782872253, "break_limit_up_times": 4}, {"code": "002175", "name": "*ST东智", "price": 2.37, "change_pct": 4.87, "reason": "公司控制权拟变更，碳基新材料商东泰能源欲以5.47亿元入主", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.06, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "600199", "name": "金种子酒", "price": 6.72, "change_pct": 9.98, "reason": "深耕安徽地区白酒企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.27, "first_limit_up": 1782874843, "break_limit_up_times": 0}, {"code": "002719", "name": "ST麦趣", "price": 6, "change_pct": 5.08, "reason": "新疆第四大乳品企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.66, "first_limit_up": 1782870039, "break_limit_up_times": 4}, {"code": "002407", "name": "多氟多", "price": 55.25, "change_pct": 9.99, "reason": "公司半导体级氢氟酸已稳定批量供应台积电、三星、华虹、长鑫存储等，同时规划六氟化钨等高端电子特气产线", "plates": ["国产芯片", "电子特气"], "limit_up_days": 3, "turnover_ratio": 6.57, "first_limit_up": 1782869490, "break_limit_up_times": 3}, {"code": "002207", "name": "*ST准油", "price": 6.72, "change_pct": 5.0, "reason": "公司主要从事油气藏综合研究、油气井测试业务、调剖、堵水、酸化、井下分注管柱等井下作业业务等", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.32, "first_limit_up": 1782870906, "break_limit_up_times": 9}, {"code": "000757", "name": "浩物股份", "price": 3.75, "change_pct": 9.97, "reason": "公司拟2亿元投建新能源汽车曲轴生产线", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.05, "first_limit_up": 1782874617, "break_limit_up_times": 2}, {"code": "002458", "name": "益生股份", "price": 8.55, "change_pct": 10.04, "reason": "公司是国内最大的祖代白羽肉种鸡养殖企业，另外拥有种猪和商品猪的饲养和销售业，预计中报净利润为2.7亿-3亿，同比增长4287%-4774%，主要系“白羽肉鸡行业景气度上行，公司主营的白羽肉鸡业务量价齐升，整体盈利水平显著增长。”", "plates": ["养猪", "养鸡", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 8.55, "first_limit_up": 1782869100, "break_limit_up_times": 1}, {"code": "301279", "name": "金道科技", "price": 26.08, "change_pct": 20.02, "reason": "公司主减速器产品以配套高端内燃叉车为主，终端客户主要面向海外市场，有投资者认为若公司能将叉车传动领域的技术经验迁移至工业机器人减速器，可能成为国产替代的潜在突破口", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1782871854, "break_limit_up_times": 0}, {"code": "600793", "name": "宜宾纸业", "price": 13.23, "change_pct": 9.98, "reason": "西南最大的食品包装原纸生产企业；公司主营业务有食品包装原纸、生活用纸原纸以及生活用纸成品纸的生产和销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.61, "first_limit_up": 1782872106, "break_limit_up_times": 0}, {"code": "603353", "name": "和顺石油", "price": 42.26, "change_pct": 9.99, "reason": "子公司奎芯科技在UCIe领域已开展相关IP研发与技术储备，聚焦高速互连与Chiplet生态，助力客户实现高带宽、低延迟及可扩展的系统设计", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.01, "first_limit_up": 1782873842, "break_limit_up_times": 0}, {"code": "000010", "name": "*ST美丽", "price": 1.79, "change_pct": 5.29, "reason": "公司在海南成立了算力运营公司，持股比例为32%，已开始运营，目前为智算中心设计、设备采购、施工和运营提供咨询和技术服务为主，逐渐扩充到调度服务和设备维保业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.17, "first_limit_up": 1782873066, "break_limit_up_times": 2}, {"code": "002559", "name": "亚威股份", "price": 13.98, "change_pct": 9.99, "reason": "1、参股公司威迈芯材正稳步推进光刻胶主材料产品的国产化进程，目前已经完成了国内客户订单的突破；威迈芯材全资子公司韩国WIMAS主要从事半导体高端光刻胶的核心主材料的研发、生产和销售；\n2、公司产品包含线性和水平多关节机器人", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 4.1, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "603212", "name": "赛伍技术", "price": 13.46, "change_pct": 9.97, "reason": "公司半导体材料业务覆盖晶圆制造、CMP抛光、晶圆研磨、先进封装等环节，提供一站式材料解决方案，产品包括应用于先进封装FC晶圆High Bump研磨胶带等", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 8.58, "first_limit_up": 1782882122, "break_limit_up_times": 7}, {"code": "002102", "name": "ST能特", "price": 2.25, "change_pct": 5.14, "reason": "公司医药中间体业务的主要产品包括孟鲁司特钠中间体、他汀系列中间体、维生素E中间体等；全资子公司能特科技已成为了生产维生素E中间体的领军企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.81, "first_limit_up": 1782875049, "break_limit_up_times": 0}, {"code": "002199", "name": "*ST东晶", "price": 11.9, "change_pct": 5.03, "reason": "公司一季度业绩同比减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.81, "first_limit_up": 1782873831, "break_limit_up_times": 8}, {"code": "002200", "name": "交投生态", "price": 6.6, "change_pct": 10.0, "reason": "公司被债权人申请重整及预重整", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.16, "first_limit_up": 1782874686, "break_limit_up_times": 0}, {"code": "601991", "name": "大唐发电", "price": 7.79, "change_pct": 10.03, "reason": "全资子公司西藏大唐国际怒江水电位于西藏自治区拉萨市，主要业务为水力发电", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 5.69, "first_limit_up": 1782882368, "break_limit_up_times": 0}, {"code": "600397", "name": "江钨装备", "price": 29.95, "change_pct": 9.99, "reason": "公司拟定增募资不超过19亿元，用于收购控股股东旗下江钨硬质合金、华茂钨材料及九江有色金属冶炼三家公司100%股权，拟注入钨制品及钽铌制品领域优质资产", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 4.2, "first_limit_up": 1782869818, "break_limit_up_times": 1}, {"code": "603120", "name": "肯特催化", "price": 58.69, "change_pct": 10.01, "reason": "1、公司四乙基氢氧化铵在半导体清洗领域已实现市场化应用；\n2、公司正在从事的主要研发项目包含环氧丙烷类催化剂的工艺开发，光刻胶显影液、刻蚀液已实现批量生产，四乙基氢氧化铵已在半导体清洗领域实现市场化应用", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 17.58, "first_limit_up": 1782870149, "break_limit_up_times": 6}, {"code": "002929", "name": "润建股份", "price": 73.57, "change_pct": 10.0, "reason": "投资建设五象云谷AI智算产业园——9.2万m²产业孵化空间，目前已吸引道客、智平方、云知声等30余家AI头部企业入驻", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 18.96, "first_limit_up": 1782882021, "break_limit_up_times": 12}, {"code": "002738", "name": "中矿资源", "price": 64.89, "change_pct": 10.0, "reason": "公司旗下合计年产6.5万吨锂盐生产线临时停产检修", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 2.77, "first_limit_up": 1782869454, "break_limit_up_times": 0}, {"code": "002455", "name": "百川股份", "price": 7.92, "change_pct": 10.0, "reason": "公司丙二醇甲醚醋酸酯的设计产能为5万吨/年，报道称光刻胶因丙二醇甲醚（PGME）和丙二醇甲醚醋酸酯（PGMEA）短缺供给受挫", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 6.51, "first_limit_up": 1782875241, "break_limit_up_times": 0}, {"code": "002109", "name": "ST兴化", "price": 2.53, "change_pct": 4.98, "reason": "公司主要产品为以煤为原料制成的合成氨、甲醇、甲胺及DMF，全资子公司兴化化工具备30万吨/年甲醇产能", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 0.47, "first_limit_up": 1782871572, "break_limit_up_times": 3}, {"code": "603021", "name": "*ST华鹏", "price": 6.92, "change_pct": 5.01, "reason": "公司25年同比亏损扩大", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.95, "first_limit_up": 1782873152, "break_limit_up_times": 4}, {"code": "002305", "name": "*ST南置", "price": 1.82, "change_pct": 5.2, "reason": "公司战略转型综合性城市运营服务商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.88, "first_limit_up": 1782870552, "break_limit_up_times": 0}, {"code": "688728", "name": "格科微", "price": 25.25, "change_pct": 20.01, "reason": "全球领先的图像传感器及显示驱动芯片设计企业", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 7.04, "first_limit_up": 1782884010, "break_limit_up_times": 24}, {"code": "600975", "name": "新五丰", "price": 4.74, "change_pct": 9.98, "reason": "湖南省国资委旗下，国内活大猪主要出口商之一，湖南唯一国有上市猪企", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 2.23, "first_limit_up": 1782873176, "break_limit_up_times": 2}, {"code": "603567", "name": "珍宝岛", "price": 4.82, "change_pct": 10.05, "reason": "公司拥有小儿热速清糖浆，可用于小儿外感风热所致的感冒", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.51, "first_limit_up": 1782882229, "break_limit_up_times": 0}, {"code": "603040", "name": "新坐标", "price": 69.38, "change_pct": 10.0, "reason": "公司为国内冷锻细分领域龙头，机构研究表示冷锻工艺效率高且成本低，最高加工精度可达C5级，有望助力行星滚柱丝杠批量量产，公司拓展冷成形技术在驻车滚珠丝杠等精密冷成形件的多领域延伸运用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.8, "first_limit_up": 1782876175, "break_limit_up_times": 0}, {"code": "605178", "name": "时空科技", "price": 104.3, "change_pct": 10.0, "reason": "公司拟收购嘉合劲威，切入存储领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.92, "first_limit_up": 1782869872, "break_limit_up_times": 1}, {"code": "300852", "name": "四会富仕", "price": 83.09, "change_pct": 20.0, "reason": "公司专注于印制电路板小、中、大批量板的制造，5G领域产品主要应用于路由器、交换机等；应用于新能源汽车的激光雷达产品已接入小批量量产订单", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 13.89, "first_limit_up": 1782888852, "break_limit_up_times": 0}, {"code": "605488", "name": "福莱新材", "price": 31.2, "change_pct": 10.01, "reason": "1、电子皮肤在人形机器人用途有身体关节的防碰撞、灵巧手等，公司全资子公司浙江欧仁新材料拥有传感器专利，分别是基于柔性压敏元件的拉伸传感器、一种柔性温度传感器及其制备方法等；\n2、目前公司电子级功能材料主要应用于苹果、华为、三星及国内知名高端品牌手机的无线充电模组及石墨散热模块", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.93, "first_limit_up": 1782871233, "break_limit_up_times": 0}, {"code": "603991", "name": "领先股份", "price": 155.27, "change_pct": 10.0, "reason": "控股51%子公司苏州桔云主要产品用于半导体后道先进封装领域，包括涂胶显影设备、清洗设备等", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 15.38, "first_limit_up": 1782870598, "break_limit_up_times": 33}, {"code": "002123", "name": "梦网科技", "price": 7.91, "change_pct": 10.01, "reason": "公司成立梦网云智算子公司，以GPU、AI芯片为核心打造全栈云算力服务平台，具备算力资源纳管、调度到运营的全生命周期管理能力，面向大模型客户提供一站式AI算力服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.02, "first_limit_up": 1782883773, "break_limit_up_times": 0}, {"code": "603359", "name": "*ST东珠", "price": 2.17, "change_pct": 4.83, "reason": "1、公司为迪洛斯战略股东，后者旗下具身机器人亮相，一款约20个自由度的陪伴类机器人；\n2、公司拟跨界并购凯睿星通，标的主要产品包括卫星通信基带产品、卫星通信终端产品、卫星通信网络管理系统及卫星应用系统等", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.2, "first_limit_up": 1782870072, "break_limit_up_times": 2}, {"code": "002840", "name": "华统股份", "price": 8.02, "change_pct": 10.01, "reason": "1、A股目前最纯屠宰股，浙江省第二大屠宰企业，年生猪屠宰量在百万级别，构建了全国生猪采购平台；定增申请获深交所审核通过；\n2、禽类养殖主要由绿发农业负责，育成肉鸡大部分销售给公司用于屠宰，少量对外出售", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 2.93, "first_limit_up": 1782874164, "break_limit_up_times": 0}, {"code": "600543", "name": "*ST莫高", "price": 3.97, "change_pct": 5.03, "reason": "实控人甘肃省国资委，公司主营葡萄种植及葡萄酒", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.18, "first_limit_up": 1782882343, "break_limit_up_times": 1}, {"code": "300345", "name": "华民股份", "price": 7.01, "change_pct": 20.03, "reason": "控股子公司鸿新新能源成功实现超大尺寸半导体专用硅棒产品的研发、拉制与供应，最大直径可达450mm，在半导体设备用硅部件领域取得新突破", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 20.61, "first_limit_up": 1782882309, "break_limit_up_times": 24}, {"code": "603166", "name": "福达股份", "price": 14.71, "change_pct": 10.02, "reason": "公司进行机器人关键零部件产品的研发，并结合现有精密齿轮生产能力，在机器人减速器产品上已获得相应成果", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.44, "first_limit_up": 1782871246, "break_limit_up_times": 0}, {"code": "002881", "name": "美格智能", "price": 40.08, "change_pct": 9.99, "reason": "公司5G模组已用于国内人形机器人并小批量发货，高算力AI模组为合作伙伴人形机器人原型机提供端侧AI算力", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.03, "first_limit_up": 1782884355, "break_limit_up_times": 19}, {"code": "600182", "name": "S佳通", "price": 13.48, "change_pct": 4.98, "reason": "公司股改方案仍未确定，非流通股股东尚未达成共识", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.56, "first_limit_up": 1782873106, "break_limit_up_times": 5}, {"code": "600826", "name": "兰生股份", "price": 9.67, "change_pct": 10.01, "reason": "上海市国资委旗下，公司承办的世界人工智能大会、中国国际工业博览会等展会有机器人相关展区", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.09, "first_limit_up": 1782882181, "break_limit_up_times": 19}, {"code": "600673", "name": "东阳光", "price": 36.94, "change_pct": 10.01, "reason": "公司拟80亿全资控股秦淮数据", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.02, "first_limit_up": 1782883128, "break_limit_up_times": 6}, {"code": "002442", "name": "龙星科技", "price": 5.42, "change_pct": 9.94, "reason": "国内炭黑行业骨干企业，产量规模国内第三，有储备导电炭黑技术，据网络资料，高端炭黑是人形机器人电子皮肤必不可少材料；董事长刘鹏达增持0.33%股份", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.22, "first_limit_up": 1782874413, "break_limit_up_times": 2}, {"code": "603173", "name": "福斯达", "price": 37.29, "change_pct": 10.0, "reason": "公司主要从事深冷装备，“基于全精馏技术的场效应晶体管专用高纯制氧成套设备”荣获国内首台套称号，该超高纯氧制取技术已达国际先进水平，成套设备已在半导体领域有成功应用项目", "plates": ["电子特气"], "limit_up_days": 1, "turnover_ratio": 1.7, "first_limit_up": 1782871310, "break_limit_up_times": 0}, {"code": "002635", "name": "安洁科技", "price": 22.5, "change_pct": 10.02, "reason": "1、公司拟现金收购光模块领域公司苏州志烽51%股权；\n2、正利用新能源汽车精密结构件技术经验，推进人形机器人相关零部件的技术拓展和业务规划", "plates": ["资产重组", "光通信"], "limit_up_days": 1, "turnover_ratio": 1.45, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "600581", "name": "*ST八钢", "price": 2.18, "change_pct": 4.81, "reason": "公司拟剥离焦煤集团至控股股东", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.95, "first_limit_up": 1782875740, "break_limit_up_times": 0}, {"code": "603682", "name": "锦和商管", "price": 8.14, "change_pct": 10.0, "reason": "商用物业全价值链集成服务商；公司主营业务为城市老旧物业、低效存量商用物业的定位设计、改造、招商、运营和服务", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1782872436, "break_limit_up_times": 1}, {"code": "300175", "name": "朗源股份", "price": 5.56, "change_pct": 20.09, "reason": "国内果品加工行业龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.78, "first_limit_up": 1782873546, "break_limit_up_times": 0}, {"code": "002759", "name": "天际股份", "price": 26.83, "change_pct": 10.0, "reason": "公司六氟磷酸锂产能位居行业前列，互动平台表示密切关注固态电池的技术路线，制定相关材料的研发方向，以应对及配套以后固态电池的发展", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 10.19, "first_limit_up": 1782875601, "break_limit_up_times": 7}, {"code": "002569", "name": "*ST步森", "price": 14.78, "change_pct": 4.97, "reason": "公司25年净利润同比扭亏为盈", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.4, "first_limit_up": 1782869100, "break_limit_up_times": 1}, {"code": "002232", "name": "启明信息", "price": 14.92, "change_pct": 10.03, "reason": "公司“具身智能机器人创新探索”项目聚焦具身智能核心场景及端到端服务能力的研发，探索在制造业业务场景的规模化应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 0.93, "first_limit_up": 1782869646, "break_limit_up_times": 0}, {"code": "603595", "name": "ST东尼", "price": 35.04, "change_pct": 5.0, "reason": "无线充电材料及器件领先厂商，主要包括超微细电子线材、无线充电隔磁材料", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.82, "first_limit_up": 1782869433, "break_limit_up_times": 0}, {"code": "002542", "name": "*ST中岩", "price": 1.19, "change_pct": 5.31, "reason": "公司的强夯机与盾构机等专用设备制造、地基处理、基坑支护、 地下连续墙、盾构掘进、矩形顶管等施工工艺技术保持国内领先国际先进水平", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.51, "first_limit_up": 1782870165, "break_limit_up_times": 1}, {"code": "001399", "name": "C惠科", "price": 46.28, "change_pct": 21.22, "reason": "", "plates": [], "limit_up_days": 2, "turnover_ratio": 51.05, "first_limit_up": 1782875646, "break_limit_up_times": 0}, {"code": "000876", "name": "新 希 望", "price": 6.9, "change_pct": 10.05, "reason": "公司拥有全国最大的聚落式生猪繁育体系；同时也是国内第一大父母代鸭苗，第二大商品代鸡苗、鸭苗供应商", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 1.82, "first_limit_up": 1782873651, "break_limit_up_times": 1}, {"code": "002167", "name": "东方锆业", "price": 24.28, "change_pct": 10.01, "reason": "1、公司主要从事锆系列制品，产品涵盖锆英砂、钛精矿等，在澳大利亚开采的明达里矿区为海滨砂矿（锆钛铪伴生）；\n2、公司涉及稀土的产品为分选澳大利亚开采的重矿物得到的副产品独居石，独居石约占重矿物重量的1%-2.5%，独居石内含有各种稀土元素的氧化物，如氧化钍、氧化镧、氧化铈、氧化钕等", "plates": ["有色金属"], "limit_up_days": 2, "turnover_ratio": 21.82, "first_limit_up": 1782869535, "break_limit_up_times": 44}, {"code": "600180", "name": "*ST瑞茂", "price": 1.31, "change_pct": 4.8, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 3.34, "first_limit_up": 1782869101, "break_limit_up_times": 1}, {"code": "600076", "name": "康欣新材", "price": 3.64, "change_pct": 9.97, "reason": "1、公司收购宇邦半导体相关股权已于2026年4月完成工商变更登记，并将其纳入合并财务报表范围；\n2、集装箱底板龙头；公司聚焦空天等前沿领域，投资垣信卫星等项目，还与中航通飞、徐工等合作推进优质项目", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 1.85, "first_limit_up": 1782869507, "break_limit_up_times": 0}, {"code": "603789", "name": "ST星农", "price": 5.76, "change_pct": 4.92, "reason": "公司控股股东拟变更为玖元亨通", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.17, "first_limit_up": 1782869101, "break_limit_up_times": 0}, {"code": "600845", "name": "宝信软件", "price": 18.29, "change_pct": 9.98, "reason": "中国领先的工业软件行业应用解决方案和服务提供商；公司具备新一代信息基础设施服务全生命周期管理与服务能力，依托“东数西算”产业政策，围绕国家算力枢纽节点、重点区域、重点客户的需求，进行算力和云计算节点的布局建设，为用户提供融合高品质数据中心、云计算、网络安全等服务的信息基础设施综合解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 0.93, "first_limit_up": 1782869857, "break_limit_up_times": 0}, {"code": "603189", "name": "*ST网达", "price": 10.91, "change_pct": 5.0, "reason": "公司基于云厂商的公有云能力构建融媒业务系统，结合云原生的架构，实现与云厂商的优势互补，逐渐把媒资系统、运营系统、直播管理系统、社交互动系统改造为云SaaS服务，能够基于云市场销售和推广，成为云市场的垂直领域的应用解决方案提供者", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.78, "first_limit_up": 1782875480, "break_limit_up_times": 12}, {"code": "000609", "name": "*ST中迪", "price": 13.43, "change_pct": 5.0, "reason": "公司关联方深圳天微电子拟将其持有的广西天微电子有限公司70%股权无偿赠与公司", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1782876345, "break_limit_up_times": 1}, {"code": "002277", "name": "友阿股份", "price": 6.48, "change_pct": 10.02, "reason": "公司正全力推进收购深圳尚阳通100%股权，交易完成后将形成“百货零售+半导体”双主业格局，标的已量产车规级SiC功率器件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.09, "first_limit_up": 1782871035, "break_limit_up_times": 4}, {"code": "603014", "name": "威高血净", "price": 36, "change_pct": 9.99, "reason": "公司发行股份购买威高普瑞100%股权事项更新了重组报告书修订稿及审核问询函回复，相关议案已于6月9日经董事会审议通过，后者是国内首家取得预灌封注射器注册证的企业，核心产品涵盖预灌封注射器全系列、卡式瓶及自动注射笔等，广泛应用于疫苗、生物制剂、医美等领域", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 3.48, "first_limit_up": 1782869808, "break_limit_up_times": 2}, {"code": "603718", "name": "*ST海利", "price": 2.78, "change_pct": 4.91, "reason": "公司主营畜牧用疫苗，全资子公司捷门生物主营体外诊断试剂生产销售", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.2, "first_limit_up": 1782873432, "break_limit_up_times": 2}, {"code": "600885", "name": "宏发股份", "price": 37.94, "change_pct": 10.0, "reason": "中国继电器行业龙头企业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1782883519, "break_limit_up_times": 2}, {"code": "300487", "name": "蓝晓科技", "price": 70.62, "change_pct": 20.0, "reason": "1、公司为国内领先的存储芯片制造商稳定供应电子级超纯水树脂，产品在多条产线实现常态化应用，进一步巩固了电子级超纯水领域的竞争优势；\n2、国内吸附树脂龙头，专注吸附分离材料，年产树脂1.5万吨，提供吸附分离装置百余套；设备可用于盐湖提锂；藏格项目已完成8条线的运行调试并取得客户验收确认", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.39, "first_limit_up": 1782872148, "break_limit_up_times": 8}, {"code": "600734", "name": "*ST实达", "price": 1.62, "change_pct": 5.19, "reason": "公司位于福建福州，拟以1.846亿元收购福建数产名商95%股权，标的已投运2000P智算中心，交易完成后将强化公司在智能算力领域布局", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.22, "first_limit_up": 1782869895, "break_limit_up_times": 9}, {"code": "600053", "name": "*ST九鼎", "price": 7.99, "change_pct": 4.99, "reason": "公司拟2.13亿收购南京神源生智能科技53.29%股权，将切入机器人产业链关键环节", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.62, "first_limit_up": 1782876446, "break_limit_up_times": 2}, {"code": "002403", "name": "爱仕达", "price": 9.81, "change_pct": 9.98, "reason": "控股子公司浙江钱江机器人有限公司与鸿路钢构签署《设备采购框架合作协议》，结成战略合作伙伴关系，并进行设备采购合作，鸿路钢构指定钱江机器人作为其长期合作的机器人等装备的制造基地，并在同等条件下给予用于钢结构制造的焊接、喷涂等装备、设备招投标同等条件优先采购优惠", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.48, "first_limit_up": 1782875019, "break_limit_up_times": 0}, {"code": "603131", "name": "上海沪工", "price": 18.72, "change_pct": 9.99, "reason": "公司的航天业务板块由两部分构成，华宇科技为航天装备制造平台、沪航卫星科技为卫星业务平台；公司具备专业的商业卫星AIT生产能力，可同时在线装配多颗50KG以下的商业卫星；一季度净利润同比增长39.52%", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 4.18, "first_limit_up": 1782875793, "break_limit_up_times": 0}, {"code": "001331", "name": "胜通能源", "price": 62.02, "change_pct": 10.0, "reason": "公司控股股东将变更为七腾机器人", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 5.04, "first_limit_up": 1782875289, "break_limit_up_times": 8}, {"code": "002930", "name": "宏川智慧", "price": 10.12, "change_pct": 10.0, "reason": "子公司宏川智算完成一批企业级DDR5内存条交付，已顺利送达至国内某头部GPU设计厂商，用于其AI算力芯片的服务器验证与算力中心建设", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.81, "first_limit_up": 1782883761, "break_limit_up_times": 0}, {"code": "002856", "name": "*ST美芝", "price": 20.28, "change_pct": 5.02, "reason": "公司主要业务为建筑装饰工程的设计与施工，承接项目类型主要有公共建筑装饰、住宅精装修和幕墙装饰；一季报净利润同比减亏", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 2.67, "first_limit_up": 1782869100, "break_limit_up_times": 10}, {"code": "000795", "name": "英洛华", "price": 9.52, "change_pct": 10.06, "reason": "1、公司专业生产烧结、粘结钕铁硼永磁材料及磁性组件，现有横店和赣州两个钕铁硼生产基地；\n2、公司钕铁硼磁性材料以及电机产品可应用于工业机器人等领域；公司具备行星减速器的量产能力，目前有小批量应用于工业机器人领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.13, "first_limit_up": 1782869796, "break_limit_up_times": 1}, {"code": "002747", "name": "埃斯顿", "price": 41.06, "change_pct": 9.99, "reason": "国产工业机器人龙头；公司通过参股埃斯顿酷卓对人形机器人产品进行前期布局，酷卓的首发人形机器人CODROID 01已于今年工博会上进行展示，并正在进行下一轮的设计与小批量工业场景验证，配合工业机器人在智能生产线和智能工厂中进行应用", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 6.92, "first_limit_up": 1782869508, "break_limit_up_times": 3}, {"code": "000639", "name": "ST西王", "price": 1.16, "change_pct": 5.45, "reason": "控股股东所持公司18.53%股份将被司法变卖，或导致实控人变更", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.15, "first_limit_up": 1782869979, "break_limit_up_times": 1}, {"code": "600909", "name": "华安证券", "price": 12.22, "change_pct": 9.99, "reason": "公司通过安徽安华创新五期及皖投安华参股长鑫科技，截至2025年6月30日，安华创新五期总净值11.52亿元，公司自有资金期末份额50%；公司持有皖投安华20%份额，皖投安华专项用于投资国家集成电路产业投资基金二期股份有限公司", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 4.25, "first_limit_up": 1782871654, "break_limit_up_times": 0}, {"code": "601718", "name": "ST际华", "price": 1.51, "change_pct": 4.86, "reason": "中国军队、武警部队军需品采购的核心供应商；公司具备核污染防治相关技术储备和产业基础，核污染防护产品有全套核污染防护服、鞋等", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.1, "first_limit_up": 1782872020, "break_limit_up_times": 2}, {"code": "603429", "name": "*ST集友", "price": 8.39, "change_pct": 5.01, "reason": "国内较早烟用接装纸专业生产厂商之一；控股子公司集新能源固态电池关键材料研发中试基地正在建设，并与潜在客户进行技术对接、商务洽谈", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.03, "first_limit_up": 1782869684, "break_limit_up_times": 1}, {"code": "000669", "name": "ST金鸿", "price": 3.73, "change_pct": 5.07, "reason": "公司燃气特许经营权，目前主要集中在湖南省衡阳市；预计2025年盈利1200万元-1800万元，同比扭亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.39, "first_limit_up": 1782888171, "break_limit_up_times": 0}, {"code": "002607", "name": "中公教育", "price": 1.98, "change_pct": 10.0, "reason": "国内领先的全品类职业教育机构，推出行业首款AI就业学习机并配套高端就业服务", "plates": ["教育"], "limit_up_days": 1, "turnover_ratio": 7.19, "first_limit_up": 1782871566, "break_limit_up_times": 0}, {"code": "603948", "name": "建业股份", "price": 26.51, "change_pct": 10.0, "reason": "公司电子化学品板块主要产品包括电子特气超纯氨及湿电子化学品，应用于LED、太阳能、集成电路、半导体等领域，超纯氨已形成年产21,000吨的生产能力，产品质量达到7N等级", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.02, "first_limit_up": 1782870166, "break_limit_up_times": 0}, {"code": "603379", "name": "三美股份", "price": 83.48, "change_pct": 10.0, "reason": "1、氟制冷剂的专业制造商，氢氟烃制冷剂HFC-134a龙头；\n2、合资公司盛美锂电（持股49%）年产3000t/a双氟磺酰亚胺锂（LiFSI）项目，一期为500t/a，已开始试生产；公司6000t/a六氟磷酸锂（LiPF6）项目预计于2024年一季度进入试生产", "plates": ["氟化工"], "limit_up_days": 2, "turnover_ratio": 7.09, "first_limit_up": 1782869489, "break_limit_up_times": 22}, {"code": "600470", "name": "六国化工", "price": 6.38, "change_pct": 10.0, "reason": "华东地区规模最大的磷复肥和磷化工一体化专业制造企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.52, "first_limit_up": 1782869818, "break_limit_up_times": 1}, {"code": "600724", "name": "宁波富达", "price": 5.58, "change_pct": 10.06, "reason": "公司主要从事商业地产的出租、自营联营及托管业务", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 1.08, "first_limit_up": 1782871985, "break_limit_up_times": 0}, {"code": "603360", "name": "百傲化学", "price": 17.91, "change_pct": 10.01, "reason": "全资子公司芯傲华拟以7亿元增资苏州芯慧联半导体科技有限公司，后者主营业务为涂胶显影机、光刻机等黄光制程设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.58, "first_limit_up": 1782874596, "break_limit_up_times": 1}, {"code": "600783", "name": "鲁信创投", "price": 21.91, "change_pct": 9.99, "reason": "公司参股基金成都鲁信菁蓉贰期创业投资中心（有限合伙）等3个投资主体合计持有蓝箭航天空间科技股份有限公司0.89%股权", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 6.57, "first_limit_up": 1782870377, "break_limit_up_times": 15}, {"code": "600446", "name": "金证股份", "price": 11.07, "change_pct": 10.04, "reason": "公司通过其参股的香港卓信科技（TTL）在稳定币赎回代币化基金领域构建了完整的技术解决方案，推动 RWA 在基金领域的规模化应用", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 3.29, "first_limit_up": 1782883087, "break_limit_up_times": 0}, {"code": "600725", "name": "云维股份", "price": 3.4, "change_pct": 10.03, "reason": "公司此前收购红河发电，标的是滇南地区主要的火力发电厂之一，红河发电核定装机容量1,300MW", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.42, "first_limit_up": 1782870434, "break_limit_up_times": 0}, {"code": "600179", "name": "安通控股", "price": 4.84, "change_pct": 10.0, "reason": "公司主营集装箱物流业务，曾多年蝉联海口港集装箱吞吐量第一名", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 2.8, "first_limit_up": 1782872585, "break_limit_up_times": 1}, {"code": "002977", "name": "*ST天箭", "price": 22.08, "change_pct": 4.99, "reason": "高波段、大功率固态微波前端产品供应商；主要代表产品为弹载固态发射机、新型相控阵产品及其他固态发射机产品，其在军事领域的应用包括雷达制导导弹精确制导系统、其它雷达系统、卫星通信和电子对抗等", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.77, "first_limit_up": 1782869535, "break_limit_up_times": 0}, {"code": "002184", "name": "海得控制", "price": 10.08, "change_pct": 10.04, "reason": "公司与欧姆龙公司合作，开展基于包装行业为主的工业机器人销售与服务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.47, "first_limit_up": 1782869523, "break_limit_up_times": 0}, {"code": "603378", "name": "*ST亚士", "price": 5.06, "change_pct": 4.98, "reason": "行业内少数同时拥有功能型建筑涂料、保温装饰板和保温板三大产品体系及其系统服务能力的企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.35, "first_limit_up": 1782873128, "break_limit_up_times": 8}, {"code": "605189", "name": "富春染织", "price": 13.26, "change_pct": 10.04, "reason": "公司投资10亿元建设PEEK材料人形机器人轻量化与半导体精密注塑项目，已投产并获行星减速器公司样件订单，切入机器人轻量化赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.73, "first_limit_up": 1782870517, "break_limit_up_times": 0}, {"code": "600759", "name": "ST洲际", "price": 1.92, "change_pct": 4.92, "reason": "海南本地股，主营石油的勘探、开发和销售，油气行业的技术服务和物业租赁业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.26, "first_limit_up": 1782869772, "break_limit_up_times": 0}, {"code": "002161", "name": "远 望 谷", "price": 5.92, "change_pct": 10.04, "reason": "公司自主研发的RFID芯片已广泛应用于铁路、烟草、电力、图书等业务领域，且公司提供自芯片、标签、读写器到软件开发等全套产品和服务", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.6, "first_limit_up": 1782870081, "break_limit_up_times": 0}, {"code": "000711", "name": "ST京蓝", "price": 4.77, "change_pct": 5.07, "reason": "公司一季度净利润同比增长171.81%", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.31, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "002053", "name": "云南能投", "price": 10.81, "change_pct": 9.97, "reason": "公司核心主业为新能源，已投产发电的新能源总装机容量达271.986万千瓦，其中风电249.386万千瓦，占比92%", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 2.43, "first_limit_up": 1782869715, "break_limit_up_times": 11}, {"code": "002940", "name": "昂利康", "price": 29.05, "change_pct": 10.0, "reason": "公司研发重心转向创新产品，积极布局创新药管线", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.42, "first_limit_up": 1782882459, "break_limit_up_times": 21}, {"code": "002698", "name": "博实股份", "price": 13.28, "change_pct": 10.02, "reason": "中国机器人TOP10峰会成员；公司自主创新研发的（高温）炉前作业机器人及周边系统，在电石领域处世界范围内应用领先地位；公司持续研发高温特种机器人在硅铁、硅锰、工业硅炉等高温炉前作业环境的应用，已陆续取得阶段性成果", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.85, "first_limit_up": 1782882054, "break_limit_up_times": 27}, {"code": "603666", "name": "亿嘉和", "price": 30.38, "change_pct": 9.99, "reason": "机器人智能应用服务商，特种机器人龙头；公司与麦澜德战略合作，将脑机接口技术融入康养机器人，实现情感陪护、意图控制、健康预警三大功能", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 5.42, "first_limit_up": 1782872580, "break_limit_up_times": 1}, {"code": "001313", "name": "粤海饲料", "price": 7.8, "change_pct": 10.01, "reason": "全资子公司湛江粤海水产有限公司经营有条冻、淡晒金鲳鱼、黄花鱼等水产品及水产品预制菜", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.65, "first_limit_up": 1782882249, "break_limit_up_times": 33}, {"code": "301092", "name": "争光股份", "price": 49.09, "change_pct": 20.0, "reason": "公司目前有产品应用于盐湖提锂纯化环节，正按照研发计划展开新型锂吸附材料的开发", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 10.28, "first_limit_up": 1782882609, "break_limit_up_times": 0}, {"code": "601010", "name": "ST文峰", "price": 1.46, "change_pct": 5.04, "reason": "公司主营超市零售，拟斥资8000万元至1.2亿元回购，用于员工持股计划或股权激励", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.6, "first_limit_up": 1782882271, "break_limit_up_times": 0}, {"code": "603499", "name": "翔港科技", "price": 14.47, "change_pct": 10.04, "reason": "国内印刷包装一体化解决方案供应商；公司目前持有金泰克13.1944%股权。后者是一家集研发、生产和自主品牌产品营销于一体的专业存储方案提供商，主要提供内存、SSD相关存储产品", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1782882495, "break_limit_up_times": 0}, {"code": "002943", "name": "宇晶股份", "price": 48.65, "change_pct": 9.99, "reason": "公司6-8英寸碳化硅切磨抛设备已批量销售，系碳化硅衬底加工核心供应商，并推进12英寸硅片切割设备研发", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.31, "first_limit_up": 1782882378, "break_limit_up_times": 0}, {"code": "002273", "name": "水晶光电", "price": 39.03, "change_pct": 10.01, "reason": "1、公司已将AI光学列为第三成长曲线，CPO共封装硅透镜项目正开发，目标切入800G/1.6T光模块及AI集群光互连；\n2、公司的光学零组件产品广泛用于各型号智能手机的成像和感知系统，而AI手机同样具备该类系统，其产品可满足AI手机成像与感知相关需求", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 1.08, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "600509", "name": "天富能源", "price": 9.3, "change_pct": 10.06, "reason": "公司为天科合达第二大股东，天科合达科创板IPO审核状态更新为“已受理”", "plates": ["碳化硅"], "limit_up_days": 1, "turnover_ratio": 1.12, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "002360", "name": "ST同德", "price": 4.94, "change_pct": 5.11, "reason": "公司被申请重整，将开展重整投资人招募等工作", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.6, "first_limit_up": 1782869406, "break_limit_up_times": 0}, {"code": "002620", "name": "*ST瑞和", "price": 5.36, "change_pct": 5.1, "reason": "公司能否进入重整程序存在重大不确定性", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.43, "first_limit_up": 1782870795, "break_limit_up_times": 2}, {"code": "000520", "name": "凤凰航运", "price": 4.1, "change_pct": 9.92, "reason": "我国内河经营干散货专业化运输规模最大的企业，大股东旗下投资了二十余家企业", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 5.99, "first_limit_up": 1782871002, "break_limit_up_times": 8}, {"code": "601933", "name": "永辉超市", "price": 3.12, "change_pct": 9.86, "reason": "国内大型连锁超市，总部位于福建省福州市", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.92, "first_limit_up": 1782873204, "break_limit_up_times": 0}, {"code": "603505", "name": "金石资源", "price": 22.17, "change_pct": 10.02, "reason": "公司控股子公司金鄂博氟化工2025年度共生产无水氟化氢22.49万吨", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 6.08, "first_limit_up": 1782875543, "break_limit_up_times": 1}, {"code": "002313", "name": "日海智能", "price": 8.05, "change_pct": 9.97, "reason": "公司高算力AI模组SIM9650L已实测跑通DeepSeek R1模型，控股股东拟变更为科创海科", "plates": ["云计算数据中心", "股权转让"], "limit_up_days": 1, "turnover_ratio": 1.44, "first_limit_up": 1782869418, "break_limit_up_times": 0}, {"code": "000863", "name": "三湘印象", "price": 4.62, "change_pct": 10.0, "reason": "公司以 “文化 + 地产” 双主业驱动；控股股东转让5.29%股份给成都柏然私募", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.62, "first_limit_up": 1782870939, "break_limit_up_times": 0}, {"code": "603137", "name": "恒尚节能", "price": 14.23, "change_pct": 9.97, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 0.28, "first_limit_up": 1782869101, "break_limit_up_times": 0}, {"code": "000601", "name": "韶能股份", "price": 6.44, "change_pct": 10.09, "reason": "公司预计上半年净利同比增长61.62%-103.33%，报告期内，公司清洁可再生能源业务通过开展“开源节流”各项工作，促使经营成果同比大幅增长", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.04, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "600641", "name": "先导基电", "price": 43.85, "change_pct": 10.01, "reason": "公司旗下凯世通是国内离子注入机领域核心企业，产品覆盖低能大束流、高能离子注入机等，实现了 12 英寸晶圆厂产线应用国产化突破，且公司通过创办嘉芯半导体，将业务范围延拓至刻蚀、薄膜沉积等集成电路核心前道设备领域", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 13.6, "first_limit_up": 1782871255, "break_limit_up_times": 26}, {"code": "000078", "name": "ST海王", "price": 1.35, "change_pct": 4.65, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.29, "first_limit_up": 1782871125, "break_limit_up_times": 1}, {"code": "000521", "name": "长虹美菱", "price": 5.97, "change_pct": 9.94, "reason": "1、公司完成了综合白电的产业布局，覆盖了冰箱柜、洗衣机、空调、厨卫、小家电等全产品线；\n2、旗下全资子公司四川虹美智能科技有限公司获得华为鸿蒙生态模组技术认证证书，并开始提供鸿蒙OS模组", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.63, "first_limit_up": 1782885609, "break_limit_up_times": 1}, {"code": "002981", "name": "朝阳科技", "price": 20.28, "change_pct": 9.98, "reason": "1、子公司星联技术的连接器产品主要应用于工业机器人、储能、新能源汽车等领域，2025年已实现部分工业机器人领域的产品交付；\n2、公司主营业务包括声学产品、精密零组件和OEM代工生产业务，产品广泛应用于智能手机、平板电脑及智能可穿戴设备等智能终，进入了苹果等知名终端品牌的供应链体系", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1782875763, "break_limit_up_times": 0}, {"code": "603557", "name": "*ST起步", "price": 4, "change_pct": 4.99, "reason": "公司获捐赠资产，标的营收利润远超上市公司", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.23, "first_limit_up": 1782883159, "break_limit_up_times": 0}, {"code": "002670", "name": "国盛证券", "price": 12.1, "change_pct": 10.0, "reason": "综合性金融服务集团，国盛证券是公司的全资子公司", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 2.75, "first_limit_up": 1782872658, "break_limit_up_times": 0}, {"code": "605289", "name": "罗曼股份", "price": 159.5, "change_pct": 10.0, "reason": "公司拟收购武桐高新39.23%的股权，标的主要从事AIDC算力服务器与集群综合解决方案服务业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.29, "first_limit_up": 1782870474, "break_limit_up_times": 0}, {"code": "002548", "name": "金新农", "price": 4.06, "change_pct": 10.03, "reason": "公司以“自繁自养”模式中种猪繁育为主，生猪产品主要包括种猪、仔猪和育肥猪", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1782871227, "break_limit_up_times": 0}, {"code": "600965", "name": "*ST福成", "price": 2.68, "change_pct": 5.1, "reason": "公司业务包括养猪、预制菜及殡葬服务业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.87, "first_limit_up": 1782882089, "break_limit_up_times": 2}, {"code": "600080", "name": "ST金花", "price": 4.69, "change_pct": 4.92, "reason": "公司主导产品金天格胶囊是国家一类新药，以人工虎骨粉为原料，已成为骨科临床中药一线用药", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.61, "first_limit_up": 1782882001, "break_limit_up_times": 11}, {"code": "000610", "name": "*ST西旅", "price": 5.84, "change_pct": 5.04, "reason": "公司主营出境游、入境游、国内游、商务会奖旅游和票务代理等业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.53, "first_limit_up": 1782875136, "break_limit_up_times": 7}, {"code": "603758", "name": "秦安股份", "price": 9.83, "change_pct": 9.96, "reason": "公司是新能源汽车发动机及变速器核心零部件供应商，参投墨现科技，后者主营压力传感器、机器人电子皮肤等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.54, "first_limit_up": 1782882706, "break_limit_up_times": 0}, {"code": "603859", "name": "能科科技", "price": 52.78, "change_pct": 10.0, "reason": "1、公司凭借工业领域经验基于开源和闭源大模型形成多行业AI Agent，与头部客户合作开展AI+智能制造 ；打造“乐系列”产品与AI融合 ，开展“灵系列”AI 新产品研究；\n2、商业航天是公司战略重点，已服务航天客户多年，并与卫星企业围绕算力及AI场景深度合作", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 2.28, "first_limit_up": 1782869454, "break_limit_up_times": 0}, {"code": "603272", "name": "*ST联翔", "price": 25.17, "change_pct": 5.01, "reason": "A股首家墙布上市企业，控股股东拟协议转让5%股份", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.09, "first_limit_up": 1782869100, "break_limit_up_times": 0}, {"code": "603615", "name": "茶花股份", "price": 17.77, "change_pct": 10.03, "reason": "公司通过并购达迈智能及达迈香港100%股权切入电子元器件分销，已与新思、锐石等原厂建立合作，产品线覆盖存储、射频器件、无线连接", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 3.85, "first_limit_up": 1782874479, "break_limit_up_times": 1}, {"code": "000536", "name": "华映科技", "price": 3.69, "change_pct": 10.15, "reason": "公司地处福州，主要从事LCD显示面板、液晶模组的研产销，已成功进入传音、联想、三星、 vivo、 HMD(诺基亚)、中兴、华为、荣耀等世界知名品牌的供应商体系", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 3.79, "first_limit_up": 1782870000, "break_limit_up_times": 0}, {"code": "600082", "name": "ST海泰", "price": 2.68, "change_pct": 5.1, "reason": "公司一季度业绩小幅减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.57, "first_limit_up": 1782870142, "break_limit_up_times": 0}, {"code": "600658", "name": "电子城", "price": 4.09, "change_pct": 9.95, "reason": "1、公司以科技园区开发运营为核心，聚焦产业地产开发、科技服务及资产运营，开发类型涵盖科技产业园、企业总部基地、创新孵化空间等；\n2、公司与入驻企业玻色量子签署合作协议，计划共建“南京/苏州-北京-成都-厦门/深圳”量子计算应用生态圈", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 1.43, "first_limit_up": 1782876276, "break_limit_up_times": 0}, {"code": "000911", "name": "*ST广糖", "price": 4.02, "change_pct": 4.96, "reason": "公司是国内糖业龙头之一，是海天味业、加多宝、娃哈哈等供应商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.79, "first_limit_up": 1782887793, "break_limit_up_times": 3}, {"code": "002923", "name": "润都股份", "price": 10.41, "change_pct": 10.04, "reason": "1、公司1 类创新药盐酸去甲乌药碱注射液是在发现中药附子有效成分基础上化学合成的肾上腺 β 受体部分激动剂，可用于辅助诊断和评估心肌缺血；\n2、公司在尼古丁相关产品领域布局已久，其全资子公司润都制药（荆门）有限公司可生产尼古丁，设计产能为500吨/年（100吨提取 + 400吨合成）;", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.25, "first_limit_up": 1782882492, "break_limit_up_times": 0}, {"code": "000733", "name": "振华科技", "price": 62.3, "change_pct": 9.99, "reason": "1、公司民用钽电容主要应用在服务器领域、低压电路保护领域、民用爆破领域和智能三表领域；薄膜电容、超级电容、铝电容及MLCC主要应用于轨道交通领域和超算领域；\n2、公司光电耦合器系列产品在光通信、光模块等领域已实现应用", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 2.46, "first_limit_up": 1782869400, "break_limit_up_times": 0}, {"code": "002524", "name": "光正眼科", "price": 3.64, "change_pct": 9.97, "reason": "公司为专业眼科连锁医疗企业，另外部分业务方面已涉及医美业务，已经开展了眼整形手术类项目", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.3, "first_limit_up": 1782871911, "break_limit_up_times": 0}, {"code": "002423", "name": "中粮资本", "price": 9.05, "change_pct": 9.96, "reason": "中粮集团旗下金融业务平台；公司构建了以“寿险+期货+信托”为主力的金融业务牌照，前三季度净利润同比增长35.3%", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 1.77, "first_limit_up": 1782874239, "break_limit_up_times": 5}, {"code": "300481", "name": "濮阳惠成", "price": 22.82, "change_pct": 19.98, "reason": "OLED功能材料提供商；公司主要从事顺酐酸酐衍生物、功能材料中间体等精细化学品的研产销，产品广泛应用于电子元器件封装材料、电气设备绝缘材料、风电领域、复合材料、涂料等多个领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 18.35, "first_limit_up": 1782882327, "break_limit_up_times": 6}, {"code": "600113", "name": "浙江东日", "price": 36.5, "change_pct": 10.01, "reason": "1、公司主营业务收入主要来自于农副产品批发交易市场业务和生鲜食材配送业务；\n2、子公司培安美此前与首都医科大学开展业务洽谈，推进脑机接口技术研发与产业化", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 3.2, "first_limit_up": 1782869417, "break_limit_up_times": 20}, {"code": "300287", "name": "飞利信", "price": 3.85, "change_pct": 19.94, "reason": "1、公司为客户提供大型数据中心设计、工程建设及高端运维服务；\n2、公司自研“利智方”大模型产品已集成LGM技术，检索效率提升20%~50%，准确性提升5%~10%，并在政府、能源、交通等领域落地应用", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.65, "first_limit_up": 1782870846, "break_limit_up_times": 0}, {"code": "600665", "name": "天地源", "price": 3.18, "change_pct": 10.03, "reason": "立足西安的房地产开发商", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.96, "first_limit_up": 1782873337, "break_limit_up_times": 0}, {"code": "300343", "name": "联创股份", "price": 6.8, "change_pct": 19.93, "reason": "公司为聚偏氟乙烯（PVDF）龙头，与中山大学合作研发固态电解质项目", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 8.7, "first_limit_up": 1782875499, "break_limit_up_times": 9}, {"code": "688247", "name": "宣泰医药", "price": 9.02, "change_pct": 19.95, "reason": "公司主要从事仿制药的研发、生产和销售以及CRO服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.92, "first_limit_up": 1782873894, "break_limit_up_times": 1}, {"code": "002329", "name": "皇氏集团", "price": 2.94, "change_pct": 10.11, "reason": "2025年12月4日台湾网红陈馆长带货旺旺，皇氏集团与香园食品签署战略合作协议，共同开拓水牛奶在餐饮、新茶饮等领域的应用，而香园食品长期为旺旺集团提供原料解决方案，是旺旺的供应商之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.25, "first_limit_up": 1782874053, "break_limit_up_times": 1}, {"code": "002326", "name": "永太科技", "price": 26.02, "change_pct": 10.02, "reason": "公司已形成锂盐原料—电解液垂直一体化锂电材料产业链，电解液产能15万吨/年、固态六氟磷酸锂1.8万吨/年、液态双氟磺酰亚胺锂6.7万吨/年，并与宁德时代、比亚迪等头部客户长期合作；预计上半年净利润同比增350.68%~461.22%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.22, "first_limit_up": 1782869982, "break_limit_up_times": 0}, {"code": "002694", "name": "*ST顾地", "price": 2.15, "change_pct": 4.88, "reason": "塑料管道龙头企业，产品广泛应用于建筑给排水；管网改造是旧改重要环节之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.73, "first_limit_up": 1782870093, "break_limit_up_times": 8}, {"code": "002005", "name": "ST德豪", "price": 2.31, "change_pct": 5.0, "reason": "公司预计2025年扭亏为盈", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.41, "first_limit_up": 1782870363, "break_limit_up_times": 0}, {"code": "603725", "name": "天安新材", "price": 12.43, "change_pct": 10.0, "reason": "公司参股若铂机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.31, "first_limit_up": 1782870550, "break_limit_up_times": 4}, {"code": "300518", "name": "新迅达", "price": 39.66, "change_pct": 20.0, "reason": "1、浙江鑫兴光电半导体有限公司发生股权变动，广东鑫诚光电半导体有限公司将其持有的鑫兴光电51%股权转让至公司；\n2、公司控股孙公司光宇矿业旗下南阳山锂矿、蔡家锂矿已于2023年7月取得采矿许可证，选矿厂整体完工进度87.84%，采矿工程完工进度21.25%，同步开展锂原矿碎矿销售，新能源业务持续推进", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 6.77, "first_limit_up": 1782869541, "break_limit_up_times": 0}, {"code": "000632", "name": "ST三木", "price": 3.2, "change_pct": 4.92, "reason": "旗下控股子公司福建融达通供应链管理有限公司，是福州跨境电商公共服务平台、跨境电商保税监管物流中心主要运营方 ，为跨境电商提供一站式平台对接方案", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.46, "first_limit_up": 1782870069, "break_limit_up_times": 0}, {"code": "001365", "name": "天海电子", "price": 43.23, "change_pct": 10.0, "reason": "公司与上海它石智航技术有限公司签署长期战略合作框架协议，围绕人形机器人、具身大模型、汽车线束智能制造多领域开展深度协同", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.73, "first_limit_up": 1782870141, "break_limit_up_times": 0}, {"code": "688553", "name": "汇宇制药", "price": 12.76, "change_pct": 20.04, "reason": "公司是一家研发驱动型的综合制药企业，主要从事抗肿瘤和注射剂药物的研产销", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.47, "first_limit_up": 1782883731, "break_limit_up_times": 3}, {"code": "603828", "name": "*ST利达", "price": 4.21, "change_pct": 4.99, "reason": "公司拟变更间接控股股东", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.52, "first_limit_up": 1782870998, "break_limit_up_times": 4}, {"code": "000698", "name": "ST沈化", "price": 3.13, "change_pct": 5.03, "reason": "公司主要从事氯碱、石油、聚醚多元醇等化工产品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.04, "first_limit_up": 1782876348, "break_limit_up_times": 6}, {"code": "600667", "name": "太极实业", "price": 32.1, "change_pct": 10.01, "reason": "DRAM封装龙头；子公司海太半导体的封测业务主要是为SK海力士的DRAM产品提供后工序服务，对12英寸1Z纳米级晶圆进行集成电路封装，海太半导体由公司和SK海力士共同投资组建，公司持有海太半导体55%股权，SK海力士持有海太半导体45%股权", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 19.85, "first_limit_up": 1782870323, "break_limit_up_times": 1}, {"code": "600491", "name": "ST龙元", "price": 0.97, "change_pct": 5.43, "reason": "长三角建筑市场最大的民营施工企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.45, "first_limit_up": 1782870077, "break_limit_up_times": 0}, {"code": "688106", "name": "金宏气体", "price": 49.78, "change_pct": 20.01, "reason": "公司持续深耕电子特种气体产业化布局，超纯氨、高纯氧化亚氮、高纯二氧化碳产品已经稳定供应海力士", "plates": ["电子特气"], "limit_up_days": 1, "turnover_ratio": 10.21, "first_limit_up": 1782869852, "break_limit_up_times": 4}, {"code": "002440", "name": "闰土股份", "price": 11.28, "change_pct": 10.05, "reason": "公司染料产品占有率稳居国内染料市场份额第二位，参股的浙江巍华新材料拥有三氟甲苯产能", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 6.72, "first_limit_up": 1782882408, "break_limit_up_times": 0}, {"code": "603538", "name": "美诺华", "price": 35.81, "change_pct": 10.02, "reason": "诺和诺德司美格鲁肽在中国的核心化合物专利到期；公司储备了减肥多肽类中间体，正在进行GLP-1的研发和技术的储备", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.01, "first_limit_up": 1782873247, "break_limit_up_times": 0}, {"code": "600661", "name": "昂立教育", "price": 7.6, "change_pct": 9.99, "reason": "公司拥有K12教育、职业教育、国际教育和幼儿教育四大教育培训业务", "plates": ["教育"], "limit_up_days": 1, "turnover_ratio": 5.04, "first_limit_up": 1782875518, "break_limit_up_times": 1}, {"code": "300385", "name": "ST雪浪", "price": 12.1, "change_pct": 20.04, "reason": "公司签署重整投资协议，氦星万联有望成为新实控人", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 3.89, "first_limit_up": 1782871551, "break_limit_up_times": 0}, {"code": "603729", "name": "ST龙韵", "price": 11.11, "change_pct": 5.01, "reason": "公司表示业务中已开始尝试应用AI技术参与创意创作等环节，参股公司愚恒影业的主要业务涵盖精品电视剧（含网络剧）的制作、短视频业务以及直播业务等", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.13, "first_limit_up": 1782875796, "break_limit_up_times": 9}, {"code": "600784", "name": "鲁银投资", "price": 7.15, "change_pct": 10.0, "reason": "公司的高端粉末产品涵盖MIM粉末，可应用于人形机器人的零部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.74, "first_limit_up": 1782872834, "break_limit_up_times": 0}, {"code": "002396", "name": "星网锐捷", "price": 21.09, "change_pct": 10.02, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 5.53, "first_limit_up": 1782869577, "break_limit_up_times": 9}];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};