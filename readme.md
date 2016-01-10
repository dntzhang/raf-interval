
##在线演示
http://kmdjs.github.io/transformjs/

##写在前面
transform是css3新增的一个属性,可是令开发者费解的是，其内部又有大量的属性如旋转、缩放、扭曲、平移，这也就导致了获取或者是设置transform中一个或者多个属性变得异常麻烦。

##transform.js意义

* 让前端没有难做的特效
* 告别style.xxxTransform= "xxx(xxdeg) xxx(xxx) "
* 直接element.scaleX=0.5，element.ratateZ=30.....,更加pure和友好;
* 自动更新元素的显示状态

当然这里transformjs没有提供诸如:animate({scaleX:2,ratation:60},500)的方法，开发者可以基于transform.js自行去封装，transformjs都这么便利了，结合tween也好，或者利用transition也好，封装一个animate方法应该非常简单。说白了，transformjs只负责让开发者通过简单的赋值操作，让dom变化。

##5分钟精通transform.js

这里是没有使用任何模块化开发框架，直接暴露在window下的使用代码：

```javascript
var element = document.querySelector("#testTransform");
//只需这一行代码
Transform(element);
//element就能够72变
element.rotateZ++;
element.scaleX = 2;
element.scaleY = 3;
```
当然还可以设置诸如：translateX, translateY, translateZ,rotateX,rotateY,rotateZ,scaleX, scaleY, scaleZ, regX, regY等属性。
>其中regX和regY相当于设置transform-origin。其余属性和transform一致。目前尚不支持skew。

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* mail:(kmdjs#qq.com, 把#换成@)
* qq: 644213943
* weibo: [@当耐特](http://weibo.com/iamleizhang)
