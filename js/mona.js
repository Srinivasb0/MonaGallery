// Fetching collectables from monaverse
const apiUrl = 'https://api.hackathon.monaverse.com/collectibles?sort=popularity%3Adesc'


async function monaAPI() {
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log(data);
}

monaAPI()