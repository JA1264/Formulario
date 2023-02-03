import { useRef } from 'react'
import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import '../../assets/styles/FormRegister.css'
import Logo from '../../assets/react.svg'

function FormRegister() {
   
    const form = useRef()
    const navigate = useNavigate();

    const formDataF = useRef();
    const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataF.current);
    let URI = "http://34.225.239.102/api/registrar/usuario";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: formData.get("name"),
        usuario: formData.get("usuario"),
        correo: formData.get("correo"),
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
        const newForm = new FormData(form.current)
        alert('REGISTRO EXITOSO '+ newForm.get('name'))
    }
    return ( 

        
        <form  ref={formDataF}>
            <div>
            <img src={Logo} alt="Logotipo de la empresa" className='img' />
                 <h1>REGISTRO DE USUARIO</h1>
                <label className="caption" htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name"/>
            </div>
            <div>
                <label className="caption">Correo electronico
                    <input type="text" id="correo" name="correo"/>
                </label>
            </div>


            <div>
                <label className="caption">Usuario
                    <input type="text"id="usuario" name="usuario" />
                </label>
            </div>
            <div>
                <label className="caption">Contraseña</label>
                <input type="password" id="contrasenia" name="contrasenia" />
            </div>
            <button onClick={handlerClick}>Registro</button>
            <Link to='/login'><button>Regresar</button></Link>
           <div>
               
           </div>
        </form>
     );
}

export default FormRegister;