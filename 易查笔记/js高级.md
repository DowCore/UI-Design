# 函数柯里化
 * 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
把接受多个参数的函数转换成接受一个单一参数的函数
* 能够写出 Pointfree 风格的程序，让代码更简洁。
* 柯里化最大的意义在于把多个参数的函数等价转化成多个单参数函数的级联，这样所有的函数就都统一了，方便做lambda演算。 在scala里，柯里化对类型推演也有帮助，scala的类型推演是局部的，在同一个参数列表中后面的参数不能借助前面的参数类型进行推演，柯里化以后，放在两个参数列表里，后面一个参数列表里的参数可以借助前面一个参数列表里的参数类型进行推演。
```
// 普通方法
var add = function(x, y) {
    return x + y;
}    
add(3, 4)       //7
// 柯里化 
var foo = function(x) {

    return function(y) {
        return x + y
    }
}    
foo(3)(4)       // 7    
```
# apply/call/bind 有什么区别？
 这三者的作用就是改变函数运行时this的指向。 call方法： 语法：call([thisObj[,arg1[, arg2[, 
[,.argN]]]]]) 定义：调用一个对象的一个方法，以另一个对象替换当前对象。 说明：call
方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
　　 如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。 apply方法： 语法：apply([thisObj[,argArray]]) 定义：应用某一对象的一个方法，用另一个对象替换当前对象。 说明：如果
argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。

如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。 bind方法： 语法：bind(thisArg[, arg1[, arg2[, ...]]])
定义：将接受多个参数的函数变换成接受一个单一参数。
说明：bind()方法所返回的函数的length（形参数量）等于原函数的形参数量减去传入bind()方法中的实参数量（第一个参数以后的所有参数），因为传入bind中的实参都会绑定到原函数的形参
# js 插件库
[好用插件](https://mbd.baidu.com/newspage/data/landingshare?context=%7B%22nid%22%3A%22news_9230025765633289086%22%2C%22sourceFrom%22%3A%22bjh%22%7D&isBdboxFrom=1&pageType=1&rs=1957076757&ruk=21W0brdFVZM-r3NM8jEmQA)
 * lodash 
  ``` 
  lodash 一个一致性、模块化、高性能的 JavaScript 实用工具库。
  ```
  * ramda
   ```
   ramda 一个很重要的库，提供了许多有用的方法，每个 JavaScript 程序员都应该掌握这个工具
   ```
 # day.js
 ```
 一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样, 体积只有2kb
 ```
 # big.js 
 ```
 一个小型，快速的JavaScript库，用于任意精度的十进制算术运算
 ```
 # qs
 ```
 一个 url参数转化 (parse和stringify)的轻量级js库
 ```
 # jquery
 # zepto
 ```
 zepto jquery的轻量级版本, 适合移动端操作
 ```
 # fastclick
 ```
 fastclick 一个简单易用的库，它消除了移动端浏览器上的物理点击和触发一个 click 事件之间的 300ms 的延迟。目的就是在不干扰你目前的逻辑的同时，让你的应用感觉不到延迟，反应更加灵敏。
 ```
 # file-saver
 ```
  一个在客户端保存文件的解决方案，非常适合在客户端上生成文件的Web应用程序
 ```
 # js-xlsx 
 ```
 一个强大的解析和编写excel文件的库
 ```
 ```
 Axios 一个基于 Promise 的 HTTP 库，可用在 Node.js 和浏览器上发起 HTTP 请求，支持所有现代浏览器，甚至包括 IE8+
Superagent 基于Ajax的优化, 可以与 Node.js HTTP 客户端搭配使用
fly.js 一个基于promise的http请求库, 可以用在node.js, Weex, 微信小程序, 浏览器, React Native中
动画库
Anime.js 一个JavaScript动画库，可以处理CSS属性，单个CSS转换，SVG或任何DOM属性以及JavaScript对象
Velocity 一个高效的 Javascript 动画引擎，与jQuery的 $.animate() 有相同的API, 同时还支持彩色动画、转换、循环、画架、SVG支持和滚动等效果
Vivus 一个零依赖的JavaScript动画库，可以让我们用SVG制作动画，使其具有被绘制的外观
GreenSock JS 一个JavaScript动画库，用于创建高性能、零依赖、跨浏览器动画，已在超过400万个网站上使用, 并且可以在React、Vue、Angular项目中使用
Scroll Reveal 零依赖，为 web 和移动浏览器提供了简单的滚动动画，以动画的方式显示滚动中的内容
Kute.js 一个强大高性能且可扩展的原生JavaScript动画引擎，具有跨浏览器动画的基本功能
Typed.js 一个轻松实现打字效果的js插件
fullPage.js 一个可轻易创建全屏滚动网站的js滚动动画库, 兼容性无可替代
iscroll 移动端使用的一款轻量级滚动插件
鼠标/键盘相关

KeyboardJS 一个在浏览器中使用的库(与node.js兼容).它使开发人员可以轻松设置键绑定和使用组合键来设置复杂的绑定.
SortableJS 功能强大的JavaScript 拖拽库
图形/图像处理库

html2canvas 一个强大的使用js开发的浏览器网页截图工具
dom-to-image 一个可以将任意DOM节点转换为用JavaScript编写的矢量(SVG)或光栅(PNG或JPEG)图像的库
pica 一个在浏览器中调整图像大小，而不会出现像素失真，处理速度非常快的图片处理库
Lena.js 一个轻量级的可以给你图像加各种滤镜的js库
Compressor.js 一个使用本地canvas.toBlob API进行图像有损压缩的js库
Fabric.js 一个易于使用的基于HTML5 canvas元素的图片编辑器
merge-images 一个将多张图片合并成一张图的js插件
cropperjs 一款强大的图片裁切库, 支持灵活的图片裁切方式
Grade 一个基于图像中的前2种主要颜色生成互补渐变背景的库
 ```