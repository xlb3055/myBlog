"use strict";(self.webpackChunkblog_road=self.webpackChunkblog_road||[]).push([[1926],{6262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}},3588:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>p});var i=a(641);const l=[(0,i.Fv)('<h1 id="java中线程的状态" tabindex="-1"><a class="header-anchor" href="#java中线程的状态"><span>Java中线程的状态</span></a></h1><ol><li>新建状态：线程刚刚创建</li><li>就绪/运行状态</li><li>blocked状态：未持有锁资源的线程进入阻塞状态</li><li>waited状态：wait（）</li><li>timed_waited状态：sleep（）</li><li>结束状态</li></ol><h4 id="sleep-和-wait-的区别" tabindex="-1"><a class="header-anchor" href="#sleep-和-wait-的区别"><span>sleep 和 wait 的区别</span></a></h4><ol><li>Sleep使线程进入time_waited状态，经过一定时间自动唤醒；waited是在持有锁时主动释放锁资源进入waited状态，等待手动唤醒。</li><li>wait只有在持有锁的时候才能使用，而sleep持有或不持有锁都可以使用。</li><li>在持有锁时使用sleep不会释放锁资源，使用wait会释放锁资源</li></ol>',4)],o={},n=(0,a(6262).A)(o,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,l)}]]),p=JSON.parse('{"path":"/posts/%E6%9D%82%E7%A2%8E%E8%AE%B0%E5%BD%95/%EF%BD%9E%E5%90%8E%E7%AB%AF%E6%9D%82%E8%AE%B0/Java/%E7%BA%BF%E7%A8%8B%E7%9A%84%E7%8A%B6%E6%80%81.html","title":"Java中线程的状态","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-08-11T00:00:00.000Z","category":["后端"],"tag":["Java","后端开发技巧"],"description":"Java中线程的状态 新建状态：线程刚刚创建 就绪/运行状态 blocked状态：未持有锁资源的线程进入阻塞状态 waited状态：wait（） timed_waited状态：sleep（） 结束状态 sleep 和 wait 的区别 Sleep使线程进入time_waited状态，经过一定时间自动唤醒；waited是在持有锁时主动释放锁资源进入wai...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/posts/%E6%9D%82%E7%A2%8E%E8%AE%B0%E5%BD%95/%EF%BD%9E%E5%90%8E%E7%AB%AF%E6%9D%82%E8%AE%B0/Java/%E7%BA%BF%E7%A8%8B%E7%9A%84%E7%8A%B6%E6%80%81.html"}],["meta",{"property":"og:site_name","content":"Bin的成长博客"}],["meta",{"property":"og:title","content":"Java中线程的状态"}],["meta",{"property":"og:description","content":"Java中线程的状态 新建状态：线程刚刚创建 就绪/运行状态 blocked状态：未持有锁资源的线程进入阻塞状态 waited状态：wait（） timed_waited状态：sleep（） 结束状态 sleep 和 wait 的区别 Sleep使线程进入time_waited状态，经过一定时间自动唤醒；waited是在持有锁时主动释放锁资源进入wai..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Bin"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"后端开发技巧"}],["meta",{"property":"article:published_time","content":"2024-08-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中线程的状态\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bin\\",\\"url\\":\\"/avator_img.jpg\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"posts/杂碎记录/～后端杂记/Java/线程的状态.md","localizedDate":"2024年8月11日","excerpt":"\\n<ol>\\n<li>新建状态：线程刚刚创建</li>\\n<li>就绪/运行状态</li>\\n<li>blocked状态：未持有锁资源的线程进入阻塞状态</li>\\n<li>waited状态：wait（）</li>\\n<li>timed_waited状态：sleep（）</li>\\n<li>结束状态</li>\\n</ol>\\n<h4>sleep 和 wait 的区别</h4>\\n<ol>\\n<li>Sleep使线程进入time_waited状态，经过一定时间自动唤醒；waited是在持有锁时主动释放锁资源进入waited状态，等待手动唤醒。</li>\\n<li>wait只有在持有锁的时候才能使用，而sleep持有或不持有锁都可以使用。</li>\\n<li>在持有锁时使用sleep不会释放锁资源，使用wait会释放锁资源</li>\\n</ol>","autoDesc":true}')}}]);