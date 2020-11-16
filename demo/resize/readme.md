# DragResize 参数说明
## 左顶点
  * x：  
  距离父容器的左边距
  * y：  
  距离父容器的的顶部距离
  * z:  
  图层的z-index
## 初始化大小
  * w
  初始化的宽度，默认100
  * h
  初始化的高度，默认100
## 最小的调整大小
* minw  
最小宽度，调整不能小于这个值，默认是50  
* minh
最小高度，调整不能小于这个值，默认是50
## 最大的调整大小
* parentLimitation  
是否启用受父容器大小限制
* parentW  
父容器的宽度
* parentH  
父容器的高度
## 定义拖动图标
* stickSize  
图标大小
* sticks  
图标样式后缀集合，注意顺序
## 事件
* clicked  
鼠标单击事件，参数是点击的元素
* activated
已经激活，可以进行大小调整
* deactivated  
非激活，不能进行大小调整
* resizing  
调整大小中,参数是新的边框
* resizestop  
调整大小结束，参数是新的边框




