import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../public/css/index.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from 'axios';

import entrar from '../view/entrar';

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            campoNome: "",
            campoEmail: "",
            campoPassword: "",
            /*campoPasswordConfirma: ""*/
        }
    }

    render() {
        return (
            <div className="mywrap_menu page-content-wrapper">
                <nav className="nav_index navbar navbar-expand ">
                    <div className="collapse_index navbar-collapse">
                        <Link to="/registar"> <button type="button" className="registar">Registar</button> </Link>
                        <Link to="/entrar"> <button type="button" className="entrar">Entrar</button> </Link>
                    </div>
                </nav>

                <form className="componente_registar">
                    <h5>Nome</h5>
                    <input type="text" className="myform_reg form-control" placeholder="Primeiro nome" value={this.state.campoNome} onChange={(value) =>
                        this.setState({ campoNome: value.target.value })} />

                    <h5>Email</h5>
                    <input type="email" className="myform_reg form-control" placeholder="exemplo@exemplo.com" value={this.state.campoEmail} onChange={(value) =>
                        this.setState({ campoEmail: value.target.value })} />

                    <h5>Password</h5>
                    <input type="password" className="myform_reg form-control" placeholder="Palavra-passe" value={this.state.campoPassword} onChange={(value) =>
                        this.setState({ campoPassword: value.target.value })} />

                    <h5>Confirmar Password</h5>
                    <input type="password" className="myform_reg form-control" placeholder="Confirmar palavra-passe" />

                    <hr />

                    <div className="d-flex justify-content-md-center">
                        <Link to="/entrar"><button className="registarconta text-white" onClick={()=>this.sendSave()}>Registar</button></Link>
                    </div>
                </form>

                <div className="cont container">
                    <Route path="/entrar" component={entrar} />
                </div>
            </div>
        );
    }

    sendSave() {
        /*if (this.state.campoNome === "") {
            alert("Inserir nome!")
        }
        else if (this.state.campoEmail === "") {
            alert("Inserir email!")
        }
        else if (this.state.campoPassword === "") {
            alert("Inserir palavra-passe!")
        }
/*        else if (this.state.campoPasswordConfirma === "") {
            alert("Confirmar palavra-passe!")
        }

        else */{
            const baseUrl = "http://localhost:3005/utilizador_routes/registar"
            const datapost = {
                nome: this.state.campoNome,
                /*foto: this.state.campoFoto,*/
                email: this.state.campoEmail,
                password: this.state.campoPassword, /*campoPasswordConfirma*/
            }

            console.log(datapost);
            axios.post(baseUrl, datapost)
                .then(response => {
                    if (response.data.success === true) {
                        alert(response.data.message)
                    }
                    else {
                        alert(response.data.message)
                    }
                }).catch(error => {
                    alert("Error 34 " + error)
                })
            }
        }
    }

export default EditComponent;