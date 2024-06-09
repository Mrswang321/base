import listItem from './list-item.js'

const list = {
  props: ['urls'],

  template: `
    <ul>
      <list-item
        v-for="url in urls"
        :url="url"
        :key="url"
      ></list-item>
    </ul>
  `,

  components: {
    'list-item': listItem
  },

  watch: {
    url(value) {
      console.log(value)
    }
  }
}

export default list