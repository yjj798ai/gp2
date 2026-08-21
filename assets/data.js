const UPDATE_TIME = "2026-08-21 02:25";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -3.38,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.33,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续275天上榜",
    "rankChg": 1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "黄金概念",
    "rise": 1.32,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": -1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "生物疫苗",
    "rise": -3.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885845"
  },
  {
    "name": "数字货币",
    "rise": 0.81,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 2,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "共同富裕示范区",
    "rise": -1.13,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885924"
  },
  {
    "name": "存储芯片",
    "rise": 0.47,
    "rate": 0,
    "tag": "",
    "hotTag": "连续228天上榜",
    "rankChg": -1,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "粮食概念",
    "rise": -3.66,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "商业航天",
    "rise": -0.0,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续204天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": 0.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "MLCC概念",
    "rise": 1.22,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新动力LOF",
    "code": "886112"
  },
  {
    "name": "算力租赁",
    "rise": -0.48,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "AI应用",
    "rise": -0.94,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "人形机器人",
    "rise": 0.02,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续439天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光纤概念",
    "rise": 0.52,
    "rate": 0,
    "tag": "",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "CRO概念",
    "rise": -2.97,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "机器人概念",
    "rise": -0.26,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "猪肉",
    "rise": -2.32,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "金属锌",
    "rise": 2.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "有色ETF",
    "code": "885970"
  },
  {
    "name": "ST板块",
    "rise": -0.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  }
];
const THS_EVENTS = [
  {
    "title": "阿里财报：AI云收入增长45%，增速创22个季度新高",
    "desc": "",
    "heat": 280355,
    "direction": "阿里概念",
    "themes": [
      "阿里巴巴概念",
      "阿里系算力",
      "数据中心(AIDC)"
    ],
    "stocks": [
      {
        "name": "日科化学",
        "code": "300214",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "黄金收复4500美元关口，美债收益率与美元同步反弹",
    "desc": "",
    "heat": 247490,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "深中华A",
        "code": "000017",
        "chg": 10.06192
      }
    ]
  },
  {
    "title": "SK海力士加注CPO",
    "desc": "",
    "heat": 217517,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "深科达",
        "code": "688328",
        "chg": 15.413979
      }
    ]
  },
  {
    "title": "苹果9月9日将发布iPhone 18 Pro/Pro Max及首款折叠屏iPhone Ultra",
    "desc": "",
    "heat": 94629,
    "direction": "苹果折叠屏手机",
    "themes": [
      "苹果概念",
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "深科达",
        "code": "688328",
        "chg": 15.413979
      }
    ]
  },
  {
    "title": "《上海市城市更新和住房发展“十五五”规划》印发",
    "desc": "",
    "heat": 73926,
    "direction": "城市更新",
    "themes": [
      "新型城镇化",
      "智慧城市"
    ],
    "stocks": [
      {
        "name": "瑞斯康达",
        "code": "603803",
        "chg": 10.009718
      }
    ]
  },
  {
    "title": "“六张网”拉动投资效应显现,上市公司积极布局抢抓机遇,3家获机构密集调研",
    "desc": "",
    "heat": 70640,
    "direction": "算力网",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "博汇股份",
        "code": "300839",
        "chg": 20.019249
      }
    ]
  },
  {
    "title": "特朗普签署备忘录以促进美航天发射 探索商业机器人登陆火星",
    "desc": "",
    "heat": 60898,
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
        "name": "铖昌科技",
        "code": "001270",
        "chg": 4.402955
      }
    ]
  },
  {
    "title": "抗癌疫苗引爆资本市场 带“飞”A股医药四大赛道",
    "desc": "",
    "heat": 32870,
    "direction": "抗癌疫苗",
    "themes": [
      "肿瘤疫苗",
      "生物疫苗",
      "重组蛋白",
      "生物制品",
      "基因测序"
    ],
    "stocks": [
      {
        "name": "近岸蛋白",
        "code": "688137",
        "chg": 20.002963
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "白银",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+3.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+3.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钼",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+2.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+2.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+2.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+2.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+2.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钴",
    "change": "+2.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+1.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+1.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+1.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+1.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷酸铁锂",
    "change": "+1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+1.62%",
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
    "stock_cnt": 5880,
    "price": "8.42",
    "change": "-7.27",
    "market_id": "17",
    "circulate_market_value": "21205853000.00",
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
        "change_pct": -1.6
      },
      {
        "name": "中药",
        "change_pct": -3.25
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "保健品",
        "change_pct": -3.02
      },
      {
        "name": "民营医院",
        "change_pct": -2.36
      },
      {
        "name": "医药",
        "change_pct": -3.28
      },
      {
        "name": "化学原料药",
        "change_pct": -3.41
      },
      {
        "name": "流感",
        "change_pct": -2.9
      },
      {
        "name": "振兴东北",
        "change_pct": -1.3
      },
      {
        "name": "食品",
        "change_pct": -2.58
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 3,
    "hot_rank_chg": 10,
    "stock_cnt": 5880,
    "price": "8.43",
    "change": "-1.98",
    "market_id": "17",
    "circulate_market_value": "5410232500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -2.29
      },
      {
        "name": "农业种植",
        "change_pct": -4.58
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.68
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.92
      },
      {
        "name": "休闲食品",
        "change_pct": -2.63
      },
      {
        "name": "食品",
        "change_pct": -2.58
      },
      {
        "name": "食品安全",
        "change_pct": -1.37
      },
      {
        "name": "社区团购",
        "change_pct": -2.03
      },
      {
        "name": "大农业",
        "change_pct": -1.77
      },
      {
        "name": "预制菜",
        "change_pct": -1.98
      },
      {
        "name": "人造肉",
        "change_pct": -2.64
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 4,
    "hot_rank_chg": 14,
    "stock_cnt": 5880,
    "price": "8.69",
    "change": "1.52",
    "market_id": "17",
    "circulate_market_value": "4165290600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.25
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "医药商业",
        "change_pct": -3.73
      },
      {
        "name": "医药",
        "change_pct": -3.28
      },
      {
        "name": "流感",
        "change_pct": -2.9
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 12,
    "hot_rank_chg": 7,
    "stock_cnt": 5880,
    "price": "4.44",
    "change": "-5.92",
    "market_id": "33",
    "circulate_market_value": "9345684600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.25
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "维生素",
        "change_pct": -1.53
      },
      {
        "name": "基因测序",
        "change_pct": -2.03
      },
      {
        "name": "民营医院",
        "change_pct": -2.36
      },
      {
        "name": "医药",
        "change_pct": -3.28
      },
      {
        "name": "化学原料药",
        "change_pct": -3.41
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -4.74
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 13,
    "hot_rank_chg": 38,
    "stock_cnt": 5880,
    "price": "10.19",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "5073040600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.25
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.21
      },
      {
        "name": "农业种植",
        "change_pct": -4.58
      },
      {
        "name": "医药",
        "change_pct": -3.28
      },
      {
        "name": "流感",
        "change_pct": -2.9
      },
      {
        "name": "大农业",
        "change_pct": -1.77
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 17,
    "hot_rank_chg": -8,
    "stock_cnt": 5880,
    "price": "5.12",
    "change": "-7.75",
    "market_id": "33",
    "circulate_market_value": "13538526000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "装修装饰",
        "change_pct": -0.89
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.08
      },
      {
        "name": "航天",
        "change_pct": 0.12
      },
      {
        "name": "旧改",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 23,
    "hot_rank_chg": 24,
    "stock_cnt": 5880,
    "price": "6.94",
    "change": "-7.33",
    "market_id": "17",
    "circulate_market_value": "7914363200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.36
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "光伏",
        "change_pct": 0.26
      },
      {
        "name": "特高压",
        "change_pct": -0.32
      },
      {
        "name": "智能电网",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 29,
    "hot_rank_chg": -15,
    "stock_cnt": 5880,
    "price": "5.91",
    "change": "0.17",
    "market_id": "33",
    "circulate_market_value": "209019760000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.65
      },
      {
        "name": "手机产业链",
        "change_pct": 0.59
      },
      {
        "name": "超高清视频",
        "change_pct": -0.59
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.9
      },
      {
        "name": "电竞",
        "change_pct": -1.19
      },
      {
        "name": "半导体",
        "change_pct": 0.61
      },
      {
        "name": "人工智能",
        "change_pct": -0.87
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.21
      },
      {
        "name": "VR&AR",
        "change_pct": -0.11
      },
      {
        "name": "OLED",
        "change_pct": 0.19
      },
      {
        "name": "京津冀",
        "change_pct": -1.1
      },
      {
        "name": "物联网",
        "change_pct": -0.38
      },
      {
        "name": "指纹识别",
        "change_pct": 1.25
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.34
      },
      {
        "name": "白马股",
        "change_pct": -0.47
      },
      {
        "name": "智能制造",
        "change_pct": -0.16
      },
      {
        "name": "小米概念股",
        "change_pct": 0.08
      },
      {
        "name": "国产芯片",
        "change_pct": 0.47
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.53
      },
      {
        "name": "全息概念",
        "change_pct": -0.74
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.27
      },
      {
        "name": "MicroLED",
        "change_pct": -0.26
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.53
      },
      {
        "name": "智能手表",
        "change_pct": 0.23
      },
      {
        "name": "MiniLED",
        "change_pct": -0.21
      },
      {
        "name": "传感器",
        "change_pct": 0.06
      },
      {
        "name": "大硅片",
        "change_pct": -0.04
      },
      {
        "name": "AI PC",
        "change_pct": 0.31
      },
      {
        "name": "华为产业链",
        "change_pct": -0.1
      },
      {
        "name": "回购",
        "change_pct": -0.78
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.42
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.1
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.24
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 31,
    "hot_rank_chg": -6,
    "stock_cnt": 5880,
    "price": "10.76",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "3061022100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.16
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.9
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "教育",
        "change_pct": -1.35
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.98
      },
      {
        "name": "职业教育",
        "change_pct": -1.57
      },
      {
        "name": "在线教育",
        "change_pct": -1.22
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.0
      },
      {
        "name": "华为产业链",
        "change_pct": -0.1
      },
      {
        "name": "智谱AI",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 38,
    "hot_rank_chg": 82,
    "stock_cnt": 5880,
    "price": "7.08",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "6031532100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "mRNA平台",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.6
      },
      {
        "name": "创新药",
        "change_pct": -3.47
      },
      {
        "name": "基因测序",
        "change_pct": -2.03
      },
      {
        "name": "民营医院",
        "change_pct": -2.36
      },
      {
        "name": "医药",
        "change_pct": -3.28
      },
      {
        "name": "疫苗",
        "change_pct": -2.69
      },
      {
        "name": "化学原料药",
        "change_pct": -3.41
      },
      {
        "name": "流感",
        "change_pct": -2.9
      },
      {
        "name": "长寿药NMN",
        "change_pct": -3.4
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.21
      },
      {
        "name": "肝素",
        "change_pct": -3.04
      },
      {
        "name": "基因编辑",
        "change_pct": -2.53
      },
      {
        "name": "肝炎概念",
        "change_pct": -3.05
      },
      {
        "name": "医美",
        "change_pct": -2.38
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -2.99
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.85
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -0.13
      },
      {
        "name": "减肥药",
        "change_pct": -4.1
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 44,
    "hot_rank_chg": 17,
    "stock_cnt": 5880,
    "price": "6.81",
    "change": "-9.08",
    "market_id": "33",
    "circulate_market_value": "4306510100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -1.45
      },
      {
        "name": "京津冀",
        "change_pct": -1.1
      },
      {
        "name": "调味品",
        "change_pct": -1.97
      },
      {
        "name": "海南概念",
        "change_pct": -1.5
      },
      {
        "name": "休闲食品",
        "change_pct": -2.63
      },
      {
        "name": "食品",
        "change_pct": -2.58
      },
      {
        "name": "人造肉",
        "change_pct": -2.64
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 46,
    "hot_rank_chg": 9,
    "stock_cnt": 5880,
    "price": "4.16",
    "change": "-5.86",
    "market_id": "33",
    "circulate_market_value": "3198288300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.25
      },
      {
        "name": "股权转让",
        "change_pct": -0.29
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.21
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "医药商业",
        "change_pct": -3.73
      },
      {
        "name": "保健品",
        "change_pct": -3.02
      },
      {
        "name": "民营医院",
        "change_pct": -2.36
      },
      {
        "name": "医药",
        "change_pct": -3.28
      },
      {
        "name": "食品",
        "change_pct": -2.58
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.21
      },
      {
        "name": "口腔",
        "change_pct": -2.01
      },
      {
        "name": "医美",
        "change_pct": -2.38
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.85
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 49,
    "hot_rank_chg": 17,
    "stock_cnt": 5880,
    "price": "7.47",
    "change": "-4.11",
    "market_id": "33",
    "circulate_market_value": "5435053900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.59
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.08
      },
      {
        "name": "风电",
        "change_pct": -0.47
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.02
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.92
      },
      {
        "name": "建筑节能",
        "change_pct": -0.96
      },
      {
        "name": "旧改",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "603801",
    "name": "志邦家居",
    "hot_rank": 51,
    "hot_rank_chg": 82,
    "stock_cnt": 5880,
    "price": "7.38",
    "change": "2.08",
    "market_id": "17",
    "circulate_market_value": "3205513900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "家具家居",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 54,
    "hot_rank_chg": -15,
    "stock_cnt": 5880,
    "price": "12.01",
    "change": "-2.44",
    "market_id": "33",
    "circulate_market_value": "11209192500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.08
      },
      {
        "name": "新疆概念",
        "change_pct": -0.9
      },
      {
        "name": "光伏",
        "change_pct": 0.26
      },
      {
        "name": "风电",
        "change_pct": -0.47
      },
      {
        "name": "储能",
        "change_pct": 0.29
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 60,
    "hot_rank_chg": -18,
    "stock_cnt": 5880,
    "price": "6.67",
    "change": "-6.05",
    "market_id": "17",
    "circulate_market_value": "15970627000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 61,
    "hot_rank_chg": 2,
    "stock_cnt": 5880,
    "price": "3.14",
    "change": "-3.38",
    "market_id": "33",
    "circulate_market_value": "14669291000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.18
      },
      {
        "name": "股权转让",
        "change_pct": -0.29
      },
      {
        "name": "房地产",
        "change_pct": -1.97
      },
      {
        "name": "京津冀",
        "change_pct": -1.1
      },
      {
        "name": "旅游",
        "change_pct": -1.04
      },
      {
        "name": "国产芯片",
        "change_pct": 0.47
      },
      {
        "name": "内存",
        "change_pct": 0.71
      },
      {
        "name": "闪存",
        "change_pct": 0.28
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.36
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 65,
    "hot_rank_chg": -5,
    "stock_cnt": 5880,
    "price": "11.18",
    "change": "1.45",
    "market_id": "17",
    "circulate_market_value": "20002566000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.97
      },
      {
        "name": "纯碱",
        "change_pct": -0.35
      },
      {
        "name": "食品",
        "change_pct": -2.58
      },
      {
        "name": "土壤修复",
        "change_pct": -1.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.43
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.04
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.7
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 69,
    "hot_rank_chg": -12,
    "stock_cnt": 5880,
    "price": "10.25",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "8292444600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -0.04
      },
      {
        "name": "大飞机",
        "change_pct": -0.12
      },
      {
        "name": "北斗导航",
        "change_pct": -0.32
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.32
      },
      {
        "name": "军民融合",
        "change_pct": 0.02
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.54
      },
      {
        "name": "军工",
        "change_pct": -0.0
      },
      {
        "name": "碳纤维",
        "change_pct": -0.21
      },
      {
        "name": "无人机",
        "change_pct": -0.43
      },
      {
        "name": "航天",
        "change_pct": 0.12
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.41
      },
      {
        "name": "低空经济",
        "change_pct": -0.18
      },
      {
        "name": "海洋经济",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 72,
    "hot_rank_chg": -18,
    "stock_cnt": 5880,
    "price": "6.47",
    "change": "-6.50",
    "market_id": "17",
    "circulate_market_value": "7001825300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.47
      },
      {
        "name": "农业种植",
        "change_pct": -4.58
      },
      {
        "name": "化肥",
        "change_pct": -1.0
      },
      {
        "name": "转基因",
        "change_pct": -5.12
      },
      {
        "name": "土地流转",
        "change_pct": -3.11
      },
      {
        "name": "农垦",
        "change_pct": -3.21
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.92
      },
      {
        "name": "大农业",
        "change_pct": -1.77
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "大豆",
        "change_pct": -4.14
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 79,
    "hot_rank_chg": 3,
    "stock_cnt": 5880,
    "price": "9.97",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4313756300.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "5",
    "change_reason": "超跌反弹",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "光伏",
        "change_pct": 0.26
      },
      {
        "name": "无线耳机",
        "change_pct": 0.55
      },
      {
        "name": "华为产业链",
        "change_pct": -0.1
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.26
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 80,
    "hot_rank_chg": 51,
    "stock_cnt": 5880,
    "price": "9.52",
    "change": "3.14",
    "market_id": "17",
    "circulate_market_value": "6209667000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.66
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.08
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.48
      },
      {
        "name": "新零售",
        "change_pct": -1.47
      },
      {
        "name": "移动支付",
        "change_pct": 1.0
      },
      {
        "name": "京津冀",
        "change_pct": -1.1
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.99
      },
      {
        "name": "国产芯片",
        "change_pct": 0.47
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.98
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.5
      },
      {
        "name": "物业管理",
        "change_pct": -1.81
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.99
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "数字人民币",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 82,
    "hot_rank_chg": 36,
    "stock_cnt": 5880,
    "price": "6.12",
    "change": "-1.29",
    "market_id": "17",
    "circulate_market_value": "26190098000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -4.58
      },
      {
        "name": "橡胶",
        "change_pct": 0.98
      },
      {
        "name": "土地流转",
        "change_pct": -3.11
      },
      {
        "name": "农垦",
        "change_pct": -3.21
      },
      {
        "name": "海南概念",
        "change_pct": -1.5
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.33
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -2.0
      },
      {
        "name": "大农业",
        "change_pct": -1.77
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.75
      },
      {
        "name": "大消费",
        "change_pct": -1.99
      },
      {
        "name": "免税店概念",
        "change_pct": -1.78
      },
      {
        "name": "自贸区",
        "change_pct": -1.15
      }
    ]
  },
  {
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 84,
    "hot_rank_chg": 48,
    "stock_cnt": 5880,
    "price": "3.29",
    "change": "-6.80",
    "market_id": "33",
    "circulate_market_value": "5904951400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "啤酒",
        "change_pct": -2.82
      },
      {
        "name": "调味品",
        "change_pct": -1.97
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.13
      },
      {
        "name": "白糖",
        "change_pct": -3.42
      },
      {
        "name": "食品",
        "change_pct": -2.58
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -2.47
      },
      {
        "name": "物业管理",
        "change_pct": -1.81
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "饮料",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 94,
    "hot_rank_chg": 17,
    "stock_cnt": 5880,
    "price": "9.99",
    "change": "-6.20",
    "market_id": "17",
    "circulate_market_value": "7400368200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.97
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "光通信",
        "change_pct": 1.6
      },
      {
        "name": "京津冀",
        "change_pct": -1.1
      },
      {
        "name": "土地流转",
        "change_pct": -3.11
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.99
      },
      {
        "name": "物业管理",
        "change_pct": -1.81
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 96,
    "hot_rank_chg": -31,
    "stock_cnt": 5880,
    "price": "5.92",
    "change": "-2.15",
    "market_id": "17",
    "circulate_market_value": "73384848000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.47
      },
      {
        "name": "核电",
        "change_pct": -0.06
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.85
      },
      {
        "name": "水电",
        "change_pct": -0.82
      },
      {
        "name": "火电",
        "change_pct": -0.87
      },
      {
        "name": "光伏",
        "change_pct": 0.26
      },
      {
        "name": "风电",
        "change_pct": -0.47
      },
      {
        "name": "国企改革",
        "change_pct": -0.74
      },
      {
        "name": "算电协同",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 97,
    "hot_rank_chg": 423,
    "stock_cnt": 5880,
    "price": "9.74",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "3076708100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "回购",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.47
      },
      {
        "name": "冷链",
        "change_pct": -0.59
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.31
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.36
      },
      {
        "name": "首发经济",
        "change_pct": -1.74
      }
    ]
  },
  {
    "code": "601011",
    "name": "宝泰隆",
    "hot_rank": 99,
    "hot_rank_chg": -3,
    "stock_cnt": 5880,
    "price": "2.88",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "5517113900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.29
      },
      {
        "name": "锂电池",
        "change_pct": 1.17
      },
      {
        "name": "甲醇",
        "change_pct": -0.43
      },
      {
        "name": "石墨烯",
        "change_pct": -0.04
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.1
      },
      {
        "name": "石墨电极",
        "change_pct": -0.32
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.43
      },
      {
        "name": "煤化工",
        "change_pct": -0.48
      },
      {
        "name": "碳基材料",
        "change_pct": 0.42
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.1
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600664", "name": "哈药股份", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5880, "price": "8.42", "change": "-7.27", "market_id": "17", "circulate_market_value": "21205853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.12}, {"name": "工业大麻", "change_pct": -1.6}, {"name": "中药", "change_pct": -3.25}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "保健品", "change_pct": -3.02}, {"name": "民营医院", "change_pct": -2.36}, {"name": "医药", "change_pct": -3.28}, {"name": "化学原料药", "change_pct": -3.41}, {"name": "流感", "change_pct": -2.9}, {"name": "振兴东北", "change_pct": -1.3}, {"name": "食品", "change_pct": -2.58}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5880, "price": "673.62", "change": "-1.94", "market_id": "17", "circulate_market_value": "20268593000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 3, "hot_rank_chg": 10, "stock_cnt": 5880, "price": "8.43", "change": "-1.98", "market_id": "17", "circulate_market_value": "5410232500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -2.29}, {"name": "农业种植", "change_pct": -4.58}, {"name": "湖南国企改革", "change_pct": -0.68}, {"name": "乡村振兴", "change_pct": -1.92}, {"name": "休闲食品", "change_pct": -2.63}, {"name": "食品", "change_pct": -2.58}, {"name": "食品安全", "change_pct": -1.37}, {"name": "社区团购", "change_pct": -2.03}, {"name": "大农业", "change_pct": -1.77}, {"name": "预制菜", "change_pct": -1.98}, {"name": "人造肉", "change_pct": -2.64}, {"name": "国企改革", "change_pct": -0.74}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 4, "hot_rank_chg": 14, "stock_cnt": 5880, "price": "8.69", "change": "1.52", "market_id": "17", "circulate_market_value": "4165290600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.25}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "医药商业", "change_pct": -3.73}, {"name": "医药", "change_pct": -3.28}, {"name": "流感", "change_pct": -2.9}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5880, "price": "31.55", "change": "-9.99", "market_id": "17", "circulate_market_value": "12651550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 6, "hot_rank_chg": 6, "stock_cnt": 5880, "price": "20.01", "change": "3.84", "market_id": "33", "circulate_market_value": "23541141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 7, "hot_rank_chg": -2, "stock_cnt": 5880, "price": "62.06", "change": "0.07", "market_id": "17", "circulate_market_value": "152273290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5880, "price": "27.26", "change": "-4.68", "market_id": "17", "circulate_market_value": "6604280200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "54.01", "change": "1.73", "market_id": "33", "circulate_market_value": "61975933000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300142", "name": "沃森生物", "hot_rank": 10, "hot_rank_chg": 24, "stock_cnt": 5880, "price": "15.73", "change": "3.90", "market_id": "33", "circulate_market_value": "24773422000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 11, "hot_rank_chg": -3, "stock_cnt": 5880, "price": "55.05", "change": "-2.84", "market_id": "17", "circulate_market_value": "46602761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5880, "price": "4.44", "change": "-5.92", "market_id": "33", "circulate_market_value": "9345684600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.25}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "维生素", "change_pct": -1.53}, {"name": "基因测序", "change_pct": -2.03}, {"name": "民营医院", "change_pct": -2.36}, {"name": "医药", "change_pct": -3.28}, {"name": "化学原料药", "change_pct": -3.41}, {"name": "PD-1抑制剂", "change_pct": -4.74}]}, {"code": "002412", "name": "汉森制药", "hot_rank": 13, "hot_rank_chg": 38, "stock_cnt": 5880, "price": "10.19", "change": "10.04", "market_id": "33", "circulate_market_value": "5073040600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": -3.25}, {"name": "优化生育（三孩）", "change_pct": -2.21}, {"name": "农业种植", "change_pct": -4.58}, {"name": "医药", "change_pct": -3.28}, {"name": "流感", "change_pct": -2.9}, {"name": "大农业", "change_pct": -1.77}]}, {"code": "600721", "name": "百花医药", "hot_rank": 14, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "13.28", "change": "-2.78", "market_id": "17", "circulate_market_value": "5106792600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 15, "hot_rank_chg": -8, "stock_cnt": 5880, "price": "58.27", "change": "1.22", "market_id": "17", "circulate_market_value": "262392080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 16, "hot_rank_chg": -10, "stock_cnt": 5880, "price": "79.15", "change": "-0.41", "market_id": "17", "circulate_market_value": "141632160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 17, "hot_rank_chg": -8, "stock_cnt": 5880, "price": "5.12", "change": "-7.75", "market_id": "33", "circulate_market_value": "13538526000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.19}, {"name": "装修装饰", "change_pct": -0.89}, {"name": "装配式建筑", "change_pct": -1.08}, {"name": "航天", "change_pct": 0.12}, {"name": "旧改", "change_pct": -1.16}]}, {"code": "603881", "name": "数据港", "hot_rank": 18, "hot_rank_chg": 14, "stock_cnt": 5880, "price": "28.00", "change": "-7.29", "market_id": "17", "circulate_market_value": "24137467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 19, "hot_rank_chg": 5, "stock_cnt": 5880, "price": "406.33", "change": "0.71", "market_id": "17", "circulate_market_value": "271648380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 20, "hot_rank_chg": 8, "stock_cnt": 5880, "price": "34.44", "change": "1.80", "market_id": "17", "circulate_market_value": "709525760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 21, "hot_rank_chg": 24, "stock_cnt": 5880, "price": "14.80", "change": "-3.21", "market_id": "33", "circulate_market_value": "8634496000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 22, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "164.80", "change": "-1.88", "market_id": "17", "circulate_market_value": "407448190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 23, "hot_rank_chg": 24, "stock_cnt": 5880, "price": "6.94", "change": "-7.33", "market_id": "17", "circulate_market_value": "7914363200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.36}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "光伏", "change_pct": 0.26}, {"name": "特高压", "change_pct": -0.32}, {"name": "智能电网", "change_pct": -0.38}]}, {"code": "600667", "name": "太极实业", "hot_rank": 24, "hot_rank_chg": -9, "stock_cnt": 5880, "price": "21.44", "change": "1.18", "market_id": "17", "circulate_market_value": "44884495000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 25, "hot_rank_chg": 6, "stock_cnt": 5880, "price": "41.24", "change": "-0.43", "market_id": "17", "circulate_market_value": "163788250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 26, "hot_rank_chg": -3, "stock_cnt": 5880, "price": "80.56", "change": "7.71", "market_id": "17", "circulate_market_value": "10527033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 27, "hot_rank_chg": 3, "stock_cnt": 5880, "price": "928.41", "change": "2.68", "market_id": "33", "circulate_market_value": "1030479190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 28, "hot_rank_chg": -1, "stock_cnt": 5880, "price": "55.00", "change": "-3.58", "market_id": "33", "circulate_market_value": "20267681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 29, "hot_rank_chg": -15, "stock_cnt": 5880, "price": "5.91", "change": "0.17", "market_id": "33", "circulate_market_value": "209019760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.65}, {"name": "手机产业链", "change_pct": 0.59}, {"name": "超高清视频", "change_pct": -0.59}, {"name": "苹果产业链", "change_pct": 0.9}, {"name": "电竞", "change_pct": -1.19}, {"name": "半导体", "change_pct": 0.61}, {"name": "人工智能", "change_pct": -0.87}, {"name": "互联网医疗", "change_pct": -2.21}, {"name": "VR&AR", "change_pct": -0.11}, {"name": "OLED", "change_pct": 0.19}, {"name": "京津冀", "change_pct": -1.1}, {"name": "物联网", "change_pct": -0.38}, {"name": "指纹识别", "change_pct": 1.25}, {"name": "汽车零部件", "change_pct": -0.34}, {"name": "白马股", "change_pct": -0.47}, {"name": "智能制造", "change_pct": -0.16}, {"name": "小米概念股", "change_pct": 0.08}, {"name": "国产芯片", "change_pct": 0.47}, {"name": "液晶面板/LCD", "change_pct": -0.53}, {"name": "全息概念", "change_pct": -0.74}, {"name": "理想汽车概念股", "change_pct": -0.27}, {"name": "MicroLED", "change_pct": -0.26}, {"name": "钙钛矿电池", "change_pct": 0.53}, {"name": "智能手表", "change_pct": 0.23}, {"name": "MiniLED", "change_pct": -0.21}, {"name": "传感器", "change_pct": 0.06}, {"name": "大硅片", "change_pct": -0.04}, {"name": "AI PC", "change_pct": 0.31}, {"name": "华为产业链", "change_pct": -0.1}, {"name": "回购", "change_pct": -0.78}, {"name": "光电共封装CPO", "change_pct": 1.42}, {"name": "智能眼镜/MR头显", "change_pct": 0.1}, {"name": "玻璃基板封装", "change_pct": 0.24}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 30, "hot_rank_chg": -13, "stock_cnt": 5880, "price": "13.17", "change": "-0.53", "market_id": "17", "circulate_market_value": "8959810100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 31, "hot_rank_chg": -6, "stock_cnt": 5880, "price": "10.76", "change": "-9.96", "market_id": "33", "circulate_market_value": "3061022100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.16}, {"name": "ST摘帽", "change_pct": -0.9}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "教育", "change_pct": -1.35}, {"name": "阿里巴巴概念股", "change_pct": -0.98}, {"name": "职业教育", "change_pct": -1.57}, {"name": "在线教育", "change_pct": -1.22}, {"name": "华为鸿蒙", "change_pct": -1.0}, {"name": "华为产业链", "change_pct": -0.1}, {"name": "智谱AI", "change_pct": -1.16}]}, {"code": "603629", "name": "利通电子", "hot_rank": 32, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "128.62", "change": "-1.49", "market_id": "17", "circulate_market_value": "46396244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 33, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "19.12", "change": "-3.68", "market_id": "33", "circulate_market_value": "64276582000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 34, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "36.34", "change": "0.92", "market_id": "33", "circulate_market_value": "39280571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 35, "hot_rank_chg": -6, "stock_cnt": 5880, "price": "102.20", "change": "-1.30", "market_id": "33", "circulate_market_value": "66746771000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 36, "hot_rank_chg": 0, "stock_cnt": 5880, "price": "36.04", "change": "1.07", "market_id": "33", "circulate_market_value": "103077019000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 37, "hot_rank_chg": -11, "stock_cnt": 5880, "price": "13.38", "change": "-0.45", "market_id": "17", "circulate_market_value": "17169197000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002038", "name": "双鹭药业", "hot_rank": 38, "hot_rank_chg": 82, "stock_cnt": 5880, "price": "7.08", "change": "9.94", "market_id": "33", "circulate_market_value": "6031532100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "mRNA平台", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.6}, {"name": "创新药", "change_pct": -3.47}, {"name": "基因测序", "change_pct": -2.03}, {"name": "民营医院", "change_pct": -2.36}, {"name": "医药", "change_pct": -3.28}, {"name": "疫苗", "change_pct": -2.69}, {"name": "化学原料药", "change_pct": -3.41}, {"name": "流感", "change_pct": -2.9}, {"name": "长寿药NMN", "change_pct": -3.4}, {"name": "辅助生殖", "change_pct": -2.21}, {"name": "肝素", "change_pct": -3.04}, {"name": "基因编辑", "change_pct": -2.53}, {"name": "肝炎概念", "change_pct": -3.05}, {"name": "医美", "change_pct": -2.38}, {"name": "阿尔茨海默病", "change_pct": -2.99}, {"name": "新冠病毒防治", "change_pct": -1.85}, {"name": "肿瘤疫苗", "change_pct": -0.13}, {"name": "减肥药", "change_pct": -4.1}]}, {"code": "300570", "name": "太辰光", "hot_rank": 39, "hot_rank_chg": -6, "stock_cnt": 5880, "price": "219.00", "change": "2.62", "market_id": "33", "circulate_market_value": "42088301000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 40, "hot_rank_chg": 9, "stock_cnt": 5880, "price": "16.50", "change": "-9.98", "market_id": "17", "circulate_market_value": "2640000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002900", "name": "哈三联", "hot_rank": 41, "hot_rank_chg": 7, "stock_cnt": 5880, "price": "13.77", "change": "-10.00", "market_id": "33", "circulate_market_value": "2218655400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600536", "name": "中国软件", "hot_rank": 42, "hot_rank_chg": 30, "stock_cnt": 5880, "price": "34.04", "change": "-5.34", "market_id": "17", "circulate_market_value": "28709610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 43, "hot_rank_chg": 60, "stock_cnt": 5880, "price": "54.08", "change": "-6.14", "market_id": "33", "circulate_market_value": "14967419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000505", "name": "京粮控股", "hot_rank": 44, "hot_rank_chg": 17, "stock_cnt": 5880, "price": "6.81", "change": "-9.08", "market_id": "33", "circulate_market_value": "4306510100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": -1.45}, {"name": "京津冀", "change_pct": -1.1}, {"name": "调味品", "change_pct": -1.97}, {"name": "海南概念", "change_pct": -1.5}, {"name": "休闲食品", "change_pct": -2.63}, {"name": "食品", "change_pct": -2.58}, {"name": "人造肉", "change_pct": -2.64}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 45, "hot_rank_chg": -5, "stock_cnt": 5880, "price": "32.88", "change": "0.34", "market_id": "33", "circulate_market_value": "25726468000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 46, "hot_rank_chg": 9, "stock_cnt": 5880, "price": "4.16", "change": "-5.86", "market_id": "33", "circulate_market_value": "3198288300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.25}, {"name": "股权转让", "change_pct": -0.29}, {"name": "优化生育（三孩）", "change_pct": -2.21}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "医药商业", "change_pct": -3.73}, {"name": "保健品", "change_pct": -3.02}, {"name": "民营医院", "change_pct": -2.36}, {"name": "医药", "change_pct": -3.28}, {"name": "食品", "change_pct": -2.58}, {"name": "辅助生殖", "change_pct": -2.21}, {"name": "口腔", "change_pct": -2.01}, {"name": "医美", "change_pct": -2.38}, {"name": "新冠病毒防治", "change_pct": -1.85}]}, {"code": "002384", "name": "东山精密", "hot_rank": 47, "hot_rank_chg": -9, "stock_cnt": 5880, "price": "201.85", "change": "2.12", "market_id": "33", "circulate_market_value": "279829040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 48, "hot_rank_chg": 11, "stock_cnt": 5880, "price": "36.35", "change": "2.98", "market_id": "17", "circulate_market_value": "131385016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 49, "hot_rank_chg": 17, "stock_cnt": 5880, "price": "7.47", "change": "-4.11", "market_id": "33", "circulate_market_value": "5435053900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.59}, {"name": "装配式建筑", "change_pct": -1.08}, {"name": "风电", "change_pct": -0.47}, {"name": "环氧丙烷", "change_pct": 0.02}, {"name": "乡村振兴", "change_pct": -1.92}, {"name": "建筑节能", "change_pct": -0.96}, {"name": "旧改", "change_pct": -1.16}]}, {"code": "603538", "name": "美诺华", "hot_rank": 50, "hot_rank_chg": -7, "stock_cnt": 5880, "price": "28.51", "change": "-10.01", "market_id": "17", "circulate_market_value": "9605587800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603801", "name": "志邦家居", "hot_rank": 51, "hot_rank_chg": 82, "stock_cnt": 5880, "price": "7.38", "change": "2.08", "market_id": "17", "circulate_market_value": "3205513900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "家具家居", "change_pct": -1.08}]}, {"code": "300502", "name": "新易盛", "hot_rank": 52, "hot_rank_chg": 25, "stock_cnt": 5880, "price": "437.06", "change": "5.56", "market_id": "33", "circulate_market_value": "548141890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603395", "name": "红四方", "hot_rank": 53, "hot_rank_chg": 9, "stock_cnt": 5880, "price": "27.58", "change": "-9.99", "market_id": "17", "circulate_market_value": "1792700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 54, "hot_rank_chg": -15, "stock_cnt": 5880, "price": "12.01", "change": "-2.44", "market_id": "33", "circulate_market_value": "11209192500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.19}, {"name": "新疆国企改革", "change_pct": -1.08}, {"name": "新疆概念", "change_pct": -0.9}, {"name": "光伏", "change_pct": 0.26}, {"name": "风电", "change_pct": -0.47}, {"name": "储能", "change_pct": 0.29}, {"name": "国企改革", "change_pct": -0.74}]}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 55, "hot_rank_chg": -18, "stock_cnt": 5880, "price": "47.86", "change": "-3.31", "market_id": "17", "circulate_market_value": "305299050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 56, "hot_rank_chg": -21, "stock_cnt": 5880, "price": "14.39", "change": "-1.91", "market_id": "17", "circulate_market_value": "21192251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300122", "name": "智飞生物", "hot_rank": 57, "hot_rank_chg": 37, "stock_cnt": 5880, "price": "13.83", "change": "-4.70", "market_id": "33", "circulate_market_value": "19517426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 58, "hot_rank_chg": -6, "stock_cnt": 5880, "price": "77.75", "change": "-10.00", "market_id": "17", "circulate_market_value": "32372589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 59, "hot_rank_chg": -1, "stock_cnt": 5880, "price": "14.88", "change": "-6.37", "market_id": "17", "circulate_market_value": "31740508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 60, "hot_rank_chg": -18, "stock_cnt": 5880, "price": "6.67", "change": "-6.05", "market_id": "17", "circulate_market_value": "15970627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "国企改革", "change_pct": -0.74}, {"name": "河南国企改革", "change_pct": -0.47}]}, {"code": "000620", "name": "盈新发展", "hot_rank": 61, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "3.14", "change": "-3.38", "market_id": "33", "circulate_market_value": "14669291000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.18}, {"name": "股权转让", "change_pct": -0.29}, {"name": "房地产", "change_pct": -1.97}, {"name": "京津冀", "change_pct": -1.1}, {"name": "旅游", "change_pct": -1.04}, {"name": "国产芯片", "change_pct": 0.47}, {"name": "内存", "change_pct": 0.71}, {"name": "闪存", "change_pct": 0.28}, {"name": "IP经济/谷子经济", "change_pct": -1.36}]}, {"code": "600367", "name": "红星发展", "hot_rank": 62, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "34.77", "change": "-3.12", "market_id": "17", "circulate_market_value": "11195007500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 63, "hot_rank_chg": -19, "stock_cnt": 5880, "price": "64.95", "change": "2.82", "market_id": "33", "circulate_market_value": "98528173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 64, "hot_rank_chg": -23, "stock_cnt": 5880, "price": "33.30", "change": "1.40", "market_id": "17", "circulate_market_value": "113651223000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 65, "hot_rank_chg": -5, "stock_cnt": 5880, "price": "11.18", "change": "1.45", "market_id": "17", "circulate_market_value": "20002566000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.97}, {"name": "纯碱", "change_pct": -0.35}, {"name": "食品", "change_pct": -2.58}, {"name": "土壤修复", "change_pct": -1.01}, {"name": "东数西算/算力", "change_pct": -0.43}, {"name": "OpenClaw概念", "change_pct": -1.04}, {"name": "DeepSeek概念股", "change_pct": -0.7}]}, {"code": "002185", "name": "华天科技", "hot_rank": 66, "hot_rank_chg": -13, "stock_cnt": 5880, "price": "17.37", "change": "0.12", "market_id": "33", "circulate_market_value": "57714461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 67, "hot_rank_chg": -17, "stock_cnt": 5880, "price": "282.04", "change": "2.12", "market_id": "33", "circulate_market_value": "307045150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603626", "name": "科森科技", "hot_rank": 68, "hot_rank_chg": 86, "stock_cnt": 5880, "price": "18.65", "change": "10.03", "market_id": "17", "circulate_market_value": "10348506200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "折叠屏"}, {"code": "002361", "name": "神剑股份", "hot_rank": 69, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "10.25", "change": "0.00", "market_id": "33", "circulate_market_value": "8292444600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -0.04}, {"name": "大飞机", "change_pct": -0.12}, {"name": "北斗导航", "change_pct": -0.32}, {"name": "高铁轨交", "change_pct": -0.32}, {"name": "军民融合", "change_pct": 0.02}, {"name": "磁悬浮", "change_pct": -0.54}, {"name": "军工", "change_pct": -0.0}, {"name": "碳纤维", "change_pct": -0.21}, {"name": "无人机", "change_pct": -0.43}, {"name": "航天", "change_pct": 0.12}, {"name": "卫星互联网", "change_pct": 0.41}, {"name": "低空经济", "change_pct": -0.18}, {"name": "海洋经济", "change_pct": -0.14}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 70, "hot_rank_chg": -24, "stock_cnt": 5880, "price": "39.70", "change": "2.19", "market_id": "17", "circulate_market_value": "58041194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603958", "name": "哈森股份", "hot_rank": 71, "hot_rank_chg": 66, "stock_cnt": 5880, "price": "20.55", "change": "10.01", "market_id": "17", "circulate_market_value": "4507848000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "苹果产业链"}, {"code": "600313", "name": "农发种业", "hot_rank": 72, "hot_rank_chg": -18, "stock_cnt": 5880, "price": "6.47", "change": "-6.50", "market_id": "17", "circulate_market_value": "7001825300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.47}, {"name": "农业种植", "change_pct": -4.58}, {"name": "化肥", "change_pct": -1.0}, {"name": "转基因", "change_pct": -5.12}, {"name": "土地流转", "change_pct": -3.11}, {"name": "农垦", "change_pct": -3.21}, {"name": "乡村振兴", "change_pct": -1.92}, {"name": "大农业", "change_pct": -1.77}, {"name": "国企改革", "change_pct": -0.74}, {"name": "大豆", "change_pct": -4.14}]}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 73, "hot_rank_chg": 7, "stock_cnt": 5880, "price": "49.35", "change": "7.05", "market_id": "17", "circulate_market_value": "82114027000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 74, "hot_rank_chg": -4, "stock_cnt": 5880, "price": "402.05", "change": "0.99", "market_id": "33", "circulate_market_value": "66349931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 75, "hot_rank_chg": -19, "stock_cnt": 5880, "price": "61.58", "change": "0.23", "market_id": "17", "circulate_market_value": "72817681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002365", "name": "永安药业", "hot_rank": 76, "hot_rank_chg": 30, "stock_cnt": 5880, "price": "15.39", "change": "-2.28", "market_id": "33", "circulate_market_value": "3777442400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 77, "hot_rank_chg": 66, "stock_cnt": 5880, "price": "38.61", "change": "4.10", "market_id": "33", "circulate_market_value": "58247825000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 78, "hot_rank_chg": -10, "stock_cnt": 5880, "price": "19.81", "change": "1.85", "market_id": "33", "circulate_market_value": "18397685000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 79, "hot_rank_chg": 3, "stock_cnt": 5880, "price": "9.97", "change": "10.04", "market_id": "17", "circulate_market_value": "4313756300.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "超跌反弹", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "光伏", "change_pct": 0.26}, {"name": "无线耳机", "change_pct": 0.55}, {"name": "华为产业链", "change_pct": -0.1}, {"name": "光伏胶膜", "change_pct": -0.26}]}, {"code": "603123", "name": "翠微股份", "hot_rank": 80, "hot_rank_chg": 51, "stock_cnt": 5880, "price": "9.52", "change": "3.14", "market_id": "17", "circulate_market_value": "6209667000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.66}, {"name": "蚂蚁集团概念股", "change_pct": -0.08}, {"name": "无人驾驶", "change_pct": -0.48}, {"name": "新零售", "change_pct": -1.47}, {"name": "移动支付", "change_pct": 1.0}, {"name": "京津冀", "change_pct": -1.1}, {"name": "北京城市规划", "change_pct": -1.99}, {"name": "国产芯片", "change_pct": 0.47}, {"name": "阿里巴巴概念股", "change_pct": -0.98}, {"name": "腾讯概念股", "change_pct": -0.5}, {"name": "物业管理", "change_pct": -1.81}, {"name": "字节跳动概念股", "change_pct": -0.99}, {"name": "国企改革", "change_pct": -0.74}, {"name": "数字人民币", "change_pct": 0.83}]}, {"code": "000426", "name": "兴业银锡", "hot_rank": 81, "hot_rank_chg": 45, "stock_cnt": 5880, "price": "40.08", "change": "3.94", "market_id": "33", "circulate_market_value": "71150235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 82, "hot_rank_chg": 36, "stock_cnt": 5880, "price": "6.12", "change": "-1.29", "market_id": "17", "circulate_market_value": "26190098000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -4.58}, {"name": "橡胶", "change_pct": 0.98}, {"name": "土地流转", "change_pct": -3.11}, {"name": "农垦", "change_pct": -3.21}, {"name": "海南概念", "change_pct": -1.5}, {"name": "自由贸易港", "change_pct": -1.33}, {"name": "海南自由贸易港", "change_pct": -2.0}, {"name": "大农业", "change_pct": -1.77}, {"name": "可降解塑料", "change_pct": -0.75}, {"name": "大消费", "change_pct": -1.99}, {"name": "免税店概念", "change_pct": -1.78}, {"name": "自贸区", "change_pct": -1.15}]}, {"code": "601318", "name": "中国平安", "hot_rank": 83, "hot_rank_chg": 57, "stock_cnt": 5880, "price": "53.16", "change": "1.96", "market_id": "17", "circulate_market_value": "566689060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000523", "name": "红棉股份", "hot_rank": 84, "hot_rank_chg": 48, "stock_cnt": 5880, "price": "3.29", "change": "-6.80", "market_id": "33", "circulate_market_value": "5904951400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "啤酒", "change_pct": -2.82}, {"name": "调味品", "change_pct": -1.97}, {"name": "粤港澳大湾区", "change_pct": -1.13}, {"name": "白糖", "change_pct": -3.42}, {"name": "食品", "change_pct": -2.58}, {"name": "甜味剂/代糖", "change_pct": -2.47}, {"name": "物业管理", "change_pct": -1.81}, {"name": "国企改革", "change_pct": -0.74}, {"name": "饮料", "change_pct": -2.5}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 85, "hot_rank_chg": 0, "stock_cnt": 5880, "price": "360.25", "change": "0.71", "market_id": "17", "circulate_market_value": "146383380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 86, "hot_rank_chg": 6, "stock_cnt": 5880, "price": "35.70", "change": "7.27", "market_id": "33", "circulate_market_value": "23801774000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 87, "hot_rank_chg": -20, "stock_cnt": 5880, "price": "16.28", "change": "-1.93", "market_id": "17", "circulate_market_value": "36131063000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 88, "hot_rank_chg": 3, "stock_cnt": 5880, "price": "66.72", "change": "3.52", "market_id": "33", "circulate_market_value": "96974318000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 89, "hot_rank_chg": -10, "stock_cnt": 5880, "price": "75.81", "change": "0.97", "market_id": "33", "circulate_market_value": "111200519000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 90, "hot_rank_chg": -9, "stock_cnt": 5880, "price": "62.38", "change": "0.39", "market_id": "17", "circulate_market_value": "1237676040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 91, "hot_rank_chg": -18, "stock_cnt": 5880, "price": "185.68", "change": "3.68", "market_id": "17", "circulate_market_value": "51171249000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300765", "name": "石药创新", "hot_rank": 92, "hot_rank_chg": 1, "stock_cnt": 5880, "price": "49.86", "change": "-3.71", "market_id": "33", "circulate_market_value": "70033004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 93, "hot_rank_chg": -19, "stock_cnt": 5880, "price": "17.29", "change": "1.76", "market_id": "17", "circulate_market_value": "13619882000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 94, "hot_rank_chg": 17, "stock_cnt": 5880, "price": "9.99", "change": "-6.20", "market_id": "17", "circulate_market_value": "7400368200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.97}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "光通信", "change_pct": 1.6}, {"name": "京津冀", "change_pct": -1.1}, {"name": "土地流转", "change_pct": -3.11}, {"name": "北京城市规划", "change_pct": -1.99}, {"name": "物业管理", "change_pct": -1.81}, {"name": "国企改革", "change_pct": -0.74}]}, {"code": "002821", "name": "凯莱英", "hot_rank": 95, "hot_rank_chg": -24, "stock_cnt": 5880, "price": "171.63", "change": "-5.98", "market_id": "33", "circulate_market_value": "54373022000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 96, "hot_rank_chg": -31, "stock_cnt": 5880, "price": "5.92", "change": "-2.15", "market_id": "17", "circulate_market_value": "73384848000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.47}, {"name": "核电", "change_pct": -0.06}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "电力体制改革", "change_pct": -0.85}, {"name": "水电", "change_pct": -0.82}, {"name": "火电", "change_pct": -0.87}, {"name": "光伏", "change_pct": 0.26}, {"name": "风电", "change_pct": -0.47}, {"name": "国企改革", "change_pct": -0.74}, {"name": "算电协同", "change_pct": -0.1}]}, {"code": "600785", "name": "新华百货", "hot_rank": 97, "hot_rank_chg": 423, "stock_cnt": 5880, "price": "9.74", "change": "10.06", "market_id": "17", "circulate_market_value": "3076708100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "回购", "xgb_concepts": [{"name": "新零售", "change_pct": -1.47}, {"name": "冷链", "change_pct": -0.59}, {"name": "宁夏概念", "change_pct": 0.31}, {"name": "IP经济/谷子经济", "change_pct": -1.36}, {"name": "首发经济", "change_pct": -1.74}]}, {"code": "600183", "name": "生益科技", "hot_rank": 98, "hot_rank_chg": -20, "stock_cnt": 5880, "price": "131.27", "change": "4.06", "market_id": "17", "circulate_market_value": "316927920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601011", "name": "宝泰隆", "hot_rank": 99, "hot_rank_chg": -3, "stock_cnt": 5880, "price": "2.88", "change": "-10.00", "market_id": "17", "circulate_market_value": "5517113900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.29}, {"name": "锂电池", "change_pct": 1.17}, {"name": "甲醇", "change_pct": -0.43}, {"name": "石墨烯", "change_pct": -0.04}, {"name": "氢能源/燃料电池", "change_pct": -0.1}, {"name": "石墨电极", "change_pct": -0.32}, {"name": "新能源汽车", "change_pct": 0.43}, {"name": "煤化工", "change_pct": -0.48}, {"name": "碳基材料", "change_pct": 0.42}, {"name": "智能眼镜/MR头显", "change_pct": 0.1}]}, {"code": "605358", "name": "立昂微", "hot_rank": 100, "hot_rank_chg": 134, "stock_cnt": 5880, "price": "44.13", "change": "0.64", "market_id": "17", "circulate_market_value": "34077158000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};