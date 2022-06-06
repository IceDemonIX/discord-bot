const Discord = require("discord.js")
require("OTgzNDg5MTQ3Mjk1NjYyMTkw.GxBN7m.yvYVdfuc5LHQrlS-g79IUkGUK5AqpQ-aQGrEJw").config()
const TOKEN = "OTgzNDg5MTQ3Mjk1NjYyMTkw.GxBN7m.yvYVdfuc5LHQrlS-g79IUkGUK5AqpQ-aQGrEJw"

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