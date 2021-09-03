/**
 * 读写内容
 */
import fs from 'fs'
import path from 'path'

import superagent from 'superagent'

// import HtmlAnalyzer from './htmlAnalyzer'

export interface Ana {
  analyze: (html: string, filePath: string) => string
}

class Crowller {
  private filePath = path.resolve(__dirname, '../../data/data.json')
  
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

export default Crowller
