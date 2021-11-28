const { TwitterApi } = require('twitter-api-v2');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const needle = require('needle');
const PORT = 3000;
const TOKEN = "AAAAAAAAAAAAAAAAAAAAAOR7WAEAAAAAWv9%2Fx7exJUqtB3Bqm7VEeMuDB%2F0%3D6ikYYAnVlZHnKsajjCYUBBPsZam8mVlxPIV7q6HUBQzM8c7BGp"

const app = express();
const client = new TwitterApi(TOKEN
    // appKey: "HPRrQrTnQ5DHyO5jTY04j8wp4",
    // appSecret: "GKFjtap12CVnpMNehmsD0Fus9yF2SCYSMNUlNCaReiSLZe3R7H"
)
const server = http.createServer(app);

const spaceUrl = "http://api.twitter.com/2/spaces/search?query=nft&state=live"

async function getSpaces() {
    const data = await client.v2.searchSpaces({ query: 'nft', 'space.fields': ['started_at', 'title', 'lang'], 'user.fields': ['name', 'username', 'profile_image_url'], state:'live' })
    console.log(data);
    // {
    //     headers: {
    //         Authorization: `Bearer ${TOKEN}`
    //     }
    // }, (res) => {console.log(res)})
    // return response
}
async function run() {
    try {    
        console.log("yes")
        getSpaces();
        console.log(" ################## DONE ################")
    } catch(error) {
        console.log("oops")
        console.log(error)
        process.exit(1)
    }
}

run()
// server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
// async () => {
//     try {
//         await getSpaces()
//         console.log("here")
//     } catch(error) {
//         console.log("oops")
//         console.error(object)
//         process.exit(1)
//     }
// }
