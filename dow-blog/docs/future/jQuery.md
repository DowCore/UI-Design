# jquery对象化
通过append等将jquery对象直接添加到对应的父级节点，然后存放节点对象可以直接操作内容
```html 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script>
let div=$('<div />',{ html:'<div>123</div>'});
$(document).ready(function(){
	 $('#app').append(div);
  $("p").click(function(){
    div.html('4566');
  });
});
</script>
</head>
<body>
	<div id='app'></div>
<p>如果你点我，我就会消失。</p>
</body>
</html>
```
```
MKLINK [[/D] | [/H] | [/J]] Link Target
/D：创建目录符号链接。默认为文件符号链接。
/H：创建硬链接，而不是符号链接。
/J：创建目录联接。
Link：指定新的符号链接名称。
Target：指定新链接引用的路径（相对或绝对）

mklink /j E:\Windows C:\Windows
```