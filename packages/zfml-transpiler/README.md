# zfml-transpiler

This package can be used to compile wxml templates.([view source code here](https://github.com/IOriens/wxml-transpiler)). It works just like wcc.exe, wcc.

## Usage

```sh
npm i zfml-transpiler
```

``` js
const compiler = require('zfml-transpiler')

const fileList = [
    './pages/index/index.wxml',
    './common/head.wxml',
    './common/foot.wxml'
  ]

const res = compiler.wxmlCompile(fileList)
```

## Liscense

MIT