import { useRouter } from 'vue-router'

function useGoto() {
  const router = useRouter()
  const handleGotoClick = () => {
    router.push('/about')
  }

  return {
    handleGotoClick
  }
}

export default useGoto