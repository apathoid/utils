const fs = require('fs');
const path = require('path');
const replace = require('replace');


const ROOT_PATH = path.resolve(path.join(__dirname, '..'));


fs.cp(`${ROOT_PATH}/package.json`, `${ROOT_PATH}/dist/package.json`, () => {
    replace({
        regex: "(?<=(module|main|types).*)\./dist/",
        replacement: "\./",
        paths: [`${ROOT_PATH}/dist/package.json`],
        recursive: false,
        silent: true
    });
});
