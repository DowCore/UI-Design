# 获取浏览宽高
``` javascript
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight; 


window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() -移动当前窗口
window.resizeTo() -重新调整当前窗口

正如以上所见，JavaScript 提供原始数据类型字符串、数字和布尔的对象版本。但是并无理由创建复杂的对象。原始值快得多！

请使用对象字面量 {} 代替 new Object()。

请使用字符串字面量 "" 代替 new String()。

请使用数值字面量代替 Number()。

请使用布尔字面量代替 new Boolean()。

请使用数组字面量 [] 代替 new Array()。

请使用模式字面量代替 new RexExp()。

请使用函数表达式 () {} 代替 new Function()。
```
# dom操作
```js
document.getElementById(id)	//通过元素 id 来查找元素
document.getElementsByTagName(name)	//通过标签名来查找元素
document.getElementsByClassName(name)	//通过类名来查找元素

element.innerHTML = new html content	改变元素的 inner HTML
element.attribute = new value	改变 HTML 元素的属性值
element.setAttribute(attribute, value)	改变 HTML 元素的属性值
element.style.property = new style	改变 HTML 元素的样式
```
