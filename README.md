# 需求
顯示大樓的訪客登入人次的圖表  
+ 畫面一可以顯示：左方有一些選單，可以選擇 1) 大樓 2) 公司，並因應選擇顯示不同的圖表 (用條狀圖隨機產生即可)
+ 可以選擇儲存圖表
+ 畫面二可以顯示儲存過的圖表 (sidebar 形式的連結亦可)
+ 不需要後端儲存 or API 串接，但請保留可串接的彈性設計
不限制使用哪一個前端框架 (ReactJS / VueJS / AngularJS / JavaScript)，但請附上簡單 README.md 說明如何 build / running。  
# 建置說明
## 環境
+ angular CLI version: 6.1.2
+ angular version: 0.7.2
+ rxjs: 6.2.2
## 套件
+ bootstrap 4
+ jquery(用來做navbar縮放的效果)
+ ng2-charts(+chart.js)(效果有點差，次數統計的最低項顯示效果不佳)
## 建置與偵錯執行
+ ng build
+ ng serve
## 心得
1. chart.js Y座標的scale沒辦法自定義為最適當的大小，顯示上有點不妥
2. 實作中有點不清楚user腦中的畫面，想要再多問一些細節
3. 可以應用於IoT，作人臉辨識，放置在展場中統計各種屬性的人員在展場中的熱點分布