import Button from './button.js'

const form = {
  data() {
    return {
      url: ''
    }
  },

  template: `
    <div>
      <textarea v-model="url" name="" id="" cols="30" rows="10"></textarea>
      <br />
      <c-button 
        title='提交' 
        @on-btn-click="handleClick"
      ></c-button>
    </div>
  `,

  components: {
    'c-button': Button
  },

  methods: {
    handleClick() {
      console.log(0)
      this.$emit('on-receive-url', this.url)
    }
  }
}

export default form