const axios = require('axios');
const config = require('./config.json');

console.log("Running")

setInterval(async () => {
    let response = await axios.get(`${config.base_url}/api/client/servers/${config.server_identifier}/resources`, {
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+config.api_key}
    })
    let status = response.data.attributes.current_state;
    if (status == "offline") {
        console.log('Server is offline. Sending startup request')
        axios.post(`${baseUrl}/api/client/servers/${identifier}/power`, {
            "signal": "start",
        }, {
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+config.api_key},
        })
    }
}, config.delay * 1000);