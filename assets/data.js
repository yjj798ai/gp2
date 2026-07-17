const UPDATE_TIME = "2026-07-17 18:01";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": -9.19,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续250天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -6.89,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -8.84,
    "rate": 0,
    "tag": "",
    "hotTag": "连续203天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "人工智能",
    "rise": -4.86,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "人工智能ETF",
    "code": "885728"
  },
  {
    "name": "商业航天",
    "rise": -5.84,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续179天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": -7.58,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "AI应用",
    "rise": -4.52,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "猪肉",
    "rise": -2.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "人形机器人",
    "rise": -6.61,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续414天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "芯片概念",
    "rise": -7.18,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "算力租赁",
    "rise": -5.73,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续114天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "白酒概念",
    "rise": -3.11,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "先进封装",
    "rise": -8.08,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886009"
  },
  {
    "name": "机器人概念",
    "rise": -5.47,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "ST板块",
    "rise": -3.72,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续88天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光纤概念",
    "rise": -8.02,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "平安新兴产业LOF",
    "code": "886084"
  },
  {
    "name": "固态电池",
    "rise": -5.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "CRO概念",
    "rise": -8.83,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "黄金概念",
    "rise": -4.19,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "高股息精选",
    "rise": -1.09,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 2,
    "etfName": "红利ETF",
    "code": "886072"
  }
];
const THS_EVENTS = [
  {
    "title": "美国FERC批准PJM快速并网机制，推动大型发电项目加速落地",
    "desc": "",
    "heat": 498855,
    "direction": "电力",
    "themes": [
      "电力",
      "绿色电力"
    ],
    "stocks": [
      {
        "name": "珈伟新能",
        "code": "300317",
        "chg": 16.011236
      }
    ]
  },
  {
    "title": "创新药赛道景气上行 22家公司业绩获机构看好",
    "desc": "",
    "heat": 136431,
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
        "name": "赤天化",
        "code": "600227",
        "chg": 10.071942
      }
    ]
  },
  {
    "title": "超3500亿元！DeepSeek估值曝光",
    "desc": "",
    "heat": 76906,
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
    "title": "华为靳玉志：L3与L4规模商用预计2027年、2028年实现",
    "desc": "",
    "heat": 60858,
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
    "heat": 34166,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "格林精密",
        "code": "300968",
        "chg": 8.984375
      }
    ]
  },
  {
    "title": "国家发展改革委、自然资源部、水利部联合印发《海水淡化产业发展行动方案》",
    "desc": "",
    "heat": 18695,
    "direction": "海水淡化",
    "themes": [
      "工程总包（EPC）与项目运营",
      "核心装备与关键材料"
    ],
    "stocks": [
      {
        "name": "三友化工",
        "code": "600409",
        "chg": -0.177936
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "水电",
    "change": "+3.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+1.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电力体制改革",
    "change": "+1.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+0.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+0.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+0.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "-0.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "-0.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超超临界发电",
    "change": "-0.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "-0.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化肥",
    "change": "-0.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "-0.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "-0.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "-0.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "-0.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纯碱",
    "change": "-0.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "-0.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "-0.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "-0.81%",
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
    "hot_rank": 3,
    "hot_rank_chg": 0,
    "stock_cnt": 5752,
    "price": "5.33",
    "change": "7.89",
    "market_id": "17",
    "circulate_market_value": "13423658000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.57
      },
      {
        "name": "工业大麻",
        "change_pct": -6.28
      },
      {
        "name": "中药",
        "change_pct": -5.18
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "保健品",
        "change_pct": -4.04
      },
      {
        "name": "医药",
        "change_pct": -6.38
      },
      {
        "name": "化学原料药",
        "change_pct": -6.86
      },
      {
        "name": "流感",
        "change_pct": -5.93
      },
      {
        "name": "振兴东北",
        "change_pct": -2.41
      },
      {
        "name": "食品",
        "change_pct": -3.39
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 9,
    "hot_rank_chg": -1,
    "stock_cnt": 5752,
    "price": "6.07",
    "change": "0.33",
    "market_id": "33",
    "circulate_market_value": "214678500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -7.42
      },
      {
        "name": "手机产业链",
        "change_pct": -7.9
      },
      {
        "name": "超高清视频",
        "change_pct": -5.66
      },
      {
        "name": "苹果产业链",
        "change_pct": -7.67
      },
      {
        "name": "电竞",
        "change_pct": -4.14
      },
      {
        "name": "半导体",
        "change_pct": -9.39
      },
      {
        "name": "人工智能",
        "change_pct": -5.4
      },
      {
        "name": "互联网医疗",
        "change_pct": -4.79
      },
      {
        "name": "VR&AR",
        "change_pct": -6.69
      },
      {
        "name": "OLED",
        "change_pct": -6.91
      },
      {
        "name": "京津冀",
        "change_pct": -3.44
      },
      {
        "name": "物联网",
        "change_pct": -5.15
      },
      {
        "name": "指纹识别",
        "change_pct": -6.96
      },
      {
        "name": "汽车零部件",
        "change_pct": -5.2
      },
      {
        "name": "白马股",
        "change_pct": -1.56
      },
      {
        "name": "智能制造",
        "change_pct": -5.77
      },
      {
        "name": "小米概念股",
        "change_pct": -7.12
      },
      {
        "name": "国产芯片",
        "change_pct": -8.85
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.77
      },
      {
        "name": "全息概念",
        "change_pct": -5.16
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -5.38
      },
      {
        "name": "MicroLED",
        "change_pct": -7.39
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -5.33
      },
      {
        "name": "智能手表",
        "change_pct": -6.7
      },
      {
        "name": "MiniLED",
        "change_pct": -7.28
      },
      {
        "name": "传感器",
        "change_pct": -7.1
      },
      {
        "name": "大硅片",
        "change_pct": -6.04
      },
      {
        "name": "AI PC",
        "change_pct": -7.02
      },
      {
        "name": "华为产业链",
        "change_pct": -6.04
      },
      {
        "name": "回购",
        "change_pct": -4.09
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -7.65
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -7.74
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 13,
    "hot_rank_chg": 0,
    "stock_cnt": 5752,
    "price": "3.06",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "10001420700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "算力",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -3.5
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "养老产业",
        "change_pct": -4.0
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.46
      },
      {
        "name": "地摊经济",
        "change_pct": -3.25
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 14,
    "hot_rank_chg": 3,
    "stock_cnt": 5752,
    "price": "6.84",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "8611755200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -5.4
      },
      {
        "name": "游戏",
        "change_pct": -5.49
      },
      {
        "name": "智能音箱",
        "change_pct": -6.08
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -7.12
      },
      {
        "name": "数字经济",
        "change_pct": -4.53
      },
      {
        "name": "百度概念股",
        "change_pct": -4.5
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.01
      },
      {
        "name": "拼多多概念股",
        "change_pct": -4.76
      },
      {
        "name": "传媒",
        "change_pct": -3.65
      },
      {
        "name": "全息概念",
        "change_pct": -5.16
      },
      {
        "name": "NFT",
        "change_pct": -3.93
      },
      {
        "name": "元宇宙",
        "change_pct": -5.21
      },
      {
        "name": "web3.0",
        "change_pct": -5.05
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -5.23
      },
      {
        "name": "数字人民币",
        "change_pct": -3.42
      },
      {
        "name": "智慧政务",
        "change_pct": -4.67
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -4.09
      },
      {
        "name": "盲盒",
        "change_pct": -2.5
      },
      {
        "name": "AI营销",
        "change_pct": -5.16
      },
      {
        "name": "华为产业链",
        "change_pct": -6.04
      },
      {
        "name": "供应链金融",
        "change_pct": -2.07
      },
      {
        "name": "ChatGPT",
        "change_pct": -5.54
      },
      {
        "name": "区块链",
        "change_pct": -4.12
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 18,
    "hot_rank_chg": 1,
    "stock_cnt": 5752,
    "price": "12.23",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "5684173900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "参股算力",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -3.08
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.67
      },
      {
        "name": "水利",
        "change_pct": -3.39
      },
      {
        "name": "大数据",
        "change_pct": -4.91
      },
      {
        "name": "海绵城市",
        "change_pct": -2.41
      },
      {
        "name": "风电",
        "change_pct": -3.47
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.29
      },
      {
        "name": "数字经济",
        "change_pct": -4.53
      },
      {
        "name": "大基建",
        "change_pct": -2.42
      },
      {
        "name": "东数西算/算力",
        "change_pct": -6.0
      },
      {
        "name": "新型城镇化",
        "change_pct": -4.38
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      },
      {
        "name": "旧改",
        "change_pct": -3.81
      },
      {
        "name": "西部大开发",
        "change_pct": -1.93
      },
      {
        "name": "低空经济",
        "change_pct": -5.43
      },
      {
        "name": "房屋检测",
        "change_pct": -3.8
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 19,
    "hot_rank_chg": -1,
    "stock_cnt": 5752,
    "price": "3.06",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "3909455400.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "尿素",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -5.18
      },
      {
        "name": "甲醇",
        "change_pct": -0.85
      },
      {
        "name": "化肥",
        "change_pct": -0.61
      },
      {
        "name": "保健品",
        "change_pct": -4.04
      },
      {
        "name": "民营医院",
        "change_pct": -3.98
      },
      {
        "name": "医药",
        "change_pct": -6.38
      },
      {
        "name": "煤化工",
        "change_pct": -0.81
      },
      {
        "name": "食品",
        "change_pct": -3.39
      },
      {
        "name": "大农业",
        "change_pct": -2.81
      },
      {
        "name": "干细胞",
        "change_pct": -6.07
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -6.22
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 30,
    "hot_rank_chg": -3,
    "stock_cnt": 5752,
    "price": "8.27",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "7718586000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "风电光伏",
    "xgb_concepts": [
      {
        "name": "新疆国企改革",
        "change_pct": -2.06
      },
      {
        "name": "新疆概念",
        "change_pct": -3.53
      },
      {
        "name": "光伏",
        "change_pct": -4.58
      },
      {
        "name": "风电",
        "change_pct": -3.47
      },
      {
        "name": "储能",
        "change_pct": -4.19
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 32,
    "hot_rank_chg": 5,
    "stock_cnt": 5752,
    "price": "6.04",
    "change": "2.20",
    "market_id": "33",
    "circulate_market_value": "6238932200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -3.98
      },
      {
        "name": "锂电池",
        "change_pct": -5.15
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -8.12
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.99
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -3.71
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 41,
    "hot_rank_chg": -6,
    "stock_cnt": 5752,
    "price": "8.53",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "5803126800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "甲醇",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.85
      },
      {
        "name": "雄安新区",
        "change_pct": -3.63
      },
      {
        "name": "煤化工",
        "change_pct": -0.81
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 42,
    "hot_rank_chg": -4,
    "stock_cnt": 5752,
    "price": "5.80",
    "change": "1.93",
    "market_id": "17",
    "circulate_market_value": "71897317000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.44
      },
      {
        "name": "核电",
        "change_pct": -4.32
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.74
      },
      {
        "name": "水电",
        "change_pct": 3.69
      },
      {
        "name": "火电",
        "change_pct": 1.83
      },
      {
        "name": "光伏",
        "change_pct": -4.58
      },
      {
        "name": "风电",
        "change_pct": -3.47
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      },
      {
        "name": "算电协同",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 47,
    "hot_rank_chg": -6,
    "stock_cnt": 5752,
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
        "change_pct": -2.44
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.74
      },
      {
        "name": "火电",
        "change_pct": 1.83
      },
      {
        "name": "风电",
        "change_pct": -3.47
      },
      {
        "name": "储能",
        "change_pct": -4.19
      },
      {
        "name": "碳中和",
        "change_pct": -2.11
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 50,
    "hot_rank_chg": 2,
    "stock_cnt": 5752,
    "price": "1.86",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "6011800800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "医药",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -4.62
      },
      {
        "name": "中药",
        "change_pct": -5.18
      },
      {
        "name": "创新药",
        "change_pct": -7.66
      },
      {
        "name": "股权转让",
        "change_pct": -4.91
      },
      {
        "name": "举牌",
        "change_pct": -3.2
      },
      {
        "name": "水泥",
        "change_pct": -1.2
      },
      {
        "name": "保健品",
        "change_pct": -4.04
      },
      {
        "name": "医药",
        "change_pct": -6.38
      },
      {
        "name": "疫苗",
        "change_pct": -4.93
      },
      {
        "name": "振兴东北",
        "change_pct": -2.41
      },
      {
        "name": "食品",
        "change_pct": -3.39
      },
      {
        "name": "物业管理",
        "change_pct": -3.36
      },
      {
        "name": "低价股",
        "change_pct": -3.23
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "603567",
    "name": "珍宝岛",
    "hot_rank": 52,
    "hot_rank_chg": -2,
    "stock_cnt": 5752,
    "price": "6.03",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "5664601900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中成药集采",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -5.18
      },
      {
        "name": "创新药",
        "change_pct": -7.66
      },
      {
        "name": "医药",
        "change_pct": -6.38
      },
      {
        "name": "破净股",
        "change_pct": -1.81
      },
      {
        "name": "流感",
        "change_pct": -5.93
      }
    ]
  },
  {
    "code": "002632",
    "name": "道明光学",
    "hot_rank": 53,
    "hot_rank_chg": -5,
    "stock_cnt": 5752,
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
        "change_pct": -7.42
      },
      {
        "name": "手机产业链",
        "change_pct": -7.9
      },
      {
        "name": "锂电池",
        "change_pct": -5.15
      },
      {
        "name": "石墨烯",
        "change_pct": -4.74
      },
      {
        "name": "VR&AR",
        "change_pct": -6.69
      },
      {
        "name": "光伏",
        "change_pct": -4.58
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.99
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.77
      },
      {
        "name": "固态电池",
        "change_pct": -5.02
      },
      {
        "name": "华为产业链",
        "change_pct": -6.04
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 55,
    "hot_rank_chg": 19,
    "stock_cnt": 5752,
    "price": "10.48",
    "change": "6.29",
    "market_id": "33",
    "circulate_market_value": "6112049000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -2.62
      },
      {
        "name": "一带一路",
        "change_pct": -3.08
      },
      {
        "name": "天然气",
        "change_pct": -1.87
      },
      {
        "name": "油气改革",
        "change_pct": -1.47
      },
      {
        "name": "页岩气",
        "change_pct": -2.76
      },
      {
        "name": "深地经济",
        "change_pct": -3.73
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 57,
    "hot_rank_chg": -3,
    "stock_cnt": 5752,
    "price": "5.00",
    "change": "0.40",
    "market_id": "33",
    "circulate_market_value": "100574901000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -7.42
      },
      {
        "name": "手机产业链",
        "change_pct": -7.9
      },
      {
        "name": "超高清视频",
        "change_pct": -5.66
      },
      {
        "name": "电竞",
        "change_pct": -4.14
      },
      {
        "name": "半导体",
        "change_pct": -9.39
      },
      {
        "name": "OLED",
        "change_pct": -6.91
      },
      {
        "name": "光伏",
        "change_pct": -4.58
      },
      {
        "name": "黑色家电",
        "change_pct": -4.9
      },
      {
        "name": "家电",
        "change_pct": -4.05
      },
      {
        "name": "智能制造",
        "change_pct": -5.77
      },
      {
        "name": "工业互联网",
        "change_pct": -4.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -7.12
      },
      {
        "name": "国产芯片",
        "change_pct": -8.85
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.01
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.77
      },
      {
        "name": "MicroLED",
        "change_pct": -7.39
      },
      {
        "name": "MiniLED",
        "change_pct": -7.28
      },
      {
        "name": "华为产业链",
        "change_pct": -6.04
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -7.74
      }
    ]
  },
  {
    "code": "001248",
    "name": "华润新能源",
    "hot_rank": 59,
    "hot_rank_chg": -8,
    "stock_cnt": 5752,
    "price": "12.67",
    "change": "-2.31",
    "market_id": "33",
    "circulate_market_value": "13460656000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.44
      },
      {
        "name": "次新股",
        "change_pct": -5.55
      },
      {
        "name": "光伏",
        "change_pct": -4.58
      },
      {
        "name": "风电",
        "change_pct": -3.47
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 60,
    "hot_rank_chg": 4,
    "stock_cnt": 5752,
    "price": "6.98",
    "change": "4.80",
    "market_id": "33",
    "circulate_market_value": "4576828100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.57
      },
      {
        "name": "新零售",
        "change_pct": -3.19
      },
      {
        "name": "农业种植",
        "change_pct": -3.05
      },
      {
        "name": "冷链",
        "change_pct": -4.08
      },
      {
        "name": "大农业",
        "change_pct": -2.81
      },
      {
        "name": "预制菜",
        "change_pct": -2.83
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      },
      {
        "name": "可降解塑料",
        "change_pct": -3.02
      },
      {
        "name": "免税店概念",
        "change_pct": -2.43
      },
      {
        "name": "湖北国企改革",
        "change_pct": -2.78
      }
    ]
  },
  {
    "code": "000037",
    "name": "深南电A",
    "hot_rank": 66,
    "hot_rank_chg": 1,
    "stock_cnt": 5752,
    "price": "9.20",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "3117955000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电力",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -4.31
      },
      {
        "name": "核电",
        "change_pct": -4.32
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.74
      },
      {
        "name": "火电",
        "change_pct": 1.83
      },
      {
        "name": "固废处理",
        "change_pct": -3.53
      },
      {
        "name": "环保",
        "change_pct": -4.14
      },
      {
        "name": "储能",
        "change_pct": -4.19
      },
      {
        "name": "虚拟电厂",
        "change_pct": -2.76
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 68,
    "hot_rank_chg": 5,
    "stock_cnt": 5752,
    "price": "11.65",
    "change": "-3.32",
    "market_id": "17",
    "circulate_market_value": "17157034000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.44
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.74
      },
      {
        "name": "火电",
        "change_pct": 1.83
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -3.89
      },
      {
        "name": "风电",
        "change_pct": -3.47
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 69,
    "hot_rank_chg": -4,
    "stock_cnt": 5752,
    "price": "10.09",
    "change": "-2.23",
    "market_id": "33",
    "circulate_market_value": "21007399000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -5.25
      },
      {
        "name": "足球",
        "change_pct": -3.82
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -5.31
      },
      {
        "name": "拼多多概念股",
        "change_pct": -4.76
      },
      {
        "name": "网红/MCN",
        "change_pct": -4.92
      },
      {
        "name": "大消费",
        "change_pct": -2.0
      },
      {
        "name": "盲盒",
        "change_pct": -2.5
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.25
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -4.2
      },
      {
        "name": "首发经济",
        "change_pct": -1.99
      },
      {
        "name": "小红书概念股",
        "change_pct": -5.13
      },
      {
        "name": "服务消费",
        "change_pct": -3.28
      }
    ]
  },
  {
    "code": "600236",
    "name": "桂冠电力",
    "hot_rank": 70,
    "hot_rank_chg": 0,
    "stock_cnt": 5752,
    "price": "10.62",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "83710852000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "水电高增",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.44
      },
      {
        "name": "举牌",
        "change_pct": -3.2
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.74
      },
      {
        "name": "水电",
        "change_pct": 3.69
      },
      {
        "name": "风电",
        "change_pct": -3.47
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      },
      {
        "name": "广西概念",
        "change_pct": -2.66
      }
    ]
  },
  {
    "code": "600644",
    "name": "乐山电力",
    "hot_rank": 77,
    "hot_rank_chg": -11,
    "stock_cnt": 5752,
    "price": "9.01",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "5210670600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电力",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 1.74
      },
      {
        "name": "水电",
        "change_pct": 3.69
      },
      {
        "name": "天然气",
        "change_pct": -1.87
      },
      {
        "name": "光伏",
        "change_pct": -4.58
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 78,
    "hot_rank_chg": 11,
    "stock_cnt": 5752,
    "price": "5.10",
    "change": "-10.05",
    "market_id": "33",
    "circulate_market_value": "6613351700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -5.18
      },
      {
        "name": "创新药",
        "change_pct": -7.66
      },
      {
        "name": "央企改革",
        "change_pct": -2.44
      },
      {
        "name": "医疗器械",
        "change_pct": -5.76
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "互联网医疗",
        "change_pct": -4.79
      },
      {
        "name": "保健品",
        "change_pct": -4.04
      },
      {
        "name": "民营医院",
        "change_pct": -3.98
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -6.44
      },
      {
        "name": "医药",
        "change_pct": -6.38
      },
      {
        "name": "化学原料药",
        "change_pct": -6.86
      },
      {
        "name": "海南概念",
        "change_pct": -4.57
      },
      {
        "name": "脑科学",
        "change_pct": -6.76
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -2.98
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -3.58
      },
      {
        "name": "食品",
        "change_pct": -3.39
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      },
      {
        "name": "医疗信息化",
        "change_pct": -5.35
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -5.29
      },
      {
        "name": "自贸区",
        "change_pct": -2.88
      },
      {
        "name": "合成生物",
        "change_pct": -6.11
      }
    ]
  },
  {
    "code": "600992",
    "name": "贵绳股份",
    "hot_rank": 79,
    "hot_rank_chg": -4,
    "stock_cnt": 5752,
    "price": "11.72",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "2872454800.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "航母",
        "change_pct": -3.04
      },
      {
        "name": "军工",
        "change_pct": -5.21
      },
      {
        "name": "航天",
        "change_pct": -6.48
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 81,
    "hot_rank_chg": -1,
    "stock_cnt": 5752,
    "price": "12.45",
    "change": "-8.39",
    "market_id": "17",
    "circulate_market_value": "62113283000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -4.91
      },
      {
        "name": "半导体",
        "change_pct": -9.39
      },
      {
        "name": "5G",
        "change_pct": -7.47
      },
      {
        "name": "VR&AR",
        "change_pct": -6.69
      },
      {
        "name": "光通信",
        "change_pct": -9.63
      },
      {
        "name": "3D感应",
        "change_pct": -7.02
      },
      {
        "name": "汽车零部件",
        "change_pct": -5.2
      },
      {
        "name": "LED",
        "change_pct": -5.88
      },
      {
        "name": "国产芯片",
        "change_pct": -8.85
      },
      {
        "name": "MicroLED",
        "change_pct": -7.39
      },
      {
        "name": "第三代半导体",
        "change_pct": -8.08
      },
      {
        "name": "激光雷达",
        "change_pct": -8.53
      },
      {
        "name": "华为汽车",
        "change_pct": -4.51
      },
      {
        "name": "MiniLED",
        "change_pct": -7.28
      },
      {
        "name": "氮化镓",
        "change_pct": -7.87
      },
      {
        "name": "大基金概念",
        "change_pct": -7.78
      },
      {
        "name": "碳化硅",
        "change_pct": -8.13
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -10.38
      }
    ]
  },
  {
    "code": "002677",
    "name": "浙江美大",
    "hot_rank": 85,
    "hot_rank_chg": -6,
    "stock_cnt": 5752,
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
        "change_pct": -5.83
      },
      {
        "name": "人工智能",
        "change_pct": -5.4
      },
      {
        "name": "复牌股",
        "change_pct": -0.68
      },
      {
        "name": "家电",
        "change_pct": -4.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "厨卫家电",
        "change_pct": -1.77
      }
    ]
  },
  {
    "code": "600095",
    "name": "湘财股份",
    "hot_rank": 88,
    "hot_rank_chg": -6,
    "stock_cnt": 5752,
    "price": "8.69",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "24846341000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "证券",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -4.97
      },
      {
        "name": "券商",
        "change_pct": -1.08
      },
      {
        "name": "金融科技",
        "change_pct": -3.79
      },
      {
        "name": "大金融",
        "change_pct": -0.15
      },
      {
        "name": "人造肉",
        "change_pct": -3.51
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 90,
    "hot_rank_chg": -9,
    "stock_cnt": 5752,
    "price": "9.12",
    "change": "-0.11",
    "market_id": "33",
    "circulate_market_value": "36841697000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -9.39
      },
      {
        "name": "一带一路",
        "change_pct": -3.08
      },
      {
        "name": "京津冀",
        "change_pct": -3.44
      },
      {
        "name": "光伏",
        "change_pct": -4.58
      },
      {
        "name": "碳中和",
        "change_pct": -2.11
      },
      {
        "name": "国产芯片",
        "change_pct": -8.85
      },
      {
        "name": "IGBT",
        "change_pct": -7.4
      },
      {
        "name": "颗粒硅",
        "change_pct": -3.32
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -6.15
      },
      {
        "name": "大硅片",
        "change_pct": -6.04
      }
    ]
  },
  {
    "code": "300795",
    "name": "米奥会展",
    "hot_rank": 92,
    "hot_rank_chg": -1,
    "stock_cnt": 5752,
    "price": "10.48",
    "change": "20.05",
    "market_id": "33",
    "circulate_market_value": "1823364500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "间接参股月之暗面",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.57
      },
      {
        "name": "一带一路",
        "change_pct": -3.08
      },
      {
        "name": "大数据",
        "change_pct": -4.91
      },
      {
        "name": "智慧城市",
        "change_pct": -4.9
      },
      {
        "name": "RCEP概念",
        "change_pct": -1.56
      },
      {
        "name": "首发经济",
        "change_pct": -1.99
      }
    ]
  },
  {
    "code": "601857",
    "name": "中国石油",
    "hot_rank": 97,
    "hot_rank_chg": 1,
    "stock_cnt": 5752,
    "price": "10.29",
    "change": "3.00",
    "market_id": "17",
    "circulate_market_value": "1666178200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": -0.45
      },
      {
        "name": "央企改革",
        "change_pct": -2.44
      },
      {
        "name": "一带一路",
        "change_pct": -3.08
      },
      {
        "name": "石油化工",
        "change_pct": -2.11
      },
      {
        "name": "天然气",
        "change_pct": -1.87
      },
      {
        "name": "油气改革",
        "change_pct": -1.47
      },
      {
        "name": "可燃冰",
        "change_pct": -2.65
      },
      {
        "name": "中字头",
        "change_pct": -1.49
      },
      {
        "name": "页岩气",
        "change_pct": -2.76
      },
      {
        "name": "丁辛醇",
        "change_pct": -0.9
      },
      {
        "name": "国企改革",
        "change_pct": -2.65
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001309", "name": "德明利", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "536.54", "change": "-10.00", "market_id": "33", "circulate_market_value": "88565590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "85.49", "change": "2.74", "market_id": "17", "circulate_market_value": "152977050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "5.33", "change": "7.89", "market_id": "17", "circulate_market_value": "13423658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.57}, {"name": "工业大麻", "change_pct": -6.28}, {"name": "中药", "change_pct": -5.18}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "保健品", "change_pct": -4.04}, {"name": "医药", "change_pct": -6.38}, {"name": "化学原料药", "change_pct": -6.86}, {"name": "流感", "change_pct": -5.93}, {"name": "振兴东北", "change_pct": -2.41}, {"name": "食品", "change_pct": -3.39}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "979.46", "change": "-12.00", "market_id": "33", "circulate_market_value": "1087141610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "463.15", "change": "-10.00", "market_id": "17", "circulate_market_value": "309612040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "18.72", "change": "-10.00", "market_id": "33", "circulate_market_value": "62200041000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 7, "hot_rank_chg": 7, "stock_cnt": 5752, "price": "241.92", "change": "-10.00", "market_id": "33", "circulate_market_value": "335378950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 8, "hot_rank_chg": 2, "stock_cnt": 5752, "price": "79.20", "change": "10.00", "market_id": "33", "circulate_market_value": "36849568000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "参股DeepSeek"}, {"code": "000725", "name": "京东方A", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "6.07", "change": "0.33", "market_id": "33", "circulate_market_value": "214678500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -7.42}, {"name": "手机产业链", "change_pct": -7.9}, {"name": "超高清视频", "change_pct": -5.66}, {"name": "苹果产业链", "change_pct": -7.67}, {"name": "电竞", "change_pct": -4.14}, {"name": "半导体", "change_pct": -9.39}, {"name": "人工智能", "change_pct": -5.4}, {"name": "互联网医疗", "change_pct": -4.79}, {"name": "VR&AR", "change_pct": -6.69}, {"name": "OLED", "change_pct": -6.91}, {"name": "京津冀", "change_pct": -3.44}, {"name": "物联网", "change_pct": -5.15}, {"name": "指纹识别", "change_pct": -6.96}, {"name": "汽车零部件", "change_pct": -5.2}, {"name": "白马股", "change_pct": -1.56}, {"name": "智能制造", "change_pct": -5.77}, {"name": "小米概念股", "change_pct": -7.12}, {"name": "国产芯片", "change_pct": -8.85}, {"name": "液晶面板/LCD", "change_pct": -6.77}, {"name": "全息概念", "change_pct": -5.16}, {"name": "理想汽车概念股", "change_pct": -5.38}, {"name": "MicroLED", "change_pct": -7.39}, {"name": "钙钛矿电池", "change_pct": -5.33}, {"name": "智能手表", "change_pct": -6.7}, {"name": "MiniLED", "change_pct": -7.28}, {"name": "传感器", "change_pct": -7.1}, {"name": "大硅片", "change_pct": -6.04}, {"name": "AI PC", "change_pct": -7.02}, {"name": "华为产业链", "change_pct": -6.04}, {"name": "回购", "change_pct": -4.09}, {"name": "智能眼镜/MR头显", "change_pct": -7.65}, {"name": "玻璃基板封装", "change_pct": -7.74}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "58.39", "change": "-9.96", "market_id": "17", "circulate_market_value": "143268400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "35.13", "change": "-8.97", "market_id": "33", "circulate_market_value": "100474353000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5752, "price": "29.95", "change": "5.05", "market_id": "33", "circulate_market_value": "22684582000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 13, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "3.06", "change": "10.07", "market_id": "17", "circulate_market_value": "10001420700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "算力", "xgb_concepts": [{"name": "房地产", "change_pct": -3.5}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "养老产业", "change_pct": -4.0}, {"name": "粤港澳大湾区", "change_pct": -2.46}, {"name": "地摊经济", "change_pct": -3.25}]}, {"code": "000676", "name": "智度股份", "hot_rank": 14, "hot_rank_chg": 3, "stock_cnt": 5752, "price": "6.84", "change": "9.97", "market_id": "33", "circulate_market_value": "8611755200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报预增", "xgb_concepts": [{"name": "人工智能", "change_pct": -5.4}, {"name": "游戏", "change_pct": -5.49}, {"name": "智能音箱", "change_pct": -6.08}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -7.12}, {"name": "数字经济", "change_pct": -4.53}, {"name": "百度概念股", "change_pct": -4.5}, {"name": "腾讯概念股", "change_pct": -5.01}, {"name": "拼多多概念股", "change_pct": -4.76}, {"name": "传媒", "change_pct": -3.65}, {"name": "全息概念", "change_pct": -5.16}, {"name": "NFT", "change_pct": -3.93}, {"name": "元宇宙", "change_pct": -5.21}, {"name": "web3.0", "change_pct": -5.05}, {"name": "字节跳动概念股", "change_pct": -5.23}, {"name": "数字人民币", "change_pct": -3.42}, {"name": "智慧政务", "change_pct": -4.67}, {"name": "华为鸿蒙", "change_pct": -4.09}, {"name": "盲盒", "change_pct": -2.5}, {"name": "AI营销", "change_pct": -5.16}, {"name": "华为产业链", "change_pct": -6.04}, {"name": "供应链金融", "change_pct": -2.07}, {"name": "ChatGPT", "change_pct": -5.54}, {"name": "区块链", "change_pct": -4.12}]}, {"code": "603698", "name": "航天工程", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5752, "price": "26.04", "change": "-9.99", "market_id": "17", "circulate_market_value": "13957180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "14.95", "change": "10.01", "market_id": "17", "circulate_market_value": "11769782300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "600519", "name": "贵州茅台", "hot_rank": 17, "hot_rank_chg": -10, "stock_cnt": 5752, "price": "1253.00", "change": "-0.48", "market_id": "17", "circulate_market_value": "1566352200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 18, "hot_rank_chg": 1, "stock_cnt": 5752, "price": "12.23", "change": "9.98", "market_id": "33", "circulate_market_value": "5684173900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "参股算力", "xgb_concepts": [{"name": "一带一路", "change_pct": -3.08}, {"name": "云计算数据中心", "change_pct": -5.67}, {"name": "水利", "change_pct": -3.39}, {"name": "大数据", "change_pct": -4.91}, {"name": "海绵城市", "change_pct": -2.41}, {"name": "风电", "change_pct": -3.47}, {"name": "乡村振兴", "change_pct": -2.29}, {"name": "数字经济", "change_pct": -4.53}, {"name": "大基建", "change_pct": -2.42}, {"name": "东数西算/算力", "change_pct": -6.0}, {"name": "新型城镇化", "change_pct": -4.38}, {"name": "国企改革", "change_pct": -2.65}, {"name": "旧改", "change_pct": -3.81}, {"name": "西部大开发", "change_pct": -1.93}, {"name": "低空经济", "change_pct": -5.43}, {"name": "房屋检测", "change_pct": -3.8}]}, {"code": "600227", "name": "赤天化", "hot_rank": 19, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "3.06", "change": "10.07", "market_id": "17", "circulate_market_value": "3909455400.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "尿素", "xgb_concepts": [{"name": "中药", "change_pct": -5.18}, {"name": "甲醇", "change_pct": -0.85}, {"name": "化肥", "change_pct": -0.61}, {"name": "保健品", "change_pct": -4.04}, {"name": "民营医院", "change_pct": -3.98}, {"name": "医药", "change_pct": -6.38}, {"name": "煤化工", "change_pct": -0.81}, {"name": "食品", "change_pct": -3.39}, {"name": "大农业", "change_pct": -2.81}, {"name": "干细胞", "change_pct": -6.07}, {"name": "阿尔茨海默病", "change_pct": -6.22}]}, {"code": "000722", "name": "湖南发展", "hot_rank": 20, "hot_rank_chg": 3, "stock_cnt": 5752, "price": "13.83", "change": "10.02", "market_id": "33", "circulate_market_value": "6419309000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "水力发电"}, {"code": "002156", "name": "通富微电", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "68.36", "change": "-9.99", "market_id": "33", "circulate_market_value": "103733034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 22, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "33.65", "change": "-10.00", "market_id": "17", "circulate_market_value": "114845756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 23, "hot_rank_chg": 11, "stock_cnt": 5752, "price": "77.40", "change": "-8.94", "market_id": "33", "circulate_market_value": "113532782000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 24, "hot_rank_chg": -2, "stock_cnt": 5752, "price": "44.92", "change": "9.99", "market_id": "17", "circulate_market_value": "5869840100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "控制权拟变更"}, {"code": "600667", "name": "太极实业", "hot_rank": 25, "hot_rank_chg": 1, "stock_cnt": 5752, "price": "16.86", "change": "-9.98", "market_id": "17", "circulate_market_value": "35263401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 26, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "36.00", "change": "-10.00", "market_id": "33", "circulate_market_value": "144994360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 27, "hot_rank_chg": -3, "stock_cnt": 5752, "price": "396.00", "change": "-14.58", "market_id": "33", "circulate_market_value": "111613349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 28, "hot_rank_chg": 1, "stock_cnt": 5752, "price": "482.88", "change": "-11.01", "market_id": "33", "circulate_market_value": "605648940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 29, "hot_rank_chg": 7, "stock_cnt": 5752, "price": "39.01", "change": "-9.99", "market_id": "33", "circulate_market_value": "61407809000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 30, "hot_rank_chg": -3, "stock_cnt": 5752, "price": "8.27", "change": "9.97", "market_id": "33", "circulate_market_value": "7718586000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "风电光伏", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": -2.06}, {"name": "新疆概念", "change_pct": -3.53}, {"name": "光伏", "change_pct": -4.58}, {"name": "风电", "change_pct": -3.47}, {"name": "储能", "change_pct": -4.19}, {"name": "国企改革", "change_pct": -2.65}]}, {"code": "002407", "name": "多氟多", "hot_rank": 31, "hot_rank_chg": 2, "stock_cnt": 5752, "price": "31.24", "change": "-2.13", "market_id": "33", "circulate_market_value": "33700692000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 32, "hot_rank_chg": 5, "stock_cnt": 5752, "price": "6.04", "change": "2.20", "market_id": "33", "circulate_market_value": "6238932200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -3.98}, {"name": "锂电池", "change_pct": -5.15}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "铜箔/覆铜板", "change_pct": -8.12}, {"name": "粤港澳大湾区", "change_pct": -2.46}, {"name": "新能源汽车", "change_pct": -4.99}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -3.71}]}, {"code": "600900", "name": "长江电力", "hot_rank": 33, "hot_rank_chg": -5, "stock_cnt": 5752, "price": "27.99", "change": "1.97", "market_id": "17", "circulate_market_value": "684865410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 34, "hot_rank_chg": 11, "stock_cnt": 5752, "price": "38.19", "change": "-9.99", "market_id": "33", "circulate_market_value": "29880033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 35, "hot_rank_chg": 4, "stock_cnt": 5752, "price": "87.89", "change": "-10.00", "market_id": "17", "circulate_market_value": "128587846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 36, "hot_rank_chg": -6, "stock_cnt": 5752, "price": "183.60", "change": "-13.04", "market_id": "17", "circulate_market_value": "210178770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 37, "hot_rank_chg": 18, "stock_cnt": 5752, "price": "47.93", "change": "-9.99", "market_id": "17", "circulate_market_value": "30212820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 38, "hot_rank_chg": 5, "stock_cnt": 5752, "price": "252.86", "change": "-15.78", "market_id": "17", "circulate_market_value": "119240345000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 39, "hot_rank_chg": 1, "stock_cnt": 5752, "price": "62.35", "change": "-9.85", "market_id": "17", "circulate_market_value": "73728198000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 40, "hot_rank_chg": 9, "stock_cnt": 5752, "price": "70.18", "change": "0.75", "market_id": "17", "circulate_market_value": "29220685000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 41, "hot_rank_chg": -6, "stock_cnt": 5752, "price": "8.53", "change": "10.06", "market_id": "17", "circulate_market_value": "5803126800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.85}, {"name": "雄安新区", "change_pct": -3.63}, {"name": "煤化工", "change_pct": -0.81}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 42, "hot_rank_chg": -4, "stock_cnt": 5752, "price": "5.80", "change": "1.93", "market_id": "17", "circulate_market_value": "71897317000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.44}, {"name": "核电", "change_pct": -4.32}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "电力体制改革", "change_pct": 1.74}, {"name": "水电", "change_pct": 3.69}, {"name": "火电", "change_pct": 1.83}, {"name": "光伏", "change_pct": -4.58}, {"name": "风电", "change_pct": -3.47}, {"name": "国企改革", "change_pct": -2.65}, {"name": "算电协同", "change_pct": -2.74}]}, {"code": "600436", "name": "片仔癀", "hot_rank": 43, "hot_rank_chg": -12, "stock_cnt": 5752, "price": "146.63", "change": "3.88", "market_id": "17", "circulate_market_value": "88464403000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001388", "name": "信通电子", "hot_rank": 44, "hot_rank_chg": 2, "stock_cnt": 5752, "price": "24.74", "change": "10.00", "market_id": "33", "circulate_market_value": "3095433500.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "电力智能运维"}, {"code": "002829", "name": "星网宇达", "hot_rank": 45, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "20.72", "change": "9.98", "market_id": "33", "circulate_market_value": "3026208300.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "商业航天"}, {"code": "601138", "name": "工业富联", "hot_rank": 46, "hot_rank_chg": -4, "stock_cnt": 5752, "price": "57.59", "change": "-8.62", "market_id": "17", "circulate_market_value": "1142821270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 47, "hot_rank_chg": -6, "stock_cnt": 5752, "price": "5.96", "change": "9.96", "market_id": "17", "circulate_market_value": "12105500700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "火电", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.44}, {"name": "电力体制改革", "change_pct": 1.74}, {"name": "火电", "change_pct": 1.83}, {"name": "风电", "change_pct": -3.47}, {"name": "储能", "change_pct": -4.19}, {"name": "碳中和", "change_pct": -2.11}, {"name": "国企改革", "change_pct": -2.65}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 48, "hot_rank_chg": 13, "stock_cnt": 5752, "price": "361.57", "change": "-10.00", "market_id": "17", "circulate_market_value": "146919740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 49, "hot_rank_chg": 8, "stock_cnt": 5752, "price": "34.52", "change": "-9.99", "market_id": "17", "circulate_market_value": "11630476700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600881", "name": "亚泰集团", "hot_rank": 50, "hot_rank_chg": 2, "stock_cnt": 5752, "price": "1.86", "change": "10.06", "market_id": "17", "circulate_market_value": "6011800800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "医药", "xgb_concepts": [{"name": "体育产业", "change_pct": -4.62}, {"name": "中药", "change_pct": -5.18}, {"name": "创新药", "change_pct": -7.66}, {"name": "股权转让", "change_pct": -4.91}, {"name": "举牌", "change_pct": -3.2}, {"name": "水泥", "change_pct": -1.2}, {"name": "保健品", "change_pct": -4.04}, {"name": "医药", "change_pct": -6.38}, {"name": "疫苗", "change_pct": -4.93}, {"name": "振兴东北", "change_pct": -2.41}, {"name": "食品", "change_pct": -3.39}, {"name": "物业管理", "change_pct": -3.36}, {"name": "低价股", "change_pct": -3.23}, {"name": "国企改革", "change_pct": -2.65}]}, {"code": "603629", "name": "利通电子", "hot_rank": 51, "hot_rank_chg": 11, "stock_cnt": 5752, "price": "90.79", "change": "-10.00", "market_id": "17", "circulate_market_value": "32750077000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603567", "name": "珍宝岛", "hot_rank": 52, "hot_rank_chg": -2, "stock_cnt": 5752, "price": "6.03", "change": "10.04", "market_id": "17", "circulate_market_value": "5664601900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中成药集采", "xgb_concepts": [{"name": "中药", "change_pct": -5.18}, {"name": "创新药", "change_pct": -7.66}, {"name": "医药", "change_pct": -6.38}, {"name": "破净股", "change_pct": -1.81}, {"name": "流感", "change_pct": -5.93}]}, {"code": "002632", "name": "道明光学", "hot_rank": 53, "hot_rank_chg": -5, "stock_cnt": 5752, "price": "10.59", "change": "9.97", "market_id": "33", "circulate_market_value": "6083168800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "努比亚AI手机", "xgb_concepts": [{"name": "折叠屏", "change_pct": -7.42}, {"name": "手机产业链", "change_pct": -7.9}, {"name": "锂电池", "change_pct": -5.15}, {"name": "石墨烯", "change_pct": -4.74}, {"name": "VR&AR", "change_pct": -6.69}, {"name": "光伏", "change_pct": -4.58}, {"name": "新能源汽车", "change_pct": -4.99}, {"name": "液晶面板/LCD", "change_pct": -6.77}, {"name": "固态电池", "change_pct": -5.02}, {"name": "华为产业链", "change_pct": -6.04}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 54, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "93.47", "change": "-0.71", "market_id": "33", "circulate_market_value": "325893760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 55, "hot_rank_chg": 19, "stock_cnt": 5752, "price": "10.48", "change": "6.29", "market_id": "33", "circulate_market_value": "6112049000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -2.62}, {"name": "一带一路", "change_pct": -3.08}, {"name": "天然气", "change_pct": -1.87}, {"name": "油气改革", "change_pct": -1.47}, {"name": "页岩气", "change_pct": -2.76}, {"name": "深地经济", "change_pct": -3.73}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 56, "hot_rank_chg": 4, "stock_cnt": 5752, "price": "127.80", "change": "-6.52", "market_id": "33", "circulate_market_value": "245735180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 57, "hot_rank_chg": -3, "stock_cnt": 5752, "price": "5.00", "change": "0.40", "market_id": "33", "circulate_market_value": "100574901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -7.42}, {"name": "手机产业链", "change_pct": -7.9}, {"name": "超高清视频", "change_pct": -5.66}, {"name": "电竞", "change_pct": -4.14}, {"name": "半导体", "change_pct": -9.39}, {"name": "OLED", "change_pct": -6.91}, {"name": "光伏", "change_pct": -4.58}, {"name": "黑色家电", "change_pct": -4.9}, {"name": "家电", "change_pct": -4.05}, {"name": "智能制造", "change_pct": -5.77}, {"name": "工业互联网", "change_pct": -4.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -7.12}, {"name": "国产芯片", "change_pct": -8.85}, {"name": "腾讯概念股", "change_pct": -5.01}, {"name": "液晶面板/LCD", "change_pct": -6.77}, {"name": "MicroLED", "change_pct": -7.39}, {"name": "MiniLED", "change_pct": -7.28}, {"name": "华为产业链", "change_pct": -6.04}, {"name": "玻璃基板封装", "change_pct": -7.74}]}, {"code": "000636", "name": "风华高科", "hot_rank": 58, "hot_rank_chg": -2, "stock_cnt": 5752, "price": "46.53", "change": "-10.00", "market_id": "33", "circulate_market_value": "53835820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 59, "hot_rank_chg": -8, "stock_cnt": 5752, "price": "12.67", "change": "-2.31", "market_id": "33", "circulate_market_value": "13460656000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.44}, {"name": "次新股", "change_pct": -5.55}, {"name": "光伏", "change_pct": -4.58}, {"name": "风电", "change_pct": -3.47}, {"name": "国企改革", "change_pct": -2.65}]}, {"code": "000759", "name": "中百集团", "hot_rank": 60, "hot_rank_chg": 4, "stock_cnt": 5752, "price": "6.98", "change": "4.80", "market_id": "33", "circulate_market_value": "4576828100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.57}, {"name": "新零售", "change_pct": -3.19}, {"name": "农业种植", "change_pct": -3.05}, {"name": "冷链", "change_pct": -4.08}, {"name": "大农业", "change_pct": -2.81}, {"name": "预制菜", "change_pct": -2.83}, {"name": "国企改革", "change_pct": -2.65}, {"name": "可降解塑料", "change_pct": -3.02}, {"name": "免税店概念", "change_pct": -2.43}, {"name": "湖北国企改革", "change_pct": -2.78}]}, {"code": "000988", "name": "华工科技", "hot_rank": 62, "hot_rank_chg": -30, "stock_cnt": 5752, "price": "117.62", "change": "-10.00", "market_id": "33", "circulate_market_value": "118206413000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 63, "hot_rank_chg": 5, "stock_cnt": 5752, "price": "39.85", "change": "-9.00", "market_id": "17", "circulate_market_value": "33735150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 65, "hot_rank_chg": -7, "stock_cnt": 5752, "price": "66.62", "change": "-0.04", "market_id": "33", "circulate_market_value": "2178370300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000037", "name": "深南电A", "hot_rank": 66, "hot_rank_chg": 1, "stock_cnt": 5752, "price": "9.20", "change": "10.05", "market_id": "33", "circulate_market_value": "3117955000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电力", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -4.31}, {"name": "核电", "change_pct": -4.32}, {"name": "电力体制改革", "change_pct": 1.74}, {"name": "火电", "change_pct": 1.83}, {"name": "固废处理", "change_pct": -3.53}, {"name": "环保", "change_pct": -4.14}, {"name": "储能", "change_pct": -4.19}, {"name": "虚拟电厂", "change_pct": -2.76}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 67, "hot_rank_chg": 10, "stock_cnt": 5752, "price": "28.85", "change": "-9.98", "market_id": "17", "circulate_market_value": "5277626700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 68, "hot_rank_chg": 5, "stock_cnt": 5752, "price": "11.65", "change": "-3.32", "market_id": "17", "circulate_market_value": "17157034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.44}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "电力体制改革", "change_pct": 1.74}, {"name": "火电", "change_pct": 1.83}, {"name": "氢能源/燃料电池", "change_pct": -3.89}, {"name": "风电", "change_pct": -3.47}, {"name": "国企改革", "change_pct": -2.65}]}, {"code": "002739", "name": "儒意电影", "hot_rank": 69, "hot_rank_chg": -4, "stock_cnt": 5752, "price": "10.09", "change": "-2.23", "market_id": "33", "circulate_market_value": "21007399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -5.25}, {"name": "足球", "change_pct": -3.82}, {"name": "阿里巴巴概念股", "change_pct": -5.31}, {"name": "拼多多概念股", "change_pct": -4.76}, {"name": "网红/MCN", "change_pct": -4.92}, {"name": "大消费", "change_pct": -2.0}, {"name": "盲盒", "change_pct": -2.5}, {"name": "短剧/互动影游", "change_pct": -5.25}, {"name": "IP经济/谷子经济", "change_pct": -4.2}, {"name": "首发经济", "change_pct": -1.99}, {"name": "小红书概念股", "change_pct": -5.13}, {"name": "服务消费", "change_pct": -3.28}]}, {"code": "600236", "name": "桂冠电力", "hot_rank": 70, "hot_rank_chg": 0, "stock_cnt": 5752, "price": "10.62", "change": "10.05", "market_id": "17", "circulate_market_value": "83710852000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "水电高增", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.44}, {"name": "举牌", "change_pct": -3.2}, {"name": "电力体制改革", "change_pct": 1.74}, {"name": "水电", "change_pct": 3.69}, {"name": "风电", "change_pct": -3.47}, {"name": "国企改革", "change_pct": -2.65}, {"name": "广西概念", "change_pct": -2.66}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 71, "hot_rank_chg": 16, "stock_cnt": 5752, "price": "1190.58", "change": "-6.93", "market_id": "17", "circulate_market_value": "748033040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 72, "hot_rank_chg": 22, "stock_cnt": 5752, "price": "28.36", "change": "-3.04", "market_id": "17", "circulate_market_value": "584266850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 73, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "132.29", "change": "-10.00", "market_id": "17", "circulate_market_value": "316768610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 74, "hot_rank_chg": -11, "stock_cnt": 5752, "price": "129.05", "change": "1.45", "market_id": "33", "circulate_market_value": "106984456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 75, "hot_rank_chg": 1, "stock_cnt": 5752, "price": "13.96", "change": "3.41", "market_id": "33", "circulate_market_value": "21299907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 76, "hot_rank_chg": 14, "stock_cnt": 5752, "price": "189.45", "change": "-10.00", "market_id": "33", "circulate_market_value": "147865410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600644", "name": "乐山电力", "hot_rank": 77, "hot_rank_chg": -11, "stock_cnt": 5752, "price": "9.01", "change": "10.01", "market_id": "17", "circulate_market_value": "5210670600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电力", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 1.74}, {"name": "水电", "change_pct": 3.69}, {"name": "天然气", "change_pct": -1.87}, {"name": "光伏", "change_pct": -4.58}]}, {"code": "000566", "name": "海南海药", "hot_rank": 78, "hot_rank_chg": 11, "stock_cnt": 5752, "price": "5.10", "change": "-10.05", "market_id": "33", "circulate_market_value": "6613351700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -5.18}, {"name": "创新药", "change_pct": -7.66}, {"name": "央企改革", "change_pct": -2.44}, {"name": "医疗器械", "change_pct": -5.76}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "互联网医疗", "change_pct": -4.79}, {"name": "保健品", "change_pct": -4.04}, {"name": "民营医院", "change_pct": -3.98}, {"name": "CAR-T疗法", "change_pct": -6.44}, {"name": "医药", "change_pct": -6.38}, {"name": "化学原料药", "change_pct": -6.86}, {"name": "海南概念", "change_pct": -4.57}, {"name": "脑科学", "change_pct": -6.76}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -2.98}, {"name": "海南自由贸易港", "change_pct": -3.58}, {"name": "食品", "change_pct": -3.39}, {"name": "国企改革", "change_pct": -2.65}, {"name": "医疗信息化", "change_pct": -5.35}, {"name": "新冠病毒防治", "change_pct": -5.29}, {"name": "自贸区", "change_pct": -2.88}, {"name": "合成生物", "change_pct": -6.11}]}, {"code": "600992", "name": "贵绳股份", "hot_rank": 79, "hot_rank_chg": -4, "stock_cnt": 5752, "price": "11.72", "change": "10.05", "market_id": "17", "circulate_market_value": "2872454800.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "商业航天", "xgb_concepts": [{"name": "航母", "change_pct": -3.04}, {"name": "军工", "change_pct": -5.21}, {"name": "航天", "change_pct": -6.48}, {"name": "国企改革", "change_pct": -2.65}]}, {"code": "688146", "name": "中船特气", "hot_rank": 80, "hot_rank_chg": -9, "stock_cnt": 5752, "price": "251.00", "change": "-1.57", "market_id": "17", "circulate_market_value": "36387681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 81, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "12.45", "change": "-8.39", "market_id": "17", "circulate_market_value": "62113283000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -4.91}, {"name": "半导体", "change_pct": -9.39}, {"name": "5G", "change_pct": -7.47}, {"name": "VR&AR", "change_pct": -6.69}, {"name": "光通信", "change_pct": -9.63}, {"name": "3D感应", "change_pct": -7.02}, {"name": "汽车零部件", "change_pct": -5.2}, {"name": "LED", "change_pct": -5.88}, {"name": "国产芯片", "change_pct": -8.85}, {"name": "MicroLED", "change_pct": -7.39}, {"name": "第三代半导体", "change_pct": -8.08}, {"name": "激光雷达", "change_pct": -8.53}, {"name": "华为汽车", "change_pct": -4.51}, {"name": "MiniLED", "change_pct": -7.28}, {"name": "氮化镓", "change_pct": -7.87}, {"name": "大基金概念", "change_pct": -7.78}, {"name": "碳化硅", "change_pct": -8.13}, {"name": "光电共封装CPO", "change_pct": -10.38}]}, {"code": "688981", "name": "中芯国际", "hot_rank": 82, "hot_rank_chg": 2, "stock_cnt": 5752, "price": "139.88", "change": "-7.85", "market_id": "17", "circulate_market_value": "279698810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 83, "hot_rank_chg": 3, "stock_cnt": 5752, "price": "117.89", "change": "-7.17", "market_id": "17", "circulate_market_value": "291575010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 84, "hot_rank_chg": 8, "stock_cnt": 5752, "price": "211.37", "change": "-13.42", "market_id": "33", "circulate_market_value": "230052580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002677", "name": "浙江美大", "hot_rank": 85, "hot_rank_chg": -6, "stock_cnt": 5752, "price": "7.95", "change": "9.96", "market_id": "33", "circulate_market_value": "4384503300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控制权变更", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -5.83}, {"name": "人工智能", "change_pct": -5.4}, {"name": "复牌股", "change_pct": -0.68}, {"name": "家电", "change_pct": -4.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "厨卫家电", "change_pct": -1.77}]}, {"code": "000858", "name": "五粮液", "hot_rank": 86, "hot_rank_chg": -17, "stock_cnt": 5752, "price": "72.76", "change": "-1.54", "market_id": "33", "circulate_market_value": "282418910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003001", "name": "中岩大地", "hot_rank": 87, "hot_rank_chg": 1, "stock_cnt": 5752, "price": "19.56", "change": "10.01", "market_id": "33", "circulate_market_value": "2237010300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "拟收购PCB刀具"}, {"code": "600095", "name": "湘财股份", "hot_rank": 88, "hot_rank_chg": -6, "stock_cnt": 5752, "price": "8.69", "change": "10.00", "market_id": "17", "circulate_market_value": "24846341000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "证券", "xgb_concepts": [{"name": "资产重组", "change_pct": -4.97}, {"name": "券商", "change_pct": -1.08}, {"name": "金融科技", "change_pct": -3.79}, {"name": "大金融", "change_pct": -0.15}, {"name": "人造肉", "change_pct": -3.51}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 89, "hot_rank_chg": 10, "stock_cnt": 5752, "price": "43.80", "change": "-8.20", "market_id": "17", "circulate_market_value": "173955510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 90, "hot_rank_chg": -9, "stock_cnt": 5752, "price": "9.12", "change": "-0.11", "market_id": "33", "circulate_market_value": "36841697000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -9.39}, {"name": "一带一路", "change_pct": -3.08}, {"name": "京津冀", "change_pct": -3.44}, {"name": "光伏", "change_pct": -4.58}, {"name": "碳中和", "change_pct": -2.11}, {"name": "国产芯片", "change_pct": -8.85}, {"name": "IGBT", "change_pct": -7.4}, {"name": "颗粒硅", "change_pct": -3.32}, {"name": "异质结电池HJT", "change_pct": -6.15}, {"name": "大硅片", "change_pct": -6.04}]}, {"code": "300475", "name": "香农芯创", "hot_rank": 91, "hot_rank_chg": 6, "stock_cnt": 5752, "price": "174.10", "change": "-15.48", "market_id": "33", "circulate_market_value": "78351227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300795", "name": "米奥会展", "hot_rank": 92, "hot_rank_chg": -1, "stock_cnt": 5752, "price": "10.48", "change": "20.05", "market_id": "33", "circulate_market_value": "1823364500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接参股月之暗面", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.57}, {"name": "一带一路", "change_pct": -3.08}, {"name": "大数据", "change_pct": -4.91}, {"name": "智慧城市", "change_pct": -4.9}, {"name": "RCEP概念", "change_pct": -1.56}, {"name": "首发经济", "change_pct": -1.99}]}, {"code": "000066", "name": "中国长城", "hot_rank": 93, "hot_rank_chg": 3, "stock_cnt": 5752, "price": "14.71", "change": "-9.98", "market_id": "33", "circulate_market_value": "47448427000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 95, "hot_rank_chg": -17, "stock_cnt": 5752, "price": "360.00", "change": "-1.69", "market_id": "33", "circulate_market_value": "1532532900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 96, "hot_rank_chg": -11, "stock_cnt": 5752, "price": "23.01", "change": "-0.04", "market_id": "33", "circulate_market_value": "72382795000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601857", "name": "中国石油", "hot_rank": 97, "hot_rank_chg": 1, "stock_cnt": 5752, "price": "10.29", "change": "3.00", "market_id": "17", "circulate_market_value": "1666178200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": -0.45}, {"name": "央企改革", "change_pct": -2.44}, {"name": "一带一路", "change_pct": -3.08}, {"name": "石油化工", "change_pct": -2.11}, {"name": "天然气", "change_pct": -1.87}, {"name": "油气改革", "change_pct": -1.47}, {"name": "可燃冰", "change_pct": -2.65}, {"name": "中字头", "change_pct": -1.49}, {"name": "页岩气", "change_pct": -2.76}, {"name": "丁辛醇", "change_pct": -0.9}, {"name": "国企改革", "change_pct": -2.65}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 98, "hot_rank_chg": 10, "stock_cnt": 5752, "price": "241.50", "change": "-10.86", "market_id": "33", "circulate_market_value": "208944580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 99, "hot_rank_chg": -6, "stock_cnt": 5752, "price": "17.01", "change": "-8.50", "market_id": "33", "circulate_market_value": "57213221000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 100, "hot_rank_chg": -5, "stock_cnt": 5752, "price": "39.60", "change": "-10.00", "market_id": "17", "circulate_market_value": "50356210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600992", "name": "贵绳股份", "price": 11.72, "change_pct": 10.05, "reason": "公司“巨龙”牌钢丝绳已用于“神舟”载人飞船等国家重大航天工程，产品配套长征系列火箭及深中通道等超级工程", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.89, "first_limit_up": 1784252406, "break_limit_up_times": 1}, {"code": "600722", "name": "金牛化工", "price": 8.53, "change_pct": 10.06, "reason": "公司签4.36亿元风力发电机组设备采购合同", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.24, "first_limit_up": 1784252329, "break_limit_up_times": 0}, {"code": "600744", "name": "华银电力", "price": 5.96, "change_pct": 9.96, "reason": "湖南省火电龙头", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1784252598, "break_limit_up_times": 0}, {"code": "601369", "name": "陕鼓动力", "price": 9.5, "change_pct": 9.95, "reason": "公司主要为客户提供工业气体领域系统解决方案，旗下秦风气体是专业化、规模化的国有大型工业气体系统解决方案服务商，业务种类涵盖空分、合成气、焦炉气综合利用、氢能综合利用、稀有气体等多个领域", "plates": ["电子特气"], "limit_up_days": 1, "turnover_ratio": 1.99, "first_limit_up": 1784253122, "break_limit_up_times": 2}, {"code": "605011", "name": "杭州热电", "price": 18.48, "change_pct": 10.0, "reason": "实控人为杭州国资委，公司主营工业园区热电联产、集中供热，提供的主要产品是蒸汽与电力，已覆盖上海、杭州等地区", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.65, "first_limit_up": 1784254256, "break_limit_up_times": 1}, {"code": "002632", "name": "道明光学", "price": 10.59, "change_pct": 9.97, "reason": "全资子公司浙江道明超导科技有限公司专注于石墨烯散热膜的研发和生产，石墨烯散热膜极佳的柔韧性使其被应用于折叠手机弯折处，公司石墨烯散热膜已应用于OPPO Find N3 Flip折叠屏手机", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 12.63, "first_limit_up": 1784251809, "break_limit_up_times": 3}, {"code": "603118", "name": "共进股份", "price": 14.95, "change_pct": 10.01, "reason": "1、公司深耕以太网交换机领域多年，产品覆盖园区、SMB 场景及 100G/400G/800G 等规格数据中心交换机，同时布局工业与白盒交换机赛道，作为 Arista Networks 核心代工厂间接供应英伟达、微软等头部客户；\n2、参股孙公司山东华云光电技术有限公司致力于光模块等产品的研发、生产及销售", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 15.57, "first_limit_up": 1784253016, "break_limit_up_times": 1}, {"code": "603580", "name": "艾艾精工", "price": 44.92, "change_pct": 9.99, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 4, "turnover_ratio": 0.21, "first_limit_up": 1784251500, "break_limit_up_times": 0}, {"code": "002829", "name": "星网宇达", "price": 20.72, "change_pct": 9.98, "reason": "公司主要从事信息感知、卫星通信以及无人系统业务，上半年盈利9000万元-1.2亿元，因“公司对外投资项目2026年1-6月收益表现良好，投资收益同比实现增长，有效补充当期利润，弥补本期经营亏损。经初步测算，影响本期利润金额预计约为1.4亿元”", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 20.2, "first_limit_up": 1784268564, "break_limit_up_times": 1}, {"code": "000676", "name": "智度股份", "price": 6.84, "change_pct": 9.97, "reason": "公司预计上半年净利润同比增长63.69%至75.81%，报告期内，公司主营业务稳健发展，为本期净利润提供稳定支撑，其中互联网媒体业务保持了较好的盈利能力，利润同比增长；公司对外转让参股公司上海邑炎信息科技有限公司22.4128%的股权确认投资收益约为0.67亿元，计入非经常性损益，相关事项已于2026年6月完成", "plates": ["业绩增长"], "limit_up_days": 3, "turnover_ratio": 20.42, "first_limit_up": 1784251863, "break_limit_up_times": 3}, {"code": "600644", "name": "乐山电力", "price": 9.01, "change_pct": 10.01, "reason": "公司目前主要有电力、天然气、自来水、综合能源、宾馆等五大业务；参股子公司四川晟天新能源发展有限公司主营业务为太阳能光伏电站，项目包括牧光互补、渔光互补、农光互补等光伏复合电站以及分布式光伏电站等多种类型", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.56, "first_limit_up": 1784252728, "break_limit_up_times": 1}, {"code": "000037", "name": "深南电A", "price": 9.2, "change_pct": 10.05, "reason": "公司主营生产经营供电供热、从事发电厂（站）的相关技术咨询和技术服务，拥有3家全资或控股燃机发电厂", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 10.66, "first_limit_up": 1784253609, "break_limit_up_times": 0}, {"code": "300795", "name": "米奥会展", "price": 10.48, "change_pct": 20.05, "reason": "目前公司参股的“华月创智（青岛）创业投资基金合伙企业（有限合伙）”持有“北京月之暗面科技有限公司”4.233%的股权", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 9.44, "first_limit_up": 1784252319, "break_limit_up_times": 0}, {"code": "000722", "name": "湖南发展", "price": 13.83, "change_pct": 10.02, "reason": "公司预计上半年净利润同比增长318.91%-391.77%，报告期内业绩变化的主要原因是公司实施重大资产重组，高电公司、铜电公司、清电公司、筱电公司相关股权已全部登记至公司名下，上述四家公司成为公司的控股子公司，公司所属水电装机规模较上年同期大幅增长。本报告期内，公司所属水电站上游来水偏丰，水电业务板块发电量较上年同期大幅增长", "plates": ["智能电网", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 11.88, "first_limit_up": 1784271234, "break_limit_up_times": 0}, {"code": "000779", "name": "甘咨询", "price": 12.23, "change_pct": 9.98, "reason": "公司参股10%丝绸之路信息港，后者参与投建数据中心和云平台工程建设，持有丝绸之路大数据37%股权、丝路信息港云计算100%股权", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 21.51, "first_limit_up": 1784254734, "break_limit_up_times": 9}, {"code": "002766", "name": "索菱股份", "price": 3.94, "change_pct": 10.06, "reason": "车载终端市场绝对龙头，车联网“软件+硬件+运营平台”供应商，智能驾驶舱已进入供货状态", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 3.48, "first_limit_up": 1784251800, "break_limit_up_times": 0}, {"code": "001258", "name": "立新能源", "price": 8.27, "change_pct": 9.97, "reason": "公司立足新疆，专注风力发电和光伏发电业务", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 6.15, "first_limit_up": 1784252760, "break_limit_up_times": 1}, {"code": "600982", "name": "宁波能源", "price": 5.09, "change_pct": 9.94, "reason": "隶属宁波市国资委，主要从事热电联产、生物质发电、抽水蓄能和综合能源服务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 8.4, "first_limit_up": 1784258267, "break_limit_up_times": 1}, {"code": "603567", "name": "珍宝岛", "price": 6.03, "change_pct": 10.04, "reason": "公司拥有小儿热速清糖浆，可用于小儿外感风热所致的感冒", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 11.12, "first_limit_up": 1784252206, "break_limit_up_times": 1}, {"code": "300577", "name": "开润股份", "price": 20.36, "change_pct": 19.98, "reason": "公司间接入股DeepSeek", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 11.91, "first_limit_up": 1784251500, "break_limit_up_times": 2}, {"code": "603161", "name": "科华控股", "price": 13.31, "change_pct": 10.0, "reason": "公司定增申请获上交所审核通过，实控人包揽3.26亿元助力拓展汽车关键零部件产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.61, "first_limit_up": 1784251981, "break_limit_up_times": 2}, {"code": "600162", "name": "香江控股", "price": 3.06, "change_pct": 10.07, "reason": "公司签5年互联网数据中心业务协议，预计总金额7.96亿元", "plates": ["云计算数据中心"], "limit_up_days": 3, "turnover_ratio": 11.6, "first_limit_up": 1784269640, "break_limit_up_times": 0}, {"code": "600236", "name": "桂冠电力", "price": 10.62, "change_pct": 10.05, "reason": "公司主要投资建设，经营管理以电力生产为主的能源项目，包含水电，火电和风电等，主要发电资产位于广西", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 0.47, "first_limit_up": 1784254902, "break_limit_up_times": 1}, {"code": "002731", "name": "*ST萃华", "price": 2.53, "change_pct": 10.0, "reason": "“中华老字号”珠宝企业，主营业务为珠宝饰品，兼营铂金和镶嵌饰品", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 32.52, "first_limit_up": 1784266698, "break_limit_up_times": 0}, {"code": "600227", "name": "赤天化", "price": 3.06, "change_pct": 10.07, "reason": "贵州最大的甲醇生产企业；公司上半年业绩同比扭亏为盈，主要因“公司化工生产装置运行质效同步提升，主要产品尿素、甲醇产量有所增加，单位生产成本有所下降。同时，2026年2月下旬以来地缘因素带来的市场供给端影响，甲醇、复合肥产品销售价格同比上涨，化工业务净利润较上年同期实现增长”", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 19.81, "first_limit_up": 1784252374, "break_limit_up_times": 1}, {"code": "600881", "name": "亚泰集团", "price": 1.86, "change_pct": 10.06, "reason": "吉林长春国资委旗下，主营水泥建材、医药、地产等；公司医药集团所属的亚泰制药、龙鑫药业、东北亚药业、亚泰永安堂药业均以生产中成药品种为主", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.42, "first_limit_up": 1784264518, "break_limit_up_times": 0}, {"code": "000899", "name": "赣能股份", "price": 10.7, "change_pct": 9.97, "reason": "实控人为江西国资委旗下的江西投资集团，江西电力资源整合平台", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.91, "first_limit_up": 1784257734, "break_limit_up_times": 0}, {"code": "600095", "name": "湘财股份", "price": 8.69, "change_pct": 10.0, "reason": "公司上半年净利润同比预增217.76%—344.86%，报告期内，国内资本市场稳步上行，市场成交量迭创新高，公司全资子公司湘财证券积极把握市场机会，优化资产配置，其中经纪、信用、投顾等财富管理及自营业务业绩增长显著，带动公司净利润较上年同期实现大幅增长", "plates": ["大金融", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.03, "first_limit_up": 1784255684, "break_limit_up_times": 3}, {"code": "002677", "name": "浙江美大", "price": 7.95, "change_pct": 9.96, "reason": "国内集成灶龙头，实控人将变更为张海政", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 1.24, "first_limit_up": 1784251500, "break_limit_up_times": 0}, {"code": "001388", "name": "信通电子", "price": 24.74, "change_pct": 10.0, "reason": "高送转-公司2025年年度权益分派方案为每10股送红股4.80股并派5.00元现金，股权登记日为2026年7月16日", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 15.3, "first_limit_up": 1784252724, "break_limit_up_times": 7}, {"code": "002432", "name": "九安医疗", "price": 79.2, "change_pct": 10.0, "reason": "公司上半年净利预增204.29%至269.5%，主要系公司在科创投资领域的布局收益显现，报告期内底层标的估值上涨", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.81, "first_limit_up": 1784251500, "break_limit_up_times": 2}, {"code": "003001", "name": "中岩大地", "price": 19.56, "change_pct": 10.01, "reason": "公司拟跨界并购PCB刀具企业深圳市鑫寰宇精工科技", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 5.09, "first_limit_up": 1784251800, "break_limit_up_times": 0}, {"code": "600730", "name": "*ST高科", "price": 8.97, "change_pct": 10.06, "reason": "公司收到法院出具的《民事裁定书》，裁定撤销此前对公司及两家子公司作出的行为保全措施", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.46, "first_limit_up": 1784251500, "break_limit_up_times": 0}, {"code": "001369", "name": "双欣材料", "price": 12.95, "change_pct": 10.03, "reason": "公司的部分特殊型号聚乙烯醇产品已应用于电子玻纤等高附加值领域，PVB树脂产品正在积极推进MLCC行业认证，目前处于认证阶段", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.5, "first_limit_up": 1784269668, "break_limit_up_times": 1}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第二次风险提示性公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》"};