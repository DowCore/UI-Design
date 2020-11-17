# 堆栈
 汇编程序的运行是不需要栈的，所以注定它函数的嵌套层数不会太多，一般是父函数调用子函数，然后在子函数就返回了，很少见到子函数还会调用孙子函数的情况。这是由它的语言特性决定的。因为每当汇编语言调用子函数时，就会将返回的PC地址保存在LR中， 如果子函数还要调用孙子函数，那么执行时也会将子函数的返回地址保存在LR中，这时如果要返回父函数，就需要将返回父PC的地址保存在另外一个寄存器中，比如R0中，这将占用另外一个寄存器。

cpu的寄存器资源是很有限的，如果一个程序相对复杂，函数间有4、5层的嵌套调用，那将会占用至少4、5个寄存器资源，这是不现实的，也一般不会这样做，而且对于一种与硬件联系紧密的汇编语言来说，太复杂的逻辑关系或嵌套关系也不好实现。

汇编语言是底层语言，它没有栈，它也不需要编写很复杂很庞大的程序，即使没有内存（SDRAM），它也能在cpu的片内内存运行以完成一些裸机硬件程序；但是C语言是高级语言，它能够编写复杂庞大的程序，所以它需要函数间的多层调用，它需要用到指针的灵活赋值等等，但是这些都有依赖于栈， 那么栈是怎么让C语言能够变得如此强大呢?
 * 基本类型--名值存储在栈内存中
 * 引用数据类型--名存在栈内存中，值存在于堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值
# 基本类型与引用类型
* 基本类型
  * number，string，boolean，null，undefined，symbol以及未来ES10新增的BigInt(任意精度整数)七类
* 引用类型
  * 引用数据类型(Object类)有常规名值对的无序对象{a:1}，数组[1,2,3]，以及函数等。
# 浅拷贝深拷贝
* 浅拷贝引用类型的修改仍影响原对象
* 内容的全部拷贝，新对象的引用类型修改也不会改变原对象
# js执行顺序
## 微任务/宏任务
* 异步队列中包括：微任务（micro-task） 和 宏任务（macro-task）

* 微任务包括： process.nextTick ，Promise （ process.nextTick 为 Node 独有）

* 宏任务包括： script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering

* Tips：

微任务优先级高于宏任务的前提是：同步代码已经执行完成。因为 script 属于宏任务，程序开始后会首先执行同步脚本，也就是script 。
Promise 里边的代码属于同步代码，.then() 中执行的代码才属于异步代码。
## Event Loop（事件轮询）
Event Loop 是一个程序结构，用于等待和发送消息和事件。

Event Loop 执行顺序如下所示：

首先执行同步代码（宏任务）
当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
执行所有微任务
当执行完所有微任务后，如有必要会渲染页面
然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 setTimeout 中的回调函数
Tips：简化讲：先执行一个宏任务（script同步代码），然后执行并清空微任务，再执行一个宏任务，然后执行并清空微任务，再执行一个宏任务，再然后执行并清空微任务......如此循环往复（一个宏任务 -> 清空微任务 -> 一个宏任务 -> 清空微任务）
```
setTimeout(function () {
  console.log(" set1");
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2 ");
  });
});

new Promise(function (resolve) {
  console.log("pr1");
  resolve();
}).then(function () {
  console.log("then1");
});

setTimeout(function () {
  console.log("set2");
});

console.log(2);

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3");
});

/*执行结果*/
pr1
2
then1
then3
set1
then2
then4
set2
```

执行所有同步代码（第一次宏任务）：

setTimeout(function () { // setTimeout 内 function 放入宏任务
  console.log(" set1");
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2 ");
  });
});

new Promise(function (resolve) {
  console.log("pr1"); // Promise里边的代码直接执行  打印 pr1
  resolve();
}).then(function () {
  console.log("then1"); // Promise.then 放入微任务
});

setTimeout(function () {
  console.log("set2"); // setTimeout内function 放入宏任务
});

console.log(2); // 打印 2

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3"); //Promise.then 放入微任务
});


// 此时控制台打印 ： pr1  >  2
// 异步任务队列：[微任务数:2][宏任务数：2]
// 执行并清空微任务
执行并清空微任务

function () {
  console.log("then1");  // 输出 then1
}

function () {
  console.log("then3"); // 输出 then3
}

// 此时控制台打印 ： then1  >  then3
// 异步任务：[微任务数:0][宏任务数：2]
// 执行一个宏任务
执行一个宏任务

function () {
  console.log(" set1");   //打印 set1
  new Promise(function (resolve) {
    resolve();
  }).then(function () {     // Promise.then 放入微任务
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2 ");
  });
}

// 此时控制台打印 ： set1
// 异步任务：[微任务数:1][宏任务数：1]
// 执行并清空微任务
执行并清空微任务

function () {     
    new Promise(function (resolve) {
      resolve();      
    }).then(function () {
      console.log("then4");   // Promise.then 放入微任务
    });
    console.log("then2 ");    // 打印 then2
}

// 此时控制台打印 ： then2
// 异步任务：[微任务数:1][宏任务数：1]
// 此时微任务列表增加并未清空，继续执行微任务
此时微任务列表增加并未清空，继续执行微任务

function () {
      console.log("then4");   // 打印 then4
}

// 此时控制台打印 ： then4
// 异步任务：[微任务数:0][宏任务数：1]
// 执行宏任务
执行宏任务

function () {
  console.log("set2"); // 打印 set2
}
// 此时控制台打印 ： set2
// 异步任务：[微任务数:0][宏任务数：0]
// 程序结束
完整输入顺序

pr1
2
then1
then3
set1
then2 
then4
set2