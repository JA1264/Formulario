import { useRef } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/react.svg"
import '../../assets/styles/Alta.css'

function AltaAutobuses() {
    const [selectedOption, setSelectedOption] = useState("Turismo");
    const [license, setLicense] = useState(Math.floor(Math.random() * 100000));
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

    const navigate = useNavigate();

    const formDataF = useRef();
    const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataF.current);
    let URI = "http://34.225.239.102/api/autobus/register";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: formData.get("clave"),
        placa: formData.get("placa"),
        numasientos: formData.get("asientos"),
        fecha: formData.get("fecha"),
        tipo: formData.get("tipo"),
        nombre: formData.get("chofer"),
        licencia: license,
      }),
    };
    console.log(options.body)
    fetch(URI, options)
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
        navigate("/login");
      });
  };

  return (
    <div  className="Alta">
      <div >
        <div >
          <img src={Logo} alt="Logo" height="100px" />
        </div>

        <form ref={formDataF}>
          <div >
            <div >
              <label  htmlFor="clave">
                CLAVE DE AUTOBUS
              </label>
              <input type="text" id="clave" name="clave"/>{" "}
              <br></br>
              <label htmlFor="placa">
                PLACA DE AUTOBUS
              </label>
              <input type="text" id="placa" name="placa" />{" "}
              <br></br>
            </div>
            <div className="Column">
              <label  htmlFor="asientos">
                NUMERO DE ASIENTOS
              </label>
              <input
                type="number"
                id="asientos"
                name="asientos"
                
              />
              <br></br>
              <label className="cap">
                FECHA DEL ALTA
                <input type="Date" id="fecha" name="fecha"/>
              </label>
            </div>
          </div>

          <br />
          <div className="Column2">
            <label className="cap" htmlFor="tipo">
              Tipo
              <select
                value={selectedOption}
                onChange={handleChange}
                id="tipo"
                name="tipo"
                className="inp"
              >
               
                <option value="Turismo">Turismo</option>
                <option value="Lujo">Lujo</option>
              </select>
            </label>
             <div className="Chofer">
             <label>
              NOMBRE DE CHOFER
              <input type="text" id="chofer" name="chofer"/>
            </label>
             </div>
            <br />

            <label id="licencia">
              NUMERO DE LICENCIA
              <input
                name="licencia"
                value={license}
                disabled
              ></input>
            </label>
          </div>
          <div className="boton">
            <button onClick={handlerClick}>Registro</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AltaAutobuses;
