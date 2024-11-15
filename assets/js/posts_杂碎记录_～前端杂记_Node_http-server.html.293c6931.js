"use strict";(self.webpackChunkblog_road=self.webpackChunkblog_road||[]).push([[8764],{6262:(e,t)=>{t.A=(e,t)=>{const s=e.__vccOpts||e;for(const[e,i]of t)s[e]=i;return s}},2517:(e,t,s)=>{s.r(t),s.d(t,{comp:()=>n,data:()=>l});var i=s(641);const r=[(0,i.Fv)('<h1 id="http-server的安装及使用" tabindex="-1"><a class="header-anchor" href="#http-server的安装及使用"><span>http-server的安装及使用</span></a></h1><h2 id="什么是http-server" tabindex="-1"><a class="header-anchor" href="#什么是http-server"><span>什么是http-server？</span></a></h2><p>        http-server 是一个简单的命令行 HTTP 服务器，它可以快速地将任何目录变成一个 HTTP 服务器。这对于快速搭建本地开发环境、测试静态网页或分享文件非常有用。</p><h2 id="http-server的安装" tabindex="-1"><a class="header-anchor" href="#http-server的安装"><span>http-server的安装</span></a></h2><ol><li>打开终端或命令提示符</li><li>使用命令 <code>npm install -g http-server</code> 进行全局安装。<br> 如果只希望在当前项目使用，则使用命令 <code>npm install http-server --save-dev</code></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http-server</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http-server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save-dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-server的使用" tabindex="-1"><a class="header-anchor" href="#http-server的使用"><span>http-server的使用</span></a></h2><p>使用命令 <code>http-server [path] [-p port]</code>启动服务器，其中：</p><ul><li><code>[path]</code>为指定作为HTTP服务器根目录的文件夹，如果不指定，则默认使用当前目录。</li><li><code>[-p port]</code>为可选参数，用于指定服务器监听的端口，默认为8080端口。</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">http-server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [path] [-p port]</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 举个栗子：</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># http-server E:\\CodeProject\\IDEAProgram\\FileUpload\\uploads -p 3010</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 意为将本地项目 FileUpload 的 uploads 文件夹作为HTTP服务器根目录，同时指定端口号为3010</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10)],a={},n=(0,s(6262).A)(a,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,r)}]]),l=JSON.parse('{"path":"/posts/%E6%9D%82%E7%A2%8E%E8%AE%B0%E5%BD%95/%EF%BD%9E%E5%89%8D%E7%AB%AF%E6%9D%82%E8%AE%B0/Node/http-server.html","title":"http-server的安装及使用","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-08-11T00:00:00.000Z","category":["前端"],"tag":["Node.js","前端开发技巧"],"description":"http-server的安装及使用 什么是http-server？ http-server 是一个简单的命令行 HTTP 服务器，它可以快速地将任何目录变成一个 HTTP 服务器。这对于快速搭建本地开发环境、测试静态网页或分享文件非常有用。 http-server的安装 打开终端或命令提示符 使用命令 npm install -g http-serve...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/posts/%E6%9D%82%E7%A2%8E%E8%AE%B0%E5%BD%95/%EF%BD%9E%E5%89%8D%E7%AB%AF%E6%9D%82%E8%AE%B0/Node/http-server.html"}],["meta",{"property":"og:site_name","content":"Bin的成长博客"}],["meta",{"property":"og:title","content":"http-server的安装及使用"}],["meta",{"property":"og:description","content":"http-server的安装及使用 什么是http-server？ http-server 是一个简单的命令行 HTTP 服务器，它可以快速地将任何目录变成一个 HTTP 服务器。这对于快速搭建本地开发环境、测试静态网页或分享文件非常有用。 http-server的安装 打开终端或命令提示符 使用命令 npm install -g http-serve..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Bin"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"前端开发技巧"}],["meta",{"property":"article:published_time","content":"2024-08-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"http-server的安装及使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bin\\",\\"url\\":\\"/avator_img.jpg\\"}]}"]]},"headers":[{"level":2,"title":"什么是http-server？","slug":"什么是http-server","link":"#什么是http-server","children":[]},{"level":2,"title":"http-server的安装","slug":"http-server的安装","link":"#http-server的安装","children":[]},{"level":2,"title":"http-server的使用","slug":"http-server的使用","link":"#http-server的使用","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.99,"words":297},"filePathRelative":"posts/杂碎记录/～前端杂记/Node/http-server.md","localizedDate":"2024年8月11日","excerpt":"\\n<h2>什么是http-server？</h2>\\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;http-server 是一个简单的命令行 HTTP 服务器，它可以快速地将任何目录变成一个 HTTP 服务器。这对于快速搭建本地开发环境、测试静态网页或分享文件非常有用。</p>\\n<h2>http-server的安装</h2>\\n<ol>\\n<li>打开终端或命令提示符</li>\\n<li>使用命令 <code>npm install -g http-server</code> 进行全局安装。<br>\\n如果只希望在当前项目使用，则使用命令 <code>npm install http-server --save-dev</code></li>\\n</ol>","autoDesc":true}')}}]);