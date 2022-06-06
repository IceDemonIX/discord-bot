const Discord = require("discord.js")
require("OTgzNDg5MTQ3Mjk1NjYyMTkw.GNqlsk.JaQyxAbDQPDtCo6N5Y5h2WpSeLPwseiWFJ2mrE").config()
const TOKEN = "OTgzNDg5MTQ3Mjk1NjYyMTkw.GNqlsk.JaQyxAbDQPDtCo6N5Y5h2WpSeLPwseiWFJ2mrE"

const client = new Discord.Client({ 
    intents:[
    "GUILDS",
    "GUILD_MESSAGES"
    ]
})

client.on ("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World!")
    }
    if (message.content == "hello") {
        message.reply("whats up!")
    }
})

client.login(process.env.TOKEN)