# vue-study
vue课堂学习
1. 计算属性和方法的区别：
   计算属性是基于他们的响应式依赖进行缓存的，只要依赖的message的值没有改变，多次执行reversedMessage会立即返回之前的计算结果，
   而方法则会再次执行来获得结果。
   reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }

2. Vue中的一些简写命令：
   v-bind:  -->  :
   v-on:  --> @

3. v-on 和 v-bind的区别：
   v-bind 指令用于绑定 Html 属性
   v-on 指令用于绑定 Html 事件

4. preventDefault()、stopPropagation()、return false 之间的区别:
   1). event.stopPropagation(): 阻止事件的冒泡，但是默认事件任然会执行
   2). event.preventDefault(): 阻止默认事件，但是会发生冒泡
   3). return false:
      - event.preventDefault();
      - event.stopPropagation();
      - 停止回调函数执行并立即返回
  　　