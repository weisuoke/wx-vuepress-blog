(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{411:function(t,_,v){"use strict";v.r(_);var e=v(2),l=Object(e.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"get与post的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get与post的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" Get与POST的区别")]),t._v(" "),v("p",[t._v("首先先引入副作用和幂等的概念。")]),t._v(" "),v("p",[t._v("副作用指对服务器上的资源做改变，搜索是无副作用的，注册是副作用的。")]),t._v(" "),v("p",[t._v("幂等指发送 M 和 N 次请求（两者不相同且都大于 1），服务器上资源的状态一致，比如注册 10 个和 11 个帐号是不幂等的，对文章进行更改 10 次和 11 次是幂等的。因为前者是多了一个账号（资源），后者只是更新同一个资源。")]),t._v(" "),v("p",[t._v("在规范的应用场景上说，Get 多用于无副作用，幂等的场景，例如搜索关键字。Post 多用于副作用，不幂等的场景，例如注册。")]),t._v(" "),v("p",[t._v("在技术上说：")]),t._v(" "),v("ul",[v("li",[t._v("Get 请求能缓存，Post 不能")]),t._v(" "),v("li",[t._v("Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里（当然你想写到 "),v("code",[t._v("body")]),t._v(" 里也是可以的），且会被浏览器保存历史纪录。Post 不会，但是在抓包的情况下都是一样的。")]),t._v(" "),v("li",[t._v("URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的")]),t._v(" "),v("li",[t._v("Post 支持更多的编码类型且不对数据类型限制")])]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("错解，但是能过面试\n"),v("ul",[v("li",[t._v("GET在浏览器回退时是无害的，而POST会再次提交请求。")]),t._v(" "),v("li",[t._v("GET产生的URL地址可以被加入收藏栏，而POST不可以。")]),t._v(" "),v("li",[t._v("GET请求会被浏览器主动cache，而POST不会，除非手动设置。")]),t._v(" "),v("li",[t._v("GET请求只能进行url编码，而POST支持多种编码方式。")]),t._v(" "),v("li",[t._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。")]),t._v(" "),v("li",[t._v("GET请求在URL中传送的参数是有长度限制的，而POST么有。")]),t._v(" "),v("li",[t._v("对参数的数据类型，GET只接受ASCII字符，而POST没有限制。")]),t._v(" "),v("li",[t._v("GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。")]),t._v(" "),v("li",[t._v("GET参数通过URL传递，POST放在Request body中。")])])]),t._v(" "),v("li",[t._v("正解\n就一个区别：语义——GET 用于获取资源，POST 用于提交资源。")]),t._v(" "),v("li",[t._v("想装逼请参考 "),v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22536382",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/22536382"),v("OutboundLink")],1)])])])])},[],!1,null,null,null);_.default=l.exports}}]);