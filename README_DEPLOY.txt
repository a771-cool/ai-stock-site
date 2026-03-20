AI Stock 正式網址版

這個資料夾可直接部署到：
- GitHub Pages
- Netlify
- Cloudflare Pages

主要檔案：
- index.html            正式網址首頁
- ai_stock.html         AI Stock 主頁
- v18_dashboard.html    V18 靜態頁
- data/                 前端資料檔
- .nojekyll             GitHub Pages 需要
- 404.html              靜態主機容錯頁

建議做法：
1. 每次更新資料後，先重新產生這個資料夾
2. 把這個資料夾內的全部內容上傳到靜態網站平台
3. 正式網址就會更新

如果用 GitHub Pages：
1. 建立一個新的 GitHub repo
2. 把這個資料夾內的全部檔案放到 repo 根目錄
3. 到 repo 的 Settings > Pages
4. Source 選 Deploy from a branch
5. Branch 選 main，資料夾選 /root
6. 儲存後等待 GitHub 產生網址

注意：
- 這是純靜態版，只能查看
- 不支援盤中快速更新按鈕
- 盤中互動更新仍要用本機 server 版
