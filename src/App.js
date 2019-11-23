import React, {Component} from 'react';
import nanoid from 'nanoid';
import './App.css';
import Item from "./components/Item/Item";
import Products from "./components/Produtcs/Products";
import OrderItem from "./components/OrderItem/OrderItem";

class App extends Component {
    state = {
        products: [
            {name: 'Hamburger', count: 0},
            {name: 'Coffee', count: 0},
            {name: 'Cheeseburger', count: 0},
            {name: 'Tea', count: 0},
            {name: 'Fries', count: 0},
            {name: 'Cola', count: 0},
        ],
        total: 0
    };


    addProduct = (name) => {
        const products = [...this.state.products];
        for (let item of products) {
            if (item.name === name) {
                item.count++;
            }
        }
        let total = this.state.total;
        total = this.addPrice();
        this.setState({products});
        this.setState({total});
    };

    removeProduct = (name) => {
        const products = [...this.state.products];
        for (let item of products) {
            if (item.name === name && item.count > 0) {
                item.count--;
            }
        }
        let total = this.state.total;
        total = this.addPrice();
        this.setState({products});
        this.setState({total});
    };

    addPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < this.state.products.length; i++) {
            totalPrice += Products[i].price * this.state.products[i].count;
        }
        return totalPrice;
    };

    totalPrice = () => {
        const total = this.state.total;
        if (total === 0) {
            return 'Order is empty! Please add some items'
        } else {
            return 'Total price: ' + total;
        }
    };

    render() {
        const textStyle = {
            fontSize: '20px',
            textTransform: 'uppercase'
        };
        const totalStyle = {
            fontSize: '20px',
            color: 'darkblue'
        };

        const orderProducts = this.state.products.map(product => {
            let productItem = '';
            if (product.count > 0) {
                productItem =
                    <OrderItem
                        key={nanoid()}
                        name={product.name}
                        count={this.state.products[Products.findIndex(p => p.name === product.name)].count}
                        price={Products[this.state.products.findIndex(p => p.name === product.name)].price *
                        this.state.products[Products.findIndex(p => p.name === product.name)].count}
                        remove={() => this.removeProduct(product.name)}
                    />
            }
            return productItem;
        });

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
                    {orderProducts}
                    <p style={totalStyle}>{this.totalPrice()}</p>
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