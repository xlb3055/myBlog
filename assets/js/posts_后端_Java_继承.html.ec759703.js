"use strict";(self.webpackChunkblog_road=self.webpackChunkblog_road||[]).push([[2443],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,l]of s)a[i]=l;return a}},1323:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>h});var l=a(641);const n=[(0,l.Fv)('<h1 id="java的继承思想" tabindex="-1"><a class="header-anchor" href="#java的继承思想"><span>Java的继承思想</span></a></h1><ol><li>继承是 <em><strong>类与类</strong></em> 之间的关系</li><li>Java是<strong>单继承</strong>，不能多继承</li><li>super的注意要点： <ol><li>super调用父类的构造方法，必须在构造方法的第一个</li></ol></li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 父类：</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Father</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Father</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     //如果是有参构造</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     // public Father(String name){</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     //   //代码</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     // }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 子类：</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Son</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Father</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Son</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 调用父类构造方法</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// //如果是有参构造</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// super(&quot;huo&quot;);</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">//下面可以写其他代码</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>super必须只能出现在子类的方法或者构造方法中</li><li>super和this不能同时调用构造方法</li><li>super和this的区别： <ol><li>代表的对象不同： <ul><li>this:本身调用者这个对象</li><li>super:代表父类对象的应用</li></ul></li><li>前提： <ul><li>this:没有继承也可以使用</li><li>super:只有继承条件下才可以使用</li></ul></li><li>构造方法： <ul><li>this:本类的构造</li><li>super:父类的构造</li></ul></li></ol></li><li>super是调用父类方法的关键字，比如super.xxx()</li><li>重写的注意点： <ol><li>重写都是方法的重写，与属性无关</li><li>非静态和非私有的方法才能重写</li><li>修饰符范围可以扩大不能缩小</li><li>一个对象的实际类型是确定的 如下的实际类型均为Son 但是引用类型可以使用父类引用指向子类 如下son引用类型是Son，son1引用类型的Father</li></ol></li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Son</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> son </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Son</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // son的引用类型为Son()，实际类型为Son()</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Father</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> son1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Son</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // son1的引用类型为Father，实际类型为Son()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    son</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Son继承的Father方法</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    son</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">run2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 输出:重写了run2方法 原因是Son中重写了父类方法run2</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    son1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">run3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 报错，因为Father类中没有run3方法。</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    //由此可见：对象能执行哪些方法，主要看左边的引用类型，和右边实际类型关系不大</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5)],t={},e=(0,a(6262).A)(t,[["render",function(i,s){return(0,l.uX)(),(0,l.CE)("div",null,n)}]]),h=JSON.parse('{"path":"/posts/%E5%90%8E%E7%AB%AF/Java/%E7%BB%A7%E6%89%BF.html","title":"Java的继承思想","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-08-11T00:00:00.000Z","category":["后端"],"tag":["Java","后端开发技巧"],"description":"Java的继承思想 继承是 类与类 之间的关系 Java是单继承，不能多继承 super的注意要点： super调用父类的构造方法，必须在构造方法的第一个 super必须只能出现在子类的方法或者构造方法中 super和this不能同时调用构造方法 super和this的区别： 代表的对象不同： this:本身调用者这个对象 super:代表父类对象的应...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog_road/posts/%E5%90%8E%E7%AB%AF/Java/%E7%BB%A7%E6%89%BF.html"}],["meta",{"property":"og:site_name","content":"博客之路"}],["meta",{"property":"og:title","content":"Java的继承思想"}],["meta",{"property":"og:description","content":"Java的继承思想 继承是 类与类 之间的关系 Java是单继承，不能多继承 super的注意要点： super调用父类的构造方法，必须在构造方法的第一个 super必须只能出现在子类的方法或者构造方法中 super和this不能同时调用构造方法 super和this的区别： 代表的对象不同： this:本身调用者这个对象 super:代表父类对象的应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-10T06:17:00.000Z"}],["meta",{"property":"article:author","content":"Howkinsen"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"后端开发技巧"}],["meta",{"property":"article:published_time","content":"2024-08-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-10T06:17:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java的继承思想\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-10T06:17:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Howkinsen\\",\\"url\\":\\"/avator_img.jpg\\"}]}"]]},"headers":[],"git":{"createdTime":1731219420000,"updatedTime":1731219420000,"contributors":[{"name":"bin","email":"13598151+binxlb@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":1.68,"words":504},"filePathRelative":"posts/后端/Java/继承.md","localizedDate":"2024年8月11日","excerpt":"\\n<ol>\\n<li>继承是 <em><strong>类与类</strong></em> 之间的关系</li>\\n<li>Java是<strong>单继承</strong>，不能多继承</li>\\n<li>super的注意要点：\\n<ol>\\n<li>super调用父类的构造方法，必须在构造方法的第一个</li>\\n</ol>\\n</li>\\n</ol>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">// 父类：</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> class</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Father</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Father</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(){</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">     //如果是有参构造</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">     // public Father(String name){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">     //   //代码</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">     // }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">// 子类：</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> class</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Son</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> extends</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Father</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Son</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">super</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">// 调用父类构造方法</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">// //如果是有参构造</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">// super(\\"huo\\");</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">//下面可以写其他代码</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);