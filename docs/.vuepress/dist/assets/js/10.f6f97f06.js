(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{216:function(t,e,r){t.exports=r.p+"assets/img/eventLoop01.2d2f74f2.gif"},290:function(t,e,r){"use strict";r.r(e);var a=r(2),n=Object(a.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5b35cdfa51882574c020d685",target:"_blank",rel:"noopener noreferrer"}},[t._v("node基础面试事件环？微任务、宏任务？一篇带你飞"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"进程与线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程与线程")]),t._v(" "),a("p",[t._v("两个名词都是 CPU "),a("strong",[t._v("工作时间片")]),t._v("的一个描述。")]),t._v(" "),a("blockquote",[a("p",[t._v("进程描述了 CPU 在"),a("strong",[t._v("运行指令及加载和保存上下文所需的时间")]),t._v("，放在应用上来说就代表了一个程序。线程是进程中的更小单位，描述了执行一段指令所需的时间。")])]),t._v(" "),a("p",[t._v("把这些概念拿到浏览器中来说，当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。")]),t._v(" "),a("p",[t._v("上文说到了 JS 引擎线程和渲染线程，大家应该都知道，在 JS 运行的时候可能会阻止 UI 渲染，这说明了两个线程是"),a("strong",[t._v("互斥")]),t._v("的。这其中的原因是因为 JS 可以修改 DOM，如果在 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。这其实也是一个单线程的好处，得益于 JS 是单线程运行的，可以达到节省内存，节约上下文切换时间，没有锁的问题的好处。当然前面两点在服务端中更容易体现，对于锁的问题，形象的来说就是当我读取一个数字 15 的时候，同时有两个操作对数字进行了加减，这时候结果就出现了错误。解决这个问题也不难，只需要在读取的时候加锁，直到读取完毕之前都不能进行写入操作。")]),t._v(" "),a("h2",{attrs:{id:"执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),a("p",[t._v("可以把执行栈认为是一个存储函数调用的栈结构，遵循先进后出的原则。")]),t._v(" "),a("p",[a("img",{attrs:{src:r(216),alt:""}})]),t._v(" "),a("p",[t._v("当开始执行 JS 代码时，首先会执行一个 main 函数，然后执行我们的代码。根据先进后出的原则，后执行的函数会先弹出栈，在图中我们也可以发现，foo 函数后执行，当执行完毕后就从栈中弹出了。")])])},[],!1,null,null,null);e.default=n.exports}}]);