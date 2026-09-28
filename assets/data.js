const UPDATE_TIME = "2026-09-28 10:26";
const THS_HOT = [
  {
    "name": "猪肉",
    "rise": 1.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -6.56,
    "rate": 0,
    "tag": "",
    "hotTag": "连续300天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -0.64,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续130天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "海峡两岸",
    "rise": -3.03,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "玻璃基板",
    "rise": -3.58,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "PCB概念",
    "rise": -5.67,
    "rate": 0,
    "tag": "",
    "hotTag": "连续123天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": -2.93,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "培育钻石",
    "rise": -2.9,
    "rate": 0,
    "tag": "",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "风电",
    "rise": -1.9,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885641"
  },
  {
    "name": "存储芯片",
    "rise": -5.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续253天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "MLCC概念",
    "rise": -6.03,
    "rate": 0,
    "tag": "",
    "hotTag": "连续40天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "光纤概念",
    "rise": -5.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续129天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "商业航天",
    "rise": -3.36,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续229天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "白酒概念",
    "rise": -0.33,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "机器人概念",
    "rise": -2.73,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "网络安全",
    "rise": -2.02,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885459"
  },
  {
    "name": "新股与次新股",
    "rise": -3.49,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "AI应用",
    "rise": -2.13,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续58天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "深圳国企改革",
    "rise": 0.08,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885697"
  },
  {
    "name": "ST板块",
    "rise": -1.92,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  }
];
const THS_EVENTS = [
  {
    "title": "生猪价格持续下探  机构：猪价有望迎真正反转",
    "desc": "",
    "heat": 150139,
    "direction": "猪肉",
    "themes": [
      "生猪养殖",
      "屠宰加工",
      "猪肉"
    ],
    "stocks": [
      {
        "name": "东瑞股份",
        "code": "001201",
        "chg": 10.027285
      }
    ]
  },
  {
    "title": "机构：创新药行业进入快速成长期，关注BD出海价值兑现机会",
    "desc": "",
    "heat": 89956,
    "direction": "创新药",
    "themes": [
      "实验猴",
      "ADC药物",
      "PD-1",
      "CDMO",
      "药物发现CRO",
      "药物定制CRO",
      "临床前CRO",
      "临床CRO",
      "仿制药一致性评价",
      "细胞免疫治疗",
      "创新药",
      "CRO概念"
    ],
    "stocks": [
      {
        "name": "丽珠集团",
        "code": "000513",
        "chg": 10.007252
      }
    ]
  },
  {
    "title": "特斯拉近几个月已将其Optimus人形机器人的产量提升约10倍",
    "desc": "",
    "heat": 78101,
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
        "name": "洛轴股份",
        "code": "301699",
        "chg": 14.462577
      }
    ]
  },
  {
    "title": "中国疫苗企业的角色变了",
    "desc": "",
    "heat": 56076,
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
        "name": "丽珠集团",
        "code": "000513",
        "chg": 10.007252
      }
    ]
  },
  {
    "title": "国台办：将继续积极推动两岸经济交流合作",
    "desc": "",
    "heat": 45431,
    "direction": "海峡两岸",
    "themes": [
      "两岸合作",
      "福建本地股",
      "台资控股",
      "福建自贸区",
      "福建",
      "海峡两岸"
    ],
    "stocks": [
      {
        "name": "雷曼光电",
        "code": "300162",
        "chg": 12.890625
      }
    ]
  },
  {
    "title": "英伟达加码玻璃基板",
    "desc": "",
    "heat": 43806,
    "direction": "玻璃基板",
    "themes": [
      "显示用玻璃基板",
      "设备及耗材",
      "玻璃基板制造",
      "玻璃基板封装"
    ],
    "stocks": [
      {
        "name": "雷曼光电",
        "code": "300162",
        "chg": 12.890625
      }
    ]
  },
  {
    "title": "商务部美大司负责人解读第八轮中美经贸磋商成果",
    "desc": "",
    "heat": 31160,
    "direction": "外贸出口",
    "themes": [
      "纺织服装",
      "家居/办公",
      "户外休闲",
      "工具五金",
      "宠物经济",
      "跨境电商",
      "两轮车"
    ],
    "stocks": [
      {
        "name": "嘉益股份",
        "code": "301004",
        "chg": 17.06422
      }
    ]
  },
  {
    "title": "OpenAI再次暂停其最先进模型训练",
    "desc": "",
    "heat": 15706,
    "direction": "AI安全",
    "themes": [
      "AI安全",
      "AI反诈",
      "AI内容审核"
    ],
    "stocks": [
      {
        "name": "中孚信息",
        "code": "300659",
        "chg": 8.309991
      }
    ]
  },
  {
    "title": "首部AI超写实院线电影《三星堆：未来往事》10月23日全国上映",
    "desc": "",
    "heat": 12936,
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
        "name": "博纳影业",
        "code": "001330",
        "chg": 10.034602
      }
    ]
  },
  {
    "title": "央视《超级工程》上新！聚焦曙光8000",
    "desc": "",
    "heat": 1296,
    "direction": "培育钻石",
    "themes": [
      "金刚石散热",
      "培育制造",
      "超硬材料",
      "MPCVD设备",
      "品牌零售",
      "培育钻石"
    ],
    "stocks": [
      {
        "name": "四方达",
        "code": "300179",
        "chg": 0.338677
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄酒",
    "change": "+6.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+4.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车整车",
    "change": "+1.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+1.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+1.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+1.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+0.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+0.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "林业碳汇",
    "change": "+0.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "啤酒",
    "change": "+0.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+0.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+0.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "健康中国",
    "change": "+0.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+0.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+0.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "+0.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+0.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 1,
    "hot_rank_chg": 1,
    "stock_cnt": 5804,
    "price": "9.09",
    "change": "3.53",
    "market_id": "33",
    "circulate_market_value": "17408190000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.28
      },
      {
        "name": "林业",
        "change_pct": -1.36
      },
      {
        "name": "碳中和",
        "change_pct": -1.32
      },
      {
        "name": "自贸区",
        "change_pct": -1.41
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 6,
    "hot_rank_chg": 37,
    "stock_cnt": 5804,
    "price": "10.38",
    "change": "9.38",
    "market_id": "17",
    "circulate_market_value": "37240012000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -1.13
      },
      {
        "name": "OLED",
        "change_pct": -3.91
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -4.01
      },
      {
        "name": "国企改革",
        "change_pct": -1.38
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.8
      },
      {
        "name": "陕西国企改革",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 7,
    "hot_rank_chg": 1,
    "stock_cnt": 5804,
    "price": "8.55",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "8933791100.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "拟收购界面财联社",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -2.89
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.96
      },
      {
        "name": "复牌股",
        "change_pct": -1.23
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -2.72
      },
      {
        "name": "国企改革",
        "change_pct": -1.38
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 11,
    "hot_rank_chg": -1,
    "stock_cnt": 5804,
    "price": "7.33",
    "change": "-9.95",
    "market_id": "17",
    "circulate_market_value": "18460677000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.81
      },
      {
        "name": "工业大麻",
        "change_pct": -1.63
      },
      {
        "name": "中药",
        "change_pct": -0.33
      },
      {
        "name": "强势人气股",
        "change_pct": -4.18
      },
      {
        "name": "保健品",
        "change_pct": -0.88
      },
      {
        "name": "民营医院",
        "change_pct": -1.12
      },
      {
        "name": "医药",
        "change_pct": -0.47
      },
      {
        "name": "化学原料药",
        "change_pct": -0.32
      },
      {
        "name": "流感",
        "change_pct": -0.87
      },
      {
        "name": "振兴东北",
        "change_pct": -1.1
      },
      {
        "name": "食品",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 13,
    "hot_rank_chg": 11,
    "stock_cnt": 5804,
    "price": "5.80",
    "change": "-0.85",
    "market_id": "33",
    "circulate_market_value": "205129380000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -5.12
      },
      {
        "name": "手机产业链",
        "change_pct": -4.49
      },
      {
        "name": "超高清视频",
        "change_pct": -2.53
      },
      {
        "name": "苹果产业链",
        "change_pct": -5.17
      },
      {
        "name": "电竞",
        "change_pct": -2.28
      },
      {
        "name": "半导体",
        "change_pct": -4.85
      },
      {
        "name": "人工智能",
        "change_pct": -2.38
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.77
      },
      {
        "name": "VR&AR",
        "change_pct": -3.98
      },
      {
        "name": "OLED",
        "change_pct": -3.91
      },
      {
        "name": "京津冀",
        "change_pct": -1.34
      },
      {
        "name": "物联网",
        "change_pct": -2.8
      },
      {
        "name": "指纹识别",
        "change_pct": -3.44
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.91
      },
      {
        "name": "白马股",
        "change_pct": -0.73
      },
      {
        "name": "智能制造",
        "change_pct": -2.83
      },
      {
        "name": "小米概念股",
        "change_pct": -3.94
      },
      {
        "name": "国产芯片",
        "change_pct": -4.27
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -4.01
      },
      {
        "name": "全息概念",
        "change_pct": -3.14
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.12
      },
      {
        "name": "MicroLED",
        "change_pct": -3.18
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.04
      },
      {
        "name": "智能手表",
        "change_pct": -3.82
      },
      {
        "name": "MiniLED",
        "change_pct": -4.18
      },
      {
        "name": "传感器",
        "change_pct": -3.81
      },
      {
        "name": "大硅片",
        "change_pct": -3.99
      },
      {
        "name": "AI PC",
        "change_pct": -4.61
      },
      {
        "name": "华为产业链",
        "change_pct": -3.09
      },
      {
        "name": "回购",
        "change_pct": -1.82
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -6.99
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -4.45
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.8
      }
    ]
  },
  {
    "code": "002413",
    "name": "雷科防务",
    "hot_rank": 14,
    "hot_rank_chg": -9,
    "stock_cnt": 5804,
    "price": "9.18",
    "change": "2.34",
    "market_id": "33",
    "circulate_market_value": "11892052000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.89
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.69
      },
      {
        "name": "5G",
        "change_pct": -5.4
      },
      {
        "name": "人工智能",
        "change_pct": -2.38
      },
      {
        "name": "大飞机",
        "change_pct": -2.68
      },
      {
        "name": "北斗导航",
        "change_pct": -3.33
      },
      {
        "name": "军民融合",
        "change_pct": -3.36
      },
      {
        "name": "军工",
        "change_pct": -3.01
      },
      {
        "name": "国产芯片",
        "change_pct": -4.27
      },
      {
        "name": "百度概念股",
        "change_pct": -2.28
      },
      {
        "name": "毫米波通信",
        "change_pct": -5.27
      },
      {
        "name": "航天",
        "change_pct": -3.64
      },
      {
        "name": "闪存",
        "change_pct": -4.96
      },
      {
        "name": "卫星互联网",
        "change_pct": -3.88
      },
      {
        "name": "华为产业链",
        "change_pct": -3.09
      },
      {
        "name": "毫米波雷达",
        "change_pct": -4.58
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -2.97
      },
      {
        "name": "低空经济",
        "change_pct": -2.96
      },
      {
        "name": "军工信息化",
        "change_pct": -2.96
      },
      {
        "name": "算力一体机",
        "change_pct": -3.8
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 16,
    "hot_rank_chg": 1,
    "stock_cnt": 5804,
    "price": "7.28",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "3336048400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "海峡两岸",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -0.98
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.28
      },
      {
        "name": "自贸区",
        "change_pct": -1.41
      }
    ]
  },
  {
    "code": "002640",
    "name": "跨境通",
    "hot_rank": 17,
    "hot_rank_chg": 11,
    "stock_cnt": 5804,
    "price": "3.96",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "6131116600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "跨境电商",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.81
      },
      {
        "name": "数字经济",
        "change_pct": -2.04
      },
      {
        "name": "拼多多概念股",
        "change_pct": -2.99
      },
      {
        "name": "无线耳机",
        "change_pct": -4.0
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.11
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 21,
    "hot_rank_chg": 165,
    "stock_cnt": 5804,
    "price": "2.24",
    "change": "9.80",
    "market_id": "33",
    "circulate_market_value": "11295168300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "汽车整车",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.18
      },
      {
        "name": "新能源整车",
        "change_pct": 1.4
      },
      {
        "name": "汽车整车",
        "change_pct": 1.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.65
      },
      {
        "name": "低价股",
        "change_pct": -1.39
      }
    ]
  },
  {
    "code": "300300",
    "name": "海峡创新",
    "hot_rank": 23,
    "hot_rank_chg": 18,
    "stock_cnt": 5804,
    "price": "11.08",
    "change": "2.50",
    "market_id": "33",
    "circulate_market_value": "7388250400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -2.38
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.77
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.9
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.28
      },
      {
        "name": "大数据",
        "change_pct": -2.09
      },
      {
        "name": "智慧城市",
        "change_pct": -2.42
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.54
      },
      {
        "name": "医美",
        "change_pct": -0.76
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.11
      },
      {
        "name": "自贸区",
        "change_pct": -1.41
      },
      {
        "name": "区块链",
        "change_pct": -1.78
      }
    ]
  },
  {
    "code": "002614",
    "name": "奥佳华",
    "hot_rank": 27,
    "hot_rank_chg": -24,
    "stock_cnt": 5804,
    "price": "8.50",
    "change": "2.04",
    "market_id": "33",
    "circulate_market_value": "3750840100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -1.32
      },
      {
        "name": "股权转让",
        "change_pct": -2.45
      },
      {
        "name": "人工智能",
        "change_pct": -2.38
      },
      {
        "name": "养老产业",
        "change_pct": -0.74
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.28
      },
      {
        "name": "外贸受益概念",
        "change_pct": -2.08
      },
      {
        "name": "小家电",
        "change_pct": -0.45
      },
      {
        "name": "机器人",
        "change_pct": -2.74
      },
      {
        "name": "家电",
        "change_pct": -1.68
      },
      {
        "name": "RCEP概念",
        "change_pct": -1.25
      },
      {
        "name": "血氧仪",
        "change_pct": -1.94
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -2.03
      },
      {
        "name": "华为产业链",
        "change_pct": -3.09
      },
      {
        "name": "自贸区",
        "change_pct": -1.41
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 34,
    "hot_rank_chg": 19,
    "stock_cnt": 5804,
    "price": "12.02",
    "change": "-7.82",
    "market_id": "17",
    "circulate_market_value": "21505442000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.99
      },
      {
        "name": "纯碱",
        "change_pct": -1.39
      },
      {
        "name": "食品",
        "change_pct": -0.52
      },
      {
        "name": "土壤修复",
        "change_pct": -2.45
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.54
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -3.58
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.84
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 35,
    "hot_rank_chg": 15,
    "stock_cnt": 5804,
    "price": "3.71",
    "change": "1.37",
    "market_id": "33",
    "circulate_market_value": "8691372900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.26
      },
      {
        "name": "强势人气股",
        "change_pct": -4.18
      },
      {
        "name": "人工智能",
        "change_pct": -2.38
      },
      {
        "name": "VR&AR",
        "change_pct": -3.98
      },
      {
        "name": "京津冀",
        "change_pct": -1.34
      },
      {
        "name": "装修装饰",
        "change_pct": -2.7
      },
      {
        "name": "住房租赁",
        "change_pct": 0.16
      },
      {
        "name": "破净股",
        "change_pct": -0.82
      },
      {
        "name": "数字经济",
        "change_pct": -2.04
      },
      {
        "name": "房产经纪",
        "change_pct": 0.3
      },
      {
        "name": "物业管理",
        "change_pct": -0.44
      },
      {
        "name": "华为产业链",
        "change_pct": -3.09
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.07
      }
    ]
  },
  {
    "code": "000850",
    "name": "华茂股份",
    "hot_rank": 38,
    "hot_rank_chg": -20,
    "stock_cnt": 5804,
    "price": "5.14",
    "change": "0.39",
    "market_id": "33",
    "circulate_market_value": "4848944300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "安徽国企改革",
        "change_pct": -1.65
      },
      {
        "name": "纺织服装",
        "change_pct": -1.89
      },
      {
        "name": "有色 · 铜",
        "change_pct": -4.35
      },
      {
        "name": "有色金属",
        "change_pct": -3.24
      },
      {
        "name": "国企改革",
        "change_pct": -1.38
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 40,
    "hot_rank_chg": 29,
    "stock_cnt": 5804,
    "price": "6.36",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "7395709000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "首部AI电影上映",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -2.01
      },
      {
        "name": "新疆概念",
        "change_pct": -1.51
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.7
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.54
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.9
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 41,
    "hot_rank_chg": 17,
    "stock_cnt": 5804,
    "price": "10.65",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4894865600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "机器人轴承",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": -1.56
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.91
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.65
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.15
      },
      {
        "name": "大农业",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 47,
    "hot_rank_chg": -13,
    "stock_cnt": 5804,
    "price": "6.05",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5862652700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "风电铸件",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "600059",
    "name": "古越龙山",
    "hot_rank": 48,
    "hot_rank_chg": 337,
    "stock_cnt": 5804,
    "price": "11.73",
    "change": "6.64",
    "market_id": "17",
    "circulate_market_value": "10692392500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "白酒",
        "change_pct": -1.01
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.73
      },
      {
        "name": "黄酒",
        "change_pct": 6.06
      },
      {
        "name": "国企改革",
        "change_pct": -1.38
      },
      {
        "name": "回购",
        "change_pct": -1.82
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 52,
    "hot_rank_chg": 69,
    "stock_cnt": 5804,
    "price": "3.71",
    "change": "-1.33",
    "market_id": "33",
    "circulate_market_value": "36043070000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": -1.27
      },
      {
        "name": "深圳本地股",
        "change_pct": -1.0
      },
      {
        "name": "股权转让",
        "change_pct": -2.45
      },
      {
        "name": "房地产",
        "change_pct": -0.74
      },
      {
        "name": "养老产业",
        "change_pct": -0.74
      },
      {
        "name": "冷链",
        "change_pct": -1.57
      },
      {
        "name": "住房租赁",
        "change_pct": 0.16
      },
      {
        "name": "破净股",
        "change_pct": -0.82
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.32
      },
      {
        "name": "物业管理",
        "change_pct": -0.44
      },
      {
        "name": "旧改",
        "change_pct": -1.43
      },
      {
        "name": "REITs",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 53,
    "hot_rank_chg": 79,
    "stock_cnt": 5804,
    "price": "2.69",
    "change": "-1.82",
    "market_id": "33",
    "circulate_market_value": "25590928000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -4.85
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.69
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.91
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.65
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.15
      },
      {
        "name": "低价股",
        "change_pct": -1.39
      },
      {
        "name": "减速器",
        "change_pct": -1.78
      },
      {
        "name": "华为汽车",
        "change_pct": -1.84
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 55,
    "hot_rank_chg": 20,
    "stock_cnt": 5804,
    "price": "3.93",
    "change": "3.97",
    "market_id": "17",
    "circulate_market_value": "4559370000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -1.13
      },
      {
        "name": "国企改革",
        "change_pct": -1.38
      },
      {
        "name": "湖北国企改革",
        "change_pct": -2.18
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 63,
    "hot_rank_chg": 114,
    "stock_cnt": 5804,
    "price": "7.28",
    "change": "5.05",
    "market_id": "33",
    "circulate_market_value": "8494662100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.89
      },
      {
        "name": "国产软件",
        "change_pct": -1.62
      },
      {
        "name": "一带一路",
        "change_pct": -1.96
      },
      {
        "name": "量子通信",
        "change_pct": -3.22
      },
      {
        "name": "人工智能",
        "change_pct": -2.38
      },
      {
        "name": "网络安全",
        "change_pct": -1.54
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.9
      },
      {
        "name": "物联网",
        "change_pct": -2.8
      },
      {
        "name": "大数据",
        "change_pct": -2.09
      },
      {
        "name": "破净股",
        "change_pct": -0.82
      },
      {
        "name": "数字经济",
        "change_pct": -2.04
      },
      {
        "name": "国产芯片",
        "change_pct": -4.27
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.7
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.54
      },
      {
        "name": "信创",
        "change_pct": -1.91
      },
      {
        "name": "华为昇腾",
        "change_pct": -2.52
      },
      {
        "name": "跨境支付",
        "change_pct": -1.1
      },
      {
        "name": "web3.0",
        "change_pct": -2.48
      },
      {
        "name": "数字人民币",
        "change_pct": -1.72
      },
      {
        "name": "智慧政务",
        "change_pct": -1.95
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -2.03
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -1.7
      },
      {
        "name": "卫星互联网",
        "change_pct": -3.88
      },
      {
        "name": "智慧灯杆",
        "change_pct": -3.12
      },
      {
        "name": "华为产业链",
        "change_pct": -3.09
      },
      {
        "name": "回购",
        "change_pct": -1.82
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.07
      },
      {
        "name": "智能电网",
        "change_pct": -2.65
      },
      {
        "name": "低空经济",
        "change_pct": -2.96
      },
      {
        "name": "量子计算",
        "change_pct": -2.81
      },
      {
        "name": "财税改革",
        "change_pct": -0.84
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.84
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 66,
    "hot_rank_chg": 12,
    "stock_cnt": 5804,
    "price": "5.64",
    "change": "3.87",
    "market_id": "17",
    "circulate_market_value": "3278966100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -3.39
      },
      {
        "name": "强势人气股",
        "change_pct": -4.18
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.69
      },
      {
        "name": "农垦",
        "change_pct": -1.55
      },
      {
        "name": "棉花",
        "change_pct": -0.78
      },
      {
        "name": "新疆概念",
        "change_pct": -1.51
      },
      {
        "name": "风电",
        "change_pct": -1.54
      },
      {
        "name": "大农业",
        "change_pct": -1.16
      },
      {
        "name": "国企改革",
        "change_pct": -1.38
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 68,
    "hot_rank_chg": 19,
    "stock_cnt": 5804,
    "price": "3.26",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "6451570600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -1.04
      },
      {
        "name": "深圳本地股",
        "change_pct": -1.0
      },
      {
        "name": "共享经济",
        "change_pct": -0.98
      },
      {
        "name": "强势人气股",
        "change_pct": -4.18
      },
      {
        "name": "养老产业",
        "change_pct": -0.74
      },
      {
        "name": "住房租赁",
        "change_pct": 0.16
      },
      {
        "name": "房产经纪",
        "change_pct": 0.3
      },
      {
        "name": "第三代半导体",
        "change_pct": -4.51
      },
      {
        "name": "物业管理",
        "change_pct": -0.44
      },
      {
        "name": "旧改",
        "change_pct": -1.43
      },
      {
        "name": "横琴新区",
        "change_pct": -2.27
      },
      {
        "name": "氮化镓",
        "change_pct": -4.62
      },
      {
        "name": "REITs",
        "change_pct": -1.04
      },
      {
        "name": "华为产业链",
        "change_pct": -3.09
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 74,
    "hot_rank_chg": -1,
    "stock_cnt": 5804,
    "price": "12.18",
    "change": "-5.73",
    "market_id": "17",
    "circulate_market_value": "4683790200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.39
      },
      {
        "name": "股权转让",
        "change_pct": -2.45
      },
      {
        "name": "强势人气股",
        "change_pct": -4.18
      },
      {
        "name": "新疆概念",
        "change_pct": -1.51
      },
      {
        "name": "医药",
        "change_pct": -0.47
      },
      {
        "name": "流感",
        "change_pct": -0.87
      },
      {
        "name": "国资入股",
        "change_pct": -1.59
      },
      {
        "name": "减肥药",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "300162",
    "name": "雷曼光电",
    "hot_rank": 78,
    "hot_rank_chg": 1219,
    "stock_cnt": 5804,
    "price": "8.67",
    "change": "12.89",
    "market_id": "33",
    "circulate_market_value": "2966315000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.98
      },
      {
        "name": "超高清视频",
        "change_pct": -2.53
      },
      {
        "name": "人工智能",
        "change_pct": -2.38
      },
      {
        "name": "足球",
        "change_pct": -0.84
      },
      {
        "name": "教育",
        "change_pct": -2.94
      },
      {
        "name": "LED",
        "change_pct": -2.59
      },
      {
        "name": "MicroLED",
        "change_pct": -3.18
      },
      {
        "name": "华为海思",
        "change_pct": -3.65
      },
      {
        "name": "教育信息化",
        "change_pct": -2.07
      },
      {
        "name": "远程办公",
        "change_pct": -1.9
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.8
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 79,
    "hot_rank_chg": 54,
    "stock_cnt": 5804,
    "price": "7.12",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "3333025500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.18
      },
      {
        "name": "旅游",
        "change_pct": -1.78
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.54
      },
      {
        "name": "广西概念",
        "change_pct": -1.36
      },
      {
        "name": "低空经济",
        "change_pct": -2.96
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 80,
    "hot_rank_chg": 32,
    "stock_cnt": 5804,
    "price": "11.59",
    "change": "-7.06",
    "market_id": "17",
    "circulate_market_value": "57822727000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -4.85
      },
      {
        "name": "5G",
        "change_pct": -5.4
      },
      {
        "name": "VR&AR",
        "change_pct": -3.98
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.9
      },
      {
        "name": "光通信",
        "change_pct": -7.34
      },
      {
        "name": "3D感应",
        "change_pct": -3.36
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.91
      },
      {
        "name": "LED",
        "change_pct": -2.59
      },
      {
        "name": "国产芯片",
        "change_pct": -4.27
      },
      {
        "name": "MicroLED",
        "change_pct": -3.18
      },
      {
        "name": "第三代半导体",
        "change_pct": -4.51
      },
      {
        "name": "激光雷达",
        "change_pct": -4.99
      },
      {
        "name": "华为汽车",
        "change_pct": -1.84
      },
      {
        "name": "MiniLED",
        "change_pct": -4.18
      },
      {
        "name": "氮化镓",
        "change_pct": -4.62
      },
      {
        "name": "大基金概念",
        "change_pct": -4.77
      },
      {
        "name": "碳化硅",
        "change_pct": -4.41
      },
      {
        "name": "磷化铟",
        "change_pct": -4.98
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -6.99
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -4.45
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 85,
    "hot_rank_chg": -58,
    "stock_cnt": 5804,
    "price": "12.36",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "4067952800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -2.89
      },
      {
        "name": "锂电池",
        "change_pct": -3.49
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.96
      },
      {
        "name": "湖南国企改革",
        "change_pct": -2.86
      },
      {
        "name": "污水处理",
        "change_pct": -2.28
      },
      {
        "name": "智慧城市",
        "change_pct": -2.42
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.65
      },
      {
        "name": "环保",
        "change_pct": -2.2
      },
      {
        "name": "动力电池回收",
        "change_pct": -2.67
      },
      {
        "name": "干细胞",
        "change_pct": -0.96
      },
      {
        "name": "国企改革",
        "change_pct": -1.38
      }
    ]
  },
  {
    "code": "002583",
    "name": "海能达",
    "hot_rank": 91,
    "hot_rank_chg": 39,
    "stock_cnt": 5804,
    "price": "8.46",
    "change": "5.36",
    "market_id": "33",
    "circulate_market_value": "10855344900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "应急产业",
        "change_pct": -2.07
      },
      {
        "name": "5G",
        "change_pct": -5.4
      },
      {
        "name": "一带一路",
        "change_pct": -1.96
      },
      {
        "name": "人工智能",
        "change_pct": -2.38
      },
      {
        "name": "网络安全",
        "change_pct": -1.54
      },
      {
        "name": "高铁轨交",
        "change_pct": -2.06
      },
      {
        "name": "物联网",
        "change_pct": -2.8
      },
      {
        "name": "智慧城市",
        "change_pct": -2.42
      },
      {
        "name": "机器人",
        "change_pct": -2.74
      },
      {
        "name": "智慧安防",
        "change_pct": -2.48
      },
      {
        "name": "智能制造",
        "change_pct": -2.83
      },
      {
        "name": "工业互联网",
        "change_pct": -2.2
      },
      {
        "name": "信创",
        "change_pct": -1.91
      },
      {
        "name": "华为汽车",
        "change_pct": -1.84
      },
      {
        "name": "无线耳机",
        "change_pct": -4.0
      },
      {
        "name": "6G",
        "change_pct": -4.73
      },
      {
        "name": "卫星互联网",
        "change_pct": -3.88
      },
      {
        "name": "星闪概念",
        "change_pct": -2.95
      },
      {
        "name": "低空经济",
        "change_pct": -2.96
      }
    ]
  },
  {
    "code": "002242",
    "name": "九阳股份",
    "hot_rank": 93,
    "hot_rank_chg": 334,
    "stock_cnt": 5804,
    "price": "10.33",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "7869038900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器人",
    "xgb_concepts": [
      {
        "name": "小家电",
        "change_pct": -0.45
      },
      {
        "name": "机器人",
        "change_pct": -2.74
      },
      {
        "name": "家电",
        "change_pct": -1.68
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -2.03
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000592", "name": "平潭发展", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5804, "price": "9.09", "change": "3.53", "market_id": "33", "circulate_market_value": "17408190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -2.28}, {"name": "林业", "change_pct": -1.36}, {"name": "碳中和", "change_pct": -1.32}, {"name": "自贸区", "change_pct": -1.41}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 2, "hot_rank_chg": 55, "stock_cnt": 5804, "price": "60.64", "change": "-10.00", "market_id": "17", "circulate_market_value": "148789110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 3, "hot_rank_chg": 11, "stock_cnt": 5804, "price": "27.71", "change": "2.63", "market_id": "17", "circulate_market_value": "5851331800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 4, "hot_rank_chg": 36, "stock_cnt": 5804, "price": "51.63", "change": "3.65", "market_id": "17", "circulate_market_value": "43707549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 5, "hot_rank_chg": 1, "stock_cnt": 5804, "price": "18.52", "change": "-8.99", "market_id": "17", "circulate_market_value": "14666060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 6, "hot_rank_chg": 37, "stock_cnt": 5804, "price": "10.38", "change": "9.38", "market_id": "17", "circulate_market_value": "37240012000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -1.13}, {"name": "OLED", "change_pct": -3.91}, {"name": "液晶面板/LCD", "change_pct": -4.01}, {"name": "国企改革", "change_pct": -1.38}, {"name": "玻璃基板封装", "change_pct": -3.8}, {"name": "陕西国企改革", "change_pct": -1.98}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5804, "price": "8.55", "change": "10.04", "market_id": "17", "circulate_market_value": "8933791100.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -2.89}, {"name": "上海国企改革", "change_pct": -0.96}, {"name": "复牌股", "change_pct": -1.23}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -2.72}, {"name": "国企改革", "change_pct": -1.38}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 8, "hot_rank_chg": 14, "stock_cnt": 5804, "price": "16.50", "change": "-2.31", "market_id": "17", "circulate_market_value": "21190597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 10, "hot_rank_chg": 3, "stock_cnt": 5804, "price": "14.84", "change": "-10.01", "market_id": "17", "circulate_market_value": "9524063000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 11, "hot_rank_chg": -1, "stock_cnt": 5804, "price": "7.33", "change": "-9.95", "market_id": "17", "circulate_market_value": "18460677000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.81}, {"name": "工业大麻", "change_pct": -1.63}, {"name": "中药", "change_pct": -0.33}, {"name": "强势人气股", "change_pct": -4.18}, {"name": "保健品", "change_pct": -0.88}, {"name": "民营医院", "change_pct": -1.12}, {"name": "医药", "change_pct": -0.47}, {"name": "化学原料药", "change_pct": -0.32}, {"name": "流感", "change_pct": -0.87}, {"name": "振兴东北", "change_pct": -1.1}, {"name": "食品", "change_pct": -0.52}]}, {"code": "601579", "name": "会稽山", "hot_rank": 12, "hot_rank_chg": 47, "stock_cnt": 5804, "price": "41.84", "change": "9.99", "market_id": "17", "circulate_market_value": "20060749000.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "高端黄酒"}, {"code": "000725", "name": "京东方A", "hot_rank": 13, "hot_rank_chg": 11, "stock_cnt": 5804, "price": "5.80", "change": "-0.85", "market_id": "33", "circulate_market_value": "205129380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -5.12}, {"name": "手机产业链", "change_pct": -4.49}, {"name": "超高清视频", "change_pct": -2.53}, {"name": "苹果产业链", "change_pct": -5.17}, {"name": "电竞", "change_pct": -2.28}, {"name": "半导体", "change_pct": -4.85}, {"name": "人工智能", "change_pct": -2.38}, {"name": "互联网医疗", "change_pct": -0.77}, {"name": "VR&AR", "change_pct": -3.98}, {"name": "OLED", "change_pct": -3.91}, {"name": "京津冀", "change_pct": -1.34}, {"name": "物联网", "change_pct": -2.8}, {"name": "指纹识别", "change_pct": -3.44}, {"name": "汽车零部件", "change_pct": -1.91}, {"name": "白马股", "change_pct": -0.73}, {"name": "智能制造", "change_pct": -2.83}, {"name": "小米概念股", "change_pct": -3.94}, {"name": "国产芯片", "change_pct": -4.27}, {"name": "液晶面板/LCD", "change_pct": -4.01}, {"name": "全息概念", "change_pct": -3.14}, {"name": "理想汽车概念股", "change_pct": -2.12}, {"name": "MicroLED", "change_pct": -3.18}, {"name": "钙钛矿电池", "change_pct": -2.04}, {"name": "智能手表", "change_pct": -3.82}, {"name": "MiniLED", "change_pct": -4.18}, {"name": "传感器", "change_pct": -3.81}, {"name": "大硅片", "change_pct": -3.99}, {"name": "AI PC", "change_pct": -4.61}, {"name": "华为产业链", "change_pct": -3.09}, {"name": "回购", "change_pct": -1.82}, {"name": "光电共封装CPO", "change_pct": -6.99}, {"name": "智能眼镜/MR头显", "change_pct": -4.45}, {"name": "玻璃基板封装", "change_pct": -3.8}]}, {"code": "002413", "name": "雷科防务", "hot_rank": 14, "hot_rank_chg": -9, "stock_cnt": 5804, "price": "9.18", "change": "2.34", "market_id": "33", "circulate_market_value": "11892052000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.89}, {"name": "无人驾驶", "change_pct": -2.69}, {"name": "5G", "change_pct": -5.4}, {"name": "人工智能", "change_pct": -2.38}, {"name": "大飞机", "change_pct": -2.68}, {"name": "北斗导航", "change_pct": -3.33}, {"name": "军民融合", "change_pct": -3.36}, {"name": "军工", "change_pct": -3.01}, {"name": "国产芯片", "change_pct": -4.27}, {"name": "百度概念股", "change_pct": -2.28}, {"name": "毫米波通信", "change_pct": -5.27}, {"name": "航天", "change_pct": -3.64}, {"name": "闪存", "change_pct": -4.96}, {"name": "卫星互联网", "change_pct": -3.88}, {"name": "华为产业链", "change_pct": -3.09}, {"name": "毫米波雷达", "change_pct": -4.58}, {"name": "飞行汽车/eVTOL", "change_pct": -2.97}, {"name": "低空经济", "change_pct": -2.96}, {"name": "军工信息化", "change_pct": -2.96}, {"name": "算力一体机", "change_pct": -3.8}]}, {"code": "600699", "name": "均胜电子", "hot_rank": 15, "hot_rank_chg": -14, "stock_cnt": 5804, "price": "24.02", "change": "6.19", "market_id": "17", "circulate_market_value": "33524007000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 16, "hot_rank_chg": 1, "stock_cnt": 5804, "price": "7.28", "change": "9.97", "market_id": "17", "circulate_market_value": "3336048400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "海峡两岸", "xgb_concepts": [{"name": "水泥", "change_pct": -0.98}, {"name": "福建自贸/海西概念", "change_pct": -2.28}, {"name": "自贸区", "change_pct": -1.41}]}, {"code": "002640", "name": "跨境通", "hot_rank": 17, "hot_rank_chg": 11, "stock_cnt": 5804, "price": "3.96", "change": "10.00", "market_id": "33", "circulate_market_value": "6131116600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "跨境电商", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.81}, {"name": "数字经济", "change_pct": -2.04}, {"name": "拼多多概念股", "change_pct": -2.99}, {"name": "无线耳机", "change_pct": -4.0}, {"name": "网红/MCN", "change_pct": -2.11}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 18, "hot_rank_chg": -6, "stock_cnt": 5804, "price": "17.39", "change": "-9.99", "market_id": "33", "circulate_market_value": "7963775800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 19, "hot_rank_chg": 48, "stock_cnt": 5804, "price": "815.00", "change": "-9.03", "market_id": "33", "circulate_market_value": "904598660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 20, "hot_rank_chg": -16, "stock_cnt": 5804, "price": "29.71", "change": "0.34", "market_id": "33", "circulate_market_value": "11149687600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 21, "hot_rank_chg": 165, "stock_cnt": 5804, "price": "2.24", "change": "9.80", "market_id": "33", "circulate_market_value": "11295168300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "汽车整车", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.18}, {"name": "新能源整车", "change_pct": 1.4}, {"name": "汽车整车", "change_pct": 1.46}, {"name": "新能源汽车", "change_pct": -2.65}, {"name": "低价股", "change_pct": -1.39}]}, {"code": "600418", "name": "江淮汽车", "hot_rank": 22, "hot_rank_chg": 78, "stock_cnt": 5804, "price": "25.22", "change": "9.99", "market_id": "17", "circulate_market_value": "56850374000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "尊界"}, {"code": "300300", "name": "海峡创新", "hot_rank": 23, "hot_rank_chg": 18, "stock_cnt": 5804, "price": "11.08", "change": "2.50", "market_id": "33", "circulate_market_value": "7388250400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -2.38}, {"name": "互联网医疗", "change_pct": -0.77}, {"name": "云计算数据中心", "change_pct": -3.9}, {"name": "福建自贸/海西概念", "change_pct": -2.28}, {"name": "大数据", "change_pct": -2.09}, {"name": "智慧城市", "change_pct": -2.42}, {"name": "独角兽", "change_pct": 0.85}, {"name": "东数西算/算力", "change_pct": -3.54}, {"name": "医美", "change_pct": -0.76}, {"name": "网红/MCN", "change_pct": -2.11}, {"name": "自贸区", "change_pct": -1.41}, {"name": "区块链", "change_pct": -1.78}]}, {"code": "001317", "name": "三羊马", "hot_rank": 24, "hot_rank_chg": 14, "stock_cnt": 5804, "price": "64.30", "change": "-1.53", "market_id": "33", "circulate_market_value": "5497811800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 25, "hot_rank_chg": 1, "stock_cnt": 5804, "price": "21.42", "change": "-10.00", "market_id": "33", "circulate_market_value": "25199962000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 26, "hot_rank_chg": 9, "stock_cnt": 5804, "price": "15.85", "change": "3.46", "market_id": "17", "circulate_market_value": "10556100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002614", "name": "奥佳华", "hot_rank": 27, "hot_rank_chg": -24, "stock_cnt": 5804, "price": "8.50", "change": "2.04", "market_id": "33", "circulate_market_value": "3750840100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医疗器械", "change_pct": -1.32}, {"name": "股权转让", "change_pct": -2.45}, {"name": "人工智能", "change_pct": -2.38}, {"name": "养老产业", "change_pct": -0.74}, {"name": "福建自贸/海西概念", "change_pct": -2.28}, {"name": "外贸受益概念", "change_pct": -2.08}, {"name": "小家电", "change_pct": -0.45}, {"name": "机器人", "change_pct": -2.74}, {"name": "家电", "change_pct": -1.68}, {"name": "RCEP概念", "change_pct": -1.25}, {"name": "血氧仪", "change_pct": -1.94}, {"name": "华为鸿蒙", "change_pct": -2.03}, {"name": "华为产业链", "change_pct": -3.09}, {"name": "自贸区", "change_pct": -1.41}, {"name": "IP经济/谷子经济", "change_pct": -2.08}]}, {"code": "600522", "name": "中天科技", "hot_rank": 28, "hot_rank_chg": 77, "stock_cnt": 5804, "price": "31.32", "change": "-10.00", "market_id": "17", "circulate_market_value": "106893583000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 29, "hot_rank_chg": -18, "stock_cnt": 5804, "price": "16.62", "change": "-10.02", "market_id": "17", "circulate_market_value": "5875552300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 30, "hot_rank_chg": -9, "stock_cnt": 5804, "price": "22.18", "change": "-9.39", "market_id": "33", "circulate_market_value": "13195595500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 31, "hot_rank_chg": 31, "stock_cnt": 5804, "price": "50.42", "change": "-10.00", "market_id": "33", "circulate_market_value": "57856444000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 32, "hot_rank_chg": 31, "stock_cnt": 5804, "price": "39.27", "change": "-8.80", "market_id": "17", "circulate_market_value": "155964220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 33, "hot_rank_chg": 16, "stock_cnt": 5804, "price": "17.81", "change": "-8.24", "market_id": "17", "circulate_market_value": "37250366000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 34, "hot_rank_chg": 19, "stock_cnt": 5804, "price": "12.02", "change": "-7.82", "market_id": "17", "circulate_market_value": "21505442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.99}, {"name": "纯碱", "change_pct": -1.39}, {"name": "食品", "change_pct": -0.52}, {"name": "土壤修复", "change_pct": -2.45}, {"name": "东数西算/算力", "change_pct": -3.54}, {"name": "OpenClaw概念", "change_pct": -3.58}, {"name": "DeepSeek概念股", "change_pct": -2.84}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 35, "hot_rank_chg": 15, "stock_cnt": 5804, "price": "3.71", "change": "1.37", "market_id": "33", "circulate_market_value": "8691372900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.26}, {"name": "强势人气股", "change_pct": -4.18}, {"name": "人工智能", "change_pct": -2.38}, {"name": "VR&AR", "change_pct": -3.98}, {"name": "京津冀", "change_pct": -1.34}, {"name": "装修装饰", "change_pct": -2.7}, {"name": "住房租赁", "change_pct": 0.16}, {"name": "破净股", "change_pct": -0.82}, {"name": "数字经济", "change_pct": -2.04}, {"name": "房产经纪", "change_pct": 0.3}, {"name": "物业管理", "change_pct": -0.44}, {"name": "华为产业链", "change_pct": -3.09}, {"name": "AI大模型/智能体", "change_pct": -2.07}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 36, "hot_rank_chg": 62, "stock_cnt": 5804, "price": "459.65", "change": "-5.81", "market_id": "17", "circulate_market_value": "13829820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 37, "hot_rank_chg": -8, "stock_cnt": 5804, "price": "16.99", "change": "-3.36", "market_id": "33", "circulate_market_value": "56509191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000850", "name": "华茂股份", "hot_rank": 38, "hot_rank_chg": -20, "stock_cnt": 5804, "price": "5.14", "change": "0.39", "market_id": "33", "circulate_market_value": "4848944300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "安徽国企改革", "change_pct": -1.65}, {"name": "纺织服装", "change_pct": -1.89}, {"name": "有色 · 铜", "change_pct": -4.35}, {"name": "有色金属", "change_pct": -3.24}, {"name": "国企改革", "change_pct": -1.38}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 39, "hot_rank_chg": -19, "stock_cnt": 5804, "price": "54.18", "change": "-10.00", "market_id": "17", "circulate_market_value": "7743683000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 40, "hot_rank_chg": 29, "stock_cnt": 5804, "price": "6.36", "change": "10.04", "market_id": "33", "circulate_market_value": "7395709000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "首部AI电影上映", "xgb_concepts": [{"name": "影视", "change_pct": -2.01}, {"name": "新疆概念", "change_pct": -1.51}, {"name": "阿里巴巴概念股", "change_pct": -2.7}, {"name": "腾讯概念股", "change_pct": -2.54}, {"name": "短剧/互动影游", "change_pct": -2.9}, {"name": "IP经济/谷子经济", "change_pct": -2.08}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 41, "hot_rank_chg": 17, "stock_cnt": 5804, "price": "10.65", "change": "10.02", "market_id": "33", "circulate_market_value": "4894865600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人轴承", "xgb_concepts": [{"name": "农机", "change_pct": -1.56}, {"name": "汽车零部件", "change_pct": -1.91}, {"name": "新能源汽车", "change_pct": -2.65}, {"name": "新能源车零部件", "change_pct": -2.15}, {"name": "大农业", "change_pct": -1.16}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 42, "hot_rank_chg": 97, "stock_cnt": 5804, "price": "38.28", "change": "-9.99", "market_id": "17", "circulate_market_value": "55965161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 43, "hot_rank_chg": 23, "stock_cnt": 5804, "price": "18.09", "change": "-8.78", "market_id": "17", "circulate_market_value": "40148091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 44, "hot_rank_chg": 91, "stock_cnt": 5804, "price": "168.28", "change": "-9.52", "market_id": "33", "circulate_market_value": "233290220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 45, "hot_rank_chg": 6, "stock_cnt": 5804, "price": "50.80", "change": "-9.99", "market_id": "17", "circulate_market_value": "51317294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 46, "hot_rank_chg": 28, "stock_cnt": 5804, "price": "79.30", "change": "-1.95", "market_id": "33", "circulate_market_value": "57511259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 47, "hot_rank_chg": -13, "stock_cnt": 5804, "price": "6.05", "change": "10.00", "market_id": "17", "circulate_market_value": "5862652700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "风电铸件", "xgb_concepts": [{"name": "风电", "change_pct": -1.54}]}, {"code": "600059", "name": "古越龙山", "hot_rank": 48, "hot_rank_chg": 337, "stock_cnt": 5804, "price": "11.73", "change": "6.64", "market_id": "17", "circulate_market_value": "10692392500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "白酒", "change_pct": -1.01}, {"name": "浙江国企改革", "change_pct": -0.73}, {"name": "黄酒", "change_pct": 6.06}, {"name": "国企改革", "change_pct": -1.38}, {"name": "回购", "change_pct": -1.82}]}, {"code": "300207", "name": "欣旺达", "hot_rank": 49, "hot_rank_chg": 89, "stock_cnt": 5804, "price": "21.38", "change": "6.42", "market_id": "33", "circulate_market_value": "36643732000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603122", "name": "合富中国", "hot_rank": 50, "hot_rank_chg": -20, "stock_cnt": 5804, "price": "14.61", "change": "-2.14", "market_id": "17", "circulate_market_value": "5815549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 51, "hot_rank_chg": 3, "stock_cnt": 5804, "price": "14.25", "change": "-0.21", "market_id": "33", "circulate_market_value": "9406497000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 52, "hot_rank_chg": 69, "stock_cnt": 5804, "price": "3.71", "change": "-1.33", "market_id": "33", "circulate_market_value": "36043070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": -1.27}, {"name": "深圳本地股", "change_pct": -1.0}, {"name": "股权转让", "change_pct": -2.45}, {"name": "房地产", "change_pct": -0.74}, {"name": "养老产业", "change_pct": -0.74}, {"name": "冷链", "change_pct": -1.57}, {"name": "住房租赁", "change_pct": 0.16}, {"name": "破净股", "change_pct": -0.82}, {"name": "冰雪产业", "change_pct": -1.32}, {"name": "物业管理", "change_pct": -0.44}, {"name": "旧改", "change_pct": -1.43}, {"name": "REITs", "change_pct": -1.04}]}, {"code": "000981", "name": "山子高科", "hot_rank": 53, "hot_rank_chg": 79, "stock_cnt": 5804, "price": "2.69", "change": "-1.82", "market_id": "33", "circulate_market_value": "25590928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -4.85}, {"name": "无人驾驶", "change_pct": -2.69}, {"name": "汽车零部件", "change_pct": -1.91}, {"name": "新能源汽车", "change_pct": -2.65}, {"name": "新能源车零部件", "change_pct": -2.15}, {"name": "低价股", "change_pct": -1.39}, {"name": "减速器", "change_pct": -1.78}, {"name": "华为汽车", "change_pct": -1.84}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 54, "hot_rank_chg": 48, "stock_cnt": 5804, "price": "15.07", "change": "-0.33", "market_id": "17", "circulate_market_value": "10252417500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600293", "name": "三峡新材", "hot_rank": 55, "hot_rank_chg": 20, "stock_cnt": 5804, "price": "3.93", "change": "3.97", "market_id": "17", "circulate_market_value": "4559370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -1.13}, {"name": "国企改革", "change_pct": -1.38}, {"name": "湖北国企改革", "change_pct": -2.18}]}, {"code": "002579", "name": "中京电子", "hot_rank": 56, "hot_rank_chg": -10, "stock_cnt": 5804, "price": "17.30", "change": "-9.99", "market_id": "33", "circulate_market_value": "10093481800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 57, "hot_rank_chg": 127, "stock_cnt": 5804, "price": "399.70", "change": "-8.12", "market_id": "33", "circulate_market_value": "501513080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603949", "name": "雪龙集团", "hot_rank": 58, "hot_rank_chg": -22, "stock_cnt": 5804, "price": "18.59", "change": "10.00", "market_id": "17", "circulate_market_value": "3907716000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "间接投资宇树科技"}, {"code": "600498", "name": "烽火通信", "hot_rank": 59, "hot_rank_chg": 170, "stock_cnt": 5804, "price": "36.97", "change": "-10.01", "market_id": "17", "circulate_market_value": "47011845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 60, "hot_rank_chg": 122, "stock_cnt": 5804, "price": "394.22", "change": "-9.99", "market_id": "17", "circulate_market_value": "160186690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 61, "hot_rank_chg": 40, "stock_cnt": 5804, "price": "53.80", "change": "-4.27", "market_id": "17", "circulate_market_value": "242263500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 62, "hot_rank_chg": -46, "stock_cnt": 5804, "price": "49.21", "change": "-4.56", "market_id": "17", "circulate_market_value": "45796298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002212", "name": "天融信", "hot_rank": 63, "hot_rank_chg": 114, "stock_cnt": 5804, "price": "7.28", "change": "5.05", "market_id": "33", "circulate_market_value": "8494662100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.89}, {"name": "国产软件", "change_pct": -1.62}, {"name": "一带一路", "change_pct": -1.96}, {"name": "量子通信", "change_pct": -3.22}, {"name": "人工智能", "change_pct": -2.38}, {"name": "网络安全", "change_pct": -1.54}, {"name": "云计算数据中心", "change_pct": -3.9}, {"name": "物联网", "change_pct": -2.8}, {"name": "大数据", "change_pct": -2.09}, {"name": "破净股", "change_pct": -0.82}, {"name": "数字经济", "change_pct": -2.04}, {"name": "国产芯片", "change_pct": -4.27}, {"name": "阿里巴巴概念股", "change_pct": -2.7}, {"name": "腾讯概念股", "change_pct": -2.54}, {"name": "信创", "change_pct": -1.91}, {"name": "华为昇腾", "change_pct": -2.52}, {"name": "跨境支付", "change_pct": -1.1}, {"name": "web3.0", "change_pct": -2.48}, {"name": "数字人民币", "change_pct": -1.72}, {"name": "智慧政务", "change_pct": -1.95}, {"name": "华为鸿蒙", "change_pct": -2.03}, {"name": "华为云·鲲鹏", "change_pct": -1.7}, {"name": "卫星互联网", "change_pct": -3.88}, {"name": "智慧灯杆", "change_pct": -3.12}, {"name": "华为产业链", "change_pct": -3.09}, {"name": "回购", "change_pct": -1.82}, {"name": "AI大模型/智能体", "change_pct": -2.07}, {"name": "智能电网", "change_pct": -2.65}, {"name": "低空经济", "change_pct": -2.96}, {"name": "量子计算", "change_pct": -2.81}, {"name": "财税改革", "change_pct": -0.84}, {"name": "DeepSeek概念股", "change_pct": -2.84}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 64, "hot_rank_chg": 40, "stock_cnt": 5804, "price": "358.51", "change": "-6.58", "market_id": "17", "circulate_market_value": "240459230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 65, "hot_rank_chg": -50, "stock_cnt": 5804, "price": "28.04", "change": "-1.27", "market_id": "33", "circulate_market_value": "6921287000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 66, "hot_rank_chg": 12, "stock_cnt": 5804, "price": "5.64", "change": "3.87", "market_id": "17", "circulate_market_value": "3278966100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -3.39}, {"name": "强势人气股", "change_pct": -4.18}, {"name": "新疆国企改革", "change_pct": -0.69}, {"name": "农垦", "change_pct": -1.55}, {"name": "棉花", "change_pct": -0.78}, {"name": "新疆概念", "change_pct": -1.51}, {"name": "风电", "change_pct": -1.54}, {"name": "大农业", "change_pct": -1.16}, {"name": "国企改革", "change_pct": -1.38}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 67, "hot_rank_chg": 46, "stock_cnt": 5804, "price": "32.99", "change": "-9.99", "market_id": "33", "circulate_market_value": "24987124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 68, "hot_rank_chg": 19, "stock_cnt": 5804, "price": "3.26", "change": "0.00", "market_id": "33", "circulate_market_value": "6451570600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -1.04}, {"name": "深圳本地股", "change_pct": -1.0}, {"name": "共享经济", "change_pct": -0.98}, {"name": "强势人气股", "change_pct": -4.18}, {"name": "养老产业", "change_pct": -0.74}, {"name": "住房租赁", "change_pct": 0.16}, {"name": "房产经纪", "change_pct": 0.3}, {"name": "第三代半导体", "change_pct": -4.51}, {"name": "物业管理", "change_pct": -0.44}, {"name": "旧改", "change_pct": -1.43}, {"name": "横琴新区", "change_pct": -2.27}, {"name": "氮化镓", "change_pct": -4.62}, {"name": "REITs", "change_pct": -1.04}, {"name": "华为产业链", "change_pct": -3.09}]}, {"code": "603823", "name": "百合花", "hot_rank": 69, "hot_rank_chg": 8, "stock_cnt": 5804, "price": "47.43", "change": "4.42", "market_id": "17", "circulate_market_value": "19748320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 70, "hot_rank_chg": 90, "stock_cnt": 5804, "price": "31.46", "change": "-5.81", "market_id": "33", "circulate_market_value": "89977886000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 71, "hot_rank_chg": -40, "stock_cnt": 5804, "price": "41.38", "change": "4.05", "market_id": "33", "circulate_market_value": "26107481000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 72, "hot_rank_chg": -4, "stock_cnt": 5804, "price": "14.27", "change": "-9.97", "market_id": "17", "circulate_market_value": "4175088100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 73, "hot_rank_chg": 45, "stock_cnt": 5804, "price": "291.99", "change": "-0.52", "market_id": "33", "circulate_market_value": "1244057580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 74, "hot_rank_chg": -1, "stock_cnt": 5804, "price": "12.18", "change": "-5.73", "market_id": "17", "circulate_market_value": "4683790200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.39}, {"name": "股权转让", "change_pct": -2.45}, {"name": "强势人气股", "change_pct": -4.18}, {"name": "新疆概念", "change_pct": -1.51}, {"name": "医药", "change_pct": -0.47}, {"name": "流感", "change_pct": -0.87}, {"name": "国资入股", "change_pct": -1.59}, {"name": "减肥药", "change_pct": -0.36}]}, {"code": "600584", "name": "长电科技", "hot_rank": 75, "hot_rank_chg": 21, "stock_cnt": 5804, "price": "65.43", "change": "-4.87", "market_id": "17", "circulate_market_value": "117081395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000756", "name": "新华制药", "hot_rank": 76, "hot_rank_chg": 94, "stock_cnt": 5804, "price": "14.33", "change": "2.94", "market_id": "33", "circulate_market_value": "7148848800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002669", "name": "康达新材", "hot_rank": 77, "hot_rank_chg": 3, "stock_cnt": 5804, "price": "14.76", "change": "-2.57", "market_id": "33", "circulate_market_value": "4468114700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300162", "name": "雷曼光电", "hot_rank": 78, "hot_rank_chg": 1219, "stock_cnt": 5804, "price": "8.67", "change": "12.89", "market_id": "33", "circulate_market_value": "2966315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.98}, {"name": "超高清视频", "change_pct": -2.53}, {"name": "人工智能", "change_pct": -2.38}, {"name": "足球", "change_pct": -0.84}, {"name": "教育", "change_pct": -2.94}, {"name": "LED", "change_pct": -2.59}, {"name": "MicroLED", "change_pct": -3.18}, {"name": "华为海思", "change_pct": -3.65}, {"name": "教育信息化", "change_pct": -2.07}, {"name": "远程办公", "change_pct": -1.9}, {"name": "玻璃基板封装", "change_pct": -3.8}]}, {"code": "000978", "name": "桂林旅游", "hot_rank": 79, "hot_rank_chg": 54, "stock_cnt": 5804, "price": "7.12", "change": "-9.99", "market_id": "33", "circulate_market_value": "3333025500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.18}, {"name": "旅游", "change_pct": -1.78}, {"name": "腾讯概念股", "change_pct": -2.54}, {"name": "广西概念", "change_pct": -1.36}, {"name": "低空经济", "change_pct": -2.96}]}, {"code": "600703", "name": "三安光电", "hot_rank": 80, "hot_rank_chg": 32, "stock_cnt": 5804, "price": "11.59", "change": "-7.06", "market_id": "17", "circulate_market_value": "57822727000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -4.85}, {"name": "5G", "change_pct": -5.4}, {"name": "VR&AR", "change_pct": -3.98}, {"name": "云计算数据中心", "change_pct": -3.9}, {"name": "光通信", "change_pct": -7.34}, {"name": "3D感应", "change_pct": -3.36}, {"name": "汽车零部件", "change_pct": -1.91}, {"name": "LED", "change_pct": -2.59}, {"name": "国产芯片", "change_pct": -4.27}, {"name": "MicroLED", "change_pct": -3.18}, {"name": "第三代半导体", "change_pct": -4.51}, {"name": "激光雷达", "change_pct": -4.99}, {"name": "华为汽车", "change_pct": -1.84}, {"name": "MiniLED", "change_pct": -4.18}, {"name": "氮化镓", "change_pct": -4.62}, {"name": "大基金概念", "change_pct": -4.77}, {"name": "碳化硅", "change_pct": -4.41}, {"name": "磷化铟", "change_pct": -4.98}, {"name": "光电共封装CPO", "change_pct": -6.99}, {"name": "智能眼镜/MR头显", "change_pct": -4.45}]}, {"code": "002819", "name": "东方中科", "hot_rank": 81, "hot_rank_chg": -74, "stock_cnt": 5804, "price": "24.97", "change": "-6.34", "market_id": "33", "circulate_market_value": "5897876200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 82, "hot_rank_chg": 44, "stock_cnt": 5804, "price": "131.95", "change": "-3.92", "market_id": "17", "circulate_market_value": "318230260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 83, "hot_rank_chg": -19, "stock_cnt": 5804, "price": "14.87", "change": "-9.99", "market_id": "17", "circulate_market_value": "6608888900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 85, "hot_rank_chg": -58, "stock_cnt": 5804, "price": "12.36", "change": "-9.98", "market_id": "33", "circulate_market_value": "4067952800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -2.89}, {"name": "锂电池", "change_pct": -3.49}, {"name": "ST摘帽", "change_pct": -1.96}, {"name": "湖南国企改革", "change_pct": -2.86}, {"name": "污水处理", "change_pct": -2.28}, {"name": "智慧城市", "change_pct": -2.42}, {"name": "新能源汽车", "change_pct": -2.65}, {"name": "环保", "change_pct": -2.2}, {"name": "动力电池回收", "change_pct": -2.67}, {"name": "干细胞", "change_pct": -0.96}, {"name": "国企改革", "change_pct": -1.38}]}, {"code": "603396", "name": "金辰股份", "hot_rank": 86, "hot_rank_chg": -63, "stock_cnt": 5804, "price": "39.20", "change": "9.99", "market_id": "17", "circulate_market_value": "5430277100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半导体装备"}, {"code": "002912", "name": "中新赛克", "hot_rank": 87, "hot_rank_chg": 76, "stock_cnt": 5804, "price": "26.47", "change": "10.02", "market_id": "33", "circulate_market_value": "4294038500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全"}, {"code": "300285", "name": "国瓷材料", "hot_rank": 88, "hot_rank_chg": -12, "stock_cnt": 5804, "price": "65.06", "change": "-7.06", "market_id": "33", "circulate_market_value": "55500928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 89, "hot_rank_chg": 60, "stock_cnt": 5804, "price": "35.48", "change": "-2.93", "market_id": "17", "circulate_market_value": "11423608500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 90, "hot_rank_chg": 7, "stock_cnt": 5804, "price": "17.93", "change": "-1.48", "market_id": "17", "circulate_market_value": "16936802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002583", "name": "海能达", "hot_rank": 91, "hot_rank_chg": 39, "stock_cnt": 5804, "price": "8.46", "change": "5.36", "market_id": "33", "circulate_market_value": "10855344900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "应急产业", "change_pct": -2.07}, {"name": "5G", "change_pct": -5.4}, {"name": "一带一路", "change_pct": -1.96}, {"name": "人工智能", "change_pct": -2.38}, {"name": "网络安全", "change_pct": -1.54}, {"name": "高铁轨交", "change_pct": -2.06}, {"name": "物联网", "change_pct": -2.8}, {"name": "智慧城市", "change_pct": -2.42}, {"name": "机器人", "change_pct": -2.74}, {"name": "智慧安防", "change_pct": -2.48}, {"name": "智能制造", "change_pct": -2.83}, {"name": "工业互联网", "change_pct": -2.2}, {"name": "信创", "change_pct": -1.91}, {"name": "华为汽车", "change_pct": -1.84}, {"name": "无线耳机", "change_pct": -4.0}, {"name": "6G", "change_pct": -4.73}, {"name": "卫星互联网", "change_pct": -3.88}, {"name": "星闪概念", "change_pct": -2.95}, {"name": "低空经济", "change_pct": -2.96}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 92, "hot_rank_chg": 193, "stock_cnt": 5804, "price": "197.37", "change": "-5.85", "market_id": "17", "circulate_market_value": "54392877000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 93, "hot_rank_chg": 334, "stock_cnt": 5804, "price": "10.33", "change": "10.01", "market_id": "33", "circulate_market_value": "7869038900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人", "xgb_concepts": [{"name": "小家电", "change_pct": -0.45}, {"name": "机器人", "change_pct": -2.74}, {"name": "家电", "change_pct": -1.68}, {"name": "华为鸿蒙", "change_pct": -2.03}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 94, "hot_rank_chg": 58, "stock_cnt": 5804, "price": "33.29", "change": "-8.42", "market_id": "17", "circulate_market_value": "23015894000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 95, "hot_rank_chg": 48, "stock_cnt": 5804, "price": "29.42", "change": "-1.97", "market_id": "17", "circulate_market_value": "606104750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 96, "hot_rank_chg": 59, "stock_cnt": 5804, "price": "87.77", "change": "-4.21", "market_id": "33", "circulate_market_value": "57314468000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 97, "hot_rank_chg": 214, "stock_cnt": 5804, "price": "244.80", "change": "-8.63", "market_id": "33", "circulate_market_value": "266437390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 98, "hot_rank_chg": -6, "stock_cnt": 5804, "price": "41.14", "change": "-5.01", "market_id": "33", "circulate_market_value": "62447581000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 99, "hot_rank_chg": 181, "stock_cnt": 5804, "price": "53.15", "change": "-3.59", "market_id": "17", "circulate_market_value": "66453544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 100, "hot_rank_chg": 36, "stock_cnt": 5804, "price": "98.77", "change": "-6.72", "market_id": "17", "circulate_market_value": "35628650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "605366", "name": "宏柏新材", "price": 10.14, "change_pct": 9.98, "reason": "1、公司重点布局2万吨光纤级高纯四氯化硅和5000吨电子级正硅酸乙酯项目，以满足AI算力及半导体产业需求，具备高纯硅烷产品的生产工艺技术，能较快实现量产落地；\n2、国内功能性硅烷行业龙头企业；公司具备完整的“硅块-三氯氢硅-中间体-功能性硅烷-气相白炭黑”绿色循环产业链，相关产品和技术适用于液体硅胶", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.53, "first_limit_up": 1790577426, "break_limit_up_times": 0}, {"code": "600241", "name": "时代万恒", "price": 8.04, "change_pct": 9.99, "reason": "控股子公司九夷锂能主营业务为锂电池的研产销，拥有国内领先的圆柱形锂电池全自动化产线，目标市场定位于高端电动工具领域，开拓了博世、飞利浦、斯蒂尔、宝时得等优质客户", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 6.22, "first_limit_up": 1790561291, "break_limit_up_times": 0}, {"code": "603396", "name": "金辰股份", "price": 39.2, "change_pct": 9.99, "reason": "公司为全球光伏组件设备龙头，拟投资约10亿元建设半导体装备研发及制造项目，布局TGV玻璃基封装等设备", "plates": ["玻璃基板封装"], "limit_up_days": 3, "turnover_ratio": 16.97, "first_limit_up": 1790559001, "break_limit_up_times": 1}, {"code": "600825", "name": "新华传媒", "price": 8.55, "change_pct": 10.04, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组", "传媒"], "limit_up_days": 5, "turnover_ratio": 0.48, "first_limit_up": 1790558700, "break_limit_up_times": 0}, {"code": "601579", "name": "会稽山", "price": 41.84, "change_pct": 9.99, "reason": "国内龙头黄酒供应商；公司在生产黄酒的同时，也利用黄酒生产过程产生的醪糟作为原料，通过蒸馏生产糟烧白酒，并一直有销售糟烧白酒等副产品的传统", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.25, "first_limit_up": 1790559022, "break_limit_up_times": 4}, {"code": "600418", "name": "江淮汽车", "price": 25.22, "change_pct": 9.99, "reason": "消息称玛莎拉蒂与华为、江淮汽车开展长期产业合作谈判", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 7.96, "first_limit_up": 1790562174, "break_limit_up_times": 1}, {"code": "002852", "name": "道道全", "price": 8.9, "change_pct": 10.01, "reason": "公司主营食用植物油，有菜籽种植基地，主要种植高油酸菜籽品种，为公司的高油酸菜油提供原料资源", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.82, "first_limit_up": 1790574342, "break_limit_up_times": 4}, {"code": "000513", "name": "丽珠集团", "price": 30.34, "change_pct": 10.01, "reason": "创新型综合药企；公司自主研发的艾普拉唑是我国抗溃疡药首个1类创新药，已在临床应用超10年", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.92, "first_limit_up": 1790559144, "break_limit_up_times": 1}, {"code": "000980", "name": "众泰汽车", "price": 2.24, "change_pct": 9.8, "reason": "公司全新A0级车型进入批量试制阶段", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 9.59, "first_limit_up": 1790560149, "break_limit_up_times": 1}, {"code": "601218", "name": "吉鑫科技", "price": 6.05, "change_pct": 10.0, "reason": "国内起步最早的生产大型风电铸件的企业，表示更大兆瓦级的海上风机也正在开发中", "plates": ["风电"], "limit_up_days": 2, "turnover_ratio": 27.33, "first_limit_up": 1790576774, "break_limit_up_times": 1}, {"code": "600802", "name": "福建水泥", "price": 7.28, "change_pct": 9.97, "reason": "公司为福建省水泥行业的传统龙头企业，是福建地区产能规模最大的水泥制造企业", "plates": ["房地产"], "limit_up_days": 3, "turnover_ratio": 18.69, "first_limit_up": 1790559281, "break_limit_up_times": 1}, {"code": "688244", "name": "永信至诚", "price": 19.8, "change_pct": 20.0, "reason": "1、数字安全测试评估赛道领跑者；公司以网络靶场、“数字风洞”测试评估、AI安全测评、安全防护与管控（含蜜罐等）为核心业务，为政企用户提供数字安全测试评估、攻防演练、人才培养及全生命周期安全验证解决方案；\n2、公司AI容器技术已完整应用于“元方”原生安全大模型一体机及AI实训平台，实现GPU算力细粒度切分和灵活调度，相关产品已在多行业落地；\n3、公司拥有武器装备科研生产单位二级保密资格与装备承制单位资格，可承担国防军工机密级和秘密级科研生产任务", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 9.78, "first_limit_up": 1790564687, "break_limit_up_times": 0}, {"code": "000678", "name": "襄阳轴承", "price": 10.65, "change_pct": 10.02, "reason": "1、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应；\n2、公司主营汽车用减速器用圆锥轴承、球轴承等，公告称暂无机器人轴承的市场应用", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 7.61, "first_limit_up": 1790559027, "break_limit_up_times": 2}, {"code": "000503", "name": "国新健康", "price": 7.44, "change_pct": 10.06, "reason": "公司已设立 AI 中心，推出 “天枢・三医” 大模型与 “灵犀” 智能体开发平台，推进 “AI IN ALL” 专项计划，医保智能体技术已在东营、徐州、湖南等多地区医保场景实现应用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.02, "first_limit_up": 1790559072, "break_limit_up_times": 1}, {"code": "002082", "name": "ST万邦", "price": 13.2, "change_pct": 10.0, "reason": "国内拥有药品剂型较多的制药企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.99, "first_limit_up": 1790560734, "break_limit_up_times": 6}, {"code": "600340", "name": "*ST华幸", "price": 1.29, "change_pct": 10.26, "reason": "京津冀产业地产龙头", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.76, "first_limit_up": 1790576072, "break_limit_up_times": 3}, {"code": "001368", "name": "通达创智", "price": 41.8, "change_pct": 10.0, "reason": "公司主要产品包括体育用品、户外休闲用品、家用电动工具等，产品外销占比超8成", "plates": ["外贸受益概念"], "limit_up_days": 1, "turnover_ratio": 10.63, "first_limit_up": 1790578605, "break_limit_up_times": 0}, {"code": "001330", "name": "博纳影业", "price": 6.36, "change_pct": 10.03, "reason": "公司首部AI超写实院线电影《三星堆：未来往事》正式定档2026年10月23日登陆全国院线", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1790558700, "break_limit_up_times": 0}, {"code": "001201", "name": "东瑞股份", "price": 16.13, "change_pct": 10.03, "reason": "国内较大的自育自繁自养一体化的生猪养殖企业；形成了集饲料生产、生猪育种、种猪扩繁、商品猪饲养、活大猪供港及生猪内地销售于一体的完整生猪产业链，是内地供港活大猪前三大供应商之一和粤港澳大湾区“菜篮子”生产基地", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.5, "first_limit_up": 1790564097, "break_limit_up_times": 0}, {"code": "002242", "name": "九阳股份", "price": 10.33, "change_pct": 10.01, "reason": "豆浆机龙头；公司表示没有哈基米hachimi相关的产品等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.23, "first_limit_up": 1790559075, "break_limit_up_times": 4}, {"code": "002342", "name": "巨力索具", "price": 8.68, "change_pct": 10.01, "reason": "公司为商业航天地面发射提供了系统性保障，从生产组装到发射前的安装调试和转运过程都会应用到公司产品", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 25.01, "first_limit_up": 1790564319, "break_limit_up_times": 1}, {"code": "002347", "name": "泰尔股份", "price": 6.42, "change_pct": 9.93, "reason": "公司工业机器人已覆盖包装、焊挂牌、取样贴标、拆带等机型，并明确布局军工、航空航天、船舶、核电、风电、有色等领域", "plates": ["机器人", "航天"], "limit_up_days": 1, "turnover_ratio": 9.98, "first_limit_up": 1790559399, "break_limit_up_times": 3}, {"code": "000011", "name": "深物业A", "price": 10.12, "change_pct": 10.0, "reason": "深圳国资委控股的深圳投资控股公司旗下；主营房地产开发、房屋租赁、物业管理，餐饮业务和仓储业务", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.58, "first_limit_up": 1790559933, "break_limit_up_times": 1}, {"code": "603949", "name": "雪龙集团", "price": 18.59, "change_pct": 10.0, "reason": "公司对深创投中小企业发展基金（新疆）有限合伙企业的持股比例为0.7239%，后者持有杭州宇树科技有限公司1.3546%股份", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 7.8, "first_limit_up": 1790559000, "break_limit_up_times": 1}, {"code": "002962", "name": "五方光电", "price": 14.76, "change_pct": 9.99, "reason": "公司表示拓展TGV技术在光学领域的应用", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 14.96, "first_limit_up": 1790559243, "break_limit_up_times": 3}, {"code": "301190", "name": "善水科技", "price": 24.95, "change_pct": 20.01, "reason": "公司主要经营染料中间体、农药和医药中间体的研产销", "plates": ["染料"], "limit_up_days": 1, "turnover_ratio": 9.14, "first_limit_up": 1790574420, "break_limit_up_times": 0}, {"code": "600488", "name": "津药药业", "price": 6.27, "change_pct": 10.0, "reason": "公司创新研究院JYSW003银屑病创新药项目正按合同推进，前期药效与安全性表现良好", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.42, "first_limit_up": 1790571729, "break_limit_up_times": 1}, {"code": "002232", "name": "启明信息", "price": 16.28, "change_pct": 10.0, "reason": "1、公司依托子公司启明安信开展网络安全业务，研发态势感知、工业防火墙、终端安全管控产品，深耕车联网安全与汽车工业网络防护，提供等保测评、安全咨询、安全运营一体化制造业与智能网联场景网络安全解决方案；\n2、公司“具身智能机器人创新探索”项目聚焦具身智能核心场景及端到端服务能力的研发，探索在制造业业务场景的规模化应用", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 6.1, "first_limit_up": 1790564760, "break_limit_up_times": 0}, {"code": "002480", "name": "新筑股份", "price": 5.65, "change_pct": 9.92, "reason": "公司拟购买蜀道清洁能源60%股权、出售轨交相关资产的重大重组已获四川省国资委批准，尚需深交所审核及证监会注册", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1790560359, "break_limit_up_times": 4}, {"code": "600032", "name": "浙江新能", "price": 7.43, "change_pct": 10.07, "reason": "1、浙能集团境内水电、风电及光电开发与投资的唯一平台；\n2、公司控股子公司浙江浙能航天氢能技术有限公司主营业务为氢能科技研发、涉氢工程设计、储氢设施销售等", "plates": ["风电"], "limit_up_days": 1, "turnover_ratio": 2.53, "first_limit_up": 1790560106, "break_limit_up_times": 2}, {"code": "002640", "name": "跨境通", "price": 3.96, "change_pct": 10.0, "reason": "跨境电商龙头；公司主营跨境出口电商业务和跨境进口电商业务，通过全资收购环球易购等公司进入跨境电商行业，旗下品牌 ZAFUL 在欧美有忠实消费群体，业务覆盖全球 200 多个国家与地区，产品涵盖服饰家居、电子产品和母婴用品等", "plates": ["外贸受益概念"], "limit_up_days": 1, "turnover_ratio": 17.28, "first_limit_up": 1790559051, "break_limit_up_times": 1}, {"code": "000020", "name": "深华发Ａ", "price": 14.64, "change_pct": 9.99, "reason": "1、公司地处深圳，在深圳市福田区华强北商圈及光明新区公明街道均拥有数万平方米的大型物业；\n2、公司主营精密注塑件及液晶显示器，现有新型生产流水线，拥有自动化设备自动涂胶机器人、注塑机等十多台", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 7.89, "first_limit_up": 1790560335, "break_limit_up_times": 0}, {"code": "603968", "name": "醋化股份", "price": 11.63, "change_pct": 10.03, "reason": "全球安赛蜜市场双寡头之一；公司生产作为下游染料制造关键原料的乙酰乙酰苯胺类颜料（染料）中间体，该系列产品年产能约为2万吨", "plates": ["染料"], "limit_up_days": 1, "turnover_ratio": 5.0, "first_limit_up": 1790578100, "break_limit_up_times": 0}, {"code": "603278", "name": "大业股份", "price": 10.78, "change_pct": 10.0, "reason": "1、公司人形机器人灵巧手用钢丝尚处于市场调研和研究开发阶段；\n2、公司投资联营企业湖北三江航天江北机械工程主要从事航天动力系统、天线罩等航天型号产品及特种压力容器产品、高端机电成套装备、先进激光应用设备等民用产品", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 18.89, "first_limit_up": 1790559024, "break_limit_up_times": 1}, {"code": "002912", "name": "中新赛克", "price": 26.47, "change_pct": 10.02, "reason": "1、深圳国资委旗下，领先的网络可视化基础架构产品提供商，已有相关的算力数据网络监测和调度技术研发储备；公司海睿思产品已成功通过上海数据交易所的数商认证；\n2、公司构建了涵盖网络内容安全、宽带网与移动网产品、数据运营及电磁空间安全的全栈式防护体系，深度融合AI大模型与GenAI技术，推出了数据安全分类分级系统及全链路安全可信解决方案，为政府、运营商及关键基础设施提供全生命周期的网络空间数据智能治理与安全防护服务", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 4.91, "first_limit_up": 1790559003, "break_limit_up_times": 0}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};