const UPDATE_TIME = "2026-07-28 11:13";
const THS_HOT = [
  {
    "name": "脑机接口",
    "rise": 0.82,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -5.78,
    "rate": 0,
    "tag": "",
    "hotTag": "连续257天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": -5.64,
    "rate": 0,
    "tag": "",
    "hotTag": "连续210天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "光刻机",
    "rise": -1.5,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创半导体ETF",
    "code": "886054"
  },
  {
    "name": "创新药",
    "rise": -1.24,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "DRG/DIP",
    "rise": 3.38,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "医疗器械ETF",
    "code": "885947"
  },
  {
    "name": "AI应用",
    "rise": 0.6,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "乳业",
    "rise": 2.66,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "食品ETF",
    "code": "885462"
  },
  {
    "name": "PCB概念",
    "rise": -4.32,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "算力租赁",
    "rise": -0.93,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续121天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "商业航天",
    "rise": -1.96,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续186天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "白酒概念",
    "rise": 1.55,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "国家大基金持股",
    "rise": -6.39,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885893"
  },
  {
    "name": "跨境支付(CIPS)",
    "rise": 2.09,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "银行ETF",
    "code": "885966"
  },
  {
    "name": "ST板块",
    "rise": 0.96,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "人形机器人",
    "rise": -1.53,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续421天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "兵装重组概念",
    "rise": -4.69,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "啤酒概念",
    "rise": 2.46,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885780"
  },
  {
    "name": "先进封装",
    "rise": -4.91,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续50天上榜",
    "rankChg": 1,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -2.05,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "大数据ETF",
    "code": "885887"
  }
];
const THS_EVENTS = [
  {
    "title": "消费复苏 政策加码，机构：结构性机会预计仍将显著优于整体Beta",
    "desc": "",
    "heat": 293260,
    "direction": "大消费",
    "themes": [
      "零售",
      "消费",
      "乳业",
      "啤酒概念",
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "中胤时尚",
        "code": "300901",
        "chg": 17.153846
      }
    ]
  },
  {
    "title": "机构：脑机接口商业化进程进一步提速",
    "desc": "",
    "heat": 210953,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "科蓝软件",
        "code": "300663",
        "chg": 19.946452
      }
    ]
  },
  {
    "title": "预告：国新办就“十五五”时期税收改革发展有关情况举行新闻发布会",
    "desc": "",
    "heat": 124757,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险",
      "互联网金融"
    ],
    "stocks": [
      {
        "name": "科蓝软件",
        "code": "300663",
        "chg": 19.946452
      }
    ]
  },
  {
    "title": "81笔大单、1100亿美元！中国创新药“卖”向全球",
    "desc": "",
    "heat": 117526,
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
        "name": "海南海药",
        "code": "000566",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "中国风电正抢装全球 国产风电海外爆单",
    "desc": "",
    "heat": 91277,
    "direction": "风电",
    "themes": [
      "风电",
      "风电设备"
    ],
    "stocks": [
      {
        "name": "中利集团",
        "code": "002309",
        "chg": 10.130719
      }
    ]
  },
  {
    "title": "7部门印发《疾病预防控制“十五五”规划》 提出重大传染病防控6项任务",
    "desc": "",
    "heat": 79337,
    "direction": "生物医药",
    "themes": [
      "生物疫苗",
      "医药医疗",
      "医药商业"
    ],
    "stocks": [
      {
        "name": "爱朋医疗",
        "code": "300753",
        "chg": 18.575993
      }
    ]
  },
  {
    "title": "超额认购逾13倍，上市首日推出配套期权！中际旭创，将登陆港股",
    "desc": "",
    "heat": 30944,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "共进股份",
        "code": "603118",
        "chg": 6.851852
      }
    ]
  },
  {
    "title": "中国巨石电子布提价5轮供需紧张引关注",
    "desc": "",
    "heat": 2000,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "国际复材",
        "code": "301526",
        "chg": -6.387808
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "财税改革",
    "change": "+3.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为HMS",
    "change": "+3.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+3.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+3.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+2.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+2.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "微信小店",
    "change": "+2.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "DRGs概念",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子车牌",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饮料",
    "change": "+2.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+2.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "葡萄酒",
    "change": "+2.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+1.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "职业教育",
    "change": "+1.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子发票",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "数字人民币",
    "change": "+1.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+1.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5785,
    "price": "12.90",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "12039874200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.62
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.25
      },
      {
        "name": "新疆概念",
        "change_pct": 0.41
      },
      {
        "name": "光伏",
        "change_pct": -1.86
      },
      {
        "name": "风电",
        "change_pct": -1.23
      },
      {
        "name": "储能",
        "change_pct": -1.92
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 6,
    "hot_rank_chg": 16,
    "stock_cnt": 5785,
    "price": "5.74",
    "change": "1.77",
    "market_id": "17",
    "circulate_market_value": "14456247000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.46
      },
      {
        "name": "工业大麻",
        "change_pct": -0.24
      },
      {
        "name": "中药",
        "change_pct": -0.03
      },
      {
        "name": "强势人气股",
        "change_pct": -1.62
      },
      {
        "name": "保健品",
        "change_pct": -0.15
      },
      {
        "name": "民营医院",
        "change_pct": 0.91
      },
      {
        "name": "医药",
        "change_pct": -1.02
      },
      {
        "name": "化学原料药",
        "change_pct": -0.78
      },
      {
        "name": "流感",
        "change_pct": -0.67
      },
      {
        "name": "振兴东北",
        "change_pct": 0.8
      },
      {
        "name": "食品",
        "change_pct": 1.17
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 12,
    "hot_rank_chg": 3,
    "stock_cnt": 5785,
    "price": "11.56",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "7917471700.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "数据中心",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.36
      },
      {
        "name": "核电",
        "change_pct": -1.65
      },
      {
        "name": "充电桩",
        "change_pct": -2.2
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.05
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "储能",
        "change_pct": -1.92
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.13
      },
      {
        "name": "智能电网",
        "change_pct": -1.44
      },
      {
        "name": "核聚变",
        "change_pct": -1.88
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 23,
    "hot_rank_chg": 10,
    "stock_cnt": 5785,
    "price": "5.73",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "5918722100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.37
      },
      {
        "name": "锂电池",
        "change_pct": -1.95
      },
      {
        "name": "强势人气股",
        "change_pct": -1.62
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -5.77
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.36
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 24,
    "hot_rank_chg": -1,
    "stock_cnt": 5785,
    "price": "5.58",
    "change": "-6.53",
    "market_id": "33",
    "circulate_market_value": "197348610000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -4.15
      },
      {
        "name": "手机产业链",
        "change_pct": -3.36
      },
      {
        "name": "超高清视频",
        "change_pct": -0.96
      },
      {
        "name": "苹果产业链",
        "change_pct": -4.08
      },
      {
        "name": "电竞",
        "change_pct": 0.4
      },
      {
        "name": "半导体",
        "change_pct": -5.36
      },
      {
        "name": "人工智能",
        "change_pct": -0.21
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.72
      },
      {
        "name": "VR&AR",
        "change_pct": -1.75
      },
      {
        "name": "OLED",
        "change_pct": -3.0
      },
      {
        "name": "京津冀",
        "change_pct": -0.19
      },
      {
        "name": "物联网",
        "change_pct": -0.49
      },
      {
        "name": "指纹识别",
        "change_pct": -2.7
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.55
      },
      {
        "name": "白马股",
        "change_pct": -0.01
      },
      {
        "name": "智能制造",
        "change_pct": -1.15
      },
      {
        "name": "小米概念股",
        "change_pct": -2.77
      },
      {
        "name": "国产芯片",
        "change_pct": -4.55
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.69
      },
      {
        "name": "全息概念",
        "change_pct": -0.98
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.03
      },
      {
        "name": "MicroLED",
        "change_pct": -2.91
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.64
      },
      {
        "name": "智能手表",
        "change_pct": -2.99
      },
      {
        "name": "MiniLED",
        "change_pct": -2.93
      },
      {
        "name": "传感器",
        "change_pct": -2.5
      },
      {
        "name": "大硅片",
        "change_pct": -5.8
      },
      {
        "name": "AI PC",
        "change_pct": -3.01
      },
      {
        "name": "华为产业链",
        "change_pct": -1.2
      },
      {
        "name": "回购",
        "change_pct": -1.39
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.95
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -5.11
      }
    ]
  },
  {
    "code": "002195",
    "name": "岩山科技",
    "hot_rank": 27,
    "hot_rank_chg": 101,
    "stock_cnt": 5785,
    "price": "6.83",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "38356142000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 1.03
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.32
      },
      {
        "name": "人工智能",
        "change_pct": -0.21
      },
      {
        "name": "网络安全",
        "change_pct": 0.85
      },
      {
        "name": "游戏",
        "change_pct": 0.39
      },
      {
        "name": "大数据",
        "change_pct": 0.8
      },
      {
        "name": "脑科学",
        "change_pct": 0.77
      },
      {
        "name": "百度概念股",
        "change_pct": 0.9
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.13
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.06
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.67
      },
      {
        "name": "自动刹车",
        "change_pct": 0.39
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.37
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.83
      },
      {
        "name": "AI医疗",
        "change_pct": 0.07
      },
      {
        "name": "区块链",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 29,
    "hot_rank_chg": 16,
    "stock_cnt": 5785,
    "price": "5.83",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "7559968700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.03
      },
      {
        "name": "创新药",
        "change_pct": -1.65
      },
      {
        "name": "央企改革",
        "change_pct": -0.53
      },
      {
        "name": "医疗器械",
        "change_pct": -0.24
      },
      {
        "name": "强势人气股",
        "change_pct": -1.62
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.72
      },
      {
        "name": "保健品",
        "change_pct": -0.15
      },
      {
        "name": "民营医院",
        "change_pct": 0.91
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -1.0
      },
      {
        "name": "医药",
        "change_pct": -1.02
      },
      {
        "name": "化学原料药",
        "change_pct": -0.78
      },
      {
        "name": "海南概念",
        "change_pct": -0.03
      },
      {
        "name": "脑科学",
        "change_pct": 0.77
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.34
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.11
      },
      {
        "name": "食品",
        "change_pct": 1.17
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.08
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.38
      },
      {
        "name": "自贸区",
        "change_pct": 0.89
      },
      {
        "name": "合成生物",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "600775",
    "name": "南京熊猫",
    "hot_rank": 31,
    "hot_rank_chg": 42,
    "stock_cnt": 5785,
    "price": "10.35",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "6953528800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "脑机接口概念",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.25
      },
      {
        "name": "央企改革",
        "change_pct": -0.53
      },
      {
        "name": "股权转让",
        "change_pct": -0.66
      },
      {
        "name": "5G",
        "change_pct": -3.64
      },
      {
        "name": "军工集团",
        "change_pct": -1.62
      },
      {
        "name": "工业自动化",
        "change_pct": -1.32
      },
      {
        "name": "北斗导航",
        "change_pct": -1.04
      },
      {
        "name": "智慧城市",
        "change_pct": 0.3
      },
      {
        "name": "军工",
        "change_pct": -1.53
      },
      {
        "name": "机器人",
        "change_pct": -1.24
      },
      {
        "name": "白色家电",
        "change_pct": -0.06
      },
      {
        "name": "家电",
        "change_pct": -0.23
      },
      {
        "name": "脑科学",
        "change_pct": 0.77
      },
      {
        "name": "无人机",
        "change_pct": -1.3
      },
      {
        "name": "智能制造",
        "change_pct": -1.15
      },
      {
        "name": "工业互联网",
        "change_pct": -0.41
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.77
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 32,
    "hot_rank_chg": 12,
    "stock_cnt": 5785,
    "price": "5.94",
    "change": "-4.50",
    "market_id": "17",
    "circulate_market_value": "73632769000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.53
      },
      {
        "name": "核电",
        "change_pct": -1.65
      },
      {
        "name": "强势人气股",
        "change_pct": -1.62
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.09
      },
      {
        "name": "水电",
        "change_pct": -0.8
      },
      {
        "name": "火电",
        "change_pct": -1.18
      },
      {
        "name": "光伏",
        "change_pct": -1.86
      },
      {
        "name": "风电",
        "change_pct": -1.23
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      },
      {
        "name": "算电协同",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 35,
    "hot_rank_chg": 19,
    "stock_cnt": 5785,
    "price": "3.37",
    "change": "10.13",
    "market_id": "33",
    "circulate_market_value": "8108665900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.95
      },
      {
        "name": "5G",
        "change_pct": -3.64
      },
      {
        "name": "一带一路",
        "change_pct": -0.33
      },
      {
        "name": "光通信",
        "change_pct": -6.15
      },
      {
        "name": "军民融合",
        "change_pct": -1.48
      },
      {
        "name": "光伏",
        "change_pct": -1.86
      },
      {
        "name": "军工",
        "change_pct": -1.53
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "储能",
        "change_pct": -1.92
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.3
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.64
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.65
      },
      {
        "name": "华为产业链",
        "change_pct": -1.2
      }
    ]
  },
  {
    "code": "002208",
    "name": "合肥城建",
    "hot_rank": 39,
    "hot_rank_chg": -7,
    "stock_cnt": 5785,
    "price": "12.71",
    "change": "-2.68",
    "market_id": "33",
    "circulate_market_value": "10207048500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 0.44
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 1.67
      },
      {
        "name": "房地产",
        "change_pct": 0.55
      },
      {
        "name": "强势人气股",
        "change_pct": -1.62
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.39
      },
      {
        "name": "住房租赁",
        "change_pct": 1.12
      },
      {
        "name": "物业管理",
        "change_pct": 0.71
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      },
      {
        "name": "旧改",
        "change_pct": 0.39
      }
    ]
  },
  {
    "code": "603567",
    "name": "珍宝岛",
    "hot_rank": 44,
    "hot_rank_chg": 31,
    "stock_cnt": 5785,
    "price": "6.88",
    "change": "6.83",
    "market_id": "17",
    "circulate_market_value": "6463094600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.03
      },
      {
        "name": "创新药",
        "change_pct": -1.65
      },
      {
        "name": "医药",
        "change_pct": -1.02
      },
      {
        "name": "流感",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 46,
    "hot_rank_chg": -10,
    "stock_cnt": 5785,
    "price": "6.54",
    "change": "-7.89",
    "market_id": "33",
    "circulate_market_value": "21757246000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.36
      },
      {
        "name": "核电",
        "change_pct": -1.65
      },
      {
        "name": "5G",
        "change_pct": -3.64
      },
      {
        "name": "一带一路",
        "change_pct": -0.33
      },
      {
        "name": "充电桩",
        "change_pct": -2.2
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.05
      },
      {
        "name": "风电",
        "change_pct": -1.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "储能",
        "change_pct": -1.92
      },
      {
        "name": "特高压",
        "change_pct": -2.36
      },
      {
        "name": "智能电网",
        "change_pct": -1.44
      },
      {
        "name": "海洋经济",
        "change_pct": -0.75
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 49,
    "hot_rank_chg": 12,
    "stock_cnt": 5785,
    "price": "7.45",
    "change": "4.63",
    "market_id": "33",
    "circulate_market_value": "9379762600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.55
      },
      {
        "name": "人工智能",
        "change_pct": -0.21
      },
      {
        "name": "游戏",
        "change_pct": 0.39
      },
      {
        "name": "智能音箱",
        "change_pct": -2.76
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.77
      },
      {
        "name": "数字经济",
        "change_pct": 1.02
      },
      {
        "name": "百度概念股",
        "change_pct": 0.9
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.06
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.59
      },
      {
        "name": "传媒",
        "change_pct": 1.28
      },
      {
        "name": "全息概念",
        "change_pct": -0.98
      },
      {
        "name": "NFT",
        "change_pct": 1.56
      },
      {
        "name": "元宇宙",
        "change_pct": 0.09
      },
      {
        "name": "web3.0",
        "change_pct": 1.35
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.67
      },
      {
        "name": "数字人民币",
        "change_pct": 1.78
      },
      {
        "name": "智慧政务",
        "change_pct": 1.59
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.69
      },
      {
        "name": "盲盒",
        "change_pct": 1.06
      },
      {
        "name": "AI营销",
        "change_pct": 0.34
      },
      {
        "name": "华为产业链",
        "change_pct": -1.2
      },
      {
        "name": "供应链金融",
        "change_pct": 1.54
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.08
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.94
      },
      {
        "name": "区块链",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 50,
    "hot_rank_chg": 38,
    "stock_cnt": 5785,
    "price": "2.65",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "11657375000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "重大资产重组",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.58
      },
      {
        "name": "京津冀",
        "change_pct": -0.19
      },
      {
        "name": "旅游",
        "change_pct": 1.39
      },
      {
        "name": "园林",
        "change_pct": -0.53
      },
      {
        "name": "海绵城市",
        "change_pct": 1.01
      },
      {
        "name": "固废处理",
        "change_pct": -0.47
      },
      {
        "name": "雄安新区",
        "change_pct": 0.06
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.84
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.64
      },
      {
        "name": "碳中和",
        "change_pct": -0.33
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.67
      },
      {
        "name": "汽车拆解",
        "change_pct": -0.09
      },
      {
        "name": "土壤修复",
        "change_pct": -0.62
      },
      {
        "name": "核污染防治",
        "change_pct": -1.58
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.06
      },
      {
        "name": "低价股",
        "change_pct": 0.68
      },
      {
        "name": "西部大开发",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "600617",
    "name": "国新能源",
    "hot_rank": 51,
    "hot_rank_chg": -16,
    "stock_cnt": 5785,
    "price": "3.66",
    "change": "-1.88",
    "market_id": "17",
    "circulate_market_value": "6498486200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "山西国企改革",
        "change_pct": -0.63
      },
      {
        "name": "天然气",
        "change_pct": -0.62
      },
      {
        "name": "油气改革",
        "change_pct": -0.25
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 52,
    "hot_rank_chg": 18,
    "stock_cnt": 5785,
    "price": "7.36",
    "change": "-3.29",
    "market_id": "17",
    "circulate_market_value": "14949075000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.53
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.09
      },
      {
        "name": "火电",
        "change_pct": -1.18
      },
      {
        "name": "风电",
        "change_pct": -1.23
      },
      {
        "name": "储能",
        "change_pct": -1.92
      },
      {
        "name": "碳中和",
        "change_pct": -0.33
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 54,
    "hot_rank_chg": 206,
    "stock_cnt": 5785,
    "price": "6.89",
    "change": "1.92",
    "market_id": "33",
    "circulate_market_value": "4517814500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.46
      },
      {
        "name": "新零售",
        "change_pct": 1.67
      },
      {
        "name": "农业种植",
        "change_pct": 0.32
      },
      {
        "name": "冷链",
        "change_pct": -0.2
      },
      {
        "name": "大农业",
        "change_pct": 0.66
      },
      {
        "name": "预制菜",
        "change_pct": 1.58
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.67
      },
      {
        "name": "免税店概念",
        "change_pct": 1.67
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002900",
    "name": "哈三联",
    "hot_rank": 58,
    "hot_rank_chg": 11,
    "stock_cnt": 5785,
    "price": "12.98",
    "change": "3.51",
    "market_id": "33",
    "circulate_market_value": "2091368800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -1.65
      },
      {
        "name": "医药",
        "change_pct": -1.02
      },
      {
        "name": "化学原料药",
        "change_pct": -0.78
      },
      {
        "name": "医美",
        "change_pct": -0.12
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.38
      },
      {
        "name": "化妆品",
        "change_pct": 0.02
      }
    ]
  },
  {
    "code": "601727",
    "name": "上海电气",
    "hot_rank": 59,
    "hot_rank_chg": 154,
    "stock_cnt": 5785,
    "price": "6.85",
    "change": "3.79",
    "market_id": "17",
    "circulate_market_value": "86417132000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": -2.64
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -1.36
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.26
      },
      {
        "name": "核电",
        "change_pct": -1.65
      },
      {
        "name": "一带一路",
        "change_pct": -0.33
      },
      {
        "name": "工业自动化",
        "change_pct": -1.32
      },
      {
        "name": "大飞机",
        "change_pct": -1.53
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.77
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.05
      },
      {
        "name": "光伏",
        "change_pct": -1.86
      },
      {
        "name": "风电",
        "change_pct": -1.23
      },
      {
        "name": "白马股",
        "change_pct": -0.01
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "机器人",
        "change_pct": -1.24
      },
      {
        "name": "储能",
        "change_pct": -1.92
      },
      {
        "name": "碳中和",
        "change_pct": -0.33
      },
      {
        "name": "智能制造",
        "change_pct": -1.15
      },
      {
        "name": "工业互联网",
        "change_pct": -0.41
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "换电概念",
        "change_pct": -0.85
      },
      {
        "name": "虚拟电厂",
        "change_pct": -1.3
      },
      {
        "name": "工业母机",
        "change_pct": -1.96
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.3
      },
      {
        "name": "超超临界发电",
        "change_pct": -1.02
      },
      {
        "name": "钒电池",
        "change_pct": -0.78
      },
      {
        "name": "减速器",
        "change_pct": -1.06
      },
      {
        "name": "光热发电",
        "change_pct": -0.31
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      },
      {
        "name": "特高压",
        "change_pct": -2.36
      },
      {
        "name": "回购",
        "change_pct": -1.39
      },
      {
        "name": "智能电网",
        "change_pct": -1.44
      },
      {
        "name": "核聚变",
        "change_pct": -1.88
      },
      {
        "name": "区块链",
        "change_pct": 1.2
      },
      {
        "name": "钍基熔盐堆",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 60,
    "hot_rank_chg": -19,
    "stock_cnt": 5785,
    "price": "10.80",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "10223701300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.66
      },
      {
        "name": "锂电池",
        "change_pct": -1.95
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.71
      },
      {
        "name": "举牌",
        "change_pct": -0.23
      },
      {
        "name": "纺织服装",
        "change_pct": 1.15
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.57
      },
      {
        "name": "教育",
        "change_pct": 1.38
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.03
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "抗菌面料",
        "change_pct": -0.08
      },
      {
        "name": "国企改革",
        "change_pct": -0.13
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 64,
    "hot_rank_chg": -8,
    "stock_cnt": 5785,
    "price": "9.26",
    "change": "-10.01",
    "market_id": "17",
    "circulate_market_value": "6299760200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -1.59
      },
      {
        "name": "雄安新区",
        "change_pct": 0.06
      },
      {
        "name": "煤化工",
        "change_pct": -0.7
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 67,
    "hot_rank_chg": -15,
    "stock_cnt": 5785,
    "price": "5.28",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "2672358200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "锂电材料",
    "xgb_concepts": [
      {
        "name": "仪器仪表",
        "change_pct": -1.21
      },
      {
        "name": "锂电池",
        "change_pct": -1.95
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.02
      },
      {
        "name": "有机硅",
        "change_pct": -1.05
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "华为产业链",
        "change_pct": -1.2
      },
      {
        "name": "供应链金融",
        "change_pct": 1.54
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 71,
    "hot_rank_chg": 102,
    "stock_cnt": 5785,
    "price": "11.77",
    "change": "-0.51",
    "market_id": "33",
    "circulate_market_value": "40935239000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.46
      },
      {
        "name": "人工智能",
        "change_pct": -0.21
      },
      {
        "name": "VR&AR",
        "change_pct": -1.75
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.3
      },
      {
        "name": "大数据",
        "change_pct": 0.8
      },
      {
        "name": "教育",
        "change_pct": 1.38
      },
      {
        "name": "百度概念股",
        "change_pct": 0.9
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.13
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.06
      },
      {
        "name": "传媒",
        "change_pct": 1.28
      },
      {
        "name": "快手概念股",
        "change_pct": 1.2
      },
      {
        "name": "NFT",
        "change_pct": 1.56
      },
      {
        "name": "元宇宙",
        "change_pct": 0.09
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.07
      },
      {
        "name": "web3.0",
        "change_pct": 1.35
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.12
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.67
      },
      {
        "name": "职业教育",
        "change_pct": 1.93
      },
      {
        "name": "云游戏",
        "change_pct": -1.11
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.92
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.63
      },
      {
        "name": "AI营销",
        "change_pct": 0.34
      },
      {
        "name": "词元概念/Token",
        "change_pct": -0.67
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.37
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.52
      },
      {
        "name": "智谱AI",
        "change_pct": 0.98
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.94
      },
      {
        "name": "区块链",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "002969",
    "name": "嘉美包装",
    "hot_rank": 79,
    "hot_rank_chg": 89,
    "stock_cnt": 5785,
    "price": "12.61",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "13779391000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "包装印刷",
        "change_pct": 0.04
      },
      {
        "name": "啤酒",
        "change_pct": 0.78
      },
      {
        "name": "植物奶",
        "change_pct": 2.8
      },
      {
        "name": "饮料",
        "change_pct": 2.42
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 89,
    "hot_rank_chg": -32,
    "stock_cnt": 5785,
    "price": "6.50",
    "change": "-7.93",
    "market_id": "17",
    "circulate_market_value": "13281685800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.95
      },
      {
        "name": "军民融合",
        "change_pct": -1.48
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.05
      },
      {
        "name": "烧碱",
        "change_pct": -0.69
      },
      {
        "name": "军工",
        "change_pct": -1.53
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "环氧丙烷",
        "change_pct": -1.25
      },
      {
        "name": "氟化工",
        "change_pct": -2.52
      },
      {
        "name": "双氧水",
        "change_pct": -1.21
      },
      {
        "name": "液氯",
        "change_pct": -2.66
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5785, "price": "47.00", "change": "-4.08", "market_id": "17", "circulate_market_value": "211642830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5785, "price": "12.90", "change": "-9.98", "market_id": "33", "circulate_market_value": "12039874200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.62}, {"name": "新疆国企改革", "change_pct": 0.25}, {"name": "新疆概念", "change_pct": 0.41}, {"name": "光伏", "change_pct": -1.86}, {"name": "风电", "change_pct": -1.23}, {"name": "储能", "change_pct": -1.92}, {"name": "国企改革", "change_pct": -0.13}]}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5785, "price": "18.37", "change": "2.51", "market_id": "17", "circulate_market_value": "38421630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5785, "price": "390.63", "change": "-10.00", "market_id": "17", "circulate_market_value": "261133000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5785, "price": "34.20", "change": "1.88", "market_id": "33", "circulate_market_value": "36893843000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 6, "hot_rank_chg": 16, "stock_cnt": 5785, "price": "5.74", "change": "1.77", "market_id": "17", "circulate_market_value": "14456247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.46}, {"name": "工业大麻", "change_pct": -0.24}, {"name": "中药", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": -1.62}, {"name": "保健品", "change_pct": -0.15}, {"name": "民营医院", "change_pct": 0.91}, {"name": "医药", "change_pct": -1.02}, {"name": "化学原料药", "change_pct": -0.78}, {"name": "流感", "change_pct": -0.67}, {"name": "振兴东北", "change_pct": 0.8}, {"name": "食品", "change_pct": 1.17}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5785, "price": "41.48", "change": "0.02", "market_id": "33", "circulate_market_value": "118635815000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5785, "price": "33.55", "change": "-4.85", "market_id": "17", "circulate_market_value": "24297863000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600895", "name": "张江高科", "hot_rank": 9, "hot_rank_chg": 18, "stock_cnt": 5785, "price": "31.04", "change": "9.99", "market_id": "17", "circulate_market_value": "48071324000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机"}, {"code": "002156", "name": "通富微电", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5785, "price": "69.00", "change": "-10.00", "market_id": "33", "circulate_market_value": "104704203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 11, "hot_rank_chg": 10, "stock_cnt": 5785, "price": "190.71", "change": "-10.00", "market_id": "33", "circulate_market_value": "264385420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5785, "price": "11.56", "change": "9.99", "market_id": "33", "circulate_market_value": "7917471700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "数据中心", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.36}, {"name": "核电", "change_pct": -1.65}, {"name": "充电桩", "change_pct": -2.2}, {"name": "云计算数据中心", "change_pct": -1.05}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "储能", "change_pct": -1.92}, {"name": "阿里巴巴概念股", "change_pct": 0.13}, {"name": "智能电网", "change_pct": -1.44}, {"name": "核聚变", "change_pct": -1.88}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 13, "hot_rank_chg": 11, "stock_cnt": 5785, "price": "22.76", "change": "10.01", "market_id": "33", "circulate_market_value": "9578888100.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "脑机接口"}, {"code": "600396", "name": "华电辽能", "hot_rank": 14, "hot_rank_chg": 2, "stock_cnt": 5785, "price": "16.58", "change": "5.74", "market_id": "17", "circulate_market_value": "24417479000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 15, "hot_rank_chg": 22, "stock_cnt": 5785, "price": "908.00", "change": "-15.69", "market_id": "33", "circulate_market_value": "1007825320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 16, "hot_rank_chg": -4, "stock_cnt": 5785, "price": "361.44", "change": "-10.00", "market_id": "33", "circulate_market_value": "59648354000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 17, "hot_rank_chg": 9, "stock_cnt": 5785, "price": "17.47", "change": "-6.03", "market_id": "33", "circulate_market_value": "58046726000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 18, "hot_rank_chg": -11, "stock_cnt": 5785, "price": "166.43", "change": "-1.72", "market_id": "33", "circulate_market_value": "53011741000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 19, "hot_rank_chg": 1, "stock_cnt": 5785, "price": "76.83", "change": "-6.70", "market_id": "17", "circulate_market_value": "137480720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 20, "hot_rank_chg": -9, "stock_cnt": 5785, "price": "43.50", "change": "-7.54", "market_id": "17", "circulate_market_value": "36825070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5785, "price": "39.56", "change": "-9.99", "market_id": "33", "circulate_market_value": "62273595000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 22, "hot_rank_chg": 38, "stock_cnt": 5785, "price": "17.31", "change": "6.85", "market_id": "17", "circulate_market_value": "13627755000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 23, "hot_rank_chg": 10, "stock_cnt": 5785, "price": "5.73", "change": "0.00", "market_id": "33", "circulate_market_value": "5918722100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.37}, {"name": "锂电池", "change_pct": -1.95}, {"name": "强势人气股", "change_pct": -1.62}, {"name": "铜箔/覆铜板", "change_pct": -5.77}, {"name": "粤港澳大湾区", "change_pct": 0.36}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.06}]}, {"code": "000725", "name": "京东方A", "hot_rank": 24, "hot_rank_chg": -1, "stock_cnt": 5785, "price": "5.58", "change": "-6.53", "market_id": "33", "circulate_market_value": "197348610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -4.15}, {"name": "手机产业链", "change_pct": -3.36}, {"name": "超高清视频", "change_pct": -0.96}, {"name": "苹果产业链", "change_pct": -4.08}, {"name": "电竞", "change_pct": 0.4}, {"name": "半导体", "change_pct": -5.36}, {"name": "人工智能", "change_pct": -0.21}, {"name": "互联网医疗", "change_pct": 0.72}, {"name": "VR&AR", "change_pct": -1.75}, {"name": "OLED", "change_pct": -3.0}, {"name": "京津冀", "change_pct": -0.19}, {"name": "物联网", "change_pct": -0.49}, {"name": "指纹识别", "change_pct": -2.7}, {"name": "汽车零部件", "change_pct": -0.55}, {"name": "白马股", "change_pct": -0.01}, {"name": "智能制造", "change_pct": -1.15}, {"name": "小米概念股", "change_pct": -2.77}, {"name": "国产芯片", "change_pct": -4.55}, {"name": "液晶面板/LCD", "change_pct": -2.69}, {"name": "全息概念", "change_pct": -0.98}, {"name": "理想汽车概念股", "change_pct": -0.03}, {"name": "MicroLED", "change_pct": -2.91}, {"name": "钙钛矿电池", "change_pct": -1.64}, {"name": "智能手表", "change_pct": -2.99}, {"name": "MiniLED", "change_pct": -2.93}, {"name": "传感器", "change_pct": -2.5}, {"name": "大硅片", "change_pct": -5.8}, {"name": "AI PC", "change_pct": -3.01}, {"name": "华为产业链", "change_pct": -1.2}, {"name": "回购", "change_pct": -1.39}, {"name": "智能眼镜/MR头显", "change_pct": -2.95}, {"name": "玻璃基板封装", "change_pct": -5.11}]}, {"code": "300502", "name": "新易盛", "hot_rank": 25, "hot_rank_chg": 41, "stock_cnt": 5785, "price": "406.90", "change": "-17.13", "market_id": "33", "circulate_market_value": "510351540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 26, "hot_rank_chg": -17, "stock_cnt": 5785, "price": "43.19", "change": "-2.37", "market_id": "33", "circulate_market_value": "49971381000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002195", "name": "岩山科技", "hot_rank": 27, "hot_rank_chg": 101, "stock_cnt": 5785, "price": "6.83", "change": "9.98", "market_id": "33", "circulate_market_value": "38356142000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口", "xgb_concepts": [{"name": "国产软件", "change_pct": 1.03}, {"name": "无人驾驶", "change_pct": -1.32}, {"name": "人工智能", "change_pct": -0.21}, {"name": "网络安全", "change_pct": 0.85}, {"name": "游戏", "change_pct": 0.39}, {"name": "大数据", "change_pct": 0.8}, {"name": "脑科学", "change_pct": 0.77}, {"name": "百度概念股", "change_pct": 0.9}, {"name": "阿里巴巴概念股", "change_pct": 0.13}, {"name": "腾讯概念股", "change_pct": -0.06}, {"name": "字节跳动概念股", "change_pct": 0.67}, {"name": "自动刹车", "change_pct": 0.39}, {"name": "人工智能大模型", "change_pct": 0.37}, {"name": "短剧/互动影游", "change_pct": 0.83}, {"name": "AI医疗", "change_pct": 0.07}, {"name": "区块链", "change_pct": 1.2}]}, {"code": "603690", "name": "至纯科技", "hot_rank": 28, "hot_rank_chg": -11, "stock_cnt": 5785, "price": "26.00", "change": "4.50", "market_id": "17", "circulate_market_value": "9957070500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 29, "hot_rank_chg": 16, "stock_cnt": 5785, "price": "5.83", "change": "10.00", "market_id": "33", "circulate_market_value": "7559968700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": -0.03}, {"name": "创新药", "change_pct": -1.65}, {"name": "央企改革", "change_pct": -0.53}, {"name": "医疗器械", "change_pct": -0.24}, {"name": "强势人气股", "change_pct": -1.62}, {"name": "互联网医疗", "change_pct": 0.72}, {"name": "保健品", "change_pct": -0.15}, {"name": "民营医院", "change_pct": 0.91}, {"name": "CAR-T疗法", "change_pct": -1.0}, {"name": "医药", "change_pct": -1.02}, {"name": "化学原料药", "change_pct": -0.78}, {"name": "海南概念", "change_pct": -0.03}, {"name": "脑科学", "change_pct": 0.77}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.34}, {"name": "海南自由贸易港", "change_pct": 1.11}, {"name": "食品", "change_pct": 1.17}, {"name": "国企改革", "change_pct": -0.13}, {"name": "医疗信息化", "change_pct": 1.08}, {"name": "新冠病毒防治", "change_pct": -0.38}, {"name": "自贸区", "change_pct": 0.89}, {"name": "合成生物", "change_pct": -1.03}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5785, "price": "16.92", "change": "0.30", "market_id": "33", "circulate_market_value": "7653572500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600775", "name": "南京熊猫", "hot_rank": 31, "hot_rank_chg": 42, "stock_cnt": 5785, "price": "10.35", "change": "9.99", "market_id": "17", "circulate_market_value": "6953528800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "脑机接口概念", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.25}, {"name": "央企改革", "change_pct": -0.53}, {"name": "股权转让", "change_pct": -0.66}, {"name": "5G", "change_pct": -3.64}, {"name": "军工集团", "change_pct": -1.62}, {"name": "工业自动化", "change_pct": -1.32}, {"name": "北斗导航", "change_pct": -1.04}, {"name": "智慧城市", "change_pct": 0.3}, {"name": "军工", "change_pct": -1.53}, {"name": "机器人", "change_pct": -1.24}, {"name": "白色家电", "change_pct": -0.06}, {"name": "家电", "change_pct": -0.23}, {"name": "脑科学", "change_pct": 0.77}, {"name": "无人机", "change_pct": -1.3}, {"name": "智能制造", "change_pct": -1.15}, {"name": "工业互联网", "change_pct": -0.41}, {"name": "国企改革", "change_pct": -0.13}, {"name": "卫星互联网", "change_pct": -1.77}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 32, "hot_rank_chg": 12, "stock_cnt": 5785, "price": "5.94", "change": "-4.50", "market_id": "17", "circulate_market_value": "73632769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.53}, {"name": "核电", "change_pct": -1.65}, {"name": "强势人气股", "change_pct": -1.62}, {"name": "电力体制改革", "change_pct": -1.09}, {"name": "水电", "change_pct": -0.8}, {"name": "火电", "change_pct": -1.18}, {"name": "光伏", "change_pct": -1.86}, {"name": "风电", "change_pct": -1.23}, {"name": "国企改革", "change_pct": -0.13}, {"name": "算电协同", "change_pct": -2.74}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 33, "hot_rank_chg": -8, "stock_cnt": 5785, "price": "14.27", "change": "2.15", "market_id": "33", "circulate_market_value": "15160502000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 34, "hot_rank_chg": -3, "stock_cnt": 5785, "price": "50.01", "change": "-9.97", "market_id": "17", "circulate_market_value": "122706849000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002309", "name": "中利集团", "hot_rank": 35, "hot_rank_chg": 19, "stock_cnt": 5785, "price": "3.37", "change": "10.13", "market_id": "33", "circulate_market_value": "8108665900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报扭亏", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.95}, {"name": "5G", "change_pct": -3.64}, {"name": "一带一路", "change_pct": -0.33}, {"name": "光通信", "change_pct": -6.15}, {"name": "军民融合", "change_pct": -1.48}, {"name": "光伏", "change_pct": -1.86}, {"name": "军工", "change_pct": -1.53}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "储能", "change_pct": -1.92}, {"name": "BIPV概念", "change_pct": -0.3}, {"name": "钙钛矿电池", "change_pct": -1.64}, {"name": "异质结电池HJT", "change_pct": -2.65}, {"name": "华为产业链", "change_pct": -1.2}]}, {"code": "002549", "name": "凯美特气", "hot_rank": 36, "hot_rank_chg": 195, "stock_cnt": 5785, "price": "14.01", "change": "2.64", "market_id": "33", "circulate_market_value": "9699957000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 37, "hot_rank_chg": -24, "stock_cnt": 5785, "price": "37.59", "change": "-8.47", "market_id": "17", "circulate_market_value": "149291960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 38, "hot_rank_chg": 1, "stock_cnt": 5785, "price": "103.55", "change": "-10.00", "market_id": "17", "circulate_market_value": "37352908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 39, "hot_rank_chg": -7, "stock_cnt": 5785, "price": "12.71", "change": "-2.68", "market_id": "33", "circulate_market_value": "10207048500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 0.44}, {"name": "蚂蚁集团概念股", "change_pct": 1.67}, {"name": "房地产", "change_pct": 0.55}, {"name": "强势人气股", "change_pct": -1.62}, {"name": "安徽国企改革", "change_pct": -0.39}, {"name": "住房租赁", "change_pct": 1.12}, {"name": "物业管理", "change_pct": 0.71}, {"name": "国企改革", "change_pct": -0.13}, {"name": "旧改", "change_pct": 0.39}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 40, "hot_rank_chg": 7, "stock_cnt": 5785, "price": "28.33", "change": "-9.49", "market_id": "33", "circulate_market_value": "21457570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 41, "hot_rank_chg": 1, "stock_cnt": 5785, "price": "15.82", "change": "-4.70", "market_id": "33", "circulate_market_value": "10999061200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 42, "hot_rank_chg": 1, "stock_cnt": 5785, "price": "61.49", "change": "-10.00", "market_id": "17", "circulate_market_value": "25602450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 43, "hot_rank_chg": -14, "stock_cnt": 5785, "price": "58.08", "change": "-5.64", "market_id": "17", "circulate_market_value": "1152544880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603567", "name": "珍宝岛", "hot_rank": 44, "hot_rank_chg": 31, "stock_cnt": 5785, "price": "6.88", "change": "6.83", "market_id": "17", "circulate_market_value": "6463094600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.03}, {"name": "创新药", "change_pct": -1.65}, {"name": "医药", "change_pct": -1.02}, {"name": "流感", "change_pct": -0.67}]}, {"code": "002879", "name": "长缆科技", "hot_rank": 45, "hot_rank_chg": -26, "stock_cnt": 5785, "price": "18.90", "change": "-4.83", "market_id": "33", "circulate_market_value": "2591927500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002498", "name": "汉缆股份", "hot_rank": 46, "hot_rank_chg": -10, "stock_cnt": 5785, "price": "6.54", "change": "-7.89", "market_id": "33", "circulate_market_value": "21757246000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.36}, {"name": "核电", "change_pct": -1.65}, {"name": "5G", "change_pct": -3.64}, {"name": "一带一路", "change_pct": -0.33}, {"name": "充电桩", "change_pct": -2.2}, {"name": "氢能源/燃料电池", "change_pct": -1.05}, {"name": "风电", "change_pct": -1.23}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "储能", "change_pct": -1.92}, {"name": "特高压", "change_pct": -2.36}, {"name": "智能电网", "change_pct": -1.44}, {"name": "海洋经济", "change_pct": -0.75}]}, {"code": "601179", "name": "中国西电", "hot_rank": 47, "hot_rank_chg": 2, "stock_cnt": 5785, "price": "13.44", "change": "-4.61", "market_id": "17", "circulate_market_value": "68891859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 48, "hot_rank_chg": 60, "stock_cnt": 5785, "price": "52.70", "change": "10.00", "market_id": "17", "circulate_market_value": "6886477600.00", "change_type": "1", "change_section": "11", "change_days": "7", "change_reason": "控制权拟变更"}, {"code": "000676", "name": "智度股份", "hot_rank": 49, "hot_rank_chg": 12, "stock_cnt": 5785, "price": "7.45", "change": "4.63", "market_id": "33", "circulate_market_value": "9379762600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.55}, {"name": "人工智能", "change_pct": -0.21}, {"name": "游戏", "change_pct": 0.39}, {"name": "智能音箱", "change_pct": -2.76}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.77}, {"name": "数字经济", "change_pct": 1.02}, {"name": "百度概念股", "change_pct": 0.9}, {"name": "腾讯概念股", "change_pct": -0.06}, {"name": "拼多多概念股", "change_pct": 0.59}, {"name": "传媒", "change_pct": 1.28}, {"name": "全息概念", "change_pct": -0.98}, {"name": "NFT", "change_pct": 1.56}, {"name": "元宇宙", "change_pct": 0.09}, {"name": "web3.0", "change_pct": 1.35}, {"name": "字节跳动概念股", "change_pct": 0.67}, {"name": "数字人民币", "change_pct": 1.78}, {"name": "智慧政务", "change_pct": 1.59}, {"name": "华为鸿蒙", "change_pct": 1.69}, {"name": "盲盒", "change_pct": 1.06}, {"name": "AI营销", "change_pct": 0.34}, {"name": "华为产业链", "change_pct": -1.2}, {"name": "供应链金融", "change_pct": 1.54}, {"name": "ChatGPT", "change_pct": -0.08}, {"name": "小红书概念股", "change_pct": 0.94}, {"name": "区块链", "change_pct": 1.2}]}, {"code": "002310", "name": "东方新能", "hot_rank": 50, "hot_rank_chg": 38, "stock_cnt": 5785, "price": "2.65", "change": "9.96", "market_id": "33", "circulate_market_value": "11657375000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "重大资产重组", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.58}, {"name": "京津冀", "change_pct": -0.19}, {"name": "旅游", "change_pct": 1.39}, {"name": "园林", "change_pct": -0.53}, {"name": "海绵城市", "change_pct": 1.01}, {"name": "固废处理", "change_pct": -0.47}, {"name": "雄安新区", "change_pct": 0.06}, {"name": "北京城市规划", "change_pct": 0.84}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.64}, {"name": "碳中和", "change_pct": -0.33}, {"name": "乡村振兴", "change_pct": 0.67}, {"name": "汽车拆解", "change_pct": -0.09}, {"name": "土壤修复", "change_pct": -0.62}, {"name": "核污染防治", "change_pct": -1.58}, {"name": "新型城镇化", "change_pct": -0.06}, {"name": "低价股", "change_pct": 0.68}, {"name": "西部大开发", "change_pct": 0.48}]}, {"code": "600617", "name": "国新能源", "hot_rank": 51, "hot_rank_chg": -16, "stock_cnt": 5785, "price": "3.66", "change": "-1.88", "market_id": "17", "circulate_market_value": "6498486200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "山西国企改革", "change_pct": -0.63}, {"name": "天然气", "change_pct": -0.62}, {"name": "油气改革", "change_pct": -0.25}, {"name": "国企改革", "change_pct": -0.13}]}, {"code": "600744", "name": "华银电力", "hot_rank": 52, "hot_rank_chg": 18, "stock_cnt": 5785, "price": "7.36", "change": "-3.29", "market_id": "17", "circulate_market_value": "14949075000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.53}, {"name": "电力体制改革", "change_pct": -1.09}, {"name": "火电", "change_pct": -1.18}, {"name": "风电", "change_pct": -1.23}, {"name": "储能", "change_pct": -1.92}, {"name": "碳中和", "change_pct": -0.33}, {"name": "国企改革", "change_pct": -0.13}]}, {"code": "300534", "name": "陇神戎发", "hot_rank": 53, "hot_rank_chg": 15, "stock_cnt": 5785, "price": "14.25", "change": "6.18", "market_id": "33", "circulate_market_value": "4304233700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 54, "hot_rank_chg": 206, "stock_cnt": 5785, "price": "6.89", "change": "1.92", "market_id": "33", "circulate_market_value": "4517814500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.46}, {"name": "新零售", "change_pct": 1.67}, {"name": "农业种植", "change_pct": 0.32}, {"name": "冷链", "change_pct": -0.2}, {"name": "大农业", "change_pct": 0.66}, {"name": "预制菜", "change_pct": 1.58}, {"name": "国企改革", "change_pct": -0.13}, {"name": "可降解塑料", "change_pct": -0.67}, {"name": "免税店概念", "change_pct": 1.67}, {"name": "湖北国企改革", "change_pct": -0.32}]}, {"code": "920176", "name": "维琪科技", "hot_rank": 55, "hot_rank_chg": -41, "stock_cnt": 5785, "price": "108.51", "change": "-30.00", "market_id": "151", "circulate_market_value": "862328970.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002222", "name": "福晶科技", "hot_rank": 56, "hot_rank_chg": 103, "stock_cnt": 5785, "price": "58.40", "change": "1.94", "market_id": "33", "circulate_market_value": "27340060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 57, "hot_rank_chg": -2, "stock_cnt": 5785, "price": "79.85", "change": "-6.06", "market_id": "33", "circulate_market_value": "117126520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002900", "name": "哈三联", "hot_rank": 58, "hot_rank_chg": 11, "stock_cnt": 5785, "price": "12.98", "change": "3.51", "market_id": "33", "circulate_market_value": "2091368800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -1.65}, {"name": "医药", "change_pct": -1.02}, {"name": "化学原料药", "change_pct": -0.78}, {"name": "医美", "change_pct": -0.12}, {"name": "新冠病毒防治", "change_pct": -0.38}, {"name": "化妆品", "change_pct": 0.02}]}, {"code": "601727", "name": "上海电气", "hot_rank": 59, "hot_rank_chg": 154, "stock_cnt": 5785, "price": "6.85", "change": "3.79", "market_id": "17", "circulate_market_value": "86417132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -2.64}, {"name": "泛在电力物联网", "change_pct": -1.36}, {"name": "上海国企改革", "change_pct": 1.26}, {"name": "核电", "change_pct": -1.65}, {"name": "一带一路", "change_pct": -0.33}, {"name": "工业自动化", "change_pct": -1.32}, {"name": "大飞机", "change_pct": -1.53}, {"name": "高铁轨交", "change_pct": -0.77}, {"name": "氢能源/燃料电池", "change_pct": -1.05}, {"name": "光伏", "change_pct": -1.86}, {"name": "风电", "change_pct": -1.23}, {"name": "白马股", "change_pct": -0.01}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "机器人", "change_pct": -1.24}, {"name": "储能", "change_pct": -1.92}, {"name": "碳中和", "change_pct": -0.33}, {"name": "智能制造", "change_pct": -1.15}, {"name": "工业互联网", "change_pct": -0.41}, {"name": "独角兽", "change_pct": 0.85}, {"name": "换电概念", "change_pct": -0.85}, {"name": "虚拟电厂", "change_pct": -1.3}, {"name": "工业母机", "change_pct": -1.96}, {"name": "东数西算/算力", "change_pct": -1.3}, {"name": "超超临界发电", "change_pct": -1.02}, {"name": "钒电池", "change_pct": -0.78}, {"name": "减速器", "change_pct": -1.06}, {"name": "光热发电", "change_pct": -0.31}, {"name": "国企改革", "change_pct": -0.13}, {"name": "特高压", "change_pct": -2.36}, {"name": "回购", "change_pct": -1.39}, {"name": "智能电网", "change_pct": -1.44}, {"name": "核聚变", "change_pct": -1.88}, {"name": "区块链", "change_pct": 1.2}, {"name": "钍基熔盐堆", "change_pct": -1.16}]}, {"code": "002083", "name": "孚日股份", "hot_rank": 60, "hot_rank_chg": -19, "stock_cnt": 5785, "price": "10.80", "change": "-10.00", "market_id": "33", "circulate_market_value": "10223701300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.66}, {"name": "锂电池", "change_pct": -1.95}, {"name": "优化生育（三孩）", "change_pct": 0.71}, {"name": "举牌", "change_pct": -0.23}, {"name": "纺织服装", "change_pct": 1.15}, {"name": "山东国企改革", "change_pct": -0.57}, {"name": "教育", "change_pct": 1.38}, {"name": "外贸受益概念", "change_pct": 0.03}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "抗菌面料", "change_pct": -0.08}, {"name": "国企改革", "change_pct": -0.13}, {"name": "新冠病毒防治", "change_pct": -0.38}]}, {"code": "603459", "name": "红板科技", "hot_rank": 61, "hot_rank_chg": -8, "stock_cnt": 5785, "price": "88.55", "change": "-4.27", "market_id": "17", "circulate_market_value": "7000042000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 62, "hot_rank_chg": -34, "stock_cnt": 5785, "price": "390.86", "change": "-2.29", "market_id": "33", "circulate_market_value": "1665095300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 64, "hot_rank_chg": -8, "stock_cnt": 5785, "price": "9.26", "change": "-10.01", "market_id": "17", "circulate_market_value": "6299760200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -1.59}, {"name": "雄安新区", "change_pct": 0.06}, {"name": "煤化工", "change_pct": -0.7}]}, {"code": "600522", "name": "中天科技", "hot_rank": 65, "hot_rank_chg": -2, "stock_cnt": 5785, "price": "29.96", "change": "-8.27", "market_id": "17", "circulate_market_value": "102251972000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 66, "hot_rank_chg": 51, "stock_cnt": 5785, "price": "93.35", "change": "1.03", "market_id": "33", "circulate_market_value": "325475370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 67, "hot_rank_chg": -15, "stock_cnt": 5785, "price": "5.28", "change": "10.00", "market_id": "33", "circulate_market_value": "2672358200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "锂电材料", "xgb_concepts": [{"name": "仪器仪表", "change_pct": -1.21}, {"name": "锂电池", "change_pct": -1.95}, {"name": "ST摘帽", "change_pct": -0.02}, {"name": "有机硅", "change_pct": -1.05}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "华为产业链", "change_pct": -1.2}, {"name": "供应链金融", "change_pct": 1.54}]}, {"code": "603538", "name": "美诺华", "hot_rank": 68, "hot_rank_chg": 54, "stock_cnt": 5785, "price": "26.70", "change": "-3.65", "market_id": "17", "circulate_market_value": "8995762700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 70, "hot_rank_chg": 84, "stock_cnt": 5785, "price": "54.21", "change": "-2.76", "market_id": "33", "circulate_market_value": "35561220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 71, "hot_rank_chg": 102, "stock_cnt": 5785, "price": "11.77", "change": "-0.51", "market_id": "33", "circulate_market_value": "40935239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.46}, {"name": "人工智能", "change_pct": -0.21}, {"name": "VR&AR", "change_pct": -1.75}, {"name": "直播/短视频", "change_pct": 1.3}, {"name": "大数据", "change_pct": 0.8}, {"name": "教育", "change_pct": 1.38}, {"name": "百度概念股", "change_pct": 0.9}, {"name": "阿里巴巴概念股", "change_pct": 0.13}, {"name": "腾讯概念股", "change_pct": -0.06}, {"name": "传媒", "change_pct": 1.28}, {"name": "快手概念股", "change_pct": 1.2}, {"name": "NFT", "change_pct": 1.56}, {"name": "元宇宙", "change_pct": 0.09}, {"name": "虚拟数字人", "change_pct": 1.07}, {"name": "web3.0", "change_pct": 1.35}, {"name": "AIGC概念", "change_pct": -0.12}, {"name": "字节跳动概念股", "change_pct": 0.67}, {"name": "职业教育", "change_pct": 1.93}, {"name": "云游戏", "change_pct": -1.11}, {"name": "网红/MCN", "change_pct": 0.92}, {"name": "5G消息/RCS", "change_pct": 1.63}, {"name": "AI营销", "change_pct": 0.34}, {"name": "词元概念/Token", "change_pct": -0.67}, {"name": "人工智能大模型", "change_pct": 0.37}, {"name": "Sora/AI视频", "change_pct": 0.52}, {"name": "智谱AI", "change_pct": 0.98}, {"name": "小红书概念股", "change_pct": 0.94}, {"name": "区块链", "change_pct": 1.2}]}, {"code": "688146", "name": "中船特气", "hot_rank": 72, "hot_rank_chg": -38, "stock_cnt": 5785, "price": "275.80", "change": "-3.21", "market_id": "17", "circulate_market_value": "39982958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 73, "hot_rank_chg": 26, "stock_cnt": 5785, "price": "115.40", "change": "-11.67", "market_id": "33", "circulate_market_value": "128513636000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 74, "hot_rank_chg": 8, "stock_cnt": 5785, "price": "30.34", "change": "-3.83", "market_id": "33", "circulate_market_value": "23738156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 75, "hot_rank_chg": 69, "stock_cnt": 5785, "price": "64.72", "change": "-0.83", "market_id": "17", "circulate_market_value": "39776063000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 76, "hot_rank_chg": -17, "stock_cnt": 5785, "price": "45.57", "change": "-8.31", "market_id": "17", "circulate_market_value": "28605051000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 77, "hot_rank_chg": -1, "stock_cnt": 5785, "price": "35.58", "change": "-1.25", "market_id": "33", "circulate_market_value": "131327381000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 78, "hot_rank_chg": -6, "stock_cnt": 5785, "price": "113.39", "change": "-10.00", "market_id": "17", "circulate_market_value": "273468200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002969", "name": "嘉美包装", "hot_rank": 79, "hot_rank_chg": 89, "stock_cnt": 5785, "price": "12.61", "change": "10.04", "market_id": "33", "circulate_market_value": "13779391000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "包装印刷", "change_pct": 0.04}, {"name": "啤酒", "change_pct": 0.78}, {"name": "植物奶", "change_pct": 2.8}, {"name": "饮料", "change_pct": 2.42}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 80, "hot_rank_chg": -1, "stock_cnt": 5785, "price": "31.69", "change": "-0.25", "market_id": "17", "circulate_market_value": "652870820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 81, "hot_rank_chg": 11, "stock_cnt": 5785, "price": "105.75", "change": "-10.00", "market_id": "33", "circulate_market_value": "203337210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300260", "name": "新莱应材", "hot_rank": 83, "hot_rank_chg": 176, "stock_cnt": 5785, "price": "55.90", "change": "-6.40", "market_id": "33", "circulate_market_value": "16078905000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 84, "hot_rank_chg": 14, "stock_cnt": 5785, "price": "61.02", "change": "-0.02", "market_id": "33", "circulate_market_value": "1995259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 85, "hot_rank_chg": 18, "stock_cnt": 5785, "price": "37.29", "change": "-2.61", "market_id": "33", "circulate_market_value": "56271021000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301421", "name": "波长光电", "hot_rank": 86, "hot_rank_chg": 135, "stock_cnt": 5785, "price": "82.12", "change": "20.01", "market_id": "33", "circulate_market_value": "3802852800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体光学"}, {"code": "300293", "name": "蓝英装备", "hot_rank": 87, "hot_rank_chg": 1162, "stock_cnt": 5785, "price": "16.95", "change": "17.38", "market_id": "33", "circulate_market_value": "5736525900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600619", "name": "海立股份", "hot_rank": 88, "hot_rank_chg": 291, "stock_cnt": 5785, "price": "13.66", "change": "9.98", "market_id": "17", "circulate_market_value": "10780127700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机"}, {"code": "601678", "name": "滨化股份", "hot_rank": 89, "hot_rank_chg": -32, "stock_cnt": 5785, "price": "6.50", "change": "-7.93", "market_id": "17", "circulate_market_value": "13281685800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.95}, {"name": "军民融合", "change_pct": -1.48}, {"name": "氢能源/燃料电池", "change_pct": -1.05}, {"name": "烧碱", "change_pct": -0.69}, {"name": "军工", "change_pct": -1.53}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "环氧丙烷", "change_pct": -1.25}, {"name": "氟化工", "change_pct": -2.52}, {"name": "双氧水", "change_pct": -1.21}, {"name": "液氯", "change_pct": -2.66}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 90, "hot_rank_chg": -28, "stock_cnt": 5785, "price": "25.49", "change": "-9.99", "market_id": "17", "circulate_market_value": "4662970700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 91, "hot_rank_chg": -26, "stock_cnt": 5785, "price": "56.42", "change": "-9.64", "market_id": "33", "circulate_market_value": "48163984000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 92, "hot_rank_chg": -54, "stock_cnt": 5785, "price": "28.87", "change": "-6.39", "market_id": "33", "circulate_market_value": "40544824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 93, "hot_rank_chg": 31, "stock_cnt": 5785, "price": "13.50", "change": "-4.59", "market_id": "33", "circulate_market_value": "20598048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 94, "hot_rank_chg": 15, "stock_cnt": 5785, "price": "34.03", "change": "-3.46", "market_id": "33", "circulate_market_value": "137059950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 95, "hot_rank_chg": 102, "stock_cnt": 5785, "price": "181.56", "change": "-13.21", "market_id": "33", "circulate_market_value": "197607730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 96, "hot_rank_chg": -1, "stock_cnt": 5785, "price": "71.14", "change": "-9.99", "market_id": "33", "circulate_market_value": "46456954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 97, "hot_rank_chg": 22, "stock_cnt": 5785, "price": "16.06", "change": "3.28", "market_id": "17", "circulate_market_value": "6728619200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002851", "name": "麦格米特", "hot_rank": 98, "hot_rank_chg": 100, "stock_cnt": 5785, "price": "117.57", "change": "-10.00", "market_id": "33", "circulate_market_value": "54223428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 99, "hot_rank_chg": 30, "stock_cnt": 5785, "price": "173.57", "change": "-10.00", "market_id": "33", "circulate_market_value": "135377680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 100, "hot_rank_chg": -10, "stock_cnt": 5785, "price": "92.10", "change": "-4.80", "market_id": "17", "circulate_market_value": "134747310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "300067", "name": "安诺其", "price": 5.62, "change_pct": 20.09, "reason": "1、差异化染料市场领先企业，拥有分散染料产能82700吨，活性染料14750吨，中间体产能88000吨；\n2、公司拟收购烽云信息100%股权，标的为算力与网络综合服务商，客户包括字节跳动、阿里巴巴、腾讯等", "plates": ["染料"], "limit_up_days": 1, "turnover_ratio": 16.52, "first_limit_up": 1785215523, "break_limit_up_times": 1}, {"code": "002279", "name": "久其软件", "price": 6.47, "change_pct": 10.03, "reason": "国内领先的报表管理软件供应商；公司新一代大模型应用管理平台女娲 GPT 是快速集成、开箱即用的平台，提供大模型纳管与调优、智能体智能编排等能力 ，已落地多个智能化场景 ，覆盖内控、财务等核心业务领域", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.77, "first_limit_up": 1785203259, "break_limit_up_times": 0}, {"code": "600895", "name": "张江高科", "price": 31.04, "change_pct": 9.99, "reason": "全资子公司张江浩成创业投资有限公司持有上海微电子10.78%股份；上海微电子是国产光刻机龙头", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 1.0, "first_limit_up": 1785201900, "break_limit_up_times": 0}, {"code": "002847", "name": "盐津铺子", "price": 50.99, "change_pct": 10.01, "reason": "国内小品类休闲食品的领导品牌之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.35, "first_limit_up": 1785209346, "break_limit_up_times": 0}, {"code": "605179", "name": "一鸣食品", "price": 14.55, "change_pct": 9.98, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.22, "first_limit_up": 1785204641, "break_limit_up_times": 1}, {"code": "000517", "name": "荣安地产", "price": 1.85, "change_pct": 10.12, "reason": "浙江优质地产商，宁波唯一一家纯房地产类上市公司", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.88, "first_limit_up": 1785217410, "break_limit_up_times": 0}, {"code": "002869", "name": "金溢科技", "price": 15.77, "change_pct": 9.97, "reason": "公司打造了完整的智能网联车路云产品体系，硬件设备主要集中在车、路两端，包括车载TBOX、车载智能网关、V2X-OBU、V2X-RSU、ETC-RSU、ETC-OBU、边缘计算单元等设备，软件产品包括车路协同云平台、C-V2X车载HMI人机交互系统管理平台等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.41, "first_limit_up": 1785208995, "break_limit_up_times": 0}, {"code": "603297", "name": "永新光学", "price": 101.66, "change_pct": 10.0, "reason": "公司能提供光刻物镜", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 1.7, "first_limit_up": 1785201900, "break_limit_up_times": 0}, {"code": "000533", "name": "顺钠股份", "price": 11.56, "change_pct": 9.99, "reason": "全资子公司顺特电气设备有限公司产品广泛用于智能电网建设，干式变压器、开关柜等产品应用于数据中心基础设施建设等领域", "plates": ["智能电网"], "limit_up_days": 4, "turnover_ratio": 28.08, "first_limit_up": 1785202242, "break_limit_up_times": 21}, {"code": "002195", "name": "岩山科技", "price": 6.83, "change_pct": 9.98, "reason": "公司拥有国内唯一的50亿参数脑电大模型，深度绑定华山医院为主的iBRAIN联盟，获取了极其稀缺颅内脑电数据；子公司LumiMind近日发布首款脑电睡眠仪", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 4.22, "first_limit_up": 1785202839, "break_limit_up_times": 0}, {"code": "301139", "name": "*ST元道", "price": 3.12, "change_pct": 20.0, "reason": "公司携手中国移动等主要客户进行共同合作投资建设智能算力中心", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 32.29, "first_limit_up": 1785216675, "break_limit_up_times": 2}, {"code": "002388", "name": "新亚制程", "price": 5.28, "change_pct": 10.0, "reason": "公司产品已批量用于人型机器人主板，与多家客户建立合作", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 21.65, "first_limit_up": 1785202473, "break_limit_up_times": 5}, {"code": "300663", "name": "科蓝软件", "price": 8.96, "change_pct": 19.95, "reason": "1、清华科蓝先进智能数据库研究院推出的SUNDB数据库系列已将“脑机接口数据底座”作为重点拓展方向，推进面向脑机接口信号的时序写入、毫秒级查询及向量化检索等工程化路线；\n2、公司已构建区块链+边缘计算产品，在大数据分析和智能合约等领域研发出包括智能风控、精准营销、智能推荐等系统", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 14.91, "first_limit_up": 1785203148, "break_limit_up_times": 1}, {"code": "002387", "name": "维信诺", "price": 6.86, "change_pct": 9.94, "reason": "全球AMOLED显示产业的领军企业之一；公司ViP技术已量产供货，4月9日获行业协会鉴定“国际领先”，并搭载穿戴产品出货", "plates": ["MicroLED"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1785203022, "break_limit_up_times": 1}, {"code": "000909", "name": "*ST数源", "price": 4.44, "change_pct": 9.9, "reason": "公司预计上半年亏损1000万元-1700万元", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 2.46, "first_limit_up": 1785209289, "break_limit_up_times": 1}, {"code": "600850", "name": "电科数字", "price": 15.28, "change_pct": 10.01, "reason": "1、子公司柏飞电子为半导体装备生产商提供光刻机的控制器；\n2、公司AI相关订单已突破百个，通过智弈智算平台为客户提供异构算力调度服务，聚焦算力需求领域", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 2.26, "first_limit_up": 1785203292, "break_limit_up_times": 1}, {"code": "600775", "name": "南京熊猫", "price": 10.35, "change_pct": 9.99, "reason": "1、公司承担江苏省重点研发计划“基于脑机接口技术的多模态人机交互系统集成关键技术研发”项目，处于科研开发阶段；\n2、公司的新一代卫星通信终端项目包括软硬件，可支持终端与终端之间的卫星通信", "plates": ["脑科学"], "limit_up_days": 2, "turnover_ratio": 8.44, "first_limit_up": 1785203533, "break_limit_up_times": 1}, {"code": "000566", "name": "海南海药", "price": 5.83, "change_pct": 10.0, "reason": "1、公司参股上海力声特医学科技有限公司，其核心产品人工耳蜗被视为目前临床应用最成熟的脑机接口之一，通过电信号刺激听神经实现听觉重建；\n2、海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["脑科学"], "limit_up_days": 2, "turnover_ratio": 6.22, "first_limit_up": 1785202278, "break_limit_up_times": 0}, {"code": "301421", "name": "波长光电", "price": 82.12, "change_pct": 20.01, "reason": "公司已具备提供光刻机配套的大孔径光学镜头的能力；成功开发的光刻机平行光源系统可用于国产光刻机领域配套，并已交付多套系统用于接近式掩膜芯片光刻工序", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 9.74, "first_limit_up": 1785201900, "break_limit_up_times": 0}, {"code": "002173", "name": "创新医疗", "price": 22.76, "change_pct": 10.0, "reason": "公司此前出资设立的“杭州博灵医疗科技有限公司”，该公司运用脑机接口技术帮助偏瘫患者恢复对残疾肢体自主控制的技术研究工作取得了一定的进展", "plates": ["脑科学"], "limit_up_days": 2, "turnover_ratio": 8.81, "first_limit_up": 1785202200, "break_limit_up_times": 2}, {"code": "002338", "name": "奥普光电", "price": 43.22, "change_pct": 10.0, "reason": "1、公司实控人为长春光学精密机械与物理研究所，光栅尺是半导体设备的核心部件之一，可用于半导体加工领域多种设备；\n2、公司空间光学系统、高性能碳纤维复合材料制品等产品已应用于卫星，光电经纬仪、航空/航天相机等多次参与神舟、嫦娥等国家重大任务", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 1.46, "first_limit_up": 1785201900, "break_limit_up_times": 0}, {"code": "600619", "name": "海立股份", "price": 13.66, "change_pct": 9.98, "reason": "公司为上海微电子装备集团的封装光刻机提供冷却系统配套", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 1.14, "first_limit_up": 1785201900, "break_limit_up_times": 0}, {"code": "603389", "name": "亚振家居", "price": 46.59, "change_pct": 10.01, "reason": "公司主要从事中高端海派艺术家具产品的生产", "plates": ["ST摘帽"], "limit_up_days": 2, "turnover_ratio": 1.11, "first_limit_up": 1785203069, "break_limit_up_times": 0}, {"code": "002309", "name": "中利集团", "price": 3.37, "change_pct": 10.13, "reason": "1、公司上半年业绩扭亏，主要系本期确认大额债务重组收益；\n2、公司主要线缆产品涵盖阻燃耐火软电缆、舰船用电缆、高铁及铁路信号线缆、新能源汽车及充电桩线缆、液冷电缆、数据通信线缆、海洋工程平台用电缆、光电复合缆、光纤预制棒及光纤等；\n3、全球领先的组件供应商、光伏电站开发与EPC服务商", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 6.79, "first_limit_up": 1785202272, "break_limit_up_times": 0}, {"code": "688496", "name": "*ST清越", "price": 1.07, "change_pct": 20.22, "reason": "公司的硅基OLED产品可以用于MR头戴显示产品中", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 6.19, "first_limit_up": 1785202318, "break_limit_up_times": 1}, {"code": "000948", "name": "南天信息", "price": 14.07, "change_pct": 10.01, "reason": "1、国内领先的金融科技数字化综合解决方案和服务提供商之一；公司以“金融科技”和“数字化服务”为业务主线，持续围绕云计算、大数据、人工智能等新技术开展技术孵化和应用孵化，发力自主可控技术体系/生态、云计算数据中心建设、分布式云平台/云核心建设、电子渠道应用平台、区块链技术与应用等领域；\n2、公司有相关跨境支付的业务筹划，也开发了部分银行客户与cips的接口", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.18, "first_limit_up": 1785202869, "break_limit_up_times": 0}, {"code": "603980", "name": "吉华集团", "price": 6.5, "change_pct": 9.98, "reason": "大型的染料及染料中间体生产企业；公司为宇树机器人间接投资方之一", "plates": ["染料"], "limit_up_days": 1, "turnover_ratio": 5.57, "first_limit_up": 1785215389, "break_limit_up_times": 0}, {"code": "002995", "name": "天地在线", "price": 16.97, "change_pct": 9.98, "reason": "公司在自身数字营销及虚拟数字业务的基础上，已尝试在AI数字人、企业AI助手等应用产品上探索布局，参股公司世优科技推出“世优波塔A 数字人智能体已与Deepseek的通用人工智能(AGI)能力结合", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 8.51, "first_limit_up": 1785203448, "break_limit_up_times": 0}, {"code": "000659", "name": "珠海中富", "price": 2.77, "change_pct": 9.92, "reason": "国内生产规模最大的饮料塑料包装企业之一，主营饮料包装制品、饮料加工、胶罐、纸杯，客户包括元气森林", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.62, "first_limit_up": 1785204516, "break_limit_up_times": 0}, {"code": "000503", "name": "国新健康", "price": 7.17, "change_pct": 9.97, "reason": "公司已设立 AI 中心，推出 “天枢・三医” 大模型与 “灵犀” 智能体开发平台，推进 “AI IN ALL” 专项计划，医保智能体技术已在东营、徐州、湖南等多地区医保场景实现应用", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 3.77, "first_limit_up": 1785214866, "break_limit_up_times": 0}, {"code": "002199", "name": "东晶电子", "price": 12.17, "change_pct": 10.04, "reason": "1、公司撤销退市风险警示；\n2、国内最具规模的石英晶体元器件制造商之一；公司的核心产品包括石英晶体谐振器和振荡器，这些产品是电子设备的重要组件，广泛应用于通讯、汽车电子、工业控制、家用电器、智能安防等多个领域", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1785202386, "break_limit_up_times": 0}, {"code": "002642", "name": "荣联科技", "price": 7.26, "change_pct": 10.0, "reason": "企业云计算和大数据专业服务提供商；公司与阿里云、 百度及新华三等厂商在大模型一体机方面开展深度协作， 通过整合阿里云底层算力与自研平台， 形成 “一体机+行业云+自研平台”模式", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.97, "first_limit_up": 1785202719, "break_limit_up_times": 1}, {"code": "600076", "name": "康欣新材", "price": 3, "change_pct": 9.89, "reason": "1、公司收购宇邦半导体相关股权已于2026年4月完成工商变更登记，并将其纳入合并财务报表范围；\n2、集装箱底板龙头；公司聚焦空天等前沿领域，投资垣信卫星等项目，还与中航通飞、徐工等合作推进优质项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.27, "first_limit_up": 1785202200, "break_limit_up_times": 0}, {"code": "603400", "name": "华之杰", "price": 42.85, "change_pct": 10.01, "reason": "公司产品作为扫地机器人的功能部件，可以应用于扫地机器人中", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 21.88, "first_limit_up": 1785221373, "break_limit_up_times": 0}, {"code": "000859", "name": "国风新材", "price": 8.44, "change_pct": 10.04, "reason": "公司半导体封装用光敏聚酰亚胺（PSPI）光刻胶研发取得阶段性成果，目前已处于实验室送样检测阶段", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 3.79, "first_limit_up": 1785202587, "break_limit_up_times": 0}, {"code": "600199", "name": "金种子酒", "price": 7.47, "change_pct": 10.01, "reason": "深耕安徽地区白酒企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.67, "first_limit_up": 1785208021, "break_limit_up_times": 0}, {"code": "600693", "name": "东百集团", "price": 8.61, "change_pct": 9.96, "reason": "公司主营以百货零售为主业，同时经营商业地产开发和房产租赁", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.42, "first_limit_up": 1785203792, "break_limit_up_times": 1}, {"code": "002212", "name": "天融信", "price": 6, "change_pct": 10.09, "reason": "公司智算云赋能OpenClaw安全稳定运行", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 6.26, "first_limit_up": 1785215775, "break_limit_up_times": 1}, {"code": "002687", "name": "乔治白", "price": 5.3, "change_pct": 9.96, "reason": "中高端职业装领导者；公司主要从事“乔治白”“giuseppe”品牌的职业装以及校服产品设计研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1785205332, "break_limit_up_times": 0}, {"code": "605068", "name": "明新旭腾", "price": 17.02, "change_pct": 10.02, "reason": "公司正积极接触柔性传感器公司，实现皮肤与传感器业务结合", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 3.09, "first_limit_up": 1785202710, "break_limit_up_times": 0}, {"code": "001376", "name": "百通能源", "price": 11.15, "change_pct": 9.96, "reason": "公司主营以煤炭为燃料的热电联产业务，此前拟4亿美元在安哥拉布局电解铝业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 14.07, "first_limit_up": 1785203517, "break_limit_up_times": 1}, {"code": "605162", "name": "新中港", "price": 9.23, "change_pct": 10.01, "reason": "公司专业从事热电联产业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 11.79, "first_limit_up": 1785207580, "break_limit_up_times": 1}, {"code": "003032", "name": "传智教育", "price": 6.62, "change_pct": 9.97, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 12.31, "first_limit_up": 1785203274, "break_limit_up_times": 3}, {"code": "603429", "name": "*ST集友", "price": 8.16, "change_pct": 9.97, "reason": "国内较早烟用接装纸专业生产厂商之一；控股子公司集新能源固态电池关键材料研发中试基地正在建设，并与潜在客户进行技术对接、商务洽谈", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.38, "first_limit_up": 1785201900, "break_limit_up_times": 0}, {"code": "600756", "name": "浪潮软件", "price": 15.39, "change_pct": 10.01, "reason": "国内领先的数字政府方案与服务提供商；公司重点参与建设地方电子政务云平台和行业电子政务云平台", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 13.05, "first_limit_up": 1785206286, "break_limit_up_times": 1}, {"code": "000779", "name": "甘咨询", "price": 11.67, "change_pct": 9.99, "reason": "公司参股10%丝绸之路信息港，后者参与投建数据中心和云平台工程建设，持有丝绸之路大数据37%股权、丝路信息港云计算100%股权", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 17.53, "first_limit_up": 1785222000, "break_limit_up_times": 0}, {"code": "603918", "name": "金桥信息", "price": 10.42, "change_pct": 10.03, "reason": "1、公司依托阿里巴巴、蚂蚁集团等优质合作伙伴搭建司法大模型技术生态；\n2、公司的区块链技术实现法院数字化司法可信、保障信息安全，已在多家法院进行试点应用", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 4.55, "first_limit_up": 1785204135, "break_limit_up_times": 1}, {"code": "002310", "name": "东方新能", "price": 2.65, "change_pct": 9.96, "reason": "公司上半年业绩扭亏为盈，主要得益于报告期内重大资产购买的标的资产纳入合并报表范围，以现金购买的海城锐海100%股权及电投瑞享80%股权已完成过户，标的资产合计持有815.85MW新能源电站", "plates": ["智能电网", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 9.31, "first_limit_up": 1785204045, "break_limit_up_times": 0}, {"code": "001358", "name": "兴欣新材", "price": 24.53, "change_pct": 10.0, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商；拟斥资5000万元至1亿元回购股份", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 5.85, "first_limit_up": 1785202542, "break_limit_up_times": 0}, {"code": "603580", "name": "艾艾精工", "price": 52.7, "change_pct": 10.0, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 11.65, "first_limit_up": 1785206558, "break_limit_up_times": 5}, {"code": "603221", "name": "爱丽家居", "price": 16.94, "change_pct": 10.0, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 6, "turnover_ratio": 0.33, "first_limit_up": 1785201900, "break_limit_up_times": 0}, {"code": "002969", "name": "嘉美包装", "price": 12.61, "change_pct": 10.03, "reason": "控股股东拟变更为逐越鸿智，追觅科技创始人俞浩将成公司新实控人", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 3.01, "first_limit_up": 1785202287, "break_limit_up_times": 1}, {"code": "603358", "name": "华达科技", "price": 37.46, "change_pct": 10.01, "reason": "公司此前与埃夫特在工业/人形机器人制造研发生产、轻量化材料产品开发及汽车零部件行业应用等领域达成全面战略合作", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 0.9, "first_limit_up": 1785202264, "break_limit_up_times": 0}, {"code": "000045", "name": "深纺织Ａ", "price": 9.96, "change_pct": 10.06, "reason": "公司是国内主要的偏光片研发、生产和销售企业之一，同时具备TFT-LCD用偏光片、OLED电视用偏光片、黑白系列偏光片的生产能力，是国内偏光片行业的领先企业", "plates": ["MicroLED"], "limit_up_days": 1, "turnover_ratio": 2.68, "first_limit_up": 1785202476, "break_limit_up_times": 1}, {"code": "002211", "name": "ST宏达", "price": 4.16, "change_pct": 10.05, "reason": "公司控股股东将变更为巨融科技", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 7.43, "first_limit_up": 1785203358, "break_limit_up_times": 0}, {"code": "002082", "name": "ST万邦", "price": 10.03, "change_pct": 9.98, "reason": "国内拥有药品剂型较多的制药企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.15, "first_limit_up": 1785207225, "break_limit_up_times": 1}, {"code": "603928", "name": "兴业股份", "price": 12.28, "change_pct": 10.04, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 8.57, "first_limit_up": 1785202625, "break_limit_up_times": 1}, {"code": "603716", "name": "塞力医疗", "price": 16.43, "change_pct": 9.97, "reason": "公司与华为技术有限公司及脑机智能全国重点实验室三方签署战略合作，聚焦于精神障碍精准诊疗领域，特别是人工智能在精神医学数字疗法中的应用", "plates": ["脑科学"], "limit_up_days": 2, "turnover_ratio": 10.79, "first_limit_up": 1785202503, "break_limit_up_times": 1}, {"code": "002889", "name": "东方嘉盛", "price": 12.34, "change_pct": 9.98, "reason": "1、公司与国际头部芯片光刻机厂商合作，共同在深圳建设寄售维修保税仓库，为华南片区集成电路制造企业提供全天候快速响应的光刻机寄售维修服务。\n2、公司是国内领先的一体化供应链服务商；为客户提供包括原材料、零部件及产成品采购、订单及合同管理、进出口代理等在内的一体化供应链管理服务。", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 1.5, "first_limit_up": 1785202200, "break_limit_up_times": 0}, {"code": "600303", "name": "曙光股份", "price": 2.71, "change_pct": 10.16, "reason": "汽车车桥及相关底盘零部件供应商，产品包括新能源汽车车桥、悬架系统模块、半轴及齿轮等", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1785203116, "break_limit_up_times": 0}, {"code": "000428", "name": "华天酒店", "price": 3.67, "change_pct": 9.88, "reason": "湖南省旅游酒店支柱企业", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 3.09, "first_limit_up": 1785202395, "break_limit_up_times": 0}, {"code": "600191", "name": "华资实业", "price": 9.46, "change_pct": 10.0, "reason": "国内甜菜制糖企业唯一的上市公司", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.41, "first_limit_up": 1785204320, "break_limit_up_times": 2}, {"code": "002795", "name": "永和智控", "price": 6.05, "change_pct": 10.0, "reason": "公司以家用水暖阀门、管件生产经营为主营业务，产品主要销往欧美市场，是国内最大的水暖阀门生产销售基地之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.35, "first_limit_up": 1785215580, "break_limit_up_times": 0}, {"code": "603232", "name": "格尔软件", "price": 15.13, "change_pct": 10.04, "reason": "1、公司“格尔AI大模型应用安全护栏系统”成为首个通过中国信通院大模型安全围栏能力评估的系统，并前瞻性地为AI智能体构建“数字身份与信任体系”；\n2、公司已加入上海鲲鹏生态联盟，投资的上海泓格后量子科技有限公司致力于抗量子密码领域技术研究、标准制定、产品研发，在政务、金融、军队等领域开展试点、和应用推广工作", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 7.82, "first_limit_up": 1785204288, "break_limit_up_times": 2}, {"code": "300290", "name": "ST荣科", "price": 4.88, "change_pct": 19.9, "reason": "公司子公司辽宁智维云是超聚变的金牌经销商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 10.87, "first_limit_up": 1785205692, "break_limit_up_times": 5}, {"code": "603917", "name": "合力科技", "price": 11.69, "change_pct": 9.97, "reason": "公司主要从事汽车用铸造模具、压铸模具、热冲压模具、铝合金部品和汽车制动系统", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 2.76, "first_limit_up": 1785204045, "break_limit_up_times": 0}, {"code": "600629", "name": "华建集团", "price": 13.43, "change_pct": 9.99, "reason": "公司旗下上海科技创业投资有限公司持有上海微电子装备（集团）股份有限公司13.275%股权", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 2.37, "first_limit_up": 1785203152, "break_limit_up_times": 0}];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公"};