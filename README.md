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

17. 写React / Vue 项目中，组件为什么要用key，其作用是什么？

在开发过程中我们要保证某个元素的key在其同级元素中具有唯一性。在Diff算法中，会借助元素的key值来判断该元素是是最新创建的还是移动过来的，从而减少不必要的元素渲染。

18. 对Proxy的理解
    在对目标对象的操作之前先拦截，对外界对象操作进行过滤和修改的默认行为，可以不直接的操作对象，而是通过对象的代理对象间接的操作对象。
    let proxy = new Proxy(target, handler)
    target是Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数）
    handler 一个对象，其属性是当执行一个操作时定义代理行为的函数，也就是自定义行为

    注：handle可以为{}，但是不能为null，否则会报错


19. (1)在 Vue 中，子组件为什么不可以修改父组件传递的 Prop？

        因为当父组件属性被修改时，该值就会被覆盖，如果有不同的变化，可以基于props和computed

    (2)如果修改了，Vue 是如何监控到属性的修改并给出警告的？

        在initprops时，在defineReactive时通过判断是否在开发环境，如果在开发环境，会在触动set的时候判断是否此key处于updatingChildren中被修改，如果不是，说明此修改来自子组件，会触发warning提示。
20. 什么是相对路径?什么是绝对路径? 小程序的根目录从哪里开始?vue的根目录从哪里开始?
        绝对路径是从盘符开始的路径。
        相对路径：是从当前路径开始的路径。
            1. ./ 表示当前目录 ../ 表示上级目录 此外pages前需/开头（刚路径问题帖子看到的）
            2. 小程序不知处根目录. utils和images和pages同级，但是用 / 却不是从根目录开始寻找，而是在当前页面下目录。即不支持根目录/
            3. 在js中使用import引入图片时不能通过根目录进行查找，而wxml则没有这种限制
            4. 每个小程序项目的根目录会有一个project.config.json的项目配置文件，可以设置miniprogramRoot属性指定小程序源码的目录, 默认为根目录(/)。
                


 21.小程序中全局变量用什么来传值
        在utils文件中写好js，当需要使用是先引进utils.js，用utils.方法名来调用全局变量中的方法。

 22.什么是绝对路径
    绝对路径是指从根元素开始到以其他子目录结束的查找文件或文件夹所需的完整详细信息。

 23.对作用域链的理解
    作用域链的作用就是保证保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，知道访问到window对象被终止，作用域链变量向下访问是不被允许的。

 24.什么是事件代理？
    事件代理又被成为事件委托。事件代理就是把事件绑定到父级元素上，让父元素担起监听的职责。事件代理的原则用到了事件冒泡的原理来实现。可以使新增的子元素不需要绑定事件。可以提高性能。

 25.xhtml和html有什么区别?
    1，主要是xhtml可以兼容一些大浏览器，手机及PDA并且浏览器也能快速正确地编译网页。
    2，XHTML必须正确地嵌套，闭合，区分大小写，文档必须有根元素。

 26. HTML5 为什么只需要写 <!DOCTYPE HTML>？

    1，HTML5不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器行为。
    2，html4.01基于SGML，所以需要对DTD进行引用，才能告知浏览器所使用的文档类型。

 27.网页验证码是干嘛的，是为了解决什么安全问题？
    1，区分用户是人还是计算器的公共自动程序。可以防止恶意破解密码，刷票。
    2，有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。

 28. 谈谈浮动和清除浮动
      浮动的框可以向左或向右移动，直到他的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流的块框表现得就像浮动框不存在一样。浮动的块框会漂浮在文档普通流的块框上

 29.几种常见的CSS布局
    1，流体布局
    2，圣杯布局
    3，双飞翼布局

 30.eval是做什么的
    1，eval可以把字符串解析成js代码执行。
    2，由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')')。
    注：应该避免使用eval，不安全，非常耗性能。

 31.HTML5的离线储存工作原理能不能解释一下？
    原理：html5的离线存储是基于新建了一个.appcache文件的缓存机制，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储下来。之后当网络处于离线状态时，浏览器会通过离线缓存的数据在页面展示。

 32.iframe有那些缺点？
    1，iframe会阻塞页面的Onload事件。
    2，搜索引擎的检索程序无法解析这种页面，不利于seo。
    3，iframe与主页共享连接池，而浏览器对相同域连接有限制，所以会影响页面的并行加载。

 33.一个页面上有大量的图片（大型电商网站），加载很慢，你有哪些方法优化这些图片的加载，给用户更好的体验。
    1，图片懒加载，在页面上的未可视区域添加一个滚动事件，判断图片位置与浏览器顶部距离与页面的距离如果前者小于后者，优先加载。
    2，如果为幻灯片相册等，可以使用图片预先加载技术。
    3，如果图片过大，可以使用特殊编码的图片。加载时会先加载一张压缩特别厉害的缩略图，提高用户体验。

 34.冒泡排序
 ``` JavaScript
 var arr=[10,15,18,78,54,1,52,30]
 for(var i=0;i<arr.length-1;i++){
     for(var j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            var obj=arr[i]
            arr[j]=arr[j+1]
            arr[j+1]=obj
        }
    }
}
console.log(arr)  
 ```

 35.栈内存和堆内存:
    栈内存：就是环境，在js执行前浏览器会给他一个环境，叫做Windows全局作用域，函数执行的时候首先会开辟一个新的空间叫做栈内存。
    堆内存：就是存代码，数据的仓库，存放的形式有两种，一种是对象键值对的形式存放，另一种就是函数，以字符串的形式存放。

 36.面向对象：通过构造函数封装可以得到一个类，通过类可以实例化一些子对象，子实例对象会有自己的私有属性，也有可继承的属性，判断实例的实行是私有还是公有的，写在自己函数内的是私有属性，写在prototype上的是公有属性，如果说公有的里没有找到这个属性，那么它就会按照原型链__proto__
 向上查找。

