#!/usr/bin/env node

/**
 * 標準化競賽照片資料夾名稱
 * 將 "ID-中文名  英文名" 中的多個空格統一為單個空格
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
  '1127各職類精選照片 Skills Area Highlights Photo',
  '1128各職類精選照片 Skills Area Highlights Photo',
  '1129各職類精選照片 Skills Area Highlights Photo',
];

// 基礎路徑
const basePath = path.join(__dirname, '../public/images/media/scene');

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

    console.log(`找到 ${skillFolders.length} 個職類資料夾\n`);

    // 處理每個職類資料夾
    let renamedCount = 0;
    skillFolders.forEach(skillFolder => {
      const oldPath = path.join(dateFolderPath, skillFolder);

      // 標準化資料夾名稱：將多個空格替換為單個空格
      const normalizedName = skillFolder.replace(/\s+/g, ' ').trim();

      if (normalizedName !== skillFolder) {
        const newPath = path.join(dateFolderPath, normalizedName);

        try {
          fs.renameSync(oldPath, newPath);
          console.log(`✅ ${skillFolder}`);
          console.log(`   → ${normalizedName}`);
          renamedCount++;
        } catch (error) {
          console.error(`❌ 重命名失敗: ${skillFolder}`, error.message);
        }
      }
    });

    console.log(`\n✅ ${dateFolder} 處理完成，共重命名 ${renamedCount} 個資料夾`);
  } catch (error) {
    console.error(`❌ 處理日期資料夾失敗: ${dateFolder}`, error.message);
  }
}

// 主函數
function main() {
  console.log('開始標準化競賽照片資料夾名稱...');
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

