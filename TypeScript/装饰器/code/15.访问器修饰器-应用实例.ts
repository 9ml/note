function RangeValidate(min: number, max: number) {
  return function(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原始的 setter 方法, 以便在后续调用中使用
    const originalSetter = descriptor.set
    // 重写 setter 方法, 加入温度范围验证逻辑
    descriptor.set = function (v: number) {
      // 检查设置的值是否在指定的最小值和最大值之间
      if (v < min || v > max) {
        throw new Error(`${propertyKey}的值应该在${min} - ${max}之间!`)
      }

      // 如果值在范围内, 且原始的 setter 方法存在, 则调用原始的 setter 方法
      if (originalSetter) {
        originalSetter.call(this, v)
      }
    }
  }
}

class Weather {
  private _temp: number
  constructor(temp: number) {
    this._temp = temp
  }

  @RangeValidate(-50, 50)
  set temp(v) {
    this._temp = v
  }
  get temp() {
    return this._temp
  }
}

const w = new Weather(25);
console.log(w)
w.temp = 70
console.log(w)

export {}