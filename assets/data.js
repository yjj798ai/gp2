const UPDATE_TIME = "2026-07-13 10:20";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": -6.82,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续175天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": -0.1,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -7.21,
    "rate": 0,
    "tag": "",
    "hotTag": "连续246天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": -6.41,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续199天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人工智能",
    "rise": -4.43,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "人形机器人",
    "rise": -6.16,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续410天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": -7.55,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "猪肉",
    "rise": -0.5,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "算力租赁",
    "rise": -4.52,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续110天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "先进封装",
    "rise": -7.15,
    "rate": 0,
    "tag": "",
    "hotTag": "连续39天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "ST板块",
    "rise": -2.89,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光纤概念",
    "rise": -7.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续75天上榜",
    "rankChg": -1,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "AI应用",
    "rise": -4.23,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "芯片概念",
    "rise": -6.11,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "培育钻石",
    "rise": -9.18,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "国家大基金持股",
    "rise": -5.77,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "禽流感",
    "rise": 1.49,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885508"
  },
  {
    "name": "机器人概念",
    "rise": -5.4,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "玻璃基板",
    "rise": -7.63,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "中国AI 50",
    "rise": -2.38,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "人工智能ETF",
    "code": "886102"
  }
];
const THS_EVENTS = [
  {
    "title": "国务院批复同意《中医药振兴发展“十五五”规划》",
    "desc": "",
    "heat": 348643,
    "direction": "中医药",
    "themes": [
      "中药"
    ],
    "stocks": [
      {
        "name": "陇神戎发",
        "code": "300534",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "卫健委明确创新药入基药探索路径",
    "desc": "",
    "heat": 240071,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "万邦医药",
        "code": "301520",
        "chg": 20.008853
      }
    ]
  },
  {
    "title": "长十乙首飞成功 我国首次实现运载火箭可控回收",
    "desc": "",
    "heat": 160561,
    "direction": "商业航天",
    "themes": [
      "火箭发射",
      "卫星测控",
      "卫星通信",
      "卫星遥感",
      "火箭回收"
    ],
    "stocks": [
      {
        "name": "九丰能源",
        "code": "605090",
        "chg": 10.005266
      }
    ]
  },
  {
    "title": "商务部、海关总署：对氦气实施临时禁止出口管理",
    "desc": "",
    "heat": 51819,
    "direction": "氦气",
    "themes": [
      "氦气生产",
      "电子特气"
    ],
    "stocks": [
      {
        "name": "水发燃气",
        "code": "603318",
        "chg": 10.03861
      }
    ]
  },
  {
    "title": "消息称三星电子计划将龙仁首座芯片工厂的投产时间提前至 2029 年",
    "desc": "",
    "heat": 46999,
    "direction": "半导体设备",
    "themes": [
      "半导体设备"
    ],
    "stocks": [
      {
        "name": "C托伦斯",
        "code": "301583",
        "chg": 2.353484
      }
    ]
  },
  {
    "title": "AI热潮太费电燃气轮机价格3年涨了300%",
    "desc": "",
    "heat": 30511,
    "direction": "燃气轮机",
    "themes": [
      "整机研发制造",
      "热端核心零部件",
      "高温合金材料",
      "GE Vernova供应商",
      "Bloom energy供应商"
    ],
    "stocks": [
      {
        "name": "水发燃气",
        "code": "603318",
        "chg": 10.03861
      }
    ]
  },
  {
    "title": "周星驰新作爆火！上映2天破4亿元，《功夫女足》推高暑期档热度",
    "desc": "",
    "heat": 1486,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "奥飞娱乐",
        "code": "002292",
        "chg": -1.162791
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+3.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+2.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保健品",
    "change": "+2.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "长寿药NMN",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中药",
    "change": "+1.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+1.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芬太尼概念",
    "change": "+0.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药商业",
    "change": "+0.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+0.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+0.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+0.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+0.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+0.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "+0.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+0.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+0.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "啤酒",
    "change": "+0.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "健康中国",
    "change": "+0.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "-0.04%",
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
    "hot_rank": 2,
    "hot_rank_chg": 5,
    "stock_cnt": 5845,
    "price": "6.83",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "241557530000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -7.61
      },
      {
        "name": "手机产业链",
        "change_pct": -7.17
      },
      {
        "name": "超高清视频",
        "change_pct": -5.17
      },
      {
        "name": "苹果产业链",
        "change_pct": -7.01
      },
      {
        "name": "电竞",
        "change_pct": -5.24
      },
      {
        "name": "半导体",
        "change_pct": -5.84
      },
      {
        "name": "人工智能",
        "change_pct": -4.58
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.84
      },
      {
        "name": "VR&AR",
        "change_pct": -6.57
      },
      {
        "name": "OLED",
        "change_pct": -6.4
      },
      {
        "name": "京津冀",
        "change_pct": -3.3
      },
      {
        "name": "物联网",
        "change_pct": -4.58
      },
      {
        "name": "指纹识别",
        "change_pct": -7.3
      },
      {
        "name": "汽车零部件",
        "change_pct": -5.13
      },
      {
        "name": "白马股",
        "change_pct": -1.24
      },
      {
        "name": "智能制造",
        "change_pct": -5.31
      },
      {
        "name": "小米概念股",
        "change_pct": -6.28
      },
      {
        "name": "国产芯片",
        "change_pct": -5.88
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.56
      },
      {
        "name": "全息概念",
        "change_pct": -5.92
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -5.23
      },
      {
        "name": "MicroLED",
        "change_pct": -7.53
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -6.83
      },
      {
        "name": "智能手表",
        "change_pct": -6.58
      },
      {
        "name": "MiniLED",
        "change_pct": -7.18
      },
      {
        "name": "传感器",
        "change_pct": -6.6
      },
      {
        "name": "大硅片",
        "change_pct": -5.17
      },
      {
        "name": "AI PC",
        "change_pct": -7.33
      },
      {
        "name": "华为产业链",
        "change_pct": -5.7
      },
      {
        "name": "回购",
        "change_pct": -3.1
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -6.75
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -7.13
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 22,
    "hot_rank_chg": -21,
    "stock_cnt": 5845,
    "price": "8.00",
    "change": "-6.32",
    "market_id": "33",
    "circulate_market_value": "13005550200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.37
      },
      {
        "name": "电竞",
        "change_pct": -5.24
      },
      {
        "name": "手游",
        "change_pct": -5.07
      },
      {
        "name": "强势人气股",
        "change_pct": -4.61
      },
      {
        "name": "人工智能",
        "change_pct": -4.58
      },
      {
        "name": "游戏",
        "change_pct": -5.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -4.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": -4.49
      },
      {
        "name": "快手概念股",
        "change_pct": -4.96
      },
      {
        "name": "元宇宙",
        "change_pct": -5.28
      },
      {
        "name": "虚拟数字人",
        "change_pct": -5.13
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.74
      },
      {
        "name": "web3.0",
        "change_pct": -5.32
      },
      {
        "name": "AIGC概念",
        "change_pct": -5.18
      },
      {
        "name": "数据要素",
        "change_pct": -4.45
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -5.04
      },
      {
        "name": "AI营销",
        "change_pct": -5.19
      },
      {
        "name": "ChatGPT",
        "change_pct": -5.07
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -6.75
      },
      {
        "name": "人工智能大模型",
        "change_pct": -4.11
      },
      {
        "name": "人形机器人",
        "change_pct": -6.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.71
      },
      {
        "name": "多模态",
        "change_pct": -5.28
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -5.86
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -4.3
      },
      {
        "name": "小红书概念股",
        "change_pct": -5.37
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 26,
    "hot_rank_chg": 29,
    "stock_cnt": 5845,
    "price": "5.98",
    "change": "-9.94",
    "market_id": "17",
    "circulate_market_value": "74128613000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -3.47
      },
      {
        "name": "核电",
        "change_pct": -5.16
      },
      {
        "name": "强势人气股",
        "change_pct": -4.61
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.36
      },
      {
        "name": "水电",
        "change_pct": -1.61
      },
      {
        "name": "火电",
        "change_pct": -2.15
      },
      {
        "name": "光伏",
        "change_pct": -5.97
      },
      {
        "name": "风电",
        "change_pct": -5.11
      },
      {
        "name": "国企改革",
        "change_pct": -2.95
      },
      {
        "name": "算电协同",
        "change_pct": -5.38
      }
    ]
  },
  {
    "code": "603313",
    "name": "梦百合",
    "hot_rank": 28,
    "hot_rank_chg": 304,
    "stock_cnt": 5845,
    "price": "7.99",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "4558989200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "智能家居",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.37
      },
      {
        "name": "家具家居",
        "change_pct": -3.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "C2M",
        "change_pct": -3.45
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 38,
    "hot_rank_chg": 223,
    "stock_cnt": 5845,
    "price": "7.38",
    "change": "8.05",
    "market_id": "17",
    "circulate_market_value": "34058395000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -5.17
      },
      {
        "name": "国产软件",
        "change_pct": -4.21
      },
      {
        "name": "锂电池",
        "change_pct": -5.91
      },
      {
        "name": "人工智能",
        "change_pct": -4.58
      },
      {
        "name": "养老产业",
        "change_pct": -2.08
      },
      {
        "name": "大飞机",
        "change_pct": -7.1
      },
      {
        "name": "军民融合",
        "change_pct": -6.97
      },
      {
        "name": "物联网",
        "change_pct": -4.58
      },
      {
        "name": "大数据",
        "change_pct": -4.29
      },
      {
        "name": "智慧城市",
        "change_pct": -4.86
      },
      {
        "name": "军工",
        "change_pct": -6.67
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.33
      },
      {
        "name": "机器人",
        "change_pct": -5.85
      },
      {
        "name": "黑色家电",
        "change_pct": -4.2
      },
      {
        "name": "家电",
        "change_pct": -3.82
      },
      {
        "name": "储能",
        "change_pct": -4.94
      },
      {
        "name": "智能制造",
        "change_pct": -5.31
      },
      {
        "name": "工业互联网",
        "change_pct": -4.69
      },
      {
        "name": "数字经济",
        "change_pct": -4.38
      },
      {
        "name": "百度概念股",
        "change_pct": -4.69
      },
      {
        "name": "NFT",
        "change_pct": -4.12
      },
      {
        "name": "跨境支付",
        "change_pct": -3.78
      },
      {
        "name": "华为海思",
        "change_pct": -5.19
      },
      {
        "name": "云游戏",
        "change_pct": -5.78
      },
      {
        "name": "网红/MCN",
        "change_pct": -4.32
      },
      {
        "name": "华为产业链",
        "change_pct": -5.7
      },
      {
        "name": "毫米波雷达",
        "change_pct": -7.01
      },
      {
        "name": "服务器",
        "change_pct": -4.46
      },
      {
        "name": "星闪概念",
        "change_pct": -5.08
      },
      {
        "name": "低空经济",
        "change_pct": -5.86
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 39,
    "hot_rank_chg": 15,
    "stock_cnt": 5845,
    "price": "3.71",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "9343671600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.37
      },
      {
        "name": "工业大麻",
        "change_pct": -1.22
      },
      {
        "name": "中药",
        "change_pct": 1.17
      },
      {
        "name": "保健品",
        "change_pct": 2.05
      },
      {
        "name": "医药",
        "change_pct": -0.04
      },
      {
        "name": "化学原料药",
        "change_pct": -0.49
      },
      {
        "name": "流感",
        "change_pct": -0.06
      },
      {
        "name": "振兴东北",
        "change_pct": -1.82
      },
      {
        "name": "食品",
        "change_pct": -0.08
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 41,
    "hot_rank_chg": 128,
    "stock_cnt": 5845,
    "price": "6.07",
    "change": "8.78",
    "market_id": "17",
    "circulate_market_value": "6627752100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": -0.04
      },
      {
        "name": "化学原料药",
        "change_pct": -0.49
      },
      {
        "name": "数字经济",
        "change_pct": -4.38
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.34
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.11
      }
    ]
  },
  {
    "code": "600992",
    "name": "贵绳股份",
    "hot_rank": 48,
    "hot_rank_chg": -14,
    "stock_cnt": 5845,
    "price": "11.72",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "2872454800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "航母",
        "change_pct": -6.69
      },
      {
        "name": "军工",
        "change_pct": -6.67
      },
      {
        "name": "航天",
        "change_pct": -7.69
      },
      {
        "name": "国企改革",
        "change_pct": -2.95
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 51,
    "hot_rank_chg": 117,
    "stock_cnt": 5845,
    "price": "11.05",
    "change": "1.19",
    "market_id": "17",
    "circulate_market_value": "19769978000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.71
      },
      {
        "name": "纯碱",
        "change_pct": -1.93
      },
      {
        "name": "食品",
        "change_pct": -0.08
      },
      {
        "name": "土壤修复",
        "change_pct": -4.38
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.74
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -3.55
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -4.31
      }
    ]
  },
  {
    "code": "000989",
    "name": "九芝堂",
    "hot_rank": 56,
    "hot_rank_chg": 1033,
    "stock_cnt": 5845,
    "price": "8.98",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "6233500700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.17
      },
      {
        "name": "创新药",
        "change_pct": -0.05
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.84
      },
      {
        "name": "医药",
        "change_pct": -0.04
      },
      {
        "name": "干细胞",
        "change_pct": -1.88
      }
    ]
  },
  {
    "code": "601608",
    "name": "中信重工",
    "hot_rank": 63,
    "hot_rank_chg": 9,
    "stock_cnt": 5845,
    "price": "5.54",
    "change": "9.92",
    "market_id": "17",
    "circulate_market_value": "25370726000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -5.16
      },
      {
        "name": "一带一路",
        "change_pct": -3.23
      },
      {
        "name": "海工装备",
        "change_pct": -4.95
      },
      {
        "name": "工业自动化",
        "change_pct": -5.84
      },
      {
        "name": "机械",
        "change_pct": -4.27
      },
      {
        "name": "军民融合",
        "change_pct": -6.97
      },
      {
        "name": "水利",
        "change_pct": -4.03
      },
      {
        "name": "风电",
        "change_pct": -5.11
      },
      {
        "name": "军工",
        "change_pct": -6.67
      },
      {
        "name": "机器人",
        "change_pct": -5.85
      },
      {
        "name": "智能制造",
        "change_pct": -5.31
      },
      {
        "name": "工业互联网",
        "change_pct": -4.69
      },
      {
        "name": "大基建",
        "change_pct": -2.01
      },
      {
        "name": "一体化压铸",
        "change_pct": -5.5
      },
      {
        "name": "航天",
        "change_pct": -7.69
      },
      {
        "name": "煤矿安全",
        "change_pct": -3.17
      },
      {
        "name": "深地经济",
        "change_pct": -2.28
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 74,
    "hot_rank_chg": 133,
    "stock_cnt": 5845,
    "price": "8.26",
    "change": "7.55",
    "market_id": "33",
    "circulate_market_value": "4474623700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -2.29
      },
      {
        "name": "油气管网",
        "change_pct": -1.21
      },
      {
        "name": "海工装备",
        "change_pct": -4.95
      },
      {
        "name": "举牌",
        "change_pct": -2.22
      },
      {
        "name": "天然气",
        "change_pct": -1.55
      },
      {
        "name": "山东国企改革",
        "change_pct": -2.39
      },
      {
        "name": "风电",
        "change_pct": -5.11
      },
      {
        "name": "页岩气",
        "change_pct": -2.57
      },
      {
        "name": "国企改革",
        "change_pct": -2.95
      },
      {
        "name": "深地经济",
        "change_pct": -2.28
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 83,
    "hot_rank_chg": 312,
    "stock_cnt": 5845,
    "price": "9.48",
    "change": "7.00",
    "market_id": "33",
    "circulate_market_value": "5528838200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -2.29
      },
      {
        "name": "一带一路",
        "change_pct": -3.23
      },
      {
        "name": "天然气",
        "change_pct": -1.55
      },
      {
        "name": "油气改革",
        "change_pct": -1.32
      },
      {
        "name": "页岩气",
        "change_pct": -2.57
      },
      {
        "name": "深地经济",
        "change_pct": -2.28
      }
    ]
  },
  {
    "code": "002115",
    "name": "三维通信",
    "hot_rank": 84,
    "hot_rank_chg": -35,
    "stock_cnt": 5845,
    "price": "11.60",
    "change": "5.94",
    "market_id": "33",
    "circulate_market_value": "8656688000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -2.11
      },
      {
        "name": "手游",
        "change_pct": -5.07
      },
      {
        "name": "5G",
        "change_pct": -6.26
      },
      {
        "name": "人工智能",
        "change_pct": -4.58
      },
      {
        "name": "物联网",
        "change_pct": -4.58
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -4.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": -4.49
      },
      {
        "name": "快手概念股",
        "change_pct": -4.96
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -5.04
      },
      {
        "name": "知识付费",
        "change_pct": -2.18
      },
      {
        "name": "卫星互联网",
        "change_pct": -7.56
      },
      {
        "name": "华为产业链",
        "change_pct": -5.7
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.71
      },
      {
        "name": "小红书概念股",
        "change_pct": -5.37
      },
      {
        "name": "海洋经济",
        "change_pct": -5.51
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 87,
    "hot_rank_chg": 201,
    "stock_cnt": 5845,
    "price": "8.55",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "3925056400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "氦气",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": -5.54
      },
      {
        "name": "电子特气",
        "change_pct": -2.99
      },
      {
        "name": "一带一路",
        "change_pct": -3.23
      },
      {
        "name": "强势人气股",
        "change_pct": -4.61
      },
      {
        "name": "天然气",
        "change_pct": -1.55
      },
      {
        "name": "山东国企改革",
        "change_pct": -2.39
      },
      {
        "name": "国企改革",
        "change_pct": -2.95
      },
      {
        "name": "氦气",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 93,
    "hot_rank_chg": 4,
    "stock_cnt": 5845,
    "price": "4.81",
    "change": "-6.05",
    "market_id": "33",
    "circulate_market_value": "96769150000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -7.61
      },
      {
        "name": "手机产业链",
        "change_pct": -7.17
      },
      {
        "name": "超高清视频",
        "change_pct": -5.17
      },
      {
        "name": "电竞",
        "change_pct": -5.24
      },
      {
        "name": "半导体",
        "change_pct": -5.84
      },
      {
        "name": "OLED",
        "change_pct": -6.4
      },
      {
        "name": "光伏",
        "change_pct": -5.97
      },
      {
        "name": "黑色家电",
        "change_pct": -4.2
      },
      {
        "name": "家电",
        "change_pct": -3.82
      },
      {
        "name": "智能制造",
        "change_pct": -5.31
      },
      {
        "name": "工业互联网",
        "change_pct": -4.69
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -6.28
      },
      {
        "name": "国产芯片",
        "change_pct": -5.88
      },
      {
        "name": "腾讯概念股",
        "change_pct": -4.49
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.56
      },
      {
        "name": "MicroLED",
        "change_pct": -7.53
      },
      {
        "name": "MiniLED",
        "change_pct": -7.18
      },
      {
        "name": "华为产业链",
        "change_pct": -5.7
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -7.13
      }
    ]
  },
  {
    "code": "300534",
    "name": "陇神戎发",
    "hot_rank": 94,
    "hot_rank_chg": 3068,
    "stock_cnt": 5845,
    "price": "9.00",
    "change": "20.00",
    "market_id": "33",
    "circulate_market_value": "2718463400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.17
      },
      {
        "name": "保健品",
        "change_pct": 2.05
      },
      {
        "name": "医药",
        "change_pct": -0.04
      },
      {
        "name": "化学原料药",
        "change_pct": -0.49
      },
      {
        "name": "食品",
        "change_pct": -0.08
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.31
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5845, "price": "24.13", "change": "-4.66", "market_id": "33", "circulate_market_value": "80175587000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5845, "price": "6.83", "change": "-10.01", "market_id": "33", "circulate_market_value": "241557530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -7.61}, {"name": "手机产业链", "change_pct": -7.17}, {"name": "超高清视频", "change_pct": -5.17}, {"name": "苹果产业链", "change_pct": -7.01}, {"name": "电竞", "change_pct": -5.24}, {"name": "半导体", "change_pct": -5.84}, {"name": "人工智能", "change_pct": -4.58}, {"name": "互联网医疗", "change_pct": -1.84}, {"name": "VR&AR", "change_pct": -6.57}, {"name": "OLED", "change_pct": -6.4}, {"name": "京津冀", "change_pct": -3.3}, {"name": "物联网", "change_pct": -4.58}, {"name": "指纹识别", "change_pct": -7.3}, {"name": "汽车零部件", "change_pct": -5.13}, {"name": "白马股", "change_pct": -1.24}, {"name": "智能制造", "change_pct": -5.31}, {"name": "小米概念股", "change_pct": -6.28}, {"name": "国产芯片", "change_pct": -5.88}, {"name": "液晶面板/LCD", "change_pct": -6.56}, {"name": "全息概念", "change_pct": -5.92}, {"name": "理想汽车概念股", "change_pct": -5.23}, {"name": "MicroLED", "change_pct": -7.53}, {"name": "钙钛矿电池", "change_pct": -6.83}, {"name": "智能手表", "change_pct": -6.58}, {"name": "MiniLED", "change_pct": -7.18}, {"name": "传感器", "change_pct": -6.6}, {"name": "大硅片", "change_pct": -5.17}, {"name": "AI PC", "change_pct": -7.33}, {"name": "华为产业链", "change_pct": -5.7}, {"name": "回购", "change_pct": -3.1}, {"name": "智能眼镜/MR头显", "change_pct": -6.75}, {"name": "玻璃基板封装", "change_pct": -7.13}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 3, "hot_rank_chg": 26, "stock_cnt": 5845, "price": "70.01", "change": "-10.00", "market_id": "17", "circulate_market_value": "171779770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5845, "price": "38.40", "change": "-0.03", "market_id": "33", "circulate_market_value": "109826791000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": 6, "stock_cnt": 5845, "price": "99.05", "change": "-2.04", "market_id": "17", "circulate_market_value": "177241510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": 6, "stock_cnt": 5845, "price": "550.80", "change": "-10.00", "market_id": "17", "circulate_market_value": "368205360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 7, "hot_rank_chg": 24, "stock_cnt": 5845, "price": "33.00", "change": "6.87", "market_id": "17", "circulate_market_value": "11118358400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5845, "price": "91.26", "change": "1.38", "market_id": "17", "circulate_market_value": "107913958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 9, "hot_rank_chg": 113, "stock_cnt": 5845, "price": "124.66", "change": "-3.69", "market_id": "33", "circulate_market_value": "239697560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 10, "hot_rank_chg": 99, "stock_cnt": 5845, "price": "20.88", "change": "7.46", "market_id": "33", "circulate_market_value": "16768149000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603949", "name": "雪龙集团", "hot_rank": 11, "hot_rank_chg": 1494, "stock_cnt": 5845, "price": "16.99", "change": "-10.01", "market_id": "17", "circulate_market_value": "3571387600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 12, "hot_rank_chg": 35, "stock_cnt": 5845, "price": "73.57", "change": "3.69", "market_id": "33", "circulate_market_value": "111638960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 13, "hot_rank_chg": 3, "stock_cnt": 5845, "price": "1108.00", "change": "1.28", "market_id": "33", "circulate_market_value": "1229813270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 14, "hot_rank_chg": 1, "stock_cnt": 5845, "price": "52.12", "change": "-10.00", "market_id": "33", "circulate_market_value": "82044989000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 15, "hot_rank_chg": 6, "stock_cnt": 5845, "price": "22.73", "change": "-10.02", "market_id": "17", "circulate_market_value": "47540754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 16, "hot_rank_chg": -8, "stock_cnt": 5845, "price": "85.49", "change": "-4.50", "market_id": "33", "circulate_market_value": "125399451000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 17, "hot_rank_chg": 13, "stock_cnt": 5845, "price": "236.70", "change": "-2.31", "market_id": "33", "circulate_market_value": "328142350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 18, "hot_rank_chg": 33, "stock_cnt": 5845, "price": "29.43", "change": "10.02", "market_id": "17", "circulate_market_value": "5383728000.00", "change_type": "1", "change_section": "9", "change_days": "8", "change_reason": "拟收购存储公司"}, {"code": "300475", "name": "香农芯创", "hot_rank": 19, "hot_rank_chg": 72, "stock_cnt": 5845, "price": "216.80", "change": "-20.00", "market_id": "33", "circulate_market_value": "97567754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601127", "name": "赛力斯", "hot_rank": 20, "hot_rank_chg": -17, "stock_cnt": 5845, "price": "53.91", "change": "-10.00", "market_id": "17", "circulate_market_value": "83948835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600129", "name": "太极集团", "hot_rank": 21, "hot_rank_chg": 45, "stock_cnt": 5845, "price": "17.94", "change": "8.20", "market_id": "17", "circulate_market_value": "9892442200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 22, "hot_rank_chg": -21, "stock_cnt": 5845, "price": "8.00", "change": "-6.32", "market_id": "33", "circulate_market_value": "13005550200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.37}, {"name": "电竞", "change_pct": -5.24}, {"name": "手游", "change_pct": -5.07}, {"name": "强势人气股", "change_pct": -4.61}, {"name": "人工智能", "change_pct": -4.58}, {"name": "游戏", "change_pct": -5.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -4.38}, {"name": "腾讯概念股", "change_pct": -4.49}, {"name": "快手概念股", "change_pct": -4.96}, {"name": "元宇宙", "change_pct": -5.28}, {"name": "虚拟数字人", "change_pct": -5.13}, {"name": "东数西算/算力", "change_pct": -4.74}, {"name": "web3.0", "change_pct": -5.32}, {"name": "AIGC概念", "change_pct": -5.18}, {"name": "数据要素", "change_pct": -4.45}, {"name": "字节跳动概念股", "change_pct": -5.04}, {"name": "AI营销", "change_pct": -5.19}, {"name": "ChatGPT", "change_pct": -5.07}, {"name": "智能眼镜/MR头显", "change_pct": -6.75}, {"name": "人工智能大模型", "change_pct": -4.11}, {"name": "人形机器人", "change_pct": -6.52}, {"name": "短剧/互动影游", "change_pct": -5.71}, {"name": "多模态", "change_pct": -5.28}, {"name": "Sora/AI视频", "change_pct": -5.86}, {"name": "IP经济/谷子经济", "change_pct": -4.3}, {"name": "小红书概念股", "change_pct": -5.37}]}, {"code": "600522", "name": "中天科技", "hot_rank": 23, "hot_rank_chg": 15, "stock_cnt": 5845, "price": "41.32", "change": "-10.00", "market_id": "17", "circulate_market_value": "141023080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 24, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "36.99", "change": "-10.00", "market_id": "33", "circulate_market_value": "39903604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600536", "name": "中国软件", "hot_rank": 25, "hot_rank_chg": 722, "stock_cnt": 5845, "price": "32.25", "change": "9.99", "market_id": "17", "circulate_market_value": "27207903000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "信创"}, {"code": "601991", "name": "大唐发电", "hot_rank": 26, "hot_rank_chg": 29, "stock_cnt": 5845, "price": "5.98", "change": "-9.94", "market_id": "17", "circulate_market_value": "74128613000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -3.47}, {"name": "核电", "change_pct": -5.16}, {"name": "强势人气股", "change_pct": -4.61}, {"name": "电力体制改革", "change_pct": -2.36}, {"name": "水电", "change_pct": -1.61}, {"name": "火电", "change_pct": -2.15}, {"name": "光伏", "change_pct": -5.97}, {"name": "风电", "change_pct": -5.11}, {"name": "国企改革", "change_pct": -2.95}, {"name": "算电协同", "change_pct": -5.38}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 27, "hot_rank_chg": -4, "stock_cnt": 5845, "price": "33.00", "change": "2.87", "market_id": "33", "circulate_market_value": "37821481000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603313", "name": "梦百合", "hot_rank": 28, "hot_rank_chg": 304, "stock_cnt": 5845, "price": "7.99", "change": "10.05", "market_id": "17", "circulate_market_value": "4558989200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "智能家居", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.37}, {"name": "家具家居", "change_pct": -3.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "C2M", "change_pct": -3.45}]}, {"code": "002317", "name": "众生药业", "hot_rank": 29, "hot_rank_chg": 10, "stock_cnt": 5845, "price": "31.60", "change": "6.97", "market_id": "33", "circulate_market_value": "24067110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 30, "hot_rank_chg": 18, "stock_cnt": 5845, "price": "28.99", "change": "5.53", "market_id": "33", "circulate_market_value": "21957464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 31, "hot_rank_chg": 101, "stock_cnt": 5845, "price": "17.88", "change": "9.63", "market_id": "33", "circulate_market_value": "12379388300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605090", "name": "九丰能源", "hot_rank": 32, "hot_rank_chg": -23, "stock_cnt": 5845, "price": "41.78", "change": "10.01", "market_id": "17", "circulate_market_value": "29435137000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "氦气"}, {"code": "603019", "name": "中科曙光", "hot_rank": 33, "hot_rank_chg": -27, "stock_cnt": 5845, "price": "106.13", "change": "-1.27", "market_id": "17", "circulate_market_value": "155273960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 34, "hot_rank_chg": -14, "stock_cnt": 5845, "price": "54.00", "change": "-10.00", "market_id": "17", "circulate_market_value": "45713880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 35, "hot_rank_chg": -8, "stock_cnt": 5845, "price": "17.02", "change": "1.37", "market_id": "17", "circulate_market_value": "16344226000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 36, "hot_rank_chg": 67, "stock_cnt": 5845, "price": "13.06", "change": "-9.93", "market_id": "33", "circulate_market_value": "13874994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 37, "hot_rank_chg": -18, "stock_cnt": 5845, "price": "38.50", "change": "-10.01", "market_id": "33", "circulate_market_value": "30122578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 38, "hot_rank_chg": 223, "stock_cnt": 5845, "price": "7.38", "change": "8.05", "market_id": "17", "circulate_market_value": "34058395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -5.17}, {"name": "国产软件", "change_pct": -4.21}, {"name": "锂电池", "change_pct": -5.91}, {"name": "人工智能", "change_pct": -4.58}, {"name": "养老产业", "change_pct": -2.08}, {"name": "大飞机", "change_pct": -7.1}, {"name": "军民融合", "change_pct": -6.97}, {"name": "物联网", "change_pct": -4.58}, {"name": "大数据", "change_pct": -4.29}, {"name": "智慧城市", "change_pct": -4.86}, {"name": "军工", "change_pct": -6.67}, {"name": "新能源汽车", "change_pct": -5.33}, {"name": "机器人", "change_pct": -5.85}, {"name": "黑色家电", "change_pct": -4.2}, {"name": "家电", "change_pct": -3.82}, {"name": "储能", "change_pct": -4.94}, {"name": "智能制造", "change_pct": -5.31}, {"name": "工业互联网", "change_pct": -4.69}, {"name": "数字经济", "change_pct": -4.38}, {"name": "百度概念股", "change_pct": -4.69}, {"name": "NFT", "change_pct": -4.12}, {"name": "跨境支付", "change_pct": -3.78}, {"name": "华为海思", "change_pct": -5.19}, {"name": "云游戏", "change_pct": -5.78}, {"name": "网红/MCN", "change_pct": -4.32}, {"name": "华为产业链", "change_pct": -5.7}, {"name": "毫米波雷达", "change_pct": -7.01}, {"name": "服务器", "change_pct": -4.46}, {"name": "星闪概念", "change_pct": -5.08}, {"name": "低空经济", "change_pct": -5.86}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 39, "hot_rank_chg": 15, "stock_cnt": 5845, "price": "3.71", "change": "10.09", "market_id": "17", "circulate_market_value": "9343671600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.37}, {"name": "工业大麻", "change_pct": -1.22}, {"name": "中药", "change_pct": 1.17}, {"name": "保健品", "change_pct": 2.05}, {"name": "医药", "change_pct": -0.04}, {"name": "化学原料药", "change_pct": -0.49}, {"name": "流感", "change_pct": -0.06}, {"name": "振兴东北", "change_pct": -1.82}, {"name": "食品", "change_pct": -0.08}]}, {"code": "301520", "name": "万邦医药", "hot_rank": 40, "hot_rank_chg": 117, "stock_cnt": 5845, "price": "54.22", "change": "20.01", "market_id": "33", "circulate_market_value": "1772909600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 41, "hot_rank_chg": 128, "stock_cnt": 5845, "price": "6.07", "change": "8.78", "market_id": "17", "circulate_market_value": "6627752100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": -0.04}, {"name": "化学原料药", "change_pct": -0.49}, {"name": "数字经济", "change_pct": -4.38}, {"name": "辅助生殖", "change_pct": -1.34}, {"name": "新冠病毒防治", "change_pct": -2.11}]}, {"code": "002674", "name": "兴业科技", "hot_rank": 42, "hot_rank_chg": 74, "stock_cnt": 5845, "price": "32.96", "change": "7.01", "market_id": "33", "circulate_market_value": "9642898000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 43, "hot_rank_chg": -15, "stock_cnt": 5845, "price": "18.05", "change": "-7.20", "market_id": "33", "circulate_market_value": "58221897000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 44, "hot_rank_chg": -27, "stock_cnt": 5845, "price": "40.04", "change": "-1.21", "market_id": "33", "circulate_market_value": "161265950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 45, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "108.15", "change": "-7.25", "market_id": "17", "circulate_market_value": "39012236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 46, "hot_rank_chg": 169, "stock_cnt": 5845, "price": "21.40", "change": "10.03", "market_id": "17", "circulate_market_value": "8965906000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟衬底"}, {"code": "000636", "name": "风华高科", "hot_rank": 47, "hot_rank_chg": -14, "stock_cnt": 5845, "price": "54.01", "change": "-10.00", "market_id": "33", "circulate_market_value": "62490278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600992", "name": "贵绳股份", "hot_rank": 48, "hot_rank_chg": -14, "stock_cnt": 5845, "price": "11.72", "change": "10.05", "market_id": "17", "circulate_market_value": "2872454800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "商业航天", "xgb_concepts": [{"name": "航母", "change_pct": -6.69}, {"name": "军工", "change_pct": -6.67}, {"name": "航天", "change_pct": -7.69}, {"name": "国企改革", "change_pct": -2.95}]}, {"code": "603118", "name": "共进股份", "hot_rank": 49, "hot_rank_chg": 9, "stock_cnt": 5845, "price": "14.80", "change": "4.22", "market_id": "17", "circulate_market_value": "11651690800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600150", "name": "中国船舶", "hot_rank": 50, "hot_rank_chg": 111, "stock_cnt": 5845, "price": "34.21", "change": "-7.64", "market_id": "17", "circulate_market_value": "257451500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 51, "hot_rank_chg": 117, "stock_cnt": 5845, "price": "11.05", "change": "1.19", "market_id": "17", "circulate_market_value": "19769978000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.71}, {"name": "纯碱", "change_pct": -1.93}, {"name": "食品", "change_pct": -0.08}, {"name": "土壤修复", "change_pct": -4.38}, {"name": "东数西算/算力", "change_pct": -4.74}, {"name": "OpenClaw概念", "change_pct": -3.55}, {"name": "DeepSeek概念股", "change_pct": -4.31}]}, {"code": "605358", "name": "立昂微", "hot_rank": 52, "hot_rank_chg": 118, "stock_cnt": 5845, "price": "57.40", "change": "-5.99", "market_id": "17", "circulate_market_value": "44324244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 53, "hot_rank_chg": -39, "stock_cnt": 5845, "price": "21.36", "change": "-8.29", "market_id": "17", "circulate_market_value": "70473034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300065", "name": "海兰信", "hot_rank": 54, "hot_rank_chg": -41, "stock_cnt": 5845, "price": "25.64", "change": "-10.94", "market_id": "33", "circulate_market_value": "16842790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 55, "hot_rank_chg": -29, "stock_cnt": 5845, "price": "15.30", "change": "-10.00", "market_id": "17", "circulate_market_value": "19526713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000989", "name": "九芝堂", "hot_rank": 56, "hot_rank_chg": 1033, "stock_cnt": 5845, "price": "8.98", "change": "10.05", "market_id": "33", "circulate_market_value": "6233500700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增", "xgb_concepts": [{"name": "中药", "change_pct": 1.17}, {"name": "创新药", "change_pct": -0.05}, {"name": "互联网医疗", "change_pct": -1.84}, {"name": "医药", "change_pct": -0.04}, {"name": "干细胞", "change_pct": -1.88}]}, {"code": "003020", "name": "立方制药", "hot_rank": 58, "hot_rank_chg": 24, "stock_cnt": 5845, "price": "20.61", "change": "9.98", "market_id": "33", "circulate_market_value": "3473779500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "基药目录新增"}, {"code": "001309", "name": "德明利", "hot_rank": 59, "hot_rank_chg": 36, "stock_cnt": 5845, "price": "719.98", "change": "-10.00", "market_id": "33", "circulate_market_value": "118845666000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002916", "name": "深南电路", "hot_rank": 62, "hot_rank_chg": 307, "stock_cnt": 5845, "price": "393.59", "change": "-7.61", "market_id": "33", "circulate_market_value": "261662350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601608", "name": "中信重工", "hot_rank": 63, "hot_rank_chg": 9, "stock_cnt": 5845, "price": "5.54", "change": "9.92", "market_id": "17", "circulate_market_value": "25370726000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天", "xgb_concepts": [{"name": "核电", "change_pct": -5.16}, {"name": "一带一路", "change_pct": -3.23}, {"name": "海工装备", "change_pct": -4.95}, {"name": "工业自动化", "change_pct": -5.84}, {"name": "机械", "change_pct": -4.27}, {"name": "军民融合", "change_pct": -6.97}, {"name": "水利", "change_pct": -4.03}, {"name": "风电", "change_pct": -5.11}, {"name": "军工", "change_pct": -6.67}, {"name": "机器人", "change_pct": -5.85}, {"name": "智能制造", "change_pct": -5.31}, {"name": "工业互联网", "change_pct": -4.69}, {"name": "大基建", "change_pct": -2.01}, {"name": "一体化压铸", "change_pct": -5.5}, {"name": "航天", "change_pct": -7.69}, {"name": "煤矿安全", "change_pct": -3.17}, {"name": "深地经济", "change_pct": -2.28}]}, {"code": "601138", "name": "工业富联", "hot_rank": 64, "hot_rank_chg": -18, "stock_cnt": 5845, "price": "63.08", "change": "-4.81", "market_id": "17", "circulate_market_value": "1251765340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 65, "hot_rank_chg": 59, "stock_cnt": 5845, "price": "522.04", "change": "-11.16", "market_id": "33", "circulate_market_value": "147137960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000920", "name": "沃顿科技", "hot_rank": 66, "hot_rank_chg": 78, "stock_cnt": 5845, "price": "14.03", "change": "10.04", "market_id": "33", "circulate_market_value": "6630558600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体超纯水膜"}, {"code": "300821", "name": "东岳硅材", "hot_rank": 67, "hot_rank_chg": 43, "stock_cnt": 5845, "price": "21.92", "change": "-18.69", "market_id": "33", "circulate_market_value": "26299413000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600756", "name": "浪潮软件", "hot_rank": 68, "hot_rank_chg": 434, "stock_cnt": 5845, "price": "14.85", "change": "6.76", "market_id": "17", "circulate_market_value": "4812866500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 69, "hot_rank_chg": 11, "stock_cnt": 5845, "price": "50.13", "change": "-10.00", "market_id": "17", "circulate_market_value": "199095660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 70, "hot_rank_chg": 102, "stock_cnt": 5845, "price": "134.45", "change": "-10.00", "market_id": "17", "circulate_market_value": "321940730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 71, "hot_rank_chg": 70, "stock_cnt": 5845, "price": "512.50", "change": "-2.02", "market_id": "33", "circulate_market_value": "642799620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 72, "hot_rank_chg": 7, "stock_cnt": 5845, "price": "216.00", "change": "-7.47", "market_id": "33", "circulate_market_value": "168587640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 73, "hot_rank_chg": -48, "stock_cnt": 5845, "price": "20.27", "change": "-9.35", "market_id": "33", "circulate_market_value": "68178248000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 74, "hot_rank_chg": 133, "stock_cnt": 5845, "price": "8.26", "change": "7.55", "market_id": "33", "circulate_market_value": "4474623700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -2.29}, {"name": "油气管网", "change_pct": -1.21}, {"name": "海工装备", "change_pct": -4.95}, {"name": "举牌", "change_pct": -2.22}, {"name": "天然气", "change_pct": -1.55}, {"name": "山东国企改革", "change_pct": -2.39}, {"name": "风电", "change_pct": -5.11}, {"name": "页岩气", "change_pct": -2.57}, {"name": "国企改革", "change_pct": -2.95}, {"name": "深地经济", "change_pct": -2.28}]}, {"code": "000988", "name": "华工科技", "hot_rank": 75, "hot_rank_chg": 2, "stock_cnt": 5845, "price": "154.24", "change": "-2.42", "market_id": "33", "circulate_market_value": "155008990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 76, "hot_rank_chg": -44, "stock_cnt": 5845, "price": "16.92", "change": "-10.00", "market_id": "17", "circulate_market_value": "5764711700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 77, "hot_rank_chg": -1, "stock_cnt": 5845, "price": "37.19", "change": "-7.16", "market_id": "33", "circulate_market_value": "56120120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 78, "hot_rank_chg": -10, "stock_cnt": 5845, "price": "28.42", "change": "1.39", "market_id": "17", "circulate_market_value": "695386750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 79, "hot_rank_chg": -35, "stock_cnt": 5845, "price": "221.80", "change": "2.35", "market_id": "33", "circulate_market_value": "6838398500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 80, "hot_rank_chg": 67, "stock_cnt": 5845, "price": "381.87", "change": "-7.99", "market_id": "17", "circulate_market_value": "155168410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600513", "name": "联环药业", "hot_rank": 81, "hot_rank_chg": 218, "stock_cnt": 5845, "price": "17.04", "change": "10.01", "market_id": "17", "circulate_market_value": "4864174800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "创新药"}, {"code": "000657", "name": "中钨高新", "hot_rank": 82, "hot_rank_chg": 138, "stock_cnt": 5845, "price": "69.36", "change": "-7.16", "market_id": "33", "circulate_market_value": "100774902000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 83, "hot_rank_chg": 312, "stock_cnt": 5845, "price": "9.48", "change": "7.00", "market_id": "33", "circulate_market_value": "5528838200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -2.29}, {"name": "一带一路", "change_pct": -3.23}, {"name": "天然气", "change_pct": -1.55}, {"name": "油气改革", "change_pct": -1.32}, {"name": "页岩气", "change_pct": -2.57}, {"name": "深地经济", "change_pct": -2.28}]}, {"code": "002115", "name": "三维通信", "hot_rank": 84, "hot_rank_chg": -35, "stock_cnt": 5845, "price": "11.60", "change": "5.94", "market_id": "33", "circulate_market_value": "8656688000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -2.11}, {"name": "手游", "change_pct": -5.07}, {"name": "5G", "change_pct": -6.26}, {"name": "人工智能", "change_pct": -4.58}, {"name": "物联网", "change_pct": -4.58}, {"name": "阿里巴巴概念股", "change_pct": -4.06}, {"name": "腾讯概念股", "change_pct": -4.49}, {"name": "快手概念股", "change_pct": -4.96}, {"name": "字节跳动概念股", "change_pct": -5.04}, {"name": "知识付费", "change_pct": -2.18}, {"name": "卫星互联网", "change_pct": -7.56}, {"name": "华为产业链", "change_pct": -5.7}, {"name": "短剧/互动影游", "change_pct": -5.71}, {"name": "小红书概念股", "change_pct": -5.37}, {"name": "海洋经济", "change_pct": -5.51}]}, {"code": "000547", "name": "航天发展", "hot_rank": 85, "hot_rank_chg": -43, "stock_cnt": 5845, "price": "16.35", "change": "-10.02", "market_id": "33", "circulate_market_value": "25982129000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600629", "name": "华建集团", "hot_rank": 86, "hot_rank_chg": 323, "stock_cnt": 5845, "price": "14.03", "change": "10.04", "market_id": "17", "circulate_market_value": "16131762000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "子公司重整获批"}, {"code": "603318", "name": "水发燃气", "hot_rank": 87, "hot_rank_chg": 201, "stock_cnt": 5845, "price": "8.55", "change": "10.04", "market_id": "17", "circulate_market_value": "3925056400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "氦气", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -5.54}, {"name": "电子特气", "change_pct": -2.99}, {"name": "一带一路", "change_pct": -3.23}, {"name": "强势人气股", "change_pct": -4.61}, {"name": "天然气", "change_pct": -1.55}, {"name": "山东国企改革", "change_pct": -2.39}, {"name": "国企改革", "change_pct": -2.95}, {"name": "氦气", "change_pct": 1.01}]}, {"code": "300136", "name": "信维通信", "hot_rank": 88, "hot_rank_chg": 43, "stock_cnt": 5845, "price": "86.31", "change": "-13.15", "market_id": "33", "circulate_market_value": "71223033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 89, "hot_rank_chg": 130, "stock_cnt": 5845, "price": "26.29", "change": "3.83", "market_id": "17", "circulate_market_value": "22663358000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002192", "name": "融捷股份", "hot_rank": 90, "hot_rank_chg": -34, "stock_cnt": 5845, "price": "72.40", "change": "1.76", "market_id": "33", "circulate_market_value": "18760120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 91, "hot_rank_chg": 21, "stock_cnt": 5845, "price": "44.94", "change": "-8.36", "market_id": "17", "circulate_market_value": "65702046000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600436", "name": "片仔癀", "hot_rank": 92, "hot_rank_chg": 214, "stock_cnt": 5845, "price": "125.58", "change": "7.29", "market_id": "17", "circulate_market_value": "75764575000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 93, "hot_rank_chg": 4, "stock_cnt": 5845, "price": "4.81", "change": "-6.05", "market_id": "33", "circulate_market_value": "96769150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -7.61}, {"name": "手机产业链", "change_pct": -7.17}, {"name": "超高清视频", "change_pct": -5.17}, {"name": "电竞", "change_pct": -5.24}, {"name": "半导体", "change_pct": -5.84}, {"name": "OLED", "change_pct": -6.4}, {"name": "光伏", "change_pct": -5.97}, {"name": "黑色家电", "change_pct": -4.2}, {"name": "家电", "change_pct": -3.82}, {"name": "智能制造", "change_pct": -5.31}, {"name": "工业互联网", "change_pct": -4.69}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -6.28}, {"name": "国产芯片", "change_pct": -5.88}, {"name": "腾讯概念股", "change_pct": -4.49}, {"name": "液晶面板/LCD", "change_pct": -6.56}, {"name": "MicroLED", "change_pct": -7.53}, {"name": "MiniLED", "change_pct": -7.18}, {"name": "华为产业链", "change_pct": -5.7}, {"name": "玻璃基板封装", "change_pct": -7.13}]}, {"code": "300534", "name": "陇神戎发", "hot_rank": 94, "hot_rank_chg": 3068, "stock_cnt": 5845, "price": "9.00", "change": "20.00", "market_id": "33", "circulate_market_value": "2718463400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": 1.17}, {"name": "保健品", "change_pct": 2.05}, {"name": "医药", "change_pct": -0.04}, {"name": "化学原料药", "change_pct": -0.49}, {"name": "食品", "change_pct": -0.08}, {"name": "阿尔茨海默病", "change_pct": 0.31}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 95, "hot_rank_chg": -33, "stock_cnt": 5845, "price": "189.02", "change": "-8.76", "market_id": "33", "circulate_market_value": "60207170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 96, "hot_rank_chg": -13, "stock_cnt": 5845, "price": "15.73", "change": "-7.14", "market_id": "17", "circulate_market_value": "78477265000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 97, "hot_rank_chg": 108, "stock_cnt": 5845, "price": "31.69", "change": "-10.00", "market_id": "17", "circulate_market_value": "21909693000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688072", "name": "拓荆科技", "hot_rank": 98, "hot_rank_chg": 130, "stock_cnt": 5845, "price": "845.00", "change": "1.56", "market_id": "17", "circulate_market_value": "238875600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 99, "hot_rank_chg": 2, "stock_cnt": 5845, "price": "66.00", "change": "-0.24", "market_id": "17", "circulate_market_value": "27480268000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 100, "hot_rank_chg": -36, "stock_cnt": 5845, "price": "38.55", "change": "1.07", "market_id": "33", "circulate_market_value": "126463246000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603933", "name": "睿能科技", "price": 24.71, "change_pct": 10.02, "reason": "1、公司是国内领先的 IC 产品授权分销商，分销多种集成电路芯片，且拥有 “芯天下” 系列存储芯片，还掌握 Chiplet 相关技术，其存储芯片封装已实现量产；\n2、公司RA1、RA3系列伺服驱动器和MC2、MA3系列伺服电机已应用到机器人领域，包括不同载荷的四关节、六关节等工业机器人和协作机器人", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.88, "first_limit_up": 1783906257, "break_limit_up_times": 6}, {"code": "603318", "name": "水发燃气", "price": 8.55, "change_pct": 10.04, "reason": "1、公司依托西北天然气产区布局LNG-BOG提氦业务，现有5N高纯氦产能并持续扩产；\n2、全资子公司大连派思是 GE、西门子、三菱等龙头的核心辅机供应商，供应前置 / 辅助模块、掺氢输配系统等，切入北美 AI 数据中心轻燃机组配套；\n3、山东省国资委旗下；主营业务为LNG业务、城镇燃气运营，以天然气发电为主的燃气设备制造以及分布式能源综合服务业务", "plates": ["氦气"], "limit_up_days": 1, "turnover_ratio": 2.23, "first_limit_up": 1783905900, "break_limit_up_times": 0}, {"code": "300214", "name": "日科化学", "price": 12.3, "change_pct": 20.0, "reason": "公司拟收购亘元新材70.75%股份，标的主营锂电池电解液核心添加剂VC（碳酸亚乙烯酯）和FEC（氟代碳酸乙烯酯），与下游宁德时代、比亚迪等多家优质大客户建立了战略合作关系，是行业领先的锂电池电解液添加剂生产商。", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 1.37, "first_limit_up": 1783905900, "break_limit_up_times": 0}, {"code": "605090", "name": "九丰能源", "price": 41.78, "change_pct": 10.01, "reason": "国内民营自产提氦产能规模领先，依托LNG-BOG提氦技术，气源完全自主可控，产品获航天级认证", "plates": ["氦气"], "limit_up_days": 2, "turnover_ratio": 7.99, "first_limit_up": 1783905900, "break_limit_up_times": 9}, {"code": "603313", "name": "梦百合", "price": 7.99, "change_pct": 10.06, "reason": "记忆绵家居制品供应商；公司主要从事致力于提升人类深度睡眠的家居产品—记忆绵床垫、记忆绵枕头等家居产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 12.99, "first_limit_up": 1783925618, "break_limit_up_times": 0}, {"code": "600536", "name": "中国软件", "price": 32.25, "change_pct": 9.99, "reason": "中国电子信息产业集团旗下，中国电子软件板块的龙头核心企业，中国软件业国家队核心成员；公司拥有完整的从操作系统等基础软件、中间件、安全产品到应用系统的业务链条，参股的麒麟软件在政务内网份额高", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.83, "first_limit_up": 1783920797, "break_limit_up_times": 2}, {"code": "600671", "name": "天目药业", "price": 21.13, "change_pct": 9.99, "reason": "全国第一家中药制剂上市企业，拥有“天目山”、“新安江”、“黄山”三个医药品牌", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.85, "first_limit_up": 1783907303, "break_limit_up_times": 6}, {"code": "003020", "name": "立方制药", "price": 20.61, "change_pct": 9.98, "reason": "公司此前收到国家药监局下发的丹皮酚《化学原料药上市申请批准通知书》，丹皮酚作为中药单体成分，有消炎止痒作用，皮炎，皮肤瘙痒，蚊臭虫叮咬红肿等各种皮肤疾患有一定效果", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 9.85, "first_limit_up": 1783906215, "break_limit_up_times": 1}, {"code": "603137", "name": "恒尚节能", "price": 29.43, "change_pct": 10.02, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 15.17, "first_limit_up": 1783906627, "break_limit_up_times": 7}, {"code": "600992", "name": "贵绳股份", "price": 11.72, "change_pct": 10.05, "reason": "公司“巨龙”牌钢丝绳已用于“神舟”载人飞船等国家重大航天工程，产品配套长征系列火箭及深中通道等超级工程", "plates": ["航天"], "limit_up_days": 3, "turnover_ratio": 2.22, "first_limit_up": 1783905900, "break_limit_up_times": 0}, {"code": "002379", "name": "宏桥控股", "price": 15.9, "change_pct": 10.03, "reason": "大型综合性铝加工企业；公司预计上半年净利润同比增长69.72%至81.04%，主要因电解铝市场销售价格同比大幅上涨，相关业务毛利显著提升，且借款规模缩减使财务利息支出大幅减少", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.36, "first_limit_up": 1783909026, "break_limit_up_times": 6}, {"code": "600491", "name": "ST龙元", "price": 1.23, "change_pct": 9.82, "reason": "长三角建筑市场最大的民营施工企业之一，宁波开海投资拟要约收购公司6%股份", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 4.12, "first_limit_up": 1783905901, "break_limit_up_times": 0}, {"code": "002581", "name": "*ST未名", "price": 3.63, "change_pct": 10.0, "reason": "公司主要产品恩经复（神经生长因子），联营公司北京科兴致力于人用疫苗及其相关产品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1783907088, "break_limit_up_times": 4}, {"code": "003030", "name": "祖名股份", "price": 23.83, "change_pct": 10.02, "reason": "国内生鲜豆制品领军企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.62, "first_limit_up": 1783906689, "break_limit_up_times": 2}, {"code": "603677", "name": "奇精机械", "price": 13.82, "change_pct": 10.03, "reason": "公司称有几款工业机器人零部件仍处于客户验证阶段，暂未有量产产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.36, "first_limit_up": 1783911263, "break_limit_up_times": 0}, {"code": "603669", "name": "灵康药业", "price": 6.8, "change_pct": 10.03, "reason": "公司主导产品涵盖肠外营养药、抗感染药和消化系统药三大领域", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.32, "first_limit_up": 1783910334, "break_limit_up_times": 1}, {"code": "603120", "name": "肯特催化", "price": 55.09, "change_pct": 10.0, "reason": "1、公司四乙基氢氧化铵在半导体清洗领域已实现市场化应用；\n2、公司正在从事的主要研发项目包含环氧丙烷类催化剂的工艺开发，光刻胶显影液、刻蚀液已实现批量生产，四乙基氢氧化铵已在半导体清洗领域实现市场化应用", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.43, "first_limit_up": 1783906660, "break_limit_up_times": 0}, {"code": "600881", "name": "亚泰集团", "price": 1.65, "change_pct": 10.0, "reason": "吉林长春国资委旗下，主营水泥建材、医药、地产等；公司医药集团所属的亚泰制药、龙鑫药业、东北亚药业、亚泰永安堂药业均以生产中成药品种为主", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.23, "first_limit_up": 1783906714, "break_limit_up_times": 1}, {"code": "000078", "name": "ST海王", "price": 2.08, "change_pct": 10.05, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 9.39, "first_limit_up": 1783923321, "break_limit_up_times": 0}, {"code": "600629", "name": "华建集团", "price": 14.03, "change_pct": 10.04, "reason": "公司控股股东为上海国有资本投资有限公司，旗下上海科技创业投资有限公司持有上海微电子装备（集团）股份有限公司13.275%股权", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 4.42, "first_limit_up": 1783919514, "break_limit_up_times": 1}, {"code": "300534", "name": "陇神戎发", "price": 9, "change_pct": 20.0, "reason": "公司主打产品元胡止痛滴丸为国家中药二级保护品种，具有镇痛、镇静、催眠等作用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 17.51, "first_limit_up": 1783908045, "break_limit_up_times": 2}, {"code": "603065", "name": "宿迁联盛", "price": 21.4, "change_pct": 10.03, "reason": "公司拟设立合资公司开展磷化铟衬底业务，预计二期产能40万片/年", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 9.97, "first_limit_up": 1783907097, "break_limit_up_times": 1}, {"code": "001395", "name": "亚联机械", "price": 31.49, "change_pct": 9.99, "reason": "公司主营业务为人造板生产线和配套设备，预告中报净利润同比增长59.63%，因“公司共验收5条生产线项目，验收项目数量虽同比减少1条，但高单价项目数量较多，且整体毛利率水平较高”", "plates": ["业绩增长"], "limit_up_days": 3, "turnover_ratio": 22.38, "first_limit_up": 1783908585, "break_limit_up_times": 6}, {"code": "600664", "name": "哈药股份", "price": 3.71, "change_pct": 10.09, "reason": "全国医药行业首家上市公司；预计上半年净利润同比增长46.40%至68.36%，主要是受医药工业板块业绩提升影响", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 8.0, "first_limit_up": 1783906462, "break_limit_up_times": 5}, {"code": "000920", "name": "沃顿科技", "price": 14.03, "change_pct": 10.04, "reason": "1、公司的超纯水系列膜产品是较为成熟的系列产品，已应用于半导体芯片等对水质要求极高的高端制造领域；\n2、公司膜产品在盐湖提锂领域已实现了成熟的应用，并承接了多个液体物料浓缩分离纯化的工程项目", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 10.15, "first_limit_up": 1783909518, "break_limit_up_times": 15}, {"code": "601002", "name": "晋亿实业", "price": 4.85, "change_pct": 9.98, "reason": "国内紧固件行业龙头企业，全球最大的紧固件制造厂商之一；预计上半年净利同比增长57.67%-87.5%，主要系“公司中标高铁线路集中供货，铁道扣件产品销售额增加；新能源汽车紧固件产品销售额增加；存货成本下降，主营业务利润同比增长。此外，公司转让了全资子公司泉州晋亿物流有限公司100%股权，并确认相应投资收益”", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.79, "first_limit_up": 1783906220, "break_limit_up_times": 1}, {"code": "000989", "name": "九芝堂", "price": 8.98, "change_pct": 10.05, "reason": "湖南省中华老字号中药企业，拥有多个创新药项目；预计上半年净利同比增长67.63%-83.63%，主要系“哈尔滨吉象隆生物技术有限公司于2025年11月纳入公司合并报表范围，报告期内，该公司生产经营情况良好，带动公司净利润同比增长。公司原有主营业务板块的架构优化调整与营销体系变革已逐步显现成效，大部分产品销量提升，整体经营业绩实现增长”", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 10.92, "first_limit_up": 1783906803, "break_limit_up_times": 2}, {"code": "601608", "name": "中信重工", "price": 5.54, "change_pct": 9.92, "reason": "1、2026年7月10日，CZ-10B运载火箭在南海预定海域完成软着陆并被成功捕获，我国首次火箭海上网系回收任务取得圆满成功。中信重工作为网系回收系统抓总单位，承接了该系统联合设计制造、主体设备供货及安装调试总包任务；\n2、公司布局矿用防爆巡检机器人、智能安全装备，助力煤矿井下安全管控", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 4.47, "first_limit_up": 1783905900, "break_limit_up_times": 2}, {"code": "001388", "name": "信通电子", "price": 29.49, "change_pct": 10.0, "reason": "高送转-公司2025年年度权益分派方案为每10股送红股4.80股并派5.00元现金，股权登记日为2026年7月16日", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.07, "first_limit_up": 1783920915, "break_limit_up_times": 0}, {"code": "600513", "name": "联环药业", "price": 17.04, "change_pct": 10.01, "reason": "公司主导产品之一爱普列特片为国家一类新药，是国内首创的治疗前列腺良性增生症的有效药物，生产的美愈伪麻胶囊可用于缓解普通感冒和流行性感冒症状", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 14.86, "first_limit_up": 1783922132, "break_limit_up_times": 0}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "000078": "ST/风险警示股"};