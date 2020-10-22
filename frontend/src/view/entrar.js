import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../public/css/index.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from 'axios';
import registar from '../view/registar';
import entrar from '../view/entrar';
import menu from '../view/menu';

class EditComponent extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
        Email:"",
        Password: ""
    }

    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.submeter = this.submeter.bind(this);
  }


  changeemail (e) { // (e) é um event

    this.setState({Email: e.target.value}); // quando o valor do input email é alterado, guarda no state

  }

  changepassword (e) {

   this.setState({Password:e.target.value});
 
  }

  submeter(e){
    // submeter formulário
    
    e.preventDefault();
     let email1 =this.state.Email;
    let password1= this.state.Password; // o que vem do formulário

    const baseUrl = "http://localhost:3005/utilizador_routes/login"
    const datapost = {
      email: email1,   // <- o que o servidor vai receber 
      password: password1 ,

    }
    axios.post(baseUrl, datapost)
        .then(response => {

          console.log(response);
            if (response.data.success) {
             
              if(response.data.data.length>0 )
              {
                  window.location.href="/menu";
              }
              else{
                alert('Não entras');
              }
            }
           
        }).catch(error => {
            alert("Erro 34 " + error)
        })

  }



  render() 
  {
    return (
      <div className="mywrap_menu page-content-wrapper">
        <nav className="nav_index navbar navbar-expand ">
          <div className="collapse_index navbar-collapse">
              <Link to="/registar"> <button type="button" className="registar">Registar</button> </Link>
              <Link to="/entrar"> <button type="button" className="entrar">Entrar</button> </Link>
          </div>
        </nav>
      

      <form className="componente_entrar" onSubmit= {this.submeter}>

        <h5>Email</h5>
        <input type="email" className="myform_ent form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={this.changeemail}/>

        <h5>Password</h5>
        <input type="password" className="myform_ent form-control" placeholder="" onChange= {this.changepassword} />

        <div className="d-flex justify-content-md-center">
          <button type ="submit" className="login text-white">Entrar</button>
        </div>
        

        <hr />

        <div className="d-flex justify-content-md-center">
          <Link  to="/registar"><button className="registarconta text-white">Registar</button> </Link>
        </div>

        </form>

      </div>
    );
  }
}

export default EditComponent;



