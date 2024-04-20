import{_ as i,r as n,o as r,c as d,a,b as e,e as s,d as o}from"./app-61d5ee01.js";const l={},c=a("h2",{id:"问题背景",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#问题背景","aria-hidden":"true"},"#"),e(" 问题背景")],-1),h={href:"https://github.com/eryajf/awesome-github-profile-readme-chinese",target:"_blank",rel:"noopener noreferrer"},u=o(`<p>我点开图片链接确实跳到了404，我再仔细一看，原来引用图片的名字与图片本身的名字大小写不一致：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- [xJoyLu](https://github.com/xJoyLu)
  &lt;details&gt;
    &lt;summary&gt;Preview&lt;/summary&gt;
    &lt;img src=&quot;examples/xJoyLu.png&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而实际的文件名为：<code>xjoylu.png</code>。</p><p>GitHub在加载图片文件的时候，对文件名的大小写是敏感的，如果不一致，则将无法正确加载。</p><p>于是，我只能自己再修一下这个小问题了，但是我发现，当我在本地图片文件名改成与引用的名字一致后，提交总是无法生效。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><p>原来Git默认配置为忽略大小写，因此无法正确检测大小写的更改。</p><p>这里整理三种解决方案。</p><h3 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一" aria-hidden="true">#</a> 方案一</h3><p>修改Git的默认配置，从而让其对大小写敏感：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git config core.ignorecase false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行如上命令，即可关闭Git忽略大小写配置，以实现检测到大小写名称的更改。</p><h3 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二" aria-hidden="true">#</a> 方案二</h3><p>可以先将图片移出该项目，然后进行提交，提交之后，再移回来，再次提交，也可以达到目的。</p><h3 id="方案三" tabindex="-1"><a class="header-anchor" href="#方案三" aria-hidden="true">#</a> 方案三</h3><p>使用 git mv 命令修改文件名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git mv xjoylu.png xJoyLu.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再走常规的提交流程就可以了。</p>`,18);function p(m,v){const t=n("ExternalLinkIcon");return r(),d("div",null,[c,a("p",null,[e("在处理 "),a("a",h,[e("awesome-github-profile-readme-chinese"),s(t)]),e(" 项目的PR时，我仔细看了小伙伴提交的内容没有问题，就欣然同意了，然而，到底我还是年轻了，仍然出现了合并之后的一个小问题，那就是，我在预览合并之后的效果时发现，竟然无法加载图片。")]),u])}const x=i(l,[["render",p],["__file","08-How-to-deal-with-the-problem-that-file-name-conversion-case-cannot-be-submitted-in-Git.html.vue"]]);export{x as default};