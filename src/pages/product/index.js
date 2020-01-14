import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';

export default class Product extends Component{

    state = {
        products : [],
            //para pegar total de pages
        productInfo: {},
        page: 1
    };

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.comentRef = React.createRef();
        this.novosRef = React.createRef();
    }

    componentDidMount(){
        this.loadProducts();
        this.loadProducts1();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get('/products');

        //rest operator
        const { docs, ...productInfo } = response.data;
        //armazenar esse array pra mostrar no render
        //console.log(response.data.docs);

        this.setState({ products: docs, productInfo, page });
    };

    loadProducts1 = async (page = 1) => {
        const response = await api.get('/products2');

        //rest operator
        const { docs, ...productInfo } = response.data;
        //armazenar esse array pra mostrar no render
        //console.log(response.data.docs);

        this.setState({ products: docs, productInfo, page });
    };
    
    loadModal = async (page = 1) =>{
        const valeu = this.myRef.current;

        valeu.style.display = 'flex'; 
    }

    desloadModal = async (page = 1) =>{
        const valeu = this.myRef.current;

        valeu.style.display = 'none'; 
    }

    loadComment = async (page = 1) =>{
        const commentssec = this.comentRef.current;

        commentssec.style.display = 'flex'; 
    }

    render(){
        const valeu = this.myRef.current;
        const commentssec = this.comentRef.current;
        const { products, page, productInfo } = this.state;
        const flag = 1;
        return (
            <div className='product-info'>  
                <div className = 'dashboard'>
                    <div className = 'primeiraparte'>
                        <img className='firstimg' src={require("./images/merida.png")} alt="natal"/>
                        <p>Oi Maria</p>
                        <i class="fas fa-home" ></i>
                    </div>
                    <div className = 'segundaparte'>
                        <i class="fas fa-search"></i>
                    </div>
                    <div className = 'terceiraparte'>    
                        <i class="fas fa-shopping-cart" ></i>
                    </div>
                    <div className = 'quartaparte'>
                        <i class="fas fa-sign-out-alt"></i>
                    </div>
                </div>
                <div className = 'firstblock'>

                    <h1>
                        Para você :)
                    </h1>
                    <p>
                        Escolhemos pensando em você! Da uma olhada e 
                        diz o que achou da seleção.
                    </p>

                    <div className = 'festival'>
                        <img onClick = {this.loadModal} src={require("./images/1.png")}></img>
                        <p className = 'pu'>Festival de inverno</p>
                        <p className = 'pd'>16 Out 2019</p>
                    </div>
                    <div className = 'vida'>
                        <img src={require("./images/2.png")}></img>
                        <p className = 'pum'>Vida livre</p>
                        <p className = 'pdois'>10 Nov 2019</p>
                    </div>
                    <div className = 'imagemBrilha'>
                        <img src={require("./images/3.png")}></img> 
                        <p className = 'p1'>Flores Brilhantes</p>
                        <p className = 'p2'>10 Ago2019</p> 
                    </div>
                    <div className = 'imagemAmarelo'>
                        <img src={require("./images/4.png")}></img>  
                        <p className = 'p1'>Futuro Projeto de Arte</p>
                        <p className = 'p2'>10 Set 2019</p>
                    </div>
                </div>
                <div className = 'secondblock'>
                    <form className = 'forms'>
                            <input type = 'text' placeholder = 'Buscar revistas...'/>
                    </form>    
                    <h1>Categorias</h1>
                    <i class="fas fa-search"></i>
                    <button className = 'b1' disabled = {flag == 2} onClick = {this.loadProducts}> Novos </button>
                    <button className = 'b2' disabled={flag===3} onClick = {this.loadProducts1}> Populares </button>
                    <button className = 'b3' disabled={flag===2} onClick = {this.loadProducts}> Destaques </button>
                    {products.map(product =>(
                    <article className= {`ab${product.id}`}>
                        <strong>{product.name}</strong>
                        <div className= {`msg${product.id}`}>
                            <img src={require(`./images/${product.id}.png`)}></img>
                        </div>
                        <p className = 'valor'>R${product.value},00</p>
                        <p className = 'nota'>{product.rate}.0</p>
                        <p className = 'dia'>{product.data}</p>
                        <i class="far fa-bookmark" id= {`salvo${product.id}`}></i>
                        <i class="fas fa-star" id= {`estrela${product.id}`}></i>
                    </article>
                    ))}
                </div>
                <div ref = {this.myRef} className='bg-modal'>
                    <div className='modal-content'>
                        <div className = 'back'>
                            <img src={require('./images/menor1.png')}></img>
                        </div>
                        <header>Festival de inverno</header>
                        <p className = 'paragrafo'>16 Out 2019</p>
                        <span>A revista mais lida de todos os tempo, especial para se ler na melhor época do ano, onde o frio consome nossos corações porém continuamos aquecidos com o inferno social em que vivemos.</span>
                        <div onClick = {this.desloadModal} className = 'fechamento'> <p> + </p> </div>
                        <i class="fas fa-share-alt" id='sharemagazine'></i>
                        <i class="far fa-bookmark" id='savebook'></i>
                        <i class="fas fa-star" id='starmagazine'></i>
                        <i onClick = {this.loadComment} class="fas fa-comments" id='comments'></i>
                        <div ref={this.comentRef}className='commentsection'>
                            <p>Comentários</p>
                            <form>
                                <input type = 'text' placeholder = 'Deixar comentário...'/>
                            </form>   
                            <i class="fas fa-paper-plane" id='sendmagazine'></i>
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}
