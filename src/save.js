import rfc from './rfc.js';
import fs from 'fs';

/**
 * @example
 * npm run save wx/test
 */

let arg = process.argv[2]
let [group, api_name] = arg.split('/')

let _path = `api/${group}/${api_name}.js`

if (!fs.existsSync(_path)) {
    console.warn(`Not has [ ${arg} ] api file!`);
} else {
    let content = fs.readFileSync(_path).toString('utf8')

    // save to datebase
    rfc.run([group, api_name, content], async db => {
        let col = await db.collection(param1)
        let res = await col.updateOne({
            api: param2
        }, {
            $set: {
                api: param2,
                handler: param3
            }
        }, {
            upsert: true
        })
        return res
    }).then(res => {
        console.log('SAVE API result:', res)
    })
}