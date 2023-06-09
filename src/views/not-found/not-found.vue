<template>
  <div class="not-found">
    <div class="title">
      糟糕,糟糕,oh my God,魔法怎么失灵了...
      <div class="back">
        <span class="time">{{ time }} 秒</span> 后即将返回首页
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const time = ref(5)

const timer = setInterval(() => {
  time.value = time.value - 1
  if (time.value === 1) {
    clearInterval(timer)
    router.push('/')
  }
}, 1000)
</script>

<style scoped lang="less">
.not-found {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(@/assets/images/404-bg.webp) no-repeat;
  background-size: cover;
  .title {
    position: absolute;
    top: 30%;
    left: 50%;

    font-size: 30px;
    font-weight: 700;
    color: #fff;
  }
  .back {
    .time {
      font-size: 40px;
      background-image: -webkit-linear-gradient(top, #5efce8, #736efe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      // color: red;
    }
  }
}
</style>
