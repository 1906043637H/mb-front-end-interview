# Vue

## vue3和vue2的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（11 分）

* **1：** 源码组织方式变化：使用 TS 重写
* **1：** 支持 Composition API：基于函数的API，更加灵活组织组件逻辑（vue2用的是options api）
* **1：** 响应式系统提升：Vue3中响应式数据原理改成proxy，可监听动态新增删除属性，以及数组变化
* **1：** 编译优化：vue2通过标记静态根节点优化diff，Vue3 标记和提升所有静态根节点，diff的时候只需要对比动态节点内容
* **1：** 打包体积优化：移除了一些不常用的api（inline-template、filter）
* **1：** 生命周期的变化：使用setup代替了之前的beforeCreate和created
* **1：** Vue3 的 template 模板支持多个根标签
* **1：** Vuex状态管理：创建实例的方式改变,Vue2为new Store , Vue3为createStore
* **1：** Route 获取页面实例与路由信息：vue2通过this获取router实例，vue3通过使用 getCurrentInstance/ userRoute和userRouter方法获取当前组件实例
* **1：** Props 的使用变化：vue2 通过 this 获取 props 里面的内容，vue3 直接通过 props
* **1：** 父子组件传值：vue3 在向父组件传回数据时，如使用的自定义名称，如 backData，则需要在 emits 中定义一下

## watch 和 watchEffect 的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3分）

* **1：** watch ：既要指明监视的数据源，也要指明监视的回调。
* **1：** watchEffect 可以自动监听数据源作为依赖。不用指明监视哪个数据，监视的回调中用到哪个数据，那就监视哪个数据。
* **1：** watch 可以访问改变之前和之后的值，watchEffect 只能获取改变后的值。

## 在 Vue2.x 中如何检测数组的变化？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

## 在 v-if 与 v-show 的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 当条件不成立时，v-if不会渲染DOM元素，v-show操作的是样式(display)，切换当前DOM的显示和隐藏。

## 如何实现 Vue 组件的插槽（slot）？有哪些类型的插槽？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 默认插槽、具名插槽、作用域插槽

## 简述 Vuex 的核心概念和工作流程

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* **1：** 核心概念:<br/>
&emsp;State：存储应用的状态数据，是一个单一的数据源，所有组件都可以访问, <br/>
&emsp;Mutations：用于同步修改 State 中的数据。
是唯一允许修改 State 的地方，它接收 State 作为第一个参数。<br>
&emsp;Actions：用于处理异步操作，如异步数据获取等，它不能直接修改 State，而是通过提交 Mutations 来间接修改。<br/>
&emsp;Getters(类似于计算属性，用于从 State 中派生出一些新的数据，方便组件获取和使用)
* **1：** 工作流程：<br/>组件通过 dispatch 方法触发 Actions，Actions 中可以进行异步操作，然后通过 commit 提交 Mutations，
Mutations 同步修改 State 的数据，组件可以通过 mapState、mapGetters 等辅助函数获取 State 和 Getters 中的数据，从而实现数据的响应式变化
和组件的更新。

## Vue项目中如何进行性能优化？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（10分）

<details>

