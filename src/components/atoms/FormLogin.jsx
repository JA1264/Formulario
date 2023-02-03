import {useState} from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/react.svg'
import '../../assets/styles/FormLogin.css'
function FormLogin(){
    const form = useRef()
    const navigate = useNavigate();

    const formDataF = useRef();
    const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataF.current);
    let URI = "http://34.225.239.102/api/iniciar";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: formData.get("usuario"),
        contrasenia: formData.get("contrasenia")
      }),
    };
    console.log(options.body)
    fetch(URI, options)
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
        navigate("/AltaAutobuses");
      });

    }
   
    return (
        <form ref={form} className='InicioS'>
            <div >
            <img src={Logo} alt="Logotipo de la empresa" className='img' />
            <h3>INICIO DE SESION</h3>
            <input type="text" name="usuario"/>
            <input type="password"name='contrasenia'/>
            <button className='boton' onClick={handlerClick}>Iniciar sesión</button>
            <Link to="/register"><button>Registrate</button></Link>
            <Link to="/AltaAutobuses"><button>Autobuses</button></Link>
            </div>
           
{             <div>
               <label>{JSON.stringify()}</label>
            </div>} 
        </form>
      );
}
export default FormLogin;
