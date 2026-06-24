const UPDATE_TIME = "2026-06-24 02:47";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -0.63,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.13,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续233天上榜",
    "rankChg": 1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -0.02,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续56天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": 0.96,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续186天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "脑机接口",
    "rise": -0.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "液冷服务器",
    "rise": -0.92,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "光纤概念",
    "rise": -0.97,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续62天上榜",
    "rankChg": 0,
    "etfName": "VRETF",
    "code": "886084"
  },
  {
    "name": "光刻胶",
    "rise": 0.44,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "科创半导体ETF",
    "code": "885864"
  },
  {
    "name": "人形机器人",
    "rise": -1.75,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续397天上榜",
    "rankChg": 2,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "培育钻石",
    "rise": -1.17,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "芬太尼",
    "rise": 0.05,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": -3,
    "etfName": "",
    "code": "885805"
  },
  {
    "name": "商业航天",
    "rise": -1.76,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续162天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "算力租赁",
    "rise": -1.48,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "氟化工概念",
    "rise": -0.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885551"
  },
  {
    "name": "先进封装",
    "rise": 0.33,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 1,
    "etfName": "半导体龙头ETF",
    "code": "886009"
  },
  {
    "name": "锂电池概念",
    "rise": -1.62,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": -1,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "高压氧舱",
    "rise": -0.34,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "医药ETF",
    "code": "886018"
  },
  {
    "name": "ST板块",
    "rise": -2.54,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "芯片概念",
    "rise": -0.76,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "连续57天上榜",
    "rankChg": 0,
    "etfName": "半导体龙头ETF",
    "code": "885756"
  },
  {
    "name": "机器人概念",
    "rise": -2.06,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  }
];
const THS_EVENTS = [
  {
    "title": "90万亿韩元的股份回购！三星电子股价上涨10%",
    "desc": "",
    "heat": 629503,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "N臻宝",
        "code": "688797",
        "chg": 876.997307
      }
    ]
  },
  {
    "title": "“全球最先进机器人”：特斯拉推进 Optimus 3 量产，供应链开始备货",
    "desc": "",
    "heat": 183586,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "中信博",
        "code": "688408",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "消息称台积电先进制程代工将全线涨价",
    "desc": "",
    "heat": 180000,
    "direction": "芯片制程涨价",
    "themes": [
      "芯片概念",
      "先进封装"
    ],
    "stocks": [
      {
        "name": "高特电子",
        "code": "301669",
        "chg": 19.989381
      }
    ]
  },
  {
    "title": "商务部等部门发布重要通知 全链条扩大汽车消费 再推新举措",
    "desc": "",
    "heat": 158990,
    "direction": "汽车消费",
    "themes": [
      "汽车整车",
      "新能源汽车"
    ],
    "stocks": [
      {
        "name": "满坤科技",
        "code": "301132",
        "chg": 19.991232
      }
    ]
  },
  {
    "title": "英伟达45℃液冷技术突破AI算力冷却",
    "desc": "",
    "heat": 138257,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "航天电器",
        "code": "002025",
        "chg": 10.008258
      }
    ]
  },
  {
    "title": "光纤概念表现活跃 光纤预制棒价格快速上涨",
    "desc": "",
    "heat": 128509,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "泰和新材",
        "code": "002254",
        "chg": 10.017996
      }
    ]
  },
  {
    "title": "【调研风向标】锂电行业景气度回升 VC价格上涨",
    "desc": "",
    "heat": 0,
    "direction": "VC涨价",
    "themes": [
      "VC添加剂"
    ],
    "stocks": [
      {
        "name": "孚日股份",
        "code": "002083",
        "chg": 4.761905
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+5.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+5.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+5.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+2.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+2.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+2.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+2.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+1.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草甘膦",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+1.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+1.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "异丙醇",
    "change": "+1.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+1.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+1.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氟化工",
    "change": "+1.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+1.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+1.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+1.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高价股",
    "change": "+1.2%",
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
    "hot_rank": 2,
    "hot_rank_chg": 5,
    "stock_cnt": 5840,
    "price": "6.90",
    "change": "1.92",
    "market_id": "33",
    "circulate_market_value": "244033230000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.38
      },
      {
        "name": "手机产业链",
        "change_pct": -1.1
      },
      {
        "name": "超高清视频",
        "change_pct": -2.47
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.82
      },
      {
        "name": "半导体",
        "change_pct": 0.83
      },
      {
        "name": "人工智能",
        "change_pct": -2.34
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.49
      },
      {
        "name": "VR&AR",
        "change_pct": -1.55
      },
      {
        "name": "OLED",
        "change_pct": -1.01
      },
      {
        "name": "京津冀",
        "change_pct": -2.71
      },
      {
        "name": "物联网",
        "change_pct": -2.5
      },
      {
        "name": "指纹识别",
        "change_pct": -1.93
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.21
      },
      {
        "name": "白马股",
        "change_pct": -0.54
      },
      {
        "name": "智能制造",
        "change_pct": -2.13
      },
      {
        "name": "小米概念股",
        "change_pct": -1.22
      },
      {
        "name": "国产芯片",
        "change_pct": 0.23
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.01
      },
      {
        "name": "全息概念",
        "change_pct": -2.17
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.18
      },
      {
        "name": "MicroLED",
        "change_pct": -1.22
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.0
      },
      {
        "name": "智能手表",
        "change_pct": -1.54
      },
      {
        "name": "MiniLED",
        "change_pct": -1.45
      },
      {
        "name": "传感器",
        "change_pct": -0.89
      },
      {
        "name": "大硅片",
        "change_pct": 0.69
      },
      {
        "name": "AI PC",
        "change_pct": -1.51
      },
      {
        "name": "华为产业链",
        "change_pct": -2.02
      },
      {
        "name": "回购",
        "change_pct": -1.05
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.33
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 7,
    "hot_rank_chg": 42,
    "stock_cnt": 5840,
    "price": "8.92",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "14501189000.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "7",
    "change_reason": "具身智能数据集",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.88
      },
      {
        "name": "电竞",
        "change_pct": -1.52
      },
      {
        "name": "手游",
        "change_pct": -1.24
      },
      {
        "name": "强势人气股",
        "change_pct": -1.59
      },
      {
        "name": "人工智能",
        "change_pct": -2.34
      },
      {
        "name": "游戏",
        "change_pct": -2.18
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.64
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.18
      },
      {
        "name": "快手概念股",
        "change_pct": -2.09
      },
      {
        "name": "元宇宙",
        "change_pct": -2.29
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.82
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.2
      },
      {
        "name": "web3.0",
        "change_pct": -2.78
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.05
      },
      {
        "name": "数据要素",
        "change_pct": -3.02
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.32
      },
      {
        "name": "AI营销",
        "change_pct": -2.67
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.27
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.33
      },
      {
        "name": "人工智能大模型",
        "change_pct": -2.2
      },
      {
        "name": "人形机器人",
        "change_pct": -1.61
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.88
      },
      {
        "name": "多模态",
        "change_pct": -2.03
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -2.2
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.15
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.56
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 13,
    "hot_rank_chg": 2,
    "stock_cnt": 5840,
    "price": "8.11",
    "change": "-2.76",
    "market_id": "17",
    "circulate_market_value": "100532283000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.77
      },
      {
        "name": "核电",
        "change_pct": -2.33
      },
      {
        "name": "强势人气股",
        "change_pct": -1.59
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.92
      },
      {
        "name": "水电",
        "change_pct": -2.93
      },
      {
        "name": "火电",
        "change_pct": -2.48
      },
      {
        "name": "光伏",
        "change_pct": -1.62
      },
      {
        "name": "风电",
        "change_pct": -1.73
      },
      {
        "name": "国企改革",
        "change_pct": -2.27
      },
      {
        "name": "算电协同",
        "change_pct": -2.07
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 17,
    "hot_rank_chg": 83,
    "stock_cnt": 5840,
    "price": "11.33",
    "change": "9.26",
    "market_id": "17",
    "circulate_market_value": "33699739000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.41
      },
      {
        "name": "禽流感",
        "change_pct": -1.78
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.29
      },
      {
        "name": "农药",
        "change_pct": -1.22
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": -2.27
      },
      {
        "name": "参股基金",
        "change_pct": -1.08
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 23,
    "hot_rank_chg": 48,
    "stock_cnt": 5840,
    "price": "11.51",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "57828649000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -1.35
      },
      {
        "name": "期货概念",
        "change_pct": -3.09
      },
      {
        "name": "券商",
        "change_pct": -2.05
      },
      {
        "name": "安徽国企改革",
        "change_pct": -1.65
      },
      {
        "name": "大金融",
        "change_pct": -2.15
      },
      {
        "name": "参股基金",
        "change_pct": -1.08
      },
      {
        "name": "国企改革",
        "change_pct": -2.27
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 41,
    "hot_rank_chg": 150,
    "stock_cnt": 5840,
    "price": "12.09",
    "change": "4.67",
    "market_id": "33",
    "circulate_market_value": "11444865700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -1.79
      },
      {
        "name": "锂电池",
        "change_pct": -0.97
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.33
      },
      {
        "name": "举牌",
        "change_pct": -2.31
      },
      {
        "name": "纺织服装",
        "change_pct": -1.94
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.8
      },
      {
        "name": "教育",
        "change_pct": -3.05
      },
      {
        "name": "外贸受益概念",
        "change_pct": -2.47
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.85
      },
      {
        "name": "抗菌面料",
        "change_pct": -2.18
      },
      {
        "name": "国企改革",
        "change_pct": -2.27
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.55
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 55,
    "hot_rank_chg": 43,
    "stock_cnt": 5840,
    "price": "3.88",
    "change": "-3.48",
    "market_id": "33",
    "circulate_market_value": "7773103500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -1.9
      },
      {
        "name": "数字孪生",
        "change_pct": -2.62
      },
      {
        "name": "深圳本地股",
        "change_pct": -2.87
      },
      {
        "name": "强势人气股",
        "change_pct": -1.59
      },
      {
        "name": "人工智能",
        "change_pct": -2.34
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.03
      },
      {
        "name": "高铁轨交",
        "change_pct": -2.37
      },
      {
        "name": "人脸识别",
        "change_pct": -2.39
      },
      {
        "name": "智慧停车",
        "change_pct": -3.0
      },
      {
        "name": "物联网",
        "change_pct": -2.5
      },
      {
        "name": "大数据",
        "change_pct": -2.69
      },
      {
        "name": "智慧城市",
        "change_pct": -2.77
      },
      {
        "name": "雄安新区",
        "change_pct": -3.19
      },
      {
        "name": "机器人",
        "change_pct": -2.05
      },
      {
        "name": "数字经济",
        "change_pct": -2.64
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.32
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.18
      },
      {
        "name": "建筑节能",
        "change_pct": -3.61
      },
      {
        "name": "旧改",
        "change_pct": -2.85
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.6
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.55
      },
      {
        "name": "华为产业链",
        "change_pct": -2.02
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -2.44
      },
      {
        "name": "区块链",
        "change_pct": -3.14
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 69,
    "hot_rank_chg": 8,
    "stock_cnt": 5840,
    "price": "6.71",
    "change": "-6.02",
    "market_id": "33",
    "circulate_market_value": "74769460000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -1.68
      },
      {
        "name": "锂电池",
        "change_pct": -1.08
      },
      {
        "name": "安徽国企改革",
        "change_pct": -1.65
      },
      {
        "name": "有色 · 铜",
        "change_pct": -1.81
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.27
      },
      {
        "name": "有色金属",
        "change_pct": -1.85
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.92
      },
      {
        "name": "人民币升值受益",
        "change_pct": -2.12
      },
      {
        "name": "硫酸",
        "change_pct": -0.08
      },
      {
        "name": "国企改革",
        "change_pct": -2.3
      },
      {
        "name": "白银",
        "change_pct": -0.98
      },
      {
        "name": "有色 · 镍",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 73,
    "hot_rank_chg": -45,
    "stock_cnt": 5840,
    "price": "11.02",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "5162060300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "PCB用化学试剂",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.95
      },
      {
        "name": "医疗器械",
        "change_pct": -1.74
      },
      {
        "name": "基因测序",
        "change_pct": -2.07
      },
      {
        "name": "PCB板",
        "change_pct": 0.92
      },
      {
        "name": "医药",
        "change_pct": -0.95
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.92
      },
      {
        "name": "化学原料药",
        "change_pct": -0.59
      },
      {
        "name": "食品安全",
        "change_pct": -2.95
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.89
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 1.38
      },
      {
        "name": "异丙醇",
        "change_pct": 1.72
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.55
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.07
      }
    ]
  },
  {
    "code": "600851",
    "name": "海欣股份",
    "hot_rank": 85,
    "hot_rank_chg": -46,
    "stock_cnt": 5840,
    "price": "10.69",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "7891423300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -1.94
      },
      {
        "name": "医药",
        "change_pct": -0.95
      },
      {
        "name": "化学原料药",
        "change_pct": -0.59
      },
      {
        "name": "参股基金",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002195",
    "name": "岩山科技",
    "hot_rank": 93,
    "hot_rank_chg": 489,
    "stock_cnt": 5840,
    "price": "7.06",
    "change": "0.28",
    "market_id": "33",
    "circulate_market_value": "39647784000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": -3.07
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.82
      },
      {
        "name": "人工智能",
        "change_pct": -2.43
      },
      {
        "name": "网络安全",
        "change_pct": -2.83
      },
      {
        "name": "游戏",
        "change_pct": -2.25
      },
      {
        "name": "大数据",
        "change_pct": -2.78
      },
      {
        "name": "脑科学",
        "change_pct": -0.83
      },
      {
        "name": "百度概念股",
        "change_pct": -2.31
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.43
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.28
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.4
      },
      {
        "name": "自动刹车",
        "change_pct": -2.19
      },
      {
        "name": "人工智能大模型",
        "change_pct": -2.31
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.94
      },
      {
        "name": "AI医疗",
        "change_pct": -1.62
      },
      {
        "name": "区块链",
        "change_pct": -3.14
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600584", "name": "长电科技", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5840, "price": "94.70", "change": "10.00", "market_id": "17", "circulate_market_value": "169457560000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "先进封装"}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5840, "price": "6.90", "change": "1.92", "market_id": "33", "circulate_market_value": "244033230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.38}, {"name": "手机产业链", "change_pct": -1.1}, {"name": "超高清视频", "change_pct": -2.47}, {"name": "苹果产业链", "change_pct": -0.82}, {"name": "半导体", "change_pct": 0.83}, {"name": "人工智能", "change_pct": -2.34}, {"name": "互联网医疗", "change_pct": -2.49}, {"name": "VR&AR", "change_pct": -1.55}, {"name": "OLED", "change_pct": -1.01}, {"name": "京津冀", "change_pct": -2.71}, {"name": "物联网", "change_pct": -2.5}, {"name": "指纹识别", "change_pct": -1.93}, {"name": "汽车零部件", "change_pct": -2.21}, {"name": "白马股", "change_pct": -0.54}, {"name": "智能制造", "change_pct": -2.13}, {"name": "小米概念股", "change_pct": -1.22}, {"name": "国产芯片", "change_pct": 0.23}, {"name": "液晶面板/LCD", "change_pct": -1.01}, {"name": "全息概念", "change_pct": -2.17}, {"name": "理想汽车概念股", "change_pct": -1.18}, {"name": "MicroLED", "change_pct": -1.22}, {"name": "钙钛矿电池", "change_pct": -2.0}, {"name": "智能手表", "change_pct": -1.54}, {"name": "MiniLED", "change_pct": -1.45}, {"name": "传感器", "change_pct": -0.89}, {"name": "大硅片", "change_pct": 0.69}, {"name": "AI PC", "change_pct": -1.51}, {"name": "华为产业链", "change_pct": -2.02}, {"name": "回购", "change_pct": -1.05}, {"name": "智能眼镜/MR头显", "change_pct": -1.33}, {"name": "玻璃基板封装", "change_pct": -0.85}]}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 19, "stock_cnt": 5840, "price": "23.01", "change": "9.99", "market_id": "17", "circulate_market_value": "48126386000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片封测"}, {"code": "600703", "name": "三安光电", "hot_rank": 4, "hot_rank_chg": 14, "stock_cnt": 5840, "price": "21.81", "change": "9.98", "market_id": "17", "circulate_market_value": "108810498000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "CPO"}, {"code": "002185", "name": "华天科技", "hot_rank": 5, "hot_rank_chg": 30, "stock_cnt": 5840, "price": "20.44", "change": "4.61", "market_id": "33", "circulate_market_value": "67915002000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 6, "hot_rank_chg": 60, "stock_cnt": 5840, "price": "68.74", "change": "10.00", "market_id": "17", "circulate_market_value": "100497523000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片"}, {"code": "002354", "name": "天娱数科", "hot_rank": 7, "hot_rank_chg": 42, "stock_cnt": 5840, "price": "8.92", "change": "9.99", "market_id": "33", "circulate_market_value": "14501189000.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.88}, {"name": "电竞", "change_pct": -1.52}, {"name": "手游", "change_pct": -1.24}, {"name": "强势人气股", "change_pct": -1.59}, {"name": "人工智能", "change_pct": -2.34}, {"name": "游戏", "change_pct": -2.18}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.64}, {"name": "腾讯概念股", "change_pct": -2.18}, {"name": "快手概念股", "change_pct": -2.09}, {"name": "元宇宙", "change_pct": -2.29}, {"name": "虚拟数字人", "change_pct": -2.82}, {"name": "东数西算/算力", "change_pct": -1.2}, {"name": "web3.0", "change_pct": -2.78}, {"name": "AIGC概念", "change_pct": -2.05}, {"name": "数据要素", "change_pct": -3.02}, {"name": "字节跳动概念股", "change_pct": -2.32}, {"name": "AI营销", "change_pct": -2.67}, {"name": "ChatGPT", "change_pct": -1.27}, {"name": "智能眼镜/MR头显", "change_pct": -1.33}, {"name": "人工智能大模型", "change_pct": -2.2}, {"name": "人形机器人", "change_pct": -1.61}, {"name": "短剧/互动影游", "change_pct": -2.88}, {"name": "多模态", "change_pct": -2.03}, {"name": "Sora/AI视频", "change_pct": -2.2}, {"name": "IP经济/谷子经济", "change_pct": -3.15}, {"name": "小红书概念股", "change_pct": -2.56}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 8, "hot_rank_chg": 32, "stock_cnt": 5840, "price": "64.82", "change": "9.99", "market_id": "17", "circulate_market_value": "259483320000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB概念"}, {"code": "600172", "name": "黄河旋风", "hot_rank": 9, "hot_rank_chg": -7, "stock_cnt": 5840, "price": "16.45", "change": "-3.07", "market_id": "17", "circulate_market_value": "20968882000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5840, "price": "115.10", "change": "-1.88", "market_id": "17", "circulate_market_value": "281464800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5840, "price": "61.31", "change": "-0.57", "market_id": "17", "circulate_market_value": "209486850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5840, "price": "50.04", "change": "6.38", "market_id": "17", "circulate_market_value": "83270155000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 13, "hot_rank_chg": 2, "stock_cnt": 5840, "price": "8.11", "change": "-2.76", "market_id": "17", "circulate_market_value": "100532283000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.77}, {"name": "核电", "change_pct": -2.33}, {"name": "强势人气股", "change_pct": -1.59}, {"name": "电力体制改革", "change_pct": -2.92}, {"name": "水电", "change_pct": -2.93}, {"name": "火电", "change_pct": -2.48}, {"name": "光伏", "change_pct": -1.62}, {"name": "风电", "change_pct": -1.73}, {"name": "国企改革", "change_pct": -2.27}, {"name": "算电协同", "change_pct": -2.07}]}, {"code": "000066", "name": "中国长城", "hot_rank": 14, "hot_rank_chg": 115, "stock_cnt": 5840, "price": "18.50", "change": "4.11", "market_id": "33", "circulate_market_value": "59673135000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 15, "hot_rank_chg": 55, "stock_cnt": 5840, "price": "37.05", "change": "10.01", "market_id": "33", "circulate_market_value": "43588172000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "光纤光缆"}, {"code": "600206", "name": "有研新材", "hot_rank": 16, "hot_rank_chg": -6, "stock_cnt": 5840, "price": "49.95", "change": "3.14", "market_id": "17", "circulate_market_value": "42217615000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 17, "hot_rank_chg": 83, "stock_cnt": 5840, "price": "11.33", "change": "9.26", "market_id": "17", "circulate_market_value": "33699739000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.41}, {"name": "禽流感", "change_pct": -1.78}, {"name": "铜箔/覆铜板", "change_pct": 2.29}, {"name": "农药", "change_pct": -1.22}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": -2.27}, {"name": "参股基金", "change_pct": -1.08}, {"name": "PET复合铜箔", "change_pct": 0.13}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 18, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "25.51", "change": "10.00", "market_id": "33", "circulate_market_value": "11539162800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 19, "hot_rank_chg": 12, "stock_cnt": 5840, "price": "70.93", "change": "1.03", "market_id": "33", "circulate_market_value": "82066940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 20, "hot_rank_chg": 61, "stock_cnt": 5840, "price": "72.17", "change": "5.53", "market_id": "33", "circulate_market_value": "109560050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 21, "hot_rank_chg": 11, "stock_cnt": 5840, "price": "43.33", "change": "3.71", "market_id": "33", "circulate_market_value": "46764564000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 22, "hot_rank_chg": 36, "stock_cnt": 5840, "price": "48.10", "change": "5.25", "market_id": "33", "circulate_market_value": "75716090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600909", "name": "华安证券", "hot_rank": 23, "hot_rank_chg": 48, "stock_cnt": 5840, "price": "11.51", "change": "10.04", "market_id": "17", "circulate_market_value": "57828649000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -1.35}, {"name": "期货概念", "change_pct": -3.09}, {"name": "券商", "change_pct": -2.05}, {"name": "安徽国企改革", "change_pct": -1.65}, {"name": "大金融", "change_pct": -2.15}, {"name": "参股基金", "change_pct": -1.08}, {"name": "国企改革", "change_pct": -2.27}]}, {"code": "688797", "name": "臻宝科技", "hot_rank": 24, "hot_rank_chg": 294, "stock_cnt": 5840, "price": "435.00", "change": "876.23", "market_id": "17", "circulate_market_value": "12699115600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 25, "hot_rank_chg": 191, "stock_cnt": 5840, "price": "44.19", "change": "15.32", "market_id": "33", "circulate_market_value": "61947772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 26, "hot_rank_chg": -9, "stock_cnt": 5840, "price": "19.92", "change": "2.10", "market_id": "33", "circulate_market_value": "15113562000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 27, "hot_rank_chg": -14, "stock_cnt": 5840, "price": "213.29", "change": "5.63", "market_id": "17", "circulate_market_value": "55035432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 28, "hot_rank_chg": 8, "stock_cnt": 5840, "price": "74.54", "change": "0.59", "market_id": "17", "circulate_market_value": "1479178600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 29, "hot_rank_chg": 33, "stock_cnt": 5840, "price": "183.24", "change": "6.61", "market_id": "33", "circulate_market_value": "151842490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "174.89", "change": "4.18", "market_id": "17", "circulate_market_value": "418774380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 31, "hot_rank_chg": -2, "stock_cnt": 5840, "price": "663.30", "change": "3.57", "market_id": "17", "circulate_market_value": "443778370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 32, "hot_rank_chg": -27, "stock_cnt": 5840, "price": "146.80", "change": "1.17", "market_id": "33", "circulate_market_value": "140447580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 33, "hot_rank_chg": -6, "stock_cnt": 5840, "price": "121.86", "change": "8.90", "market_id": "33", "circulate_market_value": "79578921000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 34, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "51.01", "change": "4.53", "market_id": "17", "circulate_market_value": "42277657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 35, "hot_rank_chg": -21, "stock_cnt": 5840, "price": "81.33", "change": "-0.21", "market_id": "33", "circulate_market_value": "91917552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 36, "hot_rank_chg": 12, "stock_cnt": 5840, "price": "50.34", "change": "3.79", "market_id": "33", "circulate_market_value": "76412618000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 37, "hot_rank_chg": 296, "stock_cnt": 5840, "price": "18.00", "change": "5.02", "market_id": "33", "circulate_market_value": "29219843000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 38, "hot_rank_chg": 6, "stock_cnt": 5840, "price": "99.75", "change": "-2.68", "market_id": "33", "circulate_market_value": "144929300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 39, "hot_rank_chg": -23, "stock_cnt": 5840, "price": "13.44", "change": "-1.47", "market_id": "17", "circulate_market_value": "48218281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 40, "hot_rank_chg": 40, "stock_cnt": 5840, "price": "37.73", "change": "4.57", "market_id": "17", "circulate_market_value": "83736179000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002083", "name": "孚日股份", "hot_rank": 41, "hot_rank_chg": 150, "stock_cnt": 5840, "price": "12.09", "change": "4.67", "market_id": "33", "circulate_market_value": "11444865700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -1.79}, {"name": "锂电池", "change_pct": -0.97}, {"name": "优化生育（三孩）", "change_pct": -2.33}, {"name": "举牌", "change_pct": -2.31}, {"name": "纺织服装", "change_pct": -1.94}, {"name": "山东国企改革", "change_pct": -1.8}, {"name": "教育", "change_pct": -3.05}, {"name": "外贸受益概念", "change_pct": -2.47}, {"name": "新能源汽车", "change_pct": -1.85}, {"name": "抗菌面料", "change_pct": -2.18}, {"name": "国企改革", "change_pct": -2.27}, {"name": "新冠病毒防治", "change_pct": -1.55}]}, {"code": "002384", "name": "东山精密", "hot_rank": 42, "hot_rank_chg": 4, "stock_cnt": 5840, "price": "255.30", "change": "0.11", "market_id": "33", "circulate_market_value": "353927940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 43, "hot_rank_chg": 132, "stock_cnt": 5840, "price": "262.21", "change": "10.00", "market_id": "17", "circulate_market_value": "72262027000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "CPO/NPO"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 44, "hot_rank_chg": -41, "stock_cnt": 5840, "price": "560.00", "change": "-1.85", "market_id": "17", "circulate_market_value": "227549460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 45, "hot_rank_chg": 5, "stock_cnt": 5840, "price": "14.83", "change": "-3.89", "market_id": "17", "circulate_market_value": "25750085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 46, "hot_rank_chg": -8, "stock_cnt": 5840, "price": "37.61", "change": "-1.67", "market_id": "33", "circulate_market_value": "29426238000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 47, "hot_rank_chg": 73, "stock_cnt": 5840, "price": "20.02", "change": "1.57", "market_id": "33", "circulate_market_value": "30561400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 48, "hot_rank_chg": 45, "stock_cnt": 5840, "price": "20.24", "change": "-3.25", "market_id": "33", "circulate_market_value": "270003640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 49, "hot_rank_chg": 172, "stock_cnt": 5840, "price": "116.11", "change": "9.22", "market_id": "17", "circulate_market_value": "287172570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 50, "hot_rank_chg": -24, "stock_cnt": 5840, "price": "19.00", "change": "1.77", "market_id": "33", "circulate_market_value": "13154831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 51, "hot_rank_chg": 2, "stock_cnt": 5840, "price": "18.59", "change": "-4.57", "market_id": "17", "circulate_market_value": "324771660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000811", "name": "冰轮环境", "hot_rank": 52, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "45.69", "change": "1.60", "market_id": "33", "circulate_market_value": "44702899000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 53, "hot_rank_chg": 15, "stock_cnt": 5840, "price": "14.44", "change": "0.49", "market_id": "17", "circulate_market_value": "25835157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 54, "hot_rank_chg": 18, "stock_cnt": 5840, "price": "141.06", "change": "1.85", "market_id": "33", "circulate_market_value": "271231650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 55, "hot_rank_chg": 43, "stock_cnt": 5840, "price": "3.88", "change": "-3.48", "market_id": "33", "circulate_market_value": "7773103500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -1.9}, {"name": "数字孪生", "change_pct": -2.62}, {"name": "深圳本地股", "change_pct": -2.87}, {"name": "强势人气股", "change_pct": -1.59}, {"name": "人工智能", "change_pct": -2.34}, {"name": "互联网医疗", "change_pct": -2.49}, {"name": "云计算数据中心", "change_pct": -2.03}, {"name": "高铁轨交", "change_pct": -2.37}, {"name": "人脸识别", "change_pct": -2.39}, {"name": "智慧停车", "change_pct": -3.0}, {"name": "物联网", "change_pct": -2.5}, {"name": "大数据", "change_pct": -2.69}, {"name": "智慧城市", "change_pct": -2.77}, {"name": "雄安新区", "change_pct": -3.19}, {"name": "机器人", "change_pct": -2.05}, {"name": "数字经济", "change_pct": -2.64}, {"name": "阿里巴巴概念股", "change_pct": -2.32}, {"name": "腾讯概念股", "change_pct": -2.18}, {"name": "建筑节能", "change_pct": -3.61}, {"name": "旧改", "change_pct": -2.85}, {"name": "医疗信息化", "change_pct": -2.6}, {"name": "新冠病毒防治", "change_pct": -1.55}, {"name": "华为产业链", "change_pct": -2.02}, {"name": "医疗耗材供应链SPD", "change_pct": -2.44}, {"name": "区块链", "change_pct": -3.14}]}, {"code": "600392", "name": "盛和资源", "hot_rank": 56, "hot_rank_chg": -9, "stock_cnt": 5840, "price": "30.33", "change": "-2.22", "market_id": "17", "circulate_market_value": "53180758000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 57, "hot_rank_chg": 33, "stock_cnt": 5840, "price": "54.73", "change": "1.28", "market_id": "33", "circulate_market_value": "82588173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 58, "hot_rank_chg": 33, "stock_cnt": 5840, "price": "91.53", "change": "0.74", "market_id": "33", "circulate_market_value": "78067996000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605589", "name": "圣泉集团", "hot_rank": 59, "hot_rank_chg": 5, "stock_cnt": 5840, "price": "66.88", "change": "1.10", "market_id": "17", "circulate_market_value": "56591981000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 60, "hot_rank_chg": -40, "stock_cnt": 5840, "price": "26.30", "change": "7.57", "market_id": "17", "circulate_market_value": "26026045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 61, "hot_rank_chg": 99, "stock_cnt": 5840, "price": "51.95", "change": "-1.59", "market_id": "17", "circulate_market_value": "35930791000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 62, "hot_rank_chg": 3, "stock_cnt": 5840, "price": "80.15", "change": "-3.14", "market_id": "17", "circulate_market_value": "101920460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 63, "hot_rank_chg": 20, "stock_cnt": 5840, "price": "15.44", "change": "-1.41", "market_id": "17", "circulate_market_value": "22738593000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 64, "hot_rank_chg": -12, "stock_cnt": 5840, "price": "71.95", "change": "3.73", "market_id": "33", "circulate_market_value": "525344940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 65, "hot_rank_chg": 11, "stock_cnt": 5840, "price": "113.60", "change": "4.66", "market_id": "33", "circulate_market_value": "82354663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 66, "hot_rank_chg": 50, "stock_cnt": 5840, "price": "51.85", "change": "-2.74", "market_id": "33", "circulate_market_value": "257728640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 67, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "67.27", "change": "1.40", "market_id": "17", "circulate_market_value": "72151472000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 68, "hot_rank_chg": 124, "stock_cnt": 5840, "price": "22.05", "change": "5.00", "market_id": "17", "circulate_market_value": "13855340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000630", "name": "铜陵有色", "hot_rank": 69, "hot_rank_chg": 8, "stock_cnt": 5840, "price": "6.71", "change": "-6.02", "market_id": "33", "circulate_market_value": "74769460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -1.68}, {"name": "锂电池", "change_pct": -1.08}, {"name": "安徽国企改革", "change_pct": -1.65}, {"name": "有色 · 铜", "change_pct": -1.81}, {"name": "铜箔/覆铜板", "change_pct": 2.27}, {"name": "有色金属", "change_pct": -1.85}, {"name": "新能源汽车", "change_pct": -1.92}, {"name": "人民币升值受益", "change_pct": -2.12}, {"name": "硫酸", "change_pct": -0.08}, {"name": "国企改革", "change_pct": -2.3}, {"name": "白银", "change_pct": -0.98}, {"name": "有色 · 镍", "change_pct": -1.12}]}, {"code": "002585", "name": "双星新材", "hot_rank": 70, "hot_rank_chg": 102, "stock_cnt": 5840, "price": "13.67", "change": "0.15", "market_id": "33", "circulate_market_value": "12121964600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 71, "hot_rank_chg": -48, "stock_cnt": 5840, "price": "68.20", "change": "4.73", "market_id": "17", "circulate_market_value": "26094991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603678", "name": "火炬电子", "hot_rank": 72, "hot_rank_chg": 279, "stock_cnt": 5840, "price": "68.30", "change": "10.00", "market_id": "17", "circulate_market_value": "32481201000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC涨价"}, {"code": "002584", "name": "西陇科学", "hot_rank": 73, "hot_rank_chg": -45, "stock_cnt": 5840, "price": "11.02", "change": "9.98", "market_id": "33", "circulate_market_value": "5162060300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB用化学试剂", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.95}, {"name": "医疗器械", "change_pct": -1.74}, {"name": "基因测序", "change_pct": -2.07}, {"name": "PCB板", "change_pct": 0.92}, {"name": "医药", "change_pct": -0.95}, {"name": "新能源汽车", "change_pct": -1.92}, {"name": "化学原料药", "change_pct": -0.59}, {"name": "食品安全", "change_pct": -2.95}, {"name": "辅助生殖", "change_pct": -1.89}, {"name": "光刻机（胶）", "change_pct": 1.38}, {"name": "异丙醇", "change_pct": 1.72}, {"name": "新冠病毒防治", "change_pct": -1.55}, {"name": "磷酸铁锂", "change_pct": -1.07}]}, {"code": "300502", "name": "新易盛", "hot_rank": 74, "hot_rank_chg": 54, "stock_cnt": 5840, "price": "557.36", "change": "1.05", "market_id": "33", "circulate_market_value": "699616830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000070", "name": "特发信息", "hot_rank": 75, "hot_rank_chg": -64, "stock_cnt": 5840, "price": "24.56", "change": "-2.07", "market_id": "33", "circulate_market_value": "21041216000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 76, "hot_rank_chg": -31, "stock_cnt": 5840, "price": "1313.50", "change": "0.27", "market_id": "33", "circulate_market_value": "1457905900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002051", "name": "中工国际", "hot_rank": 77, "hot_rank_chg": 196, "stock_cnt": 5840, "price": "13.63", "change": "10.01", "market_id": "33", "circulate_market_value": "16715995000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中东市场"}, {"code": "600160", "name": "巨化股份", "hot_rank": 78, "hot_rank_chg": 24, "stock_cnt": 5840, "price": "49.11", "change": "4.82", "market_id": "17", "circulate_market_value": "132584530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601872", "name": "招商轮船", "hot_rank": 79, "hot_rank_chg": 132, "stock_cnt": 5840, "price": "21.91", "change": "9.99", "market_id": "17", "circulate_market_value": "176913140000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "提前终止减持"}, {"code": "603002", "name": "宏昌电子", "hot_rank": 80, "hot_rank_chg": 7, "stock_cnt": 5840, "price": "23.00", "change": "-1.50", "market_id": "17", "circulate_market_value": "26083806000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 81, "hot_rank_chg": 28, "stock_cnt": 5840, "price": "48.27", "change": "2.11", "market_id": "17", "circulate_market_value": "31499893000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 82, "hot_rank_chg": 40, "stock_cnt": 5840, "price": "169.93", "change": "8.14", "market_id": "33", "circulate_market_value": "54187090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 83, "hot_rank_chg": 18, "stock_cnt": 5840, "price": "72.73", "change": "1.29", "market_id": "17", "circulate_market_value": "73521115000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 84, "hot_rank_chg": -24, "stock_cnt": 5840, "price": "51.81", "change": "-7.48", "market_id": "17", "circulate_market_value": "16681431000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600851", "name": "海欣股份", "hot_rank": 85, "hot_rank_chg": -46, "stock_cnt": 5840, "price": "10.69", "change": "9.98", "market_id": "17", "circulate_market_value": "7891423300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "创新药", "xgb_concepts": [{"name": "纺织服装", "change_pct": -1.94}, {"name": "医药", "change_pct": -0.95}, {"name": "化学原料药", "change_pct": -0.59}, {"name": "参股基金", "change_pct": -0.97}]}, {"code": "603773", "name": "沃格光电", "hot_rank": 86, "hot_rank_chg": -30, "stock_cnt": 5840, "price": "163.91", "change": "-4.79", "market_id": "17", "circulate_market_value": "36827075000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 87, "hot_rank_chg": -14, "stock_cnt": 5840, "price": "266.65", "change": "-0.09", "market_id": "33", "circulate_market_value": "208119890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 88, "hot_rank_chg": 132, "stock_cnt": 5840, "price": "50.71", "change": "3.53", "market_id": "17", "circulate_market_value": "323479210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300085", "name": "银之杰", "hot_rank": 89, "hot_rank_chg": -80, "stock_cnt": 5840, "price": "37.18", "change": "-4.25", "market_id": "33", "circulate_market_value": "24235318000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603936", "name": "博敏电子", "hot_rank": 90, "hot_rank_chg": 227, "stock_cnt": 5840, "price": "26.89", "change": "-4.00", "market_id": "17", "circulate_market_value": "16951402000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 91, "hot_rank_chg": 537, "stock_cnt": 5840, "price": "18.50", "change": "6.14", "market_id": "33", "circulate_market_value": "7786003100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002171", "name": "楚江新材", "hot_rank": 92, "hot_rank_chg": -23, "stock_cnt": 5840, "price": "14.81", "change": "0.07", "market_id": "33", "circulate_market_value": "23899511000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002195", "name": "岩山科技", "hot_rank": 93, "hot_rank_chg": 489, "stock_cnt": 5840, "price": "7.06", "change": "0.28", "market_id": "33", "circulate_market_value": "39647784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "国产软件", "change_pct": -3.07}, {"name": "无人驾驶", "change_pct": -1.82}, {"name": "人工智能", "change_pct": -2.43}, {"name": "网络安全", "change_pct": -2.83}, {"name": "游戏", "change_pct": -2.25}, {"name": "大数据", "change_pct": -2.78}, {"name": "脑科学", "change_pct": -0.83}, {"name": "百度概念股", "change_pct": -2.31}, {"name": "阿里巴巴概念股", "change_pct": -2.43}, {"name": "腾讯概念股", "change_pct": -2.28}, {"name": "字节跳动概念股", "change_pct": -2.4}, {"name": "自动刹车", "change_pct": -2.19}, {"name": "人工智能大模型", "change_pct": -2.31}, {"name": "短剧/互动影游", "change_pct": -2.94}, {"name": "AI医疗", "change_pct": -1.62}, {"name": "区块链", "change_pct": -3.14}]}, {"code": "603256", "name": "宏和科技", "hot_rank": 94, "hot_rank_chg": 88, "stock_cnt": 5840, "price": "265.10", "change": "7.03", "market_id": "17", "circulate_market_value": "233409300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603407", "name": "长裕集团", "hot_rank": 95, "hot_rank_chg": -32, "stock_cnt": 5840, "price": "90.55", "change": "10.00", "market_id": "17", "circulate_market_value": "3251830900.00", "change_type": "1", "change_section": "7", "change_days": "6", "change_reason": "氧氯化锆"}, {"code": "001309", "name": "德明利", "hot_rank": 96, "hot_rank_chg": -29, "stock_cnt": 5840, "price": "805.58", "change": "6.70", "market_id": "33", "circulate_market_value": "132852089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002648", "name": "卫星化学", "hot_rank": 97, "hot_rank_chg": -76, "stock_cnt": 5840, "price": "25.62", "change": "1.75", "market_id": "33", "circulate_market_value": "86249281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 98, "hot_rank_chg": 142, "stock_cnt": 5840, "price": "17.50", "change": "-4.89", "market_id": "17", "circulate_market_value": "19199622000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600111", "name": "北方稀土", "hot_rank": 99, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "48.50", "change": "-2.88", "market_id": "17", "circulate_market_value": "175366840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 100, "hot_rank_chg": 8, "stock_cnt": 5840, "price": "18.92", "change": "-4.92", "market_id": "33", "circulate_market_value": "11038153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "300237": "[行政处罚事先告知书] 美晨科技：关于收到中国证券监督管理委员会《行政处罚事先告知书》的公告", "300366": "[行政处罚事先告知书] 创意信息：2025-36 关于收到《行政处罚事先告知书》的公告"};