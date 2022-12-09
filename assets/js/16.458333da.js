(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{408:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("基于 git 管理的项目，通常在分支管理之外，还会通过 tag 来对代码进行管理，尤其像 go 语言，go mod 更是依赖 tag 来对项目的版本进行管理，因此合理的版本管理，对于项目的发展也会是更加健康的一个激励。GitHub 中有一个 Releases 的概念，其实与 tag 差不多，简单理解就是在打一个 tag 的基础之上，用 releases 来进行管理。如果你没有了解过这里边的概念，那么要想成功打一个 release 还是有点难度的。")]),s._v(" "),t("p",[s._v("本文就来讲一下，如何借助 Github Actions 自动且优雅地为项目构建 Release。")]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("所用 Actions： "),t("a",{attrs:{href:"https://github.com/release-drafter/release-drafter",target:"_blank",rel:"noopener noreferrer"}},[s._v("release-drafter"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。")]),s._v(" "),t("p",[s._v("首先添加 Actions 配置文件，e.g. "),t("code",[s._v(".github/workflows/release.yml")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Release Drafter\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" main\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pull_request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("types")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("opened"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reopened"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" synchronize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("permissions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("contents")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" read\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("update_release_draft")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("permissions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("contents")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" write  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for release-drafter/release-drafter to create a github release")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pull-requests")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" write  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for release-drafter/release-drafter to add label to PR")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" release"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("drafter/release"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("drafter@v5\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("GITHUB_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("配置文件中用到了 "),t("code",[s._v("GITHUB_TOKEN")]),s._v("，我的这篇文章有详细介绍如何生成以及配置，可直接参考： "),t("a",{attrs:{href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://wiki.eryajf.net/pages/47a507/"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("然后添加自动生成的变更日志模板，e.g: "),t("code",[s._v(".github/release-drafter.yml")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Configuration for Release Drafter: https://github.com/toolmantim/release-drafter")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name-template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v$NEXT_PATCH_VERSION 🌈'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tag-template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v$NEXT_PATCH_VERSION'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version-template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $MAJOR.$MINOR.$PATCH\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Emoji reference: https://gitmoji.carloscuesta.me/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("categories")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'🚀 Features'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'feature'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'enhancement'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kind/feature'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'🐛 Bug Fixes'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fix'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bugfix'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bug'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'regression'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kind/bug'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 📝 Documentation updates\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" documentation\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kind/doc'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 👻 Maintenance\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" chore\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dependencies\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kind/chore'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kind/dep'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 🚦 Tests\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" test\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" tests\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exclude-labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" reverted\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" no"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("changelog\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" skip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("changelog\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" invalid\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("change-template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'* $TITLE (#$NUMBER) @$AUTHOR'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n  ## What’s Changed\n  $CHANGES")]),s._v("\nTerms\nPrivacy\nSecurity\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("p",[s._v("模板的含义是当提交的 PR 符合其中的 labels 时，对应提交的标题会作为当次提交的说明信息，生成在 release 的草稿中。")]),s._v(" "),t("p",[s._v("有了这些内容，在每次 push 或者 pr 的时候，Actions 都会自动将当次的内容写入到 release 的草稿中，下次再有 pr 则内容将会是追加，并不会覆盖一开始的草稿。")]),s._v(" "),t("p",[s._v("还有一个注意点就是，通常普通协作者在提交 pr 的时候，大概都很少会有主动给 pr 添加 labels 的，每次还需要项目负责人自己添加，会比较麻烦，而这个功能又是依赖 pr 的 labels 的，因此可以再加一个配置，"),t("code",[s._v(".github/pull-request-template.md")])]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 请务必在创建PR前，在右侧 Labels 选项中加上label的其中一个: [feature]、[fix]、[documentation] 。以便于Actions自动生成Releases时自动对PR进行归类。--\x3e")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token bold"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token content"}},[s._v("在提出此拉取请求时，我确认了以下几点（请复选框）：")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("**")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" [ ] 我已阅读并理解[贡献者指南]()。\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" [ ] 我已检查没有与此请求重复的拉取请求。\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" [ ] 我已经考虑过，并确认这份呈件对其他人很有价值。\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" [ ] 我接受此提交可能不会被使用，并根据维护人员的意愿关闭拉取请求。\n\n"),t("span",{pre:!0,attrs:{class:"token bold"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token content"}},[s._v("填写PR内容：")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("**")])]),s._v("\n\n-\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("这样协作者提交 pr 的时候就会主动提示协作者尽量给当次 pr 添加一个或多个合适的 labels。")]),s._v(" "),t("p",[s._v("最后来看下生成的 release drafter：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172517.png",alt:"image_20220718_172517"}})]),s._v(" "),t("p",[s._v("当你觉得可以发布一个新的版本的时候，就可以点击小铅笔按钮，对内容二次审查之后，点击发布：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172527.png",alt:"image_20220718_172527"}})]),s._v(" "),t("p",[s._v("以上就是借助 GitHub Actions 的能力，自动给项目构建 releases 的全部内容。")])])}),[],!1,null,null,null);t.default=e.exports}}]);