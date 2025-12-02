#!/usr/bin/env node

/**
 * 重命名競賽照片檔案
 * 將各職類資料夾下的圖片統一重命名為 image-001.jpeg 到 image-005.jpeg
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 三個日期資料夾
const dateFolders = [
  'WorkPhotos',
  // '1128各職類精選照片 Skills Area Highlights Photo',
  // '1129各職類精選照片 Skills Area Highlights Photo',
];

// 基礎路徑
const basePath = path.join(__dirname, '../public/images/media/scene');

// 處理單個職類資料夾
function renameImagesInFolder(folderPath, folderName) {
  try {
    // 讀取資料夾中的所有檔案
    const files = fs.readdirSync(folderPath);

    // 過濾出圖片檔案並排序
    const imageFiles = files
      .filter(file => /\.(jpeg|jpg|png)$/i.test(file))
      .sort((a, b) => {
        // 提取檔案名中的數字進行排序
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });

    console.log(`\n處理資料夾: ${folderName}`);
    console.log(`找到 ${imageFiles.length} 個圖片檔案`);

    if (imageFiles.length === 0) {
      console.log('  ⚠️  沒有找到圖片檔案');
      return;
    }

    // 先重命名為臨時檔名，避免衝突
    const tempRenames = [];
    imageFiles.forEach((file, index) => {
      const oldPath = path.join(folderPath, file);
      const tempName = `temp_${index + 1}.jpeg`;
      const tempPath = path.join(folderPath, tempName);

      try {
        fs.renameSync(oldPath, tempPath);
        tempRenames.push({ tempName, newName: `image-${String(index + 1).padStart(3, '0')}.jpeg` });
        console.log(`  ${file} -> ${tempName}`);
      } catch (error) {
        console.error(`  ❌ 重命名失敗: ${file}`, error.message);
      }
    });

    // 再重命名為最終檔名
    tempRenames.forEach(({ tempName, newName }) => {
      const tempPath = path.join(folderPath, tempName);
      const newPath = path.join(folderPath, newName);

      try {
        fs.renameSync(tempPath, newPath);
        console.log(`  ${tempName} -> ${newName}`);
      } catch (error) {
        console.error(`  ❌ 最終重命名失敗: ${tempName}`, error.message);
      }
    });

    console.log(`  ✅ 完成重命名 ${tempRenames.length} 個檔案`);
  } catch (error) {
    console.error(`❌ 處理資料夾失敗: ${folderName}`, error.message);
  }
}

// 處理單個日期資料夾
function processDateFolder(dateFolder) {
  const dateFolderPath = path.join(basePath, dateFolder);

  if (!fs.existsSync(dateFolderPath)) {
    console.error(`❌ 資料夾不存在: ${dateFolder}`);
    return;
  }

  console.log(`\n========================================`);
  console.log(`開始處理日期資料夾: ${dateFolder}`);
  console.log(`========================================`);

  try {
    // 讀取所有職類資料夾
    const skillFolders = fs.readdirSync(dateFolderPath)
      .filter(item => {
        const itemPath = path.join(dateFolderPath, item);
        return fs.statSync(itemPath).isDirectory();
      });

    console.log(`找到 ${skillFolders.length} 個職類資料夾`);

    // 處理每個職類資料夾
    skillFolders.forEach(skillFolder => {
      const skillFolderPath = path.join(dateFolderPath, skillFolder);
      renameImagesInFolder(skillFolderPath, skillFolder);
    });

    console.log(`\n✅ ${dateFolder} 處理完成`);
  } catch (error) {
    console.error(`❌ 處理日期資料夾失敗: ${dateFolder}`, error.message);
  }
}

// 主函數
function main() {
  console.log('開始批次重命名競賽照片...');
  console.log(`基礎路徑: ${basePath}\n`);

  // 檢查基礎路徑是否存在
  if (!fs.existsSync(basePath)) {
    console.error(`❌ 基礎路徑不存在: ${basePath}`);
    process.exit(1);
  }

  // 處理每個日期資料夾
  dateFolders.forEach(dateFolder => {
    processDateFolder(dateFolder);
  });

  console.log('\n========================================');
  console.log('✅ 所有資料夾處理完成！');
  console.log('========================================\n');
}

// 執行主函數
main();

