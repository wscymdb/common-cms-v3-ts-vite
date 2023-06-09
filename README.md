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
