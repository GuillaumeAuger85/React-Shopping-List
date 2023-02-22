import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';
import './ShoppingList.css'

class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { name: 'milk', qty: '2 gallons', id: uuidv4() },
                { name: 'Bread', qty: '2 loaves', id: uuidv4() }
            ]
        }
        this.addItems = this.addItems.bind(this)
    }
    addItems(item) {
        let newItem = { ...item, id: uuidv4() }
        this.setState(state => ({ items: [...state.items, newItem] }))
    }
    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                        {item.name} : {item.qty}
                    </li>
                ))}
            </ul>
        )
    }
    render() {
        return (
            <div className='ShoppingList-Container'>
                <div className='ShoppingList'>
                    <h2>Shopping List</h2>
                    {this.renderItems()}
                </div>
                <div className='ShoppingList-Form-Container'>
                    <ShoppingListForm addItem={this.addItems} />
                </div>
            </div>
        )
    }
}

export default ShoppingList