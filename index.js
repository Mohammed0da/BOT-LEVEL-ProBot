// رفع لفل حسابات بروبوت
const Discord = require("discord.js-selfbot-v13"); 
const { keep_alive } = require("./keep_alive");
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).leveling({
    channel: '1076598098043879575',//اي دي الشات
    randomLetters: false, 
    time: 10000, //الوقت 
    type: 'eng' //اللغة 
});
client.login(process.env.token);

const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
