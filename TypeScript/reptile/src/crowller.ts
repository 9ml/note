import fs from 'fs'
import path from 'path'

// TS - .d.ts(翻译文件) - JS
import superagent from 'superagent'
import cheerio from 'cheerio'

interface List {
  title: string
}

interface Data {
  [propName: number]: List[]
}

class Crowller {
  private url = `http://www.dell-lee.com/`
  private filePath = path.resolve(__dirname, '../data/data.json')
  
  constructor() {
    this.init()
  }

  async init() {
    const html = await this.getRawHtml()
    const result = this.getInfo(html.text)
    const data = this.getData(result)
    this.writeFile(JSON.stringify(data))
  }

  async getRawHtml() {
    return await superagent.get(this.url)
  }

  getInfo(html: string) {
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

  getData(res: List[]) {
    let data: Data = {}
    if (fs.existsSync(this.filePath)) {
      data = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
    }
    data[new Date().getTime()] = res
    return data
  }

  writeFile(data: string) {
    fs.writeFileSync(this.filePath, JSON.stringify(data))
  }


}

const crowller = new Crowller()
