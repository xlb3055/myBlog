"use strict";(self.webpackChunkblog_road=self.webpackChunkblog_road||[]).push([[5962],{6262:(a,e)=>{e.A=(a,e)=>{const l=a.__vccOpts||a;for(const[a,n]of e)l[a]=n;return l}},9106:(a,e,l)=>{l.r(e),l.d(e,{comp:()=>r,data:()=>s});var n=l(641);const t=[(0,n.Fv)('<h1 id="java基础面试题上" tabindex="-1"><a class="header-anchor" href="#java基础面试题上"><span>Java基础面试题上</span></a></h1><hr><h1 id="java-语言基础面试题" tabindex="-1"><a class="header-anchor" href="#java-语言基础面试题"><span>Java 语言基础面试题</span></a></h1><h2 id="_1-java-语言有哪些特点" tabindex="-1"><a class="header-anchor" href="#_1-java-语言有哪些特点"><span>1. Java 语言有哪些特点？</span></a></h2><ul><li><strong>简洁性</strong>：Java 语言的语法比 C++ 简单，去掉了一些复杂的功能（如指针、头文件）。</li><li><strong>面向对象</strong>：Java 是一种面向对象的语言，所有代码都围绕对象进行设计。</li><li><strong>跨平台性</strong>：Java 程序可以在任何支持 Java 的设备上运行，这得益于 Java 的字节码技术。</li><li><strong>内存管理</strong>：Java 自动管理内存，通过垃圾回收机制（GC）来清理不再使用的对象。</li><li><strong>安全性</strong>：Java 提供了一些安全机制，如 Java 沙箱模型，防止恶意代码访问系统资源。</li></ul><h2 id="_2-java-se-vs-java-ee" tabindex="-1"><a class="header-anchor" href="#_2-java-se-vs-java-ee"><span>2. Java SE vs Java EE</span></a></h2><ul><li><strong>Java SE</strong>（标准版）：是 Java 的基本版本，提供了核心功能，如基本语法、数据类型、集合框架、文件 I/O 等。</li><li><strong>Java EE</strong>（企业版）：是在 Java SE 基础上扩展的，主要用于开发企业级应用，提供了如 Servlet、JSP、EJB、JPA 等技术。</li></ul><h2 id="_3-jvm-vs-jdk-vs-jre" tabindex="-1"><a class="header-anchor" href="#_3-jvm-vs-jdk-vs-jre"><span>3. JVM vs JDK vs JRE</span></a></h2><ul><li><strong>JVM</strong>（Java 虚拟机）：是一种执行 Java 字节码的虚拟机器，它使得 Java 可以跨平台。</li><li><strong>JDK</strong>（Java 开发工具包）：是 Java 开发的完整工具包，包含了编译器（javac）、调试器（jdb）、JRE 等开发工具。</li><li><strong>JRE</strong>（Java 运行时环境）：提供了运行 Java 程序所需的环境，包含了 JVM 和一些标准类库，但不包含开发工具。</li></ul><h2 id="_4-什么是字节码-采用字节码的好处是什么" tabindex="-1"><a class="header-anchor" href="#_4-什么是字节码-采用字节码的好处是什么"><span>4. 什么是字节码？采用字节码的好处是什么？</span></a></h2><ul><li><strong>字节码</strong>：是 Java 编译器生成的中间代码，不同于传统的机器码，它是平台无关的，可以在任何平台的 JVM 上运行。</li><li><strong>好处</strong>：平台无关性（一次编译，到处运行），提高了跨平台能力。</li></ul><h2 id="_5-为什么说-java-语言-编译与解释并存" tabindex="-1"><a class="header-anchor" href="#_5-为什么说-java-语言-编译与解释并存"><span>5. 为什么说 Java 语言“编译与解释并存”？</span></a></h2><ul><li>Java 程序在编译阶段会被编译成字节码，而字节码在运行时由 JVM 解释执行。这样就能在不同的平台上运行相同的 Java 程序。</li></ul><h2 id="_6-aot-有什么优点-为什么不全部使用-aot-呢" tabindex="-1"><a class="header-anchor" href="#_6-aot-有什么优点-为什么不全部使用-aot-呢"><span>6. AOT 有什么优点？为什么不全部使用 AOT 呢？</span></a></h2><ul><li><strong>AOT</strong>（Ahead-of-Time 编译）：指的是在程序运行之前将代码编译成机器码。</li><li><strong>优点</strong>：运行时不需要解释和编译，启动速度快，性能更好。</li><li><strong>缺点</strong>：编译时间长，代码的跨平台性可能受到限制，因此不适合所有场景。</li></ul><h2 id="_7-oracle-jdk-vs-openjdk" tabindex="-1"><a class="header-anchor" href="#_7-oracle-jdk-vs-openjdk"><span>7. Oracle JDK vs OpenJDK</span></a></h2><ul><li><strong>Oracle JDK</strong> 是由 Oracle 提供的 JDK，包含更多的商业支持。</li><li><strong>OpenJDK</strong> 是一个开源的 JDK 版本，遵循 GPL 协议，由社区维护。</li></ul><h2 id="_8-java-和-c-的区别" tabindex="-1"><a class="header-anchor" href="#_8-java-和-c-的区别"><span>8. Java 和 C++ 的区别？</span></a></h2><ul><li><strong>内存管理</strong>：Java 自动管理内存（垃圾回收），而 C++ 需要手动管理内存。</li><li><strong>平台无关性</strong>：Java 是跨平台的，而 C++ 编译后的程序只能在特定平台上运行。</li><li><strong>指针</strong>：C++ 使用指针，Java 则没有指针，减少了内存管理的复杂性。</li></ul><h2 id="_9-基本语法" tabindex="-1"><a class="header-anchor" href="#_9-基本语法"><span>9. 基本语法</span></a></h2><ul><li><strong>注释有哪几种形式</strong>：Java 支持单行注释（<code>//</code>）、多行注释（<code>/* ... */</code>）和文档注释（<code>/** ... */</code>）。</li><li><strong>标识符和关键字的区别</strong>：标识符是程序中用来标识变量、函数、类等的名字，关键字是 Java 中有特殊意义的词，如 <code>class</code>, <code>if</code>, <code>while</code> 等。</li><li><strong>Java 语言关键字</strong>：<code>public</code>, <code>private</code>, <code>class</code>, <code>static</code>, <code>if</code>, <code>else</code>, <code>for</code> 等。</li></ul><h2 id="_10-自增自减运算符与移位运算符" tabindex="-1"><a class="header-anchor" href="#_10-自增自减运算符与移位运算符"><span>10. 自增自减运算符与移位运算符</span></a></h2><ul><li><strong>自增自减</strong>：<code>++</code> 和 <code>--</code> 用于增加或减少变量的值。</li><li><strong>移位运算符</strong>：<code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code> 用于对二进制位进行移动操作。</li></ul><h2 id="_11-continue、break-和-return-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_11-continue、break-和-return-的区别是什么"><span>11. continue、break 和 return 的区别是什么？</span></a></h2><ul><li><strong>continue</strong>：跳过当前循环的本次迭代，继续执行下次循环。</li><li><strong>break</strong>：退出当前循环或 switch 语句。</li><li><strong>return</strong>：结束方法并返回指定的值。</li></ul><h2 id="_12-基本数据类型" tabindex="-1"><a class="header-anchor" href="#_12-基本数据类型"><span>12. 基本数据类型</span></a></h2><ul><li><strong>Java 中的几种基本数据类型</strong>：<code>int</code>（整数）、<code>double</code>（浮点数）、<code>char</code>（字符）、<code>boolean</code>（布尔值）等。</li><li><strong>基本类型和包装类型的区别</strong>：基本类型是值类型，而包装类型（如 <code>Integer</code>, <code>Double</code>）是对象类型。</li><li><strong>包装类型的缓存机制</strong>：为了提高性能，Java 对一些常用的包装类型（如 <code>Integer</code> 范围 -128 到 127）进行了缓存。</li><li><strong>自动装箱与拆箱</strong>：自动装箱是将基本类型转换成对应的包装类型；拆箱是将包装类型转换为基本类型。</li></ul><h2 id="_13-浮点数运算中的精度丢失问题" tabindex="-1"><a class="header-anchor" href="#_13-浮点数运算中的精度丢失问题"><span>13. 浮点数运算中的精度丢失问题</span></a></h2><ul><li><strong>精度丢失</strong>：浮点数在计算机中不能精确表示所有的十进制小数，因此会有精度丢失。</li><li><strong>解决方法</strong>：可以使用 <code>BigDecimal</code> 类来进行高精度计算，或者避免使用浮点数进行货币等精确计算。</li></ul><h2 id="_14-超过-long-整型的数据应该如何表示" tabindex="-1"><a class="header-anchor" href="#_14-超过-long-整型的数据应该如何表示"><span>14. 超过 long 整型的数据应该如何表示？</span></a></h2><ul><li>对于超过 <code>long</code> 范围的数据，可以使用 <code>BigInteger</code> 类，它能处理任意大小的整数。</li></ul><h2 id="_15-变量、成员变量与局部变量的区别" tabindex="-1"><a class="header-anchor" href="#_15-变量、成员变量与局部变量的区别"><span>15. 变量、成员变量与局部变量的区别？</span></a></h2><ul><li><strong>局部变量</strong>：在方法或块内部声明的变量，只在该方法或块内有效。</li><li><strong>成员变量</strong>：类中的变量，可以是实例变量或静态变量。</li></ul><h2 id="_16-静态变量有什么作用" tabindex="-1"><a class="header-anchor" href="#_16-静态变量有什么作用"><span>16. 静态变量有什么作用？</span></a></h2><ul><li><strong>静态变量</strong>：属于类而不是实例，所有对象共享同一份数据。</li></ul><h2 id="_17-字符型常量和字符串常量的区别" tabindex="-1"><a class="header-anchor" href="#_17-字符型常量和字符串常量的区别"><span>17. 字符型常量和字符串常量的区别？</span></a></h2><ul><li><strong>字符型常量</strong>：用单引号括起来，如 <code>&#39;A&#39;</code>。</li><li><strong>字符串常量</strong>：用双引号括起来，如 <code>&quot;Hello&quot;</code>。</li></ul><h2 id="_18-方法" tabindex="-1"><a class="header-anchor" href="#_18-方法"><span>18. 方法</span></a></h2><ul><li><strong>什么是方法的返回值？</strong> 方法的返回值是指该方法在执行完毕后返回的结果。没有返回值的方法使用 <code>void</code>。</li><li><strong>方法有哪几种类型？</strong> 方法可以是实例方法（依赖于对象）或者静态方法（依赖于类）。</li><li><strong>静态方法不能调用非静态成员</strong>：因为静态方法没有实例对象，它无法访问实例的成员。</li><li><strong>静态方法和实例方法有何不同？</strong> 静态方法属于类，实例方法属于对象。</li><li><strong>重载和重写有什么区别？</strong><ul><li><strong>重载</strong>：方法名相同，但参数不同。</li><li><strong>重写</strong>：子类重新定义父类的方法。</li></ul></li><li><strong>可变长参数</strong>：方法参数的个数不确定，可以使用 <code>...</code> 来定义。</li></ul><hr>',40)],o={},r=(0,l(6262).A)(o,[["render",function(a,e){return(0,n.uX)(),(0,n.CE)("div",null,t)}]]),s=JSON.parse('{"path":"/posts/Java/Java%E5%9F%BA%E7%A1%80/Java%E5%9F%BA%E7%A1%80%E4%B8%8A.html","title":"Java基础面试题上","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-11-10T00:00:00.000Z","category":["后端"],"tag":["Java","后端开发技巧"],"description":"Java基础面试题上 Java 语言基础面试题 1. Java 语言有哪些特点？ 简洁性：Java 语言的语法比 C++ 简单，去掉了一些复杂的功能（如指针、头文件）。 面向对象：Java 是一种面向对象的语言，所有代码都围绕对象进行设计。 跨平台性：Java 程序可以在任何支持 Java 的设备上运行，这得益于 Java 的字节码技术。 内存管理：J...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/posts/Java/Java%E5%9F%BA%E7%A1%80/Java%E5%9F%BA%E7%A1%80%E4%B8%8A.html"}],["meta",{"property":"og:site_name","content":"Bin的成长博客"}],["meta",{"property":"og:title","content":"Java基础面试题上"}],["meta",{"property":"og:description","content":"Java基础面试题上 Java 语言基础面试题 1. Java 语言有哪些特点？ 简洁性：Java 语言的语法比 C++ 简单，去掉了一些复杂的功能（如指针、头文件）。 面向对象：Java 是一种面向对象的语言，所有代码都围绕对象进行设计。 跨平台性：Java 程序可以在任何支持 Java 的设备上运行，这得益于 Java 的字节码技术。 内存管理：J..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Bin"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"后端开发技巧"}],["meta",{"property":"article:published_time","content":"2024-11-10T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础面试题上\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-10T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bin\\",\\"url\\":\\"/avator_img.jpg\\"}]}"]]},"headers":[{"level":2,"title":"1. Java 语言有哪些特点？","slug":"_1-java-语言有哪些特点","link":"#_1-java-语言有哪些特点","children":[]},{"level":2,"title":"2. Java SE vs Java EE","slug":"_2-java-se-vs-java-ee","link":"#_2-java-se-vs-java-ee","children":[]},{"level":2,"title":"3. JVM vs JDK vs JRE","slug":"_3-jvm-vs-jdk-vs-jre","link":"#_3-jvm-vs-jdk-vs-jre","children":[]},{"level":2,"title":"4. 什么是字节码？采用字节码的好处是什么？","slug":"_4-什么是字节码-采用字节码的好处是什么","link":"#_4-什么是字节码-采用字节码的好处是什么","children":[]},{"level":2,"title":"5. 为什么说 Java 语言“编译与解释并存”？","slug":"_5-为什么说-java-语言-编译与解释并存","link":"#_5-为什么说-java-语言-编译与解释并存","children":[]},{"level":2,"title":"6. AOT 有什么优点？为什么不全部使用 AOT 呢？","slug":"_6-aot-有什么优点-为什么不全部使用-aot-呢","link":"#_6-aot-有什么优点-为什么不全部使用-aot-呢","children":[]},{"level":2,"title":"7. Oracle JDK vs OpenJDK","slug":"_7-oracle-jdk-vs-openjdk","link":"#_7-oracle-jdk-vs-openjdk","children":[]},{"level":2,"title":"8. Java 和 C++ 的区别？","slug":"_8-java-和-c-的区别","link":"#_8-java-和-c-的区别","children":[]},{"level":2,"title":"9. 基本语法","slug":"_9-基本语法","link":"#_9-基本语法","children":[]},{"level":2,"title":"10. 自增自减运算符与移位运算符","slug":"_10-自增自减运算符与移位运算符","link":"#_10-自增自减运算符与移位运算符","children":[]},{"level":2,"title":"11. continue、break 和 return 的区别是什么？","slug":"_11-continue、break-和-return-的区别是什么","link":"#_11-continue、break-和-return-的区别是什么","children":[]},{"level":2,"title":"12. 基本数据类型","slug":"_12-基本数据类型","link":"#_12-基本数据类型","children":[]},{"level":2,"title":"13. 浮点数运算中的精度丢失问题","slug":"_13-浮点数运算中的精度丢失问题","link":"#_13-浮点数运算中的精度丢失问题","children":[]},{"level":2,"title":"14. 超过 long 整型的数据应该如何表示？","slug":"_14-超过-long-整型的数据应该如何表示","link":"#_14-超过-long-整型的数据应该如何表示","children":[]},{"level":2,"title":"15. 变量、成员变量与局部变量的区别？","slug":"_15-变量、成员变量与局部变量的区别","link":"#_15-变量、成员变量与局部变量的区别","children":[]},{"level":2,"title":"16. 静态变量有什么作用？","slug":"_16-静态变量有什么作用","link":"#_16-静态变量有什么作用","children":[]},{"level":2,"title":"17. 字符型常量和字符串常量的区别？","slug":"_17-字符型常量和字符串常量的区别","link":"#_17-字符型常量和字符串常量的区别","children":[]},{"level":2,"title":"18. 方法","slug":"_18-方法","link":"#_18-方法","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.19,"words":1556},"filePathRelative":"posts/Java/Java基础/Java基础上.md","localizedDate":"2024年11月10日","excerpt":"\\n<hr>\\n<h1>Java 语言基础面试题</h1>\\n<h2>1. Java 语言有哪些特点？</h2>\\n<ul>\\n<li><strong>简洁性</strong>：Java 语言的语法比 C++ 简单，去掉了一些复杂的功能（如指针、头文件）。</li>\\n<li><strong>面向对象</strong>：Java 是一种面向对象的语言，所有代码都围绕对象进行设计。</li>\\n<li><strong>跨平台性</strong>：Java 程序可以在任何支持 Java 的设备上运行，这得益于 Java 的字节码技术。</li>\\n<li><strong>内存管理</strong>：Java 自动管理内存，通过垃圾回收机制（GC）来清理不再使用的对象。</li>\\n<li><strong>安全性</strong>：Java 提供了一些安全机制，如 Java 沙箱模型，防止恶意代码访问系统资源。</li>\\n</ul>","autoDesc":true}')}}]);