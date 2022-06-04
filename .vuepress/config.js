module.exports = {
  title: "唐超笔记",
  description: "超人",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "博客笔记",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "练习",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "工具",
        icon: "reco-message",
        items: [
          {
            text: "下拉列表1",
            link: "/docs/theme-reco/",
          },
          {
            text: "下拉列表2",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "测试",
        icon: "reco-message",
        items: [
          {
            text: "下拉列表1",
            link: "/docs/demo1/",
          },
        ],
      },
      {
        text: "GitHub",
        icon: "reco-message",
        link: "https://github.com/tangchao0106/vercel_blog",
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
      "/docs/demo1/": ["", "test1"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "n",
    authorAvatar: "/avatar.png",
    record: "xxxx",
    startYear: "2017",
  },
  markdown: {
    lineNumbers: true,
  },
};
