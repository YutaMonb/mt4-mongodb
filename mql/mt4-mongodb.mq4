#property copyright "Yuta Monbetsu"
#property link      "https://github.com/YutaMonb/mt4-mongodb"
#property version   "1.00"
#property strict

int OnInit() {
    return(INIT_SUCCEEDED);
}

void OnTick() {
  string cookie = NULL,headers;
  char post[], result[];
  string url = "http://127.0.0.1/tick?symbol=" + Symbol() + "&bid=" + Bid + "&ask=" + Ask + "&time=" + (long)TimeCurrent();
  int res = 0;
  res = WebRequest("GET", url, cookie, NULL, 1000, post, 0, result, headers);
  Print(res);
}
