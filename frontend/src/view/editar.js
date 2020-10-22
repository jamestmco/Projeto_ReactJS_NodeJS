import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../public/css/index.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from 'axios';

import pesquisar from '../view/pesquisar';

import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { data } from 'jquery';

const OrangeSwitch = withStyles({
    switchBase: {
        '&$checked': {
            color: orange[500],
        },
        '&$checked + $track': {
            backgroundColor: orange[300],
        },
    },
    checked: {},
    track: {},
})(Switch);

class EditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dadosNome: "",
            dadosApelido: "",
            selecionaPapel: 0,
            dadosSenioridade: "",
            dadosDisponibilidade: 0,
            linguas: "",
            dadosWebArray: [],
            dadosProgramacaoArray: [],
            dadosBaseDadosArray: [],
            selecionadadosWeb: [],
            selecionadadosProgramacao: [],
            selecionadadosBaseDados: [],
            dadosFeriasInicio: "",
            dadosFeriasFim: ""
        }

        //this.sendSave = this.sendSave.bind(this);
        this.sendUpdate = this.sendUpdate.bind(this);
        this.alteravalor = this.alteravalor.bind(this);
    }

    state = {
        dadosFeriasInicio: JSON.stringify(new Date())
    };

    state = {
        dadosFeriasFim: JSON.stringify(new Date())
    };

    handleInicioFerias = dataInicio => {
        this.setState({
            dadosFeriasInicio: dataInicio
        });
    };

    handleFimFerias = dataFim => {
        this.setState({
            dadosFeriasFim: dataFim
        });
    };

    componentDidMount() {
        let baseUrl = "http://localhost:3005/utilizador_routes/linguagem1"

        axios.get(baseUrl)
            .then(response => {

                this.setState({
                    dadosWebArray: response.data.data
                });
            }).catch(error => {
                alert("Erro 34 " + error)
            })

        {
            let baseUrl = "http://localhost:3005/utilizador_routes/linguagem2" /*TEM ERRO AQUI*/

            axios.get(baseUrl)
                .then(response => {

                    this.setState({
                        dadosProgramacaoArray: response.data.data
                    });
                }).catch(error => {
                    alert("Erro 34 " + error)
                })

        }

        {
            let baseUrl = "http://localhost:3005/utilizador_routes/linguagem3" /*AQUI TAMBÉM*/

            axios.get(baseUrl)
                .then(response => {

                    this.setState({
                        dadosBaseDadosArray: response.data.data
                    });
                }).catch(error => {
                    alert("Erro 34 " + error)
                })
        }
    }

    componentDidMount() {
        var id_cob = this.props.match.params.id_colaborador;
        const url = "http://localhost:3005/utilizador_routes/get/" + id_cob
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data[0]
                    this.setState({
                        dadosNome: data.nome,
                        dadosApelido: data.apelido,
                        selecionaPapel: data.cargo,
                        dadosSenioridade: data.senioridade,
                        dadosDisponibilidade: 0,
                        linguas: data.linguas,
                        //dadosWebArray: data.web,
                        //dadosProgramacaoArray: data.programacao,
                        //dadosBaseDadosArray: data.basedados,
                        //selecionadadosWeb: data.sweb,
                        //selecionadadosProgramacao: data.sprogramacao,
                        //selecionadadosBaseDados: data.sbasedados,
                        dadosFeriasInicio: "",
                        dadosFeriasFim: ""
                    })
                }
                else {
                    alert("Error web service")
                }
            })
            .catch(error => {
                alert("Error server: " + error)
            })
    }

    alteravalor(e) {

        if (e.target.checked) {
            //insere no array
            this.setState({
                selecionadadosWeb: this.state.selecionadadosWeb.concat([e.target.value])
            })

            this.setState({
                selecionadadosProgramacao: this.state.selecionadadosProgramacao.concat([e.target.value])
            })

            this.setState({
                selecionadadosBaseDados: this.state.selecionadadosBaseDados.concat([e.target.value])
            })
        } else {
            //remove do array
            this.setState({
                selecionadadosWeb: this.state.selecionadadosWeb.filter(function (val) { return val !== e.target.value })
            })

            this.setState({
                selecionadadosProgramacao: this.state.selecionadadosProgramacao.filter(function (val) { return val !== e.target.value })
            })

            this.setState({
                selecionadadosBaseDados: this.state.selecionadadosBaseDados.filter(function (val) { return val !== e.target.value })
            })
        }
    }

    render() {
        return (
            <div className="mywrap_menu page-content-wrapper">
                <nav className="nav_menu navbar navbar-expand ">
                    <div className="collapse_menu navbar-collapse">
                        <Link to="/">  <button type="button" className="sair">Sair</button> </Link>
                    </div>
                </nav>

                <div id="mywrap wrapper" className="toggled">

                    <div id="mysidewrap sidebar-wrapper">
                        <ul className="myside sidebar-nav">
                            <div className="comp-side componente">
                                <li><Link to="/criar"> <button className="menu-link">Criar Equipa</button> </Link> </li>
                                <li><Link to="/pesquisar"> <button className="menu-link2">Pesquisar Colaborador</button> </Link> </li>
                                <li><Link to="/adicionar"> <button className="menu-link2">Adicionar Colaborador</button> </Link> </li>
                            </div>
                        </ul>

                    </div>

                </div>

                <form className="comp-adicionar componente" onSubmit={this.sendUpdate}>
                    <div className="niveis">
                        <div className="form-group row">
                            <div className="col-xs-4">
                                <label for="ex1">Nome</label>
                                <input className="form_nome form-control" type="text" placeholder="Primeiro Nome"
                                    value={this.state.dadosNome} onChange={(value) =>
                                        this.setState({ dadosNome: value.target.value })} />
                            </div>
                            <div className="col-xs-4">
                                <label for="ex2">Apelido</label>
                                <input className="form_apelido form-control" type="text" placeholder="Último Nome"
                                    value={this.state.dadosApelido} onChange={(value) =>
                                        this.setState({ dadosApelido: value.target.value })} />
                            </div>
                        </div>

                        <label for="inputState">Cargo</label>
                        <select id="inputState" className="form-control"
                            value={this.state.selecionaPapel} onChange={(value) => this.setState({ selecionaPapel: value.target.value })}>
                            <option value="1">Developer</option>
                            <option value="2">Gestor</option>
                            <option value="3">Recursos Humanos</option>
                        </select>

                        <p className="font-weight-bold">Níveis</p>
                        {/*
                        <div className="mycustom-control custom-radio d-inline">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" value="Júnior"
                                checked={this.state.dadosSenioridade === "Júnior"} onChange={this.onValueChange}
                                value={this.state.dadosSenioridade} onChange={(value) => this.setState({ dadosSenioridade: value.target.value })} />
                            <label className="custom-control-label" for="customRadio1"><option value="Júnior">Júnior</option></label>
                        </div>
                        <div className="mycustom-control custom-radio d-inline">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" value="Sénior"
                                checked={this.state.dadosSenioridade === "Júnior"} onChange={this.onValueChange}
                               value={this.state.dadosSenioridade} onChange={(value) => this.setState({ dadosSenioridade: value.target.value })} />
                            <label className="custom-control-label" for="customRadio2"><option value="Sénior">Sénior</option></label>
                        </div>
*/}
                            <div className="mycustom-control custom-radio d-inline">
                                <label>
                                    <input
                                        type="radio"
                                        value="Júnior"
                                        checked={this.state.dadosSenioridade == "Júnior"} 
                                        onChange={(value) => this.setState({ dadosSenioridade: value.target.value })}
                                    />
                                Júnior
                            </label>
                            </div>
                            <div className="mycustom-control custom-radio d-inline">
                                <label>
                                    <input
                                        type="radio"
                                        value="Sénior"
                                        checked={this.state.dadosSenioridade == "Sénior"}
                                        onChange={(value) => this.setState({ dadosSenioridade: value.target.value })}
                                    />
                                Sénior
                            </label>
                            </div>

                        <div className="espacoadicao">
                            <div className="estran d-inline">Disponibilidade Estrangeiro</div>
                            <div className="d-inline">
                                <OrangeSwitch defaultChecked value={this.state.dadosDisponibilidade} onChange={(value) =>
                                    this.setState(prevState => ({ check: !prevState.check }))} />
                            </div>
                        </div>

                        <p className="font-weight-bold">Tecnologias</p>

                        <p className="font-weight-bold">Web</p>

                        {this.state.dadosWebArray.map((rowData, index) =>
                            <div key={index} className="custom-control custom-checkbox d-inline">
                                <input type="checkbox" id="customCheck1" defaultValue={rowData.nome} onChange={this.alteravalor} />
                                <label for="customCheck1">{rowData.nome}</label>
                            </div>
                        )}

                        <p className="font-weight-bold">Programação</p>

                        {this.state.dadosProgramacaoArray.map((rowData, index) =>
                            <div key={index} className="custom-control custom-checkbox d-inline">
                                <input type="checkbox" className="custom-control-input" id="customCheck5" defaultValue={rowData.nome} onChange={this.alteravalor} />
                                <label for="customCheck5">{rowData.nome}</label>
                            </div>

                        )}

                        <p className="font-weight-bold">DataBase</p>

                        {this.state.dadosBaseDadosArray.map((rowData, index) =>
                            <div key={index} className="custom-control custom-checkbox d-inline">
                                <input type="checkbox" className="custom-control-input" id="customCheck5" defaultValue={rowData.nome} onChange={this.alteravalor} />
                                <label className="custom-control-label" for="customCheck5">{rowData.nome}</label>
                            </div>
                        )}
                        <label for="example-date-input">Férias de
                        <div className="espaco-form form-control">
                                <DatePicker
                                    selected={this.state.dadosFeriasInicio}
                                    onChange={this.handleInicioFerias}
                                    dateFormat='dd/MM/yyyy'
                                    minDate={new Date}
                                />
                            </div>
                        </label>
                        <label for="example-date-input">até
                        <div className="espaco-form form-control">
                                <DatePicker
                                    selected={this.state.dadosFeriasFim}
                                    onChange={this.handleFimFerias}
                                    dateFormat='dd/MM/yyyy'
                                    minDate={new Date}
                                />
                            </div>
                        </label>
                    </div>

                    <div className="d-flex justify-content-end"><button type="submit" className="adicionar text-white" onClick={() => this.sendUpdate()}>Atualizar</button></div>
                </form >

                <div className="cont container">
                    <Route path="/pesquisar" component={pesquisar} />
                </div>
            </div>
        );
    }


    sendUpdate() {
        // get parameter id
        let id_cob = this.props.match.params.id_colaborador;
        // url de backend
        const url = "http://localhost:3005/utilizador_routes/atualizar/" + id_cob
        // parametros de datos post
        const datapost = {
            nome: this.state.dadosNome,
            apelido: this.state.dadosApelido,
            cargo: this.state.selecionaPapel,
            senioridade: this.state.dadosSenioridade,
            disponibilidade: this.state.dadosDisponibilidade,
            linguas: JSON.stringify(this.state.dadosWebArray, this.state.dadosProgramacaoArray, this.state.dadosBaseDadosArray),
            inicioferias: JSON.stringify(this.state.dadosFeriasInicio),
            fimferias: this.state.dadosFeriasFim

        }
        axios.post(url, datapost)
            .then(response => {
                if (response.data.success === true) {
                    alert(response.data.message)
                }
                else {
                    alert("Error")
                }
            }).catch(error => {
                alert("Error 34 " + error)
            })
    }
}

export default EditComponent;




