/**
 * WebSocket 接口的处理方法
 * @param {{
 * [_:string]: string
 * api?: string
 * refresh?: boolean
 * }} data websocket中收到的数据
 * @param {import("../api/types").WebSocketContext} context 全局对象
 */
async function handler(data, context) {

    let { mongo, dict, wsObj } = context

    return new Promise((resolve, reject) => {

        console.log(Object.keys(dict))

        resolve({
            msg: 'ws test message'
        })

    })
}