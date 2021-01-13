# node_mine
マイクラとガイザーの再起動をNode.js使ってディスコードで管理してみた

## 使い方
- nodejs14.xをインストール
- index.jsと同じフォルダにガイザーやminecraftを再起動する.shを生成(geyser_restart.sh&&minecraft_restart.sh)
- index.jsと同じフォルダにtoken.txt(UTF-8)を生成
- token.txtにDiscordBOTのtokenを書き込む(最後に改行必要?)
- ```node init```を実行
- ```node index.js```を実行(これだとフォアグラウンド動作の為pm2やscreenでバックグラウンドにすること推奨)