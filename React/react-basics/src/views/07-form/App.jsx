import React, { Component, createRef } from 'react';

class App extends Component {
  constructor() {
    super()
    this.inpRef = createRef()
    this.fileRef = createRef()
  }

  state = {
    inputValue: '',
    textareaValue: '',
    selectValue: ['0'],
    checkboxValue: true,
    isGoing: true,
    numberOfGuests: 2,
    refInputValue: ''
  }

  handleChange = e => {
    if (e.target.name === 'input') {
      this.setState({
        inputValue: e.target.value
      })
    } else {
      this.setState({
        textareaValue: e.target.value
      })
    }
  }

  handleSelectChange = (e) => {
    // console.log(0)
    // this.setState({
    //   selectValue: e.target.value
    // })
    let idx = this.state.selectValue.findIndex(item=>{
      return item === e.target.value
    })
    if (idx >= 0) {
      this.state.selectValue.splice(idx,1)
    } else {
      this.state.selectValue.push(e.target.value);
    }
    let selectValue = this.state.selectValue
    this.setState({selectValue})
  }

  handleCheckboxChange = (e) => {
    this.setState({
      checkboxValue: e.target.checked
    }) 
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  HandleRefInput = (e) => {
    this.setState({
      refInputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.inpRef.current.value)
    console.log(this.fileRef.current.files)
    // this.fileRef.current.files.map(value => {
    //   console.log(value.name)
    //   return value
    // })
    // let files = Array.from(this.fileRef.current.files)
    let files = [
      ...this.fileRef.current.files
    ]

    // console.log(files)

    files.map(value => {
      console.log(value.name)
      return value
    })
    
  }

  componentDidMount() {
    // console.log('mounted.')
  }

  render() {
    return (
      <>
        <div>
          <input 
            type="text" 
            name="input"
            value={this.state.inputValue}
            // onChange={this.handleChange}
          />
          {this.state.inputValue}
        </div>
        <div>
          <textarea name="text" id="" cols="30" rows="10"
            value={this.state.textareaValue}
            onChange={this.handleChange}
          ></textarea>
          {this.state.textareaValue}
        </div>
        <div>
          <select name="" id=""
            value={this.state.selectValue}
            onChange={this.handleSelectChange}
            multiple={true}
          >
            <option value="0">北京</option>
            <option value="1">上海</option>
            <option value="2">深圳</option>
          </select>
          {JSON.stringify(this.state.selectValue)}
        </div>
        <div>
          <input type="checkbox"
            checked={this.state.checkboxValue}
            onChange={this.handleCheckboxChange}
          />
        </div>
        <div>
          <label>
            参与:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            来宾人数:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
          {JSON.stringify(this.state.isGoing)}
          {JSON.stringify(this.state.numberOfGuests)}
        </div>
        <div>
          {/* <input 
            type="text" 
            ref={this.inpRef}
            defaultValue={this.state.refInputValue}
            onInput={this.HandleRefInput}
          />
          {this.state.refInputValue} */}
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref={this.inpRef}/>
            <input type="file" multiple ref={this.fileRef}/>
            <input type="submit" value="提交"/>
          </form>
        </div>
      </>
    )
  }
}

export default App;