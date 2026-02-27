// getbase64.js
const fs = require('fs')
const path = require('path')

// 読み込むフォントファイルと、出力先のパスを指定
const fontFilePath = path.join(__dirname, 'NotoSansJP-Regular.ttf')
const outputFilePath = path.join(__dirname, 'NotoSansJP-Regular-base64.txt')

fs.readFile(fontFilePath, (err, data) => {
  if (err) {
    console.error('フォントファイルの読み込みに失敗しました:', err)
    return
  }

  const base64Data = data.toString('base64')
  fs.writeFile(outputFilePath, base64Data, (err) => {
    if (err) {
      console.error('Base64ファイルの書き込みに失敗しました:', err)
      return
    }
    console.log('Base64変換が完了しました！ファイル:', outputFilePath)
  })
})
