const UPDATE_TIME = "2026-07-13 02:15";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": -4.47,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续175天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": 0.21,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -1.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续199天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.82,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续246天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "算力租赁",
    "rise": -2.13,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续110天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "猪肉",
    "rise": -0.56,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885573"
  },
  {
    "name": "人形机器人",
    "rise": -3.23,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续410天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": -3.29,
    "rate": 0,
    "tag": "",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "先进封装",
    "rise": -2.32,
    "rate": 0,
    "tag": "",
    "hotTag": "连续39天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "光纤概念",
    "rise": -3.65,
    "rate": 0,
    "tag": "",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新未来LOF",
    "code": "886084"
  },
  {
    "name": "芯片概念",
    "rise": -2.46,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "俄乌冲突概念",
    "rise": -0.68,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "油气ETF",
    "code": "885964"
  },
  {
    "name": "ST板块",
    "rise": -1.37,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "AI应用",
    "rise": -2.59,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "国家大基金持股",
    "rise": -0.5,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "天然气",
    "rise": -1.2,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "石油ETF",
    "code": "885430"
  },
  {
    "name": "培育钻石",
    "rise": -5.24,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "中国AI 50",
    "rise": 0.18,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "人工智能ETF",
    "code": "886102"
  },
  {
    "name": "机器人概念",
    "rise": -2.91,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "液冷服务器",
    "rise": -2.51,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  }
];
const THS_EVENTS = [
  {
    "title": "国务院批复同意《中医药振兴发展“十五五”规划》",
    "desc": "",
    "heat": 353946,
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
    "title": "商务部、海关总署：对氦气实施临时禁止出口管理",
    "desc": "",
    "heat": 112153,
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
    "heat": 106331,
    "direction": "半导体",
    "themes": [
      "半导体",
      "芯片概念"
    ],
    "stocks": [
      {
        "name": "锦华新材",
        "code": "920015",
        "chg": 17.179215
      }
    ]
  },
  {
    "title": "卫健委明确创新药入基药探索路径",
    "desc": "",
    "heat": 95047,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
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
    "title": "长十乙首飞成功 我国首次实现运载火箭可控回收",
    "desc": "",
    "heat": 81886,
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
    "title": "AI热潮太费电燃气轮机价格3年涨了300%",
    "desc": "",
    "heat": 25511,
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
    "heat": 221,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "奥飞娱乐",
        "code": "002292",
        "chg": -0.516796
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+4.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+2.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保健品",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中药",
    "change": "+1.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芬太尼概念",
    "change": "+1.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+1.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药商业",
    "change": "+1.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+1.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "长寿药NMN",
    "change": "+1.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+0.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+0.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+0.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+0.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "+0.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+0.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "流感",
    "change": "+0.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+0.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+0.29%",
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
    "stock_cnt": 5854,
    "price": "7.15",
    "change": "-5.80",
    "market_id": "33",
    "circulate_market_value": "252875010000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.21
      },
      {
        "name": "手机产业链",
        "change_pct": -3.09
      },
      {
        "name": "超高清视频",
        "change_pct": -2.53
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.91
      },
      {
        "name": "电竞",
        "change_pct": -3.71
      },
      {
        "name": "半导体",
        "change_pct": -0.75
      },
      {
        "name": "人工智能",
        "change_pct": -2.52
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.15
      },
      {
        "name": "VR&AR",
        "change_pct": -3.37
      },
      {
        "name": "OLED",
        "change_pct": -2.22
      },
      {
        "name": "京津冀",
        "change_pct": -1.88
      },
      {
        "name": "物联网",
        "change_pct": -2.35
      },
      {
        "name": "指纹识别",
        "change_pct": -3.36
      },
      {
        "name": "汽车零部件",
        "change_pct": -3.05
      },
      {
        "name": "白马股",
        "change_pct": -0.85
      },
      {
        "name": "智能制造",
        "change_pct": -2.74
      },
      {
        "name": "小米概念股",
        "change_pct": -2.66
      },
      {
        "name": "国产芯片",
        "change_pct": -1.52
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.4
      },
      {
        "name": "全息概念",
        "change_pct": -3.29
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.73
      },
      {
        "name": "MicroLED",
        "change_pct": -3.67
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -3.77
      },
      {
        "name": "智能手表",
        "change_pct": -2.54
      },
      {
        "name": "MiniLED",
        "change_pct": -3.08
      },
      {
        "name": "传感器",
        "change_pct": -3.25
      },
      {
        "name": "大硅片",
        "change_pct": -0.58
      },
      {
        "name": "AI PC",
        "change_pct": -3.05
      },
      {
        "name": "华为产业链",
        "change_pct": -2.9
      },
      {
        "name": "回购",
        "change_pct": -1.62
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.1
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.24
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 8,
    "hot_rank_chg": -7,
    "stock_cnt": 5854,
    "price": "8.41",
    "change": "-1.52",
    "market_id": "33",
    "circulate_market_value": "13672085000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.09
      },
      {
        "name": "电竞",
        "change_pct": -3.71
      },
      {
        "name": "手游",
        "change_pct": -3.55
      },
      {
        "name": "强势人气股",
        "change_pct": -2.05
      },
      {
        "name": "人工智能",
        "change_pct": -2.52
      },
      {
        "name": "游戏",
        "change_pct": -3.58
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.53
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.5
      },
      {
        "name": "快手概念股",
        "change_pct": -3.32
      },
      {
        "name": "元宇宙",
        "change_pct": -3.35
      },
      {
        "name": "虚拟数字人",
        "change_pct": -3.34
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.16
      },
      {
        "name": "web3.0",
        "change_pct": -3.16
      },
      {
        "name": "AIGC概念",
        "change_pct": -3.34
      },
      {
        "name": "数据要素",
        "change_pct": -2.8
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.13
      },
      {
        "name": "AI营销",
        "change_pct": -3.52
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.98
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.1
      },
      {
        "name": "人工智能大模型",
        "change_pct": -2.37
      },
      {
        "name": "人形机器人",
        "change_pct": -3.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.17
      },
      {
        "name": "多模态",
        "change_pct": -3.17
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -3.75
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.97
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.41
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 30,
    "hot_rank_chg": 6,
    "stock_cnt": 5854,
    "price": "11.46",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "9279447800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -2.88
      },
      {
        "name": "大飞机",
        "change_pct": -5.21
      },
      {
        "name": "北斗导航",
        "change_pct": -5.5
      },
      {
        "name": "高铁轨交",
        "change_pct": -2.75
      },
      {
        "name": "军民融合",
        "change_pct": -4.7
      },
      {
        "name": "磁悬浮",
        "change_pct": -2.84
      },
      {
        "name": "军工",
        "change_pct": -4.62
      },
      {
        "name": "碳纤维",
        "change_pct": -3.97
      },
      {
        "name": "无人机",
        "change_pct": -4.61
      },
      {
        "name": "航天",
        "change_pct": -5.62
      },
      {
        "name": "卫星互联网",
        "change_pct": -5.63
      },
      {
        "name": "低空经济",
        "change_pct": -3.9
      },
      {
        "name": "海洋经济",
        "change_pct": -4.01
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 33,
    "hot_rank_chg": 22,
    "stock_cnt": 5854,
    "price": "6.11",
    "change": "-7.98",
    "market_id": "17",
    "circulate_market_value": "75740104000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.33
      },
      {
        "name": "核电",
        "change_pct": -3.15
      },
      {
        "name": "强势人气股",
        "change_pct": -2.05
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.33
      },
      {
        "name": "水电",
        "change_pct": -1.12
      },
      {
        "name": "火电",
        "change_pct": -1.06
      },
      {
        "name": "光伏",
        "change_pct": -3.22
      },
      {
        "name": "风电",
        "change_pct": -3.09
      },
      {
        "name": "国企改革",
        "change_pct": -1.86
      },
      {
        "name": "算电协同",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "600992",
    "name": "贵绳股份",
    "hot_rank": 40,
    "hot_rank_chg": -6,
    "stock_cnt": 5854,
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
        "change_pct": -4.83
      },
      {
        "name": "军工",
        "change_pct": -4.62
      },
      {
        "name": "航天",
        "change_pct": -5.62
      },
      {
        "name": "国企改革",
        "change_pct": -1.86
      }
    ]
  },
  {
    "code": "002115",
    "name": "三维通信",
    "hot_rank": 42,
    "hot_rank_chg": 7,
    "stock_cnt": 5854,
    "price": "11.55",
    "change": "5.48",
    "market_id": "33",
    "circulate_market_value": "8619374700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.97
      },
      {
        "name": "手游",
        "change_pct": -3.55
      },
      {
        "name": "5G",
        "change_pct": -2.88
      },
      {
        "name": "人工智能",
        "change_pct": -2.52
      },
      {
        "name": "物联网",
        "change_pct": -2.35
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.15
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.5
      },
      {
        "name": "快手概念股",
        "change_pct": -3.32
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.13
      },
      {
        "name": "知识付费",
        "change_pct": -1.52
      },
      {
        "name": "卫星互联网",
        "change_pct": -5.63
      },
      {
        "name": "华为产业链",
        "change_pct": -2.9
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.17
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.41
      },
      {
        "name": "海洋经济",
        "change_pct": -4.01
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 48,
    "hot_rank_chg": 37,
    "stock_cnt": 5854,
    "price": "12.14",
    "change": "-5.89",
    "market_id": "17",
    "circulate_market_value": "17878661000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.33
      },
      {
        "name": "强势人气股",
        "change_pct": -2.05
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.33
      },
      {
        "name": "火电",
        "change_pct": -1.06
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -2.64
      },
      {
        "name": "风电",
        "change_pct": -3.09
      },
      {
        "name": "国企改革",
        "change_pct": -1.86
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 56,
    "hot_rank_chg": -2,
    "stock_cnt": 5854,
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
        "change_pct": -2.09
      },
      {
        "name": "工业大麻",
        "change_pct": -1.0
      },
      {
        "name": "中药",
        "change_pct": 1.44
      },
      {
        "name": "保健品",
        "change_pct": 1.88
      },
      {
        "name": "医药",
        "change_pct": 0.2
      },
      {
        "name": "化学原料药",
        "change_pct": -0.16
      },
      {
        "name": "流感",
        "change_pct": 0.29
      },
      {
        "name": "振兴东北",
        "change_pct": -0.78
      },
      {
        "name": "食品",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 58,
    "hot_rank_chg": -17,
    "stock_cnt": 5854,
    "price": "4.09",
    "change": "-2.62",
    "market_id": "33",
    "circulate_market_value": "2907321100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -2.52
      },
      {
        "name": "影视",
        "change_pct": -4.58
      },
      {
        "name": "旅游",
        "change_pct": -2.41
      },
      {
        "name": "虚拟数字人",
        "change_pct": -3.34
      },
      {
        "name": "AI营销",
        "change_pct": -3.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.17
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.97
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 59,
    "hot_rank_chg": 25,
    "stock_cnt": 5854,
    "price": "10.70",
    "change": "0.28",
    "market_id": "33",
    "circulate_market_value": "43183963000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.75
      },
      {
        "name": "一带一路",
        "change_pct": -1.91
      },
      {
        "name": "京津冀",
        "change_pct": -1.88
      },
      {
        "name": "光伏",
        "change_pct": -3.22
      },
      {
        "name": "碳中和",
        "change_pct": -1.42
      },
      {
        "name": "国产芯片",
        "change_pct": -1.52
      },
      {
        "name": "IGBT",
        "change_pct": -0.37
      },
      {
        "name": "颗粒硅",
        "change_pct": -2.72
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.94
      },
      {
        "name": "大硅片",
        "change_pct": -0.58
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 61,
    "hot_rank_chg": -24,
    "stock_cnt": 5854,
    "price": "9.39",
    "change": "-9.97",
    "market_id": "33",
    "circulate_market_value": "19549997000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -4.58
      },
      {
        "name": "足球",
        "change_pct": -3.41
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.15
      },
      {
        "name": "拼多多概念股",
        "change_pct": -2.69
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.75
      },
      {
        "name": "大消费",
        "change_pct": -0.63
      },
      {
        "name": "盲盒",
        "change_pct": -2.43
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.17
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.97
      },
      {
        "name": "首发经济",
        "change_pct": -2.12
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.41
      },
      {
        "name": "服务消费",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 64,
    "hot_rank_chg": 197,
    "stock_cnt": 5854,
    "price": "7.51",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "34658339000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "火箭网系回收相关",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -2.53
      },
      {
        "name": "国产软件",
        "change_pct": -2.54
      },
      {
        "name": "锂电池",
        "change_pct": -3.19
      },
      {
        "name": "人工智能",
        "change_pct": -2.52
      },
      {
        "name": "养老产业",
        "change_pct": -1.18
      },
      {
        "name": "大飞机",
        "change_pct": -5.21
      },
      {
        "name": "军民融合",
        "change_pct": -4.7
      },
      {
        "name": "物联网",
        "change_pct": -2.35
      },
      {
        "name": "大数据",
        "change_pct": -2.64
      },
      {
        "name": "智慧城市",
        "change_pct": -2.89
      },
      {
        "name": "军工",
        "change_pct": -4.62
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.93
      },
      {
        "name": "机器人",
        "change_pct": -3.14
      },
      {
        "name": "黑色家电",
        "change_pct": -2.4
      },
      {
        "name": "家电",
        "change_pct": -2.24
      },
      {
        "name": "储能",
        "change_pct": -2.54
      },
      {
        "name": "智能制造",
        "change_pct": -2.74
      },
      {
        "name": "工业互联网",
        "change_pct": -2.52
      },
      {
        "name": "数字经济",
        "change_pct": -2.53
      },
      {
        "name": "百度概念股",
        "change_pct": -2.92
      },
      {
        "name": "NFT",
        "change_pct": -2.4
      },
      {
        "name": "跨境支付",
        "change_pct": -2.3
      },
      {
        "name": "华为海思",
        "change_pct": -2.41
      },
      {
        "name": "云游戏",
        "change_pct": -4.15
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.75
      },
      {
        "name": "华为产业链",
        "change_pct": -2.9
      },
      {
        "name": "毫米波雷达",
        "change_pct": -3.59
      },
      {
        "name": "服务器",
        "change_pct": -0.98
      },
      {
        "name": "星闪概念",
        "change_pct": -1.96
      },
      {
        "name": "低空经济",
        "change_pct": -3.9
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 67,
    "hot_rank_chg": 221,
    "stock_cnt": 5854,
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
        "change_pct": -3.84
      },
      {
        "name": "电子特气",
        "change_pct": 0.21
      },
      {
        "name": "一带一路",
        "change_pct": -1.91
      },
      {
        "name": "强势人气股",
        "change_pct": -2.05
      },
      {
        "name": "天然气",
        "change_pct": -0.58
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.53
      },
      {
        "name": "国企改革",
        "change_pct": -1.86
      },
      {
        "name": "氦气",
        "change_pct": 2.94
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 77,
    "hot_rank_chg": -34,
    "stock_cnt": 5854,
    "price": "3.50",
    "change": "-3.31",
    "market_id": "33",
    "circulate_market_value": "16397838000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -2.62
      },
      {
        "name": "房地产",
        "change_pct": -1.7
      },
      {
        "name": "京津冀",
        "change_pct": -1.88
      },
      {
        "name": "旅游",
        "change_pct": -2.41
      },
      {
        "name": "国产芯片",
        "change_pct": -1.52
      },
      {
        "name": "内存",
        "change_pct": -2.77
      },
      {
        "name": "闪存",
        "change_pct": -2.82
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.97
      }
    ]
  },
  {
    "code": "601608",
    "name": "中信重工",
    "hot_rank": 80,
    "hot_rank_chg": -8,
    "stock_cnt": 5854,
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
        "change_pct": -3.15
      },
      {
        "name": "一带一路",
        "change_pct": -1.91
      },
      {
        "name": "海工装备",
        "change_pct": -3.69
      },
      {
        "name": "工业自动化",
        "change_pct": -2.96
      },
      {
        "name": "机械",
        "change_pct": -2.52
      },
      {
        "name": "军民融合",
        "change_pct": -4.7
      },
      {
        "name": "水利",
        "change_pct": -2.65
      },
      {
        "name": "风电",
        "change_pct": -3.09
      },
      {
        "name": "军工",
        "change_pct": -4.62
      },
      {
        "name": "机器人",
        "change_pct": -3.14
      },
      {
        "name": "智能制造",
        "change_pct": -2.74
      },
      {
        "name": "工业互联网",
        "change_pct": -2.52
      },
      {
        "name": "大基建",
        "change_pct": -1.42
      },
      {
        "name": "一体化压铸",
        "change_pct": -2.88
      },
      {
        "name": "航天",
        "change_pct": -5.62
      },
      {
        "name": "煤矿安全",
        "change_pct": -1.4
      },
      {
        "name": "深地经济",
        "change_pct": -1.59
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 88,
    "hot_rank_chg": 9,
    "stock_cnt": 5854,
    "price": "4.96",
    "change": "-2.93",
    "market_id": "33",
    "circulate_market_value": "99988082000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.21
      },
      {
        "name": "手机产业链",
        "change_pct": -3.09
      },
      {
        "name": "超高清视频",
        "change_pct": -2.53
      },
      {
        "name": "电竞",
        "change_pct": -3.71
      },
      {
        "name": "半导体",
        "change_pct": -0.75
      },
      {
        "name": "OLED",
        "change_pct": -2.22
      },
      {
        "name": "光伏",
        "change_pct": -3.22
      },
      {
        "name": "黑色家电",
        "change_pct": -2.4
      },
      {
        "name": "家电",
        "change_pct": -2.24
      },
      {
        "name": "智能制造",
        "change_pct": -2.74
      },
      {
        "name": "工业互联网",
        "change_pct": -2.52
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.66
      },
      {
        "name": "国产芯片",
        "change_pct": -1.52
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.5
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.4
      },
      {
        "name": "MicroLED",
        "change_pct": -3.67
      },
      {
        "name": "MiniLED",
        "change_pct": -3.08
      },
      {
        "name": "华为产业链",
        "change_pct": -2.9
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.24
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 97,
    "hot_rank_chg": 71,
    "stock_cnt": 5854,
    "price": "10.90",
    "change": "-0.18",
    "market_id": "17",
    "circulate_market_value": "19501607000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.75
      },
      {
        "name": "纯碱",
        "change_pct": -1.6
      },
      {
        "name": "食品",
        "change_pct": 0.15
      },
      {
        "name": "土壤修复",
        "change_pct": -2.48
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.16
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.07
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.4
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "25.89", "change": "2.45", "market_id": "33", "circulate_market_value": "86156360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5854, "price": "7.15", "change": "-5.80", "market_id": "33", "circulate_market_value": "252875010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.21}, {"name": "手机产业链", "change_pct": -3.09}, {"name": "超高清视频", "change_pct": -2.53}, {"name": "苹果产业链", "change_pct": -2.91}, {"name": "电竞", "change_pct": -3.71}, {"name": "半导体", "change_pct": -0.75}, {"name": "人工智能", "change_pct": -2.52}, {"name": "互联网医疗", "change_pct": -1.15}, {"name": "VR&AR", "change_pct": -3.37}, {"name": "OLED", "change_pct": -2.22}, {"name": "京津冀", "change_pct": -1.88}, {"name": "物联网", "change_pct": -2.35}, {"name": "指纹识别", "change_pct": -3.36}, {"name": "汽车零部件", "change_pct": -3.05}, {"name": "白马股", "change_pct": -0.85}, {"name": "智能制造", "change_pct": -2.74}, {"name": "小米概念股", "change_pct": -2.66}, {"name": "国产芯片", "change_pct": -1.52}, {"name": "液晶面板/LCD", "change_pct": -2.4}, {"name": "全息概念", "change_pct": -3.29}, {"name": "理想汽车概念股", "change_pct": -2.73}, {"name": "MicroLED", "change_pct": -3.67}, {"name": "钙钛矿电池", "change_pct": -3.77}, {"name": "智能手表", "change_pct": -2.54}, {"name": "MiniLED", "change_pct": -3.08}, {"name": "传感器", "change_pct": -3.25}, {"name": "大硅片", "change_pct": -0.58}, {"name": "AI PC", "change_pct": -3.05}, {"name": "华为产业链", "change_pct": -2.9}, {"name": "回购", "change_pct": -1.62}, {"name": "智能眼镜/MR头显", "change_pct": -3.1}, {"name": "玻璃基板封装", "change_pct": -2.24}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "90.75", "change": "0.81", "market_id": "17", "circulate_market_value": "107358189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "39.64", "change": "3.20", "market_id": "33", "circulate_market_value": "113373281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "105.75", "change": "4.59", "market_id": "17", "circulate_market_value": "188890600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 6, "hot_rank_chg": 18, "stock_cnt": 5854, "price": "36.99", "change": "-10.00", "market_id": "33", "circulate_market_value": "39903604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 7, "hot_rank_chg": 14, "stock_cnt": 5854, "price": "24.29", "change": "-3.76", "market_id": "17", "circulate_market_value": "50803560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 8, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "8.41", "change": "-1.52", "market_id": "33", "circulate_market_value": "13672085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.09}, {"name": "电竞", "change_pct": -3.71}, {"name": "手游", "change_pct": -3.55}, {"name": "强势人气股", "change_pct": -2.05}, {"name": "人工智能", "change_pct": -2.52}, {"name": "游戏", "change_pct": -3.58}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.53}, {"name": "腾讯概念股", "change_pct": -2.5}, {"name": "快手概念股", "change_pct": -3.32}, {"name": "元宇宙", "change_pct": -3.35}, {"name": "虚拟数字人", "change_pct": -3.34}, {"name": "东数西算/算力", "change_pct": -2.16}, {"name": "web3.0", "change_pct": -3.16}, {"name": "AIGC概念", "change_pct": -3.34}, {"name": "数据要素", "change_pct": -2.8}, {"name": "字节跳动概念股", "change_pct": -3.13}, {"name": "AI营销", "change_pct": -3.52}, {"name": "ChatGPT", "change_pct": -2.98}, {"name": "智能眼镜/MR头显", "change_pct": -3.1}, {"name": "人工智能大模型", "change_pct": -2.37}, {"name": "人形机器人", "change_pct": -3.52}, {"name": "短剧/互动影游", "change_pct": -4.17}, {"name": "多模态", "change_pct": -3.17}, {"name": "Sora/AI视频", "change_pct": -3.75}, {"name": "IP经济/谷子经济", "change_pct": -2.97}, {"name": "小红书概念股", "change_pct": -3.41}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "570.71", "change": "-6.75", "market_id": "17", "circulate_market_value": "381515030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 11, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "54.01", "change": "-10.00", "market_id": "33", "circulate_market_value": "62490278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5854, "price": "39.70", "change": "-7.22", "market_id": "33", "circulate_market_value": "31053640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 13, "hot_rank_chg": -5, "stock_cnt": 5854, "price": "88.41", "change": "-1.26", "market_id": "33", "circulate_market_value": "129653263000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 14, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "56.81", "change": "-5.32", "market_id": "17", "circulate_market_value": "48092695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 15, "hot_rank_chg": 14, "stock_cnt": 5854, "price": "72.50", "change": "-6.80", "market_id": "17", "circulate_market_value": "177889350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605090", "name": "九丰能源", "hot_rank": 16, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "41.78", "change": "10.01", "market_id": "17", "circulate_market_value": "29435137000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "氦气"}, {"code": "300308", "name": "中际旭创", "hot_rank": 17, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "1134.80", "change": "3.73", "market_id": "33", "circulate_market_value": "1257628360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 18, "hot_rank_chg": -12, "stock_cnt": 5854, "price": "108.61", "change": "1.15", "market_id": "17", "circulate_market_value": "158990120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 19, "hot_rank_chg": 28, "stock_cnt": 5854, "price": "76.12", "change": "7.26", "market_id": "33", "circulate_market_value": "115508463000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 20, "hot_rank_chg": -5, "stock_cnt": 5854, "price": "56.62", "change": "-2.23", "market_id": "33", "circulate_market_value": "89128689000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 21, "hot_rank_chg": 9, "stock_cnt": 5854, "price": "247.20", "change": "2.00", "market_id": "33", "circulate_market_value": "342490780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 22, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "21.52", "change": "-7.60", "market_id": "17", "circulate_market_value": "71000922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 23, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "15.69", "change": "-7.71", "market_id": "17", "circulate_market_value": "20024453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 24, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "41.92", "change": "3.40", "market_id": "33", "circulate_market_value": "168797610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 25, "hot_rank_chg": 107, "stock_cnt": 5854, "price": "17.26", "change": "5.83", "market_id": "33", "circulate_market_value": "11950125400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 26, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "30.22", "change": "10.01", "market_id": "33", "circulate_market_value": "22889085000.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "半年报预增"}, {"code": "601127", "name": "赛力斯", "hot_rank": 27, "hot_rank_chg": -24, "stock_cnt": 5854, "price": "54.67", "change": "-8.73", "market_id": "17", "circulate_market_value": "85147881000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 28, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "43.20", "change": "-5.88", "market_id": "17", "circulate_market_value": "147439420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300065", "name": "海兰信", "hot_rank": 29, "hot_rank_chg": -16, "stock_cnt": 5854, "price": "25.98", "change": "-9.76", "market_id": "33", "circulate_market_value": "17046428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 30, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "11.46", "change": "-9.98", "market_id": "33", "circulate_market_value": "9279447800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -2.88}, {"name": "大飞机", "change_pct": -5.21}, {"name": "北斗导航", "change_pct": -5.5}, {"name": "高铁轨交", "change_pct": -2.75}, {"name": "军民融合", "change_pct": -4.7}, {"name": "磁悬浮", "change_pct": -2.84}, {"name": "军工", "change_pct": -4.62}, {"name": "碳纤维", "change_pct": -3.97}, {"name": "无人机", "change_pct": -4.61}, {"name": "航天", "change_pct": -5.62}, {"name": "卫星互联网", "change_pct": -5.63}, {"name": "低空经济", "change_pct": -3.9}, {"name": "海洋经济", "change_pct": -4.01}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 31, "hot_rank_chg": 20, "stock_cnt": 5854, "price": "29.43", "change": "10.02", "market_id": "17", "circulate_market_value": "5383728000.00", "change_type": "1", "change_section": "9", "change_days": "8", "change_reason": "拟收购存储公司"}, {"code": "002202", "name": "金风科技", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "20.45", "change": "-8.54", "market_id": "33", "circulate_market_value": "68783679000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 33, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "6.11", "change": "-7.98", "market_id": "17", "circulate_market_value": "75740104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.33}, {"name": "核电", "change_pct": -3.15}, {"name": "强势人气股", "change_pct": -2.05}, {"name": "电力体制改革", "change_pct": -1.33}, {"name": "水电", "change_pct": -1.12}, {"name": "火电", "change_pct": -1.06}, {"name": "光伏", "change_pct": -3.22}, {"name": "风电", "change_pct": -3.09}, {"name": "国企改革", "change_pct": -1.86}, {"name": "算电协同", "change_pct": -2.74}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 34, "hot_rank_chg": -11, "stock_cnt": 5854, "price": "33.07", "change": "3.02", "market_id": "33", "circulate_market_value": "37890247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 35, "hot_rank_chg": -3, "stock_cnt": 5854, "price": "18.07", "change": "-3.88", "market_id": "17", "circulate_market_value": "6156521300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 36, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "18.90", "change": "-2.88", "market_id": "33", "circulate_market_value": "60931392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 37, "hot_rank_chg": 5, "stock_cnt": 5854, "price": "16.35", "change": "-10.02", "market_id": "33", "circulate_market_value": "25982129000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 38, "hot_rank_chg": 53, "stock_cnt": 5854, "price": "227.31", "change": "-16.12", "market_id": "33", "circulate_market_value": "102293130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688072", "name": "拓荆科技", "hot_rank": 39, "hot_rank_chg": 189, "stock_cnt": 5854, "price": "876.06", "change": "4.87", "market_id": "17", "circulate_market_value": "247656040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600992", "name": "贵绳股份", "hot_rank": 40, "hot_rank_chg": -6, "stock_cnt": 5854, "price": "11.72", "change": "10.05", "market_id": "17", "circulate_market_value": "2872454800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "商业航天", "xgb_concepts": [{"name": "航母", "change_pct": -4.83}, {"name": "军工", "change_pct": -4.62}, {"name": "航天", "change_pct": -5.62}, {"name": "国企改革", "change_pct": -1.86}]}, {"code": "600360", "name": "华微电子", "hot_rank": 41, "hot_rank_chg": -14, "stock_cnt": 5854, "price": "18.16", "change": "8.16", "market_id": "17", "circulate_market_value": "17438963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002115", "name": "三维通信", "hot_rank": 42, "hot_rank_chg": 7, "stock_cnt": 5854, "price": "11.55", "change": "5.48", "market_id": "33", "circulate_market_value": "8619374700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.97}, {"name": "手游", "change_pct": -3.55}, {"name": "5G", "change_pct": -2.88}, {"name": "人工智能", "change_pct": -2.52}, {"name": "物联网", "change_pct": -2.35}, {"name": "阿里巴巴概念股", "change_pct": -2.15}, {"name": "腾讯概念股", "change_pct": -2.5}, {"name": "快手概念股", "change_pct": -3.32}, {"name": "字节跳动概念股", "change_pct": -3.13}, {"name": "知识付费", "change_pct": -1.52}, {"name": "卫星互联网", "change_pct": -5.63}, {"name": "华为产业链", "change_pct": -2.9}, {"name": "短剧/互动影游", "change_pct": -4.17}, {"name": "小红书概念股", "change_pct": -3.41}, {"name": "海洋经济", "change_pct": -4.01}]}, {"code": "601698", "name": "中国卫通", "hot_rank": 43, "hot_rank_chg": -3, "stock_cnt": 5854, "price": "30.48", "change": "-7.30", "market_id": "17", "circulate_market_value": "128759267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 44, "hot_rank_chg": -13, "stock_cnt": 5854, "price": "31.42", "change": "1.75", "market_id": "17", "circulate_market_value": "10586024900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 46, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "232.93", "change": "7.49", "market_id": "33", "circulate_market_value": "7181551700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002457", "name": "青龙管业", "hot_rank": 47, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "14.18", "change": "-10.03", "market_id": "33", "circulate_market_value": "4725773500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 48, "hot_rank_chg": 37, "stock_cnt": 5854, "price": "12.14", "change": "-5.89", "market_id": "17", "circulate_market_value": "17878661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.33}, {"name": "强势人气股", "change_pct": -2.05}, {"name": "电力体制改革", "change_pct": -1.33}, {"name": "火电", "change_pct": -1.06}, {"name": "氢能源/燃料电池", "change_pct": -2.64}, {"name": "风电", "change_pct": -3.09}, {"name": "国企改革", "change_pct": -1.86}]}, {"code": "002600", "name": "领益智造", "hot_rank": 49, "hot_rank_chg": 97, "stock_cnt": 5854, "price": "13.78", "change": "-9.10", "market_id": "33", "circulate_market_value": "99211932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 50, "hot_rank_chg": 66, "stock_cnt": 5854, "price": "33.88", "change": "10.00", "market_id": "33", "circulate_market_value": "9912056500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 51, "hot_rank_chg": 126, "stock_cnt": 5854, "price": "37.94", "change": "7.33", "market_id": "33", "circulate_market_value": "10196200400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 52, "hot_rank_chg": 18, "stock_cnt": 5854, "price": "44.64", "change": "0.29", "market_id": "17", "circulate_market_value": "74284167000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002430", "name": "杭氧股份", "hot_rank": 53, "hot_rank_chg": 46, "stock_cnt": 5854, "price": "27.70", "change": "6.58", "market_id": "33", "circulate_market_value": "27088875000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 54, "hot_rank_chg": 77, "stock_cnt": 5854, "price": "89.17", "change": "-10.27", "market_id": "33", "circulate_market_value": "73583105000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 55, "hot_rank_chg": -10, "stock_cnt": 5854, "price": "112.66", "change": "-3.39", "market_id": "17", "circulate_market_value": "40624669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 56, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "3.71", "change": "10.09", "market_id": "17", "circulate_market_value": "9343671600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.09}, {"name": "工业大麻", "change_pct": -1.0}, {"name": "中药", "change_pct": 1.44}, {"name": "保健品", "change_pct": 1.88}, {"name": "医药", "change_pct": 0.2}, {"name": "化学原料药", "change_pct": -0.16}, {"name": "流感", "change_pct": 0.29}, {"name": "振兴东北", "change_pct": -0.78}, {"name": "食品", "change_pct": 0.15}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 57, "hot_rank_chg": 46, "stock_cnt": 5854, "price": "13.66", "change": "-5.86", "market_id": "33", "circulate_market_value": "14501812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 58, "hot_rank_chg": -17, "stock_cnt": 5854, "price": "4.09", "change": "-2.62", "market_id": "33", "circulate_market_value": "2907321100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -2.52}, {"name": "影视", "change_pct": -4.58}, {"name": "旅游", "change_pct": -2.41}, {"name": "虚拟数字人", "change_pct": -3.34}, {"name": "AI营销", "change_pct": -3.52}, {"name": "短剧/互动影游", "change_pct": -4.17}, {"name": "IP经济/谷子经济", "change_pct": -2.97}]}, {"code": "002129", "name": "TCL中环", "hot_rank": 59, "hot_rank_chg": 25, "stock_cnt": 5854, "price": "10.70", "change": "0.28", "market_id": "33", "circulate_market_value": "43183963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.75}, {"name": "一带一路", "change_pct": -1.91}, {"name": "京津冀", "change_pct": -1.88}, {"name": "光伏", "change_pct": -3.22}, {"name": "碳中和", "change_pct": -1.42}, {"name": "国产芯片", "change_pct": -1.52}, {"name": "IGBT", "change_pct": -0.37}, {"name": "颗粒硅", "change_pct": -2.72}, {"name": "异质结电池HJT", "change_pct": -2.94}, {"name": "大硅片", "change_pct": -0.58}]}, {"code": "601138", "name": "工业富联", "hot_rank": 60, "hot_rank_chg": -14, "stock_cnt": 5854, "price": "64.60", "change": "-2.52", "market_id": "17", "circulate_market_value": "1282126800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 61, "hot_rank_chg": -24, "stock_cnt": 5854, "price": "9.39", "change": "-9.97", "market_id": "33", "circulate_market_value": "19549997000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -4.58}, {"name": "足球", "change_pct": -3.41}, {"name": "阿里巴巴概念股", "change_pct": -2.15}, {"name": "拼多多概念股", "change_pct": -2.69}, {"name": "网红/MCN", "change_pct": -2.75}, {"name": "大消费", "change_pct": -0.63}, {"name": "盲盒", "change_pct": -2.43}, {"name": "短剧/互动影游", "change_pct": -4.17}, {"name": "IP经济/谷子经济", "change_pct": -2.97}, {"name": "首发经济", "change_pct": -2.12}, {"name": "小红书概念股", "change_pct": -3.41}, {"name": "服务消费", "change_pct": -2.5}]}, {"code": "300821", "name": "东岳硅材", "hot_rank": 62, "hot_rank_chg": 48, "stock_cnt": 5854, "price": "23.58", "change": "-12.61", "market_id": "33", "circulate_market_value": "28267070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 63, "hot_rank_chg": 17, "stock_cnt": 5854, "price": "52.57", "change": "-5.62", "market_id": "17", "circulate_market_value": "208786330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 64, "hot_rank_chg": 197, "stock_cnt": 5854, "price": "7.51", "change": "9.96", "market_id": "17", "circulate_market_value": "34658339000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "火箭网系回收相关", "xgb_concepts": [{"name": "超高清视频", "change_pct": -2.53}, {"name": "国产软件", "change_pct": -2.54}, {"name": "锂电池", "change_pct": -3.19}, {"name": "人工智能", "change_pct": -2.52}, {"name": "养老产业", "change_pct": -1.18}, {"name": "大飞机", "change_pct": -5.21}, {"name": "军民融合", "change_pct": -4.7}, {"name": "物联网", "change_pct": -2.35}, {"name": "大数据", "change_pct": -2.64}, {"name": "智慧城市", "change_pct": -2.89}, {"name": "军工", "change_pct": -4.62}, {"name": "新能源汽车", "change_pct": -2.93}, {"name": "机器人", "change_pct": -3.14}, {"name": "黑色家电", "change_pct": -2.4}, {"name": "家电", "change_pct": -2.24}, {"name": "储能", "change_pct": -2.54}, {"name": "智能制造", "change_pct": -2.74}, {"name": "工业互联网", "change_pct": -2.52}, {"name": "数字经济", "change_pct": -2.53}, {"name": "百度概念股", "change_pct": -2.92}, {"name": "NFT", "change_pct": -2.4}, {"name": "跨境支付", "change_pct": -2.3}, {"name": "华为海思", "change_pct": -2.41}, {"name": "云游戏", "change_pct": -4.15}, {"name": "网红/MCN", "change_pct": -2.75}, {"name": "华为产业链", "change_pct": -2.9}, {"name": "毫米波雷达", "change_pct": -3.59}, {"name": "服务器", "change_pct": -0.98}, {"name": "星闪概念", "change_pct": -1.96}, {"name": "低空经济", "change_pct": -3.9}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 65, "hot_rank_chg": 47, "stock_cnt": 5854, "price": "47.45", "change": "-3.22", "market_id": "17", "circulate_market_value": "69386273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 66, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "38.31", "change": "-4.32", "market_id": "33", "circulate_market_value": "57840392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603318", "name": "水发燃气", "hot_rank": 67, "hot_rank_chg": 221, "stock_cnt": 5854, "price": "8.55", "change": "10.04", "market_id": "17", "circulate_market_value": "3925056400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "氦气", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -3.84}, {"name": "电子特气", "change_pct": 0.21}, {"name": "一带一路", "change_pct": -1.91}, {"name": "强势人气股", "change_pct": -2.05}, {"name": "天然气", "change_pct": -0.58}, {"name": "山东国企改革", "change_pct": -1.53}, {"name": "国企改革", "change_pct": -1.86}, {"name": "氦气", "change_pct": 2.94}]}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 68, "hot_rank_chg": 147, "stock_cnt": 5854, "price": "21.40", "change": "10.03", "market_id": "17", "circulate_market_value": "8965906000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟衬底"}, {"code": "001270", "name": "铖昌科技", "hot_rank": 69, "hot_rank_chg": -6, "stock_cnt": 5854, "price": "149.67", "change": "-10.00", "market_id": "33", "circulate_market_value": "30652903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 70, "hot_rank_chg": -35, "stock_cnt": 5854, "price": "44.61", "change": "3.22", "market_id": "17", "circulate_market_value": "28120048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 71, "hot_rank_chg": 71, "stock_cnt": 5854, "price": "119.63", "change": "-8.27", "market_id": "33", "circulate_market_value": "114348057000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 72, "hot_rank_chg": -11, "stock_cnt": 5854, "price": "52.04", "change": "-8.49", "market_id": "17", "circulate_market_value": "66162464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 73, "hot_rank_chg": -55, "stock_cnt": 5854, "price": "16.45", "change": "-0.66", "market_id": "17", "circulate_market_value": "18037338000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603698", "name": "航天工程", "hot_rank": 74, "hot_rank_chg": -15, "stock_cnt": 5854, "price": "39.68", "change": "-10.00", "market_id": "17", "circulate_market_value": "21268083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 75, "hot_rank_chg": 150, "stock_cnt": 5854, "price": "35.79", "change": "-5.24", "market_id": "33", "circulate_market_value": "50263223000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003020", "name": "立方制药", "hot_rank": 76, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "20.61", "change": "9.98", "market_id": "33", "circulate_market_value": "3473779500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "基药目录新增"}, {"code": "000620", "name": "盈新发展", "hot_rank": 77, "hot_rank_chg": -34, "stock_cnt": 5854, "price": "3.50", "change": "-3.31", "market_id": "33", "circulate_market_value": "16397838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -2.62}, {"name": "房地产", "change_pct": -1.7}, {"name": "京津冀", "change_pct": -1.88}, {"name": "旅游", "change_pct": -2.41}, {"name": "国产芯片", "change_pct": -1.52}, {"name": "内存", "change_pct": -2.77}, {"name": "闪存", "change_pct": -2.82}, {"name": "IP经济/谷子经济", "change_pct": -2.97}]}, {"code": "300418", "name": "昆仑万维", "hot_rank": 78, "hot_rank_chg": 20, "stock_cnt": 5854, "price": "48.62", "change": "-1.56", "market_id": "33", "circulate_market_value": "57179510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601608", "name": "中信重工", "hot_rank": 80, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "5.54", "change": "9.92", "market_id": "17", "circulate_market_value": "25370726000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天", "xgb_concepts": [{"name": "核电", "change_pct": -3.15}, {"name": "一带一路", "change_pct": -1.91}, {"name": "海工装备", "change_pct": -3.69}, {"name": "工业自动化", "change_pct": -2.96}, {"name": "机械", "change_pct": -2.52}, {"name": "军民融合", "change_pct": -4.7}, {"name": "水利", "change_pct": -2.65}, {"name": "风电", "change_pct": -3.09}, {"name": "军工", "change_pct": -4.62}, {"name": "机器人", "change_pct": -3.14}, {"name": "智能制造", "change_pct": -2.74}, {"name": "工业互联网", "change_pct": -2.52}, {"name": "大基建", "change_pct": -1.42}, {"name": "一体化压铸", "change_pct": -2.88}, {"name": "航天", "change_pct": -5.62}, {"name": "煤矿安全", "change_pct": -1.4}, {"name": "深地经济", "change_pct": -1.59}]}, {"code": "603823", "name": "百合花", "hot_rank": 81, "hot_rank_chg": 20, "stock_cnt": 5854, "price": "67.00", "change": "1.27", "market_id": "17", "circulate_market_value": "27896636000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600673", "name": "东阳光", "hot_rank": 82, "hot_rank_chg": 8, "stock_cnt": 5854, "price": "39.17", "change": "5.44", "market_id": "17", "circulate_market_value": "117571024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 83, "hot_rank_chg": -6, "stock_cnt": 5854, "price": "160.25", "change": "1.36", "market_id": "33", "circulate_market_value": "161018800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 84, "hot_rank_chg": -5, "stock_cnt": 5854, "price": "230.42", "change": "-1.48", "market_id": "33", "circulate_market_value": "179514620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 85, "hot_rank_chg": 56, "stock_cnt": 5854, "price": "526.67", "change": "0.67", "market_id": "33", "circulate_market_value": "660484450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 86, "hot_rank_chg": 23, "stock_cnt": 5854, "price": "19.90", "change": "2.47", "market_id": "33", "circulate_market_value": "15965077000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 87, "hot_rank_chg": 8, "stock_cnt": 5854, "price": "736.61", "change": "-7.93", "market_id": "33", "circulate_market_value": "121575891000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 88, "hot_rank_chg": 9, "stock_cnt": 5854, "price": "4.96", "change": "-2.93", "market_id": "33", "circulate_market_value": "99988082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.21}, {"name": "手机产业链", "change_pct": -3.09}, {"name": "超高清视频", "change_pct": -2.53}, {"name": "电竞", "change_pct": -3.71}, {"name": "半导体", "change_pct": -0.75}, {"name": "OLED", "change_pct": -2.22}, {"name": "光伏", "change_pct": -3.22}, {"name": "黑色家电", "change_pct": -2.4}, {"name": "家电", "change_pct": -2.24}, {"name": "智能制造", "change_pct": -2.74}, {"name": "工业互联网", "change_pct": -2.52}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.66}, {"name": "国产芯片", "change_pct": -1.52}, {"name": "腾讯概念股", "change_pct": -2.5}, {"name": "液晶面板/LCD", "change_pct": -2.4}, {"name": "MicroLED", "change_pct": -3.67}, {"name": "MiniLED", "change_pct": -3.08}, {"name": "华为产业链", "change_pct": -2.9}, {"name": "玻璃基板封装", "change_pct": -2.24}]}, {"code": "301165", "name": "锐捷网络", "hot_rank": 89, "hot_rank_chg": 26, "stock_cnt": 5854, "price": "108.39", "change": "4.61", "market_id": "33", "circulate_market_value": "120707045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 90, "hot_rank_chg": 21, "stock_cnt": 5854, "price": "32.72", "change": "-1.80", "market_id": "17", "circulate_market_value": "12530590300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 91, "hot_rank_chg": 56, "stock_cnt": 5854, "price": "399.41", "change": "-3.76", "market_id": "17", "circulate_market_value": "162295590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688268", "name": "华特气体", "hot_rank": 92, "hot_rank_chg": 91, "stock_cnt": 5854, "price": "212.96", "change": "9.09", "market_id": "17", "circulate_market_value": "27191167000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 93, "hot_rank_chg": -35, "stock_cnt": 5854, "price": "14.60", "change": "2.82", "market_id": "17", "circulate_market_value": "11494235500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 94, "hot_rank_chg": -32, "stock_cnt": 5854, "price": "200.09", "change": "-3.35", "market_id": "33", "circulate_market_value": "63777810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 95, "hot_rank_chg": -12, "stock_cnt": 5854, "price": "16.61", "change": "-1.95", "market_id": "17", "circulate_market_value": "82867601000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002192", "name": "融捷股份", "hot_rank": 96, "hot_rank_chg": -40, "stock_cnt": 5854, "price": "72.08", "change": "1.31", "market_id": "33", "circulate_market_value": "18677202000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 97, "hot_rank_chg": 71, "stock_cnt": 5854, "price": "10.90", "change": "-0.18", "market_id": "17", "circulate_market_value": "19501607000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.75}, {"name": "纯碱", "change_pct": -1.6}, {"name": "食品", "change_pct": 0.15}, {"name": "土壤修复", "change_pct": -2.48}, {"name": "东数西算/算力", "change_pct": -2.16}, {"name": "OpenClaw概念", "change_pct": -1.07}, {"name": "DeepSeek概念股", "change_pct": -2.4}]}, {"code": "300540", "name": "蜀道装备", "hot_rank": 98, "hot_rank_chg": 83, "stock_cnt": 5854, "price": "42.22", "change": "-5.63", "market_id": "33", "circulate_market_value": "8738359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 99, "hot_rank_chg": 97, "stock_cnt": 5854, "price": "224.06", "change": "7.31", "market_id": "17", "circulate_market_value": "94753506000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 100, "hot_rank_chg": 91, "stock_cnt": 5854, "price": "13.26", "change": "0.61", "market_id": "17", "circulate_market_value": "55298089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "600745": "ST/风险警示股"};