const Discord = require("discord.js");
const request = require('request');

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on('ready', async () => {
  console.log(client.user.username + ' * Spy Run *')
  console.log('================================')
  console.log()
})

client.on('message', message => {
  if(message.author.bot !== true) {
    
    if(message.content === '') {
      if(message.attachments.map(data => data.url).toString()) {
        console.log('\x1b[36m',`File | ${message.guild.name} | ${message.author.username} | ${message.attachments.map(data => data.url).toString()}`)
        // Webhook request.post('https://discord.com/api/webhooks',{ json: { content: `${message.attachments.map(data => data.url).toString().match(/(?:(?:https?|http):\/\/|cdn\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)}`,embeds: null} });
      } else if(message.stickers.map(data => data.id).toString()){
        console.log('\x1b[33m',`Stic | ${message.guild.name} | ${message.author.username} | ${message.stickers.map(data => data.id).toString()}`)
      }
    } else {
      console.log('\x1b[32m',`Chat | ${message.guild.name} | ${message.author.username} | ${message.content}`)
    }
  }
})

client.login('');
