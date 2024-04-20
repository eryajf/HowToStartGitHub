import{_ as o,r as p,o as c,c as l,a as n,b as s,e as t,d as e}from"./app-61d5ee01.js";const i={},u=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),r=n("p",null,"日常开发过程中，不论是哪个语言，一定都会有相对应的语法检测工具或者手段来辅助我们检查出编码过程中的一些遗漏或疏忽。但有时候会有一个尴尬的情况就是，把检测的方式配置上去了，却没有运行，最后成了摆设。",-1),d=n("p",null,"今天来介绍一个工具，能够完成在代码提交之前运行指定检测，从而实现代码的自检。",-1),k={href:"https://github.com/pre-commit/pre-commit",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pre-commit.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/pre-commit/pre-commit-hooks",target:"_blank",rel:"noopener noreferrer"},_=e(`<p>pre-commit 的运行机制借助于 git hook 来完成提交之前的一些预定义指令的运行，来达到提交前检测的目的。</p><h2 id="关于git-hook" tabindex="-1"><a class="header-anchor" href="#关于git-hook" aria-hidden="true">#</a> 关于git hook</h2><p>Git 能在特定的重要动作发生时触发自定义脚本钩子。钩子分为两组：</p><ul><li>客户端钩子：<code>pre-commit</code>, <code>prepare-commit-msg</code>, <code>commit-msg</code>, <code>post-commit</code> 等，主要在服务端接收提交对象时、推送到服务器之前调用。</li><li>服务器钩子：<code>pre-receive</code>, <code>post-receive</code>, <code>update</code> 等，主要在服务端接收提交对象时、推送到服务器之前调用。</li></ul><p>git hooks 位置位于每个 git 项目下的 <code>.git/hooks</code> 目录里，进去后会看到这些钩子的官方示例，都是以 <code>.sample</code> 结尾的文件，这些示例脚本是不会执行的，去掉 <code>.sample</code> 后缀可激活该钩子脚本。</p><blockquote><p>PS：GIt hooks 的每个钩子的作用和说明，详细的以官方文档为准： https://git-scm.com/docs/githooks</p></blockquote><p><img src="http://t.eryajf.net/imgs/2023/02/b521f43dba90f43b.jpg" alt=""></p><h2 id="安装体验" tabindex="-1"><a class="header-anchor" href="#安装体验" aria-hidden="true">#</a> 安装体验</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>pre-commit 是一个 Python 语言写的工具，通过如下命令能够轻松安装该工具：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pip3 <span class="token function">install</span> pre-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pre-commit <span class="token parameter variable">--version</span>
pre-commit <span class="token number">3.1</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这条命令运行没有问题，则说明安装成功。</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>`,15),v={href:"https://github.com/eryajf/learn-github",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>pre-commit 以 <code>.pre-commit-config.yaml</code> 文件作为默认的配置文件，在项目根目录执行如下命令生成简单的配置内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pre-commit sample-config <span class="token operator">&gt;</span> .pre-commit-config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看一下配置文件的内容信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .pre-commit-config.yaml
<span class="token comment"># See https://pre-commit.com for more information</span>
<span class="token comment"># See https://pre-commit.com/hooks.html for more hooks</span>
repos:
-   repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
    -   id: trailing-whitespace
    -   id: end-of-file-fixer
    -   id: check-yaml
    -   id: check-added-large-files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>repos：表示一系列仓库的映射。 <ul><li>repo：表示接下来使用的 hooks 脚本从哪个仓库进行拉取。</li><li>rev：指定将要拉取的 tag 。</li><li>hooks：钩子脚本列表，这些脚本来自于 repo 定义的仓库中。 <ul><li>id：指定将要应用的钩子的名称，就是对应的文件名。</li></ul></li></ul></li></ul><p>其中 hooks 还有更加丰富的配置信息，这里暂不展开，随后再进行完整介绍。</p><p>简单解释下如上配置文件的意思：在代码提交之前，会运行 hooks 列表中的这些检查，这些脚本来自于 <code>https://github.com/pre-commit/pre-commit-hooks</code> 这个仓库的 <code>v4.4.0</code>。四个检查脚本的含义如下：</p><ul><li><code>trailing-whitespace</code> ：检查修建行尾的空格</li><li><code>end-of-file-fixer</code> ：确保文件以换行符结尾且仅以换行符结尾。</li><li><code>check-yaml</code> ：检查 yaml 文件的语法。</li><li><code>check-added-large-files</code> ：防止提交大文件。(默认检测阈值为 500KB)</li></ul><h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3><p>执行 <code>pre-commit run --all-files</code> 命令，可以手动运行 pre-commit 的检查：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pre-commit run --all-files
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Initializing environment <span class="token keyword">for</span> https://github.com/pre-commit/pre-commit-hooks.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Installing environment <span class="token keyword">for</span> https://github.com/pre-commit/pre-commit-hooks.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Once installed this environment will be reused.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> This may take a few minutes<span class="token punctuation">..</span>.
Trim Trailing Whitespace<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.Passed
Fix End of Files<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.Failed
- hook id: end-of-file-fixer
- <span class="token builtin class-name">exit</span> code: <span class="token number">1</span>
- files were modified by this hook

Fixing workflows-tested/rss.yml

Check Yaml<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.Passed
Check <span class="token keyword">for</span> added large files<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>Passed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>📢注意：</code> 钩子添加完毕之后，默认情况下，pre-commit 只会检测当次变更了的文件，因此一般建议在添加之后，运行一次针对项目的全面检测。</p><p>如上内容表示运行 <code>Fix End of Files</code> 这个脚本的时候发现有不符合检测规范的内容，然后自动 fix 掉了，这些检测脚本都是根据个人需求按需加载，因此这里我就把这个脚本去掉了。</p><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><p>上边是手动运行的，我们还应该运行一下安装命令，把 pre-commit 的配置文件加载到 git hooks 当中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pre-commit <span class="token function">install</span>
pre-commit installed at .git/hooks/pre-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候，再次运行常规的提交步骤就会触发检测了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcmsg <span class="token string">&#39;添加pre commit&#39;</span>
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Initializing environment <span class="token keyword">for</span> https://github.com/pre-commit/pre-commit-hooks.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Installing environment <span class="token keyword">for</span> https://github.com/pre-commit/pre-commit-hooks.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Once installed this environment will be reused.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> This may take a few minutes<span class="token punctuation">..</span>.
trim trailing whitespace<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.Passed
check yaml<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.Passed
check <span class="token keyword">for</span> added large files<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>Passed
<span class="token punctuation">[</span>main aeb4728<span class="token punctuation">]</span> 添加pre commit
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">9</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> .pre-commit-config.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go-项目实践" tabindex="-1"><a class="header-anchor" href="#go-项目实践" aria-hidden="true">#</a> Go 项目实践</h2><p>以上内容介绍了 pre-commit 的简单配置以及使用，接下来我们测试一个 go 项目的实践。</p><p>然后在项目根目录添加如下配置文件 <code>.pre-commit-config.yaml</code> ：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">repos</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span>   <span class="token key atrule">repo</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/pre<span class="token punctuation">-</span>commit/pre<span class="token punctuation">-</span>commit<span class="token punctuation">-</span>hooks
    <span class="token key atrule">rev</span><span class="token punctuation">:</span> v4.4.0
    <span class="token key atrule">hooks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> check<span class="token punctuation">-</span>yaml
    <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> trailing<span class="token punctuation">-</span>whitespace
    <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> check<span class="token punctuation">-</span>added<span class="token punctuation">-</span>large<span class="token punctuation">-</span>files
<span class="token punctuation">-</span>   <span class="token key atrule">repo</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/golangci/golangci<span class="token punctuation">-</span>lint <span class="token comment"># golangci-lint hook repo</span>
    <span class="token key atrule">rev</span><span class="token punctuation">:</span> v1.47.3 <span class="token comment"># golangci-lint hook repo revision</span>
    <span class="token key atrule">hooks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> golangci<span class="token punctuation">-</span>lint
      <span class="token key atrule">name</span><span class="token punctuation">:</span> golangci<span class="token punctuation">-</span>lint
      <span class="token key atrule">description</span><span class="token punctuation">:</span> Fast linters runner for Go.
      <span class="token key atrule">entry</span><span class="token punctuation">:</span> golangci<span class="token punctuation">-</span>lint run <span class="token punctuation">-</span><span class="token punctuation">-</span>fix
      <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>go<span class="token punctuation">]</span>
      <span class="token key atrule">language</span><span class="token punctuation">:</span> golang
      <span class="token key atrule">pass_filenames</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行如下命令将 hooks 载入到 git 配置文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pre-commit <span class="token function">install</span>
pre-commit installed at .git/hooks/pre-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将代码某处的 err 错误忽略不做处理，此时提交代码看看是否会检查：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcmsg <span class="token string">&#39;test pre check&#39;</span>
Check Yaml<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.Passed
Trim Trailing Whitespace<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.Passed
Check <span class="token keyword">for</span> added large files<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>Passed
golangci-lint<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>Failed
- hook id: golangci-lint
- <span class="token builtin class-name">exit</span> code: <span class="token number">1</span>

config/config.go:30:11: ineffectual assignment to err <span class="token punctuation">(</span>ineffassign<span class="token punctuation">)</span>
        workDir, err :<span class="token operator">=</span> os.Getwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
                 ^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此就实现了一个简单的提交前的 lint 检查，一些简单的语法问题就能在这里抛出来了。</p><p>其他语言同理，pre-commit 官方提供了大量检测脚本集成，各语言都有，大家可按需进行了解使用。</p><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2><h3 id="hooks-配置文件" tabindex="-1"><a class="header-anchor" href="#hooks-配置文件" aria-hidden="true">#</a> hooks 配置文件</h3><p>内容摘自官方文档：</p>`,31),b={href:"https://pre-commit.com/#hooks-id",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"id",-1),y=n("th",null,"钩子的 id - 在 pre-commit-config.yaml 中使用。",-1),x={href:"https://pre-commit.com/#hooks-name",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"name",-1),F=n("td",null,"挂钩的名称 - 在挂钩执行期间显示。",-1),I={href:"https://pre-commit.com/#hooks-entry",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"entry",-1),P=n("td",null,[s("入口点 - 要运行的可执行文件。 "),n("code",null,"entry"),s(" 还可以包含不会被覆盖的参数，例如 "),n("code",null,"entry: autopep8 -i"),s(".")],-1),O={href:"https://pre-commit.com/#hooks-language",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"language",-1),T=n("td",null,"钩子的语言 - 告诉预提交如何安装钩子。",-1),C={href:"https://pre-commit.com/#hooks-files",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"files",-1),E=n("td",null,[s("（可选：默认 "),n("code",null,"''"),s("）要运行的文件模式。")],-1),S={href:"https://pre-commit.com/#hooks-exclude",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"exclude",-1),z=n("code",null,"^$",-1),B={href:"https://pre-commit.com/#hooks-files",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"files",-1),j={href:"https://pre-commit.com/#hooks-types",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"types",-1),A=n("code",null,"[file]",-1),D={href:"https://pre-commit.com/#filtering-files-with-types",target:"_blank",rel:"noopener noreferrer"},L={href:"https://pre-commit.com/#hooks-types_or",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"types_or",-1),Y=n("code",null,"[]",-1),K={href:"https://pre-commit.com/#filtering-files-with-types",target:"_blank",rel:"noopener noreferrer"},U=n("em",null,"2.9.0 中的新功能",-1),J={href:"https://pre-commit.com/#hooks-exclude_types",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"exclude_types",-1),Q=n("td",null,[s("（可选：默认 "),n("code",null,"[]"),s("）要排除的文件模式。")],-1),R={href:"https://pre-commit.com/#hooks-always_run",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"always_run",-1),Z=n("td",null,[s("（可选：默认 "),n("code",null,"false"),s("）即使 "),n("code",null,"true"),s(" 没有匹配的文件，这个钩子也会运行。")],-1),nn={href:"https://pre-commit.com/#hooks-fail_fast",target:"_blank",rel:"noopener noreferrer"},sn=n("code",null,"fail_fast",-1),an=n("td",null,[s("（可选：默认 "),n("code",null,"false"),s("）如果 "),n("code",null,"true"),s(" 此挂钩失败，预提交将停止运行挂钩。 "),n("em",null,"2.16.0 中的新功能"),s("。")],-1),tn={href:"https://pre-commit.com/#hooks-verbose",target:"_blank",rel:"noopener noreferrer"},en=n("code",null,"verbose",-1),on=n("td",null,[s("（可选：默认 "),n("code",null,"false"),s("）如果 "),n("code",null,"true"),s("，即使挂钩通过，也强制打印挂钩的输出。")],-1),pn={href:"https://pre-commit.com/#hooks-pass_filenames",target:"_blank",rel:"noopener noreferrer"},cn=n("code",null,"pass_filenames",-1),ln=n("td",null,[s("（可选：默认 "),n("code",null,"true"),s("）如果 "),n("code",null,"false"),s(" 没有文件名将传递给挂钩。")],-1),un={href:"https://pre-commit.com/#hooks-require_serial",target:"_blank",rel:"noopener noreferrer"},rn=n("code",null,"require_serial",-1),dn=n("td",null,[s("（可选：默认 "),n("code",null,"false"),s("）如果 "),n("code",null,"true"),s(" 这个钩子将使用单个进程而不是并行执行。")],-1),kn={href:"https://pre-commit.com/#hooks-description",target:"_blank",rel:"noopener noreferrer"},mn=n("code",null,"description",-1),hn=n("td",null,[s("（可选：默认 "),n("code",null,"''"),s("）钩子的描述。仅用于元数据目的。")],-1),_n={href:"https://pre-commit.com/#hooks-language_version",target:"_blank",rel:"noopener noreferrer"},vn=n("code",null,"language_version",-1),gn=n("code",null,"default",-1),bn={href:"https://pre-commit.com/#overriding-language-version",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://pre-commit.com/#hooks-minimum_pre_commit_version",target:"_blank",rel:"noopener noreferrer"},yn=n("code",null,"minimum_pre_commit_version",-1),xn=n("td",null,[s("（可选：默认 "),n("code",null,"'0'"),s("）允许一个人指示最低兼容的预提交版本。")],-1),wn={href:"https://pre-commit.com/#hooks-args",target:"_blank",rel:"noopener noreferrer"},Fn=n("code",null,"args",-1),In=n("td",null,[s("（可选：默认 "),n("code",null,"[]"),s("）要传递给挂钩的附加参数列表。")],-1),Nn={href:"https://pre-commit.com/#hooks-stages",target:"_blank",rel:"noopener noreferrer"},Pn=n("code",null,"stages",-1),On=n("code",null,"commit",-1),$n=n("code",null,"merge-commit",-1),Tn=n("code",null,"push",-1),Cn=n("code",null,"prepare-commit-msg",-1),Gn=n("code",null,"commit-msg",-1),En=n("code",null,"post-checkout",-1),Sn=n("code",null,"post-commit",-1),qn=n("code",null,"post-merge",-1),zn=n("code",null,"post-rewrite",-1),Bn=n("code",null,"manual",-1),Vn={href:"https://pre-commit.com/#confining-hooks-to-run-at-certain-stages",target:"_blank",rel:"noopener noreferrer"},jn=n("h3",{id:"其他内容快链",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#其他内容快链","aria-hidden":"true"},"#"),s(" 其他内容快链")],-1),Hn=n("p",null,"大部分内容官方文档已经介绍的很好，这里不再重复介绍，把相关的内容快链如下：",-1),An={href:"https://pre-commit.com/#automatically-enabling-pre-commit-on-repositories",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://pre-commit.com/#supported-languages",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://pre-commit.com/#filtering-files-with-types",target:"_blank",rel:"noopener noreferrer"},Wn={href:"https://pre-commit.com/#badging-your-repository",target:"_blank",rel:"noopener noreferrer"},Yn={href:"https://pre-commit.com/#github-actions-example",target:"_blank",rel:"noopener noreferrer"};function Kn(Un,Jn){const a=p("ExternalLinkIcon");return c(),l("div",null,[u,r,d,n("ul",null,[n("li",null,[s("项目："),n("a",k,[s("pre-commit"),t(a)])]),n("li",null,[s("官网： "),n("a",m,[s("https://pre-commit.com/"),t(a)])]),n("li",null,[s("开箱即用："),n("a",h,[s("pre-commit-hooks"),t(a)])])]),_,n("p",null,[s("现在我拿 "),n("a",v,[s("learn-github"),t(a)]),s(" 项目来作为示例进行体验。")]),g,n("table",null,[n("thead",null,[n("tr",null,[n("th",null,[n("a",b,[f,t(a)])]),y])]),n("tbody",null,[n("tr",null,[n("td",null,[n("a",x,[w,t(a)])]),F]),n("tr",null,[n("td",null,[n("a",I,[N,t(a)])]),P]),n("tr",null,[n("td",null,[n("a",O,[$,t(a)])]),T]),n("tr",null,[n("td",null,[n("a",C,[G,t(a)])]),E]),n("tr",null,[n("td",null,[n("a",S,[q,t(a)])]),n("td",null,[s("（可选：默认 "),z,s("）排除匹配的文件 "),n("a",B,[V,t(a)]),s("。")])]),n("tr",null,[n("td",null,[n("a",j,[H,t(a)])]),n("td",null,[s("（可选：默认 "),A,s("）要运行的文件类型列表（AND）。请参阅 "),n("a",D,[s("使用类型过滤文件"),t(a)]),s("。")])]),n("tr",null,[n("td",null,[n("a",L,[W,t(a)])]),n("td",null,[s("（可选：默认 "),Y,s("）要运行的文件类型列表（或）。请参阅 "),n("a",K,[s("使用类型过滤文件"),t(a)]),s("。 "),U,s("。")])]),n("tr",null,[n("td",null,[n("a",J,[M,t(a)])]),Q]),n("tr",null,[n("td",null,[n("a",R,[X,t(a)])]),Z]),n("tr",null,[n("td",null,[n("a",nn,[sn,t(a)])]),an]),n("tr",null,[n("td",null,[n("a",tn,[en,t(a)])]),on]),n("tr",null,[n("td",null,[n("a",pn,[cn,t(a)])]),ln]),n("tr",null,[n("td",null,[n("a",un,[rn,t(a)])]),dn]),n("tr",null,[n("td",null,[n("a",kn,[mn,t(a)])]),hn]),n("tr",null,[n("td",null,[n("a",_n,[vn,t(a)])]),n("td",null,[s("（可选：默认 "),gn,s("）请参阅 "),n("a",bn,[s("覆盖语言版本"),t(a)]),s("。")])]),n("tr",null,[n("td",null,[n("a",fn,[yn,t(a)])]),xn]),n("tr",null,[n("td",null,[n("a",wn,[Fn,t(a)])]),In]),n("tr",null,[n("td",null,[n("a",Nn,[Pn,t(a)])]),n("td",null,[s("（可选：默认（所有阶段））将挂钩限制在 "),On,s("、"),$n,s("、 "),Tn,s("、"),Cn,s("、"),Gn,s("、"),En,s("、"),Sn,s("、 "),qn,s("、"),zn,s(" 和/或 "),Bn,s(" 阶段。请参阅 "),n("a",Vn,[s("限制挂钩在特定阶段运行"),t(a)]),s("。")])])])]),jn,Hn,n("ul",null,[n("li",null,[n("a",An,[s("如何设置默认启用"),t(a)])]),n("li",null,[n("a",Dn,[s("支持的语言"),t(a)])]),n("li",null,[n("a",Ln,[s("按类型过滤文件"),t(a)])]),n("li",null,[n("a",Wn,[s("使用徽标标记你的存储库"),t(a)])]),n("li",null,[n("a",Yn,[s("与 GitHub Action 的集成"),t(a)])])])])}const Qn=o(i,[["render",Kn],["__file","09-How-to-use-pre-commit-to-standardize-coding.html.vue"]]);export{Qn as default};