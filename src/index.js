import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//inicia toda nossa aplicacao
//precisa do react pra usar o jsx
//render apenas uma vez
ReactDOM.render(<App />, document.getElementById('root'));
//pegando conteudo q temos no app jogando na nossa div root
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
