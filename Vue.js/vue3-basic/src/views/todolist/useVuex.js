import { useStore } from 'vuex'
import { computed } from 'vue'
function useVuex() {
  const store = useStore()

  const changeCount = () => {
    store.dispatch('add')
  }

  return {
    count: computed(() => store.state.count),
    changeCount
  }
}

export default useVuex