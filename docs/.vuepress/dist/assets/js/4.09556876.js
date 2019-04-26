(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{210:function(_,v,t){_.exports=t.p+"assets/img/tcp_01.bb7fb4ac.jpg"},211:function(_,v,t){_.exports=t.p+"assets/img/tcp_02.e35eb411.jpg"},212:function(_,v,t){_.exports=t.p+"assets/img/tcp_03.3acc714e.jpg"},213:function(_,v,t){_.exports=t.p+"assets/img/tcp_04.6a8db2b9.jpg"},214:function(_,v,t){_.exports=t.p+"assets/img/tcp_05.f005d3fe.jpg"},215:function(_,v,t){_.exports=t.p+"assets/img/tcp_06.554f49d4.jpg"},271:function(_,v,t){"use strict";t.r(v);var a=t(2),r=Object(a.a)({},function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp","aria-hidden":"true"}},[_._v("#")]),_._v(" TCP")]),_._v(" "),a("p",[a("a",{attrs:{href:"http://crystalwindz.com/unp_note_1/#%E7%AC%AC%E4%B8%80%E7%AB%A0-%E6%9C%AC%E4%B9%A6%E7%AE%80%E4%BB%8B",target:"_blank",rel:"noopener noreferrer"}},[_._v("UNP-网络编程基础"),a("OutboundLink")],1)]),_._v(" "),a("p",[_._v("TCP 基本是和 UDP 反着来，建立连接断开连接都需要先需要进行握手。在传输数据的过程中，通过各种算法保证数据的可靠性，当然带来的问题就是相比 UDP 来说不那么的高效。")]),_._v(" "),a("h2",{attrs:{id:"_1-头部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-头部","aria-hidden":"true"}},[_._v("#")]),_._v(" 1. 头部")]),_._v(" "),a("p",[_._v("从这个图上我们就可以发现 TCP 头部比 UDP 头部复杂的多。")]),_._v(" "),a("p",[a("img",{attrs:{src:t(210),alt:""}})]),_._v(" "),a("p",[_._v("对于 TCP 头部来说，以下几个字段是很重要的")]),_._v(" "),a("ul",[a("li",[_._v("Sequence number，这个序号保证了 TCP 传输的报文都是有序的，对端可以通过序号顺序的拼接报文")]),_._v(" "),a("li",[_._v("Acknowledgement Number，这个序号表示数据接收端期望接收的下一个字节的编号是多少，同时也表示上一个序号的数据已经收到")]),_._v(" "),a("li",[_._v("Window Size，窗口大小，表示还能接收多少字节的数据，用于流量控制")]),_._v(" "),a("li",[_._v("标识符\n"),a("ul",[a("li",[_._v("URG=1：该字段为一表示本数据报的数据部分包含紧急信息，是一个高优先级数据报文，此时紧急指针有效。紧急数据一定位于当前数据包数据部分的最前面，紧急指针标明了紧急数据的尾部。")]),_._v(" "),a("li",[_._v("ACK=1：该字段为一表示确认号字段有效。此外，TCP 还规定在连接建立后传送的所有报文段都必须把 ACK 置为一。")]),_._v(" "),a("li",[_._v("PSH=1：该字段为一表示接收端应该立即将数据 push 给应用层，而不是等到缓冲区满后再提交。")]),_._v(" "),a("li",[_._v("RST=1：该字段为一表示当前 TCP 连接出现严重问题，可能需要重新建立 TCP 连接，也可以用于拒绝非法的报文段和拒绝连接请求。")]),_._v(" "),a("li",[_._v("SYN=1：当SYN=1，ACK=0时，表示当前报文段是一个连接请求报文。当SYN=1，ACK=1时，表示当前报文段是一个同意建立连接的应答报文。")]),_._v(" "),a("li",[_._v("FIN=1：该字段为一表示此报文段是一个释放连接的请求报文。")])])])]),_._v(" "),a("h2",{attrs:{id:"_2-状态机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-状态机","aria-hidden":"true"}},[_._v("#")]),_._v(" 2. 状态机")]),_._v(" "),a("p",[_._v("TCP 的状态机是很复杂的，并且与建立断开连接时的握手息息相关，接下来就来详细描述下两种握手。")]),_._v(" "),a("p",[a("img",{attrs:{src:t(211),alt:""}})]),_._v(" "),a("p",[_._v("在这之前需要了解一个重要的性能指标 RTT。该指标表示发送端发送数据到接收到对端数据所需的往返时间。")]),_._v(" "),a("h3",{attrs:{id:"_2-1-建立三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-建立三次握手","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.1 建立三次握手")]),_._v(" "),a("p",[a("img",{attrs:{src:t(212),alt:""}})]),_._v(" "),a("p",[_._v("首先假设主动发起请求的一端称为客户端，被动连接的一端称为服务端。不管是客户端还是服务端，TCP 连接建立完后都能发送和接收数据，所以 TCP 是一个全双工的协议。")]),_._v(" "),a("p",[_._v("起初，两端都为 CLOSED 状态。在通信开始前，双方都会创建 TCB。 服务器创建完 TCB 后便进入 LISTEN 状态，此时开始等待客户端发送数据。")]),_._v(" "),a("p",[a("strong",[_._v("第一次握手")])]),_._v(" "),a("p",[_._v("客户端向服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号。请求发送后，客户端便进入 SYN-SENT 状态。")]),_._v(" "),a("p",[a("strong",[_._v("第二次握手")])]),_._v(" "),a("p",[_._v("服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答中也会包含自身的数据通讯初始序号，发送完成后便进入 SYN-RECEIVED 状态。")]),_._v(" "),a("p",[a("strong",[_._v("第三次握手")])]),_._v(" "),a("p",[_._v("当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入 ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。")]),_._v(" "),a("p",[_._v("PS：第三次握手中可以包含数据，通过快速打开（TFO）技术就可以实现这一功能。其实只要涉及到握手的协议，都可以使用类似 TFO 的方式，客户端和服务端存储相同的 cookie，下次握手时发出 cookie 达到减少 RTT 的目的。")]),_._v(" "),a("blockquote",[a("p",[_._v("常考面试题：为什么 TCP 建立连接需要三次握手，明明两次就可以建立起连接")])]),_._v(" "),a("p",[_._v("因为这是为了防止出现失效的连接请求报文段被服务端接收的情况，从而产生错误。")]),_._v(" "),a("p",[_._v("可以想象如下场景。客户端发送了一个连接请求 A，但是因为网络原因造成了超时，这时 TCP 会启动超时重传的机制再次发送一个连接请求 B。此时请求顺利到达服务端，服务端应答完就建立了请求，然后接收数据后释放了连接。")]),_._v(" "),a("p",[_._v("假设这时候连接请求 A 在两端关闭后终于抵达了服务端，那么此时服务端会认为客户端又需要建立 TCP 连接，从而应答了该请求并进入 ESTABLISHED 状态。但是客户端其实是 CLOSED 的状态，那么就会导致服务端一直等待，造成资源的浪费。")]),_._v(" "),a("p",[_._v("PS：在建立连接中，任意一端掉线，TCP 都会重发 SYN 包，一般会重试五次，在建立连接中可能会遇到 SYN Flood 攻击。遇到这种情况你可以选择调低重试次数或者干脆在不能处理的情况下拒绝请求。")]),_._v(" "),a("h3",{attrs:{id:"_2-2-四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-四次挥手","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.2 四次挥手")]),_._v(" "),a("p",[a("img",{attrs:{src:t(213),alt:""}})]),_._v(" "),a("p",[_._v("TCP 是全双工的，在断开连接时两端都需要发送 FIN 和 ACK。")]),_._v(" "),a("p",[a("strong",[_._v("第一次挥手")])]),_._v(" "),a("p",[_._v("若客户端 A 认为数据发送完成，则它需要向服务端 B 发送连接释放请求。")]),_._v(" "),a("p",[a("strong",[_._v("第二次挥手")])]),_._v(" "),a("p",[_._v("B 收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明 A 到 B 的连接已经释放，不再接收 A 发的数据了。但是因为 TCP 连接是双向的，所以 B 仍旧可以发送数据给 A。")]),_._v(" "),a("p",[a("strong",[_._v("第三次挥手")])]),_._v(" "),a("p",[_._v("B 如果此时还有没发完的数据会继续发送，完毕后会向 A 发送连接释放请求，然后 B 便进入 LAST-ACK 状态。")]),_._v(" "),a("p",[_._v("PS：通过延迟确认的技术（通常有时间限制，否则对方会误认为需要重传），可以将第二次和第三次握手合并，延迟 ACK 包的发送。")]),_._v(" "),a("p",[a("strong",[_._v("第四次挥手")])]),_._v(" "),a("p",[_._v("A 收到释放请求后，向 B 发送确认应答，此时 A 进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有 B 的重发请求的话，就进入 CLOSED 状态。当 B 收到确认应答后，也便进入 CLOSED 状态。")]),_._v(" "),a("p",[a("strong",[_._v("为什么 A 要进入 TIME-WAIT 状态，等待 2MSL 时间后才进入 CLOSED 状态？")])]),_._v(" "),a("p",[_._v("为了保证 B 能收到 A 的确认应答。若 A 发完确认应答后直接进入 CLOSED 状态，如果确认应答因为网络问题一直没有到达，那么会造成 B 不能正常关闭。")]),_._v(" "),a("h2",{attrs:{id:"_3-arq协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-arq协议","aria-hidden":"true"}},[_._v("#")]),_._v(" 3. ARQ协议")]),_._v(" "),a("p",[_._v("RQ 协议也就是超时重传机制。通过确认和超时机制保证了数据的正确送达，ARQ 协议包含停止等待 ARQ 和连续 ARQ 两种协议。")]),_._v(" "),a("h3",{attrs:{id:"_3-1-停止等待-arq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-停止等待-arq","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.1 停止等待 ARQ")]),_._v(" "),a("p",[a("strong",[_._v("正常传输过程")])]),_._v(" "),a("p",[_._v("只要 A 向 B 发送一段报文，都要停止发送并启动一个定时器，等待对端回应，在定时器时间内接收到对端应答就取消定时器并发送下一段报文。")]),_._v(" "),a("p",[a("strong",[_._v("报文丢失或出错")])]),_._v(" "),a("p",[_._v("在报文传输的过程中可能会出现丢包。这时候超过定时器设定的时间就会再次发送丢失的数据直到对端响应，所以需要每次都备份发送的数据。")]),_._v(" "),a("p",[_._v("即使报文正常的传输到对端，也可能出现在传输过程中报文出错的问题。这时候对端会抛弃该报文并等待 A 端重传。")]),_._v(" "),a("p",[_._v("PS：一般定时器设定的时间都会大于一个 RTT 的平均时间。")]),_._v(" "),a("p",[a("strong",[_._v("ACK 超时或丢失")])]),_._v(" "),a("p",[_._v("对端传输的应答也可能出现丢失或超时的情况。那么超过定时器时间 A 端照样会重传报文。这时候 B 端收到相同序号的报文会丢弃该报文并重传应答，直到 A 端发送下一个序号的报文。")]),_._v(" "),a("p",[_._v("在超时的情况下也可能出现应答很迟到达，这时 A 端会判断该序号是否已经接收过，如果接收过只需要丢弃应答即可。")]),_._v(" "),a("p",[_._v("从上面的描述中大家肯定可以发现这肯定不是一个高效的方式。假设在良好的网络环境中，每次发送数据都需要等待片刻肯定是不能接受的。那么既然我们不能接受这个不那么高效的协议，就来继续学习相对高效的协议吧。")]),_._v(" "),a("h3",{attrs:{id:"_3-2-连续-arq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-连续-arq","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.2 连续 ARQ")]),_._v(" "),a("p",[_._v("在连续 ARQ 中，发送端拥有一个"),a("strong",[_._v("发送窗口")]),_._v("，可以在没有收到应答的情况下持续发送窗口内的数据，这样相比停止等待 ARQ 协议来说减少了等待时间，提高了效率。")]),_._v(" "),a("h3",{attrs:{id:"_3-3-累计确认"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-累计确认","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.3 累计确认")]),_._v(" "),a("p",[_._v("连续 ARQ 中，接收端会持续不断收到报文。如果和停止等待 ARQ 中接收一个报文就发送一个应答一样，就太浪费资源了。通过累计确认，可以在收到多个报文以后统一回复一个应答报文。报文中的 ACK 标志位可以用来告诉发送端这个序号之前的数据已经全部接收到了，下次请发送这个序号后的数据。")]),_._v(" "),a("p",[_._v("但是累计确认也有一个弊端。在连续接收报文时，可能会遇到接收到序号 5 的报文后，并未接收到序号 6 的报文，然而序号 7 以后的报文已经接收。遇到这种情况时，ACK 只能回复 6，这样就会造成发送端重复发送数据的情况。")]),_._v(" "),a("h2",{attrs:{id:"_4-滑动窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-滑动窗口","aria-hidden":"true"}},[_._v("#")]),_._v(" 4. 滑动窗口")]),_._v(" "),a("p",[_._v("在上面小节中讲到了发送窗口。在 TCP 中，两端其实都维护着窗口：分别为发送端窗口和接收端窗口。")]),_._v(" "),a("p",[_._v("发送端窗口包含已发送但未收到应答的数据和可以发送但是未发送的数据。")]),_._v(" "),a("p",[a("img",{attrs:{src:t(214),alt:"tcp_05"}})]),_._v(" "),a("p",[_._v("发送端窗口是由接收窗口剩余大小决定的。接收方会把当前接收窗口的剩余大小写入应答报文，发送端收到应答后根据该值和当前网络拥塞情况设置发送窗口的大小，所以发送窗口的大小是不断变化的。")]),_._v(" "),a("p",[_._v("当发送端接收到应答报文后，会随之将窗口进行滑动")]),_._v(" "),a("p",[a("img",{attrs:{src:t(215),alt:"tcp_06"}})]),_._v(" "),a("p",[_._v("滑动窗口是一个很重要的概念，它帮助 TCP 实现了流量控制的功能。接收方通过报文告知发送方还可以发送多少数据，从而保证接收方能够来得及接收数据，防止出现接收方带宽已满，但是发送方还一直发送数据的情况。")]),_._v(" "),a("h3",{attrs:{id:"_4-1-zero-窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-zero-窗口","aria-hidden":"true"}},[_._v("#")]),_._v(" 4.1 Zero 窗口")]),_._v(" "),a("p",[_._v("在发送报文的过程中，可能会遇到对端出现零窗口的情况。在该情况下，发送端会停止发送数据，并启动 persistent timer 。该定时器会定时发送请求给对端，让对端告知窗口大小。在重试次数超过一定次数后，可能会中断 TCP 链接。")]),_._v(" "),a("h2",{attrs:{id:"_5-拥塞处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-拥塞处理","aria-hidden":"true"}},[_._v("#")]),_._v(" 5. 拥塞处理")]),_._v(" "),a("p",[_._v("拥塞处理和流量控制不同，后者是作用于接收方，保证接收方来得及接受数据。而前者是作用于网络，防止过多的数据拥塞网络，避免出现网络负载过大的情况。")]),_._v(" "),a("p",[_._v("拥塞处理包括了四个算法，分别为：慢开始，拥塞避免，快速重传，快速恢复。")]),_._v(" "),a("h3",{attrs:{id:"_5-1-慢开始算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-慢开始算法","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.1 慢开始算法")]),_._v(" "),a("p",[_._v("慢开始算法，顾名思义，就是在传输开始时将发送窗口慢慢指数级扩大，从而避免一开始就传输大量数据导致网络拥塞。想必大家都下载过资源，每当我们开始下载的时候都会发现下载速度是慢慢提升的，而不是一蹴而就直接拉满带宽。")]),_._v(" "),a("p",[_._v("慢开始算法步骤具体如下")]),_._v(" "),a("ol",[a("li",[_._v("连接初始设置拥塞窗口（Congestion Window） 为 1 MSS（一个分段的最大数据量）")]),_._v(" "),a("li",[_._v("每过一个 RTT 就将窗口大小乘二")]),_._v(" "),a("li",[_._v("指数级增长肯定不能没有限制的，所以有一个阈值限制，当窗口大小大于阈值时就会启动拥塞避免算法。")])]),_._v(" "),a("h3",{attrs:{id:"_5-2-拥塞避免算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-拥塞避免算法","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.2 拥塞避免算法")]),_._v(" "),a("p",[_._v("拥塞避免算法相比简单点，每过一个 RTT 窗口大小只加一，这样能够避免指数级增长导致网络拥塞，慢慢将大小调整到最佳值。")]),_._v(" "),a("p",[_._v("在传输过程中可能定时器超时的情况，这时候 TCP 会认为网络拥塞了，会马上进行以下步骤：")]),_._v(" "),a("ul",[a("li",[_._v("将阈值设为当前拥塞窗口的一半")]),_._v(" "),a("li",[_._v("将拥塞窗口设为 1 MSS")]),_._v(" "),a("li",[_._v("启动拥塞避免算法")])]),_._v(" "),a("h3",{attrs:{id:"_5-3-快速重传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-快速重传","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.3 快速重传")]),_._v(" "),a("p",[_._v("快速重传一般和快恢复一起出现。一旦接收端收到的报文出现失序的情况，接收端只会回复最后一个顺序正确的报文序号。如果发送端收到三个重复的 ACK，无需等待定时器超时而是直接启动快速重传算法。具体算法分为两种：")]),_._v(" "),a("p",[a("strong",[_._v("TCP Taho 实现如下")])]),_._v(" "),a("ul",[a("li",[_._v("将阈值设为当前拥塞窗口的一半")]),_._v(" "),a("li",[_._v("将拥塞窗口设为 1 MSS")]),_._v(" "),a("li",[_._v("重新开始慢开始算法")])]),_._v(" "),a("p",[a("strong",[_._v("TCP Reno 实现如下")])]),_._v(" "),a("ul",[a("li",[_._v("拥塞窗口减半")]),_._v(" "),a("li",[_._v("将阈值设为当前拥塞窗口")]),_._v(" "),a("li",[_._v("进入快恢复阶段（重发对端需要的包，一旦收到一个新的 ACK 答复就退出该阶段），这种方式在丢失多个包的情况下就不那么好了")]),_._v(" "),a("li",[_._v("使用拥塞避免算法")])]),_._v(" "),a("h3",{attrs:{id:"_5-4-tcp-new-ren-改进后的快恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-tcp-new-ren-改进后的快恢复","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.4 TCP New Ren 改进后的快恢复")]),_._v(" "),a("p",[a("strong",[_._v("TCP New Reno")]),_._v(" 算法改进了之前 "),a("strong",[_._v("TCP Reno")]),_._v(" 算法的缺陷。在之前，快恢复中只要收到一个新的 ACK 包，就会退出快恢复。")]),_._v(" "),a("p",[_._v("在 "),a("strong",[_._v("TCP New Reno")]),_._v(" 中，TCP 发送方先记下三个重复 ACK 的分段的最大序号。")]),_._v(" "),a("p",[_._v("假如我有一个分段数据是 1 ~ 10 这十个序号的报文，其中丢失了序号为 3 和 7 的报文，那么该分段的最大序号就是 10。发送端只会收到 ACK 序号为 3 的应答。这时候重发序号为 3 的报文，接收方顺利接收的话就会发送 ACK 序号为 7 的应答。这时候 TCP 知道对端是有多个包未收到，会继续发送序号为 7 的报文，接收方顺利接收并会发送 ACK 序号为 11 的应答，这时发送端认为这个分段接收端已经顺利接收，接下来会退出快恢复阶段。")]),_._v(" "),a("h2",{attrs:{id:"_6-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-小结","aria-hidden":"true"}},[_._v("#")]),_._v(" 6. 小结")]),_._v(" "),a("p",[_._v("总结一下这一章节的内容：")]),_._v(" "),a("ul",[a("li",[_._v("建立连接需要三次握手，断开连接需要四次握手")]),_._v(" "),a("li",[_._v("滑动窗口解决了数据的丢包、顺序不对和流量控制问题")]),_._v(" "),a("li",[_._v("拥塞窗口实现了对流量的控制，保证在全天候环境下最优的传递数据")])])])},[],!1,null,null,null);v.default=r.exports}}]);