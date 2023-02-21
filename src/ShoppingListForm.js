import React, { Component } from 'react';
import "./ShoppingListForm.css"

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: "", qty: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='ShoppingListForm'>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            id='name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='qty'>Quantity: </label>
          <input
            id='qty'
            name='qty'
            value={this.state.qty}
            onChange={this.handleChange}
          />
        </div>
        <button><div>Add</div><div>Item!</div></button>
      </form>
    );
  }
}

export default ShoppingListForm