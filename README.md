# 一、说点啥



本项目是一个通用的后台系统框架，是基于vite4+vue3+typescript5+element-plus搭建的，虽然市面上有很多成熟的后台了，但是感觉里面的功能都太多了，有点重，再加上本人也想对深对动态路由、动态权限的理解，也想体验一下造轮子的乐趣，当然了咱这个小后台跟人家市面上成熟的后台是不能比的，勿喷，毕竟谁也不是一上来就厉害，我这个小菜鸡也想慢慢成长呢～～





内心独白：

为什么会设计这个模版项目呢，一方面我想要 加深自己对动态路由、动态权限的理解，另一方面 也是为了下次再遇到新项目的时候可以直接使用这个模版，这样就不用在从头搭建了，主要是懒，哈哈哈。而且像这种通用的后台搭建框架的逻辑都是差不多的，没必要浪费时间

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
│    ├─ service              # 网络请求
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

### 3.1.配置项



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

// 作为面包屑和侧边栏的名称
name: '介绍'

// 跳转的地址
path: '/main/introduce'

// 侧边栏的图标 目前只支持element-plus中的icon
icon: 'Setting'


// 路由重定向 因为菜单是支持嵌套的，
// 有如下菜单关系 系统管理(/main/system)->用户管理(/main/system/user)。
// 那么如果在地址栏输入/main/system 就可以重定向到/main/system/user
// 如果是没有嵌套的菜单或者是嵌套最后一级的菜单可以忽略该属性
redirect:'/main/system/user'


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
    redirect:'/main/sing/dance',
    children: [
      {
        id: 30010,
        path: '/main/sing/dance',
        name: '跳',
        type: 2,
        redirect:'/main/sing/dance/rap',
        children: [
          {
            id: 30011,
            path: '/main/sing/dance/rap',
            name: 'rap',
            icon: 'Promotion',
            type: 3
          }
        ]
      }
    ]
  }
]
```



### 3.2.路由

本项目的路由分为三种，`constantRoutes`和`dynamicRoutes`和`hiddenRoute`



**constantRoutes：** 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。

```
文件地址
src/router/constant_routes.ts
```



**dynamicRoutes：** 代表那些需求动态判断权限并通过 `addRoutes` 动态添加的页面。

```
文件地址
src/router/dynamic_routes.ts
```



**hiddenRoute：** 这其实也是`constantRoutes`路由的一种，只不过这个文件中的路由是那些不需要在侧边栏展示的路由，但却又是`main`的子路由。比如在系统管理页面下，有一个查看详情按钮，点击会跳转到详情页面 但是这个查看详情页面不需要以菜单的形式展示在侧边栏

```
文件地址
src/router/hidden_route.ts
```

## 4.权限验证

该项目中的权限验证方式是：通过`本地的所有路由`去和`后端返回的权限(权限菜单)`去做比对，然后生成当前用户具有的权限路由表



**本地路由**

* 你需要将项目中用到的每个路由，创建成一个js/ts文件 然后放入到router文件夹下
* 这样做，一方面是为了让文件结构看起来更加顺眼，你可以阅读一下上面的`项目设计思想`
* 另一方面我们可以使用自动化工具帮组我们自动生成这些路由文件，使用方法见下面`自动创建路由文件和对应的VUE组件`

**权限菜单**

* 你需要让后端返给你一个权限菜单，菜单的结构见上面的`配置项`
* 当然你也可以选择在本地的文件中写入这些配置项，然后根据不同的账户去匹配，(不推荐这样做，这些路由放到后端，可以做到无感知修改，比如你修改某个账户的权限，如果在本地你还要修改之后在上线)

```
文件地址
src/mock/menu.ts
```



## 5.自动创建路由文件和对应的VUE组件

这里使用[wscym](https://github.com/wscymdb/ymcli)工具帮组我们自动创建路由和组件，本项目中已经安装过了，你无需安装，直接按照下面的步骤使用即可

### 5.1.使用步骤

* **首先你需要有如下配置配置项的文件**

```javascript
const routes = [
  {
    title: '介绍', // 方便自己阅读 可有可无
    name: 'introduce',  // 文件名称
    dest: 'src/views/main/introduce'  // 在哪个文件夹下创建
  }
  ...
]
module.exports = routes
```

* **然后在命令行中输入如下命令即可**
  * 这样会在router下面生成route对象
  * 在views下面生成route对象对应的组件

```shell
// ./src/mock/route.ts是配置文件的路径。ts 是生成的文件的后缀 不写就是.js后缀
ymcli addroutecpns ./src/mock/route.ts ts
```

* **如果之后你需要继续添加路由，直接在配置文件追加配置项即可**，不用将之前的配置项删除，该工具不会重复创建已存在的文件

```
文件地址
src/mock/route.ts
```

### 6.proxy配置跨域

如果你的后端没有配置跨域，那么你需要在项目中使用proxy代理，你只需要在`.env.development(开发环境)`和`.env.production(生产环境)`文件中更改`BITE_BASE_URL`即可



**注意** 每个请求前面记得加上`/api `你可以在文件中更改,如果你知道可以忽略这段话

**示例**



```
# baseURL
VITE_BASE_URL = 'http://demo.com'
# timeout
VITE_TIME_OUT = 8000
#baseAPI
VITE_BASE_API = '/api'
```









# 三、工具的使用

### 1.webStorage的使用

本项目对web storage进行了二次封装，变得更好用，同时支持命名空间



**方法**

* **setCache(key,value)**：存储，会自动的用JSON.stringify()包裹value存储
* **getCache(key)**: 获取，会自动的用JSON.parse()包裹获取的value
* **removeCache():**删除
* **clear()**:清空

```
文件地址
src/utils/cache.ts
```

### 2.网络请求工具

本项目基于axios这个库进行了二次封装，在原有全局拦截器的基础上同时对每个请求实例做了私有拦截器



**说点啥**



使用的是类对axios进行封装，这样我们对每个实例添加私有拦截器的时候会比较方便，你可能会疑惑，axios都有拦截器了，在弄个私有拦截器岂不是画蛇添足。



比如 每个接口A想要的contentType是application/x-www-form-urlencoded，而接口B想要的contentType是application/json 那么我们就可以创建不同的实例，然后分别配置



再比如有的接口不需要携带token 有的需要，那么我们也可以创建不同的实例然后分别配置



那么有人可能又说了，在axios拦截器中也可以做啊，好吧 我只能说一句仁者见仁了，这里只是我个人的观点，不做无谓的辩论



**使用方法**



除了为每个实例添加私有拦截器和axios写法不同，其他的一毛一样，这里不在赘述。



每个实例都有四个拦截器(非必要属性)，私有拦截器的配置项和axios本身拦截器的配置项是一样的，所以里面的属性这里也不赘述，只不过这些拦截器要放在每个实例的interceptors中

* **successRequestFn**：请求成功的拦截器
* **failRequestFn**：请求失败的拦截器
* **successResponseFn**：响应成功的拦截器
* **failResponseFn**：响应失败的拦截器

**代码示例**

```javascript
import YMRequest from './request'  // 引入封装好的axios代码

const request = new YMRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
      successRequestFn(config) {
        // 请求的时候在请求头添加token
        const token = localCache.getCache('token')
        if (config.headers && token) {
          config.headers.Authorization = token
        }
        //contentType是application/x-www-form-urlencoded
        config.data = stringify(config.data)

        return config
      },
      failResponseFn(err) {
        const {
          response: { data }
        } = err
        ElMessage.error(data)
      }
    }
  })
```



```
axios二次封装文件位置
src/service/request

本项目请求实例文件位置
src/service/index
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
