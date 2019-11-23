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
    total = 0;

    addProduct = (name) => {
        const products = [...this.state.products];
        for (let item of products) {
            if (item.name === name) {
                item.count++;
            }
        }
        this.setState({products});
        this.price = 0 + this.addPrice();
    };

    removeProduct = (name) => {
        const products = [...this.state.products];
        for (let item of products) {
            if (item.name === name && item.count > 0) {
                item.count--;
            }
        }
        this.setState({products});
        this.price = 0 + this.addPrice();
    };


    addPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < this.state.products.length; i++) {
            totalPrice += Products[i].price * this.state.products[i].count;
        }
        return totalPrice;
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
                add={() => this.addProduct(item.name)}
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