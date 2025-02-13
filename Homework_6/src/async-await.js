
async function getIp(){
    const response = await fetch ('https://api.ipify.org/?format=json');
    // console.log('response:', response);
    const json = await response.json();
    console.log('IP:', json);

    return json;
}


async function handleData() {
    const ipResponse = [];
    const ip = await getIp();
    if (ip) {
        ipResponse.push(ip);
        console.log('Added new IP:', ip);
    } else {
        console.log('No IP was fetched.');
    }

    console.log('IP Response Array:', ipResponse);
}

(async () => {
    await handleData();
})();
