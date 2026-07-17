const UPDATE_TIME = "2026-07-17 02:10";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -3.95,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续250天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人工智能",
    "rise": -1.46,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "存储芯片",
    "rise": -2.28,
    "rate": 0,
    "tag": "",
    "hotTag": "连续203天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "猪肉",
    "rise": -0.76,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "AI应用",
    "rise": -1.47,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "商业航天",
    "rise": -1.52,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续179天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": -2.03,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": -1.92,
    "rate": 0,
    "tag": "",
    "hotTag": "连续414天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "CRO概念",
    "rise": -5.65,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "成飞概念",
    "rise": -1.51,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "886030"
  },
  {
    "name": "AI手机",
    "rise": -2.63,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886070"
  },
  {
    "name": "ST板块",
    "rise": -0.84,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续88天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "算力租赁",
    "rise": -1.98,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续114天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "先进封装",
    "rise": -1.92,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "光纤概念",
    "rise": -2.87,
    "rate": 0,
    "tag": "",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "机器人概念",
    "rise": -1.53,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "白酒概念",
    "rise": -0.92,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "脑机接口",
    "rise": -2.5,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -2,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "网约车",
    "rise": -0.82,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "智能汽车ETF",
    "code": "885753"
  }
];
const THS_EVENTS = [
  {
    "title": "超3500亿元！DeepSeek估值曝光",
    "desc": "",
    "heat": 89806,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "米奥会展",
        "code": "300795",
        "chg": 20.045819
      }
    ]
  },
  {
    "title": "创新药赛道景气上行 22家公司业绩获机构看好",
    "desc": "",
    "heat": 65436,
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
        "name": "珍宝岛",
        "code": "603567",
        "chg": 10.036496
      }
    ]
  },
  {
    "title": "华为靳玉志：L3与L4规模商用预计2027年、2028年实现",
    "desc": "",
    "heat": 42523,
    "direction": "无人驾驶",
    "themes": [
      "无人驾驶"
    ],
    "stocks": [
      {
        "name": "索菱股份",
        "code": "002766",
        "chg": 10.055866
      }
    ]
  },
  {
    "title": "AI手机渗透率有望加速提升 18股获5家及以上机构评级",
    "desc": "",
    "heat": 37356,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "格林精密",
        "code": "300968",
        "chg": 11.328125
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "氦气",
    "change": "+4.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+3.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+3.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "+3.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+2.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电力体制改革",
    "change": "+2.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氟化工",
    "change": "+1.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液氯",
    "change": "+1.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PVDF概念",
    "change": "+1.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+1.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超超临界发电",
    "change": "+1.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "苹果期货",
    "change": "+1.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "钒电池",
    "change": "+0.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "天然气",
    "change": "+0.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+0.77%",
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
    "hot_rank": 1,
    "hot_rank_chg": 1,
    "stock_cnt": 5853,
    "price": "5.20",
    "change": "5.26",
    "market_id": "17",
    "circulate_market_value": "13096251400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.8
      },
      {
        "name": "工业大麻",
        "change_pct": -2.83
      },
      {
        "name": "中药",
        "change_pct": -2.9
      },
      {
        "name": "强势人气股",
        "change_pct": -0.88
      },
      {
        "name": "保健品",
        "change_pct": -1.88
      },
      {
        "name": "医药",
        "change_pct": -3.81
      },
      {
        "name": "化学原料药",
        "change_pct": -4.07
      },
      {
        "name": "流感",
        "change_pct": -3.18
      },
      {
        "name": "振兴东北",
        "change_pct": -0.21
      },
      {
        "name": "食品",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 9,
    "hot_rank_chg": 1,
    "stock_cnt": 5853,
    "price": "6.11",
    "change": "0.99",
    "market_id": "33",
    "circulate_market_value": "216093190000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.67
      },
      {
        "name": "手机产业链",
        "change_pct": -2.1
      },
      {
        "name": "超高清视频",
        "change_pct": -1.54
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.93
      },
      {
        "name": "电竞",
        "change_pct": -1.86
      },
      {
        "name": "半导体",
        "change_pct": -2.01
      },
      {
        "name": "人工智能",
        "change_pct": -1.62
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.07
      },
      {
        "name": "VR&AR",
        "change_pct": -1.89
      },
      {
        "name": "OLED",
        "change_pct": -1.31
      },
      {
        "name": "京津冀",
        "change_pct": -0.83
      },
      {
        "name": "物联网",
        "change_pct": -1.1
      },
      {
        "name": "指纹识别",
        "change_pct": -2.07
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.15
      },
      {
        "name": "白马股",
        "change_pct": -0.65
      },
      {
        "name": "智能制造",
        "change_pct": -1.43
      },
      {
        "name": "小米概念股",
        "change_pct": -1.66
      },
      {
        "name": "国产芯片",
        "change_pct": -2.33
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.27
      },
      {
        "name": "全息概念",
        "change_pct": -1.34
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.43
      },
      {
        "name": "MicroLED",
        "change_pct": -1.55
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.8
      },
      {
        "name": "智能手表",
        "change_pct": -1.77
      },
      {
        "name": "MiniLED",
        "change_pct": -1.76
      },
      {
        "name": "传感器",
        "change_pct": -1.74
      },
      {
        "name": "大硅片",
        "change_pct": 0.57
      },
      {
        "name": "AI PC",
        "change_pct": -1.71
      },
      {
        "name": "华为产业链",
        "change_pct": -1.65
      },
      {
        "name": "回购",
        "change_pct": -1.34
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.16
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.11
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 13,
    "hot_rank_chg": 2,
    "stock_cnt": 5853,
    "price": "10.35",
    "change": "0.29",
    "market_id": "33",
    "circulate_market_value": "21590359000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -2.63
      },
      {
        "name": "足球",
        "change_pct": -0.6
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.73
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.03
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.85
      },
      {
        "name": "大消费",
        "change_pct": -0.84
      },
      {
        "name": "盲盒",
        "change_pct": -1.08
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.39
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.49
      },
      {
        "name": "首发经济",
        "change_pct": 0.4
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.69
      },
      {
        "name": "服务消费",
        "change_pct": -1.37
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 16,
    "hot_rank_chg": 14,
    "stock_cnt": 5853,
    "price": "6.50",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "6714082700.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "拟布局PCB",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.15
      },
      {
        "name": "锂电池",
        "change_pct": -1.04
      },
      {
        "name": "强势人气股",
        "change_pct": -0.88
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -2.36
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.19
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.0
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 18,
    "hot_rank_chg": -2,
    "stock_cnt": 5853,
    "price": "6.60",
    "change": "6.11",
    "market_id": "33",
    "circulate_market_value": "8309588300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -1.62
      },
      {
        "name": "游戏",
        "change_pct": -2.15
      },
      {
        "name": "智能音箱",
        "change_pct": -1.83
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.66
      },
      {
        "name": "数字经济",
        "change_pct": -1.33
      },
      {
        "name": "百度概念股",
        "change_pct": -1.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.61
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.03
      },
      {
        "name": "传媒",
        "change_pct": -1.13
      },
      {
        "name": "全息概念",
        "change_pct": -1.34
      },
      {
        "name": "NFT",
        "change_pct": -1.45
      },
      {
        "name": "元宇宙",
        "change_pct": -1.95
      },
      {
        "name": "web3.0",
        "change_pct": -1.78
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.79
      },
      {
        "name": "数字人民币",
        "change_pct": -0.71
      },
      {
        "name": "智慧政务",
        "change_pct": -1.34
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.05
      },
      {
        "name": "盲盒",
        "change_pct": -1.08
      },
      {
        "name": "AI营销",
        "change_pct": -2.02
      },
      {
        "name": "华为产业链",
        "change_pct": -1.65
      },
      {
        "name": "供应链金融",
        "change_pct": -0.05
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.0
      },
      {
        "name": "区块链",
        "change_pct": -1.2
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 19,
    "hot_rank_chg": -5,
    "stock_cnt": 5853,
    "price": "5.24",
    "change": "-7.58",
    "market_id": "33",
    "circulate_market_value": "6794894700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.9
      },
      {
        "name": "创新药",
        "change_pct": -4.74
      },
      {
        "name": "央企改革",
        "change_pct": -0.14
      },
      {
        "name": "医疗器械",
        "change_pct": -2.67
      },
      {
        "name": "强势人气股",
        "change_pct": -0.88
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.07
      },
      {
        "name": "保健品",
        "change_pct": -1.88
      },
      {
        "name": "民营医院",
        "change_pct": -2.39
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -4.13
      },
      {
        "name": "医药",
        "change_pct": -3.81
      },
      {
        "name": "化学原料药",
        "change_pct": -4.07
      },
      {
        "name": "海南概念",
        "change_pct": -1.53
      },
      {
        "name": "脑科学",
        "change_pct": -2.92
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.69
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -1.37
      },
      {
        "name": "食品",
        "change_pct": -0.96
      },
      {
        "name": "国企改革",
        "change_pct": -0.24
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.03
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.34
      },
      {
        "name": "自贸区",
        "change_pct": -0.53
      },
      {
        "name": "合成生物",
        "change_pct": -3.26
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 21,
    "hot_rank_chg": -4,
    "stock_cnt": 5853,
    "price": "2.96",
    "change": "6.47",
    "market_id": "17",
    "circulate_market_value": "9674576800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.93
      },
      {
        "name": "强势人气股",
        "change_pct": -0.88
      },
      {
        "name": "养老产业",
        "change_pct": -1.63
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.19
      },
      {
        "name": "低价股",
        "change_pct": -0.65
      },
      {
        "name": "地摊经济",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 24,
    "hot_rank_chg": 143,
    "stock_cnt": 5853,
    "price": "7.05",
    "change": "6.01",
    "market_id": "33",
    "circulate_market_value": "4629284500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.8
      },
      {
        "name": "新零售",
        "change_pct": -0.95
      },
      {
        "name": "农业种植",
        "change_pct": -0.27
      },
      {
        "name": "冷链",
        "change_pct": -0.88
      },
      {
        "name": "大农业",
        "change_pct": -0.37
      },
      {
        "name": "预制菜",
        "change_pct": -0.36
      },
      {
        "name": "国企改革",
        "change_pct": -0.24
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.31
      },
      {
        "name": "免税店概念",
        "change_pct": -0.47
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.26
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 31,
    "hot_rank_chg": 53,
    "stock_cnt": 5853,
    "price": "5.81",
    "change": "2.11",
    "market_id": "17",
    "circulate_market_value": "72021278000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.14
      },
      {
        "name": "核电",
        "change_pct": -0.63
      },
      {
        "name": "强势人气股",
        "change_pct": -0.88
      },
      {
        "name": "电力体制改革",
        "change_pct": 2.63
      },
      {
        "name": "水电",
        "change_pct": 3.2
      },
      {
        "name": "火电",
        "change_pct": 2.79
      },
      {
        "name": "光伏",
        "change_pct": -0.74
      },
      {
        "name": "风电",
        "change_pct": -0.17
      },
      {
        "name": "国企改革",
        "change_pct": -0.24
      },
      {
        "name": "算电协同",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "002632",
    "name": "道明光学",
    "hot_rank": 36,
    "hot_rank_chg": -4,
    "stock_cnt": 5853,
    "price": "10.59",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6083168800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "努比亚AI手机",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.67
      },
      {
        "name": "手机产业链",
        "change_pct": -2.1
      },
      {
        "name": "锂电池",
        "change_pct": -1.04
      },
      {
        "name": "石墨烯",
        "change_pct": -0.87
      },
      {
        "name": "VR&AR",
        "change_pct": -1.89
      },
      {
        "name": "光伏",
        "change_pct": -0.74
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.0
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.27
      },
      {
        "name": "固态电池",
        "change_pct": -0.86
      },
      {
        "name": "华为产业链",
        "change_pct": -1.65
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 40,
    "hot_rank_chg": 24,
    "stock_cnt": 5853,
    "price": "5.81",
    "change": "-9.92",
    "market_id": "17",
    "circulate_market_value": "6343861600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": -3.81
      },
      {
        "name": "化学原料药",
        "change_pct": -4.07
      },
      {
        "name": "数字经济",
        "change_pct": -1.33
      },
      {
        "name": "辅助生殖",
        "change_pct": -3.41
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.34
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 43,
    "hot_rank_chg": 59,
    "stock_cnt": 5853,
    "price": "12.26",
    "change": "1.74",
    "market_id": "17",
    "circulate_market_value": "18070113000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.14
      },
      {
        "name": "强势人气股",
        "change_pct": -0.88
      },
      {
        "name": "电力体制改革",
        "change_pct": 2.63
      },
      {
        "name": "火电",
        "change_pct": 2.79
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.34
      },
      {
        "name": "风电",
        "change_pct": -0.17
      },
      {
        "name": "国企改革",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 45,
    "hot_rank_chg": 18,
    "stock_cnt": 5853,
    "price": "12.76",
    "change": "-3.55",
    "market_id": "33",
    "circulate_market_value": "44447949000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.8
      },
      {
        "name": "人工智能",
        "change_pct": -1.62
      },
      {
        "name": "VR&AR",
        "change_pct": -1.89
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.58
      },
      {
        "name": "大数据",
        "change_pct": -1.49
      },
      {
        "name": "教育",
        "change_pct": -1.12
      },
      {
        "name": "百度概念股",
        "change_pct": -1.49
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.73
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.61
      },
      {
        "name": "传媒",
        "change_pct": -1.13
      },
      {
        "name": "快手概念股",
        "change_pct": -1.8
      },
      {
        "name": "NFT",
        "change_pct": -1.45
      },
      {
        "name": "元宇宙",
        "change_pct": -1.95
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.7
      },
      {
        "name": "web3.0",
        "change_pct": -1.78
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.55
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.79
      },
      {
        "name": "职业教育",
        "change_pct": -1.27
      },
      {
        "name": "云游戏",
        "change_pct": -2.18
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.85
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.52
      },
      {
        "name": "AI营销",
        "change_pct": -2.02
      },
      {
        "name": "词元概念/Token",
        "change_pct": -2.67
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.98
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -2.5
      },
      {
        "name": "智谱AI",
        "change_pct": -1.42
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.69
      },
      {
        "name": "区块链",
        "change_pct": -1.2
      }
    ]
  },
  {
    "code": "603327",
    "name": "福蓉科技",
    "hot_rank": 46,
    "hot_rank_chg": -4,
    "stock_cnt": 5853,
    "price": "8.90",
    "change": "3.85",
    "market_id": "17",
    "circulate_market_value": "9304588300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.67
      },
      {
        "name": "手机产业链",
        "change_pct": -2.1
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.93
      },
      {
        "name": "特斯拉",
        "change_pct": -1.37
      },
      {
        "name": "小米概念股",
        "change_pct": -1.66
      },
      {
        "name": "AI手机",
        "change_pct": -2.43
      }
    ]
  },
  {
    "code": "002365",
    "name": "永安药业",
    "hot_rank": 47,
    "hot_rank_chg": -14,
    "stock_cnt": 5853,
    "price": "12.61",
    "change": "-4.33",
    "market_id": "33",
    "circulate_market_value": "3093087600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -0.65
      },
      {
        "name": "石墨烯",
        "change_pct": -0.87
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.34
      },
      {
        "name": "保健品",
        "change_pct": -1.88
      },
      {
        "name": "医药",
        "change_pct": -3.81
      },
      {
        "name": "化学原料药",
        "change_pct": -4.07
      },
      {
        "name": "食品",
        "change_pct": -0.96
      },
      {
        "name": "碳基材料",
        "change_pct": -1.35
      },
      {
        "name": "宠物经济",
        "change_pct": -1.81
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 48,
    "hot_rank_chg": 26,
    "stock_cnt": 5853,
    "price": "4.19",
    "change": "2.44",
    "market_id": "17",
    "circulate_market_value": "6550295600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -1.56
      },
      {
        "name": "共享经济",
        "change_pct": -0.26
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.76
      },
      {
        "name": "旅游",
        "change_pct": -1.38
      },
      {
        "name": "物业管理",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 62,
    "hot_rank_chg": 168,
    "stock_cnt": 5853,
    "price": "10.07",
    "change": "2.13",
    "market_id": "33",
    "circulate_market_value": "5884596800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 0.21
      },
      {
        "name": "一带一路",
        "change_pct": -0.35
      },
      {
        "name": "天然气",
        "change_pct": 0.78
      },
      {
        "name": "油气改革",
        "change_pct": 0.6
      },
      {
        "name": "页岩气",
        "change_pct": 0.17
      },
      {
        "name": "深地经济",
        "change_pct": -0.34
      }
    ]
  },
  {
    "code": "603567",
    "name": "珍宝岛",
    "hot_rank": 82,
    "hot_rank_chg": -6,
    "stock_cnt": 5853,
    "price": "6.03",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "5664601900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.9
      },
      {
        "name": "创新药",
        "change_pct": -4.74
      },
      {
        "name": "医药",
        "change_pct": -3.81
      },
      {
        "name": "破净股",
        "change_pct": 0.15
      },
      {
        "name": "流感",
        "change_pct": -3.18
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 84,
    "hot_rank_chg": 200,
    "stock_cnt": 5853,
    "price": "2.95",
    "change": "6.12",
    "market_id": "17",
    "circulate_market_value": "3768919400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.9
      },
      {
        "name": "甲醇",
        "change_pct": 1.47
      },
      {
        "name": "化肥",
        "change_pct": 0.53
      },
      {
        "name": "保健品",
        "change_pct": -1.88
      },
      {
        "name": "民营医院",
        "change_pct": -2.39
      },
      {
        "name": "医药",
        "change_pct": -3.81
      },
      {
        "name": "煤化工",
        "change_pct": 0.76
      },
      {
        "name": "食品",
        "change_pct": -0.96
      },
      {
        "name": "大农业",
        "change_pct": -0.37
      },
      {
        "name": "低价股",
        "change_pct": -0.65
      },
      {
        "name": "干细胞",
        "change_pct": -4.07
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -3.52
      }
    ]
  },
  {
    "code": "603669",
    "name": "灵康药业",
    "hot_rank": 86,
    "hot_rank_chg": 54,
    "stock_cnt": 5853,
    "price": "6.57",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "4680015800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "西藏概念",
        "change_pct": -2.88
      },
      {
        "name": "民营医院",
        "change_pct": -2.39
      },
      {
        "name": "医药",
        "change_pct": -3.81
      },
      {
        "name": "流感",
        "change_pct": -3.18
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": -3.69
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -3.47
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 89,
    "hot_rank_chg": 75,
    "stock_cnt": 5853,
    "price": "9.25",
    "change": "1.31",
    "market_id": "33",
    "circulate_market_value": "37366853000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -2.48
      },
      {
        "name": "一带一路",
        "change_pct": -0.58
      },
      {
        "name": "京津冀",
        "change_pct": -1.05
      },
      {
        "name": "光伏",
        "change_pct": -1.0
      },
      {
        "name": "碳中和",
        "change_pct": 0.05
      },
      {
        "name": "国产芯片",
        "change_pct": -2.79
      },
      {
        "name": "IGBT",
        "change_pct": -1.95
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.48
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.28
      },
      {
        "name": "大硅片",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 90,
    "hot_rank_chg": 44,
    "stock_cnt": 5853,
    "price": "12.92",
    "change": "0.31",
    "market_id": "17",
    "circulate_market_value": "16489224000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -1.75
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "智能制造",
        "change_pct": -1.77
      },
      {
        "name": "工业互联网",
        "change_pct": -1.68
      },
      {
        "name": "培育钻石",
        "change_pct": -1.18
      },
      {
        "name": "金刚线",
        "change_pct": -2.33
      },
      {
        "name": "国资入股",
        "change_pct": -1.4
      },
      {
        "name": "深地经济",
        "change_pct": -0.6
      }
    ]
  },
  {
    "code": "002677",
    "name": "浙江美大",
    "hot_rank": 94,
    "hot_rank_chg": 296,
    "stock_cnt": 5853,
    "price": "7.95",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4384503300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "控制权变更",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -1.9
      },
      {
        "name": "人工智能",
        "change_pct": -1.93
      },
      {
        "name": "复牌股",
        "change_pct": 1.26
      },
      {
        "name": "家电",
        "change_pct": -1.07
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "厨卫家电",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 96,
    "hot_rank_chg": 1160,
    "stock_cnt": 5853,
    "price": "5.96",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "12105500700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "火电",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.29
      },
      {
        "name": "电力体制改革",
        "change_pct": 2.7
      },
      {
        "name": "火电",
        "change_pct": 2.86
      },
      {
        "name": "风电",
        "change_pct": -0.41
      },
      {
        "name": "储能",
        "change_pct": -0.86
      },
      {
        "name": "碳中和",
        "change_pct": 0.05
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 97,
    "hot_rank_chg": -41,
    "stock_cnt": 5853,
    "price": "3.71",
    "change": "-4.13",
    "market_id": "33",
    "circulate_market_value": "2637203200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -1.93
      },
      {
        "name": "影视",
        "change_pct": -2.94
      },
      {
        "name": "旅游",
        "change_pct": -1.53
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.05
      },
      {
        "name": "AI营销",
        "change_pct": -2.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.72
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 100,
    "hot_rank_chg": 72,
    "stock_cnt": 5853,
    "price": "9.25",
    "change": "-6.75",
    "market_id": "17",
    "circulate_market_value": "16549529000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.44
      },
      {
        "name": "纯碱",
        "change_pct": 0.39
      },
      {
        "name": "食品",
        "change_pct": -1.06
      },
      {
        "name": "土壤修复",
        "change_pct": -1.22
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.35
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -2.3
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.45
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600664", "name": "哈药股份", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5853, "price": "5.20", "change": "5.26", "market_id": "17", "circulate_market_value": "13096251400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.8}, {"name": "工业大麻", "change_pct": -2.83}, {"name": "中药", "change_pct": -2.9}, {"name": "强势人气股", "change_pct": -0.88}, {"name": "保健品", "change_pct": -1.88}, {"name": "医药", "change_pct": -3.81}, {"name": "化学原料药", "change_pct": -4.07}, {"name": "流感", "change_pct": -3.18}, {"name": "振兴东北", "change_pct": -0.21}, {"name": "食品", "change_pct": -0.96}]}, {"code": "002185", "name": "华天科技", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5853, "price": "19.08", "change": "-8.27", "market_id": "33", "circulate_market_value": "63396196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 3, "hot_rank_chg": 4, "stock_cnt": 5853, "price": "249.99", "change": "-7.00", "market_id": "33", "circulate_market_value": "346566570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5853, "price": "536.54", "change": "-10.00", "market_id": "33", "circulate_market_value": "88565590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5853, "price": "37.12", "change": "-3.94", "market_id": "33", "circulate_market_value": "106022894000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 6, "hot_rank_chg": 13, "stock_cnt": 5853, "price": "1028.14", "change": "-7.62", "market_id": "33", "circulate_market_value": "1141240080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5853, "price": "82.00", "change": "-1.45", "market_id": "17", "circulate_market_value": "146731990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 8, "hot_rank_chg": 1, "stock_cnt": 5853, "price": "34.52", "change": "-9.99", "market_id": "17", "circulate_market_value": "11630476700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5853, "price": "6.11", "change": "0.99", "market_id": "33", "circulate_market_value": "216093190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.67}, {"name": "手机产业链", "change_pct": -2.1}, {"name": "超高清视频", "change_pct": -1.54}, {"name": "苹果产业链", "change_pct": -1.93}, {"name": "电竞", "change_pct": -1.86}, {"name": "半导体", "change_pct": -2.01}, {"name": "人工智能", "change_pct": -1.62}, {"name": "互联网医疗", "change_pct": -2.07}, {"name": "VR&AR", "change_pct": -1.89}, {"name": "OLED", "change_pct": -1.31}, {"name": "京津冀", "change_pct": -0.83}, {"name": "物联网", "change_pct": -1.1}, {"name": "指纹识别", "change_pct": -2.07}, {"name": "汽车零部件", "change_pct": -1.15}, {"name": "白马股", "change_pct": -0.65}, {"name": "智能制造", "change_pct": -1.43}, {"name": "小米概念股", "change_pct": -1.66}, {"name": "国产芯片", "change_pct": -2.33}, {"name": "液晶面板/LCD", "change_pct": -1.27}, {"name": "全息概念", "change_pct": -1.34}, {"name": "理想汽车概念股", "change_pct": -1.43}, {"name": "MicroLED", "change_pct": -1.55}, {"name": "钙钛矿电池", "change_pct": -0.8}, {"name": "智能手表", "change_pct": -1.77}, {"name": "MiniLED", "change_pct": -1.76}, {"name": "传感器", "change_pct": -1.74}, {"name": "大硅片", "change_pct": 0.57}, {"name": "AI PC", "change_pct": -1.71}, {"name": "华为产业链", "change_pct": -1.65}, {"name": "回购", "change_pct": -1.34}, {"name": "智能眼镜/MR头显", "change_pct": -2.16}, {"name": "玻璃基板封装", "change_pct": -2.11}]}, {"code": "002432", "name": "九安医疗", "hot_rank": 10, "hot_rank_chg": 26, "stock_cnt": 5853, "price": "79.20", "change": "10.00", "market_id": "33", "circulate_market_value": "36849568000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "参股DeepSeek"}, {"code": "603127", "name": "昭衍新药", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5853, "price": "47.93", "change": "-9.99", "market_id": "17", "circulate_market_value": "30212820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 12, "hot_rank_chg": -6, "stock_cnt": 5853, "price": "485.82", "change": "-5.59", "market_id": "17", "circulate_market_value": "324786810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 13, "hot_rank_chg": 2, "stock_cnt": 5853, "price": "10.35", "change": "0.29", "market_id": "33", "circulate_market_value": "21590359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -2.63}, {"name": "足球", "change_pct": -0.6}, {"name": "阿里巴巴概念股", "change_pct": -1.73}, {"name": "拼多多概念股", "change_pct": -1.03}, {"name": "网红/MCN", "change_pct": -1.85}, {"name": "大消费", "change_pct": -0.84}, {"name": "盲盒", "change_pct": -1.08}, {"name": "短剧/互动影游", "change_pct": -2.39}, {"name": "IP经济/谷子经济", "change_pct": -1.49}, {"name": "首发经济", "change_pct": 0.4}, {"name": "小红书概念股", "change_pct": -1.69}, {"name": "服务消费", "change_pct": -1.37}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 14, "hot_rank_chg": 4, "stock_cnt": 5853, "price": "38.20", "change": "-9.97", "market_id": "33", "circulate_market_value": "29880033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 15, "hot_rank_chg": 5, "stock_cnt": 5853, "price": "36.78", "change": "-8.03", "market_id": "33", "circulate_market_value": "148176190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 16, "hot_rank_chg": 14, "stock_cnt": 5853, "price": "6.50", "change": "9.98", "market_id": "33", "circulate_market_value": "6714082700.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "拟布局PCB", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.15}, {"name": "锂电池", "change_pct": -1.04}, {"name": "强势人气股", "change_pct": -0.88}, {"name": "铜箔/覆铜板", "change_pct": -2.36}, {"name": "粤港澳大湾区", "change_pct": 0.19}, {"name": "新能源汽车", "change_pct": -1.0}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.04}]}, {"code": "002156", "name": "通富微电", "hot_rank": 17, "hot_rank_chg": 4, "stock_cnt": 5853, "price": "72.78", "change": "-4.17", "market_id": "33", "circulate_market_value": "110440173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 18, "hot_rank_chg": -2, "stock_cnt": 5853, "price": "6.60", "change": "6.11", "market_id": "33", "circulate_market_value": "8309588300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -1.62}, {"name": "游戏", "change_pct": -2.15}, {"name": "智能音箱", "change_pct": -1.83}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.66}, {"name": "数字经济", "change_pct": -1.33}, {"name": "百度概念股", "change_pct": -1.49}, {"name": "腾讯概念股", "change_pct": -1.61}, {"name": "拼多多概念股", "change_pct": -1.03}, {"name": "传媒", "change_pct": -1.13}, {"name": "全息概念", "change_pct": -1.34}, {"name": "NFT", "change_pct": -1.45}, {"name": "元宇宙", "change_pct": -1.95}, {"name": "web3.0", "change_pct": -1.78}, {"name": "字节跳动概念股", "change_pct": -1.79}, {"name": "数字人民币", "change_pct": -0.71}, {"name": "智慧政务", "change_pct": -1.34}, {"name": "华为鸿蒙", "change_pct": -1.05}, {"name": "盲盒", "change_pct": -1.08}, {"name": "AI营销", "change_pct": -2.02}, {"name": "华为产业链", "change_pct": -1.65}, {"name": "供应链金融", "change_pct": -0.05}, {"name": "ChatGPT", "change_pct": -2.0}, {"name": "区块链", "change_pct": -1.2}]}, {"code": "000566", "name": "海南海药", "hot_rank": 19, "hot_rank_chg": -5, "stock_cnt": 5853, "price": "5.24", "change": "-7.58", "market_id": "33", "circulate_market_value": "6794894700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.9}, {"name": "创新药", "change_pct": -4.74}, {"name": "央企改革", "change_pct": -0.14}, {"name": "医疗器械", "change_pct": -2.67}, {"name": "强势人气股", "change_pct": -0.88}, {"name": "互联网医疗", "change_pct": -2.07}, {"name": "保健品", "change_pct": -1.88}, {"name": "民营医院", "change_pct": -2.39}, {"name": "CAR-T疗法", "change_pct": -4.13}, {"name": "医药", "change_pct": -3.81}, {"name": "化学原料药", "change_pct": -4.07}, {"name": "海南概念", "change_pct": -1.53}, {"name": "脑科学", "change_pct": -2.92}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.69}, {"name": "海南自由贸易港", "change_pct": -1.37}, {"name": "食品", "change_pct": -0.96}, {"name": "国企改革", "change_pct": -0.24}, {"name": "医疗信息化", "change_pct": -2.03}, {"name": "新冠病毒防治", "change_pct": -2.34}, {"name": "自贸区", "change_pct": -0.53}, {"name": "合成生物", "change_pct": -3.26}]}, {"code": "300502", "name": "新易盛", "hot_rank": 20, "hot_rank_chg": 41, "stock_cnt": 5853, "price": "504.50", "change": "-7.02", "market_id": "33", "circulate_market_value": "632765670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 21, "hot_rank_chg": -4, "stock_cnt": 5853, "price": "2.96", "change": "6.47", "market_id": "17", "circulate_market_value": "9674576800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -0.93}, {"name": "强势人气股", "change_pct": -0.88}, {"name": "养老产业", "change_pct": -1.63}, {"name": "粤港澳大湾区", "change_pct": 0.19}, {"name": "低价股", "change_pct": -0.65}, {"name": "地摊经济", "change_pct": -0.82}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 22, "hot_rank_chg": -9, "stock_cnt": 5853, "price": "62.38", "change": "-3.81", "market_id": "17", "circulate_market_value": "153181140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5853, "price": "82.45", "change": "-3.00", "market_id": "33", "circulate_market_value": "120940282000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 24, "hot_rank_chg": 143, "stock_cnt": 5853, "price": "7.05", "change": "6.01", "market_id": "33", "circulate_market_value": "4629284500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.8}, {"name": "新零售", "change_pct": -0.95}, {"name": "农业种植", "change_pct": -0.27}, {"name": "冷链", "change_pct": -0.88}, {"name": "大农业", "change_pct": -0.37}, {"name": "预制菜", "change_pct": -0.36}, {"name": "国企改革", "change_pct": -0.24}, {"name": "可降解塑料", "change_pct": -0.31}, {"name": "免税店概念", "change_pct": -0.47}, {"name": "湖北国企改革", "change_pct": -0.26}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 25, "hot_rank_chg": 13, "stock_cnt": 5853, "price": "30.58", "change": "7.26", "market_id": "33", "circulate_market_value": "23161754000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5853, "price": "17.99", "change": "-3.95", "market_id": "17", "circulate_market_value": "37626844000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 27, "hot_rank_chg": 19, "stock_cnt": 5853, "price": "75.45", "change": "8.31", "market_id": "17", "circulate_market_value": "31414943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 28, "hot_rank_chg": 29, "stock_cnt": 5853, "price": "129.36", "change": "-5.38", "market_id": "33", "circulate_market_value": "248734760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 29, "hot_rank_chg": -28, "stock_cnt": 5853, "price": "195.33", "change": "-7.48", "market_id": "17", "circulate_market_value": "223606850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 30, "hot_rank_chg": -3, "stock_cnt": 5853, "price": "65.01", "change": "-2.48", "market_id": "33", "circulate_market_value": "2125725800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 31, "hot_rank_chg": 53, "stock_cnt": 5853, "price": "5.81", "change": "2.11", "market_id": "17", "circulate_market_value": "72021278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.14}, {"name": "核电", "change_pct": -0.63}, {"name": "强势人气股", "change_pct": -0.88}, {"name": "电力体制改革", "change_pct": 2.63}, {"name": "水电", "change_pct": 3.2}, {"name": "火电", "change_pct": 2.79}, {"name": "光伏", "change_pct": -0.74}, {"name": "风电", "change_pct": -0.17}, {"name": "国企改革", "change_pct": -0.24}, {"name": "算电协同", "change_pct": 0.17}]}, {"code": "600602", "name": "云赛智联", "hot_rank": 32, "hot_rank_chg": -8, "stock_cnt": 5853, "price": "18.33", "change": "0.38", "market_id": "17", "circulate_market_value": "19691974000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600436", "name": "片仔癀", "hot_rank": 33, "hot_rank_chg": -21, "stock_cnt": 5853, "price": "145.50", "change": "3.08", "market_id": "17", "circulate_market_value": "87782654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 34, "hot_rank_chg": 48, "stock_cnt": 5853, "price": "191.51", "change": "-9.02", "market_id": "33", "circulate_market_value": "149473240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 35, "hot_rank_chg": -7, "stock_cnt": 5853, "price": "35.99", "change": "-3.74", "market_id": "17", "circulate_market_value": "122797928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002632", "name": "道明光学", "hot_rank": 36, "hot_rank_chg": -4, "stock_cnt": 5853, "price": "10.59", "change": "9.97", "market_id": "33", "circulate_market_value": "6083168800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "努比亚AI手机", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.67}, {"name": "手机产业链", "change_pct": -2.1}, {"name": "锂电池", "change_pct": -1.04}, {"name": "石墨烯", "change_pct": -0.87}, {"name": "VR&AR", "change_pct": -1.89}, {"name": "光伏", "change_pct": -0.74}, {"name": "新能源汽车", "change_pct": -1.0}, {"name": "液晶面板/LCD", "change_pct": -1.27}, {"name": "固态电池", "change_pct": -0.86}, {"name": "华为产业链", "change_pct": -1.65}]}, {"code": "603629", "name": "利通电子", "hot_rank": 37, "hot_rank_chg": -2, "stock_cnt": 5853, "price": "97.94", "change": "-2.91", "market_id": "17", "circulate_market_value": "35329250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 38, "hot_rank_chg": 39, "stock_cnt": 5853, "price": "372.30", "change": "-7.33", "market_id": "17", "circulate_market_value": "151279750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 39, "hot_rank_chg": 5, "stock_cnt": 5853, "price": "42.10", "change": "-2.81", "market_id": "33", "circulate_market_value": "66303433000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 40, "hot_rank_chg": 24, "stock_cnt": 5853, "price": "5.81", "change": "-9.92", "market_id": "17", "circulate_market_value": "6343861600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": -3.81}, {"name": "化学原料药", "change_pct": -4.07}, {"name": "数字经济", "change_pct": -1.33}, {"name": "辅助生殖", "change_pct": -3.41}, {"name": "新冠病毒防治", "change_pct": -2.34}]}, {"code": "002317", "name": "众生药业", "hot_rank": 41, "hot_rank_chg": 10, "stock_cnt": 5853, "price": "29.28", "change": "-2.27", "market_id": "33", "circulate_market_value": "22300158000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 42, "hot_rank_chg": -19, "stock_cnt": 5853, "price": "44.92", "change": "9.99", "market_id": "17", "circulate_market_value": "5869840100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "控制权拟变更"}, {"code": "600396", "name": "华电辽能", "hot_rank": 43, "hot_rank_chg": 59, "stock_cnt": 5853, "price": "12.26", "change": "1.74", "market_id": "17", "circulate_market_value": "18070113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.14}, {"name": "强势人气股", "change_pct": -0.88}, {"name": "电力体制改革", "change_pct": 2.63}, {"name": "火电", "change_pct": 2.79}, {"name": "氢能源/燃料电池", "change_pct": -0.34}, {"name": "风电", "change_pct": -0.17}, {"name": "国企改革", "change_pct": -0.24}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 44, "hot_rank_chg": -7, "stock_cnt": 5853, "price": "17.77", "change": "1.89", "market_id": "33", "circulate_market_value": "7478771600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 45, "hot_rank_chg": 18, "stock_cnt": 5853, "price": "12.76", "change": "-3.55", "market_id": "33", "circulate_market_value": "44447949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.8}, {"name": "人工智能", "change_pct": -1.62}, {"name": "VR&AR", "change_pct": -1.89}, {"name": "直播/短视频", "change_pct": -1.58}, {"name": "大数据", "change_pct": -1.49}, {"name": "教育", "change_pct": -1.12}, {"name": "百度概念股", "change_pct": -1.49}, {"name": "阿里巴巴概念股", "change_pct": -1.73}, {"name": "腾讯概念股", "change_pct": -1.61}, {"name": "传媒", "change_pct": -1.13}, {"name": "快手概念股", "change_pct": -1.8}, {"name": "NFT", "change_pct": -1.45}, {"name": "元宇宙", "change_pct": -1.95}, {"name": "虚拟数字人", "change_pct": -1.7}, {"name": "web3.0", "change_pct": -1.78}, {"name": "AIGC概念", "change_pct": -1.55}, {"name": "字节跳动概念股", "change_pct": -1.79}, {"name": "职业教育", "change_pct": -1.27}, {"name": "云游戏", "change_pct": -2.18}, {"name": "网红/MCN", "change_pct": -1.85}, {"name": "5G消息/RCS", "change_pct": -1.52}, {"name": "AI营销", "change_pct": -2.02}, {"name": "词元概念/Token", "change_pct": -2.67}, {"name": "人工智能大模型", "change_pct": -1.98}, {"name": "Sora/AI视频", "change_pct": -2.5}, {"name": "智谱AI", "change_pct": -1.42}, {"name": "小红书概念股", "change_pct": -1.69}, {"name": "区块链", "change_pct": -1.2}]}, {"code": "603327", "name": "福蓉科技", "hot_rank": 46, "hot_rank_chg": -4, "stock_cnt": 5853, "price": "8.90", "change": "3.85", "market_id": "17", "circulate_market_value": "9304588300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.67}, {"name": "手机产业链", "change_pct": -2.1}, {"name": "苹果产业链", "change_pct": -1.93}, {"name": "特斯拉", "change_pct": -1.37}, {"name": "小米概念股", "change_pct": -1.66}, {"name": "AI手机", "change_pct": -2.43}]}, {"code": "002365", "name": "永安药业", "hot_rank": 47, "hot_rank_chg": -14, "stock_cnt": 5853, "price": "12.61", "change": "-4.33", "market_id": "33", "circulate_market_value": "3093087600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": -0.65}, {"name": "石墨烯", "change_pct": -0.87}, {"name": "氢能源/燃料电池", "change_pct": -0.34}, {"name": "保健品", "change_pct": -1.88}, {"name": "医药", "change_pct": -3.81}, {"name": "化学原料药", "change_pct": -4.07}, {"name": "食品", "change_pct": -0.96}, {"name": "碳基材料", "change_pct": -1.35}, {"name": "宠物经济", "change_pct": -1.81}]}, {"code": "600611", "name": "大众交通", "hot_rank": 48, "hot_rank_chg": 26, "stock_cnt": 5853, "price": "4.19", "change": "2.44", "market_id": "17", "circulate_market_value": "6550295600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -1.56}, {"name": "共享经济", "change_pct": -0.26}, {"name": "云计算数据中心", "change_pct": -1.76}, {"name": "旅游", "change_pct": -1.38}, {"name": "物业管理", "change_pct": -0.62}]}, {"code": "001896", "name": "豫能控股", "hot_rank": 50, "hot_rank_chg": 42, "stock_cnt": 5853, "price": "14.39", "change": "6.59", "market_id": "33", "circulate_market_value": "21955993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 51, "hot_rank_chg": 1, "stock_cnt": 5853, "price": "29.34", "change": "-3.10", "market_id": "33", "circulate_market_value": "55762488000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 52, "hot_rank_chg": -23, "stock_cnt": 5853, "price": "48.33", "change": "-2.05", "market_id": "33", "circulate_market_value": "71321741000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 53, "hot_rank_chg": 20, "stock_cnt": 5853, "price": "136.84", "change": "-6.91", "market_id": "17", "circulate_market_value": "327663590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 54, "hot_rank_chg": -15, "stock_cnt": 5853, "price": "28.85", "change": "-9.98", "market_id": "17", "circulate_market_value": "5277626700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 55, "hot_rank_chg": -15, "stock_cnt": 5853, "price": "93.48", "change": "-0.70", "market_id": "33", "circulate_market_value": "325928630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 56, "hot_rank_chg": 12, "stock_cnt": 5853, "price": "60.73", "change": "-3.63", "market_id": "17", "circulate_market_value": "1205131720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 57, "hot_rank_chg": -32, "stock_cnt": 5853, "price": "28.57", "change": "-4.61", "market_id": "33", "circulate_market_value": "32744234000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 58, "hot_rank_chg": 12, "stock_cnt": 5853, "price": "48.60", "change": "-6.00", "market_id": "33", "circulate_market_value": "56230837000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 59, "hot_rank_chg": -28, "stock_cnt": 5853, "price": "120.93", "change": "-7.46", "market_id": "33", "circulate_market_value": "121542965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 60, "hot_rank_chg": -6, "stock_cnt": 5853, "price": "214.15", "change": "-3.64", "market_id": "17", "circulate_market_value": "90503427000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 61, "hot_rank_chg": 68, "stock_cnt": 5853, "price": "223.71", "change": "-8.33", "market_id": "33", "circulate_market_value": "243581250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 62, "hot_rank_chg": 168, "stock_cnt": 5853, "price": "10.07", "change": "2.13", "market_id": "33", "circulate_market_value": "5884596800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 0.21}, {"name": "一带一路", "change_pct": -0.35}, {"name": "天然气", "change_pct": 0.78}, {"name": "油气改革", "change_pct": 0.6}, {"name": "页岩气", "change_pct": 0.17}, {"name": "深地经济", "change_pct": -0.34}]}, {"code": "603259", "name": "药明康德", "hot_rank": 64, "hot_rank_chg": -15, "stock_cnt": 5853, "price": "121.31", "change": "-4.48", "market_id": "17", "circulate_market_value": "299811030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 65, "hot_rank_chg": 10, "stock_cnt": 5853, "price": "43.92", "change": "0.30", "market_id": "17", "circulate_market_value": "37180622000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 66, "hot_rank_chg": 50, "stock_cnt": 5853, "price": "13.89", "change": "-8.74", "market_id": "33", "circulate_market_value": "11154673800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 67, "hot_rank_chg": -33, "stock_cnt": 5853, "price": "94.60", "change": "-3.13", "market_id": "17", "circulate_market_value": "138419570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 68, "hot_rank_chg": -20, "stock_cnt": 5853, "price": "32.31", "change": "1.22", "market_id": "33", "circulate_market_value": "34854973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002851", "name": "麦格米特", "hot_rank": 69, "hot_rank_chg": 85, "stock_cnt": 5853, "price": "136.59", "change": "-10.00", "market_id": "33", "circulate_market_value": "62995476000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 70, "hot_rank_chg": -17, "stock_cnt": 5853, "price": "46.19", "change": "-3.19", "market_id": "17", "circulate_market_value": "183447600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 71, "hot_rank_chg": 59, "stock_cnt": 5853, "price": "15.59", "change": "-4.65", "market_id": "33", "circulate_market_value": "50254690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 72, "hot_rank_chg": 56, "stock_cnt": 5853, "price": "27.99", "change": "1.97", "market_id": "17", "circulate_market_value": "684865410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 73, "hot_rank_chg": -18, "stock_cnt": 5853, "price": "65.56", "change": "-5.21", "market_id": "17", "circulate_market_value": "77523988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 74, "hot_rank_chg": -29, "stock_cnt": 5853, "price": "40.48", "change": "-1.03", "market_id": "33", "circulate_market_value": "132761805000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 75, "hot_rank_chg": 86, "stock_cnt": 5853, "price": "83.22", "change": "-7.07", "market_id": "33", "circulate_market_value": "60277529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 76, "hot_rank_chg": -18, "stock_cnt": 5853, "price": "161.99", "change": "-10.00", "market_id": "33", "circulate_market_value": "51357935000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000920", "name": "沃顿科技", "hot_rank": 77, "hot_rank_chg": -27, "stock_cnt": 5853, "price": "14.98", "change": "5.87", "market_id": "33", "circulate_market_value": "7079527300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 78, "hot_rank_chg": 54, "stock_cnt": 5853, "price": "42.60", "change": "-4.33", "market_id": "17", "circulate_market_value": "62280979000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 79, "hot_rank_chg": 10, "stock_cnt": 5853, "price": "278.69", "change": "-7.18", "market_id": "17", "circulate_market_value": "131472784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 81, "hot_rank_chg": -2, "stock_cnt": 5853, "price": "28.24", "change": "-3.45", "market_id": "17", "circulate_market_value": "581794640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603567", "name": "珍宝岛", "hot_rank": 82, "hot_rank_chg": -6, "stock_cnt": 5853, "price": "6.03", "change": "10.04", "market_id": "17", "circulate_market_value": "5664601900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": -2.9}, {"name": "创新药", "change_pct": -4.74}, {"name": "医药", "change_pct": -3.81}, {"name": "破净股", "change_pct": 0.15}, {"name": "流感", "change_pct": -3.18}]}, {"code": "002241", "name": "歌尔股份", "hot_rank": 83, "hot_rank_chg": -16, "stock_cnt": 5853, "price": "22.41", "change": "-2.65", "market_id": "33", "circulate_market_value": "70495369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 84, "hot_rank_chg": 200, "stock_cnt": 5853, "price": "2.95", "change": "6.12", "market_id": "17", "circulate_market_value": "3768919400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.9}, {"name": "甲醇", "change_pct": 1.47}, {"name": "化肥", "change_pct": 0.53}, {"name": "保健品", "change_pct": -1.88}, {"name": "民营医院", "change_pct": -2.39}, {"name": "医药", "change_pct": -3.81}, {"name": "煤化工", "change_pct": 0.76}, {"name": "食品", "change_pct": -0.96}, {"name": "大农业", "change_pct": -0.37}, {"name": "低价股", "change_pct": -0.65}, {"name": "干细胞", "change_pct": -4.07}, {"name": "阿尔茨海默病", "change_pct": -3.52}]}, {"code": "301308", "name": "江波龙", "hot_rank": 85, "hot_rank_chg": 1, "stock_cnt": 5853, "price": "431.20", "change": "-6.99", "market_id": "33", "circulate_market_value": "121534536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603669", "name": "灵康药业", "hot_rank": 86, "hot_rank_chg": 54, "stock_cnt": 5853, "price": "6.57", "change": "-10.00", "market_id": "17", "circulate_market_value": "4680015800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "西藏概念", "change_pct": -2.88}, {"name": "民营医院", "change_pct": -2.39}, {"name": "医药", "change_pct": -3.81}, {"name": "流感", "change_pct": -3.18}, {"name": "幽门螺杆菌概念", "change_pct": -3.69}, {"name": "阿尔茨海默病", "change_pct": -3.47}]}, {"code": "300759", "name": "康龙化成", "hot_rank": 87, "hot_rank_chg": 8, "stock_cnt": 5853, "price": "35.99", "change": "-6.76", "market_id": "33", "circulate_market_value": "51035948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 88, "hot_rank_chg": 27, "stock_cnt": 5853, "price": "17.16", "change": "-10.02", "market_id": "17", "circulate_market_value": "7189483500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 89, "hot_rank_chg": 75, "stock_cnt": 5853, "price": "9.25", "change": "1.31", "market_id": "33", "circulate_market_value": "37366853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -2.48}, {"name": "一带一路", "change_pct": -0.58}, {"name": "京津冀", "change_pct": -1.05}, {"name": "光伏", "change_pct": -1.0}, {"name": "碳中和", "change_pct": 0.05}, {"name": "国产芯片", "change_pct": -2.79}, {"name": "IGBT", "change_pct": -1.95}, {"name": "颗粒硅", "change_pct": -0.48}, {"name": "异质结电池HJT", "change_pct": -1.28}, {"name": "大硅片", "change_pct": 0.19}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 90, "hot_rank_chg": 44, "stock_cnt": 5853, "price": "12.92", "change": "0.31", "market_id": "17", "circulate_market_value": "16489224000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -1.75}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "智能制造", "change_pct": -1.77}, {"name": "工业互联网", "change_pct": -1.68}, {"name": "培育钻石", "change_pct": -1.18}, {"name": "金刚线", "change_pct": -2.33}, {"name": "国资入股", "change_pct": -1.4}, {"name": "深地经济", "change_pct": -0.6}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 91, "hot_rank_chg": 29, "stock_cnt": 5853, "price": "13.22", "change": "1.93", "market_id": "33", "circulate_market_value": "14044978000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 92, "hot_rank_chg": 45, "stock_cnt": 5853, "price": "14.95", "change": "10.01", "market_id": "17", "circulate_market_value": "11769782300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "300418", "name": "昆仑万维", "hot_rank": 93, "hot_rank_chg": -2, "stock_cnt": 5853, "price": "45.00", "change": "-6.72", "market_id": "33", "circulate_market_value": "52889578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002677", "name": "浙江美大", "hot_rank": 94, "hot_rank_chg": 296, "stock_cnt": 5853, "price": "7.95", "change": "9.96", "market_id": "33", "circulate_market_value": "4384503300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控制权变更", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -1.9}, {"name": "人工智能", "change_pct": -1.93}, {"name": "复牌股", "change_pct": 1.26}, {"name": "家电", "change_pct": -1.07}, {"name": "独角兽", "change_pct": 0.85}, {"name": "厨卫家电", "change_pct": 0.18}]}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 95, "hot_rank_chg": 80, "stock_cnt": 5853, "price": "17.50", "change": "-3.85", "market_id": "17", "circulate_market_value": "305564740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 96, "hot_rank_chg": 1160, "stock_cnt": 5853, "price": "5.96", "change": "9.96", "market_id": "17", "circulate_market_value": "12105500700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "火电", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.29}, {"name": "电力体制改革", "change_pct": 2.7}, {"name": "火电", "change_pct": 2.86}, {"name": "风电", "change_pct": -0.41}, {"name": "储能", "change_pct": -0.86}, {"name": "碳中和", "change_pct": 0.05}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 97, "hot_rank_chg": -41, "stock_cnt": 5853, "price": "3.71", "change": "-4.13", "market_id": "33", "circulate_market_value": "2637203200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -1.93}, {"name": "影视", "change_pct": -2.94}, {"name": "旅游", "change_pct": -1.53}, {"name": "虚拟数字人", "change_pct": -2.05}, {"name": "AI营销", "change_pct": -2.4}, {"name": "短剧/互动影游", "change_pct": -2.72}, {"name": "IP经济/谷子经济", "change_pct": -1.73}]}, {"code": "300085", "name": "银之杰", "hot_rank": 98, "hot_rank_chg": 116, "stock_cnt": 5853, "price": "31.83", "change": "1.08", "market_id": "33", "circulate_market_value": "20727489000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 100, "hot_rank_chg": 72, "stock_cnt": 5853, "price": "9.25", "change": "-6.75", "market_id": "17", "circulate_market_value": "16549529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.44}, {"name": "纯碱", "change_pct": 0.39}, {"name": "食品", "change_pct": -1.06}, {"name": "土壤修复", "change_pct": -1.22}, {"name": "东数西算/算力", "change_pct": -2.35}, {"name": "OpenClaw概念", "change_pct": -2.3}, {"name": "DeepSeek概念股", "change_pct": -2.45}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600745": "ST/风险警示股", "600759": "ST/风险警示股", "002759": "ST/风险警示股"};