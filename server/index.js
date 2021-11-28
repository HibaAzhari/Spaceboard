const { TwitterApi } = require('twitter-api-v2');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const needle = require('needle');
const PORT = 3000;
const TOKEN = "AAAAAAAAAAAAAAAAAAAAAOR7WAEAAAAAWv9%2Fx7exJUqtB3Bqm7VEeMuDB%2F0%3D6ikYYAnVlZHnKsajjCYUBBPsZam8mVlxPIV7q6HUBQzM8c7BGp"

const app = express();
const client = new TwitterApi(TOKEN
)
const server = http.createServer(app);

const spaceUrl = "http://api.twitter.com/2/spaces/search?query=nft&state=live"

async function getSpaces() {
    const data = await client.v2.searchSpaces({ query: 'nft', 'space.fields': ['started_at', 'title', 'lang'], 'user.fields': ['name', 'username', 'profile_image_url'], state:'live' })
    console.log(data);
}
async function run() {
    try {    
        getSpaces();
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

run()