* **1：** 合理使用v-show和v-if：<br/>
&emsp;原理：v-if是真正的条件渲染，它会在条件为假时销毁组件，在条件为真时重新创建组件，这涉及到 DOM 元素的销毁和重建过程。
而v - show只是简单地切换元素的CSS的display属性，组件的 DOM 元素始终存在于文档中。<br/>
&emsp;应用场景：对于那些在运行时很少改变显示状态的组件，比如用户权限相关的组件，只有管理员才能看到的功能组件，使用v-if比较合适。
对于频繁切换显示隐藏状态的组件，如页面中的导航栏下拉菜单，使用v-show能减少组件的销毁和重建带来的性能损耗。<br>
* **1：** 优化组件的props和events传递：<br/>
&emsp;原理：当组件的props发生变化时，组件会重新渲染。如果传递了不必要的props或者过于复杂的数据结构作为props，会增加组
件重新渲染的概率和成本。同样，过多的$emit事件也可能导致组件之间通信过于复杂，影响性能。<br/>
&emsp;应用场景：只传递组件真正需要的数据作为props。例如，一个列表组件只需要接收列表数据和展示格式相关的参数，而不需要接收整个应
用的状态数据。在组件内部，对于复杂的数据结构作为props，可以考虑使用Object.freeze()来冻结数据，防止在组件内部意外修改导致重新渲染。
对于$emit事件，只在必要时使用，并且确保事件名称清晰明了，避免过多的、不必要的事件通信。
* **1：** 使用keep-alive缓存组件:<br/>
&emsp;原理：keep-alive是 Vue 提供的一个内置组件，它能够缓存包裹在其中的组件。当组件被缓存时，再次激活这个组件时不会重新创建和
初始化，而是直接从缓存中取出，保留了组件之前的状态，从而减少了组件重新创建和渲染的开销。<br/>
&emsp;应用场景：适用于那些频繁切换但数据变化不大的组件。比如在一个多步骤表单应用中，用户在各个步骤之间来回切换，使用keep-alive包裹
表单步骤组件，可以避免每次切换步骤都重新创建表单组件，提高用户体验和应用性能。
* **1：** 列表渲染优化: 为v-for列表添加key属性<br/>
&emsp;原理：key属性是 Vue 用于识别v - for循环中的每个节点的唯一标识。当列表数据发生变化时，Vue 会根据key属性来更精准地判断哪些节点需要
更新、移动、添加或删除。如果没有key属性或者key属性不唯一，Vue 可能会进行不必要的 DOM 操作，导致性能下降。<br/>
&emsp;应用场景：在任何使用v - for进行列表渲染的地方都应该添加key属性。例如，渲染一个商品列表时，使用商品的唯一ID作为key
* **2：** 数据响应式优化: 避免过度的响应式数据<br/>
&emsp;原理：Vue 的响应式系统是通过Object.defineProperty()（在 Vue 3 中也有Proxy方式）对数据进行劫持来实现的。如果一个对象包含大量的数据，
并且这些数据大部分在组件的生命周期内都不会发生变化，将所有数据都设置为响应式会增加不必要的性能开销。<br/>
&emsp;应用场景：对于那些不需要响应式的数据，可以将其定义在组件的data属性之外。例如，一个组件中有一些常量数据，如固定的颜色列表、图标列表等，可以将
这些数据定义为普通的 JavaScript 对象，而不是放在data属性中。在 Vue 3 中，还可以使用shallowReactive或shallowRef来创建浅层响应式数据，只
对对象的第一层数据进行响应式处理，减少性能消耗。
* **2：** 路由层面优化: 路由懒加载<br/>
&emsp;原理：路由懒加载可以将路由对应的组件分割成不同的代码块，只有在访问该路由时才会加载对应的组件代码。这样可以减少应用初始加载时的代码体积，加
快首屏加载速度。<br/>
&emsp;应用场景：对于大型的单页面应用（SPA），尤其是包含多个页面或功能模块的应用，如一个电商应用中的商品详情页、购物车页、个人中心页等，都可以采用路由懒
加载的方式。在 Vue Router 中，可以使用动态import来实现路由懒加载，例如const ProductDetail = () => import('./views/ProductDetail.vue')，在
路由配置中{ path: '/product - detail', component: ProductDetail }。
* **1：** 代码压缩和混淆（Webpack 相关）<br/>
&emsp;原理：在构建过程中，通过工具（如terser-webpack-plugin）对 JavaScript 代码进行压缩和混淆，可以减小代码文件的大小。压缩是去除代码中的空格、注
释等冗余信息，混淆是将代码中的变量名、函数名等替换为更短的、难以理解的名称，从而减少代码体积，加快下载速度。<br/>
* **1：** 合理设置chunk大小和数量（Webpack 相关）<br/>
&emsp;原理：chunk是webpack在打包过程中生成的代码块。合理设置chunk的大小和数量可以更好地利用浏览器的缓存机制，减少重复请求，提高加载效率。如果chunk过
大，可能会导致加载时间过长；如果chunk过小，会产生过多的请求，增加请求开销。<br/>
&emsp;应用场景：根据应用的模块划分和功能需求来设置chunk。例如，可以将公共的库代码（如Vue、Vuex、Vue Router等）打包成一个单独的chunk，将不同业务模块
的代码分别打包成其他chunk。在webpack配置中，可以通过splitChunks配置项来控制chunk的生成，例如：

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNamePrefix: 'chunk - ',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: - 10
        },
        default: {
          minChunks: 2,
          priority: - 20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```

</details>

## v-model 双向绑定的原理是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** v-model本质就是一个语法糖，可以看成是value + input方法的语法糖。 可以通过model属性的prop和event属性来进行自定义。原生的v-model，会根据标签的不同生成不同的事件和属性 。

## 在  v-if 和 v-for 的优先级哪个高？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 在 vue2 中 v-for 的优先级更高，但是在 vue3 中优先级改变了。v-if 的优先级更高。

## ref与reactive的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6分）

* **1：** ref与reactive 是 Vue3 新推出的主要 API 之一，它们主要用于响应式数据的创建。
* **1：** ref 函数创建的响应式数据，在模板中可以直接被使用，在 JS 中需要通过 .value 的形式才能使用。
* **1：** ref 函数可以接收原始数据类型与引用数据类型。
* **1：** reactive 函数只能接收引用数据类型。
* **1：** ref 底层还是使用 reactive 来做，ref 是在 reactive 上在进行了封装，增强了其能力，使它支持了对原始数据类型的处理。
* **1：** 在 Vue3 中 reactive 能做的，ref 也能做，reactive 不能做的，ref 也能做。

## Vue 3 中的Teleport功能有什么作用，如何使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* **2：** Teleport功能可以将组件的子树 “瞬移” 到 DOM 的其他位置，不受组件层级的限制。使用时，在组件中使用 `<teleport>` 标签包裹需要瞬移的元素，并
指定to属性为目标 DOM 元素的选择器或id。例如:

```js
<teleport to="#app-root">...</teleport>
//会将包裹的元素移动到id为app-root的元素内部。
```

## 如何在 Vue 3 中实现自定义指令的全局注册和局部注册？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 全局注册在 main.js 中使用 app.directive('指令名', 指令对象)；局部注册在组件内，通过 directives: { '指令名': 指令对象 }，指令对象包含
 mounted、updated 等生命周期钩子函数用于定义指令行为。

## 说一下 Vue SSR 的实现原理

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* SSR也就是服务端渲染，也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端。

* SSR有着更好的SEO、并且首屏加载速度更快等优点。不过它也有一些缺点，比如我们的开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境。还有就是服务器会有更大的负载需求。

## Vue 组件的 data 为什么必须是函数？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* 一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

## vue 中的 spa 应用如何优化首屏加载速度?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

* 请求优化：CDN 将第三方的类库放到 CDN 上，能够大幅度减少生产环境中的项目体积，另外 CDN 能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。

* 缓存：将长时间不会改变的第三方类库或者静态资源设置为强缓存，将 max-age 设置为一个非常长的时间，再将访问路径加上哈希达到哈希值变了以后保证获取到最新资源，好的缓存策略有助于减轻服务器的压力，并且显著的提升用户的体验

* gzip：开启 gzip 压缩，通常开启 gzip 压缩能够有效的缩小传输资源的大小。

* http2：如果系统首屏同一时间需要加载的静态资源非常多，但是浏览器对同域名的 tcp 连接数量是有限制的(chrome 为 6 个)超过规定数量的 tcp 连接，则必须要等到之前的请求收到响应后才能继续发送，而 http2 则可以在多个 tcp 连接中并发多个请求没有限制，在一些网络较差的环境开启 http2 性能提升尤为明显。

* 懒加载：当 url 匹配到相应的路径时，通过 import 动态加载页面组件，这样首屏的代码量会大幅减少，webpack 会把动态加载的页面组件分离成单独的一个 chunk.js 文件

* 预渲染：由于浏览器在渲染出页面之前，需要先加载和解析相应的 html、css 和 js 文件，为此会有一段白屏的时间，可以添加loading，或者骨架屏幕尽可能的减少白屏对用户的影响体积优化

* 合理使用第三方库：对于一些第三方 ui 框架、类库，尽量使用按需加载，减少打包体积

* 使用可视化工具分析打包后的模块体积：webpack-bundle- analyzer 这个插件在每次打包后能够更加直观的分析打包后模块的体积，再对其中比较大的模块进行优化

* 提高代码使用率：利用代码分割，将脚本中无需立即调用的代码在代码构建时转变为异步加载的过程

* 封装：构建良好的项目架构，按照项目需求就行全局组件，插件，过滤器，指令，utils 等做一 些公共封装，可以有效减少我们的代码量，而且更容易维护资源优化

* 图片懒加载：使用图片懒加载可以优化同一时间减少 http 请求开销，避免显示图片导致的画面抖动，提高用户体验

* 使用 svg 图标：相对于用一张图片来表示图标，svg 拥有更好的图片质量，体积更小，并且不需要开启额外的 http 请求

## 组件中写 name 选项有哪些好处？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* 可以通过名字找到对应的组件（ 递归组件：组件自身调用自身 ）

* 可以通过 name 属性实现缓存功能（keep-alive）

* 可以通过 name 来识别组件（跨级组件通信时非常重要）

* 使用 vue-devtools 调试工具里显示的组见名称是由 vue 中组件 name 决定的

## 说一下 ref 的作用是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

ref 的作用是被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。其特点是：

* 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素

* 基本用法，本页面获取 DOM 元素

* 获取子组件中的 data

* 调用子组件中的方法

* 使用 vue-devtools 调试工具里显示的组见名称是由 vue 中组件 name 决定的

## Vue3 中的 Composition API 和 Options API 有什么区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

* **2：** 代码组织方式：
  + Options API 是按照 methods、computed、data、props 等配置项组织代码
  + Composition API 是按照功能逻辑组织代码，相关功能的代码可以放在一起

* **2：** 逻辑复用：
  + Options API 主要通过 mixins 实现逻辑复用，但可能会出现命名冲突、数据来源不清晰等问题
  + Composition API 通过抽取组合函数（composables）实现逻辑复用，更加灵活和清晰

* **2：** 代码示例：

```js
// Options API
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}

