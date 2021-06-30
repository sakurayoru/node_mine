const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
const token = require("./token.json").token
const rolename = require("./role.json").role

client.on('ready', () => {
  console.log(`${client.user.username} でログインしています。`)
})
client.on('message', async (message) => {
  // メッセージが "!reboot ガイザー" で、送信されたのがサーバー内だったら実行する
  if (message.content === '!reboot ガイザー' && message.guild) {
    // role.jsonに書かれた名前の役職のIDを取得する
    const role = message.guild.roles.cache.find(roles => roles.name === rolename)
      // 取得した役職のIDから、役職を持っているか確認し、持っていなかったら、ここで処理を止める
      if (!message.member.roles.cache.has(role.id)) return
        // GeyserMCを再起動させる
        message.channel.send('GeyserMCを再起動します\n')
        const exec = require('child_process').exec
        exec('sh /opt/mc/sh/senkamc_geyser_stop.sh', (err, stdout, stderr) => {
        if (err) { console.log(err); }
          console.log(stdout);
    });
    console.log('GeyserMCを再起動します\n')
   }
   if (message.content === '!reboot geyser' && message.guild) {
    const role = message.guild.roles.cache.find(roles => roles.name === rolename)
      if (!message.member.roles.cache.has(role.id)) return
        message.channel.send('GeyserMCを再起動します\n')
        const exec = require('child_process').exec
        exec('sh /opt/mc/sh/senkamc_geyser_stop.sh', (err, stdout, stderr) => {
        if (err) { console.log(err); }
          console.log(stdout);
    });
    console.log('GeyserMCを再起動します\n')
   }
 })

client.login(token)