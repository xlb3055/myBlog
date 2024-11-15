"use strict";(self.webpackChunkblog_road=self.webpackChunkblog_road||[]).push([[8293],{6262:(e,r)=>{r.A=(e,r)=>{const t=e.__vccOpts||e;for(const[e,a]of r)t[e]=a;return t}},573:(e,r,t)=>{t.r(r),t.d(r,{comp:()=>n,data:()=>i});var a=t(641);const o=[(0,a.Fv)('<h1 id="java集合面试题上" tabindex="-1"><a class="header-anchor" href="#java集合面试题上"><span>Java集合面试题上</span></a></h1><hr><h3 id="_1-list-set-queue-map-四者的区别" tabindex="-1"><a class="header-anchor" href="#_1-list-set-queue-map-四者的区别"><span>1. <strong>List, Set, Queue, Map 四者的区别</strong>：</span></a></h3><ul><li><strong>List</strong>：<code>List</code> 是一个有序集合，允许元素重复，并且可以通过索引访问元素。它实现了 <code>RandomAccess</code> 接口，意味着它支持基于索引的快速访问，因此在频繁进行随机访问时具有优势。常见实现包括 <code>ArrayList</code> 和 <code>LinkedList</code>。 <ul><li><strong>使用场景</strong>：适合需要频繁随机访问或按顺序处理元素的场景。</li></ul></li><li><strong>Set</strong>：<code>Set</code> 是一个不允许元素重复的集合，元素的顺序通常不确定（对于 <code>HashSet</code> 来说）。<code>TreeSet</code> 提供了按自然顺序或自定义排序的功能。<code>LinkedHashSet</code> 保持插入顺序。 <ul><li><strong>使用场景</strong>：适合去重操作或需要保证无重复元素的场景。</li></ul></li><li><strong>Queue</strong>：<code>Queue</code> 是一种遵循 FIFO（先进先出）原则的集合，用于在队列中按顺序处理元素。<code>PriorityQueue</code> 根据元素的优先级而非插入顺序出队。 <ul><li><strong>使用场景</strong>：适用于任务调度、生产者消费者模式等需要顺序处理的场景。</li></ul></li><li><strong>Map</strong>：<code>Map</code> 是一个键值对集合，其中每个键映射到一个唯一的值。<code>HashMap</code> 提供了最快的查找速度，而 <code>TreeMap</code> 按键的自然顺序进行排序，<code>LinkedHashMap</code> 保留插入顺序。 <ul><li><strong>使用场景</strong>：适用于需要通过键快速查找值的场景。</li></ul></li></ul><h3 id="_2-集合框架底层数据结构总结" tabindex="-1"><a class="header-anchor" href="#_2-集合框架底层数据结构总结"><span>2. <strong>集合框架底层数据结构总结</strong>：</span></a></h3><ul><li><strong>数组（Array）</strong>：<code>ArrayList</code> 和 <code>HashMap</code> 等常用集合类通常会使用数组作为底层数据结构。数组具有较高的访问性能（O(1)），但在插入和删除时需要移动元素，因此在动态扩展时性能会下降。</li><li><strong>链表（LinkedList）</strong>：<code>LinkedList</code> 使用链表作为底层结构，支持 O(1) 时间复杂度的插入和删除操作，尤其适合频繁进行插入和删除的场景。但随机访问性能较差（O(n)）。</li><li><strong>树（Tree）</strong>：<code>TreeSet</code> 和 <code>TreeMap</code> 使用红黑树等平衡二叉树结构，保证元素有序，支持 O(log n) 的查找、插入和删除操作。</li><li><strong>哈希表（Hash Table）</strong>：<code>HashSet</code> 和 <code>HashMap</code> 使用哈希表实现，具有 O(1) 的平均查找时间，但在哈希冲突发生时，性能会退化到 O(n)。</li></ul><h3 id="_3-为什么要使用集合" tabindex="-1"><a class="header-anchor" href="#_3-为什么要使用集合"><span>3. <strong>为什么要使用集合？</strong></span></a></h3><p>集合是 Java 中一种非常重要的存储和操作数据的方式，提供了高效且灵活的解决方案。相比数组，集合类提供了更多的功能（如动态扩容、元素查找、排序、去重等），而且是线程安全的实现（如 <code>ConcurrentHashMap</code> 和 <code>BlockingQueue</code>）支持并发操作。集合的核心优势包括：</p><ul><li><strong>动态大小</strong>：不像数组需要预先定义大小，集合可以动态增长。</li><li><strong>丰富的API</strong>：集合类提供了多种操作方法，能够大大提高开发效率。</li><li><strong>灵活的存储结构</strong>：根据不同需求（如排序、去重、快速查找等）选择合适的数据结构。</li></ul><h3 id="_4-arraylist-和-array-数组-的区别" tabindex="-1"><a class="header-anchor" href="#_4-arraylist-和-array-数组-的区别"><span>4. <strong>ArrayList 和 Array（数组）的区别</strong>：</span></a></h3><ul><li><strong>性能差异</strong>：<code>Array</code> 是一个固定大小的结构，访问元素的时间复杂度是 O(1)。而 <code>ArrayList</code> 是一个动态数组，能够自动扩容，但扩容时需要复制元素，因此扩容操作的时间复杂度是 O(n)。</li><li><strong>灵活性</strong>：<code>Array</code> 不能自动扩容，且不能添加或删除元素，而 <code>ArrayList</code> 提供了丰富的方法来操作元素（如 <code>.add()</code>、<code>.remove()</code> 等）。</li><li><strong>存储类型</strong>：<code>Array</code> 可以存储基本数据类型和对象，而 <code>ArrayList</code> 只能存储对象（必须使用包装类来存储基本数据类型）。</li></ul><h3 id="_5-arraylist-和-vector-的区别" tabindex="-1"><a class="header-anchor" href="#_5-arraylist-和-vector-的区别"><span>5. <strong>ArrayList 和 Vector 的区别</strong>：</span></a></h3><ul><li><strong>线程安全性</strong>：<code>Vector</code> 是线程安全的，但由于其每个操作都需要加锁，所以在多线程环境下性能较差。<code>ArrayList</code> 不具备线程安全性，但它的性能优于 <code>Vector</code>。</li><li><strong>增长策略</strong>：<code>Vector</code> 每次扩容时增长为当前容量的 2 倍，而 <code>ArrayList</code> 扩容时通常为原来容量的 1.5 倍。</li><li><strong>使用场景</strong>：在单线程环境中，优先选择 <code>ArrayList</code>，因为它更高效；如果需要线程安全，可以选择 <code>CopyOnWriteArrayList</code> 或使用 <code>Collections.synchronizedList()</code> 来同步 <code>ArrayList</code>。</li></ul><h3 id="_6-vector-和-stack-的区别" tabindex="-1"><a class="header-anchor" href="#_6-vector-和-stack-的区别"><span>6. <strong>Vector 和 Stack 的区别</strong>：</span></a></h3><ul><li><strong>Vector</strong> 是一个动态数组，支持随时调整大小。</li><li><strong>Stack</strong> 继承自 <code>Vector</code>，提供了 LIFO（后进先出）操作，方法包括 <code>.push()</code>、<code>.pop()</code> 和 <code>.peek()</code>，常用于实现深度优先搜索（DFS）等算法。</li></ul><h3 id="_7-arraylist-是否可以添加-null-值" tabindex="-1"><a class="header-anchor" href="#_7-arraylist-是否可以添加-null-值"><span>7. <strong>ArrayList 是否可以添加 null 值？</strong></span></a></h3><p>是的，<code>ArrayList</code> 可以包含 <code>null</code> 元素。这是因为 <code>ArrayList</code> 底层使用数组，而数组可以存储 <code>null</code> 值（当然这取决于元素类型是否允许 <code>null</code>）。</p><h3 id="_8-arraylist-插入和删除元素的时间复杂度" tabindex="-1"><a class="header-anchor" href="#_8-arraylist-插入和删除元素的时间复杂度"><span>8. <strong>ArrayList 插入和删除元素的时间复杂度</strong>：</span></a></h3><ul><li><strong>插入</strong>：如果是在尾部插入，时间复杂度是 O(1)（摊销时间复杂度）。但如果是在中间或开头插入，则需要移动元素，时间复杂度是 O(n)。</li><li><strong>删除</strong>：删除元素时需要移动剩余元素，因此在最坏情况下，删除操作的时间复杂度是 O(n)。</li></ul><h3 id="_9-linkedlist-插入和删除元素的时间复杂度" tabindex="-1"><a class="header-anchor" href="#_9-linkedlist-插入和删除元素的时间复杂度"><span>9. <strong>LinkedList 插入和删除元素的时间复杂度</strong>：</span></a></h3><ul><li><strong>插入/删除</strong>：在链表头部或尾部插入和删除的时间复杂度是 O(1)，但如果需要在中间插入或删除，需要遍历链表，时间复杂度是 O(n)。</li></ul><h3 id="_10-linkedlist-为什么不能实现-randomaccess-接口" tabindex="-1"><a class="header-anchor" href="#_10-linkedlist-为什么不能实现-randomaccess-接口"><span>10. <strong>LinkedList 为什么不能实现 <code>RandomAccess</code> 接口？</strong></span></a></h3><p><code>LinkedList</code> 使用链表结构存储数据，每个节点都通过指针连接到下一个节点，因此需要从头部或尾部开始逐步遍历链表来访问元素，这导致随机访问的时间复杂度是 O(n)，所以 <code>LinkedList</code> 无法实现 <code>RandomAccess</code> 接口。</p><h3 id="_11-arraylist-与-linkedlist-区别" tabindex="-1"><a class="header-anchor" href="#_11-arraylist-与-linkedlist-区别"><span>11. <strong>ArrayList 与 LinkedList 区别</strong>：</span></a></h3><ul><li><strong>ArrayList</strong>：基于动态数组实现，支持快速的随机访问，适合频繁读取元素的场景；但对于中间插入和删除操作较慢。</li><li><strong>LinkedList</strong>：基于双向链表实现，适合频繁插入和删除操作，但对于随机访问性能较差。</li></ul><h3 id="_12-arraylist-的扩容机制" tabindex="-1"><a class="header-anchor" href="#_12-arraylist-的扩容机制"><span>12. <strong>ArrayList 的扩容机制</strong>：</span></a></h3><p><code>ArrayList</code> 每次扩容时将数组的大小增加为原来容量的 1.5 倍。当需要增加元素时，<code>ArrayList</code> 会重新分配一个新的数组，并将旧数组中的元素复制到新数组中，这个过程需要 O(n) 的时间。</p><h3 id="_13-comparable-和-comparator-的区别" tabindex="-1"><a class="header-anchor" href="#_13-comparable-和-comparator-的区别"><span>13. <strong>Comparable 和 Comparator 的区别</strong>：</span></a></h3><ul><li><strong>Comparable</strong>：定义了类的自然顺序，类必须实现 <code>compareTo()</code> 方法。</li><li><strong>Comparator</strong>：定义了外部排序规则，通过实现 <code>compare()</code> 方法来对不同的类进行排序。<code>Comparator</code> 不要求修改类本身。</li></ul><h3 id="_14-set-的无序性和不可重复性含义" tabindex="-1"><a class="header-anchor" href="#_14-set-的无序性和不可重复性含义"><span>14. <strong>Set 的无序性和不可重复性含义</strong>：</span></a></h3><ul><li><strong>无序性</strong>：元素没有明确的排列顺序。</li><li><strong>不可重复性</strong>：相同的元素只能出现一次，集合会自动去重。</li></ul><h3 id="_15-hashset、linkedhashset-和-treeset-区别" tabindex="-1"><a class="header-anchor" href="#_15-hashset、linkedhashset-和-treeset-区别"><span>15. <strong>HashSet、LinkedHashSet 和 TreeSet 区别</strong>：</span></a></h3><ul><li><strong>HashSet</strong>：无序且不重复，查找性能较好。</li><li><strong>LinkedHashSet</strong>：有序（按插入顺序），不重复。</li><li><strong>TreeSet</strong>：按自然顺序排序，不重复，查找性能相对较差，适合有序集合操作。</li></ul><h3 id="_16-queue-与-deque-的区别" tabindex="-1"><a class="header-anchor" href="#_16-queue-与-deque-的区别"><span>16. <strong>Queue 与 Deque 的区别</strong>：</span></a></h3><ul><li><strong>Queue</strong>：只允许从一端插入元素（尾部），从另一端移除元素（头部），遵循 FIFO（先进先出）原则。</li><li><strong>Deque</strong>：双端队列，允许从两端插入和移除元素，支持更多灵活的操作</li></ul><p>。</p><h3 id="_17-arraydeque-与-linkedlist-的区别" tabindex="-1"><a class="header-anchor" href="#_17-arraydeque-与-linkedlist-的区别"><span>17. <strong>ArrayDeque 与 LinkedList 的区别</strong>：</span></a></h3><ul><li><strong>ArrayDeque</strong>：基于动态数组实现，性能优于 <code>LinkedList</code>，尤其在栈和队列操作中。</li><li><strong>LinkedList</strong>：基于链表实现，插入删除操作更灵活，但性能相对较差。</li></ul><h3 id="_18-priorityqueue" tabindex="-1"><a class="header-anchor" href="#_18-priorityqueue"><span>18. <strong>PriorityQueue</strong>：</span></a></h3><p><code>PriorityQueue</code> 是一种基于堆的数据结构，用于按照优先级处理元素。元素的优先级由自然顺序或自定义的 <code>Comparator</code> 决定，适合任务调度、事件处理等场景。</p><h3 id="_19-什么是-blockingqueue" tabindex="-1"><a class="header-anchor" href="#_19-什么是-blockingqueue"><span>19. <strong>什么是 BlockingQueue？</strong></span></a></h3><p><code>BlockingQueue</code> 是一种线程安全的队列，当队列为空时，消费者线程会阻塞直到有元素可用；当队列满时，生产者线程会阻塞，直到有空间可以插入元素。常用于生产者消费者模式。</p><h3 id="_20-arrayblockingqueue-和-linkedblockingqueue-区别" tabindex="-1"><a class="header-anchor" href="#_20-arrayblockingqueue-和-linkedblockingqueue-区别"><span>20. <strong>ArrayBlockingQueue 和 LinkedBlockingQueue 区别</strong>：</span></a></h3><ul><li><strong>ArrayBlockingQueue</strong>：使用固定大小的数组，适用于已知最大容量的场景。</li><li><strong>LinkedBlockingQueue</strong>：支持更大的队列容量，通常用于多线程并发处理时。</li></ul><hr>',45)],s={},n=(0,t(6262).A)(s,[["render",function(e,r){return(0,a.uX)(),(0,a.CE)("div",null,o)}]]),i=JSON.parse('{"path":"/posts/Java/Java%E9%9B%86%E5%90%88/Java%E9%9B%86%E5%90%88%E9%9D%A2%E8%AF%95%E9%A2%98%E4%B8%8A.html","title":"Java集合面试题上","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-11-13T00:00:00.000Z","category":["后端"],"tag":["Java","集合","后端开发技巧"],"description":"Java集合面试题上 1. List, Set, Queue, Map 四者的区别： List：List 是一个有序集合，允许元素重复，并且可以通过索引访问元素。它实现了 RandomAccess 接口，意味着它支持基于索引的快速访问，因此在频繁进行随机访问时具有优势。常见实现包括 ArrayList 和 LinkedList。 使用场景：适合需要频繁...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/posts/Java/Java%E9%9B%86%E5%90%88/Java%E9%9B%86%E5%90%88%E9%9D%A2%E8%AF%95%E9%A2%98%E4%B8%8A.html"}],["meta",{"property":"og:site_name","content":"Bin的成长博客"}],["meta",{"property":"og:title","content":"Java集合面试题上"}],["meta",{"property":"og:description","content":"Java集合面试题上 1. List, Set, Queue, Map 四者的区别： List：List 是一个有序集合，允许元素重复，并且可以通过索引访问元素。它实现了 RandomAccess 接口，意味着它支持基于索引的快速访问，因此在频繁进行随机访问时具有优势。常见实现包括 ArrayList 和 LinkedList。 使用场景：适合需要频繁..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Bin"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"集合"}],["meta",{"property":"article:tag","content":"后端开发技巧"}],["meta",{"property":"article:published_time","content":"2024-11-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合面试题上\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bin\\",\\"url\\":\\"/avator_img.jpg\\"}]}"]]},"headers":[{"level":3,"title":"1. List, Set, Queue, Map 四者的区别：","slug":"_1-list-set-queue-map-四者的区别","link":"#_1-list-set-queue-map-四者的区别","children":[]},{"level":3,"title":"2. 集合框架底层数据结构总结：","slug":"_2-集合框架底层数据结构总结","link":"#_2-集合框架底层数据结构总结","children":[]},{"level":3,"title":"3. 为什么要使用集合？","slug":"_3-为什么要使用集合","link":"#_3-为什么要使用集合","children":[]},{"level":3,"title":"4. ArrayList 和 Array（数组）的区别：","slug":"_4-arraylist-和-array-数组-的区别","link":"#_4-arraylist-和-array-数组-的区别","children":[]},{"level":3,"title":"5. ArrayList 和 Vector 的区别：","slug":"_5-arraylist-和-vector-的区别","link":"#_5-arraylist-和-vector-的区别","children":[]},{"level":3,"title":"6. Vector 和 Stack 的区别：","slug":"_6-vector-和-stack-的区别","link":"#_6-vector-和-stack-的区别","children":[]},{"level":3,"title":"7. ArrayList 是否可以添加 null 值？","slug":"_7-arraylist-是否可以添加-null-值","link":"#_7-arraylist-是否可以添加-null-值","children":[]},{"level":3,"title":"8. ArrayList 插入和删除元素的时间复杂度：","slug":"_8-arraylist-插入和删除元素的时间复杂度","link":"#_8-arraylist-插入和删除元素的时间复杂度","children":[]},{"level":3,"title":"9. LinkedList 插入和删除元素的时间复杂度：","slug":"_9-linkedlist-插入和删除元素的时间复杂度","link":"#_9-linkedlist-插入和删除元素的时间复杂度","children":[]},{"level":3,"title":"10. LinkedList 为什么不能实现 RandomAccess 接口？","slug":"_10-linkedlist-为什么不能实现-randomaccess-接口","link":"#_10-linkedlist-为什么不能实现-randomaccess-接口","children":[]},{"level":3,"title":"11. ArrayList 与 LinkedList 区别：","slug":"_11-arraylist-与-linkedlist-区别","link":"#_11-arraylist-与-linkedlist-区别","children":[]},{"level":3,"title":"12. ArrayList 的扩容机制：","slug":"_12-arraylist-的扩容机制","link":"#_12-arraylist-的扩容机制","children":[]},{"level":3,"title":"13. Comparable 和 Comparator 的区别：","slug":"_13-comparable-和-comparator-的区别","link":"#_13-comparable-和-comparator-的区别","children":[]},{"level":3,"title":"14. Set 的无序性和不可重复性含义：","slug":"_14-set-的无序性和不可重复性含义","link":"#_14-set-的无序性和不可重复性含义","children":[]},{"level":3,"title":"15. HashSet、LinkedHashSet 和 TreeSet 区别：","slug":"_15-hashset、linkedhashset-和-treeset-区别","link":"#_15-hashset、linkedhashset-和-treeset-区别","children":[]},{"level":3,"title":"16. Queue 与 Deque 的区别：","slug":"_16-queue-与-deque-的区别","link":"#_16-queue-与-deque-的区别","children":[]},{"level":3,"title":"17. ArrayDeque 与 LinkedList 的区别：","slug":"_17-arraydeque-与-linkedlist-的区别","link":"#_17-arraydeque-与-linkedlist-的区别","children":[]},{"level":3,"title":"18. PriorityQueue：","slug":"_18-priorityqueue","link":"#_18-priorityqueue","children":[]},{"level":3,"title":"19. 什么是 BlockingQueue？","slug":"_19-什么是-blockingqueue","link":"#_19-什么是-blockingqueue","children":[]},{"level":3,"title":"20. ArrayBlockingQueue 和 LinkedBlockingQueue 区别：","slug":"_20-arrayblockingqueue-和-linkedblockingqueue-区别","link":"#_20-arrayblockingqueue-和-linkedblockingqueue-区别","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.9,"words":2069},"filePathRelative":"posts/Java/Java集合/Java集合面试题上.md","localizedDate":"2024年11月13日","excerpt":"\\n<hr>\\n<h3>1. <strong>List, Set, Queue, Map 四者的区别</strong>：</h3>\\n<ul>\\n<li><strong>List</strong>：<code>List</code> 是一个有序集合，允许元素重复，并且可以通过索引访问元素。它实现了 <code>RandomAccess</code> 接口，意味着它支持基于索引的快速访问，因此在频繁进行随机访问时具有优势。常见实现包括 <code>ArrayList</code> 和 <code>LinkedList</code>。\\n<ul>\\n<li><strong>使用场景</strong>：适合需要频繁随机访问或按顺序处理元素的场景。</li>\\n</ul>\\n</li>\\n<li><strong>Set</strong>：<code>Set</code> 是一个不允许元素重复的集合，元素的顺序通常不确定（对于 <code>HashSet</code> 来说）。<code>TreeSet</code> 提供了按自然顺序或自定义排序的功能。<code>LinkedHashSet</code> 保持插入顺序。\\n<ul>\\n<li><strong>使用场景</strong>：适合去重操作或需要保证无重复元素的场景。</li>\\n</ul>\\n</li>\\n<li><strong>Queue</strong>：<code>Queue</code> 是一种遵循 FIFO（先进先出）原则的集合，用于在队列中按顺序处理元素。<code>PriorityQueue</code> 根据元素的优先级而非插入顺序出队。\\n<ul>\\n<li><strong>使用场景</strong>：适用于任务调度、生产者消费者模式等需要顺序处理的场景。</li>\\n</ul>\\n</li>\\n<li><strong>Map</strong>：<code>Map</code> 是一个键值对集合，其中每个键映射到一个唯一的值。<code>HashMap</code> 提供了最快的查找速度，而 <code>TreeMap</code> 按键的自然顺序进行排序，<code>LinkedHashMap</code> 保留插入顺序。\\n<ul>\\n<li><strong>使用场景</strong>：适用于需要通过键快速查找值的场景。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}')}}]);