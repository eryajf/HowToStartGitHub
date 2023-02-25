(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{496:function(e,t,a){"use strict";a.r(t);var o=a(2),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"background-of-the-issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background-of-the-issue"}},[e._v("#")]),e._v(" Background of the issue")]),e._v(" "),t("p",[e._v("In processing "),t("a",{attrs:{href:"https://github.com/eryajf/awesome-github-profile-readme-chinese",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-github-profile-readme-chinese"),t("OutboundLink")],1),e._v(" When the PR of the project, I carefully read the content submitted by my partner and readily agreed, however, in the end, I am still young, and there is still a small problem after the merger, that is, when I preview the effect after the merger, I found that I could not load the image.")]),e._v(" "),t("p",[e._v("I clicked on the image link and did jump to 404, and when I looked closely, it turned out that the name of the quoted picture was inconsistent with the case of the name of the picture itself:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('- [xJoyLu](https://github.com/xJoyLu)\n  <details>\n    <summary>Preview</summary>\n    <img src="examples/xJoyLu.png">\n')])])]),t("p",[e._v("And the actual file is called:"),t("code",[e._v("xjoylu.png")]),e._v("。")]),e._v(" "),t("p",[e._v("GitHub is sensitive to the case of filenames when loading image files, and if they are inconsistent, they will not load correctly.")]),e._v(" "),t("p",[e._v("So, I had to fix this little problem myself, but I found that when I changed the local image file name to match the referenced name, the commit never worked。")]),e._v(" "),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" solution")]),e._v(" "),t("p",[e._v("It turns out that Git is configured to ignore case by default, so case changes cannot be detected correctly.")]),e._v(" "),t("p",[e._v("Here are three solutions to collate.")]),e._v(" "),t("h3",{attrs:{id:"option-one"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-one"}},[e._v("#")]),e._v(" Option one")]),e._v(" "),t("p",[e._v("Modify Git's default configuration to make it case-sensitive:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git config core.ignorecase false\n")])])]),t("p",[e._v("Run the above command to turn off Git ignore case configuration to detect case changes.")]),e._v(" "),t("h3",{attrs:{id:"option-ii"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-ii"}},[e._v("#")]),e._v(" Option II")]),e._v(" "),t("p",[e._v("You can first move the image out of the project, then submit, submit, and then move back, submit again, or you can achieve the goal.")]),e._v(" "),t("h3",{attrs:{id:"option-three"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-three"}},[e._v("#")]),e._v(" Option three")]),e._v(" "),t("p",[e._v("Use the git mv command to modify the file name:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git mv xjoylu.png xJoyLu.png\n")])])]),t("p",[e._v("Then go through the normal submission process.")])])}),[],!1,null,null,null);t.default=s.exports}}]);