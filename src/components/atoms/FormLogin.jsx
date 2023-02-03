import {useState} from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/react.svg'
import '../../assets/styles/FormLogin.css'
function FormLogin() {
    //const [description, setDescription] = useState({msn: "CC", v : 1})
    //const [username, setUsername] = useState('')
    const [stateForm, setStateForm] = useState({username:'', password:''})
    const handlerClick = (e) => {
        e.preventDefault()
        setDescription({msn: username})    
    }
     const handlerChange = (e) => {
    //     console.log(stateForm.username)
       setStateForm({...stateForm,username: e.target.value})
    //     console.log(stateForm.username)
     }
    const handlerChangePassword = (e) => {
        setStateForm({...stateForm,password: e.target.value})
    }
    return (
        <form className='InicioS'>
            <div >
            <img src={Logo} alt="Logotipo de la empresa" className='img' />
            <h3>INICIO DE SESION</h3>
            <input type="text" value={stateForm.username} onChange={handlerChange}/>
            <input type="password" value ={stateForm.password} onChange={handlerChangePassword}/>
            <button className='boton' onClick={handlerClick}>Iniciar sesión</button>
            <Link to="/register">Registrate</Link>
            </div>
           
{             <div>
               <label>{JSON.stringify()}</label>
            </div>} 
        </form>
      );
}
export default FormLogin;