# 腳本說明

## rename-competition-images.js

### 功能
批次重命名競賽照片檔案，將各職類資料夾下的圖片統一重命名為標準格式：
- `image-001.jpeg`
- `image-002.jpeg`
- `image-003.jpeg`
- `image-004.jpeg`
- `image-005.jpeg`

### 使用方法

```bash
# 在專案根目錄執行
node scripts/rename-competition-images.js
```

### 處理範圍
腳本會處理以下三個日期資料夾下的所有職類子資料夾：
- `public/images/media/scene/1127各職類精選照片 Skills Area Highlights Photo/`
- `public/images/media/scene/1128各職類精選照片 Skills Area Highlights Photo/`
- `public/images/media/scene/1129各職類精選照片 Skills Area Highlights Photo/`

### 重命名邏輯
1. 掃描每個職類資料夾
2. 找出所有圖片檔案（.jpeg, .jpg, .png）
3. 按照檔案名稱中的數字排序
4. 重命名為 `image-001.jpeg` 到 `image-005.jpeg`

### 安全機制
- 使用臨時檔名避免重命名衝突
- 每個步驟都有錯誤處理
- 顯示詳細的處理日誌

### 注意事項
⚠️ 此操作會修改檔案名稱，建議先備份檔案或使用 Git 管理
⚠️ 確認圖片檔案數量正確（預期每個資料夾 5 張圖片）
