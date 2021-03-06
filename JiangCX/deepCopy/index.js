//  写一个深拷贝，考虑 正则，Date这种类型的数据

// #### 检测数组  
// 1. value instanceof Array
// 2. Array.isArray(value)

/**
 * 判断是否数组
 * @param {*} params 
 */
function _isArray(params) {
  return params instanceof Array;
}

/**
 * 判断是否对象
 * @param {*} params 
 */
function _isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

function clone(target, map = new Map()) {
  // 是否对象
  if(typeof target === 'object'){
    // 用一个新Map对象存储循环引用的对象
    let mapResult = map.get(target);
    if(mapResult) {
      return mapResult;
    } 
    // 是否数组
    let cloneObject = _isArray(target)? [] : {};
    map.set(target, cloneObject);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        // 将更新过的Map对象继续传入
        const element = clone(target[key], map);
        cloneObject[key] = element;
      }
    }
    return cloneObject;
  } else {
    return target;
  }

}

let target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
      child: 'child',
      child2: {
          child2: 'child2'
      }
  },
  field5: [2, 4, 8]
};
target.target = target;

let resultClone = clone(target);

// 验证深拷贝成功的关键参数
resultClone.field4.child2.child2 = 'jcx';
resultClone.field5[2] = 'array';

console.log('resultClone', resultClone);

console.log('oldObject', target);

