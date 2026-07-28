const UPDATE_TIME = "2026-07-28 02:43";
const THS_HOT = [
  {
    "name": "光刻机",
    "rise": 0.89,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "脑机接口",
    "rise": 2.21,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "创新药",
    "rise": -0.6,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": -1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -3.06,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续210天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "光刻胶",
    "rise": -0.28,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创半导体ETF",
    "code": "885864"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.66,
    "rate": 0,
    "tag": "",
    "hotTag": "连续257天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -2.43,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "算力租赁",
    "rise": -0.24,
    "rate": 0,
    "tag": "",
    "hotTag": "连续121天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "AI应用",
    "rise": 1.08,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 1,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "芯片概念",
    "rise": -1.52,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "兵装重组概念",
    "rise": -4.71,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "人形机器人",
    "rise": -0.59,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续421天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": -0.98,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续186天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "ST板块",
    "rise": 1.25,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "锂电池概念",
    "rise": -0.8,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "DRG/DIP",
    "rise": 3.46,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "医疗器械ETF",
    "code": "885947"
  },
  {
    "name": "国家大基金持股",
    "rise": -3.58,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "军工",
    "rise": -0.69,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "军工龙头ETF",
    "code": "885700"
  },
  {
    "name": "先进封装",
    "rise": -2.64,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续50天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "上海国企改革",
    "rise": 1.08,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": -2,
    "etfName": "上海国企ETF",
    "code": "885493"
  }
];
const THS_EVENTS = [
  {
    "title": "机构：脑机接口商业化进程进一步提速",
    "desc": "",
    "heat": 377802,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "爱朋医疗",
        "code": "300753",
        "chg": 19.990872
      }
    ]
  },
  {
    "title": "81笔大单、1100亿美元！中国创新药“卖”向全球",
    "desc": "",
    "heat": 142246,
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
        "name": "陇神戎发",
        "code": "300534",
        "chg": 11.102832
      }
    ]
  },
  {
    "title": "7部门印发《疾病预防控制“十五五”规划》 提出重大传染病防控6项任务",
    "desc": "",
    "heat": 140006,
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
        "chg": 19.990872
      }
    ]
  },
  {
    "title": "预告：国新办就“十五五”时期税收改革发展有关情况举行新闻发布会",
    "desc": "",
    "heat": 134735,
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
    "title": "中国风电正抢装全球 国产风电海外爆单",
    "desc": "",
    "heat": 98087,
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
    "heat": 25269,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "菲沃泰",
        "code": "688371",
        "chg": 9.988386
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
        "name": "宏昌电子",
        "code": "603002",
        "chg": -3.843466
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "华为HMS",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "财税改革",
    "change": "+3.21%",
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
    "name": "微信小店",
    "change": "+2.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子车牌",
    "change": "+2.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+2.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+2.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "职业教育",
    "change": "+2.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+2.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子身份证",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "脑科学",
    "change": "+2.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+2.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+2.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "NFT",
    "change": "+2.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "web3.0",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+2.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为鸿蒙",
    "change": "+1.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智慧政务",
    "change": "+1.97%",
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
    "hot_rank": 9,
    "hot_rank_chg": 6,
    "stock_cnt": 5825,
    "price": "11.56",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "7917471700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.76
      },
      {
        "name": "核电",
        "change_pct": -0.94
      },
      {
        "name": "充电桩",
        "change_pct": -1.48
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.44
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.65
      },
      {
        "name": "储能",
        "change_pct": -1.19
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.54
      },
      {
        "name": "智能电网",
        "change_pct": -0.87
      },
      {
        "name": "核聚变",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 24,
    "hot_rank_chg": 21,
    "stock_cnt": 5825,
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
        "change_pct": 0.44
      },
      {
        "name": "创新药",
        "change_pct": -1.02
      },
      {
        "name": "央企改革",
        "change_pct": -0.55
      },
      {
        "name": "医疗器械",
        "change_pct": 0.41
      },
      {
        "name": "强势人气股",
        "change_pct": -0.29
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.04
      },
      {
        "name": "保健品",
        "change_pct": 0.17
      },
      {
        "name": "民营医院",
        "change_pct": 1.4
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.52
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "化学原料药",
        "change_pct": -0.27
      },
      {
        "name": "海南概念",
        "change_pct": 0.48
      },
      {
        "name": "脑科学",
        "change_pct": 2.16
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.27
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.26
      },
      {
        "name": "食品",
        "change_pct": 1.03
      },
      {
        "name": "国企改革",
        "change_pct": -0.05
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.57
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.13
      },
      {
        "name": "自贸区",
        "change_pct": 0.82
      },
      {
        "name": "合成生物",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 25,
    "hot_rank_chg": -3,
    "stock_cnt": 5825,
    "price": "5.87",
    "change": "4.08",
    "market_id": "17",
    "circulate_market_value": "14783653000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.83
      },
      {
        "name": "工业大麻",
        "change_pct": 0.47
      },
      {
        "name": "中药",
        "change_pct": 0.45
      },
      {
        "name": "强势人气股",
        "change_pct": -0.3
      },
      {
        "name": "保健品",
        "change_pct": 0.19
      },
      {
        "name": "民营医院",
        "change_pct": 1.41
      },
      {
        "name": "医药",
        "change_pct": -0.41
      },
      {
        "name": "化学原料药",
        "change_pct": -0.26
      },
      {
        "name": "流感",
        "change_pct": 0.03
      },
      {
        "name": "振兴东北",
        "change_pct": 1.04
      },
      {
        "name": "食品",
        "change_pct": 1.04
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 28,
    "hot_rank_chg": 5,
    "stock_cnt": 5825,
    "price": "5.89",
    "change": "2.79",
    "market_id": "33",
    "circulate_market_value": "6083991900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.07
      },
      {
        "name": "锂电池",
        "change_pct": -1.08
      },
      {
        "name": "强势人气股",
        "change_pct": -0.3
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -3.85
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.67
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.72
      }
    ]
  },
  {
    "code": "600617",
    "name": "国新能源",
    "hot_rank": 36,
    "hot_rank_chg": -1,
    "stock_cnt": 5825,
    "price": "3.84",
    "change": "2.95",
    "market_id": "17",
    "circulate_market_value": "6818083900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "山西国企改革",
        "change_pct": -1.52
      },
      {
        "name": "天然气",
        "change_pct": -0.92
      },
      {
        "name": "油气改革",
        "change_pct": -0.81
      },
      {
        "name": "国企改革",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 37,
    "hot_rank_chg": -14,
    "stock_cnt": 5825,
    "price": "5.73",
    "change": "-4.02",
    "market_id": "33",
    "circulate_market_value": "202653680000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.2
      },
      {
        "name": "手机产业链",
        "change_pct": -1.84
      },
      {
        "name": "超高清视频",
        "change_pct": -0.23
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.32
      },
      {
        "name": "电竞",
        "change_pct": 0.89
      },
      {
        "name": "半导体",
        "change_pct": -2.94
      },
      {
        "name": "人工智能",
        "change_pct": 0.47
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.09
      },
      {
        "name": "VR&AR",
        "change_pct": -0.46
      },
      {
        "name": "OLED",
        "change_pct": -0.98
      },
      {
        "name": "京津冀",
        "change_pct": 0.04
      },
      {
        "name": "物联网",
        "change_pct": 0.08
      },
      {
        "name": "指纹识别",
        "change_pct": -1.07
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.12
      },
      {
        "name": "白马股",
        "change_pct": -0.38
      },
      {
        "name": "智能制造",
        "change_pct": -0.25
      },
      {
        "name": "小米概念股",
        "change_pct": -1.47
      },
      {
        "name": "国产芯片",
        "change_pct": -2.68
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.85
      },
      {
        "name": "全息概念",
        "change_pct": 0.2
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.18
      },
      {
        "name": "MicroLED",
        "change_pct": -1.24
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.56
      },
      {
        "name": "智能手表",
        "change_pct": -1.61
      },
      {
        "name": "MiniLED",
        "change_pct": -1.47
      },
      {
        "name": "传感器",
        "change_pct": -1.25
      },
      {
        "name": "大硅片",
        "change_pct": -2.5
      },
      {
        "name": "AI PC",
        "change_pct": -1.55
      },
      {
        "name": "华为产业链",
        "change_pct": -0.29
      },
      {
        "name": "回购",
        "change_pct": -1.04
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.42
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.89
      }
    ]
  },
  {
    "code": "601727",
    "name": "上海电气",
    "hot_rank": 40,
    "hot_rank_chg": 173,
    "stock_cnt": 5825,
    "price": "6.88",
    "change": "4.24",
    "market_id": "17",
    "circulate_market_value": "86795601000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": -1.99
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -0.8
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.1
      },
      {
        "name": "核电",
        "change_pct": -0.97
      },
      {
        "name": "一带一路",
        "change_pct": -0.18
      },
      {
        "name": "工业自动化",
        "change_pct": -0.24
      },
      {
        "name": "大飞机",
        "change_pct": -0.93
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.34
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.62
      },
      {
        "name": "光伏",
        "change_pct": -1.13
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "白马股",
        "change_pct": -0.38
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.67
      },
      {
        "name": "机器人",
        "change_pct": -0.36
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "碳中和",
        "change_pct": -0.05
      },
      {
        "name": "智能制造",
        "change_pct": -0.25
      },
      {
        "name": "工业互联网",
        "change_pct": 0.02
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "换电概念",
        "change_pct": -0.36
      },
      {
        "name": "虚拟电厂",
        "change_pct": -0.97
      },
      {
        "name": "工业母机",
        "change_pct": -0.71
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.41
      },
      {
        "name": "超超临界发电",
        "change_pct": -0.81
      },
      {
        "name": "钒电池",
        "change_pct": -0.87
      },
      {
        "name": "减速器",
        "change_pct": -0.37
      },
      {
        "name": "光热发电",
        "change_pct": 0.23
      },
      {
        "name": "国企改革",
        "change_pct": -0.06
      },
      {
        "name": "特高压",
        "change_pct": -1.46
      },
      {
        "name": "回购",
        "change_pct": -1.04
      },
      {
        "name": "智能电网",
        "change_pct": -0.9
      },
      {
        "name": "核聚变",
        "change_pct": -0.81
      },
      {
        "name": "区块链",
        "change_pct": 1.53
      },
      {
        "name": "钍基熔盐堆",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 41,
    "hot_rank_chg": 13,
    "stock_cnt": 5825,
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
        "change_pct": -1.08
      },
      {
        "name": "5G",
        "change_pct": -2.34
      },
      {
        "name": "一带一路",
        "change_pct": -0.18
      },
      {
        "name": "光通信",
        "change_pct": -3.87
      },
      {
        "name": "军民融合",
        "change_pct": -0.65
      },
      {
        "name": "光伏",
        "change_pct": -1.13
      },
      {
        "name": "军工",
        "change_pct": -0.85
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.67
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "BIPV概念",
        "change_pct": 0.07
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.56
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.22
      },
      {
        "name": "华为产业链",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 43,
    "hot_rank_chg": -2,
    "stock_cnt": 5825,
    "price": "11.02",
    "change": "-8.17",
    "market_id": "33",
    "circulate_market_value": "10431961900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.02
      },
      {
        "name": "锂电池",
        "change_pct": -1.08
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.84
      },
      {
        "name": "举牌",
        "change_pct": -0.13
      },
      {
        "name": "纺织服装",
        "change_pct": 0.98
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.14
      },
      {
        "name": "教育",
        "change_pct": 1.77
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.22
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.67
      },
      {
        "name": "抗菌面料",
        "change_pct": 0.36
      },
      {
        "name": "国企改革",
        "change_pct": -0.06
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 45,
    "hot_rank_chg": 11,
    "stock_cnt": 5825,
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
        "change_pct": -2.38
      },
      {
        "name": "雄安新区",
        "change_pct": 0.33
      },
      {
        "name": "煤化工",
        "change_pct": -1.69
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 46,
    "hot_rank_chg": 15,
    "stock_cnt": 5825,
    "price": "7.59",
    "change": "6.60",
    "market_id": "33",
    "circulate_market_value": "9556026600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.64
      },
      {
        "name": "人工智能",
        "change_pct": 0.47
      },
      {
        "name": "游戏",
        "change_pct": 1.16
      },
      {
        "name": "智能音箱",
        "change_pct": -1.4
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.47
      },
      {
        "name": "数字经济",
        "change_pct": 1.43
      },
      {
        "name": "百度概念股",
        "change_pct": 1.19
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.53
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.09
      },
      {
        "name": "传媒",
        "change_pct": 1.58
      },
      {
        "name": "全息概念",
        "change_pct": 0.2
      },
      {
        "name": "NFT",
        "change_pct": 2.06
      },
      {
        "name": "元宇宙",
        "change_pct": 0.93
      },
      {
        "name": "web3.0",
        "change_pct": 2.07
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.43
      },
      {
        "name": "数字人民币",
        "change_pct": 1.93
      },
      {
        "name": "智慧政务",
        "change_pct": 2.04
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 2.03
      },
      {
        "name": "盲盒",
        "change_pct": 1.32
      },
      {
        "name": "AI营销",
        "change_pct": 1.04
      },
      {
        "name": "华为产业链",
        "change_pct": -0.29
      },
      {
        "name": "供应链金融",
        "change_pct": 1.72
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.95
      },
      {
        "name": "区块链",
        "change_pct": 1.53
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 51,
    "hot_rank_chg": -7,
    "stock_cnt": 5825,
    "price": "6.07",
    "change": "-2.41",
    "market_id": "17",
    "circulate_market_value": "75244261000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.56
      },
      {
        "name": "核电",
        "change_pct": -0.97
      },
      {
        "name": "强势人气股",
        "change_pct": -0.3
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.9
      },
      {
        "name": "水电",
        "change_pct": -0.58
      },
      {
        "name": "火电",
        "change_pct": -1.13
      },
      {
        "name": "光伏",
        "change_pct": -1.13
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "国企改革",
        "change_pct": -0.06
      },
      {
        "name": "算电协同",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 52,
    "hot_rank_chg": -16,
    "stock_cnt": 5825,
    "price": "6.75",
    "change": "-4.93",
    "market_id": "33",
    "circulate_market_value": "22455873000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.8
      },
      {
        "name": "核电",
        "change_pct": -0.97
      },
      {
        "name": "5G",
        "change_pct": -2.34
      },
      {
        "name": "一带一路",
        "change_pct": -0.18
      },
      {
        "name": "充电桩",
        "change_pct": -1.48
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.62
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.67
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "特高压",
        "change_pct": -1.46
      },
      {
        "name": "智能电网",
        "change_pct": -0.9
      },
      {
        "name": "海洋经济",
        "change_pct": -0.45
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 55,
    "hot_rank_chg": -3,
    "stock_cnt": 5825,
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
        "change_pct": -0.05
      },
      {
        "name": "锂电池",
        "change_pct": -1.08
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.07
      },
      {
        "name": "有机硅",
        "change_pct": -0.15
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.67
      },
      {
        "name": "华为产业链",
        "change_pct": -0.29
      },
      {
        "name": "供应链金融",
        "change_pct": 1.72
      }
    ]
  },
  {
    "code": "002969",
    "name": "嘉美包装",
    "hot_rank": 58,
    "hot_rank_chg": 110,
    "stock_cnt": 5825,
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
        "change_pct": 0.55
      },
      {
        "name": "啤酒",
        "change_pct": 0.23
      },
      {
        "name": "植物奶",
        "change_pct": 2.09
      },
      {
        "name": "饮料",
        "change_pct": 1.92
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 60,
    "hot_rank_chg": 10,
    "stock_cnt": 5825,
    "price": "7.80",
    "change": "2.50",
    "market_id": "17",
    "circulate_market_value": "15842769000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.56
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.9
      },
      {
        "name": "火电",
        "change_pct": -1.13
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "碳中和",
        "change_pct": -0.05
      },
      {
        "name": "国企改革",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "002900",
    "name": "哈三联",
    "hot_rank": 61,
    "hot_rank_chg": 8,
    "stock_cnt": 5825,
    "price": "12.70",
    "change": "1.28",
    "market_id": "33",
    "circulate_market_value": "2046254500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -1.01
      },
      {
        "name": "医药",
        "change_pct": -0.41
      },
      {
        "name": "化学原料药",
        "change_pct": -0.26
      },
      {
        "name": "医美",
        "change_pct": 0.43
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.13
      },
      {
        "name": "化妆品",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 67,
    "hot_rank_chg": 54,
    "stock_cnt": 5825,
    "price": "4.62",
    "change": "3.36",
    "market_id": "17",
    "circulate_market_value": "4476934800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": -0.63
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 78,
    "hot_rank_chg": -21,
    "stock_cnt": 5825,
    "price": "6.54",
    "change": "-7.37",
    "market_id": "17",
    "circulate_market_value": "13363419200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.08
      },
      {
        "name": "军民融合",
        "change_pct": -0.65
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.62
      },
      {
        "name": "烧碱",
        "change_pct": -0.81
      },
      {
        "name": "军工",
        "change_pct": -0.85
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.67
      },
      {
        "name": "环氧丙烷",
        "change_pct": -1.08
      },
      {
        "name": "氟化工",
        "change_pct": -1.74
      },
      {
        "name": "双氧水",
        "change_pct": -0.62
      },
      {
        "name": "液氯",
        "change_pct": -2.73
      }
    ]
  },
  {
    "code": "600775",
    "name": "南京熊猫",
    "hot_rank": 83,
    "hot_rank_chg": -10,
    "stock_cnt": 5825,
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
        "change_pct": -0.24
      },
      {
        "name": "央企改革",
        "change_pct": -0.56
      },
      {
        "name": "股权转让",
        "change_pct": -0.02
      },
      {
        "name": "5G",
        "change_pct": -2.34
      },
      {
        "name": "军工集团",
        "change_pct": -1.37
      },
      {
        "name": "工业自动化",
        "change_pct": -0.24
      },
      {
        "name": "北斗导航",
        "change_pct": -0.31
      },
      {
        "name": "智慧城市",
        "change_pct": 0.91
      },
      {
        "name": "军工",
        "change_pct": -0.85
      },
      {
        "name": "机器人",
        "change_pct": -0.36
      },
      {
        "name": "白色家电",
        "change_pct": 0.48
      },
      {
        "name": "家电",
        "change_pct": 0.32
      },
      {
        "name": "脑科学",
        "change_pct": 2.17
      },
      {
        "name": "无人机",
        "change_pct": -0.56
      },
      {
        "name": "智能制造",
        "change_pct": -0.25
      },
      {
        "name": "工业互联网",
        "change_pct": 0.02
      },
      {
        "name": "国企改革",
        "change_pct": -0.06
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.78
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 91,
    "hot_rank_chg": -3,
    "stock_cnt": 5825,
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
        "change_pct": -0.6
      },
      {
        "name": "京津冀",
        "change_pct": 0.04
      },
      {
        "name": "旅游",
        "change_pct": 1.67
      },
      {
        "name": "园林",
        "change_pct": 0.79
      },
      {
        "name": "海绵城市",
        "change_pct": 1.16
      },
      {
        "name": "固废处理",
        "change_pct": -0.17
      },
      {
        "name": "雄安新区",
        "change_pct": 0.33
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.89
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.02
      },
      {
        "name": "碳中和",
        "change_pct": -0.05
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.88
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.19
      },
      {
        "name": "土壤修复",
        "change_pct": -0.01
      },
      {
        "name": "核污染防治",
        "change_pct": -0.73
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.57
      },
      {
        "name": "低价股",
        "change_pct": 0.97
      },
      {
        "name": "西部大开发",
        "change_pct": 0.3
      }
    ]
  },
  {
    "code": "000859",
    "name": "国风新材",
    "hot_rank": 94,
    "hot_rank_chg": 526,
    "stock_cnt": 5825,
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
        "change_pct": -2.2
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.38
      },
      {
        "name": "装修装饰",
        "change_pct": 0.6
      },
      {
        "name": "碳基材料",
        "change_pct": -0.83
      },
      {
        "name": "建筑节能",
        "change_pct": 1.42
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 0.43
      },
      {
        "name": "国企改革",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 95,
    "hot_rank_chg": 91,
    "stock_cnt": 5825,
    "price": "10.02",
    "change": "-4.48",
    "market_id": "33",
    "circulate_market_value": "5843772000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -1.1
      },
      {
        "name": "一带一路",
        "change_pct": -0.18
      },
      {
        "name": "天然气",
        "change_pct": -0.92
      },
      {
        "name": "油气改革",
        "change_pct": -0.81
      },
      {
        "name": "页岩气",
        "change_pct": -0.95
      },
      {
        "name": "深地经济",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "603567",
    "name": "珍宝岛",
    "hot_rank": 97,
    "hot_rank_chg": -22,
    "stock_cnt": 5825,
    "price": "7.08",
    "change": "9.94",
    "market_id": "17",
    "circulate_market_value": "6650975300.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "中药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.45
      },
      {
        "name": "创新药",
        "change_pct": -1.01
      },
      {
        "name": "医药",
        "change_pct": -0.41
      },
      {
        "name": "流感",
        "change_pct": 0.03
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5825, "price": "48.39", "change": "-1.10", "market_id": "17", "circulate_market_value": "217902060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600895", "name": "张江高科", "hot_rank": 2, "hot_rank_chg": 25, "stock_cnt": 5825, "price": "31.04", "change": "9.99", "market_id": "17", "circulate_market_value": "48071324000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机"}, {"code": "001258", "name": "立新能源", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5825, "price": "15.34", "change": "7.05", "market_id": "33", "circulate_market_value": "14317184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 4, "hot_rank_chg": 4, "stock_cnt": 5825, "price": "33.27", "change": "-5.64", "market_id": "17", "circulate_market_value": "24095079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5825, "price": "390.63", "change": "-10.00", "market_id": "17", "circulate_market_value": "261133000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5825, "price": "34.79", "change": "3.66", "market_id": "33", "circulate_market_value": "37530316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 7, "hot_rank_chg": 10, "stock_cnt": 5825, "price": "27.37", "change": "10.01", "market_id": "17", "circulate_market_value": "10481731500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半导体设备"}, {"code": "002549", "name": "凯美特气", "hot_rank": 8, "hot_rank_chg": 223, "stock_cnt": 5825, "price": "14.20", "change": "4.03", "market_id": "33", "circulate_market_value": "9831505300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 9, "hot_rank_chg": 6, "stock_cnt": 5825, "price": "11.56", "change": "9.99", "market_id": "33", "circulate_market_value": "7917471700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.76}, {"name": "核电", "change_pct": -0.94}, {"name": "充电桩", "change_pct": -1.48}, {"name": "云计算数据中心", "change_pct": -0.44}, {"name": "新能源汽车", "change_pct": -0.65}, {"name": "储能", "change_pct": -1.19}, {"name": "阿里巴巴概念股", "change_pct": 0.54}, {"name": "智能电网", "change_pct": -0.87}, {"name": "核聚变", "change_pct": -0.82}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 10, "hot_rank_chg": 14, "stock_cnt": 5825, "price": "22.76", "change": "10.01", "market_id": "33", "circulate_market_value": "9578888100.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "脑机接口"}, {"code": "001309", "name": "德明利", "hot_rank": 11, "hot_rank_chg": 1, "stock_cnt": 5825, "price": "376.01", "change": "-6.26", "market_id": "33", "circulate_market_value": "62052838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 12, "hot_rank_chg": -8, "stock_cnt": 5825, "price": "18.68", "change": "4.24", "market_id": "17", "circulate_market_value": "39070008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 13, "hot_rank_chg": 17, "stock_cnt": 5825, "price": "18.56", "change": "10.02", "market_id": "33", "circulate_market_value": "8395408100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力"}, {"code": "000938", "name": "紫光股份", "hot_rank": 14, "hot_rank_chg": -8, "stock_cnt": 5825, "price": "40.04", "change": "-3.45", "market_id": "33", "circulate_market_value": "114517310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 15, "hot_rank_chg": 22, "stock_cnt": 5825, "price": "951.01", "change": "-11.69", "market_id": "33", "circulate_market_value": "1055563830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002222", "name": "福晶科技", "hot_rank": 16, "hot_rank_chg": 143, "stock_cnt": 5825, "price": "60.21", "change": "5.10", "market_id": "33", "circulate_market_value": "28187415000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301421", "name": "波长光电", "hot_rank": 17, "hot_rank_chg": 204, "stock_cnt": 5825, "price": "82.12", "change": "20.01", "market_id": "33", "circulate_market_value": "3802852800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体光学"}, {"code": "002156", "name": "通富微电", "hot_rank": 18, "hot_rank_chg": -8, "stock_cnt": 5825, "price": "69.61", "change": "-9.21", "market_id": "33", "circulate_market_value": "105629849000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 19, "hot_rank_chg": 2, "stock_cnt": 5825, "price": "190.78", "change": "-9.97", "market_id": "33", "circulate_market_value": "264482460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 20, "hot_rank_chg": 5, "stock_cnt": 5825, "price": "14.40", "change": "3.08", "market_id": "33", "circulate_market_value": "15298615000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 21, "hot_rank_chg": -5, "stock_cnt": 5825, "price": "15.97", "change": "1.91", "market_id": "17", "circulate_market_value": "23519128000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920176", "name": "维琪科技", "hot_rank": 22, "hot_rank_chg": -8, "stock_cnt": 5825, "price": "108.51", "change": "-30.00", "market_id": "151", "circulate_market_value": "862328970.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300260", "name": "新莱应材", "hot_rank": 23, "hot_rank_chg": 236, "stock_cnt": 5825, "price": "58.11", "change": "-2.73", "market_id": "33", "circulate_market_value": "16714583000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 24, "hot_rank_chg": 21, "stock_cnt": 5825, "price": "5.83", "change": "10.00", "market_id": "33", "circulate_market_value": "7559968700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 0.44}, {"name": "创新药", "change_pct": -1.02}, {"name": "央企改革", "change_pct": -0.55}, {"name": "医疗器械", "change_pct": 0.41}, {"name": "强势人气股", "change_pct": -0.29}, {"name": "互联网医疗", "change_pct": 1.04}, {"name": "保健品", "change_pct": 0.17}, {"name": "民营医院", "change_pct": 1.4}, {"name": "CAR-T疗法", "change_pct": -0.52}, {"name": "医药", "change_pct": -0.42}, {"name": "化学原料药", "change_pct": -0.27}, {"name": "海南概念", "change_pct": 0.48}, {"name": "脑科学", "change_pct": 2.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.27}, {"name": "海南自由贸易港", "change_pct": 1.26}, {"name": "食品", "change_pct": 1.03}, {"name": "国企改革", "change_pct": -0.05}, {"name": "医疗信息化", "change_pct": 1.57}, {"name": "新冠病毒防治", "change_pct": 0.13}, {"name": "自贸区", "change_pct": 0.82}, {"name": "合成生物", "change_pct": -0.4}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 25, "hot_rank_chg": -3, "stock_cnt": 5825, "price": "5.87", "change": "4.08", "market_id": "17", "circulate_market_value": "14783653000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.83}, {"name": "工业大麻", "change_pct": 0.47}, {"name": "中药", "change_pct": 0.45}, {"name": "强势人气股", "change_pct": -0.3}, {"name": "保健品", "change_pct": 0.19}, {"name": "民营医院", "change_pct": 1.41}, {"name": "医药", "change_pct": -0.41}, {"name": "化学原料药", "change_pct": -0.26}, {"name": "流感", "change_pct": 0.03}, {"name": "振兴东北", "change_pct": 1.04}, {"name": "食品", "change_pct": 1.04}]}, {"code": "600619", "name": "海立股份", "hot_rank": 26, "hot_rank_chg": 353, "stock_cnt": 5825, "price": "13.66", "change": "9.98", "market_id": "17", "circulate_market_value": "10780127700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机"}, {"code": "002409", "name": "雅克科技", "hot_rank": 27, "hot_rank_chg": -20, "stock_cnt": 5825, "price": "169.01", "change": "-0.15", "market_id": "33", "circulate_market_value": "53833529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 28, "hot_rank_chg": 5, "stock_cnt": 5825, "price": "5.89", "change": "2.79", "market_id": "33", "circulate_market_value": "6083991900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.07}, {"name": "锂电池", "change_pct": -1.08}, {"name": "强势人气股", "change_pct": -0.3}, {"name": "铜箔/覆铜板", "change_pct": -3.85}, {"name": "粤港澳大湾区", "change_pct": 0.46}, {"name": "新能源汽车", "change_pct": -0.67}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.72}]}, {"code": "000021", "name": "深科技", "hot_rank": 29, "hot_rank_chg": -11, "stock_cnt": 5825, "price": "40.91", "change": "-6.92", "market_id": "33", "circulate_market_value": "64398705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 30, "hot_rank_chg": -19, "stock_cnt": 5825, "price": "44.86", "change": "-4.57", "market_id": "17", "circulate_market_value": "37976382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 31, "hot_rank_chg": -11, "stock_cnt": 5825, "price": "79.00", "change": "-4.07", "market_id": "17", "circulate_market_value": "141363750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 32, "hot_rank_chg": -23, "stock_cnt": 5825, "price": "44.65", "change": "0.93", "market_id": "33", "circulate_market_value": "51660620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 33, "hot_rank_chg": -7, "stock_cnt": 5825, "price": "18.49", "change": "-0.54", "market_id": "33", "circulate_market_value": "61435831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 34, "hot_rank_chg": -5, "stock_cnt": 5825, "price": "59.13", "change": "-3.93", "market_id": "17", "circulate_market_value": "1173381180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 35, "hot_rank_chg": 8, "stock_cnt": 5825, "price": "61.49", "change": "-10.00", "market_id": "17", "circulate_market_value": "25602450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600617", "name": "国新能源", "hot_rank": 36, "hot_rank_chg": -1, "stock_cnt": 5825, "price": "3.84", "change": "2.95", "market_id": "17", "circulate_market_value": "6818083900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "山西国企改革", "change_pct": -1.52}, {"name": "天然气", "change_pct": -0.92}, {"name": "油气改革", "change_pct": -0.81}, {"name": "国企改革", "change_pct": -0.06}]}, {"code": "000725", "name": "京东方A", "hot_rank": 37, "hot_rank_chg": -14, "stock_cnt": 5825, "price": "5.73", "change": "-4.02", "market_id": "33", "circulate_market_value": "202653680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.2}, {"name": "手机产业链", "change_pct": -1.84}, {"name": "超高清视频", "change_pct": -0.23}, {"name": "苹果产业链", "change_pct": -2.32}, {"name": "电竞", "change_pct": 0.89}, {"name": "半导体", "change_pct": -2.94}, {"name": "人工智能", "change_pct": 0.47}, {"name": "互联网医疗", "change_pct": 1.09}, {"name": "VR&AR", "change_pct": -0.46}, {"name": "OLED", "change_pct": -0.98}, {"name": "京津冀", "change_pct": 0.04}, {"name": "物联网", "change_pct": 0.08}, {"name": "指纹识别", "change_pct": -1.07}, {"name": "汽车零部件", "change_pct": 0.12}, {"name": "白马股", "change_pct": -0.38}, {"name": "智能制造", "change_pct": -0.25}, {"name": "小米概念股", "change_pct": -1.47}, {"name": "国产芯片", "change_pct": -2.68}, {"name": "液晶面板/LCD", "change_pct": -0.85}, {"name": "全息概念", "change_pct": 0.2}, {"name": "理想汽车概念股", "change_pct": 0.18}, {"name": "MicroLED", "change_pct": -1.24}, {"name": "钙钛矿电池", "change_pct": -0.56}, {"name": "智能手表", "change_pct": -1.61}, {"name": "MiniLED", "change_pct": -1.47}, {"name": "传感器", "change_pct": -1.25}, {"name": "大硅片", "change_pct": -2.5}, {"name": "AI PC", "change_pct": -1.55}, {"name": "华为产业链", "change_pct": -0.29}, {"name": "回购", "change_pct": -1.04}, {"name": "智能眼镜/MR头显", "change_pct": -1.42}, {"name": "玻璃基板封装", "change_pct": -2.89}]}, {"code": "002879", "name": "长缆科技", "hot_rank": 38, "hot_rank_chg": -19, "stock_cnt": 5825, "price": "20.01", "change": "0.76", "market_id": "33", "circulate_market_value": "2744151800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688502", "name": "茂莱光学", "hot_rank": 39, "hot_rank_chg": 103, "stock_cnt": 5825, "price": "401.86", "change": "5.08", "market_id": "17", "circulate_market_value": "21218509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601727", "name": "上海电气", "hot_rank": 40, "hot_rank_chg": 173, "stock_cnt": 5825, "price": "6.88", "change": "4.24", "market_id": "17", "circulate_market_value": "86795601000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -1.99}, {"name": "泛在电力物联网", "change_pct": -0.8}, {"name": "上海国企改革", "change_pct": 1.1}, {"name": "核电", "change_pct": -0.97}, {"name": "一带一路", "change_pct": -0.18}, {"name": "工业自动化", "change_pct": -0.24}, {"name": "大飞机", "change_pct": -0.93}, {"name": "高铁轨交", "change_pct": -0.34}, {"name": "氢能源/燃料电池", "change_pct": -0.62}, {"name": "光伏", "change_pct": -1.13}, {"name": "风电", "change_pct": -0.63}, {"name": "白马股", "change_pct": -0.38}, {"name": "新能源汽车", "change_pct": -0.67}, {"name": "机器人", "change_pct": -0.36}, {"name": "储能", "change_pct": -1.24}, {"name": "碳中和", "change_pct": -0.05}, {"name": "智能制造", "change_pct": -0.25}, {"name": "工业互联网", "change_pct": 0.02}, {"name": "独角兽", "change_pct": 0.85}, {"name": "换电概念", "change_pct": -0.36}, {"name": "虚拟电厂", "change_pct": -0.97}, {"name": "工业母机", "change_pct": -0.71}, {"name": "东数西算/算力", "change_pct": -0.41}, {"name": "超超临界发电", "change_pct": -0.81}, {"name": "钒电池", "change_pct": -0.87}, {"name": "减速器", "change_pct": -0.37}, {"name": "光热发电", "change_pct": 0.23}, {"name": "国企改革", "change_pct": -0.06}, {"name": "特高压", "change_pct": -1.46}, {"name": "回购", "change_pct": -1.04}, {"name": "智能电网", "change_pct": -0.9}, {"name": "核聚变", "change_pct": -0.81}, {"name": "区块链", "change_pct": 1.53}, {"name": "钍基熔盐堆", "change_pct": -0.68}]}, {"code": "002309", "name": "中利集团", "hot_rank": 41, "hot_rank_chg": 13, "stock_cnt": 5825, "price": "3.37", "change": "10.13", "market_id": "33", "circulate_market_value": "8108665900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报扭亏", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.08}, {"name": "5G", "change_pct": -2.34}, {"name": "一带一路", "change_pct": -0.18}, {"name": "光通信", "change_pct": -3.87}, {"name": "军民融合", "change_pct": -0.65}, {"name": "光伏", "change_pct": -1.13}, {"name": "军工", "change_pct": -0.85}, {"name": "新能源汽车", "change_pct": -0.67}, {"name": "储能", "change_pct": -1.24}, {"name": "BIPV概念", "change_pct": 0.07}, {"name": "钙钛矿电池", "change_pct": -0.56}, {"name": "异质结电池HJT", "change_pct": -1.22}, {"name": "华为产业链", "change_pct": -0.29}]}, {"code": "300502", "name": "新易盛", "hot_rank": 42, "hot_rank_chg": 24, "stock_cnt": 5825, "price": "428.88", "change": "-12.63", "market_id": "33", "circulate_market_value": "537919810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002083", "name": "孚日股份", "hot_rank": 43, "hot_rank_chg": -2, "stock_cnt": 5825, "price": "11.02", "change": "-8.17", "market_id": "33", "circulate_market_value": "10431961900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.02}, {"name": "锂电池", "change_pct": -1.08}, {"name": "优化生育（三孩）", "change_pct": 0.84}, {"name": "举牌", "change_pct": -0.13}, {"name": "纺织服装", "change_pct": 0.98}, {"name": "山东国企改革", "change_pct": -0.14}, {"name": "教育", "change_pct": 1.77}, {"name": "外贸受益概念", "change_pct": 0.22}, {"name": "新能源汽车", "change_pct": -0.67}, {"name": "抗菌面料", "change_pct": 0.36}, {"name": "国企改革", "change_pct": -0.06}, {"name": "新冠病毒防治", "change_pct": 0.13}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 44, "hot_rank_chg": -31, "stock_cnt": 5825, "price": "38.14", "change": "-7.13", "market_id": "17", "circulate_market_value": "151476330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 45, "hot_rank_chg": 11, "stock_cnt": 5825, "price": "9.26", "change": "-10.01", "market_id": "17", "circulate_market_value": "6299760200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -2.38}, {"name": "雄安新区", "change_pct": 0.33}, {"name": "煤化工", "change_pct": -1.69}]}, {"code": "000676", "name": "智度股份", "hot_rank": 46, "hot_rank_chg": 15, "stock_cnt": 5825, "price": "7.59", "change": "6.60", "market_id": "33", "circulate_market_value": "9556026600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.64}, {"name": "人工智能", "change_pct": 0.47}, {"name": "游戏", "change_pct": 1.16}, {"name": "智能音箱", "change_pct": -1.4}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.47}, {"name": "数字经济", "change_pct": 1.43}, {"name": "百度概念股", "change_pct": 1.19}, {"name": "腾讯概念股", "change_pct": 0.53}, {"name": "拼多多概念股", "change_pct": 1.09}, {"name": "传媒", "change_pct": 1.58}, {"name": "全息概念", "change_pct": 0.2}, {"name": "NFT", "change_pct": 2.06}, {"name": "元宇宙", "change_pct": 0.93}, {"name": "web3.0", "change_pct": 2.07}, {"name": "字节跳动概念股", "change_pct": 1.43}, {"name": "数字人民币", "change_pct": 1.93}, {"name": "智慧政务", "change_pct": 2.04}, {"name": "华为鸿蒙", "change_pct": 2.03}, {"name": "盲盒", "change_pct": 1.32}, {"name": "AI营销", "change_pct": 1.04}, {"name": "华为产业链", "change_pct": -0.29}, {"name": "供应链金融", "change_pct": 1.72}, {"name": "ChatGPT", "change_pct": 0.95}, {"name": "区块链", "change_pct": 1.53}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 47, "hot_rank_chg": -16, "stock_cnt": 5825, "price": "51.81", "change": "-6.73", "market_id": "17", "circulate_market_value": "127123413000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 48, "hot_rank_chg": -6, "stock_cnt": 5825, "price": "15.86", "change": "-4.46", "market_id": "33", "circulate_market_value": "11026871700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 49, "hot_rank_chg": -9, "stock_cnt": 5825, "price": "16.94", "change": "10.00", "market_id": "17", "circulate_market_value": "4104053800.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "拟收购欧康诺"}, {"code": "603629", "name": "利通电子", "hot_rank": 50, "hot_rank_chg": -11, "stock_cnt": 5825, "price": "103.60", "change": "-9.96", "market_id": "17", "circulate_market_value": "37370944000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 51, "hot_rank_chg": -7, "stock_cnt": 5825, "price": "6.07", "change": "-2.41", "market_id": "17", "circulate_market_value": "75244261000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.56}, {"name": "核电", "change_pct": -0.97}, {"name": "强势人气股", "change_pct": -0.3}, {"name": "电力体制改革", "change_pct": -0.9}, {"name": "水电", "change_pct": -0.58}, {"name": "火电", "change_pct": -1.13}, {"name": "光伏", "change_pct": -1.13}, {"name": "风电", "change_pct": -0.63}, {"name": "国企改革", "change_pct": -0.06}, {"name": "算电协同", "change_pct": -1.98}]}, {"code": "002498", "name": "汉缆股份", "hot_rank": 52, "hot_rank_chg": -16, "stock_cnt": 5825, "price": "6.75", "change": "-4.93", "market_id": "33", "circulate_market_value": "22455873000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.8}, {"name": "核电", "change_pct": -0.97}, {"name": "5G", "change_pct": -2.34}, {"name": "一带一路", "change_pct": -0.18}, {"name": "充电桩", "change_pct": -1.48}, {"name": "氢能源/燃料电池", "change_pct": -0.62}, {"name": "风电", "change_pct": -0.63}, {"name": "新能源汽车", "change_pct": -0.67}, {"name": "储能", "change_pct": -1.24}, {"name": "特高压", "change_pct": -1.46}, {"name": "智能电网", "change_pct": -0.9}, {"name": "海洋经济", "change_pct": -0.45}]}, {"code": "300346", "name": "南大光电", "hot_rank": 53, "hot_rank_chg": 101, "stock_cnt": 5825, "price": "55.91", "change": "0.29", "market_id": "33", "circulate_market_value": "36676403000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 54, "hot_rank_chg": -7, "stock_cnt": 5825, "price": "28.84", "change": "-7.83", "market_id": "33", "circulate_market_value": "21843852000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 55, "hot_rank_chg": -3, "stock_cnt": 5825, "price": "5.28", "change": "10.00", "market_id": "33", "circulate_market_value": "2672358200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "锂电材料", "xgb_concepts": [{"name": "仪器仪表", "change_pct": -0.05}, {"name": "锂电池", "change_pct": -1.08}, {"name": "ST摘帽", "change_pct": 1.07}, {"name": "有机硅", "change_pct": -0.15}, {"name": "新能源汽车", "change_pct": -0.67}, {"name": "华为产业链", "change_pct": -0.29}, {"name": "供应链金融", "change_pct": 1.72}]}, {"code": "002208", "name": "合肥城建", "hot_rank": 56, "hot_rank_chg": -24, "stock_cnt": 5825, "price": "13.43", "change": "2.83", "market_id": "33", "circulate_market_value": "10785260500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 57, "hot_rank_chg": 87, "stock_cnt": 5825, "price": "67.02", "change": "2.67", "market_id": "17", "circulate_market_value": "41189613000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002969", "name": "嘉美包装", "hot_rank": 58, "hot_rank_chg": 110, "stock_cnt": 5825, "price": "12.61", "change": "10.04", "market_id": "33", "circulate_market_value": "13779391000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "包装印刷", "change_pct": 0.55}, {"name": "啤酒", "change_pct": 0.23}, {"name": "植物奶", "change_pct": 2.09}, {"name": "饮料", "change_pct": 1.92}]}, {"code": "301013", "name": "利和兴", "hot_rank": 59, "hot_rank_chg": 372, "stock_cnt": 5825, "price": "38.28", "change": "-4.35", "market_id": "33", "circulate_market_value": "7244169900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 60, "hot_rank_chg": 10, "stock_cnt": 5825, "price": "7.80", "change": "2.50", "market_id": "17", "circulate_market_value": "15842769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.56}, {"name": "电力体制改革", "change_pct": -0.9}, {"name": "火电", "change_pct": -1.13}, {"name": "风电", "change_pct": -0.63}, {"name": "储能", "change_pct": -1.24}, {"name": "碳中和", "change_pct": -0.05}, {"name": "国企改革", "change_pct": -0.06}]}, {"code": "002900", "name": "哈三联", "hot_rank": 61, "hot_rank_chg": 8, "stock_cnt": 5825, "price": "12.70", "change": "1.28", "market_id": "33", "circulate_market_value": "2046254500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -1.01}, {"name": "医药", "change_pct": -0.41}, {"name": "化学原料药", "change_pct": -0.26}, {"name": "医美", "change_pct": 0.43}, {"name": "新冠病毒防治", "change_pct": 0.13}, {"name": "化妆品", "change_pct": 0.58}]}, {"code": "601179", "name": "中国西电", "hot_rank": 62, "hot_rank_chg": -13, "stock_cnt": 5825, "price": "13.50", "change": "-4.19", "market_id": "17", "circulate_market_value": "69199412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 63, "hot_rank_chg": 31, "stock_cnt": 5825, "price": "347.26", "change": "-7.12", "market_id": "33", "circulate_market_value": "97875888000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 64, "hot_rank_chg": -36, "stock_cnt": 5825, "price": "392.89", "change": "-1.78", "market_id": "33", "circulate_market_value": "1673743200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 65, "hot_rank_chg": -31, "stock_cnt": 5825, "price": "279.72", "change": "-1.83", "market_id": "17", "circulate_market_value": "40551244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002338", "name": "奥普光电", "hot_rank": 66, "hot_rank_chg": 311, "stock_cnt": 5825, "price": "43.22", "change": "10.00", "market_id": "33", "circulate_market_value": "10372800000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "长春光机所旗下"}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 67, "hot_rank_chg": 54, "stock_cnt": 5825, "price": "4.62", "change": "3.36", "market_id": "17", "circulate_market_value": "4476934800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": -0.63}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 68, "hot_rank_chg": -13, "stock_cnt": 5825, "price": "79.88", "change": "-6.02", "market_id": "33", "circulate_market_value": "117170525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 70, "hot_rank_chg": -32, "stock_cnt": 5825, "price": "29.31", "change": "-4.96", "market_id": "33", "circulate_market_value": "41162757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 71, "hot_rank_chg": -12, "stock_cnt": 5825, "price": "46.80", "change": "-5.83", "market_id": "17", "circulate_market_value": "29377142000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 72, "hot_rank_chg": 8, "stock_cnt": 5825, "price": "68.95", "change": "-4.76", "market_id": "33", "circulate_market_value": "32080526000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 73, "hot_rank_chg": -10, "stock_cnt": 5825, "price": "31.03", "change": "-4.96", "market_id": "17", "circulate_market_value": "105903828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 74, "hot_rank_chg": -12, "stock_cnt": 5825, "price": "25.98", "change": "-8.26", "market_id": "17", "circulate_market_value": "4752608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 75, "hot_rank_chg": -7, "stock_cnt": 5825, "price": "14.90", "change": "11.10", "market_id": "33", "circulate_market_value": "4500567200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 76, "hot_rank_chg": 3, "stock_cnt": 5825, "price": "31.25", "change": "-1.64", "market_id": "17", "circulate_market_value": "643806040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 77, "hot_rank_chg": -17, "stock_cnt": 5825, "price": "16.68", "change": "2.96", "market_id": "17", "circulate_market_value": "13131770500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601678", "name": "滨化股份", "hot_rank": 78, "hot_rank_chg": -21, "stock_cnt": 5825, "price": "6.54", "change": "-7.37", "market_id": "17", "circulate_market_value": "13363419200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.08}, {"name": "军民融合", "change_pct": -0.65}, {"name": "氢能源/燃料电池", "change_pct": -0.62}, {"name": "烧碱", "change_pct": -0.81}, {"name": "军工", "change_pct": -0.85}, {"name": "新能源汽车", "change_pct": -0.67}, {"name": "环氧丙烷", "change_pct": -1.08}, {"name": "氟化工", "change_pct": -1.74}, {"name": "双氧水", "change_pct": -0.62}, {"name": "液氯", "change_pct": -2.73}]}, {"code": "301165", "name": "锐捷网络", "hot_rank": 79, "hot_rank_chg": 20, "stock_cnt": 5825, "price": "116.06", "change": "-11.16", "market_id": "33", "circulate_market_value": "129248636000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603619", "name": "中曼石油", "hot_rank": 80, "hot_rank_chg": 76, "stock_cnt": 5825, "price": "20.17", "change": "-1.27", "market_id": "17", "circulate_market_value": "9325366800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603297", "name": "永新光学", "hot_rank": 81, "hot_rank_chg": 976, "stock_cnt": 5825, "price": "101.66", "change": "10.00", "market_id": "17", "circulate_market_value": "11256720300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机"}, {"code": "600183", "name": "生益科技", "hot_rank": 82, "hot_rank_chg": -10, "stock_cnt": 5825, "price": "113.89", "change": "-9.60", "market_id": "17", "circulate_market_value": "274674080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600775", "name": "南京熊猫", "hot_rank": 83, "hot_rank_chg": -10, "stock_cnt": 5825, "price": "10.35", "change": "9.99", "market_id": "17", "circulate_market_value": "6953528800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "脑机接口概念", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.24}, {"name": "央企改革", "change_pct": -0.56}, {"name": "股权转让", "change_pct": -0.02}, {"name": "5G", "change_pct": -2.34}, {"name": "军工集团", "change_pct": -1.37}, {"name": "工业自动化", "change_pct": -0.24}, {"name": "北斗导航", "change_pct": -0.31}, {"name": "智慧城市", "change_pct": 0.91}, {"name": "军工", "change_pct": -0.85}, {"name": "机器人", "change_pct": -0.36}, {"name": "白色家电", "change_pct": 0.48}, {"name": "家电", "change_pct": 0.32}, {"name": "脑科学", "change_pct": 2.17}, {"name": "无人机", "change_pct": -0.56}, {"name": "智能制造", "change_pct": -0.25}, {"name": "工业互联网", "change_pct": 0.02}, {"name": "国企改革", "change_pct": -0.06}, {"name": "卫星互联网", "change_pct": -0.78}]}, {"code": "301234", "name": "五洲医疗", "hot_rank": 84, "hot_rank_chg": -33, "stock_cnt": 5825, "price": "77.60", "change": "10.07", "market_id": "33", "circulate_market_value": "3117239600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 85, "hot_rank_chg": 12, "stock_cnt": 5825, "price": "211.10", "change": "-7.19", "market_id": "17", "circulate_market_value": "241659790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 86, "hot_rank_chg": -21, "stock_cnt": 5825, "price": "58.13", "change": "-6.90", "market_id": "33", "circulate_market_value": "49623757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 87, "hot_rank_chg": 13, "stock_cnt": 5825, "price": "34.60", "change": "-5.57", "market_id": "33", "circulate_market_value": "171951620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 88, "hot_rank_chg": 74, "stock_cnt": 5825, "price": "220.81", "change": "-8.43", "market_id": "17", "circulate_market_value": "104126633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002365", "name": "永安药业", "hot_rank": 89, "hot_rank_chg": 49, "stock_cnt": 5825, "price": "13.06", "change": "2.11", "market_id": "33", "circulate_market_value": "3203467400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600539", "name": "狮头股份", "hot_rank": 90, "hot_rank_chg": -4, "stock_cnt": 5825, "price": "16.47", "change": "-7.37", "market_id": "17", "circulate_market_value": "3788100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 91, "hot_rank_chg": -3, "stock_cnt": 5825, "price": "2.65", "change": "9.96", "market_id": "33", "circulate_market_value": "11657375000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "重大资产重组", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.6}, {"name": "京津冀", "change_pct": 0.04}, {"name": "旅游", "change_pct": 1.67}, {"name": "园林", "change_pct": 0.79}, {"name": "海绵城市", "change_pct": 1.16}, {"name": "固废处理", "change_pct": -0.17}, {"name": "雄安新区", "change_pct": 0.33}, {"name": "北京城市规划", "change_pct": 0.89}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.02}, {"name": "碳中和", "change_pct": -0.05}, {"name": "乡村振兴", "change_pct": 0.88}, {"name": "汽车拆解", "change_pct": 0.19}, {"name": "土壤修复", "change_pct": -0.01}, {"name": "核污染防治", "change_pct": -0.73}, {"name": "新型城镇化", "change_pct": 0.57}, {"name": "低价股", "change_pct": 0.97}, {"name": "西部大开发", "change_pct": 0.3}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 92, "hot_rank_chg": -1, "stock_cnt": 5825, "price": "309.20", "change": "-7.94", "market_id": "17", "circulate_market_value": "125639807000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 93, "hot_rank_chg": 2, "stock_cnt": 5825, "price": "73.94", "change": "-6.45", "market_id": "33", "circulate_market_value": "48285454000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000859", "name": "国风新材", "hot_rank": 94, "hot_rank_chg": 526, "stock_cnt": 5825, "price": "8.44", "change": "10.04", "market_id": "33", "circulate_market_value": "7561609300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "并购重组", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.2}, {"name": "安徽国企改革", "change_pct": -0.38}, {"name": "装修装饰", "change_pct": 0.6}, {"name": "碳基材料", "change_pct": -0.83}, {"name": "建筑节能", "change_pct": 1.42}, {"name": "光刻机（胶）", "change_pct": 0.43}, {"name": "国企改革", "change_pct": -0.06}]}, {"code": "300164", "name": "通源石油", "hot_rank": 95, "hot_rank_chg": 91, "stock_cnt": 5825, "price": "10.02", "change": "-4.48", "market_id": "33", "circulate_market_value": "5843772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -1.1}, {"name": "一带一路", "change_pct": -0.18}, {"name": "天然气", "change_pct": -0.92}, {"name": "油气改革", "change_pct": -0.81}, {"name": "页岩气", "change_pct": -0.95}, {"name": "深地经济", "change_pct": -1.08}]}, {"code": "300214", "name": "日科化学", "hot_rank": 96, "hot_rank_chg": 30, "stock_cnt": 5825, "price": "13.89", "change": "-2.39", "market_id": "33", "circulate_market_value": "6457497300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603567", "name": "珍宝岛", "hot_rank": 97, "hot_rank_chg": -22, "stock_cnt": 5825, "price": "7.08", "change": "9.94", "market_id": "17", "circulate_market_value": "6650975300.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": 0.45}, {"name": "创新药", "change_pct": -1.01}, {"name": "医药", "change_pct": -0.41}, {"name": "流感", "change_pct": 0.03}]}, {"code": "603459", "name": "红板科技", "hot_rank": 98, "hot_rank_chg": -45, "stock_cnt": 5825, "price": "91.92", "change": "-0.63", "market_id": "17", "circulate_market_value": "7266446800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 99, "hot_rank_chg": 98, "stock_cnt": 5825, "price": "190.86", "change": "-8.76", "market_id": "33", "circulate_market_value": "207729740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 100, "hot_rank_chg": 79, "stock_cnt": 5825, "price": "96.56", "change": "-6.54", "market_id": "33", "circulate_market_value": "92381596000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告"};