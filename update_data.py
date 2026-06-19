"""
update_data.py 鈥?GitHub Actions 鏁版嵁鏇存柊鑴氭湰
鑾峰彇鎵€鏈夋暟鎹簮骞剁敓鎴?data.js
"""
import requests
import json
import datetime
import time
import os
import re

# Cookies from GitHub Secrets
THS_COOKIE = os.environ.get('THS_COOKIE', '')
THS_HOT_COOKIE = os.environ.get('THS_HOT_COOKIE', '')

H = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

today = datetime.datetime.now().strftime('%Y-%m-%d')

# 1. 浜烘皵鎺掑悕 Top100
print("=== 1. 浜烘皵鎺掑悕 Top100 ===")
try:
    resp = requests.get('https://basic.10jqka.com.cn/api/stockph/popularity/top/',
                       params={'pn': 0, 'pz': 100},
                       headers={**H, 'Referer': 'https://basic.10jqka.com.cn/'}, timeout=15)
    all_stocks = resp.json().get('data', {}).get('list', [])
    print(f"  {len(all_stocks)} 鍙?)
except Exception as e:
    print(f"  ERROR: {e}")
    all_stocks = []

# 2. 鍚岃姳椤虹儹搴︽帓琛?print("=== 2. 鍚岃姳椤虹儹搴︽帓琛?===")
ths_hot = []
try:
    resp = requests.get('https://dq.10jqka.com.cn/fuyao/hot_list_data/out/hot_list/v1/plate?type=concept',
                       headers={**H, 'Referer': 'https://eq.10jqka.com.cn/', 'Cookie': THS_HOT_COOKIE}, timeout=15)
    for p in resp.json().get('data', {}).get('plate_list', []):
        ths_hot.append({'name': p['name'], 'rise': round(p.get('rise_and_fall', 0), 2),
            'rate': 0, 'tag': p.get('tag', ''), 'hotTag': p.get('hot_tag', ''),
            'rankChg': p.get('hot_rank_chg', 0), 'etfName': p.get('etf_name', ''), 'code': p.get('code', '')})
    print(f"  {len(ths_hot)} 涓?)
except Exception as e:
    print(f"  ERROR: {e}")

# 3. 閫夎偂閫氭蹇垫帓鍚?print("=== 3. 閫夎偂閫氭蹇垫帓鍚?===")
xgt_hot = []
try:
    resp = requests.get('https://flash-api.xuangubao.com.cn/api/plate/rank?plate_type=concept&rank_type=day&field=core_avg_pcp&order=desc&limit=20',
                        headers=H, timeout=15)
    ids = resp.json().get('data', [])
    plates_str = ','.join(str(i) for i in ids[:20])
    resp2 = requests.get(f'https://flash-api.xuangubao.com.cn/api/plate/data?fields=core_avg_pcp,plate_name,plate_id&plates={plates_str}',
                         headers=H, timeout=15)
    for name, pct in sorted([(i.get('plate_name', ''), round(i.get('core_avg_pcp', 0) * 100, 2))
                    for i in resp2.json().get('data', {}).values()], key=lambda x: x[1], reverse=True)[:20]:
        xgt_hot.append({'name': name, 'change': ('+' if pct > 0 else '') + str(pct) + '%',
                        'stock': '', 'stockChange': '', 'desc': ''})
    print(f"  {len(xgt_hot)} 涓?)
except Exception as e:
    print(f"  ERROR: {e}")

# 4. 浜嬩欢椹卞姩
print("=== 4. 浜嬩欢椹卞姩 ===")
ths_events = []
try:
    tomorrow = (datetime.datetime.now() + datetime.timedelta(days=1)).strftime('%Y-%m-%d')
    resp = requests.get('https://news.10jqka.com.cn/app/concept_v2_api/open/api/concept/event/jtcsm/v1/event/list',
                        params={'date': tomorrow},
                        headers={**H, 'Referer': 'https://www.10jqka.com.cn/', 'Cookie': THS_COOKIE}, timeout=15)
    for ev in resp.json().get('data', [{}])[0].get('eventList', []):
        ths_events.append({'title': ev.get('title', ''), 'desc': ev.get('description', ''),
            'heat': ev.get('heat', 0), 'direction': ev.get('investmentDirection', ''),
            'themes': [t.get('showName', '') for t in ev.get('themes', [])],
            'stocks': [{'name': x.get('stockName', ''), 'code': x.get('stockCode', ''),
                        'chg': x.get('risePercent', 0)} for x in ev.get('topStocks', [])]})
    print(f"  {len(ths_events)} 涓?)
except Exception as e:
    print(f"  ERROR: {e}")

# 5. 閫夎偂瀹?涓偂姒傚康鏍囩
print("=== 5. 閫夎偂瀹?涓偂姒傚康 ===")
cheap_stocks = [s for s in all_stocks if float(s.get('price', 999)) < 13]
for s in cheap_stocks:
    code = s['code']
    suffix = '.SS' if code.startswith('6') or code.startswith('9') else '.SZ'
    try:
        resp = requests.get('https://flash-api.xuangubao.cn/api/stage2/plates_by_any_stock',
            params={'symbol': code + suffix, 'fields': 'core_avg_pcp,plate_name'}, headers=H, timeout=10)
        inner = resp.json().get('data', {})
        s['xgb_concepts'] = [{'name': i.get('plate_name', ''), 'change_pct': round(i.get('core_avg_pcp', 0) * 100, 2)}
                              for i in inner.values()] if isinstance(inner, dict) else []
        print(f"  {code} {s['name']}: {len(s['xgb_concepts'])} 涓蹇?)
        time.sleep(0.3)
    except:
        s['xgb_concepts'] = []

# 6. 閫夎偂瀹?娑ㄥ仠姹?print("\n=== 6. 閫夎偂瀹?娑ㄥ仠姹?===")
limit_up_pool = []
try:
    resp = requests.get('https://flash-api.xuangubao.cn/api/pool/detail',
        params={'pool_name': 'limit_up', 'date': today}, headers=H, timeout=15)
    for s in resp.json().get('data', []):
        sr = s.get('surge_reason', {})
        limit_up_pool.append({
            'code': s.get('symbol', '').split('.')[0], 'name': s.get('stock_chi_name', ''),
            'price': s.get('price', 0), 'change_pct': round(s.get('change_percent', 0) * 100, 2),
            'reason': sr.get('stock_reason', ''),
            'plates': [p.get('plate_name', '') for p in sr.get('related_plates', [])],
            'limit_up_days': s.get('limit_up_days', 0), 'turnover_ratio': round(s.get('turnover_ratio', 0) * 100, 2),
            'first_limit_up': s.get('first_limit_up', 0),
            'break_limit_up_times': s.get('break_limit_up_times', 0),
        })
    print(f"  {len(limit_up_pool)} 鍙定鍋?)
except Exception as e:
    print(f"  ERROR: {e}")

# 7. 椋庨櫓鑲¤繃婊わ紙宸ㄦ疆璧勮 鈥?绔嬫璋冩煡/琛屾斂澶勭綒锛?print("\n=== 7. 椋庨櫓鑲¤繃婊?===")
risk_stocks = {}  # code -> reason
risk_keywords = ['绔嬫璋冩煡', '绔嬫瀹℃煡', '琛屾斂澶勭綒浜嬪厛鍛婄煡涔?]
for kw in risk_keywords:
    try:
        resp = requests.post('http://www.cninfo.com.cn/new/fulltextSearch/full',
            data={'searchkey': kw, 'sdate': '2025-01-01', 'edate': '2026-12-31',
                  'isfulltext': 'false', 'sortName': 'pubdate', 'sortType': 'desc',
                  'pageNum': 1, 'pageSize': 100, 'lang': 'cn', 'swsearchmode': 1},
            headers={**H, 'Referer': 'http://www.cninfo.com.cn/new/fulltextSearch/full',
                     'Origin': 'http://www.cninfo.com.cn'}, timeout=15)
        for item in resp.json().get('announcements', []):
            code = item.get('secCode', '')
            name = item.get('secName', '')
            title = item.get('announcementTitle', '').replace('<em>', '').replace('</em>', '')
            if code and re.match(r'^\d{6}$', code) and code not in risk_stocks:
                risk_stocks[code] = f"[{kw}] {title[:40]}"
        time.sleep(0.5)
    except Exception as e:
        print(f"  Search '{kw}' ERROR: {e}")
print(f"  椋庨櫓鑲℃€绘暟: {len(risk_stocks)}")

# Also filter by ST name pattern
st_stocks = set()
for s in all_stocks:
    name = s.get('name', '')
    if name.startswith('ST') or name.startswith('*ST') or name.startswith('S'):
        st_stocks.add(s['code'])
        risk_stocks[s['code']] = 'ST/椋庨櫓璀︾ず鑲?
print(f"  ST鑲? {len(st_stocks)}")

# Apply risk filter to cheap_stocks and all_stocks
filtered_codes = set(risk_stocks.keys())
filtered_cheap = [s for s in cheap_stocks if s['code'] not in filtered_codes]
filtered_all = [s for s in all_stocks if s['code'] not in filtered_codes]
removed_cheap = [s for s in cheap_stocks if s['code'] in filtered_codes]
if removed_cheap:
    print(f"  鈿狅笍 浣庝环鑲′腑杩囨护鎺?{len(removed_cheap)} 鍙闄╄偂:")
    for s in removed_cheap:
        print(f"    {s['code']} {s['name']} | {risk_stocks.get(s['code'], '鏈煡椋庨櫓')}")

# 8. 鐢熸垚 data.js
print("\n=== 8. 鐢熸垚 data.js ===")
now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M')
lines = [
    f'const UPDATE_TIME = "{now}";',
    'const THS_HOT = ' + json.dumps(ths_hot, ensure_ascii=False, indent=2) + ';',
    'const THS_EVENTS = ' + json.dumps(ths_events, ensure_ascii=False, indent=2) + ';',
    'const XGT_HOT = ' + json.dumps(xgt_hot, ensure_ascii=False, indent=2) + ';',
    'const PREV_RECOMMENDED = [];',
    'const CHEAP_STOCKS = ' + json.dumps(filtered_cheap, ensure_ascii=False, indent=2) + ';',
    'const RECOMMENDED = [];',
    'const ALL_STOCKS = ' + json.dumps(filtered_all, ensure_ascii=False) + ';',
    'const LIMIT_UP_POOL = ' + json.dumps(limit_up_pool, ensure_ascii=False) + ';',
    'const RISK_STOCKS = ' + json.dumps(risk_stocks, ensure_ascii=False) + ';',
]
content = '\n'.join(lines)
os.makedirs('assets', exist_ok=True)
with open('assets/data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print(f"  data.js: {len(content)} bytes | {now}")
print(f"  浜烘皵:{len(all_stocks)} 浣庝环:{len(cheap_stocks)} 娑ㄥ仠姹?{len(limit_up_pool)}")
print(f"  THS鐑害:{len(ths_hot)} XGT:{len(xgt_hot)} 浜嬩欢:{len(ths_events)}")
print("\n=== 瀹屾垚 ===")
