const Button = {
  props: ['title'],
  template: `
    <button @click="$emit('on-btn-click')">{{title}}</button>
  `,
  // methods: {
  //   handleClick() {
  //     this.$emit('onBtnClick', 100)
  //   }
  // },
}

export default Button