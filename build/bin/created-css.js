const path = require('path')
const fs = require('fs')

fs.writeFileSync(path.resolve(process.cwd(), 'lib/theme-default/base.css'), '')