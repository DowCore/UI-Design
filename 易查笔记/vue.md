# 1. 清理定时器
```javascript
const timer= setInterval(()=》{

}，500);
this.$once('hook:beforeDestroy',()=>{
 clearInterval(timer); //清理掉定时器
 timer=null;//清理掉变量
 })
```
# 2. nextTick
*使用场景*    

- 在created周期内操作dom  
*因为creted还没有渲染*
- 在数据变化后要执行的的操作,这个操作需要改变dom  
*因为虚拟dom问题，并不会立即引起dom渲染，所以需要使用该指令方法*
```javascript
this.$nextTick(()=>{});
```
# 3. v-if
*根据表达式的值的真假渲染元素。在切换时元素及它的数据绑定/组件被销毁并重建*
# 4. v-show
*根据表达式之真假值，切换元素的display css属性*
# 5. v-for
# 6. v-pre
*跳过这个元素和它的子元素的编译过程。可以用来显示原始Mustache标签。加快编译*
# 7. v-model
 * sync  
   使用sync后可以对prop进行修改，即 $emit('update:prop',value),
   ```js
     <comp :foo.sync="bar"></comp>
     // 等同
     <comp :foo="bar" @update:foo="val => bar = val"></comp>
     // 使用
    this.$emit('update:foo', newValue)
   ```
# 8. v-once
*只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。*

# 9. solt
 使用#solts获取具体的组件中的内容
#  10  provide & inject
provide就相当于加强版父组件prop，可以跨越中间组件，inject就相当于加强版子组件的props