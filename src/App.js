import React, {Component} from 'react';
import './App.css';
import Item from "./components/Item/Item";
import Products from "./components/Produtcs/Products";
import OrderItem from "./components/OrderItem/OrderItem";

class App extends Component {
    state = {
        products: [
            {name: 'Hamburger', count: 0},
            {name: 'Cheeseburger', count: 0},
            {name: 'Fries', count: 0},
            {name: 'Coffee', count: 0},
            {name: 'Tea', count: 0},
            {name: 'Cola', count: 0},
        ]
    };





    render() {
        const textStyle = {
            fontSize: '20px',
            textTransform: 'uppercase'
        };

        const productsList = Products.map(item => {
            return <Item
                key={item.name + 1}
                image={item.image}
                name={item.name}
                price={item.price}
            />
        });

        return (
            <div className='App'>
                <div className="order">
                    <p style={textStyle}>Order Details</p>

                </div>
                <div className='items'>
                    <p style={textStyle}>Add Items</p>
                    <div className='itemsBlock'>
                        {productsList}
                    </div>

                </div>
            </div>
        );
    }
}

export default App;