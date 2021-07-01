const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
const token = require("./config.json").token
const roleID = require("./config.json").role
const channel = require("./config.json").channel

client.on('ready', () => {
  console.log(`${client.user.username} でログインしています。`)
})
client.on('message', async (message) => {
  // メッセージが "!reboot ガイザー" で、送信されたのがサーバー内だったら実行する
  if (message.content === '!reboot geyser' && message.guild) {
    // role.jsonに書かれたIDを持ってるかチェック
    if (!message.member.roles.cache.has(role)) return
      // GeyserMCを再起動させる
      message.channel.send('GeyserMCを再起動します\n')
      message.guild.channels.cache.get(channel).send('GeyserMCを再起動します\n')
      const exec = require('child_process').exec
      exec('sh /opt/mc/sh/senkamc_geyser_stop.sh', (err, stdout, stderr) => {
      if (err) { console.log(err); }
        console.log(stdout);
      });
      console.log('GeyserMCを再起動します\n')
  }
})

client.login(token)