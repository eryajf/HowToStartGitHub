(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{473:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("When we need to solve a bug in a project, usually a new "),t("code",[e._v("PR")]),e._v(" will be accompanied by an "),t("code",[e._v("issue")]),e._v(", this article will introduce only one operation when creating a "),t("code",[e._v("PR")]),e._v(", associate the "),t("code",[e._v("issue")]),e._v(" , and then when the "),t("code",[e._v("PR")]),e._v(" is approved, the corresponding associated 'issue' will also be closed.")]),e._v(" "),t("p",[e._v("Again, I'll start by creating an "),t("code",[e._v("issue")]),e._v(" in the sample project:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_145415.png",alt:"image_20220719_145415"}})]),e._v(" "),t("p",[e._v("In this case, as the project maintainer, we can directly click "),t("code",[e._v("Create a branch")]),e._v(" in "),t("code",[e._v("Development")]),e._v(" to create a fix branch, which will automatically associate the "),t("code",[e._v("issue")]),e._v(", and similarly, when the "),t("code",[e._v("PR")]),e._v(" created by the fix branch is merged, the "),t("code",[e._v("issue")]),e._v("will be automatically closed.")]),e._v(" "),t("p",[e._v("However, this kind of scheme is not mentioned here, and you can experience it for yourself if you are interested")]),e._v(" "),t("p",[e._v("Here is our more common operation, in the local editor, based on the latest "),t("code",[e._v("main branch")]),e._v(" cut out a "),t("code",[e._v("fix")]),e._v(" branch, as follows:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout main\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" fix_testbug\n")])])]),t("p",[e._v("Then there is the fix for the corresponding problem on the "),t("code",[e._v("fix_testbug")]),e._v(" branch, which is not repeated.")]),e._v(" "),t("p",[e._v("When we feel that the fix is okay and have self-tested, we can commit this temporary branch:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"fix: test bug"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --set-upstream origin fix_testbug\n")])])]),t("p",[e._v("After pushing to the remote, we come to the GitHub page, at which point we can see that GitHub will automatically prompt a new branch to merge:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_150429.png",alt:"image_20220719_150429"}})]),e._v(" "),t("p",[e._v("You can directly click "),t("code",[e._v("Compare & pull request")]),e._v(":")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151051.png",alt:"image_20220719_151051"}})]),e._v(" "),t("p",[e._v("Pay attention to the instructions in "),t("code",[e._v("Development")]),e._v(" on the right, we can add some by adding some to the instructions"),t("a",{attrs:{href:"https://docs.github.com/cn/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue",target:"_blank",rel:"noopener noreferrer"}},[e._v("keywords"),t("OutboundLink")],1),e._v("，This associates the "),t("code",[e._v("issue")]),e._v(" and triggers a shutdown. Of course, you can also create a PR first and then associate it:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151313.png",alt:"image_20220719_151313"}})]),e._v(" "),t("p",[e._v("After completing the associated PR, you can see that there is a status display like this:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151423.png",alt:"image_20220719_151423"}})]),e._v(" "),t("p",[e._v("At this time, we click on the "),t("code",[e._v("#21")]),e._v(" "),t("code",[e._v("issue")]),e._v(", and we can also see that it is linked to the "),t("code",[e._v("PR")]),e._v(":")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151547.png",alt:"image_20220719_151547"}})]),e._v(" "),t("p",[e._v("Now we merge the "),t("code",[e._v("#23")]),e._v(" "),t("code",[e._v("PR")]),e._v(" , and after the merge, you can see that the associated "),t("code",[e._v("issue")]),e._v(" has also been closed, and the temporary branch of the link has been deleted:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151825.png",alt:"image_20220719_151825"}})]),e._v(" "),t("p",[e._v("The above is the linkage maintenance of "),t("code",[e._v("PR")]),e._v(" and "),t("code",[e._v("issue")]),e._v(" in project collaboration.")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("strong",[e._v("Other than that：")]),e._v(" A small point here, when we go through a PR process, as the main maintainer of the project, we usually switch back to the main branch again, and then pull the code that was merged into the main branch remotely:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout main\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])])]),t("p",[e._v("After executing this way, you will find that the local code has exceeded the remote branch:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_154112.png",alt:"image_20220719_154112"}})]),e._v(" "),t("p",[e._v("Among them, 389fe is the ID of the current remote branch, we can execute the following command to align with the remote:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" reset "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--hard")]),e._v(" origin/main\nHEAD is now at 389fe7b fix: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" bug "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#23)")]),e._v("\n")])])]),t("p",[e._v("In this way, the local and remote are aligned, and the next time you re-branch and then commit a PR, there will be no "),t("code",[e._v("several merges")]),e._v(" like the above.")]),e._v(" "),t("p",[e._v("The illustration is as follows:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_154244.png",alt:"image_20220719_154244"}})]),e._v(" "),t("p",[e._v("Theoretically, there is only one commit this time, instead of 3 "),t("code",[e._v("commits")]),e._v(", which is why.")])])}),[],!1,null,null,null);t.default=n.exports}}]);