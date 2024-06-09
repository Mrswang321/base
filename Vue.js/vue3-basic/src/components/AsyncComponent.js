// import { createApp, defineAsyncComponent } from 'vue'
// const app = createApp({})

// const AsyncComp = defineAsyncComponent(
//   () =>
//     new Promise((resolve, reject) => {
//       resolve({
//         template: '<div>I am async!</div>'
//       })
//     })
// )

// export default AsyncComp

import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent(
  () => import('./AsyncComp.vue')
)
 
export default AsyncComponent