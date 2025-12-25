# movie-AI-app
AI driven movie search app.

## 要件
- scrimbaのデザインに従う。

## 仕様
- tailwindを使う
- 最初にユーザーに３つの質問を入力させる。
- チャンク化したmovies.txtをopenaiでチャンクをベクトル化してsupabaseのベクトルdatabaseに保存する。
- 質問のインプットを改行でjoinしてまとめて、ベクトル化して、vector databaseに類似度で検索して質問に近いdataをとってきて、それを改行でjoinしてchatCompletionに質問と一緒にinputして解答を出す。
- chatのmessageはpushして追加していく。


## 設計
- 最初はviteでフロントでapi-key使う。
- 最終的にvercelでserverless化する。