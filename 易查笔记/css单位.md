#  相对长度
 * em
 它是描述相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为16px，则2em == 32px；
 * ex  
  依赖于英文字母小 x 的高度
 * ch  
  数字 0 的宽度
 * rem  
 rem 是根 em（root em）的缩写，rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小。
 * vw  
 viewpoint width，视窗宽度，1vw=视窗宽度的1%
 * vh  
 viewpoint height，视窗高度，1vh=视窗高度的1%
 * vmin  
 vw和vh中较小的那个。
 * vmax  
 vw和vh中较大的那个。
 * %
# 绝对长度
 * cm
 厘米
 * mm  
 毫米
 * in  
 英寸 (1in = 96px = 2.54cm)
 * px  
 像素(1px = 1/96th of 1in)
 * pt  
 point，大约1/72英寸； (1pt = 1/72in)
 * pc  
 pica，大约6pt，1/6英寸； (1pc = 12 pt)
 # rem布局
 html {font-size: 62.5%;/*10 ÷ 16 × 100% = 62.5%*/}
 body {font-size: 1.4rem;/*1.4 × 10px = 14px */}
 h1 { font-size: 2.4rem;/*2.4 × 10px = 24px*/}
 实际项目设置成 font-size: 62.5%可能会出现问题，因为chrome不支持小于12px的字体，计算小于12px的时候，会默认取12px去计算，导致chrome的em/rem计算不准确。

针对这个现象，可以尝试设置html字体为100px，body 修正为16px，这样 0.1rem 就是 10px，而body的字体仍然是默认大小，不影响未设置大小的元素的默认字体的大小。
# rem弹性布局
```
<script>
    /*设置根元素<html>字体大小*/
    function getRem() {
        var html = document.getElementsByTagName("html")[0]; /*获取标签元素<html>*/
        var oWidth = document.body.clientWidth || document.documentElement.clientWidth; /*获取设备的宽度  ||后为兼容IE低版本写法*/
        html.style.fontSize = oWidth / 7.5 + "px"; /*设置根元素<html>字体大小   计算出的值 就相当于1rem;为什么？ 这就是rem单位的规定 1rem就等于根元素<html>字体大小*/
    }

    /*6.4: 为设计稿宽度640px; 若是750px的设计稿 只需要将6.4改为7.5即可。
     * 在手机屏幕宽度与设计稿一致时，即：oWidth = 750px 那么上面的计算 oWidth / 6.4 + "px" 结果就是100px;  html.style.fontSize = 100px 
     *css3中规定 1rem就对应这<html>的font-size的大小，所以100px = 1rem 这样方便大家将px转化为rem 按照这个比例来设置字体大小、元素宽高、内外边距等的单位为rem;
     *举例：在设计稿中，某一行字体大小为14px,则我们需要在css文件中将对应的字体设置为0.14rem;
     *      在设计稿中，某一个元素宽高分别为 100px与20px;则我们需要在css中将对应的宽高设置为1rem与0.2rem;
     */

    /*页面初始化调用getRem()*/
    window.onload = function() {
        /*初始化*/
        getRem();
        /*getRem绑定监听*/
        window.addEventListener("resize", getRem, false);
    };
</script>
```

  


