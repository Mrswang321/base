import { saga as cookbookSaga } from '@/views/home/cookbook'
import { saga as moreSaga } from '@/views/home/more'

const sagas = [
  cookbookSaga,
  moreSaga
]

export default sagas