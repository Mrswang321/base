import {
  ref,
  onMounted
} from 'vue'

function useInit() {
  const list = ref<any[]>([])

  onMounted(() => {
    list.value = ['a', 'b', 'c']
  })

  return {
    list
  }
}

export default useInit