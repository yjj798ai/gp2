const UPDATE_TIME = "2026-07-28 05:42";
const THS_HOT = [
  {
    "name": "脑机接口",
    "rise": 1.37,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "光刻机",
    "rise": -0.64,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创半导体ETF",
    "code": "886054"
  },
  {
    "name": "创新药",
    "rise": -1.01,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -4.62,
    "rate": 0,
    "tag": "",
    "hotTag": "连续210天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -4.81,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续257天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "DRG/DIP",
    "rise": 3.71,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "医疗器械ETF",
    "code": "885947"
  },
  {
    "name": "光刻胶",
    "rise": -1.67,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "AI应用",
    "rise": 0.96,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "算力租赁",
    "rise": -0.41,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续121天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "PCB概念",
    "rise": -3.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": -1.16,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续421天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": -1.55,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续186天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "乳业",
    "rise": 2.75,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 2,
    "etfName": "食品饮料ETF",
    "code": "885462"
  },
  {
    "name": "ST板块",
    "rise": 1.26,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "兵装重组概念",
    "rise": -4.81,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": -2,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "白酒概念",
    "rise": 1.49,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "国家大基金持股",
    "rise": -5.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "芯片概念",
    "rise": -2.42,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "先进封装",
    "rise": -4.06,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续50天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "锂电池概念",
    "rise": -1.32,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  }
];
const THS_EVENTS = [
  {
    "title": "机构：脑机接口商业化进程进一步提速",
    "desc": "",
    "heat": 270832,
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
    "heat": 130904,
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
    "heat": 130741,
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
    "title": "7部门印发《疾病预防控制“十五五”规划》 提出重大传染病防控6项任务",
    "desc": "",
    "heat": 100192,
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
        "chg": 18.48471
      }
    ]
  },
  {
    "title": "中国风电正抢装全球 国产风电海外爆单",
    "desc": "",
    "heat": 92647,
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
    "title": "超额认购逾13倍，上市首日推出配套期权！中际旭创，将登陆港股",
    "desc": "",
    "heat": 35564,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "共进股份",
        "code": "603118",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "中国巨石电子布提价5轮供需紧张引关注",
    "desc": "",
    "heat": 0,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "国际复材",
        "code": "301526",
        "chg": -5.090791
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "华为HMS",
    "change": "+3.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "财税改革",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "微信小店",
    "change": "+3.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+3.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+3.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "DRGs概念",
    "change": "+3.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+2.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子车牌",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饮料",
    "change": "+2.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+2.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "葡萄酒",
    "change": "+2.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+2.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "数字人民币",
    "change": "+2.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子发票",
    "change": "+2.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "职业教育",
    "change": "+2.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "长寿药NMN",
    "change": "+2.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 11,
    "hot_rank_chg": 4,
    "stock_cnt": 5773,
    "price": "11.56",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "7917471700.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.95
      },
      {
        "name": "核电",
        "change_pct": -1.42
      },
      {
        "name": "充电桩",
        "change_pct": -1.88
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.39
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "储能",
        "change_pct": -1.62
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.6
      },
      {
        "name": "智能电网",
        "change_pct": -1.04
      },
      {
        "name": "核聚变",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 12,
    "hot_rank_chg": 10,
    "stock_cnt": 5773,
    "price": "5.71",
    "change": "1.24",
    "market_id": "17",
    "circulate_market_value": "14380691000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.71
      },
      {
        "name": "工业大麻",
        "change_pct": 0.08
      },
      {
        "name": "中药",
        "change_pct": 0.19
      },
      {
        "name": "强势人气股",
        "change_pct": -0.94
      },
      {
        "name": "保健品",
        "change_pct": -0.03
      },
      {
        "name": "民营医院",
        "change_pct": 1.25
      },
      {
        "name": "医药",
        "change_pct": -0.73
      },
      {
        "name": "化学原料药",
        "change_pct": -0.49
      },
      {
        "name": "流感",
        "change_pct": -0.38
      },
      {
        "name": "振兴东北",
        "change_pct": 0.82
      },
      {
        "name": "食品",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 18,
    "hot_rank_chg": 15,
    "stock_cnt": 5773,
    "price": "5.79",
    "change": "1.05",
    "market_id": "33",
    "circulate_market_value": "5980698300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.14
      },
      {
        "name": "锂电池",
        "change_pct": -1.66
      },
      {
        "name": "强势人气股",
        "change_pct": -0.94
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -5.03
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.44
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.52
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 23,
    "hot_rank_chg": 22,
    "stock_cnt": 5773,
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
        "change_pct": 0.19
      },
      {
        "name": "创新药",
        "change_pct": -1.34
      },
      {
        "name": "央企改革",
        "change_pct": -0.52
      },
      {
        "name": "医疗器械",
        "change_pct": -0.0
      },
      {
        "name": "强势人气股",
        "change_pct": -0.94
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.03
      },
      {
        "name": "保健品",
        "change_pct": -0.03
      },
      {
        "name": "民营医院",
        "change_pct": 1.25
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.69
      },
      {
        "name": "医药",
        "change_pct": -0.73
      },
      {
        "name": "化学原料药",
        "change_pct": -0.49
      },
      {
        "name": "海南概念",
        "change_pct": 0.17
      },
      {
        "name": "脑科学",
        "change_pct": 1.37
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.32
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.19
      },
      {
        "name": "食品",
        "change_pct": 1.25
      },
      {
        "name": "国企改革",
        "change_pct": -0.12
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.53
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.09
      },
      {
        "name": "自贸区",
        "change_pct": 0.82
      },
      {
        "name": "合成生物",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 28,
    "hot_rank_chg": -5,
    "stock_cnt": 5773,
    "price": "5.64",
    "change": "-5.53",
    "market_id": "33",
    "circulate_market_value": "199470640000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.39
      },
      {
        "name": "手机产业链",
        "change_pct": -2.71
      },
      {
        "name": "超高清视频",
        "change_pct": -0.47
      },
      {
        "name": "苹果产业链",
        "change_pct": -3.34
      },
      {
        "name": "电竞",
        "change_pct": 0.84
      },
      {
        "name": "半导体",
        "change_pct": -4.23
      },
      {
        "name": "人工智能",
        "change_pct": 0.28
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.03
      },
      {
        "name": "VR&AR",
        "change_pct": -0.98
      },
      {
        "name": "OLED",
        "change_pct": -2.21
      },
      {
        "name": "京津冀",
        "change_pct": -0.05
      },
      {
        "name": "物联网",
        "change_pct": -0.03
      },
      {
        "name": "指纹识别",
        "change_pct": -1.94
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.27
      },
      {
        "name": "白马股",
        "change_pct": 0.05
      },
      {
        "name": "智能制造",
        "change_pct": -0.71
      },
      {
        "name": "小米概念股",
        "change_pct": -2.14
      },
      {
        "name": "国产芯片",
        "change_pct": -3.55
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.97
      },
      {
        "name": "全息概念",
        "change_pct": -0.31
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.2
      },
      {
        "name": "MicroLED",
        "change_pct": -2.11
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.16
      },
      {
        "name": "智能手表",
        "change_pct": -2.11
      },
      {
        "name": "MiniLED",
        "change_pct": -2.27
      },
      {
        "name": "传感器",
        "change_pct": -1.9
      },
      {
        "name": "大硅片",
        "change_pct": -4.39
      },
      {
        "name": "AI PC",
        "change_pct": -2.2
      },
      {
        "name": "华为产业链",
        "change_pct": -0.68
      },
      {
        "name": "回购",
        "change_pct": -1.16
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.09
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.07
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 29,
    "hot_rank_chg": 25,
    "stock_cnt": 5773,
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
        "change_pct": -1.66
      },
      {
        "name": "5G",
        "change_pct": -2.89
      },
      {
        "name": "一带一路",
        "change_pct": -0.25
      },
      {
        "name": "光通信",
        "change_pct": -5.06
      },
      {
        "name": "军民融合",
        "change_pct": -1.13
      },
      {
        "name": "光伏",
        "change_pct": -1.49
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "储能",
        "change_pct": -1.62
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.05
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.16
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.1
      },
      {
        "name": "华为产业链",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "600617",
    "name": "国新能源",
    "hot_rank": 35,
    "hot_rank_chg": 0,
    "stock_cnt": 5773,
    "price": "3.75",
    "change": "0.54",
    "market_id": "17",
    "circulate_market_value": "6658285100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "山西国企改革",
        "change_pct": -1.1
      },
      {
        "name": "天然气",
        "change_pct": -0.9
      },
      {
        "name": "油气改革",
        "change_pct": -0.57
      },
      {
        "name": "国企改革",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "601727",
    "name": "上海电气",
    "hot_rank": 36,
    "hot_rank_chg": 177,
    "stock_cnt": 5773,
    "price": "6.87",
    "change": "4.09",
    "market_id": "17",
    "circulate_market_value": "86669444000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": -2.45
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -0.95
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.1
      },
      {
        "name": "核电",
        "change_pct": -1.42
      },
      {
        "name": "一带一路",
        "change_pct": -0.25
      },
      {
        "name": "工业自动化",
        "change_pct": -0.88
      },
      {
        "name": "大飞机",
        "change_pct": -1.3
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.56
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.89
      },
      {
        "name": "光伏",
        "change_pct": -1.49
      },
      {
        "name": "风电",
        "change_pct": -1.12
      },
      {
        "name": "白马股",
        "change_pct": 0.05
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "机器人",
        "change_pct": -0.84
      },
      {
        "name": "储能",
        "change_pct": -1.62
      },
      {
        "name": "碳中和",
        "change_pct": -0.21
      },
      {
        "name": "智能制造",
        "change_pct": -0.71
      },
      {
        "name": "工业互联网",
        "change_pct": -0.07
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "换电概念",
        "change_pct": -0.43
      },
      {
        "name": "虚拟电厂",
        "change_pct": -1.07
      },
      {
        "name": "工业母机",
        "change_pct": -1.44
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.58
      },
      {
        "name": "超超临界发电",
        "change_pct": -1.08
      },
      {
        "name": "钒电池",
        "change_pct": -0.9
      },
      {
        "name": "减速器",
        "change_pct": -0.8
      },
      {
        "name": "光热发电",
        "change_pct": -0.13
      },
      {
        "name": "国企改革",
        "change_pct": -0.12
      },
      {
        "name": "特高压",
        "change_pct": -2.04
      },
      {
        "name": "回购",
        "change_pct": -1.16
      },
      {
        "name": "智能电网",
        "change_pct": -1.04
      },
      {
        "name": "核聚变",
        "change_pct": -1.43
      },
      {
        "name": "区块链",
        "change_pct": 1.52
      },
      {
        "name": "钍基熔盐堆",
        "change_pct": -1.05
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 38,
    "hot_rank_chg": 6,
    "stock_cnt": 5773,
    "price": "6.04",
    "change": "-2.89",
    "market_id": "17",
    "circulate_market_value": "74872378000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.52
      },
      {
        "name": "核电",
        "change_pct": -1.42
      },
      {
        "name": "强势人气股",
        "change_pct": -0.94
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.17
      },
      {
        "name": "水电",
        "change_pct": -0.87
      },
      {
        "name": "火电",
        "change_pct": -1.29
      },
      {
        "name": "光伏",
        "change_pct": -1.49
      },
      {
        "name": "风电",
        "change_pct": -1.12
      },
      {
        "name": "国企改革",
        "change_pct": -0.12
      },
      {
        "name": "算电协同",
        "change_pct": -2.51
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 49,
    "hot_rank_chg": 7,
    "stock_cnt": 5773,
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
        "change_pct": -1.99
      },
      {
        "name": "雄安新区",
        "change_pct": 0.24
      },
      {
        "name": "煤化工",
        "change_pct": -1.2
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 50,
    "hot_rank_chg": -14,
    "stock_cnt": 5773,
    "price": "6.59",
    "change": "-7.18",
    "market_id": "33",
    "circulate_market_value": "21923586000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.95
      },
      {
        "name": "核电",
        "change_pct": -1.42
      },
      {
        "name": "5G",
        "change_pct": -2.89
      },
      {
        "name": "一带一路",
        "change_pct": -0.25
      },
      {
        "name": "充电桩",
        "change_pct": -1.88
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.89
      },
      {
        "name": "风电",
        "change_pct": -1.12
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "储能",
        "change_pct": -1.62
      },
      {
        "name": "特高压",
        "change_pct": -2.04
      },
      {
        "name": "智能电网",
        "change_pct": -1.04
      },
      {
        "name": "海洋经济",
        "change_pct": -0.58
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 51,
    "hot_rank_chg": 1,
    "stock_cnt": 5773,
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
        "change_pct": -0.69
      },
      {
        "name": "锂电池",
        "change_pct": -1.63
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.74
      },
      {
        "name": "有机硅",
        "change_pct": -0.67
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.04
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      },
      {
        "name": "供应链金融",
        "change_pct": 1.54
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 55,
    "hot_rank_chg": -14,
    "stock_cnt": 5773,
    "price": "11.03",
    "change": "-8.08",
    "market_id": "33",
    "circulate_market_value": "10441428300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.34
      },
      {
        "name": "锂电池",
        "change_pct": -1.63
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.8
      },
      {
        "name": "举牌",
        "change_pct": -0.22
      },
      {
        "name": "纺织服装",
        "change_pct": 1.22
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.34
      },
      {
        "name": "教育",
        "change_pct": 1.7
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.31
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.04
      },
      {
        "name": "抗菌面料",
        "change_pct": 0.17
      },
      {
        "name": "国企改革",
        "change_pct": -0.12
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "600775",
    "name": "南京熊猫",
    "hot_rank": 59,
    "hot_rank_chg": 14,
    "stock_cnt": 5773,
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
        "change_pct": -0.27
      },
      {
        "name": "央企改革",
        "change_pct": -0.51
      },
      {
        "name": "股权转让",
        "change_pct": -0.34
      },
      {
        "name": "5G",
        "change_pct": -2.74
      },
      {
        "name": "军工集团",
        "change_pct": -1.4
      },
      {
        "name": "工业自动化",
        "change_pct": -0.81
      },
      {
        "name": "北斗导航",
        "change_pct": -0.46
      },
      {
        "name": "智慧城市",
        "change_pct": 0.77
      },
      {
        "name": "军工",
        "change_pct": -1.18
      },
      {
        "name": "机器人",
        "change_pct": -0.79
      },
      {
        "name": "白色家电",
        "change_pct": 0.17
      },
      {
        "name": "家电",
        "change_pct": 0.04
      },
      {
        "name": "脑科学",
        "change_pct": 1.38
      },
      {
        "name": "无人机",
        "change_pct": -0.86
      },
      {
        "name": "智能制造",
        "change_pct": -0.66
      },
      {
        "name": "工业互联网",
        "change_pct": -0.03
      },
      {
        "name": "国企改革",
        "change_pct": -0.12
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 60,
    "hot_rank_chg": 10,
    "stock_cnt": 5773,
    "price": "7.48",
    "change": "-1.71",
    "market_id": "17",
    "circulate_market_value": "15192810000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.51
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.21
      },
      {
        "name": "火电",
        "change_pct": -1.32
      },
      {
        "name": "风电",
        "change_pct": -1.12
      },
      {
        "name": "储能",
        "change_pct": -1.6
      },
      {
        "name": "碳中和",
        "change_pct": -0.23
      },
      {
        "name": "国企改革",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "002195",
    "name": "岩山科技",
    "hot_rank": 61,
    "hot_rank_chg": 67,
    "stock_cnt": 5773,
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
        "change_pct": 1.51
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.87
      },
      {
        "name": "人工智能",
        "change_pct": 0.31
      },
      {
        "name": "网络安全",
        "change_pct": 1.59
      },
      {
        "name": "游戏",
        "change_pct": 0.82
      },
      {
        "name": "大数据",
        "change_pct": 1.25
      },
      {
        "name": "脑科学",
        "change_pct": 1.38
      },
      {
        "name": "百度概念股",
        "change_pct": 1.27
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.5
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.24
      },
      {
        "name": "自动刹车",
        "change_pct": 0.47
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.86
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.2
      },
      {
        "name": "AI医疗",
        "change_pct": 0.31
      },
      {
        "name": "区块链",
        "change_pct": 1.51
      }
    ]
  },
  {
    "code": "002969",
    "name": "嘉美包装",
    "hot_rank": 62,
    "hot_rank_chg": 106,
    "stock_cnt": 5773,
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
        "change_pct": 0.13
      },
      {
        "name": "啤酒",
        "change_pct": 0.62
      },
      {
        "name": "植物奶",
        "change_pct": 2.74
      },
      {
        "name": "饮料",
        "change_pct": 2.43
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 63,
    "hot_rank_chg": 25,
    "stock_cnt": 5773,
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
        "change_pct": -1.0
      },
      {
        "name": "京津冀",
        "change_pct": -0.05
      },
      {
        "name": "旅游",
        "change_pct": 1.48
      },
      {
        "name": "园林",
        "change_pct": 0.17
      },
      {
        "name": "海绵城市",
        "change_pct": 1.11
      },
      {
        "name": "固废处理",
        "change_pct": -0.4
      },
      {
        "name": "雄安新区",
        "change_pct": 0.19
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.85
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.39
      },
      {
        "name": "碳中和",
        "change_pct": -0.23
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.74
      },
      {
        "name": "汽车拆解",
        "change_pct": -0.11
      },
      {
        "name": "土壤修复",
        "change_pct": -0.34
      },
      {
        "name": "核污染防治",
        "change_pct": -1.22
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.2
      },
      {
        "name": "低价股",
        "change_pct": 0.93
      },
      {
        "name": "西部大开发",
        "change_pct": 0.24
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 69,
    "hot_rank_chg": -8,
    "stock_cnt": 5773,
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
        "change_pct": -1.2
      },
      {
        "name": "人工智能",
        "change_pct": 0.31
      },
      {
        "name": "游戏",
        "change_pct": 0.82
      },
      {
        "name": "智能音箱",
        "change_pct": -1.85
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.03
      },
      {
        "name": "数字经济",
        "change_pct": 1.44
      },
      {
        "name": "百度概念股",
        "change_pct": 1.27
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.5
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.0
      },
      {
        "name": "传媒",
        "change_pct": 1.41
      },
      {
        "name": "全息概念",
        "change_pct": -0.33
      },
      {
        "name": "NFT",
        "change_pct": 1.8
      },
      {
        "name": "元宇宙",
        "change_pct": 0.62
      },
      {
        "name": "web3.0",
        "change_pct": 1.88
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.24
      },
      {
        "name": "数字人民币",
        "change_pct": 2.14
      },
      {
        "name": "智慧政务",
        "change_pct": 2.01
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 2.02
      },
      {
        "name": "盲盒",
        "change_pct": 1.48
      },
      {
        "name": "AI营销",
        "change_pct": 0.96
      },
      {
        "name": "华为产业链",
        "change_pct": -0.61
      },
      {
        "name": "供应链金融",
        "change_pct": 1.54
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.5
      },
      {
        "name": "区块链",
        "change_pct": 1.51
      }
    ]
  },
  {
    "code": "000859",
    "name": "国风新材",
    "hot_rank": 82,
    "hot_rank_chg": 538,
    "stock_cnt": 5773,
    "price": "8.44",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "7561609300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "并购重组",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.28
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.26
      },
      {
        "name": "装修装饰",
        "change_pct": 0.25
      },
      {
        "name": "碳基材料",
        "change_pct": -1.36
      },
      {
        "name": "建筑节能",
        "change_pct": 1.38
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -1.12
      },
      {
        "name": "国企改革",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 84,
    "hot_rank_chg": 37,
    "stock_cnt": 5773,
    "price": "4.59",
    "change": "2.69",
    "market_id": "17",
    "circulate_market_value": "4447863800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 86,
    "hot_rank_chg": -29,
    "stock_cnt": 5773,
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
        "change_pct": -1.63
      },
      {
        "name": "军民融合",
        "change_pct": -1.07
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.88
      },
      {
        "name": "烧碱",
        "change_pct": -0.77
      },
      {
        "name": "军工",
        "change_pct": -1.18
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.04
      },
      {
        "name": "环氧丙烷",
        "change_pct": -1.34
      },
      {
        "name": "氟化工",
        "change_pct": -1.83
      },
      {
        "name": "双氧水",
        "change_pct": -0.91
      },
      {
        "name": "液氯",
        "change_pct": -2.73
      }
    ]
  },
  {
    "code": "603567",
    "name": "珍宝岛",
    "hot_rank": 91,
    "hot_rank_chg": -16,
    "stock_cnt": 5773,
    "price": "7.07",
    "change": "9.78",
    "market_id": "17",
    "circulate_market_value": "6650975300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.14
      },
      {
        "name": "创新药",
        "change_pct": -1.37
      },
      {
        "name": "医药",
        "change_pct": -0.78
      },
      {
        "name": "流感",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 99,
    "hot_rank_chg": 74,
    "stock_cnt": 5773,
    "price": "11.85",
    "change": "0.17",
    "market_id": "33",
    "circulate_market_value": "41213474000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.68
      },
      {
        "name": "人工智能",
        "change_pct": 0.31
      },
      {
        "name": "VR&AR",
        "change_pct": -0.88
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.66
      },
      {
        "name": "大数据",
        "change_pct": 1.25
      },
      {
        "name": "教育",
        "change_pct": 1.7
      },
      {
        "name": "百度概念股",
        "change_pct": 1.27
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.5
      },
      {
        "name": "传媒",
        "change_pct": 1.41
      },
      {
        "name": "快手概念股",
        "change_pct": 1.78
      },
      {
        "name": "NFT",
        "change_pct": 1.8
      },
      {
        "name": "元宇宙",
        "change_pct": 0.62
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.49
      },
      {
        "name": "web3.0",
        "change_pct": 1.88
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.45
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.24
      },
      {
        "name": "职业教育",
        "change_pct": 2.2
      },
      {
        "name": "云游戏",
        "change_pct": -0.69
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.18
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.97
      },
      {
        "name": "AI营销",
        "change_pct": 0.96
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.05
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.86
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.92
      },
      {
        "name": "智谱AI",
        "change_pct": 1.58
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.41
      },
      {
        "name": "区块链",
        "change_pct": 1.51
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5773, "price": "48.09", "change": "-1.86", "market_id": "17", "circulate_market_value": "216551140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5773, "price": "13.52", "change": "-5.65", "market_id": "33", "circulate_market_value": "12618534900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5773, "price": "18.51", "change": "3.29", "market_id": "17", "circulate_market_value": "38714446000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600895", "name": "张江高科", "hot_rank": 4, "hot_rank_chg": 23, "stock_cnt": 5773, "price": "31.04", "change": "9.99", "market_id": "17", "circulate_market_value": "48071324000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机"}, {"code": "601606", "name": "长城军工", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5773, "price": "33.28", "change": "-5.62", "market_id": "17", "circulate_market_value": "24116806000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5773, "price": "390.63", "change": "-10.00", "market_id": "17", "circulate_market_value": "261133000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5773, "price": "34.92", "change": "4.02", "market_id": "33", "circulate_market_value": "37670556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 8, "hot_rank_chg": 16, "stock_cnt": 5773, "price": "22.76", "change": "10.01", "market_id": "33", "circulate_market_value": "9578888100.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "脑机接口"}, {"code": "000938", "name": "紫光股份", "hot_rank": 9, "hot_rank_chg": -3, "stock_cnt": 5773, "price": "43.35", "change": "4.53", "market_id": "33", "circulate_market_value": "123984150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 10, "hot_rank_chg": 7, "stock_cnt": 5773, "price": "26.53", "change": "6.63", "market_id": "17", "circulate_market_value": "10160041600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 11, "hot_rank_chg": 4, "stock_cnt": 5773, "price": "11.56", "change": "9.99", "market_id": "33", "circulate_market_value": "7917471700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.95}, {"name": "核电", "change_pct": -1.42}, {"name": "充电桩", "change_pct": -1.88}, {"name": "云计算数据中心", "change_pct": -0.39}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "储能", "change_pct": -1.62}, {"name": "阿里巴巴概念股", "change_pct": 0.6}, {"name": "智能电网", "change_pct": -1.04}, {"name": "核聚变", "change_pct": -1.43}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 12, "hot_rank_chg": 10, "stock_cnt": 5773, "price": "5.71", "change": "1.24", "market_id": "17", "circulate_market_value": "14380691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.71}, {"name": "工业大麻", "change_pct": 0.08}, {"name": "中药", "change_pct": 0.19}, {"name": "强势人气股", "change_pct": -0.94}, {"name": "保健品", "change_pct": -0.03}, {"name": "民营医院", "change_pct": 1.25}, {"name": "医药", "change_pct": -0.73}, {"name": "化学原料药", "change_pct": -0.49}, {"name": "流感", "change_pct": -0.38}, {"name": "振兴东北", "change_pct": 0.82}, {"name": "食品", "change_pct": 1.25}]}, {"code": "002156", "name": "通富微电", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5773, "price": "69.05", "change": "-9.94", "market_id": "33", "circulate_market_value": "104780076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 14, "hot_rank_chg": 16, "stock_cnt": 5773, "price": "17.49", "change": "3.67", "market_id": "33", "circulate_market_value": "7911405600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5773, "price": "364.62", "change": "-9.21", "market_id": "33", "circulate_market_value": "60173149000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 16, "hot_rank_chg": 5, "stock_cnt": 5773, "price": "190.71", "change": "-10.00", "market_id": "33", "circulate_market_value": "264385420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 17, "hot_rank_chg": -1, "stock_cnt": 5773, "price": "16.34", "change": "4.21", "market_id": "17", "circulate_market_value": "24064029000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 18, "hot_rank_chg": 15, "stock_cnt": 5773, "price": "5.79", "change": "1.05", "market_id": "33", "circulate_market_value": "5980698300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.14}, {"name": "锂电池", "change_pct": -1.66}, {"name": "强势人气股", "change_pct": -0.94}, {"name": "铜箔/覆铜板", "change_pct": -5.03}, {"name": "粤港澳大湾区", "change_pct": 0.44}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.52}]}, {"code": "002549", "name": "凯美特气", "hot_rank": 19, "hot_rank_chg": 212, "stock_cnt": 5773, "price": "14.06", "change": "3.00", "market_id": "33", "circulate_market_value": "9734574900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5773, "price": "77.98", "change": "-5.31", "market_id": "17", "circulate_market_value": "139502760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 21, "hot_rank_chg": -14, "stock_cnt": 5773, "price": "170.46", "change": "0.66", "market_id": "33", "circulate_market_value": "54295387000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5773, "price": "17.85", "change": "-3.98", "market_id": "33", "circulate_market_value": "59309334000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 23, "hot_rank_chg": 22, "stock_cnt": 5773, "price": "5.83", "change": "10.00", "market_id": "33", "circulate_market_value": "7559968700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 0.19}, {"name": "创新药", "change_pct": -1.34}, {"name": "央企改革", "change_pct": -0.52}, {"name": "医疗器械", "change_pct": -0.0}, {"name": "强势人气股", "change_pct": -0.94}, {"name": "互联网医疗", "change_pct": 1.03}, {"name": "保健品", "change_pct": -0.03}, {"name": "民营医院", "change_pct": 1.25}, {"name": "CAR-T疗法", "change_pct": -0.69}, {"name": "医药", "change_pct": -0.73}, {"name": "化学原料药", "change_pct": -0.49}, {"name": "海南概念", "change_pct": 0.17}, {"name": "脑科学", "change_pct": 1.37}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.32}, {"name": "海南自由贸易港", "change_pct": 1.19}, {"name": "食品", "change_pct": 1.25}, {"name": "国企改革", "change_pct": -0.12}, {"name": "医疗信息化", "change_pct": 1.53}, {"name": "新冠病毒防治", "change_pct": -0.09}, {"name": "自贸区", "change_pct": 0.82}, {"name": "合成生物", "change_pct": -0.76}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 24, "hot_rank_chg": 13, "stock_cnt": 5773, "price": "936.03", "change": "-13.08", "market_id": "33", "circulate_market_value": "1038925830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 25, "hot_rank_chg": -7, "stock_cnt": 5773, "price": "40.15", "change": "-8.65", "market_id": "33", "circulate_market_value": "63202347000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 26, "hot_rank_chg": -17, "stock_cnt": 5773, "price": "43.32", "change": "-2.08", "market_id": "33", "circulate_market_value": "50121793000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 27, "hot_rank_chg": -16, "stock_cnt": 5773, "price": "44.29", "change": "-5.87", "market_id": "17", "circulate_market_value": "37443054000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 28, "hot_rank_chg": -5, "stock_cnt": 5773, "price": "5.64", "change": "-5.53", "market_id": "33", "circulate_market_value": "199470640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.39}, {"name": "手机产业链", "change_pct": -2.71}, {"name": "超高清视频", "change_pct": -0.47}, {"name": "苹果产业链", "change_pct": -3.34}, {"name": "电竞", "change_pct": 0.84}, {"name": "半导体", "change_pct": -4.23}, {"name": "人工智能", "change_pct": 0.28}, {"name": "互联网医疗", "change_pct": 1.03}, {"name": "VR&AR", "change_pct": -0.98}, {"name": "OLED", "change_pct": -2.21}, {"name": "京津冀", "change_pct": -0.05}, {"name": "物联网", "change_pct": -0.03}, {"name": "指纹识别", "change_pct": -1.94}, {"name": "汽车零部件", "change_pct": -0.27}, {"name": "白马股", "change_pct": 0.05}, {"name": "智能制造", "change_pct": -0.71}, {"name": "小米概念股", "change_pct": -2.14}, {"name": "国产芯片", "change_pct": -3.55}, {"name": "液晶面板/LCD", "change_pct": -1.97}, {"name": "全息概念", "change_pct": -0.31}, {"name": "理想汽车概念股", "change_pct": 0.2}, {"name": "MicroLED", "change_pct": -2.11}, {"name": "钙钛矿电池", "change_pct": -1.16}, {"name": "智能手表", "change_pct": -2.11}, {"name": "MiniLED", "change_pct": -2.27}, {"name": "传感器", "change_pct": -1.9}, {"name": "大硅片", "change_pct": -4.39}, {"name": "AI PC", "change_pct": -2.2}, {"name": "华为产业链", "change_pct": -0.68}, {"name": "回购", "change_pct": -1.16}, {"name": "智能眼镜/MR头显", "change_pct": -2.09}, {"name": "玻璃基板封装", "change_pct": -4.07}]}, {"code": "002309", "name": "中利集团", "hot_rank": 29, "hot_rank_chg": 25, "stock_cnt": 5773, "price": "3.37", "change": "10.13", "market_id": "33", "circulate_market_value": "8108665900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报扭亏", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.66}, {"name": "5G", "change_pct": -2.89}, {"name": "一带一路", "change_pct": -0.25}, {"name": "光通信", "change_pct": -5.06}, {"name": "军民融合", "change_pct": -1.13}, {"name": "光伏", "change_pct": -1.49}, {"name": "军工", "change_pct": -1.23}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "储能", "change_pct": -1.62}, {"name": "BIPV概念", "change_pct": -0.05}, {"name": "钙钛矿电池", "change_pct": -1.16}, {"name": "异质结电池HJT", "change_pct": -2.1}, {"name": "华为产业链", "change_pct": -0.68}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 30, "hot_rank_chg": -5, "stock_cnt": 5773, "price": "14.44", "change": "3.36", "market_id": "33", "circulate_market_value": "15341111000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002222", "name": "福晶科技", "hot_rank": 31, "hot_rank_chg": 128, "stock_cnt": 5773, "price": "59.36", "change": "3.61", "market_id": "33", "circulate_market_value": "27789486000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301421", "name": "波长光电", "hot_rank": 32, "hot_rank_chg": 189, "stock_cnt": 5773, "price": "82.12", "change": "20.01", "market_id": "33", "circulate_market_value": "3802852800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体光学"}, {"code": "920176", "name": "维琪科技", "hot_rank": 33, "hot_rank_chg": -19, "stock_cnt": 5773, "price": "108.51", "change": "-30.00", "market_id": "151", "circulate_market_value": "862328970.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600619", "name": "海立股份", "hot_rank": 34, "hot_rank_chg": 345, "stock_cnt": 5773, "price": "13.66", "change": "9.98", "market_id": "17", "circulate_market_value": "10780127700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机"}, {"code": "600617", "name": "国新能源", "hot_rank": 35, "hot_rank_chg": 0, "stock_cnt": 5773, "price": "3.75", "change": "0.54", "market_id": "17", "circulate_market_value": "6658285100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "山西国企改革", "change_pct": -1.1}, {"name": "天然气", "change_pct": -0.9}, {"name": "油气改革", "change_pct": -0.57}, {"name": "国企改革", "change_pct": -0.12}]}, {"code": "601727", "name": "上海电气", "hot_rank": 36, "hot_rank_chg": 177, "stock_cnt": 5773, "price": "6.87", "change": "4.09", "market_id": "17", "circulate_market_value": "86669444000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -2.45}, {"name": "泛在电力物联网", "change_pct": -0.95}, {"name": "上海国企改革", "change_pct": 1.1}, {"name": "核电", "change_pct": -1.42}, {"name": "一带一路", "change_pct": -0.25}, {"name": "工业自动化", "change_pct": -0.88}, {"name": "大飞机", "change_pct": -1.3}, {"name": "高铁轨交", "change_pct": -0.56}, {"name": "氢能源/燃料电池", "change_pct": -0.89}, {"name": "光伏", "change_pct": -1.49}, {"name": "风电", "change_pct": -1.12}, {"name": "白马股", "change_pct": 0.05}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "机器人", "change_pct": -0.84}, {"name": "储能", "change_pct": -1.62}, {"name": "碳中和", "change_pct": -0.21}, {"name": "智能制造", "change_pct": -0.71}, {"name": "工业互联网", "change_pct": -0.07}, {"name": "独角兽", "change_pct": 0.85}, {"name": "换电概念", "change_pct": -0.43}, {"name": "虚拟电厂", "change_pct": -1.07}, {"name": "工业母机", "change_pct": -1.44}, {"name": "东数西算/算力", "change_pct": -0.58}, {"name": "超超临界发电", "change_pct": -1.08}, {"name": "钒电池", "change_pct": -0.9}, {"name": "减速器", "change_pct": -0.8}, {"name": "光热发电", "change_pct": -0.13}, {"name": "国企改革", "change_pct": -0.12}, {"name": "特高压", "change_pct": -2.04}, {"name": "回购", "change_pct": -1.16}, {"name": "智能电网", "change_pct": -1.04}, {"name": "核聚变", "change_pct": -1.43}, {"name": "区块链", "change_pct": 1.52}, {"name": "钍基熔盐堆", "change_pct": -1.05}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 37, "hot_rank_chg": -6, "stock_cnt": 5773, "price": "50.85", "change": "-8.46", "market_id": "17", "circulate_market_value": "124767912000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 38, "hot_rank_chg": 6, "stock_cnt": 5773, "price": "6.04", "change": "-2.89", "market_id": "17", "circulate_market_value": "74872378000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.52}, {"name": "核电", "change_pct": -1.42}, {"name": "强势人气股", "change_pct": -0.94}, {"name": "电力体制改革", "change_pct": -1.17}, {"name": "水电", "change_pct": -0.87}, {"name": "火电", "change_pct": -1.29}, {"name": "光伏", "change_pct": -1.49}, {"name": "风电", "change_pct": -1.12}, {"name": "国企改革", "change_pct": -0.12}, {"name": "算电协同", "change_pct": -2.51}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 39, "hot_rank_chg": -26, "stock_cnt": 5773, "price": "38.12", "change": "-7.18", "market_id": "17", "circulate_market_value": "151476330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 40, "hot_rank_chg": 3, "stock_cnt": 5773, "price": "61.49", "change": "-10.00", "market_id": "17", "circulate_market_value": "25602450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 41, "hot_rank_chg": 19, "stock_cnt": 5773, "price": "17.82", "change": "10.00", "market_id": "17", "circulate_market_value": "14029266000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "601138", "name": "工业富联", "hot_rank": 42, "hot_rank_chg": -13, "stock_cnt": 5773, "price": "58.60", "change": "-4.79", "market_id": "17", "circulate_market_value": "1161871600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 43, "hot_rank_chg": 23, "stock_cnt": 5773, "price": "420.80", "change": "-14.30", "market_id": "33", "circulate_market_value": "527835690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 44, "hot_rank_chg": 110, "stock_cnt": 5773, "price": "54.64", "change": "-1.99", "market_id": "33", "circulate_market_value": "35843296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002879", "name": "长缆科技", "hot_rank": 45, "hot_rank_chg": -26, "stock_cnt": 5773, "price": "19.32", "change": "-2.72", "market_id": "33", "circulate_market_value": "2649525900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 46, "hot_rank_chg": -4, "stock_cnt": 5773, "price": "15.99", "change": "-3.67", "market_id": "33", "circulate_market_value": "11117255900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300260", "name": "新莱应材", "hot_rank": 47, "hot_rank_chg": 212, "stock_cnt": 5773, "price": "55.69", "change": "-6.75", "market_id": "33", "circulate_market_value": "16018501000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 48, "hot_rank_chg": -9, "stock_cnt": 5773, "price": "103.55", "change": "-10.00", "market_id": "17", "circulate_market_value": "37352908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 49, "hot_rank_chg": 7, "stock_cnt": 5773, "price": "9.26", "change": "-10.01", "market_id": "17", "circulate_market_value": "6299760200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -1.99}, {"name": "雄安新区", "change_pct": 0.24}, {"name": "煤化工", "change_pct": -1.2}]}, {"code": "002498", "name": "汉缆股份", "hot_rank": 50, "hot_rank_chg": -14, "stock_cnt": 5773, "price": "6.59", "change": "-7.18", "market_id": "33", "circulate_market_value": "21923586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.95}, {"name": "核电", "change_pct": -1.42}, {"name": "5G", "change_pct": -2.89}, {"name": "一带一路", "change_pct": -0.25}, {"name": "充电桩", "change_pct": -1.88}, {"name": "氢能源/燃料电池", "change_pct": -0.89}, {"name": "风电", "change_pct": -1.12}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "储能", "change_pct": -1.62}, {"name": "特高压", "change_pct": -2.04}, {"name": "智能电网", "change_pct": -1.04}, {"name": "海洋经济", "change_pct": -0.58}]}, {"code": "002388", "name": "新亚制程", "hot_rank": 51, "hot_rank_chg": 1, "stock_cnt": 5773, "price": "5.28", "change": "10.00", "market_id": "33", "circulate_market_value": "2672358200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "锂电材料", "xgb_concepts": [{"name": "仪器仪表", "change_pct": -0.69}, {"name": "锂电池", "change_pct": -1.63}, {"name": "ST摘帽", "change_pct": 0.74}, {"name": "有机硅", "change_pct": -0.67}, {"name": "新能源汽车", "change_pct": -1.04}, {"name": "华为产业链", "change_pct": -0.61}, {"name": "供应链金融", "change_pct": 1.54}]}, {"code": "603650", "name": "彤程新材", "hot_rank": 52, "hot_rank_chg": 92, "stock_cnt": 5773, "price": "65.53", "change": "0.41", "market_id": "17", "circulate_market_value": "40273879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601179", "name": "中国西电", "hot_rank": 53, "hot_rank_chg": -4, "stock_cnt": 5773, "price": "13.40", "change": "-4.90", "market_id": "17", "circulate_market_value": "68738082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 54, "hot_rank_chg": -7, "stock_cnt": 5773, "price": "29.36", "change": "-6.20", "market_id": "33", "circulate_market_value": "22237708000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002083", "name": "孚日股份", "hot_rank": 55, "hot_rank_chg": -14, "stock_cnt": 5773, "price": "11.03", "change": "-8.08", "market_id": "33", "circulate_market_value": "10441428300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.34}, {"name": "锂电池", "change_pct": -1.63}, {"name": "优化生育（三孩）", "change_pct": 0.8}, {"name": "举牌", "change_pct": -0.22}, {"name": "纺织服装", "change_pct": 1.22}, {"name": "山东国企改革", "change_pct": -0.34}, {"name": "教育", "change_pct": 1.7}, {"name": "外贸受益概念", "change_pct": 0.31}, {"name": "新能源汽车", "change_pct": -1.04}, {"name": "抗菌面料", "change_pct": 0.17}, {"name": "国企改革", "change_pct": -0.12}, {"name": "新冠病毒防治", "change_pct": -0.11}]}, {"code": "300534", "name": "陇神戎发", "hot_rank": 56, "hot_rank_chg": 12, "stock_cnt": 5773, "price": "14.53", "change": "8.35", "market_id": "33", "circulate_market_value": "4388808100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300293", "name": "蓝英装备", "hot_rank": 58, "hot_rank_chg": 1191, "stock_cnt": 5773, "price": "17.33", "change": "20.01", "market_id": "33", "circulate_market_value": "5865132400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "精密清洗"}, {"code": "600775", "name": "南京熊猫", "hot_rank": 59, "hot_rank_chg": 14, "stock_cnt": 5773, "price": "10.35", "change": "9.99", "market_id": "17", "circulate_market_value": "6953528800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "脑机接口概念", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.27}, {"name": "央企改革", "change_pct": -0.51}, {"name": "股权转让", "change_pct": -0.34}, {"name": "5G", "change_pct": -2.74}, {"name": "军工集团", "change_pct": -1.4}, {"name": "工业自动化", "change_pct": -0.81}, {"name": "北斗导航", "change_pct": -0.46}, {"name": "智慧城市", "change_pct": 0.77}, {"name": "军工", "change_pct": -1.18}, {"name": "机器人", "change_pct": -0.79}, {"name": "白色家电", "change_pct": 0.17}, {"name": "家电", "change_pct": 0.04}, {"name": "脑科学", "change_pct": 1.38}, {"name": "无人机", "change_pct": -0.86}, {"name": "智能制造", "change_pct": -0.66}, {"name": "工业互联网", "change_pct": -0.03}, {"name": "国企改革", "change_pct": -0.12}, {"name": "卫星互联网", "change_pct": -1.03}]}, {"code": "600744", "name": "华银电力", "hot_rank": 60, "hot_rank_chg": 10, "stock_cnt": 5773, "price": "7.48", "change": "-1.71", "market_id": "17", "circulate_market_value": "15192810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.51}, {"name": "电力体制改革", "change_pct": -1.21}, {"name": "火电", "change_pct": -1.32}, {"name": "风电", "change_pct": -1.12}, {"name": "储能", "change_pct": -1.6}, {"name": "碳中和", "change_pct": -0.23}, {"name": "国企改革", "change_pct": -0.12}]}, {"code": "002195", "name": "岩山科技", "hot_rank": 61, "hot_rank_chg": 67, "stock_cnt": 5773, "price": "6.83", "change": "9.98", "market_id": "33", "circulate_market_value": "38356142000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口", "xgb_concepts": [{"name": "国产软件", "change_pct": 1.51}, {"name": "无人驾驶", "change_pct": -0.87}, {"name": "人工智能", "change_pct": 0.31}, {"name": "网络安全", "change_pct": 1.59}, {"name": "游戏", "change_pct": 0.82}, {"name": "大数据", "change_pct": 1.25}, {"name": "脑科学", "change_pct": 1.38}, {"name": "百度概念股", "change_pct": 1.27}, {"name": "阿里巴巴概念股", "change_pct": 0.62}, {"name": "腾讯概念股", "change_pct": 0.5}, {"name": "字节跳动概念股", "change_pct": 1.24}, {"name": "自动刹车", "change_pct": 0.47}, {"name": "人工智能大模型", "change_pct": 0.86}, {"name": "短剧/互动影游", "change_pct": 1.2}, {"name": "AI医疗", "change_pct": 0.31}, {"name": "区块链", "change_pct": 1.51}]}, {"code": "002969", "name": "嘉美包装", "hot_rank": 62, "hot_rank_chg": 106, "stock_cnt": 5773, "price": "12.61", "change": "10.04", "market_id": "33", "circulate_market_value": "13779391000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "包装印刷", "change_pct": 0.13}, {"name": "啤酒", "change_pct": 0.62}, {"name": "植物奶", "change_pct": 2.74}, {"name": "饮料", "change_pct": 2.43}]}, {"code": "002310", "name": "东方新能", "hot_rank": 63, "hot_rank_chg": 25, "stock_cnt": 5773, "price": "2.65", "change": "9.96", "market_id": "33", "circulate_market_value": "11657375000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "重大资产重组", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.0}, {"name": "京津冀", "change_pct": -0.05}, {"name": "旅游", "change_pct": 1.48}, {"name": "园林", "change_pct": 0.17}, {"name": "海绵城市", "change_pct": 1.11}, {"name": "固废处理", "change_pct": -0.4}, {"name": "雄安新区", "change_pct": 0.19}, {"name": "北京城市规划", "change_pct": 0.85}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.39}, {"name": "碳中和", "change_pct": -0.23}, {"name": "乡村振兴", "change_pct": 0.74}, {"name": "汽车拆解", "change_pct": -0.11}, {"name": "土壤修复", "change_pct": -0.34}, {"name": "核污染防治", "change_pct": -1.22}, {"name": "新型城镇化", "change_pct": 0.2}, {"name": "低价股", "change_pct": 0.93}, {"name": "西部大开发", "change_pct": 0.24}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 64, "hot_rank_chg": -9, "stock_cnt": 5773, "price": "81.76", "change": "-3.81", "market_id": "33", "circulate_market_value": "119928168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 65, "hot_rank_chg": -33, "stock_cnt": 5773, "price": "13.29", "change": "1.76", "market_id": "33", "circulate_market_value": "10672830400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 66, "hot_rank_chg": -26, "stock_cnt": 5773, "price": "16.94", "change": "10.00", "market_id": "17", "circulate_market_value": "4104053800.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "拟收购欧康诺"}, {"code": "301526", "name": "国际复材", "hot_rank": 67, "hot_rank_chg": -29, "stock_cnt": 5773, "price": "29.34", "change": "-4.96", "market_id": "33", "circulate_market_value": "41162757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 68, "hot_rank_chg": -40, "stock_cnt": 5773, "price": "393.35", "change": "-1.66", "market_id": "33", "circulate_market_value": "1675830700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 69, "hot_rank_chg": -8, "stock_cnt": 5773, "price": "7.45", "change": "4.63", "market_id": "33", "circulate_market_value": "9379762600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.2}, {"name": "人工智能", "change_pct": 0.31}, {"name": "游戏", "change_pct": 0.82}, {"name": "智能音箱", "change_pct": -1.85}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.03}, {"name": "数字经济", "change_pct": 1.44}, {"name": "百度概念股", "change_pct": 1.27}, {"name": "腾讯概念股", "change_pct": 0.5}, {"name": "拼多多概念股", "change_pct": 1.0}, {"name": "传媒", "change_pct": 1.41}, {"name": "全息概念", "change_pct": -0.33}, {"name": "NFT", "change_pct": 1.8}, {"name": "元宇宙", "change_pct": 0.62}, {"name": "web3.0", "change_pct": 1.88}, {"name": "字节跳动概念股", "change_pct": 1.24}, {"name": "数字人民币", "change_pct": 2.14}, {"name": "智慧政务", "change_pct": 2.01}, {"name": "华为鸿蒙", "change_pct": 2.02}, {"name": "盲盒", "change_pct": 1.48}, {"name": "AI营销", "change_pct": 0.96}, {"name": "华为产业链", "change_pct": -0.61}, {"name": "供应链金融", "change_pct": 1.54}, {"name": "ChatGPT", "change_pct": 0.5}, {"name": "区块链", "change_pct": 1.51}]}, {"code": "600522", "name": "中天科技", "hot_rank": 70, "hot_rank_chg": -7, "stock_cnt": 5773, "price": "30.39", "change": "-6.95", "market_id": "17", "circulate_market_value": "103719540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688502", "name": "茂莱光学", "hot_rank": 71, "hot_rank_chg": 71, "stock_cnt": 5773, "price": "407.25", "change": "6.67", "market_id": "17", "circulate_market_value": "21503105000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 72, "hot_rank_chg": -19, "stock_cnt": 5773, "price": "89.20", "change": "-3.57", "market_id": "17", "circulate_market_value": "7051425700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002900", "name": "哈三联", "hot_rank": 73, "hot_rank_chg": -4, "stock_cnt": 5773, "price": "13.02", "change": "3.83", "market_id": "33", "circulate_market_value": "2097813600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 74, "hot_rank_chg": -40, "stock_cnt": 5773, "price": "275.50", "change": "-3.31", "market_id": "17", "circulate_market_value": "39939467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 75, "hot_rank_chg": -16, "stock_cnt": 5773, "price": "46.05", "change": "-7.34", "market_id": "17", "circulate_market_value": "28900078000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 76, "hot_rank_chg": -4, "stock_cnt": 5773, "price": "113.39", "change": "-10.00", "market_id": "17", "circulate_market_value": "273468200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 77, "hot_rank_chg": 22, "stock_cnt": 5773, "price": "124.70", "change": "-4.73", "market_id": "33", "circulate_market_value": "138603180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 79, "hot_rank_chg": 0, "stock_cnt": 5773, "price": "31.53", "change": "-0.76", "market_id": "17", "circulate_market_value": "649574540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 80, "hot_rank_chg": 42, "stock_cnt": 5773, "price": "26.78", "change": "-3.36", "market_id": "17", "circulate_market_value": "9022716300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 81, "hot_rank_chg": -16, "stock_cnt": 5773, "price": "57.30", "change": "-8.23", "market_id": "33", "circulate_market_value": "48915212000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000859", "name": "国风新材", "hot_rank": 82, "hot_rank_chg": 538, "stock_cnt": 5773, "price": "8.44", "change": "10.04", "market_id": "33", "circulate_market_value": "7561609300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "并购重组", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.28}, {"name": "安徽国企改革", "change_pct": -0.26}, {"name": "装修装饰", "change_pct": 0.25}, {"name": "碳基材料", "change_pct": -1.36}, {"name": "建筑节能", "change_pct": 1.38}, {"name": "光刻机（胶）", "change_pct": -1.12}, {"name": "国企改革", "change_pct": -0.12}]}, {"code": "301308", "name": "江波龙", "hot_rank": 83, "hot_rank_chg": 11, "stock_cnt": 5773, "price": "337.72", "change": "-9.65", "market_id": "33", "circulate_market_value": "95209569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 84, "hot_rank_chg": 37, "stock_cnt": 5773, "price": "4.59", "change": "2.69", "market_id": "17", "circulate_market_value": "4447863800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": -1.12}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 85, "hot_rank_chg": 7, "stock_cnt": 5773, "price": "105.83", "change": "-9.93", "market_id": "33", "circulate_market_value": "203491030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601678", "name": "滨化股份", "hot_rank": 86, "hot_rank_chg": -29, "stock_cnt": 5773, "price": "6.50", "change": "-7.93", "market_id": "17", "circulate_market_value": "13281685800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.63}, {"name": "军民融合", "change_pct": -1.07}, {"name": "氢能源/燃料电池", "change_pct": -0.88}, {"name": "烧碱", "change_pct": -0.77}, {"name": "军工", "change_pct": -1.18}, {"name": "新能源汽车", "change_pct": -1.04}, {"name": "环氧丙烷", "change_pct": -1.34}, {"name": "氟化工", "change_pct": -1.83}, {"name": "双氧水", "change_pct": -0.91}, {"name": "液氯", "change_pct": -2.73}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 87, "hot_rank_chg": 8, "stock_cnt": 5773, "price": "72.50", "change": "-8.27", "market_id": "33", "circulate_market_value": "47345083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 88, "hot_rank_chg": 9, "stock_cnt": 5773, "price": "209.50", "change": "-7.89", "market_id": "17", "circulate_market_value": "239828170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 89, "hot_rank_chg": -27, "stock_cnt": 5773, "price": "25.70", "change": "-9.25", "market_id": "17", "circulate_market_value": "4701386700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 90, "hot_rank_chg": 39, "stock_cnt": 5773, "price": "175.37", "change": "-9.06", "market_id": "33", "circulate_market_value": "136781610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603567", "name": "珍宝岛", "hot_rank": 91, "hot_rank_chg": -16, "stock_cnt": 5773, "price": "7.07", "change": "9.78", "market_id": "17", "circulate_market_value": "6650975300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.14}, {"name": "创新药", "change_pct": -1.37}, {"name": "医药", "change_pct": -0.78}, {"name": "流感", "change_pct": -0.42}]}, {"code": "002709", "name": "天赐材料", "hot_rank": 92, "hot_rank_chg": 11, "stock_cnt": 5773, "price": "37.35", "change": "-2.46", "market_id": "33", "circulate_market_value": "56361562000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 93, "hot_rank_chg": 16, "stock_cnt": 5773, "price": "34.37", "change": "-2.50", "market_id": "33", "circulate_market_value": "138429340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 94, "hot_rank_chg": 30, "stock_cnt": 5773, "price": "13.88", "change": "-1.91", "market_id": "33", "circulate_market_value": "21177845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 95, "hot_rank_chg": -45, "stock_cnt": 5773, "price": "150.60", "change": "-6.08", "market_id": "17", "circulate_market_value": "132486962000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603297", "name": "永新光学", "hot_rank": 96, "hot_rank_chg": 961, "stock_cnt": 5773, "price": "101.66", "change": "10.00", "market_id": "17", "circulate_market_value": "11256720300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机"}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 97, "hot_rank_chg": 21, "stock_cnt": 5773, "price": "18.73", "change": "-1.21", "market_id": "17", "circulate_market_value": "10544924500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 98, "hot_rank_chg": 47, "stock_cnt": 5773, "price": "18.05", "change": "-0.55", "market_id": "33", "circulate_market_value": "60711267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 99, "hot_rank_chg": 74, "stock_cnt": 5773, "price": "11.85", "change": "0.17", "market_id": "33", "circulate_market_value": "41213474000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.68}, {"name": "人工智能", "change_pct": 0.31}, {"name": "VR&AR", "change_pct": -0.88}, {"name": "直播/短视频", "change_pct": 1.66}, {"name": "大数据", "change_pct": 1.25}, {"name": "教育", "change_pct": 1.7}, {"name": "百度概念股", "change_pct": 1.27}, {"name": "阿里巴巴概念股", "change_pct": 0.62}, {"name": "腾讯概念股", "change_pct": 0.5}, {"name": "传媒", "change_pct": 1.41}, {"name": "快手概念股", "change_pct": 1.78}, {"name": "NFT", "change_pct": 1.8}, {"name": "元宇宙", "change_pct": 0.62}, {"name": "虚拟数字人", "change_pct": 1.49}, {"name": "web3.0", "change_pct": 1.88}, {"name": "AIGC概念", "change_pct": 0.45}, {"name": "字节跳动概念股", "change_pct": 1.24}, {"name": "职业教育", "change_pct": 2.2}, {"name": "云游戏", "change_pct": -0.69}, {"name": "网红/MCN", "change_pct": 1.18}, {"name": "5G消息/RCS", "change_pct": 1.97}, {"name": "AI营销", "change_pct": 0.96}, {"name": "词元概念/Token", "change_pct": 0.05}, {"name": "人工智能大模型", "change_pct": 0.86}, {"name": "Sora/AI视频", "change_pct": 0.92}, {"name": "智谱AI", "change_pct": 1.58}, {"name": "小红书概念股", "change_pct": 1.41}, {"name": "区块链", "change_pct": 1.51}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 100, "hot_rank_chg": -33, "stock_cnt": 5773, "price": "60.53", "change": "-3.75", "market_id": "33", "circulate_market_value": "443386800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告"};