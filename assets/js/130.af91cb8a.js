(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{314:function(_,e,a){"use strict";a.r(e);var v=a(2),t=Object(v.a)({},function(){var _=this,e=_.$createElement,a=_._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器缓存原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存原理","aria-hidden":"true"}},[_._v("#")]),_._v(" 浏览器缓存原理")]),_._v(" "),a("p",[_._v("缓存可以说是性能优化中"),a("strong",[_._v("简单高效")]),_._v("的一种优化方式了，它可以"),a("strong",[_._v("显著减少网络传输所带来的损耗")]),_._v("。")]),_._v(" "),a("p",[_._v("对于一个数据请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤。浏览器缓存可以帮助我们在第一和第三步骤中优化性能。比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据。")]),_._v(" "),a("p",[_._v("接下来的内容中我们将通过以下几个部分来探讨浏览器缓存机制：")]),_._v(" "),a("ul",[a("li",[_._v("缓存位置")]),_._v(" "),a("li",[_._v("缓存策略")]),_._v(" "),a("li",[_._v("实际场景应用缓存策略")])]),_._v(" "),a("h2",{attrs:{id:"_1-缓存位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-缓存位置","aria-hidden":"true"}},[_._v("#")]),_._v(" 1. 缓存位置")]),_._v(" "),a("p",[_._v("从缓存位置上来说分为四种，并且各自有"),a("strong",[_._v("优先级")]),_._v("，当依次查找缓存且都没有命中的时候，才会去请求网络")]),_._v(" "),a("ol",[a("li",[_._v("Service Worker")]),_._v(" "),a("li",[_._v("Memory Cache")]),_._v(" "),a("li",[_._v("Disk Cache")]),_._v(" "),a("li",[_._v("Push Cache")]),_._v(" "),a("li",[_._v("网络请求")])]),_._v(" "),a("h3",{attrs:{id:"_1-1-service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-service-worker","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.1 Service Worker")]),_._v(" "),a("p",[_._v("在上一章节中我们已经介绍了 Service Worker 的内容，这里就不演示相关的代码了。")]),_._v(" "),a("p",[_._v("Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们"),a("strong",[_._v("自由控制")]),_._v("缓存哪些文件、如何匹配缓存、如何读取缓存，并且"),a("strong",[_._v("缓存是持续性的")]),_._v("。")]),_._v(" "),a("p",[_._v("当 Service Worker 没有命中缓存的时候，我们需要去调用 "),a("code",[_._v("fetch")]),_._v(" 函数获取数据。也就是说，如果我们没有在 Service Worker 命中缓存的话，会根据缓存查找优先级去查找数据。"),a("strong",[_._v("但是不管我们是从 Memory Cache 中还是从网络请求中获取的数据，浏览器都会显示我们是从 Service Worker 中获取的内容。")])]),_._v(" "),a("h3",{attrs:{id:"_1-2-memory-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-memory-cache","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2 Memory Cache")]),_._v(" "),a("p",[_._v("Memory Cache 也就是内存中的缓存，读取内存中的数据肯定比磁盘快。"),a("strong",[_._v("但是内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。")]),_._v(" 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。")]),_._v(" "),a("p",[_._v("当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于内存缓存")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2020-03-25-152714.png",alt:"img"}})]),_._v(" "),a("p",[_._v("那么既然内存缓存这么高效，我们是不是能让数据都存放在内存中呢？")]),_._v(" "),a("p",[_._v("先说结论，这是"),a("strong",[_._v("不可能")]),_._v("的。首先计算机中的内存一定比硬盘容量小得多，操作系统需要精打细算内存的使用，所以能让我们使用的内存必然不多。内存中其实可以存储大部分的文件，比如说 JSS、HTML、CSS、图片等等。但是浏览器会把哪些文件丢进内存这个过程就很"),a("strong",[_._v("玄学")]),_._v("了，我查阅了很多资料都没有一个定论。")]),_._v(" "),a("p",[_._v("当然，我通过一些实践和猜测也得出了一些结论：")]),_._v(" "),a("ul",[a("li",[_._v("对于大文件来说，大概率是不存储在内存中的，反之优先")]),_._v(" "),a("li",[_._v("当前系统内存使用率高的话，文件优先存储进硬盘")])]),_._v(" "),a("h3",{attrs:{id:"_1-3-disk-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-disk-cache","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.3 Disk Cache")]),_._v(" "),a("p",[_._v("Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache "),a("strong",[_._v("胜在容量和存储时效性上。")])]),_._v(" "),a("p",[_._v("在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。"),a("strong",[_._v("并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。")])]),_._v(" "),a("h3",{attrs:{id:"_1-4-push-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-push-cache","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.4. Push Cache")]),_._v(" "),a("p",[_._v("Push Cache 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。"),a("strong",[_._v("并且缓存时间也很短暂，只在会话（Session）中存在，一旦会话结束就被释放。")])]),_._v(" "),a("p",[_._v("Push Cache 在国内能够查到的资料很少，也是因为 HTTP/2 在国内不够普及，但是 HTTP/2 将会是日后的一个趋势。这里推荐阅读 "),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fjakearchibald.com%2F2017%2Fh2-push-tougher-than-i-thought%2F",target:"_blank",rel:"noopener noreferrer"}},[_._v("HTTP/2 push is tougher than I thought"),a("OutboundLink")],1),_._v(" 这篇文章，但是内容是英文的，我翻译一下文章中的几个结论，有能力的同学还是推荐自己阅读")]),_._v(" "),a("ul",[a("li",[_._v("所有的资源都能被推送，但是 Edge 和 Safari 浏览器兼容性不怎么好")]),_._v(" "),a("li",[_._v("可以推送 "),a("code",[_._v("no-cache")]),_._v(" 和 "),a("code",[_._v("no-store")]),_._v(" 的资源")]),_._v(" "),a("li",[_._v("一旦连接被关闭，Push Cache 就被释放")]),_._v(" "),a("li",[_._v("多个页面可以使用相同的 HTTP/2 连接，也就是说能使用同样的缓存")]),_._v(" "),a("li",[_._v("Push Cache 中的缓存只能被使用一次")]),_._v(" "),a("li",[_._v("浏览器可以拒绝接受已经存在的资源推送")]),_._v(" "),a("li",[_._v("你可以给其他域名推送资源")])]),_._v(" "),a("h3",{attrs:{id:"_1-5-网络请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-网络请求","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.5 网络请求")]),_._v(" "),a("p",[_._v("如果所有缓存都没有命中的话，那么只能发起请求来获取资源了。")]),_._v(" "),a("p",[_._v("那么为了性能上的考虑，大部分的接口都应该选择好缓存策略，接下来我们就来学习缓存策略这部分的内容。")]),_._v(" "),a("h2",{attrs:{id:"_2-缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存策略","aria-hidden":"true"}},[_._v("#")]),_._v(" 2. 缓存策略")]),_._v(" "),a("p",[_._v("通常浏览器缓存策略分为两种："),a("strong",[_._v("强缓存")]),_._v("和"),a("strong",[_._v("协商缓存")]),_._v("，并且缓存策略都是通过设置 HTTP Header 来实现的。")]),_._v(" "),a("h3",{attrs:{id:"_2-1-强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-强缓存","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.1 强缓存")]),_._v(" "),a("p",[_._v("强缓存可以通过设置两种 HTTP Header 实现："),a("code",[_._v("Expires")]),_._v(" 和 "),a("code",[_._v("Cache-Control")]),_._v(" 。强缓存表示在缓存期间不需要请求，"),a("code",[_._v("state code")]),_._v(" 为 200。")]),_._v(" "),a("h4",{attrs:{id:"_2-1-1-expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-expires","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.1.1 Expires")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("Expires: Wed, 22 Oct 2018 08:41:00 GMT\n")])])]),a("p",[a("code",[_._v("Expires")]),_._v(" 是 HTTP/1 的产物，表示资源会在 "),a("code",[_._v("Wed, 22 Oct 2018 08:41:00 GMT")]),_._v(" 后过期，需要再次请求。并且 "),a("code",[_._v("Expires")]),_._v(" "),a("strong",[_._v("受限于本地时间")]),_._v("，如果修改了本地时间，可能会造成缓存失效。")]),_._v(" "),a("h4",{attrs:{id:"_2-1-2-cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-cache-control","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.1.2 Cache-control")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("Cache-control: max-age=30\n")])])]),a("p",[a("code",[_._v("Cache-Control")]),_._v(" 出现于 HTTP/1.1，"),a("strong",[_._v("优先级高于 Expires")]),_._v(" 。该属性值表示资源会在 30 秒后过期，需要再次请求。")]),_._v(" "),a("p",[a("code",[_._v("Cache-Control")]),_._v(" "),a("strong",[_._v("可以在请求头或者响应头中设置")]),_._v("，并且可以组合使用多种指令")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2020-03-25-152727.png",alt:"img"}})]),_._v(" "),a("p",[_._v("从图中我们可以看到，我们可以将"),a("strong",[_._v("多个指令配合起来一起使用")]),_._v("，达到多个目的。比如说我们希望资源能被缓存下来，并且是客户端和代理服务器都能缓存，还能设置缓存失效时间等等。")]),_._v(" "),a("p",[_._v("接下来我们就来学习一些常见指令的作用")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2020-03-25-152734.png",alt:"img"}})]),_._v(" "),a("h3",{attrs:{id:"_2-2-协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-协商缓存","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.2 协商缓存")]),_._v(" "),a("p",[_._v("如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种 HTTP Header 实现："),a("code",[_._v("Last-Modified")]),_._v(" 和 "),a("code",[_._v("ETag")]),_._v(" 。")]),_._v(" "),a("p",[_._v("当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2020-03-25-152739.png",alt:"img"}})]),_._v(" "),a("h4",{attrs:{id:"_2-2-1-last-modified-和-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-last-modified-和-if-modified-since","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.2.1 Last-Modified 和 If-Modified-Since")]),_._v(" "),a("p",[a("code",[_._v("Last-Modified")]),_._v(" 表示本地文件最后修改日期，"),a("code",[_._v("If-Modified-Since")]),_._v(" 会将 "),a("code",[_._v("Last-Modified")]),_._v(" 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 304 状态码。")]),_._v(" "),a("p",[_._v("但是 "),a("code",[_._v("Last-Modified")]),_._v(" 存在一些弊端：")]),_._v(" "),a("ul",[a("li",[_._v("如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 "),a("code",[_._v("Last-Modified")]),_._v(" 被修改，服务端不能命中缓存导致发送相同的资源")]),_._v(" "),a("li",[_._v("因为 "),a("code",[_._v("Last-Modified")]),_._v(" 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源")])]),_._v(" "),a("p",[_._v("因为以上这些弊端，所以在 HTTP / 1.1 出现了 "),a("code",[_._v("ETag")]),_._v(" 。")]),_._v(" "),a("h4",{attrs:{id:"_2-2-2-etag-和-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-etag-和-if-none-match","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.2.2 ETag 和 If-None-Match")]),_._v(" "),a("p",[a("code",[_._v("ETag")]),_._v(" 类似于文件指纹，"),a("code",[_._v("If-None-Match")]),_._v(" 会将当前 "),a("code",[_._v("ETag")]),_._v(" 发送给服务器，询问该资源 "),a("code",[_._v("ETag")]),_._v(" 是否变动，有变动的话就将新的资源发送回来。并且 "),a("code",[_._v("ETag")]),_._v(" 优先级比 "),a("code",[_._v("Last-Modified")]),_._v(" 高。")]),_._v(" "),a("p",[_._v("以上就是缓存策略的所有内容了，看到这里，不知道你是否存在这样一个疑问。"),a("strong",[_._v("如果什么缓存策略都没设置，那么浏览器会怎么处理？")])]),_._v(" "),a("p",[_._v("对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的 "),a("code",[_._v("Date")]),_._v(" 减去 "),a("code",[_._v("Last-Modified")]),_._v("值的 10% 作为缓存时间。")]),_._v(" "),a("h2",{attrs:{id:"_3-实际场景应用缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实际场景应用缓存策略","aria-hidden":"true"}},[_._v("#")]),_._v(" 3 实际场景应用缓存策略")]),_._v(" "),a("p",[_._v("单纯了解理论而不付诸于实践是没有意义的，接下来我们来通过几个场景学习下如何使用这些理论。")]),_._v(" "),a("h3",{attrs:{id:"_3-1-频繁变动的资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-频繁变动的资源","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1 频繁变动的资源")]),_._v(" "),a("p",[_._v("对于频繁变动的资源，首先需要使用 "),a("code",[_._v("Cache-Control: no-cache")]),_._v(" 使浏览器每次都请求服务器，然后配合 "),a("code",[_._v("ETag")]),_._v(" 或者 "),a("code",[_._v("Last-Modified")]),_._v(" 来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小。")]),_._v(" "),a("h3",{attrs:{id:"_3-2-代码文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-代码文件","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.2 代码文件")]),_._v(" "),a("p",[_._v("这里特指除了 HTML 外的代码文件，因为 HTML 文件一般不缓存或者缓存时间很短。")]),_._v(" "),a("p",[_._v("一般来说，现在都会使用工具来打包代码，那么我们就可以对文件名进行哈希处理，只有当代码修改后才会生成新的文件名。基于此，我们就可以给代码文件设置缓存有效期一年 "),a("code",[_._v("Cache-Control: max-age=31536000")]),_._v("，这样只有当 HTML 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存。")])])},[],!1,null,null,null);e.default=t.exports}}]);