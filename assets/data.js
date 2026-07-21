const UPDATE_TIME = "2026-07-21 05:45";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 5.3,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续252天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": 6.21,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续205天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "创新药",
    "rise": -1.66,
    "rate": 0,
    "tag": "",
    "hotTag": "连续82天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "国家大基金持股",
    "rise": 7.88,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "数字货币",
    "rise": 2.47,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "商业航天",
    "rise": 1.91,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续181天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "算力租赁",
    "rise": 1.22,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续116天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "PCB概念",
    "rise": 4.48,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": 2.27,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续416天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "先进封装",
    "rise": 5.92,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续45天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "跨境支付(CIPS)",
    "rise": 1.55,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "银行ETF",
    "code": "885966"
  },
  {
    "name": "光纤概念",
    "rise": 3.73,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "成长ETF",
    "code": "886084"
  },
  {
    "name": "芯片概念",
    "rise": 3.87,
    "rate": 0,
    "tag": "32家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "玻璃基板",
    "rise": 6.0,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "AI应用",
    "rise": 0.35,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 1,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "ST板块",
    "rise": -1.65,
    "rate": 0,
    "tag": "",
    "hotTag": "连续90天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "互联网金融",
    "rise": 0.58,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "猪肉",
    "rise": -2.36,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "白酒概念",
    "rise": -1.25,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "液冷服务器",
    "rise": 2.82,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  }
];
const THS_EVENTS = [
  {
    "title": "最高上涨40%，氧化锆龙头宣布涨价，融资资金大幅加仓3股",
    "desc": "",
    "heat": 1178987,
    "direction": "氧化锆",
    "themes": [
      "氧化锆"
    ],
    "stocks": [
      {
        "name": "爱迪特",
        "code": "301580",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "回购、增持、自购、分红！A股利好，密集发布",
    "desc": "",
    "heat": 425588,
    "direction": "回购增持",
    "themes": [
      "回购增持"
    ],
    "stocks": [
      {
        "name": "三环集团",
        "code": "300408",
        "chg": 15.68886
      }
    ]
  },
  {
    "title": "华东首个国产TPU千卡智算集群落地 算力供给加快转向“词元工厂”",
    "desc": "",
    "heat": 315037,
    "direction": "算力租赁",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "扬电科技",
        "code": "301012",
        "chg": 20.019627
      }
    ]
  },
  {
    "title": "证监会召开投资者座谈会听取意见建议 全力维护市场平稳运行 更好回报投资者",
    "desc": "",
    "heat": 5986,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "华林证券",
        "code": "002945",
        "chg": 3.743316
      }
    ]
  },
  {
    "title": "也门胡塞武装称对沙特实施海上禁运",
    "desc": "",
    "heat": 3086,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "雅克科技",
        "code": "002409",
        "chg": 9.08046
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "高带宽存储器HBM",
    "change": "+8.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+7.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锆",
    "change": "+7.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+7.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+7.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+7.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+6.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+6.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+6.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+6.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+6.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+6.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+6.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+6.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高价股",
    "change": "+5.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+5.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+5.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+5.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+5.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+5.55%",
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
    "hot_rank": 4,
    "hot_rank_chg": 7,
    "stock_cnt": 5855,
    "price": "5.73",
    "change": "7.91",
    "market_id": "17",
    "circulate_market_value": "14380691000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.36
      },
      {
        "name": "工业大麻",
        "change_pct": -1.01
      },
      {
        "name": "中药",
        "change_pct": -2.09
      },
      {
        "name": "强势人气股",
        "change_pct": -0.28
      },
      {
        "name": "保健品",
        "change_pct": -1.01
      },
      {
        "name": "民营医院",
        "change_pct": -1.81
      },
      {
        "name": "医药",
        "change_pct": -1.89
      },
      {
        "name": "化学原料药",
        "change_pct": -1.85
      },
      {
        "name": "流感",
        "change_pct": -1.69
      },
      {
        "name": "振兴东北",
        "change_pct": -0.75
      },
      {
        "name": "食品",
        "change_pct": -1.67
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 7,
    "hot_rank_chg": 3,
    "stock_cnt": 5855,
    "price": "6.16",
    "change": "6.39",
    "market_id": "33",
    "circulate_market_value": "217861550000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 3.52
      },
      {
        "name": "折叠屏",
        "change_pct": 4.44
      },
      {
        "name": "手机产业链",
        "change_pct": 3.8
      },
      {
        "name": "超高清视频",
        "change_pct": 2.17
      },
      {
        "name": "苹果产业链",
        "change_pct": 4.42
      },
      {
        "name": "电竞",
        "change_pct": 0.2
      },
      {
        "name": "半导体",
        "change_pct": 6.41
      },
      {
        "name": "人工智能",
        "change_pct": 0.92
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.93
      },
      {
        "name": "VR&AR",
        "change_pct": 2.8
      },
      {
        "name": "OLED",
        "change_pct": 5.0
      },
      {
        "name": "京津冀",
        "change_pct": 0.05
      },
      {
        "name": "物联网",
        "change_pct": 1.12
      },
      {
        "name": "指纹识别",
        "change_pct": 4.54
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.49
      },
      {
        "name": "白马股",
        "change_pct": 0.8
      },
      {
        "name": "智能制造",
        "change_pct": 1.88
      },
      {
        "name": "小米概念股",
        "change_pct": 3.3
      },
      {
        "name": "国产芯片",
        "change_pct": 5.23
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 3.84
      },
      {
        "name": "全息概念",
        "change_pct": 1.17
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.65
      },
      {
        "name": "MicroLED",
        "change_pct": 5.09
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.51
      },
      {
        "name": "智能手表",
        "change_pct": 3.48
      },
      {
        "name": "MiniLED",
        "change_pct": 3.56
      },
      {
        "name": "传感器",
        "change_pct": 3.81
      },
      {
        "name": "大硅片",
        "change_pct": 7.11
      },
      {
        "name": "AI PC",
        "change_pct": 3.08
      },
      {
        "name": "华为产业链",
        "change_pct": 2.21
      },
      {
        "name": "回购",
        "change_pct": 0.7
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.63
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 5.55
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 15,
    "hot_rank_chg": -12,
    "stock_cnt": 5855,
    "price": "6.48",
    "change": "1.57",
    "market_id": "17",
    "circulate_market_value": "80326657000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.09
      },
      {
        "name": "核电",
        "change_pct": 0.85
      },
      {
        "name": "强势人气股",
        "change_pct": -0.28
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.12
      },
      {
        "name": "水电",
        "change_pct": -2.7
      },
      {
        "name": "火电",
        "change_pct": -1.43
      },
      {
        "name": "光伏",
        "change_pct": 1.26
      },
      {
        "name": "风电",
        "change_pct": 0.79
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      },
      {
        "name": "算电协同",
        "change_pct": 1.17
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 17,
    "hot_rank_chg": -4,
    "stock_cnt": 5855,
    "price": "7.14",
    "change": "8.84",
    "market_id": "17",
    "circulate_market_value": "14502227000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.09
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.12
      },
      {
        "name": "火电",
        "change_pct": -1.43
      },
      {
        "name": "风电",
        "change_pct": 0.79
      },
      {
        "name": "储能",
        "change_pct": 1.37
      },
      {
        "name": "碳中和",
        "change_pct": -0.5
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 19,
    "hot_rank_chg": 95,
    "stock_cnt": 5855,
    "price": "4.90",
    "change": "-9.93",
    "market_id": "33",
    "circulate_market_value": "5061385400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.1
      },
      {
        "name": "锂电池",
        "change_pct": 2.78
      },
      {
        "name": "强势人气股",
        "change_pct": -0.28
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 3.7
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.42
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.48
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.65
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 39,
    "hot_rank_chg": 84,
    "stock_cnt": 5855,
    "price": "5.30",
    "change": "6.64",
    "market_id": "33",
    "circulate_market_value": "106609395000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 4.49
      },
      {
        "name": "手机产业链",
        "change_pct": 3.83
      },
      {
        "name": "超高清视频",
        "change_pct": 2.19
      },
      {
        "name": "电竞",
        "change_pct": 0.2
      },
      {
        "name": "半导体",
        "change_pct": 6.41
      },
      {
        "name": "OLED",
        "change_pct": 5.0
      },
      {
        "name": "光伏",
        "change_pct": 1.27
      },
      {
        "name": "黑色家电",
        "change_pct": 2.29
      },
      {
        "name": "家电",
        "change_pct": 0.34
      },
      {
        "name": "智能制造",
        "change_pct": 1.93
      },
      {
        "name": "工业互联网",
        "change_pct": 1.46
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.33
      },
      {
        "name": "国产芯片",
        "change_pct": 5.26
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.29
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 3.88
      },
      {
        "name": "MicroLED",
        "change_pct": 5.11
      },
      {
        "name": "MiniLED",
        "change_pct": 3.59
      },
      {
        "name": "华为产业链",
        "change_pct": 2.25
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 5.6
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 43,
    "hot_rank_chg": -37,
    "stock_cnt": 5855,
    "price": "10.01",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "9342569100.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "风电光伏",
    "xgb_concepts": [
      {
        "name": "新疆国企改革",
        "change_pct": -1.08
      },
      {
        "name": "新疆概念",
        "change_pct": -1.15
      },
      {
        "name": "光伏",
        "change_pct": 1.27
      },
      {
        "name": "风电",
        "change_pct": 0.82
      },
      {
        "name": "储能",
        "change_pct": 1.38
      },
      {
        "name": "国企改革",
        "change_pct": -0.37
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 53,
    "hot_rank_chg": 78,
    "stock_cnt": 5855,
    "price": "11.25",
    "change": "5.14",
    "market_id": "17",
    "circulate_market_value": "14345115000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.55
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "智能制造",
        "change_pct": 1.93
      },
      {
        "name": "工业互联网",
        "change_pct": 1.46
      },
      {
        "name": "培育钻石",
        "change_pct": 3.49
      },
      {
        "name": "金刚线",
        "change_pct": 2.93
      },
      {
        "name": "国资入股",
        "change_pct": -0.31
      },
      {
        "name": "深地经济",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "002208",
    "name": "合肥城建",
    "hot_rank": 60,
    "hot_rank_chg": 13,
    "stock_cnt": 5855,
    "price": "12.34",
    "change": "0.08",
    "market_id": "33",
    "circulate_market_value": "9909911800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 0.06
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.88
      },
      {
        "name": "房地产",
        "change_pct": -1.47
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.14
      },
      {
        "name": "住房租赁",
        "change_pct": -0.89
      },
      {
        "name": "物业管理",
        "change_pct": -1.39
      },
      {
        "name": "国企改革",
        "change_pct": -0.37
      },
      {
        "name": "旧改",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 62,
    "hot_rank_chg": 37,
    "stock_cnt": 5855,
    "price": "12.15",
    "change": "4.74",
    "market_id": "17",
    "circulate_market_value": "60616578000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.55
      },
      {
        "name": "半导体",
        "change_pct": 6.47
      },
      {
        "name": "5G",
        "change_pct": 3.1
      },
      {
        "name": "VR&AR",
        "change_pct": 2.82
      },
      {
        "name": "光通信",
        "change_pct": 4.55
      },
      {
        "name": "3D感应",
        "change_pct": 3.94
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.5
      },
      {
        "name": "LED",
        "change_pct": 2.25
      },
      {
        "name": "国产芯片",
        "change_pct": 5.26
      },
      {
        "name": "MicroLED",
        "change_pct": 5.11
      },
      {
        "name": "第三代半导体",
        "change_pct": 5.27
      },
      {
        "name": "激光雷达",
        "change_pct": 4.91
      },
      {
        "name": "华为汽车",
        "change_pct": 1.01
      },
      {
        "name": "MiniLED",
        "change_pct": 3.59
      },
      {
        "name": "氮化镓",
        "change_pct": 5.02
      },
      {
        "name": "大基金概念",
        "change_pct": 7.53
      },
      {
        "name": "碳化硅",
        "change_pct": 5.66
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 6.5
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 72,
    "hot_rank_chg": 35,
    "stock_cnt": 5855,
    "price": "6.90",
    "change": "8.83",
    "market_id": "33",
    "circulate_market_value": "8687296900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.95
      },
      {
        "name": "游戏",
        "change_pct": 0.23
      },
      {
        "name": "智能音箱",
        "change_pct": 2.36
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.33
      },
      {
        "name": "数字经济",
        "change_pct": 0.77
      },
      {
        "name": "百度概念股",
        "change_pct": 1.15
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.29
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -0.29
      },
      {
        "name": "全息概念",
        "change_pct": 1.17
      },
      {
        "name": "NFT",
        "change_pct": 0.66
      },
      {
        "name": "元宇宙",
        "change_pct": 1.16
      },
      {
        "name": "web3.0",
        "change_pct": 1.84
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.99
      },
      {
        "name": "数字人民币",
        "change_pct": 2.82
      },
      {
        "name": "智慧政务",
        "change_pct": 1.18
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.81
      },
      {
        "name": "盲盒",
        "change_pct": -0.18
      },
      {
        "name": "AI营销",
        "change_pct": 0.88
      },
      {
        "name": "华为产业链",
        "change_pct": 2.25
      },
      {
        "name": "供应链金融",
        "change_pct": 0.4
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.39
      },
      {
        "name": "区块链",
        "change_pct": 1.16
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 73,
    "hot_rank_chg": 141,
    "stock_cnt": 5855,
    "price": "12.39",
    "change": "2.06",
    "market_id": "33",
    "circulate_market_value": "43091556000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.33
      },
      {
        "name": "人工智能",
        "change_pct": 0.95
      },
      {
        "name": "VR&AR",
        "change_pct": 2.82
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.3
      },
      {
        "name": "大数据",
        "change_pct": 1.21
      },
      {
        "name": "教育",
        "change_pct": -0.16
      },
      {
        "name": "百度概念股",
        "change_pct": 1.15
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.33
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.29
      },
      {
        "name": "传媒",
        "change_pct": -0.29
      },
      {
        "name": "快手概念股",
        "change_pct": 0.87
      },
      {
        "name": "NFT",
        "change_pct": 0.66
      },
      {
        "name": "元宇宙",
        "change_pct": 1.16
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.73
      },
      {
        "name": "web3.0",
        "change_pct": 1.84
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.62
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.99
      },
      {
        "name": "职业教育",
        "change_pct": 0.13
      },
      {
        "name": "云游戏",
        "change_pct": 1.35
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.44
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 2.46
      },
      {
        "name": "AI营销",
        "change_pct": 0.88
      },
      {
        "name": "词元概念/Token",
        "change_pct": 1.88
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.0
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.9
      },
      {
        "name": "智谱AI",
        "change_pct": 1.33
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.9
      },
      {
        "name": "区块链",
        "change_pct": 1.16
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 93,
    "hot_rank_chg": -28,
    "stock_cnt": 5855,
    "price": "11.22",
    "change": "-8.03",
    "market_id": "33",
    "circulate_market_value": "6537792800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -1.94
      },
      {
        "name": "一带一路",
        "change_pct": 0.09
      },
      {
        "name": "天然气",
        "change_pct": -1.58
      },
      {
        "name": "油气改革",
        "change_pct": -2.4
      },
      {
        "name": "页岩气",
        "change_pct": -1.71
      },
      {
        "name": "深地经济",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 94,
    "hot_rank_chg": -3,
    "stock_cnt": 5855,
    "price": "2.61",
    "change": "-5.09",
    "market_id": "17",
    "circulate_market_value": "8530623500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.47
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "养老产业",
        "change_pct": -1.22
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.38
      },
      {
        "name": "民营医院",
        "change_pct": -1.82
      },
      {
        "name": "低价股",
        "change_pct": -1.52
      },
      {
        "name": "地摊经济",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "001248",
    "name": "华润新能源",
    "hot_rank": 100,
    "hot_rank_chg": 24,
    "stock_cnt": 5855,
    "price": "12.74",
    "change": "-1.85",
    "market_id": "33",
    "circulate_market_value": "13535024000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.1
      },
      {
        "name": "次新股",
        "change_pct": 2.67
      },
      {
        "name": "光伏",
        "change_pct": 1.27
      },
      {
        "name": "风电",
        "change_pct": 0.82
      },
      {
        "name": "国企改革",
        "change_pct": -0.37
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000938", "name": "紫光股份", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5855, "price": "41.46", "change": "10.00", "market_id": "33", "circulate_market_value": "118578613000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5855, "price": "498.28", "change": "3.19", "market_id": "33", "circulate_market_value": "82250088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": 4, "stock_cnt": 5855, "price": "82.45", "change": "7.09", "market_id": "17", "circulate_market_value": "147537230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 4, "hot_rank_chg": 7, "stock_cnt": 5855, "price": "5.73", "change": "7.91", "market_id": "17", "circulate_market_value": "14380691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.36}, {"name": "工业大麻", "change_pct": -1.01}, {"name": "中药", "change_pct": -2.09}, {"name": "强势人气股", "change_pct": -0.28}, {"name": "保健品", "change_pct": -1.01}, {"name": "民营医院", "change_pct": -1.81}, {"name": "医药", "change_pct": -1.89}, {"name": "化学原料药", "change_pct": -1.85}, {"name": "流感", "change_pct": -1.69}, {"name": "振兴东北", "change_pct": -0.75}, {"name": "食品", "change_pct": -1.67}]}, {"code": "002185", "name": "华天科技", "hot_rank": 5, "hot_rank_chg": 4, "stock_cnt": 5855, "price": "17.80", "change": "5.58", "market_id": "33", "circulate_market_value": "59109975000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5855, "price": "226.62", "change": "4.08", "market_id": "33", "circulate_market_value": "314168230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 7, "hot_rank_chg": 3, "stock_cnt": 5855, "price": "6.16", "change": "6.39", "market_id": "33", "circulate_market_value": "217861550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 3.52}, {"name": "折叠屏", "change_pct": 4.44}, {"name": "手机产业链", "change_pct": 3.8}, {"name": "超高清视频", "change_pct": 2.17}, {"name": "苹果产业链", "change_pct": 4.42}, {"name": "电竞", "change_pct": 0.2}, {"name": "半导体", "change_pct": 6.41}, {"name": "人工智能", "change_pct": 0.92}, {"name": "互联网医疗", "change_pct": -0.93}, {"name": "VR&AR", "change_pct": 2.8}, {"name": "OLED", "change_pct": 5.0}, {"name": "京津冀", "change_pct": 0.05}, {"name": "物联网", "change_pct": 1.12}, {"name": "指纹识别", "change_pct": 4.54}, {"name": "汽车零部件", "change_pct": 0.49}, {"name": "白马股", "change_pct": 0.8}, {"name": "智能制造", "change_pct": 1.88}, {"name": "小米概念股", "change_pct": 3.3}, {"name": "国产芯片", "change_pct": 5.23}, {"name": "液晶面板/LCD", "change_pct": 3.84}, {"name": "全息概念", "change_pct": 1.17}, {"name": "理想汽车概念股", "change_pct": 0.65}, {"name": "MicroLED", "change_pct": 5.09}, {"name": "钙钛矿电池", "change_pct": 2.51}, {"name": "智能手表", "change_pct": 3.48}, {"name": "MiniLED", "change_pct": 3.56}, {"name": "传感器", "change_pct": 3.81}, {"name": "大硅片", "change_pct": 7.11}, {"name": "AI PC", "change_pct": 3.08}, {"name": "华为产业链", "change_pct": 2.21}, {"name": "回购", "change_pct": 0.7}, {"name": "智能眼镜/MR头显", "change_pct": 3.63}, {"name": "玻璃基板封装", "change_pct": 5.55}]}, {"code": "002156", "name": "通富微电", "hot_rank": 8, "hot_rank_chg": 33, "stock_cnt": 5855, "price": "69.23", "change": "9.89", "market_id": "33", "circulate_market_value": "105007694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 9, "hot_rank_chg": 30, "stock_cnt": 5855, "price": "38.65", "change": "9.99", "market_id": "33", "circulate_market_value": "60841113000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端存储封测"}, {"code": "603986", "name": "兆易创新", "hot_rank": 10, "hot_rank_chg": -2, "stock_cnt": 5855, "price": "469.40", "change": "8.58", "market_id": "17", "circulate_market_value": "313790110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 11, "hot_rank_chg": 11, "stock_cnt": 5855, "price": "1118.70", "change": "11.42", "market_id": "33", "circulate_market_value": "1234386230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 12, "hot_rank_chg": 25, "stock_cnt": 5855, "price": "30.60", "change": "6.40", "market_id": "33", "circulate_market_value": "23161754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 13, "hot_rank_chg": 3, "stock_cnt": 5855, "price": "58.21", "change": "2.92", "market_id": "17", "circulate_market_value": "142826750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 14, "hot_rank_chg": 46, "stock_cnt": 5855, "price": "28.42", "change": "-8.53", "market_id": "17", "circulate_market_value": "9575265000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 15, "hot_rank_chg": -12, "stock_cnt": 5855, "price": "6.48", "change": "1.57", "market_id": "17", "circulate_market_value": "80326657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.09}, {"name": "核电", "change_pct": 0.85}, {"name": "强势人气股", "change_pct": -0.28}, {"name": "电力体制改革", "change_pct": -2.12}, {"name": "水电", "change_pct": -2.7}, {"name": "火电", "change_pct": -1.43}, {"name": "光伏", "change_pct": 1.26}, {"name": "风电", "change_pct": 0.79}, {"name": "国企改革", "change_pct": -0.38}, {"name": "算电协同", "change_pct": 1.17}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 16, "hot_rank_chg": 4, "stock_cnt": 5855, "price": "86.41", "change": "6.30", "market_id": "33", "circulate_market_value": "126734268000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 17, "hot_rank_chg": -4, "stock_cnt": 5855, "price": "7.14", "change": "8.84", "market_id": "17", "circulate_market_value": "14502227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.09}, {"name": "电力体制改革", "change_pct": -2.12}, {"name": "火电", "change_pct": -1.43}, {"name": "风电", "change_pct": 0.79}, {"name": "储能", "change_pct": 1.37}, {"name": "碳中和", "change_pct": -0.5}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "600667", "name": "太极实业", "hot_rank": 18, "hot_rank_chg": 24, "stock_cnt": 5855, "price": "16.07", "change": "5.93", "market_id": "17", "circulate_market_value": "33611083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 19, "hot_rank_chg": 95, "stock_cnt": 5855, "price": "4.90", "change": "-9.93", "market_id": "33", "circulate_market_value": "5061385400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.1}, {"name": "锂电池", "change_pct": 2.78}, {"name": "强势人气股", "change_pct": -0.28}, {"name": "铜箔/覆铜板", "change_pct": 3.7}, {"name": "粤港澳大湾区", "change_pct": -0.42}, {"name": "新能源汽车", "change_pct": 1.48}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.65}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 20, "hot_rank_chg": -8, "stock_cnt": 5855, "price": "13.07", "change": "1.95", "market_id": "17", "circulate_market_value": "19248278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 21, "hot_rank_chg": 24, "stock_cnt": 5855, "price": "33.46", "change": "-2.65", "market_id": "33", "circulate_market_value": "26179259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 22, "hot_rank_chg": -4, "stock_cnt": 5855, "price": "544.00", "change": "6.67", "market_id": "33", "circulate_market_value": "682233020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 23, "hot_rank_chg": 17, "stock_cnt": 5855, "price": "33.64", "change": "4.41", "market_id": "17", "circulate_market_value": "114811626000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 24, "hot_rank_chg": 42, "stock_cnt": 5855, "price": "184.66", "change": "8.30", "market_id": "33", "circulate_market_value": "144027440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 25, "hot_rank_chg": 19, "stock_cnt": 5855, "price": "102.94", "change": "-0.29", "market_id": "33", "circulate_market_value": "85363731000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 26, "hot_rank_chg": 52, "stock_cnt": 5855, "price": "38.43", "change": "7.14", "market_id": "17", "circulate_market_value": "32533045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 27, "hot_rank_chg": 54, "stock_cnt": 5855, "price": "48.50", "change": "3.19", "market_id": "17", "circulate_market_value": "30572121000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 28, "hot_rank_chg": 27, "stock_cnt": 5855, "price": "59.33", "change": "5.01", "market_id": "17", "circulate_market_value": "1177350000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 29, "hot_rank_chg": 32, "stock_cnt": 5855, "price": "42.22", "change": "7.05", "market_id": "17", "circulate_market_value": "167680400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 30, "hot_rank_chg": 57, "stock_cnt": 5855, "price": "43.11", "change": "2.94", "market_id": "33", "circulate_market_value": "49867265000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 31, "hot_rank_chg": 5, "stock_cnt": 5855, "price": "388.00", "change": "1.57", "market_id": "17", "circulate_market_value": "157236670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 32, "hot_rank_chg": 77, "stock_cnt": 5855, "price": "32.60", "change": "9.10", "market_id": "17", "circulate_market_value": "54248742000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 33, "hot_rank_chg": -28, "stock_cnt": 5855, "price": "80.27", "change": "3.98", "market_id": "17", "circulate_market_value": "33421836000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 34, "hot_rank_chg": 24, "stock_cnt": 5855, "price": "94.75", "change": "4.08", "market_id": "17", "circulate_market_value": "138624400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 35, "hot_rank_chg": 80, "stock_cnt": 5855, "price": "59.90", "change": "19.99", "market_id": "33", "circulate_market_value": "51134751000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "氧化锆提价"}, {"code": "002463", "name": "沪电股份", "hot_rank": 36, "hot_rank_chg": 23, "stock_cnt": 5855, "price": "119.79", "change": "4.15", "market_id": "33", "circulate_market_value": "230333470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 37, "hot_rank_chg": 73, "stock_cnt": 5855, "price": "132.71", "change": "7.60", "market_id": "17", "circulate_market_value": "317774300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 38, "hot_rank_chg": -9, "stock_cnt": 5855, "price": "29.46", "change": "4.76", "market_id": "33", "circulate_market_value": "31780486000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 39, "hot_rank_chg": 84, "stock_cnt": 5855, "price": "5.30", "change": "6.64", "market_id": "33", "circulate_market_value": "106609395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 4.49}, {"name": "手机产业链", "change_pct": 3.83}, {"name": "超高清视频", "change_pct": 2.19}, {"name": "电竞", "change_pct": 0.2}, {"name": "半导体", "change_pct": 6.41}, {"name": "OLED", "change_pct": 5.0}, {"name": "光伏", "change_pct": 1.27}, {"name": "黑色家电", "change_pct": 2.29}, {"name": "家电", "change_pct": 0.34}, {"name": "智能制造", "change_pct": 1.93}, {"name": "工业互联网", "change_pct": 1.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.33}, {"name": "国产芯片", "change_pct": 5.26}, {"name": "腾讯概念股", "change_pct": 1.29}, {"name": "液晶面板/LCD", "change_pct": 3.88}, {"name": "MicroLED", "change_pct": 5.11}, {"name": "MiniLED", "change_pct": 3.59}, {"name": "华为产业链", "change_pct": 2.25}, {"name": "玻璃基板封装", "change_pct": 5.6}]}, {"code": "000988", "name": "华工科技", "hot_rank": 40, "hot_rank_chg": 12, "stock_cnt": 5855, "price": "111.09", "change": "4.94", "market_id": "33", "circulate_market_value": "111643857000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 41, "hot_rank_chg": -20, "stock_cnt": 5855, "price": "34.47", "change": "2.19", "market_id": "33", "circulate_market_value": "138872380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 42, "hot_rank_chg": 198, "stock_cnt": 5855, "price": "69.91", "change": "-3.52", "market_id": "33", "circulate_market_value": "50702079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 43, "hot_rank_chg": -37, "stock_cnt": 5855, "price": "10.01", "change": "10.00", "market_id": "33", "circulate_market_value": "9342569100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "风电光伏", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": -1.08}, {"name": "新疆概念", "change_pct": -1.15}, {"name": "光伏", "change_pct": 1.27}, {"name": "风电", "change_pct": 0.82}, {"name": "储能", "change_pct": 1.38}, {"name": "国企改革", "change_pct": -0.37}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 44, "hot_rank_chg": 58, "stock_cnt": 5855, "price": "37.29", "change": "3.38", "market_id": "17", "circulate_market_value": "54517786000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 45, "hot_rank_chg": 228, "stock_cnt": 5855, "price": "309.13", "change": "16.65", "market_id": "33", "circulate_market_value": "151251570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 46, "hot_rank_chg": -21, "stock_cnt": 5855, "price": "107.58", "change": "10.00", "market_id": "17", "circulate_market_value": "38806623000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "688008", "name": "澜起科技", "hot_rank": 47, "hot_rank_chg": 38, "stock_cnt": 5855, "price": "212.00", "change": "11.61", "market_id": "17", "circulate_market_value": "242690080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 48, "hot_rank_chg": -16, "stock_cnt": 5855, "price": "13.43", "change": "11.54", "market_id": "33", "circulate_market_value": "4029366800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 49, "hot_rank_chg": 1, "stock_cnt": 5855, "price": "14.24", "change": "-3.91", "market_id": "33", "circulate_market_value": "21727126000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 50, "hot_rank_chg": 105, "stock_cnt": 5855, "price": "169.50", "change": "10.29", "market_id": "33", "circulate_market_value": "76204556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 51, "hot_rank_chg": 68, "stock_cnt": 5855, "price": "228.33", "change": "6.93", "market_id": "33", "circulate_market_value": "247825960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 52, "hot_rank_chg": 94, "stock_cnt": 5855, "price": "142.48", "change": "9.17", "market_id": "33", "circulate_market_value": "45373565000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 53, "hot_rank_chg": 78, "stock_cnt": 5855, "price": "11.25", "change": "5.14", "market_id": "17", "circulate_market_value": "14345115000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.55}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "智能制造", "change_pct": 1.93}, {"name": "工业互联网", "change_pct": 1.46}, {"name": "培育钻石", "change_pct": 3.49}, {"name": "金刚线", "change_pct": 2.93}, {"name": "国资入股", "change_pct": -0.31}, {"name": "深地经济", "change_pct": -0.91}]}, {"code": "301308", "name": "江波龙", "hot_rank": 54, "hot_rank_chg": 40, "stock_cnt": 5855, "price": "407.50", "change": "8.24", "market_id": "33", "circulate_market_value": "114798276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 55, "hot_rank_chg": -36, "stock_cnt": 5855, "price": "14.93", "change": "10.02", "market_id": "17", "circulate_market_value": "11754036700.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "数据中心交换机"}, {"code": "002491", "name": "通鼎互联", "hot_rank": 56, "hot_rank_chg": 74, "stock_cnt": 5855, "price": "16.60", "change": "-1.54", "market_id": "33", "circulate_market_value": "19541148000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 57, "hot_rank_chg": 95, "stock_cnt": 5855, "price": "105.44", "change": "15.84", "market_id": "33", "circulate_market_value": "196853200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 58, "hot_rank_chg": -30, "stock_cnt": 5855, "price": "23.74", "change": "-8.59", "market_id": "17", "circulate_market_value": "4342837300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 59, "hot_rank_chg": -25, "stock_cnt": 5855, "price": "37.89", "change": "4.90", "market_id": "33", "circulate_market_value": "139594240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 60, "hot_rank_chg": 13, "stock_cnt": 5855, "price": "12.34", "change": "0.08", "market_id": "33", "circulate_market_value": "9909911800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 0.06}, {"name": "蚂蚁集团概念股", "change_pct": 0.88}, {"name": "房地产", "change_pct": -1.47}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "安徽国企改革", "change_pct": 0.14}, {"name": "住房租赁", "change_pct": -0.89}, {"name": "物业管理", "change_pct": -1.39}, {"name": "国企改革", "change_pct": -0.37}, {"name": "旧改", "change_pct": -0.99}]}, {"code": "000066", "name": "中国长城", "hot_rank": 61, "hot_rank_chg": 102, "stock_cnt": 5855, "price": "14.81", "change": "2.85", "market_id": "33", "circulate_market_value": "47803241000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 62, "hot_rank_chg": 37, "stock_cnt": 5855, "price": "12.15", "change": "4.74", "market_id": "17", "circulate_market_value": "60616578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.55}, {"name": "半导体", "change_pct": 6.47}, {"name": "5G", "change_pct": 3.1}, {"name": "VR&AR", "change_pct": 2.82}, {"name": "光通信", "change_pct": 4.55}, {"name": "3D感应", "change_pct": 3.94}, {"name": "汽车零部件", "change_pct": 0.5}, {"name": "LED", "change_pct": 2.25}, {"name": "国产芯片", "change_pct": 5.26}, {"name": "MicroLED", "change_pct": 5.11}, {"name": "第三代半导体", "change_pct": 5.27}, {"name": "激光雷达", "change_pct": 4.91}, {"name": "华为汽车", "change_pct": 1.01}, {"name": "MiniLED", "change_pct": 3.59}, {"name": "氮化镓", "change_pct": 5.02}, {"name": "大基金概念", "change_pct": 7.53}, {"name": "碳化硅", "change_pct": 5.66}, {"name": "光电共封装CPO", "change_pct": 6.5}]}, {"code": "002432", "name": "九安医疗", "hot_rank": 63, "hot_rank_chg": -49, "stock_cnt": 5855, "price": "79.75", "change": "10.00", "market_id": "33", "circulate_market_value": "37105468000.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "参股月之暗面/DeepSeek"}, {"code": "688347", "name": "华虹宏力", "hot_rank": 64, "hot_rank_chg": 144, "stock_cnt": 5855, "price": "386.95", "change": "16.73", "market_id": "17", "circulate_market_value": "157778860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 65, "hot_rank_chg": 262, "stock_cnt": 5855, "price": "31.05", "change": "9.99", "market_id": "17", "circulate_market_value": "20249931000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "002371", "name": "北方华创", "hot_rank": 66, "hot_rank_chg": 137, "stock_cnt": 5855, "price": "744.60", "change": "10.00", "market_id": "33", "circulate_market_value": "539916790000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体设备"}, {"code": "301526", "name": "国际复材", "hot_rank": 67, "hot_rank_chg": 169, "stock_cnt": 5855, "price": "29.17", "change": "9.25", "market_id": "33", "circulate_market_value": "40966142000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 68, "hot_rank_chg": 189, "stock_cnt": 5855, "price": "161.20", "change": "12.22", "market_id": "33", "circulate_market_value": "67892771000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 69, "hot_rank_chg": 81, "stock_cnt": 5855, "price": "59.96", "change": "5.56", "market_id": "33", "circulate_market_value": "439211510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 70, "hot_rank_chg": 59, "stock_cnt": 5855, "price": "154.99", "change": "7.63", "market_id": "17", "circulate_market_value": "309632260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 71, "hot_rank_chg": 45, "stock_cnt": 5855, "price": "48.65", "change": "-8.72", "market_id": "33", "circulate_market_value": "1590779300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 72, "hot_rank_chg": 35, "stock_cnt": 5855, "price": "6.90", "change": "8.83", "market_id": "33", "circulate_market_value": "8687296900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.95}, {"name": "游戏", "change_pct": 0.23}, {"name": "智能音箱", "change_pct": 2.36}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.33}, {"name": "数字经济", "change_pct": 0.77}, {"name": "百度概念股", "change_pct": 1.15}, {"name": "腾讯概念股", "change_pct": 1.29}, {"name": "拼多多概念股", "change_pct": 0.85}, {"name": "传媒", "change_pct": -0.29}, {"name": "全息概念", "change_pct": 1.17}, {"name": "NFT", "change_pct": 0.66}, {"name": "元宇宙", "change_pct": 1.16}, {"name": "web3.0", "change_pct": 1.84}, {"name": "字节跳动概念股", "change_pct": 0.99}, {"name": "数字人民币", "change_pct": 2.82}, {"name": "智慧政务", "change_pct": 1.18}, {"name": "华为鸿蒙", "change_pct": 0.81}, {"name": "盲盒", "change_pct": -0.18}, {"name": "AI营销", "change_pct": 0.88}, {"name": "华为产业链", "change_pct": 2.25}, {"name": "供应链金融", "change_pct": 0.4}, {"name": "ChatGPT", "change_pct": 1.39}, {"name": "区块链", "change_pct": 1.16}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 73, "hot_rank_chg": 141, "stock_cnt": 5855, "price": "12.39", "change": "2.06", "market_id": "33", "circulate_market_value": "43091556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.33}, {"name": "人工智能", "change_pct": 0.95}, {"name": "VR&AR", "change_pct": 2.82}, {"name": "直播/短视频", "change_pct": 0.3}, {"name": "大数据", "change_pct": 1.21}, {"name": "教育", "change_pct": -0.16}, {"name": "百度概念股", "change_pct": 1.15}, {"name": "阿里巴巴概念股", "change_pct": 1.33}, {"name": "腾讯概念股", "change_pct": 1.29}, {"name": "传媒", "change_pct": -0.29}, {"name": "快手概念股", "change_pct": 0.87}, {"name": "NFT", "change_pct": 0.66}, {"name": "元宇宙", "change_pct": 1.16}, {"name": "虚拟数字人", "change_pct": 0.73}, {"name": "web3.0", "change_pct": 1.84}, {"name": "AIGC概念", "change_pct": 0.62}, {"name": "字节跳动概念股", "change_pct": 0.99}, {"name": "职业教育", "change_pct": 0.13}, {"name": "云游戏", "change_pct": 1.35}, {"name": "网红/MCN", "change_pct": -0.44}, {"name": "5G消息/RCS", "change_pct": 2.46}, {"name": "AI营销", "change_pct": 0.88}, {"name": "词元概念/Token", "change_pct": 1.88}, {"name": "人工智能大模型", "change_pct": 1.0}, {"name": "Sora/AI视频", "change_pct": 0.9}, {"name": "智谱AI", "change_pct": 1.33}, {"name": "小红书概念股", "change_pct": 0.9}, {"name": "区块链", "change_pct": 1.16}]}, {"code": "002241", "name": "歌尔股份", "hot_rank": 74, "hot_rank_chg": 77, "stock_cnt": 5855, "price": "23.23", "change": "0.09", "market_id": "33", "circulate_market_value": "73074851000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 75, "hot_rank_chg": 13, "stock_cnt": 5855, "price": "100.89", "change": "10.00", "market_id": "33", "circulate_market_value": "96524226000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报业绩大增"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 76, "hot_rank_chg": -20, "stock_cnt": 5855, "price": "29.95", "change": "2.04", "market_id": "17", "circulate_market_value": "617023700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 77, "hot_rank_chg": 61, "stock_cnt": 5855, "price": "1332.00", "change": "10.17", "market_id": "17", "circulate_market_value": "836886230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 78, "hot_rank_chg": 87, "stock_cnt": 5855, "price": "25.98", "change": "2.53", "market_id": "33", "circulate_market_value": "11186123700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 79, "hot_rank_chg": -17, "stock_cnt": 5855, "price": "124.59", "change": "0.30", "market_id": "17", "circulate_market_value": "308145990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 80, "hot_rank_chg": -31, "stock_cnt": 5855, "price": "18.90", "change": "-1.92", "market_id": "17", "circulate_market_value": "20304327000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 81, "hot_rank_chg": -2, "stock_cnt": 5855, "price": "29.30", "change": "-2.27", "market_id": "33", "circulate_market_value": "55667460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 82, "hot_rank_chg": 55, "stock_cnt": 5855, "price": "71.54", "change": "5.92", "market_id": "33", "circulate_market_value": "46724699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 83, "hot_rank_chg": 91, "stock_cnt": 5855, "price": "38.95", "change": "4.48", "market_id": "33", "circulate_market_value": "55352846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 84, "hot_rank_chg": 42, "stock_cnt": 5855, "price": "259.58", "change": "6.38", "market_id": "17", "circulate_market_value": "122409273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300766", "name": "每日互动", "hot_rank": 85, "hot_rank_chg": 158, "stock_cnt": 5855, "price": "24.96", "change": "6.76", "market_id": "33", "circulate_market_value": "8934105300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 86, "hot_rank_chg": 209, "stock_cnt": 5855, "price": "226.14", "change": "13.64", "market_id": "33", "circulate_market_value": "49943422000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 87, "hot_rank_chg": 13, "stock_cnt": 5855, "price": "234.56", "change": "4.66", "market_id": "33", "circulate_market_value": "202369100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 88, "hot_rank_chg": 73, "stock_cnt": 5855, "price": "59.18", "change": "6.71", "market_id": "33", "circulate_market_value": "66911818000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 89, "hot_rank_chg": 364, "stock_cnt": 5855, "price": "19.13", "change": "10.01", "market_id": "17", "circulate_market_value": "23595600000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块上游"}, {"code": "002709", "name": "天赐材料", "hot_rank": 90, "hot_rank_chg": 67, "stock_cnt": 5855, "price": "35.44", "change": "6.05", "market_id": "33", "circulate_market_value": "53479351000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688806", "name": "泰诺麦博", "hot_rank": 91, "hot_rank_chg": 944, "stock_cnt": 5855, "price": "39.36", "change": "172.20", "market_id": "17", "circulate_market_value": "2008370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 92, "hot_rank_chg": 68, "stock_cnt": 5855, "price": "27.74", "change": "-0.18", "market_id": "33", "circulate_market_value": "31804427000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 93, "hot_rank_chg": -28, "stock_cnt": 5855, "price": "11.22", "change": "-8.03", "market_id": "33", "circulate_market_value": "6537792800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -1.94}, {"name": "一带一路", "change_pct": 0.09}, {"name": "天然气", "change_pct": -1.58}, {"name": "油气改革", "change_pct": -2.4}, {"name": "页岩气", "change_pct": -1.71}, {"name": "深地经济", "change_pct": -0.91}]}, {"code": "600162", "name": "香江控股", "hot_rank": 94, "hot_rank_chg": -3, "stock_cnt": 5855, "price": "2.61", "change": "-5.09", "market_id": "17", "circulate_market_value": "8530623500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.47}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "养老产业", "change_pct": -1.22}, {"name": "粤港澳大湾区", "change_pct": -0.38}, {"name": "民营医院", "change_pct": -1.82}, {"name": "低价股", "change_pct": -1.52}, {"name": "地摊经济", "change_pct": -0.62}]}, {"code": "002167", "name": "东方锆业", "hot_rank": 95, "hot_rank_chg": 231, "stock_cnt": 5855, "price": "16.85", "change": "9.99", "market_id": "33", "circulate_market_value": "12784313400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "氧化锆粉体涨价"}, {"code": "600498", "name": "烽火通信", "hot_rank": 96, "hot_rank_chg": 17, "stock_cnt": 5855, "price": "38.03", "change": "4.19", "market_id": "17", "circulate_market_value": "48359764000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 97, "hot_rank_chg": 67, "stock_cnt": 5855, "price": "203.84", "change": "-2.00", "market_id": "17", "circulate_market_value": "86202601000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 98, "hot_rank_chg": 86, "stock_cnt": 5855, "price": "66.07", "change": "4.57", "market_id": "33", "circulate_market_value": "54537484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 99, "hot_rank_chg": 46, "stock_cnt": 5855, "price": "18.39", "change": "2.22", "market_id": "17", "circulate_market_value": "321104890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 100, "hot_rank_chg": 24, "stock_cnt": 5855, "price": "12.74", "change": "-1.85", "market_id": "33", "circulate_market_value": "13535024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.1}, {"name": "次新股", "change_pct": 2.67}, {"name": "光伏", "change_pct": 1.27}, {"name": "风电", "change_pct": 0.82}, {"name": "国企改革", "change_pct": -0.37}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第二次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》"};