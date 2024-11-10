"use strict";(self.webpackChunkblog_road=self.webpackChunkblog_road||[]).push([[2669],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},7364:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>h});var n=a(641);const l=[(0,n.Fv)('<h1 id="java递归思想" tabindex="-1"><a class="header-anchor" href="#java递归思想"><span>Java递归思想</span></a></h1><h2 id="什么是递归" tabindex="-1"><a class="header-anchor" href="#什么是递归"><span>什么是递归？</span></a></h2><p>递归就是自己调用自己！！！！！！</p><ul><li>递归思想通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解。</li><li>包括两个部分： <ul><li>递归头：什么时候不调用自身方法，如果没有头，将陷入死循环</li><li>递归体：什么时候需要调用自身方法</li></ul></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /*</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        阶乘</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        思路： 当 n == 1 时，返回n（递归到头，该开始层层往回return了）</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">              当 n != 1 时，做乘法，同时层层递归，相当于f(n) * f(n-1)，然后f（n-1）里面是f(n-1) * f(n-2)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">              所以最后相当于 f(n) * f(n-1) * f(n-2) * ... * f(1)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     */</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span><em>注意</em></span></a></h3><p>由于java是栈机制，如果在递归基数较小可以使用，如果基数较大很容易造成栈溢出</p>',7)],t={},e=(0,a(6262).A)(t,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),h=JSON.parse('{"path":"/posts/%E5%90%8E%E7%AB%AF/Java/%E9%80%92%E5%BD%92.html","title":"Java递归思想","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-08-11T00:00:00.000Z","category":["后端"],"tag":["Java","后端开发技巧"],"description":"Java递归思想 什么是递归？ 递归就是自己调用自己！！！！！！ 递归思想通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解。 包括两个部分： 递归头：什么时候不调用自身方法，如果没有头，将陷入死循环 递归体：什么时候需要调用自身方法 注意 由于java是栈机制，如果在递归基数较小可以使用，如果基数较大很容易造成栈溢出","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog_road/posts/%E5%90%8E%E7%AB%AF/Java/%E9%80%92%E5%BD%92.html"}],["meta",{"property":"og:site_name","content":"博客之路"}],["meta",{"property":"og:title","content":"Java递归思想"}],["meta",{"property":"og:description","content":"Java递归思想 什么是递归？ 递归就是自己调用自己！！！！！！ 递归思想通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解。 包括两个部分： 递归头：什么时候不调用自身方法，如果没有头，将陷入死循环 递归体：什么时候需要调用自身方法 注意 由于java是栈机制，如果在递归基数较小可以使用，如果基数较大很容易造成栈溢出"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-10T06:17:00.000Z"}],["meta",{"property":"article:author","content":"Howkinsen"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"后端开发技巧"}],["meta",{"property":"article:published_time","content":"2024-08-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-10T06:17:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java递归思想\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-10T06:17:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Howkinsen\\",\\"url\\":\\"/avator_img.jpg\\"}]}"]]},"headers":[{"level":2,"title":"什么是递归？","slug":"什么是递归","link":"#什么是递归","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1731219420000,"updatedTime":1731219420000,"contributors":[{"name":"bin","email":"13598151+binxlb@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":0.86,"words":258},"filePathRelative":"posts/后端/Java/递归.md","localizedDate":"2024年8月11日","excerpt":"\\n<h2>什么是递归？</h2>\\n<p>递归就是自己调用自己！！！！！！</p>\\n<ul>\\n<li>递归思想通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解。</li>\\n<li>包括两个部分：\\n<ul>\\n<li>递归头：什么时候不调用自身方法，如果没有头，将陷入死循环</li>\\n<li>递归体：什么时候需要调用自身方法</li>\\n</ul>\\n</li>\\n</ul>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">    /*</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">        阶乘</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">        思路： 当 n == 1 时，返回n（递归到头，该开始层层往回return了）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">              当 n != 1 时，做乘法，同时层层递归，相当于f(n) * f(n-1)，然后f（n-1）里面是f(n-1) * f(n-2)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">              所以最后相当于 f(n) * f(n-1) * f(n-2) * ... * f(1)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">     */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> static</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> int</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> factorial</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> n) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        if</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(n </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">==</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">            return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> n</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        } </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">else</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">            return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> n </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">*</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> factorial</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">(n</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">-</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">)</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    }</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);