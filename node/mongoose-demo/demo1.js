const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// 创建一个模型，设计数据库
// MongoDB 是动态的，非常的灵活，只需要在代码中设计数据库就可以了
// MongoDB 这个包就可以让设计编写过程变得非常简单
const Cat = mongoose.model('Cat', { name: String });
// 实例化一个 Cat
const kitty = new Cat({ name: 'Jack' });
// 持久保存 Kitty 实例
kitty.save().then(() => console.log('meow'));
