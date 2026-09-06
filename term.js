const sources="+json.dumps({k:v[2] for k,v in categories.items()},ensure_ascii=False,separators=(',',':'))+";
const termsArray="+json.dumps(terms,ensure_ascii=False,separators=(',',':'))+";
const categoryMeta="+json.dumps({k:{"label":v[0],"icon":v[1]} for k,v in categories.items()},ensure_ascii=False,separators=(',',':'))+";
