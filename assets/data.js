const UPDATE_TIME = "2026-07-07 04:46";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": -0.77,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续195天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "培育钻石",
    "rise": 2.03,
    "rate": 0,
    "tag": "",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "创新药",
    "rise": -3.16,
    "rate": 0,
    "tag": "",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "人形机器人",
    "rise": -1.95,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续406天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.9,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续242天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "先进封装",
    "rise": -0.61,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.91,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "PCB概念",
    "rise": -1.89,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续65天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -2.01,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续171天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "ST板块",
    "rise": -3.96,
    "rate": 0,
    "tag": "",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "机器人概念",
    "rise": -1.92,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "光纤概念",
    "rise": -1.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "G60创新ETF",
    "code": "886084"
  },
  {
    "name": "猪肉",
    "rise": -1.93,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "液冷服务器",
    "rise": -1.82,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "算力租赁",
    "rise": -2.66,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "玻璃基板",
    "rise": -1.35,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886111"
  },
  {
    "name": "2026中报预增",
    "rise": -1.5,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "芯片概念",
    "rise": -1.29,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续66天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "硅能源",
    "rise": 0.21,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885958"
  },
  {
    "name": "光刻胶",
    "rise": -1.05,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 2,
    "etfName": "半导体设备ETF",
    "code": "885864"
  }
];
const THS_EVENTS = [
  {
    "title": "机构：人形机器人有望形成一个新兴产业",
    "desc": "",
    "heat": 217871,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "东微半导",
        "code": "688261",
        "chg": 19.995304
      }
    ]
  },
  {
    "title": "三星Q2利润飙升18倍，AI引爆存储芯片“超级周期”",
    "desc": "",
    "heat": 123206,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "有研硅",
        "code": "688432",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "AI液冷狂潮席卷全球",
    "desc": "",
    "heat": 41997,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "东微半导",
        "code": "688261",
        "chg": 19.995304
      }
    ]
  },
  {
    "title": "星网锐捷预计Q2净利润环比大涨！交换机概念反复活跃",
    "desc": "",
    "heat": 17955,
    "direction": "交换机",
    "themes": [
      "交换机",
      "OCS交换机"
    ],
    "stocks": [
      {
        "name": "盛科通信-U",
        "code": "688702",
        "chg": 8.963585
      }
    ]
  },
  {
    "title": "英伟达针对产品延期相关报道回应称：技术发展路线规划保持不变",
    "desc": "",
    "heat": 0,
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
        "name": "金安国纪",
        "code": "002636",
        "chg": 1.529084
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "大硅片",
    "change": "+5.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+1.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "手游",
    "change": "+1.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电竞",
    "change": "+0.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+0.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+0.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+0.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+0.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超级高铁",
    "change": "+0.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+0.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IGBT",
    "change": "+0.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "云游戏",
    "change": "+0.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "稀土磁材",
    "change": "+0.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+0.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "金刚线",
    "change": "+0.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "微信小店",
    "change": "+0.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+0.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "-0.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有机硅",
    "change": "-0.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷酸铁锂",
    "change": "-0.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 3,
    "hot_rank_chg": -1,
    "stock_cnt": 5854,
    "price": "7.60",
    "change": "-2.06",
    "market_id": "33",
    "circulate_market_value": "268790220000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -2.18
      },
      {
        "name": "折叠屏",
        "change_pct": -1.8
      },
      {
        "name": "手机产业链",
        "change_pct": -2.08
      },
      {
        "name": "超高清视频",
        "change_pct": -1.36
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.1
      },
      {
        "name": "半导体",
        "change_pct": 0.01
      },
      {
        "name": "人工智能",
        "change_pct": -2.03
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.53
      },
      {
        "name": "VR&AR",
        "change_pct": -1.77
      },
      {
        "name": "OLED",
        "change_pct": -0.6
      },
      {
        "name": "京津冀",
        "change_pct": -2.37
      },
      {
        "name": "物联网",
        "change_pct": -2.11
      },
      {
        "name": "指纹识别",
        "change_pct": -1.71
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.23
      },
      {
        "name": "白马股",
        "change_pct": -1.01
      },
      {
        "name": "智能制造",
        "change_pct": -1.97
      },
      {
        "name": "小米概念股",
        "change_pct": -1.65
      },
      {
        "name": "国产芯片",
        "change_pct": -0.61
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.18
      },
      {
        "name": "全息概念",
        "change_pct": -2.31
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.86
      },
      {
        "name": "MicroLED",
        "change_pct": -1.48
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.23
      },
      {
        "name": "智能手表",
        "change_pct": -2.11
      },
      {
        "name": "MiniLED",
        "change_pct": -1.91
      },
      {
        "name": "传感器",
        "change_pct": -1.85
      },
      {
        "name": "大硅片",
        "change_pct": 5.08
      },
      {
        "name": "AI PC",
        "change_pct": -1.92
      },
      {
        "name": "华为产业链",
        "change_pct": -1.97
      },
      {
        "name": "回购",
        "change_pct": -1.68
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.75
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.41
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 8,
    "hot_rank_chg": 25,
    "stock_cnt": 5854,
    "price": "7.30",
    "change": "-1.22",
    "market_id": "17",
    "circulate_market_value": "90491450000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.11
      },
      {
        "name": "核电",
        "change_pct": -2.43
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.62
      },
      {
        "name": "水电",
        "change_pct": -2.77
      },
      {
        "name": "火电",
        "change_pct": -2.75
      },
      {
        "name": "光伏",
        "change_pct": -1.59
      },
      {
        "name": "风电",
        "change_pct": -2.75
      },
      {
        "name": "国企改革",
        "change_pct": -2.25
      },
      {
        "name": "算电协同",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 12,
    "hot_rank_chg": 0,
    "stock_cnt": 5854,
    "price": "8.69",
    "change": "3.08",
    "market_id": "33",
    "circulate_market_value": "14127279000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.76
      },
      {
        "name": "电竞",
        "change_pct": 0.63
      },
      {
        "name": "手游",
        "change_pct": 1.01
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "人工智能",
        "change_pct": -2.03
      },
      {
        "name": "游戏",
        "change_pct": 0.64
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.07
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.79
      },
      {
        "name": "快手概念股",
        "change_pct": -1.63
      },
      {
        "name": "元宇宙",
        "change_pct": -1.39
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.08
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.58
      },
      {
        "name": "web3.0",
        "change_pct": -1.98
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.71
      },
      {
        "name": "数据要素",
        "change_pct": -2.15
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.79
      },
      {
        "name": "AI营销",
        "change_pct": -1.71
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.47
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.75
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.71
      },
      {
        "name": "人形机器人",
        "change_pct": -2.03
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.14
      },
      {
        "name": "多模态",
        "change_pct": -1.74
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -2.01
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.34
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.29
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 21,
    "hot_rank_chg": 144,
    "stock_cnt": 5854,
    "price": "11.02",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "44517051000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "半导体硅片",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.01
      },
      {
        "name": "一带一路",
        "change_pct": -2.12
      },
      {
        "name": "京津冀",
        "change_pct": -2.37
      },
      {
        "name": "光伏",
        "change_pct": -1.59
      },
      {
        "name": "碳中和",
        "change_pct": -2.33
      },
      {
        "name": "国产芯片",
        "change_pct": -0.61
      },
      {
        "name": "IGBT",
        "change_pct": 0.25
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.42
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.06
      },
      {
        "name": "大硅片",
        "change_pct": 5.08
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 25,
    "hot_rank_chg": 12,
    "stock_cnt": 5854,
    "price": "5.28",
    "change": "1.73",
    "market_id": "33",
    "circulate_market_value": "101017141000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.8
      },
      {
        "name": "手机产业链",
        "change_pct": -2.08
      },
      {
        "name": "超高清视频",
        "change_pct": -1.36
      },
      {
        "name": "半导体",
        "change_pct": 0.01
      },
      {
        "name": "OLED",
        "change_pct": -0.6
      },
      {
        "name": "光伏",
        "change_pct": -1.59
      },
      {
        "name": "黑色家电",
        "change_pct": -1.08
      },
      {
        "name": "家电",
        "change_pct": -2.31
      },
      {
        "name": "智能制造",
        "change_pct": -1.97
      },
      {
        "name": "工业互联网",
        "change_pct": -2.12
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.65
      },
      {
        "name": "国产芯片",
        "change_pct": -0.61
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.79
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.18
      },
      {
        "name": "MicroLED",
        "change_pct": -1.48
      },
      {
        "name": "MiniLED",
        "change_pct": -1.91
      },
      {
        "name": "华为产业链",
        "change_pct": -1.97
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.41
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 27,
    "hot_rank_chg": 372,
    "stock_cnt": 5854,
    "price": "9.40",
    "change": "4.79",
    "market_id": "33",
    "circulate_market_value": "17649645000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.01
      },
      {
        "name": "光伏",
        "change_pct": -1.59
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.66
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.09
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.67
      },
      {
        "name": "氮化镓",
        "change_pct": -1.41
      },
      {
        "name": "碳化硅",
        "change_pct": 0.64
      },
      {
        "name": "地摊经济",
        "change_pct": -1.95
      },
      {
        "name": "人形机器人",
        "change_pct": -2.03
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 39,
    "hot_rank_chg": -24,
    "stock_cnt": 5854,
    "price": "5.79",
    "change": "-9.95",
    "market_id": "33",
    "circulate_market_value": "7508099300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.99
      },
      {
        "name": "创新药",
        "change_pct": -3.24
      },
      {
        "name": "央企改革",
        "change_pct": -2.11
      },
      {
        "name": "医疗器械",
        "change_pct": -3.17
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.53
      },
      {
        "name": "保健品",
        "change_pct": -2.75
      },
      {
        "name": "民营医院",
        "change_pct": -3.66
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -2.91
      },
      {
        "name": "医药",
        "change_pct": -2.99
      },
      {
        "name": "化学原料药",
        "change_pct": -2.98
      },
      {
        "name": "海南概念",
        "change_pct": -2.91
      },
      {
        "name": "脑科学",
        "change_pct": -2.43
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -2.49
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -2.47
      },
      {
        "name": "食品",
        "change_pct": -2.32
      },
      {
        "name": "国企改革",
        "change_pct": -2.25
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.51
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.61
      },
      {
        "name": "自贸区",
        "change_pct": -2.57
      },
      {
        "name": "合成生物",
        "change_pct": -2.77
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 53,
    "hot_rank_chg": 275,
    "stock_cnt": 5854,
    "price": "6.00",
    "change": "6.76",
    "market_id": "33",
    "circulate_market_value": "13196329000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": -1.96
      },
      {
        "name": "轮胎",
        "change_pct": -1.89
      },
      {
        "name": "冷链",
        "change_pct": -2.19
      },
      {
        "name": "机器人",
        "change_pct": -2.04
      },
      {
        "name": "智能制造",
        "change_pct": -1.97
      },
      {
        "name": "工业母机",
        "change_pct": -2.08
      },
      {
        "name": "减速器",
        "change_pct": -2.19
      },
      {
        "name": "头盔",
        "change_pct": -1.7
      },
      {
        "name": "人形机器人",
        "change_pct": -2.03
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 65,
    "hot_rank_chg": -42,
    "stock_cnt": 5854,
    "price": "5.68",
    "change": "0.53",
    "market_id": "33",
    "circulate_market_value": "5867075300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.59
      },
      {
        "name": "锂电池",
        "change_pct": -0.82
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -2.22
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.7
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.66
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -2.49
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 82,
    "hot_rank_chg": 10,
    "stock_cnt": 5854,
    "price": "9.93",
    "change": "6.20",
    "market_id": "33",
    "circulate_market_value": "20674278000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -1.08
      },
      {
        "name": "足球",
        "change_pct": -1.02
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.9
      },
      {
        "name": "拼多多概念股",
        "change_pct": -2.02
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.51
      },
      {
        "name": "大消费",
        "change_pct": -1.46
      },
      {
        "name": "盲盒",
        "change_pct": -0.87
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.14
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.34
      },
      {
        "name": "首发经济",
        "change_pct": -2.1
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.29
      },
      {
        "name": "服务消费",
        "change_pct": -2.23
      }
    ]
  },
  {
    "code": "002137",
    "name": "实益达",
    "hot_rank": 85,
    "hot_rank_chg": 414,
    "stock_cnt": 5854,
    "price": "11.43",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "4531515900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "间接持股宇树科技",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.01
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.82
      },
      {
        "name": "光伏",
        "change_pct": -1.59
      },
      {
        "name": "LED",
        "change_pct": -1.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.07
      },
      {
        "name": "无线耳机",
        "change_pct": -1.27
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.51
      },
      {
        "name": "华为产业链",
        "change_pct": -1.97
      },
      {
        "name": "微信小店",
        "change_pct": 0.07
      },
      {
        "name": "区块链",
        "change_pct": -2.01
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 86,
    "hot_rank_chg": 21,
    "stock_cnt": 5854,
    "price": "12.13",
    "change": "-5.16",
    "market_id": "33",
    "circulate_market_value": "9813400300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -2.89
      },
      {
        "name": "大飞机",
        "change_pct": -2.29
      },
      {
        "name": "北斗导航",
        "change_pct": -2.27
      },
      {
        "name": "高铁轨交",
        "change_pct": -2.07
      },
      {
        "name": "军民融合",
        "change_pct": -2.33
      },
      {
        "name": "磁悬浮",
        "change_pct": -2.05
      },
      {
        "name": "军工",
        "change_pct": -2.29
      },
      {
        "name": "碳纤维",
        "change_pct": -2.75
      },
      {
        "name": "无人机",
        "change_pct": -2.23
      },
      {
        "name": "航天",
        "change_pct": -2.21
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.15
      },
      {
        "name": "低空经济",
        "change_pct": -2.21
      },
      {
        "name": "海洋经济",
        "change_pct": -2.2
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 18, "stock_cnt": 5854, "price": "21.93", "change": "9.98", "market_id": "33", "circulate_market_value": "72865753000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "600584", "name": "长电科技", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "100.73", "change": "5.93", "market_id": "17", "circulate_market_value": "180247730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "7.60", "change": "-2.06", "market_id": "33", "circulate_market_value": "268790220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -2.18}, {"name": "折叠屏", "change_pct": -1.8}, {"name": "手机产业链", "change_pct": -2.08}, {"name": "超高清视频", "change_pct": -1.36}, {"name": "苹果产业链", "change_pct": -2.1}, {"name": "半导体", "change_pct": 0.01}, {"name": "人工智能", "change_pct": -2.03}, {"name": "互联网医疗", "change_pct": -2.53}, {"name": "VR&AR", "change_pct": -1.77}, {"name": "OLED", "change_pct": -0.6}, {"name": "京津冀", "change_pct": -2.37}, {"name": "物联网", "change_pct": -2.11}, {"name": "指纹识别", "change_pct": -1.71}, {"name": "汽车零部件", "change_pct": -2.23}, {"name": "白马股", "change_pct": -1.01}, {"name": "智能制造", "change_pct": -1.97}, {"name": "小米概念股", "change_pct": -1.65}, {"name": "国产芯片", "change_pct": -0.61}, {"name": "液晶面板/LCD", "change_pct": -1.18}, {"name": "全息概念", "change_pct": -2.31}, {"name": "理想汽车概念股", "change_pct": -1.86}, {"name": "MicroLED", "change_pct": -1.48}, {"name": "钙钛矿电池", "change_pct": -1.23}, {"name": "智能手表", "change_pct": -2.11}, {"name": "MiniLED", "change_pct": -1.91}, {"name": "传感器", "change_pct": -1.85}, {"name": "大硅片", "change_pct": 5.08}, {"name": "AI PC", "change_pct": -1.92}, {"name": "华为产业链", "change_pct": -1.97}, {"name": "回购", "change_pct": -1.68}, {"name": "智能眼镜/MR头显", "change_pct": -1.75}, {"name": "玻璃基板封装", "change_pct": -1.41}]}, {"code": "600667", "name": "太极实业", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "26.59", "change": "-2.99", "market_id": "17", "circulate_market_value": "55614107000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 5, "hot_rank_chg": 13, "stock_cnt": 5854, "price": "54.77", "change": "2.76", "market_id": "33", "circulate_market_value": "86216501000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 6, "hot_rank_chg": 5, "stock_cnt": 5854, "price": "47.63", "change": "3.48", "market_id": "33", "circulate_market_value": "37265932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 7, "hot_rank_chg": 37, "stock_cnt": 5854, "price": "55.98", "change": "10.00", "market_id": "17", "circulate_market_value": "47390056000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "终止定增"}, {"code": "601991", "name": "大唐发电", "hot_rank": 8, "hot_rank_chg": 25, "stock_cnt": 5854, "price": "7.30", "change": "-1.22", "market_id": "17", "circulate_market_value": "90491450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.11}, {"name": "核电", "change_pct": -2.43}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "电力体制改革", "change_pct": -2.62}, {"name": "水电", "change_pct": -2.77}, {"name": "火电", "change_pct": -2.75}, {"name": "光伏", "change_pct": -1.59}, {"name": "风电", "change_pct": -2.75}, {"name": "国企改革", "change_pct": -2.25}, {"name": "算电协同", "change_pct": -2.74}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "19.29", "change": "3.99", "market_id": "17", "circulate_market_value": "24618973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "80.59", "change": "-4.74", "market_id": "17", "circulate_market_value": "197057150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 11, "hot_rank_chg": 23, "stock_cnt": 5854, "price": "61.08", "change": "4.41", "market_id": "33", "circulate_market_value": "70670361000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5854, "price": "8.69", "change": "3.08", "market_id": "33", "circulate_market_value": "14127279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.76}, {"name": "电竞", "change_pct": 0.63}, {"name": "手游", "change_pct": 1.01}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "人工智能", "change_pct": -2.03}, {"name": "游戏", "change_pct": 0.64}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.07}, {"name": "腾讯概念股", "change_pct": -1.79}, {"name": "快手概念股", "change_pct": -1.63}, {"name": "元宇宙", "change_pct": -1.39}, {"name": "虚拟数字人", "change_pct": -2.08}, {"name": "东数西算/算力", "change_pct": -2.58}, {"name": "web3.0", "change_pct": -1.98}, {"name": "AIGC概念", "change_pct": -1.71}, {"name": "数据要素", "change_pct": -2.15}, {"name": "字节跳动概念股", "change_pct": -1.79}, {"name": "AI营销", "change_pct": -1.71}, {"name": "ChatGPT", "change_pct": -1.47}, {"name": "智能眼镜/MR头显", "change_pct": -1.75}, {"name": "人工智能大模型", "change_pct": -1.71}, {"name": "人形机器人", "change_pct": -2.03}, {"name": "短剧/互动影游", "change_pct": -1.14}, {"name": "多模态", "change_pct": -1.74}, {"name": "Sora/AI视频", "change_pct": -2.01}, {"name": "IP经济/谷子经济", "change_pct": -1.34}, {"name": "小红书概念股", "change_pct": -2.29}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 13, "hot_rank_chg": -10, "stock_cnt": 5854, "price": "17.73", "change": "-3.48", "market_id": "33", "circulate_market_value": "18836419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5854, "price": "46.00", "change": "0.30", "market_id": "33", "circulate_market_value": "49623298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 15, "hot_rank_chg": -6, "stock_cnt": 5854, "price": "39.69", "change": "-10.00", "market_id": "17", "circulate_market_value": "27440698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 16, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "627.11", "change": "-4.15", "market_id": "17", "circulate_market_value": "419217980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 17, "hot_rank_chg": 8, "stock_cnt": 5854, "price": "111.07", "change": "-10.00", "market_id": "17", "circulate_market_value": "40065548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 18, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "47.72", "change": "-0.65", "market_id": "17", "circulate_market_value": "162865960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 19, "hot_rank_chg": 37, "stock_cnt": 5854, "price": "68.35", "change": "3.28", "market_id": "33", "circulate_market_value": "103717859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 20, "hot_rank_chg": 51, "stock_cnt": 5854, "price": "15.13", "change": "5.14", "market_id": "17", "circulate_market_value": "26253288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 21, "hot_rank_chg": 144, "stock_cnt": 5854, "price": "11.02", "change": "9.98", "market_id": "33", "circulate_market_value": "44517051000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体硅片", "xgb_concepts": [{"name": "半导体", "change_pct": 0.01}, {"name": "一带一路", "change_pct": -2.12}, {"name": "京津冀", "change_pct": -2.37}, {"name": "光伏", "change_pct": -1.59}, {"name": "碳中和", "change_pct": -2.33}, {"name": "国产芯片", "change_pct": -0.61}, {"name": "IGBT", "change_pct": 0.25}, {"name": "颗粒硅", "change_pct": 1.42}, {"name": "异质结电池HJT", "change_pct": -1.06}, {"name": "大硅片", "change_pct": 5.08}]}, {"code": "001399", "name": "惠科股份", "hot_rank": 22, "hot_rank_chg": 42, "stock_cnt": 5854, "price": "35.91", "change": "-5.80", "market_id": "33", "circulate_market_value": "15461651000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 23, "hot_rank_chg": -22, "stock_cnt": 5854, "price": "31.53", "change": "-5.34", "market_id": "33", "circulate_market_value": "90178091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 24, "hot_rank_chg": 27, "stock_cnt": 5854, "price": "44.54", "change": "7.12", "market_id": "17", "circulate_market_value": "10718867600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 25, "hot_rank_chg": 12, "stock_cnt": 5854, "price": "5.28", "change": "1.73", "market_id": "33", "circulate_market_value": "101017141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.8}, {"name": "手机产业链", "change_pct": -2.08}, {"name": "超高清视频", "change_pct": -1.36}, {"name": "半导体", "change_pct": 0.01}, {"name": "OLED", "change_pct": -0.6}, {"name": "光伏", "change_pct": -1.59}, {"name": "黑色家电", "change_pct": -1.08}, {"name": "家电", "change_pct": -2.31}, {"name": "智能制造", "change_pct": -1.97}, {"name": "工业互联网", "change_pct": -2.12}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.65}, {"name": "国产芯片", "change_pct": -0.61}, {"name": "腾讯概念股", "change_pct": -1.79}, {"name": "液晶面板/LCD", "change_pct": -1.18}, {"name": "MicroLED", "change_pct": -1.48}, {"name": "MiniLED", "change_pct": -1.91}, {"name": "华为产业链", "change_pct": -1.97}, {"name": "玻璃基板封装", "change_pct": -1.41}]}, {"code": "603823", "name": "百合花", "hot_rank": 26, "hot_rank_chg": -4, "stock_cnt": 5854, "price": "71.73", "change": "8.91", "market_id": "17", "circulate_market_value": "29866055000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 27, "hot_rank_chg": 372, "stock_cnt": 5854, "price": "9.40", "change": "4.79", "market_id": "33", "circulate_market_value": "17649645000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 0.01}, {"name": "光伏", "change_pct": -1.59}, {"name": "新能源汽车", "change_pct": -1.66}, {"name": "新能源车零部件", "change_pct": -2.09}, {"name": "第三代半导体", "change_pct": -0.67}, {"name": "氮化镓", "change_pct": -1.41}, {"name": "碳化硅", "change_pct": 0.64}, {"name": "地摊经济", "change_pct": -1.95}, {"name": "人形机器人", "change_pct": -2.03}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 28, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "60.40", "change": "-5.34", "market_id": "17", "circulate_market_value": "239883860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 29, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "45.48", "change": "-1.45", "market_id": "33", "circulate_market_value": "167557300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 30, "hot_rank_chg": -24, "stock_cnt": 5854, "price": "18.93", "change": "0.58", "market_id": "33", "circulate_market_value": "61060416000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 31, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "1116.00", "change": "1.55", "market_id": "33", "circulate_market_value": "1238692790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 32, "hot_rank_chg": -18, "stock_cnt": 5854, "price": "631.00", "change": "-7.45", "market_id": "33", "circulate_market_value": "177848540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 33, "hot_rank_chg": -4, "stock_cnt": 5854, "price": "47.70", "change": "-4.70", "market_id": "17", "circulate_market_value": "69737152000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 34, "hot_rank_chg": 13, "stock_cnt": 5854, "price": "224.88", "change": "0.19", "market_id": "33", "circulate_market_value": "311756030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 35, "hot_rank_chg": 69, "stock_cnt": 5854, "price": "214.99", "change": "2.85", "market_id": "33", "circulate_market_value": "167799340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 36, "hot_rank_chg": 39, "stock_cnt": 5854, "price": "24.06", "change": "9.26", "market_id": "33", "circulate_market_value": "28866965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 37, "hot_rank_chg": 85, "stock_cnt": 5854, "price": "47.20", "change": "1.24", "market_id": "17", "circulate_market_value": "78544191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 38, "hot_rank_chg": -10, "stock_cnt": 5854, "price": "861.92", "change": "-7.82", "market_id": "33", "circulate_market_value": "142275420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 39, "hot_rank_chg": -24, "stock_cnt": 5854, "price": "5.79", "change": "-9.95", "market_id": "33", "circulate_market_value": "7508099300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.99}, {"name": "创新药", "change_pct": -3.24}, {"name": "央企改革", "change_pct": -2.11}, {"name": "医疗器械", "change_pct": -3.17}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "互联网医疗", "change_pct": -2.53}, {"name": "保健品", "change_pct": -2.75}, {"name": "民营医院", "change_pct": -3.66}, {"name": "CAR-T疗法", "change_pct": -2.91}, {"name": "医药", "change_pct": -2.99}, {"name": "化学原料药", "change_pct": -2.98}, {"name": "海南概念", "change_pct": -2.91}, {"name": "脑科学", "change_pct": -2.43}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -2.49}, {"name": "海南自由贸易港", "change_pct": -2.47}, {"name": "食品", "change_pct": -2.32}, {"name": "国企改革", "change_pct": -2.25}, {"name": "医疗信息化", "change_pct": -2.51}, {"name": "新冠病毒防治", "change_pct": -2.61}, {"name": "自贸区", "change_pct": -2.57}, {"name": "合成生物", "change_pct": -2.77}]}, {"code": "002457", "name": "青龙管业", "hot_rank": 40, "hot_rank_chg": -9, "stock_cnt": 5854, "price": "15.00", "change": "6.61", "market_id": "33", "circulate_market_value": "4999055200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 41, "hot_rank_chg": 386, "stock_cnt": 5854, "price": "29.50", "change": "7.51", "market_id": "33", "circulate_market_value": "56066578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 42, "hot_rank_chg": 37, "stock_cnt": 5854, "price": "22.59", "change": "-5.52", "market_id": "33", "circulate_market_value": "75981580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 43, "hot_rank_chg": 24, "stock_cnt": 5854, "price": "107.21", "change": "1.80", "market_id": "33", "circulate_market_value": "70011949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 45, "hot_rank_chg": 411, "stock_cnt": 5854, "price": "46.14", "change": "20.00", "market_id": "17", "circulate_market_value": "57688928000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "收购晶隆半导体"}, {"code": "605358", "name": "立昂微", "hot_rank": 46, "hot_rank_chg": 11, "stock_cnt": 5854, "price": "61.19", "change": "2.86", "market_id": "17", "circulate_market_value": "47250880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300390", "name": "天华新能", "hot_rank": 47, "hot_rank_chg": 268, "stock_cnt": 5854, "price": "96.36", "change": "5.77", "market_id": "33", "circulate_market_value": "64779704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 48, "hot_rank_chg": 40, "stock_cnt": 5854, "price": "501.25", "change": "-1.11", "market_id": "33", "circulate_market_value": "628689380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 49, "hot_rank_chg": 47, "stock_cnt": 5854, "price": "14.70", "change": "-1.94", "market_id": "17", "circulate_market_value": "61303311000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 50, "hot_rank_chg": 26, "stock_cnt": 5854, "price": "17.39", "change": "0.23", "market_id": "17", "circulate_market_value": "86759036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 51, "hot_rank_chg": 9, "stock_cnt": 5854, "price": "63.69", "change": "0.16", "market_id": "17", "circulate_market_value": "1263870240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 52, "hot_rank_chg": 179, "stock_cnt": 5854, "price": "45.20", "change": "4.99", "market_id": "33", "circulate_market_value": "53124642000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 53, "hot_rank_chg": 275, "stock_cnt": 5854, "price": "6.00", "change": "6.76", "market_id": "33", "circulate_market_value": "13196329000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": -1.96}, {"name": "轮胎", "change_pct": -1.89}, {"name": "冷链", "change_pct": -2.19}, {"name": "机器人", "change_pct": -2.04}, {"name": "智能制造", "change_pct": -1.97}, {"name": "工业母机", "change_pct": -2.08}, {"name": "减速器", "change_pct": -2.19}, {"name": "头盔", "change_pct": -1.7}, {"name": "人形机器人", "change_pct": -2.03}]}, {"code": "002077", "name": "大港股份", "hot_rank": 54, "hot_rank_chg": 749, "stock_cnt": 5854, "price": "19.53", "change": "10.03", "market_id": "33", "circulate_market_value": "11334206500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "集成电路测试"}, {"code": "600707", "name": "彩虹股份", "hot_rank": 55, "hot_rank_chg": -17, "stock_cnt": 5854, "price": "13.14", "change": "-2.81", "market_id": "17", "circulate_market_value": "47141980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 56, "hot_rank_chg": 35, "stock_cnt": 5854, "price": "187.59", "change": "0.61", "market_id": "33", "circulate_market_value": "59751682000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 57, "hot_rank_chg": 27, "stock_cnt": 5854, "price": "15.46", "change": "-6.36", "market_id": "33", "circulate_market_value": "23588579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 58, "hot_rank_chg": -45, "stock_cnt": 5854, "price": "27.40", "change": "6.45", "market_id": "33", "circulate_market_value": "20753174000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 59, "hot_rank_chg": 90, "stock_cnt": 5854, "price": "63.36", "change": "0.76", "market_id": "33", "circulate_market_value": "462677460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 60, "hot_rank_chg": -11, "stock_cnt": 5854, "price": "70.68", "change": "1.39", "market_id": "33", "circulate_market_value": "103675672000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 61, "hot_rank_chg": 110, "stock_cnt": 5854, "price": "20.56", "change": "-2.93", "market_id": "33", "circulate_market_value": "274543760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 62, "hot_rank_chg": -3, "stock_cnt": 5854, "price": "16.05", "change": "-1.11", "market_id": "33", "circulate_market_value": "115555262000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 63, "hot_rank_chg": 18, "stock_cnt": 5854, "price": "35.03", "change": "-0.31", "market_id": "33", "circulate_market_value": "13146198500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 64, "hot_rank_chg": 78, "stock_cnt": 5854, "price": "233.17", "change": "-7.84", "market_id": "33", "circulate_market_value": "98326443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 65, "hot_rank_chg": -42, "stock_cnt": 5854, "price": "5.68", "change": "0.53", "market_id": "33", "circulate_market_value": "5867075300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.59}, {"name": "锂电池", "change_pct": -0.82}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "铜箔/覆铜板", "change_pct": -2.22}, {"name": "粤港澳大湾区", "change_pct": -1.7}, {"name": "新能源汽车", "change_pct": -1.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -2.49}]}, {"code": "603078", "name": "江化微", "hot_rank": 66, "hot_rank_chg": -25, "stock_cnt": 5854, "price": "53.56", "change": "-7.17", "market_id": "17", "circulate_market_value": "20654731000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600246", "name": "万通发展", "hot_rank": 67, "hot_rank_chg": 52, "stock_cnt": 5854, "price": "18.60", "change": "9.99", "market_id": "17", "circulate_market_value": "35161672000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "高速交换芯片"}, {"code": "300433", "name": "蓝思科技", "hot_rank": 68, "hot_rank_chg": 119, "stock_cnt": 5854, "price": "51.82", "change": "0.99", "market_id": "33", "circulate_market_value": "257529850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 69, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "426.70", "change": "-3.45", "market_id": "17", "circulate_market_value": "173384560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 70, "hot_rank_chg": 45, "stock_cnt": 5854, "price": "149.86", "change": "-2.86", "market_id": "17", "circulate_market_value": "358840000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 71, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "127.27", "change": "-1.21", "market_id": "33", "circulate_market_value": "244716090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000973", "name": "佛塑科技", "hot_rank": 72, "hot_rank_chg": 950, "stock_cnt": 5854, "price": "14.58", "change": "10.04", "market_id": "33", "circulate_market_value": "14105030000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂电池隔膜"}, {"code": "300561", "name": "汇金科技", "hot_rank": 73, "hot_rank_chg": 245, "stock_cnt": 5854, "price": "19.03", "change": "5.49", "market_id": "33", "circulate_market_value": "4587325600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 74, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "94.01", "change": "-0.58", "market_id": "17", "circulate_market_value": "137541740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 75, "hot_rank_chg": 46, "stock_cnt": 5854, "price": "20.33", "change": "-2.49", "market_id": "17", "circulate_market_value": "10414868900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 76, "hot_rank_chg": 92, "stock_cnt": 5854, "price": "42.88", "change": "-5.32", "market_id": "33", "circulate_market_value": "65088857000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688802", "name": "沐曦股份", "hot_rank": 77, "hot_rank_chg": 1370, "stock_cnt": 5854, "price": "845.00", "change": "15.60", "market_id": "17", "circulate_market_value": "15656663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 78, "hot_rank_chg": -36, "stock_cnt": 5854, "price": "49.35", "change": "0.71", "market_id": "33", "circulate_market_value": "74469694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 79, "hot_rank_chg": 29, "stock_cnt": 5854, "price": "150.23", "change": "0.35", "market_id": "33", "circulate_market_value": "150979000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 80, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "36.23", "change": "-4.43", "market_id": "17", "circulate_market_value": "56433026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 81, "hot_rank_chg": 116, "stock_cnt": 5854, "price": "129.34", "change": "0.91", "market_id": "33", "circulate_market_value": "205330890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 82, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "9.93", "change": "6.20", "market_id": "33", "circulate_market_value": "20674278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.08}, {"name": "足球", "change_pct": -1.02}, {"name": "阿里巴巴概念股", "change_pct": -1.9}, {"name": "拼多多概念股", "change_pct": -2.02}, {"name": "网红/MCN", "change_pct": -1.51}, {"name": "大消费", "change_pct": -1.46}, {"name": "盲盒", "change_pct": -0.87}, {"name": "短剧/互动影游", "change_pct": -1.14}, {"name": "IP经济/谷子经济", "change_pct": -1.34}, {"name": "首发经济", "change_pct": -2.1}, {"name": "小红书概念股", "change_pct": -2.29}, {"name": "服务消费", "change_pct": -2.23}]}, {"code": "688126", "name": "沪硅产业", "hot_rank": 83, "hot_rank_chg": 299, "stock_cnt": 5854, "price": "37.16", "change": "7.37", "market_id": "17", "circulate_market_value": "105612413000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600793", "name": "宜宾纸业", "hot_rank": 84, "hot_rank_chg": -30, "stock_cnt": 5854, "price": "19.37", "change": "9.99", "market_id": "17", "circulate_market_value": "3426630500.00", "change_type": "1", "change_section": "11", "change_days": "6", "change_reason": "TAC膜"}, {"code": "002137", "name": "实益达", "hot_rank": 85, "hot_rank_chg": 414, "stock_cnt": 5854, "price": "11.43", "change": "10.01", "market_id": "33", "circulate_market_value": "4531515900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接持股宇树科技", "xgb_concepts": [{"name": "半导体", "change_pct": 0.01}, {"name": "直播/短视频", "change_pct": -1.82}, {"name": "光伏", "change_pct": -1.59}, {"name": "LED", "change_pct": -1.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.07}, {"name": "无线耳机", "change_pct": -1.27}, {"name": "网红/MCN", "change_pct": -1.51}, {"name": "华为产业链", "change_pct": -1.97}, {"name": "微信小店", "change_pct": 0.07}, {"name": "区块链", "change_pct": -2.01}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 86, "hot_rank_chg": 21, "stock_cnt": 5854, "price": "12.13", "change": "-5.16", "market_id": "33", "circulate_market_value": "9813400300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -2.89}, {"name": "大飞机", "change_pct": -2.29}, {"name": "北斗导航", "change_pct": -2.27}, {"name": "高铁轨交", "change_pct": -2.07}, {"name": "军民融合", "change_pct": -2.33}, {"name": "磁悬浮", "change_pct": -2.05}, {"name": "军工", "change_pct": -2.29}, {"name": "碳纤维", "change_pct": -2.75}, {"name": "无人机", "change_pct": -2.23}, {"name": "航天", "change_pct": -2.21}, {"name": "卫星互联网", "change_pct": -2.15}, {"name": "低空经济", "change_pct": -2.21}, {"name": "海洋经济", "change_pct": -2.2}]}, {"code": "002192", "name": "融捷股份", "hot_rank": 87, "hot_rank_chg": 125, "stock_cnt": 5854, "price": "99.00", "change": "4.87", "market_id": "33", "circulate_market_value": "25652650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 88, "hot_rank_chg": 84, "stock_cnt": 5854, "price": "256.87", "change": "-4.40", "market_id": "17", "circulate_market_value": "294482580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 89, "hot_rank_chg": 14, "stock_cnt": 5854, "price": "64.79", "change": "-5.47", "market_id": "17", "circulate_market_value": "23726277000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 90, "hot_rank_chg": 44, "stock_cnt": 5854, "price": "23.18", "change": "-3.94", "market_id": "33", "circulate_market_value": "27270548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000811", "name": "冰轮环境", "hot_rank": 91, "hot_rank_chg": 19, "stock_cnt": 5854, "price": "54.69", "change": "1.98", "market_id": "33", "circulate_market_value": "53508460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 92, "hot_rank_chg": -27, "stock_cnt": 5854, "price": "65.38", "change": "-4.43", "market_id": "17", "circulate_market_value": "70124323000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 93, "hot_rank_chg": 122, "stock_cnt": 5854, "price": "87.88", "change": "-0.25", "market_id": "33", "circulate_market_value": "75020399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 94, "hot_rank_chg": 125, "stock_cnt": 5854, "price": "246.60", "change": "-6.94", "market_id": "33", "circulate_market_value": "110978820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002916", "name": "深南电路", "hot_rank": 95, "hot_rank_chg": 201, "stock_cnt": 5854, "price": "398.44", "change": "-9.49", "market_id": "33", "circulate_market_value": "264886680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 96, "hot_rank_chg": 66, "stock_cnt": 5854, "price": "16.86", "change": "-4.75", "market_id": "33", "circulate_market_value": "26792581000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 97, "hot_rank_chg": 172, "stock_cnt": 5854, "price": "43.35", "change": "1.78", "market_id": "17", "circulate_market_value": "28271643000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600288", "name": "大恒科技", "hot_rank": 98, "hot_rank_chg": 42, "stock_cnt": 5854, "price": "15.25", "change": "7.85", "market_id": "17", "circulate_market_value": "6661200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 99, "hot_rank_chg": 299, "stock_cnt": 5854, "price": "18.79", "change": "2.06", "market_id": "17", "circulate_market_value": "7872400700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002812", "name": "恩捷股份", "hot_rank": 100, "hot_rank_chg": 290, "stock_cnt": 5854, "price": "69.04", "change": "6.21", "market_id": "33", "circulate_market_value": "56796244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] 卓然股份：关于立案调查进展暨风险提示公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};