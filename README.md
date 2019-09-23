# DailyTopic

每日题目
```html
<div id='box'>

    </div>
    <style>

    </style>
    解1：
    定位 top:50%;left:50%;
    margin-top:-长度的一半
    margin-left:-宽度的一半
    解2：
    利用flex布局 实现子元素快速居中
    <div class='father' style="display:flex;align-items:center;justfly-count:center">
        <div class='son'>

        </div>
    </div>
    ```

2. `<img>`的 title 和 alt 有什么区别.  
   title 是鼠标放到图片上时显示的文字
   alt 是加载失败是显示的文字

3. web 标准以及 W3C 标准是什么?
   web 标准 将行为，结构，表现分离，使其更具有模块化
   w3c 标准 标签字母小写 标签闭合 嵌套正确 外部链接 css 和 js  

4. 说一下为什么js是弱类型语言?
   弱类型语言 是相对于强类型语言来说的，在强类型语言中，变量类型有多中，例如int char float boolean等 不同的类型相互转换有时需要强制转换而JavaScript只是一种类型 var，为变量赋值是会自动判断类型病进行转换所以JavaScript是若预言，就体现在变量定义类型var上 

5. 为什么原型链的终点是null,而不是Object.prototype
    参考:https://segmentfault.com/q/1010000005795507
    原型链是对象的原型链,所有节点都必须是对象.规范要求原型链的长度必须是有限的.
    应该用什么来作为对象的终点 既 Object.prototype.__proto__ == ?
    null是个空对象,可以作为原型链的终点.

6. vue生命周期及其用法
    1，beforeCreate：创建vue实例之前的钩子函数
    2，created：实例创建完成之后的钩子函数
    3，beforeMount：开始挂载编译生成的HTML到对应位置时触发的钩子函数
    4，mounted：将编译好的HTML挂载到页面上完成之后执行的钩子函数
    5，beforeUpdate：将编译好的html替换el属性所指向的dom对象或替换对应html标签里面的内容
    6，updated：监听data数据变化随时更新dom
    7，beforeDestroy：实例销毁之前执行的钩子函数
    8，destroyed：实例销毁执行的钩子函数.
7. 列举下你知道的代码规范：
    1，写干净整洁的代码，请尊重空间，请尊重人眼的偏好
    2，高效运用注释
8. 熟悉w3c标准，w3c标准是什么？
    标准 标签字母小写 标签闭合 嵌套正确 外部链接 css 和 js
9. js实现继承的方式
    1. 原型链继承 2. 构造函数继承 3. 组合继承 4. 关联继承 (其中一项是错误的,请选出)
    关联继承是错误的，
    继承方式共有六种分别为：
    1，原型链：利用原型让一个引用类型继承另外一个引用类型的属性和方法。
    2，借用构造函数：在子类型构造函数的内部调用超类构造函数，通过使用call()和apply()方法可以在新创建的对象上执行构造函数。
    3，组合继承：将原型链和借用构造函数的技术组合在一块，从而发挥两者之长的一种继承模式。
    4，原型式继承：借助原型可以基于已有的对象创建新对象，同时还不必须因此创建自定义的类型。
    5，寄生式继承：创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真正是它做了所有工作一样返回对象。
    6，寄生组合式继承：通过借用函数来继承属性，通过原型链的混成形式来继承方法。

10.ES5/ES6 的继承除了写法以外还有什么区别？
    1，class 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量。
    2，class内部会启用严格模式。
    3，class的方法都不可举枚的。
    4，class 内部无法重写类名。

11.JS 异步解决方案的发展历程以及优缺点
    1，回调函数
    优点：解决了同步的问题。
    缺点：回调地狱，不能 return。
    2， Promise
    优点：解决了回调地狱问题。
    缺点：无法取消promise，错误需要回调函数捕获。
    3， Generator
    特点：可以控制函数的执行。
    4，Async/await
    优点：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题。
    缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

12.两个数组合并为一个数组
```javascript
     var a1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
     var a2 = ['A', 'B', 'C', 'D']
     var j=-1;
     var arr=[]
     for(let i=0;i<a1.length;i++){
        if(i%2 ===0){
         j++
         arr=arr.concat((a1.slice(i,i+2)).concat(a2[j]))
           }
       }
     console.log(arr)
```  

13. Vue实现数据双向绑定的原理  
  vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。
  vue是通过Object.defineProperty()来实现数据劫持的。
  通过Object.defineProperty( )对属性设置一个set函数，当数据改变了就会来触发这个函数，所以我们只要将一些需要更新的方法放在这里面就可以实现data更新view了


14. HTML 块元素，行内元素，行内块分别有哪些？请列举  
块级元素：div、p、h1-h6，ul，li,hr

行内元素：a b small em i img span sub sup u

15. 说一下什么是 雪碧图（CSSsprite）  
把多个图合并到一个图片文件，通过css控制输出

16.JavaScript 变量类型有几种，分别是什么。
JavaScript 中值的类型共有八种：Number,String,Symbol,BigInt,Boolean,Undefined,Null,Object。

17.写React / Vue 项目中，组件为什么要用key，其作用是什么？
在开发过程中我们要保证某个元素的key在其同级元素中具有唯一性。在Diff算法中，会借助元素的key值来判断该元素是是最新创建的还是移动过来的，从而减少不必要的元素渲染。

实操题:
1. 实现一个简单的计数器. 加减号点击数量能跟着变 即可 代码play下的test.html

