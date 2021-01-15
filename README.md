# node_mine
マイクラとガイザーの再起動をNode.js使ってディスコードで管理してみた

## 使い方
- nodejs14.xとnpmが入ってることを確認
```
node -v
npm -v
```
- index.jsと同じフォルダにガイザーやminecraftを再起動する.shを生成(```geyser_restart.sh```&&```minecraft_restart.sh```)
- token.jsonの```{{token}}```にtokenを代入する
- token.txtにDiscordBOTのtokenを書き込む(最後に改行必要?)
- ```npm i```を実行
- ```node index.js```を実行(これだとフォアグラウンド動作の為pm2やscreenでバックグラウンドにすること推奨)