import rfc from './rfc.js';
import fs from 'fs';

/**
 * @example
 * npm run delete wx/test
 */

let arg = process.argv[2]
let [group, api_name] = arg.split('/')

// delete api
if (group && api_name) {
    rfc.run([group, api_name], async db => {
        let col = await db.collection(param1)
        let res = await col.deleteOne({
            api: param2
        })
        return res
    }).then(res => {
        console.log('DELETE API result:', res)
    })
}