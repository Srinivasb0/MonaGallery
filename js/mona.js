// Fetching collectables from monaverse
const spaceUrl = 'https://api.hackathon.monaverse.com/collectibles?type[]=Space&property[]=Music'
const avatarUrl = "https://api.hackathon.monaverse.com/collectibles?type%5B%5D=Avatar&property%5B%5D=Robot"

const gallery_data = {}
async function monaSpaceAPI() {
    const response = await fetch(apiUrl)
    const space = await response.json();
    console.log(space);
}

async function monaAvatarAPI() {
    const response = await fetch(avatarUrl)
    const avatar = await response.json();
    console.log(avatar);
}
  
monaAvatarAPI()