(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{479:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"preface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preface"}},[t._v("#")]),t._v(" Preface")]),t._v(" "),a("p",[t._v("Projects based on git management, usually in addition to branch management, will also manage the code through tags, especially like the go language, go mods rely on tags to manage the version of the project, so reasonable version management will also be a healthier incentive for the development of the project. There is a concept of Releases in GitHub, which is actually similar to tags, and the simple understanding is to use releases to manage on the basis of hitting a tag. If you don't understand the concept here, it's still a bit difficult to successfully hit a release.")]),t._v(" "),a("p",[t._v("This article will show you how to build releases for your projects automatically and gracefully with Github Actions.")]),t._v(" "),a("h2",{attrs:{id:"disposition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disposition"}},[t._v("#")]),t._v(" Disposition")]),t._v(" "),a("p",[t._v("Used Actions： "),a("a",{attrs:{href:"https://github.com/release-drafter/release-drafter",target:"_blank",rel:"noopener noreferrer"}},[t._v("release-drafter"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.")]),t._v(" "),a("p",[t._v("Start by adding the Actions profile ，e.g. "),a("code",[t._v(".github/workflows/release.yml")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Release Drafter\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("opened"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reopened"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" synchronize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update_release_draft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" write  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for release-drafter/release-drafter to create a github release")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull-requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" write  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for release-drafter/release-drafter to add label to PR")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("drafter/release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("drafter@v5\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("GITHUB_TOKEN")]),t._v(" is used in the configuration file, and my article has detailed instructions on how to generate and configure, which can be directly referenced： "),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eryajf.net/pages/47a507/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Then add the auto-generated changelog template，e.g: "),a("code",[t._v(".github/release-drafter.yml")])]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configuration for Release Drafter: https://github.com/toolmantim/release-drafter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name-template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v$NEXT_PATCH_VERSION 🌈'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag-template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v$NEXT_PATCH_VERSION'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version-template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $MAJOR.$MINOR.$PATCH\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Emoji reference: https://gitmoji.carloscuesta.me/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("categories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🚀 Features'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feature'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enhancement'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/feature'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🐛 Bug Fixes'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fix'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bugfix'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bug'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'regression'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/bug'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 📝 Documentation updates\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" documentation\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/doc'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 👻 Maintenance\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" chore\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dependencies\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/chore'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/dep'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 🚦 Tests\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" test\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" tests\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude-labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" reverted\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("changelog\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("changelog\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" invalid\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("change-template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'* $TITLE (#$NUMBER) @$AUTHOR'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n  ## What’s Changed\n  $CHANGES")]),t._v("\nTerms\nPrivacy\nSecurity\n")])])]),a("p",[t._v("The meaning of the template is that when the submitted PR matches the labels in it, the title of the corresponding submission will be generated in the draft of release as the description information of the current submission.")]),t._v(" "),a("p",[t._v("With these contents, each push or pr, Actions will automatically write the current content to the release draft, and the next time there is a pr, the content will be appended and will not overwrite the original draft.")]),t._v(" "),a("p",[t._v("Another point of attention is that usually ordinary collaborators rarely take the initiative to add labels to the PR when submitting PR, and every time the project leader needs to add their own, it will be more troublesome, and this function is dependent on the labels of the PR, so you can add another configuration，"),a("code",[t._v(".github/pull-request-template.md")])]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Be sure to add one of the labels options on the right before creating a PR: [feature], [fix], [documentation]. This allows Actions to automatically categorize PRs when Releases are automatically generated.--\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token bold"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("When I made this pull request, I confirmed the following (please checkbox)：")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" [ ] I have read and understood [Contributor Guide]()。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" [ ] I've checked for pull requests that aren't duplicated with this request.\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" [ ] I have considered and confirmed that this submission is valuable to others.\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" [ ] I accept that this commit may not be used and close the pull request as the maintainer wishes.\n\n"),a("span",{pre:!0,attrs:{class:"token bold"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("Fill in the PR content:")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n\n-\n")])])]),a("p",[t._v("In this way, when the collaborator submits the PR, the collaborator will be actively prompted to try to add one or more suitable labels to the current PR.")]),t._v(" "),a("p",[t._v("Finally, let's look at the generated release drafter:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172517.png",alt:"image_20220718_172517"}})]),t._v(" "),a("p",[t._v("When you feel that you can publish a new version, you can click the little pencil button, and after reviewing the content twice, click Publish:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172527.png",alt:"image_20220718_172527"}})]),t._v(" "),a("p",[t._v("That's all for automatically building releases to a project with the help of GitHub Actions' capabilities.")])])}),[],!1,null,null,null);a.default=n.exports}}]);