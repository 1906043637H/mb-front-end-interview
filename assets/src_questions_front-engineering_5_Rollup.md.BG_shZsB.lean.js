import{_ as a,c as l,a0 as o,o as r}from"./chunks/framework.Canm8p3M.js";const h=JSON.parse('{"title":"Rollup","description":"","frontmatter":{},"headers":[],"relativePath":"src/questions/front-engineering/5_Rollup.md","filePath":"src/questions/front-engineering/5_Rollup.md","lastUpdated":1735813988000}'),i={name:"src/questions/front-engineering/5_Rollup.md"};function t(p,e,n,c,d,u){return r(),l("div",null,e[0]||(e[0]=[o('<h1 id="rollup" tabindex="-1">Rollup <a class="header-anchor" href="#rollup" aria-label="Permalink to &quot;Rollup&quot;">​</a></h1><h2 id="什么是-rollup-它与-webpack-有何不同" tabindex="-1">什么是 Rollup？它与 Webpack 有何不同？ <a class="header-anchor" href="#什么是-rollup-它与-webpack-有何不同" aria-label="Permalink to &quot;什么是 Rollup？它与 Webpack 有何不同？&quot;">​</a></h2><h4 id="类型-基础" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-6-分" tabindex="-1">解答（6 分） <a class="header-anchor" href="#解答-6-分" aria-label="Permalink to &quot;解答（6 分）&quot;">​</a></h4><ul><li><p><strong>6：</strong> Rollup 是一个 JavaScript 模块打包器，主要用于将多个模块捆绑成一个或多个文件。与 Webpack 相比，Rollup 主要优化了代码的静态分析和树摇（Tree Shaking），它特别适用于构建 JavaScript 库和模块。</p></li><li><p>模块系统支持：Rollup 专注于 ES6 模块（ESM），而 Webpack 则支持多种模块系统（CommonJS、AMD、ESM 等）。</p></li><li><p>性能：Rollup 对于构建库的性能比 Webpack 更好，因为它优化了打包过程，特别是树摇（Tree Shaking）。</p></li><li><p>输出格式：Rollup 支持多种输出格式（如 ES、CommonJS、UMD、IIFE 等），而 Webpack 更加侧重于打包应用程序。</p></li><li><p>插件系统：Rollup 的插件系统比 Webpack 更简洁，WebPack 插件系统更强大，适合复杂的应用场景。</p></li><li><p>在 Rollup 中，树摇是默认启用的，只要你使用了 ES 模块的语法，并且在构建时选择生产模式（如设置 minify 或 treeshake），就能自动进行树摇优化</p></li><li><p>Rollup 的插件系统非常强大，可以通过 plugins 配置项来引入各种插件。插件可以用来处理各种功能，如转换文件格式、代码压缩、代码分割、环境变量注入等。</p></li></ul>',6)]))}const b=a(i,[["render",t]]);export{h as __pageData,b as default};
