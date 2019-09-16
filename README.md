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
    代码在`./JiangCX/prototype.js`

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

8. 熟悉w3c标准，w3c标准是什么？



    
实操题:
1. 实现一个简单的计数器. 加减号点击数量能跟着变 即可
   ```html
   <!-- 写到此代码块即可 -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
   	<meta charset="UTF-8">
   	<title>Document</title>
   </head>
   <body>
   	<div>
   		<button class="jia">+</button>
   		<input value="0">
   		<button class="jian">-</button>
   	</div>
   </body>
   </html>
   <script>
   var jia=document.getElementsByClassName('jia')[0]
   var jian=document.getElementsByClassName('jian')[0]
   var val=document.getElementsByTagName('input')[0]
   var num=0
   jia.onclick=function () {
   	num++
   	val.value=num
   }

jian.onclick=function () {
num--
val.value=num
}
</script>
```
