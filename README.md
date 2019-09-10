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
