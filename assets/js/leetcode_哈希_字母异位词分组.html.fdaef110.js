"use strict";(self.webpackChunkblog_road=self.webpackChunkblog_road||[]).push([[507],{6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},7207:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>h,data:()=>e});var n=a(641);const t=[(0,n.Fv)('<h1 id="字母异位词分组" tabindex="-1"><a class="header-anchor" href="#字母异位词分组"><span>字母异位词分组</span></a></h1><h3 id="题目-字母异位词分组" tabindex="-1"><a class="header-anchor" href="#题目-字母异位词分组"><span><strong>题目：字母异位词分组</strong></span></a></h3><p><strong>描述：</strong></p><p>给定一个字符串数组 <code>strs</code>，将字母异位词组合在一起。字母异位词是由重新排列源单词的所有字母得到的一个新单词。</p><p><strong>示例：</strong></p><p><strong>示例 1:</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入: strs = [&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;]</span></span>\n<span class="line"><span>输出: [[&quot;eat&quot;, &quot;tea&quot;, &quot;ate&quot;], [&quot;tan&quot;, &quot;nat&quot;], [&quot;bat&quot;]]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入: strs = [&quot;&quot;]</span></span>\n<span class="line"><span>输出: [[&quot;&quot;]]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入: strs = [&quot;a&quot;]</span></span>\n<span class="line"><span>输出: [[&quot;a&quot;]]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span><strong>解题思路：</strong></span></a></h3><p>字母异位词具有相同的字符集合，因此可以通过将字符串排序后得到统一的“代表”来判断字母异位词。这样，所有字母异位词在排序后的字符串中都会映射到同一个值。因此，我们可以使用一个哈希表（<code>HashMap</code>）将排序后的字符串作为键，原始字符串作为值进行分组。</p><h3 id="算法步骤" tabindex="-1"><a class="header-anchor" href="#算法步骤"><span><strong>算法步骤：</strong></span></a></h3><ol><li>遍历数组中的每个字符串。</li><li>对每个字符串进行排序，将排序后的字符串作为键。</li><li>将每个原始字符串添加到对应键的值（列表）中。</li><li>最后，返回哈希表中的所有值，即为字母异位词的分组。</li></ol><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span><strong>代码实现：</strong></span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> java.util.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> GroupAnagrams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> groupAnagrams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">strs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 用一个哈希表来存储字母异位词</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 遍历每个字符串</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> str</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> strs) {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 将字符串转换为字符数组并排序，得到唯一的代表</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">            char</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">charArray</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toCharArray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(charArray);</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">            String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sortedStr</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(charArray);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 将原始字符串添加到哈希表对应排序后的字符串键下</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">            List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">list</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getOrDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(sortedStr, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;());</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(str);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(sortedStr, list);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 返回哈希表中的所有值（即分组后的字母异位词）</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArrayList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">values</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        GroupAnagrams</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> solution</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> GroupAnagrams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 示例1</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">strs1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;eat&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tea&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tan&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ate&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;nat&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;bat&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">result1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">groupAnagrams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(strs1);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(result1);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 示例2</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">strs2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">result2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">groupAnagrams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(strs2);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(result2);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 示例3</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">strs3</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">result3</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> solution</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">groupAnagrams</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(strs3);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(result3);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间复杂度分析" tabindex="-1"><a class="header-anchor" href="#时间复杂度分析"><span><strong>时间复杂度分析：</strong></span></a></h3><ul><li><p><strong>时间复杂度</strong>：</p><ul><li>对每个字符串进行排序，排序的时间复杂度是 <code>O(k log k)</code>，其中 <code>k</code> 是字符串的长度。</li><li>遍历所有字符串需要 <code>O(n)</code> 的时间，其中 <code>n</code> 是字符串的数量。</li><li>因此，总的时间复杂度为：<code>O(n * k log k)</code>，其中 <code>n</code> 是字符串的数量，<code>k</code> 是单个字符串的最大长度。</li></ul></li><li><p><strong>空间复杂度</strong>：</p><ul><li>我们使用哈希表存储所有字符串，因此空间复杂度为 <code>O(n * k)</code>，其中 <code>n</code> 是字符串的数量，<code>k</code> 是字符串的最大长度。</li></ul></li></ul><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span><strong>结论：</strong></span></a></h3><p>这个解法通过对每个字符串排序并使用哈希表进行分组，能够有效地将字母异位词分组在一起，时间复杂度也比较合理，可以应对中等规模的数据集。</p><hr>',23)],l={},h=(0,a(6262).A)(l,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,t)}]]),e=JSON.parse('{"path":"/leetcode/%E5%93%88%E5%B8%8C/%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E5%88%86%E7%BB%84.html","title":"字母异位词分组","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-11-15T00:00:00.000Z","category":["后端"],"tag":["哈希","leecode"],"description":"字母异位词分组 题目：字母异位词分组 描述： 给定一个字符串数组 strs，将字母异位词组合在一起。字母异位词是由重新排列源单词的所有字母得到的一个新单词。 示例： 示例 1: 示例 2: 示例 3: 解题思路： 字母异位词具有相同的字符集合，因此可以通过将字符串排序后得到统一的“代表”来判断字母异位词。这样，所有字母异位词在排序后的字符串中都会映射到...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/leetcode/%E5%93%88%E5%B8%8C/%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E5%88%86%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"Bin的成长博客"}],["meta",{"property":"og:title","content":"字母异位词分组"}],["meta",{"property":"og:description","content":"字母异位词分组 题目：字母异位词分组 描述： 给定一个字符串数组 strs，将字母异位词组合在一起。字母异位词是由重新排列源单词的所有字母得到的一个新单词。 示例： 示例 1: 示例 2: 示例 3: 解题思路： 字母异位词具有相同的字符集合，因此可以通过将字符串排序后得到统一的“代表”来判断字母异位词。这样，所有字母异位词在排序后的字符串中都会映射到..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Bin"}],["meta",{"property":"article:tag","content":"哈希"}],["meta",{"property":"article:tag","content":"leecode"}],["meta",{"property":"article:published_time","content":"2024-11-15T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字母异位词分组\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-15T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bin\\",\\"url\\":\\"/avator_img.jpg\\"}]}"]]},"headers":[{"level":3,"title":"题目：字母异位词分组","slug":"题目-字母异位词分组","link":"#题目-字母异位词分组","children":[]},{"level":3,"title":"解题思路：","slug":"解题思路","link":"#解题思路","children":[]},{"level":3,"title":"算法步骤：","slug":"算法步骤","link":"#算法步骤","children":[]},{"level":3,"title":"代码实现：","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"时间复杂度分析：","slug":"时间复杂度分析","link":"#时间复杂度分析","children":[]},{"level":3,"title":"结论：","slug":"结论","link":"#结论","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.45,"words":735},"filePathRelative":"leetcode/哈希/字母异位词分组.md","localizedDate":"2024年11月15日","excerpt":"\\n<h3><strong>题目：字母异位词分组</strong></h3>\\n<p><strong>描述：</strong></p>\\n<p>给定一个字符串数组 <code>strs</code>，将字母异位词组合在一起。字母异位词是由重新排列源单词的所有字母得到的一个新单词。</p>\\n<p><strong>示例：</strong></p>\\n<p><strong>示例 1:</strong></p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>输入: strs = [\\"eat\\", \\"tea\\", \\"tan\\", \\"ate\\", \\"nat\\", \\"bat\\"]</span></span>\\n<span class=\\"line\\"><span>输出: [[\\"eat\\", \\"tea\\", \\"ate\\"], [\\"tan\\", \\"nat\\"], [\\"bat\\"]]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);