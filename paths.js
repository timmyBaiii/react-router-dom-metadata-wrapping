const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appSrc: resolveApp('src/index'),
    appBuild: resolveApp('dist'),
    appPublic: resolveApp('public'),
    appPath: resolveApp('.')
}