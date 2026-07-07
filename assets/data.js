const UPDATE_TIME = "2026-07-07 19:48";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -3.85,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.16,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续243天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": -1.13,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续196天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "人形机器人",
    "rise": -2.68,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续407天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "先进封装",
    "rise": -0.86,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "猪肉",
    "rise": -2.12,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "培育钻石",
    "rise": 0.9,
    "rate": 0,
    "tag": "",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.81,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "机器人概念",
    "rise": -2.63,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "PCB概念",
    "rise": -2.3,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续66天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -2.71,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续172天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "芯片概念",
    "rise": -1.74,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续67天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "ST板块",
    "rise": -4.54,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "2026中报预增",
    "rise": -2.08,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "算力租赁",
    "rise": -3.33,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "液冷服务器",
    "rise": -2.42,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "光纤概念",
    "rise": -1.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "TMT50ETF",
    "code": "886084"
  },
  {
    "name": "AI应用",
    "rise": -2.72,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "玻璃基板",
    "rise": -1.8,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886111"
  },
  {
    "name": "第三代半导体",
    "rise": -0.79,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885908"
  }
];
const THS_EVENTS = [
  {
    "title": "机构：人形机器人有望形成一个新兴产业",
    "desc": "",
    "heat": 194776,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "威尔高",
        "code": "301251",
        "chg": 19.995273
      }
    ]
  },
  {
    "title": "三星Q2利润飙升18倍，AI引爆存储芯片“超级周期”",
    "desc": "",
    "heat": 118191,
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
    "heat": 35637,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "东微半导",
        "code": "688261",
        "chg": 16.332042
      }
    ]
  },
  {
    "title": "星网锐捷预计Q2净利润环比大涨！交换机概念反复活跃",
    "desc": "",
    "heat": 9140,
    "direction": "交换机",
    "themes": [
      "交换机",
      "OCS交换机"
    ],
    "stocks": [
      {
        "name": "盛科通信-U",
        "code": "688702",
        "chg": 7.002801
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
        "name": "世名科技",
        "code": "300522",
        "chg": 7.638889
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "大硅片",
    "change": "+4.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玩具",
    "change": "+1.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+0.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+0.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+0.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+0.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+0.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "手游",
    "change": "+0.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IGBT",
    "change": "+0.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "-0.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电竞",
    "change": "-0.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "-0.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "-0.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "-0.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "-0.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "颗粒硅",
    "change": "-0.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "-0.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超级高铁",
    "change": "-0.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "-0.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "稀土磁材",
    "change": "-0.51%",
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
    "hot_rank": 4,
    "hot_rank_chg": 2,
    "stock_cnt": 5731,
    "price": "7.58",
    "change": "-2.32",
    "market_id": "33",
    "circulate_market_value": "268082880000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -2.8
      },
      {
        "name": "折叠屏",
        "change_pct": -2.4
      },
      {
        "name": "手机产业链",
        "change_pct": -2.54
      },
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.54
      },
      {
        "name": "半导体",
        "change_pct": -0.18
      },
      {
        "name": "人工智能",
        "change_pct": -2.82
      },
      {
        "name": "互联网医疗",
        "change_pct": -3.25
      },
      {
        "name": "VR&AR",
        "change_pct": -2.41
      },
      {
        "name": "OLED",
        "change_pct": -1.21
      },
      {
        "name": "京津冀",
        "change_pct": -2.8
      },
      {
        "name": "物联网",
        "change_pct": -2.61
      },
      {
        "name": "指纹识别",
        "change_pct": -2.06
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.95
      },
      {
        "name": "白马股",
        "change_pct": -1.4
      },
      {
        "name": "智能制造",
        "change_pct": -2.61
      },
      {
        "name": "小米概念股",
        "change_pct": -2.2
      },
      {
        "name": "国产芯片",
        "change_pct": -0.82
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.74
      },
      {
        "name": "全息概念",
        "change_pct": -3.09
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.38
      },
      {
        "name": "MicroLED",
        "change_pct": -1.79
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.15
      },
      {
        "name": "智能手表",
        "change_pct": -2.52
      },
      {
        "name": "MiniLED",
        "change_pct": -2.24
      },
      {
        "name": "传感器",
        "change_pct": -2.38
      },
      {
        "name": "大硅片",
        "change_pct": 4.97
      },
      {
        "name": "AI PC",
        "change_pct": -2.45
      },
      {
        "name": "华为产业链",
        "change_pct": -2.59
      },
      {
        "name": "回购",
        "change_pct": -2.19
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.29
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.71
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 8,
    "hot_rank_chg": 4,
    "stock_cnt": 5731,
    "price": "8.71",
    "change": "3.32",
    "market_id": "33",
    "circulate_market_value": "14159793000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.35
      },
      {
        "name": "电竞",
        "change_pct": -0.3
      },
      {
        "name": "手游",
        "change_pct": 0.25
      },
      {
        "name": "强势人气股",
        "change_pct": -2.75
      },
      {
        "name": "人工智能",
        "change_pct": -2.82
      },
      {
        "name": "游戏",
        "change_pct": -0.46
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.86
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.53
      },
      {
        "name": "快手概念股",
        "change_pct": -2.57
      },
      {
        "name": "元宇宙",
        "change_pct": -2.28
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.96
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.25
      },
      {
        "name": "web3.0",
        "change_pct": -3.04
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.71
      },
      {
        "name": "数据要素",
        "change_pct": -3.01
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.53
      },
      {
        "name": "AI营销",
        "change_pct": -2.81
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.35
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.29
      },
      {
        "name": "人工智能大模型",
        "change_pct": -2.57
      },
      {
        "name": "人形机器人",
        "change_pct": -2.88
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.07
      },
      {
        "name": "多模态",
        "change_pct": -2.76
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -2.91
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.03
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.28
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 10,
    "hot_rank_chg": 1,
    "stock_cnt": 5731,
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
        "change_pct": -0.18
      },
      {
        "name": "一带一路",
        "change_pct": -2.64
      },
      {
        "name": "京津冀",
        "change_pct": -2.8
      },
      {
        "name": "光伏",
        "change_pct": -2.42
      },
      {
        "name": "碳中和",
        "change_pct": -2.66
      },
      {
        "name": "国产芯片",
        "change_pct": -0.82
      },
      {
        "name": "IGBT",
        "change_pct": 0.02
      },
      {
        "name": "颗粒硅",
        "change_pct": 0.3
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.86
      },
      {
        "name": "大硅片",
        "change_pct": 4.97
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 17,
    "hot_rank_chg": 7,
    "stock_cnt": 5731,
    "price": "9.70",
    "change": "8.14",
    "market_id": "33",
    "circulate_market_value": "18212932000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.18
      },
      {
        "name": "光伏",
        "change_pct": -2.42
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.34
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.81
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.9
      },
      {
        "name": "氮化镓",
        "change_pct": -1.36
      },
      {
        "name": "碳化硅",
        "change_pct": 0.85
      },
      {
        "name": "地摊经济",
        "change_pct": -2.4
      },
      {
        "name": "人形机器人",
        "change_pct": -2.88
      }
    ]
  },
  {
    "code": "002137",
    "name": "实益达",
    "hot_rank": 21,
    "hot_rank_chg": 5,
    "stock_cnt": 5731,
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
        "change_pct": -0.18
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.59
      },
      {
        "name": "光伏",
        "change_pct": -2.42
      },
      {
        "name": "LED",
        "change_pct": -1.93
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.86
      },
      {
        "name": "无线耳机",
        "change_pct": -1.78
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.24
      },
      {
        "name": "华为产业链",
        "change_pct": -2.59
      },
      {
        "name": "微信小店",
        "change_pct": -0.79
      },
      {
        "name": "区块链",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 22,
    "hot_rank_chg": 7,
    "stock_cnt": 5731,
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
        "change_pct": -3.34
      },
      {
        "name": "创新药",
        "change_pct": -4.06
      },
      {
        "name": "央企改革",
        "change_pct": -2.59
      },
      {
        "name": "医疗器械",
        "change_pct": -3.64
      },
      {
        "name": "强势人气股",
        "change_pct": -2.75
      },
      {
        "name": "互联网医疗",
        "change_pct": -3.25
      },
      {
        "name": "保健品",
        "change_pct": -3.35
      },
      {
        "name": "民营医院",
        "change_pct": -4.04
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -3.51
      },
      {
        "name": "医药",
        "change_pct": -3.69
      },
      {
        "name": "化学原料药",
        "change_pct": -3.77
      },
      {
        "name": "海南概念",
        "change_pct": -3.73
      },
      {
        "name": "脑科学",
        "change_pct": -3.27
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -2.94
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -3.0
      },
      {
        "name": "食品",
        "change_pct": -2.76
      },
      {
        "name": "国企改革",
        "change_pct": -2.71
      },
      {
        "name": "医疗信息化",
        "change_pct": -3.12
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -3.25
      },
      {
        "name": "自贸区",
        "change_pct": -3.07
      },
      {
        "name": "合成生物",
        "change_pct": -3.69
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 35,
    "hot_rank_chg": 5,
    "stock_cnt": 5731,
    "price": "7.00",
    "change": "-5.28",
    "market_id": "17",
    "circulate_market_value": "86772624000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.59
      },
      {
        "name": "核电",
        "change_pct": -3.19
      },
      {
        "name": "强势人气股",
        "change_pct": -2.75
      },
      {
        "name": "电力体制改革",
        "change_pct": -3.06
      },
      {
        "name": "水电",
        "change_pct": -3.25
      },
      {
        "name": "火电",
        "change_pct": -3.35
      },
      {
        "name": "光伏",
        "change_pct": -2.42
      },
      {
        "name": "风电",
        "change_pct": -3.57
      },
      {
        "name": "国企改革",
        "change_pct": -2.71
      },
      {
        "name": "算电协同",
        "change_pct": -3.48
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 40,
    "hot_rank_chg": 3,
    "stock_cnt": 5731,
    "price": "5.26",
    "change": "1.35",
    "market_id": "33",
    "circulate_market_value": "100634500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.4
      },
      {
        "name": "手机产业链",
        "change_pct": -2.54
      },
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "半导体",
        "change_pct": -0.18
      },
      {
        "name": "OLED",
        "change_pct": -1.21
      },
      {
        "name": "光伏",
        "change_pct": -2.42
      },
      {
        "name": "黑色家电",
        "change_pct": -1.82
      },
      {
        "name": "家电",
        "change_pct": -3.05
      },
      {
        "name": "智能制造",
        "change_pct": -2.61
      },
      {
        "name": "工业互联网",
        "change_pct": -2.76
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.2
      },
      {
        "name": "国产芯片",
        "change_pct": -0.82
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.53
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.74
      },
      {
        "name": "MicroLED",
        "change_pct": -1.79
      },
      {
        "name": "MiniLED",
        "change_pct": -2.24
      },
      {
        "name": "华为产业链",
        "change_pct": -2.59
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.71
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 42,
    "hot_rank_chg": 7,
    "stock_cnt": 5731,
    "price": "5.85",
    "change": "3.54",
    "market_id": "33",
    "circulate_market_value": "6042674400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.8
      },
      {
        "name": "锂电池",
        "change_pct": -1.67
      },
      {
        "name": "强势人气股",
        "change_pct": -2.75
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -2.39
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.17
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -3.2
      }
    ]
  },
  {
    "code": "603778",
    "name": "国晟科技",
    "hot_rank": 52,
    "hot_rank_chg": 9,
    "stock_cnt": 5731,
    "price": "10.95",
    "change": "4.68",
    "market_id": "17",
    "circulate_market_value": "7039285700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "业绩爆雷",
        "change_pct": -1.31
      },
      {
        "name": "园林",
        "change_pct": -3.15
      },
      {
        "name": "光伏",
        "change_pct": -2.42
      },
      {
        "name": "固态电池",
        "change_pct": -1.26
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.86
      },
      {
        "name": "国资入股",
        "change_pct": -2.21
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 53,
    "hot_rank_chg": -1,
    "stock_cnt": 5731,
    "price": "11.37",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "10082424100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "MLCC离型膜",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -1.9
      },
      {
        "name": "手机产业链",
        "change_pct": -2.54
      },
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "强势人气股",
        "change_pct": -2.75
      },
      {
        "name": "OLED",
        "change_pct": -1.21
      },
      {
        "name": "包装印刷",
        "change_pct": -1.73
      },
      {
        "name": "光伏",
        "change_pct": -2.42
      },
      {
        "name": "小米概念股",
        "change_pct": -2.2
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.74
      },
      {
        "name": "可降解塑料",
        "change_pct": -2.86
      },
      {
        "name": "华为产业链",
        "change_pct": -2.59
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 54,
    "hot_rank_chg": 13,
    "stock_cnt": 5731,
    "price": "6.04",
    "change": "7.47",
    "market_id": "33",
    "circulate_market_value": "13284304500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": -2.49
      },
      {
        "name": "轮胎",
        "change_pct": -2.39
      },
      {
        "name": "冷链",
        "change_pct": -2.68
      },
      {
        "name": "机器人",
        "change_pct": -2.7
      },
      {
        "name": "智能制造",
        "change_pct": -2.61
      },
      {
        "name": "工业母机",
        "change_pct": -2.74
      },
      {
        "name": "减速器",
        "change_pct": -3.03
      },
      {
        "name": "头盔",
        "change_pct": -2.61
      },
      {
        "name": "人形机器人",
        "change_pct": -2.88
      }
    ]
  },
  {
    "code": "600120",
    "name": "浙江东方",
    "hot_rank": 72,
    "hot_rank_chg": 4,
    "stock_cnt": 5731,
    "price": "4.88",
    "change": "9.91",
    "market_id": "17",
    "circulate_market_value": "16667062000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -2.8
      },
      {
        "name": "债转股 · AMC",
        "change_pct": -2.29
      },
      {
        "name": "期货概念",
        "change_pct": -1.78
      },
      {
        "name": "量子通信",
        "change_pct": -1.86
      },
      {
        "name": "浙江国企改革",
        "change_pct": -2.45
      },
      {
        "name": "信托",
        "change_pct": -1.33
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大金融",
        "change_pct": -1.27
      },
      {
        "name": "国企改革",
        "change_pct": -2.71
      },
      {
        "name": "业绩增长",
        "change_pct": -2.26
      },
      {
        "name": "供应链金融",
        "change_pct": -1.47
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -3.13
      }
    ]
  },
  {
    "code": "600094",
    "name": "大名城",
    "hot_rank": 73,
    "hot_rank_chg": 37,
    "stock_cnt": 5731,
    "price": "3.84",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "8164723000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "6G通信",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -3.05
      },
      {
        "name": "破净股",
        "change_pct": -2.61
      },
      {
        "name": "物业管理",
        "change_pct": -2.83
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.25
      },
      {
        "name": "旧改",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 77,
    "hot_rank_chg": 19,
    "stock_cnt": 5731,
    "price": "9.92",
    "change": "5.98",
    "market_id": "33",
    "circulate_market_value": "4646791100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -3.59
      },
      {
        "name": "医疗器械",
        "change_pct": -3.64
      },
      {
        "name": "基因测序",
        "change_pct": -3.87
      },
      {
        "name": "PCB板",
        "change_pct": -2.2
      },
      {
        "name": "医药",
        "change_pct": -3.69
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.34
      },
      {
        "name": "化学原料药",
        "change_pct": -3.77
      },
      {
        "name": "食品安全",
        "change_pct": -1.75
      },
      {
        "name": "辅助生殖",
        "change_pct": -4.04
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -1.24
      },
      {
        "name": "异丙醇",
        "change_pct": -2.26
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -3.25
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -0.88
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 78,
    "hot_rank_chg": 4,
    "stock_cnt": 5731,
    "price": "12.95",
    "change": "-4.22",
    "market_id": "17",
    "circulate_market_value": "46460323000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -2.5
      },
      {
        "name": "OLED",
        "change_pct": -1.21
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.74
      },
      {
        "name": "国企改革",
        "change_pct": -2.71
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.71
      },
      {
        "name": "陕西国企改革",
        "change_pct": -2.49
      }
    ]
  },
  {
    "code": "002266",
    "name": "浙富控股",
    "hot_rank": 82,
    "hot_rank_chg": 9,
    "stock_cnt": 5731,
    "price": "5.75",
    "change": "8.70",
    "market_id": "33",
    "circulate_market_value": "27844865000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -3.19
      },
      {
        "name": "锂电池",
        "change_pct": -1.67
      },
      {
        "name": "一带一路",
        "change_pct": -2.64
      },
      {
        "name": "水电",
        "change_pct": -3.25
      },
      {
        "name": "有色 · 钴",
        "change_pct": -2.95
      },
      {
        "name": "有色 · 铜",
        "change_pct": -3.34
      },
      {
        "name": "有色 · 锑",
        "change_pct": -5.66
      },
      {
        "name": "固废处理",
        "change_pct": -1.88
      },
      {
        "name": "有色 · 锌",
        "change_pct": -3.98
      },
      {
        "name": "有色金属",
        "change_pct": -2.66
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.34
      },
      {
        "name": "环保",
        "change_pct": -2.23
      },
      {
        "name": "动力电池回收",
        "change_pct": -1.72
      },
      {
        "name": "业绩增长",
        "change_pct": -2.26
      },
      {
        "name": "有色 · 镍",
        "change_pct": -2.97
      },
      {
        "name": "核聚变",
        "change_pct": -3.0
      },
      {
        "name": "雅江电站概念股",
        "change_pct": -2.16
      },
      {
        "name": "钍基熔盐堆",
        "change_pct": -2.24
      }
    ]
  },
  {
    "code": "002132",
    "name": "恒星科技",
    "hot_rank": 86,
    "hot_rank_chg": 20,
    "stock_cnt": 5731,
    "price": "6.08",
    "change": "7.99",
    "market_id": "33",
    "circulate_market_value": "8507053400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -4.71
      },
      {
        "name": "轮胎",
        "change_pct": -2.39
      },
      {
        "name": "有机硅",
        "change_pct": -1.03
      },
      {
        "name": "光伏",
        "change_pct": -2.42
      },
      {
        "name": "金刚线",
        "change_pct": -0.97
      },
      {
        "name": "特高压",
        "change_pct": -2.9
      }
    ]
  },
  {
    "code": "300043",
    "name": "星辉娱乐",
    "hot_rank": 91,
    "hot_rank_chg": 17,
    "stock_cnt": 5731,
    "price": "5.17",
    "change": "14.13",
    "market_id": "33",
    "circulate_market_value": "6429099200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电竞",
        "change_pct": -0.3
      },
      {
        "name": "股权转让",
        "change_pct": -2.78
      },
      {
        "name": "手游",
        "change_pct": 0.25
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.68
      },
      {
        "name": "人工智能",
        "change_pct": -2.82
      },
      {
        "name": "游戏",
        "change_pct": -0.46
      },
      {
        "name": "足球",
        "change_pct": -0.92
      },
      {
        "name": "动漫",
        "change_pct": 0.47
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.53
      },
      {
        "name": "NFT",
        "change_pct": -2.06
      },
      {
        "name": "元宇宙",
        "change_pct": -2.28
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.53
      },
      {
        "name": "玩具",
        "change_pct": 1.06
      },
      {
        "name": "云游戏",
        "change_pct": -0.97
      },
      {
        "name": "头盔",
        "change_pct": -2.61
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.03
      }
    ]
  },
  {
    "code": "002456",
    "name": "欧菲光",
    "hot_rank": 95,
    "hot_rank_chg": -17,
    "stock_cnt": 5731,
    "price": "9.09",
    "change": "0.44",
    "market_id": "33",
    "circulate_market_value": "30157120000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.4
      },
      {
        "name": "手机产业链",
        "change_pct": -2.54
      },
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "深圳本地股",
        "change_pct": -2.83
      },
      {
        "name": "股权转让",
        "change_pct": -2.78
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.58
      },
      {
        "name": "VR&AR",
        "change_pct": -2.41
      },
      {
        "name": "3D感应",
        "change_pct": -0.84
      },
      {
        "name": "人脸识别",
        "change_pct": -2.66
      },
      {
        "name": "3D玻璃",
        "change_pct": -3.38
      },
      {
        "name": "指纹识别",
        "change_pct": -2.06
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.95
      },
      {
        "name": "虹膜识别",
        "change_pct": -1.81
      },
      {
        "name": "机器人",
        "change_pct": -2.7
      },
      {
        "name": "机器视觉",
        "change_pct": -2.44
      },
      {
        "name": "无人机",
        "change_pct": -3.0
      },
      {
        "name": "智能制造",
        "change_pct": -2.61
      },
      {
        "name": "小米概念股",
        "change_pct": -2.2
      },
      {
        "name": "激光雷达",
        "change_pct": -1.87
      },
      {
        "name": "元宇宙",
        "change_pct": -2.28
      },
      {
        "name": "电子后视镜",
        "change_pct": -2.55
      },
      {
        "name": "传感器",
        "change_pct": -2.38
      },
      {
        "name": "华为产业链",
        "change_pct": -2.59
      },
      {
        "name": "毫米波雷达",
        "change_pct": -2.52
      },
      {
        "name": "星闪概念",
        "change_pct": -1.69
      },
      {
        "name": "智能座舱",
        "change_pct": -1.99
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5731, "price": "21.93", "change": "9.98", "market_id": "33", "circulate_market_value": "72865753000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "49.00", "change": "6.45", "market_id": "33", "circulate_market_value": "38337827000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "100.99", "change": "6.21", "market_id": "17", "circulate_market_value": "180712980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5731, "price": "7.58", "change": "-2.32", "market_id": "33", "circulate_market_value": "268082880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -2.8}, {"name": "折叠屏", "change_pct": -2.4}, {"name": "手机产业链", "change_pct": -2.54}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "苹果产业链", "change_pct": -2.54}, {"name": "半导体", "change_pct": -0.18}, {"name": "人工智能", "change_pct": -2.82}, {"name": "互联网医疗", "change_pct": -3.25}, {"name": "VR&AR", "change_pct": -2.41}, {"name": "OLED", "change_pct": -1.21}, {"name": "京津冀", "change_pct": -2.8}, {"name": "物联网", "change_pct": -2.61}, {"name": "指纹识别", "change_pct": -2.06}, {"name": "汽车零部件", "change_pct": -2.95}, {"name": "白马股", "change_pct": -1.4}, {"name": "智能制造", "change_pct": -2.61}, {"name": "小米概念股", "change_pct": -2.2}, {"name": "国产芯片", "change_pct": -0.82}, {"name": "液晶面板/LCD", "change_pct": -1.74}, {"name": "全息概念", "change_pct": -3.09}, {"name": "理想汽车概念股", "change_pct": -2.38}, {"name": "MicroLED", "change_pct": -1.79}, {"name": "钙钛矿电池", "change_pct": -2.15}, {"name": "智能手表", "change_pct": -2.52}, {"name": "MiniLED", "change_pct": -2.24}, {"name": "传感器", "change_pct": -2.38}, {"name": "大硅片", "change_pct": 4.97}, {"name": "AI PC", "change_pct": -2.45}, {"name": "华为产业链", "change_pct": -2.59}, {"name": "回购", "change_pct": -2.19}, {"name": "智能眼镜/MR头显", "change_pct": -2.29}, {"name": "玻璃基板封装", "change_pct": -1.71}]}, {"code": "603823", "name": "百合花", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5731, "price": "72.45", "change": "10.01", "market_id": "17", "circulate_market_value": "30165840000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻胶颜料"}, {"code": "600206", "name": "有研新材", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "55.98", "change": "10.00", "market_id": "17", "circulate_market_value": "47390056000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "终止定增"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5731, "price": "71.06", "change": "1.94", "market_id": "33", "circulate_market_value": "104233068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 8, "hot_rank_chg": 4, "stock_cnt": 5731, "price": "8.71", "change": "3.32", "market_id": "33", "circulate_market_value": "14159793000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.35}, {"name": "电竞", "change_pct": -0.3}, {"name": "手游", "change_pct": 0.25}, {"name": "强势人气股", "change_pct": -2.75}, {"name": "人工智能", "change_pct": -2.82}, {"name": "游戏", "change_pct": -0.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.86}, {"name": "腾讯概念股", "change_pct": -2.53}, {"name": "快手概念股", "change_pct": -2.57}, {"name": "元宇宙", "change_pct": -2.28}, {"name": "虚拟数字人", "change_pct": -2.96}, {"name": "东数西算/算力", "change_pct": -3.25}, {"name": "web3.0", "change_pct": -3.04}, {"name": "AIGC概念", "change_pct": -2.71}, {"name": "数据要素", "change_pct": -3.01}, {"name": "字节跳动概念股", "change_pct": -2.53}, {"name": "AI营销", "change_pct": -2.81}, {"name": "ChatGPT", "change_pct": -2.35}, {"name": "智能眼镜/MR头显", "change_pct": -2.29}, {"name": "人工智能大模型", "change_pct": -2.57}, {"name": "人形机器人", "change_pct": -2.88}, {"name": "短剧/互动影游", "change_pct": -2.07}, {"name": "多模态", "change_pct": -2.76}, {"name": "Sora/AI视频", "change_pct": -2.91}, {"name": "IP经济/谷子经济", "change_pct": -2.03}, {"name": "小红书概念股", "change_pct": -3.28}]}, {"code": "600667", "name": "太极实业", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5731, "price": "26.32", "change": "-3.98", "market_id": "17", "circulate_market_value": "55049390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "11.02", "change": "9.98", "market_id": "33", "circulate_market_value": "44517051000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体硅片", "xgb_concepts": [{"name": "半导体", "change_pct": -0.18}, {"name": "一带一路", "change_pct": -2.64}, {"name": "京津冀", "change_pct": -2.8}, {"name": "光伏", "change_pct": -2.42}, {"name": "碳中和", "change_pct": -2.66}, {"name": "国产芯片", "change_pct": -0.82}, {"name": "IGBT", "change_pct": 0.02}, {"name": "颗粒硅", "change_pct": 0.3}, {"name": "异质结电池HJT", "change_pct": -1.86}, {"name": "大硅片", "change_pct": 4.97}]}, {"code": "002384", "name": "东山精密", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5731, "price": "236.87", "change": "5.53", "market_id": "33", "circulate_market_value": "328378030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 12, "hot_rank_chg": 2, "stock_cnt": 5731, "price": "18.36", "change": "-1.02", "market_id": "17", "circulate_market_value": "23432056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "80.89", "change": "-4.38", "market_id": "17", "circulate_market_value": "197790700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600793", "name": "宜宾纸业", "hot_rank": 14, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "19.37", "change": "9.99", "market_id": "17", "circulate_market_value": "3426630500.00", "change_type": "1", "change_section": "11", "change_days": "6", "change_reason": "TAC膜"}, {"code": "600360", "name": "华微电子", "hot_rank": 15, "hot_rank_chg": 2, "stock_cnt": 5731, "price": "15.32", "change": "9.98", "market_id": "17", "circulate_market_value": "14711724000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "功率半导体"}, {"code": "603986", "name": "兆易创新", "hot_rank": 16, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "620.00", "change": "-5.24", "market_id": "17", "circulate_market_value": "414465000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 17, "hot_rank_chg": 7, "stock_cnt": 5731, "price": "9.70", "change": "8.14", "market_id": "33", "circulate_market_value": "18212932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.18}, {"name": "光伏", "change_pct": -2.42}, {"name": "新能源汽车", "change_pct": -2.34}, {"name": "新能源车零部件", "change_pct": -2.81}, {"name": "第三代半导体", "change_pct": -0.9}, {"name": "氮化镓", "change_pct": -1.36}, {"name": "碳化硅", "change_pct": 0.85}, {"name": "地摊经济", "change_pct": -2.4}, {"name": "人形机器人", "change_pct": -2.88}]}, {"code": "002558", "name": "巨人网络", "hot_rank": 18, "hot_rank_chg": 2, "stock_cnt": 5731, "price": "29.09", "change": "6.01", "market_id": "33", "circulate_market_value": "55287348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 19, "hot_rank_chg": -1, "stock_cnt": 5731, "price": "45.35", "change": "-1.11", "market_id": "33", "circulate_market_value": "48922099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 20, "hot_rank_chg": -1, "stock_cnt": 5731, "price": "39.69", "change": "-10.00", "market_id": "17", "circulate_market_value": "27440698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002137", "name": "实益达", "hot_rank": 21, "hot_rank_chg": 5, "stock_cnt": 5731, "price": "11.43", "change": "10.01", "market_id": "33", "circulate_market_value": "4531515900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接持股宇树科技", "xgb_concepts": [{"name": "半导体", "change_pct": -0.18}, {"name": "直播/短视频", "change_pct": -2.59}, {"name": "光伏", "change_pct": -2.42}, {"name": "LED", "change_pct": -1.93}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.86}, {"name": "无线耳机", "change_pct": -1.78}, {"name": "网红/MCN", "change_pct": -2.24}, {"name": "华为产业链", "change_pct": -2.59}, {"name": "微信小店", "change_pct": -0.79}, {"name": "区块链", "change_pct": -2.74}]}, {"code": "000566", "name": "海南海药", "hot_rank": 22, "hot_rank_chg": 7, "stock_cnt": 5731, "price": "5.79", "change": "-9.95", "market_id": "33", "circulate_market_value": "7508099300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.34}, {"name": "创新药", "change_pct": -4.06}, {"name": "央企改革", "change_pct": -2.59}, {"name": "医疗器械", "change_pct": -3.64}, {"name": "强势人气股", "change_pct": -2.75}, {"name": "互联网医疗", "change_pct": -3.25}, {"name": "保健品", "change_pct": -3.35}, {"name": "民营医院", "change_pct": -4.04}, {"name": "CAR-T疗法", "change_pct": -3.51}, {"name": "医药", "change_pct": -3.69}, {"name": "化学原料药", "change_pct": -3.77}, {"name": "海南概念", "change_pct": -3.73}, {"name": "脑科学", "change_pct": -3.27}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -2.94}, {"name": "海南自由贸易港", "change_pct": -3.0}, {"name": "食品", "change_pct": -2.76}, {"name": "国企改革", "change_pct": -2.71}, {"name": "医疗信息化", "change_pct": -3.12}, {"name": "新冠病毒防治", "change_pct": -3.25}, {"name": "自贸区", "change_pct": -3.07}, {"name": "合成生物", "change_pct": -3.69}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 23, "hot_rank_chg": 2, "stock_cnt": 5731, "price": "31.48", "change": "-5.49", "market_id": "33", "circulate_market_value": "90035088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 24, "hot_rank_chg": -2, "stock_cnt": 5731, "price": "54.07", "change": "1.45", "market_id": "33", "circulate_market_value": "85114592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600288", "name": "大恒科技", "hot_rank": 25, "hot_rank_chg": -2, "stock_cnt": 5731, "price": "15.55", "change": "9.97", "market_id": "17", "circulate_market_value": "6792240000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器视觉"}, {"code": "001248", "name": "华润新能源", "hot_rank": 26, "hot_rank_chg": -5, "stock_cnt": 5731, "price": "18.51", "change": "0.76", "market_id": "33", "circulate_market_value": "19665094000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002497", "name": "雅化集团", "hot_rank": 27, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "24.65", "change": "10.00", "market_id": "33", "circulate_market_value": "26118835000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "603629", "name": "利通电子", "hot_rank": 28, "hot_rank_chg": -12, "stock_cnt": 5731, "price": "111.07", "change": "-10.00", "market_id": "17", "circulate_market_value": "40065548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000973", "name": "佛塑科技", "hot_rank": 29, "hot_rank_chg": 8, "stock_cnt": 5731, "price": "14.58", "change": "10.04", "market_id": "33", "circulate_market_value": "14105030000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂电池隔膜"}, {"code": "600246", "name": "万通发展", "hot_rank": 30, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "18.60", "change": "9.99", "market_id": "17", "circulate_market_value": "35161672000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "高速交换芯片"}, {"code": "603538", "name": "美诺华", "hot_rank": 31, "hot_rank_chg": 4, "stock_cnt": 5731, "price": "43.70", "change": "5.10", "market_id": "17", "circulate_market_value": "10516715600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 32, "hot_rank_chg": -2, "stock_cnt": 5731, "price": "61.26", "change": "4.72", "market_id": "33", "circulate_market_value": "70878623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 33, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "15.23", "change": "5.84", "market_id": "17", "circulate_market_value": "26426806000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 34, "hot_rank_chg": -2, "stock_cnt": 5731, "price": "20.25", "change": "9.99", "market_id": "17", "circulate_market_value": "8484093300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟衬底"}, {"code": "601991", "name": "大唐发电", "hot_rank": 35, "hot_rank_chg": 5, "stock_cnt": 5731, "price": "7.00", "change": "-5.28", "market_id": "17", "circulate_market_value": "86772624000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.59}, {"name": "核电", "change_pct": -3.19}, {"name": "强势人气股", "change_pct": -2.75}, {"name": "电力体制改革", "change_pct": -3.06}, {"name": "水电", "change_pct": -3.25}, {"name": "火电", "change_pct": -3.35}, {"name": "光伏", "change_pct": -2.42}, {"name": "风电", "change_pct": -3.57}, {"name": "国企改革", "change_pct": -2.71}, {"name": "算电协同", "change_pct": -3.48}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 36, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "110.00", "change": "4.45", "market_id": "33", "circulate_market_value": "71833919000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 37, "hot_rank_chg": 4, "stock_cnt": 5731, "price": "20.83", "change": "9.98", "market_id": "17", "circulate_market_value": "3810501300.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "拟收购存储公司"}, {"code": "300308", "name": "中际旭创", "hot_rank": 38, "hot_rank_chg": -7, "stock_cnt": 5731, "price": "1121.90", "change": "2.09", "market_id": "33", "circulate_market_value": "1245241440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002457", "name": "青龙管业", "hot_rank": 39, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "14.99", "change": "6.54", "market_id": "33", "circulate_market_value": "4995722500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 40, "hot_rank_chg": 3, "stock_cnt": 5731, "price": "5.26", "change": "1.35", "market_id": "33", "circulate_market_value": "100634500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.4}, {"name": "手机产业链", "change_pct": -2.54}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "半导体", "change_pct": -0.18}, {"name": "OLED", "change_pct": -1.21}, {"name": "光伏", "change_pct": -2.42}, {"name": "黑色家电", "change_pct": -1.82}, {"name": "家电", "change_pct": -3.05}, {"name": "智能制造", "change_pct": -2.61}, {"name": "工业互联网", "change_pct": -2.76}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.2}, {"name": "国产芯片", "change_pct": -0.82}, {"name": "腾讯概念股", "change_pct": -2.53}, {"name": "液晶面板/LCD", "change_pct": -1.74}, {"name": "MicroLED", "change_pct": -1.79}, {"name": "MiniLED", "change_pct": -2.24}, {"name": "华为产业链", "change_pct": -2.59}, {"name": "玻璃基板封装", "change_pct": -1.71}]}, {"code": "600522", "name": "中天科技", "hot_rank": 41, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "47.27", "change": "-1.58", "market_id": "17", "circulate_market_value": "161330130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 42, "hot_rank_chg": 7, "stock_cnt": 5731, "price": "5.85", "change": "3.54", "market_id": "33", "circulate_market_value": "6042674400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.8}, {"name": "锂电池", "change_pct": -1.67}, {"name": "强势人气股", "change_pct": -2.75}, {"name": "铜箔/覆铜板", "change_pct": -2.39}, {"name": "粤港澳大湾区", "change_pct": -2.17}, {"name": "新能源汽车", "change_pct": -2.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -3.2}]}, {"code": "603178", "name": "圣龙股份", "hot_rank": 43, "hot_rank_chg": 5, "stock_cnt": 5731, "price": "16.35", "change": "10.03", "market_id": "17", "circulate_market_value": "3865334300.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "机器人关节驱动"}, {"code": "600703", "name": "三安光电", "hot_rank": 44, "hot_rank_chg": 0, "stock_cnt": 5731, "price": "17.78", "change": "2.48", "market_id": "17", "circulate_market_value": "88704753000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 45, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "627.90", "change": "-7.91", "market_id": "33", "circulate_market_value": "176974800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5731, "price": "46.14", "change": "20.00", "market_id": "17", "circulate_market_value": "57688928000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "收购晶隆半导体"}, {"code": "002156", "name": "通富微电", "hot_rank": 47, "hot_rank_chg": -8, "stock_cnt": 5731, "price": "68.21", "change": "3.07", "market_id": "33", "circulate_market_value": "103505416000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 48, "hot_rank_chg": 5, "stock_cnt": 5731, "price": "26.45", "change": "2.76", "market_id": "33", "circulate_market_value": "20033630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 49, "hot_rank_chg": -2, "stock_cnt": 5731, "price": "221.67", "change": "6.05", "market_id": "33", "circulate_market_value": "173013070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 50, "hot_rank_chg": -5, "stock_cnt": 5731, "price": "60.00", "change": "-5.97", "market_id": "17", "circulate_market_value": "238295220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603861", "name": "白云电器", "hot_rank": 51, "hot_rank_chg": 0, "stock_cnt": 5731, "price": "15.20", "change": "9.99", "market_id": "17", "circulate_market_value": "8034514500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "变压器出海"}, {"code": "603778", "name": "国晟科技", "hot_rank": 52, "hot_rank_chg": 9, "stock_cnt": 5731, "price": "10.95", "change": "4.68", "market_id": "17", "circulate_market_value": "7039285700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "业绩爆雷", "change_pct": -1.31}, {"name": "园林", "change_pct": -3.15}, {"name": "光伏", "change_pct": -2.42}, {"name": "固态电池", "change_pct": -1.26}, {"name": "异质结电池HJT", "change_pct": -1.86}, {"name": "国资入股", "change_pct": -2.21}]}, {"code": "002585", "name": "双星新材", "hot_rank": 53, "hot_rank_chg": -1, "stock_cnt": 5731, "price": "11.37", "change": "9.96", "market_id": "33", "circulate_market_value": "10082424100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC离型膜", "xgb_concepts": [{"name": "被动元件", "change_pct": -1.9}, {"name": "手机产业链", "change_pct": -2.54}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "强势人气股", "change_pct": -2.75}, {"name": "OLED", "change_pct": -1.21}, {"name": "包装印刷", "change_pct": -1.73}, {"name": "光伏", "change_pct": -2.42}, {"name": "小米概念股", "change_pct": -2.2}, {"name": "液晶面板/LCD", "change_pct": -1.74}, {"name": "可降解塑料", "change_pct": -2.86}, {"name": "华为产业链", "change_pct": -2.59}, {"name": "PET复合铜箔", "change_pct": -1.31}]}, {"code": "002031", "name": "巨轮智能", "hot_rank": 54, "hot_rank_chg": 13, "stock_cnt": 5731, "price": "6.04", "change": "7.47", "market_id": "33", "circulate_market_value": "13284304500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": -2.49}, {"name": "轮胎", "change_pct": -2.39}, {"name": "冷链", "change_pct": -2.68}, {"name": "机器人", "change_pct": -2.7}, {"name": "智能制造", "change_pct": -2.61}, {"name": "工业母机", "change_pct": -2.74}, {"name": "减速器", "change_pct": -3.03}, {"name": "头盔", "change_pct": -2.61}, {"name": "人形机器人", "change_pct": -2.88}]}, {"code": "002841", "name": "视源股份", "hot_rank": 55, "hot_rank_chg": -1, "stock_cnt": 5731, "price": "43.08", "change": "10.01", "market_id": "33", "circulate_market_value": "22459562000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "001365", "name": "天海电子", "hot_rank": 56, "hot_rank_chg": 10, "stock_cnt": 5731, "price": "43.46", "change": "10.00", "market_id": "33", "circulate_market_value": "2499195400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "603893", "name": "瑞芯微", "hot_rank": 57, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "190.71", "change": "8.28", "market_id": "17", "circulate_market_value": "80650010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 58, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "18.58", "change": "-1.27", "market_id": "33", "circulate_market_value": "59931459000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001229", "name": "魅视科技", "hot_rank": 59, "hot_rank_chg": 5, "stock_cnt": 5731, "price": "38.82", "change": "10.00", "market_id": "33", "circulate_market_value": "2863021800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI视觉"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 60, "hot_rank_chg": 2, "stock_cnt": 5731, "price": "49.05", "change": "-2.00", "market_id": "17", "circulate_market_value": "71710845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 61, "hot_rank_chg": -11, "stock_cnt": 5731, "price": "45.51", "change": "-1.39", "market_id": "33", "circulate_market_value": "167667830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 62, "hot_rank_chg": 12, "stock_cnt": 5731, "price": "23.30", "change": "5.81", "market_id": "33", "circulate_market_value": "27955124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 63, "hot_rank_chg": 2, "stock_cnt": 5731, "price": "34.78", "change": "-8.76", "market_id": "33", "circulate_market_value": "14975111000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000970", "name": "中科三环", "hot_rank": 64, "hot_rank_chg": 11, "stock_cnt": 5731, "price": "16.55", "change": "6.29", "market_id": "33", "circulate_market_value": "20120262000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 66, "hot_rank_chg": -7, "stock_cnt": 5731, "price": "63.78", "change": "0.30", "market_id": "17", "circulate_market_value": "1265656210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 67, "hot_rank_chg": -10, "stock_cnt": 5731, "price": "30.39", "change": "4.83", "market_id": "17", "circulate_market_value": "17109464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 68, "hot_rank_chg": -12, "stock_cnt": 5731, "price": "851.00", "change": "-8.98", "market_id": "33", "circulate_market_value": "140472880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000593", "name": "德龙汇能", "hot_rank": 69, "hot_rank_chg": 1, "stock_cnt": 5731, "price": "26.25", "change": "6.45", "market_id": "33", "circulate_market_value": "9410183200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001339", "name": "智微智能", "hot_rank": 70, "hot_rank_chg": 3, "stock_cnt": 5731, "price": "101.31", "change": "4.93", "market_id": "33", "circulate_market_value": "16402056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 71, "hot_rank_chg": 10, "stock_cnt": 5731, "price": "71.72", "change": "-2.77", "market_id": "33", "circulate_market_value": "278382140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600120", "name": "浙江东方", "hot_rank": 72, "hot_rank_chg": 4, "stock_cnt": 5731, "price": "4.88", "change": "9.91", "market_id": "17", "circulate_market_value": "16667062000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增", "xgb_concepts": [{"name": "密集调研", "change_pct": -2.8}, {"name": "债转股 · AMC", "change_pct": -2.29}, {"name": "期货概念", "change_pct": -1.78}, {"name": "量子通信", "change_pct": -1.86}, {"name": "浙江国企改革", "change_pct": -2.45}, {"name": "信托", "change_pct": -1.33}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大金融", "change_pct": -1.27}, {"name": "国企改革", "change_pct": -2.71}, {"name": "业绩增长", "change_pct": -2.26}, {"name": "供应链金融", "change_pct": -1.47}, {"name": "DeepSeek概念股", "change_pct": -3.13}]}, {"code": "600094", "name": "大名城", "hot_rank": 73, "hot_rank_chg": 37, "stock_cnt": 5731, "price": "3.84", "change": "10.03", "market_id": "17", "circulate_market_value": "8164723000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "6G通信", "xgb_concepts": [{"name": "房地产", "change_pct": -3.05}, {"name": "破净股", "change_pct": -2.61}, {"name": "物业管理", "change_pct": -2.83}, {"name": "东数西算/算力", "change_pct": -3.25}, {"name": "旧改", "change_pct": -2.5}]}, {"code": "300390", "name": "天华新能", "hot_rank": 74, "hot_rank_chg": -14, "stock_cnt": 5731, "price": "96.26", "change": "5.66", "market_id": "33", "circulate_market_value": "64712477000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 75, "hot_rank_chg": -12, "stock_cnt": 5731, "price": "47.29", "change": "1.44", "market_id": "17", "circulate_market_value": "78693958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 76, "hot_rank_chg": -7, "stock_cnt": 5731, "price": "153.59", "change": "2.60", "market_id": "33", "circulate_market_value": "154355750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 77, "hot_rank_chg": 19, "stock_cnt": 5731, "price": "9.92", "change": "5.98", "market_id": "33", "circulate_market_value": "4646791100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -3.59}, {"name": "医疗器械", "change_pct": -3.64}, {"name": "基因测序", "change_pct": -3.87}, {"name": "PCB板", "change_pct": -2.2}, {"name": "医药", "change_pct": -3.69}, {"name": "新能源汽车", "change_pct": -2.34}, {"name": "化学原料药", "change_pct": -3.77}, {"name": "食品安全", "change_pct": -1.75}, {"name": "辅助生殖", "change_pct": -4.04}, {"name": "光刻机（胶）", "change_pct": -1.24}, {"name": "异丙醇", "change_pct": -2.26}, {"name": "新冠病毒防治", "change_pct": -3.25}, {"name": "磷酸铁锂", "change_pct": -0.88}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 78, "hot_rank_chg": 4, "stock_cnt": 5731, "price": "12.95", "change": "-4.22", "market_id": "17", "circulate_market_value": "46460323000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -2.5}, {"name": "OLED", "change_pct": -1.21}, {"name": "液晶面板/LCD", "change_pct": -1.74}, {"name": "国企改革", "change_pct": -2.71}, {"name": "玻璃基板封装", "change_pct": -1.71}, {"name": "陕西国企改革", "change_pct": -2.49}]}, {"code": "001896", "name": "豫能控股", "hot_rank": 79, "hot_rank_chg": 35, "stock_cnt": 5731, "price": "14.98", "change": "-9.27", "market_id": "33", "circulate_market_value": "22856204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 80, "hot_rank_chg": 3, "stock_cnt": 5731, "price": "44.35", "change": "2.10", "market_id": "17", "circulate_market_value": "41273437000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002077", "name": "大港股份", "hot_rank": 81, "hot_rank_chg": 11, "stock_cnt": 5731, "price": "19.07", "change": "7.44", "market_id": "33", "circulate_market_value": "11067246100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002266", "name": "浙富控股", "hot_rank": 82, "hot_rank_chg": 9, "stock_cnt": 5731, "price": "5.75", "change": "8.70", "market_id": "33", "circulate_market_value": "27844865000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -3.19}, {"name": "锂电池", "change_pct": -1.67}, {"name": "一带一路", "change_pct": -2.64}, {"name": "水电", "change_pct": -3.25}, {"name": "有色 · 钴", "change_pct": -2.95}, {"name": "有色 · 铜", "change_pct": -3.34}, {"name": "有色 · 锑", "change_pct": -5.66}, {"name": "固废处理", "change_pct": -1.88}, {"name": "有色 · 锌", "change_pct": -3.98}, {"name": "有色金属", "change_pct": -2.66}, {"name": "新能源汽车", "change_pct": -2.34}, {"name": "环保", "change_pct": -2.23}, {"name": "动力电池回收", "change_pct": -1.72}, {"name": "业绩增长", "change_pct": -2.26}, {"name": "有色 · 镍", "change_pct": -2.97}, {"name": "核聚变", "change_pct": -3.0}, {"name": "雅江电站概念股", "change_pct": -2.16}, {"name": "钍基熔盐堆", "change_pct": -2.24}]}, {"code": "002202", "name": "金风科技", "hot_rank": 83, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "22.19", "change": "-7.19", "market_id": "33", "circulate_market_value": "74636178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 84, "hot_rank_chg": 2, "stock_cnt": 5731, "price": "60.53", "change": "1.75", "market_id": "17", "circulate_market_value": "46741228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002132", "name": "恒星科技", "hot_rank": 86, "hot_rank_chg": 20, "stock_cnt": 5731, "price": "6.08", "change": "7.99", "market_id": "33", "circulate_market_value": "8507053400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -4.71}, {"name": "轮胎", "change_pct": -2.39}, {"name": "有机硅", "change_pct": -1.03}, {"name": "光伏", "change_pct": -2.42}, {"name": "金刚线", "change_pct": -0.97}, {"name": "特高压", "change_pct": -2.9}]}, {"code": "301516", "name": "中远通", "hot_rank": 87, "hot_rank_chg": 20, "stock_cnt": 5731, "price": "18.72", "change": "20.00", "market_id": "33", "circulate_market_value": "1313684220.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "服务器电源"}, {"code": "300433", "name": "蓝思科技", "hot_rank": 88, "hot_rank_chg": -17, "stock_cnt": 5731, "price": "51.85", "change": "1.05", "market_id": "33", "circulate_market_value": "257678950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 89, "hot_rank_chg": 5, "stock_cnt": 5731, "price": "185.82", "change": "-0.34", "market_id": "33", "circulate_market_value": "59187897000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 90, "hot_rank_chg": 8, "stock_cnt": 5731, "price": "93.50", "change": "-1.12", "market_id": "17", "circulate_market_value": "136795580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300043", "name": "星辉娱乐", "hot_rank": 91, "hot_rank_chg": 17, "stock_cnt": 5731, "price": "5.17", "change": "14.13", "market_id": "33", "circulate_market_value": "6429099200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电竞", "change_pct": -0.3}, {"name": "股权转让", "change_pct": -2.78}, {"name": "手游", "change_pct": 0.25}, {"name": "优化生育（三孩）", "change_pct": -2.68}, {"name": "人工智能", "change_pct": -2.82}, {"name": "游戏", "change_pct": -0.46}, {"name": "足球", "change_pct": -0.92}, {"name": "动漫", "change_pct": 0.47}, {"name": "腾讯概念股", "change_pct": -2.53}, {"name": "NFT", "change_pct": -2.06}, {"name": "元宇宙", "change_pct": -2.28}, {"name": "字节跳动概念股", "change_pct": -2.53}, {"name": "玩具", "change_pct": 1.06}, {"name": "云游戏", "change_pct": -0.97}, {"name": "头盔", "change_pct": -2.61}, {"name": "IP经济/谷子经济", "change_pct": -2.03}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 92, "hot_rank_chg": 7, "stock_cnt": 5731, "price": "100.03", "change": "3.35", "market_id": "33", "circulate_market_value": "72453271000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 93, "hot_rank_chg": -3, "stock_cnt": 5731, "price": "429.16", "change": "-2.89", "market_id": "17", "circulate_market_value": "174384150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 94, "hot_rank_chg": -9, "stock_cnt": 5731, "price": "40.68", "change": "-10.00", "market_id": "17", "circulate_market_value": "33716038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002456", "name": "欧菲光", "hot_rank": 95, "hot_rank_chg": -17, "stock_cnt": 5731, "price": "9.09", "change": "0.44", "market_id": "33", "circulate_market_value": "30157120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.4}, {"name": "手机产业链", "change_pct": -2.54}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "深圳本地股", "change_pct": -2.83}, {"name": "股权转让", "change_pct": -2.78}, {"name": "无人驾驶", "change_pct": -2.58}, {"name": "VR&AR", "change_pct": -2.41}, {"name": "3D感应", "change_pct": -0.84}, {"name": "人脸识别", "change_pct": -2.66}, {"name": "3D玻璃", "change_pct": -3.38}, {"name": "指纹识别", "change_pct": -2.06}, {"name": "汽车零部件", "change_pct": -2.95}, {"name": "虹膜识别", "change_pct": -1.81}, {"name": "机器人", "change_pct": -2.7}, {"name": "机器视觉", "change_pct": -2.44}, {"name": "无人机", "change_pct": -3.0}, {"name": "智能制造", "change_pct": -2.61}, {"name": "小米概念股", "change_pct": -2.2}, {"name": "激光雷达", "change_pct": -1.87}, {"name": "元宇宙", "change_pct": -2.28}, {"name": "电子后视镜", "change_pct": -2.55}, {"name": "传感器", "change_pct": -2.38}, {"name": "华为产业链", "change_pct": -2.59}, {"name": "毫米波雷达", "change_pct": -2.52}, {"name": "星闪概念", "change_pct": -1.69}, {"name": "智能座舱", "change_pct": -1.99}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 96, "hot_rank_chg": 6, "stock_cnt": 5731, "price": "23.16", "change": "-4.02", "market_id": "33", "circulate_market_value": "27247019000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 97, "hot_rank_chg": 8, "stock_cnt": 5731, "price": "65.57", "change": "-4.15", "market_id": "17", "circulate_market_value": "70328111000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603608", "name": "天创时尚", "hot_rank": 98, "hot_rank_chg": -19, "stock_cnt": 5731, "price": "28.55", "change": "7.53", "market_id": "17", "circulate_market_value": "12134597500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 99, "hot_rank_chg": 5, "stock_cnt": 5731, "price": "52.97", "change": "-8.20", "market_id": "17", "circulate_market_value": "20427205000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 100, "hot_rank_chg": -28, "stock_cnt": 5731, "price": "38.49", "change": "-0.49", "market_id": "33", "circulate_market_value": "126266416000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603861", "name": "白云电器", "price": 15.2, "change_pct": 9.99, "reason": "1、公司已完成数据中心智能小母线及一体化电力模块研发，750V直流方案已在园区、楼宇、地铁落地，并储备800VHVDC技术，服务中国联通、佛山开普勒等算力中心；\n2、公司围绕两网数字化、智能化需求，打造综合解决方案，加大 “二次 + 智能技术” 投入，为智能电网提供绿色环保、智能可靠的产品与供电系统方案", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 8.51, "first_limit_up": 1783389081, "break_limit_up_times": 12}, {"code": "002185", "name": "华天科技", "price": 21.93, "change_pct": 9.98, "reason": "公司拟收购华羿微电100%股份，标的是国内少数集功率器件研发设计、封装测试、可靠性验证和系统解决方案等服务于一体的公司公司已掌握从低容量到大容量存储器的封装技术，实现了Nor Flash、3D NAND、DRAM产品的批量封装，与长江存储有业务合作", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.93, "first_limit_up": 1783391415, "break_limit_up_times": 5}, {"code": "301516", "name": "中远通", "price": 18.72, "change_pct": 20.0, "reason": "1、公司服务器电源可配套数据中心建设，标准化服务器电源360W到3200W系列产品已全部小批量生产，部分实现批量生产，且均有国产化产品；\n2、公司拟与郑州正方科技合作共同拓展两轮电动车快充充电桩业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 33.32, "first_limit_up": 1783390173, "break_limit_up_times": 1}, {"code": "600288", "name": "大恒科技", "price": 15.55, "change_pct": 9.97, "reason": "1、公司机器视觉产品包括工业数字摄像机、图像采集卡、图像处理软件和智能摄像机等机器视觉系统中核心零部件，与工业机器人企业有该类产品方面的合作；\n2、控股公司中科大洋的“大洋千机大模型平台”开发了多种垂直场景智能化应用，例如智能内容管理、视频理解摘要、智能写稿创作、文生图/视频、文字场记快剪、文稿一键成片、虚拟数智人播报等", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 27.84, "first_limit_up": 1783388046, "break_limit_up_times": 13}, {"code": "603356", "name": "华菱精工", "price": 17.93, "change_pct": 10.0, "reason": "公司实控人黄业华拟转让8%股权，接盘方有半导体背景", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 3.74, "first_limit_up": 1783388125, "break_limit_up_times": 0}, {"code": "003004", "name": "声迅股份", "price": 79.95, "change_pct": 10.0, "reason": "公司拟2.51亿元收购中科锐择51%股权，快速切入特种光电赛道", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 4.91, "first_limit_up": 1783393734, "break_limit_up_times": 0}, {"code": "002497", "name": "雅化集团", "price": 24.65, "change_pct": 10.0, "reason": "公司正在与部分合作企业/高校推进硫化锂和硫化物固态电解质研发及产业化工作；上半年预计净利润同比增长710.17%至857.48%", "plates": ["锂电池", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.67, "first_limit_up": 1783387500, "break_limit_up_times": 0}, {"code": "600206", "name": "有研新材", "price": 55.98, "change_pct": 10.0, "reason": "控股子公司为长江存储、长鑫存储靶材供应商，子公司有研亿金量产12英寸晶圆制造高纯靶材，为国内大硅片下游晶圆厂提供配套耗材", "plates": ["大硅片"], "limit_up_days": 1, "turnover_ratio": 9.85, "first_limit_up": 1783388736, "break_limit_up_times": 1}, {"code": "000078", "name": "ST海王", "price": 1.8, "change_pct": 9.76, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 5, "turnover_ratio": 8.13, "first_limit_up": 1783388973, "break_limit_up_times": 7}, {"code": "603137", "name": "恒尚节能", "price": 20.83, "change_pct": 9.98, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 5, "turnover_ratio": 0.4, "first_limit_up": 1783387500, "break_limit_up_times": 0}, {"code": "600120", "name": "浙江东方", "price": 4.88, "change_pct": 9.91, "reason": "公司上半年净利润预计增长114.25%，此前投资科大国盾量子技术股份有限公司", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 0.85, "first_limit_up": 1783387500, "break_limit_up_times": 0}, {"code": "002137", "name": "实益达", "price": 11.43, "change_pct": 10.01, "reason": "1、公司向ASM PT等全球头部客户提供半导体封装测试设备部件，并切入ABL、Signify供应链；\n2、公司主营LED智能照明产品、智能可穿戴等产品，海外销售占比超7成", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 25.26, "first_limit_up": 1783389237, "break_limit_up_times": 5}, {"code": "002585", "name": "双星新材", "price": 11.37, "change_pct": 9.96, "reason": "公司MLCC离型膜已切入国内头部客户并实现稳定供货，复合铜箔项目正常推进，受益国产替代", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 4.92, "first_limit_up": 1783388595, "break_limit_up_times": 0}, {"code": "001206", "name": "依依股份", "price": 19.54, "change_pct": 10.02, "reason": "公司专注于宠物卫生护理用品领域，表示与主要客户的调价已基本达成共识，产能利用率处于合理区间", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.6, "first_limit_up": 1783389150, "break_limit_up_times": 0}, {"code": "605399", "name": "晨光新材", "price": 14.51, "change_pct": 10.01, "reason": "1、公司铜陵“年产30万吨功能性硅烷项目”规划气凝胶产能5000吨，宁夏中卫规划“年产30万吨硅基及气凝胶新材料项目”，主要生产三氯氢硅、正硅酸乙酯、乙烯基硅烷、苯基硅烷和气凝胶材料；\n2、在太阳能相关应用中，三氯氢硅可用于多晶硅制造，偶联剂产品可用于EVA、POE胶膜，以提升使用寿命，也可用于光伏组件中背板的密封胶、灌封胶中", "plates": ["大硅片"], "limit_up_days": 1, "turnover_ratio": 3.31, "first_limit_up": 1783390941, "break_limit_up_times": 0}, {"code": "002841", "name": "视源股份", "price": 43.08, "change_pct": 10.01, "reason": "公司自主研发的高性能工业级四足机器人MAXHUB X7首次亮相2025世界机器人大会，并荣获“2025具身智能机器人创新产品”奖项；预计上半年净利润同比增264.62%~314.91%", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.06, "first_limit_up": 1783387500, "break_limit_up_times": 0}, {"code": "301251", "name": "威尔高", "price": 50.77, "change_pct": 20.0, "reason": "公司主营印制电路板，通讯设备产品主要应用于路由器、交换机、通信电源、服务器电源、数据中心光模块等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.6, "first_limit_up": 1783387500, "break_limit_up_times": 0}, {"code": "600793", "name": "宜宾纸业", "price": 19.37, "change_pct": 9.99, "reason": "西南最大的食品包装原纸生产企业；公司主营业务有食品包装原纸、生活用纸原纸以及生活用纸成品纸的生产和销售", "plates": ["大消费"], "limit_up_days": 5, "turnover_ratio": 9.55, "first_limit_up": 1783388797, "break_limit_up_times": 0}, {"code": "603178", "name": "圣龙股份", "price": 16.35, "change_pct": 10.03, "reason": "国内动力系统泵类产品龙头企业；公司在电机、减速器、控制器领域的技术积累，均可以支持对人形机器人相关领域的研发；一季度业绩同比扭亏", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.89, "first_limit_up": 1783388153, "break_limit_up_times": 0}, {"code": "002951", "name": "金时科技", "price": 14.84, "change_pct": 10.01, "reason": "1、公司主营储能系统设备、混合储能系列、超级电容炭及储能消防装置，开发新型号产品(如3000F低内阻超级电容器)保持技术领先；\n2、公司通过智芯一号股权基金（持股99%）间接投资了苏州易缆微半导体技术有限公司；易缆微半导体是一家光纤通信产品研发生产商，致力于光纤通信系统、光网络系统、光电传感系统、物联网系统技术研究和试验发展及进出口业务", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 1.5, "first_limit_up": 1783388103, "break_limit_up_times": 0}, {"code": "001229", "name": "魅视科技", "price": 38.82, "change_pct": 10.0, "reason": "公司产品已应用于航空、航天等相关领域，为中国载人航天工程和探月工程的指挥控制中心提供了“光纤KVMS解决方案”，助力中国首次火星探测“天问一号”成功发射", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.47, "first_limit_up": 1783387806, "break_limit_up_times": 0}, {"code": "000973", "name": "佛塑科技", "price": 14.58, "change_pct": 10.04, "reason": "控股子公司金力新能源2024年超薄高强隔膜市占率63%，中国湿法隔膜行业排名第二，已与宁德时代、比亚迪、国轩高科等建立稳定供货关系", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 10.3, "first_limit_up": 1783387863, "break_limit_up_times": 3}, {"code": "001230", "name": "劲旅环境", "price": 17.42, "change_pct": 9.97, "reason": "公司在环卫智能装备领域产品包含环卫机器人等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.32, "first_limit_up": 1783401054, "break_limit_up_times": 1}, {"code": "600094", "name": "大名城", "price": 3.84, "change_pct": 10.03, "reason": "全资子公司深圳名城金控持有北京佰才邦技术股份有限公司20.4522%股份，后者布局6G及卫星互联网，产品涵盖低轨卫星通信等", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 1.57, "first_limit_up": 1783393112, "break_limit_up_times": 0}, {"code": "001365", "name": "天海电子", "price": 43.46, "change_pct": 10.0, "reason": "公司与上海它石智航技术有限公司签署长期战略合作框架协议，围绕人形机器人、具身大模型、汽车线束智能制造多领域开展深度协同", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 13.72, "first_limit_up": 1783388298, "break_limit_up_times": 0}, {"code": "600360", "name": "华微电子", "price": 15.32, "change_pct": 9.98, "reason": "公司集功率半导体器件设计研发、芯片加工、封装测试及产品营销为一体，拥有多条功率半导体分立器件及 IC 芯片生产线，产品种类覆盖功率半导体器件全部范围", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 19.83, "first_limit_up": 1783403108, "break_limit_up_times": 5}, {"code": "688432", "name": "有研硅", "price": 46.14, "change_pct": 20.0, "reason": "国内半导体材料龙头企业；公司通过公开摘牌方式收购安徽晶隆半导体60%股权，标的公司已完成8英寸硅外延片试生产并获客户验证，收购后可形成衬底到外延的一站式解决方案", "plates": ["大硅片"], "limit_up_days": 1, "turnover_ratio": 6.12, "first_limit_up": 1783389400, "break_limit_up_times": 8}, {"code": "603065", "name": "宿迁联盛", "price": 20.25, "change_pct": 9.99, "reason": "公司拟设立合资公司开展磷化铟衬底业务，预计二期产能40万片/年", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 16.49, "first_limit_up": 1783388252, "break_limit_up_times": 3}, {"code": "603823", "name": "百合花", "price": 72.45, "change_pct": 10.01, "reason": "1、公司拟投1亿元建设年产1000吨聚醚醚酮PEEK材料项目，产品面向人形机器人、新能源汽车、航空航天等高端制造领域；\n2、公司目前是国内少数具备生产全色谱颜料能力的生产企业，拟以自筹资金投入“年产3000吨电池级碳酸锂项目”，开发的普鲁士蓝（白）主要应用于钠离子电池正极材料；\n3、COFS 材料可用于固态电池，公司在COFS方面有做过课题研究，并申请了相关专利；\n4、公司生产的高性能颜料已应用于半导体领域液晶面板用光刻胶，并实现吨级销售", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.22, "first_limit_up": 1783391704, "break_limit_up_times": 1}, {"code": "600246", "name": "万通发展", "price": 18.6, "change_pct": 9.99, "reason": "公司拟投资8.54亿元取得数渡科技62.98%股权，标的PCIe5.0交换芯片有望于2025年底逐步开始批量供货", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 13.4, "first_limit_up": 1783388896, "break_limit_up_times": 73}, {"code": "002129", "name": "TCL中环", "price": 11.02, "change_pct": 9.98, "reason": "1、子公司鑫芯半导体致力于300mm半导体硅片研发与制造，产品应用以逻辑芯片、存储芯片等先进制程方向为主；\n2、业内人士称马斯克团队上周调研的光伏企业包括TCL中环、晶科能源、晶盛机电等", "plates": ["大硅片"], "limit_up_days": 1, "turnover_ratio": 8.74, "first_limit_up": 1783389924, "break_limit_up_times": 1}, {"code": "601121", "name": "宝地矿业", "price": 6.47, "change_pct": 10.03, "reason": "新疆国资控股的铁矿采选龙头企业；上半年净利润预计增长189.00%—210.11%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 0.98, "first_limit_up": 1783387500, "break_limit_up_times": 0}, {"code": "001311", "name": "多利科技", "price": 19.67, "change_pct": 10.01, "reason": "国内较早从事汽车冲压零部件生产的企业之一；公司设立昆山达亚智能科技有限公司，布局工业机器人、智能机器人及复合材料研发制造", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.94, "first_limit_up": 1783387905, "break_limit_up_times": 0}, {"code": "605118", "name": "力鼎光电", "price": 38.08, "change_pct": 9.99, "reason": "1、公司镜头产品在AI或机器人领域的作用主要是为其提供更加清晰、完整、高效的视觉捕捉和视觉识别，已沉淀了多年机器视觉应用领域的开发和生产技术；\n2、公司参股20%上海理鑫光学，后者主要产品包括激光超短焦投影镜头、增强现实眼镜核心元器件、AR/VR镜头等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.33, "first_limit_up": 1783388254, "break_limit_up_times": 2}];
const RISK_STOCKS = {"688121": "[立案调查] 卓然股份：关于立案调查进展暨风险提示公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "000078": "ST/风险警示股"};