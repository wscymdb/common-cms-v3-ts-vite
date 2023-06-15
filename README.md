# 1.说点啥

# 二、项目

## 1.项目设计思想

设计思想千千万，不用去抵触，本项目采用的路由设计模式是

* **所有的文件夹都采用一一对应的关系，且这些文件夹都在src目录下**

* 语言的描述总是那么苍白无力，那么看下面的文件树你就一目了然了

  * 有一个login的页面，那么可能会用到网络请求、共享数据等功能

  * 所以分别在router、service(网络请求相关)、store、views下都存放了一份login
  * 虽然看起来会多了几个login文件夹，但是结构会很清晰
  * 这样算下来虽然多了文件夹但是结构很清晰，况且文件夹也不会影响项目的大小

* **这样设计service、store可以理解，但是为什么要每个route都生成文件呢？**

  * 好处一：为了与其他的文件结构相匹配，是的结构清晰
  * 好处二：本项目使用的是自动化生成路由的方式
    * 使用这种方式我们就可以通过vite提供的一个`import.meta.glob`方法直接读取所有的路由对象，然后在这些路由对象添加到路由中，这样我们就不用手写路由对象了
    * 即使你使用动态路由也需要本地的所有路由对象去和后端传入的路由去匹配

```shell
src
├─ router
│    └─ login
│           └─ login.ts
├─ service
│    └─ login
│           └─ login.ts
├─ store
│    └─ login
│           └─ login.ts
└─ views
       └─ login
              └─ login.vue
```

## 2.目录结构

```
common-cms-v3-ts-vite
├─ .gitignore                # git忽略文件
├─ .husky                    # git hook
├─ public                    # 静态资源文件夹
│    └─ vite.svg
├─ src                       # 源代码
│    ├─ App.vue              # 入口页面
│    ├─ assets               # 图片、全局样式等静态资源
│    ├─ global               # 常量等全局相关的文件夹
│    ├─ mock                 # 项目的mock数据
│    ├─ router               # 路由
│    ├─ store                # 全局的store管理
│    ├─ types                # 类型文件夹
│    ├─ utils                # 工具文件夹
│    ├─ views                # 所有的页面
│    ├─ components           # 全局组件文件夹
│    ├─ main.ts              # 入口文件
│    └─vite-env.d.ts         # 手动声明模块文件               
├─ .prettierignore           # 代码美化工具忽略文件
├─ .prettierrc               # 代码美化工具配置文件
├─ auto-imports.d.ts         # 自动声明模块文件   无需关心
├─ commitlint.config.js      # git commit验证配置文件
├─ components.d.ts           # 自动按需引入element-plus文件 无需关心
├─ index.html                # html模版
├─ package-lock.json         
├─ package.json
├─ tsconfig.json             # ts配置文件
├─ tsconfig.node.json        #vite.config.js的typeScript配置文件
└─ vite.config.ts            # vite配置文件
```

## 3.路由和侧边栏

**首先了解路由的配置项，以下配置项的属性都是必要的**



**说明**

* 以下的配置不单单是路由的配置，其实是路由和侧边栏的混合配置
* 路由和侧边栏公用了一个数据结构
* 还需要借助自动化工具来生成路由对象配合该数据结构来使用，方能完成路由和侧边栏的显示
* 详情看下面`自动化生成路由和该路由对应的组件`

```javascript
//  在遍历菜单的时候有用
id: 10000
// 用于显示侧边栏的菜单级别
// 1 表示一级菜单 2 二级 3 三级
// 本项目至多支持三级菜单嵌套
type: 1
// 父id 如果是一级菜单 就为null
parentId: null
// 作为面包屑和侧边栏的名称
name: '介绍'
// 跳转的地址
path: '/main/introduce'
// 侧边栏的图标 目前只支持element-plus中的icon
icon: 'Setting'
// 如果一个配置项有children且children的数量大于1 那么会在侧边栏进行嵌套 只有children的最后一项才能作为点击的菜单。本项目最多支持三层嵌套
children:[]


```

**示例**

```javascript
[
   {
    id: 30000,
    name: '唱',
    type: 1,
    path: '/main/sing',
    icon: 'Promotion',
    parentId: null,
    children: [
      {
        id: 30010,
        path: '/main/sing/dance',
        name: '跳',
        type: 2,
        parentId: 30000,
        children: [
          {
            id: 30011,
            path: '/main/sing/dance/rap',
            name: 'rap',
            icon: 'Promotion',
            parentId: 30010,
            type: 3
          }
        ]
      }
    ]
  }
]
```





# 疑惑汇总

## 关于 vue3 使用与 setup 语法糖写法无法设置 name

### 说点啥

其实不加名字也是一样 在 vuetool 中，会以组件的名称命名～～～但是耐不住组件一多就会重名，所以如果项目体量小 或者不在乎这玩意（这玩意 vue 工具调试的时候又用） 那么久忽略吧 省的麻烦

### 解决

#### 方案一

- 多写一个 script 标签，这个标签中使用 options 的写法，写 name

```javascript
<script lang="ts">
   export default {
      name:'demo'
      ...
   }
</script>

<script setup lang="ts">

</script>

```

#### 方案二

- 使用 unplugin-vue-define-options/vite 这个插件来完成，不用担心该项目已经配置好了，直接使用就行

```javascript
<script setup lang="ts">
defineOptions({
  name: 'demo123'
})
</script>

```