// Composition API
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++

    return {
      count,
      increment
    }
  }
}
```

</details>

## Vue3 中的响应式原理是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

* **2：** 基本原理：
  + Vue3 使用 Proxy 代替 Vue2 的 Object.defineProperty
  + Proxy 可以直接监听对象和数组的变化
  + 可以监听动态添加的属性
  + 可以监听删除的属性
  + 可以监听数组的索引和 length 属性

* **2：** 实现方式：

```js
// 简单实现响应式
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key)  // 依赖收集
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      trigger(target, key)  // 触发更新
      return true
    }
  })
}
```

* **2：** 优势：
  + 性能更好：不需要递归遍历所有属性
  + 功能更强：可以监听更多的操作（如删除属性）
  + 支持 Map、Set、WeakMap、WeakSet

</details>

## Vue3 中的异步组件是什么？如何使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

* **2：** 概念和使用：
  + 异步组件是一种特殊的组件，可以延迟加载
  + 使用 defineAsyncComponent 定义异步组件
  + 可以配置加载和错误状态
  + 常用于路由懒加载和大型组件的按需加载

* **2：** 代码示例：

```js
import { defineAsyncComponent } from 'vue'

// 基础用法
const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)

// 高级用法
const AsyncComp = defineAsyncComponent({
  loader: () => import('./components/MyComponent.vue'),
  loadingComponent: LoadingComponent,  // 加载时显示的组件
  errorComponent: ErrorComponent,      // 加载失败时显示的组件
  delay: 200,                         // 展示加载组件前的延迟时间
  timeout: 3000                       // 超时时间
})

// 在组件中使用
export default {
  components: {
    AsyncComp
  }
}
```

</details>