# 参考
 [git](https://ms.mbd.baidu.com/r/ey4VtS7GaA?f=cp&u=fb2d40523e81f277)
# 知识点
``` javascript
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```
- scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
- subject是 commit 目的的简短描述，不超过50个字符。
    - 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
    - 第一个字母小写
    - 结尾不加句号（.）
- Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。   
   ```
   More detailed explanatory text, if necessary.  Wrap it to 
   about 72 characters or so. 
   Further paragraphs come after blank lines.
   Bullet points are okay, too
   Use a hanging indent
   ```
   - 使用第一人称现在时，比如使用change而不是changed或changes。
   - 应该说明代码变动的动机，以及与以前行为的对比
- Footer  

    - 如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。
    - 关闭 Issue

如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。
``` 
Closes #234
```

