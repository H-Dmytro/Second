async function getIp(){
    try{
    const response = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
    if (!response.ok) {
        console.log (`Some test error`);
        throw new Error(`Some test error`);
        }

    }catch (error) { 
        const response2 = await fetch ('https://api.ipify.org/?format=json');
        if (!response2.ok) {
            throw new Error(`Failed to fetch IP address`);
        }
        const data = await response2.json();
        return data.ip;
    }
}

getIp()
    .then(ip => console.log('IP Address:', ip))
    .catch(error => console.error('Error:', error.message));