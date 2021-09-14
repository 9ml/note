const uInfo: any = undefined

function catchErrorA(target: any, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value
  descriptor.value = function () {
    try {
      fn()
    } catch (e) {
      console.log('不存在')
    }
  }
}

function catchErrorB(msg: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = function () {
      try {
        fn()
      } catch (e) {
        console.log(msg)
      }
    }
  }
}

class User {
  // @catchErrorA
  @catchErrorB('uInfo.name 不存在')
  getName() {
    return uInfo.name


    // try {
    //   return uInfo.name
    // } catch (error) {
    //   console.log('uInfo.name 不存在')
    // }
  }

  // @catchErrorA
  @catchErrorB('uInfo.age 不存在')
  getAge() {
    return uInfo.age
    // try {
    //   return uInfo.age
    // } catch (error) {
    //   console.log('uInfo.age 不存在')
    // }
  }
}

const user = new User()
user.getName()
user.getAge()
