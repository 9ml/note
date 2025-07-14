class Person {
  next: Person | null = null;  // ✅ 推荐
  constructor(public name: string) {}
}

// 构建链表
let p = new Person('张三');
p.next = new Person('李四');
p.next.next = new Person('王五');

// 删除节点（跳过李四）
p.next = p.next.next;

// 添加节点（赵六插入到李四的位置）
const man = new Person('赵六');
man.next = p.next;
p.next = man;

// 安全遍历
let current: Person | null = p;  // 临时变量避免修改 p
while (current) {
  console.log(current.name);
  current = current.next;  // 自动处理 null
}

