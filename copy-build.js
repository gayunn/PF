const fs = require('fs-extra');

fs.copySync('_site', 'docs', { overwrite: true });
console.log('Build files copied to docs folder');