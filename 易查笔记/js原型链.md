# 继承
~~~javascript
function Animal(){
    this.eat= function(){
        console.log('animal eat')
    }
}

function Dog(){
    this.bark= function(){
        console.log('dog bark');
    }
}

Dog.prototype= new Animal();
var hashiqi= new Dog();
hasiqi.eat();
~~~

# 封装dom查询
```javascript
function Elem(id){
    this.elem= document.getElementById(id);
}
Elem.prototype.html=function(val){
    var elem= this.elem
    if(val){
        elem.innerHTML=val;
        return this;
    }else{
        return elem.innerHTML;
    }
}
Elem.prototype.on= function(type,fn){
    var elem= this.elem
    elem.addEventListener(type,fn);
    return this; //链式操作
}
var div= new Elem('div1');
console.log(div1.html());
```
# 对象的创建过程  
 function 构造对象默认有 return this;
 * 创建一个新对象
 * this指向这个新对象
 * 执行代码，即对this赋值
 * 返回this
  
# 语法糖
 * a={}  即 a= new Object()
 * a=[]  即 a= new Array()
 * function Foo() 即 Foo= new Function()
  
# 规则
 * 所有的引用类型（数组、对象、函数）都具有对象特性，即可自由扩展属性（除了“null”）
 * 所有的引用类型（数组、对象、函数）都有一个 _proto_ 属性(隐式原型属性），属性值是一个普通的对象
 * 所有的函数，都有一个 prototype(显式原型）属性，属性值也是一个普通的对象
 * 所有的引用类型（数组、对象、函数）， _proto_ 属性值(隐式原型属性）指向它的构造函数的“prototype”属性值 
 * 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的_proto_(即它的构造函数的 prototype（显式原型）)中寻找
 * 循环对象自身的属性
   if (f.hasOwnProperty(item)) 中遍历 f 时，判断遍历中的 item,是否可以通过 hasOwnProperty 验证，通过则表明它是 f 自身的属性，未通过则表明 是 f 通过原型获得的属性
 * instanceof  
    判断 引用类型 属于哪个 构造函数 的方法