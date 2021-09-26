/**
 * 分析器
 */
import fs from 'fs'

import cheerio from 'cheerio'

import { Ana } from './crowller'

interface List {
  title: string
}

interface Data {
  [propName: number]: List[]
}

export default class Analyzer implements Ana {
  // 单例模式
  private constructor() {}

  private static instance: Analyzer

  static getInstance () {
    if (!Analyzer.instance) {
      Analyzer.instance = new Analyzer()
    }
    return Analyzer.instance
  }

  public analyze(html: string, filePath: string) {
    const result = this.getInfo(html)
    const data = this.getData(result, filePath)
    return JSON.stringify(data)
  }

  private getInfo(html: string) {
    const $ = cheerio.load(html)
    const cItems = $('.course-item')
    const list: List[] = []
    cItems.map((index, item) => {
      const desc = $(item).find('.course-desc')
      const title = desc.eq(0).text()
      list.push({
        title
      })
    })
    return list
  }

  private getData(res: List[], filePath: string) {
    let data: Data = {}
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    data[new Date().getTime()] = res
    return data
  }
}
