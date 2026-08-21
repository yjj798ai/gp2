const UPDATE_TIME = "2026-08-21 04:32";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 1.24,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续275天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -3.47,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "黄金概念",
    "rise": 1.46,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "数字货币",
    "rise": 1.02,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "存储芯片",
    "rise": 0.23,
    "rate": 0,
    "tag": "",
    "hotTag": "连续228天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "MLCC概念",
    "rise": 1.41,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新动力LOF",
    "code": "886112"
  },
  {
    "name": "PCB概念",
    "rise": 0.55,
    "rate": 0,
    "tag": "",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": 0.15,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续204天上榜",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886078"
  },
  {
    "name": "算力租赁",
    "rise": -0.42,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": 0.55,
    "rate": 0,
    "tag": "",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "人形机器人",
    "rise": 0.28,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续439天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "粮食概念",
    "rise": -3.53,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885995"
  },
  {
    "name": "液冷服务器",
    "rise": 0.81,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "AI应用",
    "rise": -0.79,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": -1,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "生物疫苗",
    "rise": -2.91,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885845"
  },
  {
    "name": "芯片概念",
    "rise": 0.31,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "F5G概念",
    "rise": 1.75,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "885998"
  },
  {
    "name": "ST板块",
    "rise": 0.35,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "机器人概念",
    "rise": -0.03,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.47,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  }
];
const THS_EVENTS = [
  {
    "title": "阿里财报：AI云收入增长45%，增速创22个季度新高",
    "desc": "",
    "heat": 285133,
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
    "heat": 261090,
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
    "heat": 193949,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "深科达",
        "code": "688328",
        "chg": 14.545215
      }
    ]
  },
  {
    "title": "苹果9月9日将发布iPhone 18 Pro/Pro Max及首款折叠屏iPhone Ultra",
    "desc": "",
    "heat": 113109,
    "direction": "苹果折叠屏手机",
    "themes": [
      "苹果概念",
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "深科达",
        "code": "688328",
        "chg": 14.545215
      }
    ]
  },
  {
    "title": "《上海市城市更新和住房发展“十五五”规划》印发",
    "desc": "",
    "heat": 87486,
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
    "title": "特朗普签署备忘录以促进美航天发射 探索商业机器人登陆火星",
    "desc": "",
    "heat": 65251,
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
        "name": "长江通信",
        "code": "600345",
        "chg": 3.521739
      }
    ]
  },
  {
    "title": "“六张网”拉动投资效应显现,上市公司积极布局抢抓机遇,3家获机构密集调研",
    "desc": "",
    "heat": 61415,
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
    "title": "抗癌疫苗引爆资本市场 带“飞”A股医药四大赛道",
    "desc": "",
    "heat": 53000,
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
        "name": "康希诺",
        "code": "688185",
        "chg": 20.006208
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "白银",
    "change": "+4.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+3.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+2.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+2.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钼",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+2.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+2.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+2.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+2.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+2.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+2.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+1.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钴",
    "change": "+1.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IGBT",
    "change": "+1.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷酸铁锂",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+1.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+1.66%",
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
    "stock_cnt": 5854,
    "price": "8.29",
    "change": "-8.70",
    "market_id": "17",
    "circulate_market_value": "20878447000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.96
      },
      {
        "name": "工业大麻",
        "change_pct": -1.6
      },
      {
        "name": "中药",
        "change_pct": -3.15
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "保健品",
        "change_pct": -2.83
      },
      {
        "name": "民营医院",
        "change_pct": -2.24
      },
      {
        "name": "医药",
        "change_pct": -3.26
      },
      {
        "name": "化学原料药",
        "change_pct": -3.36
      },
      {
        "name": "流感",
        "change_pct": -2.71
      },
      {
        "name": "振兴东北",
        "change_pct": -1.1
      },
      {
        "name": "食品",
        "change_pct": -2.36
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 3,
    "hot_rank_chg": 10,
    "stock_cnt": 5854,
    "price": "8.40",
    "change": "-2.33",
    "market_id": "17",
    "circulate_market_value": "5390979000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.85
      },
      {
        "name": "农业种植",
        "change_pct": -4.52
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.37
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.73
      },
      {
        "name": "休闲食品",
        "change_pct": -2.26
      },
      {
        "name": "食品",
        "change_pct": -2.36
      },
      {
        "name": "食品安全",
        "change_pct": -1.13
      },
      {
        "name": "社区团购",
        "change_pct": -1.85
      },
      {
        "name": "大农业",
        "change_pct": -1.65
      },
      {
        "name": "预制菜",
        "change_pct": -1.79
      },
      {
        "name": "人造肉",
        "change_pct": -2.48
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 4,
    "hot_rank_chg": 14,
    "stock_cnt": 5854,
    "price": "9.15",
    "change": "6.89",
    "market_id": "17",
    "circulate_market_value": "4385777800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.15
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "医药商业",
        "change_pct": -3.75
      },
      {
        "name": "医药",
        "change_pct": -3.26
      },
      {
        "name": "流感",
        "change_pct": -2.71
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 13,
    "hot_rank_chg": 38,
    "stock_cnt": 5854,
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
        "change_pct": -3.15
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.02
      },
      {
        "name": "农业种植",
        "change_pct": -4.52
      },
      {
        "name": "医药",
        "change_pct": -3.26
      },
      {
        "name": "流感",
        "change_pct": -2.71
      },
      {
        "name": "大农业",
        "change_pct": -1.65
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 15,
    "hot_rank_chg": -6,
    "stock_cnt": 5854,
    "price": "5.13",
    "change": "-7.57",
    "market_id": "33",
    "circulate_market_value": "13564969000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "装修装饰",
        "change_pct": -0.57
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.71
      },
      {
        "name": "航天",
        "change_pct": 0.3
      },
      {
        "name": "旧改",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 17,
    "hot_rank_chg": 2,
    "stock_cnt": 5854,
    "price": "4.36",
    "change": "-7.82",
    "market_id": "33",
    "circulate_market_value": "9156671000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.15
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "维生素",
        "change_pct": -1.47
      },
      {
        "name": "基因测序",
        "change_pct": -2.15
      },
      {
        "name": "民营医院",
        "change_pct": -2.24
      },
      {
        "name": "医药",
        "change_pct": -3.26
      },
      {
        "name": "化学原料药",
        "change_pct": -3.36
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -4.96
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 22,
    "hot_rank_chg": -8,
    "stock_cnt": 5854,
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
        "change_pct": 0.92
      },
      {
        "name": "手机产业链",
        "change_pct": 0.82
      },
      {
        "name": "超高清视频",
        "change_pct": -0.21
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.13
      },
      {
        "name": "电竞",
        "change_pct": -0.85
      },
      {
        "name": "半导体",
        "change_pct": 0.37
      },
      {
        "name": "人工智能",
        "change_pct": -0.69
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.14
      },
      {
        "name": "VR&AR",
        "change_pct": 0.21
      },
      {
        "name": "OLED",
        "change_pct": 0.33
      },
      {
        "name": "京津冀",
        "change_pct": -0.82
      },
      {
        "name": "物联网",
        "change_pct": -0.19
      },
      {
        "name": "指纹识别",
        "change_pct": 1.31
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.14
      },
      {
        "name": "白马股",
        "change_pct": -0.32
      },
      {
        "name": "智能制造",
        "change_pct": 0.12
      },
      {
        "name": "小米概念股",
        "change_pct": 0.24
      },
      {
        "name": "国产芯片",
        "change_pct": 0.43
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.18
      },
      {
        "name": "全息概念",
        "change_pct": -0.54
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.15
      },
      {
        "name": "MicroLED",
        "change_pct": 0.69
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.04
      },
      {
        "name": "智能手表",
        "change_pct": 0.45
      },
      {
        "name": "MiniLED",
        "change_pct": 0.72
      },
      {
        "name": "传感器",
        "change_pct": 0.2
      },
      {
        "name": "大硅片",
        "change_pct": -0.33
      },
      {
        "name": "AI PC",
        "change_pct": 0.53
      },
      {
        "name": "华为产业链",
        "change_pct": 0.11
      },
      {
        "name": "回购",
        "change_pct": -0.69
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.3
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.36
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.46
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 25,
    "hot_rank_chg": 14,
    "stock_cnt": 5854,
    "price": "11.82",
    "change": "-3.98",
    "market_id": "33",
    "circulate_market_value": "11031861400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.21
      },
      {
        "name": "新疆概念",
        "change_pct": -0.76
      },
      {
        "name": "光伏",
        "change_pct": 0.61
      },
      {
        "name": "风电",
        "change_pct": -0.27
      },
      {
        "name": "储能",
        "change_pct": 0.46
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 26,
    "hot_rank_chg": 94,
    "stock_cnt": 5854,
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
        "change_pct": -3.61
      },
      {
        "name": "基因测序",
        "change_pct": -2.15
      },
      {
        "name": "民营医院",
        "change_pct": -2.24
      },
      {
        "name": "医药",
        "change_pct": -3.26
      },
      {
        "name": "疫苗",
        "change_pct": -1.58
      },
      {
        "name": "化学原料药",
        "change_pct": -3.36
      },
      {
        "name": "流感",
        "change_pct": -2.71
      },
      {
        "name": "长寿药NMN",
        "change_pct": -2.93
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.17
      },
      {
        "name": "肝素",
        "change_pct": -2.94
      },
      {
        "name": "基因编辑",
        "change_pct": -2.67
      },
      {
        "name": "肝炎概念",
        "change_pct": -3.11
      },
      {
        "name": "医美",
        "change_pct": -2.42
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -3.23
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.68
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": 0.57
      },
      {
        "name": "减肥药",
        "change_pct": -4.54
      }
    ]
  },
  {
    "code": "003040",
    "name": "楚天龙",
    "hot_rank": 31,
    "hot_rank_chg": 243,
    "stock_cnt": 5854,
    "price": "12.79",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "5843114800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数字人民币",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.45
      },
      {
        "name": "金融科技",
        "change_pct": 0.63
      },
      {
        "name": "人工智能",
        "change_pct": -0.69
      },
      {
        "name": "物联网",
        "change_pct": -0.19
      },
      {
        "name": "数字经济",
        "change_pct": -0.55
      },
      {
        "name": "国产操作系统",
        "change_pct": -0.72
      },
      {
        "name": "电子身份证",
        "change_pct": 1.04
      },
      {
        "name": "数字人民币",
        "change_pct": 1.07
      },
      {
        "name": "智慧政务",
        "change_pct": -0.39
      },
      {
        "name": "eSIM",
        "change_pct": 1.93
      },
      {
        "name": "区块链",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 33,
    "hot_rank_chg": -8,
    "stock_cnt": 5854,
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
        "change_pct": 0.24
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.38
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "教育",
        "change_pct": -1.11
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.91
      },
      {
        "name": "职业教育",
        "change_pct": -1.26
      },
      {
        "name": "在线教育",
        "change_pct": -0.71
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.73
      },
      {
        "name": "华为产业链",
        "change_pct": 0.11
      },
      {
        "name": "智谱AI",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "603801",
    "name": "志邦家居",
    "hot_rank": 36,
    "hot_rank_chg": 97,
    "stock_cnt": 5854,
    "price": "7.50",
    "change": "3.73",
    "market_id": "17",
    "circulate_market_value": "3257636100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "家具家居",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 41,
    "hot_rank_chg": 6,
    "stock_cnt": 5854,
    "price": "6.87",
    "change": "-8.40",
    "market_id": "17",
    "circulate_market_value": "7823262700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.18
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "光伏",
        "change_pct": 0.61
      },
      {
        "name": "特高压",
        "change_pct": -0.21
      },
      {
        "name": "智能电网",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 48,
    "hot_rank_chg": 12,
    "stock_cnt": 5854,
    "price": "11.17",
    "change": "1.36",
    "market_id": "17",
    "circulate_market_value": "19984675000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.89
      },
      {
        "name": "纯碱",
        "change_pct": -0.18
      },
      {
        "name": "食品",
        "change_pct": -2.36
      },
      {
        "name": "土壤修复",
        "change_pct": -0.65
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.43
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.97
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 54,
    "hot_rank_chg": 77,
    "stock_cnt": 5854,
    "price": "9.58",
    "change": "3.79",
    "market_id": "17",
    "circulate_market_value": "6248803600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.45
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.12
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.3
      },
      {
        "name": "新零售",
        "change_pct": -1.45
      },
      {
        "name": "移动支付",
        "change_pct": 1.13
      },
      {
        "name": "京津冀",
        "change_pct": -0.82
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.55
      },
      {
        "name": "国产芯片",
        "change_pct": 0.43
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.91
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.4
      },
      {
        "name": "物业管理",
        "change_pct": -1.5
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.78
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      },
      {
        "name": "数字人民币",
        "change_pct": 1.07
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 57,
    "hot_rank_chg": 295,
    "stock_cnt": 5854,
    "price": "7.11",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3134244100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -0.4
      },
      {
        "name": "锂电池",
        "change_pct": 1.24
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.64
      },
      {
        "name": "两轮车",
        "change_pct": -0.86
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "000710",
    "name": "贝瑞基因",
    "hot_rank": 59,
    "hot_rank_chg": 244,
    "stock_cnt": 5854,
    "price": "10.31",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3397453500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI医疗",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -2.04
      },
      {
        "name": "体外诊断",
        "change_pct": -2.16
      },
      {
        "name": "医疗器械",
        "change_pct": -1.84
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.02
      },
      {
        "name": "人工智能",
        "change_pct": -0.69
      },
      {
        "name": "基因测序",
        "change_pct": -2.15
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.17
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.68
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.59
      },
      {
        "name": "AI医疗",
        "change_pct": -2.51
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 63,
    "hot_rank_chg": -2,
    "stock_cnt": 5854,
    "price": "6.75",
    "change": "-9.88",
    "market_id": "33",
    "circulate_market_value": "4268567300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -1.27
      },
      {
        "name": "京津冀",
        "change_pct": -0.82
      },
      {
        "name": "调味品",
        "change_pct": -1.89
      },
      {
        "name": "海南概念",
        "change_pct": -1.25
      },
      {
        "name": "休闲食品",
        "change_pct": -2.26
      },
      {
        "name": "食品",
        "change_pct": -2.36
      },
      {
        "name": "人造肉",
        "change_pct": -2.48
      }
    ]
  },
  {
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 65,
    "hot_rank_chg": 455,
    "stock_cnt": 5854,
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
        "change_pct": -1.45
      },
      {
        "name": "冷链",
        "change_pct": -0.36
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.79
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.18
      },
      {
        "name": "首发经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "600250",
    "name": "南京商旅",
    "hot_rank": 66,
    "hot_rank_chg": 134,
    "stock_cnt": 5854,
    "price": "9.35",
    "change": "1.19",
    "market_id": "17",
    "circulate_market_value": "2924599600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.96
      },
      {
        "name": "新零售",
        "change_pct": -1.45
      },
      {
        "name": "养老产业",
        "change_pct": -1.62
      },
      {
        "name": "旅游",
        "change_pct": -1.15
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.55
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.88
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 72,
    "hot_rank_chg": -15,
    "stock_cnt": 5854,
    "price": "10.28",
    "change": "0.29",
    "market_id": "33",
    "circulate_market_value": "8316715200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.2
      },
      {
        "name": "大飞机",
        "change_pct": 0.3
      },
      {
        "name": "北斗导航",
        "change_pct": -0.12
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.03
      },
      {
        "name": "军民融合",
        "change_pct": 0.32
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.31
      },
      {
        "name": "军工",
        "change_pct": 0.29
      },
      {
        "name": "碳纤维",
        "change_pct": 0.1
      },
      {
        "name": "无人机",
        "change_pct": -0.16
      },
      {
        "name": "航天",
        "change_pct": 0.3
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.52
      },
      {
        "name": "低空经济",
        "change_pct": 0.03
      },
      {
        "name": "海洋经济",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 76,
    "hot_rank_chg": -34,
    "stock_cnt": 5854,
    "price": "6.69",
    "change": "-5.91",
    "market_id": "17",
    "circulate_market_value": "15994535000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.04
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 81,
    "hot_rank_chg": -26,
    "stock_cnt": 5854,
    "price": "4.09",
    "change": "-7.88",
    "market_id": "33",
    "circulate_market_value": "3129425600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.15
      },
      {
        "name": "股权转让",
        "change_pct": -0.07
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.02
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "医药商业",
        "change_pct": -3.75
      },
      {
        "name": "保健品",
        "change_pct": -2.83
      },
      {
        "name": "民营医院",
        "change_pct": -2.24
      },
      {
        "name": "医药",
        "change_pct": -3.26
      },
      {
        "name": "食品",
        "change_pct": -2.36
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.17
      },
      {
        "name": "口腔",
        "change_pct": -1.7
      },
      {
        "name": "医美",
        "change_pct": -2.42
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.68
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 84,
    "hot_rank_chg": -18,
    "stock_cnt": 5854,
    "price": "7.73",
    "change": "-0.77",
    "market_id": "33",
    "circulate_market_value": "5624225900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.36
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.71
      },
      {
        "name": "风电",
        "change_pct": -0.27
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.18
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.73
      },
      {
        "name": "建筑节能",
        "change_pct": -0.58
      },
      {
        "name": "旧改",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 85,
    "hot_rank_chg": -31,
    "stock_cnt": 5854,
    "price": "6.50",
    "change": "-6.07",
    "market_id": "17",
    "circulate_market_value": "7034291300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.3
      },
      {
        "name": "农业种植",
        "change_pct": -4.52
      },
      {
        "name": "化肥",
        "change_pct": -1.17
      },
      {
        "name": "转基因",
        "change_pct": -4.97
      },
      {
        "name": "土地流转",
        "change_pct": -3.03
      },
      {
        "name": "农垦",
        "change_pct": -3.22
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.73
      },
      {
        "name": "大农业",
        "change_pct": -1.65
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      },
      {
        "name": "大豆",
        "change_pct": -4.07
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 86,
    "hot_rank_chg": -23,
    "stock_cnt": 5854,
    "price": "3.10",
    "change": "-4.62",
    "market_id": "33",
    "circulate_market_value": "14482421000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.47
      },
      {
        "name": "股权转让",
        "change_pct": -0.07
      },
      {
        "name": "房地产",
        "change_pct": -1.7
      },
      {
        "name": "京津冀",
        "change_pct": -0.82
      },
      {
        "name": "旅游",
        "change_pct": -1.15
      },
      {
        "name": "国产芯片",
        "change_pct": 0.43
      },
      {
        "name": "内存",
        "change_pct": 0.47
      },
      {
        "name": "闪存",
        "change_pct": 0.08
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.18
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 92,
    "hot_rank_chg": -27,
    "stock_cnt": 5854,
    "price": "5.90",
    "change": "-2.48",
    "market_id": "17",
    "circulate_market_value": "73136926000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.3
      },
      {
        "name": "核电",
        "change_pct": 0.15
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.75
      },
      {
        "name": "水电",
        "change_pct": -0.74
      },
      {
        "name": "火电",
        "change_pct": -0.85
      },
      {
        "name": "光伏",
        "change_pct": 0.61
      },
      {
        "name": "风电",
        "change_pct": -0.27
      },
      {
        "name": "国企改革",
        "change_pct": -0.57
      },
      {
        "name": "算电协同",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "601011",
    "name": "宝泰隆",
    "hot_rank": 97,
    "hot_rank_chg": -1,
    "stock_cnt": 5854,
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
        "change_pct": -0.04
      },
      {
        "name": "锂电池",
        "change_pct": 1.24
      },
      {
        "name": "甲醇",
        "change_pct": -0.18
      },
      {
        "name": "石墨烯",
        "change_pct": 0.2
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.14
      },
      {
        "name": "石墨电极",
        "change_pct": -0.48
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.64
      },
      {
        "name": "煤化工",
        "change_pct": -0.03
      },
      {
        "name": "碳基材料",
        "change_pct": 0.72
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 100,
    "hot_rank_chg": -18,
    "stock_cnt": 5854,
    "price": "9.97",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4313756300.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "5",
    "change_reason": "CPO",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.07
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "光伏",
        "change_pct": 0.61
      },
      {
        "name": "无线耳机",
        "change_pct": 0.67
      },
      {
        "name": "华为产业链",
        "change_pct": 0.11
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.09
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5854, "price": "693.70", "change": "0.97", "market_id": "17", "circulate_market_value": "20871851000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5854, "price": "8.29", "change": "-8.70", "market_id": "17", "circulate_market_value": "20878447000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.96}, {"name": "工业大麻", "change_pct": -1.6}, {"name": "中药", "change_pct": -3.15}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "保健品", "change_pct": -2.83}, {"name": "民营医院", "change_pct": -2.24}, {"name": "医药", "change_pct": -3.26}, {"name": "化学原料药", "change_pct": -3.36}, {"name": "流感", "change_pct": -2.71}, {"name": "振兴东北", "change_pct": -1.1}, {"name": "食品", "change_pct": -2.36}]}, {"code": "600127", "name": "金健米业", "hot_rank": 3, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "8.40", "change": "-2.33", "market_id": "17", "circulate_market_value": "5390979000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.85}, {"name": "农业种植", "change_pct": -4.52}, {"name": "湖南国企改革", "change_pct": -0.37}, {"name": "乡村振兴", "change_pct": -1.73}, {"name": "休闲食品", "change_pct": -2.26}, {"name": "食品", "change_pct": -2.36}, {"name": "食品安全", "change_pct": -1.13}, {"name": "社区团购", "change_pct": -1.85}, {"name": "大农业", "change_pct": -1.65}, {"name": "预制菜", "change_pct": -1.79}, {"name": "人造肉", "change_pct": -2.48}, {"name": "国企改革", "change_pct": -0.57}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 4, "hot_rank_chg": 14, "stock_cnt": 5854, "price": "9.15", "change": "6.89", "market_id": "17", "circulate_market_value": "4385777800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.15}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "医药商业", "change_pct": -3.75}, {"name": "医药", "change_pct": -3.26}, {"name": "流感", "change_pct": -2.71}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 5, "hot_rank_chg": 7, "stock_cnt": 5854, "price": "21.08", "change": "9.39", "market_id": "33", "circulate_market_value": "24799962000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5854, "price": "31.55", "change": "-9.99", "market_id": "17", "circulate_market_value": "12651550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5854, "price": "58.16", "change": "1.02", "market_id": "17", "circulate_market_value": "261896750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "53.97", "change": "1.66", "market_id": "33", "circulate_market_value": "61930034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "54.03", "change": "-4.64", "market_id": "17", "circulate_market_value": "45739277000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5854, "price": "61.72", "change": "-0.48", "market_id": "17", "circulate_market_value": "151439050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "27.13", "change": "-5.14", "market_id": "17", "circulate_market_value": "6572785100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 12, "hot_rank_chg": 4, "stock_cnt": 5854, "price": "13.15", "change": "-3.73", "market_id": "17", "circulate_market_value": "5056801400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 13, "hot_rank_chg": 38, "stock_cnt": 5854, "price": "10.19", "change": "10.04", "market_id": "33", "circulate_market_value": "5073040600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": -3.15}, {"name": "优化生育（三孩）", "change_pct": -2.02}, {"name": "农业种植", "change_pct": -4.52}, {"name": "医药", "change_pct": -3.26}, {"name": "流感", "change_pct": -2.71}, {"name": "大农业", "change_pct": -1.65}]}, {"code": "300142", "name": "沃森生物", "hot_rank": 14, "hot_rank_chg": 20, "stock_cnt": 5854, "price": "16.64", "change": "10.05", "market_id": "33", "circulate_market_value": "26239959000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 15, "hot_rank_chg": -6, "stock_cnt": 5854, "price": "5.13", "change": "-7.57", "market_id": "33", "circulate_market_value": "13564969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.41}, {"name": "装修装饰", "change_pct": -0.57}, {"name": "装配式建筑", "change_pct": -0.71}, {"name": "航天", "change_pct": 0.3}, {"name": "旧改", "change_pct": -0.82}]}, {"code": "600667", "name": "太极实业", "hot_rank": 16, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "21.33", "change": "0.57", "market_id": "17", "circulate_market_value": "44612595000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "4.36", "change": "-7.82", "market_id": "33", "circulate_market_value": "9156671000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.15}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "维生素", "change_pct": -1.47}, {"name": "基因测序", "change_pct": -2.15}, {"name": "民营医院", "change_pct": -2.24}, {"name": "医药", "change_pct": -3.26}, {"name": "化学原料药", "change_pct": -3.36}, {"name": "PD-1抑制剂", "change_pct": -4.96}]}, {"code": "603259", "name": "药明康德", "hot_rank": 18, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "164.74", "change": "-1.88", "market_id": "17", "circulate_market_value": "407448190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 19, "hot_rank_chg": -13, "stock_cnt": 5854, "price": "78.60", "change": "-1.11", "market_id": "17", "circulate_market_value": "140647990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 20, "hot_rank_chg": 12, "stock_cnt": 5854, "price": "27.88", "change": "-7.68", "market_id": "17", "circulate_market_value": "24034021000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 21, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "80.56", "change": "7.71", "market_id": "17", "circulate_market_value": "10527033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 22, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "5.91", "change": "0.17", "market_id": "33", "circulate_market_value": "209019760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.92}, {"name": "手机产业链", "change_pct": 0.82}, {"name": "超高清视频", "change_pct": -0.21}, {"name": "苹果产业链", "change_pct": 1.13}, {"name": "电竞", "change_pct": -0.85}, {"name": "半导体", "change_pct": 0.37}, {"name": "人工智能", "change_pct": -0.69}, {"name": "互联网医疗", "change_pct": -2.14}, {"name": "VR&AR", "change_pct": 0.21}, {"name": "OLED", "change_pct": 0.33}, {"name": "京津冀", "change_pct": -0.82}, {"name": "物联网", "change_pct": -0.19}, {"name": "指纹识别", "change_pct": 1.31}, {"name": "汽车零部件", "change_pct": 0.14}, {"name": "白马股", "change_pct": -0.32}, {"name": "智能制造", "change_pct": 0.12}, {"name": "小米概念股", "change_pct": 0.24}, {"name": "国产芯片", "change_pct": 0.43}, {"name": "液晶面板/LCD", "change_pct": -0.18}, {"name": "全息概念", "change_pct": -0.54}, {"name": "理想汽车概念股", "change_pct": 0.15}, {"name": "MicroLED", "change_pct": 0.69}, {"name": "钙钛矿电池", "change_pct": 1.04}, {"name": "智能手表", "change_pct": 0.45}, {"name": "MiniLED", "change_pct": 0.72}, {"name": "传感器", "change_pct": 0.2}, {"name": "大硅片", "change_pct": -0.33}, {"name": "AI PC", "change_pct": 0.53}, {"name": "华为产业链", "change_pct": 0.11}, {"name": "回购", "change_pct": -0.69}, {"name": "光电共封装CPO", "change_pct": 1.3}, {"name": "智能眼镜/MR头显", "change_pct": 0.36}, {"name": "玻璃基板封装", "change_pct": 0.46}]}, {"code": "603118", "name": "共进股份", "hot_rank": 23, "hot_rank_chg": 51, "stock_cnt": 5854, "price": "17.44", "change": "2.59", "market_id": "17", "circulate_market_value": "13730101000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 24, "hot_rank_chg": 4, "stock_cnt": 5854, "price": "34.29", "change": "1.36", "market_id": "17", "circulate_market_value": "706435490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 25, "hot_rank_chg": 14, "stock_cnt": 5854, "price": "11.82", "change": "-3.98", "market_id": "33", "circulate_market_value": "11031861400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.41}, {"name": "新疆国企改革", "change_pct": -1.21}, {"name": "新疆概念", "change_pct": -0.76}, {"name": "光伏", "change_pct": 0.61}, {"name": "风电", "change_pct": -0.27}, {"name": "储能", "change_pct": 0.46}, {"name": "国企改革", "change_pct": -0.57}]}, {"code": "002038", "name": "双鹭药业", "hot_rank": 26, "hot_rank_chg": 94, "stock_cnt": 5854, "price": "7.08", "change": "9.94", "market_id": "33", "circulate_market_value": "6031532100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "mRNA平台", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.6}, {"name": "创新药", "change_pct": -3.61}, {"name": "基因测序", "change_pct": -2.15}, {"name": "民营医院", "change_pct": -2.24}, {"name": "医药", "change_pct": -3.26}, {"name": "疫苗", "change_pct": -1.58}, {"name": "化学原料药", "change_pct": -3.36}, {"name": "流感", "change_pct": -2.71}, {"name": "长寿药NMN", "change_pct": -2.93}, {"name": "辅助生殖", "change_pct": -2.17}, {"name": "肝素", "change_pct": -2.94}, {"name": "基因编辑", "change_pct": -2.67}, {"name": "肝炎概念", "change_pct": -3.11}, {"name": "医美", "change_pct": -2.42}, {"name": "阿尔茨海默病", "change_pct": -3.23}, {"name": "新冠病毒防治", "change_pct": -1.68}, {"name": "肿瘤疫苗", "change_pct": 0.57}, {"name": "减肥药", "change_pct": -4.54}]}, {"code": "002579", "name": "中京电子", "hot_rank": 27, "hot_rank_chg": 18, "stock_cnt": 5854, "price": "14.75", "change": "-3.53", "market_id": "33", "circulate_market_value": "8605325400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 28, "hot_rank_chg": 49, "stock_cnt": 5854, "price": "436.50", "change": "5.43", "market_id": "33", "circulate_market_value": "547477140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 29, "hot_rank_chg": -5, "stock_cnt": 5854, "price": "405.84", "change": "0.58", "market_id": "17", "circulate_market_value": "271300770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 30, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "41.30", "change": "-0.29", "market_id": "17", "circulate_market_value": "164026540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 31, "hot_rank_chg": 243, "stock_cnt": 5854, "price": "12.79", "change": "9.97", "market_id": "33", "circulate_market_value": "5843114800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.45}, {"name": "金融科技", "change_pct": 0.63}, {"name": "人工智能", "change_pct": -0.69}, {"name": "物联网", "change_pct": -0.19}, {"name": "数字经济", "change_pct": -0.55}, {"name": "国产操作系统", "change_pct": -0.72}, {"name": "电子身份证", "change_pct": 1.04}, {"name": "数字人民币", "change_pct": 1.07}, {"name": "智慧政务", "change_pct": -0.39}, {"name": "eSIM", "change_pct": 1.93}, {"name": "区块链", "change_pct": -0.05}]}, {"code": "002407", "name": "多氟多", "hot_rank": 32, "hot_rank_chg": -10, "stock_cnt": 5854, "price": "36.13", "change": "0.33", "market_id": "33", "circulate_market_value": "39053578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 33, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "10.76", "change": "-9.96", "market_id": "33", "circulate_market_value": "3061022100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.24}, {"name": "ST摘帽", "change_pct": -0.38}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "教育", "change_pct": -1.11}, {"name": "阿里巴巴概念股", "change_pct": -0.91}, {"name": "职业教育", "change_pct": -1.26}, {"name": "在线教育", "change_pct": -0.71}, {"name": "华为鸿蒙", "change_pct": -0.73}, {"name": "华为产业链", "change_pct": 0.11}, {"name": "智谱AI", "change_pct": -1.04}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 34, "hot_rank_chg": -4, "stock_cnt": 5854, "price": "928.89", "change": "2.73", "market_id": "33", "circulate_market_value": "1031011960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 35, "hot_rank_chg": -18, "stock_cnt": 5854, "price": "13.35", "change": "0.83", "market_id": "17", "circulate_market_value": "9082267700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603801", "name": "志邦家居", "hot_rank": 36, "hot_rank_chg": 97, "stock_cnt": 5854, "price": "7.50", "change": "3.73", "market_id": "17", "circulate_market_value": "3257636100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "家具家居", "change_pct": -0.8}]}, {"code": "002202", "name": "金风科技", "hot_rank": 37, "hot_rank_chg": -16, "stock_cnt": 5854, "price": "19.11", "change": "-3.68", "market_id": "33", "circulate_market_value": "64276582000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 38, "hot_rank_chg": -18, "stock_cnt": 5854, "price": "125.55", "change": "-3.85", "market_id": "17", "circulate_market_value": "45288823000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 39, "hot_rank_chg": -3, "stock_cnt": 5854, "price": "36.09", "change": "1.21", "market_id": "33", "circulate_market_value": "103220024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 40, "hot_rank_chg": 29, "stock_cnt": 5854, "price": "35.89", "change": "9.99", "market_id": "17", "circulate_market_value": "59723539000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "SiC"}, {"code": "601700", "name": "风范股份", "hot_rank": 41, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "6.87", "change": "-8.40", "market_id": "17", "circulate_market_value": "7823262700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.18}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "光伏", "change_pct": 0.61}, {"name": "特高压", "change_pct": -0.21}, {"name": "智能电网", "change_pct": -0.23}]}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 42, "hot_rank_chg": -15, "stock_cnt": 5854, "price": "54.40", "change": "-4.63", "market_id": "33", "circulate_market_value": "20046579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 43, "hot_rank_chg": -14, "stock_cnt": 5854, "price": "100.84", "change": "-2.63", "market_id": "33", "circulate_market_value": "65852113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002900", "name": "哈三联", "hot_rank": 44, "hot_rank_chg": 4, "stock_cnt": 5854, "price": "13.77", "change": "-10.00", "market_id": "33", "circulate_market_value": "2218655400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 45, "hot_rank_chg": -19, "stock_cnt": 5854, "price": "13.33", "change": "-0.82", "market_id": "17", "circulate_market_value": "17105037000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 46, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "77.75", "change": "-10.00", "market_id": "17", "circulate_market_value": "32372589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 47, "hot_rank_chg": 61, "stock_cnt": 5854, "price": "67.48", "change": "7.25", "market_id": "33", "circulate_market_value": "57565365000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 48, "hot_rank_chg": 12, "stock_cnt": 5854, "price": "11.17", "change": "1.36", "market_id": "17", "circulate_market_value": "19984675000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.89}, {"name": "纯碱", "change_pct": -0.18}, {"name": "食品", "change_pct": -2.36}, {"name": "土壤修复", "change_pct": -0.65}, {"name": "东数西算/算力", "change_pct": -0.43}, {"name": "OpenClaw概念", "change_pct": -0.97}, {"name": "DeepSeek概念股", "change_pct": -0.59}]}, {"code": "002384", "name": "东山精密", "hot_rank": 49, "hot_rank_chg": -11, "stock_cnt": 5854, "price": "202.10", "change": "2.24", "market_id": "33", "circulate_market_value": "280175620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603958", "name": "哈森股份", "hot_rank": 50, "hot_rank_chg": 87, "stock_cnt": 5854, "price": "20.55", "change": "10.01", "market_id": "17", "circulate_market_value": "4507848000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "苹果产业链"}, {"code": "002156", "name": "通富微电", "hot_rank": 51, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "64.22", "change": "1.69", "market_id": "33", "circulate_market_value": "97450780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 52, "hot_rank_chg": -3, "stock_cnt": 5854, "price": "16.50", "change": "-9.98", "market_id": "17", "circulate_market_value": "2640000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 53, "hot_rank_chg": -10, "stock_cnt": 5854, "price": "28.51", "change": "-10.01", "market_id": "17", "circulate_market_value": "9605587800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 54, "hot_rank_chg": 77, "stock_cnt": 5854, "price": "9.58", "change": "3.79", "market_id": "17", "circulate_market_value": "6248803600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.45}, {"name": "蚂蚁集团概念股", "change_pct": 0.12}, {"name": "无人驾驶", "change_pct": -0.3}, {"name": "新零售", "change_pct": -1.45}, {"name": "移动支付", "change_pct": 1.13}, {"name": "京津冀", "change_pct": -0.82}, {"name": "北京城市规划", "change_pct": -1.55}, {"name": "国产芯片", "change_pct": 0.43}, {"name": "阿里巴巴概念股", "change_pct": -0.91}, {"name": "腾讯概念股", "change_pct": -0.4}, {"name": "物业管理", "change_pct": -1.5}, {"name": "字节跳动概念股", "change_pct": -0.78}, {"name": "国企改革", "change_pct": -0.57}, {"name": "数字人民币", "change_pct": 1.07}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 55, "hot_rank_chg": -20, "stock_cnt": 5854, "price": "14.22", "change": "-3.07", "market_id": "17", "circulate_market_value": "20941891000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 56, "hot_rank_chg": -16, "stock_cnt": 5854, "price": "33.40", "change": "1.92", "market_id": "33", "circulate_market_value": "26133334000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 57, "hot_rank_chg": 295, "stock_cnt": 5854, "price": "7.11", "change": "10.06", "market_id": "33", "circulate_market_value": "3134244100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.4}, {"name": "锂电池", "change_pct": 1.24}, {"name": "新能源汽车", "change_pct": 0.64}, {"name": "两轮车", "change_pct": -0.86}, {"name": "珠宝饰品", "change_pct": 0.07}]}, {"code": "001277", "name": "速达股份", "hot_rank": 58, "hot_rank_chg": 170, "stock_cnt": 5854, "price": "37.81", "change": "4.25", "market_id": "33", "circulate_market_value": "1722226200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000710", "name": "贝瑞基因", "hot_rank": 59, "hot_rank_chg": 244, "stock_cnt": 5854, "price": "10.31", "change": "10.03", "market_id": "33", "circulate_market_value": "3397453500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI医疗", "xgb_concepts": [{"name": "精准医疗", "change_pct": -2.04}, {"name": "体外诊断", "change_pct": -2.16}, {"name": "医疗器械", "change_pct": -1.84}, {"name": "优化生育（三孩）", "change_pct": -2.02}, {"name": "人工智能", "change_pct": -0.69}, {"name": "基因测序", "change_pct": -2.15}, {"name": "辅助生殖", "change_pct": -2.17}, {"name": "新冠病毒防治", "change_pct": -1.68}, {"name": "DeepSeek概念股", "change_pct": -0.59}, {"name": "AI医疗", "change_pct": -2.51}]}, {"code": "000603", "name": "盛达资源", "hot_rank": 60, "hot_rank_chg": 32, "stock_cnt": 5854, "price": "35.33", "change": "6.16", "market_id": "33", "circulate_market_value": "23555089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002365", "name": "永安药业", "hot_rank": 61, "hot_rank_chg": 45, "stock_cnt": 5854, "price": "16.60", "change": "5.33", "market_id": "33", "circulate_market_value": "4071788600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 62, "hot_rank_chg": -25, "stock_cnt": 5854, "price": "47.96", "change": "-3.11", "market_id": "17", "circulate_market_value": "305936950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000505", "name": "京粮控股", "hot_rank": 63, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "6.75", "change": "-9.88", "market_id": "33", "circulate_market_value": "4268567300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": -1.27}, {"name": "京津冀", "change_pct": -0.82}, {"name": "调味品", "change_pct": -1.89}, {"name": "海南概念", "change_pct": -1.25}, {"name": "休闲食品", "change_pct": -2.26}, {"name": "食品", "change_pct": -2.36}, {"name": "人造肉", "change_pct": -2.48}]}, {"code": "600785", "name": "新华百货", "hot_rank": 65, "hot_rank_chg": 455, "stock_cnt": 5854, "price": "9.74", "change": "10.06", "market_id": "17", "circulate_market_value": "3076708100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "回购", "xgb_concepts": [{"name": "新零售", "change_pct": -1.45}, {"name": "冷链", "change_pct": -0.36}, {"name": "宁夏概念", "change_pct": 0.79}, {"name": "IP经济/谷子经济", "change_pct": -1.18}, {"name": "首发经济", "change_pct": -1.54}]}, {"code": "600250", "name": "南京商旅", "hot_rank": 66, "hot_rank_chg": 134, "stock_cnt": 5854, "price": "9.35", "change": "1.19", "market_id": "17", "circulate_market_value": "2924599600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.96}, {"name": "新零售", "change_pct": -1.45}, {"name": "养老产业", "change_pct": -1.62}, {"name": "旅游", "change_pct": -1.15}, {"name": "外贸受益概念", "change_pct": -0.55}, {"name": "江苏国企改革", "change_pct": -0.88}, {"name": "国企改革", "change_pct": -0.57}]}, {"code": "601318", "name": "中国平安", "hot_rank": 67, "hot_rank_chg": 73, "stock_cnt": 5854, "price": "53.42", "change": "2.46", "market_id": "17", "circulate_market_value": "569460680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 68, "hot_rank_chg": -9, "stock_cnt": 5854, "price": "36.49", "change": "3.37", "market_id": "17", "circulate_market_value": "131891038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 69, "hot_rank_chg": 41, "stock_cnt": 5854, "price": "33.17", "change": "10.02", "market_id": "33", "circulate_market_value": "25123459000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "300570", "name": "太辰光", "hot_rank": 70, "hot_rank_chg": -37, "stock_cnt": 5854, "price": "219.29", "change": "2.76", "market_id": "33", "circulate_market_value": "42145959000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603626", "name": "科森科技", "hot_rank": 71, "hot_rank_chg": 83, "stock_cnt": 5854, "price": "18.65", "change": "10.03", "market_id": "17", "circulate_market_value": "10348506200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "折叠屏"}, {"code": "002361", "name": "神剑股份", "hot_rank": 72, "hot_rank_chg": -15, "stock_cnt": 5854, "price": "10.28", "change": "0.29", "market_id": "33", "circulate_market_value": "8316715200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.2}, {"name": "大飞机", "change_pct": 0.3}, {"name": "北斗导航", "change_pct": -0.12}, {"name": "高铁轨交", "change_pct": -0.03}, {"name": "军民融合", "change_pct": 0.32}, {"name": "磁悬浮", "change_pct": -0.31}, {"name": "军工", "change_pct": 0.29}, {"name": "碳纤维", "change_pct": 0.1}, {"name": "无人机", "change_pct": -0.16}, {"name": "航天", "change_pct": 0.3}, {"name": "卫星互联网", "change_pct": 0.52}, {"name": "低空经济", "change_pct": 0.03}, {"name": "海洋经济", "change_pct": 0.14}]}, {"code": "300139", "name": "晓程科技", "hot_rank": 73, "hot_rank_chg": 51, "stock_cnt": 5854, "price": "51.78", "change": "4.71", "market_id": "33", "circulate_market_value": "12098874900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 74, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "49.13", "change": "6.57", "market_id": "17", "circulate_market_value": "81747966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 75, "hot_rank_chg": -25, "stock_cnt": 5854, "price": "278.08", "change": "0.66", "market_id": "33", "circulate_market_value": "302658950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 76, "hot_rank_chg": -34, "stock_cnt": 5854, "price": "6.69", "change": "-5.91", "market_id": "17", "circulate_market_value": "15994535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.04}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "国企改革", "change_pct": -0.57}, {"name": "河南国企改革", "change_pct": -0.14}]}, {"code": "600367", "name": "红星发展", "hot_rank": 77, "hot_rank_chg": -13, "stock_cnt": 5854, "price": "34.42", "change": "-4.10", "market_id": "17", "circulate_market_value": "11082316900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 78, "hot_rank_chg": -37, "stock_cnt": 5854, "price": "33.27", "change": "1.31", "market_id": "17", "circulate_market_value": "113548835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 79, "hot_rank_chg": -12, "stock_cnt": 5854, "price": "16.32", "change": "-1.69", "market_id": "17", "circulate_market_value": "36219837000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 80, "hot_rank_chg": -12, "stock_cnt": 5854, "price": "20.30", "change": "4.37", "market_id": "33", "circulate_market_value": "18852751000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 81, "hot_rank_chg": -26, "stock_cnt": 5854, "price": "4.09", "change": "-7.88", "market_id": "33", "circulate_market_value": "3129425600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.15}, {"name": "股权转让", "change_pct": -0.07}, {"name": "优化生育（三孩）", "change_pct": -2.02}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "医药商业", "change_pct": -3.75}, {"name": "保健品", "change_pct": -2.83}, {"name": "民营医院", "change_pct": -2.24}, {"name": "医药", "change_pct": -3.26}, {"name": "食品", "change_pct": -2.36}, {"name": "辅助生殖", "change_pct": -2.17}, {"name": "口腔", "change_pct": -1.7}, {"name": "医美", "change_pct": -2.42}, {"name": "新冠病毒防治", "change_pct": -1.68}]}, {"code": "300122", "name": "智飞生物", "hot_rank": 82, "hot_rank_chg": 12, "stock_cnt": 5854, "price": "14.09", "change": "-2.69", "market_id": "33", "circulate_market_value": "19927574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 83, "hot_rank_chg": -30, "stock_cnt": 5854, "price": "17.33", "change": "-0.12", "market_id": "33", "circulate_market_value": "57581556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 84, "hot_rank_chg": -18, "stock_cnt": 5854, "price": "7.73", "change": "-0.77", "market_id": "33", "circulate_market_value": "5624225900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.36}, {"name": "装配式建筑", "change_pct": -0.71}, {"name": "风电", "change_pct": -0.27}, {"name": "环氧丙烷", "change_pct": 0.18}, {"name": "乡村振兴", "change_pct": -1.73}, {"name": "建筑节能", "change_pct": -0.58}, {"name": "旧改", "change_pct": -0.82}]}, {"code": "600313", "name": "农发种业", "hot_rank": 85, "hot_rank_chg": -31, "stock_cnt": 5854, "price": "6.50", "change": "-6.07", "market_id": "17", "circulate_market_value": "7034291300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.3}, {"name": "农业种植", "change_pct": -4.52}, {"name": "化肥", "change_pct": -1.17}, {"name": "转基因", "change_pct": -4.97}, {"name": "土地流转", "change_pct": -3.03}, {"name": "农垦", "change_pct": -3.22}, {"name": "乡村振兴", "change_pct": -1.73}, {"name": "大农业", "change_pct": -1.65}, {"name": "国企改革", "change_pct": -0.57}, {"name": "大豆", "change_pct": -4.07}]}, {"code": "000620", "name": "盈新发展", "hot_rank": 86, "hot_rank_chg": -23, "stock_cnt": 5854, "price": "3.10", "change": "-4.62", "market_id": "33", "circulate_market_value": "14482421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.47}, {"name": "股权转让", "change_pct": -0.07}, {"name": "房地产", "change_pct": -1.7}, {"name": "京津冀", "change_pct": -0.82}, {"name": "旅游", "change_pct": -1.15}, {"name": "国产芯片", "change_pct": 0.43}, {"name": "内存", "change_pct": 0.47}, {"name": "闪存", "change_pct": 0.08}, {"name": "IP经济/谷子经济", "change_pct": -1.18}]}, {"code": "600536", "name": "中国软件", "hot_rank": 87, "hot_rank_chg": -15, "stock_cnt": 5854, "price": "33.87", "change": "-5.79", "market_id": "17", "circulate_market_value": "28574625000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688356", "name": "键凯科技", "hot_rank": 88, "hot_rank_chg": 214, "stock_cnt": 5854, "price": "107.34", "change": "20.00", "market_id": "17", "circulate_market_value": "6510246100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "mRNA疫苗"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 89, "hot_rank_chg": -10, "stock_cnt": 5854, "price": "75.89", "change": "1.08", "market_id": "33", "circulate_market_value": "111317865000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 90, "hot_rank_chg": -20, "stock_cnt": 5854, "price": "402.03", "change": "0.99", "market_id": "33", "circulate_market_value": "66346629000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 91, "hot_rank_chg": 13, "stock_cnt": 5854, "price": "173.02", "change": "5.50", "market_id": "17", "circulate_market_value": "27127895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 92, "hot_rank_chg": -27, "stock_cnt": 5854, "price": "5.90", "change": "-2.48", "market_id": "17", "circulate_market_value": "73136926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.3}, {"name": "核电", "change_pct": 0.15}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "电力体制改革", "change_pct": -0.75}, {"name": "水电", "change_pct": -0.74}, {"name": "火电", "change_pct": -0.85}, {"name": "光伏", "change_pct": 0.61}, {"name": "风电", "change_pct": -0.27}, {"name": "国企改革", "change_pct": -0.57}, {"name": "算电协同", "change_pct": -0.06}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 93, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "66.72", "change": "3.52", "market_id": "33", "circulate_market_value": "96974317000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 94, "hot_rank_chg": 9, "stock_cnt": 5854, "price": "54.11", "change": "-6.35", "market_id": "33", "circulate_market_value": "14934299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 95, "hot_rank_chg": -49, "stock_cnt": 5854, "price": "39.93", "change": "2.78", "market_id": "17", "circulate_market_value": "58377452000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603395", "name": "红四方", "hot_rank": 96, "hot_rank_chg": -34, "stock_cnt": 5854, "price": "27.58", "change": "-9.99", "market_id": "17", "circulate_market_value": "1792700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601011", "name": "宝泰隆", "hot_rank": 97, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "2.88", "change": "-10.00", "market_id": "17", "circulate_market_value": "5517113900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.04}, {"name": "锂电池", "change_pct": 1.24}, {"name": "甲醇", "change_pct": -0.18}, {"name": "石墨烯", "change_pct": 0.2}, {"name": "氢能源/燃料电池", "change_pct": 0.14}, {"name": "石墨电极", "change_pct": -0.48}, {"name": "新能源汽车", "change_pct": 0.64}, {"name": "煤化工", "change_pct": -0.03}, {"name": "碳基材料", "change_pct": 0.72}, {"name": "智能眼镜/MR头显", "change_pct": 0.36}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 98, "hot_rank_chg": -42, "stock_cnt": 5854, "price": "61.81", "change": "0.60", "market_id": "17", "circulate_market_value": "73089653000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 99, "hot_rank_chg": -41, "stock_cnt": 5854, "price": "14.60", "change": "-7.89", "market_id": "17", "circulate_market_value": "31227184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 100, "hot_rank_chg": -18, "stock_cnt": 5854, "price": "9.97", "change": "10.04", "market_id": "17", "circulate_market_value": "4313756300.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "CPO", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.07}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "光伏", "change_pct": 0.61}, {"name": "无线耳机", "change_pct": 0.67}, {"name": "华为产业链", "change_pct": 0.11}, {"name": "光伏胶膜", "change_pct": 0.09}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};