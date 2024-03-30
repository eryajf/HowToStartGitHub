import{_ as e,r as o,o as i,c,a as n,b as s,e as t,d as p}from"./app-984a00ab.js";const l={},u=n("p",null,"This article introduces an interesting little action, its main function is to get the current number of stars and forks of the project, and then overlay these two data into the project's Descrition.",-1),r={href:"https://github.com/ouuan/This-repo-has-x-stars-y-forks-action",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.</p><p>Start by adding the Actions profile，e.g. <code>.github/workflows/start-fork-updata.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> This repo has x stars y forks

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k=n("code",null,"ACCESS_TOKEN",-1),h={href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"The current configuration performs an update every hour, and you can adjust it for your needs if you want other times.",-1),m=n("p",null,"The effect is as follows:",-1),f=n("p",null,[n("img",{src:"https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220729_164001.png",alt:"image_20220729_164001"})],-1);function y(_,b){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[s("Used Actions："),n("a",r,[s("This-repo-has-x-stars-y-forks-action"),t(a)])]),d,n("p",null,[k,s(" is used in the configuration file, and my article has detailed instructions on how to generate and configure, which can be directly referenced： "),n("a",h,[s("https://wiki.eryajf.net/pages/47a507/"),t(a)]),s("。")]),v,m,f])}const w=e(l,[["render",y],["__file","09-Automatically-get-the-project-current-star-and-fork-to-write-to-Description.html.vue"]]);export{w as default};