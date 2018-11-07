webpackJsonp([1],{"0KCZ":function(s,a,t){a=s.exports=t("FZ+f")(),a.push([s.i,".viewer{width:100%;height:400px}",""])},"5LwS":function(s,a,t){var n=t("GmHu");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("c4d21ada",n,!0)},"8vfI":function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Usage")]),s._v(" "),t("h2",[s._v("Usage")]),s._v(" "),t("h3",[s._v("Global Registration")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("h3",[s._v("Local Registration")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),t("h3",[s._v("CDN Registration")]),s._v(" "),s._m(5),s._v(" "),t("h2",[s._v("Q&A")]),s._v(" "),s._m(6),s._v(" "),t("h3",[s._v("Wrong Way")]),s._v(" "),s._m(7),s._v(" "),t("h3",[s._v("Right Way")]),s._v(" "),s._m(8),s._v(" "),t("h1",[s._v("Hello world")]),s._v(" "),s._m(9),s._v(" "),t("doc-preview",[[t("cesium-viewer",{staticClass:"viewer",attrs:{animation:s.animation,timeline:s.timeline,camera:s.camera},on:{ready:s.ready}})]],2)],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("Regist all components of "),t("em",[s._v("vue-cesium")]),s._v(" at once.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" VueCesium "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue-cesium'")]),s._v("\n\nVue.use(VueCesium, {\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// cesiumPath is the path of the Cesium library, such as")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// cesiumPath: '/statics/Cesium'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// use online reference for http")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// use online reference for https")]),s._v("\n  cesiumPath: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium'")]),s._v("\n})\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"content"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".content")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("#f9f9f9")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("top")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("bottom")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("left")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("right")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("A locally registered "),t("code",{pre:!0},[s._v("CesiumViewer")]),s._v(" component "),t("strong",[s._v("must")]),s._v(" declare the "),t("code",{pre:!0},[s._v("cesiumPath")]),s._v(" attribute.\nAll components are stored in the "),t("code",{pre:!0},[s._v("vue-cesium / components")]),s._v(" folder.\nAs ES module can't be run directly in most browsers, if importing component causes some runtime errors, please check the webpack's loader configuration whethor the "),t("code",{pre:!0},[s._v("include")]),s._v(" and "),t("code",{pre:!0},[s._v("exclude")]),s._v(" options hits this library.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"content"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"YOUR_CESIUM_LIB_PATH"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" CesiumViewer "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue-cesium/components/cesium/viewer.vue'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n    CesiumViewer\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".content")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("#f9f9f9")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("top")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("bottom")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("left")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("right")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[s._v("To be added")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[t("code",{pre:!0},[s._v("CesiumViewer")]),s._v(" component is an empty block level element. If it doesn't declare its height, the "),t("code",{pre:!0},[s._v("viewer")]),s._v(" will be invisible.")]),s._v(" "),t("li",[s._v("If you need to update your model, just do it in the callback of the global component event "),t("code",{pre:!0},[s._v("ready")]),s._v(".")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":camera")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"camera"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("camera")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("longitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("latitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v("\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("360")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("-90")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n  },\n  mounted () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.longitude = "),t("span",{attrs:{class:"hljs-number"}},[s._v("116.46")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.latitude = "),t("span",{attrs:{class:"hljs-number"}},[s._v("39.92")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.height = "),t("span",{attrs:{class:"hljs-number"}},[s._v("500")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".animation = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":camera")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"camera"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("camera")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("longitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("latitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v("\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("360")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("-90")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n  },\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    ready (param) {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.longitude = "),t("span",{attrs:{class:"hljs-number"}},[s._v("116.46")]),s._v("\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.latitude = "),t("span",{attrs:{class:"hljs-number"}},[s._v("39.92")]),s._v("\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.height = "),t("span",{attrs:{class:"hljs-number"}},[s._v("500")]),s._v("\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".animation = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":timeline")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":camera")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"camera"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" >")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("camera")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("longitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("latitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100000")]),s._v("\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("360")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("-90")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      }\n    }\n  },\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    ready (cesiumInstance) {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" imageryLayers = cesiumInstance.viewer.imageryLayers\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" imagery = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" cesiumInstance.Cesium.TiandituImageryProvider({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v(" : cesiumInstance.Cesium.TiandituMapsStyle.IMG_C\n      })\n      imageryLayers.addImageryProvider(imagery)\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" labelImagery = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" cesiumInstance.Cesium.TiandituImageryProvider({\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v(" : cesiumInstance.Cesium.TiandituMapsStyle.CIA_C\n      })\n      imageryLayers.addImageryProvider(labelImagery)\n      cesiumInstance.viewer.entities.add({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'成都欢迎你'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": cesiumInstance.Cesium.Cartesian3.fromDegrees("),t("span",{attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("),\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" cesiumInstance.Cesium.BillboardGraphics({\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n        }),\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" cesiumInstance.Cesium.LabelGraphics ({\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Word'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'24px sans-serif'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("horizontalOrigin")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" cesiumInstance.Cesium.Color("),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("),\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("outlineWidth")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pixelOffset")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" cesiumInstance.Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("17")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("-5")]),s._v("),\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": cesiumInstance.Cesium.LabelStyle.FILL\n        })\n      })\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".viewer")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("400px")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])}]}},Caze:function(s,a,t){var n=t("kFb+");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("54f0649c",n,!0)},CcrZ:function(s,a,t){a=s.exports=t("FZ+f")(),a.push([s.i,".viewer{width:100%;height:400px}",""])},GmHu:function(s,a,t){a=s.exports=t("FZ+f")(),a.push([s.i,".content{background-color:#f9f9f9;position:absolute;top:0;bottom:0;left:0;right:0}",""])},M7vk:function(s,a,t){var n,r,l;!function(t,e){r=[a],n=e,void 0!==(l="function"==typeof n?n.apply(a,r):n)&&(s.exports=l)}(0,function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{animation:!0,timeline:!0,camera:{position:{longitude:104.06,latitude:30.67,height:1e5},heading:360,pitch:-90,roll:0}}},methods:{ready:function(s){var a=s.viewer.imageryLayers,t=new s.Cesium.TiandituImageryProvider({mapStyle:s.Cesium.TiandituMapsStyle.IMG_C});a.addImageryProvider(t);var n=new s.Cesium.TiandituImageryProvider({mapStyle:s.Cesium.TiandituMapsStyle.CIA_C});a.addImageryProvider(n),s.viewer.entities.add({id:"成都欢迎你",position:s.Cesium.Cartesian3.fromDegrees(104.06,30.67,100),billboard:new s.Cesium.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",scale:.1}),label:new s.Cesium.LabelGraphics({text:"Hello Word",font:"24px sans-serif",horizontalOrigin:1,outlineColor:new s.Cesium.Color(0,0,0,1),outlineWidth:2,pixelOffset:new s.Cesium.Cartesian2(17,-5),style:s.Cesium.LabelStyle.FILL})})}}},s.exports=a.default})},QJsv:function(s,a,t){var n=t("CcrZ");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("65a61774",n,!0)},QocI:function(s,a,t){var n=t("0KCZ");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("0d78a8d1",n,!0)},gO5R:function(s,a,t){t("QJsv"),t("5LwS"),t("Caze"),t("QocI");var n=t("VU/8")(t("M7vk"),t("8vfI"),null,null);s.exports=n.exports},"kFb+":function(s,a,t){a=s.exports=t("FZ+f")(),a.push([s.i,".content{background-color:#f9f9f9;position:absolute;top:0;bottom:0;left:0;right:0}",""])},ncRs:function(s,a,t){s.exports=t("gO5R")}});