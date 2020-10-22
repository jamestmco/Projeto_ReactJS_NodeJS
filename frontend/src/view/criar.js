import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../public/css/criar.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from 'axios';

import img from '../public/pessoa.svg'

import pesquisar from '../view/pesquisar';

import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import { GridList } from '@material-ui/core';

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
        listCob:[]
    }
  }
  
  componentDidMount() {
  
    this.carregarColaborador();
  }
  
  carregarColaborador(){
  
    const url = "http://localhost:3005/utilizador_routes/list";
    axios.get(url)
        .then(res => {
            if (res.data.success) {
                const data = res.data.data;
                this.setState({listCob: data});
            } else {
               
                alert("Nao existem colaboradores!");
            }
        })
        .catch(error => {
            alert(error)
        });
  }

  render() {
    return (
      <div className="mywrap_menu page-content-wrapper">
        <nav className="nav_menu navbar navbar-expand ">
          <div className="collapse_menu navbar-collapse">
            <Link to="/">  <button type="button" className="sair">Sair</button> </Link>
          </div>
        </nav>

        <div className="mywrap_criar wrapper">
          <div className="comp-criar componente">

            <nav id="myside_criar sidebar">
              <div className="mysideheader_criar sidebar-header">
                <h4>Código: AAAKKK8</h4>
              </div>

              <ul className="list-unstyled" id="criar">

                <div className="proj-left">Nome Projeto
                                <div className="form-group">
                    <input type="text" className="form-control" id="InputProjeto" />
                  </div>
                </div>

                <div className="proj-left">Nº elementos:
                                <div className="form-group">
                    <label for="elem"></label>
                    <select className="form-control" id="elem">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                </div>

                <div className="criar_sideforms">
                  <div className="criar_sidedata">
                    <div className="criar_sidedata_inicio">
                      <div className="proj-data calen d-inline">Data Início</div>
                      <div className="calen_inicio d-inline"><input size="7" type="text" value="25-03-2020" readonly className="form_datetime" /></div>
                    </div>
                    <div className="criar_sidedata_fim">
                      <div className="proj-data calen d-inline">Data Fim</div>
                      <div className="calen_fim d-inline"><input size="7" type="text" value="28-03-2020" readonly className="form_datetime" /></div>
                    </div>
                  </div>
                  <div className="criar_sidematswitch">
                    <div className="proj-left d-inline">Estrangeiro</div>
                    <div className="myswitch d-inline">
                      <OrangeSwitch defaultChecked />
                    </div>
                  </div>
                </div>

                <p className="font-weight-bold">Níveis</p>

                <div className="custom-control custom-radio d-inline">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" for="customRadio1">Júnior</label>
                </div>

                <div className="custom-control custom-radio d-inline">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" for="customRadio2">Sénior</label>
                </div>

                <p className="font-weight-bold">Tecnologias</p>

                <p className="font-weight-bold">Web</p>

                <div className="custom-control custom-checkbox d-inline">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" for="customCheck1">PHP</label>
                </div>

                <div className="custom-control custom-checkbox d-inline">
                  <input type="checkbox" className="custom-control-input" id="customCheck2" />
                  <label className="custom-control-label" for="customCheck2">NodeJS</label>
                </div>

                <div className="custom-control custom-checkbox d-inline">
                  <input type="checkbox" className="custom-control-input" id="customCheck3" />
                  <label className="custom-control-label" for="customCheck3">HTML</label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck4" />
                  <label className="custom-control-label" for="customCheck4">CSS</label>
                </div>

                <p className="font-weight-bold">Programação</p>

                <div className="custom-control custom-checkbox d-inline">
                  <input type="checkbox" className="custom-control-input" id="customCheck5" />
                  <label className="custom-control-label" for="customCheck5">C#</label>
                </div>
                <div className="custom-control custom-checkbox d-inline">
                  <input type="checkbox" className="custom-control-input" id="customCheck6" />
                  <label className="custom-control-label" for="customCheck6">C++</label>
                </div>
                <div className="custom-control custom-checkbox d-inline">
                  <input type="checkbox" className="custom-control-input" id="customCheck7" />
                  <label className="custom-control-label" for="customCheck7">JAVA</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck8" />
                  <label className="custom-control-label" for="customCheck8">AJAX</label>
                </div>

                <p className="font-weight-bold">Base de dados</p>

                <div className="custom-control custom-checkbox d-inline">
                  <input type="checkbox" className="custom-control-input" id="customCheck9" />
                  <label className="custom-control-label" for="customCheck9">PHPMyAdmin</label>
                </div>
                <div className="custom-control custom-checkbox d-inline">
                  <input type="checkbox" className="custom-control-input" id="customCheck10" />
                  <label className="custom-control-label" for="customCheck10">SQL Buddy</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck11" />
                  <label className="custom-control-label" for="customCheck11">Chive</label>
                </div>
              </ul>
              <ul className="myside_criar sidebar-nav">

              </ul>
            </nav>
          </div>

          <div className="cont container">

                <div className="mycarddeck card-deck d-inline">

                    {this.loadCard()}

                </div>
            </div>


          <Route path="/pesquisar" component={pesquisar} />

        </div>
    </div>
    );
  }

  loadCard() {
    return this.state.listCob.map((data, index) => {

      return (
        <div className="mycard card">
          <div className="shadow bg-white rounded">
            <img className="mycardimg card-img-top" src={img} alt="Card cap" />
            <div className="card-body">

              <div key={index} className="mycardtitle card-title"><h5>{data.nome} {data.apelido}</h5></div>

              <div className="titulos">Senioridade</div>

              <div key={index} className="subtitulos">{data.senioridade}</div>

              <div className="titulos d-inline">Disponibilidade Estrangeiro</div>
              <div className="d-inline">
                <OrangeSwitch disabled defaultChecked />
              </div>

              <div className="titulos">Tecnologias</div>

              <div key={index} className="d-flex">
                <div className="card-qualif">
                  <p className="card-text text-white">{data.linguas}</p>
                </div>
              </div>

            </div>

            <div className="titulos">Projetos</div>

            <div className="card-proj">
              <p className="card-text text-white text-center">AK 455 - Site Compal</p>
            </div>
          </div>
        </div>
      )
    });
  }
}

export default EditComponent;



