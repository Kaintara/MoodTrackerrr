
async function getSpotifyToken(clientId, clientSecret) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
}

function getlinks() {
    let token = getSpotifyToken('e1fe73ba81854f7abb9feed49a849116','88024d9701d64d5091f6a6a36c23ff72')
    fetch ('https://api.spotify.com/v1/recommendations', {
        method: 'GET',
        headers: { "Authorization": 'Bearer ' + token,
        }
    }).then(response => response.json())
    .then(data => {
        console.log(data)
    }); return data.tracks.map(t=> t.exeternal_urls.spotify)
}