(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{248:function(t,r,e){"use strict";e.r(r);var a=e(2),n=Object(a.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监控","aria-hidden":"true"}},[t._v("#")]),t._v(" 监控")]),t._v(" "),e("h2",{attrs:{id:"_1-页面埋点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-页面埋点","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 页面埋点")]),t._v(" "),e("p",[t._v("页面埋点应该是大家最常写的监控了，一般起码会监控以下几个数据：")]),t._v(" "),e("ul",[e("li",[t._v("PV / UV")]),t._v(" "),e("li",[t._v("停留时长")]),t._v(" "),e("li",[t._v("流量来源")]),t._v(" "),e("li",[t._v("用户交互")])]),t._v(" "),e("p",[t._v("对于这几类统计，一般的实现思路大致可以分为两种，分别为手写埋点和无埋点的方式。")]),t._v(" "),e("p",[t._v("相信第一种方式也是大家最常用的方式，可以自主选择需要监控的数据然后在相应的地方写入代码。这种方式的灵活性很大，但是唯一的缺点就是工作量较大，每个需要监控的地方都得插入代码。")]),t._v(" "),e("p",[t._v("另一种无埋点的方式基本不需要开发者手写埋点了，而是统计所有的事件并且定时上报。这种方式虽然没有前一种方式繁琐了，但是因为统计的是所有事件，所以还需要后期过滤出需要的数据。")]),t._v(" "),e("h3",{attrs:{id:"_1-1-埋点的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-埋点的方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 埋点的方式")]),t._v(" "),e("ol",[e("li",[t._v("第一类是代码埋点，即在需要埋点的节点调用接口直接上传埋点数据，友盟、百度统计等第三方数据统计服务商大都采用这种方案；")]),t._v(" "),e("li",[t._v("第二类是可视化埋点，即通过可视化工具配置采集节点，在前端自动解析配置并上报埋点数据，从而实现所谓的“无痕埋点”， 代表方案是已经开源的"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/mixpanel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mixpanel"),e("OutboundLink")],1),t._v("；")]),t._v(" "),e("li",[t._v("第三类是“无埋点”，它并不是真正的不需要埋点，而是前端自动采集全部事件并上报埋点数据，在后端数据计算时过滤出有用数据，代表方案是国内的GrowingIO。")])]),t._v(" "),e("h3",{attrs:{id:"参考阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考阅读","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考阅读")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5b62d68df265da0f9d1a1cd6",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端监控和前端埋点方案设计"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26211623",target:"_blank",rel:"noopener noreferrer"}},[t._v("美团点评前端无痕埋点实践"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5ca31a586fb9a05e5123598a",target:"_blank",rel:"noopener noreferrer"}},[t._v("看完就懂的无痕埋点"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"_2-性能监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-性能监控","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 性能监控")]),t._v(" "),e("p",[t._v("性能监控可以很好的帮助开发者了解在各种真实环境下，页面的性能情况是如何的。")]),t._v(" "),e("p",[t._v("对于性能监控来说，我们可以直接使用浏览器自带的 "),e("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FPerformance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Performance API"),e("OutboundLink")],1),t._v(" 来实现这个功能。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/8/169fab35edbb0f89?imageslim",alt:"img"}})]),t._v(" "),e("p",[t._v("对于性能监控来说，其实我们只需要调用 "),e("code",[t._v("performance.getEntriesByType('navigation')")]),t._v(" 这行代码就行了。对，你没看错，一行代码我们就可以获得页面中各种详细的性能相关信息。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/8/169fab384060db66?imageslim",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"参考阅读-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考阅读-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考阅读")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5caaacc0e51d452b45296487",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解前端性能监控"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5b7a50c0e51d4538af60d995",target:"_blank",rel:"noopener noreferrer"}},[t._v("5 分钟撸一个前端性能监控工具"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5c71324b6fb9a049d37fbb7c",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js环境性能监控"),e("OutboundLink")],1)])])},[],!1,null,null,null);r.default=n.exports}}]);