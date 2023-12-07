import rfc from 'run_func_serve/run_func_client.js';

rfc.init({
    server: 'https://ooomap.com/rest-server',
    db_name: 'api'
})

export default rfc