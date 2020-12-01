# {...obj}属于浅拷贝
# let 
```javascript
# 运行正常
let i=3;
for(let i=0;i<10;i++){

}
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
# 输出3次 abc
# 循环体内部是一个单独的子作用域

# 异常
let i=3;
for(var i=0;i<10;i++){

}
var i=3;
for(let i=0;i<10;i++){

}

console.log(bar); // 报错ReferenceError
let bar = 2;

var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
# var 提升变量
# let不会 

```