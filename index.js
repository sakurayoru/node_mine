const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
const token = require("./token.json").token

client.on('ready', () => {
  console.log(`${client.user.username} でログインしています。`)
})

client.on('message', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!')
  }
  if(msg.content === '!reboot ガイザー'){
    msg.channel.send('ガイザーを再起動します\n')
    const exec = require('child_process').exec
    exec('sh geyser_restart.sh', (err, stdout, stderr) => {
      if (err) { console.log(err); }
      console.log(stdout);
    });
    console.log('ガイザーを再起動します\n')
  }
  if(msg.content === '!reboot minecraft'){
    msg.channel.send('minecraftを再起動します\n')
    const exec = require('child_process').exec
    exec('sh minecraft_restart.sh', (err, stdout, stderr) => {
      if (err) { console.log(err); }
      console.log(stdout);
    });
    console.log('ガイザーを再起動します\n')
  }})

client.login(token)