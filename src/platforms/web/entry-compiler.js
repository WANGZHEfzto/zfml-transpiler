/* @flow */

// export { parseComponent } from 'sfc/parser'
import { compile } from './compiler/index'

const fs = require('fs')
const resolve = require('path').resolve

export function wxmlCompile (fileList: Array<string>) {
  const srcFiles = fileList.reverse()
  var files = srcFiles.map(path => ({
    path,
     // 根据文件路径以utf-8编码格式将文件读取出来挂在当前文件对象中
    template: fs.readFileSync(path, 'utf-8')
  }))
  return compile(files)
}

// export { ssrCompile, ssrCompileToFunctions } from './server/compiler'

export { compile, compileToFunctions } from './compiler/index'
