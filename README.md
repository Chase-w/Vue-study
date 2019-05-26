# vue-study
vue课堂学习
1. 计算属性和方法的区别：
   计算属性是基于他们的响应式依赖进行缓存的，只要依赖的message的值没有改变，多次执行reversedMessage会立即返回之前的计算结果，
   而方法则会再次执行来获得结果。
   reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }