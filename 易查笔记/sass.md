# 知识点
```json
{
  brain:{
    idea:"A {{ B}} 会生成 .A .B {},所以是使用嵌套曾经减少代码编写量和重用性",
  },
  symbol:{
    $:"变量声明，-和_没有区别,即$A-B===$A_B",
    #{$A}:"拼接时使用变量",
    &:"父选择器标识符,不会像后代选择器那样进行拼接，而是&被父选择器直接替换，常用在伪类选择等,必须作为选择器的第一个字符",
    群组嵌套:{
       first:" .container { h1,h2,h3{ margion-bottom:.8em}} 生成 .container h1 , .container h2, .container h3{margion-bottom:.8em }",
       second:" nav aside { a { color:blue}} 生成 nav a, aside a {color:blue }  "
    },
    嵌套属性:{
       "a {
           font:{
             family:'微软雅黑';
             size:14px;
             variant:small-caps;
             weight:bold;
           }
       }  ===> a{
          font-family:'微软雅黑';
          font-size:14px;
          font-variant:small-caps;
          font-weight:bold;
       }"
    },
    @mixin:"定义混入",
    @include:"引用",
    @extend:"继承",
    @import:"导入"

  }
}
```
# scoped穿透（深度选择器）
 * /deep/   
   sass支持
 * \>>>
   css 支持
 * ::v-deep  
    vue下支持
   

