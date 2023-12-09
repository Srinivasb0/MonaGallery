// Fetching collectables from monaverse
const apiUrl = 'https://api.hackathon.monaverse.com/collectibles?type[]=Space&property[]=Music'

const space1 = {}
const space2 = {}
const space3 = {}
const space4 = {}
const space5 = {}
const spcae6 = {}
const spcae7 = {}
const space8 = {}

const gallery_data = {}
async function monaAPI() {
    const response = await fetch(apiUrl)
    const musicApi = await response.json();
    // space1 = musicApi['data'][0];
    // space2 = musicApi['data'][1];
    // space3 = musicApi['data'][2];
    // space4 = musicApi['data'][3];
}

// console.log(space1, space2, space3);
console.log(musicApi);

monaAPI()