/**
 * 读写内容
 */
import fs from 'fs'
import path from 'path'

import superagent from 'superagent'

import Analyzer from './analyzer'

// import HtmlAnalyzer from './htmlAnalyzer'

export interface Ana {
  analyze: (html: string, filePath: string) => string
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/data.json')
  
  constructor(private url: string, private analyzer: Ana) {
    this.init()
  }

  private async init() {
    const html = await this.getRawHtml()
    const data = this.analyzer.analyze(html, this.filePath)
    this.writeFile(data)
  }

  private async getRawHtml() {
    return (await superagent.get(this.url)).text
  }

  private writeFile(data: string) {
    fs.writeFileSync(this.filePath, data)
  }
}

const url = 'http://www.dell-lee.com/'
// const analyzer = new Analyzer()
// 单例模式
const analyzer = Analyzer.getInstance()
new Crowller(url, analyzer)
