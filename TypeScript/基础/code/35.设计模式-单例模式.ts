// 创建一个声音管理类
class SoundManager {
  // 在内部实例化
  static init = new SoundManager()
  // 将构造函数设置为私有的, 外部就无法通过 new 关键字实例化
  private constructor () {}
}

// 外部使用
SoundManager.init

// 创建一个敌人管理类
class EnemyManager {
  private static instance: EnemyManager
  private constructor() {}
  static Init() {
    // 当前单例是否产生, 懒加载, 不实用时节省内存
    if (!this.instance) {
      EnemyManager.instance = new EnemyManager()
    }
    return EnemyManager.instance
  }
}

// 外部使用
EnemyManager.Init()
