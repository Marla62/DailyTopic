// 防抖
// 点一下加一个 但是防止快速点击

// 节流

// 手写防抖节流

// 手写bind

// more and more strong
Function.prototype.bind = function(context, ...args) {
  let self = this;
  let bound = function() {
    // 如果是new调用的，this指向原函数自身的prototype，不是new调用的this指向传入的context
    // A instanceof B 是查找左边参数A的__proto__，__proto__.__proto__...是否等于B的prototype，所以当使用new调用的时候，
    // this.__proto__是bound的prototype，this.__proto__.__proto__就是self.prototype了
    return self.apply(this instanceof self ? this : context, [...args, ...arguments]);
  };
  if (self.prototype) {
    // Object.create: 创建一个新对象，使用现有对象作为新对象的__proto__，下面这句可以替代上面的F中转
    // 注意这里，只修改了新函数的prototype，没有修改__proto__，只有当新函数作为构造函数的时候，它的对象才会放在self的原型链上
    bound.prototype = Object.create(self.prototype);
    // 这样做的原因是为了修改新函数时，不影响原函数，让原函数的prototype在新函数的原型链上方
    // bound.prototype = self.prototype;
  }
  return bound;
};
