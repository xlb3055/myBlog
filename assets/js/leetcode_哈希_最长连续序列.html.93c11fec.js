"use strict";(self.webpackChunkblog_road=self.webpackChunkblog_road||[]).push([[1623],{6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},2470:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>e,data:()=>h});var n=a(641);const l=[(0,n.Fv)('<h1 id="最长连续序列" tabindex="-1"><a class="header-anchor" href="#最长连续序列"><span>最长连续序列</span></a></h1><h3 id="题目-最长连续序列" tabindex="-1"><a class="header-anchor" href="#题目-最长连续序列"><span><strong>题目：最长连续序列</strong></span></a></h3><p><strong>描述：</strong></p><p>给定一个未排序的整数数组 <code>nums</code>，找出数字连续的最长序列的长度。<strong>不要求序列元素在原数组中连续</strong>。</p><hr><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span><strong>示例：</strong></span></a></h3><p><strong>示例 1:</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入: nums = [100, 4, 200, 1, 3, 2]</span></span>\n<span class="line"><span>输出: 4</span></span>\n<span class="line"><span>解释: 最长连续序列是 [1, 2, 3, 4]，长度为 4。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入: nums = [0, 1, 2, 3, 4, 5]</span></span>\n<span class="line"><span>输出: 6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span><strong>解题思路：</strong></span></a></h3><p>为了找到最长的连续序列，我们可以利用 <strong>哈希集合 (HashSet)</strong> 来高效地进行查找。通过哈希集合，我们可以将数组中的所有元素存储起来，从而能在常数时间内检查某个元素是否存在。</p><p><strong>步骤：</strong></p><ol><li>将数组中的所有元素存入哈希集合 <code>set</code>。</li><li>遍历数组中的每个元素 <code>num</code>，对于每个元素，检查它是否是一个连续序列的起点。一个元素是连续序列的起点，当且仅当 <code>num-1</code> 不在集合中。</li><li>如果是起点，从该元素开始，继续检查 <code>num+1</code>, <code>num+2</code>，直到没有连续的元素为止，并更新最长的序列长度。</li><li>遍历完成后，返回最长连续序列的长度。</li></ol><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span><strong>代码实现：</strong></span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.HashSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LongestConsecutiveSequence</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> longestConsecutive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">nums</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 创建一个哈希集合来存储所有元素</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        HashSet</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashSet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> num</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums) {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(num);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> longestStreak</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 遍历每个元素</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> num</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums) {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 如果 num-1 不在集合中，那么 num 是一个可能的连续序列的起点</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">contains</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> currentNum</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> currentStreak</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // 向后查找连续的数字</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">contains</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(currentNum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)) {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    currentNum++;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    currentStreak++;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // 更新最长连续序列的长度</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                longestStreak </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(longestStreak, currentStreak);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> longestStreak;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        LongestConsecutiveSequence</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> solution</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> LongestConsecutiveSequence</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 示例1</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nums1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">longestConsecutive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums1));  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 输出: 4</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 示例2</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nums2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">longestConsecutive</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums2));  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 输出: 6</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="时间复杂度分析" tabindex="-1"><a class="header-anchor" href="#时间复杂度分析"><span><strong>时间复杂度分析：</strong></span></a></h3><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。遍历数组中的每个元素，且每个元素最多只会被访问两次（一次是检查是否是序列起点，一次是进行连续性查找）。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，我们使用了一个哈希集合来存储数组中的所有元素。</li></ul><hr><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结：</strong></span></a></h3><p>通过哈希集合存储所有元素，并结合元素是否为连续序列的起点，我们可以在 <code>O(n)</code> 时间内找到最长的连续序列。该方法非常高效，适合解决中等规模的数据集。</p>',23)],t={},e=(0,a(6262).A)(t,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),h=JSON.parse('{"path":"/leetcode/%E5%93%88%E5%B8%8C/%E6%9C%80%E9%95%BF%E8%BF%9E%E7%BB%AD%E5%BA%8F%E5%88%97.html","title":"最长连续序列","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-11-15T00:00:00.000Z","category":["后端"],"tag":["哈希","leecode"],"description":"最长连续序列 题目：最长连续序列 描述： 给定一个未排序的整数数组 nums，找出数字连续的最长序列的长度。不要求序列元素在原数组中连续。 示例： 示例 1: 示例 2: 解题思路： 为了找到最长的连续序列，我们可以利用 哈希集合 (HashSet) 来高效地进行查找。通过哈希集合，我们可以将数组中的所有元素存储起来，从而能在常数时间内检查某个元素是否...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/leetcode/%E5%93%88%E5%B8%8C/%E6%9C%80%E9%95%BF%E8%BF%9E%E7%BB%AD%E5%BA%8F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"Bin的成长博客"}],["meta",{"property":"og:title","content":"最长连续序列"}],["meta",{"property":"og:description","content":"最长连续序列 题目：最长连续序列 描述： 给定一个未排序的整数数组 nums，找出数字连续的最长序列的长度。不要求序列元素在原数组中连续。 示例： 示例 1: 示例 2: 解题思路： 为了找到最长的连续序列，我们可以利用 哈希集合 (HashSet) 来高效地进行查找。通过哈希集合，我们可以将数组中的所有元素存储起来，从而能在常数时间内检查某个元素是否..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Bin"}],["meta",{"property":"article:tag","content":"哈希"}],["meta",{"property":"article:tag","content":"leecode"}],["meta",{"property":"article:published_time","content":"2024-11-15T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"最长连续序列\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-15T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bin\\",\\"url\\":\\"/avator_img.jpg\\"}]}"]]},"headers":[{"level":3,"title":"题目：最长连续序列","slug":"题目-最长连续序列","link":"#题目-最长连续序列","children":[]},{"level":3,"title":"示例：","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"解题思路：","slug":"解题思路","link":"#解题思路","children":[]},{"level":3,"title":"代码实现：","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"时间复杂度分析：","slug":"时间复杂度分析","link":"#时间复杂度分析","children":[]},{"level":3,"title":"总结：","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.23,"words":669},"filePathRelative":"leetcode/哈希/最长连续序列.md","localizedDate":"2024年11月15日","excerpt":"\\n<h3><strong>题目：最长连续序列</strong></h3>\\n<p><strong>描述：</strong></p>\\n<p>给定一个未排序的整数数组 <code>nums</code>，找出数字连续的最长序列的长度。<strong>不要求序列元素在原数组中连续</strong>。</p>\\n<hr>\\n<h3><strong>示例：</strong></h3>\\n<p><strong>示例 1:</strong></p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>输入: nums = [100, 4, 200, 1, 3, 2]</span></span>\\n<span class=\\"line\\"><span>输出: 4</span></span>\\n<span class=\\"line\\"><span>解释: 最长连续序列是 [1, 2, 3, 4]，长度为 4。</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);