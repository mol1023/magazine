import React from 'react';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
//componente parte de js funcional
//parte de estilizacao usando os 3 pontos html
//td componente tem um return
import Header from './components/Header';
import Main from './pages/main';
import './styles.css';
function App() {

  return (
    <div className="App"> 
      <Routes />
    </div>
  );
}

export default App;
