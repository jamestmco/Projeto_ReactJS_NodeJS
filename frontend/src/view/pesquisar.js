import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../public/css/index.css';
import {  Link } from "react-router-dom";
import axios from 'axios';
//import authHeader from './auth-header';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { data } from 'jquery';


class Pesquisar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listCob:[],           
        }
    }


    componentDidMount() {

        this.loadEmployee();
    }
    loadEmployee(){
     
        const url = "http://localhost:3005/utilizador_routes/list";
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data;
                    this.setState({listCob: data});
                } else {
                   
                    alert("Nao foi buscar nada");
                }
            })
            .catch(error => {
                alert(error)
            });
    }

    loadfiltro(){
     
        const url2 = "http://localhost:3005/utilizador_routes/filtro";
        axios.get(url2)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data;
                    this.setState({listCob: data});
                } 
            })
            .catch(error => {
                alert(error)
            });
    }



    render() {
        
        return (
            <div class="mywrap_menu page-content-wrapper">
                <nav class="nav_menu navbar navbar-expand ">
                    <div class="collapse_menu navbar-collapse">
                            <Link to="/">  <button type="button" class="sair">Sair</button> </Link>
                    </div>
                </nav>

                <div id="mywrap wrapper" class="toggled">


                        <div id="mysidewrap sidebar-wrapper">
                            <ul class="myside sidebar-nav">
                                <div className="comp-side componente">
                                    <li><Link to="/criar"> <button class="menu-link">Criar Equipa</button> </Link> </li>
                                    <li><Link to="/pesquisar"> <button class="menu-link2">Pesquisar Colaborador</button> </Link> </li>
                                    <li><Link to="/adicionar"> <button class="menu-link2">Adicionar Colaborador</button> </Link> </li>
                                </div>
                            </ul>

                    </div>
                
                </div>

                <form class="comp componente">

                    <h3>PESQUISAR</h3>
                    <h5>Nome</h5>
           
                    <input type="text" class="form-control" placeholder="Primeiro Nome" />
                   

                    <div class="form-group">

                    </div>

                    <table className="table table-hover table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Apelido</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Senioridade</th>
                        <th colSpan="2">Acção</th>

                    </tr>
                    </thead>
                    <tbody>

                    {this.loadFillData()}

                    </tbody>
                </table>

                </form>

            </div>
        );
    }

   
   

    loadFillData() {

        return this.state.listCob.map((data, index) => {
            return (
                <tr key={index}>
                    <th>{data.id_colaborador}</th>
                    <th>{data.nome}</th>
                    <th>{data.apelido}</th>
                    <th>{data.cargo}</th>
                    <th>{data.senioridade}</th>
                    <td>
                        <Link class="btn btn-outline-info " to={"/editar/" + data.id_colaborador} >Editar</Link>
                       
                    </td>
                    <td>
                        <button class="btn btn-outline-danger" type="button" onClick={() => this.onDelete(data.id_colaborador)}> Apagar </button>
                   </td>
                </tr>
            )
        });
    }
    
    

    onDelete(id_colaborador) {
        Swal.fire({
            title: 'Tens a certeza?',
            text: 'Não vais poder recuperar estes dados!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, quero apagar!',
            cancelButtonText: 'Não quero apagar! '
            
        }).then((result) => {
            if (result.value) {
                this.sendDelete(id_colaborador)
               

            } else if (result.dismiss ===
                Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelado',
                    'Os dados foram mantidos',
                    'error'
                )
            }
        })
        
    }

   sendDelete(id_colaborador) {
        // url do backend
        const baseUrl = "http://localhost:3005/utilizador_routes/apagar"
        // network
        axios.post(baseUrl, { id_colaborador: id_colaborador})
           .then(response => {
                if (response.data.success) {
                    Swal.fire(
                        'Dados apagados!',
                        'Colaborador removido com sucesso.',
                        'success'
                    )
                    this.loadEmployee()
                }
            })
            .catch(error => {
                alert("Error 325 ")
            })
    }


}


export default Pesquisar;