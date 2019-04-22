const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569986806767026186")
setInterval(function() {
channel.send(`Badr  Badr  Badr  Badr  Badr`);
}, 30)
})

client.login(process.env.BOT_TOKEN);