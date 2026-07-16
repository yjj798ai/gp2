const UPDATE_TIME = "2026-07-16 16:16";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.86,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": 1.05,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "猪肉",
    "rise": 2.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "人工智能",
    "rise": 0.12,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.28,
    "rate": 0,
    "tag": "",
    "hotTag": "连续250天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": -5.2,
    "rate": 0,
    "tag": "",
    "hotTag": "连续203天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": -2.93,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -1.85,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续179天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "AI手机",
    "rise": -0.56,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886070"
  },
  {
    "name": "CRO概念",
    "rise": 0.64,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "算力租赁",
    "rise": -0.14,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续114天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": -1.21,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续414天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "ST板块",
    "rise": 0.31,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续88天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "机器人概念",
    "rise": -0.8,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "短剧游戏",
    "rise": 2.15,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "影视ETF",
    "code": "886060"
  },
  {
    "name": "白酒概念",
    "rise": 0.49,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "脑机接口",
    "rise": 0.52,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "高压氧舱",
    "rise": 2.84,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "医药ETF",
    "code": "886018"
  },
  {
    "name": "小红书概念",
    "rise": 1.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "传媒ETF",
    "code": "886098"
  },
  {
    "name": "先进封装",
    "rise": -5.2,
    "rate": 0,
    "tag": "",
    "hotTag": "连续43天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886009"
  }
];
const THS_EVENTS = [
  {
    "title": "2026暑期档票房反超去年同期",
    "desc": "",
    "heat": 547340,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "华智数媒",
        "code": "300426",
        "chg": 13.93597
      }
    ]
  },
  {
    "title": "公募布局创新药上游刚需方向 创新药板块有望迎来业绩估值双提升",
    "desc": "",
    "heat": 287452,
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
        "name": "新赣江",
        "code": "920367",
        "chg": 20.616438
      }
    ]
  },
  {
    "title": "荣耀IPO，最新进展曝光",
    "desc": "",
    "heat": 137407,
    "direction": "荣耀IPO",
    "themes": [
      " 股权投资与参股方",
      "渠道分销与营销生态",
      "核心硬件供应链"
    ],
    "stocks": [
      {
        "name": "天音控股",
        "code": "000829",
        "chg": 10.012063
      }
    ]
  },
  {
    "title": "AI手机备案公示 行业发展将有何变化？",
    "desc": "",
    "heat": 65141,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "格林精密",
        "code": "300968",
        "chg": 20.046893
      }
    ]
  },
  {
    "title": "长鑫科技开启申购 为中国第一、全球第四的DRAM厂商",
    "desc": "",
    "heat": 18255,
    "direction": "长鑫科技IPO",
    "themes": [
      "长鑫存储",
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "万通发展",
        "code": "600246",
        "chg": 8.342603
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "影视",
    "change": "+4.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+3.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+2.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玩具",
    "change": "+2.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+2.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民营医院",
    "change": "+2.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "主题公园",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+2.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+2.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+2.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+2.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+2.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+2.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "禽流感",
    "change": "+2.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+1.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保健品",
    "change": "+1.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "商汤科技概念股",
    "change": "+1.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "4.94",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "12441438800.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.81
      },
      {
        "name": "工业大麻",
        "change_pct": 0.78
      },
      {
        "name": "中药",
        "change_pct": 1.37
      },
      {
        "name": "强势人气股",
        "change_pct": -2.03
      },
      {
        "name": "保健品",
        "change_pct": 1.96
      },
      {
        "name": "医药",
        "change_pct": 0.97
      },
      {
        "name": "化学原料药",
        "change_pct": 0.75
      },
      {
        "name": "流感",
        "change_pct": 1.12
      },
      {
        "name": "振兴东北",
        "change_pct": 0.41
      },
      {
        "name": "食品",
        "change_pct": 0.94
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 10,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "6.05",
    "change": "-5.17",
    "market_id": "33",
    "circulate_market_value": "213971160000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.51
      },
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "超高清视频",
        "change_pct": -1.06
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.5
      },
      {
        "name": "电竞",
        "change_pct": 1.07
      },
      {
        "name": "半导体",
        "change_pct": -5.38
      },
      {
        "name": "人工智能",
        "change_pct": 0.23
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.51
      },
      {
        "name": "VR&AR",
        "change_pct": -0.69
      },
      {
        "name": "OLED",
        "change_pct": -3.65
      },
      {
        "name": "京津冀",
        "change_pct": -0.0
      },
      {
        "name": "物联网",
        "change_pct": -0.27
      },
      {
        "name": "指纹识别",
        "change_pct": -2.84
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.08
      },
      {
        "name": "白马股",
        "change_pct": -0.01
      },
      {
        "name": "智能制造",
        "change_pct": -1.17
      },
      {
        "name": "小米概念股",
        "change_pct": -1.78
      },
      {
        "name": "国产芯片",
        "change_pct": -4.25
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.53
      },
      {
        "name": "全息概念",
        "change_pct": 0.17
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.39
      },
      {
        "name": "MicroLED",
        "change_pct": -3.26
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.88
      },
      {
        "name": "智能手表",
        "change_pct": -0.18
      },
      {
        "name": "MiniLED",
        "change_pct": -2.26
      },
      {
        "name": "传感器",
        "change_pct": -2.57
      },
      {
        "name": "大硅片",
        "change_pct": -6.9
      },
      {
        "name": "AI PC",
        "change_pct": -0.79
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      },
      {
        "name": "回购",
        "change_pct": -0.57
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.02
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.81
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 14,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "5.67",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "7352491000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.37
      },
      {
        "name": "创新药",
        "change_pct": 0.62
      },
      {
        "name": "央企改革",
        "change_pct": -0.71
      },
      {
        "name": "医疗器械",
        "change_pct": 0.96
      },
      {
        "name": "强势人气股",
        "change_pct": -2.03
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.51
      },
      {
        "name": "保健品",
        "change_pct": 1.96
      },
      {
        "name": "民营医院",
        "change_pct": 2.55
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 1.22
      },
      {
        "name": "医药",
        "change_pct": 0.97
      },
      {
        "name": "化学原料药",
        "change_pct": 0.75
      },
      {
        "name": "海南概念",
        "change_pct": -0.66
      },
      {
        "name": "脑科学",
        "change_pct": 0.58
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.07
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.24
      },
      {
        "name": "食品",
        "change_pct": 0.94
      },
      {
        "name": "国企改革",
        "change_pct": -0.31
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.47
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.13
      },
      {
        "name": "自贸区",
        "change_pct": 0.21
      },
      {
        "name": "合成生物",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 15,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "10.32",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "21486259000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "院线龙头",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 4.03
      },
      {
        "name": "足球",
        "change_pct": -0.55
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.96
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.52
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.27
      },
      {
        "name": "大消费",
        "change_pct": 1.3
      },
      {
        "name": "盲盒",
        "change_pct": 0.83
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.55
      },
      {
        "name": "首发经济",
        "change_pct": 1.77
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.46
      },
      {
        "name": "服务消费",
        "change_pct": 1.47
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 16,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "6.22",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "7831157500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.23
      },
      {
        "name": "游戏",
        "change_pct": 0.93
      },
      {
        "name": "智能音箱",
        "change_pct": 0.65
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.78
      },
      {
        "name": "数字经济",
        "change_pct": 0.87
      },
      {
        "name": "百度概念股",
        "change_pct": 1.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.47
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.52
      },
      {
        "name": "传媒",
        "change_pct": 2.23
      },
      {
        "name": "全息概念",
        "change_pct": 0.17
      },
      {
        "name": "NFT",
        "change_pct": 1.72
      },
      {
        "name": "元宇宙",
        "change_pct": 1.02
      },
      {
        "name": "web3.0",
        "change_pct": 1.14
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.4
      },
      {
        "name": "数字人民币",
        "change_pct": 0.87
      },
      {
        "name": "智慧政务",
        "change_pct": 1.11
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.43
      },
      {
        "name": "盲盒",
        "change_pct": 0.83
      },
      {
        "name": "AI营销",
        "change_pct": 2.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      },
      {
        "name": "供应链金融",
        "change_pct": 0.66
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.06
      },
      {
        "name": "区块链",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 17,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "2.78",
    "change": "9.88",
    "market_id": "17",
    "circulate_market_value": "9086258000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "家居商贸",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.63
      },
      {
        "name": "强势人气股",
        "change_pct": -2.03
      },
      {
        "name": "养老产业",
        "change_pct": 0.99
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.75
      },
      {
        "name": "低价股",
        "change_pct": 0.61
      },
      {
        "name": "地摊经济",
        "change_pct": -0.0
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 30,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "5.91",
    "change": "5.35",
    "market_id": "33",
    "circulate_market_value": "6104650600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.09
      },
      {
        "name": "锂电池",
        "change_pct": -1.98
      },
      {
        "name": "强势人气股",
        "change_pct": -2.03
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -3.18
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.75
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.16
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.9
      }
    ]
  },
  {
    "code": "002632",
    "name": "道明光学",
    "hot_rank": 32,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "9.63",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "5531720100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "努比亚AI手机",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.51
      },
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "锂电池",
        "change_pct": -1.98
      },
      {
        "name": "石墨烯",
        "change_pct": -1.15
      },
      {
        "name": "VR&AR",
        "change_pct": -0.69
      },
      {
        "name": "光伏",
        "change_pct": -1.95
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.16
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.53
      },
      {
        "name": "固态电池",
        "change_pct": -2.15
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "603327",
    "name": "福蓉科技",
    "hot_rank": 41,
    "hot_rank_chg": 1,
    "stock_cnt": 5826,
    "price": "8.57",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "8959586700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI手机",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.51
      },
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.5
      },
      {
        "name": "特斯拉",
        "change_pct": -1.34
      },
      {
        "name": "小米概念股",
        "change_pct": -1.78
      },
      {
        "name": "AI手机",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "000829",
    "name": "天音控股",
    "hot_rank": 43,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "9.12",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "9340062600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "手机分销",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.8
      },
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.5
      },
      {
        "name": "彩票",
        "change_pct": 0.87
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.01
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.47
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.52
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.4
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.43
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 56,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "3.87",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "2750937100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "互动影游",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.23
      },
      {
        "name": "影视",
        "change_pct": 4.03
      },
      {
        "name": "旅游",
        "change_pct": 1.63
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.14
      },
      {
        "name": "AI营销",
        "change_pct": 2.69
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.55
      }
    ]
  },
  {
    "code": "600203",
    "name": "福日电子",
    "hot_rank": 59,
    "hot_rank_chg": 1,
    "stock_cnt": 5826,
    "price": "11.92",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "7068417900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "消费电子",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.51
      },
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "LED",
        "change_pct": -1.29
      },
      {
        "name": "机器人",
        "change_pct": -0.83
      },
      {
        "name": "无人机",
        "change_pct": -1.19
      },
      {
        "name": "MiniLED",
        "change_pct": -2.26
      },
      {
        "name": "eSIM",
        "change_pct": 1.66
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.75
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      },
      {
        "name": "智能座舱",
        "change_pct": 0.02
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 63,
    "hot_rank_chg": 1,
    "stock_cnt": 5826,
    "price": "6.45",
    "change": "-7.59",
    "market_id": "17",
    "circulate_market_value": "7042669100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 0.97
      },
      {
        "name": "化学原料药",
        "change_pct": 0.75
      },
      {
        "name": "数字经济",
        "change_pct": 0.87
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.63
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "300968",
    "name": "格林精密",
    "hot_rank": 66,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "10.24",
    "change": "20.05",
    "market_id": "33",
    "circulate_market_value": "4233011200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI手机",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.51
      },
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "电子烟",
        "change_pct": -0.24
      },
      {
        "name": "VR&AR",
        "change_pct": -0.69
      },
      {
        "name": "智能音箱",
        "change_pct": 0.65
      },
      {
        "name": "机器人",
        "change_pct": -0.83
      },
      {
        "name": "智能手表",
        "change_pct": -0.18
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.02
      },
      {
        "name": "AI手机",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 69,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "9.36",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "3080585600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "细胞医疗",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.0
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.65
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.77
      },
      {
        "name": "污水处理",
        "change_pct": -0.26
      },
      {
        "name": "智慧城市",
        "change_pct": 0.32
      },
      {
        "name": "环保",
        "change_pct": -0.6
      },
      {
        "name": "动力电池回收",
        "change_pct": -1.28
      },
      {
        "name": "干细胞",
        "change_pct": 0.87
      },
      {
        "name": "国企改革",
        "change_pct": -0.31
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 71,
    "hot_rank_chg": 3,
    "stock_cnt": 5826,
    "price": "4.09",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "6393963900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "间接投资长江存储",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.51
      },
      {
        "name": "共享经济",
        "change_pct": 1.22
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.29
      },
      {
        "name": "旅游",
        "change_pct": 1.63
      },
      {
        "name": "物业管理",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "603567",
    "name": "珍宝岛",
    "hot_rank": 75,
    "hot_rank_chg": 1,
    "stock_cnt": 5826,
    "price": "5.48",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "5147930000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中成药集采",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.37
      },
      {
        "name": "创新药",
        "change_pct": 0.62
      },
      {
        "name": "医药",
        "change_pct": 0.97
      },
      {
        "name": "破净股",
        "change_pct": 0.2
      },
      {
        "name": "流感",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "002115",
    "name": "三维通信",
    "hot_rank": 78,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "11.18",
    "change": "7.19",
    "market_id": "33",
    "circulate_market_value": "8343256200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.89
      },
      {
        "name": "手游",
        "change_pct": 1.03
      },
      {
        "name": "5G",
        "change_pct": -2.01
      },
      {
        "name": "人工智能",
        "change_pct": 0.23
      },
      {
        "name": "物联网",
        "change_pct": -0.27
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.96
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.47
      },
      {
        "name": "快手概念股",
        "change_pct": 1.15
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.4
      },
      {
        "name": "知识付费",
        "change_pct": 1.71
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.57
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.16
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.46
      },
      {
        "name": "海洋经济",
        "change_pct": -0.92
      }
    ]
  },
  {
    "code": "002045",
    "name": "国光电器",
    "hot_rank": 81,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "8.34",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "4684785500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "音响电声",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "电子烟",
        "change_pct": -0.24
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.5
      },
      {
        "name": "锂电池",
        "change_pct": -1.98
      },
      {
        "name": "VR&AR",
        "change_pct": -0.69
      },
      {
        "name": "智能音箱",
        "change_pct": 0.65
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.16
      },
      {
        "name": "黑色家电",
        "change_pct": 0.52
      },
      {
        "name": "家电",
        "change_pct": -0.19
      },
      {
        "name": "固态电池",
        "change_pct": -2.15
      },
      {
        "name": "NFT",
        "change_pct": 1.72
      },
      {
        "name": "元宇宙",
        "change_pct": 1.02
      },
      {
        "name": "无线耳机",
        "change_pct": -1.51
      },
      {
        "name": "智能手表",
        "change_pct": -0.18
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.43
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 86,
    "hot_rank_chg": 1,
    "stock_cnt": 5826,
    "price": "4.98",
    "change": "-0.80",
    "market_id": "33",
    "circulate_market_value": "100189266000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.51
      },
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "超高清视频",
        "change_pct": -1.06
      },
      {
        "name": "电竞",
        "change_pct": 1.07
      },
      {
        "name": "半导体",
        "change_pct": -5.38
      },
      {
        "name": "OLED",
        "change_pct": -3.65
      },
      {
        "name": "光伏",
        "change_pct": -1.95
      },
      {
        "name": "黑色家电",
        "change_pct": 0.52
      },
      {
        "name": "家电",
        "change_pct": -0.19
      },
      {
        "name": "智能制造",
        "change_pct": -1.17
      },
      {
        "name": "工业互联网",
        "change_pct": -0.36
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.78
      },
      {
        "name": "国产芯片",
        "change_pct": -4.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.47
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.53
      },
      {
        "name": "MicroLED",
        "change_pct": -3.26
      },
      {
        "name": "MiniLED",
        "change_pct": -2.26
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.81
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 87,
    "hot_rank_chg": 1,
    "stock_cnt": 5826,
    "price": "8.31",
    "change": "9.78",
    "market_id": "17",
    "circulate_market_value": "3195590800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.62
      },
      {
        "name": "股权转让",
        "change_pct": -0.42
      },
      {
        "name": "新疆概念",
        "change_pct": 0.54
      },
      {
        "name": "医药",
        "change_pct": 0.97
      },
      {
        "name": "流感",
        "change_pct": 1.12
      },
      {
        "name": "国资入股",
        "change_pct": 0.26
      },
      {
        "name": "减肥药",
        "change_pct": 1.79
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 88,
    "hot_rank_chg": -4,
    "stock_cnt": 5826,
    "price": "5.69",
    "change": "-1.56",
    "market_id": "17",
    "circulate_market_value": "70533747000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.71
      },
      {
        "name": "核电",
        "change_pct": -1.28
      },
      {
        "name": "强势人气股",
        "change_pct": -2.03
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.22
      },
      {
        "name": "水电",
        "change_pct": -0.64
      },
      {
        "name": "火电",
        "change_pct": -1.52
      },
      {
        "name": "光伏",
        "change_pct": -1.95
      },
      {
        "name": "风电",
        "change_pct": -1.51
      },
      {
        "name": "国企改革",
        "change_pct": -0.31
      },
      {
        "name": "算电协同",
        "change_pct": -2.7
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 92,
    "hot_rank_chg": 4,
    "stock_cnt": 5826,
    "price": "2.93",
    "change": "6.93",
    "market_id": "33",
    "circulate_market_value": "7049967700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.98
      },
      {
        "name": "5G",
        "change_pct": -2.01
      },
      {
        "name": "一带一路",
        "change_pct": -0.83
      },
      {
        "name": "光通信",
        "change_pct": -3.36
      },
      {
        "name": "军民融合",
        "change_pct": -1.16
      },
      {
        "name": "光伏",
        "change_pct": -1.95
      },
      {
        "name": "军工",
        "change_pct": -1.15
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.16
      },
      {
        "name": "储能",
        "change_pct": -1.46
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.33
      },
      {
        "name": "低价股",
        "change_pct": 0.61
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.88
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.61
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 100,
    "hot_rank_chg": -1,
    "stock_cnt": 5826,
    "price": "12.34",
    "change": "3.35",
    "market_id": "17",
    "circulate_market_value": "7340183600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 0.42
      },
      {
        "name": "VR&AR",
        "change_pct": -0.69
      },
      {
        "name": "装修装饰",
        "change_pct": -0.23
      },
      {
        "name": "数字经济",
        "change_pct": 0.87
      },
      {
        "name": "百度概念股",
        "change_pct": 1.25
      },
      {
        "name": "全息概念",
        "change_pct": 0.17
      },
      {
        "name": "NFT",
        "change_pct": 1.72
      },
      {
        "name": "元宇宙",
        "change_pct": 1.02
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.14
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.27
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.06
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.02
      },
      {
        "name": "多模态",
        "change_pct": 0.89
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 1.54
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688008", "name": "澜起科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "211.13", "change": "-16.44", "market_id": "17", "circulate_market_value": "241694130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "4.94", "change": "10.02", "market_id": "17", "circulate_market_value": "12441438800.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.81}, {"name": "工业大麻", "change_pct": 0.78}, {"name": "中药", "change_pct": 1.37}, {"name": "强势人气股", "change_pct": -2.03}, {"name": "保健品", "change_pct": 1.96}, {"name": "医药", "change_pct": 0.97}, {"name": "化学原料药", "change_pct": 0.75}, {"name": "流感", "change_pct": 1.12}, {"name": "振兴东北", "change_pct": 0.41}, {"name": "食品", "change_pct": 0.94}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "38.59", "change": "8.61", "market_id": "33", "circulate_market_value": "110370204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "596.16", "change": "-10.00", "market_id": "33", "circulate_market_value": "98406945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "20.80", "change": "-10.00", "market_id": "33", "circulate_market_value": "69111157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "514.61", "change": "-10.00", "market_id": "17", "circulate_market_value": "344012630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "268.80", "change": "2.40", "market_id": "33", "circulate_market_value": "372643280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "83.21", "change": "-10.00", "market_id": "17", "circulate_market_value": "148897190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "38.35", "change": "-1.67", "market_id": "17", "circulate_market_value": "12920880100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "6.05", "change": "-5.17", "market_id": "33", "circulate_market_value": "213971160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.51}, {"name": "手机产业链", "change_pct": -1.71}, {"name": "超高清视频", "change_pct": -1.06}, {"name": "苹果产业链", "change_pct": -2.5}, {"name": "电竞", "change_pct": 1.07}, {"name": "半导体", "change_pct": -5.38}, {"name": "人工智能", "change_pct": 0.23}, {"name": "互联网医疗", "change_pct": 1.51}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "OLED", "change_pct": -3.65}, {"name": "京津冀", "change_pct": -0.0}, {"name": "物联网", "change_pct": -0.27}, {"name": "指纹识别", "change_pct": -2.84}, {"name": "汽车零部件", "change_pct": -0.08}, {"name": "白马股", "change_pct": -0.01}, {"name": "智能制造", "change_pct": -1.17}, {"name": "小米概念股", "change_pct": -1.78}, {"name": "国产芯片", "change_pct": -4.25}, {"name": "液晶面板/LCD", "change_pct": -3.53}, {"name": "全息概念", "change_pct": 0.17}, {"name": "理想汽车概念股", "change_pct": -0.39}, {"name": "MicroLED", "change_pct": -3.26}, {"name": "钙钛矿电池", "change_pct": -1.88}, {"name": "智能手表", "change_pct": -0.18}, {"name": "MiniLED", "change_pct": -2.26}, {"name": "传感器", "change_pct": -2.57}, {"name": "大硅片", "change_pct": -6.9}, {"name": "AI PC", "change_pct": -0.79}, {"name": "华为产业链", "change_pct": -0.61}, {"name": "回购", "change_pct": -0.57}, {"name": "智能眼镜/MR头显", "change_pct": -1.02}, {"name": "玻璃基板封装", "change_pct": -4.81}]}, {"code": "603127", "name": "昭衍新药", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "53.25", "change": "5.20", "market_id": "17", "circulate_market_value": "33566298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600436", "name": "片仔癀", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "141.15", "change": "10.00", "market_id": "17", "circulate_market_value": "85158224000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中药"}, {"code": "600487", "name": "亨通光电", "hot_rank": 13, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "64.85", "change": "-8.73", "market_id": "17", "circulate_market_value": "159118960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 14, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "5.67", "change": "10.10", "market_id": "33", "circulate_market_value": "7352491000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 1.37}, {"name": "创新药", "change_pct": 0.62}, {"name": "央企改革", "change_pct": -0.71}, {"name": "医疗器械", "change_pct": 0.96}, {"name": "强势人气股", "change_pct": -2.03}, {"name": "互联网医疗", "change_pct": 1.51}, {"name": "保健品", "change_pct": 1.96}, {"name": "民营医院", "change_pct": 2.55}, {"name": "CAR-T疗法", "change_pct": 1.22}, {"name": "医药", "change_pct": 0.97}, {"name": "化学原料药", "change_pct": 0.75}, {"name": "海南概念", "change_pct": -0.66}, {"name": "脑科学", "change_pct": 0.58}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.07}, {"name": "海南自由贸易港", "change_pct": 0.24}, {"name": "食品", "change_pct": 0.94}, {"name": "国企改革", "change_pct": -0.31}, {"name": "医疗信息化", "change_pct": 1.47}, {"name": "新冠病毒防治", "change_pct": 0.13}, {"name": "自贸区", "change_pct": 0.21}, {"name": "合成生物", "change_pct": 0.61}]}, {"code": "002739", "name": "儒意电影", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "10.32", "change": "10.02", "market_id": "33", "circulate_market_value": "21486259000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "院线龙头", "xgb_concepts": [{"name": "影视", "change_pct": 4.03}, {"name": "足球", "change_pct": -0.55}, {"name": "阿里巴巴概念股", "change_pct": 0.96}, {"name": "拼多多概念股", "change_pct": 0.52}, {"name": "网红/MCN", "change_pct": 1.27}, {"name": "大消费", "change_pct": 1.3}, {"name": "盲盒", "change_pct": 0.83}, {"name": "短剧/互动影游", "change_pct": 3.16}, {"name": "IP经济/谷子经济", "change_pct": 1.55}, {"name": "首发经济", "change_pct": 1.77}, {"name": "小红书概念股", "change_pct": 1.46}, {"name": "服务消费", "change_pct": 1.47}]}, {"code": "000676", "name": "智度股份", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "6.22", "change": "10.09", "market_id": "33", "circulate_market_value": "7831157500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.23}, {"name": "游戏", "change_pct": 0.93}, {"name": "智能音箱", "change_pct": 0.65}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.78}, {"name": "数字经济", "change_pct": 0.87}, {"name": "百度概念股", "change_pct": 1.25}, {"name": "腾讯概念股", "change_pct": 0.47}, {"name": "拼多多概念股", "change_pct": 0.52}, {"name": "传媒", "change_pct": 2.23}, {"name": "全息概念", "change_pct": 0.17}, {"name": "NFT", "change_pct": 1.72}, {"name": "元宇宙", "change_pct": 1.02}, {"name": "web3.0", "change_pct": 1.14}, {"name": "字节跳动概念股", "change_pct": 1.4}, {"name": "数字人民币", "change_pct": 0.87}, {"name": "智慧政务", "change_pct": 1.11}, {"name": "华为鸿蒙", "change_pct": 1.43}, {"name": "盲盒", "change_pct": 0.83}, {"name": "AI营销", "change_pct": 2.69}, {"name": "华为产业链", "change_pct": -0.61}, {"name": "供应链金融", "change_pct": 0.66}, {"name": "ChatGPT", "change_pct": 1.06}, {"name": "区块链", "change_pct": 0.95}]}, {"code": "600162", "name": "香江控股", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "2.78", "change": "9.88", "market_id": "17", "circulate_market_value": "9086258000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "家居商贸", "xgb_concepts": [{"name": "房地产", "change_pct": 0.63}, {"name": "强势人气股", "change_pct": -2.03}, {"name": "养老产业", "change_pct": 0.99}, {"name": "粤港澳大湾区", "change_pct": 0.75}, {"name": "低价股", "change_pct": 0.61}, {"name": "地摊经济", "change_pct": -0.0}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 18, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "42.43", "change": "3.74", "market_id": "33", "circulate_market_value": "33197428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 19, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "1113.00", "change": "-4.82", "market_id": "33", "circulate_market_value": "1235362970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "40.00", "change": "1.39", "market_id": "33", "circulate_market_value": "161104850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 21, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "75.95", "change": "-3.51", "market_id": "33", "circulate_market_value": "115250496000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 22, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "85.00", "change": "0.35", "market_id": "33", "circulate_market_value": "124680703000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 23, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "40.84", "change": "9.99", "market_id": "17", "circulate_market_value": "5336693500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "控制权拟变更"}, {"code": "002261", "name": "拓维信息", "hot_rank": 24, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "29.95", "change": "6.47", "market_id": "33", "circulate_market_value": "34325859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 25, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "18.26", "change": "10.00", "market_id": "17", "circulate_market_value": "19616773000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "600667", "name": "太极实业", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "18.73", "change": "-9.99", "market_id": "17", "circulate_market_value": "39174585000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 27, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "66.65", "change": "13.37", "market_id": "33", "circulate_market_value": "2179351200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 28, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "37.39", "change": "-8.13", "market_id": "17", "circulate_market_value": "127610187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 29, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "49.34", "change": "4.03", "market_id": "33", "circulate_market_value": "72812222000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "5.91", "change": "5.35", "market_id": "33", "circulate_market_value": "6104650600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.09}, {"name": "锂电池", "change_pct": -1.98}, {"name": "强势人气股", "change_pct": -2.03}, {"name": "铜箔/覆铜板", "change_pct": -3.18}, {"name": "粤港澳大湾区", "change_pct": 0.75}, {"name": "新能源汽车", "change_pct": -1.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.9}]}, {"code": "000988", "name": "华工科技", "hot_rank": 31, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "130.69", "change": "-10.00", "market_id": "33", "circulate_market_value": "131341576000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002632", "name": "道明光学", "hot_rank": 32, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "9.63", "change": "10.06", "market_id": "33", "circulate_market_value": "5531720100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "努比亚AI手机", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.51}, {"name": "手机产业链", "change_pct": -1.71}, {"name": "锂电池", "change_pct": -1.98}, {"name": "石墨烯", "change_pct": -1.15}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "光伏", "change_pct": -1.95}, {"name": "新能源汽车", "change_pct": -1.16}, {"name": "液晶面板/LCD", "change_pct": -3.53}, {"name": "固态电池", "change_pct": -2.15}, {"name": "华为产业链", "change_pct": -0.61}]}, {"code": "002365", "name": "永安药业", "hot_rank": 33, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "13.18", "change": "10.02", "market_id": "33", "circulate_market_value": "3232902000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "牛磺酸"}, {"code": "603019", "name": "中科曙光", "hot_rank": 34, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "97.66", "change": "0.93", "market_id": "17", "circulate_market_value": "142881890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 35, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "100.88", "change": "-10.00", "market_id": "17", "circulate_market_value": "36389777000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 36, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "72.00", "change": "7.48", "market_id": "33", "circulate_market_value": "33499607000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 37, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "17.44", "change": "10.03", "market_id": "33", "circulate_market_value": "7339886100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 38, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "28.51", "change": "3.60", "market_id": "33", "circulate_market_value": "21593905000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 39, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "32.05", "change": "-10.00", "market_id": "17", "circulate_market_value": "5863013400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 40, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "94.14", "change": "2.59", "market_id": "33", "circulate_market_value": "328229790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603327", "name": "福蓉科技", "hot_rank": 41, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "8.57", "change": "10.01", "market_id": "17", "circulate_market_value": "8959586700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI手机", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.51}, {"name": "手机产业链", "change_pct": -1.71}, {"name": "苹果产业链", "change_pct": -2.5}, {"name": "特斯拉", "change_pct": -1.34}, {"name": "小米概念股", "change_pct": -1.78}, {"name": "AI手机", "change_pct": -1.0}]}, {"code": "000021", "name": "深科技", "hot_rank": 42, "hot_rank_chg": 2, "stock_cnt": 5826, "price": "43.34", "change": "-8.29", "market_id": "33", "circulate_market_value": "68223903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000829", "name": "天音控股", "hot_rank": 43, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "9.12", "change": "10.01", "market_id": "33", "circulate_market_value": "9340062600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "手机分销", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.8}, {"name": "手机产业链", "change_pct": -1.71}, {"name": "苹果产业链", "change_pct": -2.5}, {"name": "彩票", "change_pct": 0.87}, {"name": "深圳本地股", "change_pct": -0.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "腾讯概念股", "change_pct": 0.47}, {"name": "拼多多概念股", "change_pct": 0.52}, {"name": "字节跳动概念股", "change_pct": 1.4}, {"name": "华为鸿蒙", "change_pct": 1.43}, {"name": "华为产业链", "change_pct": -0.61}]}, {"code": "002714", "name": "牧原股份", "hot_rank": 45, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "40.90", "change": "3.15", "market_id": "33", "circulate_market_value": "134172419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "69.66", "change": "6.78", "market_id": "17", "circulate_market_value": "29004174000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 47, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "91.45", "change": "7.53", "market_id": "17", "circulate_market_value": "7229292400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 48, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "31.92", "change": "-5.79", "market_id": "33", "circulate_market_value": "34434254000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000920", "name": "沃顿科技", "hot_rank": 49, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "14.15", "change": "10.03", "market_id": "33", "circulate_market_value": "6687270400.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "半导体超纯水膜"}, {"code": "603259", "name": "药明康德", "hot_rank": 50, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "127.00", "change": "-3.42", "market_id": "17", "circulate_market_value": "314106590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 51, "hot_rank_chg": 2, "stock_cnt": 5826, "price": "47.71", "change": "-9.98", "market_id": "17", "circulate_market_value": "189484420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 52, "hot_rank_chg": 2, "stock_cnt": 5826, "price": "222.24", "change": "5.58", "market_id": "17", "circulate_market_value": "93983840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 53, "hot_rank_chg": -2, "stock_cnt": 5826, "price": "29.96", "change": "-10.00", "market_id": "33", "circulate_market_value": "22818057000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 54, "hot_rank_chg": -2, "stock_cnt": 5826, "price": "30.28", "change": "2.44", "market_id": "33", "circulate_market_value": "57549016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 55, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "69.16", "change": "-6.44", "market_id": "17", "circulate_market_value": "81780949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 56, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "3.87", "change": "9.94", "market_id": "33", "circulate_market_value": "2750937100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "互动影游", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.23}, {"name": "影视", "change_pct": 4.03}, {"name": "旅游", "change_pct": 1.63}, {"name": "虚拟数字人", "change_pct": 1.14}, {"name": "AI营销", "change_pct": 2.69}, {"name": "短剧/互动影游", "change_pct": 3.16}, {"name": "IP经济/谷子经济", "change_pct": 1.55}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 57, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "136.72", "change": "-0.37", "market_id": "33", "circulate_market_value": "262886650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002881", "name": "美格智能", "hot_rank": 58, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "39.05", "change": "10.00", "market_id": "33", "circulate_market_value": "7106704000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "端侧AI"}, {"code": "600203", "name": "福日电子", "hot_rank": 59, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "11.92", "change": "9.96", "market_id": "17", "circulate_market_value": "7068417900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "消费电子", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.51}, {"name": "手机产业链", "change_pct": -1.71}, {"name": "LED", "change_pct": -1.29}, {"name": "机器人", "change_pct": -0.83}, {"name": "无人机", "change_pct": -1.19}, {"name": "MiniLED", "change_pct": -2.26}, {"name": "eSIM", "change_pct": 1.66}, {"name": "智慧灯杆", "change_pct": -0.75}, {"name": "华为产业链", "change_pct": -0.61}, {"name": "智能座舱", "change_pct": 0.02}]}, {"code": "300502", "name": "新易盛", "hot_rank": 60, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "542.60", "change": "-2.41", "market_id": "33", "circulate_market_value": "680552340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 61, "hot_rank_chg": -3, "stock_cnt": 5826, "price": "179.99", "change": "-8.05", "market_id": "33", "circulate_market_value": "57064724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603496", "name": "恒为科技", "hot_rank": 62, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "25.08", "change": "10.00", "market_id": "17", "circulate_market_value": "8030847800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾"}, {"code": "600488", "name": "津药药业", "hot_rank": 63, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "6.45", "change": "-7.59", "market_id": "17", "circulate_market_value": "7042669100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 0.97}, {"name": "化学原料药", "change_pct": 0.75}, {"name": "数字经济", "change_pct": 0.87}, {"name": "辅助生殖", "change_pct": 0.63}, {"name": "新冠病毒防治", "change_pct": 0.13}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 64, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "13.23", "change": "4.34", "market_id": "33", "circulate_market_value": "46013018000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 65, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "61.58", "change": "1.84", "market_id": "33", "circulate_market_value": "451078130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300968", "name": "格林精密", "hot_rank": 66, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "10.24", "change": "20.05", "market_id": "33", "circulate_market_value": "4233011200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI手机", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.51}, {"name": "手机产业链", "change_pct": -1.71}, {"name": "电子烟", "change_pct": -0.24}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "智能音箱", "change_pct": 0.65}, {"name": "机器人", "change_pct": -0.83}, {"name": "智能手表", "change_pct": -0.18}, {"name": "华为产业链", "change_pct": -0.61}, {"name": "智能眼镜/MR头显", "change_pct": -1.02}, {"name": "AI手机", "change_pct": -1.0}]}, {"code": "002241", "name": "歌尔股份", "hot_rank": 67, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "23.02", "change": "3.46", "market_id": "33", "circulate_market_value": "72414252000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 68, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "63.02", "change": "-0.94", "market_id": "17", "circulate_market_value": "1250574700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 69, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "9.36", "change": "9.99", "market_id": "33", "circulate_market_value": "3080585600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "细胞医疗", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.0}, {"name": "ST摘帽", "change_pct": -0.65}, {"name": "湖南国企改革", "change_pct": 0.77}, {"name": "污水处理", "change_pct": -0.26}, {"name": "智慧城市", "change_pct": 0.32}, {"name": "环保", "change_pct": -0.6}, {"name": "动力电池回收", "change_pct": -1.28}, {"name": "干细胞", "change_pct": 0.87}, {"name": "国企改革", "change_pct": -0.31}]}, {"code": "000636", "name": "风华高科", "hot_rank": 70, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "51.70", "change": "-5.14", "market_id": "33", "circulate_market_value": "59817578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 71, "hot_rank_chg": 3, "stock_cnt": 5826, "price": "4.09", "change": "9.95", "market_id": "17", "circulate_market_value": "6393963900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接投资长江存储", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.51}, {"name": "共享经济", "change_pct": 1.22}, {"name": "云计算数据中心", "change_pct": -0.29}, {"name": "旅游", "change_pct": 1.63}, {"name": "物业管理", "change_pct": 0.74}]}, {"code": "300251", "name": "光线传媒", "hot_rank": 72, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "13.57", "change": "9.52", "market_id": "33", "circulate_market_value": "37661728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 73, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "146.99", "change": "-3.57", "market_id": "17", "circulate_market_value": "351967780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 74, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "43.79", "change": "-8.10", "market_id": "17", "circulate_market_value": "37070570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603567", "name": "珍宝岛", "hot_rank": 75, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "5.48", "change": "10.04", "market_id": "17", "circulate_market_value": "5147930000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中成药集采", "xgb_concepts": [{"name": "中药", "change_pct": 1.37}, {"name": "创新药", "change_pct": 0.62}, {"name": "医药", "change_pct": 0.97}, {"name": "破净股", "change_pct": 0.2}, {"name": "流感", "change_pct": 1.12}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 76, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "401.74", "change": "-5.57", "market_id": "17", "circulate_market_value": "163242350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 77, "hot_rank_chg": -5, "stock_cnt": 5826, "price": "55.99", "change": "-2.63", "market_id": "17", "circulate_market_value": "357160340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002115", "name": "三维通信", "hot_rank": 78, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "11.18", "change": "7.19", "market_id": "33", "circulate_market_value": "8343256200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.89}, {"name": "手游", "change_pct": 1.03}, {"name": "5G", "change_pct": -2.01}, {"name": "人工智能", "change_pct": 0.23}, {"name": "物联网", "change_pct": -0.27}, {"name": "阿里巴巴概念股", "change_pct": 0.96}, {"name": "腾讯概念股", "change_pct": 0.47}, {"name": "快手概念股", "change_pct": 1.15}, {"name": "字节跳动概念股", "change_pct": 1.4}, {"name": "知识付费", "change_pct": 1.71}, {"name": "卫星互联网", "change_pct": -1.57}, {"name": "华为产业链", "change_pct": -0.61}, {"name": "短剧/互动影游", "change_pct": 3.16}, {"name": "小红书概念股", "change_pct": 1.46}, {"name": "海洋经济", "change_pct": -0.92}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 79, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "29.25", "change": "1.46", "market_id": "17", "circulate_market_value": "602602450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002294", "name": "信立泰", "hot_rank": 80, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "41.37", "change": "7.04", "market_id": "33", "circulate_market_value": "46109584000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002045", "name": "国光电器", "hot_rank": 81, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "8.34", "change": "10.03", "market_id": "33", "circulate_market_value": "4684785500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "音响电声", "xgb_concepts": [{"name": "手机产业链", "change_pct": -1.71}, {"name": "电子烟", "change_pct": -0.24}, {"name": "苹果产业链", "change_pct": -2.5}, {"name": "锂电池", "change_pct": -1.98}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "智能音箱", "change_pct": 0.65}, {"name": "新能源汽车", "change_pct": -1.16}, {"name": "黑色家电", "change_pct": 0.52}, {"name": "家电", "change_pct": -0.19}, {"name": "固态电池", "change_pct": -2.15}, {"name": "NFT", "change_pct": 1.72}, {"name": "元宇宙", "change_pct": 1.02}, {"name": "无线耳机", "change_pct": -1.51}, {"name": "智能手表", "change_pct": -0.18}, {"name": "华为鸿蒙", "change_pct": 1.43}, {"name": "华为产业链", "change_pct": -0.61}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 82, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "210.50", "change": "-2.08", "market_id": "33", "circulate_market_value": "164294900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600246", "name": "万通发展", "hot_rank": 83, "hot_rank_chg": 2, "stock_cnt": 5826, "price": "19.48", "change": "8.34", "market_id": "17", "circulate_market_value": "36825235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688041", "name": "海光信息", "hot_rank": 84, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "320.40", "change": "-1.15", "market_id": "17", "circulate_market_value": "744717920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 85, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "463.59", "change": "-5.00", "market_id": "33", "circulate_market_value": "130663719000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 86, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "4.98", "change": "-0.80", "market_id": "33", "circulate_market_value": "100189266000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.51}, {"name": "手机产业链", "change_pct": -1.71}, {"name": "超高清视频", "change_pct": -1.06}, {"name": "电竞", "change_pct": 1.07}, {"name": "半导体", "change_pct": -5.38}, {"name": "OLED", "change_pct": -3.65}, {"name": "光伏", "change_pct": -1.95}, {"name": "黑色家电", "change_pct": 0.52}, {"name": "家电", "change_pct": -0.19}, {"name": "智能制造", "change_pct": -1.17}, {"name": "工业互联网", "change_pct": -0.36}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.78}, {"name": "国产芯片", "change_pct": -4.25}, {"name": "腾讯概念股", "change_pct": 0.47}, {"name": "液晶面板/LCD", "change_pct": -3.53}, {"name": "MicroLED", "change_pct": -3.26}, {"name": "MiniLED", "change_pct": -2.26}, {"name": "华为产业链", "change_pct": -0.61}, {"name": "玻璃基板封装", "change_pct": -4.81}]}, {"code": "600721", "name": "百花医药", "hot_rank": 87, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "8.31", "change": "9.78", "market_id": "17", "circulate_market_value": "3195590800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.62}, {"name": "股权转让", "change_pct": -0.42}, {"name": "新疆概念", "change_pct": 0.54}, {"name": "医药", "change_pct": 0.97}, {"name": "流感", "change_pct": 1.12}, {"name": "国资入股", "change_pct": 0.26}, {"name": "减肥药", "change_pct": 1.79}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 88, "hot_rank_chg": -4, "stock_cnt": 5826, "price": "5.69", "change": "-1.56", "market_id": "17", "circulate_market_value": "70533747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.71}, {"name": "核电", "change_pct": -1.28}, {"name": "强势人气股", "change_pct": -2.03}, {"name": "电力体制改革", "change_pct": -1.22}, {"name": "水电", "change_pct": -0.64}, {"name": "火电", "change_pct": -1.52}, {"name": "光伏", "change_pct": -1.95}, {"name": "风电", "change_pct": -1.51}, {"name": "国企改革", "change_pct": -0.31}, {"name": "算电协同", "change_pct": -2.7}]}, {"code": "688525", "name": "佰维存储", "hot_rank": 89, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "300.25", "change": "-1.36", "market_id": "17", "circulate_market_value": "141587890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 91, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "48.24", "change": "4.62", "market_id": "33", "circulate_market_value": "56697627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002309", "name": "中利集团", "hot_rank": 92, "hot_rank_chg": 4, "stock_cnt": 5826, "price": "2.93", "change": "6.93", "market_id": "33", "circulate_market_value": "7049967700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.98}, {"name": "5G", "change_pct": -2.01}, {"name": "一带一路", "change_pct": -0.83}, {"name": "光通信", "change_pct": -3.36}, {"name": "军民融合", "change_pct": -1.16}, {"name": "光伏", "change_pct": -1.95}, {"name": "军工", "change_pct": -1.15}, {"name": "新能源汽车", "change_pct": -1.16}, {"name": "储能", "change_pct": -1.46}, {"name": "BIPV概念", "change_pct": -0.33}, {"name": "低价股", "change_pct": 0.61}, {"name": "钙钛矿电池", "change_pct": -1.88}, {"name": "异质结电池HJT", "change_pct": -2.61}, {"name": "华为产业链", "change_pct": -0.61}]}, {"code": "001896", "name": "豫能控股", "hot_rank": 93, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "13.50", "change": "-9.70", "market_id": "33", "circulate_market_value": "20598048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002653", "name": "海思科", "hot_rank": 94, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "79.19", "change": "6.83", "market_id": "33", "circulate_market_value": "42508094000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 95, "hot_rank_chg": -2, "stock_cnt": 5826, "price": "73.90", "change": "0.11", "market_id": "33", "circulate_market_value": "286843840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 96, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "38.60", "change": "-4.22", "market_id": "33", "circulate_market_value": "54813233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300255", "name": "常山药业", "hot_rank": 97, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "31.70", "change": "10.45", "market_id": "33", "circulate_market_value": "29088661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603698", "name": "航天工程", "hot_rank": 99, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "28.93", "change": "-9.99", "market_id": "17", "circulate_market_value": "15506191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 100, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "12.34", "change": "3.35", "market_id": "17", "circulate_market_value": "7340183600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": 0.42}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "装修装饰", "change_pct": -0.23}, {"name": "数字经济", "change_pct": 0.87}, {"name": "百度概念股", "change_pct": 1.25}, {"name": "全息概念", "change_pct": 0.17}, {"name": "NFT", "change_pct": 1.72}, {"name": "元宇宙", "change_pct": 1.02}, {"name": "虚拟数字人", "change_pct": 1.14}, {"name": "网红/MCN", "change_pct": 1.27}, {"name": "ChatGPT", "change_pct": 1.06}, {"name": "智能眼镜/MR头显", "change_pct": -1.02}, {"name": "多模态", "change_pct": 0.89}, {"name": "Sora/AI视频", "change_pct": 1.54}]}];
const LIMIT_UP_POOL = [{"code": "002632", "name": "道明光学", "price": 9.63, "change_pct": 10.06, "reason": "全资子公司浙江道明超导科技有限公司专注于石墨烯散热膜的研发和生产，石墨烯散热膜极佳的柔韧性使其被应用于折叠手机弯折处，公司石墨烯散热膜已应用于OPPO Find N3 Flip折叠屏手机", "plates": ["AI手机"], "limit_up_days": 1, "turnover_ratio": 2.63, "first_limit_up": 1784165100, "break_limit_up_times": 0}, {"code": "600664", "name": "哈药股份", "price": 4.94, "change_pct": 10.02, "reason": "全国医药行业首家上市公司；预计上半年净利润同比增长46.40%至68.36%，主要是受医药工业板块业绩提升影响", "plates": ["医药"], "limit_up_days": 5, "turnover_ratio": 11.78, "first_limit_up": 1784165100, "break_limit_up_times": 4}, {"code": "002739", "name": "儒意电影", "price": 10.32, "change_pct": 10.02, "reason": "国内领先的影院投资及运营商，影院经营的领军品牌", "plates": ["影视"], "limit_up_days": 2, "turnover_ratio": 3.95, "first_limit_up": 1784165433, "break_limit_up_times": 0}, {"code": "002173", "name": "创新医疗", "price": 17.44, "change_pct": 10.03, "reason": "公司此前出资设立的“杭州博灵医疗科技有限公司”，该公司运用脑机接口技术帮助偏瘫患者恢复对残疾肢体自主控制的技术研究工作取得了一定的进展", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.64, "first_limit_up": 1784168727, "break_limit_up_times": 4}, {"code": "300968", "name": "格林精密", "price": 10.24, "change_pct": 20.05, "reason": "1、公司专注于智能终端精密结构件，生产的手机相关精密部件可应用于AI手机的机身、接口等部位，适配AI手机的硬件装配需求；\n2、公司生产的精密结构件可用于AR、VR、MR等智能终端产品，公司生产的精密结构件已在VR眼镜终端产品上实现应用", "plates": ["AI手机"], "limit_up_days": 1, "turnover_ratio": 3.93, "first_limit_up": 1784165793, "break_limit_up_times": 0}, {"code": "603108", "name": "润达医疗", "price": 10.31, "change_pct": 10.03, "reason": "公司携手华为、华鲲振宇推出十三款智慧医院AI一体机，启动“燎原千城”计划，将三甲医院验证的AI能力下沉基层医院", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.38, "first_limit_up": 1784172344, "break_limit_up_times": 1}, {"code": "001230", "name": "劲旅环境", "price": 19.46, "change_pct": 10.01, "reason": "公司在环卫智能装备领域产品包含环卫机器人等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.97, "first_limit_up": 1784166300, "break_limit_up_times": 2}, {"code": "600436", "name": "片仔癀", "price": 141.15, "change_pct": 10.0, "reason": "稀缺国宝名药，肝胆用药第一品牌，源于明朝末年的中华老字号", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.84, "first_limit_up": 1784178777, "break_limit_up_times": 3}, {"code": "002760", "name": "凤形股份", "price": 17.97, "change_pct": 9.98, "reason": "1、公司拟斥资1.475亿元收购白银华鑫25%股权，标的公司是一家覆盖固废及危险废物收集、无害化处置、资源回收利用的环保企业，主要产品为处置固、危废产生的含锌、银、铁等有价金属的资源化产品；\n2、公司高压发电机已批量用于数据中心、大数据平台等关键场景", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.91, "first_limit_up": 1784165679, "break_limit_up_times": 1}, {"code": "002881", "name": "美格智能", "price": 39.05, "change_pct": 10.0, "reason": "公司5G模组已用于国内人形机器人并小批量发货，高算力AI模组为合作伙伴人形机器人原型机提供端侧AI算力", "plates": ["物联网"], "limit_up_days": 1, "turnover_ratio": 6.79, "first_limit_up": 1784167662, "break_limit_up_times": 0}, {"code": "001258", "name": "立新能源", "price": 7.52, "change_pct": 9.94, "reason": "公司立足新疆，专注风力发电和光伏发电业务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.32, "first_limit_up": 1784178000, "break_limit_up_times": 2}, {"code": "002829", "name": "星网宇达", "price": 18.84, "change_pct": 9.98, "reason": "公司主要从事信息感知、卫星通信以及无人系统业务，上半年盈利9000万元-1.2亿元，因“公司对外投资项目2026年1-6月收益表现良好，投资收益同比实现增长，有效补充当期利润，弥补本期经营亏损。经初步测算，影响本期利润金额预计约为1.4亿元”", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 8.55, "first_limit_up": 1784166096, "break_limit_up_times": 0}, {"code": "002350", "name": "北京科锐", "price": 16.06, "change_pct": 10.0, "reason": "1、目前公司数据中心业务领域主要划分为“设备制造”及“运维服务”两大版块，涉及产品基本涵盖中压、低压配电领域各类设备；\n2、国内配电及控制设备制造品牌企业之一；公司配电设备电力电子系列产品包括超级电容等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.45, "first_limit_up": 1784168148, "break_limit_up_times": 0}, {"code": "002726", "name": "ST龙大", "price": 2.01, "change_pct": 9.84, "reason": "龙大转债即将到期，公司坦言“钱不够还”", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.46, "first_limit_up": 1784165541, "break_limit_up_times": 6}, {"code": "000639", "name": "ST西王", "price": 1.67, "change_pct": 9.87, "reason": "公司高管拟增持300万至600万元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 12.54, "first_limit_up": 1784168943, "break_limit_up_times": 5}, {"code": "000677", "name": "ST海龙", "price": 1.98, "change_pct": 10.0, "reason": "全资子公司拟收购群健航空不少于40%股权", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 10.17, "first_limit_up": 1784183745, "break_limit_up_times": 0}, {"code": "000014", "name": "沙河股份", "price": 10, "change_pct": 10.01, "reason": "公司主营房地产开发和销售，拟2.74亿元收购晶华电子70%股份", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 6.22, "first_limit_up": 1784170713, "break_limit_up_times": 0}, {"code": "600203", "name": "福日电子", "price": 11.92, "change_pct": 9.96, "reason": "1、公司智能终端产品业务主要为全球消费电子品牌商提供手机、平板、AIoT等产品的ODM/JDM/OEM服务，并聚焦“终端+AI”，已开发AI眼镜等新兴智能硬件产品；\n2、公司全资子公司深圳市中诺通讯有限公司可根据客户需求提供酒店机器人、工业机器人的JDM/OEM服务，目前酒店服务机器人已少量出货，工业机器人处于试产阶段", "plates": ["AI手机"], "limit_up_days": 1, "turnover_ratio": 8.77, "first_limit_up": 1784166303, "break_limit_up_times": 0}, {"code": "600162", "name": "香江控股", "price": 2.78, "change_pct": 9.88, "reason": "公司是以商贸流通为主业的广州优质开发商", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 10.56, "first_limit_up": 1784165457, "break_limit_up_times": 2}, {"code": "301176", "name": "逸豪新材", "price": 58.2, "change_pct": 20.0, "reason": "公司HVLP铜箔已向客户送样并在认证过程中", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.74, "first_limit_up": 1784166285, "break_limit_up_times": 0}, {"code": "001365", "name": "天海电子", "price": 43.25, "change_pct": 9.99, "reason": "公司与上海它石智航技术有限公司签署长期战略合作框架协议，围绕人形机器人、具身大模型、汽车线束智能制造多领域开展深度协同", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 19.25, "first_limit_up": 1784168340, "break_limit_up_times": 0}, {"code": "603496", "name": "恒为科技", "price": 25.08, "change_pct": 10.0, "reason": "公司提供智算可视化运维、AI一体机、光交换机、集群组网调优等算力底座产品与服务，形成AI算力底座+AI应用双轮驱动战略", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.65, "first_limit_up": 1784167092, "break_limit_up_times": 1}, {"code": "002365", "name": "永安药业", "price": 13.18, "change_pct": 10.02, "reason": "公司是牛磺酸行业龙头，上半年净利最高预增290%，主要原因为主营产品牛磺酸的销量增加和销售价格比上年同期上涨", "plates": ["医药", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 10.52, "first_limit_up": 1784165604, "break_limit_up_times": 0}, {"code": "603327", "name": "福蓉科技", "price": 8.57, "change_pct": 10.01, "reason": "公司生产的铝制结构件材料有用于折叠屏手机铰链，包括三星、谷歌、OPPO等品牌的折叠屏手机；上半年净利润预计增长68.94%", "plates": ["AI手机"], "limit_up_days": 1, "turnover_ratio": 2.18, "first_limit_up": 1784165402, "break_limit_up_times": 0}, {"code": "300805", "name": "电声股份", "price": 8.83, "change_pct": 19.97, "reason": "公司有品牌线上代运营服务，合作电商平台包含微信", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 15.04, "first_limit_up": 1784166381, "break_limit_up_times": 2}, {"code": "002775", "name": "文科股份", "price": 3.5, "change_pct": 10.06, "reason": "公司与新凯来有办公场所租赁业务合作", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.76, "first_limit_up": 1784178243, "break_limit_up_times": 1}, {"code": "600602", "name": "云赛智联", "price": 18.26, "change_pct": 10.0, "reason": "公司与阶跃星辰共同投资设立上海智能算力公司，其中阶跃星辰持股10%，云赛智联直接持股11%", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.19, "first_limit_up": 1784165939, "break_limit_up_times": 0}, {"code": "002127", "name": "南极电商", "price": 3.23, "change_pct": 9.86, "reason": "公司主要为小微电商及供应商提供品牌授权服务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.21, "first_limit_up": 1784168541, "break_limit_up_times": 1}, {"code": "000566", "name": "海南海药", "price": 5.67, "change_pct": 10.1, "reason": "海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 22.75, "first_limit_up": 1784170872, "break_limit_up_times": 1}, {"code": "603178", "name": "圣龙股份", "price": 15.74, "change_pct": 9.99, "reason": "国内动力系统泵类产品龙头企业；公司在电机、减速器、控制器领域的技术积累，均可以支持对人形机器人相关领域的研发；一季度业绩同比扭亏", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.93, "first_limit_up": 1784166798, "break_limit_up_times": 2}, {"code": "600611", "name": "大众交通", "price": 4.09, "change_pct": 9.95, "reason": "公司通过基金间接持有长江存储约0.051%股份", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.64, "first_limit_up": 1784180493, "break_limit_up_times": 1}, {"code": "601595", "name": "上海电影", "price": 18.16, "change_pct": 9.99, "reason": "公司拥有“专业发行+综合院线+高端影院”完整电影发行放映产业链", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 3.21, "first_limit_up": 1784170379, "break_limit_up_times": 0}, {"code": "600491", "name": "ST龙元", "price": 1.42, "change_pct": 10.08, "reason": "长三角建筑市场最大的民营施工企业之一，宁波开海投资拟要约收购公司6%股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 9.79, "first_limit_up": 1784165654, "break_limit_up_times": 23}, {"code": "603580", "name": "艾艾精工", "price": 40.84, "change_pct": 9.99, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 3, "turnover_ratio": 0.11, "first_limit_up": 1784165101, "break_limit_up_times": 0}, {"code": "603567", "name": "珍宝岛", "price": 5.48, "change_pct": 10.04, "reason": "公司拥有小儿热速清糖浆，可用于小儿外感风热所致的感冒", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.93, "first_limit_up": 1784179939, "break_limit_up_times": 0}, {"code": "002045", "name": "国光电器", "price": 8.34, "change_pct": 10.03, "reason": "1、全球知名的电声制造厂商；公司音响电声类业务主要产品包括扬声器、蓝牙音箱、智能音箱等，应用于可穿戴产品（如VR/AR）、智能手机、平板电脑等消费电子产品；\n2、公司为VR/AR设备供应声学模组，有MR设备声学模组的技术储备，公司也将生产VR整机", "plates": ["智能音箱"], "limit_up_days": 1, "turnover_ratio": 5.5, "first_limit_up": 1784165865, "break_limit_up_times": 0}, {"code": "000829", "name": "天音控股", "price": 9.12, "change_pct": 10.01, "reason": "公司开设了华为、苹果、小米、荣耀等多品牌门店", "plates": ["AI手机"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1784166663, "break_limit_up_times": 0}, {"code": "000892", "name": "欢瑞世纪", "price": 3.87, "change_pct": 9.94, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 10.8, "first_limit_up": 1784165697, "break_limit_up_times": 0}, {"code": "600187", "name": "*ST国中", "price": 1.57, "change_pct": 9.79, "reason": "公司上半年业绩同比扭亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.04, "first_limit_up": 1784165466, "break_limit_up_times": 0}, {"code": "002731", "name": "*ST萃华", "price": 2.3, "change_pct": 10.05, "reason": "“中华老字号”珠宝企业，主营业务为珠宝饰品，兼营铂金和镶嵌饰品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 35.19, "first_limit_up": 1784181969, "break_limit_up_times": 2}, {"code": "000676", "name": "智度股份", "price": 6.22, "change_pct": 10.09, "reason": "公司预计上半年净利润同比增长63.69%至75.81%，报告期内，公司主营业务稳健发展，为本期净利润提供稳定支撑，其中互联网媒体业务保持了较好的盈利能力，利润同比增长；公司对外转让参股公司上海邑炎信息科技有限公司22.4128%的股权确认投资收益约为0.67亿元，计入非经常性损益，相关事项已于2026年6月完成", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 6.61, "first_limit_up": 1784166405, "break_limit_up_times": 0}, {"code": "000920", "name": "沃顿科技", "price": 14.15, "change_pct": 10.03, "reason": "1、公司的超纯水系列膜产品是较为成熟的系列产品，已应用于半导体芯片等对水质要求极高的高端制造领域；\n2、公司膜产品在盐湖提锂领域已实现了成熟的应用，并承接了多个液体物料浓缩分离纯化的工程项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1784165841, "break_limit_up_times": 0}, {"code": "000504", "name": "南华生物", "price": 9.36, "change_pct": 9.99, "reason": "湖南省政府旗下，干细胞储存和节能环保双主业，其中生物医药板块主要为细胞医疗服务，为客户提供干细胞、免疫细胞等生物资源的检测及储存服务", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 8.73, "first_limit_up": 1784165958, "break_limit_up_times": 1}, {"code": "600785", "name": "新华百货", "price": 9.32, "change_pct": 10.04, "reason": "宁夏地区最大的商业零售企业；市场传闻控股股东协议转让股份后将注入半导体、集成电路、芯片资产，公司公告不存在该事项", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 9.57, "first_limit_up": 1784169153, "break_limit_up_times": 0}, {"code": "603716", "name": "塞力医疗", "price": 16.12, "change_pct": 10.03, "reason": "公司与华为技术有限公司及脑机智能全国重点实验室三方签署战略合作，聚焦于精神障碍精准诊疗领域，特别是人工智能在精神医学数字疗法中的应用\n", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 12.13, "first_limit_up": 1784171626, "break_limit_up_times": 0}, {"code": "603407", "name": "长裕集团", "price": 65.64, "change_pct": 10.01, "reason": "公司高纯氧化锆制品具有高绝缘性、高强度及导热特性，可用于HBM、SSD等存储芯片封装的陶瓷载板、散热底座等部件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.97, "first_limit_up": 1784166714, "break_limit_up_times": 0}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};