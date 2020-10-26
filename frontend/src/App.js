import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './public/css/index.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import entrar from './view/entrar';
import index from './view/index';
import registar from './view/registar';
import menu from './view/menu';
import pesquisar from './view/pesquisar';
import lista from './view/lista';
import editar from './view/editar';
import adicionar from './view/adicionar';
import criar from './view/criar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="myAppcont container py-0">
          <div className="row">
            <Route path="/" exact component={index} />
            <Route path="/entrar" component={entrar} />
            <Route path="/registar" component={registar} />
            <Route path="/menu" component={menu} />
            <Route path="/pesquisar" component={pesquisar} />
            <Route path="/lista" component={lista} />
            <Route path="/editar/:id_colaborador" component={editar} />
            <Route path="/adicionar" component={adicionar} />
            <Route path="/criar" component={criar} />            
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;

