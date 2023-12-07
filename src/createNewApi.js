import path from 'path';
import fs from 'fs';
import rfc from './rfc.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @example
 * npm run create wx/get_openid
 */

let arg = process.argv[2]
let [group, api_name] = arg.split('/')

/**
 * check if exist
 */
let _path = `api/${group}/${api_name}.js`
let boo = fs.existsSync(_path)

if (boo) {
    console.warn(`WARNING: ${arg} is exist!`);
}  else {

    rfc.run([group, api_name], async db => {
        let col = await db.collection(param1)
        let count = await col.countDocuments({ api: param2 })
        return {count}
    }).then(res => {
        if (res.count > 0) {
            console.warn(`WARNING: ${arg} is exist!`);
        } else {
            let folder = `api/${group}`
            // 判断文件夹是否存在
            if (!fs.existsSync(folder)) {
                fs.mkdir(folder)
            }

            // copy template file
            fs.copyFileSync('template/api_template.js', _path)
            console.log('complete!')
        }
    })
}

