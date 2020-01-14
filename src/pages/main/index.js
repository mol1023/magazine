import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default class Main extends Component{
    //executar uma acao logo que o compponente
    //eh exibido em tela
    //state guarda quantas vc quiser
    
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/products' />
        }
    }

    //escuta variacoes da variavel no estado  
    //quando usa map tem que ter id pra cada um
    render() {
        //apenas para diminuir codigo do map

        return(
            <div className='product-list'>
                <div className = 'sideone'>
                    <div className='div-image'>
                        <img className='firstimg' src={require("./images/salve.png")} alt="natal"/>
                    </div>
                    <p className = 'first'>Loja de Revistas</p>
                    <p className = 'second'>
                        Quase todas as manhãs eu vou
                        acender algumas velas, me 
                        aconchegar no sofá, e ler uma
                        revista.
                    </p>
                </div>
                <div className='sidetwo'>
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Vamos começar!</button>
                </div>
            </div>
        );
    } //quantos produtos tenho
}

