import rfc from 'run_func_serve/run_func_client.js';

rfc.init({
    server: 'https://api.ooomap.com',
    // server: 'http://localhost:3002',
    db_name: 'api'
})

export default rfc