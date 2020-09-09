function Person() { //构造函数
     this.name = '小米';
     this.color = '黄色';
     this.eat = function () {
          console.log('吃东西')
     }
}
Person.prototype.gender = '男';
Person.prototype.say = function () {
     console.log('说话')
}
var man = new Person();
man.eat();
man.say();

// 原型链关系:原型链的形成是真正是靠__proto__
// 构造函数有属性:prototype  ,对象有隐式属性:__proto__ ,js中一切又都是对象
//console.log(man.constructor) //查看对象的构造函数
// console.log(Person.prototype == man.__proto__) //true 
// console.log(Person.prototype.__proto__ == Object.prototype) //true   
console.log(Object);
console.log(Object.prototype.__proto__) //true