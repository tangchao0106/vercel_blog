(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{610:function(e,t,a){"use strict";a.r(t);var v=a(15),n=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"vue-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-性能优化"}},[e._v("#")]),e._v(" vue 性能优化")]),e._v(" "),a("p",[e._v("1 路由懒加载 通过 webpack import 异步加载组件\n2 keeplive 缓存页面\nv-show 复用 dom，避免重复创建组件\nv-once v-momo 不再变化的数据使用\n长列表优化，可才用虚拟滚动，只渲染可视化的区域 -开源库\n事件的销毁-vue 组件销毁时会自动解绑自己的全部指令和事件监听器吗 自定义的事件需要自己销毁，定时器\n图片懒加载 v-lazy vue-lazyload 图片过多，未出现在可视区域的图片先不做加载，滚动到可视区域再加载\n按需加载\n子组件分割策略-较重的状态组件适合拆分。有状态的有改变")]),e._v(" "),a("h3",{attrs:{id:"vuex-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-module"}},[e._v("#")]),e._v(" vuex module")]),e._v(" "),a("p",[e._v("state 是分模块访问，getters,mutations,actions,是全局的，设置 namespace 选项后，会单独拆分，访问需要添加命名控件前缀")]),e._v(" "),a("h3",{attrs:{id:"vue2-组件只有一个根节点-vue3-是多节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-组件只有一个根节点-vue3-是多节点"}},[e._v("#")]),e._v(" vue2 组件只有一个根节点，vue3 是多节点")]),e._v(" "),a("ul",[a("li",[e._v("vodm 是单根树形结构，patch 方法在遍历的时候从根节点开始遍历，要求只有一个根节点")]),e._v(" "),a("li",[e._v("vue3 多节点是因为引入 fragment 的概念，发现组件是多根的，就创建一个 fragment 节点，把多个根节点作为他的 childred。patch 的时候遍历 fragment，遍历 chlidren 创建或更新。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);