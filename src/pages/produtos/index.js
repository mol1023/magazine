import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Product extends Component{
    state = {
        product: {},
    };
    
    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products2/${id}`);
    
        this.setState({ product: response.data });
    }

    render(){
        const { product } = this.state;

        return (
            <div className='product-info'>
                <h1>{product.id}</h1>
                <p>{product.name}</p>
                <p>{product.value}</p>
                <p>{product.image}</p>
                <p>{product.rate}</p>
                <p>{product.data}</p>
            </div>
        );
    }
}