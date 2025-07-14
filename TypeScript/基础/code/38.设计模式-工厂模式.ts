// 汽车类型
enum CarType {
  BMW,
  Audi,
  Benz,
}

class Car {
  constructor(public name: string) {}
  // 工厂方法
  static create(type: CarType): Car {
    let car: Car;
    switch (type) {
      case CarType.BMW:
        car = new BWMCar("宝马");
        break;
      case CarType.Audi:
        car = new BWMCar("奥迪");
        break;
      case CarType.Benz:
        car = new BWMCar("奔驰");
        break;
    }
    return car;
  }
}

class BWMCar extends Car {}
class AudiCar extends Car {}
class BenzCar extends Car {}

const bmw = Car.create(CarType.BMW)
const audi = Car.create(CarType.Audi)
const benz = Car.create(CarType.Benz)

export {}
