---
title: 练习1
date: 2022-06-04
---

### vue 性能优化

1 路由懒加载 通过 webpack import 异步加载组件
2 keeplive 缓存页面
v-show 复用 dom，避免重复创建组件
v-once v-momo 不再变化的数据使用
长列表优化，可才用虚拟滚动，只渲染可视化的区域 -开源库
事件的销毁-vue 组件销毁时会自动解绑自己的全部指令和事件监听器吗 自定义的事件需要自己销毁，定时器
图片懒加载 v-lazy vue-lazyload 图片过多，未出现在可视区域的图片先不做加载，滚动到可视区域再加载
按需加载
子组件分割策略-较重的状态组件适合拆分。有状态的有改变

### vuex module

state 是分模块访问，getters,mutations,actions,是全局的，设置 namespace 选项后，会单独拆分，访问需要添加命名控件前缀

### vue2 组件只有一个根节点，vue3 是多节点

- vodm 是单根树形结构，patch 方法在遍历的时候从根节点开始遍历，要求只有一个根节点
- vue3 多节点是因为引入 fragment 的概念，发现组件是多根的，就创建一个 fragment 节点，把多个根节点作为他的 childred。patch 的时候遍历 fragment，遍历 chlidren 创建或更新。
