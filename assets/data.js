const UPDATE_TIME = "2026-08-27 13:38";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 4.47,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续279天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": 1.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续109天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 4.55,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续232天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 4.14,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续102天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "光纤概念",
    "rise": 4.09,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "工业40LOF",
    "code": "886084"
  },
  {
    "name": "液冷服务器",
    "rise": 3.15,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "粮食概念",
    "rise": 3.38,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "MLCC概念",
    "rise": 4.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新动力LOF",
    "code": "886112"
  },
  {
    "name": "黄金概念",
    "rise": 0.99,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "国家大基金持股",
    "rise": 4.63,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "英伟达概念",
    "rise": 3.95,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 3,
    "etfName": "科创创业人工智能ETF",
    "code": "886048"
  },
  {
    "name": "商业航天",
    "rise": 2.24,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续208天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "算力租赁",
    "rise": 1.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续143天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "互联网金融",
    "rise": 1.48,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "芯片概念",
    "rise": 3.1,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "AI应用",
    "rise": 0.92,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续37天上榜",
    "rankChg": -1,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "数字货币",
    "rise": 1.6,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "人形机器人",
    "rise": 1.92,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续443天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "先进封装",
    "rise": 4.29,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 2.02,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "885887"
  }
];
const THS_EVENTS = [
  {
    "title": "英伟达财报来袭，Vera Rubin开始发货！",
    "desc": "",
    "heat": 770766,
    "direction": "英伟达概念",
    "themes": [
      "英伟达概念",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "赛微电子",
        "code": "300456",
        "chg": 20.012953
      }
    ]
  },
  {
    "title": "PCB半年报\"量价齐升\"：高景气下的结构性分化",
    "desc": "",
    "heat": 606277,
    "direction": "AI PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB"
    ],
    "stocks": [
      {
        "name": "生益电子",
        "code": "688183",
        "chg": 14.316581
      }
    ]
  },
  {
    "title": "200G高速迭代开启，CPO赛道迎来行情爆发",
    "desc": "",
    "heat": 595109,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "赛微电子",
        "code": "300456",
        "chg": 20.012953
      }
    ]
  },
  {
    "title": "国家统计局：1—7月份以算力芯片、存储芯片为代表的集成电路行业利润同比增长18.5倍",
    "desc": "",
    "heat": 590745,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "大普微-UW",
        "code": "301666",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "李强：全力夺取秋粮丰收 持续提升农业综合生产能力确保粮食安全",
    "desc": "",
    "heat": 412741,
    "direction": "粮食",
    "themes": [
      "粮食概念",
      "玉米",
      "大豆",
      "转基因",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "秋乐种业",
        "code": "920087",
        "chg": 14.690722
      }
    ]
  },
  {
    "title": "上海发布战略性新兴产业发展“十五五”规划",
    "desc": "",
    "heat": 349327,
    "direction": "高端科学仪器",
    "themes": [
      "高端科学仪器"
    ],
    "stocks": [
      {
        "name": "华盛昌",
        "code": "002980",
        "chg": 10.003234
      }
    ]
  },
  {
    "title": "宁德时代枧下窝矿复产进程，突生变数",
    "desc": "",
    "heat": 150058,
    "direction": "锂矿",
    "themes": [
      "锂矿/锂盐",
      "宁德时代概念"
    ],
    "stocks": [
      {
        "name": "泛亚微透",
        "code": "688386",
        "chg": 12.613156
      }
    ]
  },
  {
    "title": "中国AI新星月之暗面谈判美国AI巨头，要分30%收入",
    "desc": "",
    "heat": 34290,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "易点天下",
        "code": "301171",
        "chg": 2.569343
      }
    ]
  },
  {
    "title": "日喀则市启动自然灾害救助一级应急响应",
    "desc": "",
    "heat": 1982,
    "direction": "基建工程",
    "themes": [
      "基建工程"
    ],
    "stocks": [
      {
        "name": "节能铁汉",
        "code": "300197",
        "chg": 1.99005
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "芯粒Chiplet",
    "change": "+6.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+5.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+5.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+5.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+5.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+5.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+5.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+5.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+5.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+5.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+4.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+4.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+4.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+4.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+4.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+4.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+4.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+4.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+4.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+4.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 5,
    "hot_rank_chg": 3,
    "stock_cnt": 5822,
    "price": "10.78",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "6918423100.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "6",
    "change_reason": "粮油食品",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.09
      },
      {
        "name": "农业种植",
        "change_pct": 4.54
      },
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.55
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.81
      },
      {
        "name": "休闲食品",
        "change_pct": 0.52
      },
      {
        "name": "食品",
        "change_pct": 0.93
      },
      {
        "name": "食品安全",
        "change_pct": 1.68
      },
      {
        "name": "社区团购",
        "change_pct": 1.65
      },
      {
        "name": "大农业",
        "change_pct": 1.66
      },
      {
        "name": "预制菜",
        "change_pct": 1.03
      },
      {
        "name": "人造肉",
        "change_pct": 2.86
      },
      {
        "name": "国企改革",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 6,
    "hot_rank_chg": 7,
    "stock_cnt": 5822,
    "price": "8.75",
    "change": "6.97",
    "market_id": "17",
    "circulate_market_value": "22036961000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.57
      },
      {
        "name": "工业大麻",
        "change_pct": 1.43
      },
      {
        "name": "中药",
        "change_pct": 1.15
      },
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "保健品",
        "change_pct": 0.73
      },
      {
        "name": "民营医院",
        "change_pct": 0.68
      },
      {
        "name": "医药",
        "change_pct": 1.06
      },
      {
        "name": "化学原料药",
        "change_pct": 0.99
      },
      {
        "name": "流感",
        "change_pct": 1.43
      },
      {
        "name": "振兴东北",
        "change_pct": 0.35
      },
      {
        "name": "食品",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 8,
    "hot_rank_chg": 2,
    "stock_cnt": 5822,
    "price": "11.61",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "5564904900.00",
    "change_type": "1",
    "change_section": "11",
    "change_days": "7",
    "change_reason": "抗肿瘤",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.15
      },
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "医药商业",
        "change_pct": 0.24
      },
      {
        "name": "医药",
        "change_pct": 1.06
      },
      {
        "name": "流感",
        "change_pct": 1.43
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 17,
    "hot_rank_chg": -6,
    "stock_cnt": 5822,
    "price": "5.69",
    "change": "0.53",
    "market_id": "33",
    "circulate_market_value": "15093013000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.31
      },
      {
        "name": "装修装饰",
        "change_pct": 0.32
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.01
      },
      {
        "name": "航天",
        "change_pct": 2.43
      },
      {
        "name": "旧改",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 21,
    "hot_rank_chg": -6,
    "stock_cnt": 5822,
    "price": "11.60",
    "change": "2.47",
    "market_id": "33",
    "circulate_market_value": "26940718000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 2.89
      },
      {
        "name": "有色 · 铜",
        "change_pct": 1.55
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.87
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.55
      },
      {
        "name": "有色 · 锌",
        "change_pct": 0.88
      },
      {
        "name": "有色金属",
        "change_pct": 1.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.59
      },
      {
        "name": "白银",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 22,
    "hot_rank_chg": 6,
    "stock_cnt": 5822,
    "price": "3.82",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "8451097000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "光模块",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.25
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.31
      },
      {
        "name": "光通信",
        "change_pct": 4.92
      },
      {
        "name": "林业",
        "change_pct": 2.38
      },
      {
        "name": "军民融合",
        "change_pct": 1.81
      },
      {
        "name": "军工",
        "change_pct": 1.75
      },
      {
        "name": "人造肉",
        "change_pct": 2.86
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 24,
    "hot_rank_chg": -8,
    "stock_cnt": 5822,
    "price": "10.41",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4588956500.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "6",
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 1.6
      },
      {
        "name": "锂电池",
        "change_pct": 1.3
      },
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.17
      },
      {
        "name": "两轮车",
        "change_pct": 0.69
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.71
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 25,
    "hot_rank_chg": 35,
    "stock_cnt": 5822,
    "price": "4.42",
    "change": "6.76",
    "market_id": "33",
    "circulate_market_value": "9293829300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.15
      },
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "维生素",
        "change_pct": 1.12
      },
      {
        "name": "基因测序",
        "change_pct": 0.31
      },
      {
        "name": "民营医院",
        "change_pct": 0.68
      },
      {
        "name": "医药",
        "change_pct": 1.06
      },
      {
        "name": "化学原料药",
        "change_pct": 0.99
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 32,
    "hot_rank_chg": 6,
    "stock_cnt": 5822,
    "price": "5.94",
    "change": "3.85",
    "market_id": "33",
    "circulate_market_value": "210080780000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.88
      },
      {
        "name": "手机产业链",
        "change_pct": 3.05
      },
      {
        "name": "超高清视频",
        "change_pct": 1.76
      },
      {
        "name": "苹果产业链",
        "change_pct": 3.01
      },
      {
        "name": "电竞",
        "change_pct": 0.17
      },
      {
        "name": "半导体",
        "change_pct": 4.42
      },
      {
        "name": "人工智能",
        "change_pct": 1.18
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.56
      },
      {
        "name": "VR&AR",
        "change_pct": 2.21
      },
      {
        "name": "OLED",
        "change_pct": 2.95
      },
      {
        "name": "京津冀",
        "change_pct": 0.59
      },
      {
        "name": "物联网",
        "change_pct": 1.36
      },
      {
        "name": "指纹识别",
        "change_pct": 2.56
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.88
      },
      {
        "name": "白马股",
        "change_pct": 0.4
      },
      {
        "name": "智能制造",
        "change_pct": 1.62
      },
      {
        "name": "小米概念股",
        "change_pct": 2.87
      },
      {
        "name": "国产芯片",
        "change_pct": 3.92
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.67
      },
      {
        "name": "全息概念",
        "change_pct": 0.84
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.47
      },
      {
        "name": "MicroLED",
        "change_pct": 3.45
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.64
      },
      {
        "name": "智能手表",
        "change_pct": 2.25
      },
      {
        "name": "MiniLED",
        "change_pct": 2.79
      },
      {
        "name": "传感器",
        "change_pct": 2.87
      },
      {
        "name": "大硅片",
        "change_pct": 4.38
      },
      {
        "name": "AI PC",
        "change_pct": 2.57
      },
      {
        "name": "华为产业链",
        "change_pct": 1.96
      },
      {
        "name": "回购",
        "change_pct": 0.86
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 5.15
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.86
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 3.91
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 40,
    "hot_rank_chg": 7,
    "stock_cnt": 5822,
    "price": "4.91",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "5579724000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "液冷",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 1.91
      },
      {
        "name": "锂电池",
        "change_pct": 1.3
      },
      {
        "name": "石墨烯",
        "change_pct": 1.6
      },
      {
        "name": "新能源整车",
        "change_pct": 0.62
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.31
      },
      {
        "name": "汽车整车",
        "change_pct": 0.19
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.17
      },
      {
        "name": "白色家电",
        "change_pct": 0.9
      },
      {
        "name": "家电",
        "change_pct": 0.81
      },
      {
        "name": "汽车热管理",
        "change_pct": 1.64
      },
      {
        "name": "热泵",
        "change_pct": 2.83
      },
      {
        "name": "轮边电机",
        "change_pct": 0.32
      },
      {
        "name": "超级电容",
        "change_pct": 1.62
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.55
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 48,
    "hot_rank_chg": -19,
    "stock_cnt": 5822,
    "price": "11.60",
    "change": "-0.52",
    "market_id": "17",
    "circulate_market_value": "20128099000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.54
      },
      {
        "name": "核电",
        "change_pct": 1.25
      },
      {
        "name": "锂电池",
        "change_pct": 1.3
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 5.64
      },
      {
        "name": "PCB板",
        "change_pct": 4.89
      },
      {
        "name": "中科院系",
        "change_pct": 1.03
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.17
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.81
      },
      {
        "name": "固态电池",
        "change_pct": 1.17
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 3.66
      }
    ]
  },
  {
    "code": "600095",
    "name": "湘财股份",
    "hot_rank": 55,
    "hot_rank_chg": 48,
    "stock_cnt": 5822,
    "price": "9.54",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "27276651000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 1.92
      },
      {
        "name": "券商",
        "change_pct": 1.66
      },
      {
        "name": "金融科技",
        "change_pct": 1.79
      },
      {
        "name": "大金融",
        "change_pct": 0.12
      },
      {
        "name": "人造肉",
        "change_pct": 2.86
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 63,
    "hot_rank_chg": 130,
    "stock_cnt": 5822,
    "price": "6.63",
    "change": "9.05",
    "market_id": "33",
    "circulate_market_value": "5875840300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.54
      },
      {
        "name": "土地流转",
        "change_pct": 2.23
      },
      {
        "name": "海南概念",
        "change_pct": 0.97
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.16
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.73
      },
      {
        "name": "大农业",
        "change_pct": 1.66
      },
      {
        "name": "水产养殖",
        "change_pct": 1.98
      },
      {
        "name": "自贸区",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 69,
    "hot_rank_chg": 7,
    "stock_cnt": 5822,
    "price": "11.69",
    "change": "3.00",
    "market_id": "17",
    "circulate_market_value": "20915027000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.85
      },
      {
        "name": "纯碱",
        "change_pct": 0.44
      },
      {
        "name": "食品",
        "change_pct": 0.93
      },
      {
        "name": "土壤修复",
        "change_pct": 0.51
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.85
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.87
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.53
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 72,
    "hot_rank_chg": 118,
    "stock_cnt": 5822,
    "price": "4.87",
    "change": "9.93",
    "market_id": "17",
    "circulate_market_value": "15917294000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报减亏",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.3
      },
      {
        "name": "养老产业",
        "change_pct": 0.29
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.71
      },
      {
        "name": "民营医院",
        "change_pct": 0.68
      },
      {
        "name": "地摊经济",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 73,
    "hot_rank_chg": -15,
    "stock_cnt": 5822,
    "price": "7.62",
    "change": "-1.04",
    "market_id": "17",
    "circulate_market_value": "8677330600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.61
      },
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "光伏",
        "change_pct": 0.86
      },
      {
        "name": "特高压",
        "change_pct": 0.69
      },
      {
        "name": "智能电网",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 83,
    "hot_rank_chg": -5,
    "stock_cnt": 5822,
    "price": "10.73",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "9611227200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "证券业务",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.17
      },
      {
        "name": "期货概念",
        "change_pct": 3.65
      },
      {
        "name": "券商",
        "change_pct": 1.66
      },
      {
        "name": "大金融",
        "change_pct": 0.12
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "000931",
    "name": "中关村",
    "hot_rank": 89,
    "hot_rank_chg": 6,
    "stock_cnt": 5822,
    "price": "5.70",
    "change": "4.97",
    "market_id": "33",
    "circulate_market_value": "4280868300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.15
      },
      {
        "name": "创新药",
        "change_pct": 0.97
      },
      {
        "name": "养老产业",
        "change_pct": 0.29
      },
      {
        "name": "医药",
        "change_pct": 1.06
      },
      {
        "name": "化学原料药",
        "change_pct": 0.99
      },
      {
        "name": "口腔",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 91,
    "hot_rank_chg": 172,
    "stock_cnt": 5822,
    "price": "7.23",
    "change": "6.32",
    "market_id": "17",
    "circulate_market_value": "7824296300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.7
      },
      {
        "name": "农业种植",
        "change_pct": 4.54
      },
      {
        "name": "化肥",
        "change_pct": 1.7
      },
      {
        "name": "转基因",
        "change_pct": 4.21
      },
      {
        "name": "土地流转",
        "change_pct": 2.23
      },
      {
        "name": "农垦",
        "change_pct": 2.98
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.81
      },
      {
        "name": "大农业",
        "change_pct": 1.66
      },
      {
        "name": "国企改革",
        "change_pct": 0.59
      },
      {
        "name": "大豆",
        "change_pct": 2.48
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 94,
    "hot_rank_chg": 0,
    "stock_cnt": 5822,
    "price": "10.49",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "3069143200.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "5",
    "change_reason": "转基因玉米",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.54
      },
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "转基因",
        "change_pct": 4.21
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.81
      },
      {
        "name": "大农业",
        "change_pct": 1.66
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 95,
    "hot_rank_chg": 25,
    "stock_cnt": 5822,
    "price": "10.45",
    "change": "5.56",
    "market_id": "33",
    "circulate_market_value": "2972832800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 1.55
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.92
      },
      {
        "name": "强势人气股",
        "change_pct": 3.32
      },
      {
        "name": "教育",
        "change_pct": 0.07
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.85
      },
      {
        "name": "职业教育",
        "change_pct": 0.37
      },
      {
        "name": "在线教育",
        "change_pct": 1.19
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.95
      },
      {
        "name": "华为产业链",
        "change_pct": 1.96
      },
      {
        "name": "智谱AI",
        "change_pct": 0.94
      }
    ]
  },
  {
    "code": "600479",
    "name": "千金药业",
    "hot_rank": 97,
    "hot_rank_chg": 9,
    "stock_cnt": 5822,
    "price": "12.12",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "5072306300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "业绩增长",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": 0.98
      },
      {
        "name": "中药",
        "change_pct": 1.15
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.31
      },
      {
        "name": "农业种植",
        "change_pct": 4.54
      },
      {
        "name": "人工智能",
        "change_pct": 1.18
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.55
      },
      {
        "name": "医药",
        "change_pct": 1.06
      },
      {
        "name": "流感",
        "change_pct": 1.43
      },
      {
        "name": "大农业",
        "change_pct": 1.66
      },
      {
        "name": "国企改革",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "002094",
    "name": "青岛金王",
    "hot_rank": 100,
    "hot_rank_chg": -15,
    "stock_cnt": 5822,
    "price": "5.66",
    "change": "0.18",
    "market_id": "33",
    "circulate_market_value": "3907967100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.57
      },
      {
        "name": "债转股 · AMC",
        "change_pct": 0.23
      },
      {
        "name": "新零售",
        "change_pct": 0.53
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 0.76
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.19
      },
      {
        "name": "医美",
        "change_pct": 0.31
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.49
      },
      {
        "name": "C2M",
        "change_pct": 0.37
      },
      {
        "name": "化妆品",
        "change_pct": 0.31
      },
      {
        "name": "自贸区",
        "change_pct": 0.27
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600487", "name": "亨通光电", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5822, "price": "71.30", "change": "9.98", "market_id": "17", "circulate_market_value": "174944980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5822, "price": "23.64", "change": "5.16", "market_id": "33", "circulate_market_value": "27811722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 3, "hot_rank_chg": 6, "stock_cnt": 5822, "price": "16.68", "change": "10.03", "market_id": "17", "circulate_market_value": "6414254600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CRO"}, {"code": "603618", "name": "杭电股份", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5822, "price": "35.11", "change": "9.99", "market_id": "17", "circulate_market_value": "24274198000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报高增"}, {"code": "600127", "name": "金健米业", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5822, "price": "10.78", "change": "10.00", "market_id": "17", "circulate_market_value": "6918423100.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "粮油食品", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.09}, {"name": "农业种植", "change_pct": 4.54}, {"name": "强势人气股", "change_pct": 3.32}, {"name": "湖南国企改革", "change_pct": 1.55}, {"name": "乡村振兴", "change_pct": 1.81}, {"name": "休闲食品", "change_pct": 0.52}, {"name": "食品", "change_pct": 0.93}, {"name": "食品安全", "change_pct": 1.68}, {"name": "社区团购", "change_pct": 1.65}, {"name": "大农业", "change_pct": 1.66}, {"name": "预制菜", "change_pct": 1.03}, {"name": "人造肉", "change_pct": 2.86}, {"name": "国企改革", "change_pct": 0.59}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 6, "hot_rank_chg": 7, "stock_cnt": 5822, "price": "8.75", "change": "6.97", "market_id": "17", "circulate_market_value": "22036961000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.57}, {"name": "工业大麻", "change_pct": 1.43}, {"name": "中药", "change_pct": 1.15}, {"name": "强势人气股", "change_pct": 3.32}, {"name": "保健品", "change_pct": 0.73}, {"name": "民营医院", "change_pct": 0.68}, {"name": "医药", "change_pct": 1.06}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "流感", "change_pct": 1.43}, {"name": "振兴东北", "change_pct": 0.35}, {"name": "食品", "change_pct": 0.93}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5822, "price": "18.73", "change": "9.98", "market_id": "33", "circulate_market_value": "8556805300.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "数字人民币"}, {"code": "600613", "name": "神奇制药", "hot_rank": 8, "hot_rank_chg": 2, "stock_cnt": 5822, "price": "11.61", "change": "10.05", "market_id": "17", "circulate_market_value": "5564904900.00", "change_type": "1", "change_section": "11", "change_days": "7", "change_reason": "抗肿瘤", "xgb_concepts": [{"name": "中药", "change_pct": 1.15}, {"name": "强势人气股", "change_pct": 3.32}, {"name": "医药商业", "change_pct": 0.24}, {"name": "医药", "change_pct": 1.06}, {"name": "流感", "change_pct": 1.43}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 9, "hot_rank_chg": 24, "stock_cnt": 5822, "price": "426.82", "change": "10.00", "market_id": "17", "circulate_market_value": "173433320000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光纤光缆"}, {"code": "688836", "name": "宇树科技", "hot_rank": 10, "hot_rank_chg": -9, "stock_cnt": 5822, "price": "615.03", "change": "3.97", "market_id": "17", "circulate_market_value": "18504850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 11, "hot_rank_chg": -6, "stock_cnt": 5822, "price": "14.02", "change": "7.11", "market_id": "33", "circulate_market_value": "6979786900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 12, "hot_rank_chg": 37, "stock_cnt": 5822, "price": "36.08", "change": "7.99", "market_id": "17", "circulate_market_value": "123139223000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 13, "hot_rank_chg": 30, "stock_cnt": 5822, "price": "53.65", "change": "6.60", "market_id": "17", "circulate_market_value": "45417586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 15, "hot_rank_chg": 5, "stock_cnt": 5822, "price": "65.97", "change": "6.28", "market_id": "33", "circulate_market_value": "74759849000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 16, "hot_rank_chg": -2, "stock_cnt": 5822, "price": "17.95", "change": "3.64", "market_id": "17", "circulate_market_value": "39837382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 17, "hot_rank_chg": -6, "stock_cnt": 5822, "price": "5.69", "change": "0.53", "market_id": "33", "circulate_market_value": "15093013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.32}, {"name": "云计算数据中心", "change_pct": 2.31}, {"name": "装修装饰", "change_pct": 0.32}, {"name": "装配式建筑", "change_pct": -0.01}, {"name": "航天", "change_pct": 2.43}, {"name": "旧改", "change_pct": 0.17}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 18, "hot_rank_chg": 218, "stock_cnt": 5822, "price": "98.84", "change": "-12.24", "market_id": "33", "circulate_market_value": "156911140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 19, "hot_rank_chg": 63, "stock_cnt": 5822, "price": "429.76", "change": "10.00", "market_id": "33", "circulate_market_value": "70922886000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储方案"}, {"code": "002716", "name": "湖南白银", "hot_rank": 21, "hot_rank_chg": -6, "stock_cnt": 5822, "price": "11.60", "change": "2.47", "market_id": "33", "circulate_market_value": "26940718000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 2.89}, {"name": "有色 · 铜", "change_pct": 1.55}, {"name": "有色 · 锑", "change_pct": 2.87}, {"name": "湖南国企改革", "change_pct": 1.55}, {"name": "有色 · 锌", "change_pct": 0.88}, {"name": "有色金属", "change_pct": 1.48}, {"name": "国企改革", "change_pct": 0.59}, {"name": "白银", "change_pct": 1.24}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 22, "hot_rank_chg": 6, "stock_cnt": 5822, "price": "3.82", "change": "10.09", "market_id": "17", "circulate_market_value": "8451097000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光模块", "xgb_concepts": [{"name": "造纸", "change_pct": 0.25}, {"name": "云计算数据中心", "change_pct": 2.31}, {"name": "光通信", "change_pct": 4.92}, {"name": "林业", "change_pct": 2.38}, {"name": "军民融合", "change_pct": 1.81}, {"name": "军工", "change_pct": 1.75}, {"name": "人造肉", "change_pct": 2.86}]}, {"code": "600667", "name": "太极实业", "hot_rank": 23, "hot_rank_chg": 8, "stock_cnt": 5822, "price": "20.14", "change": "2.60", "market_id": "17", "circulate_market_value": "42123659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 24, "hot_rank_chg": -8, "stock_cnt": 5822, "price": "10.41", "change": "10.04", "market_id": "33", "circulate_market_value": "4588956500.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.6}, {"name": "锂电池", "change_pct": 1.3}, {"name": "强势人气股", "change_pct": 3.32}, {"name": "新能源汽车", "change_pct": 1.17}, {"name": "两轮车", "change_pct": 0.69}, {"name": "珠宝饰品", "change_pct": 0.71}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 25, "hot_rank_chg": 35, "stock_cnt": 5822, "price": "4.42", "change": "6.76", "market_id": "33", "circulate_market_value": "9293829300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.15}, {"name": "强势人气股", "change_pct": 3.32}, {"name": "维生素", "change_pct": 1.12}, {"name": "基因测序", "change_pct": 0.31}, {"name": "民营医院", "change_pct": 0.68}, {"name": "医药", "change_pct": 1.06}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "PD-1抑制剂", "change_pct": 1.03}]}, {"code": "001258", "name": "立新能源", "hot_rank": 26, "hot_rank_chg": -9, "stock_cnt": 5822, "price": "13.76", "change": "1.77", "market_id": "33", "circulate_market_value": "12842505300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 27, "hot_rank_chg": 29, "stock_cnt": 5822, "price": "63.86", "change": "5.43", "market_id": "17", "circulate_market_value": "1267243730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 28, "hot_rank_chg": -4, "stock_cnt": 5822, "price": "59.12", "change": "5.38", "market_id": "17", "circulate_market_value": "266219660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 29, "hot_rank_chg": -7, "stock_cnt": 5822, "price": "21.70", "change": "2.84", "market_id": "17", "circulate_market_value": "3472000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 30, "hot_rank_chg": 23, "stock_cnt": 5822, "price": "41.00", "change": "4.75", "market_id": "17", "circulate_market_value": "59941787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 31, "hot_rank_chg": 10, "stock_cnt": 5822, "price": "411.20", "change": "4.76", "market_id": "17", "circulate_market_value": "275799380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 32, "hot_rank_chg": 6, "stock_cnt": 5822, "price": "5.94", "change": "3.85", "market_id": "33", "circulate_market_value": "210080780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.88}, {"name": "手机产业链", "change_pct": 3.05}, {"name": "超高清视频", "change_pct": 1.76}, {"name": "苹果产业链", "change_pct": 3.01}, {"name": "电竞", "change_pct": 0.17}, {"name": "半导体", "change_pct": 4.42}, {"name": "人工智能", "change_pct": 1.18}, {"name": "互联网医疗", "change_pct": 0.56}, {"name": "VR&AR", "change_pct": 2.21}, {"name": "OLED", "change_pct": 2.95}, {"name": "京津冀", "change_pct": 0.59}, {"name": "物联网", "change_pct": 1.36}, {"name": "指纹识别", "change_pct": 2.56}, {"name": "汽车零部件", "change_pct": 0.88}, {"name": "白马股", "change_pct": 0.4}, {"name": "智能制造", "change_pct": 1.62}, {"name": "小米概念股", "change_pct": 2.87}, {"name": "国产芯片", "change_pct": 3.92}, {"name": "液晶面板/LCD", "change_pct": 2.67}, {"name": "全息概念", "change_pct": 0.84}, {"name": "理想汽车概念股", "change_pct": 1.47}, {"name": "MicroLED", "change_pct": 3.45}, {"name": "钙钛矿电池", "change_pct": 0.64}, {"name": "智能手表", "change_pct": 2.25}, {"name": "MiniLED", "change_pct": 2.79}, {"name": "传感器", "change_pct": 2.87}, {"name": "大硅片", "change_pct": 4.38}, {"name": "AI PC", "change_pct": 2.57}, {"name": "华为产业链", "change_pct": 1.96}, {"name": "回购", "change_pct": 0.86}, {"name": "光电共封装CPO", "change_pct": 5.15}, {"name": "智能眼镜/MR头显", "change_pct": 2.86}, {"name": "玻璃基板封装", "change_pct": 3.91}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 33, "hot_rank_chg": 6, "stock_cnt": 5822, "price": "14.61", "change": "5.11", "market_id": "17", "circulate_market_value": "18747532000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 34, "hot_rank_chg": 23, "stock_cnt": 5822, "price": "101.36", "change": "8.44", "market_id": "33", "circulate_market_value": "66191691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 35, "hot_rank_chg": 16, "stock_cnt": 5822, "price": "42.64", "change": "7.95", "market_id": "17", "circulate_market_value": "169348470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 36, "hot_rank_chg": 27, "stock_cnt": 5822, "price": "140.97", "change": "8.43", "market_id": "17", "circulate_market_value": "339984240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 37, "hot_rank_chg": 7, "stock_cnt": 5822, "price": "54.11", "change": "6.08", "market_id": "33", "circulate_market_value": "62090682000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 38, "hot_rank_chg": 48, "stock_cnt": 5822, "price": "22.08", "change": "9.25", "market_id": "33", "circulate_market_value": "20505850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 39, "hot_rank_chg": -14, "stock_cnt": 5822, "price": "866.12", "change": "1.79", "market_id": "33", "circulate_market_value": "961339740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002418", "name": "康盛股份", "hot_rank": 40, "hot_rank_chg": 7, "stock_cnt": 5822, "price": "4.91", "change": "10.09", "market_id": "33", "circulate_market_value": "5579724000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "液冷", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 1.91}, {"name": "锂电池", "change_pct": 1.3}, {"name": "石墨烯", "change_pct": 1.6}, {"name": "新能源整车", "change_pct": 0.62}, {"name": "云计算数据中心", "change_pct": 2.31}, {"name": "汽车整车", "change_pct": 0.19}, {"name": "新能源汽车", "change_pct": 1.17}, {"name": "白色家电", "change_pct": 0.9}, {"name": "家电", "change_pct": 0.81}, {"name": "汽车热管理", "change_pct": 1.64}, {"name": "热泵", "change_pct": 2.83}, {"name": "轮边电机", "change_pct": 0.32}, {"name": "超级电容", "change_pct": 1.62}, {"name": "液冷服务器", "change_pct": 3.55}]}, {"code": "600498", "name": "烽火通信", "hot_rank": 41, "hot_rank_chg": 51, "stock_cnt": 5822, "price": "42.71", "change": "7.93", "market_id": "17", "circulate_market_value": "54310952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 42, "hot_rank_chg": -24, "stock_cnt": 5822, "price": "14.71", "change": "-1.74", "market_id": "17", "circulate_market_value": "21663517000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 43, "hot_rank_chg": -7, "stock_cnt": 5822, "price": "200.60", "change": "3.21", "market_id": "33", "circulate_market_value": "278096140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 44, "hot_rank_chg": -9, "stock_cnt": 5822, "price": "34.88", "change": "5.47", "market_id": "17", "circulate_market_value": "58042826000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 45, "hot_rank_chg": 0, "stock_cnt": 5822, "price": "76.54", "change": "3.97", "market_id": "17", "circulate_market_value": "136961790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 46, "hot_rank_chg": 64, "stock_cnt": 5822, "price": "267.16", "change": "5.36", "market_id": "33", "circulate_market_value": "290773750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 47, "hot_rank_chg": 12, "stock_cnt": 5822, "price": "125.22", "change": "6.51", "market_id": "17", "circulate_market_value": "45169784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 48, "hot_rank_chg": -19, "stock_cnt": 5822, "price": "11.60", "change": "-0.52", "market_id": "17", "circulate_market_value": "20128099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.54}, {"name": "核电", "change_pct": 1.25}, {"name": "锂电池", "change_pct": 1.3}, {"name": "铜箔/覆铜板", "change_pct": 5.64}, {"name": "PCB板", "change_pct": 4.89}, {"name": "中科院系", "change_pct": 1.03}, {"name": "新能源汽车", "change_pct": 1.17}, {"name": "宁德时代概念股", "change_pct": 0.81}, {"name": "固态电池", "change_pct": 1.17}, {"name": "PET复合铜箔", "change_pct": 3.66}]}, {"code": "600397", "name": "江钨装备", "hot_rank": 49, "hot_rank_chg": 118, "stock_cnt": 5822, "price": "19.03", "change": "10.00", "market_id": "17", "circulate_market_value": "18838937000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "钨钽铌资产注入"}, {"code": "002636", "name": "金安国纪", "hot_rank": 50, "hot_rank_chg": 43, "stock_cnt": 5822, "price": "69.41", "change": "10.00", "market_id": "33", "circulate_market_value": "50338555000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "002407", "name": "多氟多", "hot_rank": 51, "hot_rank_chg": -1, "stock_cnt": 5822, "price": "35.12", "change": "3.14", "market_id": "33", "circulate_market_value": "37961851000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 52, "hot_rank_chg": 69, "stock_cnt": 5822, "price": "80.52", "change": "10.00", "market_id": "17", "circulate_market_value": "10521806100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控制权拟变更"}, {"code": "002015", "name": "协鑫能科", "hot_rank": 53, "hot_rank_chg": -41, "stock_cnt": 5822, "price": "16.72", "change": "-2.45", "market_id": "33", "circulate_market_value": "27141988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 54, "hot_rank_chg": -24, "stock_cnt": 5822, "price": "31.52", "change": "0.38", "market_id": "17", "circulate_market_value": "12639520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600095", "name": "湘财股份", "hot_rank": 55, "hot_rank_chg": 48, "stock_cnt": 5822, "price": "9.54", "change": "10.04", "market_id": "17", "circulate_market_value": "27276651000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长", "xgb_concepts": [{"name": "资产重组", "change_pct": 1.92}, {"name": "券商", "change_pct": 1.66}, {"name": "金融科技", "change_pct": 1.79}, {"name": "大金融", "change_pct": 0.12}, {"name": "人造肉", "change_pct": 2.86}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 56, "hot_rank_chg": -29, "stock_cnt": 5822, "price": "13.88", "change": "-1.84", "market_id": "17", "circulate_market_value": "9442837100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 57, "hot_rank_chg": -23, "stock_cnt": 5822, "price": "18.22", "change": "1.90", "market_id": "17", "circulate_market_value": "14344176000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 58, "hot_rank_chg": 33, "stock_cnt": 5822, "price": "67.54", "change": "7.19", "market_id": "33", "circulate_market_value": "98166149000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300456", "name": "赛微电子", "hot_rank": 59, "hot_rank_chg": 675, "stock_cnt": 5822, "price": "37.06", "change": "20.01", "market_id": "33", "circulate_market_value": "22145676000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "净利扭亏"}, {"code": "000938", "name": "紫光股份", "hot_rank": 60, "hot_rank_chg": 6, "stock_cnt": 5822, "price": "36.43", "change": "4.38", "market_id": "33", "circulate_market_value": "104192448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 61, "hot_rank_chg": 13, "stock_cnt": 5822, "price": "17.18", "change": "3.12", "market_id": "33", "circulate_market_value": "57141136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 62, "hot_rank_chg": 9, "stock_cnt": 5822, "price": "56.00", "change": "7.90", "market_id": "33", "circulate_market_value": "20636184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 63, "hot_rank_chg": 130, "stock_cnt": 5822, "price": "6.63", "change": "9.05", "market_id": "33", "circulate_market_value": "5875840300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.54}, {"name": "土地流转", "change_pct": 2.23}, {"name": "海南概念", "change_pct": 0.97}, {"name": "自由贸易港", "change_pct": 0.16}, {"name": "海南自由贸易港", "change_pct": 0.73}, {"name": "大农业", "change_pct": 1.66}, {"name": "水产养殖", "change_pct": 1.98}, {"name": "自贸区", "change_pct": 0.27}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 64, "hot_rank_chg": 164, "stock_cnt": 5822, "price": "48.46", "change": "10.01", "market_id": "17", "circulate_market_value": "51976517000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "600362", "name": "江西铜业", "hot_rank": 65, "hot_rank_chg": -44, "stock_cnt": 5822, "price": "49.20", "change": "1.30", "market_id": "17", "circulate_market_value": "102102172000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 66, "hot_rank_chg": -40, "stock_cnt": 5822, "price": "198.21", "change": "3.86", "market_id": "17", "circulate_market_value": "54624371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 67, "hot_rank_chg": 2, "stock_cnt": 5822, "price": "63.73", "change": "4.05", "market_id": "33", "circulate_market_value": "96707230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002155", "name": "湖南黄金", "hot_rank": 68, "hot_rank_chg": 230, "stock_cnt": 5822, "price": "27.02", "change": "10.02", "market_id": "33", "circulate_market_value": "42218721000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "重大重组"}, {"code": "600186", "name": "莲花控股", "hot_rank": 69, "hot_rank_chg": 7, "stock_cnt": 5822, "price": "11.69", "change": "3.00", "market_id": "17", "circulate_market_value": "20915027000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.85}, {"name": "纯碱", "change_pct": 0.44}, {"name": "食品", "change_pct": 0.93}, {"name": "土壤修复", "change_pct": 0.51}, {"name": "东数西算/算力", "change_pct": 1.85}, {"name": "OpenClaw概念", "change_pct": 1.87}, {"name": "DeepSeek概念股", "change_pct": 1.53}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 70, "hot_rank_chg": -30, "stock_cnt": 5822, "price": "21.72", "change": "0.42", "market_id": "33", "circulate_market_value": "9824798700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 71, "hot_rank_chg": -52, "stock_cnt": 5822, "price": "57.18", "change": "0.12", "market_id": "33", "circulate_market_value": "418847950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 72, "hot_rank_chg": 118, "stock_cnt": 5822, "price": "4.87", "change": "9.93", "market_id": "17", "circulate_market_value": "15917294000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报减亏", "xgb_concepts": [{"name": "房地产", "change_pct": 0.3}, {"name": "养老产业", "change_pct": 0.29}, {"name": "粤港澳大湾区", "change_pct": 0.71}, {"name": "民营医院", "change_pct": 0.68}, {"name": "地摊经济", "change_pct": 1.01}]}, {"code": "601700", "name": "风范股份", "hot_rank": 73, "hot_rank_chg": -15, "stock_cnt": 5822, "price": "7.62", "change": "-1.04", "market_id": "17", "circulate_market_value": "8677330600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.61}, {"name": "强势人气股", "change_pct": 3.32}, {"name": "光伏", "change_pct": 0.86}, {"name": "特高压", "change_pct": 0.69}, {"name": "智能电网", "change_pct": 0.54}]}, {"code": "603823", "name": "百合花", "hot_rank": 74, "hot_rank_chg": 3, "stock_cnt": 5822, "price": "68.01", "change": "2.95", "market_id": "17", "circulate_market_value": "28317168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 75, "hot_rank_chg": -43, "stock_cnt": 5822, "price": "34.57", "change": "0.29", "market_id": "17", "circulate_market_value": "712203990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 76, "hot_rank_chg": -9, "stock_cnt": 5822, "price": "409.10", "change": "2.59", "market_id": "33", "circulate_market_value": "513110880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301666", "name": "大普微", "hot_rank": 77, "hot_rank_chg": 285, "stock_cnt": 5822, "price": "469.20", "change": "20.00", "market_id": "33", "circulate_market_value": "12441468100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "大额订单"}, {"code": "000070", "name": "特发信息", "hot_rank": 78, "hot_rank_chg": 57, "stock_cnt": 5822, "price": "16.50", "change": "3.90", "market_id": "33", "circulate_market_value": "14135831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 79, "hot_rank_chg": 106, "stock_cnt": 5822, "price": "221.22", "change": "10.06", "market_id": "17", "circulate_market_value": "253244810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 80, "hot_rank_chg": 82, "stock_cnt": 5822, "price": "27.10", "change": "3.59", "market_id": "17", "circulate_market_value": "9130530700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 81, "hot_rank_chg": -29, "stock_cnt": 5822, "price": "122.02", "change": "2.35", "market_id": "33", "circulate_market_value": "234626370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 82, "hot_rank_chg": -40, "stock_cnt": 5822, "price": "40.50", "change": "3.40", "market_id": "17", "circulate_market_value": "13039913900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000712", "name": "锦龙股份", "hot_rank": 83, "hot_rank_chg": -5, "stock_cnt": 5822, "price": "10.73", "change": "10.05", "market_id": "33", "circulate_market_value": "9611227200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "证券业务", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.17}, {"name": "期货概念", "change_pct": 3.65}, {"name": "券商", "change_pct": 1.66}, {"name": "大金融", "change_pct": 0.12}, {"name": "东数西算/算力", "change_pct": 1.85}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 84, "hot_rank_chg": 48, "stock_cnt": 5822, "price": "78.27", "change": "6.07", "market_id": "33", "circulate_market_value": "114808925000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 85, "hot_rank_chg": 16, "stock_cnt": 5822, "price": "28.65", "change": "9.35", "market_id": "17", "circulate_market_value": "6941035500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 86, "hot_rank_chg": -32, "stock_cnt": 5822, "price": "37.98", "change": "2.21", "market_id": "33", "circulate_market_value": "25321887000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 87, "hot_rank_chg": -50, "stock_cnt": 5822, "price": "16.93", "change": "-3.04", "market_id": "33", "circulate_market_value": "9921793900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 88, "hot_rank_chg": -65, "stock_cnt": 5822, "price": "19.51", "change": "-0.41", "market_id": "17", "circulate_market_value": "340661030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000931", "name": "中关村", "hot_rank": 89, "hot_rank_chg": 6, "stock_cnt": 5822, "price": "5.70", "change": "4.97", "market_id": "33", "circulate_market_value": "4280868300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.15}, {"name": "创新药", "change_pct": 0.97}, {"name": "养老产业", "change_pct": 0.29}, {"name": "医药", "change_pct": 1.06}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "口腔", "change_pct": 0.77}]}, {"code": "603002", "name": "宏昌电子", "hot_rank": 90, "hot_rank_chg": 318, "stock_cnt": 5822, "price": "16.91", "change": "10.02", "market_id": "17", "circulate_market_value": "19177268000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高速覆铜板"}, {"code": "600313", "name": "农发种业", "hot_rank": 91, "hot_rank_chg": 172, "stock_cnt": 5822, "price": "7.23", "change": "6.32", "market_id": "17", "circulate_market_value": "7824296300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.7}, {"name": "农业种植", "change_pct": 4.54}, {"name": "化肥", "change_pct": 1.7}, {"name": "转基因", "change_pct": 4.21}, {"name": "土地流转", "change_pct": 2.23}, {"name": "农垦", "change_pct": 2.98}, {"name": "乡村振兴", "change_pct": 1.81}, {"name": "大农业", "change_pct": 1.66}, {"name": "国企改革", "change_pct": 0.59}, {"name": "大豆", "change_pct": 2.48}]}, {"code": "000021", "name": "深科技", "hot_rank": 92, "hot_rank_chg": 25, "stock_cnt": 5822, "price": "37.85", "change": "4.47", "market_id": "33", "circulate_market_value": "59976609000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 93, "hot_rank_chg": -13, "stock_cnt": 5822, "price": "159.94", "change": "0.43", "market_id": "17", "circulate_market_value": "395576440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 94, "hot_rank_chg": 0, "stock_cnt": 5822, "price": "10.49", "change": "9.96", "market_id": "17", "circulate_market_value": "3069143200.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "转基因玉米", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.54}, {"name": "强势人气股", "change_pct": 3.32}, {"name": "转基因", "change_pct": 4.21}, {"name": "乡村振兴", "change_pct": 1.81}, {"name": "大农业", "change_pct": 1.66}]}, {"code": "003032", "name": "传智教育", "hot_rank": 95, "hot_rank_chg": 25, "stock_cnt": 5822, "price": "10.45", "change": "5.56", "market_id": "33", "circulate_market_value": "2972832800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.55}, {"name": "ST摘帽", "change_pct": 0.92}, {"name": "强势人气股", "change_pct": 3.32}, {"name": "教育", "change_pct": 0.07}, {"name": "阿里巴巴概念股", "change_pct": 0.85}, {"name": "职业教育", "change_pct": 0.37}, {"name": "在线教育", "change_pct": 1.19}, {"name": "华为鸿蒙", "change_pct": 0.95}, {"name": "华为产业链", "change_pct": 1.96}, {"name": "智谱AI", "change_pct": 0.94}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 96, "hot_rank_chg": 33, "stock_cnt": 5822, "price": "176.38", "change": "5.06", "market_id": "33", "circulate_market_value": "138639930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 97, "hot_rank_chg": 9, "stock_cnt": 5822, "price": "12.12", "change": "9.98", "market_id": "17", "circulate_market_value": "5072306300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "业绩增长", "xgb_concepts": [{"name": "社保重仓", "change_pct": 0.98}, {"name": "中药", "change_pct": 1.15}, {"name": "优化生育（三孩）", "change_pct": 0.31}, {"name": "农业种植", "change_pct": 4.54}, {"name": "人工智能", "change_pct": 1.18}, {"name": "湖南国企改革", "change_pct": 1.55}, {"name": "医药", "change_pct": 1.06}, {"name": "流感", "change_pct": 1.43}, {"name": "大农业", "change_pct": 1.66}, {"name": "国企改革", "change_pct": 0.59}]}, {"code": "301591", "name": "肯特股份", "hot_rank": 98, "hot_rank_chg": 160, "stock_cnt": 5822, "price": "50.40", "change": "20.00", "market_id": "33", "circulate_market_value": "2252615300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PTFE"}, {"code": "600330", "name": "天通股份", "hot_rank": 99, "hot_rank_chg": 82, "stock_cnt": 5822, "price": "29.15", "change": "10.00", "market_id": "17", "circulate_market_value": "35954613000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块上游"}, {"code": "002094", "name": "青岛金王", "hot_rank": 100, "hot_rank_chg": -15, "stock_cnt": 5822, "price": "5.66", "change": "0.18", "market_id": "33", "circulate_market_value": "3907967100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.57}, {"name": "债转股 · AMC", "change_pct": 0.23}, {"name": "新零售", "change_pct": 0.53}, {"name": "中日韩自贸区", "change_pct": 0.76}, {"name": "腾讯概念股", "change_pct": 1.19}, {"name": "医美", "change_pct": 0.31}, {"name": "网红/MCN", "change_pct": 0.49}, {"name": "C2M", "change_pct": 0.37}, {"name": "化妆品", "change_pct": 0.31}, {"name": "自贸区", "change_pct": 0.27}]}];
const LIMIT_UP_POOL = [{"code": "603093", "name": "南华期货", "price": 13.52, "change_pct": 10.01, "reason": "国内最有竞争力的期货公司之一", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 6.7, "first_limit_up": 1787808220, "break_limit_up_times": 0}, {"code": "000712", "name": "锦龙股份", "price": 10.73, "change_pct": 10.05, "reason": "公司主要经营业务为证券公司业务，持有中山证券67.78%股权", "plates": ["大金融"], "limit_up_days": 2, "turnover_ratio": 1.64, "first_limit_up": 1787793900, "break_limit_up_times": 0}, {"code": "002190", "name": "成飞集成", "price": 25.52, "change_pct": 10.0, "reason": "中国航空工业集团旗下上市公司，参与航天相关零部件制造", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 6.27, "first_limit_up": 1787797665, "break_limit_up_times": 1}, {"code": "603137", "name": "恒尚节能", "price": 24.44, "change_pct": 9.99, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 10.33, "first_limit_up": 1787796669, "break_limit_up_times": 1}, {"code": "603237", "name": "五芳斋", "price": 15.88, "change_pct": 9.97, "reason": "公司是全国首批“中华老字号”企业，粽子行业龙头，上半年净利润同比增长2.85%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.89, "first_limit_up": 1787794206, "break_limit_up_times": 0}, {"code": "000586", "name": "汇源通信", "price": 14.41, "change_pct": 10.0, "reason": "公司光纤、光缆及相关产品业务主要包括研发生产销售ADSS、OPGW特种光缆、预制光缆、气吹微缆、非金属光缆等", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.47, "first_limit_up": 1787795742, "break_limit_up_times": 0}, {"code": "000890", "name": "法尔胜", "price": 8.78, "change_pct": 10.03, "reason": "1、参股的普天法尔胜光通信有限公司主要产品为光纤预制棒、光纤、光缆，上述产品可以应用于在运营商基础网络通信及广播电视通信领域；\n2、公司成功推出了性能优良的熊猫型保偏光纤，产品成功应用于神州七号和天宫一号等国家重大特大型号任务中；\n3、公司深度参与特种电缆及电力基础设施建设，在“算电协同”及智能电网升级背景下，其电力传输与配套特种金属材料是储能电站及数据中心电力传输等底层刚需环节", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 3.61, "first_limit_up": 1787794209, "break_limit_up_times": 0}, {"code": "601233", "name": "桐昆股份", "price": 26, "change_pct": 9.98, "reason": "公司是国内产能、产量、销量最大的涤纶长丝企业，已形成了“外购PX--PTA--聚酯--纺丝--加弹”一条龙的生产、销售格局", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.82, "first_limit_up": 1787808129, "break_limit_up_times": 1}, {"code": "002418", "name": "康盛股份", "price": 4.91, "change_pct": 10.09, "reason": "公司研发设计的浸没式液冷产品主要应用于数据中心散热", "plates": ["液冷服务器"], "limit_up_days": 3, "turnover_ratio": 22.53, "first_limit_up": 1787794455, "break_limit_up_times": 3}, {"code": "002824", "name": "和胜股份", "price": 26.68, "change_pct": 10.02, "reason": "中国工业铝挤压材十强企业；公司已配套供应多个主流品牌的多款折叠屏手机，涉及的产品主要为高强度、高硬度、轻薄的铝合金中框、转轴及其它金属结构件", "plates": ["折叠屏"], "limit_up_days": 1, "turnover_ratio": 10.39, "first_limit_up": 1787800431, "break_limit_up_times": 0}, {"code": "002155", "name": "湖南黄金", "price": 27.02, "change_pct": 10.02, "reason": "公司拟购买黄金天岳及中南冶炼100%股权", "plates": ["资产重组", "黄金"], "limit_up_days": 1, "turnover_ratio": 0.91, "first_limit_up": 1787793900, "break_limit_up_times": 0}, {"code": "001309", "name": "德明利", "price": 429.76, "change_pct": 10.0, "reason": "公司目前已建立了完善的存储产品矩阵，包括移动存储、固态硬盘、嵌入式存储、内存条等", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 12.72, "first_limit_up": 1787812224, "break_limit_up_times": 1}, {"code": "002742", "name": "冀衡医药", "price": 5.67, "change_pct": 10.1, "reason": "公司摘星脱帽后正式更名，全资子公司辽源百康主要生产化学原料药，涵盖解热镇痛、抗菌、抗过敏、局部麻醉等大类", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 1.9, "first_limit_up": 1787793900, "break_limit_up_times": 0}, {"code": "600721", "name": "百花医药", "price": 16.68, "change_pct": 10.03, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 43.45, "first_limit_up": 1787794310, "break_limit_up_times": 19}, {"code": "002980", "name": "华盛昌", "price": 102.05, "change_pct": 10.0, "reason": "公司收购伽蓝特100%股权，后者专注光通信模块和光芯片测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 11.05, "first_limit_up": 1787795904, "break_limit_up_times": 1}, {"code": "603435", "name": "嘉德利", "price": 53.3, "change_pct": 10.01, "reason": "公司从事BOPP电工膜研产销，产品系薄膜电容器和复合集流体等电子电力领域的关键材料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 9.99, "first_limit_up": 1787797081, "break_limit_up_times": 1}, {"code": "002134", "name": "天津普林", "price": 22.63, "change_pct": 10.01, "reason": "专注于中小批量、高多层、厚铜板、光电板和HDI领域的PCB企业", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 4.65, "first_limit_up": 1787797602, "break_limit_up_times": 0}, {"code": "301666", "name": "大普微", "price": 469.2, "change_pct": 20.0, "reason": "业内领先、国内极少数具备企业级SSD“主控芯片+固件算法+模组”全栈自研能力并实现批量出货的半导体存储产品提供商，签订5.15亿美元企业级PCIe SSD的销售订单", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 7.81, "first_limit_up": 1787794251, "break_limit_up_times": 0}, {"code": "301591", "name": "肯特股份", "price": 50.4, "change_pct": 20.0, "reason": "1、公司专注于高性能工程塑料制品及组配件的研产销，PTFE（聚四氟乙烯）等氟塑料是公司主要使用的高性能材料之一；\n2、公司研究PEEK各种配方、成型与深加工技术，为不同应用场景的客户提供包含且不限于PEEK材料的制品与应用解决方案", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 36.73, "first_limit_up": 1787797188, "break_limit_up_times": 0}, {"code": "600108", "name": "亚盛集团", "price": 3.78, "change_pct": 9.88, "reason": "我国当前最大规模的农艺种植基地；公司主营啤酒花、苜蓿牧草、马铃薯、制种玉米、大麦、食葵、果蔬等作物规模化种植", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 7.7, "first_limit_up": 1787796515, "break_limit_up_times": 0}, {"code": "002852", "name": "道道全", "price": 8.89, "change_pct": 10.02, "reason": "公司主营食用植物油，有菜籽种植基地，主要种植高油酸菜籽品种，为公司的高油酸菜油提供原料资源", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.91, "first_limit_up": 1787807370, "break_limit_up_times": 1}, {"code": "600397", "name": "江钨装备", "price": 19.03, "change_pct": 10.0, "reason": "公司拟定增募资不超过19亿元，用于收购控股股东旗下江钨硬质合金、华茂钨材料及九江有色金属冶炼三家公司100%股权，拟注入钨制品及钽铌制品领域优质资产", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 10.36, "first_limit_up": 1787797422, "break_limit_up_times": 0}, {"code": "688790", "name": "昂瑞微", "price": 114.1, "change_pct": 20.0, "reason": "公司主要从事射频前端芯片、射频SoC芯片及其他模拟芯片的研发、设计与销售\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 14.78, "first_limit_up": 1787797135, "break_limit_up_times": 0}, {"code": "600103", "name": "青山纸业", "price": 3.82, "change_pct": 10.09, "reason": "1、控股子公司恒宝通光主营光通信模块及组件产品的研产销，系国家级高新技术企业，产品主要应用于移动通信领域，为全球大型模拟半导体设备供应厂商Avago逾十年的供应商；\n2、综合性造纸上市公司，实控人福建省国资委；公司主要产品为“青山牌”系列伸性纸袋纸、牛皮包装纸、溶解浆等产品", "plates": ["光通信"], "limit_up_days": 3, "turnover_ratio": 6.1, "first_limit_up": 1787794233, "break_limit_up_times": 0}, {"code": "600683", "name": "京投发展", "price": 11.04, "change_pct": 9.96, "reason": "1、公司筹划收购西安奇芯光电股权，标的从事光电子器件制造；\n2、公司拟将房地产开发业务相关资产及负债转让至控股股东北京市基础设施投资有限公司，目前正开展审计、评估等工作", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.74, "first_limit_up": 1787795669, "break_limit_up_times": 1}, {"code": "300456", "name": "赛微电子", "price": 37.06, "change_pct": 20.01, "reason": "1、公司具备硅光子芯片MEMS工艺开发与晶圆制造能力，产品可用于CPO光交换、光通信场景；\n2、公司拟6000万收购芯东来股权，标的专注于光刻机领域", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 13.72, "first_limit_up": 1787796804, "break_limit_up_times": 4}, {"code": "600095", "name": "湘财股份", "price": 9.54, "change_pct": 10.03, "reason": "公司上半年净利润同比预增217.76%—344.86%，报告期内，国内资本市场稳步上行，市场成交量迭创新高，公司全资子公司湘财证券积极把握市场机会，优化资产配置，其中经纪、信用、投顾等财富管理及自营业务业绩增长显著，带动公司净利润较上年同期实现大幅增长", "plates": ["大金融"], "limit_up_days": 2, "turnover_ratio": 7.12, "first_limit_up": 1787794781, "break_limit_up_times": 15}, {"code": "600378", "name": "昊华科技", "price": 48.46, "change_pct": 10.01, "reason": "公司是国内氟化工龙头，受上游原材料成本上升等因素影响，公司PTFE产品销售价格有所上涨", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 2.79, "first_limit_up": 1787794296, "break_limit_up_times": 2}, {"code": "603618", "name": "杭电股份", "price": 35.11, "change_pct": 9.99, "reason": "公司地处杭州，是国网杭州供电公司重要的电缆供应商和技术合作伙伴，具备光通信“光棒—光纤—光缆”一体化产业链，光缆产品通过参与电信运营商招投标实现销售", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 9.69, "first_limit_up": 1787794513, "break_limit_up_times": 1}, {"code": "002628", "name": "成都路桥", "price": 5.28, "change_pct": 10.0, "reason": "成都优质基建企业；2025年7月，公司与深圳市优必选、中国民航正式签署战略合作框架协议，就具身智能机器人及人工智能技术在民航和泛交通行业落地应用进行深入合作探索，全资子公司四川成路智汇科技和优必选等联合成立锦程智行(成都)，锦程智行已获取订单并投入机场使用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.29, "first_limit_up": 1787806842, "break_limit_up_times": 5}, {"code": "002072", "name": "凯瑞德", "price": 8.9, "change_pct": 10.01, "reason": "公司以1.15亿元增资收购龙武矿业并获51%表决权", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 11.21, "first_limit_up": 1787794467, "break_limit_up_times": 4}, {"code": "605288", "name": "凯迪股份", "price": 63.14, "change_pct": 10.0, "reason": "公司是线性驱动系统龙头，网传资料显示，公司招聘电机研发工程师，工作让内容包括负责机器人用伺服电机电磁方案分析及结构方案设计", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1787813268, "break_limit_up_times": 0}, {"code": "000592", "name": "平潭发展", "price": 6.81, "change_pct": 10.02, "reason": "A股唯一一家注册在平潭岛的上市公司，公司拥有90万亩林地，受益林业碳汇交易发展", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 15.33, "first_limit_up": 1787807562, "break_limit_up_times": 2}, {"code": "000951", "name": "中国重汽", "price": 22.39, "change_pct": 10.02, "reason": "公司为国内重卡龙头之一，上半年净利润同比增45.5%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.65, "first_limit_up": 1787794347, "break_limit_up_times": 15}, {"code": "601208", "name": "东材科技", "price": 49.1, "change_pct": 9.99, "reason": "1、公司业务聚焦于电子级树脂材料，如双马树脂、活性酯等，是制造高频高速PCB的核心原材料；\n2、电子级树脂材料专家；公司与Chemax、种亿化学成立成都东凯芯半导体材料公司，重点开展高端光刻胶项目", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 7.84, "first_limit_up": 1787806815, "break_limit_up_times": 2}, {"code": "002636", "name": "金安国纪", "price": 69.41, "change_pct": 10.0, "reason": "国内覆铜板龙头，同时生产电子级玻纤布", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.16, "first_limit_up": 1787798118, "break_limit_up_times": 1}, {"code": "603688", "name": "石英股份", "price": 51.56, "change_pct": 10.01, "reason": "国内石英制品行业的龙头企业；公司在光通讯行业的主营产品一直以石英延长管、石英棒、石英套管为主，为光纤预制棒及光纤拉丝工艺提供部分石英材料", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.85, "first_limit_up": 1787811869, "break_limit_up_times": 0}, {"code": "603938", "name": "三孚股份", "price": 44.96, "change_pct": 10.01, "reason": "公司电子特气产品应用于存储芯片等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.42, "first_limit_up": 1787794880, "break_limit_up_times": 1}, {"code": "600162", "name": "香江控股", "price": 4.87, "change_pct": 9.93, "reason": "公司签5年互联网数据中心业务协议，预计总金额7.96亿元", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.13, "first_limit_up": 1787796381, "break_limit_up_times": 0}, {"code": "603261", "name": "立航科技", "price": 58.73, "change_pct": 10.0, "reason": "1、我国军机地面保障设备主要供应商，在低空经济相关业务中涉及无人机相关业务；\n2、公司参与了核聚变激光点火装置神光III主机装置项目，是该项目片状放大器组件的设计制造单位之一", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1787794542, "break_limit_up_times": 0}, {"code": "600345", "name": "长江通信", "price": 52.06, "change_pct": 9.99, "reason": "1、参股公司长飞光纤是世界领先的光纤预制棒、光纤及光缆供应商之一；\n2、低轨卫星通信是公司重点开拓的新行业之一，公司背靠中国信科，其在星地融合标准制定上发挥了突出的贡献，自R18开始首次实现中国在3GPPNTN的标准立项，目前已累计牵头16项，是全球牵头卫星NTN立项最多的公司", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.7, "first_limit_up": 1787812972, "break_limit_up_times": 0}, {"code": "002536", "name": "飞龙股份", "price": 54.23, "change_pct": 10.0, "reason": "1、公司针对机器人关节等部位日益增长的液冷散热需求，依托公司在电子泵、温控阀及集成模块等新能源热管理产品上的技术优势，积极布局机器人领域液冷市场；\n2、公司的数据中心液冷产品在芜湖飞龙、郑州飞龙已建有专门生产线；公司多个液冷项目正在进行中，公司电子水泵系列产品和温控阀系列产品已应用在服务器液冷领域，该领域部分项目已经量产", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 11.43, "first_limit_up": 1787795991, "break_limit_up_times": 5}, {"code": "000962", "name": "东方钽业", "price": 57.55, "change_pct": 10.0, "reason": "1、国内最大的钽、铌产品生产基地；AI服务器对钽电容需求的爆发式增长，25H2至今全球钽电容龙头Kemet已经宣布了三次涨价，公司电容器级钽粉全球市占率25%，电容器用钽丝全球市占率50%+，4月以来公司已针对下游钽电容客户涨价50%+，涨价已经逐渐传递至公司端；\n2、公司涂层材料已配套商业航天火箭喷管，超导铌材及铌超导腔用于可控核聚变等国家大科学装置", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 6.93, "first_limit_up": 1787799009, "break_limit_up_times": 1}, {"code": "002942", "name": "新农股份", "price": 19.01, "change_pct": 10.01, "reason": "农药全产业链生产企业；主营化学农药原药、制剂及精细化工中间体，主要产品为噻唑锌、吡唑醚菌酯、毒死蜱、三唑磷等原药及制剂，中间体有乙基氯化物等；噻唑锌为创制农药，毒死蜱原药市场占有率居国内前列", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 1.63, "first_limit_up": 1787793900, "break_limit_up_times": 0}, {"code": "603011", "name": "合锻智能", "price": 25.14, "change_pct": 10.02, "reason": "1、公司是PCB/CCL层压设备的国产龙头，核心产品是真空热压机/冷压机及自动化生产线；\n2、参股公司合肥汇智专注于粉末注射成形技术（PIM）的研发及应用，其中涉及的光模块业务，目前正在合作的企业有新易盛、联特科技等；\n3、公司高端成形机床已成熟应用于航空航天、军工领域并取得业务收入；\n4、公司与中国核工业二三建设有限公司合作，已承接核聚变真空室构件的研制工作", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 10.52, "first_limit_up": 1787798568, "break_limit_up_times": 1}, {"code": "600654", "name": "中安科", "price": 3.3, "change_pct": 10.0, "reason": "公司及全资子公司灵算智云武汉投资有限公司已与宜兴兴阳产业投资有限公司签署协议共建宜兴市人工智能算力中心项目；上半年净利润同比增长1826%", "plates": ["云计算数据中心", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1787794716, "break_limit_up_times": 0}, {"code": "002886", "name": "沃特股份", "price": 24, "change_pct": 9.99, "reason": "1、公司已有PCB用聚四氟乙烯（PTFE）材料、散热用液晶高分子（LCP）和聚醚醚酮（PEEK）材料、数据连接用LCP和高温尼龙（PPA）材料等方案；\n2、公司的聚芳醚酮产线正在建设中，其中包含PEEK产线", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 15.71, "first_limit_up": 1787794473, "break_limit_up_times": 5}, {"code": "603269", "name": "海鸥股份", "price": 20.16, "change_pct": 9.98, "reason": "公司冷却塔已应用于数据算力中心", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.17, "first_limit_up": 1787798526, "break_limit_up_times": 2}, {"code": "600969", "name": "郴电国际", "price": 10.45, "change_pct": 10.0, "reason": "公司为唐山中邦控股股东，消息称后者氩气报价大涨", "plates": ["工业气体"], "limit_up_days": 2, "turnover_ratio": 9.93, "first_limit_up": 1787796563, "break_limit_up_times": 1}, {"code": "000576", "name": "甘化科工", "price": 8, "change_pct": 10.04, "reason": "1、公司持有苏州锴威特半导体股份有限公司834.4816万股，占其总股本11.33%；\n2、控股子公司沈阳含能拥有军工相关资质，在钨合金预制破片领域具有相对稳定的竞争地位，与多家兵工厂建立了良好的合作关系，是部分常规炮弹及新型火箭弹预制破片的主要供应商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.82, "first_limit_up": 1787794239, "break_limit_up_times": 4}, {"code": "603002", "name": "宏昌电子", "price": 16.91, "change_pct": 10.02, "reason": "公司开发了高频高速5G电路板用树脂，已完成下游CCL覆铜板客户实验室认证", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.17, "first_limit_up": 1787795521, "break_limit_up_times": 0}, {"code": "600330", "name": "天通股份", "price": 29.15, "change_pct": 10.0, "reason": "公司生产的铌酸锂晶体材料是铌酸锂电光调制芯片及器件的上游关键原材料；公司已自主量产6英寸铌酸锂/钽酸锂晶体及黑化抛光晶片", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 10.62, "first_limit_up": 1787799225, "break_limit_up_times": 3}, {"code": "600540", "name": "新赛股份", "price": 4.59, "change_pct": 10.07, "reason": "公司农业主要产品为棉籽、葵花籽、菜籽及其他油料作物，立足于新疆棉花产业，聚焦棉业全产业链", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 1.52, "first_limit_up": 1787793900, "break_limit_up_times": 0}, {"code": "002953", "name": "日丰股份", "price": 11.88, "change_pct": 10.0, "reason": "公司拟投资约7亿元建设年产300吨光纤预制棒、1000万芯公里光纤项目", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.71, "first_limit_up": 1787795442, "break_limit_up_times": 0}, {"code": "002855", "name": "捷荣技术", "price": 13.31, "change_pct": 10.0, "reason": "华为Mate XT 2新一代三折叠官宣2026年9月7日首发，公司的客户代工厂家向华为品牌产品提供公司的产品精密结构件", "plates": ["折叠屏"], "limit_up_days": 3, "turnover_ratio": 0.58, "first_limit_up": 1787793900, "break_limit_up_times": 0}, {"code": "600613", "name": "神奇制药", "price": 11.61, "change_pct": 10.05, "reason": "公司拥有中国驰名商标“神奇”品牌，其中枇杷止咳颗粒、强力枇杷露等较为知名", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 12.18, "first_limit_up": 1787793900, "break_limit_up_times": 1}, {"code": "600730", "name": "*ST高科", "price": 10.37, "change_pct": 9.97, "reason": "公司收到法院出具的《民事裁定书》，裁定撤销此前对公司及两家子公司作出的行为保全措施", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.44, "first_limit_up": 1787807987, "break_limit_up_times": 2}, {"code": "000017", "name": "深中华A", "price": 10.41, "change_pct": 10.04, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["黄金"], "limit_up_days": 6, "turnover_ratio": 13.51, "first_limit_up": 1787794344, "break_limit_up_times": 3}, {"code": "688300", "name": "联瑞新材", "price": 186.24, "change_pct": 20.0, "reason": "公司配套供应HBM封装材料GMC所用球硅和Low α球铝", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.04, "first_limit_up": 1787798959, "break_limit_up_times": 2}, {"code": "002515", "name": "金字火腿", "price": 8.58, "change_pct": 10.0, "reason": "1、全资子公司拟不超过3亿元取得中晟微电子不超过20%股权，后者专注于高速光模块核心电芯片的研发设计；\n2、公司主营火腿及特色肉制品，重点发展香肠、腊肉、咸肉等，同时加快休闲食品市场布局", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 14.42, "first_limit_up": 1787799894, "break_limit_up_times": 13}, {"code": "002396", "name": "星网锐捷", "price": 33.35, "change_pct": 9.99, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 13.51, "first_limit_up": 1787812599, "break_limit_up_times": 0}, {"code": "600359", "name": "新农开发", "price": 7.47, "change_pct": 10.01, "reason": "新疆生产建设兵团农一师旗下；主营产品涉及棉花（包括长绒棉、陆地棉、彩色棉、抗虫棉），皮棉销量1.35万吨、棉种销量5306吨", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.45, "first_limit_up": 1787794377, "break_limit_up_times": 1}, {"code": "601869", "name": "长飞光纤", "price": 426.82, "change_pct": 10.0, "reason": "全球光纤光缆行业的领先企业；公司空芯技术产能水平领先，并已在相关项目中标", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.63, "first_limit_up": 1787795359, "break_limit_up_times": 1}, {"code": "301399", "name": "英特科技", "price": 21.24, "change_pct": 20.0, "reason": "公司液冷散热器可以应用于数据中心、光伏发电、中央空调等领域的变频器、逆变器的散热冷却；暂未应用于云游戏大数据及人工智能大数据中心", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 31.77, "first_limit_up": 1787796015, "break_limit_up_times": 1}, {"code": "001232", "name": "嘉立创", "price": 162.03, "change_pct": 10.0, "reason": "公司主营印制电路板制造业务，PCB业务为公司第一大收入来源，拥有五大现代化数字生产基地覆盖PCB全制程\n", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 19.63, "first_limit_up": 1787797806, "break_limit_up_times": 0}, {"code": "600371", "name": "万向德农", "price": 10.49, "change_pct": 9.96, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 5.55, "first_limit_up": 1787794205, "break_limit_up_times": 0}, {"code": "300368", "name": "汇金股份", "price": 9.62, "change_pct": 19.95, "reason": "我国银行业金融机具核心供应商与服务商，业务涉及军工配套设备", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 12.34, "first_limit_up": 1787794761, "break_limit_up_times": 1}, {"code": "600479", "name": "千金药业", "price": 12.12, "change_pct": 9.98, "reason": "妇科中药龙头；公司的西药抗病毒类药品主要有拉米夫定片和利巴韦林颗粒等", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 25.82, "first_limit_up": 1787794289, "break_limit_up_times": 7}, {"code": "002084", "name": "海鸥住工", "price": 5.27, "change_pct": 10.02, "reason": "公司主营业务聚焦在卫浴及厨房产品整组龙头及部品部件的制造服务与销售，控股股东拟变更为博泰车联", "plates": ["股权转让"], "limit_up_days": 4, "turnover_ratio": 0.81, "first_limit_up": 1787793900, "break_limit_up_times": 0}, {"code": "003040", "name": "楚天龙", "price": 18.73, "change_pct": 9.98, "reason": "国内较早从事数字人民币相关技术研究与产品开发的企业之一", "plates": ["大金融"], "limit_up_days": 5, "turnover_ratio": 20.77, "first_limit_up": 1787794248, "break_limit_up_times": 41}, {"code": "688368", "name": "晶丰明源", "price": 140.28, "change_pct": 20.0, "reason": "公司是国内 LED 照明驱动芯片龙头企业，推出新一代单级高PF恒压控制器BP83323，该产品以第三代碳化硅（SiC）器件集成为核心，采用单级APFC + 反激恒压输出的创新拓扑架构，支持全电压（90-264Vac）输入，可实现高达150W的输出功率，为高性能AC/DC电源设计提供了具备竞争力的解决方案", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.97, "first_limit_up": 1787812308, "break_limit_up_times": 0}, {"code": "603580", "name": "艾艾精工", "price": 80.52, "change_pct": 10.0, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 6.46, "first_limit_up": 1787795733, "break_limit_up_times": 0}, {"code": "605258", "name": "协和电子", "price": 31.9, "change_pct": 10.0, "reason": "国内领先的高频通讯板生产商；公司车载毫米波雷达等产品且已批量供货，与合众新能源、上汽时代、万帮数字能源等新能源领域的客户建立了合作", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.26, "first_limit_up": 1787797998, "break_limit_up_times": 3}, {"code": "603900", "name": "莱绅通灵", "price": 7.14, "change_pct": 10.02, "reason": "公司主营珠宝饰品、工艺美术品等，与蓝精灵 IP 联名，用18K金、天然贝母、珐琅等工艺打造珠宝，借热门 IP 拓展业务 ", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 8.09, "first_limit_up": 1787794799, "break_limit_up_times": 1}, {"code": "603319", "name": "美湖股份", "price": 29.45, "change_pct": 10.01, "reason": "1、公司持有朗道智通 66.13%股权，后者主要产品及业务有工业物流机器人（AGV）；\n2、国内内燃机机油泵龙头，控股子公司东兴昌科技激光雷达电机产品已实现对全球图像级激光雷达领先企业的配套供货，并实车装配于某新能源汽车制造厂商", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.3, "first_limit_up": 1787811671, "break_limit_up_times": 0}, {"code": "600641", "name": "先导基电", "price": 34, "change_pct": 10.0, "reason": "公司大股东先导科技集团自有镓、 锗、 铟等稀散金属（产量全球领先） ， 能够提供电子材料（如掺杂材料、 前驱体、 电子特气） 以及工艺测试等多方面支持， 为公司零部件产品研发及国产化验证提供保障", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 6.45, "first_limit_up": 1787800190, "break_limit_up_times": 2}, {"code": "600127", "name": "金健米业", "price": 10.78, "change_pct": 10.0, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 20.32, "first_limit_up": 1787794516, "break_limit_up_times": 1}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};