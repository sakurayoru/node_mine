# node_mine
マイクラとガイザーの再起動をNode.js使ってディスコードで管理してみた

## 使い方
- nodejs14.xとnpmが入ってることとGeyserMCがsystemdで自動再起動するようなrestart=alwaysになっていることを確認
```
node -v
npm -v
```
- index.jsと同じフォルダにGeyserMCを再起動する.shを置きます(```geyser_reboot.sh```)
- ```geyser_reboot.sh```に書かれたパス等をよしなに調整
- token.jsonの```tokenID```のtokenIDにtokenを入力する
- role.jsonの```role_name```に再起動させられるロールを1つ指定
- ```npm i```を実行
- ```node index.js```を実行(これだとフォアグラウンド動作の為pm2やscreen、systemdでバックグラウンドにすること推奨)
