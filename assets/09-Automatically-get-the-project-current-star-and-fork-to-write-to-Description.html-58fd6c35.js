import{_ as e,r as o,o as p,c as l,a as n,b as s,e as t,d as c}from"./app-984a00ab.js";const i={},u=n("p",null,"本文介绍一个有意思的小动作，它的主要功能是可以获取项目当前的 star 与 fork 数量，然后将这两个数据覆盖到项目的 Descrition 中。",-1),r={href:"https://github.com/ouuan/This-repo-has-x-stars-y-forks-action",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。</p><p>首先添加 Actions 配置文件，e.g. <code>.github/workflows/start-fork-updata.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> This repo has x stars y forks

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master
  <span class="token key atrule">fork</span><span class="token punctuation">:</span>
  <span class="token key atrule">watch</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> started
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&quot;0 * * * *&quot;</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">update</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> This repo has x stars y forks
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> ouuan/This<span class="token punctuation">-</span>repo<span class="token punctuation">-</span>has<span class="token punctuation">-</span>x<span class="token punctuation">-</span>stars<span class="token punctuation">-</span>y<span class="token punctuation">-</span>forks<span class="token punctuation">-</span>action@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token string">&quot;A profile README with &lt;starCount&gt; stars and &lt;forkCount&gt; forks 🌟&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=n("code",null,"ACCESS_TOKEN",-1),v={href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"目前配置的为每个小时执行一次更新，如果你想要其他时间，可根据需求进行调整。",-1),h=n("p",null,"效果如下：",-1),_=n("p",null,[n("img",{src:"https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220729_164001.png",alt:"image_20220729_164001"})],-1);function y(b,f){const a=o("ExternalLinkIcon");return p(),l("div",null,[u,n("p",null,[s("所用 Actions："),n("a",r,[s("This-repo-has-x-stars-y-forks-action"),t(a)])]),k,n("p",null,[s("配置文件中用到了  "),d,s("，我的这篇文章有详细介绍如何生成以及配置，可直接参考： "),n("a",v,[s("https://wiki.eryajf.net/pages/47a507/"),t(a)]),s("。")]),m,h,_])}const x=e(i,[["render",y],["__file","09-Automatically-get-the-project-current-star-and-fork-to-write-to-Description.html.vue"]]);export{x as default};
