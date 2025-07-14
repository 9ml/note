interface PersonInterface<T, S> {
  name: string,
  age: number,
  extraInfo: T,
  ddrInfo: S
}

type Job = {
  title: string,
  company: string
}

let manA: PersonInterface<string, boolean> = {
  name: '张三',
  age: 18,
  extraInfo: 'Halo',
  ddrInfo: false
}

let manB: PersonInterface<number, string> = {
  name: '张三',
  age: 18,
  extraInfo: 100,
  ddrInfo: '123'
}

let manC: PersonInterface<Job, string> = {
  name: '张三',
  age: 18,
  extraInfo: {
    title: 'HHH',
    company: 'atcat'
  },
  ddrInfo: '123'
}

export {}
