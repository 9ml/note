// UserInterface 接口
interface UserInterface {
  name: string
  age: number
  gender?: string
  readonly IDCard: string
  run: (n: number) => void
}

const user: UserInterface = {
  name: 'Tom',
  age: 18,
  gender: '男',
  IDCard: '110123341111',
  run(n) {
    for (let i = 0; i < n; i++) {
      console.log(`跑`)
    }
  }
}

export {}
