const UPDATE_TIME = "2026-07-16 02:08";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -0.46,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -0.75,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续202天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.46,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续249天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "猪肉",
    "rise": 1.29,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "CRO概念",
    "rise": -0.03,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": -1,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "高压氧舱",
    "rise": 1.29,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "医药ETF",
    "code": "886018"
  },
  {
    "name": "AI应用",
    "rise": 1.17,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "商业航天",
    "rise": 0.49,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续178天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": 0.54,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "AI手机",
    "rise": 3.11,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886070"
  },
  {
    "name": "人形机器人",
    "rise": 1.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续413天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "成飞概念",
    "rise": 0.6,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "军工ETF",
    "code": "886030"
  },
  {
    "name": "脑机接口",
    "rise": 0.51,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "光纤概念",
    "rise": -0.29,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "5GETF",
    "code": "886084"
  },
  {
    "name": "白酒概念",
    "rise": -0.04,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "算力租赁",
    "rise": 1.09,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续113天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "先进封装",
    "rise": -0.72,
    "rate": 0,
    "tag": "",
    "hotTag": "连续42天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "ST板块",
    "rise": 0.69,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "消费电子概念",
    "rise": 1.23,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "首次上榜",
    "rankChg": 2,
    "etfName": "消费电子ETF",
    "code": "885800"
  },
  {
    "name": "青蒿素",
    "rise": 0.9,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  }
];
const THS_EVENTS = [
  {
    "title": "AI手机备案公示 行业发展将有何变化？",
    "desc": "",
    "heat": 329776,
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
    "title": "公募布局创新药上游刚需方向 创新药板块有望迎来业绩估值双提升",
    "desc": "",
    "heat": 323531,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "博瑞医药",
        "code": "688166",
        "chg": 12.6693
      }
    ]
  },
  {
    "title": "2026暑期档票房反超去年同期",
    "desc": "",
    "heat": 316221,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "儒意电影",
        "code": "002739",
        "chg": 10.021322
      }
    ]
  },
  {
    "title": "荣耀IPO，最新进展曝光",
    "desc": "",
    "heat": 295225,
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
    "title": "长鑫科技开启申购 为中国第一、全球第四的DRAM厂商",
    "desc": "",
    "heat": 15940,
    "direction": "长鑫科技IPO",
    "themes": [
      "长鑫存储",
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "大普微-UW",
        "code": "301666",
        "chg": 11.631068
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玩具",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能音箱",
    "change": "+3.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+3.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+3.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能手表",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI手机",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑色家电",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁电存储",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "微信小店",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI PC",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "自动刹车",
    "change": "+2.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "掌纹识别",
    "change": "+2.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "无线耳机",
    "change": "+2.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+2.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能座舱",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "服务器",
    "change": "+2.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "WiFi",
    "change": "+1.97%",
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
    "stock_cnt": 5849,
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
        "change_pct": 0.93
      },
      {
        "name": "工业大麻",
        "change_pct": 0.34
      },
      {
        "name": "中药",
        "change_pct": -0.33
      },
      {
        "name": "保健品",
        "change_pct": 0.32
      },
      {
        "name": "医药",
        "change_pct": -0.2
      },
      {
        "name": "化学原料药",
        "change_pct": -0.34
      },
      {
        "name": "流感",
        "change_pct": -0.07
      },
      {
        "name": "振兴东北",
        "change_pct": 0.29
      },
      {
        "name": "食品",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 9,
    "hot_rank_chg": -5,
    "stock_cnt": 5849,
    "price": "6.29",
    "change": "-1.41",
    "market_id": "33",
    "circulate_market_value": "222105600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.36
      },
      {
        "name": "手机产业链",
        "change_pct": 1.72
      },
      {
        "name": "超高清视频",
        "change_pct": 0.5
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.05
      },
      {
        "name": "电竞",
        "change_pct": 1.84
      },
      {
        "name": "半导体",
        "change_pct": -0.53
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.43
      },
      {
        "name": "VR&AR",
        "change_pct": 1.77
      },
      {
        "name": "OLED",
        "change_pct": -0.19
      },
      {
        "name": "京津冀",
        "change_pct": 0.5
      },
      {
        "name": "物联网",
        "change_pct": 1.28
      },
      {
        "name": "指纹识别",
        "change_pct": 0.31
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.22
      },
      {
        "name": "白马股",
        "change_pct": -0.12
      },
      {
        "name": "智能制造",
        "change_pct": 0.72
      },
      {
        "name": "小米概念股",
        "change_pct": 1.33
      },
      {
        "name": "国产芯片",
        "change_pct": -0.08
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.23
      },
      {
        "name": "全息概念",
        "change_pct": 1.74
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.11
      },
      {
        "name": "MicroLED",
        "change_pct": 0.05
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.05
      },
      {
        "name": "智能手表",
        "change_pct": 3.03
      },
      {
        "name": "MiniLED",
        "change_pct": 0.79
      },
      {
        "name": "传感器",
        "change_pct": 0.64
      },
      {
        "name": "大硅片",
        "change_pct": -1.95
      },
      {
        "name": "AI PC",
        "change_pct": 2.3
      },
      {
        "name": "华为产业链",
        "change_pct": 1.09
      },
      {
        "name": "回购",
        "change_pct": 0.17
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.92
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.51
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 12,
    "hot_rank_chg": 13,
    "stock_cnt": 5849,
    "price": "5.34",
    "change": "3.69",
    "market_id": "33",
    "circulate_market_value": "6911600900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.33
      },
      {
        "name": "创新药",
        "change_pct": -0.41
      },
      {
        "name": "央企改革",
        "change_pct": -0.2
      },
      {
        "name": "医疗器械",
        "change_pct": 0.25
      },
      {
        "name": "强势人气股",
        "change_pct": 0.32
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.43
      },
      {
        "name": "保健品",
        "change_pct": 0.32
      },
      {
        "name": "民营医院",
        "change_pct": 0.77
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 0.16
      },
      {
        "name": "医药",
        "change_pct": -0.2
      },
      {
        "name": "化学原料药",
        "change_pct": -0.34
      },
      {
        "name": "海南概念",
        "change_pct": -0.36
      },
      {
        "name": "脑科学",
        "change_pct": 0.32
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.08
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.14
      },
      {
        "name": "食品",
        "change_pct": 0.19
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.01
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.04
      },
      {
        "name": "自贸区",
        "change_pct": 0.42
      },
      {
        "name": "合成生物",
        "change_pct": 0.09
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 13,
    "hot_rank_chg": 27,
    "stock_cnt": 5849,
    "price": "7.88",
    "change": "2.60",
    "market_id": "33",
    "circulate_market_value": "12810467000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.93
      },
      {
        "name": "电竞",
        "change_pct": 1.84
      },
      {
        "name": "手游",
        "change_pct": 1.06
      },
      {
        "name": "强势人气股",
        "change_pct": 0.32
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "游戏",
        "change_pct": 1.04
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.43
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.13
      },
      {
        "name": "快手概念股",
        "change_pct": 1.47
      },
      {
        "name": "元宇宙",
        "change_pct": 1.86
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.42
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.32
      },
      {
        "name": "web3.0",
        "change_pct": 1.67
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.69
      },
      {
        "name": "数据要素",
        "change_pct": 1.33
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.0
      },
      {
        "name": "AI营销",
        "change_pct": 2.66
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.73
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.92
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.29
      },
      {
        "name": "人形机器人",
        "change_pct": 1.25
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.3
      },
      {
        "name": "多模态",
        "change_pct": 1.79
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 1.78
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.57
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.81
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 19,
    "hot_rank_chg": 15,
    "stock_cnt": 5849,
    "price": "6.17",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "6373213900.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "拟布局PCB",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.76
      },
      {
        "name": "锂电池",
        "change_pct": -0.0
      },
      {
        "name": "强势人气股",
        "change_pct": 0.32
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.04
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.55
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.5
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 1.59
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 23,
    "hot_rank_chg": 8,
    "stock_cnt": 5849,
    "price": "6.79",
    "change": "-2.72",
    "market_id": "17",
    "circulate_market_value": "7413910600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": -0.2
      },
      {
        "name": "化学原料药",
        "change_pct": -0.34
      },
      {
        "name": "数字经济",
        "change_pct": 1.43
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.04
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 24,
    "hot_rank_chg": 23,
    "stock_cnt": 5849,
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
        "change_pct": 2.67
      },
      {
        "name": "足球",
        "change_pct": 0.48
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.42
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.45
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.27
      },
      {
        "name": "大消费",
        "change_pct": -0.03
      },
      {
        "name": "盲盒",
        "change_pct": 1.77
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.3
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.57
      },
      {
        "name": "首发经济",
        "change_pct": 1.4
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.81
      },
      {
        "name": "服务消费",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 44,
    "hot_rank_chg": 0,
    "stock_cnt": 5849,
    "price": "10.17",
    "change": "2.83",
    "market_id": "17",
    "circulate_market_value": "5897467000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": -0.22
      },
      {
        "name": "民营医院",
        "change_pct": 0.77
      },
      {
        "name": "医药",
        "change_pct": -0.2
      },
      {
        "name": "振兴东北",
        "change_pct": 0.29
      },
      {
        "name": "宠物经济",
        "change_pct": 0.58
      },
      {
        "name": "眼科",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 45,
    "hot_rank_chg": 33,
    "stock_cnt": 5849,
    "price": "12.61",
    "change": "2.27",
    "market_id": "17",
    "circulate_market_value": "18570833000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 0.32
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.66
      },
      {
        "name": "火电",
        "change_pct": -0.72
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.14
      },
      {
        "name": "风电",
        "change_pct": -0.1
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 59,
    "hot_rank_chg": 8,
    "stock_cnt": 5849,
    "price": "5.75",
    "change": "-0.52",
    "market_id": "17",
    "circulate_market_value": "71277512000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.2
      },
      {
        "name": "核电",
        "change_pct": 0.1
      },
      {
        "name": "强势人气股",
        "change_pct": 0.32
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.66
      },
      {
        "name": "水电",
        "change_pct": -0.34
      },
      {
        "name": "火电",
        "change_pct": -0.72
      },
      {
        "name": "光伏",
        "change_pct": 0.01
      },
      {
        "name": "风电",
        "change_pct": -0.1
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "算电协同",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "002632",
    "name": "道明光学",
    "hot_rank": 68,
    "hot_rank_chg": 920,
    "stock_cnt": 5849,
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
        "change_pct": 1.36
      },
      {
        "name": "手机产业链",
        "change_pct": 1.72
      },
      {
        "name": "锂电池",
        "change_pct": -0.0
      },
      {
        "name": "石墨烯",
        "change_pct": 0.64
      },
      {
        "name": "VR&AR",
        "change_pct": 1.77
      },
      {
        "name": "光伏",
        "change_pct": 0.01
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.5
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.23
      },
      {
        "name": "固态电池",
        "change_pct": -0.04
      },
      {
        "name": "华为产业链",
        "change_pct": 1.09
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 70,
    "hot_rank_chg": 102,
    "stock_cnt": 5849,
    "price": "2.57",
    "change": "1.58",
    "market_id": "17",
    "circulate_market_value": "8399886000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.84
      },
      {
        "name": "强势人气股",
        "change_pct": 0.32
      },
      {
        "name": "养老产业",
        "change_pct": 0.64
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.55
      },
      {
        "name": "低价股",
        "change_pct": 0.59
      },
      {
        "name": "地摊经济",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 72,
    "hot_rank_chg": -1,
    "stock_cnt": 5849,
    "price": "5.34",
    "change": "-5.15",
    "market_id": "17",
    "circulate_market_value": "12766938200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -1.97
      },
      {
        "name": "强势人气股",
        "change_pct": 0.32
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "603327",
    "name": "福蓉科技",
    "hot_rank": 76,
    "hot_rank_chg": 998,
    "stock_cnt": 5849,
    "price": "8.57",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "8959586700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.36
      },
      {
        "name": "手机产业链",
        "change_pct": 1.72
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.05
      },
      {
        "name": "特斯拉",
        "change_pct": 0.75
      },
      {
        "name": "小米概念股",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 78,
    "hot_rank_chg": -16,
    "stock_cnt": 5849,
    "price": "7.40",
    "change": "-0.54",
    "market_id": "17",
    "circulate_market_value": "34150694000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 0.5
      },
      {
        "name": "国产软件",
        "change_pct": 1.1
      },
      {
        "name": "锂电池",
        "change_pct": -0.0
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "养老产业",
        "change_pct": 0.64
      },
      {
        "name": "大飞机",
        "change_pct": 0.04
      },
      {
        "name": "军民融合",
        "change_pct": 0.59
      },
      {
        "name": "物联网",
        "change_pct": 1.28
      },
      {
        "name": "大数据",
        "change_pct": 1.21
      },
      {
        "name": "智慧城市",
        "change_pct": 1.23
      },
      {
        "name": "军工",
        "change_pct": 0.44
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.5
      },
      {
        "name": "机器人",
        "change_pct": 1.13
      },
      {
        "name": "黑色家电",
        "change_pct": 2.41
      },
      {
        "name": "家电",
        "change_pct": 0.87
      },
      {
        "name": "储能",
        "change_pct": 0.22
      },
      {
        "name": "智能制造",
        "change_pct": 0.72
      },
      {
        "name": "工业互联网",
        "change_pct": 1.1
      },
      {
        "name": "数字经济",
        "change_pct": 1.43
      },
      {
        "name": "百度概念股",
        "change_pct": 1.71
      },
      {
        "name": "NFT",
        "change_pct": 1.7
      },
      {
        "name": "跨境支付",
        "change_pct": 1.51
      },
      {
        "name": "华为海思",
        "change_pct": 1.22
      },
      {
        "name": "云游戏",
        "change_pct": 0.88
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.27
      },
      {
        "name": "华为产业链",
        "change_pct": 1.09
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.14
      },
      {
        "name": "服务器",
        "change_pct": 2.07
      },
      {
        "name": "星闪概念",
        "change_pct": 1.89
      },
      {
        "name": "低空经济",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 82,
    "hot_rank_chg": 219,
    "stock_cnt": 5849,
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
        "change_pct": 1.11
      },
      {
        "name": "影视",
        "change_pct": 2.67
      },
      {
        "name": "旅游",
        "change_pct": 0.94
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.42
      },
      {
        "name": "AI营销",
        "change_pct": 2.66
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.3
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.57
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 84,
    "hot_rank_chg": -43,
    "stock_cnt": 5849,
    "price": "2.80",
    "change": "-4.11",
    "market_id": "17",
    "circulate_market_value": "3577279400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.33
      },
      {
        "name": "甲醇",
        "change_pct": -2.08
      },
      {
        "name": "化肥",
        "change_pct": -0.88
      },
      {
        "name": "保健品",
        "change_pct": 0.32
      },
      {
        "name": "民营医院",
        "change_pct": 0.77
      },
      {
        "name": "医药",
        "change_pct": -0.2
      },
      {
        "name": "煤化工",
        "change_pct": -1.82
      },
      {
        "name": "食品",
        "change_pct": 0.19
      },
      {
        "name": "大农业",
        "change_pct": 0.29
      },
      {
        "name": "低价股",
        "change_pct": 0.59
      },
      {
        "name": "干细胞",
        "change_pct": 0.28
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.54
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 85,
    "hot_rank_chg": -11,
    "stock_cnt": 5849,
    "price": "10.31",
    "change": "0.58",
    "market_id": "17",
    "circulate_market_value": "18446016000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.39
      },
      {
        "name": "纯碱",
        "change_pct": -1.18
      },
      {
        "name": "食品",
        "change_pct": 0.19
      },
      {
        "name": "土壤修复",
        "change_pct": 0.62
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.32
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 3.57
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 87,
    "hot_rank_chg": 69,
    "stock_cnt": 5849,
    "price": "9.92",
    "change": "-8.40",
    "market_id": "33",
    "circulate_market_value": "5785450900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -1.25
      },
      {
        "name": "一带一路",
        "change_pct": -0.0
      },
      {
        "name": "天然气",
        "change_pct": -1.05
      },
      {
        "name": "油气改革",
        "change_pct": -1.01
      },
      {
        "name": "页岩气",
        "change_pct": -0.88
      },
      {
        "name": "深地经济",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 94,
    "hot_rank_chg": -14,
    "stock_cnt": 5849,
    "price": "2.79",
    "change": "1.46",
    "market_id": "33",
    "circulate_market_value": "6713109100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.0
      },
      {
        "name": "5G",
        "change_pct": 0.79
      },
      {
        "name": "一带一路",
        "change_pct": -0.0
      },
      {
        "name": "光通信",
        "change_pct": 0.16
      },
      {
        "name": "军民融合",
        "change_pct": 0.59
      },
      {
        "name": "光伏",
        "change_pct": 0.01
      },
      {
        "name": "军工",
        "change_pct": 0.44
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.5
      },
      {
        "name": "储能",
        "change_pct": 0.22
      },
      {
        "name": "BIPV概念",
        "change_pct": 0.64
      },
      {
        "name": "低价股",
        "change_pct": 0.59
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.05
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.19
      },
      {
        "name": "华为产业链",
        "change_pct": 1.09
      }
    ]
  },
  {
    "code": "600203",
    "name": "福日电子",
    "hot_rank": 95,
    "hot_rank_chg": 268,
    "stock_cnt": 5849,
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
        "change_pct": 1.36
      },
      {
        "name": "手机产业链",
        "change_pct": 1.72
      },
      {
        "name": "LED",
        "change_pct": 0.76
      },
      {
        "name": "机器人",
        "change_pct": 1.13
      },
      {
        "name": "无人机",
        "change_pct": 0.77
      },
      {
        "name": "MiniLED",
        "change_pct": 0.79
      },
      {
        "name": "eSIM",
        "change_pct": 3.49
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.79
      },
      {
        "name": "华为产业链",
        "change_pct": 1.09
      },
      {
        "name": "智能座舱",
        "change_pct": 2.04
      }
    ]
  },
  {
    "code": "603669",
    "name": "灵康药业",
    "hot_rank": 98,
    "hot_rank_chg": -60,
    "stock_cnt": 5849,
    "price": "7.63",
    "change": "-5.92",
    "market_id": "17",
    "circulate_market_value": "5435086800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "西藏概念",
        "change_pct": 0.42
      },
      {
        "name": "民营医院",
        "change_pct": 0.77
      },
      {
        "name": "医药",
        "change_pct": -0.2
      },
      {
        "name": "流感",
        "change_pct": -0.07
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": -0.56
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.58
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5849, "price": "21.30", "change": "-7.83", "market_id": "33", "circulate_market_value": "70772482000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5849, "price": "4.94", "change": "10.02", "market_id": "17", "circulate_market_value": "12441438800.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.93}, {"name": "工业大麻", "change_pct": 0.34}, {"name": "中药", "change_pct": -0.33}, {"name": "保健品", "change_pct": 0.32}, {"name": "医药", "change_pct": -0.2}, {"name": "化学原料药", "change_pct": -0.34}, {"name": "流感", "change_pct": -0.07}, {"name": "振兴东北", "change_pct": 0.29}, {"name": "食品", "change_pct": 0.19}]}, {"code": "603127", "name": "昭衍新药", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5849, "price": "54.50", "change": "7.67", "market_id": "17", "circulate_market_value": "34354239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5849, "price": "88.07", "change": "-4.75", "market_id": "17", "circulate_market_value": "157593740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 5, "hot_rank_chg": 6, "stock_cnt": 5849, "price": "78.30", "change": "-0.51", "market_id": "33", "circulate_market_value": "118816509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 6, "hot_rank_chg": 7, "stock_cnt": 5849, "price": "37.73", "change": "6.19", "market_id": "33", "circulate_market_value": "107853341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5849, "price": "271.60", "change": "3.47", "market_id": "33", "circulate_market_value": "376524980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5849, "price": "39.76", "change": "1.79", "market_id": "17", "circulate_market_value": "13395937300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 9, "hot_rank_chg": -5, "stock_cnt": 5849, "price": "6.29", "change": "-1.41", "market_id": "33", "circulate_market_value": "222105600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.36}, {"name": "手机产业链", "change_pct": 1.72}, {"name": "超高清视频", "change_pct": 0.5}, {"name": "苹果产业链", "change_pct": 1.05}, {"name": "电竞", "change_pct": 1.84}, {"name": "半导体", "change_pct": -0.53}, {"name": "人工智能", "change_pct": 1.11}, {"name": "互联网医疗", "change_pct": 0.43}, {"name": "VR&AR", "change_pct": 1.77}, {"name": "OLED", "change_pct": -0.19}, {"name": "京津冀", "change_pct": 0.5}, {"name": "物联网", "change_pct": 1.28}, {"name": "指纹识别", "change_pct": 0.31}, {"name": "汽车零部件", "change_pct": 1.22}, {"name": "白马股", "change_pct": -0.12}, {"name": "智能制造", "change_pct": 0.72}, {"name": "小米概念股", "change_pct": 1.33}, {"name": "国产芯片", "change_pct": -0.08}, {"name": "液晶面板/LCD", "change_pct": -0.23}, {"name": "全息概念", "change_pct": 1.74}, {"name": "理想汽车概念股", "change_pct": 1.11}, {"name": "MicroLED", "change_pct": 0.05}, {"name": "钙钛矿电池", "change_pct": -0.05}, {"name": "智能手表", "change_pct": 3.03}, {"name": "MiniLED", "change_pct": 0.79}, {"name": "传感器", "change_pct": 0.64}, {"name": "大硅片", "change_pct": -1.95}, {"name": "AI PC", "change_pct": 2.3}, {"name": "华为产业链", "change_pct": 1.09}, {"name": "回购", "change_pct": 0.17}, {"name": "智能眼镜/MR头显", "change_pct": 1.92}, {"name": "玻璃基板封装", "change_pct": -0.51}]}, {"code": "001309", "name": "德明利", "hot_rank": 10, "hot_rank_chg": -2, "stock_cnt": 5849, "price": "596.16", "change": "-10.00", "market_id": "33", "circulate_market_value": "98406945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 11, "hot_rank_chg": 10, "stock_cnt": 5849, "price": "535.10", "change": "-6.43", "market_id": "17", "circulate_market_value": "357710030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 12, "hot_rank_chg": 13, "stock_cnt": 5849, "price": "5.34", "change": "3.69", "market_id": "33", "circulate_market_value": "6911600900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.33}, {"name": "创新药", "change_pct": -0.41}, {"name": "央企改革", "change_pct": -0.2}, {"name": "医疗器械", "change_pct": 0.25}, {"name": "强势人气股", "change_pct": 0.32}, {"name": "互联网医疗", "change_pct": 0.43}, {"name": "保健品", "change_pct": 0.32}, {"name": "民营医院", "change_pct": 0.77}, {"name": "CAR-T疗法", "change_pct": 0.16}, {"name": "医药", "change_pct": -0.2}, {"name": "化学原料药", "change_pct": -0.34}, {"name": "海南概念", "change_pct": -0.36}, {"name": "脑科学", "change_pct": 0.32}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.08}, {"name": "海南自由贸易港", "change_pct": 0.14}, {"name": "食品", "change_pct": 0.19}, {"name": "国企改革", "change_pct": 0.05}, {"name": "医疗信息化", "change_pct": 1.01}, {"name": "新冠病毒防治", "change_pct": -0.04}, {"name": "自贸区", "change_pct": 0.42}, {"name": "合成生物", "change_pct": 0.09}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 13, "hot_rank_chg": 27, "stock_cnt": 5849, "price": "7.88", "change": "2.60", "market_id": "33", "circulate_market_value": "12810467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.93}, {"name": "电竞", "change_pct": 1.84}, {"name": "手游", "change_pct": 1.06}, {"name": "强势人气股", "change_pct": 0.32}, {"name": "人工智能", "change_pct": 1.11}, {"name": "游戏", "change_pct": 1.04}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.43}, {"name": "腾讯概念股", "change_pct": 1.13}, {"name": "快手概念股", "change_pct": 1.47}, {"name": "元宇宙", "change_pct": 1.86}, {"name": "虚拟数字人", "change_pct": 1.42}, {"name": "东数西算/算力", "change_pct": 1.32}, {"name": "web3.0", "change_pct": 1.67}, {"name": "AIGC概念", "change_pct": 1.69}, {"name": "数据要素", "change_pct": 1.33}, {"name": "字节跳动概念股", "change_pct": 2.0}, {"name": "AI营销", "change_pct": 2.66}, {"name": "ChatGPT", "change_pct": 1.73}, {"name": "智能眼镜/MR头显", "change_pct": 1.92}, {"name": "人工智能大模型", "change_pct": 1.29}, {"name": "人形机器人", "change_pct": 1.25}, {"name": "短剧/互动影游", "change_pct": 2.3}, {"name": "多模态", "change_pct": 1.79}, {"name": "Sora/AI视频", "change_pct": 1.78}, {"name": "IP经济/谷子经济", "change_pct": 1.57}, {"name": "小红书概念股", "change_pct": 1.81}]}, {"code": "000021", "name": "深科技", "hot_rank": 14, "hot_rank_chg": 5, "stock_cnt": 5849, "price": "46.00", "change": "-2.67", "market_id": "33", "circulate_market_value": "72411157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 15, "hot_rank_chg": 9, "stock_cnt": 5849, "price": "68.53", "change": "-3.55", "market_id": "17", "circulate_market_value": "168148380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 16, "hot_rank_chg": 13, "stock_cnt": 5849, "price": "20.19", "change": "-2.98", "market_id": "17", "circulate_market_value": "42228237000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 17, "hot_rank_chg": 3, "stock_cnt": 5849, "price": "43.10", "change": "5.40", "market_id": "33", "circulate_market_value": "33721639000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 18, "hot_rank_chg": 15, "stock_cnt": 5849, "price": "40.71", "change": "3.19", "market_id": "33", "circulate_market_value": "164004740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 19, "hot_rank_chg": 15, "stock_cnt": 5849, "price": "6.17", "change": "9.98", "market_id": "33", "circulate_market_value": "6373213900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟布局PCB", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.76}, {"name": "锂电池", "change_pct": -0.0}, {"name": "强势人气股", "change_pct": 0.32}, {"name": "铜箔/覆铜板", "change_pct": 1.04}, {"name": "粤港澳大湾区", "change_pct": 0.55}, {"name": "新能源汽车", "change_pct": 0.5}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 1.59}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 20, "hot_rank_chg": -13, "stock_cnt": 5849, "price": "32.05", "change": "-10.00", "market_id": "17", "circulate_market_value": "5863013400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 21, "hot_rank_chg": 1, "stock_cnt": 5849, "price": "87.00", "change": "2.63", "market_id": "33", "circulate_market_value": "127614367000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 22, "hot_rank_chg": 15, "stock_cnt": 5849, "price": "136.50", "change": "-6.00", "market_id": "33", "circulate_market_value": "137180540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 23, "hot_rank_chg": 8, "stock_cnt": 5849, "price": "6.79", "change": "-2.72", "market_id": "17", "circulate_market_value": "7413910600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": -0.2}, {"name": "化学原料药", "change_pct": -0.34}, {"name": "数字经济", "change_pct": 1.43}, {"name": "辅助生殖", "change_pct": -0.04}, {"name": "新冠病毒防治", "change_pct": -0.04}]}, {"code": "002739", "name": "儒意电影", "hot_rank": 24, "hot_rank_chg": 23, "stock_cnt": 5849, "price": "10.32", "change": "10.02", "market_id": "33", "circulate_market_value": "21486259000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "院线龙头", "xgb_concepts": [{"name": "影视", "change_pct": 2.67}, {"name": "足球", "change_pct": 0.48}, {"name": "阿里巴巴概念股", "change_pct": 1.42}, {"name": "拼多多概念股", "change_pct": 1.45}, {"name": "网红/MCN", "change_pct": 1.27}, {"name": "大消费", "change_pct": -0.03}, {"name": "盲盒", "change_pct": 1.77}, {"name": "短剧/互动影游", "change_pct": 2.3}, {"name": "IP经济/谷子经济", "change_pct": 1.57}, {"name": "首发经济", "change_pct": 1.4}, {"name": "小红书概念股", "change_pct": 1.81}, {"name": "服务消费", "change_pct": 0.76}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 25, "hot_rank_chg": -7, "stock_cnt": 5849, "price": "73.32", "change": "-0.81", "market_id": "17", "circulate_market_value": "86700103000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 26, "hot_rank_chg": 13, "stock_cnt": 5849, "price": "54.80", "change": "0.55", "market_id": "33", "circulate_market_value": "63300187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 27, "hot_rank_chg": 1, "stock_cnt": 5849, "price": "71.31", "change": "6.48", "market_id": "33", "circulate_market_value": "33178569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 28, "hot_rank_chg": 20, "stock_cnt": 5849, "price": "46.70", "change": "-1.99", "market_id": "17", "circulate_market_value": "39534041000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 29, "hot_rank_chg": -13, "stock_cnt": 5849, "price": "30.30", "change": "2.47", "market_id": "33", "circulate_market_value": "57587028000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 30, "hot_rank_chg": 21, "stock_cnt": 5849, "price": "112.09", "change": "0.00", "market_id": "17", "circulate_market_value": "40433486000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 31, "hot_rank_chg": 5, "stock_cnt": 5849, "price": "402.00", "change": "-5.51", "market_id": "17", "circulate_market_value": "163348000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 32, "hot_rank_chg": -22, "stock_cnt": 5849, "price": "312.40", "change": "2.63", "market_id": "17", "circulate_market_value": "147317420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 33, "hot_rank_chg": -19, "stock_cnt": 5849, "price": "127.76", "change": "-2.84", "market_id": "17", "circulate_market_value": "315986280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 34, "hot_rank_chg": -4, "stock_cnt": 5849, "price": "30.97", "change": "-7.03", "market_id": "33", "circulate_market_value": "23587291000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 35, "hot_rank_chg": 19, "stock_cnt": 5849, "price": "39.97", "change": "-1.84", "market_id": "17", "circulate_market_value": "136415600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 36, "hot_rank_chg": 39, "stock_cnt": 5849, "price": "142.48", "change": "3.75", "market_id": "33", "circulate_market_value": "273962040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 37, "hot_rank_chg": -2, "stock_cnt": 5849, "price": "1147.09", "change": "-1.96", "market_id": "33", "circulate_market_value": "1272401660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 38, "hot_rank_chg": 12, "stock_cnt": 5849, "price": "152.48", "change": "0.03", "market_id": "17", "circulate_market_value": "365113600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 39, "hot_rank_chg": -22, "stock_cnt": 5849, "price": "61.57", "change": "4.73", "market_id": "33", "circulate_market_value": "2013243100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 40, "hot_rank_chg": -28, "stock_cnt": 5849, "price": "14.77", "change": "-1.41", "market_id": "33", "circulate_market_value": "22535790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 41, "hot_rank_chg": 46, "stock_cnt": 5849, "price": "236.52", "change": "-6.39", "market_id": "17", "circulate_market_value": "270759700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002851", "name": "麦格米特", "hot_rank": 42, "hot_rank_chg": 123, "stock_cnt": 5849, "price": "156.17", "change": "-7.64", "market_id": "33", "circulate_market_value": "72025796000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 43, "hot_rank_chg": 213, "stock_cnt": 5849, "price": "25.35", "change": "5.41", "market_id": "17", "circulate_market_value": "21853028000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600829", "name": "人民同泰", "hot_rank": 44, "hot_rank_chg": 0, "stock_cnt": 5849, "price": "10.17", "change": "2.83", "market_id": "17", "circulate_market_value": "5897467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药商业", "change_pct": -0.22}, {"name": "民营医院", "change_pct": 0.77}, {"name": "医药", "change_pct": -0.2}, {"name": "振兴东北", "change_pct": 0.29}, {"name": "宠物经济", "change_pct": 0.58}, {"name": "眼科", "change_pct": -0.32}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 45, "hot_rank_chg": 33, "stock_cnt": 5849, "price": "12.61", "change": "2.27", "market_id": "17", "circulate_market_value": "18570833000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.2}, {"name": "强势人气股", "change_pct": 0.32}, {"name": "电力体制改革", "change_pct": -0.66}, {"name": "火电", "change_pct": -0.72}, {"name": "氢能源/燃料电池", "change_pct": 0.14}, {"name": "风电", "change_pct": -0.1}, {"name": "国企改革", "change_pct": 0.05}]}, {"code": "300475", "name": "香农芯创", "hot_rank": 46, "hot_rank_chg": 115, "stock_cnt": 5849, "price": "212.18", "change": "-4.04", "market_id": "33", "circulate_market_value": "95488589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 47, "hot_rank_chg": 17, "stock_cnt": 5849, "price": "550.00", "change": "-1.08", "market_id": "33", "circulate_market_value": "689808650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 48, "hot_rank_chg": -2, "stock_cnt": 5849, "price": "40.84", "change": "9.99", "market_id": "17", "circulate_market_value": "5336693500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "控制权拟变更"}, {"code": "002714", "name": "牧原股份", "hot_rank": 49, "hot_rank_chg": 19, "stock_cnt": 5849, "price": "40.51", "change": "2.29", "market_id": "33", "circulate_market_value": "132893025000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 50, "hot_rank_chg": 34, "stock_cnt": 5849, "price": "15.41", "change": "-8.87", "market_id": "33", "circulate_market_value": "12375343600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 51, "hot_rank_chg": 10, "stock_cnt": 5849, "price": "28.82", "change": "2.45", "market_id": "33", "circulate_market_value": "33030760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 52, "hot_rank_chg": 54, "stock_cnt": 5849, "price": "258.68", "change": "-8.31", "market_id": "33", "circulate_market_value": "57198231000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 53, "hot_rank_chg": 23, "stock_cnt": 5849, "price": "64.17", "change": "0.86", "market_id": "17", "circulate_market_value": "1273395400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 54, "hot_rank_chg": 2, "stock_cnt": 5849, "price": "27.17", "change": "-1.53", "market_id": "33", "circulate_market_value": "20578968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 55, "hot_rank_chg": 76, "stock_cnt": 5849, "price": "13.24", "change": "-7.48", "market_id": "17", "circulate_market_value": "12714309800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 56, "hot_rank_chg": 104, "stock_cnt": 5849, "price": "23.75", "change": "6.56", "market_id": "33", "circulate_market_value": "74710621000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 57, "hot_rank_chg": 3, "stock_cnt": 5849, "price": "50.42", "change": "-4.85", "market_id": "17", "circulate_market_value": "200247420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 58, "hot_rank_chg": 62, "stock_cnt": 5849, "price": "63.57", "change": "5.08", "market_id": "33", "circulate_market_value": "465655030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 59, "hot_rank_chg": 8, "stock_cnt": 5849, "price": "5.75", "change": "-0.52", "market_id": "17", "circulate_market_value": "71277512000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.2}, {"name": "核电", "change_pct": 0.1}, {"name": "强势人气股", "change_pct": 0.32}, {"name": "电力体制改革", "change_pct": -0.66}, {"name": "水电", "change_pct": -0.34}, {"name": "火电", "change_pct": -0.72}, {"name": "光伏", "change_pct": 0.01}, {"name": "风电", "change_pct": -0.1}, {"name": "国企改革", "change_pct": 0.05}, {"name": "算电协同", "change_pct": -0.85}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 60, "hot_rank_chg": 12, "stock_cnt": 5849, "price": "212.30", "change": "-1.23", "market_id": "33", "circulate_market_value": "165699800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 61, "hot_rank_chg": -35, "stock_cnt": 5849, "price": "39.80", "change": "-1.31", "market_id": "33", "circulate_market_value": "56517272000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 62, "hot_rank_chg": -9, "stock_cnt": 5849, "price": "98.40", "change": "1.70", "market_id": "17", "circulate_market_value": "143964550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 63, "hot_rank_chg": -48, "stock_cnt": 5849, "price": "188.13", "change": "-3.63", "market_id": "33", "circulate_market_value": "59645461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 64, "hot_rank_chg": 58, "stock_cnt": 5849, "price": "96.29", "change": "1.50", "market_id": "33", "circulate_market_value": "69744332000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003020", "name": "立方制药", "hot_rank": 65, "hot_rank_chg": 1, "stock_cnt": 5849, "price": "19.72", "change": "-9.99", "market_id": "33", "circulate_market_value": "3323771600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 66, "hot_rank_chg": -23, "stock_cnt": 5849, "price": "33.53", "change": "-1.03", "market_id": "33", "circulate_market_value": "36171069000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 67, "hot_rank_chg": 156, "stock_cnt": 5849, "price": "231.55", "change": "10.00", "market_id": "17", "circulate_market_value": "97920978000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "002632", "name": "道明光学", "hot_rank": 68, "hot_rank_chg": 920, "stock_cnt": 5849, "price": "9.63", "change": "10.06", "market_id": "33", "circulate_market_value": "5531720100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "努比亚AI手机", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.36}, {"name": "手机产业链", "change_pct": 1.72}, {"name": "锂电池", "change_pct": -0.0}, {"name": "石墨烯", "change_pct": 0.64}, {"name": "VR&AR", "change_pct": 1.77}, {"name": "光伏", "change_pct": 0.01}, {"name": "新能源汽车", "change_pct": 0.5}, {"name": "液晶面板/LCD", "change_pct": -0.23}, {"name": "固态电池", "change_pct": -0.04}, {"name": "华为产业链", "change_pct": 1.09}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 69, "hot_rank_chg": 72, "stock_cnt": 5849, "price": "46.60", "change": "-0.98", "market_id": "17", "circulate_market_value": "68128958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 70, "hot_rank_chg": 102, "stock_cnt": 5849, "price": "2.57", "change": "1.58", "market_id": "17", "circulate_market_value": "8399886000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.84}, {"name": "强势人气股", "change_pct": 0.32}, {"name": "养老产业", "change_pct": 0.64}, {"name": "粤港澳大湾区", "change_pct": 0.55}, {"name": "低价股", "change_pct": 0.59}, {"name": "地摊经济", "change_pct": 0.25}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 71, "hot_rank_chg": 61, "stock_cnt": 5849, "price": "13.03", "change": "2.84", "market_id": "33", "circulate_market_value": "45317432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 72, "hot_rank_chg": -1, "stock_cnt": 5849, "price": "5.34", "change": "-5.15", "market_id": "17", "circulate_market_value": "12766938200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -1.97}, {"name": "强势人气股", "change_pct": 0.32}, {"name": "国企改革", "change_pct": 0.05}, {"name": "河南国企改革", "change_pct": -0.41}]}, {"code": "301583", "name": "托伦斯", "hot_rank": 73, "hot_rank_chg": 10, "stock_cnt": 5849, "price": "135.00", "change": "-3.34", "market_id": "33", "circulate_market_value": "4162235400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 74, "hot_rank_chg": -47, "stock_cnt": 5849, "price": "56.19", "change": "-2.28", "market_id": "17", "circulate_market_value": "358436140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 75, "hot_rank_chg": 26, "stock_cnt": 5849, "price": "13.79", "change": "-1.99", "market_id": "17", "circulate_market_value": "17599567000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603327", "name": "福蓉科技", "hot_rank": 76, "hot_rank_chg": 998, "stock_cnt": 5849, "price": "8.57", "change": "10.01", "market_id": "17", "circulate_market_value": "8959586700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.36}, {"name": "手机产业链", "change_pct": 1.72}, {"name": "苹果产业链", "change_pct": 1.05}, {"name": "特斯拉", "change_pct": 0.75}, {"name": "小米概念股", "change_pct": 1.33}]}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 77, "hot_rank_chg": 139, "stock_cnt": 5849, "price": "18.35", "change": "2.46", "market_id": "17", "circulate_market_value": "320406450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 78, "hot_rank_chg": -16, "stock_cnt": 5849, "price": "7.40", "change": "-0.54", "market_id": "17", "circulate_market_value": "34150694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 0.5}, {"name": "国产软件", "change_pct": 1.1}, {"name": "锂电池", "change_pct": -0.0}, {"name": "人工智能", "change_pct": 1.11}, {"name": "养老产业", "change_pct": 0.64}, {"name": "大飞机", "change_pct": 0.04}, {"name": "军民融合", "change_pct": 0.59}, {"name": "物联网", "change_pct": 1.28}, {"name": "大数据", "change_pct": 1.21}, {"name": "智慧城市", "change_pct": 1.23}, {"name": "军工", "change_pct": 0.44}, {"name": "新能源汽车", "change_pct": 0.5}, {"name": "机器人", "change_pct": 1.13}, {"name": "黑色家电", "change_pct": 2.41}, {"name": "家电", "change_pct": 0.87}, {"name": "储能", "change_pct": 0.22}, {"name": "智能制造", "change_pct": 0.72}, {"name": "工业互联网", "change_pct": 1.1}, {"name": "数字经济", "change_pct": 1.43}, {"name": "百度概念股", "change_pct": 1.71}, {"name": "NFT", "change_pct": 1.7}, {"name": "跨境支付", "change_pct": 1.51}, {"name": "华为海思", "change_pct": 1.22}, {"name": "云游戏", "change_pct": 0.88}, {"name": "网红/MCN", "change_pct": 1.27}, {"name": "华为产业链", "change_pct": 1.09}, {"name": "毫米波雷达", "change_pct": 1.14}, {"name": "服务器", "change_pct": 2.07}, {"name": "星闪概念", "change_pct": 1.89}, {"name": "低空经济", "change_pct": 0.83}]}, {"code": "920117", "name": "龙鑫智能", "hot_rank": 79, "hot_rank_chg": 3588, "stock_cnt": 5849, "price": "39.45", "change": "121.26", "market_id": "151", "circulate_market_value": "795421020.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 80, "hot_rank_chg": 78, "stock_cnt": 5849, "price": "253.23", "change": "-2.38", "market_id": "33", "circulate_market_value": "275612510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002365", "name": "永安药业", "hot_rank": 81, "hot_rank_chg": 26, "stock_cnt": 5849, "price": "13.18", "change": "10.02", "market_id": "33", "circulate_market_value": "3232902000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "牛磺酸"}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 82, "hot_rank_chg": 219, "stock_cnt": 5849, "price": "3.87", "change": "9.94", "market_id": "33", "circulate_market_value": "2750937100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "互动影游", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.11}, {"name": "影视", "change_pct": 2.67}, {"name": "旅游", "change_pct": 0.94}, {"name": "虚拟数字人", "change_pct": 1.42}, {"name": "AI营销", "change_pct": 2.66}, {"name": "短剧/互动影游", "change_pct": 2.3}, {"name": "IP经济/谷子经济", "change_pct": 1.57}]}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 83, "hot_rank_chg": 7, "stock_cnt": 5849, "price": "19.07", "change": "-10.01", "market_id": "17", "circulate_market_value": "7989711600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 84, "hot_rank_chg": -43, "stock_cnt": 5849, "price": "2.80", "change": "-4.11", "market_id": "17", "circulate_market_value": "3577279400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.33}, {"name": "甲醇", "change_pct": -2.08}, {"name": "化肥", "change_pct": -0.88}, {"name": "保健品", "change_pct": 0.32}, {"name": "民营医院", "change_pct": 0.77}, {"name": "医药", "change_pct": -0.2}, {"name": "煤化工", "change_pct": -1.82}, {"name": "食品", "change_pct": 0.19}, {"name": "大农业", "change_pct": 0.29}, {"name": "低价股", "change_pct": 0.59}, {"name": "干细胞", "change_pct": 0.28}, {"name": "阿尔茨海默病", "change_pct": -0.54}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 85, "hot_rank_chg": -11, "stock_cnt": 5849, "price": "10.31", "change": "0.58", "market_id": "17", "circulate_market_value": "18446016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.39}, {"name": "纯碱", "change_pct": -1.18}, {"name": "食品", "change_pct": 0.19}, {"name": "土壤修复", "change_pct": 0.62}, {"name": "东数西算/算力", "change_pct": 1.32}, {"name": "OpenClaw概念", "change_pct": 3.57}, {"name": "DeepSeek概念股", "change_pct": 1.3}]}, {"code": "600879", "name": "航天电子", "hot_rank": 86, "hot_rank_chg": -28, "stock_cnt": 5849, "price": "17.54", "change": "0.92", "market_id": "17", "circulate_market_value": "57869710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 87, "hot_rank_chg": 69, "stock_cnt": 5849, "price": "9.92", "change": "-8.40", "market_id": "33", "circulate_market_value": "5785450900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -1.25}, {"name": "一带一路", "change_pct": -0.0}, {"name": "天然气", "change_pct": -1.05}, {"name": "油气改革", "change_pct": -1.01}, {"name": "页岩气", "change_pct": -0.88}, {"name": "深地经济", "change_pct": -0.59}]}, {"code": "000066", "name": "中国长城", "hot_rank": 88, "hot_rank_chg": 20, "stock_cnt": 5849, "price": "16.62", "change": "0.67", "market_id": "33", "circulate_market_value": "53609303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 89, "hot_rank_chg": 82, "stock_cnt": 5849, "price": "157.82", "change": "2.72", "market_id": "17", "circulate_market_value": "315570960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 90, "hot_rank_chg": 412, "stock_cnt": 5849, "price": "18.26", "change": "10.00", "market_id": "17", "circulate_market_value": "19616773000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "000858", "name": "五粮液", "hot_rank": 91, "hot_rank_chg": -59, "stock_cnt": 5849, "price": "72.93", "change": "-1.21", "market_id": "33", "circulate_market_value": "283156400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 92, "hot_rank_chg": -47, "stock_cnt": 5849, "price": "482.46", "change": "-1.14", "market_id": "33", "circulate_market_value": "135982260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002940", "name": "昂利康", "hot_rank": 93, "hot_rank_chg": 23, "stock_cnt": 5849, "price": "29.69", "change": "2.59", "market_id": "33", "circulate_market_value": "5500809000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002309", "name": "中利集团", "hot_rank": 94, "hot_rank_chg": -14, "stock_cnt": 5849, "price": "2.79", "change": "1.46", "market_id": "33", "circulate_market_value": "6713109100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.0}, {"name": "5G", "change_pct": 0.79}, {"name": "一带一路", "change_pct": -0.0}, {"name": "光通信", "change_pct": 0.16}, {"name": "军民融合", "change_pct": 0.59}, {"name": "光伏", "change_pct": 0.01}, {"name": "军工", "change_pct": 0.44}, {"name": "新能源汽车", "change_pct": 0.5}, {"name": "储能", "change_pct": 0.22}, {"name": "BIPV概念", "change_pct": 0.64}, {"name": "低价股", "change_pct": 0.59}, {"name": "钙钛矿电池", "change_pct": -0.05}, {"name": "异质结电池HJT", "change_pct": -0.19}, {"name": "华为产业链", "change_pct": 1.09}]}, {"code": "600203", "name": "福日电子", "hot_rank": 95, "hot_rank_chg": 268, "stock_cnt": 5849, "price": "11.92", "change": "9.96", "market_id": "17", "circulate_market_value": "7068417900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "消费电子", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.36}, {"name": "手机产业链", "change_pct": 1.72}, {"name": "LED", "change_pct": 0.76}, {"name": "机器人", "change_pct": 1.13}, {"name": "无人机", "change_pct": 0.77}, {"name": "MiniLED", "change_pct": 0.79}, {"name": "eSIM", "change_pct": 3.49}, {"name": "智慧灯杆", "change_pct": 0.79}, {"name": "华为产业链", "change_pct": 1.09}, {"name": "智能座舱", "change_pct": 2.04}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 96, "hot_rank_chg": 15, "stock_cnt": 5849, "price": "29.21", "change": "1.35", "market_id": "17", "circulate_market_value": "601778380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603669", "name": "灵康药业", "hot_rank": 98, "hot_rank_chg": -60, "stock_cnt": 5849, "price": "7.63", "change": "-5.92", "market_id": "17", "circulate_market_value": "5435086800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "西藏概念", "change_pct": 0.42}, {"name": "民营医院", "change_pct": 0.77}, {"name": "医药", "change_pct": -0.2}, {"name": "流感", "change_pct": -0.07}, {"name": "幽门螺杆菌概念", "change_pct": -0.56}, {"name": "阿尔茨海默病", "change_pct": -0.58}]}, {"code": "605090", "name": "九丰能源", "hot_rank": 99, "hot_rank_chg": -2, "stock_cnt": 5849, "price": "39.01", "change": "-6.23", "market_id": "17", "circulate_market_value": "27483597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 100, "hot_rank_chg": 27, "stock_cnt": 5849, "price": "18.76", "change": "-0.69", "market_id": "33", "circulate_market_value": "63065720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000078": "ST/风险警示股"};