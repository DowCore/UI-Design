# 知识点
```json
{
   position:{
     static:"默认值,没有定位，元素出现在正常的流中(忽略top,bottom,left,right或者z-index声明)",
     absolute:"生成绝对定位的元素，相对于static定位以外的第一个父元素进行定位，元素的位置通过left\top\right\bottom属性进行规定",
     fixed:"生成固定的元素，相对于浏览器窗口进行定位，元素的位置通过left\top\right\bottom属性进行规定",
     relative:"生成相对定位元素，相对于其正常位置进行定位，因此 left:20会向元素的left位置添加(偏移，可以有负值)20px",
     sticky:{desc:"粘性定位,该定位基于用户滚动的位置，它的行为就像position:relative;而当页面滚动超出目标区域时，它的表现就像position:fixed;它会固定在目标位置",
     support:"IE， Edge 15不支持， Safari需要使用-webkit- prefix"},
     inherit:"规定应该从父元素继承position属性的值",
     initial:"设置默认值"
   },
   选择器:{
     .class:"选择calss=的所有元素",
     #id:"选择id=的所有元素",
     *:"选择所有元素",
     element:"标签名，选择所有同名的标签",
     element,element:"div,p:选择所有的<div>和<p>元素",
     element element:"div p:选择<div>内部所有的<p>元素",
     element > element:"div > P:选择父元素为<div>的所有<p>元素",
     element + element:"div + p:选择紧接在<div>元素之后的所有<P>元素",
     [attribute]:"[target]:选择带有target属性的所有标签",
     [attribute=value]:"[target=_blank]:选择target='_blank'的所有元素",
     [attribute~=value]:"[titel~=flower]:选择title属性包含单词flower的所有元素",
     [attribute|=value]:"[lang|=en]:选择lang属性值以'en'开头的所有元素",
     :link:"a:link 选择所有未被访问的链接",
     :visited:" a:visited 选择所有已被访问的链接",
     :active:" a:active 选择活动链接",
     :hover: "a:hover 选择鼠标指针位于其上的链接",
     :focus:" input:focus,选择获得焦点的input",
     :first-letter:"p:first-letter,选择每个<p>元素的首字符",
     :first-line:"p:first-line,选择每个<p>元素的首行",
     :first-child:"p:first-child,选择属于父元素的第一个子元素的每个<p>元素",
     :before:"p:before,在每个<p>元素的内容之前插入内容",
     :after:"p:after,在每个<p>元素的内容之后插入内容",
     :lange(language):"p:lang(it),选择带有以'it'开头的lang属性值的每个<p>元素",
     element1~element2:"p~ul,选择前面有<p>元素的每一个<ul>元素",
     [attribute^=value]:"a[src^='https'],选择其src属性以'https'开头的每个<a>元素",
     [attribute$=value]:"a[src$='.pdf'],选择器src属性以.pdf结尾的所有<a>元素",
     [attribute*=value]:"a[src*='abc'],选择其src属性包含'abc'字串的每个<a>元素",
     :first-of-type:"p:first-of-type,选择属于其父元素的首个<p>元素的每个<p>元素",
     :last-of-type:"p:last-of-type,选择属于其父元素的最后<p>元素的每个<p>元素",
     :only-of-type:"p:only-of-type,选择属于其父元素唯一的<p>元素的每个<p>元素",
     :only-child:"p:only-child,选择属于其父元素唯一子元素的每个<p>元素",
     :nth-child(n):"p:nth-child(2),选择属于其父元素的第二个子元素的每个<p>元素",
     :nth-last-child(n):"同上，但是从最后一个子元素开始计数",
     :nth-of-tyoe(n):"p:nth-of-type(2),选择属于其父元素第二个<p>元素的每个<p>元素",
     :nth-last-of-type(n):"同上，但是从最后一个子元素开始计数",
     :last-child:"p:last-child,选择其属于父元素最后一个子元素每个<p>元素",
     :root:":root,选择文档的根元素",
     :empty:"p:empty,选择没有子元素的每个<p>元素(包括文本节点)",
     :target:"#news:target,选择当前活动的#new元素",
     :enabled:"input:enabled,选择每个启用的<input>元素",
     :disabled:"input:disabled,选择每个禁用的<input>元素",
     :checked:"input:checked,选择每个被选中的<input>元素",
     :not(selector):":not(p),选择非<p>元素的每个元素",
     ::selection:"::selection,选择被用户选取的元素部分"
   },
   权重:{
     desc:"css权重指的是css6大基础选择符的优先级,优先级高的css样式会覆盖优先级低的css样式，优先级越高说明权重越高，反之亦然",
     6大基础选择器:{
       id:"#box{}",
       类选择器:".box{}",
       属性选择器:"a[href='http://www.baidu.com']",
       伪类和伪对象选择器:":hover{}和::after{}",
       标签型选择器:"p{}",
       通配符选择器:"*{}"
     },
     计算规则:{
       1:"计算选择符中的id选择器的数量,一个为100",
       2:"计算选择符中的类选择器、属性选择器以及伪类选择器数量，一个为10",
       3:"计算标签类型选择器和伪对象选择器的数量,一个为1",
       4:忽略通配符选择器,
       5:!important时,无条件绝对优先,一个为1000
     },
     权重比较:"当两个权值进行比较的时候,从高到低逐级将等位上的权重值进行比较,即低等级的选择器个数再多也不会越等级超过高等级选择器的优先级的"
   },
   加载与覆盖：{
     1:"遵守权重规则",
     2:"对于相同类型的选择器制定的样式，在样式表文件中，越靠后的优先级越高",
     3:"外部样式[link标签文件]<内部样式[在head标签内的<style>标签定义]<内联样式[行内,<div style="">];特殊,外部样式放在内部样式的后面，则外部样式将覆盖内部样式",
   },
   css书写顺序:{
     step:{
        1:"定位属性： position, display float left  top right bottom overflow clear z-idex",
        2:"自身属性：width height padding border margin backgroud",
        3:"文字样式：font-family font-size font-style font-weight font-varient color",
        4:"文本属性：text-align vertical-align text-wrap text-transform text-indent text-decoration letter-spacing word-spacing white-space text-overflow",
        5:"css3中新增属性：content box-shadow border-radius transform......"
     },
     reason:{
      target:"减少浏览器reflow(回流),提升浏览器渲染dom的性能",
      reflow:"回流必定重绘 width height padding margin dispaly border-width border top position font-size float text-align overflow-y font-weight
      overflow left font-family line-height vertical-align right clear white-space bottom min-height  offsetTop offsetLeft offsetWidth
      offsetHeight scrollTop scrollLeft scrollWidth scrollHeight clientTop clientLeft clientWidth clientHeight getComputedStyle() (CurrentStyle in IE)
      1. 调整窗口大小，浏览器窗口尺寸改变--resize事件发生时
      2. 元素尺寸改变-边距、填充、边框、宽度和高度；改变字体大小
      3. 页面渲染初始化
      4. 元素位置改变
      5. 样式表变动
      6. 元素内容变化，尤其是输入控件
      7. css伪类激活
      8. Dom操作，添加或者删除可见的Dom元素
      9. offsetWidth，width， clientWidth，ScrollTop/ScrollHeight的计算，会使浏览器将渐进回流对了Flush，立即执行回流。内容改变--比如文本改变或者图片大小改变而引起的计算宽度和高度改变",
      repaint:"改变页面元素的大小、位置、是否隐藏等都会引起回流；如果只改变外观、风格。不影响布局，会引发重绘
      color border-style visibility background text-decoration background-imgae background-position background-repeat
      outline-color outline outline-style border-radius outline-width box-shadow backgroud-size"
     },
     减少方式:{
      1:"使用transfrom替代top",
      2:"使用visibility替换display:none,因为前者只会引起重绘，后者会引发回流",
      3:"避免使用table布局，可能很小的一个小改动就会造成整个table的重新布局",
      4:"尽可能在dom树的最末端改变class，回流是不可避免额，但可以减少其影响。尽可能在dom树的最末端改变class，
      可以心啊在了回流的范围，使其影响尽可能少的节点",
      5:"避免设置多层内联样式,css选择符从右往左匹配查找，避免节点层级过多",
      6:"将动画效果应用到position属性为absolute或fixed的元素上，避免影响其他元素的布局，这样至少一个重绘，而不是回流
      同时，控制动画速度可以选择requestAnimationFrame",
      7:"避免使用css表达式，可能引发回流",
      8:"将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点，如will-change、video、iframe等标签，浏览器会自动将该节点变为图层",
      9:"css3硬件加速，可以让transform、opacity、fiters这些动画不会引起回流重绘",
      10:"避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性",
      11:"避免频繁操作dom，创建一个documentFragment,在它上面应用所有dom操作，最后再把它添加到文档中",
      12:"避免频繁读取会引发回流/重绘的属性，可以使用变量缓存",
      13:"图片最好设置好width和height;使用viewpoint设置屏幕缩放级别",
      14:"html压缩工具：html-minifier；css压缩工具：clean-css；js压缩工具：uglify-js"
     }
   }
}
```
# css继承

 css的继承：就是给父级设置一些属性，子级继承了父级的该属性。

 ## 无继承性的属性
  * dispaly：规定元素应该生成的框的类型
  * 文本属性  
     * vertical-align：垂直文本对齐
     * text-decoration：规定添加到文本的装饰
     * text-shadow：文本阴影效果
     * white-space：空白符的处理
     * unicode-bidi：设置文本的方向
   * 盒子模型的属性
     * width
     * height
     * margin
     * maigin-top
     * margin-right
     * margin-bottom
     * margin-left
     * border
     * border-style
     * boder-top-style
     * boder-right-style
     * boder-bottom-style
     * boder-left-style
     * boder-width
     * boder-top-width
     * boder-right-width
     * boder-bottom-width
     * boder-left-width
     * boder-color
     * boder-top-color
     * boder-right-color
     * boder-bottom-color
     * boder-left-color
     * boder-top
     * boder-right
     * boder-bottom
     * boder-left
     * padding
     * padding-top
     * padding-right
     * padding-bottom
     * padding-left
   * 背景属性
     * background
     * background-color
     * background-image
     * background-repeat
     * backgroud-position
     * background-attachment
   * 定位属性
     * float
     * clear
     * position
     * top
     * right
     * bottom
     * left
     * min-width
     * min-height
     * max-width
     * max-height
     * overflow
     * clip
     * z-index
   * 生成内容属性
     * content
     * counter-reset
     * counter-increment
   * 轮廓样式
     * outline-style
     * outline-width
     * outline-color
     * outline
   * 页面样式属性
     * size
     * page-break-before
     * page-break-after
   * 声音样式属性
     * pause-before
     * paause-after
     * puse
     * cue-before
     * cue-after
     * cue
     * play-during
## 有继承性的属性
 * 字体系列属性
   * font
   * font-family
   * font-weight
   * font-size
   * font-style
   * font-variant
   * font-stretch
   * font-size-adjust
 * 文本系列属性
   * text-indent
   * text-align
   * line-height
   * word-spacing
   * letter-spacing
   * text-transform
   * direction
   * color
 * 元素可见性
   * visibility
 * 表格布局属性
   * caption-side
   * border-collapse
   * border-spacing
   * empty-cells
   * table-layout
 * 列表布局属性
   * list-style-type
   * list-style-image
   * list-style-position
   * list-style
 * 生成内容属性
   * quotes
 * 光标属性
   * cursor
 * 页面样式属性
   * page
   * pge-break-inside
   * windows
   * orphans
 * 声音样式属性
   * speak
   * speak-punctuation
   * speak-numeral
   * speak-header
   * speech-rate
   * volume
   * voice-family
   * pitch
   * pitch-range
   * stress
   * richness
   * azimuth
   * elevation
 * 所有元素可继承的属性
   * visibility
   * cursor
 * 内联元素
   * 字体系列属性
   * 除text-indent、text-align之外的文本系列属性
 * 块级元素
   * text-indent、text-align
   