
# 前提

- レスポンシブデザイン
- jQuery(3.5) をベース
- 企業サイトなどシンプルな情報発信系サイト
- フォントは `Noto Sans JP` を使う。

# ディレクトリ

- /assets/css/style.css<br>全てのスタイルを記載するスタイルシート
- /assets/js/library<br>jQuery等、サードパーティのJavaScript
- /assets/js/common<br>複数ページで使うJavaScript
- /assets/js/page<br>ページの種類別のJavaScript

# ページ構造

.html ファイルは以下の構造を持たせる。

<img src="image-01.png" width="480">

- header
- loading
- page
- mask
- drawer
- common-js
- page-js
- footer