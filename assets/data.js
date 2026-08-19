const UPDATE_TIME = "2026-08-19 15:26";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -2.66,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "商业航天",
    "rise": -6.02,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续202天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -8.14,
    "rate": 0,
    "tag": "",
    "hotTag": "连续273天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人形机器人",
    "rise": -6.86,
    "rate": 0,
    "tag": "",
    "hotTag": "连续437天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "存储芯片",
    "rise": -7.62,
    "rate": 0,
    "tag": "",
    "hotTag": "连续226天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "黄金概念",
    "rise": -3.19,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "粮食概念",
    "rise": -2.23,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "培育钻石",
    "rise": -5.13,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 2,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "PCB概念",
    "rise": -6.97,
    "rate": 0,
    "tag": "",
    "hotTag": "连续96天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "算力租赁",
    "rise": -5.23,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续137天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "MLCC概念",
    "rise": -8.54,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "机器人概念",
    "rise": -5.54,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI应用",
    "rise": -4.49,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "猴痘概念",
    "rise": -2.84,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "中药ETF",
    "code": "885994"
  },
  {
    "name": "转基因",
    "rise": -1.79,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885877"
  },
  {
    "name": "高股息精选",
    "rise": -0.53,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "红利ETF",
    "code": "886072"
  },
  {
    "name": "煤化工概念",
    "rise": -1.09,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885398"
  },
  {
    "name": "猪肉",
    "rise": -3.19,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "CRO概念",
    "rise": -3.76,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 1,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "国家大基金持股",
    "rise": -7.56,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "科创芯片ETF",
    "code": "885893"
  }
];
const THS_EVENTS = [
  {
    "title": "我国首次实现火箭陆地回收！朱雀三号遥二回收成功",
    "desc": "",
    "heat": 85781,
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
        "name": "金利华电",
        "code": "300069",
        "chg": 20.01385
      }
    ]
  },
  {
    "title": "2026世界机器人大会今日启幕",
    "desc": "",
    "heat": 76750,
    "direction": "2026世界机器人大会",
    "themes": [
      "机器人概念",
      "人形机器人",
      "减速器"
    ],
    "stocks": [
      {
        "name": "N宇树-W",
        "code": "688836",
        "chg": 460.344828
      }
    ]
  },
  {
    "title": "摩根大通称明年或爆发全球粮食危机！",
    "desc": "",
    "heat": 53527,
    "direction": "转基因",
    "themes": [
      "转基因",
      "粮食概念",
      "玉米",
      "大豆",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "汉森制药",
        "code": "002412",
        "chg": 10.065359
      }
    ]
  },
  {
    "title": "公积金新规来了 住房“购、租、修、养”全链条覆盖",
    "desc": "",
    "heat": 38445,
    "direction": "公积金新政",
    "themes": [
      "房地产",
      "租售同权"
    ],
    "stocks": [
      {
        "name": "我爱我家",
        "code": "000560",
        "chg": 10.185185
      }
    ]
  },
  {
    "title": "算力网：万亿建设空间 构筑内需新增长极",
    "desc": "",
    "heat": 24040,
    "direction": "算力网",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "亿田智能",
        "code": "300911",
        "chg": 19.981998
      }
    ]
  },
  {
    "title": "宇树科技今日登陆科创板",
    "desc": "",
    "heat": 4920,
    "direction": "宇树机器人",
    "themes": [
      "宇树机器人",
      "人形机器人",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "N宇树-W",
        "code": "688836",
        "chg": 460.344828
      }
    ]
  },
  {
    "title": "工信部启动钠离子电池针刺专项摸底测评",
    "desc": "",
    "heat": 4247,
    "direction": "钠电池",
    "themes": [
      "钠离子电池"
    ],
    "stocks": [
      {
        "name": "中科电气",
        "code": "300035",
        "chg": 8.413284
      }
    ]
  },
  {
    "title": "18X硅片涨价",
    "desc": "",
    "heat": 120,
    "direction": "硅片涨价",
    "themes": [
      "半导体硅片"
    ],
    "stocks": [
      {
        "name": "扬杰科技",
        "code": "300373",
        "chg": -0.694716
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "PTA",
    "change": "+2.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "石墨电极",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+1.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+0.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+0.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+0.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+0.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "厨卫家电",
    "change": "+0.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+0.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+0.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "+0.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "-0.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "-0.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "-0.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "涤纶",
    "change": "-0.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "-0.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "-0.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "江苏自贸区",
    "change": "-0.54%",
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
    "hot_rank": 5,
    "hot_rank_chg": -3,
    "stock_cnt": 5827,
    "price": "6.01",
    "change": "-7.11",
    "market_id": "33",
    "circulate_market_value": "212556480000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -7.43
      },
      {
        "name": "手机产业链",
        "change_pct": -6.89
      },
      {
        "name": "超高清视频",
        "change_pct": -4.97
      },
      {
        "name": "苹果产业链",
        "change_pct": -7.16
      },
      {
        "name": "电竞",
        "change_pct": -3.92
      },
      {
        "name": "半导体",
        "change_pct": -7.4
      },
      {
        "name": "人工智能",
        "change_pct": -5.09
      },
      {
        "name": "互联网医疗",
        "change_pct": -3.28
      },
      {
        "name": "VR&AR",
        "change_pct": -6.45
      },
      {
        "name": "OLED",
        "change_pct": -6.02
      },
      {
        "name": "京津冀",
        "change_pct": -3.34
      },
      {
        "name": "物联网",
        "change_pct": -5.26
      },
      {
        "name": "指纹识别",
        "change_pct": -6.06
      },
      {
        "name": "汽车零部件",
        "change_pct": -5.43
      },
      {
        "name": "白马股",
        "change_pct": -1.45
      },
      {
        "name": "智能制造",
        "change_pct": -5.79
      },
      {
        "name": "小米概念股",
        "change_pct": -6.26
      },
      {
        "name": "国产芯片",
        "change_pct": -7.02
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -5.51
      },
      {
        "name": "全息概念",
        "change_pct": -4.93
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -5.39
      },
      {
        "name": "MicroLED",
        "change_pct": -6.71
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -6.05
      },
      {
        "name": "智能手表",
        "change_pct": -6.6
      },
      {
        "name": "MiniLED",
        "change_pct": -6.4
      },
      {
        "name": "传感器",
        "change_pct": -6.57
      },
      {
        "name": "大硅片",
        "change_pct": -6.88
      },
      {
        "name": "AI PC",
        "change_pct": -7.04
      },
      {
        "name": "华为产业链",
        "change_pct": -5.66
      },
      {
        "name": "回购",
        "change_pct": -3.72
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -8.96
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -6.91
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -7.35
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 8,
    "hot_rank_chg": -7,
    "stock_cnt": 5827,
    "price": "5.64",
    "change": "-10.05",
    "market_id": "33",
    "circulate_market_value": "14913533000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "装修装饰",
        "change_pct": -3.35
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.65
      },
      {
        "name": "航天",
        "change_pct": -6.5
      },
      {
        "name": "旧改",
        "change_pct": -2.59
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": 2,
    "stock_cnt": 5827,
    "price": "9.06",
    "change": "-0.66",
    "market_id": "17",
    "circulate_market_value": "22817699000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.77
      },
      {
        "name": "工业大麻",
        "change_pct": -4.73
      },
      {
        "name": "中药",
        "change_pct": -2.31
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "保健品",
        "change_pct": -1.82
      },
      {
        "name": "民营医院",
        "change_pct": -3.02
      },
      {
        "name": "医药",
        "change_pct": -2.61
      },
      {
        "name": "化学原料药",
        "change_pct": -2.25
      },
      {
        "name": "流感",
        "change_pct": -2.51
      },
      {
        "name": "振兴东北",
        "change_pct": -2.46
      },
      {
        "name": "食品",
        "change_pct": -2.91
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 15,
    "hot_rank_chg": -5,
    "stock_cnt": 5827,
    "price": "12.84",
    "change": "-1.38",
    "market_id": "17",
    "circulate_market_value": "8735304600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.66
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "雄安新区",
        "change_pct": -3.6
      },
      {
        "name": "煤化工",
        "change_pct": 0.98
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 18,
    "hot_rank_chg": 132,
    "stock_cnt": 5827,
    "price": "11.27",
    "change": "-7.01",
    "market_id": "33",
    "circulate_market_value": "9117644000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -5.06
      },
      {
        "name": "大飞机",
        "change_pct": -5.41
      },
      {
        "name": "北斗导航",
        "change_pct": -6.26
      },
      {
        "name": "高铁轨交",
        "change_pct": -3.93
      },
      {
        "name": "军民融合",
        "change_pct": -5.91
      },
      {
        "name": "磁悬浮",
        "change_pct": -3.6
      },
      {
        "name": "军工",
        "change_pct": -5.59
      },
      {
        "name": "碳纤维",
        "change_pct": -5.57
      },
      {
        "name": "无人机",
        "change_pct": -6.0
      },
      {
        "name": "航天",
        "change_pct": -6.5
      },
      {
        "name": "卫星互联网",
        "change_pct": -6.67
      },
      {
        "name": "低空经济",
        "change_pct": -5.21
      },
      {
        "name": "海洋经济",
        "change_pct": -4.89
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 19,
    "hot_rank_chg": 42,
    "stock_cnt": 5827,
    "price": "7.78",
    "change": "0.26",
    "market_id": "17",
    "circulate_market_value": "3729109400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.31
      },
      {
        "name": "医药商业",
        "change_pct": -2.9
      },
      {
        "name": "医药",
        "change_pct": -2.61
      },
      {
        "name": "流感",
        "change_pct": -2.51
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 29,
    "hot_rank_chg": 1,
    "stock_cnt": 5827,
    "price": "3.54",
    "change": "3.81",
    "market_id": "33",
    "circulate_market_value": "16537991000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -3.69
      },
      {
        "name": "股权转让",
        "change_pct": -4.15
      },
      {
        "name": "房地产",
        "change_pct": -2.37
      },
      {
        "name": "京津冀",
        "change_pct": -3.34
      },
      {
        "name": "旅游",
        "change_pct": -2.28
      },
      {
        "name": "国产芯片",
        "change_pct": -7.02
      },
      {
        "name": "内存",
        "change_pct": -8.06
      },
      {
        "name": "闪存",
        "change_pct": -8.13
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.57
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 30,
    "hot_rank_chg": 28,
    "stock_cnt": 5827,
    "price": "7.82",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "5018744800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "粮食安全",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -3.98
      },
      {
        "name": "农业种植",
        "change_pct": -2.26
      },
      {
        "name": "湖南国企改革",
        "change_pct": -3.16
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.72
      },
      {
        "name": "休闲食品",
        "change_pct": -3.96
      },
      {
        "name": "食品",
        "change_pct": -2.91
      },
      {
        "name": "食品安全",
        "change_pct": -3.97
      },
      {
        "name": "社区团购",
        "change_pct": -4.49
      },
      {
        "name": "大农业",
        "change_pct": -2.72
      },
      {
        "name": "预制菜",
        "change_pct": -3.18
      },
      {
        "name": "人造肉",
        "change_pct": -2.65
      },
      {
        "name": "国企改革",
        "change_pct": -2.78
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 33,
    "hot_rank_chg": -1,
    "stock_cnt": 5827,
    "price": "4.30",
    "change": "-9.66",
    "market_id": "33",
    "circulate_market_value": "9030661600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.31
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "维生素",
        "change_pct": -3.76
      },
      {
        "name": "基因测序",
        "change_pct": -3.72
      },
      {
        "name": "民营医院",
        "change_pct": -3.02
      },
      {
        "name": "医药",
        "change_pct": -2.61
      },
      {
        "name": "化学原料药",
        "change_pct": -2.25
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -2.73
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 37,
    "hot_rank_chg": 22,
    "stock_cnt": 5827,
    "price": "7.13",
    "change": "5.16",
    "market_id": "17",
    "circulate_market_value": "7716076500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.88
      },
      {
        "name": "农业种植",
        "change_pct": -2.26
      },
      {
        "name": "化肥",
        "change_pct": -1.49
      },
      {
        "name": "转基因",
        "change_pct": -1.52
      },
      {
        "name": "土地流转",
        "change_pct": -3.14
      },
      {
        "name": "农垦",
        "change_pct": -2.93
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.72
      },
      {
        "name": "大农业",
        "change_pct": -2.72
      },
      {
        "name": "国企改革",
        "change_pct": -2.78
      },
      {
        "name": "大豆",
        "change_pct": -1.69
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 41,
    "hot_rank_chg": 210,
    "stock_cnt": 5827,
    "price": "6.82",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "16305341000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "煤炭",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "国企改革",
        "change_pct": -2.78
      },
      {
        "name": "河南国企改革",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 42,
    "hot_rank_chg": -20,
    "stock_cnt": 5827,
    "price": "11.61",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "20771896000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -2.15
      },
      {
        "name": "纯碱",
        "change_pct": -1.41
      },
      {
        "name": "食品",
        "change_pct": -2.91
      },
      {
        "name": "土壤修复",
        "change_pct": -3.7
      },
      {
        "name": "东数西算/算力",
        "change_pct": -5.82
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -6.04
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -5.48
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 48,
    "hot_rank_chg": -2,
    "stock_cnt": 5827,
    "price": "6.03",
    "change": "-2.11",
    "market_id": "17",
    "circulate_market_value": "74748417000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.88
      },
      {
        "name": "核电",
        "change_pct": -4.51
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.28
      },
      {
        "name": "水电",
        "change_pct": -1.65
      },
      {
        "name": "火电",
        "change_pct": -1.8
      },
      {
        "name": "光伏",
        "change_pct": -5.02
      },
      {
        "name": "风电",
        "change_pct": -4.51
      },
      {
        "name": "国企改革",
        "change_pct": -2.78
      },
      {
        "name": "算电协同",
        "change_pct": -5.08
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 49,
    "hot_rank_chg": -16,
    "stock_cnt": 5827,
    "price": "12.02",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "11218525700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "新疆国企改革",
        "change_pct": -3.35
      },
      {
        "name": "新疆概念",
        "change_pct": -2.76
      },
      {
        "name": "光伏",
        "change_pct": -5.02
      },
      {
        "name": "风电",
        "change_pct": -4.51
      },
      {
        "name": "储能",
        "change_pct": -4.85
      },
      {
        "name": "国企改革",
        "change_pct": -2.78
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 52,
    "hot_rank_chg": -24,
    "stock_cnt": 5827,
    "price": "10.35",
    "change": "-4.17",
    "market_id": "17",
    "circulate_market_value": "37132382000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -4.49
      },
      {
        "name": "OLED",
        "change_pct": -6.02
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -5.51
      },
      {
        "name": "国企改革",
        "change_pct": -2.78
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -7.35
      },
      {
        "name": "陕西国企改革",
        "change_pct": -3.33
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 57,
    "hot_rank_chg": -21,
    "stock_cnt": 5827,
    "price": "6.24",
    "change": "0.16",
    "market_id": "33",
    "circulate_market_value": "5530202600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -2.26
      },
      {
        "name": "土地流转",
        "change_pct": -3.14
      },
      {
        "name": "海南概念",
        "change_pct": -3.62
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.89
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -2.34
      },
      {
        "name": "大农业",
        "change_pct": -2.72
      },
      {
        "name": "水产养殖",
        "change_pct": -3.87
      },
      {
        "name": "自贸区",
        "change_pct": -2.35
      }
    ]
  },
  {
    "code": "000735",
    "name": "罗牛山",
    "hot_rank": 59,
    "hot_rank_chg": -19,
    "stock_cnt": 5827,
    "price": "5.87",
    "change": "-5.02",
    "market_id": "33",
    "circulate_market_value": "6755768400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "养鸡",
        "change_pct": -2.01
      },
      {
        "name": "养猪",
        "change_pct": -3.13
      },
      {
        "name": "农垦",
        "change_pct": -2.93
      },
      {
        "name": "冷链",
        "change_pct": -3.66
      },
      {
        "name": "大数据",
        "change_pct": -4.98
      },
      {
        "name": "教育",
        "change_pct": -3.05
      },
      {
        "name": "海南概念",
        "change_pct": -3.62
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.89
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -2.34
      },
      {
        "name": "赛马",
        "change_pct": 0.59
      },
      {
        "name": "大农业",
        "change_pct": -2.72
      },
      {
        "name": "职业教育",
        "change_pct": -3.8
      },
      {
        "name": "自贸区",
        "change_pct": -2.35
      }
    ]
  },
  {
    "code": "002582",
    "name": "好想你",
    "hot_rank": 62,
    "hot_rank_chg": 16,
    "stock_cnt": 5827,
    "price": "10.58",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "3642054700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -2.26
      },
      {
        "name": "教育",
        "change_pct": -3.05
      },
      {
        "name": "破净股",
        "change_pct": -1.23
      },
      {
        "name": "休闲食品",
        "change_pct": -3.96
      },
      {
        "name": "食品",
        "change_pct": -2.91
      },
      {
        "name": "大农业",
        "change_pct": -2.72
      },
      {
        "name": "预制菜",
        "change_pct": -3.18
      },
      {
        "name": "人造肉",
        "change_pct": -2.65
      },
      {
        "name": "职业教育",
        "change_pct": -3.8
      },
      {
        "name": "网红/MCN",
        "change_pct": -4.38
      },
      {
        "name": "饮料",
        "change_pct": -3.51
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.57
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -4.49
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 63,
    "hot_rank_chg": 67,
    "stock_cnt": 5827,
    "price": "7.47",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4723881100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "粮食概念",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -3.94
      },
      {
        "name": "京津冀",
        "change_pct": -3.34
      },
      {
        "name": "调味品",
        "change_pct": -2.15
      },
      {
        "name": "海南概念",
        "change_pct": -3.62
      },
      {
        "name": "休闲食品",
        "change_pct": -3.96
      },
      {
        "name": "食品",
        "change_pct": -2.91
      },
      {
        "name": "人造肉",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 73,
    "hot_rank_chg": -7,
    "stock_cnt": 5827,
    "price": "4.63",
    "change": "-8.50",
    "market_id": "33",
    "circulate_market_value": "27107717000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -4.06
      },
      {
        "name": "人工智能",
        "change_pct": -5.09
      },
      {
        "name": "水利",
        "change_pct": -3.8
      },
      {
        "name": "直播/短视频",
        "change_pct": -4.87
      },
      {
        "name": "大数据",
        "change_pct": -4.98
      },
      {
        "name": "园林",
        "change_pct": -5.2
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -6.26
      },
      {
        "name": "数字经济",
        "change_pct": -4.61
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.06
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -5.39
      },
      {
        "name": "第三代半导体",
        "change_pct": -6.59
      },
      {
        "name": "快手概念股",
        "change_pct": -5.03
      },
      {
        "name": "IGBT",
        "change_pct": -5.0
      },
      {
        "name": "虚拟数字人",
        "change_pct": -5.0
      },
      {
        "name": "AIGC概念",
        "change_pct": -5.22
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -5.03
      },
      {
        "name": "氮化镓",
        "change_pct": -6.85
      },
      {
        "name": "AI营销",
        "change_pct": -5.0
      },
      {
        "name": "多模态",
        "change_pct": -5.34
      },
      {
        "name": "液冷服务器",
        "change_pct": -6.67
      },
      {
        "name": "小红书概念股",
        "change_pct": -4.88
      },
      {
        "name": "区块链",
        "change_pct": -4.4
      }
    ]
  },
  {
    "code": "601609",
    "name": "金田股份",
    "hot_rank": 78,
    "hot_rank_chg": 181,
    "stock_cnt": 5827,
    "price": "12.95",
    "change": "8.37",
    "market_id": "17",
    "circulate_market_value": "22385865000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "苹果产业链",
        "change_pct": -7.16
      },
      {
        "name": "特斯拉",
        "change_pct": -5.72
      },
      {
        "name": "稀土磁材",
        "change_pct": -5.63
      },
      {
        "name": "有色 · 铜",
        "change_pct": -4.2
      },
      {
        "name": "有色金属",
        "change_pct": -4.16
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.9
      },
      {
        "name": "新能源车零部件",
        "change_pct": -5.74
      },
      {
        "name": "特高压",
        "change_pct": -4.89
      },
      {
        "name": "核聚变",
        "change_pct": -5.31
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -7.35
      },
      {
        "name": "PEEK材料",
        "change_pct": -6.29
      },
      {
        "name": "液冷服务器",
        "change_pct": -6.67
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 82,
    "hot_rank_chg": 1771,
    "stock_cnt": 5827,
    "price": "2.38",
    "change": "10.19",
    "market_id": "33",
    "circulate_market_value": "5565478100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "房产经纪",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -3.64
      },
      {
        "name": "人工智能",
        "change_pct": -5.09
      },
      {
        "name": "VR&AR",
        "change_pct": -6.45
      },
      {
        "name": "京津冀",
        "change_pct": -3.34
      },
      {
        "name": "装修装饰",
        "change_pct": -3.35
      },
      {
        "name": "住房租赁",
        "change_pct": -1.56
      },
      {
        "name": "破净股",
        "change_pct": -1.23
      },
      {
        "name": "数字经济",
        "change_pct": -4.61
      },
      {
        "name": "房产经纪",
        "change_pct": 1.39
      },
      {
        "name": "物业管理",
        "change_pct": -1.21
      },
      {
        "name": "低价股",
        "change_pct": -2.64
      },
      {
        "name": "华为产业链",
        "change_pct": -5.66
      },
      {
        "name": "人工智能大模型",
        "change_pct": -4.3
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 83,
    "hot_rank_chg": -12,
    "stock_cnt": 5827,
    "price": "10.13",
    "change": "-7.83",
    "market_id": "33",
    "circulate_market_value": "4708150500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -3.2
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.6
      },
      {
        "name": "水利",
        "change_pct": -3.8
      },
      {
        "name": "大数据",
        "change_pct": -4.98
      },
      {
        "name": "海绵城市",
        "change_pct": -2.57
      },
      {
        "name": "风电",
        "change_pct": -4.51
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.72
      },
      {
        "name": "数字经济",
        "change_pct": -4.61
      },
      {
        "name": "大基建",
        "change_pct": -2.49
      },
      {
        "name": "东数西算/算力",
        "change_pct": -5.82
      },
      {
        "name": "新型城镇化",
        "change_pct": -3.48
      },
      {
        "name": "国企改革",
        "change_pct": -2.78
      },
      {
        "name": "旧改",
        "change_pct": -2.59
      },
      {
        "name": "西部大开发",
        "change_pct": -2.69
      },
      {
        "name": "低空经济",
        "change_pct": -5.21
      },
      {
        "name": "房屋检测",
        "change_pct": -2.63
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 86,
    "hot_rank_chg": 198,
    "stock_cnt": 5827,
    "price": "7.41",
    "change": "5.86",
    "market_id": "33",
    "circulate_market_value": "5391398900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -3.66
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.65
      },
      {
        "name": "风电",
        "change_pct": -4.51
      },
      {
        "name": "环氧丙烷",
        "change_pct": -1.95
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.72
      },
      {
        "name": "建筑节能",
        "change_pct": -3.16
      },
      {
        "name": "旧改",
        "change_pct": -2.59
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 89,
    "hot_rank_chg": -27,
    "stock_cnt": 5827,
    "price": "6.46",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "6672765300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -3.29
      },
      {
        "name": "锂电池",
        "change_pct": -4.69
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -8.06
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.38
      },
      {
        "name": "新能源汽车",
        "change_pct": -4.9
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
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 90,
    "hot_rank_chg": -45,
    "stock_cnt": 5827,
    "price": "5.63",
    "change": "-10.06",
    "market_id": "33",
    "circulate_market_value": "12382555400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": -6.45
      },
      {
        "name": "轮胎",
        "change_pct": -2.79
      },
      {
        "name": "冷链",
        "change_pct": -3.66
      },
      {
        "name": "机器人",
        "change_pct": -6.53
      },
      {
        "name": "智能制造",
        "change_pct": -5.79
      },
      {
        "name": "工业母机",
        "change_pct": -7.56
      },
      {
        "name": "减速器",
        "change_pct": -8.2
      },
      {
        "name": "头盔",
        "change_pct": -5.12
      },
      {
        "name": "人形机器人",
        "change_pct": -7.78
      }
    ]
  },
  {
    "code": "601288",
    "name": "农业银行",
    "hot_rank": 96,
    "hot_rank_chg": 60,
    "stock_cnt": 5827,
    "price": "6.77",
    "change": "2.58",
    "market_id": "17",
    "circulate_market_value": "2161283300000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -2.47
      },
      {
        "name": "高股息",
        "change_pct": 0.22
      },
      {
        "name": "银行",
        "change_pct": 1.46
      },
      {
        "name": "破净股",
        "change_pct": -1.23
      },
      {
        "name": "大金融",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 97,
    "hot_rank_chg": -11,
    "stock_cnt": 5827,
    "price": "4.04",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "3091168500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.31
      },
      {
        "name": "股权转让",
        "change_pct": -4.15
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.72
      },
      {
        "name": "医药商业",
        "change_pct": -2.9
      },
      {
        "name": "保健品",
        "change_pct": -1.82
      },
      {
        "name": "民营医院",
        "change_pct": -3.02
      },
      {
        "name": "医药",
        "change_pct": -2.61
      },
      {
        "name": "食品",
        "change_pct": -2.91
      },
      {
        "name": "辅助生殖",
        "change_pct": -3.03
      },
      {
        "name": "口腔",
        "change_pct": -3.22
      },
      {
        "name": "医美",
        "change_pct": -2.98
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -3.38
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 100,
    "hot_rank_chg": -66,
    "stock_cnt": 5827,
    "price": "10.07",
    "change": "-10.01",
    "market_id": "17",
    "circulate_market_value": "4357023600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -4.15
      },
      {
        "name": "强势人气股",
        "change_pct": -4.98
      },
      {
        "name": "光伏",
        "change_pct": -5.02
      },
      {
        "name": "无线耳机",
        "change_pct": -6.32
      },
      {
        "name": "华为产业链",
        "change_pct": -5.66
      },
      {
        "name": "光伏胶膜",
        "change_pct": -3.06
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 88, "stock_cnt": 5827, "price": "845.00", "change": "460.35", "market_id": "17", "circulate_market_value": "25424123000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 2, "hot_rank_chg": 4, "stock_cnt": 5827, "price": "58.87", "change": "1.99", "market_id": "17", "circulate_market_value": "49836595000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5827, "price": "57.55", "change": "-2.77", "market_id": "17", "circulate_market_value": "259149890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 4, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "37.52", "change": "0.11", "market_id": "33", "circulate_market_value": "40556054000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5827, "price": "6.01", "change": "-7.11", "market_id": "33", "circulate_market_value": "212556480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -7.43}, {"name": "手机产业链", "change_pct": -6.89}, {"name": "超高清视频", "change_pct": -4.97}, {"name": "苹果产业链", "change_pct": -7.16}, {"name": "电竞", "change_pct": -3.92}, {"name": "半导体", "change_pct": -7.4}, {"name": "人工智能", "change_pct": -5.09}, {"name": "互联网医疗", "change_pct": -3.28}, {"name": "VR&AR", "change_pct": -6.45}, {"name": "OLED", "change_pct": -6.02}, {"name": "京津冀", "change_pct": -3.34}, {"name": "物联网", "change_pct": -5.26}, {"name": "指纹识别", "change_pct": -6.06}, {"name": "汽车零部件", "change_pct": -5.43}, {"name": "白马股", "change_pct": -1.45}, {"name": "智能制造", "change_pct": -5.79}, {"name": "小米概念股", "change_pct": -6.26}, {"name": "国产芯片", "change_pct": -7.02}, {"name": "液晶面板/LCD", "change_pct": -5.51}, {"name": "全息概念", "change_pct": -4.93}, {"name": "理想汽车概念股", "change_pct": -5.39}, {"name": "MicroLED", "change_pct": -6.71}, {"name": "钙钛矿电池", "change_pct": -6.05}, {"name": "智能手表", "change_pct": -6.6}, {"name": "MiniLED", "change_pct": -6.4}, {"name": "传感器", "change_pct": -6.57}, {"name": "大硅片", "change_pct": -6.88}, {"name": "AI PC", "change_pct": -7.04}, {"name": "华为产业链", "change_pct": -5.66}, {"name": "回购", "change_pct": -3.72}, {"name": "光电共封装CPO", "change_pct": -8.96}, {"name": "智能眼镜/MR头显", "change_pct": -6.91}, {"name": "玻璃基板封装", "change_pct": -7.35}]}, {"code": "002202", "name": "金风科技", "hot_rank": 6, "hot_rank_chg": 82, "stock_cnt": 5827, "price": "22.03", "change": "0.09", "market_id": "33", "circulate_market_value": "74098017000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 7, "hot_rank_chg": 9, "stock_cnt": 5827, "price": "14.42", "change": "0.70", "market_id": "17", "circulate_market_value": "18503724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 8, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "5.64", "change": "-10.05", "market_id": "33", "circulate_market_value": "14913533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.98}, {"name": "装修装饰", "change_pct": -3.35}, {"name": "装配式建筑", "change_pct": -2.65}, {"name": "航天", "change_pct": -6.5}, {"name": "旧改", "change_pct": -2.59}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5827, "price": "9.06", "change": "-0.66", "market_id": "17", "circulate_market_value": "22817699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.77}, {"name": "工业大麻", "change_pct": -4.73}, {"name": "中药", "change_pct": -2.31}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "保健品", "change_pct": -1.82}, {"name": "民营医院", "change_pct": -3.02}, {"name": "医药", "change_pct": -2.61}, {"name": "化学原料药", "change_pct": -2.25}, {"name": "流感", "change_pct": -2.51}, {"name": "振兴东北", "change_pct": -2.46}, {"name": "食品", "change_pct": -2.91}]}, {"code": "600721", "name": "百花医药", "hot_rank": 10, "hot_rank_chg": 21, "stock_cnt": 5827, "price": "13.72", "change": "1.63", "market_id": "17", "circulate_market_value": "5275993600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "58.91", "change": "-9.94", "market_id": "17", "circulate_market_value": "144544300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 12, "hot_rank_chg": 13, "stock_cnt": 5827, "price": "134.95", "change": "-1.11", "market_id": "17", "circulate_market_value": "48679623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 13, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "21.12", "change": "-8.17", "market_id": "17", "circulate_market_value": "44173371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 14, "hot_rank_chg": -11, "stock_cnt": 5827, "price": "34.75", "change": "-10.00", "market_id": "17", "circulate_market_value": "13934750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 15, "hot_rank_chg": -5, "stock_cnt": 5827, "price": "12.84", "change": "-1.38", "market_id": "17", "circulate_market_value": "8735304600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.66}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "雄安新区", "change_pct": -3.6}, {"name": "煤化工", "change_pct": 0.98}]}, {"code": "000636", "name": "风华高科", "hot_rank": 16, "hot_rank_chg": -8, "stock_cnt": 5827, "price": "56.11", "change": "-9.99", "market_id": "33", "circulate_market_value": "64919986000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 17, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "403.71", "change": "-7.56", "market_id": "17", "circulate_market_value": "269876880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 18, "hot_rank_chg": 132, "stock_cnt": 5827, "price": "11.27", "change": "-7.01", "market_id": "33", "circulate_market_value": "9117644000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -5.06}, {"name": "大飞机", "change_pct": -5.41}, {"name": "北斗导航", "change_pct": -6.26}, {"name": "高铁轨交", "change_pct": -3.93}, {"name": "军民融合", "change_pct": -5.91}, {"name": "磁悬浮", "change_pct": -3.6}, {"name": "军工", "change_pct": -5.59}, {"name": "碳纤维", "change_pct": -5.57}, {"name": "无人机", "change_pct": -6.0}, {"name": "航天", "change_pct": -6.5}, {"name": "卫星互联网", "change_pct": -6.67}, {"name": "低空经济", "change_pct": -5.21}, {"name": "海洋经济", "change_pct": -4.89}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 19, "hot_rank_chg": 42, "stock_cnt": 5827, "price": "7.78", "change": "0.26", "market_id": "17", "circulate_market_value": "3729109400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.31}, {"name": "医药商业", "change_pct": -2.9}, {"name": "医药", "change_pct": -2.61}, {"name": "流感", "change_pct": -2.51}]}, {"code": "600584", "name": "长电科技", "hot_rank": 20, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "77.74", "change": "-8.99", "market_id": "17", "circulate_market_value": "139109090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 21, "hot_rank_chg": 0, "stock_cnt": 5827, "price": "104.70", "change": "-3.32", "market_id": "33", "circulate_market_value": "68372830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 22, "hot_rank_chg": -8, "stock_cnt": 5827, "price": "35.33", "change": "-9.99", "market_id": "33", "circulate_market_value": "101046368000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 23, "hot_rank_chg": -19, "stock_cnt": 5827, "price": "27.00", "change": "-10.00", "market_id": "17", "circulate_market_value": "6541290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 24, "hot_rank_chg": -9, "stock_cnt": 5827, "price": "14.58", "change": "-6.48", "market_id": "17", "circulate_market_value": "21472065000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 25, "hot_rank_chg": 135, "stock_cnt": 5827, "price": "67.51", "change": "-2.16", "market_id": "17", "circulate_market_value": "79829842000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 26, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "36.04", "change": "-9.99", "market_id": "33", "circulate_market_value": "28198963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 27, "hot_rank_chg": 28, "stock_cnt": 5827, "price": "277.40", "change": "-4.82", "market_id": "33", "circulate_market_value": "301918840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 28, "hot_rank_chg": 13, "stock_cnt": 5827, "price": "895.60", "change": "-9.36", "market_id": "33", "circulate_market_value": "994062070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 29, "hot_rank_chg": 1, "stock_cnt": 5827, "price": "3.54", "change": "3.81", "market_id": "33", "circulate_market_value": "16537991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -3.69}, {"name": "股权转让", "change_pct": -4.15}, {"name": "房地产", "change_pct": -2.37}, {"name": "京津冀", "change_pct": -3.34}, {"name": "旅游", "change_pct": -2.28}, {"name": "国产芯片", "change_pct": -7.02}, {"name": "内存", "change_pct": -8.06}, {"name": "闪存", "change_pct": -8.13}, {"name": "IP经济/谷子经济", "change_pct": -3.57}]}, {"code": "600127", "name": "金健米业", "hot_rank": 30, "hot_rank_chg": 28, "stock_cnt": 5827, "price": "7.82", "change": "9.99", "market_id": "17", "circulate_market_value": "5018744800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "粮食安全", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -3.98}, {"name": "农业种植", "change_pct": -2.26}, {"name": "湖南国企改革", "change_pct": -3.16}, {"name": "乡村振兴", "change_pct": -2.72}, {"name": "休闲食品", "change_pct": -3.96}, {"name": "食品", "change_pct": -2.91}, {"name": "食品安全", "change_pct": -3.97}, {"name": "社区团购", "change_pct": -4.49}, {"name": "大农业", "change_pct": -2.72}, {"name": "预制菜", "change_pct": -3.18}, {"name": "人造肉", "change_pct": -2.65}, {"name": "国企改革", "change_pct": -2.78}]}, {"code": "600460", "name": "士兰微", "hot_rank": 31, "hot_rank_chg": 70, "stock_cnt": 5827, "price": "34.49", "change": "-1.12", "market_id": "17", "circulate_market_value": "57393838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 32, "hot_rank_chg": 19, "stock_cnt": 5827, "price": "197.10", "change": "-7.82", "market_id": "33", "circulate_market_value": "273244010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 33, "hot_rank_chg": -1, "stock_cnt": 5827, "price": "4.30", "change": "-9.66", "market_id": "33", "circulate_market_value": "9030661600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.31}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "维生素", "change_pct": -3.76}, {"name": "基因测序", "change_pct": -3.72}, {"name": "民营医院", "change_pct": -3.02}, {"name": "医药", "change_pct": -2.61}, {"name": "化学原料药", "change_pct": -2.25}, {"name": "PD-1抑制剂", "change_pct": -2.73}]}, {"code": "002156", "name": "通富微电", "hot_rank": 34, "hot_rank_chg": -17, "stock_cnt": 5827, "price": "63.59", "change": "-10.01", "market_id": "33", "circulate_market_value": "96494787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 35, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "164.00", "change": "-1.90", "market_id": "17", "circulate_market_value": "405617960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "40.56", "change": "-9.69", "market_id": "17", "circulate_market_value": "161087570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600313", "name": "农发种业", "hot_rank": 37, "hot_rank_chg": 22, "stock_cnt": 5827, "price": "7.13", "change": "5.16", "market_id": "17", "circulate_market_value": "7716076500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.88}, {"name": "农业种植", "change_pct": -2.26}, {"name": "化肥", "change_pct": -1.49}, {"name": "转基因", "change_pct": -1.52}, {"name": "土地流转", "change_pct": -3.14}, {"name": "农垦", "change_pct": -2.93}, {"name": "乡村振兴", "change_pct": -2.72}, {"name": "大农业", "change_pct": -2.72}, {"name": "国企改革", "change_pct": -2.78}, {"name": "大豆", "change_pct": -1.69}]}, {"code": "600536", "name": "中国软件", "hot_rank": 38, "hot_rank_chg": 44, "stock_cnt": 5827, "price": "34.66", "change": "0.61", "market_id": "17", "circulate_market_value": "29241113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 39, "hot_rank_chg": 5, "stock_cnt": 5827, "price": "13.28", "change": "1.06", "market_id": "33", "circulate_market_value": "3777915800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5827, "price": "17.36", "change": "-7.17", "market_id": "33", "circulate_market_value": "57681235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 41, "hot_rank_chg": 210, "stock_cnt": 5827, "price": "6.82", "change": "10.00", "market_id": "17", "circulate_market_value": "16305341000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "煤炭", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.81}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "国企改革", "change_pct": -2.78}, {"name": "河南国企改革", "change_pct": -1.12}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 42, "hot_rank_chg": -20, "stock_cnt": 5827, "price": "11.61", "change": "-10.00", "market_id": "17", "circulate_market_value": "20771896000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -2.15}, {"name": "纯碱", "change_pct": -1.41}, {"name": "食品", "change_pct": -2.91}, {"name": "土壤修复", "change_pct": -3.7}, {"name": "东数西算/算力", "change_pct": -5.82}, {"name": "OpenClaw概念", "change_pct": -6.04}, {"name": "DeepSeek概念股", "change_pct": -5.48}]}, {"code": "600367", "name": "红星发展", "hot_rank": 43, "hot_rank_chg": 21, "stock_cnt": 5827, "price": "39.88", "change": "4.32", "market_id": "17", "circulate_market_value": "12840290500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 44, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "393.80", "change": "-9.95", "market_id": "33", "circulate_market_value": "64988441000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 45, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "32.02", "change": "-9.27", "market_id": "17", "circulate_market_value": "109282648000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 46, "hot_rank_chg": 444, "stock_cnt": 5827, "price": "32.60", "change": "6.50", "market_id": "17", "circulate_market_value": "117830853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 47, "hot_rank_chg": -10, "stock_cnt": 5827, "price": "83.27", "change": "-3.06", "market_id": "17", "circulate_market_value": "34670939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 48, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "6.03", "change": "-2.11", "market_id": "17", "circulate_market_value": "74748417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.88}, {"name": "核电", "change_pct": -4.51}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "电力体制改革", "change_pct": -2.28}, {"name": "水电", "change_pct": -1.65}, {"name": "火电", "change_pct": -1.8}, {"name": "光伏", "change_pct": -5.02}, {"name": "风电", "change_pct": -4.51}, {"name": "国企改革", "change_pct": -2.78}, {"name": "算电协同", "change_pct": -5.08}]}, {"code": "001258", "name": "立新能源", "hot_rank": 49, "hot_rank_chg": -16, "stock_cnt": 5827, "price": "12.02", "change": "-9.96", "market_id": "33", "circulate_market_value": "11218525700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.98}, {"name": "新疆国企改革", "change_pct": -3.35}, {"name": "新疆概念", "change_pct": -2.76}, {"name": "光伏", "change_pct": -5.02}, {"name": "风电", "change_pct": -4.51}, {"name": "储能", "change_pct": -4.85}, {"name": "国企改革", "change_pct": -2.78}]}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 51, "hot_rank_chg": -28, "stock_cnt": 5827, "price": "34.08", "change": "-10.01", "market_id": "17", "circulate_market_value": "53084116000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 52, "hot_rank_chg": -24, "stock_cnt": 5827, "price": "10.35", "change": "-4.17", "market_id": "17", "circulate_market_value": "37132382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -4.49}, {"name": "OLED", "change_pct": -6.02}, {"name": "液晶面板/LCD", "change_pct": -5.51}, {"name": "国企改革", "change_pct": -2.78}, {"name": "玻璃基板封装", "change_pct": -7.35}, {"name": "陕西国企改革", "change_pct": -3.33}]}, {"code": "600272", "name": "开开实业", "hot_rank": 53, "hot_rank_chg": -27, "stock_cnt": 5827, "price": "19.50", "change": "-6.83", "market_id": "17", "circulate_market_value": "3120000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603290", "name": "斯达半导", "hot_rank": 54, "hot_rank_chg": 577, "stock_cnt": 5827, "price": "100.31", "change": "10.00", "market_id": "17", "circulate_market_value": "24021583000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "IGBT"}, {"code": "603186", "name": "华正新材", "hot_rank": 55, "hot_rank_chg": 20, "stock_cnt": 5827, "price": "175.00", "change": "-5.00", "market_id": "17", "circulate_market_value": "27438341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 56, "hot_rank_chg": 11, "stock_cnt": 5827, "price": "37.44", "change": "-10.00", "market_id": "33", "circulate_market_value": "58936385000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 57, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "6.24", "change": "0.16", "market_id": "33", "circulate_market_value": "5530202600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -2.26}, {"name": "土地流转", "change_pct": -3.14}, {"name": "海南概念", "change_pct": -3.62}, {"name": "自由贸易港", "change_pct": -1.89}, {"name": "海南自由贸易港", "change_pct": -2.34}, {"name": "大农业", "change_pct": -2.72}, {"name": "水产养殖", "change_pct": -3.87}, {"name": "自贸区", "change_pct": -2.35}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 58, "hot_rank_chg": -6, "stock_cnt": 5827, "price": "37.94", "change": "-10.01", "market_id": "17", "circulate_market_value": "55468083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000735", "name": "罗牛山", "hot_rank": 59, "hot_rank_chg": -19, "stock_cnt": 5827, "price": "5.87", "change": "-5.02", "market_id": "33", "circulate_market_value": "6755768400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "养鸡", "change_pct": -2.01}, {"name": "养猪", "change_pct": -3.13}, {"name": "农垦", "change_pct": -2.93}, {"name": "冷链", "change_pct": -3.66}, {"name": "大数据", "change_pct": -4.98}, {"name": "教育", "change_pct": -3.05}, {"name": "海南概念", "change_pct": -3.62}, {"name": "自由贸易港", "change_pct": -1.89}, {"name": "海南自由贸易港", "change_pct": -2.34}, {"name": "赛马", "change_pct": 0.59}, {"name": "大农业", "change_pct": -2.72}, {"name": "职业教育", "change_pct": -3.8}, {"name": "自贸区", "change_pct": -2.35}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 60, "hot_rank_chg": 23, "stock_cnt": 5827, "price": "67.99", "change": "6.20", "market_id": "17", "circulate_market_value": "8884470900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 61, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "61.83", "change": "-6.60", "market_id": "17", "circulate_market_value": "1226960230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002582", "name": "好想你", "hot_rank": 62, "hot_rank_chg": 16, "stock_cnt": 5827, "price": "10.58", "change": "-10.03", "market_id": "33", "circulate_market_value": "3642054700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -2.26}, {"name": "教育", "change_pct": -3.05}, {"name": "破净股", "change_pct": -1.23}, {"name": "休闲食品", "change_pct": -3.96}, {"name": "食品", "change_pct": -2.91}, {"name": "大农业", "change_pct": -2.72}, {"name": "预制菜", "change_pct": -3.18}, {"name": "人造肉", "change_pct": -2.65}, {"name": "职业教育", "change_pct": -3.8}, {"name": "网红/MCN", "change_pct": -4.38}, {"name": "饮料", "change_pct": -3.51}, {"name": "IP经济/谷子经济", "change_pct": -3.57}, {"name": "蜜雪冰城概念股", "change_pct": -4.49}]}, {"code": "000505", "name": "京粮控股", "hot_rank": 63, "hot_rank_chg": 67, "stock_cnt": 5827, "price": "7.47", "change": "10.02", "market_id": "33", "circulate_market_value": "4723881100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "粮食概念", "xgb_concepts": [{"name": "饲料", "change_pct": -3.94}, {"name": "京津冀", "change_pct": -3.34}, {"name": "调味品", "change_pct": -2.15}, {"name": "海南概念", "change_pct": -3.62}, {"name": "休闲食品", "change_pct": -3.96}, {"name": "食品", "change_pct": -2.91}, {"name": "人造肉", "change_pct": -2.65}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 64, "hot_rank_chg": -14, "stock_cnt": 5827, "price": "17.52", "change": "-10.02", "market_id": "33", "circulate_market_value": "20611733000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603395", "name": "红四方", "hot_rank": 65, "hot_rank_chg": 57, "stock_cnt": 5827, "price": "29.00", "change": "10.02", "market_id": "17", "circulate_market_value": "1885000000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "新疆煤化工项目"}, {"code": "000547", "name": "航天发展", "hot_rank": 66, "hot_rank_chg": 282, "stock_cnt": 5827, "price": "14.33", "change": "-9.99", "market_id": "33", "circulate_market_value": "22772105000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 67, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "64.12", "change": "-13.65", "market_id": "33", "circulate_market_value": "54699040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 68, "hot_rank_chg": 36, "stock_cnt": 5827, "price": "32.76", "change": "-2.38", "market_id": "17", "circulate_market_value": "674914740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 69, "hot_rank_chg": 15, "stock_cnt": 5827, "price": "411.50", "change": "-9.00", "market_id": "33", "circulate_market_value": "516121060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002900", "name": "哈三联", "hot_rank": 70, "hot_rank_chg": 375, "stock_cnt": 5827, "price": "15.63", "change": "9.99", "market_id": "33", "circulate_market_value": "2518343100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "000657", "name": "中钨高新", "hot_rank": 71, "hot_rank_chg": -32, "stock_cnt": 5827, "price": "66.16", "change": "-9.29", "market_id": "33", "circulate_market_value": "96160385000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 72, "hot_rank_chg": -48, "stock_cnt": 5827, "price": "17.11", "change": "-9.99", "market_id": "17", "circulate_market_value": "13470299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 73, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "4.63", "change": "-8.50", "market_id": "33", "circulate_market_value": "27107717000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -4.06}, {"name": "人工智能", "change_pct": -5.09}, {"name": "水利", "change_pct": -3.8}, {"name": "直播/短视频", "change_pct": -4.87}, {"name": "大数据", "change_pct": -4.98}, {"name": "园林", "change_pct": -5.2}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -6.26}, {"name": "数字经济", "change_pct": -4.61}, {"name": "腾讯概念股", "change_pct": -5.06}, {"name": "理想汽车概念股", "change_pct": -5.39}, {"name": "第三代半导体", "change_pct": -6.59}, {"name": "快手概念股", "change_pct": -5.03}, {"name": "IGBT", "change_pct": -5.0}, {"name": "虚拟数字人", "change_pct": -5.0}, {"name": "AIGC概念", "change_pct": -5.22}, {"name": "字节跳动概念股", "change_pct": -5.03}, {"name": "氮化镓", "change_pct": -6.85}, {"name": "AI营销", "change_pct": -5.0}, {"name": "多模态", "change_pct": -5.34}, {"name": "液冷服务器", "change_pct": -6.67}, {"name": "小红书概念股", "change_pct": -4.88}, {"name": "区块链", "change_pct": -4.4}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 74, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "72.87", "change": "-10.00", "market_id": "33", "circulate_market_value": "106888034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 75, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "125.47", "change": "-10.00", "market_id": "17", "circulate_market_value": "302602130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 76, "hot_rank_chg": 77, "stock_cnt": 5827, "price": "18.36", "change": "-0.86", "market_id": "33", "circulate_market_value": "17051060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 77, "hot_rank_chg": 51, "stock_cnt": 5827, "price": "29.93", "change": "-2.67", "market_id": "17", "circulate_market_value": "10084014100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601609", "name": "金田股份", "hot_rank": 78, "hot_rank_chg": 181, "stock_cnt": 5827, "price": "12.95", "change": "8.37", "market_id": "17", "circulate_market_value": "22385865000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "苹果产业链", "change_pct": -7.16}, {"name": "特斯拉", "change_pct": -5.72}, {"name": "稀土磁材", "change_pct": -5.63}, {"name": "有色 · 铜", "change_pct": -4.2}, {"name": "有色金属", "change_pct": -4.16}, {"name": "新能源汽车", "change_pct": -4.9}, {"name": "新能源车零部件", "change_pct": -5.74}, {"name": "特高压", "change_pct": -4.89}, {"name": "核聚变", "change_pct": -5.31}, {"name": "铜缆高速连接器", "change_pct": -7.35}, {"name": "PEEK材料", "change_pct": -6.29}, {"name": "液冷服务器", "change_pct": -6.67}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 79, "hot_rank_chg": -3, "stock_cnt": 5827, "price": "19.45", "change": "-2.94", "market_id": "33", "circulate_market_value": "8797989700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 80, "hot_rank_chg": 5, "stock_cnt": 5827, "price": "51.85", "change": "-9.98", "market_id": "33", "circulate_market_value": "19106896000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688826", "name": "频准激光", "hot_rank": 81, "hot_rank_chg": -61, "stock_cnt": 5827, "price": "942.03", "change": "-18.23", "market_id": "17", "circulate_market_value": "7176160300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 82, "hot_rank_chg": 1771, "stock_cnt": 5827, "price": "2.38", "change": "10.19", "market_id": "33", "circulate_market_value": "5565478100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": -3.64}, {"name": "人工智能", "change_pct": -5.09}, {"name": "VR&AR", "change_pct": -6.45}, {"name": "京津冀", "change_pct": -3.34}, {"name": "装修装饰", "change_pct": -3.35}, {"name": "住房租赁", "change_pct": -1.56}, {"name": "破净股", "change_pct": -1.23}, {"name": "数字经济", "change_pct": -4.61}, {"name": "房产经纪", "change_pct": 1.39}, {"name": "物业管理", "change_pct": -1.21}, {"name": "低价股", "change_pct": -2.64}, {"name": "华为产业链", "change_pct": -5.66}, {"name": "人工智能大模型", "change_pct": -4.3}]}, {"code": "000779", "name": "甘咨询", "hot_rank": 83, "hot_rank_chg": -12, "stock_cnt": 5827, "price": "10.13", "change": "-7.83", "market_id": "33", "circulate_market_value": "4708150500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -3.2}, {"name": "云计算数据中心", "change_pct": -5.6}, {"name": "水利", "change_pct": -3.8}, {"name": "大数据", "change_pct": -4.98}, {"name": "海绵城市", "change_pct": -2.57}, {"name": "风电", "change_pct": -4.51}, {"name": "乡村振兴", "change_pct": -2.72}, {"name": "数字经济", "change_pct": -4.61}, {"name": "大基建", "change_pct": -2.49}, {"name": "东数西算/算力", "change_pct": -5.82}, {"name": "新型城镇化", "change_pct": -3.48}, {"name": "国企改革", "change_pct": -2.78}, {"name": "旧改", "change_pct": -2.59}, {"name": "西部大开发", "change_pct": -2.69}, {"name": "低空经济", "change_pct": -5.21}, {"name": "房屋检测", "change_pct": -2.63}]}, {"code": "600737", "name": "中粮糖业", "hot_rank": 84, "hot_rank_chg": 3, "stock_cnt": 5827, "price": "14.93", "change": "-0.99", "market_id": "17", "circulate_market_value": "31933004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 85, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "36.79", "change": "-7.10", "market_id": "33", "circulate_market_value": "135793550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 86, "hot_rank_chg": 198, "stock_cnt": 5827, "price": "7.41", "change": "5.86", "market_id": "33", "circulate_market_value": "5391398900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -3.66}, {"name": "装配式建筑", "change_pct": -2.65}, {"name": "风电", "change_pct": -4.51}, {"name": "环氧丙烷", "change_pct": -1.95}, {"name": "乡村振兴", "change_pct": -2.72}, {"name": "建筑节能", "change_pct": -3.16}, {"name": "旧改", "change_pct": -2.59}]}, {"code": "603881", "name": "数据港", "hot_rank": 87, "hot_rank_chg": 47, "stock_cnt": 5827, "price": "28.65", "change": "1.06", "market_id": "17", "circulate_market_value": "24697801000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 88, "hot_rank_chg": -11, "stock_cnt": 5827, "price": "16.08", "change": "-10.02", "market_id": "33", "circulate_market_value": "11179829600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 89, "hot_rank_chg": -27, "stock_cnt": 5827, "price": "6.46", "change": "-10.03", "market_id": "33", "circulate_market_value": "6672765300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -3.29}, {"name": "锂电池", "change_pct": -4.69}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "铜箔/覆铜板", "change_pct": -8.06}, {"name": "粤港澳大湾区", "change_pct": -2.38}, {"name": "新能源汽车", "change_pct": -4.9}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -3.2}]}, {"code": "002031", "name": "巨轮智能", "hot_rank": 90, "hot_rank_chg": -45, "stock_cnt": 5827, "price": "5.63", "change": "-10.06", "market_id": "33", "circulate_market_value": "12382555400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": -6.45}, {"name": "轮胎", "change_pct": -2.79}, {"name": "冷链", "change_pct": -3.66}, {"name": "机器人", "change_pct": -6.53}, {"name": "智能制造", "change_pct": -5.79}, {"name": "工业母机", "change_pct": -7.56}, {"name": "减速器", "change_pct": -8.2}, {"name": "头盔", "change_pct": -5.12}, {"name": "人形机器人", "change_pct": -7.78}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 91, "hot_rank_chg": 1, "stock_cnt": 5827, "price": "13.74", "change": "-7.22", "market_id": "33", "circulate_market_value": "47786762000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 92, "hot_rank_chg": 65, "stock_cnt": 5827, "price": "77.16", "change": "4.47", "market_id": "33", "circulate_market_value": "2523011900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600783", "name": "鲁信创投", "hot_rank": 93, "hot_rank_chg": 862, "stock_cnt": 5827, "price": "20.19", "change": "10.03", "market_id": "17", "circulate_market_value": "15028614000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "参股蓝箭航天"}, {"code": "600703", "name": "三安光电", "hot_rank": 94, "hot_rank_chg": -40, "stock_cnt": 5827, "price": "13.51", "change": "-8.90", "market_id": "17", "circulate_market_value": "67401643000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 95, "hot_rank_chg": -39, "stock_cnt": 5827, "price": "86.59", "change": "-10.73", "market_id": "33", "circulate_market_value": "17714165000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601288", "name": "农业银行", "hot_rank": 96, "hot_rank_chg": 60, "stock_cnt": 5827, "price": "6.77", "change": "2.58", "market_id": "17", "circulate_market_value": "2161283300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -2.47}, {"name": "高股息", "change_pct": 0.22}, {"name": "银行", "change_pct": 1.46}, {"name": "破净股", "change_pct": -1.23}, {"name": "大金融", "change_pct": -0.04}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 97, "hot_rank_chg": -11, "stock_cnt": 5827, "price": "4.04", "change": "-10.02", "market_id": "33", "circulate_market_value": "3091168500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.31}, {"name": "股权转让", "change_pct": -4.15}, {"name": "优化生育（三孩）", "change_pct": -2.72}, {"name": "医药商业", "change_pct": -2.9}, {"name": "保健品", "change_pct": -1.82}, {"name": "民营医院", "change_pct": -3.02}, {"name": "医药", "change_pct": -2.61}, {"name": "食品", "change_pct": -2.91}, {"name": "辅助生殖", "change_pct": -3.03}, {"name": "口腔", "change_pct": -3.22}, {"name": "医美", "change_pct": -2.98}, {"name": "新冠病毒防治", "change_pct": -3.38}]}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 98, "hot_rank_chg": 134, "stock_cnt": 5827, "price": "52.66", "change": "0.55", "market_id": "17", "circulate_market_value": "335918260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600598", "name": "北大荒", "hot_rank": 99, "hot_rank_chg": -19, "stock_cnt": 5827, "price": "13.86", "change": "2.97", "market_id": "17", "circulate_market_value": "24638644000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 100, "hot_rank_chg": -66, "stock_cnt": 5827, "price": "10.07", "change": "-10.01", "market_id": "17", "circulate_market_value": "4357023600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -4.15}, {"name": "强势人气股", "change_pct": -4.98}, {"name": "光伏", "change_pct": -5.02}, {"name": "无线耳机", "change_pct": -6.32}, {"name": "华为产业链", "change_pct": -5.66}, {"name": "光伏胶膜", "change_pct": -3.06}]}];
const LIMIT_UP_POOL = [{"code": "603113", "name": "金能科技", "price": 5.15, "change_pct": 10.04, "reason": "山东焦炭龙头；公司甲醇实际产能为10万吨/年，所产甲醇全部对外销售", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 4.47, "first_limit_up": 1787119921, "break_limit_up_times": 0}, {"code": "603366", "name": "日出东方", "price": 7.63, "change_pct": 9.94, "reason": "公司空气能热泵领域技术领先，上半年扣非净利润同比增长518.32%，主因去年同期基数极低叠加热泵出口产品结构优化、内部降本", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.94, "first_limit_up": 1787108473, "break_limit_up_times": 0}, {"code": "001301", "name": "尚太科技", "price": 62.33, "change_pct": 10.01, "reason": "国内负极材料领域主要厂商；公司表示现阶段可验证的固态电池负极材料存在继续使用石墨类负极材料的可能性，公司对固态电池适配负极材料以及负极材料其他新技术的发展方向", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.24, "first_limit_up": 1787103081, "break_limit_up_times": 28}, {"code": "002412", "name": "汉森制药", "price": 8.42, "change_pct": 10.07, "reason": "公司主营消化系统和心脑血管中药生产企业", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.38, "first_limit_up": 1787103222, "break_limit_up_times": 1}, {"code": "000020", "name": "深华发Ａ", "price": 13.74, "change_pct": 10.01, "reason": "1、公司地处深圳，在深圳市福田区华强北商圈及光明新区公明街道均拥有数万平方米的大型物业；\n2、公司主营精密注塑件及液晶显示器，现有新型生产流水线，拥有自动化设备自动涂胶机器人、注塑机等十多台", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 10.57, "first_limit_up": 1787103000, "break_limit_up_times": 1}, {"code": "600403", "name": "大有能源", "price": 6.82, "change_pct": 10.0, "reason": "河南能源集团旗下煤炭企业；此前河南省委、省政府决定对间接控股股东河南能源集团和中国平煤神马控股集团实施战略重组", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 5.2, "first_limit_up": 1787104109, "break_limit_up_times": 0}, {"code": "000723", "name": "美锦能源", "price": 3.89, "change_pct": 9.89, "reason": "全国较大的独立商品焦和炼焦煤生产商；公司拥有储量丰富的优质煤炭和煤层气资源，具备“煤-焦-气-化-氢”一体化的完整产业链", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 4.23, "first_limit_up": 1787103336, "break_limit_up_times": 2}, {"code": "002333", "name": "罗普斯金", "price": 6.34, "change_pct": 10.07, "reason": "公司拟现金收购盟萤科技51%股权布局智能装备赛道", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 2.12, "first_limit_up": 1787102700, "break_limit_up_times": 0}, {"code": "000526", "name": "学大教育", "price": 39.09, "change_pct": 9.99, "reason": "国内最大的K12课外辅导服务提供商之一，上半年净利润同比增长30.85%，报告期内，受行业季节性因素影响，公司个性化教育业务上半年需求与盈利能力均呈季节性回升", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 7.7, "first_limit_up": 1787103204, "break_limit_up_times": 2}, {"code": "301211", "name": "亨迪药业", "price": 14.54, "change_pct": 19.97, "reason": "公司原料药产品主要为非甾体抗炎类原料药布洛芬和右旋布洛芬等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 13.69, "first_limit_up": 1787103276, "break_limit_up_times": 4}, {"code": "601011", "name": "宝泰隆", "price": 3.04, "change_pct": 10.14, "reason": "黑龙江省煤化工行业龙头，国内石墨烯行业领先企业之一，具备针状焦的产能为5万吨/年", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1787103002, "break_limit_up_times": 0}, {"code": "002667", "name": "*ST威领", "price": 15.87, "change_pct": 9.98, "reason": "兴业银锡要约收购拟拿下公司控制权，要约收购价格18元/股", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.96, "first_limit_up": 1787102700, "break_limit_up_times": 0}, {"code": "001338", "name": "永顺泰", "price": 9.63, "change_pct": 10.06, "reason": "公司产品以基础大麦麦芽为主，兼顾高端的特种麦芽等多种产品，是国内规模最大的麦芽制造商；麦芽奠定啤酒的基础风味，是啤酒生产环节中最主要的原料", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.05, "first_limit_up": 1787103915, "break_limit_up_times": 7}, {"code": "603395", "name": "红四方", "price": 29, "change_pct": 10.02, "reason": "公司为中盐集团农肥业务板块的运营主体", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 18.11, "first_limit_up": 1787102700, "break_limit_up_times": 1}, {"code": "002953", "name": "日丰股份", "price": 11.73, "change_pct": 10.04, "reason": "公司拟投资约7亿元建设年产300吨光纤预制棒、1000万芯公里光纤项目", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 8.64, "first_limit_up": 1787102700, "break_limit_up_times": 1}, {"code": "002900", "name": "哈三联", "price": 15.63, "change_pct": 9.99, "reason": "1、公司旗下礼德生物作为创新药研发平台，聚焦抗肿瘤领域和免疫制剂研发 ，公司拥有包括创新药等在内的 40 余项在研项目，持续加大研发投入；\n2、公司美妆系列聚焦日常多护肤场景，打造精细化面膜矩阵；“哈三联”II 类医疗器械敷料系列搭载重组胶原蛋白与透明质酸钠两大核心成分，深耕问题性肌肤赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 12.88, "first_limit_up": 1787103087, "break_limit_up_times": 1}, {"code": "001400", "name": "江顺科技", "price": 85.94, "change_pct": 10.0, "reason": "1、公司的相关模具产品可以用于航空航天方向；\n2、近期公司基于微通道挤压技术开发出新一代液冷模块，采用铝合金一体成型工艺，支持更窄流道（≤100μm）和更高热密度", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 13.55, "first_limit_up": 1787104485, "break_limit_up_times": 2}, {"code": "002040", "name": "南 京 港", "price": 9.06, "change_pct": 9.95, "reason": "我国内河最大的石油、液体化工产品中转储存的港口运输企业", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 6.49, "first_limit_up": 1787109729, "break_limit_up_times": 3}, {"code": "600783", "name": "鲁信创投", "price": 20.19, "change_pct": 10.03, "reason": "公司参股基金成都鲁信菁蓉贰期创业投资中心（有限合伙）等3个投资主体合计持有蓝箭航天空间科技股份有限公司0.89%股权", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.97, "first_limit_up": 1787102700, "break_limit_up_times": 1}, {"code": "603801", "name": "志邦家居", "price": 6.57, "change_pct": 10.05, "reason": "公司产品包括整体厨房、全屋定制等，周杰伦为品牌代言人", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.12, "first_limit_up": 1787103157, "break_limit_up_times": 1}, {"code": "600371", "name": "万向德农", "price": 8.95, "change_pct": 9.95, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 18.17, "first_limit_up": 1787103078, "break_limit_up_times": 5}, {"code": "000505", "name": "京粮控股", "price": 7.47, "change_pct": 10.01, "reason": "1、海南本地股；公司主营植物油加工、休闲食品、面包制作等，主要产品有大豆油、植物蛋白等大豆制品，拥有大豆蛋白肉生产工艺；\n2、旗下五星级酒店三亚珠江国际度假酒店是海南旅游市场的旗舰酒店之一", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 10.74, "first_limit_up": 1787103093, "break_limit_up_times": 0}, {"code": "002543", "name": "万和电气", "price": 7.57, "change_pct": 10.03, "reason": "厨卫电器及热水热能系统整体解决方案供应商；公司产品涉及太阳能、空气源热泵等低碳热源装置", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.29, "first_limit_up": 1787118717, "break_limit_up_times": 0}, {"code": "601015", "name": "陕西黑猫", "price": 3.71, "change_pct": 10.09, "reason": "公司拟15.77亿元向恒源煤电转让甘肃煤炭资产", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 7.68, "first_limit_up": 1787105731, "break_limit_up_times": 1}, {"code": "600127", "name": "金健米业", "price": 7.82, "change_pct": 9.99, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 4.56, "first_limit_up": 1787102700, "break_limit_up_times": 0}, {"code": "603102", "name": "百合股份", "price": 45.76, "change_pct": 10.0, "reason": "公司主要从事营养保健食品的研产销，主要分为骨骼健康、基础营养（维生素、矿物质、蛋白质）、男性健康、女性健康、心脑血管、婴幼/儿童/青少年健康、 中老年健康等类别", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.48, "first_limit_up": 1787103153, "break_limit_up_times": 0}, {"code": "301130", "name": "西点药业", "price": 33.38, "change_pct": 19.99, "reason": "公司生产的阿昔洛韦片是治疗天花和水痘的药物", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 28.16, "first_limit_up": 1787103342, "break_limit_up_times": 1}, {"code": "300911", "name": "亿田智能", "price": 26.66, "change_pct": 19.98, "reason": "子公司签署10亿元算力中心建设合同", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 19.35, "first_limit_up": 1787116074, "break_limit_up_times": 0}, {"code": "603506", "name": "南都物业", "price": 11.88, "change_pct": 10.0, "reason": "1、公司深耕物业服务三十余年，已完成住宅、商写、城市服务三大领域全业态布局，江浙沪区域占比85.58%；\n2、公司拟1500万元增资标的云象机器人，增资后持有其8.57%股权，云象机器人是一家专注于商用清洁领域的机器人公司本次投资后，公司可不断探索机器人在智能清洁、安防巡检等核心场景的垂直领域的训练及应用", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.0, "first_limit_up": 1787103014, "break_limit_up_times": 1}, {"code": "603848", "name": "好太太", "price": 14.66, "change_pct": 9.98, "reason": "公司是智能晾晒行业的领军企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.22, "first_limit_up": 1787103376, "break_limit_up_times": 2}, {"code": "000059", "name": "华锦股份", "price": 5.07, "change_pct": 9.98, "reason": "公司偏三甲苯产能2.8万吨", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 5.14, "first_limit_up": 1787115951, "break_limit_up_times": 1}, {"code": "600610", "name": "中毅达", "price": 7.8, "change_pct": 10.01, "reason": "公司主要产品包括工业用季戊四醇、工业用双季戊四醇", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 6.71, "first_limit_up": 1787106275, "break_limit_up_times": 2}, {"code": "300069", "name": "金利华电", "price": 34.66, "change_pct": 20.01, "reason": "1、公司拟收购中科西光82.5%股权，跨界商业航天；\n2、公司专注于新型高强度功能玻璃制造技术的研究和特高压输变电绝缘器材开发，主要产品为高压、超高压和特高压交、直流输电线路上用于绝缘和悬挂导线用的盘型悬式高强度玻璃绝缘子", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 16.51, "first_limit_up": 1787104767, "break_limit_up_times": 2}, {"code": "603290", "name": "斯达半导", "price": 100.31, "change_pct": 10.0, "reason": "公司主营IGBT为主的功率半导体芯片和模块的设计研发和生产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.76, "first_limit_up": 1787104393, "break_limit_up_times": 2}, {"code": "000560", "name": "我爱我家", "price": 2.38, "change_pct": 10.19, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 18.33, "first_limit_up": 1787103207, "break_limit_up_times": 5}, {"code": "000736", "name": "中交发展", "price": 4.9, "change_pct": 10.11, "reason": "中交房地产集团控股的上市平台，当前主营业务聚焦 “物业管理 + 资产管理与运营” 双轮驱动", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.43, "first_limit_up": 1787103228, "break_limit_up_times": 0}, {"code": "001277", "name": "速达股份", "price": 32.97, "change_pct": 10.01, "reason": "公司有数据中心散热管路系统的研发项目", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.55, "first_limit_up": 1787103747, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};