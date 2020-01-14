/*import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Dashboard extends Component {
  
state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
  static Modal = ({ handleClose, show, children }) => {
     showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
    }   ;
  render() {
    return (
        <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);
*/

/*
export default class Results extends Component{
    
    state = {
        products : [],
        //para pegar total de pages
        productInfo: {},
        page: 1
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products2`);

        //rest operator
        const { docs, ...productInfo } = response.data;
        //armazenar esse array pra mostrar no render
        //console.log(response.data.docs);

        this.setState({ products: docs, productInfo, page });
    };

    render(){
        const { products, page, productInfo } = this.state;

        return (
            <div>
            {products.map(product =>(
                <article key={product._id}>
                    <strong>{product.name}</strong>
                    <p>R${product.value},00</p>
                    <div id={product.image===product.id ? page==1 : null}>
                        <img src={require(`./images/${product.id}.png`)}></img>
                    </div>
                    <p>{product.rate}</p>
                    <p>{product.data}</p>
                </article>
            ))}
            </div>
        );
    }
}*/