37.  两链一包(原型链/作用域链/闭包)
    - 什么是原型链
      
      当访问对象的某个属性时, 会从当前对象身上开始查找,找不到就顺着原型链一个一个向上找.
      
      如果这个对象内部不存在这个属性，那么他就会去`prototype`里找这个属性，这个`prototype`又会有自己的`prototype`，于是就这样一直找下去，也就是我们平时所说的原型链的概念
      
- 什么是作用域链
        [参考链接](http://blog.poetries.top/FE-Interview-Questions/base/#_2-%E8%AF%B4%E8%AF%B4%E4%BD%A0%E5%AF%B9%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE%E7%9A%84%E7%90%86%E8%A7%A3)
    作用域链的变量只能向上访问,变量访问到window对象就会被终止,作用域链向下访问是不允许的:
    
        ```javascript
        //此处使用了let 声明变量,不存在变量提升, 变量提升见39题
        console.log(a);
        //作用域链向下访问是不允许的:此时a没有声明会导致报错 会报错 Uncaught ReferenceError: a is not defined
        let a = 2;
        ```
    
        
    
    - 什么是闭包
    
        闭包就是 函数中返回另一个函数
    
        闭包就是能够读取其他函数内部变量的函数
    
        闭包的特性：
    
        - 函数内再嵌套函数
        - 内部函数可以引用外层的参数和变量
        - 参数和变量不会被垃圾回收机制回收

38. 事件的各个阶段

    捕获阶段 -> 目标阶段 -> 冒泡阶段

39. 什么是变量提升

```javascript
//var声明变量,存在变量提升的情况
console.log(a); //undefined
var a = 2;
//let没有变量提升的情况
console.log(a); //Uncaught ReferenceError: a is not defined
let a = 2;
```

 40. css3有哪些新特性
    有圆角效果，图形化边界，块阴影与文字阴影，使用RGBA实现透明效果，渐变效果，使用@font-Face实现定制字体，多背景图，文字或图像的变形处理（旋转，缩放，倾斜，移动），多栏布局，媒体查询等。

 41.在css/js代码上线之后开发人员经常会优化性能，从用户刷新网页开始，一次js请求一般情况下有哪些地方会有缓存处理？
 dns缓存，cdn缓存，浏览器缓存，服务器缓存。

 42.谈谈以前端角度出发做好SEO需要考虑什么？
    1，搜索引擎如何抓取网页和如何索引网页。
    2，meta标签优化。
    3，关键字分析和选择是SEO重要工作之一。
    4，了解主要的搜索引擎。

 43.html常见兼容性问题
    1，双边距BUG float引起的  使用display
    2，3像素问题 使用float引起的 使用dislpay:inline -3px  
    3，超链接hover 点击后失效  使用正确的书写顺序 link visited hover active
    4，Ie z-index问题 给父级添加position:relative
    5，Png 透明 使用js代码 改
    6，Min-height 最小高度 ！Important 解决’
    7，select 在ie6下遮盖 使用iframe嵌套
    8，为什么没有办法定义1px左右的宽度容器（IE6默认的行高造成的，使用over:hidden,zoom:0.08 line-height:1px）

 44.看下列代码输出为何？解释原因
    var a;
    alert(typeof a); // undefined
    alert(b); // 报错
    原因：undefind是一个只有一个值的数据类型，这个值就是"undefind"，在使用var声明变量，但并未对其赋值进行初始化时，这个变量的值就是undefind，而b由于未声明而报错。

 45.用vue怎么样获取input输入框的值的方法。
    使用v-model指令，双向绑定是通过Object.defineProperty()来实现数据劫持的。

 46.vue路由是什么。
    1，服务器端路由：的功能是根据URL地址，跳转到相应页面，这些页面都是真实存在于服务端的。
    2，前端路由：由前端实现以上功能，前端只存在d单页面首页index.htm。

 47.将"10000000000"形式的字符串，以每三位进行分隔展示"10.000.000.000"
        ``var num=10000000000
        var string = num.toString();
        var arr = string.split('').reverse();
        console.log(arr);
        var obj =[];
        for(var i=0;i<arr.length;i++){
            if(i%3 ===0 && i!==0){
            obj.push(',');
            }
            obj.push(arr[i]);
        }
        obj.reverse()
        console.log(obj);
        console.log(obj.join(""));``

 48.react生命周期
    1，componentWillMount 在渲染前调用,在客户端也在服务端。
    2，componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
    3，componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    4，shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
    5，componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    6，componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
    7，componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

 49.ES6中的class和ES5的类有什么区别？
    1,ES6 class 内部所有定义的方法都是不可枚举的;
    2,ES6 class 必须使用 new 调用;
    3,ES6 class 不存在变量提升;
    4,ES6 class 默认即是严格模式;
    5,ES6 class 子类必须在父类的构造函数中调用super()，这样才有this对象;ES5中类继承的关系是相反的，先有子类的this，然后用父类的方法应用在this上。

 50. 如何正确的判断this? 箭头函数的this是什么？
    this的绑定规则有四种：默认绑定，隐式绑定，显式绑定，new绑定.
    1，函数是否在 new 中调用(new绑定)，如果是，那么 this 绑定的是新创建的对象。
    2，函数是否通过 call,apply 调用，或者使用了 bind (即硬绑定)，如果是，那么this绑定的就是指定的对象。
    3，函数是否在某个上下文对象中调用(隐式绑定)，如果是的话，this 绑定的是那个上下文对象。一般是 obj.foo()
    4，如果以上都不是，那么使用默认绑定。如果在严格模式下，则绑定到 undefined，否则绑定到全局对象。
    5，如果把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind, 这些值在调用时会被忽略，实际应用的是默认绑定规则。
    6，箭头函数没有自己的 this, 它的this继承于上一层代码块的this。

 51.call 和 apply 的区别是什么，哪个性能更好一些？
    1，Function.prototype.apply和Function.prototype.call 的作用是一样的，区别在于传入参数的不同；
    2，第一个参数都是，指定函数体内this的指向；
    3，第二个参数开始不同，apply是传入带下标的集合，数组或者类数组，apply把它传给函数作为参数，call从第二个开始传入的参数是不固定的，都会传给函数作为参数。
    4，call比apply的性能要好，平常可以多用call, call传入参数的格式正是内部所需要的格式。

 52.为什么普通 for 循环的性能远远高于 forEach 的性能？
    1，for 循环没有任何额外的函数调用栈和上下文；
    2，forEach函数签名实际上是array.forEach(function(currentValue, index, arr), thisValue)它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能

 53.javascript的本地对象，内置对象和宿主对象
    本地对象为array obj regexp等可以new实例化
    内置对象为gload Math 等不可以实例化的
    宿主为浏览器自带的document,window 等

 54.window.onload 和document.ready的区别
    1，引入js文件的两种方式：一种原生的 一种是jQuery库的入口函数window.onload 是在dom文档树加载完和所有文件加载完之后执行一个函数Document.ready原生种没有这个方法，jquery中有 $(document).ready(function(){代码}),在dom文档树加载完之后执行一个函数（注意，这里面的文档树加载完不代表全部文件加载完）。
    2，$(document).ready要比window.onload先执行，执行的上下文不同，
    3，window.onload只能出来一次，$(document).ready可以出现多次
实操题:
1. 实现一个简单的计数器. 加减号点击数量能跟着变 即可 代码play下的test.html

