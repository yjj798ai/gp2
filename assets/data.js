const UPDATE_TIME = "2026-07-29 15:51";
const THS_HOT = [
  {
    "name": "乳业",
    "rise": 6.18,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "食品ETF",
    "code": "885462"
  },
  {
    "name": "存储芯片",
    "rise": -1.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续211天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "创新药",
    "rise": 0.37,
    "rate": 0,
    "tag": "",
    "hotTag": "连续88天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": 1.33,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.73,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续258天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "锂电池概念",
    "rise": 1.61,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.68,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "PCB概念",
    "rise": -0.44,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": 0.82,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续422天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "脑机接口",
    "rise": -0.9,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "商业航天",
    "rise": 0.84,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续187天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "机器人概念",
    "rise": 1.03,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续89天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "光刻机",
    "rise": -3.0,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "芯片概念",
    "rise": 0.01,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续82天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "算力租赁",
    "rise": 0.54,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续122天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人工智能",
    "rise": 1.21,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "兵装重组概念",
    "rise": 1.2,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "ST板块",
    "rise": 1.38,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续96天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "猪肉",
    "rise": 1.6,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "黄金概念",
    "rise": 1.71,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  }
];
const THS_EVENTS = [
  {
    "title": "教育部：国家助学贷款惠及学生超3000万人",
    "desc": "",
    "heat": 766680,
    "direction": "教育",
    "themes": [
      "教育",
      "职业教育",
      "AI教育"
    ],
    "stocks": [
      {
        "name": "全通教育",
        "code": "300359",
        "chg": 20.054201
      }
    ]
  },
  {
    "title": "可口可乐公司二季度净利润44.38亿美元 同比增长17%",
    "desc": "",
    "heat": 523922,
    "direction": "饮料制造",
    "themes": [
      "饮料制造",
      "乳业",
      "代糖概念",
      "零售"
    ],
    "stocks": [
      {
        "name": "欢乐家",
        "code": "300997",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "2026年暑期档电影票房已超60亿元",
    "desc": "",
    "heat": 327575,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "欢瑞世纪",
        "code": "000892",
        "chg": 10.031348
      }
    ]
  },
  {
    "title": "一个月收到上万台订单”、业绩批量预喜！机器人产业链“爆单",
    "desc": "",
    "heat": 304835,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "减速器"
    ],
    "stocks": [
      {
        "name": "信邦智能",
        "code": "301112",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "热搜！全AI剧集，登上电视",
    "desc": "",
    "heat": 303582,
    "direction": "AI剧集",
    "themes": [
      "AI漫剧"
    ],
    "stocks": [
      {
        "name": "欢瑞世纪",
        "code": "000892",
        "chg": 10.031348
      }
    ]
  },
  {
    "title": "苹果总市值超过英伟达",
    "desc": "",
    "heat": 241364,
    "direction": "苹果概念",
    "themes": [
      "苹果概念"
    ],
    "stocks": [
      {
        "name": "返利科技",
        "code": "600228",
        "chg": 10.082645
      }
    ]
  },
  {
    "title": "Kimi K3正式开源，阿里、华为等厂商Day0适配",
    "desc": "",
    "heat": 235471,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "返利科技",
        "code": "600228",
        "chg": 10.082645
      }
    ]
  },
  {
    "title": "国际油价急涨超5%，美方称伊朗发射多枚导弹袭击驻中东美军",
    "desc": "",
    "heat": 148125,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "首华燃气",
        "code": "300483",
        "chg": 8.691258
      }
    ]
  },
  {
    "title": "SK海力士营业利润飙涨557%！HBM4下半年将扩大生产，但市场期待更高",
    "desc": "",
    "heat": 54741,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "C长鑫",
        "code": "688825",
        "chg": 12.659574
      }
    ]
  },
  {
    "title": "利好来了！MSCI官宣：长鑫科技，成功入指！",
    "desc": "",
    "heat": 235,
    "direction": "长鑫科技IPO",
    "themes": [
      "长鑫存储",
      "存储芯片",
      "半导体设备"
    ],
    "stocks": [
      {
        "name": "C长鑫",
        "code": "688825",
        "chg": 12.659574
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "乳业（奶粉）",
    "change": "+6.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饮料",
    "change": "+5.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+5.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甜味剂/代糖",
    "change": "+4.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+4.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 镁",
    "change": "+3.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玩具",
    "change": "+3.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+3.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电竞",
    "change": "+3.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "手游",
    "change": "+3.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+3.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+3.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车整车",
    "change": "+3.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民爆",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+3.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "+3.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+3.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "食品",
    "change": "+2.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+2.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 6,
    "hot_rank_chg": -1,
    "stock_cnt": 5835,
    "price": "11.61",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "10835886800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.84
      },
      {
        "name": "新疆概念",
        "change_pct": 2.13
      },
      {
        "name": "光伏",
        "change_pct": 1.01
      },
      {
        "name": "风电",
        "change_pct": 1.29
      },
      {
        "name": "储能",
        "change_pct": 1.52
      },
      {
        "name": "国企改革",
        "change_pct": 1.7
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 12,
    "hot_rank_chg": 0,
    "stock_cnt": 5835,
    "price": "12.13",
    "change": "4.93",
    "market_id": "33",
    "circulate_market_value": "8307866100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.8
      },
      {
        "name": "核电",
        "change_pct": 1.59
      },
      {
        "name": "充电桩",
        "change_pct": 1.44
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.39
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.6
      },
      {
        "name": "储能",
        "change_pct": 1.52
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.19
      },
      {
        "name": "智能电网",
        "change_pct": 1.78
      },
      {
        "name": "核聚变",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 14,
    "hot_rank_chg": -3,
    "stock_cnt": 5835,
    "price": "5.71",
    "change": "2.33",
    "market_id": "33",
    "circulate_market_value": "201946340000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.12
      },
      {
        "name": "手机产业链",
        "change_pct": 0.76
      },
      {
        "name": "超高清视频",
        "change_pct": 0.75
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.17
      },
      {
        "name": "电竞",
        "change_pct": 3.87
      },
      {
        "name": "半导体",
        "change_pct": -1.03
      },
      {
        "name": "人工智能",
        "change_pct": 1.04
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.98
      },
      {
        "name": "VR&AR",
        "change_pct": 0.34
      },
      {
        "name": "OLED",
        "change_pct": -0.29
      },
      {
        "name": "京津冀",
        "change_pct": 1.69
      },
      {
        "name": "物联网",
        "change_pct": 0.9
      },
      {
        "name": "指纹识别",
        "change_pct": -0.22
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.34
      },
      {
        "name": "白马股",
        "change_pct": 1.43
      },
      {
        "name": "智能制造",
        "change_pct": 0.7
      },
      {
        "name": "小米概念股",
        "change_pct": 0.81
      },
      {
        "name": "国产芯片",
        "change_pct": -0.15
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.19
      },
      {
        "name": "全息概念",
        "change_pct": 0.43
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.32
      },
      {
        "name": "MicroLED",
        "change_pct": -0.39
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.11
      },
      {
        "name": "智能手表",
        "change_pct": 1.31
      },
      {
        "name": "MiniLED",
        "change_pct": -0.23
      },
      {
        "name": "传感器",
        "change_pct": 0.46
      },
      {
        "name": "大硅片",
        "change_pct": -2.78
      },
      {
        "name": "AI PC",
        "change_pct": 0.36
      },
      {
        "name": "华为产业链",
        "change_pct": 0.96
      },
      {
        "name": "回购",
        "change_pct": 1.48
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.16
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.69
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 19,
    "hot_rank_chg": 45,
    "stock_cnt": 5835,
    "price": "9.47",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "8228982800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.68
      },
      {
        "name": "快递物流",
        "change_pct": 1.62
      },
      {
        "name": "新零售",
        "change_pct": 2.9
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.86
      },
      {
        "name": "旅游",
        "change_pct": 1.58
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.19
      },
      {
        "name": "物业管理",
        "change_pct": 1.66
      },
      {
        "name": "免税店概念",
        "change_pct": 2.71
      },
      {
        "name": "自贸区",
        "change_pct": 1.63
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 22,
    "hot_rank_chg": -3,
    "stock_cnt": 5835,
    "price": "5.36",
    "change": "-6.62",
    "market_id": "17",
    "circulate_market_value": "13499213000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.68
      },
      {
        "name": "工业大麻",
        "change_pct": 1.17
      },
      {
        "name": "中药",
        "change_pct": 0.68
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "保健品",
        "change_pct": 1.16
      },
      {
        "name": "民营医院",
        "change_pct": 1.13
      },
      {
        "name": "医药",
        "change_pct": 0.5
      },
      {
        "name": "化学原料药",
        "change_pct": 0.55
      },
      {
        "name": "流感",
        "change_pct": 0.65
      },
      {
        "name": "振兴东北",
        "change_pct": 1.39
      },
      {
        "name": "食品",
        "change_pct": 2.99
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 23,
    "hot_rank_chg": 27,
    "stock_cnt": 5835,
    "price": "6.30",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "6507495500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.47
      },
      {
        "name": "锂电池",
        "change_pct": 1.57
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.71
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.61
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.6
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 2.06
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 26,
    "hot_rank_chg": 50,
    "stock_cnt": 5835,
    "price": "7.19",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "23919663000.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "超高压海缆",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.8
      },
      {
        "name": "核电",
        "change_pct": 1.59
      },
      {
        "name": "5G",
        "change_pct": 0.12
      },
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "充电桩",
        "change_pct": 1.44
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.85
      },
      {
        "name": "风电",
        "change_pct": 1.29
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.6
      },
      {
        "name": "储能",
        "change_pct": 1.52
      },
      {
        "name": "特高压",
        "change_pct": 1.99
      },
      {
        "name": "智能电网",
        "change_pct": 1.78
      },
      {
        "name": "海洋经济",
        "change_pct": 1.55
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 27,
    "hot_rank_chg": 13,
    "stock_cnt": 5835,
    "price": "6.17",
    "change": "3.87",
    "market_id": "17",
    "circulate_market_value": "76483870000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.59
      },
      {
        "name": "核电",
        "change_pct": 1.59
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.99
      },
      {
        "name": "水电",
        "change_pct": 2.16
      },
      {
        "name": "火电",
        "change_pct": 1.79
      },
      {
        "name": "光伏",
        "change_pct": 1.01
      },
      {
        "name": "风电",
        "change_pct": 1.29
      },
      {
        "name": "国企改革",
        "change_pct": 1.7
      },
      {
        "name": "算电协同",
        "change_pct": 1.36
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 28,
    "hot_rank_chg": 33,
    "stock_cnt": 5835,
    "price": "10.19",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "6932457500.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "甲醇",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 3.36
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "雄安新区",
        "change_pct": 1.47
      },
      {
        "name": "煤化工",
        "change_pct": 3.14
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 33,
    "hot_rank_chg": 207,
    "stock_cnt": 5835,
    "price": "8.77",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "5794838800.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "算力基础设施",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.8
      },
      {
        "name": "国产软件",
        "change_pct": 0.96
      },
      {
        "name": "人工智能",
        "change_pct": 1.04
      },
      {
        "name": "充电桩",
        "change_pct": 1.44
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.39
      },
      {
        "name": "军民融合",
        "change_pct": 1.11
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.7
      },
      {
        "name": "人脸识别",
        "change_pct": 1.17
      },
      {
        "name": "水利",
        "change_pct": 1.87
      },
      {
        "name": "物联网",
        "change_pct": 0.9
      },
      {
        "name": "大数据",
        "change_pct": 0.93
      },
      {
        "name": "智慧城市",
        "change_pct": 0.9
      },
      {
        "name": "军工",
        "change_pct": 1.25
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.6
      },
      {
        "name": "储能",
        "change_pct": 1.52
      },
      {
        "name": "智慧安防",
        "change_pct": 1.04
      },
      {
        "name": "无人机",
        "change_pct": 1.09
      },
      {
        "name": "虚拟电厂",
        "change_pct": 1.85
      },
      {
        "name": "信创",
        "change_pct": 0.64
      },
      {
        "name": "元宇宙",
        "change_pct": 1.6
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.25
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.39
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.0
      },
      {
        "name": "数字乡村",
        "change_pct": 1.37
      },
      {
        "name": "华为海思",
        "change_pct": 0.48
      },
      {
        "name": "闪存",
        "change_pct": -1.04
      },
      {
        "name": "UWB超宽带",
        "change_pct": 0.07
      },
      {
        "name": "智慧政务",
        "change_pct": 0.27
      },
      {
        "name": "特高压",
        "change_pct": 1.99
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.08
      },
      {
        "name": "华为产业链",
        "change_pct": 0.96
      },
      {
        "name": "时空大数据",
        "change_pct": 1.99
      },
      {
        "name": "服务器",
        "change_pct": -0.75
      },
      {
        "name": "智能电网",
        "change_pct": 1.78
      },
      {
        "name": "磁电存储",
        "change_pct": 2.08
      },
      {
        "name": "军工信息化",
        "change_pct": 0.85
      },
      {
        "name": "光纤概念",
        "change_pct": -1.18
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 2.39
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 37,
    "hot_rank_chg": 52,
    "stock_cnt": 5835,
    "price": "11.88",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "11246071500.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "VC涨价",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.18
      },
      {
        "name": "锂电池",
        "change_pct": 1.57
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.08
      },
      {
        "name": "举牌",
        "change_pct": 2.17
      },
      {
        "name": "纺织服装",
        "change_pct": 1.31
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.65
      },
      {
        "name": "教育",
        "change_pct": 2.46
      },
      {
        "name": "外贸受益概念",
        "change_pct": 1.6
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.6
      },
      {
        "name": "抗菌面料",
        "change_pct": 2.18
      },
      {
        "name": "国企改革",
        "change_pct": 1.7
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.97
      }
    ]
  },
  {
    "code": "000428",
    "name": "华天酒店",
    "hot_rank": 40,
    "hot_rank_chg": 67,
    "stock_cnt": 5835,
    "price": "4.04",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "4116461000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "酒店",
    "xgb_concepts": [
      {
        "name": "湖南国企改革",
        "change_pct": 2.76
      },
      {
        "name": "旅游",
        "change_pct": 1.58
      },
      {
        "name": "物业管理",
        "change_pct": 1.66
      },
      {
        "name": "预制菜",
        "change_pct": 2.34
      },
      {
        "name": "国企改革",
        "change_pct": 1.7
      },
      {
        "name": "餐饮",
        "change_pct": 2.62
      }
    ]
  },
  {
    "code": "002195",
    "name": "岩山科技",
    "hot_rank": 43,
    "hot_rank_chg": -30,
    "stock_cnt": 5835,
    "price": "6.69",
    "change": "-2.05",
    "market_id": "33",
    "circulate_market_value": "37569926000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 0.96
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.93
      },
      {
        "name": "人工智能",
        "change_pct": 1.04
      },
      {
        "name": "网络安全",
        "change_pct": 0.43
      },
      {
        "name": "游戏",
        "change_pct": 3.24
      },
      {
        "name": "大数据",
        "change_pct": 0.93
      },
      {
        "name": "脑科学",
        "change_pct": -0.99
      },
      {
        "name": "百度概念股",
        "change_pct": 1.77
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.19
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.86
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.84
      },
      {
        "name": "自动刹车",
        "change_pct": 2.17
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.97
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.34
      },
      {
        "name": "AI医疗",
        "change_pct": 0.55
      },
      {
        "name": "区块链",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "002607",
    "name": "中公教育",
    "hot_rank": 45,
    "hot_rank_chg": 146,
    "stock_cnt": 5835,
    "price": "2.08",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "11530355600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI就业",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 1.04
      },
      {
        "name": "教育",
        "change_pct": 2.46
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.19
      },
      {
        "name": "低价股",
        "change_pct": 1.84
      },
      {
        "name": "职业教育",
        "change_pct": 2.64
      },
      {
        "name": "在线教育",
        "change_pct": 3.16
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 59,
    "hot_rank_chg": 55,
    "stock_cnt": 5835,
    "price": "6.60",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "7701170000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI安全",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.41
      },
      {
        "name": "国产软件",
        "change_pct": 0.96
      },
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "量子通信",
        "change_pct": 0.47
      },
      {
        "name": "人工智能",
        "change_pct": 1.04
      },
      {
        "name": "网络安全",
        "change_pct": 0.43
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.39
      },
      {
        "name": "物联网",
        "change_pct": 0.9
      },
      {
        "name": "大数据",
        "change_pct": 0.93
      },
      {
        "name": "破净股",
        "change_pct": 2.01
      },
      {
        "name": "数字经济",
        "change_pct": 1.0
      },
      {
        "name": "国产芯片",
        "change_pct": -0.15
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.19
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.86
      },
      {
        "name": "信创",
        "change_pct": 0.64
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.65
      },
      {
        "name": "跨境支付",
        "change_pct": 1.93
      },
      {
        "name": "web3.0",
        "change_pct": 0.93
      },
      {
        "name": "数字人民币",
        "change_pct": 1.6
      },
      {
        "name": "智慧政务",
        "change_pct": 0.27
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.91
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.08
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.77
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.94
      },
      {
        "name": "华为产业链",
        "change_pct": 0.96
      },
      {
        "name": "回购",
        "change_pct": 1.48
      },
      {
        "name": "智能电网",
        "change_pct": 1.78
      },
      {
        "name": "低空经济",
        "change_pct": 1.25
      },
      {
        "name": "量子计算",
        "change_pct": 0.9
      },
      {
        "name": "财税改革",
        "change_pct": 1.74
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600578",
    "name": "京能电力",
    "hot_rank": 62,
    "hot_rank_chg": 409,
    "stock_cnt": 5835,
    "price": "5.95",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "39832995000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "定增",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 1.27
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.99
      },
      {
        "name": "京津冀",
        "change_pct": 1.69
      },
      {
        "name": "火电",
        "change_pct": 1.79
      },
      {
        "name": "风电",
        "change_pct": 1.29
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 64,
    "hot_rank_chg": 296,
    "stock_cnt": 5835,
    "price": "3.38",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "4318287300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.68
      },
      {
        "name": "甲醇",
        "change_pct": 3.36
      },
      {
        "name": "化肥",
        "change_pct": 2.44
      },
      {
        "name": "保健品",
        "change_pct": 1.16
      },
      {
        "name": "民营医院",
        "change_pct": 1.13
      },
      {
        "name": "医药",
        "change_pct": 0.5
      },
      {
        "name": "煤化工",
        "change_pct": 3.14
      },
      {
        "name": "食品",
        "change_pct": 2.99
      },
      {
        "name": "大农业",
        "change_pct": 2.19
      },
      {
        "name": "干细胞",
        "change_pct": 0.59
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.07
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 65,
    "hot_rank_chg": 53,
    "stock_cnt": 5835,
    "price": "7.28",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "2071026100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AI教育",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 2.13
      },
      {
        "name": "密集调研",
        "change_pct": 1.22
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.49
      },
      {
        "name": "教育",
        "change_pct": 2.46
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.19
      },
      {
        "name": "职业教育",
        "change_pct": 2.64
      },
      {
        "name": "在线教育",
        "change_pct": 3.16
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.91
      },
      {
        "name": "华为产业链",
        "change_pct": 0.96
      },
      {
        "name": "智谱AI",
        "change_pct": 0.97
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 71,
    "hot_rank_chg": -11,
    "stock_cnt": 5835,
    "price": "7.11",
    "change": "-3.40",
    "market_id": "17",
    "circulate_market_value": "14441294000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.59
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.99
      },
      {
        "name": "火电",
        "change_pct": 1.79
      },
      {
        "name": "风电",
        "change_pct": 1.29
      },
      {
        "name": "储能",
        "change_pct": 1.52
      },
      {
        "name": "碳中和",
        "change_pct": 1.25
      },
      {
        "name": "国企改革",
        "change_pct": 1.7
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 73,
    "hot_rank_chg": -50,
    "stock_cnt": 5835,
    "price": "5.41",
    "change": "-7.20",
    "market_id": "33",
    "circulate_market_value": "7015339800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.68
      },
      {
        "name": "创新药",
        "change_pct": 0.23
      },
      {
        "name": "央企改革",
        "change_pct": 1.59
      },
      {
        "name": "医疗器械",
        "change_pct": 0.88
      },
      {
        "name": "强势人气股",
        "change_pct": -0.24
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.98
      },
      {
        "name": "保健品",
        "change_pct": 1.16
      },
      {
        "name": "民营医院",
        "change_pct": 1.13
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 0.39
      },
      {
        "name": "医药",
        "change_pct": 0.5
      },
      {
        "name": "化学原料药",
        "change_pct": 0.55
      },
      {
        "name": "海南概念",
        "change_pct": 0.95
      },
      {
        "name": "脑科学",
        "change_pct": -0.99
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.36
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.13
      },
      {
        "name": "食品",
        "change_pct": 2.99
      },
      {
        "name": "国企改革",
        "change_pct": 1.7
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.53
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.97
      },
      {
        "name": "自贸区",
        "change_pct": 1.63
      },
      {
        "name": "合成生物",
        "change_pct": 1.22
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 79,
    "hot_rank_chg": 31,
    "stock_cnt": 5835,
    "price": "7.14",
    "change": "3.63",
    "market_id": "33",
    "circulate_market_value": "4681741000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.68
      },
      {
        "name": "新零售",
        "change_pct": 2.9
      },
      {
        "name": "农业种植",
        "change_pct": 1.53
      },
      {
        "name": "冷链",
        "change_pct": 1.15
      },
      {
        "name": "大农业",
        "change_pct": 2.19
      },
      {
        "name": "预制菜",
        "change_pct": 2.34
      },
      {
        "name": "国企改革",
        "change_pct": 1.7
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.75
      },
      {
        "name": "免税店概念",
        "change_pct": 2.71
      },
      {
        "name": "湖北国企改革",
        "change_pct": 1.64
      }
    ]
  },
  {
    "code": "600644",
    "name": "乐山电力",
    "hot_rank": 81,
    "hot_rank_chg": 363,
    "stock_cnt": 5835,
    "price": "9.72",
    "change": "6.93",
    "market_id": "17",
    "circulate_market_value": "5621278400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 1.99
      },
      {
        "name": "水电",
        "change_pct": 2.16
      },
      {
        "name": "天然气",
        "change_pct": 1.35
      },
      {
        "name": "光伏",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "600733",
    "name": "北汽蓝谷",
    "hot_rank": 82,
    "hot_rank_chg": 232,
    "stock_cnt": 5835,
    "price": "5.74",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "31888730000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "L3自动驾驶",
    "xgb_concepts": [
      {
        "name": "定增破发",
        "change_pct": 2.13
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.93
      },
      {
        "name": "新能源整车",
        "change_pct": 3.18
      },
      {
        "name": "京津冀",
        "change_pct": 1.69
      },
      {
        "name": "汽车整车",
        "change_pct": 3.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.6
      },
      {
        "name": "百度概念股",
        "change_pct": 1.77
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.37
      },
      {
        "name": "换电概念",
        "change_pct": 2.48
      },
      {
        "name": "固态电池",
        "change_pct": 1.71
      },
      {
        "name": "汽车芯片",
        "change_pct": 0.5
      },
      {
        "name": "动力电池回收",
        "change_pct": 2.0
      },
      {
        "name": "一体化压铸",
        "change_pct": 2.46
      },
      {
        "name": "华为汽车",
        "change_pct": 1.65
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.91
      },
      {
        "name": "华为产业链",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 93,
    "hot_rank_chg": 84,
    "stock_cnt": 5835,
    "price": "10.80",
    "change": "-0.09",
    "market_id": "33",
    "circulate_market_value": "6298676400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.42
      },
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "天然气",
        "change_pct": 1.35
      },
      {
        "name": "油气改革",
        "change_pct": 1.35
      },
      {
        "name": "页岩气",
        "change_pct": 1.62
      },
      {
        "name": "深地经济",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 95,
    "hot_rank_chg": -68,
    "stock_cnt": 5835,
    "price": "3.28",
    "change": "-2.67",
    "market_id": "33",
    "circulate_market_value": "7892114000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.57
      },
      {
        "name": "5G",
        "change_pct": 0.12
      },
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "光通信",
        "change_pct": -1.35
      },
      {
        "name": "军民融合",
        "change_pct": 1.11
      },
      {
        "name": "光伏",
        "change_pct": 1.01
      },
      {
        "name": "军工",
        "change_pct": 1.25
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.6
      },
      {
        "name": "储能",
        "change_pct": 1.52
      },
      {
        "name": "BIPV概念",
        "change_pct": 1.81
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.11
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.18
      },
      {
        "name": "华为产业链",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 97,
    "hot_rank_chg": 37,
    "stock_cnt": 5835,
    "price": "6.57",
    "change": "1.08",
    "market_id": "17",
    "circulate_market_value": "13424719000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.57
      },
      {
        "name": "军民融合",
        "change_pct": 1.11
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.85
      },
      {
        "name": "烧碱",
        "change_pct": 2.08
      },
      {
        "name": "军工",
        "change_pct": 1.25
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.6
      },
      {
        "name": "环氧丙烷",
        "change_pct": 1.58
      },
      {
        "name": "氟化工",
        "change_pct": 0.19
      },
      {
        "name": "双氧水",
        "change_pct": 1.59
      },
      {
        "name": "液氯",
        "change_pct": 2.19
      }
    ]
  },
  {
    "code": "600415",
    "name": "小商品城",
    "hot_rank": 100,
    "hot_rank_chg": 27,
    "stock_cnt": 5835,
    "price": "12.65",
    "change": "6.93",
    "market_id": "17",
    "circulate_market_value": "69367024000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.68
      },
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "人工智能",
        "change_pct": 1.04
      },
      {
        "name": "移动支付",
        "change_pct": 1.56
      },
      {
        "name": "浙江国企改革",
        "change_pct": 2.06
      },
      {
        "name": "白马股",
        "change_pct": 1.43
      },
      {
        "name": "外贸受益概念",
        "change_pct": 1.6
      },
      {
        "name": "数字经济",
        "change_pct": 1.0
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.19
      },
      {
        "name": "跨境支付",
        "change_pct": 1.93
      },
      {
        "name": "数据要素",
        "change_pct": 0.97
      },
      {
        "name": "国企改革",
        "change_pct": 1.7
      },
      {
        "name": "数字人民币",
        "change_pct": 1.6
      },
      {
        "name": "免税店概念",
        "change_pct": 2.71
      },
      {
        "name": "地摊经济",
        "change_pct": 2.22
      },
      {
        "name": "出海龙头",
        "change_pct": 2.67
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.5
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5835, "price": "52.95", "change": "12.66", "market_id": "17", "circulate_market_value": "238435910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5835, "price": "364.03", "change": "-6.81", "market_id": "17", "circulate_market_value": "243351120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 3, "hot_rank_chg": 29, "stock_cnt": 5835, "price": "47.51", "change": "10.00", "market_id": "33", "circulate_market_value": "54969676000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "MLCC"}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5835, "price": "37.33", "change": "-10.01", "market_id": "33", "circulate_market_value": "106766513000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5835, "price": "354.58", "change": "-1.90", "market_id": "33", "circulate_market_value": "58516250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5835, "price": "11.61", "change": "-10.00", "market_id": "33", "circulate_market_value": "10835886800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.24}, {"name": "新疆国企改革", "change_pct": 1.84}, {"name": "新疆概念", "change_pct": 2.13}, {"name": "光伏", "change_pct": 1.01}, {"name": "风电", "change_pct": 1.29}, {"name": "储能", "change_pct": 1.52}, {"name": "国企改革", "change_pct": 1.7}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5835, "price": "16.16", "change": "-2.53", "market_id": "17", "circulate_market_value": "23798942000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 8, "hot_rank_chg": -6, "stock_cnt": 5835, "price": "951.00", "change": "4.74", "market_id": "33", "circulate_market_value": "1055552730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 9, "hot_rank_chg": 6, "stock_cnt": 5835, "price": "179.78", "change": "-5.73", "market_id": "33", "circulate_market_value": "249232920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 10, "hot_rank_chg": 8, "stock_cnt": 5835, "price": "62.10", "change": "-10.00", "market_id": "33", "circulate_market_value": "94233783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 11, "hot_rank_chg": -3, "stock_cnt": 5835, "price": "31.99", "change": "-6.46", "market_id": "33", "circulate_market_value": "34509767000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5835, "price": "12.13", "change": "4.93", "market_id": "33", "circulate_market_value": "8307866100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.8}, {"name": "核电", "change_pct": 1.59}, {"name": "充电桩", "change_pct": 1.44}, {"name": "云计算数据中心", "change_pct": 0.39}, {"name": "新能源汽车", "change_pct": 1.6}, {"name": "储能", "change_pct": 1.52}, {"name": "阿里巴巴概念股", "change_pct": 1.19}, {"name": "智能电网", "change_pct": 1.78}, {"name": "核聚变", "change_pct": 1.25}]}, {"code": "600667", "name": "太极实业", "hot_rank": 13, "hot_rank_chg": -4, "stock_cnt": 5835, "price": "17.40", "change": "-5.28", "market_id": "17", "circulate_market_value": "36392834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 14, "hot_rank_chg": -3, "stock_cnt": 5835, "price": "5.71", "change": "2.33", "market_id": "33", "circulate_market_value": "201946340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.12}, {"name": "手机产业链", "change_pct": 0.76}, {"name": "超高清视频", "change_pct": 0.75}, {"name": "苹果产业链", "change_pct": 0.17}, {"name": "电竞", "change_pct": 3.87}, {"name": "半导体", "change_pct": -1.03}, {"name": "人工智能", "change_pct": 1.04}, {"name": "互联网医疗", "change_pct": 0.98}, {"name": "VR&AR", "change_pct": 0.34}, {"name": "OLED", "change_pct": -0.29}, {"name": "京津冀", "change_pct": 1.69}, {"name": "物联网", "change_pct": 0.9}, {"name": "指纹识别", "change_pct": -0.22}, {"name": "汽车零部件", "change_pct": 1.34}, {"name": "白马股", "change_pct": 1.43}, {"name": "智能制造", "change_pct": 0.7}, {"name": "小米概念股", "change_pct": 0.81}, {"name": "国产芯片", "change_pct": -0.15}, {"name": "液晶面板/LCD", "change_pct": -0.19}, {"name": "全息概念", "change_pct": 0.43}, {"name": "理想汽车概念股", "change_pct": 1.32}, {"name": "MicroLED", "change_pct": -0.39}, {"name": "钙钛矿电池", "change_pct": 1.11}, {"name": "智能手表", "change_pct": 1.31}, {"name": "MiniLED", "change_pct": -0.23}, {"name": "传感器", "change_pct": 0.46}, {"name": "大硅片", "change_pct": -2.78}, {"name": "AI PC", "change_pct": 0.36}, {"name": "华为产业链", "change_pct": 0.96}, {"name": "回购", "change_pct": 1.48}, {"name": "智能眼镜/MR头显", "change_pct": 0.16}, {"name": "玻璃基板封装", "change_pct": -1.69}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 15, "hot_rank_chg": 40, "stock_cnt": 5835, "price": "18.61", "change": "9.99", "market_id": "33", "circulate_market_value": "8418025100.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "液冷储能"}, {"code": "600584", "name": "长电科技", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5835, "price": "71.68", "change": "-6.70", "market_id": "17", "circulate_market_value": "128265236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 17, "hot_rank_chg": 3, "stock_cnt": 5835, "price": "57.97", "change": "10.00", "market_id": "17", "circulate_market_value": "7575125400.00", "change_type": "1", "change_section": "12", "change_days": "8", "change_reason": "控制权拟变更"}, {"code": "002185", "name": "华天科技", "hot_rank": 18, "hot_rank_chg": 6, "stock_cnt": 5835, "price": "16.57", "change": "-5.15", "market_id": "33", "circulate_market_value": "55056340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 19, "hot_rank_chg": 45, "stock_cnt": 5835, "price": "9.47", "change": "9.99", "market_id": "17", "circulate_market_value": "8228982800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.68}, {"name": "快递物流", "change_pct": 1.62}, {"name": "新零售", "change_pct": 2.9}, {"name": "福建自贸/海西概念", "change_pct": 1.86}, {"name": "旅游", "change_pct": 1.58}, {"name": "阿里巴巴概念股", "change_pct": 1.19}, {"name": "物业管理", "change_pct": 1.66}, {"name": "免税店概念", "change_pct": 2.71}, {"name": "自贸区", "change_pct": 1.63}]}, {"code": "000021", "name": "深科技", "hot_rank": 20, "hot_rank_chg": 5, "stock_cnt": 5835, "price": "40.15", "change": "1.49", "market_id": "33", "circulate_market_value": "63202347000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 21, "hot_rank_chg": -4, "stock_cnt": 5835, "price": "49.75", "change": "-0.52", "market_id": "17", "circulate_market_value": "122068901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 22, "hot_rank_chg": -3, "stock_cnt": 5835, "price": "5.36", "change": "-6.62", "market_id": "17", "circulate_market_value": "13499213000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.68}, {"name": "工业大麻", "change_pct": 1.17}, {"name": "中药", "change_pct": 0.68}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "保健品", "change_pct": 1.16}, {"name": "民营医院", "change_pct": 1.13}, {"name": "医药", "change_pct": 0.5}, {"name": "化学原料药", "change_pct": 0.55}, {"name": "流感", "change_pct": 0.65}, {"name": "振兴东北", "change_pct": 1.39}, {"name": "食品", "change_pct": 2.99}]}, {"code": "002141", "name": "贤丰控股", "hot_rank": 23, "hot_rank_chg": 27, "stock_cnt": 5835, "price": "6.30", "change": "9.95", "market_id": "33", "circulate_market_value": "6507495500.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.47}, {"name": "锂电池", "change_pct": 1.57}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "铜箔/覆铜板", "change_pct": -0.71}, {"name": "粤港澳大湾区", "change_pct": 1.61}, {"name": "新能源汽车", "change_pct": 1.6}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 2.06}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 24, "hot_rank_chg": -10, "stock_cnt": 5835, "price": "20.48", "change": "-10.02", "market_id": "33", "circulate_market_value": "8619315800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 25, "hot_rank_chg": 58, "stock_cnt": 5835, "price": "16.01", "change": "10.03", "market_id": "17", "circulate_market_value": "6420010000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "乳业"}, {"code": "002498", "name": "汉缆股份", "hot_rank": 26, "hot_rank_chg": 50, "stock_cnt": 5835, "price": "7.19", "change": "9.94", "market_id": "33", "circulate_market_value": "23919663000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "超高压海缆", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.8}, {"name": "核电", "change_pct": 1.59}, {"name": "5G", "change_pct": 0.12}, {"name": "一带一路", "change_pct": 1.58}, {"name": "充电桩", "change_pct": 1.44}, {"name": "氢能源/燃料电池", "change_pct": 1.85}, {"name": "风电", "change_pct": 1.29}, {"name": "新能源汽车", "change_pct": 1.6}, {"name": "储能", "change_pct": 1.52}, {"name": "特高压", "change_pct": 1.99}, {"name": "智能电网", "change_pct": 1.78}, {"name": "海洋经济", "change_pct": 1.55}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 27, "hot_rank_chg": 13, "stock_cnt": 5835, "price": "6.17", "change": "3.87", "market_id": "17", "circulate_market_value": "76483870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.59}, {"name": "核电", "change_pct": 1.59}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "电力体制改革", "change_pct": 1.99}, {"name": "水电", "change_pct": 2.16}, {"name": "火电", "change_pct": 1.79}, {"name": "光伏", "change_pct": 1.01}, {"name": "风电", "change_pct": 1.29}, {"name": "国企改革", "change_pct": 1.7}, {"name": "算电协同", "change_pct": 1.36}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 28, "hot_rank_chg": 33, "stock_cnt": 5835, "price": "10.19", "change": "10.04", "market_id": "17", "circulate_market_value": "6932457500.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 3.36}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "雄安新区", "change_pct": 1.47}, {"name": "煤化工", "change_pct": 3.14}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 29, "hot_rank_chg": 20, "stock_cnt": 5835, "price": "38.39", "change": "2.13", "market_id": "17", "circulate_market_value": "152469230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 30, "hot_rank_chg": -20, "stock_cnt": 5835, "price": "421.20", "change": "3.51", "market_id": "33", "circulate_market_value": "528287220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600895", "name": "张江高科", "hot_rank": 31, "hot_rank_chg": -15, "stock_cnt": 5835, "price": "31.35", "change": "1.00", "market_id": "17", "circulate_market_value": "48551417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 32, "hot_rank_chg": 1, "stock_cnt": 5835, "price": "39.86", "change": "-8.37", "market_id": "17", "circulate_market_value": "33743616000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 33, "hot_rank_chg": 207, "stock_cnt": 5835, "price": "8.77", "change": "10.04", "market_id": "33", "circulate_market_value": "5794838800.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "算力基础设施", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.8}, {"name": "国产软件", "change_pct": 0.96}, {"name": "人工智能", "change_pct": 1.04}, {"name": "充电桩", "change_pct": 1.44}, {"name": "云计算数据中心", "change_pct": 0.39}, {"name": "军民融合", "change_pct": 1.11}, {"name": "磁悬浮", "change_pct": 1.7}, {"name": "人脸识别", "change_pct": 1.17}, {"name": "水利", "change_pct": 1.87}, {"name": "物联网", "change_pct": 0.9}, {"name": "大数据", "change_pct": 0.93}, {"name": "智慧城市", "change_pct": 0.9}, {"name": "军工", "change_pct": 1.25}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 1.6}, {"name": "储能", "change_pct": 1.52}, {"name": "智慧安防", "change_pct": 1.04}, {"name": "无人机", "change_pct": 1.09}, {"name": "虚拟电厂", "change_pct": 1.85}, {"name": "信创", "change_pct": 0.64}, {"name": "元宇宙", "change_pct": 1.6}, {"name": "东数西算/算力", "change_pct": 0.25}, {"name": "新型城镇化", "change_pct": 1.39}, {"name": "AIGC概念", "change_pct": 1.0}, {"name": "数字乡村", "change_pct": 1.37}, {"name": "华为海思", "change_pct": 0.48}, {"name": "闪存", "change_pct": -1.04}, {"name": "UWB超宽带", "change_pct": 0.07}, {"name": "智慧政务", "change_pct": 0.27}, {"name": "特高压", "change_pct": 1.99}, {"name": "华为云·鲲鹏", "change_pct": 1.08}, {"name": "华为产业链", "change_pct": 0.96}, {"name": "时空大数据", "change_pct": 1.99}, {"name": "服务器", "change_pct": -0.75}, {"name": "智能电网", "change_pct": 1.78}, {"name": "磁电存储", "change_pct": 2.08}, {"name": "军工信息化", "change_pct": 0.85}, {"name": "光纤概念", "change_pct": -1.18}, {"name": "雅江电站概念股", "change_pct": 2.39}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 34, "hot_rank_chg": -3, "stock_cnt": 5835, "price": "152.18", "change": "-8.56", "market_id": "33", "circulate_market_value": "48472792000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 35, "hot_rank_chg": 175, "stock_cnt": 5835, "price": "26.98", "change": "9.99", "market_id": "33", "circulate_market_value": "51277162000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "301583", "name": "托伦斯", "hot_rank": 36, "hot_rank_chg": 79, "stock_cnt": 5835, "price": "193.82", "change": "10.69", "market_id": "33", "circulate_market_value": "5975736700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002083", "name": "孚日股份", "hot_rank": 37, "hot_rank_chg": 52, "stock_cnt": 5835, "price": "11.88", "change": "10.00", "market_id": "33", "circulate_market_value": "11246071500.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "VC涨价", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.18}, {"name": "锂电池", "change_pct": 1.57}, {"name": "优化生育（三孩）", "change_pct": 2.08}, {"name": "举牌", "change_pct": 2.17}, {"name": "纺织服装", "change_pct": 1.31}, {"name": "山东国企改革", "change_pct": 1.65}, {"name": "教育", "change_pct": 2.46}, {"name": "外贸受益概念", "change_pct": 1.6}, {"name": "新能源汽车", "change_pct": 1.6}, {"name": "抗菌面料", "change_pct": 2.18}, {"name": "国企改革", "change_pct": 1.7}, {"name": "新冠病毒防治", "change_pct": 0.97}]}, {"code": "603118", "name": "共进股份", "hot_rank": 38, "hot_rank_chg": -17, "stock_cnt": 5835, "price": "16.64", "change": "-3.87", "market_id": "17", "circulate_market_value": "13100279400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 39, "hot_rank_chg": 214, "stock_cnt": 5835, "price": "15.81", "change": "10.02", "market_id": "17", "circulate_market_value": "8099315200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂盐"}, {"code": "000428", "name": "华天酒店", "hot_rank": 40, "hot_rank_chg": 67, "stock_cnt": 5835, "price": "4.04", "change": "10.08", "market_id": "33", "circulate_market_value": "4116461000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "酒店", "xgb_concepts": [{"name": "湖南国企改革", "change_pct": 2.76}, {"name": "旅游", "change_pct": 1.58}, {"name": "物业管理", "change_pct": 1.66}, {"name": "预制菜", "change_pct": 2.34}, {"name": "国企改革", "change_pct": 1.7}, {"name": "餐饮", "change_pct": 2.62}]}, {"code": "688146", "name": "中船特气", "hot_rank": 41, "hot_rank_chg": 61, "stock_cnt": 5835, "price": "301.17", "change": "9.20", "market_id": "17", "circulate_market_value": "43660868000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 42, "hot_rank_chg": -16, "stock_cnt": 5835, "price": "33.33", "change": "-0.66", "market_id": "17", "circulate_market_value": "24138533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002195", "name": "岩山科技", "hot_rank": 43, "hot_rank_chg": -30, "stock_cnt": 5835, "price": "6.69", "change": "-2.05", "market_id": "33", "circulate_market_value": "37569926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "国产软件", "change_pct": 0.96}, {"name": "无人驾驶", "change_pct": 0.93}, {"name": "人工智能", "change_pct": 1.04}, {"name": "网络安全", "change_pct": 0.43}, {"name": "游戏", "change_pct": 3.24}, {"name": "大数据", "change_pct": 0.93}, {"name": "脑科学", "change_pct": -0.99}, {"name": "百度概念股", "change_pct": 1.77}, {"name": "阿里巴巴概念股", "change_pct": 1.19}, {"name": "腾讯概念股", "change_pct": 0.86}, {"name": "字节跳动概念股", "change_pct": 0.84}, {"name": "自动刹车", "change_pct": 2.17}, {"name": "人工智能大模型", "change_pct": 0.97}, {"name": "短剧/互动影游", "change_pct": 2.34}, {"name": "AI医疗", "change_pct": 0.55}, {"name": "区块链", "change_pct": 1.25}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 44, "hot_rank_chg": 22, "stock_cnt": 5835, "price": "94.85", "change": "1.61", "market_id": "33", "circulate_market_value": "330705290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002607", "name": "中公教育", "hot_rank": 45, "hot_rank_chg": 146, "stock_cnt": 5835, "price": "2.08", "change": "10.05", "market_id": "33", "circulate_market_value": "11530355600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI就业", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.04}, {"name": "教育", "change_pct": 2.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "阿里巴巴概念股", "change_pct": 1.19}, {"name": "低价股", "change_pct": 1.84}, {"name": "职业教育", "change_pct": 2.64}, {"name": "在线教育", "change_pct": 3.16}]}, {"code": "002440", "name": "闰土股份", "hot_rank": 46, "hot_rank_chg": 165, "stock_cnt": 5835, "price": "13.64", "change": "10.00", "market_id": "33", "circulate_market_value": "12908342600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "染料涨价"}, {"code": "603221", "name": "爱丽家居", "hot_rank": 47, "hot_rank_chg": -1, "stock_cnt": 5835, "price": "18.63", "change": "9.98", "market_id": "17", "circulate_market_value": "4513490100.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "拟收购欧康诺"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 48, "hot_rank_chg": -6, "stock_cnt": 5835, "price": "74.94", "change": "-6.15", "market_id": "33", "circulate_market_value": "109924375000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 49, "hot_rank_chg": 19, "stock_cnt": 5835, "price": "32.15", "change": "1.45", "market_id": "17", "circulate_market_value": "662347650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 50, "hot_rank_chg": -21, "stock_cnt": 5835, "price": "396.84", "change": "1.53", "market_id": "33", "circulate_market_value": "1690570600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 51, "hot_rank_chg": 11, "stock_cnt": 5835, "price": "55.34", "change": "-10.00", "market_id": "17", "circulate_market_value": "23041789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 52, "hot_rank_chg": 64, "stock_cnt": 5835, "price": "31.06", "change": "2.37", "market_id": "33", "circulate_market_value": "24301488000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 53, "hot_rank_chg": -6, "stock_cnt": 5835, "price": "29.34", "change": "-2.07", "market_id": "17", "circulate_market_value": "100135943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601179", "name": "中国西电", "hot_rank": 54, "hot_rank_chg": 25, "stock_cnt": 5835, "price": "13.67", "change": "1.71", "market_id": "17", "circulate_market_value": "70070812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 55, "hot_rank_chg": 112, "stock_cnt": 5835, "price": "30.20", "change": "4.61", "market_id": "33", "circulate_market_value": "42412666000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 56, "hot_rank_chg": -11, "stock_cnt": 5835, "price": "57.75", "change": "-0.57", "market_id": "17", "circulate_market_value": "1145996330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 57, "hot_rank_chg": 46, "stock_cnt": 5835, "price": "30.71", "change": "-3.06", "market_id": "17", "circulate_market_value": "44897860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 58, "hot_rank_chg": 162, "stock_cnt": 5835, "price": "108.89", "change": "7.99", "market_id": "33", "circulate_market_value": "203603200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002212", "name": "天融信", "hot_rank": 59, "hot_rank_chg": 55, "stock_cnt": 5835, "price": "6.60", "change": "10.00", "market_id": "33", "circulate_market_value": "7701170000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.41}, {"name": "国产软件", "change_pct": 0.96}, {"name": "一带一路", "change_pct": 1.58}, {"name": "量子通信", "change_pct": 0.47}, {"name": "人工智能", "change_pct": 1.04}, {"name": "网络安全", "change_pct": 0.43}, {"name": "云计算数据中心", "change_pct": 0.39}, {"name": "物联网", "change_pct": 0.9}, {"name": "大数据", "change_pct": 0.93}, {"name": "破净股", "change_pct": 2.01}, {"name": "数字经济", "change_pct": 1.0}, {"name": "国产芯片", "change_pct": -0.15}, {"name": "阿里巴巴概念股", "change_pct": 1.19}, {"name": "腾讯概念股", "change_pct": 0.86}, {"name": "信创", "change_pct": 0.64}, {"name": "华为昇腾", "change_pct": 0.65}, {"name": "跨境支付", "change_pct": 1.93}, {"name": "web3.0", "change_pct": 0.93}, {"name": "数字人民币", "change_pct": 1.6}, {"name": "智慧政务", "change_pct": 0.27}, {"name": "华为鸿蒙", "change_pct": 1.91}, {"name": "华为云·鲲鹏", "change_pct": 1.08}, {"name": "卫星互联网", "change_pct": 0.77}, {"name": "智慧灯杆", "change_pct": 0.94}, {"name": "华为产业链", "change_pct": 0.96}, {"name": "回购", "change_pct": 1.48}, {"name": "智能电网", "change_pct": 1.78}, {"name": "低空经济", "change_pct": 1.25}, {"name": "量子计算", "change_pct": 0.9}, {"name": "财税改革", "change_pct": 1.74}, {"name": "DeepSeek概念股", "change_pct": 0.25}]}, {"code": "603629", "name": "利通电子", "hot_rank": 60, "hot_rank_chg": -3, "stock_cnt": 5835, "price": "96.95", "change": "-6.37", "market_id": "17", "circulate_market_value": "34972134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 61, "hot_rank_chg": 87, "stock_cnt": 5835, "price": "59.12", "change": "4.79", "market_id": "33", "circulate_market_value": "50468889000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600578", "name": "京能电力", "hot_rank": 62, "hot_rank_chg": 409, "stock_cnt": 5835, "price": "5.95", "change": "9.98", "market_id": "17", "circulate_market_value": "39832995000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "定增", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": 1.27}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "电力体制改革", "change_pct": 1.99}, {"name": "京津冀", "change_pct": 1.69}, {"name": "火电", "change_pct": 1.79}, {"name": "风电", "change_pct": 1.29}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 63, "hot_rank_chg": -28, "stock_cnt": 5835, "price": "13.94", "change": "-2.31", "market_id": "33", "circulate_market_value": "14809909000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 64, "hot_rank_chg": 296, "stock_cnt": 5835, "price": "3.38", "change": "10.10", "market_id": "17", "circulate_market_value": "4318287300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "中药", "change_pct": 0.68}, {"name": "甲醇", "change_pct": 3.36}, {"name": "化肥", "change_pct": 2.44}, {"name": "保健品", "change_pct": 1.16}, {"name": "民营医院", "change_pct": 1.13}, {"name": "医药", "change_pct": 0.5}, {"name": "煤化工", "change_pct": 3.14}, {"name": "食品", "change_pct": 2.99}, {"name": "大农业", "change_pct": 2.19}, {"name": "干细胞", "change_pct": 0.59}, {"name": "阿尔茨海默病", "change_pct": 1.07}]}, {"code": "003032", "name": "传智教育", "hot_rank": 65, "hot_rank_chg": 53, "stock_cnt": 5835, "price": "7.28", "change": "9.97", "market_id": "33", "circulate_market_value": "2071026100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI教育", "xgb_concepts": [{"name": "筹码集中", "change_pct": 2.13}, {"name": "密集调研", "change_pct": 1.22}, {"name": "ST摘帽", "change_pct": 1.49}, {"name": "教育", "change_pct": 2.46}, {"name": "阿里巴巴概念股", "change_pct": 1.19}, {"name": "职业教育", "change_pct": 2.64}, {"name": "在线教育", "change_pct": 3.16}, {"name": "华为鸿蒙", "change_pct": 1.91}, {"name": "华为产业链", "change_pct": 0.96}, {"name": "智谱AI", "change_pct": 0.97}]}, {"code": "002969", "name": "嘉美包装", "hot_rank": 66, "hot_rank_chg": -30, "stock_cnt": 5835, "price": "13.14", "change": "4.20", "market_id": "33", "circulate_market_value": "14358541000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 67, "hot_rank_chg": 74, "stock_cnt": 5835, "price": "94.56", "change": "6.79", "market_id": "17", "circulate_market_value": "7475143700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 68, "hot_rank_chg": -30, "stock_cnt": 5835, "price": "281.70", "change": "-6.81", "market_id": "17", "circulate_market_value": "114465503000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 69, "hot_rank_chg": 30, "stock_cnt": 5835, "price": "62.35", "change": "3.74", "market_id": "33", "circulate_market_value": "456718440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601888", "name": "中国中免", "hot_rank": 70, "hot_rank_chg": 54, "stock_cnt": 5835, "price": "57.38", "change": "3.37", "market_id": "17", "circulate_market_value": "112033047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 71, "hot_rank_chg": -11, "stock_cnt": 5835, "price": "7.11", "change": "-3.40", "market_id": "17", "circulate_market_value": "14441294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.59}, {"name": "电力体制改革", "change_pct": 1.99}, {"name": "火电", "change_pct": 1.79}, {"name": "风电", "change_pct": 1.29}, {"name": "储能", "change_pct": 1.52}, {"name": "碳中和", "change_pct": 1.25}, {"name": "国企改革", "change_pct": 1.7}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 72, "hot_rank_chg": 81, "stock_cnt": 5835, "price": "106.55", "change": "-4.93", "market_id": "33", "circulate_market_value": "169151130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 73, "hot_rank_chg": -50, "stock_cnt": 5835, "price": "5.41", "change": "-7.20", "market_id": "33", "circulate_market_value": "7015339800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.68}, {"name": "创新药", "change_pct": 0.23}, {"name": "央企改革", "change_pct": 1.59}, {"name": "医疗器械", "change_pct": 0.88}, {"name": "强势人气股", "change_pct": -0.24}, {"name": "互联网医疗", "change_pct": 0.98}, {"name": "保健品", "change_pct": 1.16}, {"name": "民营医院", "change_pct": 1.13}, {"name": "CAR-T疗法", "change_pct": 0.39}, {"name": "医药", "change_pct": 0.5}, {"name": "化学原料药", "change_pct": 0.55}, {"name": "海南概念", "change_pct": 0.95}, {"name": "脑科学", "change_pct": -0.99}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.36}, {"name": "海南自由贸易港", "change_pct": 1.13}, {"name": "食品", "change_pct": 2.99}, {"name": "国企改革", "change_pct": 1.7}, {"name": "医疗信息化", "change_pct": 0.53}, {"name": "新冠病毒防治", "change_pct": 0.97}, {"name": "自贸区", "change_pct": 1.63}, {"name": "合成生物", "change_pct": 1.22}]}, {"code": "301308", "name": "江波龙", "hot_rank": 74, "hot_rank_chg": -15, "stock_cnt": 5835, "price": "329.63", "change": "-0.11", "market_id": "33", "circulate_market_value": "92906839000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 75, "hot_rank_chg": 20, "stock_cnt": 5835, "price": "86.64", "change": "-5.93", "market_id": "17", "circulate_market_value": "126759028000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 76, "hot_rank_chg": -4, "stock_cnt": 5835, "price": "15.00", "change": "-5.18", "market_id": "33", "circulate_market_value": "10428945500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 77, "hot_rank_chg": -8, "stock_cnt": 5835, "price": "26.32", "change": "-7.09", "market_id": "33", "circulate_market_value": "19935166000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 78, "hot_rank_chg": 41, "stock_cnt": 5835, "price": "126.50", "change": "2.83", "market_id": "17", "circulate_market_value": "312869950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 79, "hot_rank_chg": 31, "stock_cnt": 5835, "price": "7.14", "change": "3.63", "market_id": "33", "circulate_market_value": "4681741000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.68}, {"name": "新零售", "change_pct": 2.9}, {"name": "农业种植", "change_pct": 1.53}, {"name": "冷链", "change_pct": 1.15}, {"name": "大农业", "change_pct": 2.19}, {"name": "预制菜", "change_pct": 2.34}, {"name": "国企改革", "change_pct": 1.7}, {"name": "可降解塑料", "change_pct": 1.75}, {"name": "免税店概念", "change_pct": 2.71}, {"name": "湖北国企改革", "change_pct": 1.64}]}, {"code": "601127", "name": "赛力斯", "hot_rank": 80, "hot_rank_chg": 81, "stock_cnt": 5835, "price": "58.00", "change": "3.70", "market_id": "17", "circulate_market_value": "90317797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600644", "name": "乐山电力", "hot_rank": 81, "hot_rank_chg": 363, "stock_cnt": 5835, "price": "9.72", "change": "6.93", "market_id": "17", "circulate_market_value": "5621278400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 1.99}, {"name": "水电", "change_pct": 2.16}, {"name": "天然气", "change_pct": 1.35}, {"name": "光伏", "change_pct": 1.01}]}, {"code": "600733", "name": "北汽蓝谷", "hot_rank": 82, "hot_rank_chg": 232, "stock_cnt": 5835, "price": "5.74", "change": "9.96", "market_id": "17", "circulate_market_value": "31888730000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "L3自动驾驶", "xgb_concepts": [{"name": "定增破发", "change_pct": 2.13}, {"name": "无人驾驶", "change_pct": 0.93}, {"name": "新能源整车", "change_pct": 3.18}, {"name": "京津冀", "change_pct": 1.69}, {"name": "汽车整车", "change_pct": 3.33}, {"name": "新能源汽车", "change_pct": 1.6}, {"name": "百度概念股", "change_pct": 1.77}, {"name": "新能源车零部件", "change_pct": 1.37}, {"name": "换电概念", "change_pct": 2.48}, {"name": "固态电池", "change_pct": 1.71}, {"name": "汽车芯片", "change_pct": 0.5}, {"name": "动力电池回收", "change_pct": 2.0}, {"name": "一体化压铸", "change_pct": 2.46}, {"name": "华为汽车", "change_pct": 1.65}, {"name": "华为鸿蒙", "change_pct": 1.91}, {"name": "华为产业链", "change_pct": 0.96}]}, {"code": "002050", "name": "三花智控", "hot_rank": 83, "hot_rank_chg": 29, "stock_cnt": 5835, "price": "36.02", "change": "1.24", "market_id": "33", "circulate_market_value": "132951441000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002112", "name": "三变科技", "hot_rank": 84, "hot_rank_chg": 551, "stock_cnt": 5835, "price": "16.19", "change": "9.99", "market_id": "33", "circulate_market_value": "4243075200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "变压器"}, {"code": "002463", "name": "沪电股份", "hot_rank": 85, "hot_rank_chg": -11, "stock_cnt": 5835, "price": "105.25", "change": "-0.47", "market_id": "33", "circulate_market_value": "202375800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 86, "hot_rank_chg": 103, "stock_cnt": 5835, "price": "23.69", "change": "3.68", "market_id": "33", "circulate_market_value": "74521878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 87, "hot_rank_chg": -50, "stock_cnt": 5835, "price": "24.77", "change": "-4.73", "market_id": "17", "circulate_market_value": "9486024500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 88, "hot_rank_chg": -44, "stock_cnt": 5835, "price": "1321.00", "change": "0.08", "market_id": "17", "circulate_market_value": "1651357800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 89, "hot_rank_chg": 33, "stock_cnt": 5835, "price": "66.81", "change": "-0.33", "market_id": "33", "circulate_market_value": "31084844000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 90, "hot_rank_chg": 103, "stock_cnt": 5835, "price": "46.08", "change": "3.69", "market_id": "33", "circulate_market_value": "68001362000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600089", "name": "特变电工", "hot_rank": 91, "hot_rank_chg": 74, "stock_cnt": 5835, "price": "20.65", "change": "1.98", "market_id": "17", "circulate_market_value": "104340167000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002379", "name": "宏桥控股", "hot_rank": 92, "hot_rank_chg": 136, "stock_cnt": 5835, "price": "20.52", "change": "6.10", "market_id": "33", "circulate_market_value": "23318389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 93, "hot_rank_chg": 84, "stock_cnt": 5835, "price": "10.80", "change": "-0.09", "market_id": "33", "circulate_market_value": "6298676400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 1.42}, {"name": "一带一路", "change_pct": 1.58}, {"name": "天然气", "change_pct": 1.35}, {"name": "油气改革", "change_pct": 1.35}, {"name": "页岩气", "change_pct": 1.62}, {"name": "深地经济", "change_pct": 1.19}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 94, "hot_rank_chg": -66, "stock_cnt": 5835, "price": "1146.90", "change": "1.68", "market_id": "17", "circulate_market_value": "720589210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002309", "name": "中利集团", "hot_rank": 95, "hot_rank_chg": -68, "stock_cnt": 5835, "price": "3.28", "change": "-2.67", "market_id": "33", "circulate_market_value": "7892114000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.57}, {"name": "5G", "change_pct": 0.12}, {"name": "一带一路", "change_pct": 1.58}, {"name": "光通信", "change_pct": -1.35}, {"name": "军民融合", "change_pct": 1.11}, {"name": "光伏", "change_pct": 1.01}, {"name": "军工", "change_pct": 1.25}, {"name": "新能源汽车", "change_pct": 1.6}, {"name": "储能", "change_pct": 1.52}, {"name": "BIPV概念", "change_pct": 1.81}, {"name": "钙钛矿电池", "change_pct": 1.11}, {"name": "异质结电池HJT", "change_pct": 0.18}, {"name": "华为产业链", "change_pct": 0.96}]}, {"code": "002879", "name": "长缆科技", "hot_rank": 96, "hot_rank_chg": -40, "stock_cnt": 5835, "price": "17.93", "change": "-5.13", "market_id": "33", "circulate_market_value": "2458902600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601678", "name": "滨化股份", "hot_rank": 97, "hot_rank_chg": 37, "stock_cnt": 5835, "price": "6.57", "change": "1.08", "market_id": "17", "circulate_market_value": "13424719000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.57}, {"name": "军民融合", "change_pct": 1.11}, {"name": "氢能源/燃料电池", "change_pct": 1.85}, {"name": "烧碱", "change_pct": 2.08}, {"name": "军工", "change_pct": 1.25}, {"name": "新能源汽车", "change_pct": 1.6}, {"name": "环氧丙烷", "change_pct": 1.58}, {"name": "氟化工", "change_pct": 0.19}, {"name": "双氧水", "change_pct": 1.59}, {"name": "液氯", "change_pct": 2.19}]}, {"code": "688008", "name": "澜起科技", "hot_rank": 98, "hot_rank_chg": 2, "stock_cnt": 5835, "price": "207.50", "change": "0.90", "market_id": "17", "circulate_market_value": "237538640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 99, "hot_rank_chg": -56, "stock_cnt": 5835, "price": "28.93", "change": "-0.48", "market_id": "17", "circulate_market_value": "707865540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600415", "name": "小商品城", "hot_rank": 100, "hot_rank_chg": 27, "stock_cnt": 5835, "price": "12.65", "change": "6.93", "market_id": "17", "circulate_market_value": "69367024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.68}, {"name": "一带一路", "change_pct": 1.58}, {"name": "人工智能", "change_pct": 1.04}, {"name": "移动支付", "change_pct": 1.56}, {"name": "浙江国企改革", "change_pct": 2.06}, {"name": "白马股", "change_pct": 1.43}, {"name": "外贸受益概念", "change_pct": 1.6}, {"name": "数字经济", "change_pct": 1.0}, {"name": "阿里巴巴概念股", "change_pct": 1.19}, {"name": "跨境支付", "change_pct": 1.93}, {"name": "数据要素", "change_pct": 0.97}, {"name": "国企改革", "change_pct": 1.7}, {"name": "数字人民币", "change_pct": 1.6}, {"name": "免税店概念", "change_pct": 2.71}, {"name": "地摊经济", "change_pct": 2.22}, {"name": "出海龙头", "change_pct": 2.67}, {"name": "IP经济/谷子经济", "change_pct": 2.5}]}];
const LIMIT_UP_POOL = [{"code": "601858", "name": "中国科传", "price": 19.2, "change_pct": 10.03, "reason": "公司表示已经部署基于DeepSeek等大模型的若干应用，使AI大模型成为支撑公司出版深度融合转型的数字化基础设施", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 2.36, "first_limit_up": 1785304179, "break_limit_up_times": 1}, {"code": "003032", "name": "传智教育", "price": 7.28, "change_pct": 9.97, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案", "plates": ["教育"], "limit_up_days": 3, "turnover_ratio": 3.74, "first_limit_up": 1785288300, "break_limit_up_times": 0}, {"code": "600429", "name": "三元股份", "price": 4.69, "change_pct": 10.09, "reason": "公司为北京地区最大的奶制品生产企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.42, "first_limit_up": 1785302206, "break_limit_up_times": 0}, {"code": "002667", "name": "*ST威领", "price": 10.65, "change_pct": 10.02, "reason": "公司业务主要包括锂矿选矿、基础性锂电原料锂盐加工及冶炼业务等，通过收购嘉宇矿业74.3%股权，新增钨锡铅锌矿开采业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 8.58, "first_limit_up": 1785306861, "break_limit_up_times": 0}, {"code": "002514", "name": "*ST宝馨", "price": 1.95, "change_pct": 10.17, "reason": "参股公司海胶智能主要从事智能农业机器人研发、生产及销售等相关业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 11.99, "first_limit_up": 1785307113, "break_limit_up_times": 2}, {"code": "600844", "name": "金煤科技", "price": 3.45, "change_pct": 9.87, "reason": "公司专注于煤制乙二醇，上半年实现扭亏为盈，4月初年产10万吨草酸扩产项目顺利建成投产，公司借此增加了盈利能力较强的草酸产销量，同时主动降低了毛利率较差的乙二醇产销规模，叠加草酸市场行情上行，整体盈利结构得到明显改善。此外，公司持续推进高卡煤掺烧等降耗举措，进一步降低了产品单耗，共同推动了报告期内业绩的扭亏为盈", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 12.48, "first_limit_up": 1785291864, "break_limit_up_times": 1}, {"code": "603407", "name": "长裕集团", "price": 62.81, "change_pct": 10.0, "reason": "公司高纯氧化锆制品具有高绝缘性、高强度及导热特性，可用于HBM、SSD等存储芯片封装的陶瓷载板、散热底座等部件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.21, "first_limit_up": 1785289952, "break_limit_up_times": 1}, {"code": "603068", "name": "博通集成", "price": 39.72, "change_pct": 10.0, "reason": "公司已有多款融合AI技术的AIoT芯片产品实现量产销售，应用领域涵盖AI眼镜、AI玩具等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.57, "first_limit_up": 1785288997, "break_limit_up_times": 1}, {"code": "002212", "name": "天融信", "price": 6.6, "change_pct": 10.0, "reason": "公司智算云赋能OpenClaw安全稳定运行", "plates": ["人工智能大模型"], "limit_up_days": 2, "turnover_ratio": 6.44, "first_limit_up": 1785288606, "break_limit_up_times": 1}, {"code": "605136", "name": "丽人丽妆", "price": 8.36, "change_pct": 10.0, "reason": "国内领先化妆品网络零售服务商，推出了“千金极光饮”产品，同步搭配白番茄浓缩粉、麦角硫因、胶原三肽等科技成分，养出“千金白”", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.33, "first_limit_up": 1785307953, "break_limit_up_times": 0}, {"code": "002037", "name": "保利联合", "price": 6.72, "change_pct": 9.98, "reason": "公司作为国内电子雷管龙头，产能占全国 20%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.55, "first_limit_up": 1785288885, "break_limit_up_times": 1}, {"code": "603556", "name": "海兴电力", "price": 24.54, "change_pct": 10.0, "reason": "公司聚焦智能配用电、智慧水务及数字能源业务，主要产品包括智能电能表、一二次融合设备、环网柜等，面向全球电力公司提供解决方案", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.99, "first_limit_up": 1785292727, "break_limit_up_times": 0}, {"code": "600722", "name": "金牛化工", "price": 10.19, "change_pct": 10.04, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 7.97, "first_limit_up": 1785288747, "break_limit_up_times": 0}, {"code": "002833", "name": "弘亚数控", "price": 18.14, "change_pct": 10.01, "reason": "公司主营数控板式家具机械设备和成套自动化生产线解决方案，推出数控钻机器人分拣连线、智能机器人板材分拣生产线等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.42, "first_limit_up": 1785307482, "break_limit_up_times": 0}, {"code": "603580", "name": "艾艾精工", "price": 57.97, "change_pct": 10.0, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 13.53, "first_limit_up": 1785306336, "break_limit_up_times": 1}, {"code": "002597", "name": "金禾实业", "price": 21.54, "change_pct": 10.01, "reason": "公司三氯蔗糖获农业农村部批准为新饲料添加剂，享2026-2031年五年监测期，期间国内仅公司可合法产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.18, "first_limit_up": 1785306363, "break_limit_up_times": 0}, {"code": "603801", "name": "志邦家居", "price": 5.93, "change_pct": 10.02, "reason": "公司产品包括整体厨房、全屋定制等，周杰伦为品牌代言人", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1785290488, "break_limit_up_times": 0}, {"code": "603163", "name": "圣晖集成", "price": 77.72, "change_pct": 10.01, "reason": "1、公司中标8.58亿元电子厂房内装及固资项目；\n2、公司提供英诺赛科（苏州）半导体禅额眼帘洁净室工程服务，核心技术覆盖气流管理、微分子污染控制等领域，已实现量产配套", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.48, "first_limit_up": 1785288300, "break_limit_up_times": 0}, {"code": "600419", "name": "天润乳业", "price": 8.83, "change_pct": 9.96, "reason": "新疆地区乳业龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.4, "first_limit_up": 1785290370, "break_limit_up_times": 1}, {"code": "002882", "name": "金龙羽", "price": 19.65, "change_pct": 10.02, "reason": "公司固态电解质、半固态电芯已进入中试试验；全资子公司惠州金龙羽投资3亿元与锦添翼共同开发固态电池相关技术，锦添翼实际控制人李新禄及其研究团队在锂离子电池领域积累了20多年的研究基础，已成功掌握了氧化物固态电解质的宏量制备、硅碳负极材料的批量化生产、固态电芯的原位集成等研究成果", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 3.07, "first_limit_up": 1785291522, "break_limit_up_times": 0}, {"code": "603499", "name": "翔港科技", "price": 11.58, "change_pct": 9.97, "reason": "国内印刷包装一体化解决方案供应商；公司目前持有金泰克13.1944%股权。后者是一家集研发、生产和自主品牌产品营销于一体的专业存储方案提供商，主要提供内存、SSD相关存储产品", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.43, "first_limit_up": 1785289071, "break_limit_up_times": 0}, {"code": "603559", "name": "中通国脉", "price": 8.68, "change_pct": 10.01, "reason": "公司共同持股成立吉林省华君算力科技有限公司，经营范围包含云计算设备销售等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.11, "first_limit_up": 1785288901, "break_limit_up_times": 2}, {"code": "002558", "name": "巨人网络", "price": 26.98, "change_pct": 9.99, "reason": "中国游戏行业龙头；公司确认参与光轮智能新一轮10亿元战略融资，布局人工智能进入真实物理世界，是公司在AI产业生态投资的重要举措", "plates": ["游戏"], "limit_up_days": 1, "turnover_ratio": 5.56, "first_limit_up": 1785293595, "break_limit_up_times": 1}, {"code": "002440", "name": "闰土股份", "price": 13.64, "change_pct": 10.0, "reason": "公司染料产品占有率稳居国内染料市场份额第二位，参股的浙江巍华新材料拥有三氟甲苯产能", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 8.71, "first_limit_up": 1785291375, "break_limit_up_times": 1}, {"code": "001358", "name": "兴欣新材", "price": 26.98, "change_pct": 9.99, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商；拟斥资5000万元至1亿元回购股份", "plates": ["国产芯片"], "limit_up_days": 3, "turnover_ratio": 23.86, "first_limit_up": 1785288711, "break_limit_up_times": 1}, {"code": "300981", "name": "中红医疗", "price": 12.85, "change_pct": 19.98, "reason": "国内最早生产并销售PVC手套和丁腈手套的企业之一，上半年净利最高预增35倍，主要系健康防护手套销售价格上涨，带动产品毛利率显著提升", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.21, "first_limit_up": 1785288300, "break_limit_up_times": 0}, {"code": "605016", "name": "百龙创园", "price": 22.48, "change_pct": 9.98, "reason": "全球主要的益生元和膳食纤维生产商和供应商之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.91, "first_limit_up": 1785294814, "break_limit_up_times": 1}, {"code": "605337", "name": "李子园", "price": 9.75, "change_pct": 10.05, "reason": "公司主要从事甜牛奶乳饮料系列，进军儿童型含乳饮料、发酵型含乳饮料等细分市场", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.4, "first_limit_up": 1785289629, "break_limit_up_times": 0}, {"code": "002956", "name": "西麦食品", "price": 18.24, "change_pct": 10.01, "reason": "燕麦细分行业龙头，国内市占率达15%，有燕麦奶研发储备；预计上半年净利润同比增长70.58%-90.21%，主要归因于公司依托产业链优势推进产品与渠道创新，驱动收入稳步增长；同时，受益于原粮丰收及精益管理，采购成本下降，盈利空间拓宽", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1785301329, "break_limit_up_times": 0}, {"code": "600693", "name": "东百集团", "price": 9.47, "change_pct": 9.99, "reason": "公司主营以百货零售为主业，同时经营商业地产开发和房产租赁", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 13.74, "first_limit_up": 1785290265, "break_limit_up_times": 0}, {"code": "603719", "name": "良品铺子", "price": 9.45, "change_pct": 10.01, "reason": "公司主要从事休闲食品的研发、采购、销售、物流配送和运营业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.04, "first_limit_up": 1785289276, "break_limit_up_times": 0}, {"code": "601086", "name": "国芳集团", "price": 7.73, "change_pct": 9.96, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.2, "first_limit_up": 1785290323, "break_limit_up_times": 1}, {"code": "605339", "name": "南侨食品", "price": 13.02, "change_pct": 9.97, "reason": "国内烘焙油脂市场龙头，间接控股股东南侨投控为台湾地区上市公司，实控人、董事长陈正文为中国台湾籍\n", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 0.86, "first_limit_up": 1785291080, "break_limit_up_times": 0}, {"code": "000668", "name": "荣丰控股", "price": 20.3, "change_pct": 10.03, "reason": "长春市地产开发商", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.33, "first_limit_up": 1785302943, "break_limit_up_times": 0}, {"code": "002112", "name": "三变科技", "price": 16.19, "change_pct": 9.99, "reason": "公司专注于500kV 级及以下电力变压器研发，在国内率先试制智能变电站用 35kV、110kV 智能变压器，还与国网武汉南瑞合作研制光纤测温变压器", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.59, "first_limit_up": 1785291921, "break_limit_up_times": 0}, {"code": "000428", "name": "华天酒店", "price": 4.04, "change_pct": 10.08, "reason": "湖南省旅游酒店支柱企业", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 4.28, "first_limit_up": 1785288300, "break_limit_up_times": 1}, {"code": "002298", "name": "中电鑫龙", "price": 8.77, "change_pct": 10.04, "reason": "在OpenClaw普及后，电力设备与安防系统面临的网络攻击风险大幅提升，公司打造了AI驱动的电力安防一体化安全解决方案", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 16.08, "first_limit_up": 1785289392, "break_limit_up_times": 1}, {"code": "603833", "name": "欧派家居", "price": 35.33, "change_pct": 9.99, "reason": "公司主营整体厨柜、整体衣柜、整体卫浴和定制木门等定制化整体家居产品", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 1.17, "first_limit_up": 1785302687, "break_limit_up_times": 0}, {"code": "000892", "name": "欢瑞世纪", "price": 3.51, "change_pct": 10.03, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.81, "first_limit_up": 1785288615, "break_limit_up_times": 0}, {"code": "001323", "name": "慕思股份", "price": 17.17, "change_pct": 9.99, "reason": "公司主要从事健康睡眠系统的研产销，主要产品包括中高端床垫、床架、床品和其他产品，其中床垫为公司核心产品\n", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.8, "first_limit_up": 1785293292, "break_limit_up_times": 0}, {"code": "002199", "name": "东晶电子", "price": 13.39, "change_pct": 10.02, "reason": "国内最具规模的石英晶体元器件制造商之一；公司的核心产品包括石英晶体谐振器和振荡器，这些产品是电子设备的重要组件，广泛应用于通讯、汽车电子、工业控制、家用电器、智能安防等多个领域", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 8.79, "first_limit_up": 1785302595, "break_limit_up_times": 1}, {"code": "300169", "name": "天晟新材", "price": 5.38, "change_pct": 20.09, "reason": "公司有全资子公司天晟证券，包括证券交易及发行债券等业务", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 17.42, "first_limit_up": 1785292368, "break_limit_up_times": 2}, {"code": "603399", "name": "永杉锂业", "price": 15.81, "change_pct": 10.02, "reason": "公司主要从事电池级碳酸锂和电池级氢氧化锂，已形成年产15000吨电池级氢氧化锂和10000吨电池级碳酸锂的生产能力；一季度净利润同比扭亏为盈", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 16.4, "first_limit_up": 1785303255, "break_limit_up_times": 0}, {"code": "605068", "name": "明新旭腾", "price": 18.72, "change_pct": 9.99, "reason": "公司正积极接触柔性传感器公司，实现皮肤与传感器业务结合", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 3.46, "first_limit_up": 1785288300, "break_limit_up_times": 1}, {"code": "002498", "name": "汉缆股份", "price": 7.19, "change_pct": 9.94, "reason": "海上风电产业所需海缆产品的主要供应商之一", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.77, "first_limit_up": 1785302103, "break_limit_up_times": 1}, {"code": "000826", "name": "*ST启环", "price": 1.53, "change_pct": 10.07, "reason": "公司专注于固废收集处置和水务生态综合治理；子公司启迪合加新能源已开发出各类环卫专用车220余款，其中新能源纯电动产品40余款，已开发出L4级纯电动无人驾驶环卫车辆", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.57, "first_limit_up": 1785307440, "break_limit_up_times": 0}, {"code": "600236", "name": "桂冠电力", "price": 10.92, "change_pct": 9.97, "reason": "公司主要投资建设，经营管理以电力生产为主的能源项目，包含水电，火电和风电等，主要发电资产位于广西", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 0.42, "first_limit_up": 1785290541, "break_limit_up_times": 0}, {"code": "002568", "name": "百润股份", "price": 19.59, "change_pct": 9.99, "reason": "国内预调鸡尾酒龙头，旗下拥有知名品牌“RIO”预调酒，上半年净利润预计增长19.51%—25.94%", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.46, "first_limit_up": 1785290418, "break_limit_up_times": 0}, {"code": "002580", "name": "圣阳股份", "price": 18.61, "change_pct": 9.99, "reason": "1、公司主要产品包括锂离子电池及电源系统、新能源系统集成产品及服务等，主要用于网络能源、智慧储能和绿色动力应用领域；\n2、公司提供储能电源、储能系统和一体化解决方案，推出了涵盖户用储能、工商业储能、大型储能系统等全系列储能产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 25.48, "first_limit_up": 1785295443, "break_limit_up_times": 3}, {"code": "600733", "name": "北汽蓝谷", "price": 5.74, "change_pct": 9.96, "reason": "新能源汽车核心零部件的自主研发与生产商；公司北汽极狐成为首批入围L3自动驾驶许可车企", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 2.37, "first_limit_up": 1785291206, "break_limit_up_times": 1}, {"code": "002517", "name": "恺英网络", "price": 16.69, "change_pct": 10.02, "reason": "公司主营网游、页游开发运营", "plates": ["游戏"], "limit_up_days": 1, "turnover_ratio": 5.63, "first_limit_up": 1785301482, "break_limit_up_times": 0}, {"code": "002083", "name": "孚日股份", "price": 11.88, "change_pct": 10.0, "reason": "毛巾龙头；公司拥有VC产能1万吨", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 12.79, "first_limit_up": 1785291993, "break_limit_up_times": 0}, {"code": "600228", "name": "返利科技", "price": 6.66, "change_pct": 10.08, "reason": "国内知名的在线导购公司，基于人工智能技术开发的电商导购APP", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.6, "first_limit_up": 1785291575, "break_limit_up_times": 1}, {"code": "301112", "name": "信邦智能", "price": 34.2, "change_pct": 20.0, "reason": "公司是一家以工业机器人、协作机器人及相关智能技术为核心的高端装备设计制造集成公司", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.0, "first_limit_up": 1785288981, "break_limit_up_times": 2}, {"code": "002286", "name": "保龄宝", "price": 8.15, "change_pct": 9.99, "reason": "国内功能糖龙头之一，全球5家赤藓糖醇生产商之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.97, "first_limit_up": 1785289731, "break_limit_up_times": 0}, {"code": "300997", "name": "欢乐家", "price": 18, "change_pct": 20.0, "reason": "公司核心产品欢乐家水果罐头，尤以橘子罐头和黄桃罐头为代表", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.16, "first_limit_up": 1785288921, "break_limit_up_times": 1}, {"code": "002903", "name": "宇环数控", "price": 25.25, "change_pct": 10.02, "reason": "公司智能装备包括工业机器人及智能化成套装备等，为客户提供数字化、网络化的智能制造技术综合解决方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1785288696, "break_limit_up_times": 0}, {"code": "002607", "name": "中公教育", "price": 2.08, "change_pct": 10.05, "reason": "国内领先的全品类职业教育机构，周末热度排名靠前", "plates": ["教育"], "limit_up_days": 1, "turnover_ratio": 5.44, "first_limit_up": 1785289260, "break_limit_up_times": 1}, {"code": "603221", "name": "爱丽家居", "price": 18.63, "change_pct": 9.98, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 7, "turnover_ratio": 0.46, "first_limit_up": 1785288300, "break_limit_up_times": 0}, {"code": "002141", "name": "贤丰控股", "price": 6.3, "change_pct": 9.95, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 26.12, "first_limit_up": 1785289197, "break_limit_up_times": 3}, {"code": "003001", "name": "中岩大地", "price": 19.43, "change_pct": 10.02, "reason": "公司拟跨界并购PCB刀具企业深圳市鑫寰宇精工科技", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 15.95, "first_limit_up": 1785289731, "break_limit_up_times": 0}, {"code": "600227", "name": "赤天化", "price": 3.38, "change_pct": 10.1, "reason": "贵州最大的甲醇生产企业；公司上半年业绩同比扭亏为盈，主要因“公司化工生产装置运行质效同步提升，主要产品尿素、甲醇产量有所增加，单位生产成本有所下降。同时，2026年2月下旬以来地缘因素带来的市场供给端影响，甲醇、复合肥产品销售价格同比上涨，化工业务净利润较上年同期实现增长”", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 8.75, "first_limit_up": 1785288777, "break_limit_up_times": 1}, {"code": "001318", "name": "阳光乳业", "price": 11.1, "change_pct": 10.01, "reason": "公司主营业务为液态乳，包括儿童调制乳、A2牛奶", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1785290457, "break_limit_up_times": 0}, {"code": "603258", "name": "电魂网络", "price": 12.62, "change_pct": 10.03, "reason": "精品化网络游戏研运一体商，公司与腾讯签订游戏独家代理协议；公司为精品化游戏研运一体，目前已在部分在研游戏的研发过程中应用AI图片生成及AI对战博弈等AI技术", "plates": ["游戏"], "limit_up_days": 1, "turnover_ratio": 4.44, "first_limit_up": 1785307787, "break_limit_up_times": 0}, {"code": "300530", "name": "领湃科技", "price": 20.38, "change_pct": 20.02, "reason": "1、公司已经完成了NCM811电池化学体系研发，固态电解质及固态电池、干法电极及其制备技术的基础试验，相关专利正在申请或已获得授权；\n2、公司产品类别覆盖电芯、模组、系统集成，量产的产品是磷酸铁锂135Ah产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 8.02, "first_limit_up": 1785292059, "break_limit_up_times": 1}, {"code": "002791", "name": "坚朗五金", "price": 15.38, "change_pct": 10.01, "reason": "国内规模最大的门窗幕墙五金生产企业之一", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1785290526, "break_limit_up_times": 0}, {"code": "000636", "name": "风华高科", "price": 47.51, "change_pct": 10.0, "reason": "国内被动电子元件行业龙头；公司MLCC、合金电阻、大电流电感已批量导入国内头部AI服务器及机器人客户，AI算力订单充足", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 14.92, "first_limit_up": 1785288978, "break_limit_up_times": 4}, {"code": "002827", "name": "高争民爆", "price": 28.59, "change_pct": 10.0, "reason": "公司34%股份拟无偿划转，控股股东或变更为地矿集团", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.82, "first_limit_up": 1785288300, "break_limit_up_times": 0}, {"code": "601003", "name": "柳钢股份", "price": 3.81, "change_pct": 10.12, "reason": "华南、西南地区最大的钢铁联合企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.17, "first_limit_up": 1785292286, "break_limit_up_times": 0}, {"code": "603057", "name": "紫燕食品", "price": 22.45, "change_pct": 10.0, "reason": "公司是国内规模化的卤制食品生产企业，主营业务为卤制食品的研产销，主要产品为夫妻肺片、百味鸡、藤椒鸡等以鸡、鸭、牛、猪等禽畜产品以及蔬菜、水产品、豆制品为原材料的卤制食品\n", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 0.78, "first_limit_up": 1785294739, "break_limit_up_times": 0}, {"code": "002945", "name": "华林证券", "price": 14.37, "change_pct": 10.03, "reason": "全牌照证券公司", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 1.29, "first_limit_up": 1785302724, "break_limit_up_times": 0}, {"code": "603178", "name": "圣龙股份", "price": 16.63, "change_pct": 9.99, "reason": "国内动力系统泵类产品龙头企业；公司在电机、减速器、控制器领域的技术积累，均可以支持对人形机器人相关领域的研发；一季度业绩同比扭亏", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.85, "first_limit_up": 1785289218, "break_limit_up_times": 1}, {"code": "301139", "name": "*ST元道", "price": 3.74, "change_pct": 19.87, "reason": "公司携手中国移动等主要客户进行共同合作投资建设智能算力中心", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 43.65, "first_limit_up": 1785307350, "break_limit_up_times": 2}, {"code": "300359", "name": "全通教育", "price": 4.43, "change_pct": 20.05, "reason": "公司主营家校互动业务，为K12家庭提供孩子在校的基础信息服务、在线学科辅导和家庭教育指导等", "plates": ["教育"], "limit_up_days": 1, "turnover_ratio": 7.41, "first_limit_up": 1785289149, "break_limit_up_times": 0}, {"code": "600499", "name": "科达制造", "price": 16.65, "change_pct": 9.97, "reason": "公司在锂电池负极材料领域主要从事石墨化代加工，以及人造石墨、硅碳复合等负极产品的研产销，安徽基地整体已基本具备4万吨/年石墨化、2万吨/年人造石墨、1000吨/年硅碳负极、500吨/年钛酸锂的产能布局", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.04, "first_limit_up": 1785294971, "break_limit_up_times": 1}, {"code": "000736", "name": "中交发展", "price": 4.4, "change_pct": 10.0, "reason": "中交房地产集团控股的上市平台，当前主营业务聚焦 “物业管理 + 资产管理与运营” 双轮驱动", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.13, "first_limit_up": 1785289857, "break_limit_up_times": 1}, {"code": "605179", "name": "一鸣食品", "price": 16.01, "change_pct": 10.03, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 1.39, "first_limit_up": 1785288648, "break_limit_up_times": 0}, {"code": "300333", "name": "兆日科技", "price": 8.87, "change_pct": 20.03, "reason": "传统电子支付密码器系统行业龙头，金融信息安全领域核心企业；公司专注于电子支付密码器系统和纸纹防伪技术，其电子支付密码器系统是传统产品，主要服务于银行业", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 9.67, "first_limit_up": 1785301950, "break_limit_up_times": 0}, {"code": "603400", "name": "华之杰", "price": 47.14, "change_pct": 10.01, "reason": "公司产品作为扫地机器人的功能部件，可以应用于扫地机器人中", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 23.58, "first_limit_up": 1785306702, "break_limit_up_times": 0}, {"code": "002045", "name": "国光电器", "price": 8.48, "change_pct": 9.99, "reason": "1、全球知名的电声制造厂商；公司音响电声类业务主要产品包括扬声器、蓝牙音箱、智能音箱等，应用于可穿戴产品（如VR/AR）、智能手机、平板电脑等消费电子产品；\n2、公司为VR/AR设备供应声学模组，有MR设备声学模组的技术储备，公司也将生产VR整机", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.96, "first_limit_up": 1785289029, "break_limit_up_times": 0}, {"code": "603696", "name": "安记食品", "price": 12.03, "change_pct": 9.96, "reason": "公司位于福建泉州市，系复合调味品小龙头，主要产品包括复合调味粉、天然提取物调味料、香辛料、酱类、风味清汤等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.13, "first_limit_up": 1785289359, "break_limit_up_times": 0}, {"code": "002726", "name": "ST龙大", "price": 2.08, "change_pct": 10.05, "reason": "肉食品屠宰与深加工行业的龙头企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 10.01, "first_limit_up": 1785290997, "break_limit_up_times": 5}, {"code": "605188", "name": "国光连锁", "price": 12.55, "change_pct": 9.99, "reason": "江西省商贸流通行业首家上市企业，主营连锁超市、百货商场的运营业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.23, "first_limit_up": 1785289307, "break_limit_up_times": 0}, {"code": "605388", "name": "均瑶健康", "price": 5.56, "change_pct": 10.1, "reason": "国内最早生产与销售常温乳酸菌饮品的品牌企业之一；全资子公司奇梦星主要负责公司IP产品及母婴渠道产品的经营，目前已推出了“小黄人”系列乳酸菌饮品、“功夫熊猫”系列常温奶酪棒等产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.51, "first_limit_up": 1785288815, "break_limit_up_times": 0}, {"code": "600578", "name": "京能电力", "price": 5.95, "change_pct": 9.98, "reason": "北京地区最大的火力发电企业；主营业务以燃煤火力发电和供热为主，主要向京津唐电网、蒙西电网、山西电网、豫北电网供电", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.6, "first_limit_up": 1785303380, "break_limit_up_times": 0}, {"code": "688260", "name": "昀冢科技", "price": 88.51, "change_pct": 20.0, "reason": "公司主要聚焦 MLCC（多层片式陶瓷电容器）这一核心被动元件，成功自主开发出高功率光纤激光器陶瓷热沉", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 8.45, "first_limit_up": 1785303478, "break_limit_up_times": 0}];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公"};