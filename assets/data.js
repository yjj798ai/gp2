const UPDATE_TIME = "2026-07-09 02:30";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": 1.77,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续197天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续244天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -0.15,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "算力租赁",
    "rise": 0.04,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": -0.67,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续408天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": -0.24,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续67天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "先进封装",
    "rise": 1.4,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续37天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "玻璃基板",
    "rise": 0.31,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": -1,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "商业航天",
    "rise": -0.46,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续173天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "ST板块",
    "rise": 0.48,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续82天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光纤概念",
    "rise": -0.58,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 1,
    "etfName": "成长ETF",
    "code": "886084"
  },
  {
    "name": "中国AI 50",
    "rise": 1.4,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "人工智能ETF",
    "code": "886102"
  },
  {
    "name": "培育钻石",
    "rise": -1.07,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "液冷服务器",
    "rise": -0.55,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "机器人概念",
    "rise": -0.68,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "2026中报预增",
    "rise": -0.54,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "化工行业ETF",
    "code": "886110"
  },
  {
    "name": "国家大基金持股",
    "rise": 2.77,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "885893"
  },
  {
    "name": "猪肉",
    "rise": -0.45,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "芯片概念",
    "rise": 0.1,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续68天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "AI应用",
    "rise": -0.16,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  }
];
const THS_EVENTS = [
  {
    "title": "长鑫科技7月16日开启新股申购",
    "desc": "",
    "heat": 242630,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "有研硅",
        "code": "688432",
        "chg": 16.759652
      }
    ]
  },
  {
    "title": "倪飞：全球首款 AI 智能体手机来自努比亚，将在 2026 世界人工智能大会首次亮相",
    "desc": "",
    "heat": 117105,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "铂力特",
        "code": "688333",
        "chg": 10.654372
      }
    ]
  },
  {
    "title": "海事局发布“火箭回收作业”航警",
    "desc": "",
    "heat": 54318,
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
        "name": "铂力特",
        "code": "688333",
        "chg": 10.654372
      }
    ]
  },
  {
    "title": "银河证券：电子布价格每月提涨，高景气厚增企业业绩",
    "desc": "",
    "heat": 1813,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "金安国纪",
        "code": "002636",
        "chg": 2.817202
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "大硅片",
    "change": "+5.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+3.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+2.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+2.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+2.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+2.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+2.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+2.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+2.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+2.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+1.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+1.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+1.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+1.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "3D感应",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+1.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "算力一体机",
    "change": "+1.45%",
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
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5854,
    "price": "7.89",
    "change": "3.41",
    "market_id": "33",
    "circulate_market_value": "279046690000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.0
      },
      {
        "name": "折叠屏",
        "change_pct": 0.36
      },
      {
        "name": "手机产业链",
        "change_pct": 0.05
      },
      {
        "name": "超高清视频",
        "change_pct": 0.17
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.4
      },
      {
        "name": "半导体",
        "change_pct": 1.79
      },
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.99
      },
      {
        "name": "VR&AR",
        "change_pct": 0.33
      },
      {
        "name": "OLED",
        "change_pct": 0.47
      },
      {
        "name": "京津冀",
        "change_pct": -0.31
      },
      {
        "name": "物联网",
        "change_pct": -0.67
      },
      {
        "name": "指纹识别",
        "change_pct": 0.4
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.1
      },
      {
        "name": "白马股",
        "change_pct": -0.39
      },
      {
        "name": "智能制造",
        "change_pct": -0.66
      },
      {
        "name": "小米概念股",
        "change_pct": -0.25
      },
      {
        "name": "国产芯片",
        "change_pct": 1.26
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.21
      },
      {
        "name": "全息概念",
        "change_pct": -0.62
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.52
      },
      {
        "name": "MicroLED",
        "change_pct": 0.39
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.46
      },
      {
        "name": "智能手表",
        "change_pct": 0.19
      },
      {
        "name": "MiniLED",
        "change_pct": 0.48
      },
      {
        "name": "传感器",
        "change_pct": 0.18
      },
      {
        "name": "大硅片",
        "change_pct": 5.79
      },
      {
        "name": "AI PC",
        "change_pct": 0.55
      },
      {
        "name": "华为产业链",
        "change_pct": -0.27
      },
      {
        "name": "回购",
        "change_pct": -0.57
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.12
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 18,
    "hot_rank_chg": 18,
    "stock_cnt": 5854,
    "price": "6.80",
    "change": "-2.16",
    "market_id": "17",
    "circulate_market_value": "84293406000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.73
      },
      {
        "name": "核电",
        "change_pct": -0.94
      },
      {
        "name": "强势人气股",
        "change_pct": 0.15
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.67
      },
      {
        "name": "水电",
        "change_pct": -0.44
      },
      {
        "name": "火电",
        "change_pct": -0.61
      },
      {
        "name": "光伏",
        "change_pct": -0.54
      },
      {
        "name": "风电",
        "change_pct": -1.06
      },
      {
        "name": "国企改革",
        "change_pct": -0.63
      },
      {
        "name": "算电协同",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 19,
    "hot_rank_chg": 6,
    "stock_cnt": 5854,
    "price": "8.18",
    "change": "2.00",
    "market_id": "33",
    "circulate_market_value": "13298175100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.68
      },
      {
        "name": "电竞",
        "change_pct": 0.27
      },
      {
        "name": "手游",
        "change_pct": 1.16
      },
      {
        "name": "强势人气股",
        "change_pct": 0.15
      },
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "游戏",
        "change_pct": 1.51
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.42
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.07
      },
      {
        "name": "快手概念股",
        "change_pct": 1.1
      },
      {
        "name": "元宇宙",
        "change_pct": 0.51
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.74
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.07
      },
      {
        "name": "web3.0",
        "change_pct": 0.4
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.81
      },
      {
        "name": "数据要素",
        "change_pct": -0.23
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.84
      },
      {
        "name": "AI营销",
        "change_pct": 2.13
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.01
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.12
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.45
      },
      {
        "name": "人形机器人",
        "change_pct": -0.71
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.44
      },
      {
        "name": "多模态",
        "change_pct": 0.87
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.51
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.35
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 40,
    "hot_rank_chg": 16,
    "stock_cnt": 5854,
    "price": "4.77",
    "change": "-8.45",
    "market_id": "33",
    "circulate_market_value": "6185429000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.46
      },
      {
        "name": "创新药",
        "change_pct": 0.08
      },
      {
        "name": "央企改革",
        "change_pct": -0.73
      },
      {
        "name": "医疗器械",
        "change_pct": -0.66
      },
      {
        "name": "强势人气股",
        "change_pct": 0.15
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.99
      },
      {
        "name": "保健品",
        "change_pct": -0.72
      },
      {
        "name": "民营医院",
        "change_pct": -0.87
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.47
      },
      {
        "name": "医药",
        "change_pct": -0.2
      },
      {
        "name": "化学原料药",
        "change_pct": -0.41
      },
      {
        "name": "海南概念",
        "change_pct": -0.8
      },
      {
        "name": "脑科学",
        "change_pct": 0.2
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.57
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.78
      },
      {
        "name": "食品",
        "change_pct": -1.25
      },
      {
        "name": "国企改革",
        "change_pct": -0.63
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.94
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.46
      },
      {
        "name": "自贸区",
        "change_pct": -0.67
      },
      {
        "name": "合成生物",
        "change_pct": -0.88
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 42,
    "hot_rank_chg": 353,
    "stock_cnt": 5854,
    "price": "9.80",
    "change": "6.75",
    "market_id": "17",
    "circulate_market_value": "49237251000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.4
      },
      {
        "name": "期货概念",
        "change_pct": -1.34
      },
      {
        "name": "券商",
        "change_pct": -0.03
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.34
      },
      {
        "name": "大金融",
        "change_pct": -0.79
      },
      {
        "name": "国企改革",
        "change_pct": -0.63
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 46,
    "hot_rank_chg": 21,
    "stock_cnt": 5854,
    "price": "5.21",
    "change": "3.37",
    "market_id": "33",
    "circulate_market_value": "99677899000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.36
      },
      {
        "name": "手机产业链",
        "change_pct": 0.05
      },
      {
        "name": "超高清视频",
        "change_pct": 0.17
      },
      {
        "name": "电竞",
        "change_pct": 0.27
      },
      {
        "name": "半导体",
        "change_pct": 1.79
      },
      {
        "name": "OLED",
        "change_pct": 0.47
      },
      {
        "name": "光伏",
        "change_pct": -0.54
      },
      {
        "name": "黑色家电",
        "change_pct": -0.0
      },
      {
        "name": "家电",
        "change_pct": -0.35
      },
      {
        "name": "智能制造",
        "change_pct": -0.66
      },
      {
        "name": "工业互联网",
        "change_pct": -0.74
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.25
      },
      {
        "name": "国产芯片",
        "change_pct": 1.26
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.07
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.21
      },
      {
        "name": "MicroLED",
        "change_pct": 0.39
      },
      {
        "name": "MiniLED",
        "change_pct": 0.48
      },
      {
        "name": "华为产业链",
        "change_pct": -0.27
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 52,
    "hot_rank_chg": 29,
    "stock_cnt": 5854,
    "price": "12.00",
    "change": "-2.12",
    "market_id": "17",
    "circulate_market_value": "43052037000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -0.53
      },
      {
        "name": "OLED",
        "change_pct": 0.47
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.21
      },
      {
        "name": "国企改革",
        "change_pct": -0.63
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.06
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 54,
    "hot_rank_chg": 36,
    "stock_cnt": 5854,
    "price": "10.92",
    "change": "2.06",
    "market_id": "33",
    "circulate_market_value": "44072688000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 1.79
      },
      {
        "name": "一带一路",
        "change_pct": -0.83
      },
      {
        "name": "京津冀",
        "change_pct": -0.31
      },
      {
        "name": "光伏",
        "change_pct": -0.54
      },
      {
        "name": "碳中和",
        "change_pct": -0.64
      },
      {
        "name": "国产芯片",
        "change_pct": 1.26
      },
      {
        "name": "IGBT",
        "change_pct": 0.46
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.19
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.0
      },
      {
        "name": "大硅片",
        "change_pct": 5.79
      }
    ]
  },
  {
    "code": "002137",
    "name": "实益达",
    "hot_rank": 63,
    "hot_rank_chg": -6,
    "stock_cnt": 5854,
    "price": "11.95",
    "change": "1.96",
    "market_id": "33",
    "circulate_market_value": "4737674100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 1.79
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.84
      },
      {
        "name": "光伏",
        "change_pct": -0.54
      },
      {
        "name": "LED",
        "change_pct": 0.1
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.42
      },
      {
        "name": "无线耳机",
        "change_pct": -0.02
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.38
      },
      {
        "name": "华为产业链",
        "change_pct": -0.27
      },
      {
        "name": "微信小店",
        "change_pct": 0.26
      },
      {
        "name": "区块链",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 64,
    "hot_rank_chg": 95,
    "stock_cnt": 5854,
    "price": "11.95",
    "change": "1.79",
    "market_id": "17",
    "circulate_market_value": "17598846000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.73
      },
      {
        "name": "强势人气股",
        "change_pct": 0.15
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.67
      },
      {
        "name": "火电",
        "change_pct": -0.61
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.21
      },
      {
        "name": "风电",
        "change_pct": -1.06
      },
      {
        "name": "国企改革",
        "change_pct": -0.63
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 65,
    "hot_rank_chg": 126,
    "stock_cnt": 5854,
    "price": "12.96",
    "change": "4.01",
    "market_id": "33",
    "circulate_market_value": "45073976000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.68
      },
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "VR&AR",
        "change_pct": 0.33
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.84
      },
      {
        "name": "大数据",
        "change_pct": -0.21
      },
      {
        "name": "教育",
        "change_pct": -0.56
      },
      {
        "name": "百度概念股",
        "change_pct": 0.43
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.04
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.07
      },
      {
        "name": "传媒",
        "change_pct": 0.9
      },
      {
        "name": "快手概念股",
        "change_pct": 1.1
      },
      {
        "name": "NFT",
        "change_pct": 0.36
      },
      {
        "name": "元宇宙",
        "change_pct": 0.51
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.74
      },
      {
        "name": "web3.0",
        "change_pct": 0.4
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.81
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.84
      },
      {
        "name": "职业教育",
        "change_pct": -0.33
      },
      {
        "name": "云游戏",
        "change_pct": 1.02
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.38
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.02
      },
      {
        "name": "AI营销",
        "change_pct": 2.13
      },
      {
        "name": "词元概念/Token",
        "change_pct": 2.0
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.45
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.51
      },
      {
        "name": "智谱AI",
        "change_pct": 0.35
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.42
      },
      {
        "name": "区块链",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 87,
    "hot_rank_chg": -59,
    "stock_cnt": 5854,
    "price": "7.27",
    "change": "4.30",
    "market_id": "33",
    "circulate_market_value": "3938318900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 0.28
      },
      {
        "name": "油气管网",
        "change_pct": -0.62
      },
      {
        "name": "海工装备",
        "change_pct": -0.22
      },
      {
        "name": "举牌",
        "change_pct": -0.53
      },
      {
        "name": "天然气",
        "change_pct": -0.02
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.32
      },
      {
        "name": "风电",
        "change_pct": -1.06
      },
      {
        "name": "页岩气",
        "change_pct": -0.02
      },
      {
        "name": "国企改革",
        "change_pct": -0.63
      },
      {
        "name": "深地经济",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 98,
    "hot_rank_chg": -26,
    "stock_cnt": 5854,
    "price": "8.94",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "5213904400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 0.28
      },
      {
        "name": "一带一路",
        "change_pct": -0.83
      },
      {
        "name": "天然气",
        "change_pct": -0.02
      },
      {
        "name": "油气改革",
        "change_pct": 0.25
      },
      {
        "name": "页岩气",
        "change_pct": -0.02
      },
      {
        "name": "深地经济",
        "change_pct": 0.43
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5854, "price": "7.89", "change": "3.41", "market_id": "33", "circulate_market_value": "279046690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.0}, {"name": "折叠屏", "change_pct": 0.36}, {"name": "手机产业链", "change_pct": 0.05}, {"name": "超高清视频", "change_pct": 0.17}, {"name": "苹果产业链", "change_pct": -0.4}, {"name": "半导体", "change_pct": 1.79}, {"name": "人工智能", "change_pct": 0.02}, {"name": "互联网医疗", "change_pct": -0.99}, {"name": "VR&AR", "change_pct": 0.33}, {"name": "OLED", "change_pct": 0.47}, {"name": "京津冀", "change_pct": -0.31}, {"name": "物联网", "change_pct": -0.67}, {"name": "指纹识别", "change_pct": 0.4}, {"name": "汽车零部件", "change_pct": -1.1}, {"name": "白马股", "change_pct": -0.39}, {"name": "智能制造", "change_pct": -0.66}, {"name": "小米概念股", "change_pct": -0.25}, {"name": "国产芯片", "change_pct": 1.26}, {"name": "液晶面板/LCD", "change_pct": 0.21}, {"name": "全息概念", "change_pct": -0.62}, {"name": "理想汽车概念股", "change_pct": -0.52}, {"name": "MicroLED", "change_pct": 0.39}, {"name": "钙钛矿电池", "change_pct": 0.46}, {"name": "智能手表", "change_pct": 0.19}, {"name": "MiniLED", "change_pct": 0.48}, {"name": "传感器", "change_pct": 0.18}, {"name": "大硅片", "change_pct": 5.79}, {"name": "AI PC", "change_pct": 0.55}, {"name": "华为产业链", "change_pct": -0.27}, {"name": "回购", "change_pct": -0.57}, {"name": "智能眼镜/MR头显", "change_pct": 0.12}, {"name": "玻璃基板封装", "change_pct": 1.06}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5854, "price": "85.99", "change": "10.00", "market_id": "33", "circulate_market_value": "126132867000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增"}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 5, "stock_cnt": 5854, "price": "25.24", "change": "5.70", "market_id": "17", "circulate_market_value": "52790525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 4, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "23.73", "change": "10.01", "market_id": "33", "circulate_market_value": "78846526000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "先进封装"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 5, "hot_rank_chg": 7, "stock_cnt": 5854, "price": "41.40", "change": "-6.12", "market_id": "33", "circulate_market_value": "32391552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": 15, "stock_cnt": 5854, "price": "640.19", "change": "6.15", "market_id": "17", "circulate_market_value": "427968540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5854, "price": "99.98", "change": "6.25", "market_id": "17", "circulate_market_value": "178905670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 8, "hot_rank_chg": 30, "stock_cnt": 5854, "price": "55.38", "change": "8.33", "market_id": "33", "circulate_market_value": "87192478000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 9, "hot_rank_chg": 15, "stock_cnt": 5854, "price": "17.50", "change": "-0.51", "market_id": "17", "circulate_market_value": "22334476000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "34.99", "change": "4.02", "market_id": "33", "circulate_market_value": "100016741000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 11, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "58.64", "change": "8.63", "market_id": "17", "circulate_market_value": "49641887000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5854, "price": "240.18", "change": "1.10", "market_id": "33", "circulate_market_value": "332966750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 13, "hot_rank_chg": -4, "stock_cnt": 5854, "price": "76.10", "change": "-1.12", "market_id": "17", "circulate_market_value": "186722480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "19.23", "change": "-0.47", "market_id": "33", "circulate_market_value": "61995837000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5854, "price": "14.72", "change": "-8.79", "market_id": "33", "circulate_market_value": "15649208000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 16, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "44.55", "change": "-0.62", "market_id": "17", "circulate_market_value": "152046910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 17, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "119.05", "change": "3.19", "market_id": "17", "circulate_market_value": "42944121000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 18, "hot_rank_chg": 18, "stock_cnt": 5854, "price": "6.80", "change": "-2.16", "market_id": "17", "circulate_market_value": "84293406000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.73}, {"name": "核电", "change_pct": -0.94}, {"name": "强势人气股", "change_pct": 0.15}, {"name": "电力体制改革", "change_pct": -0.67}, {"name": "水电", "change_pct": -0.44}, {"name": "火电", "change_pct": -0.61}, {"name": "光伏", "change_pct": -0.54}, {"name": "风电", "change_pct": -1.06}, {"name": "国企改革", "change_pct": -0.63}, {"name": "算电协同", "change_pct": -1.03}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 19, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "8.18", "change": "2.00", "market_id": "33", "circulate_market_value": "13298175100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.68}, {"name": "电竞", "change_pct": 0.27}, {"name": "手游", "change_pct": 1.16}, {"name": "强势人气股", "change_pct": 0.15}, {"name": "人工智能", "change_pct": 0.02}, {"name": "游戏", "change_pct": 1.51}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.42}, {"name": "腾讯概念股", "change_pct": 0.07}, {"name": "快手概念股", "change_pct": 1.1}, {"name": "元宇宙", "change_pct": 0.51}, {"name": "虚拟数字人", "change_pct": 0.74}, {"name": "东数西算/算力", "change_pct": 0.07}, {"name": "web3.0", "change_pct": 0.4}, {"name": "AIGC概念", "change_pct": 0.81}, {"name": "数据要素", "change_pct": -0.23}, {"name": "字节跳动概念股", "change_pct": 0.84}, {"name": "AI营销", "change_pct": 2.13}, {"name": "ChatGPT", "change_pct": 1.01}, {"name": "智能眼镜/MR头显", "change_pct": 0.12}, {"name": "人工智能大模型", "change_pct": 0.45}, {"name": "人形机器人", "change_pct": -0.71}, {"name": "短剧/互动影游", "change_pct": 1.44}, {"name": "多模态", "change_pct": 0.87}, {"name": "Sora/AI视频", "change_pct": 0.51}, {"name": "IP经济/谷子经济", "change_pct": 0.35}, {"name": "小红书概念股", "change_pct": 1.42}]}, {"code": "603928", "name": "兴业股份", "hot_rank": 20, "hot_rank_chg": -4, "stock_cnt": 5854, "price": "17.05", "change": "4.22", "market_id": "17", "circulate_market_value": "5809003200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 22, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "41.80", "change": "-0.76", "market_id": "33", "circulate_market_value": "45092475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 23, "hot_rank_chg": -18, "stock_cnt": 5854, "price": "27.98", "change": "-3.85", "market_id": "33", "circulate_market_value": "21192475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 24, "hot_rank_chg": 337, "stock_cnt": 5854, "price": "19.12", "change": "10.01", "market_id": "33", "circulate_market_value": "15354742000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接投资长鑫科技"}, {"code": "601138", "name": "工业富联", "hot_rank": 25, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "66.60", "change": "0.89", "market_id": "17", "circulate_market_value": "1321616550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 26, "hot_rank_chg": 38, "stock_cnt": 5854, "price": "61.15", "change": "0.74", "market_id": "33", "circulate_market_value": "70786062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 27, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "51.01", "change": "6.36", "market_id": "33", "circulate_market_value": "59953275000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 28, "hot_rank_chg": 43, "stock_cnt": 5854, "price": "199.92", "change": "5.22", "market_id": "33", "circulate_market_value": "63679068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 29, "hot_rank_chg": -23, "stock_cnt": 5854, "price": "25.20", "change": "10.00", "market_id": "17", "circulate_market_value": "4609920000.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "拟收购存储公司"}, {"code": "002579", "name": "中京电子", "hot_rank": 30, "hot_rank_chg": 272, "stock_cnt": 5854, "price": "18.06", "change": "9.99", "market_id": "33", "circulate_market_value": "10536418800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "002709", "name": "天赐材料", "hot_rank": 31, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "40.14", "change": "-9.98", "market_id": "33", "circulate_market_value": "60571702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 32, "hot_rank_chg": 16, "stock_cnt": 5854, "price": "38.76", "change": "5.18", "market_id": "33", "circulate_market_value": "156191150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 33, "hot_rank_chg": 29, "stock_cnt": 5854, "price": "55.35", "change": "-1.27", "market_id": "17", "circulate_market_value": "219827340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 34, "hot_rank_chg": 18, "stock_cnt": 5854, "price": "28.70", "change": "2.61", "market_id": "17", "circulate_market_value": "9669602600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 35, "hot_rank_chg": -13, "stock_cnt": 5854, "price": "20.44", "change": "-6.71", "market_id": "17", "circulate_market_value": "8563697200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 36, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "1128.66", "change": "0.03", "market_id": "33", "circulate_market_value": "1252744630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 37, "hot_rank_chg": -17, "stock_cnt": 5854, "price": "99.20", "change": "1.07", "market_id": "17", "circulate_market_value": "145134990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 38, "hot_rank_chg": 58, "stock_cnt": 5854, "price": "46.65", "change": "-1.96", "market_id": "17", "circulate_market_value": "68202058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000070", "name": "特发信息", "hot_rank": 39, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "17.63", "change": "1.21", "market_id": "33", "circulate_market_value": "15104098000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 40, "hot_rank_chg": 16, "stock_cnt": 5854, "price": "4.77", "change": "-8.45", "market_id": "33", "circulate_market_value": "6185429000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.46}, {"name": "创新药", "change_pct": 0.08}, {"name": "央企改革", "change_pct": -0.73}, {"name": "医疗器械", "change_pct": -0.66}, {"name": "强势人气股", "change_pct": 0.15}, {"name": "互联网医疗", "change_pct": -0.99}, {"name": "保健品", "change_pct": -0.72}, {"name": "民营医院", "change_pct": -0.87}, {"name": "CAR-T疗法", "change_pct": -0.47}, {"name": "医药", "change_pct": -0.2}, {"name": "化学原料药", "change_pct": -0.41}, {"name": "海南概念", "change_pct": -0.8}, {"name": "脑科学", "change_pct": 0.2}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.57}, {"name": "海南自由贸易港", "change_pct": -0.78}, {"name": "食品", "change_pct": -1.25}, {"name": "国企改革", "change_pct": -0.63}, {"name": "医疗信息化", "change_pct": -0.94}, {"name": "新冠病毒防治", "change_pct": -0.46}, {"name": "自贸区", "change_pct": -0.67}, {"name": "合成生物", "change_pct": -0.88}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 41, "hot_rank_chg": -27, "stock_cnt": 5854, "price": "31.28", "change": "1.39", "market_id": "33", "circulate_market_value": "35838718000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600909", "name": "华安证券", "hot_rank": 42, "hot_rank_chg": 353, "stock_cnt": 5854, "price": "9.80", "change": "6.75", "market_id": "17", "circulate_market_value": "49237251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.4}, {"name": "期货概念", "change_pct": -1.34}, {"name": "券商", "change_pct": -0.03}, {"name": "安徽国企改革", "change_pct": 0.34}, {"name": "大金融", "change_pct": -0.79}, {"name": "国企改革", "change_pct": -0.63}]}, {"code": "001399", "name": "惠科股份", "hot_rank": 43, "hot_rank_chg": 55, "stock_cnt": 5854, "price": "36.72", "change": "3.32", "market_id": "33", "circulate_market_value": "15806105000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 44, "hot_rank_chg": 77, "stock_cnt": 5854, "price": "147.47", "change": "1.38", "market_id": "17", "circulate_market_value": "353117140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 45, "hot_rank_chg": 79, "stock_cnt": 5854, "price": "130.38", "change": "1.70", "market_id": "33", "circulate_market_value": "250696030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 46, "hot_rank_chg": 21, "stock_cnt": 5854, "price": "5.21", "change": "3.37", "market_id": "33", "circulate_market_value": "99677899000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.36}, {"name": "手机产业链", "change_pct": 0.05}, {"name": "超高清视频", "change_pct": 0.17}, {"name": "电竞", "change_pct": 0.27}, {"name": "半导体", "change_pct": 1.79}, {"name": "OLED", "change_pct": 0.47}, {"name": "光伏", "change_pct": -0.54}, {"name": "黑色家电", "change_pct": -0.0}, {"name": "家电", "change_pct": -0.35}, {"name": "智能制造", "change_pct": -0.66}, {"name": "工业互联网", "change_pct": -0.74}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.25}, {"name": "国产芯片", "change_pct": 1.26}, {"name": "腾讯概念股", "change_pct": 0.07}, {"name": "液晶面板/LCD", "change_pct": 0.21}, {"name": "MicroLED", "change_pct": 0.39}, {"name": "MiniLED", "change_pct": 0.48}, {"name": "华为产业链", "change_pct": -0.27}, {"name": "玻璃基板封装", "change_pct": 1.06}]}, {"code": "002851", "name": "麦格米特", "hot_rank": 48, "hot_rank_chg": 211, "stock_cnt": 5854, "price": "155.72", "change": "7.33", "market_id": "33", "circulate_market_value": "71358988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 49, "hot_rank_chg": 30, "stock_cnt": 5854, "price": "13.11", "change": "-4.38", "market_id": "17", "circulate_market_value": "22748222000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300390", "name": "天华新能", "hot_rank": 50, "hot_rank_chg": 35, "stock_cnt": 5854, "price": "68.98", "change": "-14.86", "market_id": "33", "circulate_market_value": "46373018000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 51, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "94.91", "change": "-4.13", "market_id": "33", "circulate_market_value": "61979611000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 52, "hot_rank_chg": 29, "stock_cnt": 5854, "price": "12.00", "change": "-2.12", "market_id": "17", "circulate_market_value": "43052037000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -0.53}, {"name": "OLED", "change_pct": 0.47}, {"name": "液晶面板/LCD", "change_pct": 0.21}, {"name": "国企改革", "change_pct": -0.63}, {"name": "玻璃基板封装", "change_pct": 1.06}, {"name": "陕西国企改革", "change_pct": -0.5}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 53, "hot_rank_chg": -16, "stock_cnt": 5854, "price": "35.33", "change": "-3.23", "market_id": "17", "circulate_market_value": "24426301000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 54, "hot_rank_chg": 36, "stock_cnt": 5854, "price": "10.92", "change": "2.06", "market_id": "33", "circulate_market_value": "44072688000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 1.79}, {"name": "一带一路", "change_pct": -0.83}, {"name": "京津冀", "change_pct": -0.31}, {"name": "光伏", "change_pct": -0.54}, {"name": "碳中和", "change_pct": -0.64}, {"name": "国产芯片", "change_pct": 1.26}, {"name": "IGBT", "change_pct": 0.46}, {"name": "颗粒硅", "change_pct": -0.19}, {"name": "异质结电池HJT", "change_pct": -0.0}, {"name": "大硅片", "change_pct": 5.79}]}, {"code": "300017", "name": "网宿科技", "hot_rank": 55, "hot_rank_chg": -38, "stock_cnt": 5854, "price": "14.96", "change": "2.05", "market_id": "33", "circulate_market_value": "35027929000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 56, "hot_rank_chg": 44, "stock_cnt": 5854, "price": "221.58", "change": "2.20", "market_id": "33", "circulate_market_value": "172942820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 57, "hot_rank_chg": -28, "stock_cnt": 5854, "price": "27.55", "change": "4.20", "market_id": "33", "circulate_market_value": "33054235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 58, "hot_rank_chg": -14, "stock_cnt": 5854, "price": "49.45", "change": "-7.17", "market_id": "33", "circulate_market_value": "72974552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002414", "name": "高德红外", "hot_rank": 59, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "13.31", "change": "10.00", "market_id": "33", "circulate_market_value": "45235531000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "600353", "name": "旭光电子", "hot_rank": 60, "hot_rank_chg": 176, "stock_cnt": 5854, "price": "40.88", "change": "10.01", "market_id": "17", "circulate_market_value": "33881800000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "氮化铝"}, {"code": "000811", "name": "冰轮环境", "hot_rank": 61, "hot_rank_chg": 134, "stock_cnt": 5854, "price": "52.74", "change": "5.27", "market_id": "33", "circulate_market_value": "51590804000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600288", "name": "大恒科技", "hot_rank": 62, "hot_rank_chg": -51, "stock_cnt": 5854, "price": "16.13", "change": "-5.79", "market_id": "17", "circulate_market_value": "7041216000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002137", "name": "实益达", "hot_rank": 63, "hot_rank_chg": -6, "stock_cnt": 5854, "price": "11.95", "change": "1.96", "market_id": "33", "circulate_market_value": "4737674100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 1.79}, {"name": "直播/短视频", "change_pct": 0.84}, {"name": "光伏", "change_pct": -0.54}, {"name": "LED", "change_pct": 0.1}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.42}, {"name": "无线耳机", "change_pct": -0.02}, {"name": "网红/MCN", "change_pct": -0.38}, {"name": "华为产业链", "change_pct": -0.27}, {"name": "微信小店", "change_pct": 0.26}, {"name": "区块链", "change_pct": -0.4}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 64, "hot_rank_chg": 95, "stock_cnt": 5854, "price": "11.95", "change": "1.79", "market_id": "17", "circulate_market_value": "17598846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.73}, {"name": "强势人气股", "change_pct": 0.15}, {"name": "电力体制改革", "change_pct": -0.67}, {"name": "火电", "change_pct": -0.61}, {"name": "氢能源/燃料电池", "change_pct": -1.21}, {"name": "风电", "change_pct": -1.06}, {"name": "国企改革", "change_pct": -0.63}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 65, "hot_rank_chg": 126, "stock_cnt": 5854, "price": "12.96", "change": "4.01", "market_id": "33", "circulate_market_value": "45073976000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.68}, {"name": "人工智能", "change_pct": 0.02}, {"name": "VR&AR", "change_pct": 0.33}, {"name": "直播/短视频", "change_pct": 0.84}, {"name": "大数据", "change_pct": -0.21}, {"name": "教育", "change_pct": -0.56}, {"name": "百度概念股", "change_pct": 0.43}, {"name": "阿里巴巴概念股", "change_pct": 0.04}, {"name": "腾讯概念股", "change_pct": 0.07}, {"name": "传媒", "change_pct": 0.9}, {"name": "快手概念股", "change_pct": 1.1}, {"name": "NFT", "change_pct": 0.36}, {"name": "元宇宙", "change_pct": 0.51}, {"name": "虚拟数字人", "change_pct": 0.74}, {"name": "web3.0", "change_pct": 0.4}, {"name": "AIGC概念", "change_pct": 0.81}, {"name": "字节跳动概念股", "change_pct": 0.84}, {"name": "职业教育", "change_pct": -0.33}, {"name": "云游戏", "change_pct": 1.02}, {"name": "网红/MCN", "change_pct": -0.38}, {"name": "5G消息/RCS", "change_pct": 0.02}, {"name": "AI营销", "change_pct": 2.13}, {"name": "词元概念/Token", "change_pct": 2.0}, {"name": "人工智能大模型", "change_pct": 0.45}, {"name": "Sora/AI视频", "change_pct": 0.51}, {"name": "智谱AI", "change_pct": 0.35}, {"name": "小红书概念股", "change_pct": 1.42}, {"name": "区块链", "change_pct": -0.4}]}, {"code": "002674", "name": "兴业科技", "hot_rank": 66, "hot_rank_chg": -40, "stock_cnt": 5854, "price": "29.75", "change": "2.06", "market_id": "33", "circulate_market_value": "8703768600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 67, "hot_rank_chg": 47, "stock_cnt": 5854, "price": "20.41", "change": "-2.99", "market_id": "33", "circulate_market_value": "68649139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 68, "hot_rank_chg": 31, "stock_cnt": 5854, "price": "68.36", "change": "4.19", "market_id": "33", "circulate_market_value": "103733034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 69, "hot_rank_chg": 77, "stock_cnt": 5854, "price": "24.62", "change": "-9.98", "market_id": "17", "circulate_market_value": "13860974000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 70, "hot_rank_chg": 32, "stock_cnt": 5854, "price": "514.64", "change": "0.56", "market_id": "33", "circulate_market_value": "645483700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 71, "hot_rank_chg": 228, "stock_cnt": 5854, "price": "52.48", "change": "17.12", "market_id": "17", "circulate_market_value": "65615842000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 72, "hot_rank_chg": 188, "stock_cnt": 5854, "price": "227.91", "change": "5.85", "market_id": "33", "circulate_market_value": "96108332000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 73, "hot_rank_chg": -12, "stock_cnt": 5854, "price": "41.98", "change": "-0.10", "market_id": "33", "circulate_market_value": "154625770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 74, "hot_rank_chg": 15, "stock_cnt": 5854, "price": "64.54", "change": "10.01", "market_id": "33", "circulate_market_value": "23783202000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "300475", "name": "香农芯创", "hot_rank": 75, "hot_rank_chg": 155, "stock_cnt": 5854, "price": "252.72", "change": "3.54", "market_id": "33", "circulate_market_value": "113733039000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 76, "hot_rank_chg": 40, "stock_cnt": 5854, "price": "46.92", "change": "1.54", "market_id": "17", "circulate_market_value": "78078251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600246", "name": "万通发展", "hot_rank": 77, "hot_rank_chg": -3, "stock_cnt": 5854, "price": "20.70", "change": "6.15", "market_id": "17", "circulate_market_value": "39131538000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 79, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "601.26", "change": "1.44", "market_id": "33", "circulate_market_value": "169466270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 80, "hot_rank_chg": -50, "stock_cnt": 5854, "price": "13.55", "change": "-6.16", "market_id": "17", "circulate_market_value": "10667595300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 81, "hot_rank_chg": 11, "stock_cnt": 5854, "price": "16.97", "change": "1.92", "market_id": "17", "circulate_market_value": "84663648000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601133", "name": "柏诚股份", "hot_rank": 82, "hot_rank_chg": 594, "stock_cnt": 5854, "price": "35.13", "change": "2.24", "market_id": "17", "circulate_market_value": "18421706000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 83, "hot_rank_chg": 70, "stock_cnt": 5854, "price": "60.56", "change": "4.47", "market_id": "17", "circulate_market_value": "46764394000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 84, "hot_rank_chg": -31, "stock_cnt": 5854, "price": "68.60", "change": "-1.71", "market_id": "17", "circulate_market_value": "28562824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000062", "name": "深圳华强", "hot_rank": 85, "hot_rank_chg": -19, "stock_cnt": 5854, "price": "31.11", "change": "-8.09", "market_id": "33", "circulate_market_value": "32517290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 86, "hot_rank_chg": 45, "stock_cnt": 5854, "price": "62.15", "change": "-0.51", "market_id": "33", "circulate_market_value": "453841600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 87, "hot_rank_chg": -59, "stock_cnt": 5854, "price": "7.27", "change": "4.30", "market_id": "33", "circulate_market_value": "3938318900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 0.28}, {"name": "油气管网", "change_pct": -0.62}, {"name": "海工装备", "change_pct": -0.22}, {"name": "举牌", "change_pct": -0.53}, {"name": "天然气", "change_pct": -0.02}, {"name": "山东国企改革", "change_pct": -0.32}, {"name": "风电", "change_pct": -1.06}, {"name": "页岩气", "change_pct": -0.02}, {"name": "国企改革", "change_pct": -0.63}, {"name": "深地经济", "change_pct": 0.43}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 88, "hot_rank_chg": 159, "stock_cnt": 5854, "price": "41.71", "change": "3.22", "market_id": "33", "circulate_market_value": "63312878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002240", "name": "盛新锂能", "hot_rank": 89, "hot_rank_chg": -14, "stock_cnt": 5854, "price": "34.54", "change": "-9.44", "market_id": "33", "circulate_market_value": "31531867000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 90, "hot_rank_chg": 5, "stock_cnt": 5854, "price": "814.46", "change": "-1.28", "market_id": "33", "circulate_market_value": "134365360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002457", "name": "青龙管业", "hot_rank": 91, "hot_rank_chg": -51, "stock_cnt": 5854, "price": "14.90", "change": "-3.75", "market_id": "33", "circulate_market_value": "4965728200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301379", "name": "天山电子", "hot_rank": 92, "hot_rank_chg": 685, "stock_cnt": 5854, "price": "35.15", "change": "14.09", "market_id": "33", "circulate_market_value": "7651661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 93, "hot_rank_chg": 36, "stock_cnt": 5854, "price": "250.03", "change": "1.77", "market_id": "33", "circulate_market_value": "272129660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001365", "name": "天海电子", "hot_rank": 94, "hot_rank_chg": -63, "stock_cnt": 5854, "price": "49.95", "change": "4.48", "market_id": "33", "circulate_market_value": "2872407000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 95, "hot_rank_chg": 126, "stock_cnt": 5854, "price": "37.40", "change": "0.65", "market_id": "33", "circulate_market_value": "52524295000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 96, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "44.51", "change": "-3.34", "market_id": "33", "circulate_market_value": "221201350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 97, "hot_rank_chg": 20, "stock_cnt": 5854, "price": "70.95", "change": "-1.62", "market_id": "33", "circulate_market_value": "80206005000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 98, "hot_rank_chg": -26, "stock_cnt": 5854, "price": "8.94", "change": "9.96", "market_id": "33", "circulate_market_value": "5213904400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 0.28}, {"name": "一带一路", "change_pct": -0.83}, {"name": "天然气", "change_pct": -0.02}, {"name": "油气改革", "change_pct": 0.25}, {"name": "页岩气", "change_pct": -0.02}, {"name": "深地经济", "change_pct": 0.43}]}, {"code": "002841", "name": "视源股份", "hot_rank": 99, "hot_rank_chg": -64, "stock_cnt": 5854, "price": "52.13", "change": "10.00", "market_id": "33", "circulate_market_value": "27177738000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报预增"}, {"code": "002636", "name": "金安国纪", "hot_rank": 100, "hot_rank_chg": 104, "stock_cnt": 5854, "price": "96.49", "change": "2.97", "market_id": "33", "circulate_market_value": "69889195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] 卓然股份：关于立案调查进展暨风险提示公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "000078": "ST/风险警示股"};