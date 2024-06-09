import { ref } from 'vue'

function useList(list) {
  const keywords = ref('')

  const handleKeyup = () => {
    list.value.push(keywords.value)
    keywords.value = ''
  }

  const handleClick = (index) => {
    list.value.splice(index, 1)
  }

  return {
    keywords,
    handleKeyup,
    handleClick
  }
}

export default useList