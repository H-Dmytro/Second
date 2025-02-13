

fetch ('https://api.ipify.org/?format=json').then(response=> {
    return response.json();
})
    .then(body => console.log('Response:', body ))
    .catch(body => console.log('error:', body))
    .finally(() => console.log('finally'));

function getIp(){

    return fetch ('https://api.ipify.org/?format=json')
        .then((response) => response.json())
        .then ((ip) => {
            if (ip) {
                handleData(ip);
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

function handleData(resp) {
    const ipResponse = [];
    ipResponse.push(resp);
    console.log('Added new IP', resp);
    console.log (ipResponse);
}

getIp();
