/*
 * @Descripttion: 
 * @version: 
 * @Author: tengfeizhu
 * @Date: 2023-06-26 23:01:55
 * @LastEditors: tengfeizhu
 * @LastEditTime: 2023-07-10 14:48:42
 */
// var a = 1
let a1 = 1 // let 定义变量
const a2 = 1 // 常量

// 解构赋值
const obj = { a: 1, b: 2, c: 3 } // obj.a
const { a, b, c } = obj
const { a: nickA } = obj

const arr = [1, 2, 3]
const [ e, f, g, d ] = arr // d: undefined

const [a, b, c, d, e] = 'hello';

let str1 = 'abc'
let str2 = 'efg'
let str = 'abc' + str1 + str2
let strA = `abc${str1}
${str2}` // 模板字符串

'abc'.includes('a') // true false
'abc'.startsWith('a') // true false
'abc'.endsWith('a') // true false
'a'.padStart(10, 'b') // bbbbbbbbba
'a'.padEnd(10, 'b') // abbbbbbbbb
' a '.trim() // 'a '去掉前后空格
' a '.trimStart() // 'a '去掉前空格
' a '.trimEnd() // ' a' 去掉后空格
'a2bc'.match(/[\d]+/) // ['2', index: 1, input: 'a2bc', groups: undefined]
/[\d]+/.test('abc1111') // true
'abc'.replace('a', 'g') // gbc
'aabc'.replace('a', 'g') // gabc
'aabc'.replaceAll('a', 'g') // ggbc
'abc'.replace(/[a-z]/, 1) // 1bc
'abc'.replace(/[a-z]/g, 1) // 111

// 定义函数
function add(a, b) {
  return a + b
}
const add2 = (a, b) => a + b
const add3 = (a, b) => { return a + b }

let set = new Set([1,2,3,1,2,3]) // 1 2 3 set内容不重复

// 可以用来给数组去重
const arr = [1,2,3,1,2,3]
let set1 = new Set(arr)
[...set1] // [1,2,3]

let set2 = new Set('aabbcc') // 'a' 'b' 'c'
[...set2].join('') // 字符串去重

let map = new Map()
map.set('a', 1) 
map.get('a') // 值
map.has('a') // false true
map.delete('a') // false true

let weakSet = new WeakSet() // 只能接受对象
let weakMap = new WeakMap // key只能接受对象

// set拦截赋值操作；get拦截取值操作 
let proxyObj = new Proxy(obj, {
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver); // 赋值
  },
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
})

const mySymbol = Symbol('var1'); // 独一无二的
const a = {}
a[mySymbol] = 1 // 只能这样赋值
Reflect.ownKeys(a) // 只能通过该函数枚举
Object.getOwnPropertySymbols(a) // 只能通过该函数获取
····
// Promise：三种状态pending fulfilled rejected
const promise = new Promise(function(resolve, reject) {
  // ... some code
  // 异步获取某个接口的值 { code: 0, data: {}, msg: 'this is msg' }
  let result = { code: 0, data: 'abc', msg: 'this is msg' }
  ajaxApi()

  if (result.code === 0){ // 成功
    resolve(result.data);
  } else {
    reject(result.msg);
  }
});

'1' == 1 // true
'1' === 1 // false
Object.is('1', 1) // false
NaN === NaN // false  
Object.is(NaN, NaN) // true
-0 === 0 // true
Object.is(-0, 0) // false

const obj = {};
console.log(Object.is(obj, {})); // false


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
Object.assign(target, source);  // { a: 1, b: 4, c: 5 } 后面的合并到前面的
Object.getOwnPropertyDescriptors(target) // 获取属性描述符 是否删除、写、枚举、value
// 遍历对象
Object.keys(target) 
Object.entries(target)
Object.values(target)

// 判断是否有该属性
Object.hasOwn(target, 'a') // true
Object.hasOwn(target, 'aaa') // false


function add (...rest) {
  console.log(rest) 
}

add(1,1,2,3,3,4)