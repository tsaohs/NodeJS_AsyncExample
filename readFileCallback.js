let fs = require('fs');
let path = require('path');
const basePath = './';

// 讀取包含資料夾的檔案結構，取到第一層目錄後存進 dirs
fs.readdir(basePath, {encoding: 'utf8', withFileTypes: true}, (err, dirs) => {
  // 掃瞄 dirs 判斷哪些是資料夾
  dirs.map((dir) => {
    // 取得資料夾路徑，存入 subPath
    let subPath = path.join(basePath, dir.name || dir);
    // 用 stat 檢查 subPath 狀態，將結果放進 pathResult
    fs.stat(subPath, (error, pathResult) => {
      // 檢查 pathResult 是否為資料夾
      if (pathResult.isDirectory()) {
        // 若是資料夾，用 readdir 印出下一層的檔案目錄
        fs.readdir(subPath, (error, fileName) => {
          console.log('file in dir,', fileName);
        })
      }
    });
  });
  console.log(dirs);
});