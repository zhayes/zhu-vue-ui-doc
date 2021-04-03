(self.webpackChunkzhu_ui_doc=self.webpackChunkzhu_ui_doc||[]).push([[369],{7588:(n,s,t)=>{"use strict";t.r(s),t.d(s,{data:()=>a});const a={key:"v-20058708",path:"/input.html",title:"Input",lang:"en-US",frontmatter:{title:"Input"},excerpt:"",headers:[{level:3,title:"props",slug:"props",children:[]},{level:3,title:"events",slug:"events",children:[]}],filePathRelative:"input.md",git:{updatedTime:1617446573e3,contributors:[{name:"chad",email:"chad@mbp.local",commits:1}]}}},9997:(n,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p});const a=(0,t(6252).uE)('<h1 id="input"><a class="header-anchor" href="#input">#</a> Input</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zhu-vue-ui&#39;</span><span class="token punctuation">;</span>\n    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;Input&quot;</span><span class="token punctuation">,</span> Input<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>支持双向数据绑定</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">@model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n        <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                    inputValue<span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="props"><a class="header-anchor" href="#props">#</a> props</h3><table><thead><tr><th>props</th><th>说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>readonly</td><td>是否只读。</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>是否被禁用。</td><td>boolean</td><td>false</td></tr><tr><td>type</td><td>定义类型。可选值:text/password</td><td>string</td><td>text</td></tr><tr><td>suffix</td><td>添加后缀字符</td><td>string</td><td>无</td></tr><tr><td>lineType</td><td>定义边框线样式。可选值:default/single_line(下划线输入框)</td><td>string</td><td>default</td></tr><tr><td>autocomplete</td><td>是否启用自动完成</td><td>string</td><td>无</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">#</a> events</h3><table><thead><tr><th>event</th><th>说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>suffixClick</td><td>后缀点击事件</td><td>Function</td><td>无</td></tr></tbody></table>',8),p={render:function(n,s){return a}}}}]);