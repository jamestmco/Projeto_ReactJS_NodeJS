import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../public/css/index.css';

import Img from '../public/biz.png'

import entrar from '../view/entrar';
import registar from '../view/registar';

class listComponent extends React.Component {
    render() {
        return (
            <div className="mywrap_menu page-content-wrapper">
                <nav className="nav_index navbar navbar-expand ">
                    <div className="collapse_index navbar-collapse">
                            <Link to="/registar"> <button type="button" className="registar">Registar</button> </Link>
                            <Link to="/entrar"> <button type="button" className="entrar">Entrar</button> </Link>
                    </div>
                </nav>
               
                <div className="cont container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-4">
                        </div>
                        <div className="col col-md-5">
                            <img className="foto" src={Img} alt="pic" />
                        </div>
                        <div className="col col-lg-auto">
                        </div>
                    </div>
                </div>

                <div>
                    <Route path="/entrar" component={entrar} />
                    <Route path="/registar" component={registar} />
                </div>
            </div>
        );
    }
}

export default listComponent;