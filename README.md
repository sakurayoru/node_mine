# node_mine
マイクラとガイザーの再起動をNode.js使ってディスコードで管理してみた

## 使い方
- nodejs14.xとnpmが入ってることとGeyserMCがsystemdで自動再起動するようなrestart=alwaysになっていることを確認
```
node -v
npm -v
```
- サーバー設定などから再起動させたいロールのロールIDを取ってくる
- サーバーの追加でメッセージを送りたい場所のチャンネルIDを取ってくる
- config.jsonの```role_ID```に再起動させられるロールIDを指定
- config.jsonの```tokenID```のtokenIDにtokenを入力する
- config.jsonの```channel_ID```にチャンネルIDを入力する
- index.jsと同じフォルダにGeyserMCを再起動するスクリプトを置きます(```geyser_reboot.sh```)
- ```geyser_reboot.sh```に書かれたパス等をよしなに調整
- ```npm i```を実行
- ```node index.js```を実行(これだとフォアグラウンド動作の為pm2やscreen、systemdでバックグラウンドにすること推奨)
- 再起動する必要があるタイミングでDiscordで```!reboot geyser```と入力