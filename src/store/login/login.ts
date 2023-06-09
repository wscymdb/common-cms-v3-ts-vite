import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state() {
    return {
      name: 'loginStore'
    }
  }
})

export default useLoginStore
