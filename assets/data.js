const UPDATE_TIME = "2026-06-30 04:10";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 5.17,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续237天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": 3.35,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续190天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "商业航天",
    "rise": 3.26,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续166天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": -1.98,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续67天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 3.56,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续60天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "先进封装",
    "rise": 4.23,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886009"
  },
  {
    "name": "算力租赁",
    "rise": 2.16,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 3.58,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续401天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光纤概念",
    "rise": 3.76,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续66天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "WiFi6",
    "rise": 6.12,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "通信ETF",
    "code": "885940"
  },
  {
    "name": "芯片概念",
    "rise": 3.44,
    "rate": 0,
    "tag": "30家涨停",
    "hotTag": "连续61天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "培育钻石",
    "rise": 4.07,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "液冷服务器",
    "rise": 3.4,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "电子纸",
    "rise": 5.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885953"
  },
  {
    "name": "光刻胶",
    "rise": 2.63,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "MicroLED概念",
    "rise": 5.39,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885987"
  },
  {
    "name": "国家大基金持股",
    "rise": 3.93,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "ST板块",
    "rise": 0.08,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "AI应用",
    "rise": 1.15,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "机器人概念",
    "rise": 2.41,
    "rate": 0,
    "tag": "30家涨停",
    "hotTag": "连续68天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  }
];
const THS_EVENTS = [
  {
    "title": "国务院印发教育发展“十五五”规划 未来五年基础教育将迎系列变革",
    "desc": "",
    "heat": 615324,
    "direction": "教育",
    "themes": [
      "教育",
      "职业教育",
      "AI教育"
    ],
    "stocks": [
      {
        "name": "宏景科技",
        "code": "301396",
        "chg": 12.588435
      }
    ]
  },
  {
    "title": "火箭发射在即！蓝箭航天科创板IPO恢复审核",
    "desc": "",
    "heat": 481304,
    "direction": "蓝箭航天",
    "themes": [
      "蓝箭航天"
    ],
    "stocks": [
      {
        "name": "昊志机电",
        "code": "300503",
        "chg": 19.9948
      }
    ]
  },
  {
    "title": "年内二次提价！宏微科技官宣第二轮调价，功率半导体涨价潮再起",
    "desc": "",
    "heat": 385162,
    "direction": "功率半导体",
    "themes": [
      "功率半导体",
      "模拟芯片"
    ],
    "stocks": [
      {
        "name": "艾为电子",
        "code": "688798",
        "chg": 9.835082
      }
    ]
  },
  {
    "title": "多位DeepSeek API用户确认已收到调价邮件：V4正式版高峰期价格将翻倍",
    "desc": "",
    "heat": 248449,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "海晨股份",
        "code": "300873",
        "chg": 19.936034
      }
    ]
  },
  {
    "title": "大摩：预计钠电池2030年市占率升至20% 将拉动原盐需求持续增长",
    "desc": "",
    "heat": 238932,
    "direction": "钠电池",
    "themes": [
      "钠离子电池"
    ],
    "stocks": [
      {
        "name": "联得装备",
        "code": "300545",
        "chg": 20.0
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "AI算力芯片",
    "change": "+6.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+6.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+6.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+6.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MicroLED",
    "change": "+6.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "交换机",
    "change": "+6.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+6.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MiniLED",
    "change": "+5.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+5.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "WiFi",
    "change": "+5.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+5.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物理AI",
    "change": "+5.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+5.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+5.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光雷达",
    "change": "+4.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI手机",
    "change": "+4.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "折叠屏",
    "change": "+4.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "毫米波通信",
    "change": "+4.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能眼镜/MR头显",
    "change": "+4.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI PC",
    "change": "+4.85%",
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
    "hot_rank_chg": 3,
    "stock_cnt": 5854,
    "price": "8.66",
    "change": "8.93",
    "market_id": "33",
    "circulate_market_value": "306279380000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 6,
    "hot_rank_chg": 53,
    "stock_cnt": 5854,
    "price": "7.15",
    "change": "1.56",
    "market_id": "17",
    "circulate_market_value": "88632037000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 15,
    "hot_rank_chg": 4,
    "stock_cnt": 5854,
    "price": "9.23",
    "change": "1.32",
    "market_id": "33",
    "circulate_market_value": "15005154000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 19,
    "hot_rank_chg": 49,
    "stock_cnt": 5854,
    "price": "5.82",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "111348440000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "半导体显示",
    "xgb_concepts": []
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 49,
    "hot_rank_chg": -26,
    "stock_cnt": 5854,
    "price": "11.85",
    "change": "1.02",
    "market_id": "33",
    "circulate_market_value": "47871391000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600545",
    "name": "卓郎智能",
    "hot_rank": 63,
    "hot_rank_chg": 99,
    "stock_cnt": 5854,
    "price": "7.75",
    "change": "3.47",
    "market_id": "17",
    "circulate_market_value": "13856320000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "601636",
    "name": "旗滨集团",
    "hot_rank": 64,
    "hot_rank_chg": -35,
    "stock_cnt": 5854,
    "price": "10.39",
    "change": "5.80",
    "market_id": "17",
    "circulate_market_value": "30740412000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600589",
    "name": "大位科技",
    "hot_rank": 76,
    "hot_rank_chg": 337,
    "stock_cnt": 5854,
    "price": "10.40",
    "change": "9.59",
    "market_id": "17",
    "circulate_market_value": "15376087000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "300088",
    "name": "长信科技",
    "hot_rank": 91,
    "hot_rank_chg": 104,
    "stock_cnt": 5854,
    "price": "11.78",
    "change": "6.13",
    "market_id": "33",
    "circulate_market_value": "29279218000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 93,
    "hot_rank_chg": 10,
    "stock_cnt": 5854,
    "price": "5.38",
    "change": "3.86",
    "market_id": "33",
    "circulate_market_value": "5557194600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 97,
    "hot_rank_chg": -15,
    "stock_cnt": 5854,
    "price": "12.28",
    "change": "-4.06",
    "market_id": "17",
    "circulate_market_value": "61895872000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "8.66", "change": "8.93", "market_id": "33", "circulate_market_value": "306279380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "29.21", "change": "0.93", "market_id": "17", "circulate_market_value": "61093947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "103.70", "change": "0.44", "market_id": "17", "circulate_market_value": "185562290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "62.76", "change": "6.63", "market_id": "33", "circulate_market_value": "98792969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 5, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "22.59", "change": "3.06", "market_id": "33", "circulate_market_value": "75058703000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 6, "hot_rank_chg": 53, "stock_cnt": 5854, "price": "7.15", "change": "1.56", "market_id": "17", "circulate_market_value": "88632037000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600206", "name": "有研新材", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5854, "price": "64.63", "change": "-2.48", "market_id": "17", "circulate_market_value": "54712742000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 8, "hot_rank_chg": 5, "stock_cnt": 5854, "price": "61.29", "change": "4.16", "market_id": "17", "circulate_market_value": "209179680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 9, "hot_rank_chg": 17, "stock_cnt": 5854, "price": "74.12", "change": "4.42", "market_id": "17", "circulate_market_value": "296712490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "36.10", "change": "4.16", "market_id": "33", "circulate_market_value": "15543459000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 11, "hot_rank_chg": 25, "stock_cnt": 5854, "price": "155.32", "change": "10.00", "market_id": "33", "circulate_market_value": "148598900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 12, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "186.32", "change": "5.25", "market_id": "33", "circulate_market_value": "187248930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 13, "hot_rank_chg": -6, "stock_cnt": 5854, "price": "50.23", "change": "10.01", "market_id": "33", "circulate_market_value": "54186484000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体级氢氟酸涨价"}, {"code": "600487", "name": "亨通光电", "hot_rank": 14, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "111.14", "change": "2.87", "market_id": "17", "circulate_market_value": "271757430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 15, "hot_rank_chg": 4, "stock_cnt": 5854, "price": "9.23", "change": "1.32", "market_id": "33", "circulate_market_value": "15005154000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600378", "name": "昊华科技", "hot_rank": 16, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "75.38", "change": "10.00", "market_id": "17", "circulate_market_value": "80849977000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "六氟化钨"}, {"code": "603986", "name": "兆易创新", "hot_rank": 17, "hot_rank_chg": -16, "stock_cnt": 5854, "price": "823.95", "change": "-1.91", "market_id": "17", "circulate_market_value": "550803930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 18, "hot_rank_chg": -9, "stock_cnt": 5854, "price": "72.24", "change": "-10.00", "market_id": "33", "circulate_market_value": "83582627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 19, "hot_rank_chg": 49, "stock_cnt": 5854, "price": "5.82", "change": "10.02", "market_id": "33", "circulate_market_value": "111348440000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体显示", "xgb_concepts": []}, {"code": "002579", "name": "中京电子", "hot_rank": 20, "hot_rank_chg": 41, "stock_cnt": 5854, "price": "21.97", "change": "7.17", "market_id": "33", "circulate_market_value": "12817559300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 21, "hot_rank_chg": -9, "stock_cnt": 5854, "price": "52.95", "change": "0.69", "market_id": "17", "circulate_market_value": "88112604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 22, "hot_rank_chg": 86, "stock_cnt": 5854, "price": "105.70", "change": "8.43", "market_id": "17", "circulate_market_value": "154644840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 23, "hot_rank_chg": 55, "stock_cnt": 5854, "price": "154.74", "change": "9.70", "market_id": "33", "circulate_market_value": "297535690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 24, "hot_rank_chg": 27, "stock_cnt": 5854, "price": "265.51", "change": "6.38", "market_id": "33", "circulate_market_value": "368082280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 25, "hot_rank_chg": 45, "stock_cnt": 5854, "price": "67.53", "change": "7.02", "market_id": "17", "circulate_market_value": "98728509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 26, "hot_rank_chg": -4, "stock_cnt": 5854, "price": "21.24", "change": "0.85", "market_id": "17", "circulate_market_value": "105966758000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 27, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "72.85", "change": "4.66", "market_id": "17", "circulate_market_value": "1445642100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 28, "hot_rank_chg": 17, "stock_cnt": 5854, "price": "16.84", "change": "4.21", "market_id": "17", "circulate_market_value": "21492147000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 29, "hot_rank_chg": -15, "stock_cnt": 5854, "price": "16.89", "change": "10.03", "market_id": "17", "circulate_market_value": "60595742000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板"}, {"code": "002600", "name": "领益智造", "hot_rank": 30, "hot_rank_chg": 193, "stock_cnt": 5854, "price": "17.34", "change": "10.03", "market_id": "33", "circulate_market_value": "124842881000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "002281", "name": "光迅科技", "hot_rank": 31, "hot_rank_chg": 58, "stock_cnt": 5854, "price": "252.12", "change": "6.86", "market_id": "33", "circulate_market_value": "196779240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 32, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "75.17", "change": "3.57", "market_id": "33", "circulate_market_value": "114066884000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 33, "hot_rank_chg": 67, "stock_cnt": 5854, "price": "608.94", "change": "9.33", "market_id": "33", "circulate_market_value": "763758830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 34, "hot_rank_chg": 30, "stock_cnt": 5854, "price": "53.87", "change": "10.01", "market_id": "17", "circulate_market_value": "35132490000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "TSV先进封装"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 35, "hot_rank_chg": 147, "stock_cnt": 5854, "price": "37.33", "change": "9.99", "market_id": "33", "circulate_market_value": "29207165000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "002202", "name": "金风科技", "hot_rank": 36, "hot_rank_chg": 39, "stock_cnt": 5854, "price": "23.90", "change": "9.99", "market_id": "33", "circulate_market_value": "80387771000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "参股蓝箭航天"}, {"code": "002167", "name": "东方锆业", "hot_rank": 37, "hot_rank_chg": 103, "stock_cnt": 5854, "price": "22.07", "change": "10.02", "market_id": "33", "circulate_market_value": "16744795000.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "锆产品涨价"}, {"code": "605358", "name": "立昂微", "hot_rank": 38, "hot_rank_chg": -22, "stock_cnt": 5854, "price": "77.10", "change": "-2.27", "market_id": "17", "circulate_market_value": "59536572000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 39, "hot_rank_chg": -18, "stock_cnt": 5854, "price": "32.60", "change": "3.56", "market_id": "17", "circulate_market_value": "30794185000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 40, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "37.79", "change": "4.13", "market_id": "33", "circulate_market_value": "14181982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 41, "hot_rank_chg": 7, "stock_cnt": 5854, "price": "186.85", "change": "5.65", "market_id": "17", "circulate_market_value": "48213092000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 42, "hot_rank_chg": 23, "stock_cnt": 5854, "price": "177.84", "change": "3.90", "market_id": "17", "circulate_market_value": "425838150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 43, "hot_rank_chg": 50, "stock_cnt": 5854, "price": "70.60", "change": "8.12", "market_id": "33", "circulate_market_value": "515487880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 44, "hot_rank_chg": -11, "stock_cnt": 5854, "price": "122.21", "change": "-1.44", "market_id": "33", "circulate_market_value": "79807484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 45, "hot_rank_chg": 38, "stock_cnt": 5854, "price": "19.60", "change": "3.21", "market_id": "33", "circulate_market_value": "63221561000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 46, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "15.21", "change": "-6.11", "market_id": "17", "circulate_market_value": "22399871000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300975", "name": "商络电子", "hot_rank": 47, "hot_rank_chg": 126, "stock_cnt": 5854, "price": "50.73", "change": "14.03", "market_id": "33", "circulate_market_value": "24962878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 48, "hot_rank_chg": -9, "stock_cnt": 5854, "price": "1289.74", "change": "5.72", "market_id": "33", "circulate_market_value": "1431533700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 49, "hot_rank_chg": -26, "stock_cnt": 5854, "price": "11.85", "change": "1.02", "market_id": "33", "circulate_market_value": "47871391000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "000811", "name": "冰轮环境", "hot_rank": 50, "hot_rank_chg": 109, "stock_cnt": 5854, "price": "56.22", "change": "10.00", "market_id": "33", "circulate_market_value": "55005405000.00", "change_type": "1", "change_section": "11", "change_days": "6", "change_reason": "数据中心液冷"}, {"code": "000938", "name": "紫光股份", "hot_rank": 51, "hot_rank_chg": 191, "stock_cnt": 5854, "price": "28.86", "change": "9.98", "market_id": "33", "circulate_market_value": "82541697000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产算力"}, {"code": "002208", "name": "合肥城建", "hot_rank": 52, "hot_rank_chg": -20, "stock_cnt": 5854, "price": "19.79", "change": "7.67", "market_id": "33", "circulate_market_value": "15892800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 53, "hot_rank_chg": 43, "stock_cnt": 5854, "price": "14.77", "change": "1.93", "market_id": "33", "circulate_market_value": "11949210500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 54, "hot_rank_chg": 111, "stock_cnt": 5854, "price": "43.96", "change": "6.52", "market_id": "33", "circulate_market_value": "161957320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 55, "hot_rank_chg": 35, "stock_cnt": 5854, "price": "32.79", "change": "-1.24", "market_id": "33", "circulate_market_value": "38576414000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 56, "hot_rank_chg": 115, "stock_cnt": 5854, "price": "351.66", "change": "11.51", "market_id": "33", "circulate_market_value": "304254450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 57, "hot_rank_chg": -49, "stock_cnt": 5854, "price": "216.90", "change": "4.55", "market_id": "33", "circulate_market_value": "69087584000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 58, "hot_rank_chg": -21, "stock_cnt": 5854, "price": "53.71", "change": "-0.17", "market_id": "17", "circulate_market_value": "145003360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 59, "hot_rank_chg": 191, "stock_cnt": 5854, "price": "1613.00", "change": "8.84", "market_id": "17", "circulate_market_value": "1013436560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 60, "hot_rank_chg": 34, "stock_cnt": 5854, "price": "52.15", "change": "6.43", "market_id": "33", "circulate_market_value": "79160072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 61, "hot_rank_chg": -26, "stock_cnt": 5854, "price": "310.19", "change": "4.77", "market_id": "17", "circulate_market_value": "355610040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 62, "hot_rank_chg": 294, "stock_cnt": 5854, "price": "21.34", "change": "7.83", "market_id": "17", "circulate_market_value": "70407048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600545", "name": "卓郎智能", "hot_rank": 63, "hot_rank_chg": 99, "stock_cnt": 5854, "price": "7.75", "change": "3.47", "market_id": "17", "circulate_market_value": "13856320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "601636", "name": "旗滨集团", "hot_rank": 64, "hot_rank_chg": -35, "stock_cnt": 5854, "price": "10.39", "change": "5.80", "market_id": "17", "circulate_market_value": "30740412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600367", "name": "红星发展", "hot_rank": 65, "hot_rank_chg": 9, "stock_cnt": 5854, "price": "62.93", "change": "10.00", "market_id": "17", "circulate_market_value": "20261772000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "玻璃基板上游"}, {"code": "603773", "name": "沃格光电", "hot_rank": 66, "hot_rank_chg": -26, "stock_cnt": 5854, "price": "169.58", "change": "3.81", "market_id": "17", "circulate_market_value": "38101003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 67, "hot_rank_chg": -42, "stock_cnt": 5854, "price": "20.90", "change": "0.05", "market_id": "33", "circulate_market_value": "14470314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 68, "hot_rank_chg": 62, "stock_cnt": 5854, "price": "53.84", "change": "3.88", "market_id": "33", "circulate_market_value": "267568650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 69, "hot_rank_chg": -45, "stock_cnt": 5854, "price": "91.80", "change": "2.00", "market_id": "33", "circulate_market_value": "60219886000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 70, "hot_rank_chg": 37, "stock_cnt": 5854, "price": "97.00", "change": "1.50", "market_id": "33", "circulate_market_value": "140933760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 71, "hot_rank_chg": 48, "stock_cnt": 5854, "price": "49.42", "change": "9.99", "market_id": "17", "circulate_market_value": "19058193000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "G5级湿电子化学品"}, {"code": "300285", "name": "国瓷材料", "hot_rank": 72, "hot_rank_chg": 12, "stock_cnt": 5854, "price": "103.09", "change": "-2.33", "market_id": "33", "circulate_market_value": "88004699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 73, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "25.95", "change": "0.04", "market_id": "33", "circulate_market_value": "15438490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 74, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "81.88", "change": "1.06", "market_id": "17", "circulate_market_value": "96822210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 75, "hot_rank_chg": 22, "stock_cnt": 5854, "price": "251.91", "change": "4.07", "market_id": "33", "circulate_market_value": "106228993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600589", "name": "大位科技", "hot_rank": 76, "hot_rank_chg": 337, "stock_cnt": 5854, "price": "10.40", "change": "9.59", "market_id": "17", "circulate_market_value": "15376087000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "301526", "name": "国际复材", "hot_rank": 77, "hot_rank_chg": 67, "stock_cnt": 5854, "price": "48.49", "change": "1.40", "market_id": "33", "circulate_market_value": "68099013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 78, "hot_rank_chg": 112, "stock_cnt": 5854, "price": "69.23", "change": "5.18", "market_id": "33", "circulate_market_value": "101548766000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 79, "hot_rank_chg": 53, "stock_cnt": 5854, "price": "168.82", "change": "5.07", "market_id": "33", "circulate_market_value": "139954400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 80, "hot_rank_chg": 77, "stock_cnt": 5854, "price": "119.71", "change": "2.54", "market_id": "33", "circulate_market_value": "98784720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 81, "hot_rank_chg": 145, "stock_cnt": 5854, "price": "53.70", "change": "4.01", "market_id": "33", "circulate_market_value": "26213079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 82, "hot_rank_chg": 87, "stock_cnt": 5854, "price": "33.70", "change": "1.75", "market_id": "17", "circulate_market_value": "74792188000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 83, "hot_rank_chg": 15, "stock_cnt": 5854, "price": "309.68", "change": "4.92", "market_id": "33", "circulate_market_value": "337052010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 84, "hot_rank_chg": 380, "stock_cnt": 5854, "price": "13.84", "change": "10.02", "market_id": "17", "circulate_market_value": "57716859000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力PCB"}, {"code": "600186", "name": "莲花控股", "hot_rank": 85, "hot_rank_chg": 79, "stock_cnt": 5854, "price": "13.96", "change": "4.80", "market_id": "17", "circulate_market_value": "24976371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 86, "hot_rank_chg": -45, "stock_cnt": 5854, "price": "945.36", "change": "-2.54", "market_id": "33", "circulate_market_value": "155903880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 87, "hot_rank_chg": 97, "stock_cnt": 5854, "price": "22.22", "change": "4.08", "market_id": "17", "circulate_market_value": "11383098200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 88, "hot_rank_chg": 50, "stock_cnt": 5854, "price": "21.46", "change": "-4.41", "market_id": "17", "circulate_market_value": "13755136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 89, "hot_rank_chg": 46, "stock_cnt": 5854, "price": "15.06", "change": "2.24", "market_id": "17", "circulate_market_value": "26131825000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 90, "hot_rank_chg": 20, "stock_cnt": 5854, "price": "79.62", "change": "3.81", "market_id": "33", "circulate_market_value": "90007078000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300088", "name": "长信科技", "hot_rank": 91, "hot_rank_chg": 104, "stock_cnt": 5854, "price": "11.78", "change": "6.13", "market_id": "33", "circulate_market_value": "29279218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "601869", "name": "长飞光纤", "hot_rank": 92, "hot_rank_chg": -7, "stock_cnt": 5854, "price": "548.95", "change": "4.14", "market_id": "17", "circulate_market_value": "223059420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 93, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "5.38", "change": "3.86", "market_id": "33", "circulate_market_value": "5557194600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "603002", "name": "宏昌电子", "hot_rank": 94, "hot_rank_chg": 15, "stock_cnt": 5854, "price": "24.11", "change": "-0.86", "market_id": "17", "circulate_market_value": "27342633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 95, "hot_rank_chg": 6, "stock_cnt": 5854, "price": "119.55", "change": "4.00", "market_id": "33", "circulate_market_value": "86591908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 96, "hot_rank_chg": 113, "stock_cnt": 5854, "price": "16.93", "change": "1.56", "market_id": "33", "circulate_market_value": "25831478000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 97, "hot_rank_chg": -15, "stock_cnt": 5854, "price": "12.28", "change": "-4.06", "market_id": "17", "circulate_market_value": "61895872000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 98, "hot_rank_chg": 38, "stock_cnt": 5854, "price": "107.79", "change": "6.72", "market_id": "33", "circulate_market_value": "248928360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 99, "hot_rank_chg": -82, "stock_cnt": 5854, "price": "92.65", "change": "-1.86", "market_id": "17", "circulate_market_value": "56930959000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 100, "hot_rank_chg": 14, "stock_cnt": 5854, "price": "43.61", "change": "1.00", "market_id": "17", "circulate_market_value": "36144455000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};