import{_ as o,r as i,o as l,c as p,a as n,b as s,e,d as t}from"./app-61d5ee01.js";const c={},u=t(`<h2 id="foreword" tabindex="-1"><a class="header-anchor" href="#foreword" aria-hidden="true">#</a> Foreword</h2><p>When using GitHub Action, there is a scenario requirement to trigger the build through release, and then use the release number created this time during the build process.</p><p>At this point I&#39;m doing walkthroughs in the learn-github repository. Added the following action content:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> test action env

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>created<span class="token punctuation">]</span> <span class="token comment"># Indicates that it is triggered when a new Release is created</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test_action_env</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test Action Env
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At this time, manually create a release. The version number on my side is: <code>v0.5.6</code>, and then search for this keyword in the log output:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GITHUB_WORKFLOW_REF</span><span class="token operator">=</span>eryajf<span class="token operator">/</span>learn<span class="token operator">-</span>github<span class="token operator">/</span><span class="token punctuation">.</span>github<span class="token operator">/</span>workflows<span class="token operator">/</span>test<span class="token operator">-</span>env<span class="token punctuation">.</span>yml@refs<span class="token operator">/</span>tags<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">5.6</span>
<span class="token constant">GITHUB_REF</span><span class="token operator">=</span>refs<span class="token operator">/</span>tags<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">5.6</span>
<span class="token constant">GITHUB_REF_NAME</span><span class="token operator">=</span>v0<span class="token punctuation">.</span><span class="token number">5.6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Most solutions on the Internet start with <code>GITHUB _ REF</code> variable, for example:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get Release version
  <span class="token key atrule">env</span><span class="token punctuation">:</span>
    <span class="token key atrule">ACTIONS_ALLOW_UNSECURE_COMMANDS</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    echo &quot;::set-env name=RELEASE_VERSION::$(echo $GITHUB_REF | cut -d&#39;/&#39; -f 3)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>📢 Notice：</code> It should be noted that if you use <code>set-env</code> to add variables, you need to declare <code>ACTIONS_ALLOW_UNSECURE_COMMANDS: true</code>, otherwise the following error will be reported during the run:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>The <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">set-env</span><span class="token template-punctuation string">\`</span></span> command is disabled<span class="token punctuation">.</span> Please upgrade to using Environment Files or opt into unsecure command execution by setting the <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ACTIONS_ALLOW_UNSECURE_COMMANDS</span><span class="token template-punctuation string">\`</span></span> environment variable to <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span> For more information see<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>blog<span class="token operator">/</span>changelog<span class="token operator">/</span><span class="token number">2020</span><span class="token operator">-</span><span class="token number">10</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span>github<span class="token operator">-</span>actions<span class="token operator">-</span>deprecating<span class="token operator">-</span>set<span class="token operator">-</span>env<span class="token operator">-</span>and<span class="token operator">-</span>add<span class="token operator">-</span>path<span class="token operator">-</span>commands<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>There is nothing wrong with this, of course, but it is not convenient and elegant to use.</p><p>Maybe you have seen that there is a <code>GITHUB _ REF _ NAME</code> in the above log output, which happens to be the value you and I want, but what I want to tell you is that the official new variable is indeed given, but it is annoying Unfortunately, this variable is not exposed globally, so although you can see this variable in the <code>env</code> output, it is not actually available.</p><p>See these two discussions on this issue:</p>`,13),r={href:"https://github.com/github/docs/issues/15319",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/rlespinasse/github-slug-action/issues/104",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation" aria-hidden="true">#</a> Validation</h2><p>In order to verify the content stated above, I created a test script as follows:</p><p>::: v-pre</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> test action env

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>created<span class="token punctuation">]</span> <span class="token comment"># Indicates that it is triggered when a new Release is created</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test_action_env</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test Action Env
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          env</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get Release version
        <span class="token key atrule">id</span><span class="token punctuation">:</span> vars
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACTIONS_ALLOW_UNSECURE_COMMANDS</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;::set-env name=RELEASE_VERSION_ONE::$(echo $GITHUB_REF | cut -d&#39;/&#39; -f 3)&quot;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get Release version
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;RELEASE_VERSION_TWO=$<span class="token punctuation">{</span>GITHUB_REF<span class="token comment">#refs/*/}&quot; &gt;&gt; $GITHUB_ENV</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Show Release Num
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;通过GitHub-Action获取版本号： \${{ env.GITHUB_REF_NAME }}&quot;
          echo &quot;通过自定义脚本获取版本号第一种： \${{ env.RELEASE_VERSION_ONE }}&quot;
          echo &quot;通过自定义脚本获取版本号第二种： \${{ env.RELEASE_VERSION_TWO }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>After running, the result is as follows:</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20230228_151615.jpg" alt="image_20230228_151615"></p><p>::: v-pre It can be seen that although <code>GITHUB_REF_NAME=v0.5.13</code> can be seen in the global environment variable, in fact, in the subsequent context, you cannot refer to this variable through <code>\${{ env.GITHUB_REF_NAME }}</code>. :::</p><h2 id="solve" tabindex="-1"><a class="header-anchor" href="#solve" aria-hidden="true">#</a> Solve</h2><p>Although the script above provides two solutions, they are not elegant enough. There are also solutions to this problem on the Internet, especially the project github-slug-action specifically solved for variable problems in GitHub Action, which is also the protagonist of this article.</p>`,10),k={href:"https://github.com/rlespinasse/github-slug-action",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>This Action provides a series of functions such as variable leakage during the operation of GitHub Action.</p><p>At this point, we change the configuration file of action to the following:</p><p>::: v-pre</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> test action env

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>created<span class="token punctuation">]</span> <span class="token comment"># Indicates that it is triggered when a new Release is created</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test_action_env</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test Action Env
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Inject slug/short variables
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> rlespinasse/github<span class="token punctuation">-</span>slug<span class="token punctuation">-</span>action@v4

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          env</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Show Release Num
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;通过GitHub-Action获取版本号： \${{ env.GITHUB_REF_NAME }}&quot;
          echo &quot;通过github-slug-action获取版本号： \${{ env.GITHUB_REF_NAME_SLUG }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: v-pre When we apply github-slug-action to the assembly line, it will first fill in the originally officially omitted variable <code>\${{ env.GITHUB_REF_NAME }}</code>, and then obtain the corresponding version number by using <code>\${{ env.GITHUB_REF_NAME_SLUG }}</code>. :::</p><p>In addition to this variable, github-slug-action also provides some other variables and achieves simple configuration (as you can see, just refer to it in the assembly line), elegant and easy to use, so it is a very cost-effective action worth applying in the assembly line.</p>`,7),b={href:"https://github.com/rlespinasse/github-slug-action#available-environment-variables",target:"_blank",rel:"noopener noreferrer"};function h(g,y){const a=i("ExternalLinkIcon");return l(),p("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("https://github.com/github/docs/issues/15319"),e(a)])]),n("li",null,[n("a",d,[s("https://github.com/rlespinasse/github-slug-action/issues/104"),e(a)])])]),v,n("ul",null,[n("li",null,[s("Project："),n("a",k,[s("github-slug-action"),e(a)])])]),m,n("ul",null,[n("li",null,[s("For more available variables, please refer to"),n("a",b,[s("Description of official documents"),e(a)]),s("。")])])])}const f=o(c,[["render",h],["__file","10-Use-github-slug-action-to-leak-key-variables-in-the-Github-Action-context.html.vue"]]);export{f as default};