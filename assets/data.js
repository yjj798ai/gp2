const UPDATE_TIME = "2026-10-12 03:57";
const THS_HOT = [
  {
    "name": "AI视频",
    "rise": 1.91,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "创新药",
    "rise": -1.34,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续135天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "固态电池",
    "rise": -1.36,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.92,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续305天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -1.64,
    "rate": 0,
    "tag": "",
    "hotTag": "连续128天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "AI应用",
    "rise": 0.04,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "2026三季报预增",
    "rise": -1.22,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886113"
  },
  {
    "name": "粮食概念",
    "rise": -3.42,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "短剧游戏",
    "rise": 2.1,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "中船系",
    "rise": 0.44,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "军工ETF",
    "code": "885860"
  },
  {
    "name": "存储芯片",
    "rise": -1.17,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续258天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "风电",
    "rise": -0.48,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "绿色电力ETF",
    "code": "885641"
  },
  {
    "name": "MLCC概念",
    "rise": -2.32,
    "rate": 0,
    "tag": "",
    "hotTag": "连续45天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "文化传媒概念",
    "rise": 1.21,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "CRO概念",
    "rise": -1.66,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "商业航天",
    "rise": -1.11,
    "rate": 0,
    "tag": "",
    "hotTag": "连续234天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "锂电池概念",
    "rise": -1.35,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "猪肉",
    "rise": -0.86,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "钠离子电池",
    "rise": -1.01,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885928"
  },
  {
    "name": "网络安全",
    "rise": -0.23,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "大数据ETF",
    "code": "885459"
  }
];
const THS_EVENTS = [
  {
    "title": "首部AI超写实院线片《三星堆：未来往事》定档",
    "desc": "",
    "heat": 238898,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI影视制作",
      "视频生成模型",
      "视频生成工具",
      "视频语料",
      "红果短剧",
      "AI语料",
      "AI视频",
      "短剧游戏"
    ],
    "stocks": [
      {
        "name": "果麦文化",
        "code": "301052",
        "chg": 20.007877
      }
    ]
  },
  {
    "title": "快手旗下视频大模型可灵AI或将赴港上市，AI视频赛道融资提速",
    "desc": "",
    "heat": 176242,
    "direction": "快手概念",
    "themes": [
      "可灵AI",
      "快手营销服务",
      "快手内容合作",
      "快手基础设施",
      "快手概念"
    ],
    "stocks": [
      {
        "name": "因赛集团",
        "code": "300781",
        "chg": 13.553114
      }
    ]
  },
  {
    "title": "美国今年麻疹确诊病例已超4000例",
    "desc": "",
    "heat": 42271,
    "direction": "疫苗",
    "themes": [
      "肿瘤疫苗",
      "mRNA疫苗",
      "流感疫苗",
      "动物疫苗",
      "生物疫苗"
    ],
    "stocks": [
      {
        "name": "莱美药业",
        "code": "300006",
        "chg": 19.926874
      }
    ]
  },
  {
    "title": "美股光通信龙头Lumentum称2029年初的产能已售罄",
    "desc": "",
    "heat": 20129,
    "direction": "光模块/CPO",
    "themes": [
      "光芯片",
      "光器件",
      "光模块",
      "光模块设备",
      "NPO",
      "MPO连接器",
      "CPO封装",
      "通信传输设备",
      "下游终端应用配套",
      "数通网络设备",
      "光电磁传输材料",
      "共封装光学(CPO)",
      "F5G概念"
    ],
    "stocks": [
      {
        "name": "阿莱德",
        "code": "301419",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "曝 ASML 光刻机配件韩国市场将统一涨价 10%，三星、SK 海力士已接受",
    "desc": "",
    "heat": 5934,
    "direction": "光刻机",
    "themes": [
      "光刻机"
    ],
    "stocks": [
      {
        "name": "凯美特气",
        "code": "002549",
        "chg": 6.655844
      }
    ]
  },
  {
    "title": "四部门联手对“速成车”说不 车企火线研读新规对照自查",
    "desc": "",
    "heat": 1746,
    "direction": "汽车制动系统",
    "themes": [
      "汽车制动系统",
      "自动紧急制动系统（AEBS）"
    ],
    "stocks": [
      {
        "name": "瑞立科密",
        "code": "001285",
        "chg": 1.944444
      }
    ]
  },
  {
    "title": "折叠屏iPhone Duo生产加单30%！",
    "desc": "",
    "heat": 15,
    "direction": "苹果折叠屏手机",
    "themes": [
      "苹果概念",
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "艾比森",
        "code": "300389",
        "chg": 8.954041
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "短剧/互动影游",
    "change": "+4.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+2.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+2.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识产权",
    "change": "+2.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+1.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+1.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "广电",
    "change": "+1.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+1.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+1.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+1.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超级高铁",
    "change": "+1.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "盲盒",
    "change": "+1.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+1.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "虚拟数字人",
    "change": "+0.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "NFT",
    "change": "+0.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "多模态",
    "change": "+0.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 2,
    "hot_rank_chg": -1,
    "stock_cnt": 5832,
    "price": "11.18",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "9714892100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光芯片收购",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.67
      },
      {
        "name": "快递物流",
        "change_pct": -0.66
      },
      {
        "name": "新零售",
        "change_pct": -1.07
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.02
      },
      {
        "name": "旅游",
        "change_pct": -1.35
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.11
      },
      {
        "name": "物业管理",
        "change_pct": -2.32
      },
      {
        "name": "免税店概念",
        "change_pct": -0.68
      },
      {
        "name": "自贸区",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 5,
    "hot_rank_chg": -3,
    "stock_cnt": 5832,
    "price": "6.65",
    "change": "-10.01",
    "market_id": "17",
    "circulate_market_value": "16748091000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.67
      },
      {
        "name": "工业大麻",
        "change_pct": -1.14
      },
      {
        "name": "中药",
        "change_pct": -1.31
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "保健品",
        "change_pct": -1.23
      },
      {
        "name": "民营医院",
        "change_pct": -1.38
      },
      {
        "name": "医药",
        "change_pct": -1.53
      },
      {
        "name": "化学原料药",
        "change_pct": -1.46
      },
      {
        "name": "流感",
        "change_pct": -1.94
      },
      {
        "name": "振兴东北",
        "change_pct": -0.54
      },
      {
        "name": "食品",
        "change_pct": -1.38
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 7,
    "hot_rank_chg": 1,
    "stock_cnt": 5832,
    "price": "12.88",
    "change": "9.52",
    "market_id": "17",
    "circulate_market_value": "3790611200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.22
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 0.16
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.99
      },
      {
        "name": "振兴东北",
        "change_pct": -0.54
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "自贸区",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "600812",
    "name": "华北制药",
    "hot_rank": 8,
    "hot_rank_chg": -2,
    "stock_cnt": 5832,
    "price": "6.63",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "11375292400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "鼠疫",
    "xgb_concepts": [
      {
        "name": "维生素",
        "change_pct": -1.46
      },
      {
        "name": "雄安新区",
        "change_pct": -1.2
      },
      {
        "name": "医药",
        "change_pct": -1.53
      },
      {
        "name": "疫苗",
        "change_pct": -2.9
      },
      {
        "name": "化学原料药",
        "change_pct": -1.46
      },
      {
        "name": "流感",
        "change_pct": -1.94
      },
      {
        "name": "肝素",
        "change_pct": -0.46
      },
      {
        "name": "眼科",
        "change_pct": -0.01
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 9,
    "hot_rank_chg": 2,
    "stock_cnt": 5832,
    "price": "7.67",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "8919039000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI电影",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 3.49
      },
      {
        "name": "新疆概念",
        "change_pct": -1.57
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.11
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.07
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 13,
    "hot_rank_chg": 15,
    "stock_cnt": 5832,
    "price": "5.33",
    "change": "9.90",
    "market_id": "33",
    "circulate_market_value": "3788557600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.42
      },
      {
        "name": "影视",
        "change_pct": 3.49
      },
      {
        "name": "旅游",
        "change_pct": -1.35
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.97
      },
      {
        "name": "AI营销",
        "change_pct": 1.84
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.09
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "605136",
    "name": "丽人丽妆",
    "hot_rank": 21,
    "hot_rank_chg": -8,
    "stock_cnt": 5832,
    "price": "10.38",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "4156759200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "化妆品电商",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.67
      },
      {
        "name": "新零售",
        "change_pct": -1.07
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.75
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.11
      },
      {
        "name": "预制菜",
        "change_pct": -1.22
      },
      {
        "name": "化妆品",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "000582",
    "name": "北部湾港",
    "hot_rank": 26,
    "hot_rank_chg": 29,
    "stock_cnt": 5832,
    "price": "9.49",
    "change": "5.80",
    "market_id": "33",
    "circulate_market_value": "20468490000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "港口",
        "change_pct": 0.07
      },
      {
        "name": "一带一路",
        "change_pct": -0.86
      },
      {
        "name": "天然气",
        "change_pct": -1.8
      },
      {
        "name": "复牌股",
        "change_pct": -0.28
      },
      {
        "name": "RCEP概念",
        "change_pct": -0.81
      },
      {
        "name": "西部大开发",
        "change_pct": -0.96
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "广西概念",
        "change_pct": -0.92
      },
      {
        "name": "星闪概念",
        "change_pct": -1.47
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 30,
    "hot_rank_chg": 40,
    "stock_cnt": 5832,
    "price": "6.42",
    "change": "-3.02",
    "market_id": "33",
    "circulate_market_value": "4209632700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.67
      },
      {
        "name": "新零售",
        "change_pct": -1.07
      },
      {
        "name": "农业种植",
        "change_pct": -3.9
      },
      {
        "name": "冷链",
        "change_pct": -1.11
      },
      {
        "name": "大农业",
        "change_pct": -1.99
      },
      {
        "name": "预制菜",
        "change_pct": -1.22
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.89
      },
      {
        "name": "免税店概念",
        "change_pct": -0.68
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "300369",
    "name": "绿盟科技",
    "hot_rank": 33,
    "hot_rank_chg": 9,
    "stock_cnt": 5832,
    "price": "11.10",
    "change": "6.42",
    "market_id": "33",
    "circulate_market_value": "8969420800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.41
      },
      {
        "name": "泛在电力物联网",
        "change_pct": 0.14
      },
      {
        "name": "国产软件",
        "change_pct": -0.03
      },
      {
        "name": "人工智能",
        "change_pct": -0.42
      },
      {
        "name": "网络安全",
        "change_pct": -0.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.9
      },
      {
        "name": "智能制造",
        "change_pct": -0.77
      },
      {
        "name": "工业互联网",
        "change_pct": -0.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产操作系统",
        "change_pct": -0.52
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.07
      },
      {
        "name": "信创",
        "change_pct": -0.12
      },
      {
        "name": "数据要素",
        "change_pct": 0.27
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.31
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 36,
    "hot_rank_chg": 4,
    "stock_cnt": 5832,
    "price": "11.40",
    "change": "-9.67",
    "market_id": "33",
    "circulate_market_value": "5239574500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": -1.31
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.19
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.99
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.29
      },
      {
        "name": "大农业",
        "change_pct": -1.99
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 37,
    "hot_rank_chg": -16,
    "stock_cnt": 5832,
    "price": "7.71",
    "change": "1.98",
    "market_id": "33",
    "circulate_market_value": "8996407200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.41
      },
      {
        "name": "国产软件",
        "change_pct": -0.03
      },
      {
        "name": "一带一路",
        "change_pct": -0.86
      },
      {
        "name": "量子通信",
        "change_pct": -1.05
      },
      {
        "name": "人工智能",
        "change_pct": -0.42
      },
      {
        "name": "网络安全",
        "change_pct": -0.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.9
      },
      {
        "name": "物联网",
        "change_pct": -0.69
      },
      {
        "name": "大数据",
        "change_pct": -0.21
      },
      {
        "name": "破净股",
        "change_pct": -0.3
      },
      {
        "name": "数字经济",
        "change_pct": -0.26
      },
      {
        "name": "国产芯片",
        "change_pct": -1.48
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.11
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.07
      },
      {
        "name": "信创",
        "change_pct": -0.12
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.22
      },
      {
        "name": "跨境支付",
        "change_pct": 0.39
      },
      {
        "name": "web3.0",
        "change_pct": -0.2
      },
      {
        "name": "数字人民币",
        "change_pct": -0.1
      },
      {
        "name": "智慧政务",
        "change_pct": -0.1
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.26
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.31
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.68
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.43
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "回购",
        "change_pct": -0.64
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.09
      },
      {
        "name": "智能电网",
        "change_pct": -0.25
      },
      {
        "name": "低空经济",
        "change_pct": -0.75
      },
      {
        "name": "量子计算",
        "change_pct": 0.03
      },
      {
        "name": "财税改革",
        "change_pct": -0.04
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "002027",
    "name": "分众传媒",
    "hot_rank": 39,
    "hot_rank_chg": -1,
    "stock_cnt": 5832,
    "price": "5.14",
    "change": "4.68",
    "market_id": "33",
    "circulate_market_value": "74232907000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.41
      },
      {
        "name": "白马股",
        "change_pct": 0.13
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.11
      },
      {
        "name": "传媒",
        "change_pct": 2.26
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 40,
    "hot_rank_chg": -17,
    "stock_cnt": 5832,
    "price": "2.75",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "9596917500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "智慧广电",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 1.75
      },
      {
        "name": "超高清视频",
        "change_pct": -0.27
      },
      {
        "name": "人工智能",
        "change_pct": -0.42
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.9
      },
      {
        "name": "影视",
        "change_pct": 3.49
      },
      {
        "name": "智慧城市",
        "change_pct": -0.64
      },
      {
        "name": "国产芯片",
        "change_pct": -1.48
      },
      {
        "name": "振兴东北",
        "change_pct": -0.54
      },
      {
        "name": "传媒",
        "change_pct": 2.26
      },
      {
        "name": "低价股",
        "change_pct": -1.31
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "在线教育",
        "change_pct": -0.03
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.31
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.09
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 49,
    "hot_rank_chg": -31,
    "stock_cnt": 5832,
    "price": "7.11",
    "change": "-0.70",
    "market_id": "17",
    "circulate_market_value": "30426732000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -3.9
      },
      {
        "name": "橡胶",
        "change_pct": -0.75
      },
      {
        "name": "土地流转",
        "change_pct": -1.66
      },
      {
        "name": "农垦",
        "change_pct": -3.36
      },
      {
        "name": "海南概念",
        "change_pct": -1.71
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.28
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -1.41
      },
      {
        "name": "大农业",
        "change_pct": -1.99
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.89
      },
      {
        "name": "大消费",
        "change_pct": -0.0
      },
      {
        "name": "免税店概念",
        "change_pct": -0.68
      },
      {
        "name": "自贸区",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 52,
    "hot_rank_chg": 85,
    "stock_cnt": 5832,
    "price": "6.69",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3168921100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "微短剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.8
      },
      {
        "name": "VR&AR",
        "change_pct": -1.02
      },
      {
        "name": "游戏",
        "change_pct": 1.01
      },
      {
        "name": "影视",
        "change_pct": 3.49
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.82
      },
      {
        "name": "动漫",
        "change_pct": 2.86
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.07
      },
      {
        "name": "传媒",
        "change_pct": 2.26
      },
      {
        "name": "元宇宙",
        "change_pct": 0.09
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 57,
    "hot_rank_chg": 1119,
    "stock_cnt": 5832,
    "price": "6.56",
    "change": "19.93",
    "market_id": "33",
    "circulate_market_value": "6926185100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "抗癌药物",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -0.83
      },
      {
        "name": "医药",
        "change_pct": -1.53
      },
      {
        "name": "疫苗",
        "change_pct": -2.9
      },
      {
        "name": "化学原料药",
        "change_pct": -1.46
      },
      {
        "name": "干细胞",
        "change_pct": -1.27
      },
      {
        "name": "眼科",
        "change_pct": -0.01
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "600831",
    "name": "广电网络",
    "hot_rank": 59,
    "hot_rank_chg": 1167,
    "stock_cnt": 5832,
    "price": "3.91",
    "change": "10.14",
    "market_id": "17",
    "circulate_market_value": "2779802700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "预重整",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 1.75
      },
      {
        "name": "超高清视频",
        "change_pct": -0.27
      },
      {
        "name": "5G",
        "change_pct": -1.7
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.41
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.9
      },
      {
        "name": "大数据",
        "change_pct": -0.21
      },
      {
        "name": "智慧城市",
        "change_pct": -0.64
      },
      {
        "name": "知识产权",
        "change_pct": 2.19
      },
      {
        "name": "传媒",
        "change_pct": 2.26
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.85
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.6
      },
      {
        "name": "数字乡村",
        "change_pct": -0.67
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "在线教育",
        "change_pct": -0.03
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "000420",
    "name": "吉林化纤",
    "hot_rank": 62,
    "hot_rank_chg": 2,
    "stock_cnt": 5832,
    "price": "3.94",
    "change": "3.41",
    "market_id": "33",
    "circulate_market_value": "9687574900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "粘胶短纤",
        "change_pct": -0.36
      },
      {
        "name": "大飞机",
        "change_pct": -1.23
      },
      {
        "name": "风电",
        "change_pct": 0.25
      },
      {
        "name": "碳纤维",
        "change_pct": -0.52
      },
      {
        "name": "振兴东北",
        "change_pct": -0.54
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.94
      },
      {
        "name": "低空经济",
        "change_pct": -0.75
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 63,
    "hot_rank_chg": -7,
    "stock_cnt": 5832,
    "price": "12.65",
    "change": "0.48",
    "market_id": "33",
    "circulate_market_value": "6659915600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -1.41
      },
      {
        "name": "房地产",
        "change_pct": -1.63
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.97
      },
      {
        "name": "住房租赁",
        "change_pct": -2.48
      },
      {
        "name": "物业管理",
        "change_pct": -2.32
      },
      {
        "name": "新型城镇化",
        "change_pct": -1.25
      },
      {
        "name": "旧改",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "605366",
    "name": "宏柏新材",
    "hot_rank": 67,
    "hot_rank_chg": 23,
    "stock_cnt": 5832,
    "price": "9.20",
    "change": "-7.45",
    "market_id": "17",
    "circulate_market_value": "7110014800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有机硅",
        "change_pct": -1.2
      },
      {
        "name": "气凝胶",
        "change_pct": -3.13
      },
      {
        "name": "光纤概念",
        "change_pct": -2.33
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 68,
    "hot_rank_chg": -29,
    "stock_cnt": 5832,
    "price": "3.61",
    "change": "-4.50",
    "market_id": "17",
    "circulate_market_value": "3634548000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -2.16
      },
      {
        "name": "钢铁",
        "change_pct": -0.28
      },
      {
        "name": "煤化工",
        "change_pct": -3.04
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 69,
    "hot_rank_chg": 4,
    "stock_cnt": 5832,
    "price": "7.41",
    "change": "-8.86",
    "market_id": "33",
    "circulate_market_value": "14190835000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.02
      },
      {
        "name": "林业",
        "change_pct": -3.29
      },
      {
        "name": "碳中和",
        "change_pct": -1.02
      },
      {
        "name": "自贸区",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 70,
    "hot_rank_chg": 18,
    "stock_cnt": 5832,
    "price": "3.86",
    "change": "-4.93",
    "market_id": "33",
    "circulate_market_value": "37500337000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": -0.66
      },
      {
        "name": "深圳本地股",
        "change_pct": -1.41
      },
      {
        "name": "股权转让",
        "change_pct": -1.17
      },
      {
        "name": "房地产",
        "change_pct": -1.63
      },
      {
        "name": "养老产业",
        "change_pct": -0.8
      },
      {
        "name": "冷链",
        "change_pct": -1.11
      },
      {
        "name": "住房租赁",
        "change_pct": -2.48
      },
      {
        "name": "破净股",
        "change_pct": -0.3
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.21
      },
      {
        "name": "物业管理",
        "change_pct": -2.32
      },
      {
        "name": "旧改",
        "change_pct": -1.12
      },
      {
        "name": "REITs",
        "change_pct": -1.15
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 74,
    "hot_rank_chg": 26,
    "stock_cnt": 5832,
    "price": "5.65",
    "change": "-4.40",
    "market_id": "33",
    "circulate_market_value": "4323045100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.31
      },
      {
        "name": "股权转让",
        "change_pct": -1.17
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.75
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "医药商业",
        "change_pct": -0.25
      },
      {
        "name": "保健品",
        "change_pct": -1.23
      },
      {
        "name": "民营医院",
        "change_pct": -1.38
      },
      {
        "name": "医药",
        "change_pct": -1.53
      },
      {
        "name": "食品",
        "change_pct": -1.38
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.17
      },
      {
        "name": "口腔",
        "change_pct": -0.78
      },
      {
        "name": "医美",
        "change_pct": -1.48
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 75,
    "hot_rank_chg": 4,
    "stock_cnt": 5832,
    "price": "3.51",
    "change": "-4.62",
    "market_id": "33",
    "circulate_market_value": "8222835300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.07
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "人工智能",
        "change_pct": -0.42
      },
      {
        "name": "VR&AR",
        "change_pct": -1.02
      },
      {
        "name": "京津冀",
        "change_pct": -0.88
      },
      {
        "name": "装修装饰",
        "change_pct": -0.78
      },
      {
        "name": "住房租赁",
        "change_pct": -2.48
      },
      {
        "name": "破净股",
        "change_pct": -0.3
      },
      {
        "name": "数字经济",
        "change_pct": -0.26
      },
      {
        "name": "房产经纪",
        "change_pct": -3.38
      },
      {
        "name": "物业管理",
        "change_pct": -2.32
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 78,
    "hot_rank_chg": -27,
    "stock_cnt": 5832,
    "price": "9.17",
    "change": "-8.21",
    "market_id": "17",
    "circulate_market_value": "4839945100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -3.9
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "转基因",
        "change_pct": -5.2
      },
      {
        "name": "棉花",
        "change_pct": -3.21
      },
      {
        "name": "大农业",
        "change_pct": -1.99
      },
      {
        "name": "供销社",
        "change_pct": -2.1
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 79,
    "hot_rank_chg": 51,
    "stock_cnt": 5832,
    "price": "10.33",
    "change": "-4.00",
    "market_id": "17",
    "circulate_market_value": "18481799000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.0
      },
      {
        "name": "纯碱",
        "change_pct": -1.4
      },
      {
        "name": "食品",
        "change_pct": -1.38
      },
      {
        "name": "土壤修复",
        "change_pct": -1.53
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.85
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.55
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "603101",
    "name": "汇嘉时代",
    "hot_rank": 80,
    "hot_rank_chg": 5,
    "stock_cnt": 5832,
    "price": "7.90",
    "change": "-1.13",
    "market_id": "17",
    "circulate_market_value": "3716160000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.07
      },
      {
        "name": "新疆概念",
        "change_pct": -1.57
      },
      {
        "name": "物业管理",
        "change_pct": -2.32
      },
      {
        "name": "地摊经济",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 83,
    "hot_rank_chg": -23,
    "stock_cnt": 5832,
    "price": "11.92",
    "change": "3.56",
    "market_id": "17",
    "circulate_market_value": "4484784600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "物业管理",
        "change_pct": -2.32
      },
      {
        "name": "免税店概念",
        "change_pct": -0.68
      },
      {
        "name": "地摊经济",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 84,
    "hot_rank_chg": -38,
    "stock_cnt": 5832,
    "price": "9.75",
    "change": "3.83",
    "market_id": "33",
    "circulate_market_value": "11061736800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.85
      },
      {
        "name": "足球",
        "change_pct": -0.29
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.97
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.26
      },
      {
        "name": "传媒",
        "change_pct": 2.26
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.39
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.12
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.16
      }
    ]
  },
  {
    "code": "002176",
    "name": "江特电机",
    "hot_rank": 86,
    "hot_rank_chg": 301,
    "stock_cnt": 5832,
    "price": "8.38",
    "change": "-1.99",
    "market_id": "33",
    "circulate_market_value": "14243994000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -1.17
      },
      {
        "name": "锂电池",
        "change_pct": -1.22
      },
      {
        "name": "大飞机",
        "change_pct": -1.23
      },
      {
        "name": "军民融合",
        "change_pct": -1.27
      },
      {
        "name": "风电",
        "change_pct": 0.25
      },
      {
        "name": "军工",
        "change_pct": -1.18
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.99
      },
      {
        "name": "机器人",
        "change_pct": -0.76
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.29
      },
      {
        "name": "固态电池",
        "change_pct": -1.49
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.94
      },
      {
        "name": "锂矿/碳酸锂",
        "change_pct": -2.32
      }
    ]
  },
  {
    "code": "002692",
    "name": "远程股份",
    "hot_rank": 87,
    "hot_rank_chg": 36,
    "stock_cnt": 5832,
    "price": "5.24",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "3761595200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "电线电缆",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -0.35
      },
      {
        "name": "充电桩",
        "change_pct": 0.1
      },
      {
        "name": "光伏",
        "change_pct": -0.65
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.65
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.99
      },
      {
        "name": "储能",
        "change_pct": -0.23
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "智能电网",
        "change_pct": -0.25
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 89,
    "hot_rank_chg": 21,
    "stock_cnt": 5832,
    "price": "9.08",
    "change": "-3.81",
    "market_id": "33",
    "circulate_market_value": "9624393000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.14
      },
      {
        "name": "电子烟",
        "change_pct": -1.52
      },
      {
        "name": "一带一路",
        "change_pct": -0.86
      },
      {
        "name": "造纸",
        "change_pct": -0.91
      },
      {
        "name": "包装印刷",
        "change_pct": -0.94
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.68
      },
      {
        "name": "回购",
        "change_pct": -0.64
      },
      {
        "name": "太空算力",
        "change_pct": -1.83
      }
    ]
  },
  {
    "code": "002044",
    "name": "美年健康",
    "hot_rank": 93,
    "hot_rank_chg": 55,
    "stock_cnt": 5832,
    "price": "4.87",
    "change": "-0.61",
    "market_id": "33",
    "circulate_market_value": "18867489000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.1
      },
      {
        "name": "健康中国",
        "change_pct": 0.31
      },
      {
        "name": "人工智能",
        "change_pct": -0.42
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.44
      },
      {
        "name": "基因测序",
        "change_pct": -1.05
      },
      {
        "name": "民营医院",
        "change_pct": -1.38
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.11
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.95
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.1
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.09
      },
      {
        "name": "AI医疗",
        "change_pct": -0.53
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 94,
    "hot_rank_chg": 22,
    "stock_cnt": 5832,
    "price": "12.81",
    "change": "-0.47",
    "market_id": "33",
    "circulate_market_value": "44552287000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.67
      },
      {
        "name": "人工智能",
        "change_pct": -0.42
      },
      {
        "name": "VR&AR",
        "change_pct": -1.02
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.82
      },
      {
        "name": "大数据",
        "change_pct": -0.21
      },
      {
        "name": "教育",
        "change_pct": 0.26
      },
      {
        "name": "百度概念股",
        "change_pct": 0.38
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.11
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.07
      },
      {
        "name": "传媒",
        "change_pct": 2.26
      },
      {
        "name": "快手概念股",
        "change_pct": 1.21
      },
      {
        "name": "NFT",
        "change_pct": 0.91
      },
      {
        "name": "元宇宙",
        "change_pct": 0.09
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.97
      },
      {
        "name": "web3.0",
        "change_pct": -0.2
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.39
      },
      {
        "name": "职业教育",
        "change_pct": 0.08
      },
      {
        "name": "云游戏",
        "change_pct": 0.11
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.12
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.78
      },
      {
        "name": "AI营销",
        "change_pct": 1.84
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.18
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.09
      },
      {
        "name": "AI视频",
        "change_pct": 1.14
      },
      {
        "name": "智谱AI",
        "change_pct": 0.14
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.32
      },
      {
        "name": "区块链",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 97,
    "hot_rank_chg": 18,
    "stock_cnt": 5832,
    "price": "5.40",
    "change": "-1.82",
    "market_id": "33",
    "circulate_market_value": "190982520000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.25
      },
      {
        "name": "手机产业链",
        "change_pct": -1.54
      },
      {
        "name": "超高清视频",
        "change_pct": -0.27
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.36
      },
      {
        "name": "电竞",
        "change_pct": 0.05
      },
      {
        "name": "半导体",
        "change_pct": -1.31
      },
      {
        "name": "人工智能",
        "change_pct": -0.42
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.44
      },
      {
        "name": "VR&AR",
        "change_pct": -1.02
      },
      {
        "name": "OLED",
        "change_pct": -1.27
      },
      {
        "name": "京津冀",
        "change_pct": -0.88
      },
      {
        "name": "物联网",
        "change_pct": -0.69
      },
      {
        "name": "指纹识别",
        "change_pct": -1.86
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.19
      },
      {
        "name": "白马股",
        "change_pct": 0.13
      },
      {
        "name": "智能制造",
        "change_pct": -0.77
      },
      {
        "name": "小米概念股",
        "change_pct": -1.47
      },
      {
        "name": "国产芯片",
        "change_pct": -1.48
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.06
      },
      {
        "name": "全息概念",
        "change_pct": -0.47
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.07
      },
      {
        "name": "MicroLED",
        "change_pct": -1.2
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.34
      },
      {
        "name": "智能手表",
        "change_pct": -1.74
      },
      {
        "name": "MiniLED",
        "change_pct": -0.98
      },
      {
        "name": "传感器",
        "change_pct": -1.4
      },
      {
        "name": "大硅片",
        "change_pct": -1.35
      },
      {
        "name": "AI PC",
        "change_pct": -1.35
      },
      {
        "name": "华为产业链",
        "change_pct": -0.72
      },
      {
        "name": "回购",
        "change_pct": -0.64
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -2.6
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.25
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.66
      }
    ]
  },
  {
    "code": "605399",
    "name": "晨光新材",
    "hot_rank": 99,
    "hot_rank_chg": 22,
    "stock_cnt": 5832,
    "price": "12.84",
    "change": "-1.69",
    "market_id": "17",
    "circulate_market_value": "3993808900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "铜箔/覆铜板",
        "change_pct": -2.89
      },
      {
        "name": "有机硅",
        "change_pct": -1.2
      },
      {
        "name": "气凝胶",
        "change_pct": -3.13
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600825", "name": "新华传媒", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5832, "price": "13.78", "change": "9.98", "market_id": "17", "circulate_market_value": "14398555000.00", "change_type": "1", "change_section": "10", "change_days": "10", "change_reason": "财联社重组"}, {"code": "600693", "name": "东百集团", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5832, "price": "11.18", "change": "10.04", "market_id": "17", "circulate_market_value": "9714892100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片收购", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.67}, {"name": "快递物流", "change_pct": -0.66}, {"name": "新零售", "change_pct": -1.07}, {"name": "福建自贸/海西概念", "change_pct": -2.02}, {"name": "旅游", "change_pct": -1.35}, {"name": "阿里巴巴概念股", "change_pct": 0.11}, {"name": "物业管理", "change_pct": -2.32}, {"name": "免税店概念", "change_pct": -0.68}, {"name": "自贸区", "change_pct": -1.25}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5832, "price": "16.64", "change": "9.98", "market_id": "33", "circulate_market_value": "12675780000.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "机器人投资"}, {"code": "600127", "name": "金健米业", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5832, "price": "14.36", "change": "-5.40", "market_id": "17", "circulate_market_value": "9216007000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5832, "price": "6.65", "change": "-10.01", "market_id": "17", "circulate_market_value": "16748091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.67}, {"name": "工业大麻", "change_pct": -1.14}, {"name": "中药", "change_pct": -1.31}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "保健品", "change_pct": -1.23}, {"name": "民营医院", "change_pct": -1.38}, {"name": "医药", "change_pct": -1.53}, {"name": "化学原料药", "change_pct": -1.46}, {"name": "流感", "change_pct": -1.94}, {"name": "振兴东北", "change_pct": -0.54}, {"name": "食品", "change_pct": -1.38}]}, {"code": "600418", "name": "江淮汽车", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5832, "price": "22.27", "change": "-2.11", "market_id": "17", "circulate_market_value": "50200548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600241", "name": "时代万恒", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5832, "price": "12.88", "change": "9.52", "market_id": "17", "circulate_market_value": "3790611200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.22}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "中日韩自贸区", "change_pct": 0.16}, {"name": "新能源汽车", "change_pct": -0.99}, {"name": "振兴东北", "change_pct": -0.54}, {"name": "国企改革", "change_pct": -0.74}, {"name": "自贸区", "change_pct": -1.25}]}, {"code": "600812", "name": "华北制药", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5832, "price": "6.63", "change": "9.95", "market_id": "17", "circulate_market_value": "11375292400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "鼠疫", "xgb_concepts": [{"name": "维生素", "change_pct": -1.46}, {"name": "雄安新区", "change_pct": -1.2}, {"name": "医药", "change_pct": -1.53}, {"name": "疫苗", "change_pct": -2.9}, {"name": "化学原料药", "change_pct": -1.46}, {"name": "流感", "change_pct": -1.94}, {"name": "肝素", "change_pct": -0.46}, {"name": "眼科", "change_pct": -0.01}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5832, "price": "7.67", "change": "10.04", "market_id": "33", "circulate_market_value": "8919039000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI电影", "xgb_concepts": [{"name": "影视", "change_pct": 3.49}, {"name": "新疆概念", "change_pct": -1.57}, {"name": "阿里巴巴概念股", "change_pct": 0.11}, {"name": "腾讯概念股", "change_pct": -0.07}, {"name": "短剧/互动影游", "change_pct": 4.16}, {"name": "IP经济/谷子经济", "change_pct": 0.75}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5832, "price": "17.82", "change": "10.00", "market_id": "17", "circulate_market_value": "7920000000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "AI漫剧"}, {"code": "601811", "name": "新华文轩", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5832, "price": "23.00", "change": "9.99", "market_id": "17", "circulate_market_value": "18213790000.00", "change_type": "1", "change_section": "11", "change_days": "8", "change_reason": "出版传媒"}, {"code": "601086", "name": "国芳集团", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5832, "price": "13.67", "change": "-8.50", "market_id": "17", "circulate_market_value": "9104220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 13, "hot_rank_chg": 15, "stock_cnt": 5832, "price": "5.33", "change": "9.90", "market_id": "33", "circulate_market_value": "3788557600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.42}, {"name": "影视", "change_pct": 3.49}, {"name": "旅游", "change_pct": -1.35}, {"name": "虚拟数字人", "change_pct": 0.97}, {"name": "AI营销", "change_pct": 1.84}, {"name": "AI大模型/智能体", "change_pct": -0.09}, {"name": "短剧/互动影游", "change_pct": 4.16}, {"name": "IP经济/谷子经济", "change_pct": 0.75}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 14, "hot_rank_chg": 17, "stock_cnt": 5832, "price": "15.19", "change": "-10.01", "market_id": "17", "circulate_market_value": "10334055900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 15, "hot_rank_chg": 1, "stock_cnt": 5832, "price": "45.18", "change": "3.27", "market_id": "33", "circulate_market_value": "28504978000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002733", "name": "雄韬股份", "hot_rank": 16, "hot_rank_chg": -2, "stock_cnt": 5832, "price": "22.02", "change": "5.97", "market_id": "33", "circulate_market_value": "8122358000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 17, "hot_rank_chg": 19, "stock_cnt": 5832, "price": "46.60", "change": "-2.08", "market_id": "33", "circulate_market_value": "341581030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 18, "hot_rank_chg": 15, "stock_cnt": 5832, "price": "38.94", "change": "0.96", "market_id": "17", "circulate_market_value": "154653600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 19, "hot_rank_chg": 15, "stock_cnt": 5832, "price": "53.30", "change": "-4.94", "market_id": "17", "circulate_market_value": "1057690120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002058", "name": "紫竹高科", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5832, "price": "24.89", "change": "1.84", "market_id": "33", "circulate_market_value": "3568375600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605136", "name": "丽人丽妆", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5832, "price": "10.38", "change": "9.96", "market_id": "17", "circulate_market_value": "4156759200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "化妆品电商", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.67}, {"name": "新零售", "change_pct": -1.07}, {"name": "优化生育（三孩）", "change_pct": -0.75}, {"name": "阿里巴巴概念股", "change_pct": 0.11}, {"name": "预制菜", "change_pct": -1.22}, {"name": "化妆品", "change_pct": 0.07}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 22, "hot_rank_chg": -3, "stock_cnt": 5832, "price": "27.98", "change": "9.98", "market_id": "17", "circulate_market_value": "12280333400.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "AI短剧"}, {"code": "300364", "name": "中文在线", "hot_rank": 23, "hot_rank_chg": -6, "stock_cnt": 5832, "price": "25.93", "change": "5.97", "market_id": "33", "circulate_market_value": "17141951000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 24, "hot_rank_chg": -14, "stock_cnt": 5832, "price": "35.10", "change": "-1.63", "market_id": "33", "circulate_market_value": "52966287000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 25, "hot_rank_chg": 36, "stock_cnt": 5832, "price": "96.13", "change": "-0.88", "market_id": "17", "circulate_market_value": "94405434000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000582", "name": "北部湾港", "hot_rank": 26, "hot_rank_chg": 29, "stock_cnt": 5832, "price": "9.49", "change": "5.80", "market_id": "33", "circulate_market_value": "20468490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "港口", "change_pct": 0.07}, {"name": "一带一路", "change_pct": -0.86}, {"name": "天然气", "change_pct": -1.8}, {"name": "复牌股", "change_pct": -0.28}, {"name": "RCEP概念", "change_pct": -0.81}, {"name": "西部大开发", "change_pct": -0.96}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "广西概念", "change_pct": -0.92}, {"name": "星闪概念", "change_pct": -1.47}]}, {"code": "603200", "name": "上海洗霸", "hot_rank": 27, "hot_rank_chg": 0, "stock_cnt": 5832, "price": "52.55", "change": "-2.54", "market_id": "17", "circulate_market_value": "9221479400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001246", "name": "力勤资源", "hot_rank": 28, "hot_rank_chg": 24, "stock_cnt": 5832, "price": "41.19", "change": "-8.57", "market_id": "33", "circulate_market_value": "6480281600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 29, "hot_rank_chg": 18, "stock_cnt": 5832, "price": "20.68", "change": "-3.23", "market_id": "17", "circulate_market_value": "11642767700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 30, "hot_rank_chg": 40, "stock_cnt": 5832, "price": "6.42", "change": "-3.02", "market_id": "33", "circulate_market_value": "4209632700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.67}, {"name": "新零售", "change_pct": -1.07}, {"name": "农业种植", "change_pct": -3.9}, {"name": "冷链", "change_pct": -1.11}, {"name": "大农业", "change_pct": -1.99}, {"name": "预制菜", "change_pct": -1.22}, {"name": "国企改革", "change_pct": -0.74}, {"name": "可降解塑料", "change_pct": -0.89}, {"name": "免税店概念", "change_pct": -0.68}, {"name": "湖北国企改革", "change_pct": -0.72}]}, {"code": "605287", "name": "德才股份", "hot_rank": 31, "hot_rank_chg": 4, "stock_cnt": 5832, "price": "44.20", "change": "10.01", "market_id": "17", "circulate_market_value": "6188000000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "AI漫剧"}, {"code": "002384", "name": "东山精密", "hot_rank": 32, "hot_rank_chg": 31, "stock_cnt": 5832, "price": "136.93", "change": "-5.88", "market_id": "33", "circulate_market_value": "189829030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300369", "name": "绿盟科技", "hot_rank": 33, "hot_rank_chg": 9, "stock_cnt": 5832, "price": "11.10", "change": "6.42", "market_id": "33", "circulate_market_value": "8969420800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.41}, {"name": "泛在电力物联网", "change_pct": 0.14}, {"name": "国产软件", "change_pct": -0.03}, {"name": "人工智能", "change_pct": -0.42}, {"name": "网络安全", "change_pct": -0.23}, {"name": "云计算数据中心", "change_pct": -0.9}, {"name": "智能制造", "change_pct": -0.77}, {"name": "工业互联网", "change_pct": -0.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产操作系统", "change_pct": -0.52}, {"name": "腾讯概念股", "change_pct": -0.07}, {"name": "信创", "change_pct": -0.12}, {"name": "数据要素", "change_pct": 0.27}, {"name": "华为云·鲲鹏", "change_pct": 0.31}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "AI大模型/智能体", "change_pct": -0.09}]}, {"code": "600206", "name": "有研新材", "hot_rank": 34, "hot_rank_chg": -5, "stock_cnt": 5832, "price": "47.30", "change": "-1.36", "market_id": "17", "circulate_market_value": "40041973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002866", "name": "传艺科技", "hot_rank": 35, "hot_rank_chg": 23, "stock_cnt": 5832, "price": "18.85", "change": "2.89", "market_id": "33", "circulate_market_value": "3464043700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 36, "hot_rank_chg": 4, "stock_cnt": 5832, "price": "11.40", "change": "-9.67", "market_id": "33", "circulate_market_value": "5239574500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农机", "change_pct": -1.31}, {"name": "汽车零部件", "change_pct": -1.19}, {"name": "新能源汽车", "change_pct": -0.99}, {"name": "新能源车零部件", "change_pct": -1.29}, {"name": "大农业", "change_pct": -1.99}]}, {"code": "002212", "name": "天融信", "hot_rank": 37, "hot_rank_chg": -16, "stock_cnt": 5832, "price": "7.71", "change": "1.98", "market_id": "33", "circulate_market_value": "8996407200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.41}, {"name": "国产软件", "change_pct": -0.03}, {"name": "一带一路", "change_pct": -0.86}, {"name": "量子通信", "change_pct": -1.05}, {"name": "人工智能", "change_pct": -0.42}, {"name": "网络安全", "change_pct": -0.23}, {"name": "云计算数据中心", "change_pct": -0.9}, {"name": "物联网", "change_pct": -0.69}, {"name": "大数据", "change_pct": -0.21}, {"name": "破净股", "change_pct": -0.3}, {"name": "数字经济", "change_pct": -0.26}, {"name": "国产芯片", "change_pct": -1.48}, {"name": "阿里巴巴概念股", "change_pct": 0.11}, {"name": "腾讯概念股", "change_pct": -0.07}, {"name": "信创", "change_pct": -0.12}, {"name": "华为昇腾", "change_pct": 0.22}, {"name": "跨境支付", "change_pct": 0.39}, {"name": "web3.0", "change_pct": -0.2}, {"name": "数字人民币", "change_pct": -0.1}, {"name": "智慧政务", "change_pct": -0.1}, {"name": "华为鸿蒙", "change_pct": -0.26}, {"name": "华为云·鲲鹏", "change_pct": 0.31}, {"name": "卫星互联网", "change_pct": -1.68}, {"name": "智慧灯杆", "change_pct": -0.43}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "回购", "change_pct": -0.64}, {"name": "AI大模型/智能体", "change_pct": -0.09}, {"name": "智能电网", "change_pct": -0.25}, {"name": "低空经济", "change_pct": -0.75}, {"name": "量子计算", "change_pct": 0.03}, {"name": "财税改革", "change_pct": -0.04}, {"name": "DeepSeek概念股", "change_pct": -0.06}]}, {"code": "300821", "name": "东岳硅材", "hot_rank": 38, "hot_rank_chg": -1, "stock_cnt": 5832, "price": "18.15", "change": "5.83", "market_id": "33", "circulate_market_value": "21776202000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002027", "name": "分众传媒", "hot_rank": 39, "hot_rank_chg": -1, "stock_cnt": 5832, "price": "5.14", "change": "4.68", "market_id": "33", "circulate_market_value": "74232907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.41}, {"name": "白马股", "change_pct": 0.13}, {"name": "阿里巴巴概念股", "change_pct": 0.11}, {"name": "传媒", "change_pct": 2.26}, {"name": "AI大模型/智能体", "change_pct": -0.09}]}, {"code": "601929", "name": "吉视传媒", "hot_rank": 40, "hot_rank_chg": -17, "stock_cnt": 5832, "price": "2.75", "change": "10.00", "market_id": "17", "circulate_market_value": "9596917500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "智慧广电", "xgb_concepts": [{"name": "广电", "change_pct": 1.75}, {"name": "超高清视频", "change_pct": -0.27}, {"name": "人工智能", "change_pct": -0.42}, {"name": "云计算数据中心", "change_pct": -0.9}, {"name": "影视", "change_pct": 3.49}, {"name": "智慧城市", "change_pct": -0.64}, {"name": "国产芯片", "change_pct": -1.48}, {"name": "振兴东北", "change_pct": -0.54}, {"name": "传媒", "change_pct": 2.26}, {"name": "低价股", "change_pct": -1.31}, {"name": "国企改革", "change_pct": -0.74}, {"name": "在线教育", "change_pct": -0.03}, {"name": "医疗信息化", "change_pct": -0.31}, {"name": "AI大模型/智能体", "change_pct": -0.09}, {"name": "IP经济/谷子经济", "change_pct": 0.75}]}, {"code": "002407", "name": "多氟多", "hot_rank": 41, "hot_rank_chg": -17, "stock_cnt": 5832, "price": "30.18", "change": "-5.36", "market_id": "33", "circulate_market_value": "32622114000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 42, "hot_rank_chg": 7, "stock_cnt": 5832, "price": "13.95", "change": "-6.81", "market_id": "17", "circulate_market_value": "4081463100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 43, "hot_rank_chg": 23, "stock_cnt": 5832, "price": "21.75", "change": "-5.56", "market_id": "17", "circulate_market_value": "4592799200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002805", "name": "丰元股份", "hot_rank": 44, "hot_rank_chg": -22, "stock_cnt": 5832, "price": "19.69", "change": "1.29", "market_id": "33", "circulate_market_value": "5489888400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 45, "hot_rank_chg": 22, "stock_cnt": 5832, "price": "40.23", "change": "-4.05", "market_id": "17", "circulate_market_value": "16750473000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 46, "hot_rank_chg": -21, "stock_cnt": 5832, "price": "23.81", "change": "3.52", "market_id": "33", "circulate_market_value": "24326676000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 47, "hot_rank_chg": -3, "stock_cnt": 5832, "price": "55.39", "change": "3.82", "market_id": "17", "circulate_market_value": "7916838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001300", "name": "三柏硕", "hot_rank": 48, "hot_rank_chg": -5, "stock_cnt": 5832, "price": "14.20", "change": "-4.44", "market_id": "33", "circulate_market_value": "3461618000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 49, "hot_rank_chg": -31, "stock_cnt": 5832, "price": "7.11", "change": "-0.70", "market_id": "17", "circulate_market_value": "30426732000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -3.9}, {"name": "橡胶", "change_pct": -0.75}, {"name": "土地流转", "change_pct": -1.66}, {"name": "农垦", "change_pct": -3.36}, {"name": "海南概念", "change_pct": -1.71}, {"name": "自由贸易港", "change_pct": -1.28}, {"name": "海南自由贸易港", "change_pct": -1.41}, {"name": "大农业", "change_pct": -1.99}, {"name": "可降解塑料", "change_pct": -0.89}, {"name": "大消费", "change_pct": -0.0}, {"name": "免税店概念", "change_pct": -0.68}, {"name": "自贸区", "change_pct": -1.25}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 50, "hot_rank_chg": 37, "stock_cnt": 5832, "price": "740.64", "change": "-4.32", "market_id": "33", "circulate_market_value": "822063740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002074", "name": "国轩高科", "hot_rank": 51, "hot_rank_chg": -21, "stock_cnt": 5832, "price": "30.33", "change": "-0.26", "market_id": "33", "circulate_market_value": "52672828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 52, "hot_rank_chg": 85, "stock_cnt": 5832, "price": "6.69", "change": "10.03", "market_id": "33", "circulate_market_value": "3168921100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "微短剧", "xgb_concepts": [{"name": "手游", "change_pct": 0.8}, {"name": "VR&AR", "change_pct": -1.02}, {"name": "游戏", "change_pct": 1.01}, {"name": "影视", "change_pct": 3.49}, {"name": "直播/短视频", "change_pct": 1.82}, {"name": "动漫", "change_pct": 2.86}, {"name": "腾讯概念股", "change_pct": -0.07}, {"name": "传媒", "change_pct": 2.26}, {"name": "元宇宙", "change_pct": 0.09}, {"name": "短剧/互动影游", "change_pct": 4.16}, {"name": "IP经济/谷子经济", "change_pct": 0.75}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 53, "hot_rank_chg": 33, "stock_cnt": 5832, "price": "50.91", "change": "-3.85", "market_id": "17", "circulate_market_value": "124915131000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 54, "hot_rank_chg": 27, "stock_cnt": 5832, "price": "65.51", "change": "-8.60", "market_id": "33", "circulate_market_value": "47510247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 55, "hot_rank_chg": -2, "stock_cnt": 5832, "price": "301.09", "change": "1.12", "market_id": "33", "circulate_market_value": "1282829200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301190", "name": "善水科技", "hot_rank": 56, "hot_rank_chg": -2, "stock_cnt": 5832, "price": "48.00", "change": "9.12", "market_id": "33", "circulate_market_value": "8728992000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 57, "hot_rank_chg": 1119, "stock_cnt": 5832, "price": "6.56", "change": "19.93", "market_id": "33", "circulate_market_value": "6926185100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "抗癌药物", "xgb_concepts": [{"name": "医疗器械", "change_pct": -0.83}, {"name": "医药", "change_pct": -1.53}, {"name": "疫苗", "change_pct": -2.9}, {"name": "化学原料药", "change_pct": -1.46}, {"name": "干细胞", "change_pct": -1.27}, {"name": "眼科", "change_pct": -0.01}, {"name": "肿瘤疫苗", "change_pct": -1.04}]}, {"code": "002912", "name": "中新赛克", "hot_rank": 58, "hot_rank_chg": -32, "stock_cnt": 5832, "price": "29.98", "change": "5.01", "market_id": "33", "circulate_market_value": "4863440600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600831", "name": "广电网络", "hot_rank": 59, "hot_rank_chg": 1167, "stock_cnt": 5832, "price": "3.91", "change": "10.14", "market_id": "17", "circulate_market_value": "2779802700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "预重整", "xgb_concepts": [{"name": "广电", "change_pct": 1.75}, {"name": "超高清视频", "change_pct": -0.27}, {"name": "5G", "change_pct": -1.7}, {"name": "ST摘帽", "change_pct": -1.41}, {"name": "云计算数据中心", "change_pct": -0.9}, {"name": "大数据", "change_pct": -0.21}, {"name": "智慧城市", "change_pct": -0.64}, {"name": "知识产权", "change_pct": 2.19}, {"name": "传媒", "change_pct": 2.26}, {"name": "东数西算/算力", "change_pct": -0.85}, {"name": "AIGC概念", "change_pct": 0.6}, {"name": "数字乡村", "change_pct": -0.67}, {"name": "国企改革", "change_pct": -0.74}, {"name": "在线教育", "change_pct": -0.03}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "陕西国企改革", "change_pct": -0.47}]}, {"code": "603096", "name": "新经典", "hot_rank": 60, "hot_rank_chg": -1, "stock_cnt": 5832, "price": "19.06", "change": "9.98", "market_id": "17", "circulate_market_value": "2939711900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "图书出版"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 61, "hot_rank_chg": 11, "stock_cnt": 5832, "price": "49.42", "change": "-3.10", "market_id": "17", "circulate_market_value": "222540190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000420", "name": "吉林化纤", "hot_rank": 62, "hot_rank_chg": 2, "stock_cnt": 5832, "price": "3.94", "change": "3.41", "market_id": "33", "circulate_market_value": "9687574900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "粘胶短纤", "change_pct": -0.36}, {"name": "大飞机", "change_pct": -1.23}, {"name": "风电", "change_pct": 0.25}, {"name": "碳纤维", "change_pct": -0.52}, {"name": "振兴东北", "change_pct": -0.54}, {"name": "飞行汽车/eVTOL", "change_pct": -0.94}, {"name": "低空经济", "change_pct": -0.75}]}, {"code": "000011", "name": "深物业A", "hot_rank": 63, "hot_rank_chg": -7, "stock_cnt": 5832, "price": "12.65", "change": "0.48", "market_id": "33", "circulate_market_value": "6659915600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -1.41}, {"name": "房地产", "change_pct": -1.63}, {"name": "粤港澳大湾区", "change_pct": -0.97}, {"name": "住房租赁", "change_pct": -2.48}, {"name": "物业管理", "change_pct": -2.32}, {"name": "新型城镇化", "change_pct": -1.25}, {"name": "旧改", "change_pct": -1.12}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 64, "hot_rank_chg": -14, "stock_cnt": 5832, "price": "17.97", "change": "0.45", "market_id": "33", "circulate_market_value": "8229387600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 65, "hot_rank_chg": 0, "stock_cnt": 5832, "price": "20.23", "change": "-2.37", "market_id": "33", "circulate_market_value": "9150813900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 66, "hot_rank_chg": 30, "stock_cnt": 5832, "price": "44.70", "change": "-5.24", "market_id": "33", "circulate_market_value": "51292802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605366", "name": "宏柏新材", "hot_rank": 67, "hot_rank_chg": 23, "stock_cnt": 5832, "price": "9.20", "change": "-7.45", "market_id": "17", "circulate_market_value": "7110014800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有机硅", "change_pct": -1.2}, {"name": "气凝胶", "change_pct": -3.13}, {"name": "光纤概念", "change_pct": -2.33}]}, {"code": "600408", "name": "安泰集团", "hot_rank": 68, "hot_rank_chg": -29, "stock_cnt": 5832, "price": "3.61", "change": "-4.50", "market_id": "17", "circulate_market_value": "3634548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -2.16}, {"name": "钢铁", "change_pct": -0.28}, {"name": "煤化工", "change_pct": -3.04}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 69, "hot_rank_chg": 4, "stock_cnt": 5832, "price": "7.41", "change": "-8.86", "market_id": "33", "circulate_market_value": "14190835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -2.02}, {"name": "林业", "change_pct": -3.29}, {"name": "碳中和", "change_pct": -1.02}, {"name": "自贸区", "change_pct": -1.25}]}, {"code": "000002", "name": "万科A", "hot_rank": 70, "hot_rank_chg": 18, "stock_cnt": 5832, "price": "3.86", "change": "-4.93", "market_id": "33", "circulate_market_value": "37500337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": -0.66}, {"name": "深圳本地股", "change_pct": -1.41}, {"name": "股权转让", "change_pct": -1.17}, {"name": "房地产", "change_pct": -1.63}, {"name": "养老产业", "change_pct": -0.8}, {"name": "冷链", "change_pct": -1.11}, {"name": "住房租赁", "change_pct": -2.48}, {"name": "破净股", "change_pct": -0.3}, {"name": "冰雪产业", "change_pct": -1.21}, {"name": "物业管理", "change_pct": -2.32}, {"name": "旧改", "change_pct": -1.12}, {"name": "REITs", "change_pct": -1.15}]}, {"code": "603002", "name": "宏昌电子", "hot_rank": 71, "hot_rank_chg": 198, "stock_cnt": 5832, "price": "16.01", "change": "-9.45", "market_id": "17", "circulate_market_value": "18156597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001336", "name": "楚环科技", "hot_rank": 72, "hot_rank_chg": 5, "stock_cnt": 5832, "price": "20.45", "change": "-9.99", "market_id": "33", "circulate_market_value": "1314907660.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 73, "hot_rank_chg": 41, "stock_cnt": 5832, "price": "316.28", "change": "-3.12", "market_id": "17", "circulate_market_value": "212134790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 74, "hot_rank_chg": 26, "stock_cnt": 5832, "price": "5.65", "change": "-4.40", "market_id": "33", "circulate_market_value": "4323045100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.31}, {"name": "股权转让", "change_pct": -1.17}, {"name": "优化生育（三孩）", "change_pct": -0.75}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "医药商业", "change_pct": -0.25}, {"name": "保健品", "change_pct": -1.23}, {"name": "民营医院", "change_pct": -1.38}, {"name": "医药", "change_pct": -1.53}, {"name": "食品", "change_pct": -1.38}, {"name": "辅助生殖", "change_pct": -1.17}, {"name": "口腔", "change_pct": -0.78}, {"name": "医美", "change_pct": -1.48}, {"name": "新冠病毒防治", "change_pct": -1.1}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 75, "hot_rank_chg": 4, "stock_cnt": 5832, "price": "3.51", "change": "-4.62", "market_id": "33", "circulate_market_value": "8222835300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.07}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "人工智能", "change_pct": -0.42}, {"name": "VR&AR", "change_pct": -1.02}, {"name": "京津冀", "change_pct": -0.88}, {"name": "装修装饰", "change_pct": -0.78}, {"name": "住房租赁", "change_pct": -2.48}, {"name": "破净股", "change_pct": -0.3}, {"name": "数字经济", "change_pct": -0.26}, {"name": "房产经纪", "change_pct": -3.38}, {"name": "物业管理", "change_pct": -2.32}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "AI大模型/智能体", "change_pct": -0.09}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 76, "hot_rank_chg": -7, "stock_cnt": 5832, "price": "420.60", "change": "-2.64", "market_id": "17", "circulate_market_value": "12654895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 77, "hot_rank_chg": 117, "stock_cnt": 5832, "price": "30.95", "change": "-4.68", "market_id": "17", "circulate_market_value": "45248739000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 78, "hot_rank_chg": -27, "stock_cnt": 5832, "price": "9.17", "change": "-8.21", "market_id": "17", "circulate_market_value": "4839945100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -3.9}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "转基因", "change_pct": -5.2}, {"name": "棉花", "change_pct": -3.21}, {"name": "大农业", "change_pct": -1.99}, {"name": "供销社", "change_pct": -2.1}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 79, "hot_rank_chg": 51, "stock_cnt": 5832, "price": "10.33", "change": "-4.00", "market_id": "17", "circulate_market_value": "18481799000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.0}, {"name": "纯碱", "change_pct": -1.4}, {"name": "食品", "change_pct": -1.38}, {"name": "土壤修复", "change_pct": -1.53}, {"name": "东数西算/算力", "change_pct": -0.85}, {"name": "OpenClaw概念", "change_pct": -0.55}, {"name": "DeepSeek概念股", "change_pct": -0.06}]}, {"code": "603101", "name": "汇嘉时代", "hot_rank": 80, "hot_rank_chg": 5, "stock_cnt": 5832, "price": "7.90", "change": "-1.13", "market_id": "17", "circulate_market_value": "3716160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.07}, {"name": "新疆概念", "change_pct": -1.57}, {"name": "物业管理", "change_pct": -2.32}, {"name": "地摊经济", "change_pct": -1.23}]}, {"code": "600667", "name": "太极实业", "hot_rank": 81, "hot_rank_chg": 44, "stock_cnt": 5832, "price": "15.99", "change": "-2.02", "market_id": "17", "circulate_market_value": "33443759000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300450", "name": "先导智能", "hot_rank": 82, "hot_rank_chg": -20, "stock_cnt": 5832, "price": "37.15", "change": "1.14", "market_id": "33", "circulate_market_value": "57932227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600865", "name": "百大集团", "hot_rank": 83, "hot_rank_chg": -23, "stock_cnt": 5832, "price": "11.92", "change": "3.56", "market_id": "17", "circulate_market_value": "4484784600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.36}, {"name": "物业管理", "change_pct": -2.32}, {"name": "免税店概念", "change_pct": -0.68}, {"name": "地摊经济", "change_pct": -1.23}]}, {"code": "002181", "name": "粤传媒", "hot_rank": 84, "hot_rank_chg": -38, "stock_cnt": 5832, "price": "9.75", "change": "3.83", "market_id": "33", "circulate_market_value": "11061736800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.85}, {"name": "足球", "change_pct": -0.29}, {"name": "粤港澳大湾区", "change_pct": -0.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.26}, {"name": "传媒", "change_pct": 2.26}, {"name": "AIGC概念", "change_pct": 0.6}, {"name": "字节跳动概念股", "change_pct": 0.39}, {"name": "国企改革", "change_pct": -0.74}, {"name": "网红/MCN", "change_pct": 0.12}, {"name": "短剧/互动影游", "change_pct": 4.16}]}, {"code": "601127", "name": "赛力斯", "hot_rank": 85, "hot_rank_chg": 20, "stock_cnt": 5832, "price": "46.10", "change": "-1.03", "market_id": "17", "circulate_market_value": "71787076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002176", "name": "江特电机", "hot_rank": 86, "hot_rank_chg": 301, "stock_cnt": 5832, "price": "8.38", "change": "-1.99", "market_id": "33", "circulate_market_value": "14243994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -1.17}, {"name": "锂电池", "change_pct": -1.22}, {"name": "大飞机", "change_pct": -1.23}, {"name": "军民融合", "change_pct": -1.27}, {"name": "风电", "change_pct": 0.25}, {"name": "军工", "change_pct": -1.18}, {"name": "新能源汽车", "change_pct": -0.99}, {"name": "机器人", "change_pct": -0.76}, {"name": "新能源车零部件", "change_pct": -1.29}, {"name": "固态电池", "change_pct": -1.49}, {"name": "飞行汽车/eVTOL", "change_pct": -0.94}, {"name": "锂矿/碳酸锂", "change_pct": -2.32}]}, {"code": "002692", "name": "远程股份", "hot_rank": 87, "hot_rank_chg": 36, "stock_cnt": 5832, "price": "5.24", "change": "10.08", "market_id": "33", "circulate_market_value": "3761595200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电线电缆", "xgb_concepts": [{"name": "核电", "change_pct": -0.35}, {"name": "充电桩", "change_pct": 0.1}, {"name": "光伏", "change_pct": -0.65}, {"name": "江苏国企改革", "change_pct": -0.65}, {"name": "新能源汽车", "change_pct": -0.99}, {"name": "储能", "change_pct": -0.23}, {"name": "国企改革", "change_pct": -0.74}, {"name": "智能电网", "change_pct": -0.25}]}, {"code": "600737", "name": "中粮糖业", "hot_rank": 88, "hot_rank_chg": 4, "stock_cnt": 5832, "price": "15.16", "change": "-2.88", "market_id": "17", "circulate_market_value": "32424939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 89, "hot_rank_chg": 21, "stock_cnt": 5832, "price": "9.08", "change": "-3.81", "market_id": "33", "circulate_market_value": "9624393000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.14}, {"name": "电子烟", "change_pct": -1.52}, {"name": "一带一路", "change_pct": -0.86}, {"name": "造纸", "change_pct": -0.91}, {"name": "包装印刷", "change_pct": -0.94}, {"name": "卫星互联网", "change_pct": -1.68}, {"name": "回购", "change_pct": -0.64}, {"name": "太空算力", "change_pct": -1.83}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 90, "hot_rank_chg": -14, "stock_cnt": 5832, "price": "30.32", "change": "-1.56", "market_id": "17", "circulate_market_value": "624646370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605378", "name": "野马电池", "hot_rank": 91, "hot_rank_chg": 90, "stock_cnt": 5832, "price": "16.97", "change": "-6.14", "market_id": "17", "circulate_market_value": "4435048400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300207", "name": "欣旺达", "hot_rank": 92, "hot_rank_chg": 72, "stock_cnt": 5832, "price": "20.43", "change": "-1.11", "market_id": "33", "circulate_market_value": "35015503000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002044", "name": "美年健康", "hot_rank": 93, "hot_rank_chg": 55, "stock_cnt": 5832, "price": "4.87", "change": "-0.61", "market_id": "33", "circulate_market_value": "18867489000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.1}, {"name": "健康中国", "change_pct": 0.31}, {"name": "人工智能", "change_pct": -0.42}, {"name": "互联网医疗", "change_pct": -0.44}, {"name": "基因测序", "change_pct": -1.05}, {"name": "民营医院", "change_pct": -1.38}, {"name": "阿里巴巴概念股", "change_pct": 0.11}, {"name": "阿尔茨海默病", "change_pct": -0.95}, {"name": "新冠病毒防治", "change_pct": -1.1}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "AI大模型/智能体", "change_pct": -0.09}, {"name": "AI医疗", "change_pct": -0.53}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 94, "hot_rank_chg": 22, "stock_cnt": 5832, "price": "12.81", "change": "-0.47", "market_id": "33", "circulate_market_value": "44552287000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.67}, {"name": "人工智能", "change_pct": -0.42}, {"name": "VR&AR", "change_pct": -1.02}, {"name": "直播/短视频", "change_pct": 1.82}, {"name": "大数据", "change_pct": -0.21}, {"name": "教育", "change_pct": 0.26}, {"name": "百度概念股", "change_pct": 0.38}, {"name": "阿里巴巴概念股", "change_pct": 0.11}, {"name": "腾讯概念股", "change_pct": -0.07}, {"name": "传媒", "change_pct": 2.26}, {"name": "快手概念股", "change_pct": 1.21}, {"name": "NFT", "change_pct": 0.91}, {"name": "元宇宙", "change_pct": 0.09}, {"name": "虚拟数字人", "change_pct": 0.97}, {"name": "web3.0", "change_pct": -0.2}, {"name": "AIGC概念", "change_pct": 0.6}, {"name": "字节跳动概念股", "change_pct": 0.39}, {"name": "职业教育", "change_pct": 0.08}, {"name": "云游戏", "change_pct": 0.11}, {"name": "网红/MCN", "change_pct": 0.12}, {"name": "5G消息/RCS", "change_pct": -0.78}, {"name": "AI营销", "change_pct": 1.84}, {"name": "词元概念/Token", "change_pct": 0.18}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "AI大模型/智能体", "change_pct": -0.09}, {"name": "AI视频", "change_pct": 1.14}, {"name": "智谱AI", "change_pct": 0.14}, {"name": "小红书概念股", "change_pct": 1.32}, {"name": "区块链", "change_pct": -0.17}]}, {"code": "300502", "name": "新易盛", "hot_rank": 95, "hot_rank_chg": 104, "stock_cnt": 5832, "price": "361.00", "change": "-2.48", "market_id": "33", "circulate_market_value": "452955270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 96, "hot_rank_chg": 12, "stock_cnt": 5832, "price": "36.25", "change": "-10.01", "market_id": "17", "circulate_market_value": "17380549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 97, "hot_rank_chg": 18, "stock_cnt": 5832, "price": "5.40", "change": "-1.82", "market_id": "33", "circulate_market_value": "190982520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.25}, {"name": "手机产业链", "change_pct": -1.54}, {"name": "超高清视频", "change_pct": -0.27}, {"name": "苹果产业链", "change_pct": -1.36}, {"name": "电竞", "change_pct": 0.05}, {"name": "半导体", "change_pct": -1.31}, {"name": "人工智能", "change_pct": -0.42}, {"name": "互联网医疗", "change_pct": -0.44}, {"name": "VR&AR", "change_pct": -1.02}, {"name": "OLED", "change_pct": -1.27}, {"name": "京津冀", "change_pct": -0.88}, {"name": "物联网", "change_pct": -0.69}, {"name": "指纹识别", "change_pct": -1.86}, {"name": "汽车零部件", "change_pct": -1.19}, {"name": "白马股", "change_pct": 0.13}, {"name": "智能制造", "change_pct": -0.77}, {"name": "小米概念股", "change_pct": -1.47}, {"name": "国产芯片", "change_pct": -1.48}, {"name": "液晶面板/LCD", "change_pct": -1.06}, {"name": "全息概念", "change_pct": -0.47}, {"name": "理想汽车概念股", "change_pct": -1.07}, {"name": "MicroLED", "change_pct": -1.2}, {"name": "钙钛矿电池", "change_pct": -1.34}, {"name": "智能手表", "change_pct": -1.74}, {"name": "MiniLED", "change_pct": -0.98}, {"name": "传感器", "change_pct": -1.4}, {"name": "大硅片", "change_pct": -1.35}, {"name": "AI PC", "change_pct": -1.35}, {"name": "华为产业链", "change_pct": -0.72}, {"name": "回购", "change_pct": -0.64}, {"name": "光电共封装CPO", "change_pct": -2.6}, {"name": "智能眼镜/MR头显", "change_pct": -1.25}, {"name": "玻璃基板封装", "change_pct": -2.66}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 98, "hot_rank_chg": -14, "stock_cnt": 5832, "price": "23.52", "change": "3.38", "market_id": "33", "circulate_market_value": "5805587400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605399", "name": "晨光新材", "hot_rank": 99, "hot_rank_chg": 22, "stock_cnt": 5832, "price": "12.84", "change": "-1.69", "market_id": "17", "circulate_market_value": "3993808900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "铜箔/覆铜板", "change_pct": -2.89}, {"name": "有机硅", "change_pct": -1.2}, {"name": "气凝胶", "change_pct": -3.13}]}, {"code": "002185", "name": "华天科技", "hot_rank": 100, "hot_rank_chg": 35, "stock_cnt": 5832, "price": "15.50", "change": "-2.21", "market_id": "33", "circulate_market_value": "51553411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};