# 变量提升
* var a = 2;看做是一个声明，而实际上javascript引擎并不这么认为。它将var a和a = 2看做是两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务
```
function test () {
    console.log(a);  //undefined
    var a = 123; 
};

/*执行顺序 */
function test () {
    var a;
    console.log(a);
    a = 123;
}
test();

a = 1;
var a;
console.log(a); //1

console.log(v1);
var v1 = 100;
function foo() {
    console.log(v1);
    var v1 = 200;
    console.log(v1);
}
foo();
console.log(v1);
/*结果*/
undefined
undefined
200
100
```
# 函数提升

* 整个代码块提升到它所在的作用域的最开始执行
```
console.log(bar);
function bar () {
  console.log(1);
}
//打印结果：ƒ bar () {
//  console.log(1);
//}

foo(); //1
 
var foo;
 
function foo () {
    console.log(1);
}
 
foo = function () {
    console.log(2);
}
函数优先规则。
```