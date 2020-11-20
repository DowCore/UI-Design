# calc
函数用于动态计算长度值
* 需要注意的是，运算符前后都需要保留一个空格   
 width: calc(100% - 10px)；
* 任何长度值都可以使用calc()函数进行计算
* 函数支持 "+", "-", "*", "/" 运算
* 函数使用标准的数学运算优先级规则
* less使用
  * width: ~"calc(50% - 7px)" ;
不然 width: calc(50% - 7px);会变成width: 43%;
# attr
返回元素的属性值
```
a:after {
    content: " (" attr(href) ")";
}
```
# cubic-bezie

最直接的理解是，将以一条直线放在范围只有 1 的坐标轴中，并从中间拿出两个点来拉扯（X 轴的取值区间是 [0, 1]，Y 轴任意），最后形成的曲线就是动画的速度曲线。

cubic-bezier() 可用于 animation-timing-function 和 transition-timing-function 属性。
```
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
}
```
# hsl
hsl() 函数使用色相、饱和度、亮度来定义颜色。

HSL 即色相、饱和度、亮度（英语：Hue, Saturation, Lightness）。

色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。
饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。
亮度（L），取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。
HSL 是一种将 RGB 色彩模型中的点在圆柱坐标系中的表示法。这两种表示法试图做到比基于笛卡尔坐标系的几何结构 RGB 更加直观。
* 定义色相 (0 到 360) - 0 (或 360) 为红色, 120 为绿色, 240 为蓝色
* 定义饱和度; 0% 为灰色， 100% 全色
* 定义亮度 0% 为暗, 50% 为普通, 100% 为白

# hsla()   
函数使用色相、饱和度、亮度、透明度来定义颜色。
HSLA 即色相、饱和度、亮度、透明度（英语：Hue, Saturation, Lightness, Alpha ）。

色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。
饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。
亮度（L） 取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。
透明度（A） 取值 0~1 之间， 代表透明度。
# linear-gradient
linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片。

创建一个线性渐变，需要指定两种颜色，还可以实现不同方向（指定为一个角度）的渐变效果，如果不指定方向，默认从下到上渐变。

/* 从上到下，蓝色渐变到红色 */
linear-gradient(45deg, blue, red);
 
/* 渐变轴为45度，从蓝色渐变到红色 */
linear-gradient(45deg, blue, red);
 
/* 从右下到左上、从蓝色渐变到红色 */
linear-gradient(to left top, blue, red);
 
/* 从下到上，从蓝色开始渐变、到高度40%位置是绿色渐变开始、最后以红色结束 */
linear-gradient(0deg, blue, green 40%, red);
# radial-gradient
adial-gradient() 函数用径向渐变创建 "图像"。

径向渐变由中心点定义。

为了创建径向渐变你必须设置两个终止色。
# repeating-linear-gradient
 函数用于创建重复的线性渐变 "图像"
# repeating-radial-gradient
 函数用于创建重复的径向渐变 "图像"。
# rgb
rgb() 函数使用红(R)、绿(G)、蓝(B)三个颜色的叠加来生成各式各样的颜色。

RGB 即红色、绿色、蓝色（英语：Red, Green, Blue）。

* 红色（R）0 到 255 间的整数，代表颜色中的红色成分。。
* 绿色（G）0 到 255 间的整数，代表颜色中的绿色成分。
* 蓝色（B）0 到 255 间的整数，代表颜色中的蓝色成分。
# rgba
gba() 函数使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。

RGBA 即红色、绿色、蓝色、透明度（英语：Red, Green, Blue、Alpha）。

* 红色（R）0 到 255 间的整数，代表颜色中的红色成分。。
* 绿色（G）0 到 255 间的整数，代表颜色中的绿色成分。
* 蓝色（B）0 到 255 间的整数，代表颜色中的蓝色成分。
* 透明度（A）取值 0~1 之间， 代表透明度。
# var() 
函数用于插入自定义的属性值，如果一个属性值在多处被使用，该方法就很有用
```
:root {
  --main-bg-color: coral;
}
 
#div1 {
  background-color: var(--main-bg-color);
}
 
#div2 {
  background-color: var(--main-bg-color);
}
```