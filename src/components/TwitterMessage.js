import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (this.props.maxChars > this.state.message.length) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  render() {
    var charLeft = this.props.maxChars - this.state.message.length 
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        {charLeft}
      </div>
    );
  }
}

export default TwitterMessage;
