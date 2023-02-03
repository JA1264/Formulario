import { useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../../assets/styles/FormRegister.css'
import Logo from '../../assets/react.svg'

function FormRegister() {
    const navigate = useNavigate()
/*     const name = useRef()
    const username = useRef()
    const password = useRef() */
    const form = useRef()

    const handlerClick = (e)=> {
        e.preventDefault();
        // console.log(typeof(name) )
        // alert('Nombre: ' + name.current.value)
        //navigate("/")
        // Instrucciones para el elemento form
        const newForm = new FormData(form.current)
        alert('REGISTRO EXITOSO '+ newForm.get('name'))
    }
    return ( 

        
        <form ref={form}>
            <div>
            <img src={Logo} alt="Logotipo de la empresa" className='img' />
                 <h1>REGISTRO DE USUARIO</h1>
                <label className="caption" htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name"/>
            </div>
            <div>
                <label className="caption">Correo electronico
                    <input type="text" />
                </label>
            </div>


            <div>
                <label className="caption">Usuario
                    <input type="text" />
                </label>
            </div>
            <div>
                <label className="caption">Contraseña</label>
                <input type="password" />
            </div>
            <button onClick={handlerClick}>Registro</button>
            <Link to='/login'><button>Regresar</button></Link>
           <div>
               
           </div>
        </form>
     );
}

export default FormRegister;