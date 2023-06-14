import { defineStore } from 'pinia'

interface IMainState {
  isCollapse: boolean
}
interface IMainAction {
  changeCollapseActions: () => void
}

const useMainStore = defineStore<string, IMainState, {}, IMainAction>('main', {
  state() {
    return {
      isCollapse: false
    }
  },
  actions: {
    changeCollapseActions() {
      this.isCollapse = !this.isCollapse
    }
  }
})

export default useMainStore
