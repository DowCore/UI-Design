# 45个规范
* 首次为变量赋值时务必使用var关键字
  ```
  变量没有声明而直接赋值得话，默认会作为一个新的全局变量，要尽量避免使用全局变量。
  ```
* 使用===取代==
  ```javascript
  /*==和!=操作符会在需要的情况下自动转换数据类型。但===和!==不会，它们会同时比较值和数据类型，这也使得它们要比==和!=快。 */

  [10] === 10    // is false
  [10]  == 10    // is true
  '10' == 10     // is true
  '10' === 10    // is false
   []   == 0     // is true
   [] ===  0     // is false
   '' == false   // is true but true == "a" is false
   '' === false  // is false
  ```
* underfined、null、0、false、NaN、空字符串的逻辑结果均为false
* 行尾使用分号
  ```
  实践中最好还是使用分号，忘了写也没事，大部分情况下JavaScript解释器都会自动添加。
  ```
  [分号在js中的真相](https://davidwalsh.name/javascript-semicolons)
* 使用对象构造器
  ```javascript
  function Person(firstName, lastName){
    this.firstName =  firstName;
    this.lastName = lastName;
  }
  var Saad = new Person("Saad", "Mousliki");  
  //使用构造对象比方法更直观，更易于复用和拓展
  ```
* 小心使用typeof、instanceof和constructor  
  ```javascript
  /*typeof：JavaScript一元操作符，用于以字符串的形式返回变量的原始类型。注意，typeof null也会返回object，大多数的对象类型（数组Array、时间Date等）也会返回object.
  constructor：内部原型属性，可以通过代码重写
  instanceof：JavaScript操作符，会在原型链中的构造器中搜索，找到则返回true，否则返回false. */
  var arr = ["a", "b", "c"];
  typeof arr;   // 返回 "object" 
  arr instanceof Array // true
  arr.constructor();  //[]
  ```
  * 使用自调用函数
   ```javascript
   // 函数在创建之后直接自动执行，通常称之为自调用匿名函数（Self-Invoked Anonymous Function）或直接调用函数表达式（Immediately Invoked Function Expression ）。格式如下：
  (function(){
    // 置于此处的代码将自动执行
  })();  
  (function(a,b){
    var result = a+b;
    return result;
  })(10,20)
   ```
 * 从数组中随机获取成员
  ```javascript
  var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];
  var  randomItem = items[Math.floor(Math.random() * items.length)];
  ```
 * 指定范围的随机数
  ```javascript
   var x = Math.floor(Math.random() * (max - min + 1)) + min;
  ```
 * 生成连续数组
  ```javascript
   var numbersArray = [] , max = 100;
   for( var i=1; numbersArray.push(i++) < max;);  
  ```
 * 生成随机的数字字母
  ``` javascript
  function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  +=  Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);
 }
 ```
 *  数组随机排序
   ```javascript
    var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
   numbers = numbers.sort(function(){ return Math.random() - 0.5});

   ```
 * 字符串去掉空格
  ```javascript
   String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g, "");};
  ```
 * 定时器加嵌套实现定时轮询
   ```javascript
   setInterval只管调用函数，不管函数执行，所以如果被调用的函数阻塞了，而且阻塞的时间大于调用间隔，那么当这个函数执行完之后，可能会有一大波被调用还没开始执行的函数挤上来，像这样：

function foo(){
    // something that blocks for 1 second
}
setInterval(foo, 100);
解决方法是

function foo(){
    // something that blocks for 1 second
    setTimeout(foo, 1000);
}
foo();
这样会等到函数执行完之后，再等待间隔，再进行下一次调用。注意用setTimeout+传函数的方式递归的时候是不会stackoverflow的，因为setTimeout+传函数只是做标记要调用而不是真的要调用。传进去的函数在执行完之后会立刻返回（setTimeout不会阻塞，所以不需要等待他返回），不会在栈上等着，自然也就不会stackoverflow了。
   ```
