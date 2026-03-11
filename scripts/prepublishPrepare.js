import fs from 'fs';
import path from 'path';
import replace from 'replace';


const ROOT_PATH = path.resolve(path.join(import.meta.dirname, '..'));


fs.cp(`${ROOT_PATH}/package.json`, `${ROOT_PATH}/dist/package.json`, () => {
    replace({
        regex: "(?<=(module|main|types).*)\./dist/",
        replacement: "\./",
        paths: [`${ROOT_PATH}/dist/package.json`],
        recursive: false,
        silent: true
    });
});
