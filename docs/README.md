# JavaScript
**背景**

早期互联网用户通过速度只有28.8kbit/s的‘猫’，拨号上网，速度很慢，与服务器的通信陈本很高。 

**问题**

某些简单的表单验证，比如检测必传字段，需要服务端检测，用户发送缺失字段后，服务端得30多秒才响应缺失字段的错误，体验不好。

**措施**

开发一款运行在客户端的脚本语言，专门处理一些简单的表单验证，减轻服务端压力，优化客户体验

## javascript简史
**1995年2月**

Netscape(网景)计划为新发布的网景浏览器2(Netscape Navigator 2)开发一种名为Livescript的脚本语言，正式发布前夕为了蹭Java的热度，改名为javascript。

javascript 1.0版本发布后大获成功，不久后在网景浏览器3(Netscape Navigator 3)中发布了javascript 1.1。

**1996年8月**

竞争对手-微软在发布的IE浏览器3(Internet Explorer 3)中加入了JScript(基于Netscape Javascript 1.0)的javascript实现。

**1997**

网景的javascript 和 微软的JScript，语法特性各不相同，没有统一的标准，不同版本并存导致的矛盾与日俱增。

1997年各大公司以Javascript 1.1为蓝本提交至ECMA(欧洲计算机制造商协会)，各大公司的程序员组建了TC39技术委员会，花了几个月的时间完成了统一的脚本语言标准，名为ECMAScript(**这是一种js的规范/标准，比如如今的ES6就是js的一种语法标准**)。

随后就是对ECMAScript不断得修订改版...

## Javascript是一门什么样的语言？

Javascript是一种专门为网页交互而设计的脚本语言，由以下三部分组成：
- ECMAScript标准，提供核心语言功能
- 文档对象模型(DOM)，提供访问和操作网页内容的方法和接口
- 浏览器对象模型(BOM)，提供与浏览器交互的方法和接口