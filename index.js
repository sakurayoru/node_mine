import systemctl from 'systemctl'
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
const text = fs.readFileSync("./token.txt", 'utf8')
const token = text.toString()

client.on('ready', () => {
  console.log(`${client.user.username} でログインしています。`)
})

client.on('message', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!')
  }
  if(msg.content === '!reboot ガイザー'){
    systemctl.restart('xpsv-geyser').than(output => console.log)
    msg.channel.send('ガイザーを再起動します\n')
    console.log('ガイザーを再起動します\n')
  }
  if(msg.content === '!reboot マイクラ'){
    msg.channel.send('ごめんね\nこの機能は実装できてないんだ')
  }
})

client.login(token)