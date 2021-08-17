/**
 * 操作文件数据模块
 * 操作文件中的数据
 * 
 * 如果需要获取一个函数中异步操作的结果，必须通过回调函数来获取 Day04-14
 */

const fs = require('fs')

/**
 * 读取
 * @param {string} url 读取的文件路径
 * @param {function} callback 回调函数
 */
exports.read = (url, callback) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data))
  })
}

/**
 * 保存
 * @param {string} url 读取的文件路径
 * @param {string} name 读取的元素名
 * @param {object} item 新增数据
 * @param {function} callback 回调函数
 */
exports.save = (url, name, item, callback) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    let fileData = JSON.parse(data)
    item.id = fileData[name][fileData[name].length - 1].id + 1
    fileData[name].push(item)
    fs.writeFile(url, JSON.stringify(fileData), (err, data) => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

/**
 * 修改
 * @param {string} url 读取的文件路径
 * @param {string} name 读取的元素名
 * @param {object} item 修改的数据
 * @param {function} callback 回调函数
 */
exports.update = (url, name, item, callback) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    let fileData = JSON.parse(data)
    let getItem = fileData[name].find((i) => i.id === item.id)
    for (let key in item) {
      getItem[key] = item[key]
    }
    fs.writeFile(url, JSON.stringify(fileData), (err, data) => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

/**
 * 查找数据
 * @param {string} url 读取的文件路径
 * @param {string} name 读取的元素名
 * @param {number} id 查询的ID
 * @param {function} callback 回调函数
 */
exports.finds = (url, name, id, callback) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    let findData = JSON.parse(data)[name]
    let item = findData.find((i) => i.id === id)
    callback(null, item)
  })
}

/**
 * 删除数据
 * @param {string} url 读取的文件路径
 * @param {string} name 读取的元素名
 * @param {number} id 删除的ID
 * @param {function} callback 回调函数
 */
exports.delete = (url, name, id, callback) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    let fileData = JSON.parse(data)
    let getIndex = fileData[name].findIndex((i) => i.id === id)
    fileData[name].splice(getIndex, 1)
    fs.writeFile(url, JSON.stringify(fileData), (err, data) => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}
