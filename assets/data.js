const UPDATE_TIME = "2026-09-29 10:21";
const THS_HOT = [
  {
    "name": "PCB概念",
    "rise": 1.71,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续124天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "固态电池",
    "rise": 1.96,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.6,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续301天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -0.02,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续131天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": 1.47,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "AI视频",
    "rise": 2.88,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "存储芯片",
    "rise": 0.52,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续254天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人形机器人",
    "rise": 0.65,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": 0.36,
    "rate": 0,
    "tag": "",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "培育钻石",
    "rise": -1.82,
    "rate": 0,
    "tag": "",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "光纤概念",
    "rise": 0.76,
    "rate": 0,
    "tag": "",
    "hotTag": "连续130天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "快手概念",
    "rise": 3.15,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885918"
  },
  {
    "name": "算力租赁",
    "rise": 1.34,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续165天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "网络安全",
    "rise": 1.33,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885459"
  },
  {
    "name": "玻璃基板",
    "rise": -0.47,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "商业航天",
    "rise": 0.59,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续230天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "海峡两岸",
    "rise": 0.41,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "猪肉",
    "rise": 0.32,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "新股与次新股",
    "rise": -0.6,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 2,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "人工智能",
    "rise": 1.07,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  }
];
const THS_EVENTS = [
  {
    "title": "上海：有序实施商品住房现房销售",
    "desc": "",
    "heat": 637553,
    "direction": "房地产",
    "themes": [
      "房地产开发",
      "租售同权",
      "物业管理",
      "房屋检测",
      "房地产"
    ],
    "stocks": [
      {
        "name": "特发服务",
        "code": "300917",
        "chg": 13.48808
      }
    ]
  },
  {
    "title": "七部门印发新型电池产业发展“十五五”规划 目标2030年全固态电池初步实现规模化应用",
    "desc": "",
    "heat": 451923,
    "direction": "固态电池",
    "themes": [
      "铝塑膜",
      "硫化物",
      "固态铜箔",
      "硅基负极",
      "高镍",
      "富锂锰基",
      "电池设备",
      "电池厂商",
      "固态电池"
    ],
    "stocks": [
      {
        "name": "武汉蓝电",
        "code": "920779",
        "chg": 29.977117
      }
    ]
  },
  {
    "title": "加速“进化” 快手可灵发布Kling4.0 支持单次生成视频最长可达30秒",
    "desc": "",
    "heat": 450184,
    "direction": "快手概念",
    "themes": [
      "快手概念"
    ],
    "stocks": [
      {
        "name": "值得买",
        "code": "300785",
        "chg": 10.710024
      }
    ]
  },
  {
    "title": "字节火山引擎发布Seedance影视合作计划",
    "desc": "",
    "heat": 348150,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI影视制作",
      "视频生成模型",
      "视频生成工具",
      "视频语料",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "值得买",
        "code": "300785",
        "chg": 10.710024
      }
    ]
  },
  {
    "title": "国新办29日举行新闻发布会 介绍“十五五”时期加快农业农村现代化、扎实推进乡村全面振兴有关情况",
    "desc": "",
    "heat": 305959,
    "direction": "农业",
    "themes": [
      "渔业",
      "中药材种植",
      "食用菌种植",
      "农作物种业",
      "经济作物种植",
      "果蔬种植",
      "生态农业",
      "小麦产业",
      "水稻产业",
      "稀有糖",
      "天然甜味剂",
      "功能性糖醇",
      "磷酸铁锂",
      "磷矿",
      "黄磷",
      "农业种植",
      "粮食概念",
      "代糖概念",
      "磷化工"
    ],
    "stocks": [
      {
        "name": "国轩高科",
        "code": "002074",
        "chg": 10.011507
      }
    ]
  },
  {
    "title": "国资委：新一轮国资国企改革聚焦六大任务",
    "desc": "",
    "heat": 298249,
    "direction": "国企改革",
    "themes": [
      "深圳国企改革",
      "上海国企改革",
      "陕西国企改革",
      "湖北三资改革",
      "安徽三资改革",
      "央企国企改革",
      "国企改革"
    ],
    "stocks": [
      {
        "name": "N安达",
        "code": "920202",
        "chg": 246.490066
      }
    ]
  },
  {
    "title": "英伟达发布AI安全平台",
    "desc": "",
    "heat": 204916,
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
        "chg": 11.92185
      }
    ]
  },
  {
    "title": "机构：挖掘机出口增速强劲，龙头公司半年报收入持续增长",
    "desc": "",
    "heat": 33835,
    "direction": "挖掘机",
    "themes": [
      "电动挖掘机与动力系统",
      "整机制造与销售",
      "液压系统及零部件",
      "智能挖掘机及系统"
    ],
    "stocks": [
      {
        "name": "拓山重工",
        "code": "001226",
        "chg": 3.978261
      }
    ]
  },
  {
    "title": "阿斯利康20亿美元战略投资Summit 依沃西获顶级药企背书 康方生物高开逾8%",
    "desc": "",
    "heat": 14982,
    "direction": "抗肿瘤药物",
    "themes": [
      "细胞免疫治疗",
      "重组蛋白",
      "肿瘤疫苗"
    ],
    "stocks": [
      {
        "name": "*ST香雪",
        "code": "300147",
        "chg": 13.461538
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+4.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+4.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+3.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物业管理",
    "change": "+3.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房地产",
    "change": "+3.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+3.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "REITs",
    "change": "+3.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+3.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识产权",
    "change": "+3.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+3.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+2.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+2.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+2.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+2.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "NFT",
    "change": "+2.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "北京城市规划",
    "change": "+2.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智谱AI",
    "change": "+2.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 3,
    "hot_rank_chg": 35,
    "stock_cnt": 5799,
    "price": "3.76",
    "change": "1.35",
    "market_id": "33",
    "circulate_market_value": "8808507300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.53
      },
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "人工智能",
        "change_pct": 1.32
      },
      {
        "name": "VR&AR",
        "change_pct": 0.78
      },
      {
        "name": "京津冀",
        "change_pct": 1.25
      },
      {
        "name": "装修装饰",
        "change_pct": 0.87
      },
      {
        "name": "住房租赁",
        "change_pct": 4.37
      },
      {
        "name": "破净股",
        "change_pct": 0.86
      },
      {
        "name": "数字经济",
        "change_pct": 1.65
      },
      {
        "name": "房产经纪",
        "change_pct": 1.11
      },
      {
        "name": "物业管理",
        "change_pct": 3.58
      },
      {
        "name": "华为产业链",
        "change_pct": 1.24
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.46
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 4,
    "hot_rank_chg": 99,
    "stock_cnt": 5799,
    "price": "12.95",
    "change": "6.32",
    "market_id": "17",
    "circulate_market_value": "4979891900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.09
      },
      {
        "name": "股权转让",
        "change_pct": 0.82
      },
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "新疆概念",
        "change_pct": 0.67
      },
      {
        "name": "医药",
        "change_pct": 0.17
      },
      {
        "name": "流感",
        "change_pct": -0.04
      },
      {
        "name": "国资入股",
        "change_pct": 1.04
      },
      {
        "name": "减肥药",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 5,
    "hot_rank_chg": 5,
    "stock_cnt": 5799,
    "price": "7.14",
    "change": "-2.59",
    "market_id": "17",
    "circulate_market_value": "17982161000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.91
      },
      {
        "name": "工业大麻",
        "change_pct": 0.45
      },
      {
        "name": "中药",
        "change_pct": 0.21
      },
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "保健品",
        "change_pct": -0.2
      },
      {
        "name": "民营医院",
        "change_pct": 0.56
      },
      {
        "name": "医药",
        "change_pct": 0.17
      },
      {
        "name": "化学原料药",
        "change_pct": 0.18
      },
      {
        "name": "流感",
        "change_pct": -0.04
      },
      {
        "name": "振兴东北",
        "change_pct": 0.73
      },
      {
        "name": "食品",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 7,
    "hot_rank_chg": 68,
    "stock_cnt": 5799,
    "price": "4.08",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "39637662000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": 0.58
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.94
      },
      {
        "name": "股权转让",
        "change_pct": 0.82
      },
      {
        "name": "房地产",
        "change_pct": 3.52
      },
      {
        "name": "养老产业",
        "change_pct": 0.69
      },
      {
        "name": "冷链",
        "change_pct": 0.63
      },
      {
        "name": "住房租赁",
        "change_pct": 4.37
      },
      {
        "name": "破净股",
        "change_pct": 0.86
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.42
      },
      {
        "name": "物业管理",
        "change_pct": 3.58
      },
      {
        "name": "旧改",
        "change_pct": 1.95
      },
      {
        "name": "REITs",
        "change_pct": 3.19
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 8,
    "hot_rank_chg": -4,
    "stock_cnt": 5799,
    "price": "9.41",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "9832394700.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "6",
    "change_reason": "拟收购界面财联社",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.89
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.85
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 3.12
      },
      {
        "name": "国企改革",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 9,
    "hot_rank_chg": -7,
    "stock_cnt": 5799,
    "price": "8.74",
    "change": "-3.85",
    "market_id": "33",
    "circulate_market_value": "16737908000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.39
      },
      {
        "name": "林业",
        "change_pct": -1.32
      },
      {
        "name": "碳中和",
        "change_pct": 0.27
      },
      {
        "name": "自贸区",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "002640",
    "name": "跨境通",
    "hot_rank": 14,
    "hot_rank_chg": -3,
    "stock_cnt": 5799,
    "price": "3.94",
    "change": "-0.51",
    "market_id": "33",
    "circulate_market_value": "6100151400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.91
      },
      {
        "name": "数字经济",
        "change_pct": 1.65
      },
      {
        "name": "拼多多概念股",
        "change_pct": 2.43
      },
      {
        "name": "无线耳机",
        "change_pct": 0.7
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.71
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 21,
    "hot_rank_chg": -5,
    "stock_cnt": 5799,
    "price": "6.13",
    "change": "1.32",
    "market_id": "17",
    "circulate_market_value": "5940175400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 22,
    "hot_rank_chg": -13,
    "stock_cnt": 5799,
    "price": "9.57",
    "change": "-7.80",
    "market_id": "17",
    "circulate_market_value": "34333999000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -0.14
      },
      {
        "name": "OLED",
        "change_pct": 0.05
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.05
      },
      {
        "name": "国企改革",
        "change_pct": 0.57
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.33
      },
      {
        "name": "陕西国企改革",
        "change_pct": 0.87
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 24,
    "hot_rank_chg": 48,
    "stock_cnt": 5799,
    "price": "6.90",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "7534018100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "食欲素",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 0.17
      },
      {
        "name": "化学原料药",
        "change_pct": 0.18
      },
      {
        "name": "数字经济",
        "change_pct": 1.65
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.82
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 25,
    "hot_rank_chg": -2,
    "stock_cnt": 5799,
    "price": "11.72",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "5386650300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "机器人轴承",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": 0.76
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.63
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.16
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.82
      },
      {
        "name": "大农业",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 29,
    "hot_rank_chg": -1,
    "stock_cnt": 5799,
    "price": "6.63",
    "change": "4.25",
    "market_id": "33",
    "circulate_market_value": "7709677700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 2.51
      },
      {
        "name": "新疆概念",
        "change_pct": 0.67
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.61
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.45
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.9
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.43
      }
    ]
  },
  {
    "code": "603278",
    "name": "大业股份",
    "hot_rank": 36,
    "hot_rank_chg": -1,
    "stock_cnt": 5799,
    "price": "10.56",
    "change": "-2.04",
    "market_id": "17",
    "circulate_market_value": "3608979200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.82
      },
      {
        "name": "轮胎",
        "change_pct": 0.28
      },
      {
        "name": "风电",
        "change_pct": 0.53
      },
      {
        "name": "航天",
        "change_pct": -0.01
      },
      {
        "name": "人形机器人",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 37,
    "hot_rank_chg": 151,
    "stock_cnt": 5799,
    "price": "5.49",
    "change": "8.28",
    "market_id": "33",
    "circulate_market_value": "4200622600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.21
      },
      {
        "name": "股权转让",
        "change_pct": 0.82
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.33
      },
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "医药商业",
        "change_pct": 0.26
      },
      {
        "name": "保健品",
        "change_pct": -0.2
      },
      {
        "name": "民营医院",
        "change_pct": 0.56
      },
      {
        "name": "医药",
        "change_pct": 0.17
      },
      {
        "name": "食品",
        "change_pct": -0.07
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.82
      },
      {
        "name": "口腔",
        "change_pct": 0.24
      },
      {
        "name": "医美",
        "change_pct": 0.45
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 41,
    "hot_rank_chg": -20,
    "stock_cnt": 5799,
    "price": "6.94",
    "change": "-4.67",
    "market_id": "17",
    "circulate_market_value": "3180243900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": 0.49
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.39
      },
      {
        "name": "自贸区",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 43,
    "hot_rank_chg": -7,
    "stock_cnt": 5799,
    "price": "11.57",
    "change": "-3.74",
    "market_id": "17",
    "circulate_market_value": "20700330000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.62
      },
      {
        "name": "纯碱",
        "change_pct": 0.47
      },
      {
        "name": "食品",
        "change_pct": -0.07
      },
      {
        "name": "土壤修复",
        "change_pct": 0.45
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.16
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.76
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.46
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 47,
    "hot_rank_chg": -18,
    "stock_cnt": 5799,
    "price": "5.71",
    "change": "-1.55",
    "market_id": "33",
    "circulate_market_value": "201946340000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.54
      },
      {
        "name": "手机产业链",
        "change_pct": 0.92
      },
      {
        "name": "超高清视频",
        "change_pct": 0.82
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.12
      },
      {
        "name": "电竞",
        "change_pct": 1.13
      },
      {
        "name": "半导体",
        "change_pct": 0.36
      },
      {
        "name": "人工智能",
        "change_pct": 1.32
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.55
      },
      {
        "name": "VR&AR",
        "change_pct": 0.78
      },
      {
        "name": "OLED",
        "change_pct": 0.05
      },
      {
        "name": "京津冀",
        "change_pct": 1.25
      },
      {
        "name": "物联网",
        "change_pct": 1.18
      },
      {
        "name": "指纹识别",
        "change_pct": 0.16
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.63
      },
      {
        "name": "白马股",
        "change_pct": -0.15
      },
      {
        "name": "智能制造",
        "change_pct": 0.65
      },
      {
        "name": "小米概念股",
        "change_pct": 0.89
      },
      {
        "name": "国产芯片",
        "change_pct": 0.54
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.05
      },
      {
        "name": "全息概念",
        "change_pct": 0.87
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.12
      },
      {
        "name": "MicroLED",
        "change_pct": -0.03
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.43
      },
      {
        "name": "智能手表",
        "change_pct": 0.4
      },
      {
        "name": "MiniLED",
        "change_pct": 0.8
      },
      {
        "name": "传感器",
        "change_pct": 1.07
      },
      {
        "name": "大硅片",
        "change_pct": -0.35
      },
      {
        "name": "AI PC",
        "change_pct": 1.64
      },
      {
        "name": "华为产业链",
        "change_pct": 1.24
      },
      {
        "name": "回购",
        "change_pct": 0.16
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.28
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.79
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.33
      }
    ]
  },
  {
    "code": "002242",
    "name": "九阳股份",
    "hot_rank": 48,
    "hot_rank_chg": 11,
    "stock_cnt": 5799,
    "price": "11.36",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "8653657500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "厨房小家电",
    "xgb_concepts": [
      {
        "name": "小家电",
        "change_pct": 0.45
      },
      {
        "name": "机器人",
        "change_pct": 0.61
      },
      {
        "name": "家电",
        "change_pct": 0.51
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "600032",
    "name": "浙江新能",
    "hot_rank": 51,
    "hot_rank_chg": 6,
    "stock_cnt": 5799,
    "price": "8.17",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "19646197000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "绿色电力",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 0.46
      },
      {
        "name": "水电",
        "change_pct": -0.11
      },
      {
        "name": "浙江国企改革",
        "change_pct": 1.03
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.7
      },
      {
        "name": "光伏",
        "change_pct": 0.34
      },
      {
        "name": "风电",
        "change_pct": 0.53
      },
      {
        "name": "国企改革",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 57,
    "hot_rank_chg": -37,
    "stock_cnt": 5799,
    "price": "2.22",
    "change": "-0.89",
    "market_id": "33",
    "circulate_market_value": "11194318600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "新能源整车",
        "change_pct": 0.54
      },
      {
        "name": "汽车整车",
        "change_pct": 0.52
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.16
      },
      {
        "name": "低价股",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "601238",
    "name": "广汽集团",
    "hot_rank": 61,
    "hot_rank_chg": 51,
    "stock_cnt": 5799,
    "price": "5.60",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "41348707000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "拟购买一汽丰田50%股权",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": 0.85
      },
      {
        "name": "车联网/车路云",
        "change_pct": 1.02
      },
      {
        "name": "业绩爆雷",
        "change_pct": 2.37
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.9
      },
      {
        "name": "锂电池",
        "change_pct": 1.63
      },
      {
        "name": "石墨烯",
        "change_pct": 1.55
      },
      {
        "name": "新能源整车",
        "change_pct": 0.54
      },
      {
        "name": "汽车整车",
        "change_pct": 0.52
      },
      {
        "name": "复牌股",
        "change_pct": 4.63
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.16
      },
      {
        "name": "破净股",
        "change_pct": 0.86
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 1.43
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "动力电池回收",
        "change_pct": 1.77
      },
      {
        "name": "华为汽车",
        "change_pct": 0.65
      },
      {
        "name": "大消费",
        "change_pct": -0.03
      },
      {
        "name": "华为产业链",
        "change_pct": 1.24
      },
      {
        "name": "人形机器人",
        "change_pct": 0.37
      },
      {
        "name": "智能座舱",
        "change_pct": 0.78
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "600360",
    "name": "华微电子",
    "hot_rank": 68,
    "hot_rank_chg": 212,
    "stock_cnt": 5799,
    "price": "11.31",
    "change": "4.24",
    "market_id": "17",
    "circulate_market_value": "10860939900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.36
      },
      {
        "name": "股权转让",
        "change_pct": 0.82
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.7
      },
      {
        "name": "国产芯片",
        "change_pct": 0.54
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.68
      },
      {
        "name": "IGBT",
        "change_pct": 1.0
      },
      {
        "name": "氮化镓",
        "change_pct": 0.85
      },
      {
        "name": "碳化硅",
        "change_pct": 0.63
      },
      {
        "name": "国资入股",
        "change_pct": 1.04
      },
      {
        "name": "华为产业链",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 73,
    "hot_rank_chg": 44,
    "stock_cnt": 5799,
    "price": "3.21",
    "change": "-1.53",
    "market_id": "33",
    "circulate_market_value": "6352620100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 2.57
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.94
      },
      {
        "name": "共享经济",
        "change_pct": 0.84
      },
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "养老产业",
        "change_pct": 0.69
      },
      {
        "name": "住房租赁",
        "change_pct": 4.37
      },
      {
        "name": "房产经纪",
        "change_pct": 1.11
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.68
      },
      {
        "name": "物业管理",
        "change_pct": 3.58
      },
      {
        "name": "旧改",
        "change_pct": 1.95
      },
      {
        "name": "横琴新区",
        "change_pct": 1.23
      },
      {
        "name": "氮化镓",
        "change_pct": 0.85
      },
      {
        "name": "REITs",
        "change_pct": 3.19
      },
      {
        "name": "华为产业链",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "002614",
    "name": "奥佳华",
    "hot_rank": 77,
    "hot_rank_chg": -38,
    "stock_cnt": 5799,
    "price": "8.13",
    "change": "-4.35",
    "market_id": "33",
    "circulate_market_value": "3587568300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -0.06
      },
      {
        "name": "股权转让",
        "change_pct": 0.82
      },
      {
        "name": "人工智能",
        "change_pct": 1.32
      },
      {
        "name": "养老产业",
        "change_pct": 0.69
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.39
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.46
      },
      {
        "name": "小家电",
        "change_pct": 0.45
      },
      {
        "name": "机器人",
        "change_pct": 0.61
      },
      {
        "name": "家电",
        "change_pct": 0.51
      },
      {
        "name": "RCEP概念",
        "change_pct": -0.2
      },
      {
        "name": "血氧仪",
        "change_pct": 0.0
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.25
      },
      {
        "name": "华为产业链",
        "change_pct": 1.24
      },
      {
        "name": "自贸区",
        "change_pct": 0.42
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.43
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 78,
    "hot_rank_chg": 33,
    "stock_cnt": 5799,
    "price": "12.84",
    "change": "-10.02",
    "market_id": "17",
    "circulate_market_value": "3756701500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -1.34
      },
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "转基因",
        "change_pct": -1.39
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.02
      },
      {
        "name": "大农业",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 82,
    "hot_rank_chg": 65,
    "stock_cnt": 5799,
    "price": "11.18",
    "change": "2.76",
    "market_id": "17",
    "circulate_market_value": "19399323000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 0.82
      },
      {
        "name": "核电",
        "change_pct": 0.44
      },
      {
        "name": "锂电池",
        "change_pct": 1.63
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.11
      },
      {
        "name": "PCB板",
        "change_pct": 3.08
      },
      {
        "name": "中科院系",
        "change_pct": 0.8
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.16
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 1.43
      },
      {
        "name": "固态电池",
        "change_pct": 2.07
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.54
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 84,
    "hot_rank_chg": 12,
    "stock_cnt": 5799,
    "price": "11.13",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "5859672800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "房地产开发",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 1.94
      },
      {
        "name": "房地产",
        "change_pct": 3.52
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.34
      },
      {
        "name": "住房租赁",
        "change_pct": 4.37
      },
      {
        "name": "物业管理",
        "change_pct": 3.58
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.61
      },
      {
        "name": "旧改",
        "change_pct": 1.95
      }
    ]
  },
  {
    "code": "002413",
    "name": "雷科防务",
    "hot_rank": 85,
    "hot_rank_chg": -42,
    "stock_cnt": 5799,
    "price": "8.78",
    "change": "-4.36",
    "market_id": "33",
    "circulate_market_value": "11373879800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.02
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.9
      },
      {
        "name": "5G",
        "change_pct": 0.86
      },
      {
        "name": "人工智能",
        "change_pct": 1.32
      },
      {
        "name": "大飞机",
        "change_pct": -0.14
      },
      {
        "name": "北斗导航",
        "change_pct": 0.54
      },
      {
        "name": "军民融合",
        "change_pct": 0.7
      },
      {
        "name": "军工",
        "change_pct": 0.49
      },
      {
        "name": "国产芯片",
        "change_pct": 0.54
      },
      {
        "name": "百度概念股",
        "change_pct": 1.95
      },
      {
        "name": "毫米波通信",
        "change_pct": -0.36
      },
      {
        "name": "航天",
        "change_pct": -0.01
      },
      {
        "name": "闪存",
        "change_pct": 1.65
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.06
      },
      {
        "name": "华为产业链",
        "change_pct": 1.24
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.6
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.83
      },
      {
        "name": "低空经济",
        "change_pct": 0.65
      },
      {
        "name": "军工信息化",
        "change_pct": 0.62
      },
      {
        "name": "算力一体机",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 90,
    "hot_rank_chg": 25,
    "stock_cnt": 5799,
    "price": "11.29",
    "change": "-8.66",
    "market_id": "33",
    "circulate_market_value": "3715791900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.89
      },
      {
        "name": "锂电池",
        "change_pct": 1.63
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.7
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.26
      },
      {
        "name": "污水处理",
        "change_pct": 1.03
      },
      {
        "name": "智慧城市",
        "change_pct": 1.31
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.16
      },
      {
        "name": "环保",
        "change_pct": 0.74
      },
      {
        "name": "动力电池回收",
        "change_pct": 1.77
      },
      {
        "name": "干细胞",
        "change_pct": 0.6
      },
      {
        "name": "国企改革",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 91,
    "hot_rank_chg": -2,
    "stock_cnt": 5799,
    "price": "2.76",
    "change": "2.60",
    "market_id": "33",
    "circulate_market_value": "26256863000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.36
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.9
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.63
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.16
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.82
      },
      {
        "name": "低价股",
        "change_pct": 1.33
      },
      {
        "name": "减速器",
        "change_pct": 0.03
      },
      {
        "name": "华为汽车",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 92,
    "hot_rank_chg": 3,
    "stock_cnt": 5799,
    "price": "7.27",
    "change": "2.11",
    "market_id": "33",
    "circulate_market_value": "3403243800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "旅游",
        "change_pct": 0.36
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.45
      },
      {
        "name": "广西概念",
        "change_pct": 0.31
      },
      {
        "name": "低空经济",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 95,
    "hot_rank_chg": 49,
    "stock_cnt": 5799,
    "price": "4.78",
    "change": "0.42",
    "market_id": "33",
    "circulate_market_value": "12679191700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "装修装饰",
        "change_pct": 0.87
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.41
      },
      {
        "name": "破净股",
        "change_pct": 0.86
      },
      {
        "name": "航天",
        "change_pct": -0.01
      },
      {
        "name": "旧改",
        "change_pct": 1.95
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 96,
    "hot_rank_chg": 67,
    "stock_cnt": 5799,
    "price": "6.58",
    "change": "4.61",
    "market_id": "33",
    "circulate_market_value": "6796717600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.14
      },
      {
        "name": "锂电池",
        "change_pct": 1.63
      },
      {
        "name": "强势人气股",
        "change_pct": -0.45
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.11
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.34
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.16
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 1.23
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600487", "name": "亨通光电", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5799, "price": "57.11", "change": "-5.82", "market_id": "17", "circulate_market_value": "140127740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "25.19", "change": "-9.09", "market_id": "17", "circulate_market_value": "5319200600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 3, "hot_rank_chg": 35, "stock_cnt": 5799, "price": "3.76", "change": "1.35", "market_id": "33", "circulate_market_value": "8808507300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.53}, {"name": "强势人气股", "change_pct": -0.45}, {"name": "人工智能", "change_pct": 1.32}, {"name": "VR&AR", "change_pct": 0.78}, {"name": "京津冀", "change_pct": 1.25}, {"name": "装修装饰", "change_pct": 0.87}, {"name": "住房租赁", "change_pct": 4.37}, {"name": "破净股", "change_pct": 0.86}, {"name": "数字经济", "change_pct": 1.65}, {"name": "房产经纪", "change_pct": 1.11}, {"name": "物业管理", "change_pct": 3.58}, {"name": "华为产业链", "change_pct": 1.24}, {"name": "AI大模型/智能体", "change_pct": 1.46}]}, {"code": "600721", "name": "百花医药", "hot_rank": 4, "hot_rank_chg": 99, "stock_cnt": 5799, "price": "12.95", "change": "6.32", "market_id": "17", "circulate_market_value": "4979891900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.09}, {"name": "股权转让", "change_pct": 0.82}, {"name": "强势人气股", "change_pct": -0.45}, {"name": "新疆概念", "change_pct": 0.67}, {"name": "医药", "change_pct": 0.17}, {"name": "流感", "change_pct": -0.04}, {"name": "国资入股", "change_pct": 1.04}, {"name": "减肥药", "change_pct": 0.27}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 5, "hot_rank_chg": 5, "stock_cnt": 5799, "price": "7.14", "change": "-2.59", "market_id": "17", "circulate_market_value": "17982161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.91}, {"name": "工业大麻", "change_pct": 0.45}, {"name": "中药", "change_pct": 0.21}, {"name": "强势人气股", "change_pct": -0.45}, {"name": "保健品", "change_pct": -0.2}, {"name": "民营医院", "change_pct": 0.56}, {"name": "医药", "change_pct": 0.17}, {"name": "化学原料药", "change_pct": 0.18}, {"name": "流感", "change_pct": -0.04}, {"name": "振兴东北", "change_pct": 0.73}, {"name": "食品", "change_pct": -0.07}]}, {"code": "601811", "name": "新华文轩", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "20.37", "change": "9.99", "market_id": "17", "circulate_market_value": "16131082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 7, "hot_rank_chg": 68, "stock_cnt": 5799, "price": "4.08", "change": "9.97", "market_id": "33", "circulate_market_value": "39637662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": 0.58}, {"name": "深圳本地股", "change_pct": 1.94}, {"name": "股权转让", "change_pct": 0.82}, {"name": "房地产", "change_pct": 3.52}, {"name": "养老产业", "change_pct": 0.69}, {"name": "冷链", "change_pct": 0.63}, {"name": "住房租赁", "change_pct": 4.37}, {"name": "破净股", "change_pct": 0.86}, {"name": "冰雪产业", "change_pct": 0.42}, {"name": "物业管理", "change_pct": 3.58}, {"name": "旧改", "change_pct": 1.95}, {"name": "REITs", "change_pct": 3.19}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5799, "price": "9.41", "change": "10.06", "market_id": "17", "circulate_market_value": "9832394700.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.89}, {"name": "上海国企改革", "change_pct": 0.85}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 3.12}, {"name": "国企改革", "change_pct": 0.57}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 9, "hot_rank_chg": -7, "stock_cnt": 5799, "price": "8.74", "change": "-3.85", "market_id": "33", "circulate_market_value": "16737908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.39}, {"name": "林业", "change_pct": -1.32}, {"name": "碳中和", "change_pct": 0.27}, {"name": "自贸区", "change_pct": 0.42}]}, {"code": "600206", "name": "有研新材", "hot_rank": 10, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "49.70", "change": "-3.74", "market_id": "17", "circulate_market_value": "42073701000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 11, "hot_rank_chg": 29, "stock_cnt": 5799, "price": "24.40", "change": "10.01", "market_id": "33", "circulate_market_value": "14516345000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "600127", "name": "金健米业", "hot_rank": 12, "hot_rank_chg": 5, "stock_cnt": 5799, "price": "13.36", "change": "-9.97", "market_id": "17", "circulate_market_value": "8574223800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 13, "hot_rank_chg": 2, "stock_cnt": 5799, "price": "14.90", "change": "-9.70", "market_id": "17", "circulate_market_value": "19135751000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002640", "name": "跨境通", "hot_rank": 14, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "3.94", "change": "-0.51", "market_id": "33", "circulate_market_value": "6100151400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.91}, {"name": "数字经济", "change_pct": 1.65}, {"name": "拼多多概念股", "change_pct": 2.43}, {"name": "无线耳机", "change_pct": 0.7}, {"name": "网红/MCN", "change_pct": 1.71}]}, {"code": "600418", "name": "江淮汽车", "hot_rank": 15, "hot_rank_chg": -12, "stock_cnt": 5799, "price": "26.04", "change": "3.25", "market_id": "17", "circulate_market_value": "58698800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 16, "hot_rank_chg": -9, "stock_cnt": 5799, "price": "37.66", "change": "-9.99", "market_id": "17", "circulate_market_value": "18056592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920202", "name": "安达股份", "hot_rank": 17, "hot_rank_chg": 473, "stock_cnt": 5799, "price": "26.16", "change": "246.49", "market_id": "151", "circulate_market_value": "622608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002074", "name": "国轩高科", "hot_rank": 18, "hot_rank_chg": 140, "stock_cnt": 5799, "price": "28.68", "change": "10.01", "market_id": "33", "circulate_market_value": "49807343000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "海外扩产"}, {"code": "301716", "name": "鸿富诚", "hot_rank": 19, "hot_rank_chg": 190, "stock_cnt": 5799, "price": "578.88", "change": "653.16", "market_id": "33", "circulate_market_value": "7208991200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 20, "hot_rank_chg": -7, "stock_cnt": 5799, "price": "14.27", "change": "-9.97", "market_id": "17", "circulate_market_value": "9503820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 21, "hot_rank_chg": -5, "stock_cnt": 5799, "price": "6.13", "change": "1.32", "market_id": "17", "circulate_market_value": "5940175400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": 0.53}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 22, "hot_rank_chg": -13, "stock_cnt": 5799, "price": "9.57", "change": "-7.80", "market_id": "17", "circulate_market_value": "34333999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -0.14}, {"name": "OLED", "change_pct": 0.05}, {"name": "液晶面板/LCD", "change_pct": -0.05}, {"name": "国企改革", "change_pct": 0.57}, {"name": "玻璃基板封装", "change_pct": -0.33}, {"name": "陕西国企改革", "change_pct": 0.87}]}, {"code": "300207", "name": "欣旺达", "hot_rank": 23, "hot_rank_chg": 22, "stock_cnt": 5799, "price": "21.50", "change": "0.56", "market_id": "33", "circulate_market_value": "36849403000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 24, "hot_rank_chg": 48, "stock_cnt": 5799, "price": "6.90", "change": "10.05", "market_id": "17", "circulate_market_value": "7534018100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "食欲素", "xgb_concepts": [{"name": "医药", "change_pct": 0.17}, {"name": "化学原料药", "change_pct": 0.18}, {"name": "数字经济", "change_pct": 1.65}, {"name": "辅助生殖", "change_pct": 0.82}, {"name": "新冠病毒防治", "change_pct": 0.53}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 25, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "11.72", "change": "10.05", "market_id": "33", "circulate_market_value": "5386650300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器人轴承", "xgb_concepts": [{"name": "农机", "change_pct": 0.76}, {"name": "汽车零部件", "change_pct": 0.63}, {"name": "新能源汽车", "change_pct": 1.16}, {"name": "新能源车零部件", "change_pct": 0.82}, {"name": "大农业", "change_pct": 0.33}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 26, "hot_rank_chg": 41, "stock_cnt": 5799, "price": "59.60", "change": "10.00", "market_id": "17", "circulate_market_value": "8518337200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 27, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "16.28", "change": "-6.38", "market_id": "33", "circulate_market_value": "7455449700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002912", "name": "中新赛克", "hot_rank": 28, "hot_rank_chg": 24, "stock_cnt": 5799, "price": "29.12", "change": "10.01", "market_id": "33", "circulate_market_value": "4723929000.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "AI安全"}, {"code": "001330", "name": "博纳影业", "hot_rank": 29, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "6.63", "change": "4.25", "market_id": "33", "circulate_market_value": "7709677700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 2.51}, {"name": "新疆概念", "change_pct": 0.67}, {"name": "阿里巴巴概念股", "change_pct": 1.61}, {"name": "腾讯概念股", "change_pct": 1.45}, {"name": "短剧/互动影游", "change_pct": 2.9}, {"name": "IP经济/谷子经济", "change_pct": 1.43}]}, {"code": "002119", "name": "康强电子", "hot_rank": 30, "hot_rank_chg": -8, "stock_cnt": 5799, "price": "28.27", "change": "-4.85", "market_id": "33", "circulate_market_value": "10609278700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 31, "hot_rank_chg": 94, "stock_cnt": 5799, "price": "60.36", "change": "2.48", "market_id": "33", "circulate_market_value": "91593416000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 32, "hot_rank_chg": 19, "stock_cnt": 5799, "price": "15.31", "change": "-7.88", "market_id": "17", "circulate_market_value": "5412437100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 33, "hot_rank_chg": 4, "stock_cnt": 5799, "price": "42.93", "change": "3.75", "market_id": "33", "circulate_market_value": "27085407000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 34, "hot_rank_chg": 15, "stock_cnt": 5799, "price": "29.09", "change": "3.75", "market_id": "33", "circulate_market_value": "7180465000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 35, "hot_rank_chg": 19, "stock_cnt": 5799, "price": "42.69", "change": "-9.99", "market_id": "17", "circulate_market_value": "17774737000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 36, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "10.56", "change": "-2.04", "market_id": "17", "circulate_market_value": "3608979200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.82}, {"name": "轮胎", "change_pct": 0.28}, {"name": "风电", "change_pct": 0.53}, {"name": "航天", "change_pct": -0.01}, {"name": "人形机器人", "change_pct": 0.37}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 37, "hot_rank_chg": 151, "stock_cnt": 5799, "price": "5.49", "change": "8.28", "market_id": "33", "circulate_market_value": "4200622600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.21}, {"name": "股权转让", "change_pct": 0.82}, {"name": "优化生育（三孩）", "change_pct": 0.33}, {"name": "强势人气股", "change_pct": -0.45}, {"name": "医药商业", "change_pct": 0.26}, {"name": "保健品", "change_pct": -0.2}, {"name": "民营医院", "change_pct": 0.56}, {"name": "医药", "change_pct": 0.17}, {"name": "食品", "change_pct": -0.07}, {"name": "辅助生殖", "change_pct": 0.82}, {"name": "口腔", "change_pct": 0.24}, {"name": "医美", "change_pct": 0.45}, {"name": "新冠病毒防治", "change_pct": 0.53}]}, {"code": "600667", "name": "太极实业", "hot_rank": 39, "hot_rank_chg": 7, "stock_cnt": 5799, "price": "17.95", "change": "0.79", "market_id": "17", "circulate_market_value": "37543182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 40, "hot_rank_chg": 15, "stock_cnt": 5799, "price": "17.02", "change": "0.18", "market_id": "33", "circulate_market_value": "56608972000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 41, "hot_rank_chg": -20, "stock_cnt": 5799, "price": "6.94", "change": "-4.67", "market_id": "17", "circulate_market_value": "3180243900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": 0.49}, {"name": "福建自贸/海西概念", "change_pct": -0.39}, {"name": "自贸区", "change_pct": 0.42}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 42, "hot_rank_chg": 6, "stock_cnt": 5799, "price": "20.62", "change": "-3.73", "market_id": "33", "circulate_market_value": "24258787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 43, "hot_rank_chg": -7, "stock_cnt": 5799, "price": "11.57", "change": "-3.74", "market_id": "17", "circulate_market_value": "20700330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.62}, {"name": "纯碱", "change_pct": 0.47}, {"name": "食品", "change_pct": -0.07}, {"name": "土壤修复", "change_pct": 0.45}, {"name": "东数西算/算力", "change_pct": 1.16}, {"name": "OpenClaw概念", "change_pct": 0.76}, {"name": "DeepSeek概念股", "change_pct": 1.46}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 44, "hot_rank_chg": -32, "stock_cnt": 5799, "price": "813.01", "change": "-0.24", "market_id": "33", "circulate_market_value": "902389880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688137", "name": "近岸蛋白", "hot_rank": 45, "hot_rank_chg": 126, "stock_cnt": 5799, "price": "141.35", "change": "10.36", "market_id": "17", "circulate_market_value": "9882832000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 46, "hot_rank_chg": -16, "stock_cnt": 5799, "price": "51.21", "change": "1.57", "market_id": "33", "circulate_market_value": "58762961000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 47, "hot_rank_chg": -18, "stock_cnt": 5799, "price": "5.71", "change": "-1.55", "market_id": "33", "circulate_market_value": "201946340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.54}, {"name": "手机产业链", "change_pct": 0.92}, {"name": "超高清视频", "change_pct": 0.82}, {"name": "苹果产业链", "change_pct": 1.12}, {"name": "电竞", "change_pct": 1.13}, {"name": "半导体", "change_pct": 0.36}, {"name": "人工智能", "change_pct": 1.32}, {"name": "互联网医疗", "change_pct": 0.55}, {"name": "VR&AR", "change_pct": 0.78}, {"name": "OLED", "change_pct": 0.05}, {"name": "京津冀", "change_pct": 1.25}, {"name": "物联网", "change_pct": 1.18}, {"name": "指纹识别", "change_pct": 0.16}, {"name": "汽车零部件", "change_pct": 0.63}, {"name": "白马股", "change_pct": -0.15}, {"name": "智能制造", "change_pct": 0.65}, {"name": "小米概念股", "change_pct": 0.89}, {"name": "国产芯片", "change_pct": 0.54}, {"name": "液晶面板/LCD", "change_pct": -0.05}, {"name": "全息概念", "change_pct": 0.87}, {"name": "理想汽车概念股", "change_pct": 0.12}, {"name": "MicroLED", "change_pct": -0.03}, {"name": "钙钛矿电池", "change_pct": 0.43}, {"name": "智能手表", "change_pct": 0.4}, {"name": "MiniLED", "change_pct": 0.8}, {"name": "传感器", "change_pct": 1.07}, {"name": "大硅片", "change_pct": -0.35}, {"name": "AI PC", "change_pct": 1.64}, {"name": "华为产业链", "change_pct": 1.24}, {"name": "回购", "change_pct": 0.16}, {"name": "光电共封装CPO", "change_pct": 1.28}, {"name": "智能眼镜/MR头显", "change_pct": 0.79}, {"name": "玻璃基板封装", "change_pct": -0.33}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 48, "hot_rank_chg": 11, "stock_cnt": 5799, "price": "11.36", "change": "9.97", "market_id": "33", "circulate_market_value": "8653657500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "厨房小家电", "xgb_concepts": [{"name": "小家电", "change_pct": 0.45}, {"name": "机器人", "change_pct": 0.61}, {"name": "家电", "change_pct": 0.51}, {"name": "华为鸿蒙", "change_pct": 1.25}]}, {"code": "002384", "name": "东山精密", "hot_rank": 49, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "171.21", "change": "1.74", "market_id": "33", "circulate_market_value": "237352140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 50, "hot_rank_chg": -36, "stock_cnt": 5799, "price": "22.75", "change": "-5.29", "market_id": "17", "circulate_market_value": "31751505000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600032", "name": "浙江新能", "hot_rank": 51, "hot_rank_chg": 6, "stock_cnt": 5799, "price": "8.17", "change": "9.96", "market_id": "17", "circulate_market_value": "19646197000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "绿色电力", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 0.46}, {"name": "水电", "change_pct": -0.11}, {"name": "浙江国企改革", "change_pct": 1.03}, {"name": "氢能源/燃料电池", "change_pct": 0.7}, {"name": "光伏", "change_pct": 0.34}, {"name": "风电", "change_pct": 0.53}, {"name": "国企改革", "change_pct": 0.57}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 52, "hot_rank_chg": -10, "stock_cnt": 5799, "price": "39.69", "change": "1.07", "market_id": "17", "circulate_market_value": "157632290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 53, "hot_rank_chg": -12, "stock_cnt": 5799, "price": "31.33", "change": "0.03", "market_id": "17", "circulate_market_value": "106927713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 54, "hot_rank_chg": 12, "stock_cnt": 5799, "price": "37.00", "change": "-3.34", "market_id": "17", "circulate_market_value": "54093808000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 55, "hot_rank_chg": 19, "stock_cnt": 5799, "price": "65.70", "change": "0.41", "market_id": "17", "circulate_market_value": "117564537000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 56, "hot_rank_chg": -31, "stock_cnt": 5799, "price": "55.55", "change": "3.25", "market_id": "17", "circulate_market_value": "250143810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 57, "hot_rank_chg": -37, "stock_cnt": 5799, "price": "2.22", "change": "-0.89", "market_id": "33", "circulate_market_value": "11194318600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.45}, {"name": "新能源整车", "change_pct": 0.54}, {"name": "汽车整车", "change_pct": 0.52}, {"name": "新能源汽车", "change_pct": 1.16}, {"name": "低价股", "change_pct": 1.33}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 58, "hot_rank_chg": -14, "stock_cnt": 5799, "price": "83.03", "change": "4.70", "market_id": "33", "circulate_market_value": "60216392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 59, "hot_rank_chg": 21, "stock_cnt": 5799, "price": "17.90", "change": "3.47", "market_id": "33", "circulate_market_value": "10443544800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 60, "hot_rank_chg": -41, "stock_cnt": 5799, "price": "451.02", "change": "-1.88", "market_id": "17", "circulate_market_value": "13570163000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601238", "name": "广汽集团", "hot_rank": 61, "hot_rank_chg": 51, "stock_cnt": 5799, "price": "5.60", "change": "10.02", "market_id": "17", "circulate_market_value": "41348707000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "拟购买一汽丰田50%股权", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 0.85}, {"name": "车联网/车路云", "change_pct": 1.02}, {"name": "业绩爆雷", "change_pct": 2.37}, {"name": "无人驾驶", "change_pct": 0.9}, {"name": "锂电池", "change_pct": 1.63}, {"name": "石墨烯", "change_pct": 1.55}, {"name": "新能源整车", "change_pct": 0.54}, {"name": "汽车整车", "change_pct": 0.52}, {"name": "复牌股", "change_pct": 4.63}, {"name": "新能源汽车", "change_pct": 1.16}, {"name": "破净股", "change_pct": 0.86}, {"name": "宁德时代概念股", "change_pct": 1.43}, {"name": "独角兽", "change_pct": 0.85}, {"name": "动力电池回收", "change_pct": 1.77}, {"name": "华为汽车", "change_pct": 0.65}, {"name": "大消费", "change_pct": -0.03}, {"name": "华为产业链", "change_pct": 1.24}, {"name": "人形机器人", "change_pct": 0.37}, {"name": "智能座舱", "change_pct": 0.78}, {"name": "飞行汽车/eVTOL", "change_pct": 0.83}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 62, "hot_rank_chg": 129, "stock_cnt": 5799, "price": "18.70", "change": "2.69", "market_id": "33", "circulate_market_value": "8458735600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 63, "hot_rank_chg": -13, "stock_cnt": 5799, "price": "286.80", "change": "-1.78", "market_id": "33", "circulate_market_value": "1221944980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 64, "hot_rank_chg": -31, "stock_cnt": 5799, "price": "14.57", "change": "-3.32", "market_id": "17", "circulate_market_value": "9912257700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 65, "hot_rank_chg": 48, "stock_cnt": 5799, "price": "160.66", "change": "-0.70", "market_id": "17", "circulate_market_value": "397357200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603949", "name": "雪龙集团", "hot_rank": 66, "hot_rank_chg": -40, "stock_cnt": 5799, "price": "20.45", "change": "10.01", "market_id": "17", "circulate_market_value": "4298697900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "商用车热管理"}, {"code": "603328", "name": "依顿电子", "hot_rank": 67, "hot_rank_chg": 392, "stock_cnt": 5799, "price": "14.44", "change": "9.98", "market_id": "17", "circulate_market_value": "14417511000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端PCB"}, {"code": "600360", "name": "华微电子", "hot_rank": 68, "hot_rank_chg": 212, "stock_cnt": 5799, "price": "11.31", "change": "4.24", "market_id": "17", "circulate_market_value": "10860939900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 0.36}, {"name": "股权转让", "change_pct": 0.82}, {"name": "ST摘帽", "change_pct": 0.7}, {"name": "国产芯片", "change_pct": 0.54}, {"name": "第三代半导体", "change_pct": 0.68}, {"name": "IGBT", "change_pct": 1.0}, {"name": "氮化镓", "change_pct": 0.85}, {"name": "碳化硅", "change_pct": 0.63}, {"name": "国资入股", "change_pct": 1.04}, {"name": "华为产业链", "change_pct": 1.24}]}, {"code": "603626", "name": "科森科技", "hot_rank": 69, "hot_rank_chg": 181, "stock_cnt": 5799, "price": "23.91", "change": "6.27", "market_id": "17", "circulate_market_value": "13267173400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 70, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "407.95", "change": "3.48", "market_id": "17", "circulate_market_value": "165765720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 72, "hot_rank_chg": -19, "stock_cnt": 5799, "price": "367.57", "change": "2.53", "market_id": "17", "circulate_market_value": "246535940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 73, "hot_rank_chg": 44, "stock_cnt": 5799, "price": "3.21", "change": "-1.53", "market_id": "33", "circulate_market_value": "6352620100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 2.57}, {"name": "深圳本地股", "change_pct": 1.94}, {"name": "共享经济", "change_pct": 0.84}, {"name": "强势人气股", "change_pct": -0.45}, {"name": "养老产业", "change_pct": 0.69}, {"name": "住房租赁", "change_pct": 4.37}, {"name": "房产经纪", "change_pct": 1.11}, {"name": "第三代半导体", "change_pct": 0.68}, {"name": "物业管理", "change_pct": 3.58}, {"name": "旧改", "change_pct": 1.95}, {"name": "横琴新区", "change_pct": 1.23}, {"name": "氮化镓", "change_pct": 0.85}, {"name": "REITs", "change_pct": 3.19}, {"name": "华为产业链", "change_pct": 1.24}]}, {"code": "600869", "name": "远东股份", "hot_rank": 74, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "18.03", "change": "-0.33", "market_id": "17", "circulate_market_value": "40014930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002882", "name": "金龙羽", "hot_rank": 75, "hot_rank_chg": 244, "stock_cnt": 5799, "price": "24.51", "change": "10.01", "market_id": "33", "circulate_market_value": "6053725800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "601208", "name": "东材科技", "hot_rank": 76, "hot_rank_chg": 7, "stock_cnt": 5799, "price": "50.53", "change": "-0.34", "market_id": "17", "circulate_market_value": "51044544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002614", "name": "奥佳华", "hot_rank": 77, "hot_rank_chg": -38, "stock_cnt": 5799, "price": "8.13", "change": "-4.35", "market_id": "33", "circulate_market_value": "3587568300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医疗器械", "change_pct": -0.06}, {"name": "股权转让", "change_pct": 0.82}, {"name": "人工智能", "change_pct": 1.32}, {"name": "养老产业", "change_pct": 0.69}, {"name": "福建自贸/海西概念", "change_pct": -0.39}, {"name": "外贸受益概念", "change_pct": 0.46}, {"name": "小家电", "change_pct": 0.45}, {"name": "机器人", "change_pct": 0.61}, {"name": "家电", "change_pct": 0.51}, {"name": "RCEP概念", "change_pct": -0.2}, {"name": "血氧仪", "change_pct": 0.0}, {"name": "华为鸿蒙", "change_pct": 1.25}, {"name": "华为产业链", "change_pct": 1.24}, {"name": "自贸区", "change_pct": 0.42}, {"name": "IP经济/谷子经济", "change_pct": 1.43}]}, {"code": "600371", "name": "万向德农", "hot_rank": 78, "hot_rank_chg": 33, "stock_cnt": 5799, "price": "12.84", "change": "-10.02", "market_id": "17", "circulate_market_value": "3756701500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -1.34}, {"name": "强势人气股", "change_pct": -0.45}, {"name": "转基因", "change_pct": -1.39}, {"name": "乡村振兴", "change_pct": -0.02}, {"name": "大农业", "change_pct": 0.33}]}, {"code": "002815", "name": "崇达技术", "hot_rank": 79, "hot_rank_chg": 268, "stock_cnt": 5799, "price": "24.44", "change": "9.99", "market_id": "33", "circulate_market_value": "18993254000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 80, "hot_rank_chg": 42, "stock_cnt": 5799, "price": "255.99", "change": "4.57", "market_id": "33", "circulate_market_value": "278616460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 81, "hot_rank_chg": -19, "stock_cnt": 5799, "price": "13.85", "change": "-2.81", "market_id": "33", "circulate_market_value": "9142455000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 82, "hot_rank_chg": 65, "stock_cnt": 5799, "price": "11.18", "change": "2.76", "market_id": "17", "circulate_market_value": "19399323000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 0.82}, {"name": "核电", "change_pct": 0.44}, {"name": "锂电池", "change_pct": 1.63}, {"name": "铜箔/覆铜板", "change_pct": 2.11}, {"name": "PCB板", "change_pct": 3.08}, {"name": "中科院系", "change_pct": 0.8}, {"name": "新能源汽车", "change_pct": 1.16}, {"name": "宁德时代概念股", "change_pct": 1.43}, {"name": "固态电池", "change_pct": 2.07}, {"name": "PET复合铜箔", "change_pct": 1.54}]}, {"code": "603200", "name": "上海洗霸", "hot_rank": 83, "hot_rank_chg": 715, "stock_cnt": 5799, "price": "40.67", "change": "10.01", "market_id": "17", "circulate_market_value": "7136775800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "000011", "name": "深物业A", "hot_rank": 84, "hot_rank_chg": 12, "stock_cnt": 5799, "price": "11.13", "change": "9.98", "market_id": "33", "circulate_market_value": "5859672800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "房地产开发", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.94}, {"name": "房地产", "change_pct": 3.52}, {"name": "粤港澳大湾区", "change_pct": 1.34}, {"name": "住房租赁", "change_pct": 4.37}, {"name": "物业管理", "change_pct": 3.58}, {"name": "新型城镇化", "change_pct": 1.61}, {"name": "旧改", "change_pct": 1.95}]}, {"code": "002413", "name": "雷科防务", "hot_rank": 85, "hot_rank_chg": -42, "stock_cnt": 5799, "price": "8.78", "change": "-4.36", "market_id": "33", "circulate_market_value": "11373879800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.02}, {"name": "无人驾驶", "change_pct": 0.9}, {"name": "5G", "change_pct": 0.86}, {"name": "人工智能", "change_pct": 1.32}, {"name": "大飞机", "change_pct": -0.14}, {"name": "北斗导航", "change_pct": 0.54}, {"name": "军民融合", "change_pct": 0.7}, {"name": "军工", "change_pct": 0.49}, {"name": "国产芯片", "change_pct": 0.54}, {"name": "百度概念股", "change_pct": 1.95}, {"name": "毫米波通信", "change_pct": -0.36}, {"name": "航天", "change_pct": -0.01}, {"name": "闪存", "change_pct": 1.65}, {"name": "卫星互联网", "change_pct": -0.06}, {"name": "华为产业链", "change_pct": 1.24}, {"name": "毫米波雷达", "change_pct": 1.6}, {"name": "飞行汽车/eVTOL", "change_pct": 0.83}, {"name": "低空经济", "change_pct": 0.65}, {"name": "军工信息化", "change_pct": 0.62}, {"name": "算力一体机", "change_pct": 1.19}]}, {"code": "301190", "name": "善水科技", "hot_rank": 86, "hot_rank_chg": 23, "stock_cnt": 5799, "price": "29.94", "change": "20.00", "market_id": "33", "circulate_market_value": "5444708800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "染料中间体"}, {"code": "600498", "name": "烽火通信", "hot_rank": 87, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "36.28", "change": "-1.87", "market_id": "17", "circulate_market_value": "46134426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002232", "name": "启明信息", "hot_rank": 88, "hot_rank_chg": -9, "stock_cnt": 5799, "price": "17.15", "change": "5.34", "market_id": "33", "circulate_market_value": "7006606000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603396", "name": "金辰股份", "hot_rank": 89, "hot_rank_chg": -55, "stock_cnt": 5799, "price": "35.28", "change": "-10.00", "market_id": "17", "circulate_market_value": "4887249400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 90, "hot_rank_chg": 25, "stock_cnt": 5799, "price": "11.29", "change": "-8.66", "market_id": "33", "circulate_market_value": "3715791900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.89}, {"name": "锂电池", "change_pct": 1.63}, {"name": "ST摘帽", "change_pct": 0.7}, {"name": "湖南国企改革", "change_pct": 0.26}, {"name": "污水处理", "change_pct": 1.03}, {"name": "智慧城市", "change_pct": 1.31}, {"name": "新能源汽车", "change_pct": 1.16}, {"name": "环保", "change_pct": 0.74}, {"name": "动力电池回收", "change_pct": 1.77}, {"name": "干细胞", "change_pct": 0.6}, {"name": "国企改革", "change_pct": 0.57}]}, {"code": "000981", "name": "山子高科", "hot_rank": 91, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "2.76", "change": "2.60", "market_id": "33", "circulate_market_value": "26256863000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 0.36}, {"name": "无人驾驶", "change_pct": 0.9}, {"name": "汽车零部件", "change_pct": 0.63}, {"name": "新能源汽车", "change_pct": 1.16}, {"name": "新能源车零部件", "change_pct": 0.82}, {"name": "低价股", "change_pct": 1.33}, {"name": "减速器", "change_pct": 0.03}, {"name": "华为汽车", "change_pct": 0.65}]}, {"code": "000978", "name": "桂林旅游", "hot_rank": 92, "hot_rank_chg": 3, "stock_cnt": 5799, "price": "7.27", "change": "2.11", "market_id": "33", "circulate_market_value": "3403243800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.45}, {"name": "旅游", "change_pct": 0.36}, {"name": "腾讯概念股", "change_pct": 1.45}, {"name": "广西概念", "change_pct": 0.31}, {"name": "低空经济", "change_pct": 0.65}]}, {"code": "300502", "name": "新易盛", "hot_rank": 93, "hot_rank_chg": -22, "stock_cnt": 5799, "price": "392.91", "change": "-1.70", "market_id": "33", "circulate_market_value": "492993510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 94, "hot_rank_chg": 51, "stock_cnt": 5799, "price": "42.20", "change": "2.58", "market_id": "33", "circulate_market_value": "64056585000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 95, "hot_rank_chg": 49, "stock_cnt": 5799, "price": "4.78", "change": "0.42", "market_id": "33", "circulate_market_value": "12679191700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.45}, {"name": "装修装饰", "change_pct": 0.87}, {"name": "装配式建筑", "change_pct": 1.41}, {"name": "破净股", "change_pct": 0.86}, {"name": "航天", "change_pct": -0.01}, {"name": "旧改", "change_pct": 1.95}]}, {"code": "002141", "name": "贤丰控股", "hot_rank": 96, "hot_rank_chg": 67, "stock_cnt": 5799, "price": "6.58", "change": "4.61", "market_id": "33", "circulate_market_value": "6796717600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.14}, {"name": "锂电池", "change_pct": 1.63}, {"name": "强势人气股", "change_pct": -0.45}, {"name": "铜箔/覆铜板", "change_pct": 2.11}, {"name": "粤港澳大湾区", "change_pct": 1.34}, {"name": "新能源汽车", "change_pct": 1.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 1.23}]}, {"code": "600460", "name": "士兰微", "hot_rank": 97, "hot_rank_chg": 120, "stock_cnt": 5799, "price": "31.84", "change": "1.40", "market_id": "17", "circulate_market_value": "52984048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 98, "hot_rank_chg": -7, "stock_cnt": 5799, "price": "132.98", "change": "0.78", "market_id": "17", "circulate_market_value": "320714360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301689", "name": "电科思仪", "hot_rank": 99, "hot_rank_chg": -17, "stock_cnt": 5799, "price": "77.51", "change": "-8.92", "market_id": "33", "circulate_market_value": "4461588100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000020", "name": "深华发A", "hot_rank": 100, "hot_rank_chg": 36, "stock_cnt": 5799, "price": "14.65", "change": "0.07", "market_id": "33", "circulate_market_value": "2654073000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002242", "name": "九阳股份", "price": 11.36, "change_pct": 9.97, "reason": "豆浆机龙头；公司表示没有哈基米hachimi相关的产品等", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 2.51, "first_limit_up": 1790645430, "break_limit_up_times": 0}, {"code": "600982", "name": "宁波能源", "price": 5.49, "change_pct": 10.02, "reason": "隶属宁波市国资委，主要从事热电联产、生物质发电、抽水蓄能和综合能源服务，子公司拟以3.86亿元收购岳西风电100%股权", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1790645469, "break_limit_up_times": 0}, {"code": "603949", "name": "雪龙集团", "price": 20.45, "change_pct": 10.01, "reason": "公司对深创投中小企业发展基金（新疆）有限合伙企业的持股比例为0.7239%，后者持有杭州宇树科技有限公司1.3546%股份", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 1.67, "first_limit_up": 1790645100, "break_limit_up_times": 0}, {"code": "600325", "name": "华发股份", "price": 2.95, "change_pct": 10.07, "reason": "珠海地产龙头，拟向控股股东定增募资不超30亿元", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 6.38, "first_limit_up": 1790662509, "break_limit_up_times": 0}, {"code": "002913", "name": "奥士康", "price": 91.08, "change_pct": 10.0, "reason": "公司表示有通过供应体系向英伟达提供PCB系列产品，目前正在积极参与英伟达R系列产品的打样和测试工作，主要为GPU相关产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.95, "first_limit_up": 1790646027, "break_limit_up_times": 2}, {"code": "002494", "name": "华斯股份", "price": 5.32, "change_pct": 9.92, "reason": "公司是国内裘皮行业龙头，网上销售主要通过淘宝、抖音等平台开设店铺销售产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.23, "first_limit_up": 1790648610, "break_limit_up_times": 0}, {"code": "605198", "name": "安德利", "price": 65.68, "change_pct": 10.0, "reason": "公司拟收购甬强科技事项尚在推进中，交易完成后将形成浓缩果汁与电子信息互连材料双主业格局；标的公司主营覆铜板材料，已完成M4至M9全系列高速板材产品布局", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.32, "first_limit_up": 1790662903, "break_limit_up_times": 0}, {"code": "603200", "name": "上海洗霸", "price": 40.67, "change_pct": 10.01, "reason": "公司应用于eVTOL的高比能软包锂离子固态电池已设计完成", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.13, "first_limit_up": 1790645446, "break_limit_up_times": 0}, {"code": "000011", "name": "深物业A", "price": 11.13, "change_pct": 9.98, "reason": "深圳国资委控股的深圳投资控股公司旗下；主营房地产开发、房屋租赁、物业管理，餐饮业务和仓储业务", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 8.0, "first_limit_up": 1790645100, "break_limit_up_times": 1}, {"code": "000068", "name": "华控赛格", "price": 3.54, "change_pct": 9.94, "reason": "公司控股子公司内蒙古奥原目前业务涉及负极材料中石墨化加工环节，主要用户群体有锂离子电池负极材料制造商以及锂离子电池材料研究与开发的公司等", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 3.47, "first_limit_up": 1790646108, "break_limit_up_times": 1}, {"code": "605303", "name": "园林股份", "price": 26.05, "change_pct": 10.01, "reason": "公司拟收购存储芯片及模组企业华澜微93.5%股份", "plates": ["国产芯片", "资产重组"], "limit_up_days": 1, "turnover_ratio": 0.16, "first_limit_up": 1790645100, "break_limit_up_times": 0}, {"code": "000002", "name": "万  科Ａ", "price": 4.08, "change_pct": 9.97, "reason": "公司上半年营收约702亿元", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 8.26, "first_limit_up": 1790647707, "break_limit_up_times": 2}, {"code": "000678", "name": "襄阳轴承", "price": 11.72, "change_pct": 10.05, "reason": "1、公司部分精密轴承产品可应用于谐波减速器等，目前已经完成产品试制并送样；\n2、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 2.06, "first_limit_up": 1790645100, "break_limit_up_times": 0}, {"code": "002912", "name": "中新赛克", "price": 29.12, "change_pct": 10.01, "reason": "1、深圳国资委旗下，领先的网络可视化基础架构产品提供商，已有相关的算力数据网络监测和调度技术研发储备；公司海睿思产品已成功通过上海数据交易所的数商认证；\n2、公司构建了涵盖网络内容安全、宽带网与移动网产品、数据运营及电磁空间安全的全栈式防护体系，深度融合AI大模型与GenAI技术，推出了数据安全分类分级系统及全链路安全可信解决方案，为政府、运营商及关键基础设施提供全生命周期的网络空间数据智能治理与安全防护服务", "plates": ["网络安全"], "limit_up_days": 2, "turnover_ratio": 17.1, "first_limit_up": 1790645610, "break_limit_up_times": 3}, {"code": "688655", "name": "迅捷兴", "price": 75.7, "change_pct": 20.01, "reason": "1、公司拥有深圳、信丰和珠海三个制造基地，PCB业务涵盖样板、小批量板和大批量板，是行业内为数不多可以为客户提供从样板到批量生产一站式服务的PCB企业；\n2、公司表示在光模块领域已积累了相关产品经验和客户，目前可批量接单；\n3、公司产品主要应用于工业机器人类型产品，如焊接机器人、多关节机器人、智能协作机器人、移动机器人等;", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 10.19, "first_limit_up": 1790649873, "break_limit_up_times": 0}, {"code": "603188", "name": "亚邦股份", "price": 4.91, "change_pct": 10.09, "reason": "公司主要从事染料及农药的生产销售", "plates": ["染料"], "limit_up_days": 1, "turnover_ratio": 4.34, "first_limit_up": 1790646620, "break_limit_up_times": 0}, {"code": "603328", "name": "依顿电子", "price": 14.44, "change_pct": 9.98, "reason": "1、印制电路板行业内的重要品牌之一；公司的印制电路板具有高精度、高密度、高可靠性的特点，已广泛应用于汽车电子、新能源及电源、计算机与通讯、工控医疗、多媒体与显示等领域；\n2、公司是苹果的间接供应商，目前进入苹果产业链的产品主要用于电源系统及模块，键盘使用，数据线连接器等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.87, "first_limit_up": 1790645691, "break_limit_up_times": 0}, {"code": "688685", "name": "迈信林", "price": 39.7, "change_pct": 20.01, "reason": "1、公司签署算力服务器相关设备采购合同，旨在服务于有算力需求的客户；\n2、公司3um设备用在400GHz和800GHz光模块封装，已有多家客户通过测试，有客户已开始分批下单采购，同时国内光通讯行业龙头企业将采用此设备做产品测试", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.04, "first_limit_up": 1790649100, "break_limit_up_times": 1}, {"code": "603598", "name": "引力传媒", "price": 19.13, "change_pct": 10.01, "reason": "领先的数字营销服务公司，字节跳动巨量引擎核心代理商；公司内部自研上线“核力 AI”的 1.0 版本、已具备“营销文案 生成”、“图片识别与生成”及“数字分身复刻及驱动”等功能应用", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 11.08, "first_limit_up": 1790651628, "break_limit_up_times": 1}, {"code": "600241", "name": "时代万恒", "price": 8.84, "change_pct": 9.95, "reason": "控股子公司九夷锂能主营业务为锂电池的研产销，拥有国内领先的圆柱形锂电池全自动化产线，目标市场定位于高端电动工具领域，开拓了博世、飞利浦、斯蒂尔、宝时得等优质客户", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 5.83, "first_limit_up": 1790645100, "break_limit_up_times": 0}, {"code": "002815", "name": "崇达技术", "price": 24.44, "change_pct": 9.99, "reason": "公司是全球领先的小批量PCB企业，供给工业控制领域客户的PCB产品有应用于智能家居、人形机器人、工业机器人等方面", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 10.5, "first_limit_up": 1790652465, "break_limit_up_times": 1}, {"code": "600152", "name": "维科技术", "price": 8.32, "change_pct": 10.05, "reason": "国内排名前五的3C数码电池供应商；公司与上海交大合作进行钠电研发，并在南昌基地实现国内首条GW级钠电产线量产，拥有能量密度160Wh/kg、循环6000次以上的钠电技术并推出多款产品，还申请了钠离子电池相关专利", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 6.76, "first_limit_up": 1790650198, "break_limit_up_times": 1}, {"code": "002846", "name": "英联股份", "price": 11.88, "change_pct": 10.0, "reason": "公司投资30.89亿元建设新能源汽车动力锂电池复合铜箔、复合铝箔项目，项目分为2期，计划建设100条复合铜箔和10条复合铝箔生产线，达产后产能可达复合铜箔5亿㎡、复合铝箔1亿㎡", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 8.42, "first_limit_up": 1790646039, "break_limit_up_times": 1}, {"code": "000607", "name": "华媒控股", "price": 4.13, "change_pct": 10.13, "reason": "1、公司主要从事广告策划发布、报刊发行与印刷、教育等业务，拟挂牌转让中教未来8.62%股权并引入外部股东增资不低于2.4亿元；\n2、公司持有杭州文化产权交易所 40% 股权，该文交所聚焦文化艺术品等资产的确权、交易与流转", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 10.93, "first_limit_up": 1790651445, "break_limit_up_times": 0}, {"code": "605258", "name": "协和电子", "price": 44.01, "change_pct": 10.0, "reason": "国内领先的高频通讯板生产商；公司车载毫米波雷达等产品且已批量供货，与合众新能源、上汽时代、万帮数字能源等新能源领域的客户建立了合作", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 10.65, "first_limit_up": 1790662040, "break_limit_up_times": 2}, {"code": "301513", "name": "尚水智能", "price": 51.42, "change_pct": 20.0, "reason": "公司主要产品分为新能源电池极片制造智能装备和新材料制备智能装备两大板块\n", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 14.59, "first_limit_up": 1790645865, "break_limit_up_times": 0}, {"code": "002813", "name": "路畅科技", "price": 26.38, "change_pct": 10.01, "reason": "公司主要产品为智能座舱、智能辅助驾驶及智能网联相关产品，已有车道偏离预警(LDW)、前向防撞预警(FCW)等功能，LKA、AEB、ACC基于LDW、FCW结合主动控制尚在开发中", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.53, "first_limit_up": 1790658330, "break_limit_up_times": 2}, {"code": "601519", "name": "大智慧", "price": 9.01, "change_pct": 10.01, "reason": "公司是互联网金融信息服务综合提供商，，正在推进湘财股份换股吸收合并事项", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.57, "first_limit_up": 1790649577, "break_limit_up_times": 1}, {"code": "601238", "name": "广汽集团", "price": 5.6, "change_pct": 10.02, "reason": "公司拟发行股份购买一汽丰田50%股权", "plates": ["新能源汽车", "资产重组"], "limit_up_days": 1, "turnover_ratio": 0.11, "first_limit_up": 1790645100, "break_limit_up_times": 0}, {"code": "603322", "name": "超讯科技", "price": 29.1, "change_pct": 10.02, "reason": "公司为“沐曦”品牌GPU产品特定行业总代理，并于2025年初携手沐曦等设立控股子公司“讯曦智能”，向芯片封测、服务器整机生产、销售及维修延伸，强化国产算力产业链布局", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.68, "first_limit_up": 1790652047, "break_limit_up_times": 0}, {"code": "603602", "name": "纵横通信", "price": 12.71, "change_pct": 10.04, "reason": "公司已为红果短剧、番茄小说等头部平台提供推广服务", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.68, "first_limit_up": 1790660731, "break_limit_up_times": 0}, {"code": "002244", "name": "滨江集团", "price": 9.46, "change_pct": 10.0, "reason": "杭州、上海、深圳区域高端地产商，操刀滨江楼盘", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.02, "first_limit_up": 1790652060, "break_limit_up_times": 0}, {"code": "603630", "name": "拉芳家化", "price": 15.57, "change_pct": 10.04, "reason": "公司旗下拥有驱蚊花露水等相关驱蚊产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.59, "first_limit_up": 1790662315, "break_limit_up_times": 0}, {"code": "600189", "name": "泉阳泉", "price": 9.01, "change_pct": 10.01, "reason": "吉林省市场占有率第一的饮用水品牌，推出白桦树汁等产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.82, "first_limit_up": 1790645548, "break_limit_up_times": 0}, {"code": "603980", "name": "吉华集团", "price": 8.84, "change_pct": 9.95, "reason": "大型的染料及染料中间体生产企业；公司为宇树机器人间接投资方之一", "plates": ["染料"], "limit_up_days": 1, "turnover_ratio": 7.48, "first_limit_up": 1790659579, "break_limit_up_times": 0}, {"code": "002303", "name": "美盈森", "price": 6.7, "change_pct": 10.02, "reason": "国际领先的包装一体化综合服务商；公司主营运输包装、精品包装、标签及电子功能材料模切产品，并持续为消费电子、白酒、家电等行业龙头提供一体化包装服务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.72, "first_limit_up": 1790662479, "break_limit_up_times": 1}, {"code": "000036", "name": "华联控股", "price": 4.21, "change_pct": 9.92, "reason": "公司以房地产开发与物业经营为核心主业；拟12.35亿元收购Argentum Lithium 100%股份，标的主要产品为电池级碳酸锂", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.49, "first_limit_up": 1790646312, "break_limit_up_times": 0}, {"code": "605388", "name": "均瑶健康", "price": 6.72, "change_pct": 9.98, "reason": "国内最早生产与销售常温乳酸菌饮品的品牌企业之一；全资子公司奇梦星主要负责公司IP产品及母婴渠道产品的经营，目前已推出了“小黄人”系列乳酸菌饮品、“功夫熊猫”系列常温奶酪棒等产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.35, "first_limit_up": 1790663519, "break_limit_up_times": 0}, {"code": "002799", "name": "环球印务", "price": 7.55, "change_pct": 10.06, "reason": "子公司领凯科技逐步引入ChatGPT技术，在数字化广告营销中为广告智能投放、素材自动化创作、直播带货业务场景及智能对话客服等方面赋能", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 5.25, "first_limit_up": 1790647623, "break_limit_up_times": 0}, {"code": "002866", "name": "传艺科技", "price": 15.36, "change_pct": 10.03, "reason": "1、公司在钠电池正负极材料、电解液等关键环节进行一体化布局并实现量产交付，产品可应用于A00级车、小动力车、电动工具及储能等领域；\n2、公司专注于柔性线路板（FPC）的设计、研发、制造和销售，为客户提供定制化解决方案；\n3、消费电子零组件行业头部企业之一，拟定增募资不超8.71亿元，加码智能化产线升级", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 6.8, "first_limit_up": 1790645742, "break_limit_up_times": 1}, {"code": "301190", "name": "善水科技", "price": 29.94, "change_pct": 20.0, "reason": "公司主要经营染料中间体、农药和医药中间体的研产销", "plates": ["染料"], "limit_up_days": 2, "turnover_ratio": 11.51, "first_limit_up": 1790646393, "break_limit_up_times": 2}, {"code": "600488", "name": "津药药业", "price": 6.9, "change_pct": 10.05, "reason": "公司创新研究院JYSW003银屑病创新药项目正按合同推进，前期药效与安全性表现良好", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 12.87, "first_limit_up": 1790645406, "break_limit_up_times": 1}, {"code": "000823", "name": "超声电子", "price": 24.4, "change_pct": 10.01, "reason": "公司M7/M8级高速覆铜板处于研发测试阶段，800G、1.6T光模块配套PCB在研究跟进中", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 19.56, "first_limit_up": 1790649081, "break_limit_up_times": 2}, {"code": "600825", "name": "新华传媒", "price": 9.41, "change_pct": 10.06, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组", "传媒"], "limit_up_days": 6, "turnover_ratio": 1.5, "first_limit_up": 1790645100, "break_limit_up_times": 0}, {"code": "002882", "name": "金龙羽", "price": 24.51, "change_pct": 10.01, "reason": "公司固态电解质、半固态电芯已进入中试试验；全资子公司惠州金龙羽投资3亿元与锦添翼共同开发固态电池相关技术，锦添翼实际控制人李新禄及其研究团队在锂离子电池领域积累了20多年的研究基础，已成功掌握了氧化物固态电解质的宏量制备、硅碳负极材料的批量化生产、固态电芯的原位集成等研究成果", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 7.48, "first_limit_up": 1790645961, "break_limit_up_times": 0}, {"code": "603533", "name": "掌阅科技", "price": 23.65, "change_pct": 10.0, "reason": "1、字节跳动参股，数字阅读行业龙头；公司已接入国内AI创业公司月之暗面旗下AI对话助手产品Kimi；\n2、公司推出海外短剧平台iDrama，现已上线数千部短剧作品，英语、日语、韩语、西班牙语、葡萄牙语等多语种版本", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 5.86, "first_limit_up": 1790647570, "break_limit_up_times": 1}, {"code": "002205", "name": "国统股份", "price": 12.76, "change_pct": 10.0, "reason": "中国物流集团旗下，我国大型管道输水工程PCCP骨干供应商之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.77, "first_limit_up": 1790645700, "break_limit_up_times": 3}, {"code": "601949", "name": "中国出版", "price": 6.01, "change_pct": 10.07, "reason": "国内出版行业的龙头企业；公司以图书、报纸、期刊等出版物出版为主业，旗下中华书局打造先贤数字人智能体及先贤智能阅读空间", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1790658128, "break_limit_up_times": 1}, {"code": "605058", "name": "澳弘电子", "price": 59.6, "change_pct": 10.0, "reason": "公司拟3.3亿元投建高端PCB定制化生产基地，产品以高性能、高可靠性的多层铝基盲孔板、阶梯槽PCB、热电分离铜基板、microled板、高多层厚铜板、多层特种线圈板、高频雷达板等高端定制化PCB产品为主", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 15.4, "first_limit_up": 1790661771, "break_limit_up_times": 0}, {"code": "002074", "name": "国轩高科", "price": 28.68, "change_pct": 10.01, "reason": "国内动力锂电池领军企业之一", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.66, "first_limit_up": 1790645874, "break_limit_up_times": 0}, {"code": "603636", "name": "南威软件", "price": 7.87, "change_pct": 10.07, "reason": "1、公司以人工智能重构数字政府、公共安全等传统业务，推出政务专属大模型与面向C端的茶寿健康大模型；\n2、公司智算中心已落地3285万元算力租赁框架订单，并面向政企及海外文娱业务拓展算力服务", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 12.1, "first_limit_up": 1790647908, "break_limit_up_times": 1}, {"code": "301560", "name": "众捷股份", "price": 33.88, "change_pct": 20.01, "reason": "新能源汽车热管理系统精密加工零部件供应商；公司机械手拥有自主知识产权，已用于自动化产线，可与机器人控制器信号交互，切入机器人零部件赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 24.46, "first_limit_up": 1790648559, "break_limit_up_times": 0}, {"code": "601811", "name": "新华文轩", "price": 20.37, "change_pct": 9.99, "reason": "四川省出版传媒行业龙头，省内义务教育阶段学生教科书唯一供货方", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 6.38, "first_limit_up": 1790651370, "break_limit_up_times": 0}, {"code": "600032", "name": "浙江新能", "price": 8.17, "change_pct": 9.96, "reason": "1、浙能集团境内水电、风电及光电开发与投资的唯一平台；\n2、公司控股子公司浙江浙能航天氢能技术有限公司主营业务为氢能科技研发、涉氢工程设计、储氢设施销售等", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 2.35, "first_limit_up": 1790645498, "break_limit_up_times": 1}, {"code": "600657", "name": "信达地产", "price": 3.38, "change_pct": 10.1, "reason": "公司主要从事房地产开发，配有商业运营、物业服务、房地产专业服务，是中国信达的房地产开发业务运作平台", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.67, "first_limit_up": 1790645464, "break_limit_up_times": 2}, {"code": "002058", "name": "紫竹高科", "price": 18.36, "change_pct": 10.01, "reason": "1、公司核心业务聚焦于铝塑膜业务及汽车检具业务，铝塑膜是软包锂电池电芯封装的关键材料，下游主要应用于3C消费电子、动力、储能三类软包电池；\n2、公司具备《民用核安全电气设备设计许可证》和《民用核安全电气设备制造许可证》，为福清/方家山核电站供货核级压力变送器；公司有能力生产核级的仪器仪表产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 3.57, "first_limit_up": 1790645913, "break_limit_up_times": 1}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};