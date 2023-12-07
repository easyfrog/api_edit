/**
 * 接口的处理方法
 * @param {import("../api/types").Options} options 
 */
async function handler(options) {
    let { api_cache, mongo, http, https, request, response } = options

    return new Promise((resolve, reject) => {

        resolve({heel: 'I am a test api!~~ haha'})

    })
}