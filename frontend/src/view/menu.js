import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../public/css/index.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

import pesquisar from '../view/pesquisar';
import adicionar from '../view/adicionar'

class EditComponent extends React.Component {
    render() {
        return (
            <div className="mywrap_menu page-content-wrapper">
                <nav className="nav_menu navbar navbar-expand ">
                    <div className="collapse_menu navbar-collapse">
                            <Link to="/">  <button type="button" className="sair">Sair</button> </Link>
                    </div>
                </nav>

                <div id="mywrap wrapper" className="toggled">

                    <div className="comp-side component">
                        <div id="mysidewrap sidebar-wrapper">
                            <ul className="myside sidebar-nav">
                                <li><Link to="/criar"> <button className="menu-link">Criar Equipa</button> </Link> </li>
                                <li><Link to="/pesquisar"> <button className="menu-link2">Pesquisar Colaborador</button> </Link> </li>
                                <li><Link to="/adicionar"> <button className="menu-link2">Adicionar Colaborador</button> </Link> </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="cont container">

                    <Route path="/pesquisar" component={pesquisar} />
                    <Route path="/adicionar" component={adicionar} />

                </div>
            </div>    
        );
    }
}

export default EditComponent;



