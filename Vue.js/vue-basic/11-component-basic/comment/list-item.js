import Button from './button.js'

const listItem = {
  props: ['url'],
  template: `
    <li>{{url}} <c-button title="进入" @on-btn-click="handleBtnClick"></c-button></li>
  `,

  components: {
    'c-button': Button
  },

  methods: {
    handleBtnClick() {
      window.open(this.url, 'win')
    }
  },
}

export default listItem