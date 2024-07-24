const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');

// 제거할 파일 목록
const filesToRemove = [
  'index-o.html',
  'README.md'
];

// 제거할 파일 처리
filesToRemove.forEach(file => {
  const filePath = path.join(docsDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed: ${file}`);
  }
});

// .nojekyll 파일 생성
const nojekyllPath = path.join(docsDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('Created: .nojekyll');

console.log('Cleanup completed successfully.');