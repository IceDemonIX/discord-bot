const Discord = require("discord.js")
require("OTgzNDg5MTQ3Mjk1NjYyMTkw.GY3Cn9.G70Ml6RHMNW-q1w5qBDBi1Eyf6P0E5kPRRJdS0").config()
const TOKEN = "OTgzNDg5MTQ3Mjk1NjYyMTkw.GY3Cn9.G70Ml6RHMNW-q1w5qBDBi1Eyf6P0E5kPRRJdS0"

const client = new Discord.Client({ 
    intents:[
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS" 
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

const welcomeChannelId = "983512382670266378"

client.on("guildMemberAdd", (member) => {
member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
})

client.login(process.env.TOKEN)