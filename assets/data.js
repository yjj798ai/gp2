const UPDATE_TIME = "2026-09-23 02:59";
const THS_HOT = [
  {
    "name": "玻璃基板",
    "rise": 2.55,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "MLCC概念",
    "rise": 1.29,
    "rate": 0,
    "tag": "",
    "hotTag": "连续38天上榜",
    "rankChg": 0,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "创新药",
    "rise": 0.18,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续128天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 1.57,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续121天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": 0.97,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续251天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "培育钻石",
    "rise": 2.15,
    "rate": 0,
    "tag": "",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "AI应用",
    "rise": -1.27,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续56天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.17,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续298天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "CRO概念",
    "rise": 1.47,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "新股与次新股",
    "rise": 0.23,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "光纤概念",
    "rise": 0.05,
    "rate": 0,
    "tag": "",
    "hotTag": "连续127天上榜",
    "rankChg": 0,
    "etfName": "科创红土LOF",
    "code": "886084"
  },
  {
    "name": "白酒概念",
    "rise": 0.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "算力租赁",
    "rise": -1.09,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续162天上榜",
    "rankChg": -1,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "液冷服务器",
    "rise": 0.1,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "粮食概念",
    "rise": -0.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 1,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "先进封装",
    "rise": 1.41,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "芯片概念",
    "rise": 0.57,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -2,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "PET铜箔",
    "rise": 2.41,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "猪肉",
    "rise": -1.36,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "商业航天",
    "rise": -0.22,
    "rate": 0,
    "tag": "",
    "hotTag": "连续227天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  }
];
const THS_EVENTS = [
  {
    "title": "利好频现，多股连板！A、H房地产股集体大爆发",
    "desc": "",
    "heat": 309663,
    "direction": "房地产",
    "themes": [
      "租售同权",
      "房地产"
    ],
    "stocks": [
      {
        "name": "华远控股",
        "code": "600743",
        "chg": 10.15625
      }
    ]
  },
  {
    "title": "医药工业擘画“十五五”新蓝图 药企开启全球化深度竞速",
    "desc": "",
    "heat": 295888,
    "direction": "CRO概念",
    "themes": [
      "药物发现CRO",
      "药物定制CRO",
      "临床前CRO",
      "临床CRO"
    ],
    "stocks": [
      {
        "name": "益诺思",
        "code": "688710",
        "chg": 12.875396
      }
    ]
  },
  {
    "title": "京东方玻璃基板业务进展：24层基板通过测试，量产前尚需攻克两大环节",
    "desc": "",
    "heat": 282250,
    "direction": "玻璃基板",
    "themes": [
      "显示用玻璃基板",
      "设备及耗材",
      "玻璃基板制造",
      "玻璃基板封装"
    ],
    "stocks": [
      {
        "name": "帝尔激光",
        "code": "300776",
        "chg": 7.144009
      }
    ]
  },
  {
    "title": "美股存储芯片四巨头 集体大涨",
    "desc": "",
    "heat": 135534,
    "direction": "存储芯片",
    "themes": [
      "HBM存储",
      "长鑫存储",
      "长江存储",
      "DRAM存储",
      "SRAM存储",
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "汇通能源",
        "code": "600605",
        "chg": 9.986082
      }
    ]
  },
  {
    "title": "特斯拉人形机器人量产在即 中国产业链公司迎合作新机遇",
    "desc": "",
    "heat": 82571,
    "direction": "人形机器人",
    "themes": [
      "滚柱丝杠",
      "灵巧手",
      "减速器轴承",
      "电机",
      "控制系统",
      "加工设备",
      "电子皮肤",
      "机器人概念",
      "减速器",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "安居宝",
        "code": "300155",
        "chg": 12.831858
      }
    ]
  },
  {
    "title": "千问加速打造Personal Agent 让每个人拥有更懂自己的AI助理",
    "desc": "",
    "heat": 79996,
    "direction": "AI智能体",
    "themes": [
      "OpenClaw",
      "AI智能体"
    ],
    "stocks": [
      {
        "name": "优利德",
        "code": "688628",
        "chg": 18.381042
      }
    ]
  },
  {
    "title": "高盛：中秋期间白酒需求前景谨慎，品牌分化加剧",
    "desc": "",
    "heat": 63325,
    "direction": "白酒",
    "themes": [
      "一线酒企",
      "二线酒企",
      "三线酒企"
    ],
    "stocks": [
      {
        "name": "天佑德酒",
        "code": "002646",
        "chg": 4.957507
      }
    ]
  },
  {
    "title": "小摩：2026年定制AI ASIC市场规模约600亿至700亿美元",
    "desc": "",
    "heat": 59416,
    "direction": "端侧AI芯片",
    "themes": [
      "低功耗SoC",
      "高性能SoC",
      "物联网模组",
      "IP"
    ],
    "stocks": [
      {
        "name": "泰凌微",
        "code": "688591",
        "chg": 6.521739
      }
    ]
  },
  {
    "title": "联合国秘书长呼吁全球监管人工智能，避免出现杀人机器人",
    "desc": "",
    "heat": 2171,
    "direction": "AI安全",
    "themes": [
      "AI安全",
      "AI反诈",
      "AI内容审核"
    ],
    "stocks": [
      {
        "name": "高凌信息",
        "code": "688175",
        "chg": 16.738382
      }
    ]
  },
  {
    "title": "厄尔尼诺致印尼镍加工中心被迫减产 或影响约10万吨镍生铁产量",
    "desc": "",
    "heat": 286,
    "direction": "金属镍",
    "themes": [
      "镍矿",
      "镍冶炼",
      "镍加工",
      "再生镍",
      "金属镍"
    ],
    "stocks": [
      {
        "name": "杉杉股份",
        "code": "600884",
        "chg": 5.950266
      }
    ]
  },
  {
    "title": "国庆文化和旅游消费月启动将发放超3.1亿元消费券",
    "desc": "",
    "heat": 115,
    "direction": "旅游及酒店",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "大连圣亚",
        "code": "600593",
        "chg": 5.687606
      }
    ]
  },
  {
    "title": "宁波中东欧医药交易（集采）平台上线",
    "desc": "",
    "heat": 0,
    "direction": "药械出海/宁波",
    "themes": [
      "宁波药械",
      "跨境贸易"
    ],
    "stocks": [
      {
        "name": "健信超导",
        "code": "688805",
        "chg": 1.676115
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄酒",
    "change": "+5.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+3.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+2.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+2.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "量子计算",
    "change": "+2.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "金刚线",
    "change": "+2.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+2.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+2.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+2.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+1.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+1.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+1.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+1.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物业管理",
    "change": "+1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MicroLED",
    "change": "+1.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+1.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水泥",
    "change": "+1.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+1.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电梯",
    "change": "+1.45%",
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
    "stock_cnt": 5874,
    "price": "9.42",
    "change": "3.63",
    "market_id": "17",
    "circulate_market_value": "23699178000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.12
      },
      {
        "name": "工业大麻",
        "change_pct": -0.75
      },
      {
        "name": "中药",
        "change_pct": -0.66
      },
      {
        "name": "强势人气股",
        "change_pct": -1.1
      },
      {
        "name": "保健品",
        "change_pct": -0.51
      },
      {
        "name": "民营医院",
        "change_pct": -0.86
      },
      {
        "name": "医药",
        "change_pct": 0.09
      },
      {
        "name": "化学原料药",
        "change_pct": -0.06
      },
      {
        "name": "流感",
        "change_pct": -0.22
      },
      {
        "name": "振兴东北",
        "change_pct": -1.01
      },
      {
        "name": "食品",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 3,
    "hot_rank_chg": 3,
    "stock_cnt": 5874,
    "price": "7.06",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "7376908200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "拟收购界面财联社",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.01
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.13
      },
      {
        "name": "复牌股",
        "change_pct": 1.81
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -2.64
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 16,
    "hot_rank_chg": 26,
    "stock_cnt": 5874,
    "price": "12.93",
    "change": "6.77",
    "market_id": "33",
    "circulate_market_value": "4255552600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.01
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.62
      },
      {
        "name": "湖南国企改革",
        "change_pct": -1.18
      },
      {
        "name": "污水处理",
        "change_pct": -0.51
      },
      {
        "name": "智慧城市",
        "change_pct": -0.87
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.11
      },
      {
        "name": "环保",
        "change_pct": -0.6
      },
      {
        "name": "动力电池回收",
        "change_pct": -0.88
      },
      {
        "name": "干细胞",
        "change_pct": 0.73
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 20,
    "hot_rank_chg": 1,
    "stock_cnt": 5874,
    "price": "3.86",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "9042776100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "房产经纪",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.39
      },
      {
        "name": "强势人气股",
        "change_pct": -1.1
      },
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "VR&AR",
        "change_pct": -0.58
      },
      {
        "name": "京津冀",
        "change_pct": -0.62
      },
      {
        "name": "装修装饰",
        "change_pct": 0.06
      },
      {
        "name": "住房租赁",
        "change_pct": 1.26
      },
      {
        "name": "破净股",
        "change_pct": -0.34
      },
      {
        "name": "数字经济",
        "change_pct": -1.54
      },
      {
        "name": "房产经纪",
        "change_pct": 3.82
      },
      {
        "name": "物业管理",
        "change_pct": 1.68
      },
      {
        "name": "华为产业链",
        "change_pct": -0.53
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 21,
    "hot_rank_chg": 33,
    "stock_cnt": 5874,
    "price": "8.81",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "5112976200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AI应用出海",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -0.69
      },
      {
        "name": "国产软件",
        "change_pct": -1.32
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -1.37
      },
      {
        "name": "共享经济",
        "change_pct": -0.44
      },
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "网络安全",
        "change_pct": -1.1
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.35
      },
      {
        "name": "智慧停车",
        "change_pct": -0.44
      },
      {
        "name": "物联网",
        "change_pct": -0.63
      },
      {
        "name": "大数据",
        "change_pct": -1.39
      },
      {
        "name": "智慧城市",
        "change_pct": -0.87
      },
      {
        "name": "智慧安防",
        "change_pct": -0.59
      },
      {
        "name": "数字经济",
        "change_pct": -1.54
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.26
      },
      {
        "name": "信创",
        "change_pct": -1.43
      },
      {
        "name": "华为昇腾",
        "change_pct": -0.88
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.0
      },
      {
        "name": "电子身份证",
        "change_pct": -1.53
      },
      {
        "name": "数据要素",
        "change_pct": -1.58
      },
      {
        "name": "数字乡村",
        "change_pct": -1.56
      },
      {
        "name": "智慧政务",
        "change_pct": -1.71
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -1.49
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.96
      },
      {
        "name": "算电协同",
        "change_pct": -0.67
      },
      {
        "name": "华为产业链",
        "change_pct": -0.53
      },
      {
        "name": "自贸区",
        "change_pct": -1.01
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.14
      },
      {
        "name": "智谱AI",
        "change_pct": -2.11
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.06
      },
      {
        "name": "算力一体机",
        "change_pct": -0.63
      },
      {
        "name": "区块链",
        "change_pct": -1.68
      }
    ]
  },
  {
    "code": "000607",
    "name": "华媒控股",
    "hot_rank": 23,
    "hot_rank_chg": 38,
    "stock_cnt": 5874,
    "price": "4.50",
    "change": "-9.64",
    "market_id": "33",
    "circulate_market_value": "3982779800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.72
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.37
      },
      {
        "name": "教育",
        "change_pct": -1.72
      },
      {
        "name": "知识产权",
        "change_pct": -2.84
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.26
      },
      {
        "name": "传媒",
        "change_pct": -2.64
      },
      {
        "name": "社区团购",
        "change_pct": -1.73
      },
      {
        "name": "NFT",
        "change_pct": -3.31
      },
      {
        "name": "数据要素",
        "change_pct": -1.58
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.05
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      },
      {
        "name": "职业教育",
        "change_pct": -1.73
      },
      {
        "name": "在线教育",
        "change_pct": -1.25
      },
      {
        "name": "区块链",
        "change_pct": -1.68
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 27,
    "hot_rank_chg": 13,
    "stock_cnt": 5874,
    "price": "8.53",
    "change": "-10.02",
    "market_id": "17",
    "circulate_market_value": "3624069400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.12
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.13
      },
      {
        "name": "一带一路",
        "change_pct": -0.62
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.72
      },
      {
        "name": "纺织服装",
        "change_pct": -0.63
      },
      {
        "name": "上海自由贸易港",
        "change_pct": -0.66
      },
      {
        "name": "进口博览会",
        "change_pct": -0.94
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.96
      },
      {
        "name": "物业管理",
        "change_pct": 1.68
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.67
      },
      {
        "name": "自贸区",
        "change_pct": -1.01
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 30,
    "hot_rank_chg": 27,
    "stock_cnt": 5874,
    "price": "7.41",
    "change": "-0.54",
    "market_id": "33",
    "circulate_market_value": "9329399900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "游戏",
        "change_pct": -2.35
      },
      {
        "name": "智能音箱",
        "change_pct": -0.06
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.21
      },
      {
        "name": "数字经济",
        "change_pct": -1.54
      },
      {
        "name": "百度概念股",
        "change_pct": -1.6
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.51
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.79
      },
      {
        "name": "传媒",
        "change_pct": -2.64
      },
      {
        "name": "全息概念",
        "change_pct": -1.08
      },
      {
        "name": "NFT",
        "change_pct": -3.31
      },
      {
        "name": "元宇宙",
        "change_pct": -1.67
      },
      {
        "name": "web3.0",
        "change_pct": -2.17
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.05
      },
      {
        "name": "数字人民币",
        "change_pct": -1.58
      },
      {
        "name": "智慧政务",
        "change_pct": -1.71
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.71
      },
      {
        "name": "盲盒",
        "change_pct": -1.51
      },
      {
        "name": "AI营销",
        "change_pct": -2.99
      },
      {
        "name": "华为产业链",
        "change_pct": -0.53
      },
      {
        "name": "供应链金融",
        "change_pct": -1.67
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.84
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.14
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.38
      },
      {
        "name": "区块链",
        "change_pct": -1.68
      }
    ]
  },
  {
    "code": "000910",
    "name": "大亚圣象",
    "hot_rank": 35,
    "hot_rank_chg": 35,
    "stock_cnt": 5874,
    "price": "7.58",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4148042200.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "七腾机器人",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "林业",
        "change_pct": -1.43
      },
      {
        "name": "装修装饰",
        "change_pct": 0.06
      },
      {
        "name": "家具家居",
        "change_pct": 0.42
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.11
      },
      {
        "name": "破净股",
        "change_pct": -0.34
      }
    ]
  },
  {
    "code": "600770",
    "name": "综艺股份",
    "hot_rank": 36,
    "hot_rank_chg": 64,
    "stock_cnt": 5874,
    "price": "6.52",
    "change": "-1.66",
    "market_id": "17",
    "circulate_market_value": "8476000000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.01
      },
      {
        "name": "半导体",
        "change_pct": 1.22
      },
      {
        "name": "股权转让",
        "change_pct": -0.37
      },
      {
        "name": "手游",
        "change_pct": -2.4
      },
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "游戏",
        "change_pct": -2.35
      },
      {
        "name": "光伏",
        "change_pct": 0.08
      },
      {
        "name": "国产芯片",
        "change_pct": 0.69
      },
      {
        "name": "CPU概念",
        "change_pct": 0.52
      }
    ]
  },
  {
    "code": "002467",
    "name": "二六三",
    "hot_rank": 38,
    "hot_rank_chg": 61,
    "stock_cnt": 5874,
    "price": "4.87",
    "change": "-4.32",
    "market_id": "33",
    "circulate_market_value": "6663140700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.62
      },
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.51
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.74
      },
      {
        "name": "物联网",
        "change_pct": -0.63
      },
      {
        "name": "教育",
        "change_pct": -1.72
      },
      {
        "name": "小米概念股",
        "change_pct": 0.21
      },
      {
        "name": "数字经济",
        "change_pct": -1.54
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.51
      },
      {
        "name": "信创",
        "change_pct": -1.43
      },
      {
        "name": "元宇宙",
        "change_pct": -1.67
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.16
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.0
      },
      {
        "name": "web3.0",
        "change_pct": -2.17
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.73
      },
      {
        "name": "教育信息化",
        "change_pct": -1.49
      },
      {
        "name": "在线教育",
        "change_pct": -1.25
      },
      {
        "name": "智慧政务",
        "change_pct": -1.71
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.78
      },
      {
        "name": "远程办公",
        "change_pct": -1.88
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -2.57
      },
      {
        "name": "词元概念/Token",
        "change_pct": -2.0
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.14
      },
      {
        "name": "AI视频",
        "change_pct": -2.96
      },
      {
        "name": "智谱AI",
        "change_pct": -2.11
      },
      {
        "name": "区块链",
        "change_pct": -1.68
      }
    ]
  },
  {
    "code": "600448",
    "name": "华纺股份",
    "hot_rank": 42,
    "hot_rank_chg": 14,
    "stock_cnt": 5874,
    "price": "3.30",
    "change": "-8.10",
    "market_id": "17",
    "circulate_market_value": "2072106700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -0.63
      },
      {
        "name": "印染",
        "change_pct": -1.42
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.02
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.02
      },
      {
        "name": "抗菌面料",
        "change_pct": -0.87
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.67
      },
      {
        "name": "C2M",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 44,
    "hot_rank_chg": -18,
    "stock_cnt": 5874,
    "price": "7.11",
    "change": "-4.31",
    "market_id": "33",
    "circulate_market_value": "7344173500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.29
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "强势人气股",
        "change_pct": -1.1
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.03
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.92
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.11
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.88
      }
    ]
  },
  {
    "code": "600743",
    "name": "华远控股",
    "hot_rank": 45,
    "hot_rank_chg": 70,
    "stock_cnt": 5874,
    "price": "2.82",
    "change": "10.16",
    "market_id": "17",
    "circulate_market_value": "6616004500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "控股股东拟变更",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.37
      },
      {
        "name": "京津冀",
        "change_pct": -0.6
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.1
      },
      {
        "name": "物业管理",
        "change_pct": 1.67
      },
      {
        "name": "低价股",
        "change_pct": -0.49
      },
      {
        "name": "国资入股",
        "change_pct": -0.35
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 47,
    "hot_rank_chg": -4,
    "stock_cnt": 5874,
    "price": "6.07",
    "change": "1.33",
    "market_id": "33",
    "circulate_market_value": "215032180000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.86
      },
      {
        "name": "手机产业链",
        "change_pct": 0.48
      },
      {
        "name": "超高清视频",
        "change_pct": -0.85
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.9
      },
      {
        "name": "电竞",
        "change_pct": -1.49
      },
      {
        "name": "半导体",
        "change_pct": 1.11
      },
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.1
      },
      {
        "name": "VR&AR",
        "change_pct": -0.65
      },
      {
        "name": "OLED",
        "change_pct": 1.04
      },
      {
        "name": "京津冀",
        "change_pct": -0.6
      },
      {
        "name": "物联网",
        "change_pct": -0.65
      },
      {
        "name": "指纹识别",
        "change_pct": 0.41
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.27
      },
      {
        "name": "白马股",
        "change_pct": -0.28
      },
      {
        "name": "智能制造",
        "change_pct": -0.05
      },
      {
        "name": "小米概念股",
        "change_pct": 0.14
      },
      {
        "name": "国产芯片",
        "change_pct": 0.6
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.84
      },
      {
        "name": "全息概念",
        "change_pct": -1.12
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.8
      },
      {
        "name": "MicroLED",
        "change_pct": 1.51
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.18
      },
      {
        "name": "智能手表",
        "change_pct": 0.45
      },
      {
        "name": "MiniLED",
        "change_pct": 0.71
      },
      {
        "name": "传感器",
        "change_pct": -0.01
      },
      {
        "name": "大硅片",
        "change_pct": 1.74
      },
      {
        "name": "AI PC",
        "change_pct": 0.01
      },
      {
        "name": "华为产业链",
        "change_pct": -0.56
      },
      {
        "name": "回购",
        "change_pct": 0.24
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.0
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.38
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.58
      }
    ]
  },
  {
    "code": "002178",
    "name": "延华智能",
    "hot_rank": 57,
    "hot_rank_chg": 6,
    "stock_cnt": 5874,
    "price": "5.17",
    "change": "-7.33",
    "market_id": "33",
    "circulate_market_value": "3687284200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": -1.77
      },
      {
        "name": "国产软件",
        "change_pct": -1.27
      },
      {
        "name": "体外诊断",
        "change_pct": 0.53
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.1
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.55
      },
      {
        "name": "养老产业",
        "change_pct": -1.23
      },
      {
        "name": "物联网",
        "change_pct": -0.65
      },
      {
        "name": "智慧城市",
        "change_pct": -0.86
      },
      {
        "name": "数字经济",
        "change_pct": -1.51
      },
      {
        "name": "智慧政务",
        "change_pct": -1.64
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.52
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.56
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 59,
    "hot_rank_chg": -1,
    "stock_cnt": 5874,
    "price": "7.69",
    "change": "-5.18",
    "market_id": "33",
    "circulate_market_value": "12511582200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.12
      },
      {
        "name": "电竞",
        "change_pct": -1.49
      },
      {
        "name": "手游",
        "change_pct": -2.44
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "游戏",
        "change_pct": -2.4
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.51
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.51
      },
      {
        "name": "快手概念股",
        "change_pct": -2.65
      },
      {
        "name": "元宇宙",
        "change_pct": -1.68
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.17
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.02
      },
      {
        "name": "web3.0",
        "change_pct": -2.18
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.74
      },
      {
        "name": "数据要素",
        "change_pct": -1.54
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.08
      },
      {
        "name": "AI营销",
        "change_pct": -3.02
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.85
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.38
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.14
      },
      {
        "name": "人形机器人",
        "change_pct": -0.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.03
      },
      {
        "name": "多模态",
        "change_pct": -1.82
      },
      {
        "name": "AI视频",
        "change_pct": -2.99
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.7
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.39
      }
    ]
  },
  {
    "code": "002238",
    "name": "天威视讯",
    "hot_rank": 60,
    "hot_rank_chg": 161,
    "stock_cnt": 5874,
    "price": "7.66",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "6147603200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "文化传媒",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -1.84
      },
      {
        "name": "超高清视频",
        "change_pct": -0.85
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.0
      },
      {
        "name": "5G",
        "change_pct": -0.48
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.55
      },
      {
        "name": "智慧城市",
        "change_pct": -0.86
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.51
      },
      {
        "name": "传媒",
        "change_pct": -2.65
      },
      {
        "name": "在线教育",
        "change_pct": -1.32
      },
      {
        "name": "业绩增长",
        "change_pct": -0.09
      },
      {
        "name": "知识付费",
        "change_pct": -3.24
      },
      {
        "name": "智慧政务",
        "change_pct": -1.64
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.14
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.03
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 61,
    "hot_rank_chg": -13,
    "stock_cnt": 5874,
    "price": "8.38",
    "change": "-2.56",
    "market_id": "33",
    "circulate_market_value": "16048475000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.38
      },
      {
        "name": "林业",
        "change_pct": -1.48
      },
      {
        "name": "碳中和",
        "change_pct": -1.09
      },
      {
        "name": "自贸区",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 64,
    "hot_rank_chg": -18,
    "stock_cnt": 5874,
    "price": "11.73",
    "change": "-1.43",
    "market_id": "33",
    "circulate_market_value": "10399721700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -0.02
      },
      {
        "name": "手机产业链",
        "change_pct": 0.48
      },
      {
        "name": "超高清视频",
        "change_pct": -0.85
      },
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "OLED",
        "change_pct": 1.04
      },
      {
        "name": "包装印刷",
        "change_pct": -0.62
      },
      {
        "name": "光伏",
        "change_pct": 0.03
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "小米概念股",
        "change_pct": 0.14
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.84
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.61
      },
      {
        "name": "华为产业链",
        "change_pct": -0.56
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 2.46
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 66,
    "hot_rank_chg": 12,
    "stock_cnt": 5874,
    "price": "7.29",
    "change": "-4.08",
    "market_id": "17",
    "circulate_market_value": "17429022000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -2.52
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "国企改革",
        "change_pct": -0.77
      },
      {
        "name": "河南国企改革",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 69,
    "hot_rank_chg": 28,
    "stock_cnt": 5874,
    "price": "3.36",
    "change": "5.00",
    "market_id": "33",
    "circulate_market_value": "6649471500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 0.51
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.0
      },
      {
        "name": "共享经济",
        "change_pct": -0.44
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "养老产业",
        "change_pct": -1.23
      },
      {
        "name": "住房租赁",
        "change_pct": 1.24
      },
      {
        "name": "房产经纪",
        "change_pct": 3.8
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.88
      },
      {
        "name": "物业管理",
        "change_pct": 1.67
      },
      {
        "name": "旧改",
        "change_pct": 0.6
      },
      {
        "name": "横琴新区",
        "change_pct": -0.98
      },
      {
        "name": "氮化镓",
        "change_pct": 0.53
      },
      {
        "name": "REITs",
        "change_pct": 0.37
      },
      {
        "name": "华为产业链",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 78,
    "hot_rank_chg": -11,
    "stock_cnt": 5874,
    "price": "5.44",
    "change": "3.82",
    "market_id": "33",
    "circulate_market_value": "14403350000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "装修装饰",
        "change_pct": 0.01
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.1
      },
      {
        "name": "航天",
        "change_pct": -0.54
      },
      {
        "name": "旧改",
        "change_pct": 0.6
      }
    ]
  },
  {
    "code": "002614",
    "name": "奥佳华",
    "hot_rank": 80,
    "hot_rank_chg": 44,
    "stock_cnt": 5874,
    "price": "7.57",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3340454100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "股份转让",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": 0.45
      },
      {
        "name": "股权转让",
        "change_pct": -0.41
      },
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "养老产业",
        "change_pct": -1.23
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.38
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.04
      },
      {
        "name": "小家电",
        "change_pct": -0.61
      },
      {
        "name": "机器人",
        "change_pct": -0.13
      },
      {
        "name": "家电",
        "change_pct": -0.29
      },
      {
        "name": "RCEP概念",
        "change_pct": -0.28
      },
      {
        "name": "血氧仪",
        "change_pct": 0.57
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.56
      },
      {
        "name": "自贸区",
        "change_pct": -1.0
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.7
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 83,
    "hot_rank_chg": 43,
    "stock_cnt": 5874,
    "price": "9.25",
    "change": "-7.03",
    "market_id": "33",
    "circulate_market_value": "2634299700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.24
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.63
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "教育",
        "change_pct": -1.73
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.26
      },
      {
        "name": "职业教育",
        "change_pct": -1.73
      },
      {
        "name": "在线教育",
        "change_pct": -1.32
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.56
      },
      {
        "name": "智谱AI",
        "change_pct": -2.1
      }
    ]
  },
  {
    "code": "002589",
    "name": "瑞康医药",
    "hot_rank": 84,
    "hot_rank_chg": 50,
    "stock_cnt": 5874,
    "price": "3.39",
    "change": "-5.57",
    "market_id": "33",
    "circulate_market_value": "4629355300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.68
      },
      {
        "name": "体外诊断",
        "change_pct": 0.53
      },
      {
        "name": "农业种植",
        "change_pct": -1.2
      },
      {
        "name": "人工智能",
        "change_pct": -1.0
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.1
      },
      {
        "name": "医药商业",
        "change_pct": -1.16
      },
      {
        "name": "养老产业",
        "change_pct": -1.23
      },
      {
        "name": "冷链",
        "change_pct": -0.63
      },
      {
        "name": "医药",
        "change_pct": 0.06
      },
      {
        "name": "破净股",
        "change_pct": -0.35
      },
      {
        "name": "大农业",
        "change_pct": -0.94
      },
      {
        "name": "口腔",
        "change_pct": -0.06
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.52
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.56
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -1.69
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 87,
    "hot_rank_chg": -42,
    "stock_cnt": 5874,
    "price": "4.01",
    "change": "5.25",
    "market_id": "33",
    "circulate_market_value": "38957604000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": -0.92
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.0
      },
      {
        "name": "股权转让",
        "change_pct": -0.41
      },
      {
        "name": "房地产",
        "change_pct": 0.33
      },
      {
        "name": "养老产业",
        "change_pct": -1.23
      },
      {
        "name": "冷链",
        "change_pct": -0.63
      },
      {
        "name": "住房租赁",
        "change_pct": 1.24
      },
      {
        "name": "破净股",
        "change_pct": -0.35
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.01
      },
      {
        "name": "物业管理",
        "change_pct": 1.67
      },
      {
        "name": "旧改",
        "change_pct": 0.6
      },
      {
        "name": "REITs",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "600503",
    "name": "华丽家族",
    "hot_rank": 88,
    "hot_rank_chg": 5,
    "stock_cnt": 5874,
    "price": "2.83",
    "change": "5.99",
    "market_id": "17",
    "circulate_market_value": "4534480700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.33
      },
      {
        "name": "石墨烯",
        "change_pct": 0.41
      },
      {
        "name": "机器人",
        "change_pct": -0.13
      },
      {
        "name": "低价股",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "601949",
    "name": "中国出版",
    "hot_rank": 89,
    "hot_rank_chg": 6,
    "stock_cnt": 5874,
    "price": "6.07",
    "change": "-8.16",
    "market_id": "17",
    "circulate_market_value": "11576125800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.75
      },
      {
        "name": "中字头",
        "change_pct": -0.67
      },
      {
        "name": "数字经济",
        "change_pct": -1.51
      },
      {
        "name": "知识产权",
        "change_pct": -2.87
      },
      {
        "name": "传媒",
        "change_pct": -2.65
      },
      {
        "name": "NFT",
        "change_pct": -3.33
      },
      {
        "name": "国企改革",
        "change_pct": -0.77
      },
      {
        "name": "知识付费",
        "change_pct": -3.24
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 91,
    "hot_rank_chg": -1,
    "stock_cnt": 5874,
    "price": "5.42",
    "change": "-3.04",
    "market_id": "33",
    "circulate_market_value": "4154714200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.68
      },
      {
        "name": "股权转让",
        "change_pct": -0.41
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.74
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "医药商业",
        "change_pct": -1.16
      },
      {
        "name": "保健品",
        "change_pct": -0.53
      },
      {
        "name": "民营医院",
        "change_pct": -0.87
      },
      {
        "name": "医药",
        "change_pct": 0.06
      },
      {
        "name": "食品",
        "change_pct": -0.57
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.56
      },
      {
        "name": "口腔",
        "change_pct": -0.06
      },
      {
        "name": "医美",
        "change_pct": -0.95
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 96,
    "hot_rank_chg": -11,
    "stock_cnt": 5874,
    "price": "8.75",
    "change": "-7.21",
    "market_id": "17",
    "circulate_market_value": "4194049800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.68
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "医药商业",
        "change_pct": -1.16
      },
      {
        "name": "医药",
        "change_pct": 0.06
      },
      {
        "name": "流感",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 99,
    "hot_rank_chg": 7,
    "stock_cnt": 5874,
    "price": "8.64",
    "change": "2.86",
    "market_id": "33",
    "circulate_market_value": "4044570300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "旅游",
        "change_pct": -0.41
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.51
      },
      {
        "name": "广西概念",
        "change_pct": -1.26
      },
      {
        "name": "低空经济",
        "change_pct": -0.36
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "601091", "name": "沈鼓集团", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5874, "price": "35.07", "change": "-7.69", "market_id": "17", "circulate_market_value": "7403381200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5874, "price": "9.42", "change": "3.63", "market_id": "17", "circulate_market_value": "23699178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.12}, {"name": "工业大麻", "change_pct": -0.75}, {"name": "中药", "change_pct": -0.66}, {"name": "强势人气股", "change_pct": -1.1}, {"name": "保健品", "change_pct": -0.51}, {"name": "民营医院", "change_pct": -0.86}, {"name": "医药", "change_pct": 0.09}, {"name": "化学原料药", "change_pct": -0.06}, {"name": "流感", "change_pct": -0.22}, {"name": "振兴东北", "change_pct": -1.01}, {"name": "食品", "change_pct": -0.56}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5874, "price": "7.06", "change": "9.97", "market_id": "17", "circulate_market_value": "7376908200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.01}, {"name": "上海国企改革", "change_pct": -0.13}, {"name": "复牌股", "change_pct": 1.81}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -2.64}, {"name": "国企改革", "change_pct": -0.76}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5874, "price": "18.82", "change": "-9.99", "market_id": "33", "circulate_market_value": "8618646400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301686", "name": "中塑股份", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "330.18", "change": "-23.75", "market_id": "33", "circulate_market_value": "2883480800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920025", "name": "凯达重工", "hot_rank": 6, "hot_rank_chg": 389, "stock_cnt": 5874, "price": "33.57", "change": "688.03", "market_id": "151", "circulate_market_value": "1712070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 7, "hot_rank_chg": 5, "stock_cnt": 5874, "price": "28.39", "change": "7.22", "market_id": "33", "circulate_market_value": "7005211300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 8, "hot_rank_chg": 2, "stock_cnt": 5874, "price": "16.71", "change": "2.39", "market_id": "17", "circulate_market_value": "5903834100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 9, "hot_rank_chg": 5, "stock_cnt": 5874, "price": "16.95", "change": "-6.66", "market_id": "17", "circulate_market_value": "11288700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920229", "name": "世纪数码", "hot_rank": 10, "hot_rank_chg": 3, "stock_cnt": 5874, "price": "92.40", "change": "-30.00", "market_id": "151", "circulate_market_value": "1048740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5874, "price": "16.65", "change": "1.09", "market_id": "17", "circulate_market_value": "10685690600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 12, "hot_rank_chg": 8, "stock_cnt": 5874, "price": "18.50", "change": "9.99", "market_id": "17", "circulate_market_value": "14650222000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "拟收购民族出版社"}, {"code": "000066", "name": "中国长城", "hot_rank": 13, "hot_rank_chg": -5, "stock_cnt": 5874, "price": "15.30", "change": "-3.59", "market_id": "33", "circulate_market_value": "49351525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 14, "hot_rank_chg": -7, "stock_cnt": 5874, "price": "13.44", "change": "-7.12", "market_id": "17", "circulate_market_value": "5168320200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 15, "hot_rank_chg": 13, "stock_cnt": 5874, "price": "45.67", "change": "0.44", "market_id": "17", "circulate_market_value": "181382380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 16, "hot_rank_chg": 26, "stock_cnt": 5874, "price": "12.93", "change": "6.77", "market_id": "33", "circulate_market_value": "4255552600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.01}, {"name": "锂电池", "change_pct": 0.1}, {"name": "ST摘帽", "change_pct": -1.62}, {"name": "湖南国企改革", "change_pct": -1.18}, {"name": "污水处理", "change_pct": -0.51}, {"name": "智慧城市", "change_pct": -0.87}, {"name": "新能源汽车", "change_pct": -0.11}, {"name": "环保", "change_pct": -0.6}, {"name": "动力电池回收", "change_pct": -0.88}, {"name": "干细胞", "change_pct": 0.73}, {"name": "国企改革", "change_pct": -0.76}]}, {"code": "000756", "name": "新华制药", "hot_rank": 17, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "14.78", "change": "-8.36", "market_id": "33", "circulate_market_value": "7378330400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 18, "hot_rank_chg": -7, "stock_cnt": 5874, "price": "18.16", "change": "-0.60", "market_id": "33", "circulate_market_value": "60433902000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002971", "name": "和远气体", "hot_rank": 19, "hot_rank_chg": 129, "stock_cnt": 5874, "price": "42.72", "change": "5.90", "market_id": "33", "circulate_market_value": "6878114200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 20, "hot_rank_chg": 1, "stock_cnt": 5874, "price": "3.86", "change": "9.97", "market_id": "33", "circulate_market_value": "9042776100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": -1.39}, {"name": "强势人气股", "change_pct": -1.1}, {"name": "人工智能", "change_pct": -1.0}, {"name": "VR&AR", "change_pct": -0.58}, {"name": "京津冀", "change_pct": -0.62}, {"name": "装修装饰", "change_pct": 0.06}, {"name": "住房租赁", "change_pct": 1.26}, {"name": "破净股", "change_pct": -0.34}, {"name": "数字经济", "change_pct": -1.54}, {"name": "房产经纪", "change_pct": 3.82}, {"name": "物业管理", "change_pct": 1.68}, {"name": "华为产业链", "change_pct": -0.53}, {"name": "AI大模型/智能体", "change_pct": -1.14}]}, {"code": "603636", "name": "南威软件", "hot_rank": 21, "hot_rank_chg": 33, "stock_cnt": 5874, "price": "8.81", "change": "9.99", "market_id": "17", "circulate_market_value": "5112976200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI应用出海", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.69}, {"name": "国产软件", "change_pct": -1.32}, {"name": "蚂蚁集团概念股", "change_pct": -1.37}, {"name": "共享经济", "change_pct": -0.44}, {"name": "人工智能", "change_pct": -1.0}, {"name": "网络安全", "change_pct": -1.1}, {"name": "福建自贸/海西概念", "change_pct": -1.35}, {"name": "智慧停车", "change_pct": -0.44}, {"name": "物联网", "change_pct": -0.63}, {"name": "大数据", "change_pct": -1.39}, {"name": "智慧城市", "change_pct": -0.87}, {"name": "智慧安防", "change_pct": -0.59}, {"name": "数字经济", "change_pct": -1.54}, {"name": "阿里巴巴概念股", "change_pct": -1.26}, {"name": "信创", "change_pct": -1.43}, {"name": "华为昇腾", "change_pct": -0.88}, {"name": "东数西算/算力", "change_pct": -1.0}, {"name": "电子身份证", "change_pct": -1.53}, {"name": "数据要素", "change_pct": -1.58}, {"name": "数字乡村", "change_pct": -1.56}, {"name": "智慧政务", "change_pct": -1.71}, {"name": "华为云·鲲鹏", "change_pct": -1.49}, {"name": "智慧灯杆", "change_pct": -0.96}, {"name": "算电协同", "change_pct": -0.67}, {"name": "华为产业链", "change_pct": -0.53}, {"name": "自贸区", "change_pct": -1.01}, {"name": "AI大模型/智能体", "change_pct": -1.14}, {"name": "智谱AI", "change_pct": -2.11}, {"name": "DeepSeek概念股", "change_pct": -1.06}, {"name": "算力一体机", "change_pct": -0.63}, {"name": "区块链", "change_pct": -1.68}]}, {"code": "603598", "name": "引力传媒", "hot_rank": 22, "hot_rank_chg": 54, "stock_cnt": 5874, "price": "19.55", "change": "3.06", "market_id": "17", "circulate_market_value": "5273013600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000607", "name": "华媒控股", "hot_rank": 23, "hot_rank_chg": 38, "stock_cnt": 5874, "price": "4.50", "change": "-9.64", "market_id": "33", "circulate_market_value": "3982779800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": -0.72}, {"name": "浙江国企改革", "change_pct": -0.37}, {"name": "教育", "change_pct": -1.72}, {"name": "知识产权", "change_pct": -2.84}, {"name": "阿里巴巴概念股", "change_pct": -1.26}, {"name": "传媒", "change_pct": -2.64}, {"name": "社区团购", "change_pct": -1.73}, {"name": "NFT", "change_pct": -3.31}, {"name": "数据要素", "change_pct": -1.58}, {"name": "字节跳动概念股", "change_pct": -2.05}, {"name": "国企改革", "change_pct": -0.76}, {"name": "职业教育", "change_pct": -1.73}, {"name": "在线教育", "change_pct": -1.25}, {"name": "区块链", "change_pct": -1.68}]}, {"code": "001317", "name": "三羊马", "hot_rank": 24, "hot_rank_chg": 14, "stock_cnt": 5874, "price": "59.87", "change": "-9.17", "market_id": "33", "circulate_market_value": "5122455800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 25, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "13.65", "change": "5.57", "market_id": "17", "circulate_market_value": "24421738000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 26, "hot_rank_chg": -7, "stock_cnt": 5874, "price": "85.61", "change": "0.04", "market_id": "33", "circulate_market_value": "62087502000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 27, "hot_rank_chg": 13, "stock_cnt": 5874, "price": "8.53", "change": "-10.02", "market_id": "17", "circulate_market_value": "3624069400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.12}, {"name": "上海国企改革", "change_pct": -0.13}, {"name": "一带一路", "change_pct": -0.62}, {"name": "优化生育（三孩）", "change_pct": -0.72}, {"name": "纺织服装", "change_pct": -0.63}, {"name": "上海自由贸易港", "change_pct": -0.66}, {"name": "进口博览会", "change_pct": -0.94}, {"name": "自由贸易港", "change_pct": -0.96}, {"name": "物业管理", "change_pct": 1.68}, {"name": "国企改革", "change_pct": -0.76}, {"name": "新冠病毒防治", "change_pct": -0.67}, {"name": "自贸区", "change_pct": -1.01}]}, {"code": "600667", "name": "太极实业", "hot_rank": 28, "hot_rank_chg": -3, "stock_cnt": 5874, "price": "19.68", "change": "-0.96", "market_id": "17", "circulate_market_value": "41161550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601995", "name": "中金公司", "hot_rank": 29, "hot_rank_chg": 59, "stock_cnt": 5874, "price": "32.96", "change": "3.62", "market_id": "17", "circulate_market_value": "96330723000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 30, "hot_rank_chg": 27, "stock_cnt": 5874, "price": "7.41", "change": "-0.54", "market_id": "33", "circulate_market_value": "9329399900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -1.0}, {"name": "游戏", "change_pct": -2.35}, {"name": "智能音箱", "change_pct": -0.06}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.21}, {"name": "数字经济", "change_pct": -1.54}, {"name": "百度概念股", "change_pct": -1.6}, {"name": "腾讯概念股", "change_pct": -1.51}, {"name": "拼多多概念股", "change_pct": -1.79}, {"name": "传媒", "change_pct": -2.64}, {"name": "全息概念", "change_pct": -1.08}, {"name": "NFT", "change_pct": -3.31}, {"name": "元宇宙", "change_pct": -1.67}, {"name": "web3.0", "change_pct": -2.17}, {"name": "字节跳动概念股", "change_pct": -2.05}, {"name": "数字人民币", "change_pct": -1.58}, {"name": "智慧政务", "change_pct": -1.71}, {"name": "华为鸿蒙", "change_pct": -1.71}, {"name": "盲盒", "change_pct": -1.51}, {"name": "AI营销", "change_pct": -2.99}, {"name": "华为产业链", "change_pct": -0.53}, {"name": "供应链金融", "change_pct": -1.67}, {"name": "ChatGPT", "change_pct": -1.84}, {"name": "AI大模型/智能体", "change_pct": -1.14}, {"name": "小红书概念股", "change_pct": -2.38}, {"name": "区块链", "change_pct": -1.68}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 31, "hot_rank_chg": -13, "stock_cnt": 5874, "price": "16.49", "change": "-8.79", "market_id": "17", "circulate_market_value": "11218471500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 32, "hot_rank_chg": -1, "stock_cnt": 5874, "price": "58.15", "change": "0.64", "market_id": "33", "circulate_market_value": "66692117000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 33, "hot_rank_chg": -17, "stock_cnt": 5874, "price": "25.84", "change": "2.46", "market_id": "33", "circulate_market_value": "15373047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 34, "hot_rank_chg": -25, "stock_cnt": 5874, "price": "71.55", "change": "-1.95", "market_id": "17", "circulate_market_value": "175632000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000910", "name": "大亚圣象", "hot_rank": 35, "hot_rank_chg": 35, "stock_cnt": 5874, "price": "7.58", "change": "10.02", "market_id": "33", "circulate_market_value": "4148042200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "七腾机器人", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.1}, {"name": "林业", "change_pct": -1.43}, {"name": "装修装饰", "change_pct": 0.06}, {"name": "家具家居", "change_pct": 0.42}, {"name": "新能源汽车", "change_pct": -0.11}, {"name": "破净股", "change_pct": -0.34}]}, {"code": "600770", "name": "综艺股份", "hot_rank": 36, "hot_rank_chg": 64, "stock_cnt": 5874, "price": "6.52", "change": "-1.66", "market_id": "17", "circulate_market_value": "8476000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.01}, {"name": "半导体", "change_pct": 1.22}, {"name": "股权转让", "change_pct": -0.37}, {"name": "手游", "change_pct": -2.4}, {"name": "人工智能", "change_pct": -1.0}, {"name": "游戏", "change_pct": -2.35}, {"name": "光伏", "change_pct": 0.08}, {"name": "国产芯片", "change_pct": 0.69}, {"name": "CPU概念", "change_pct": 0.52}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 37, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "24.06", "change": "0.17", "market_id": "33", "circulate_market_value": "28317604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002467", "name": "二六三", "hot_rank": 38, "hot_rank_chg": 61, "stock_cnt": 5874, "price": "4.87", "change": "-4.32", "market_id": "33", "circulate_market_value": "6663140700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.62}, {"name": "人工智能", "change_pct": -1.0}, {"name": "云计算数据中心", "change_pct": -0.51}, {"name": "直播/短视频", "change_pct": -2.74}, {"name": "物联网", "change_pct": -0.63}, {"name": "教育", "change_pct": -1.72}, {"name": "小米概念股", "change_pct": 0.21}, {"name": "数字经济", "change_pct": -1.54}, {"name": "腾讯概念股", "change_pct": -1.51}, {"name": "信创", "change_pct": -1.43}, {"name": "元宇宙", "change_pct": -1.67}, {"name": "虚拟数字人", "change_pct": -2.16}, {"name": "东数西算/算力", "change_pct": -1.0}, {"name": "web3.0", "change_pct": -2.17}, {"name": "AIGC概念", "change_pct": -1.73}, {"name": "教育信息化", "change_pct": -1.49}, {"name": "在线教育", "change_pct": -1.25}, {"name": "智慧政务", "change_pct": -1.71}, {"name": "网红/MCN", "change_pct": -1.78}, {"name": "远程办公", "change_pct": -1.88}, {"name": "5G消息/RCS", "change_pct": -2.57}, {"name": "词元概念/Token", "change_pct": -2.0}, {"name": "AI大模型/智能体", "change_pct": -1.14}, {"name": "AI视频", "change_pct": -2.96}, {"name": "智谱AI", "change_pct": -2.11}, {"name": "区块链", "change_pct": -1.68}]}, {"code": "600869", "name": "远东股份", "hot_rank": 39, "hot_rank_chg": -15, "stock_cnt": 5874, "price": "21.36", "change": "-3.09", "market_id": "17", "circulate_market_value": "47383181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002757", "name": "南兴股份", "hot_rank": 40, "hot_rank_chg": 34, "stock_cnt": 5874, "price": "20.48", "change": "3.17", "market_id": "33", "circulate_market_value": "5823332700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002957", "name": "科瑞技术", "hot_rank": 41, "hot_rank_chg": 100, "stock_cnt": 5874, "price": "44.12", "change": "-2.88", "market_id": "33", "circulate_market_value": "18480215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600448", "name": "华纺股份", "hot_rank": 42, "hot_rank_chg": 14, "stock_cnt": 5874, "price": "3.30", "change": "-8.10", "market_id": "17", "circulate_market_value": "2072106700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -0.63}, {"name": "印染", "change_pct": -1.42}, {"name": "山东国企改革", "change_pct": -1.02}, {"name": "外贸受益概念", "change_pct": -0.02}, {"name": "抗菌面料", "change_pct": -0.87}, {"name": "国企改革", "change_pct": -0.76}, {"name": "新冠病毒防治", "change_pct": -0.67}, {"name": "C2M", "change_pct": -0.67}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 43, "hot_rank_chg": -11, "stock_cnt": 5874, "price": "401.33", "change": "-0.19", "market_id": "17", "circulate_market_value": "269179390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 44, "hot_rank_chg": -18, "stock_cnt": 5874, "price": "7.11", "change": "-4.31", "market_id": "33", "circulate_market_value": "7344173500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.29}, {"name": "锂电池", "change_pct": 0.1}, {"name": "强势人气股", "change_pct": -1.1}, {"name": "铜箔/覆铜板", "change_pct": 2.03}, {"name": "粤港澳大湾区", "change_pct": -0.92}, {"name": "新能源汽车", "change_pct": -0.11}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.88}]}, {"code": "600743", "name": "华远控股", "hot_rank": 45, "hot_rank_chg": 70, "stock_cnt": 5874, "price": "2.82", "change": "10.16", "market_id": "17", "circulate_market_value": "6616004500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "控股股东拟变更", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.37}, {"name": "京津冀", "change_pct": -0.6}, {"name": "北京城市规划", "change_pct": -0.1}, {"name": "物业管理", "change_pct": 1.67}, {"name": "低价股", "change_pct": -0.49}, {"name": "国资入股", "change_pct": -0.35}]}, {"code": "600641", "name": "先导基电", "hot_rank": 46, "hot_rank_chg": -16, "stock_cnt": 5874, "price": "47.24", "change": "7.82", "market_id": "17", "circulate_market_value": "43888507000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 47, "hot_rank_chg": -4, "stock_cnt": 5874, "price": "6.07", "change": "1.33", "market_id": "33", "circulate_market_value": "215032180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.86}, {"name": "手机产业链", "change_pct": 0.48}, {"name": "超高清视频", "change_pct": -0.85}, {"name": "苹果产业链", "change_pct": 0.9}, {"name": "电竞", "change_pct": -1.49}, {"name": "半导体", "change_pct": 1.11}, {"name": "人工智能", "change_pct": -1.0}, {"name": "互联网医疗", "change_pct": -1.1}, {"name": "VR&AR", "change_pct": -0.65}, {"name": "OLED", "change_pct": 1.04}, {"name": "京津冀", "change_pct": -0.6}, {"name": "物联网", "change_pct": -0.65}, {"name": "指纹识别", "change_pct": 0.41}, {"name": "汽车零部件", "change_pct": -0.27}, {"name": "白马股", "change_pct": -0.28}, {"name": "智能制造", "change_pct": -0.05}, {"name": "小米概念股", "change_pct": 0.14}, {"name": "国产芯片", "change_pct": 0.6}, {"name": "液晶面板/LCD", "change_pct": 0.84}, {"name": "全息概念", "change_pct": -1.12}, {"name": "理想汽车概念股", "change_pct": -0.8}, {"name": "MicroLED", "change_pct": 1.51}, {"name": "钙钛矿电池", "change_pct": 1.18}, {"name": "智能手表", "change_pct": 0.45}, {"name": "MiniLED", "change_pct": 0.71}, {"name": "传感器", "change_pct": -0.01}, {"name": "大硅片", "change_pct": 1.74}, {"name": "AI PC", "change_pct": 0.01}, {"name": "华为产业链", "change_pct": -0.56}, {"name": "回购", "change_pct": 0.24}, {"name": "光电共封装CPO", "change_pct": 1.0}, {"name": "智能眼镜/MR头显", "change_pct": 0.38}, {"name": "玻璃基板封装", "change_pct": 2.58}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 48, "hot_rank_chg": -4, "stock_cnt": 5874, "price": "27.96", "change": "-6.92", "market_id": "17", "circulate_market_value": "11211960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 49, "hot_rank_chg": 0, "stock_cnt": 5874, "price": "50.28", "change": "0.66", "market_id": "17", "circulate_market_value": "42564702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 50, "hot_rank_chg": 1, "stock_cnt": 5874, "price": "72.02", "change": "-0.30", "market_id": "17", "circulate_market_value": "128873637000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 51, "hot_rank_chg": 4, "stock_cnt": 5874, "price": "15.91", "change": "-10.01", "market_id": "33", "circulate_market_value": "7268487600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 52, "hot_rank_chg": -23, "stock_cnt": 5874, "price": "15.92", "change": "-10.01", "market_id": "17", "circulate_market_value": "7075555600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 53, "hot_rank_chg": -12, "stock_cnt": 5874, "price": "16.02", "change": "-2.79", "market_id": "17", "circulate_market_value": "17565845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 54, "hot_rank_chg": -7, "stock_cnt": 5874, "price": "112.84", "change": "-2.67", "market_id": "17", "circulate_market_value": "40711243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 55, "hot_rank_chg": -21, "stock_cnt": 5874, "price": "36.16", "change": "-1.98", "market_id": "17", "circulate_market_value": "123378130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 56, "hot_rank_chg": -39, "stock_cnt": 5874, "price": "57.83", "change": "8.60", "market_id": "17", "circulate_market_value": "8268218200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002178", "name": "延华智能", "hot_rank": 57, "hot_rank_chg": 6, "stock_cnt": 5874, "price": "5.17", "change": "-7.33", "market_id": "33", "circulate_market_value": "3687284200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": -1.77}, {"name": "国产软件", "change_pct": -1.27}, {"name": "体外诊断", "change_pct": 0.53}, {"name": "互联网医疗", "change_pct": -1.1}, {"name": "云计算数据中心", "change_pct": -0.55}, {"name": "养老产业", "change_pct": -1.23}, {"name": "物联网", "change_pct": -0.65}, {"name": "智慧城市", "change_pct": -0.86}, {"name": "数字经济", "change_pct": -1.51}, {"name": "智慧政务", "change_pct": -1.64}, {"name": "医疗信息化", "change_pct": -1.52}, {"name": "华为鸿蒙", "change_pct": -1.69}, {"name": "华为产业链", "change_pct": -0.56}, {"name": "AI大模型/智能体", "change_pct": -1.14}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 58, "hot_rank_chg": -19, "stock_cnt": 5874, "price": "58.74", "change": "1.52", "market_id": "17", "circulate_market_value": "264508510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 59, "hot_rank_chg": -1, "stock_cnt": 5874, "price": "7.69", "change": "-5.18", "market_id": "33", "circulate_market_value": "12511582200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.12}, {"name": "电竞", "change_pct": -1.49}, {"name": "手游", "change_pct": -2.44}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "人工智能", "change_pct": -1.0}, {"name": "游戏", "change_pct": -2.4}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.51}, {"name": "腾讯概念股", "change_pct": -1.51}, {"name": "快手概念股", "change_pct": -2.65}, {"name": "元宇宙", "change_pct": -1.68}, {"name": "虚拟数字人", "change_pct": -2.17}, {"name": "东数西算/算力", "change_pct": -1.02}, {"name": "web3.0", "change_pct": -2.18}, {"name": "AIGC概念", "change_pct": -1.74}, {"name": "数据要素", "change_pct": -1.54}, {"name": "字节跳动概念股", "change_pct": -2.08}, {"name": "AI营销", "change_pct": -3.02}, {"name": "ChatGPT", "change_pct": -1.85}, {"name": "智能眼镜/MR头显", "change_pct": 0.38}, {"name": "AI大模型/智能体", "change_pct": -1.14}, {"name": "人形机器人", "change_pct": -0.05}, {"name": "短剧/互动影游", "change_pct": -3.03}, {"name": "多模态", "change_pct": -1.82}, {"name": "AI视频", "change_pct": -2.99}, {"name": "IP经济/谷子经济", "change_pct": -1.7}, {"name": "小红书概念股", "change_pct": -2.39}]}, {"code": "002238", "name": "天威视讯", "hot_rank": 60, "hot_rank_chg": 161, "stock_cnt": 5874, "price": "7.66", "change": "10.06", "market_id": "33", "circulate_market_value": "6147603200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "文化传媒", "xgb_concepts": [{"name": "广电", "change_pct": -1.84}, {"name": "超高清视频", "change_pct": -0.85}, {"name": "深圳本地股", "change_pct": 0.0}, {"name": "5G", "change_pct": -0.48}, {"name": "云计算数据中心", "change_pct": -0.55}, {"name": "智慧城市", "change_pct": -0.86}, {"name": "腾讯概念股", "change_pct": -1.51}, {"name": "传媒", "change_pct": -2.65}, {"name": "在线教育", "change_pct": -1.32}, {"name": "业绩增长", "change_pct": -0.09}, {"name": "知识付费", "change_pct": -3.24}, {"name": "智慧政务", "change_pct": -1.64}, {"name": "AI大模型/智能体", "change_pct": -1.14}, {"name": "短剧/互动影游", "change_pct": -3.03}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 61, "hot_rank_chg": -13, "stock_cnt": 5874, "price": "8.38", "change": "-2.56", "market_id": "33", "circulate_market_value": "16048475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.38}, {"name": "林业", "change_pct": -1.48}, {"name": "碳中和", "change_pct": -1.09}, {"name": "自贸区", "change_pct": -1.0}]}, {"code": "600479", "name": "千金药业", "hot_rank": 62, "hot_rank_chg": -35, "stock_cnt": 5874, "price": "13.30", "change": "-1.99", "market_id": "17", "circulate_market_value": "5566144700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 63, "hot_rank_chg": -26, "stock_cnt": 5874, "price": "38.42", "change": "2.64", "market_id": "17", "circulate_market_value": "18435368000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 64, "hot_rank_chg": -18, "stock_cnt": 5874, "price": "11.73", "change": "-1.43", "market_id": "33", "circulate_market_value": "10399721700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -0.02}, {"name": "手机产业链", "change_pct": 0.48}, {"name": "超高清视频", "change_pct": -0.85}, {"name": "锂电池", "change_pct": 0.09}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "OLED", "change_pct": 1.04}, {"name": "包装印刷", "change_pct": -0.62}, {"name": "光伏", "change_pct": 0.03}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "小米概念股", "change_pct": 0.14}, {"name": "液晶面板/LCD", "change_pct": 0.84}, {"name": "可降解塑料", "change_pct": 0.61}, {"name": "华为产业链", "change_pct": -0.56}, {"name": "PET复合铜箔", "change_pct": 2.46}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 65, "hot_rank_chg": -32, "stock_cnt": 5874, "price": "13.63", "change": "-2.99", "market_id": "33", "circulate_market_value": "47404190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 66, "hot_rank_chg": 12, "stock_cnt": 5874, "price": "7.29", "change": "-4.08", "market_id": "17", "circulate_market_value": "17429022000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -2.52}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "国企改革", "change_pct": -0.77}, {"name": "河南国企改革", "change_pct": -1.35}]}, {"code": "600418", "name": "江淮汽车", "hot_rank": 67, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "22.79", "change": "6.85", "market_id": "17", "circulate_market_value": "51350179000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 68, "hot_rank_chg": -4, "stock_cnt": 5874, "price": "78.60", "change": "-0.10", "market_id": "17", "circulate_market_value": "10270913500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 69, "hot_rank_chg": 28, "stock_cnt": 5874, "price": "3.36", "change": "5.00", "market_id": "33", "circulate_market_value": "6649471500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 0.51}, {"name": "深圳本地股", "change_pct": 0.0}, {"name": "共享经济", "change_pct": -0.44}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "养老产业", "change_pct": -1.23}, {"name": "住房租赁", "change_pct": 1.24}, {"name": "房产经纪", "change_pct": 3.8}, {"name": "第三代半导体", "change_pct": 0.88}, {"name": "物业管理", "change_pct": 1.67}, {"name": "旧改", "change_pct": 0.6}, {"name": "横琴新区", "change_pct": -0.98}, {"name": "氮化镓", "change_pct": 0.53}, {"name": "REITs", "change_pct": 0.37}, {"name": "华为产业链", "change_pct": -0.56}]}, {"code": "603316", "name": "诚邦股份", "hot_rank": 70, "hot_rank_chg": 34, "stock_cnt": 5874, "price": "17.47", "change": "-4.12", "market_id": "17", "circulate_market_value": "4616692100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 71, "hot_rank_chg": -49, "stock_cnt": 5874, "price": "63.68", "change": "0.25", "market_id": "33", "circulate_market_value": "96631357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 72, "hot_rank_chg": -3, "stock_cnt": 5874, "price": "935.19", "change": "0.81", "market_id": "33", "circulate_market_value": "1038001990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 73, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "32.30", "change": "-3.73", "market_id": "17", "circulate_market_value": "7825321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 74, "hot_rank_chg": -15, "stock_cnt": 5874, "price": "16.40", "change": "2.06", "market_id": "17", "circulate_market_value": "21049326000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 75, "hot_rank_chg": -22, "stock_cnt": 5874, "price": "156.74", "change": "-1.58", "market_id": "17", "circulate_market_value": "141757740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001234", "name": "泰慕士", "hot_rank": 76, "hot_rank_chg": 112, "stock_cnt": 5874, "price": "32.18", "change": "10.02", "market_id": "33", "circulate_market_value": "2945805500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "针织服装"}, {"code": "002384", "name": "东山精密", "hot_rank": 77, "hot_rank_chg": -27, "stock_cnt": 5874, "price": "196.29", "change": "-0.92", "market_id": "33", "circulate_market_value": "272121090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 78, "hot_rank_chg": -11, "stock_cnt": 5874, "price": "5.44", "change": "3.82", "market_id": "33", "circulate_market_value": "14403350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.17}, {"name": "装修装饰", "change_pct": 0.01}, {"name": "装配式建筑", "change_pct": 0.1}, {"name": "航天", "change_pct": -0.54}, {"name": "旧改", "change_pct": 0.6}]}, {"code": "603068", "name": "博通集成", "hot_rank": 79, "hot_rank_chg": -19, "stock_cnt": 5874, "price": "45.96", "change": "-4.57", "market_id": "17", "circulate_market_value": "6977663100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002614", "name": "奥佳华", "hot_rank": 80, "hot_rank_chg": 44, "stock_cnt": 5874, "price": "7.57", "change": "10.03", "market_id": "33", "circulate_market_value": "3340454100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "股份转让", "xgb_concepts": [{"name": "医疗器械", "change_pct": 0.45}, {"name": "股权转让", "change_pct": -0.41}, {"name": "人工智能", "change_pct": -1.0}, {"name": "养老产业", "change_pct": -1.23}, {"name": "福建自贸/海西概念", "change_pct": -1.38}, {"name": "外贸受益概念", "change_pct": -0.04}, {"name": "小家电", "change_pct": -0.61}, {"name": "机器人", "change_pct": -0.13}, {"name": "家电", "change_pct": -0.29}, {"name": "RCEP概念", "change_pct": -0.28}, {"name": "血氧仪", "change_pct": 0.57}, {"name": "华为鸿蒙", "change_pct": -1.69}, {"name": "华为产业链", "change_pct": -0.56}, {"name": "自贸区", "change_pct": -1.0}, {"name": "IP经济/谷子经济", "change_pct": -1.7}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 81, "hot_rank_chg": -45, "stock_cnt": 5874, "price": "490.90", "change": "0.33", "market_id": "17", "circulate_market_value": "14767053000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 82, "hot_rank_chg": -14, "stock_cnt": 5874, "price": "45.29", "change": "-0.26", "market_id": "17", "circulate_market_value": "66213745000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 83, "hot_rank_chg": 43, "stock_cnt": 5874, "price": "9.25", "change": "-7.03", "market_id": "33", "circulate_market_value": "2634299700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.24}, {"name": "ST摘帽", "change_pct": -1.63}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "教育", "change_pct": -1.73}, {"name": "阿里巴巴概念股", "change_pct": -1.26}, {"name": "职业教育", "change_pct": -1.73}, {"name": "在线教育", "change_pct": -1.32}, {"name": "华为鸿蒙", "change_pct": -1.69}, {"name": "华为产业链", "change_pct": -0.56}, {"name": "智谱AI", "change_pct": -2.1}]}, {"code": "002589", "name": "瑞康医药", "hot_rank": 84, "hot_rank_chg": 50, "stock_cnt": 5874, "price": "3.39", "change": "-5.57", "market_id": "33", "circulate_market_value": "4629355300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.68}, {"name": "体外诊断", "change_pct": 0.53}, {"name": "农业种植", "change_pct": -1.2}, {"name": "人工智能", "change_pct": -1.0}, {"name": "互联网医疗", "change_pct": -1.1}, {"name": "医药商业", "change_pct": -1.16}, {"name": "养老产业", "change_pct": -1.23}, {"name": "冷链", "change_pct": -0.63}, {"name": "医药", "change_pct": 0.06}, {"name": "破净股", "change_pct": -0.35}, {"name": "大农业", "change_pct": -0.94}, {"name": "口腔", "change_pct": -0.06}, {"name": "医疗信息化", "change_pct": -1.52}, {"name": "新冠病毒防治", "change_pct": -0.69}, {"name": "华为产业链", "change_pct": -0.56}, {"name": "医疗耗材供应链SPD", "change_pct": -1.69}]}, {"code": "002080", "name": "中材科技", "hot_rank": 85, "hot_rank_chg": -33, "stock_cnt": 5874, "price": "61.22", "change": "-2.05", "market_id": "33", "circulate_market_value": "102734726000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 86, "hot_rank_chg": -24, "stock_cnt": 5874, "price": "47.21", "change": "6.74", "market_id": "33", "circulate_market_value": "71661407000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 87, "hot_rank_chg": -42, "stock_cnt": 5874, "price": "4.01", "change": "5.25", "market_id": "33", "circulate_market_value": "38957604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": -0.92}, {"name": "深圳本地股", "change_pct": 0.0}, {"name": "股权转让", "change_pct": -0.41}, {"name": "房地产", "change_pct": 0.33}, {"name": "养老产业", "change_pct": -1.23}, {"name": "冷链", "change_pct": -0.63}, {"name": "住房租赁", "change_pct": 1.24}, {"name": "破净股", "change_pct": -0.35}, {"name": "冰雪产业", "change_pct": -0.01}, {"name": "物业管理", "change_pct": 1.67}, {"name": "旧改", "change_pct": 0.6}, {"name": "REITs", "change_pct": 0.37}]}, {"code": "600503", "name": "华丽家族", "hot_rank": 88, "hot_rank_chg": 5, "stock_cnt": 5874, "price": "2.83", "change": "5.99", "market_id": "17", "circulate_market_value": "4534480700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.33}, {"name": "石墨烯", "change_pct": 0.41}, {"name": "机器人", "change_pct": -0.13}, {"name": "低价股", "change_pct": -0.49}]}, {"code": "601949", "name": "中国出版", "hot_rank": 89, "hot_rank_chg": 6, "stock_cnt": 5874, "price": "6.07", "change": "-8.16", "market_id": "17", "circulate_market_value": "11576125800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.75}, {"name": "中字头", "change_pct": -0.67}, {"name": "数字经济", "change_pct": -1.51}, {"name": "知识产权", "change_pct": -2.87}, {"name": "传媒", "change_pct": -2.65}, {"name": "NFT", "change_pct": -3.33}, {"name": "国企改革", "change_pct": -0.77}, {"name": "知识付费", "change_pct": -3.24}]}, {"code": "600371", "name": "万向德农", "hot_rank": 90, "hot_rank_chg": 40, "stock_cnt": 5874, "price": "16.53", "change": "5.16", "market_id": "17", "circulate_market_value": "4833388600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 91, "hot_rank_chg": -1, "stock_cnt": 5874, "price": "5.42", "change": "-3.04", "market_id": "33", "circulate_market_value": "4154714200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.68}, {"name": "股权转让", "change_pct": -0.41}, {"name": "优化生育（三孩）", "change_pct": -0.74}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "医药商业", "change_pct": -1.16}, {"name": "保健品", "change_pct": -0.53}, {"name": "民营医院", "change_pct": -0.87}, {"name": "医药", "change_pct": 0.06}, {"name": "食品", "change_pct": -0.57}, {"name": "辅助生殖", "change_pct": -0.56}, {"name": "口腔", "change_pct": -0.06}, {"name": "医美", "change_pct": -0.95}, {"name": "新冠病毒防治", "change_pct": -0.69}]}, {"code": "002827", "name": "高争民爆", "hot_rank": 92, "hot_rank_chg": 0, "stock_cnt": 5874, "price": "76.50", "change": "2.99", "market_id": "33", "circulate_market_value": "21113914000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 93, "hot_rank_chg": -12, "stock_cnt": 5874, "price": "27.96", "change": "-2.98", "market_id": "17", "circulate_market_value": "9420281800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000532", "name": "华金资本", "hot_rank": 94, "hot_rank_chg": 22, "stock_cnt": 5874, "price": "13.93", "change": "2.35", "market_id": "33", "circulate_market_value": "4785648000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605398", "name": "新炬网络", "hot_rank": 95, "hot_rank_chg": 92, "stock_cnt": 5874, "price": "22.75", "change": "-3.77", "market_id": "17", "circulate_market_value": "3700170500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 96, "hot_rank_chg": -11, "stock_cnt": 5874, "price": "8.75", "change": "-7.21", "market_id": "17", "circulate_market_value": "4194049800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.68}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "医药商业", "change_pct": -1.16}, {"name": "医药", "change_pct": 0.06}, {"name": "流感", "change_pct": -0.24}]}, {"code": "002912", "name": "中新赛克", "hot_rank": 97, "hot_rank_chg": -8, "stock_cnt": 5874, "price": "25.29", "change": "-4.43", "market_id": "33", "circulate_market_value": "4089637700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 98, "hot_rank_chg": 51, "stock_cnt": 5874, "price": "32.21", "change": "-1.32", "market_id": "33", "circulate_market_value": "34827187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 99, "hot_rank_chg": 7, "stock_cnt": 5874, "price": "8.64", "change": "2.86", "market_id": "33", "circulate_market_value": "4044570300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.17}, {"name": "旅游", "change_pct": -0.41}, {"name": "腾讯概念股", "change_pct": -1.51}, {"name": "广西概念", "change_pct": -1.26}, {"name": "低空经济", "change_pct": -0.36}]}, {"code": "600183", "name": "生益科技", "hot_rank": 100, "hot_rank_chg": -21, "stock_cnt": 5874, "price": "144.67", "change": "0.85", "market_id": "17", "circulate_market_value": "348907710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};