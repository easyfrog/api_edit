
/**
 * @param {import("../types").Options} options 
 */
function handler(options) {
    let appid = 'wx942a7e9fc53686c0'
    let secret = '605885503f833b3ef95fcee5007a4448'
    let js_code = options.request.body.code
    let grant_type = 'authorization_code'

    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`

    return new Promise((resolve, reject) => {
        options.https.get(url, res => {
            res.on('data', d => {
                let json = JSON.parse(d)
                resolve(json)
            }).on('error', e => {
                reject(e)
            })
        })
    })
}