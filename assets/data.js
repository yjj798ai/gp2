const UPDATE_TIME = "2026-07-13 06:11";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": -6.6,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续175天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": -0.3,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -6.93,
    "rate": 0,
    "tag": "",
    "hotTag": "连续246天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": -6.06,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续199天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人形机器人",
    "rise": -5.92,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续410天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "猪肉",
    "rise": -0.79,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "PCB概念",
    "rise": -7.18,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "算力租赁",
    "rise": -4.49,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续110天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": -7.22,
    "rate": 0,
    "tag": "",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新未来LOF",
    "code": "886084"
  },
  {
    "name": "先进封装",
    "rise": -6.6,
    "rate": 0,
    "tag": "",
    "hotTag": "连续39天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "培育钻石",
    "rise": -8.43,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "国家大基金持股",
    "rise": -5.26,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "芯片概念",
    "rise": -5.8,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "ST板块",
    "rise": -2.9,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "AI应用",
    "rise": -4.21,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "机器人概念",
    "rise": -5.24,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "医药电商",
    "rise": 0.28,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "医药ETF",
    "code": "885661"
  },
  {
    "name": "禽流感",
    "rise": 0.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885508"
  },
  {
    "name": "中国AI 50",
    "rise": -2.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "人工智能ETF",
    "code": "886102"
  },
  {
    "name": "玻璃基板",
    "rise": -6.94,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "机床ETF",
    "code": "886111"
  }
];
const THS_EVENTS = [
  {
    "title": "国务院批复同意《中医药振兴发展“十五五”规划》",
    "desc": "",
    "heat": 283274,
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
    "title": "消息称三星电子计划将龙仁首座芯片工厂的投产时间提前至 2029 年",
    "desc": "",
    "heat": 250766,
    "direction": "半导体",
    "themes": [
      "半导体",
      "芯片概念"
    ],
    "stocks": [
      {
        "name": "锦华新材",
        "code": "920015",
        "chg": 10.445387
      }
    ]
  },
  {
    "title": "卫健委明确创新药入基药探索路径",
    "desc": "",
    "heat": 182281,
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
    "heat": 136551,
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
    "heat": 47579,
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
    "title": "AI热潮太费电燃气轮机价格3年涨了300%",
    "desc": "",
    "heat": 28976,
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
    "heat": 1071,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "奥飞娱乐",
        "code": "002292",
        "chg": 1.29199
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+3.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保健品",
    "change": "+1.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芬太尼概念",
    "change": "+0.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中药",
    "change": "+0.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+0.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "长寿药NMN",
    "change": "+0.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药商业",
    "change": "+0.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+0.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+0.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+0.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+0.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "+0.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+0.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+0.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+0.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "健康中国",
    "change": "-0.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "-0.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "-0.2%",
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
    "hot_rank_chg": 6,
    "stock_cnt": 5859,
    "price": "6.86",
    "change": "-9.62",
    "market_id": "33",
    "circulate_market_value": "242618540000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -7.34
      },
      {
        "name": "手机产业链",
        "change_pct": -6.89
      },
      {
        "name": "超高清视频",
        "change_pct": -5.07
      },
      {
        "name": "苹果产业链",
        "change_pct": -6.63
      },
      {
        "name": "电竞",
        "change_pct": -4.99
      },
      {
        "name": "半导体",
        "change_pct": -5.46
      },
      {
        "name": "人工智能",
        "change_pct": -4.44
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.04
      },
      {
        "name": "VR&AR",
        "change_pct": -6.34
      },
      {
        "name": "OLED",
        "change_pct": -6.07
      },
      {
        "name": "京津冀",
        "change_pct": -3.25
      },
      {
        "name": "物联网",
        "change_pct": -4.5
      },
      {
        "name": "指纹识别",
        "change_pct": -6.98
      },
      {
        "name": "汽车零部件",
        "change_pct": -5.01
      },
      {
        "name": "白马股",
        "change_pct": -1.24
      },
      {
        "name": "智能制造",
        "change_pct": -5.16
      },
      {
        "name": "小米概念股",
        "change_pct": -6.06
      },
      {
        "name": "国产芯片",
        "change_pct": -5.54
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.2
      },
      {
        "name": "全息概念",
        "change_pct": -5.6
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -5.05
      },
      {
        "name": "MicroLED",
        "change_pct": -7.21
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -6.53
      },
      {
        "name": "智能手表",
        "change_pct": -6.32
      },
      {
        "name": "MiniLED",
        "change_pct": -6.96
      },
      {
        "name": "传感器",
        "change_pct": -6.34
      },
      {
        "name": "大硅片",
        "change_pct": -4.9
      },
      {
        "name": "AI PC",
        "change_pct": -7.02
      },
      {
        "name": "华为产业链",
        "change_pct": -5.48
      },
      {
        "name": "回购",
        "change_pct": -3.0
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -6.45
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -6.7
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 13,
    "hot_rank_chg": 42,
    "stock_cnt": 5859,
    "price": "6.02",
    "change": "-9.34",
    "market_id": "17",
    "circulate_market_value": "74624456000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -3.41
      },
      {
        "name": "核电",
        "change_pct": -5.09
      },
      {
        "name": "强势人气股",
        "change_pct": -4.63
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.39
      },
      {
        "name": "水电",
        "change_pct": -1.68
      },
      {
        "name": "火电",
        "change_pct": -2.17
      },
      {
        "name": "光伏",
        "change_pct": -5.7
      },
      {
        "name": "风电",
        "change_pct": -5.01
      },
      {
        "name": "国企改革",
        "change_pct": -2.97
      },
      {
        "name": "算电协同",
        "change_pct": -5.1
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 20,
    "hot_rank_chg": -19,
    "stock_cnt": 5859,
    "price": "8.00",
    "change": "-6.21",
    "market_id": "33",
    "circulate_market_value": "13021807200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.38
      },
      {
        "name": "电竞",
        "change_pct": -4.99
      },
      {
        "name": "手游",
        "change_pct": -4.99
      },
      {
        "name": "强势人气股",
        "change_pct": -4.63
      },
      {
        "name": "人工智能",
        "change_pct": -4.44
      },
      {
        "name": "游戏",
        "change_pct": -4.8
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -4.28
      },
      {
        "name": "腾讯概念股",
        "change_pct": -4.48
      },
      {
        "name": "快手概念股",
        "change_pct": -4.87
      },
      {
        "name": "元宇宙",
        "change_pct": -5.09
      },
      {
        "name": "虚拟数字人",
        "change_pct": -5.04
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.71
      },
      {
        "name": "web3.0",
        "change_pct": -5.16
      },
      {
        "name": "AIGC概念",
        "change_pct": -5.12
      },
      {
        "name": "数据要素",
        "change_pct": -4.34
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -4.99
      },
      {
        "name": "AI营销",
        "change_pct": -5.18
      },
      {
        "name": "ChatGPT",
        "change_pct": -5.0
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -6.45
      },
      {
        "name": "人工智能大模型",
        "change_pct": -4.08
      },
      {
        "name": "人形机器人",
        "change_pct": -6.3
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.66
      },
      {
        "name": "多模态",
        "change_pct": -5.25
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -5.66
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -4.22
      },
      {
        "name": "小红书概念股",
        "change_pct": -5.23
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 30,
    "hot_rank_chg": 231,
    "stock_cnt": 5859,
    "price": "7.36",
    "change": "7.76",
    "market_id": "17",
    "circulate_market_value": "33966096000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -5.07
      },
      {
        "name": "国产软件",
        "change_pct": -4.08
      },
      {
        "name": "锂电池",
        "change_pct": -5.73
      },
      {
        "name": "人工智能",
        "change_pct": -4.44
      },
      {
        "name": "养老产业",
        "change_pct": -2.2
      },
      {
        "name": "大飞机",
        "change_pct": -6.89
      },
      {
        "name": "军民融合",
        "change_pct": -6.79
      },
      {
        "name": "物联网",
        "change_pct": -4.5
      },
      {
        "name": "大数据",
        "change_pct": -4.24
      },
      {
        "name": "智慧城市",
        "change_pct": -4.8
      },
      {
        "name": "军工",
        "change_pct": -6.47
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.16
      },
      {
        "name": "机器人",
        "change_pct": -5.63
      },
      {
        "name": "黑色家电",
        "change_pct": -4.41
      },
      {
        "name": "家电",
        "change_pct": -3.71
      },
      {
        "name": "储能",
        "change_pct": -4.8
      },
      {
        "name": "智能制造",
        "change_pct": -5.16
      },
      {
        "name": "工业互联网",
        "change_pct": -4.57
      },
      {
        "name": "数字经济",
        "change_pct": -4.28
      },
      {
        "name": "百度概念股",
        "change_pct": -4.65
      },
      {
        "name": "NFT",
        "change_pct": -3.86
      },
      {
        "name": "跨境支付",
        "change_pct": -3.67
      },
      {
        "name": "华为海思",
        "change_pct": -4.95
      },
      {
        "name": "云游戏",
        "change_pct": -5.6
      },
      {
        "name": "网红/MCN",
        "change_pct": -4.35
      },
      {
        "name": "华为产业链",
        "change_pct": -5.48
      },
      {
        "name": "毫米波雷达",
        "change_pct": -6.83
      },
      {
        "name": "服务器",
        "change_pct": -4.49
      },
      {
        "name": "星闪概念",
        "change_pct": -5.07
      },
      {
        "name": "低空经济",
        "change_pct": -5.76
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 32,
    "hot_rank_chg": 136,
    "stock_cnt": 5859,
    "price": "10.94",
    "change": "0.18",
    "market_id": "17",
    "circulate_market_value": "19573173000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.84
      },
      {
        "name": "纯碱",
        "change_pct": -1.93
      },
      {
        "name": "食品",
        "change_pct": -0.35
      },
      {
        "name": "土壤修复",
        "change_pct": -4.4
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.71
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -3.48
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -4.29
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 36,
    "hot_rank_chg": 171,
    "stock_cnt": 5859,
    "price": "8.13",
    "change": "5.86",
    "market_id": "33",
    "circulate_market_value": "4404199900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -2.3
      },
      {
        "name": "油气管网",
        "change_pct": -1.47
      },
      {
        "name": "海工装备",
        "change_pct": -4.81
      },
      {
        "name": "举牌",
        "change_pct": -2.32
      },
      {
        "name": "天然气",
        "change_pct": -1.66
      },
      {
        "name": "山东国企改革",
        "change_pct": -2.49
      },
      {
        "name": "风电",
        "change_pct": -5.01
      },
      {
        "name": "页岩气",
        "change_pct": -2.51
      },
      {
        "name": "国企改革",
        "change_pct": -2.97
      },
      {
        "name": "深地经济",
        "change_pct": -2.15
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 47,
    "hot_rank_chg": 348,
    "stock_cnt": 5859,
    "price": "9.40",
    "change": "6.09",
    "market_id": "33",
    "circulate_market_value": "5482181300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -2.3
      },
      {
        "name": "一带一路",
        "change_pct": -3.26
      },
      {
        "name": "天然气",
        "change_pct": -1.66
      },
      {
        "name": "油气改革",
        "change_pct": -1.36
      },
      {
        "name": "页岩气",
        "change_pct": -2.51
      },
      {
        "name": "深地经济",
        "change_pct": -2.15
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 71,
    "hot_rank_chg": 26,
    "stock_cnt": 5859,
    "price": "4.80",
    "change": "-6.25",
    "market_id": "33",
    "circulate_market_value": "96567967000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -7.34
      },
      {
        "name": "手机产业链",
        "change_pct": -6.89
      },
      {
        "name": "超高清视频",
        "change_pct": -5.07
      },
      {
        "name": "电竞",
        "change_pct": -4.99
      },
      {
        "name": "半导体",
        "change_pct": -5.46
      },
      {
        "name": "OLED",
        "change_pct": -6.07
      },
      {
        "name": "光伏",
        "change_pct": -5.7
      },
      {
        "name": "黑色家电",
        "change_pct": -4.41
      },
      {
        "name": "家电",
        "change_pct": -3.71
      },
      {
        "name": "智能制造",
        "change_pct": -5.16
      },
      {
        "name": "工业互联网",
        "change_pct": -4.57
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -6.06
      },
      {
        "name": "国产芯片",
        "change_pct": -5.54
      },
      {
        "name": "腾讯概念股",
        "change_pct": -4.48
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.2
      },
      {
        "name": "MicroLED",
        "change_pct": -7.21
      },
      {
        "name": "MiniLED",
        "change_pct": -6.96
      },
      {
        "name": "华为产业链",
        "change_pct": -5.48
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -6.7
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 73,
    "hot_rank_chg": 96,
    "stock_cnt": 5859,
    "price": "5.96",
    "change": "6.81",
    "market_id": "17",
    "circulate_market_value": "6507644600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": -0.32
      },
      {
        "name": "化学原料药",
        "change_pct": -0.81
      },
      {
        "name": "数字经济",
        "change_pct": -4.28
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.68
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.3
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 79,
    "hot_rank_chg": -43,
    "stock_cnt": 5859,
    "price": "11.46",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "9271357600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -5.29
      },
      {
        "name": "大飞机",
        "change_pct": -6.89
      },
      {
        "name": "北斗导航",
        "change_pct": -7.36
      },
      {
        "name": "高铁轨交",
        "change_pct": -4.44
      },
      {
        "name": "军民融合",
        "change_pct": -6.79
      },
      {
        "name": "磁悬浮",
        "change_pct": -4.53
      },
      {
        "name": "军工",
        "change_pct": -6.47
      },
      {
        "name": "碳纤维",
        "change_pct": -5.69
      },
      {
        "name": "无人机",
        "change_pct": -6.0
      },
      {
        "name": "航天",
        "change_pct": -7.49
      },
      {
        "name": "卫星互联网",
        "change_pct": -7.3
      },
      {
        "name": "低空经济",
        "change_pct": -5.76
      },
      {
        "name": "海洋经济",
        "change_pct": -5.49
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 87,
    "hot_rank_chg": -3,
    "stock_cnt": 5859,
    "price": "10.52",
    "change": "-1.31",
    "market_id": "33",
    "circulate_market_value": "42497221000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -5.46
      },
      {
        "name": "一带一路",
        "change_pct": -3.26
      },
      {
        "name": "京津冀",
        "change_pct": -3.25
      },
      {
        "name": "光伏",
        "change_pct": -5.7
      },
      {
        "name": "碳中和",
        "change_pct": -2.67
      },
      {
        "name": "国产芯片",
        "change_pct": -5.54
      },
      {
        "name": "IGBT",
        "change_pct": -4.25
      },
      {
        "name": "颗粒硅",
        "change_pct": -4.87
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -5.81
      },
      {
        "name": "大硅片",
        "change_pct": -4.9
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 6, "stock_cnt": 5859, "price": "6.86", "change": "-9.62", "market_id": "33", "circulate_market_value": "242618540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -7.34}, {"name": "手机产业链", "change_pct": -6.89}, {"name": "超高清视频", "change_pct": -5.07}, {"name": "苹果产业链", "change_pct": -6.63}, {"name": "电竞", "change_pct": -4.99}, {"name": "半导体", "change_pct": -5.46}, {"name": "人工智能", "change_pct": -4.44}, {"name": "互联网医疗", "change_pct": -2.04}, {"name": "VR&AR", "change_pct": -6.34}, {"name": "OLED", "change_pct": -6.07}, {"name": "京津冀", "change_pct": -3.25}, {"name": "物联网", "change_pct": -4.5}, {"name": "指纹识别", "change_pct": -6.98}, {"name": "汽车零部件", "change_pct": -5.01}, {"name": "白马股", "change_pct": -1.24}, {"name": "智能制造", "change_pct": -5.16}, {"name": "小米概念股", "change_pct": -6.06}, {"name": "国产芯片", "change_pct": -5.54}, {"name": "液晶面板/LCD", "change_pct": -6.2}, {"name": "全息概念", "change_pct": -5.6}, {"name": "理想汽车概念股", "change_pct": -5.05}, {"name": "MicroLED", "change_pct": -7.21}, {"name": "钙钛矿电池", "change_pct": -6.53}, {"name": "智能手表", "change_pct": -6.32}, {"name": "MiniLED", "change_pct": -6.96}, {"name": "传感器", "change_pct": -6.34}, {"name": "大硅片", "change_pct": -4.9}, {"name": "AI PC", "change_pct": -7.02}, {"name": "华为产业链", "change_pct": -5.48}, {"name": "回购", "change_pct": -3.0}, {"name": "智能眼镜/MR头显", "change_pct": -6.45}, {"name": "玻璃基板封装", "change_pct": -6.7}]}, {"code": "002185", "name": "华天科技", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "24.31", "change": "-4.11", "market_id": "33", "circulate_market_value": "80640758000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 3, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "550.83", "change": "-9.99", "market_id": "17", "circulate_market_value": "368225410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5859, "price": "92.48", "change": "2.73", "market_id": "17", "circulate_market_value": "109356595000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": 6, "stock_cnt": 5859, "price": "100.42", "change": "-0.68", "market_id": "17", "circulate_market_value": "179693010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 6, "hot_rank_chg": 24, "stock_cnt": 5859, "price": "237.39", "change": "-2.06", "market_id": "33", "circulate_market_value": "328988010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5859, "price": "36.73", "change": "-4.37", "market_id": "33", "circulate_market_value": "105050469000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 8, "hot_rank_chg": 39, "stock_cnt": 5859, "price": "73.32", "change": "3.34", "market_id": "33", "circulate_market_value": "111259597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 9, "hot_rank_chg": 20, "stock_cnt": 5859, "price": "70.01", "change": "-10.00", "market_id": "17", "circulate_market_value": "171779770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 10, "hot_rank_chg": 10, "stock_cnt": 5859, "price": "54.00", "change": "-10.00", "market_id": "17", "circulate_market_value": "45713880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 11, "hot_rank_chg": 27, "stock_cnt": 5859, "price": "41.32", "change": "-10.00", "market_id": "17", "circulate_market_value": "141023080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 12, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "22.74", "change": "-9.98", "market_id": "17", "circulate_market_value": "47561669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 13, "hot_rank_chg": 42, "stock_cnt": 5859, "price": "6.02", "change": "-9.34", "market_id": "17", "circulate_market_value": "74624456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -3.41}, {"name": "核电", "change_pct": -5.09}, {"name": "强势人气股", "change_pct": -4.63}, {"name": "电力体制改革", "change_pct": -2.39}, {"name": "水电", "change_pct": -1.68}, {"name": "火电", "change_pct": -2.17}, {"name": "光伏", "change_pct": -5.7}, {"name": "风电", "change_pct": -5.01}, {"name": "国企改革", "change_pct": -2.97}, {"name": "算电协同", "change_pct": -5.1}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 14, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "1102.00", "change": "0.75", "market_id": "33", "circulate_market_value": "1223375620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301269", "name": "华大九天", "hot_rank": 15, "hot_rank_chg": 336, "stock_cnt": 5859, "price": "120.48", "change": "7.17", "market_id": "33", "circulate_market_value": "65703414000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 16, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "52.45", "change": "-9.43", "market_id": "33", "circulate_market_value": "82564460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 17, "hot_rank_chg": 74, "stock_cnt": 5859, "price": "216.80", "change": "-20.00", "market_id": "33", "circulate_market_value": "97567754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 18, "hot_rank_chg": -10, "stock_cnt": 5859, "price": "84.35", "change": "-5.75", "market_id": "33", "circulate_market_value": "123756599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 19, "hot_rank_chg": 4, "stock_cnt": 5859, "price": "32.75", "change": "2.03", "market_id": "33", "circulate_market_value": "37512032000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 20, "hot_rank_chg": -19, "stock_cnt": 5859, "price": "8.00", "change": "-6.21", "market_id": "33", "circulate_market_value": "13021807200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.38}, {"name": "电竞", "change_pct": -4.99}, {"name": "手游", "change_pct": -4.99}, {"name": "强势人气股", "change_pct": -4.63}, {"name": "人工智能", "change_pct": -4.44}, {"name": "游戏", "change_pct": -4.8}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -4.28}, {"name": "腾讯概念股", "change_pct": -4.48}, {"name": "快手概念股", "change_pct": -4.87}, {"name": "元宇宙", "change_pct": -5.09}, {"name": "虚拟数字人", "change_pct": -5.04}, {"name": "东数西算/算力", "change_pct": -4.71}, {"name": "web3.0", "change_pct": -5.16}, {"name": "AIGC概念", "change_pct": -5.12}, {"name": "数据要素", "change_pct": -4.34}, {"name": "字节跳动概念股", "change_pct": -4.99}, {"name": "AI营销", "change_pct": -5.18}, {"name": "ChatGPT", "change_pct": -5.0}, {"name": "智能眼镜/MR头显", "change_pct": -6.45}, {"name": "人工智能大模型", "change_pct": -4.08}, {"name": "人形机器人", "change_pct": -6.3}, {"name": "短剧/互动影游", "change_pct": -5.66}, {"name": "多模态", "change_pct": -5.25}, {"name": "Sora/AI视频", "change_pct": -5.66}, {"name": "IP经济/谷子经济", "change_pct": -4.22}, {"name": "小红书概念股", "change_pct": -5.23}]}, {"code": "600879", "name": "航天电子", "hot_rank": 21, "hot_rank_chg": -7, "stock_cnt": 5859, "price": "21.78", "change": "-6.48", "market_id": "17", "circulate_market_value": "71858739000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601698", "name": "中国卫通", "hot_rank": 22, "hot_rank_chg": 18, "stock_cnt": 5859, "price": "32.34", "change": "-1.64", "market_id": "17", "circulate_market_value": "136616620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 23, "hot_rank_chg": 5, "stock_cnt": 5859, "price": "18.40", "change": "-5.40", "market_id": "33", "circulate_market_value": "59350853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 24, "hot_rank_chg": -5, "stock_cnt": 5859, "price": "38.50", "change": "-10.01", "market_id": "33", "circulate_market_value": "30122578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600536", "name": "中国软件", "hot_rank": 25, "hot_rank_chg": 722, "stock_cnt": 5859, "price": "31.91", "change": "8.83", "market_id": "17", "circulate_market_value": "26921060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300065", "name": "海兰信", "hot_rank": 26, "hot_rank_chg": -13, "stock_cnt": 5859, "price": "26.39", "change": "-8.34", "market_id": "33", "circulate_market_value": "17335461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 27, "hot_rank_chg": -21, "stock_cnt": 5859, "price": "105.19", "change": "-2.15", "market_id": "17", "circulate_market_value": "153898690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 28, "hot_rank_chg": -11, "stock_cnt": 5859, "price": "39.92", "change": "-1.50", "market_id": "33", "circulate_market_value": "160782640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 29, "hot_rank_chg": 19, "stock_cnt": 5859, "price": "28.49", "change": "3.79", "market_id": "33", "circulate_market_value": "21593905000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 30, "hot_rank_chg": 231, "stock_cnt": 5859, "price": "7.36", "change": "7.76", "market_id": "17", "circulate_market_value": "33966096000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -5.07}, {"name": "国产软件", "change_pct": -4.08}, {"name": "锂电池", "change_pct": -5.73}, {"name": "人工智能", "change_pct": -4.44}, {"name": "养老产业", "change_pct": -2.2}, {"name": "大飞机", "change_pct": -6.89}, {"name": "军民融合", "change_pct": -6.79}, {"name": "物联网", "change_pct": -4.5}, {"name": "大数据", "change_pct": -4.24}, {"name": "智慧城市", "change_pct": -4.8}, {"name": "军工", "change_pct": -6.47}, {"name": "新能源汽车", "change_pct": -5.16}, {"name": "机器人", "change_pct": -5.63}, {"name": "黑色家电", "change_pct": -4.41}, {"name": "家电", "change_pct": -3.71}, {"name": "储能", "change_pct": -4.8}, {"name": "智能制造", "change_pct": -5.16}, {"name": "工业互联网", "change_pct": -4.57}, {"name": "数字经济", "change_pct": -4.28}, {"name": "百度概念股", "change_pct": -4.65}, {"name": "NFT", "change_pct": -3.86}, {"name": "跨境支付", "change_pct": -3.67}, {"name": "华为海思", "change_pct": -4.95}, {"name": "云游戏", "change_pct": -5.6}, {"name": "网红/MCN", "change_pct": -4.35}, {"name": "华为产业链", "change_pct": -5.48}, {"name": "毫米波雷达", "change_pct": -6.83}, {"name": "服务器", "change_pct": -4.49}, {"name": "星闪概念", "change_pct": -5.07}, {"name": "低空经济", "change_pct": -5.76}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 31, "hot_rank_chg": 49, "stock_cnt": 5859, "price": "50.13", "change": "-10.00", "market_id": "17", "circulate_market_value": "199095660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 32, "hot_rank_chg": 136, "stock_cnt": 5859, "price": "10.94", "change": "0.18", "market_id": "17", "circulate_market_value": "19573173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.84}, {"name": "纯碱", "change_pct": -1.93}, {"name": "食品", "change_pct": -0.35}, {"name": "土壤修复", "change_pct": -4.4}, {"name": "东数西算/算力", "change_pct": -4.71}, {"name": "OpenClaw概念", "change_pct": -3.48}, {"name": "DeepSeek概念股", "change_pct": -4.29}]}, {"code": "601138", "name": "工业富联", "hot_rank": 33, "hot_rank_chg": 13, "stock_cnt": 5859, "price": "63.36", "change": "-4.39", "market_id": "17", "circulate_market_value": "1257321690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 34, "hot_rank_chg": -7, "stock_cnt": 5859, "price": "17.09", "change": "1.79", "market_id": "17", "circulate_market_value": "16411447000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601127", "name": "赛力斯", "hot_rank": 35, "hot_rank_chg": -32, "stock_cnt": 5859, "price": "53.91", "change": "-10.00", "market_id": "17", "circulate_market_value": "83948835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 36, "hot_rank_chg": 171, "stock_cnt": 5859, "price": "8.13", "change": "5.86", "market_id": "33", "circulate_market_value": "4404199900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -2.3}, {"name": "油气管网", "change_pct": -1.47}, {"name": "海工装备", "change_pct": -4.81}, {"name": "举牌", "change_pct": -2.32}, {"name": "天然气", "change_pct": -1.66}, {"name": "山东国企改革", "change_pct": -2.49}, {"name": "风电", "change_pct": -5.01}, {"name": "页岩气", "change_pct": -2.51}, {"name": "国企改革", "change_pct": -2.97}, {"name": "深地经济", "change_pct": -2.15}]}, {"code": "600183", "name": "生益科技", "hot_rank": 37, "hot_rank_chg": 135, "stock_cnt": 5859, "price": "134.71", "change": "-9.83", "market_id": "17", "circulate_market_value": "322563300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600756", "name": "浪潮软件", "hot_rank": 38, "hot_rank_chg": 464, "stock_cnt": 5859, "price": "14.54", "change": "4.53", "market_id": "17", "circulate_market_value": "4712395900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 39, "hot_rank_chg": -8, "stock_cnt": 5859, "price": "31.98", "change": "3.56", "market_id": "17", "circulate_market_value": "10774700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 40, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "16.35", "change": "-10.02", "market_id": "33", "circulate_market_value": "25982129000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 41, "hot_rank_chg": 68, "stock_cnt": 5859, "price": "19.98", "change": "2.73", "market_id": "33", "circulate_market_value": "16029322000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 42, "hot_rank_chg": -16, "stock_cnt": 5859, "price": "15.30", "change": "-10.00", "market_id": "17", "circulate_market_value": "19526713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 43, "hot_rank_chg": 34, "stock_cnt": 5859, "price": "156.18", "change": "-1.25", "market_id": "33", "circulate_market_value": "156878260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 44, "hot_rank_chg": 7, "stock_cnt": 5859, "price": "29.43", "change": "10.02", "market_id": "17", "circulate_market_value": "5383728000.00", "change_type": "1", "change_section": "9", "change_days": "8", "change_reason": "拟收购存储公司"}, {"code": "002281", "name": "光迅科技", "hot_rank": 45, "hot_rank_chg": 34, "stock_cnt": 5859, "price": "217.50", "change": "-6.84", "market_id": "33", "circulate_market_value": "169742780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 47, "hot_rank_chg": 348, "stock_cnt": 5859, "price": "9.40", "change": "6.09", "market_id": "33", "circulate_market_value": "5482181300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -2.3}, {"name": "一带一路", "change_pct": -3.26}, {"name": "天然气", "change_pct": -1.66}, {"name": "油气改革", "change_pct": -1.36}, {"name": "页岩气", "change_pct": -2.51}, {"name": "深地经济", "change_pct": -2.15}]}, {"code": "002407", "name": "多氟多", "hot_rank": 48, "hot_rank_chg": -24, "stock_cnt": 5859, "price": "36.99", "change": "-10.00", "market_id": "33", "circulate_market_value": "39903604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 49, "hot_rank_chg": 92, "stock_cnt": 5859, "price": "510.98", "change": "-2.30", "market_id": "33", "circulate_market_value": "640918250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 50, "hot_rank_chg": 62, "stock_cnt": 5859, "price": "45.09", "change": "-8.05", "market_id": "17", "circulate_market_value": "65921346000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 51, "hot_rank_chg": -19, "stock_cnt": 5859, "price": "17.07", "change": "-9.20", "market_id": "17", "circulate_market_value": "5815817300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 52, "hot_rank_chg": 43, "stock_cnt": 5859, "price": "719.98", "change": "-10.00", "market_id": "33", "circulate_market_value": "118845666000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 53, "hot_rank_chg": -9, "stock_cnt": 5859, "price": "226.98", "change": "4.74", "market_id": "33", "circulate_market_value": "6998105000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 54, "hot_rank_chg": 186, "stock_cnt": 5859, "price": "20.05", "change": "-0.64", "market_id": "33", "circulate_market_value": "267867110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 55, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "38.83", "change": "1.83", "market_id": "33", "circulate_market_value": "127414591000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 56, "hot_rank_chg": 76, "stock_cnt": 5859, "price": "17.34", "change": "6.32", "market_id": "33", "circulate_market_value": "12005514200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 57, "hot_rank_chg": 59, "stock_cnt": 5859, "price": "32.33", "change": "5.03", "market_id": "33", "circulate_market_value": "9464434100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 58, "hot_rank_chg": 52, "stock_cnt": 5859, "price": "21.87", "change": "-18.92", "market_id": "33", "circulate_market_value": "26227426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 59, "hot_rank_chg": 17, "stock_cnt": 5859, "price": "37.34", "change": "-6.69", "market_id": "33", "circulate_market_value": "56406832000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 60, "hot_rank_chg": -15, "stock_cnt": 5859, "price": "108.00", "change": "-7.38", "market_id": "17", "circulate_market_value": "38958127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 61, "hot_rank_chg": 61, "stock_cnt": 5859, "price": "126.00", "change": "-2.70", "market_id": "33", "circulate_market_value": "242177980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 62, "hot_rank_chg": -23, "stock_cnt": 5859, "price": "30.29", "change": "2.54", "market_id": "33", "circulate_market_value": "23069391000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 63, "hot_rank_chg": -38, "stock_cnt": 5859, "price": "20.44", "change": "-8.59", "market_id": "33", "circulate_market_value": "68750044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 64, "hot_rank_chg": 94, "stock_cnt": 5859, "price": "90.23", "change": "-10.00", "market_id": "33", "circulate_market_value": "58923404000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 65, "hot_rank_chg": 38, "stock_cnt": 5859, "price": "13.22", "change": "-8.76", "market_id": "33", "circulate_market_value": "14055602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 66, "hot_rank_chg": 65, "stock_cnt": 5859, "price": "88.15", "change": "-11.25", "market_id": "33", "circulate_market_value": "72782661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 67, "hot_rank_chg": -34, "stock_cnt": 5859, "price": "54.01", "change": "-10.00", "market_id": "33", "circulate_market_value": "62490278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605090", "name": "九丰能源", "hot_rank": 68, "hot_rank_chg": -59, "stock_cnt": 5859, "price": "41.78", "change": "10.01", "market_id": "17", "circulate_market_value": "29435137000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "氦气"}, {"code": "301308", "name": "江波龙", "hot_rank": 69, "hot_rank_chg": 55, "stock_cnt": 5859, "price": "536.50", "change": "-8.70", "market_id": "33", "circulate_market_value": "151213540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 70, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "42.05", "change": "-5.53", "market_id": "17", "circulate_market_value": "69974221000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 71, "hot_rank_chg": 26, "stock_cnt": 5859, "price": "4.80", "change": "-6.25", "market_id": "33", "circulate_market_value": "96567967000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -7.34}, {"name": "手机产业链", "change_pct": -6.89}, {"name": "超高清视频", "change_pct": -5.07}, {"name": "电竞", "change_pct": -4.99}, {"name": "半导体", "change_pct": -5.46}, {"name": "OLED", "change_pct": -6.07}, {"name": "光伏", "change_pct": -5.7}, {"name": "黑色家电", "change_pct": -4.41}, {"name": "家电", "change_pct": -3.71}, {"name": "智能制造", "change_pct": -5.16}, {"name": "工业互联网", "change_pct": -4.57}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -6.06}, {"name": "国产芯片", "change_pct": -5.54}, {"name": "腾讯概念股", "change_pct": -4.48}, {"name": "液晶面板/LCD", "change_pct": -6.2}, {"name": "MicroLED", "change_pct": -7.21}, {"name": "MiniLED", "change_pct": -6.96}, {"name": "华为产业链", "change_pct": -5.48}, {"name": "玻璃基板封装", "change_pct": -6.7}]}, {"code": "600703", "name": "三安光电", "hot_rank": 72, "hot_rank_chg": 11, "stock_cnt": 5859, "price": "15.68", "change": "-7.44", "market_id": "17", "circulate_market_value": "78227814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 73, "hot_rank_chg": 96, "stock_cnt": 5859, "price": "5.96", "change": "6.81", "market_id": "17", "circulate_market_value": "6507644600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": -0.32}, {"name": "化学原料药", "change_pct": -0.81}, {"name": "数字经济", "change_pct": -4.28}, {"name": "辅助生殖", "change_pct": -1.68}, {"name": "新冠病毒防治", "change_pct": -2.3}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 74, "hot_rank_chg": 46, "stock_cnt": 5859, "price": "108.38", "change": "-5.56", "market_id": "33", "circulate_market_value": "172103930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600629", "name": "华建集团", "hot_rank": 76, "hot_rank_chg": 333, "stock_cnt": 5859, "price": "14.03", "change": "10.04", "market_id": "17", "circulate_market_value": "16131762000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "子公司重整获批"}, {"code": "300394", "name": "天孚通信", "hot_rank": 77, "hot_rank_chg": 99, "stock_cnt": 5859, "price": "260.01", "change": "-4.04", "market_id": "33", "circulate_market_value": "283155040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 78, "hot_rank_chg": 14, "stock_cnt": 5859, "price": "273.58", "change": "0.55", "market_id": "33", "circulate_market_value": "236630820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 79, "hot_rank_chg": -43, "stock_cnt": 5859, "price": "11.46", "change": "-9.98", "market_id": "33", "circulate_market_value": "9271357600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -5.29}, {"name": "大飞机", "change_pct": -6.89}, {"name": "北斗导航", "change_pct": -7.36}, {"name": "高铁轨交", "change_pct": -4.44}, {"name": "军民融合", "change_pct": -6.79}, {"name": "磁悬浮", "change_pct": -4.53}, {"name": "军工", "change_pct": -6.47}, {"name": "碳纤维", "change_pct": -5.69}, {"name": "无人机", "change_pct": -6.0}, {"name": "航天", "change_pct": -7.49}, {"name": "卫星互联网", "change_pct": -7.3}, {"name": "低空经济", "change_pct": -5.76}, {"name": "海洋经济", "change_pct": -5.49}]}, {"code": "688525", "name": "佰维存储", "hot_rank": 80, "hot_rank_chg": 190, "stock_cnt": 5859, "price": "341.32", "change": "-12.14", "market_id": "17", "circulate_market_value": "160955130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 81, "hot_rank_chg": -23, "stock_cnt": 5859, "price": "14.56", "change": "2.54", "market_id": "17", "circulate_market_value": "11462744500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 82, "hot_rank_chg": 69, "stock_cnt": 5859, "price": "163.00", "change": "-0.01", "market_id": "17", "circulate_market_value": "325928700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 83, "hot_rank_chg": 57, "stock_cnt": 5859, "price": "58.97", "change": "-5.04", "market_id": "33", "circulate_market_value": "432252690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 84, "hot_rank_chg": 63, "stock_cnt": 5859, "price": "383.56", "change": "-7.58", "market_id": "17", "circulate_market_value": "155855120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 85, "hot_rank_chg": -17, "stock_cnt": 5859, "price": "28.48", "change": "1.60", "market_id": "17", "circulate_market_value": "696854840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 86, "hot_rank_chg": 19, "stock_cnt": 5859, "price": "245.31", "change": "-16.56", "market_id": "17", "circulate_market_value": "35562797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 87, "hot_rank_chg": -3, "stock_cnt": 5859, "price": "10.52", "change": "-1.31", "market_id": "33", "circulate_market_value": "42497221000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -5.46}, {"name": "一带一路", "change_pct": -3.26}, {"name": "京津冀", "change_pct": -3.25}, {"name": "光伏", "change_pct": -5.7}, {"name": "碳中和", "change_pct": -2.67}, {"name": "国产芯片", "change_pct": -5.54}, {"name": "IGBT", "change_pct": -4.25}, {"name": "颗粒硅", "change_pct": -4.87}, {"name": "异质结电池HJT", "change_pct": -5.81}, {"name": "大硅片", "change_pct": -4.9}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 88, "hot_rank_chg": 92, "stock_cnt": 5859, "price": "19.87", "change": "-10.01", "market_id": "33", "circulate_market_value": "23376436000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 89, "hot_rank_chg": -27, "stock_cnt": 5859, "price": "189.20", "change": "-8.39", "market_id": "33", "circulate_market_value": "60452432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 90, "hot_rank_chg": -15, "stock_cnt": 5859, "price": "28.48", "change": "-3.65", "market_id": "33", "circulate_market_value": "54128005000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 91, "hot_rank_chg": 44, "stock_cnt": 5859, "price": "66.85", "change": "-9.10", "market_id": "33", "circulate_market_value": "75571127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 92, "hot_rank_chg": 14, "stock_cnt": 5859, "price": "360.73", "change": "3.41", "market_id": "33", "circulate_market_value": "1535257400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600129", "name": "太极集团", "hot_rank": 93, "hot_rank_chg": -27, "stock_cnt": 5859, "price": "17.45", "change": "5.25", "market_id": "17", "circulate_market_value": "9622247300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003009", "name": "中天火箭", "hot_rank": 94, "hot_rank_chg": 90, "stock_cnt": 5859, "price": "61.44", "change": "1.32", "market_id": "33", "circulate_market_value": "10118387900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 95, "hot_rank_chg": -6, "stock_cnt": 5859, "price": "55.89", "change": "0.25", "market_id": "17", "circulate_market_value": "356522440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603949", "name": "雪龙集团", "hot_rank": 96, "hot_rank_chg": 1409, "stock_cnt": 5859, "price": "16.99", "change": "-10.01", "market_id": "17", "circulate_market_value": "3571387600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600673", "name": "东阳光", "hot_rank": 97, "hot_rank_chg": -7, "stock_cnt": 5859, "price": "37.84", "change": "1.86", "market_id": "17", "circulate_market_value": "113578952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 98, "hot_rank_chg": 48, "stock_cnt": 5859, "price": "13.64", "change": "-10.03", "market_id": "33", "circulate_market_value": "98203973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 99, "hot_rank_chg": 43, "stock_cnt": 5859, "price": "117.27", "change": "-10.00", "market_id": "33", "circulate_market_value": "112195420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 100, "hot_rank_chg": 59, "stock_cnt": 5859, "price": "326.00", "change": "-7.44", "market_id": "33", "circulate_market_value": "159611740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};