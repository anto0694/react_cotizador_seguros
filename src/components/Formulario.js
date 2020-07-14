import React, {useState} from 'react';
import Error from './Error'
import styled from '@emotion/styled';
import {obtenerDiferenciaAnio} from '../helper';
import {calcularMarca} from '../helper';
import {calcularPlan} from '../helper';

import PropTypes from 'prop-types';



//Para los div's
const Campo = styled.div`
display: flex;
margin-bottom:1rem;
align-items:center;
`;

// para los label
const Label = styled.label`
flex: 0 0 100px;
`;

//Para los select
const Select = styled.select`
display:block;
width: 100%;
padding: 1rem;
border: 1px solid #e1e1e1;
--webkit-appearance: none; 
`;
// QUITA LA APARENCIA NATURAL DEL SELECT PERMITIENDO QUE LE APLIQUEMOS OTRAS PROPIEDADES */ */

// para los input radio
const InputRadio = styled.input`
margin: 0 1rem;
&:hover{ 
    cursor:pointer;
}
`;

// para el boton
const InputButton = styled.input`
background-color:#00838F;
font-size: 16px;
width: 100%;
padding: 1rem;
color: #FFFFFF;
text-transform:uppercase;
font-weight: bold;
border: none;
transition: background-color .3s ease;
margin-top: 2rem;

&:hover{
    background-color:#26c6da;
    cursor:pointer;
    
}
`;
//hover da estilo cuando el usuario interactua con un elemento con un dispositivo señalador, pero que no necesariamente lo activa.
// en este caso hicimos que  cambie de color el boton y aparezca una mano sobre el


const Formulario = ({guardarResumen ,guardarCargando}) => {

//State para datos ingresados en el formulario    
const [datos, guardarDatos]= useState({
    marca:'',
    anio:'',
    plan:''
})

//extraer valores del state 
const {marca,anio,plan}=datos;
// State para errores

const[error,guardarError]=useState(false);

// leer los datos del formulario y colocarlos en el state

const obtenerIformacion= e =>{
    guardarDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
} 

//cuando el usuario presiona submit

const cotizarSeguro = e =>{
    e.preventDefault();

    //Validar Campos
    if(marca.trim()===''|| anio.trim() ==='' || plan.trim() ===''){
      guardarError(true);
      return;  
    }

    //Validacion exitosa 

    //Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(anio);

    //Monto base a pagar
       let resultado = 2000; // let porque cambiara en tiempo de ejecucion

    //por cada año de diferecia el 3% de la base 
    resultado -= diferencia*0.03*resultado;

    //Segun la marca el precio a cotizar aumenta un %
    //asiatico 5%
    //americano 20%
    //europeo 35%
    resultado =  calcularMarca(marca)*resultado;
    
    //Segun el plan el precio a cotizar aumenta un %
    //basico aumenta el 20%
    //completo el 50%
    resultado= parseFloat(calcularPlan(plan)*resultado).toFixed(2);
  // toFixed trunquea a 2 decimales

  guardarCargando(true);

  //Emitir resumen de cotizacion
  setTimeout(() => {

    //Elimina el spinner
    guardarCargando(false);

    //pasa informacion al componente principal
    guardarResumen({
        cotizacion: Number(resultado),
        datos
    });
  }, 3000);

  //Resetear valores
    guardarDatos({
    marca:'',
    anio:'',
    plan:''
});
  
}

return (  
        <form
        onSubmit={cotizarSeguro}>
            {error ?<Error mensaje="Todos los campos son obligatorios "/>  : null}
            <Campo>
                <Label>Marca: </Label>
                <Select 
                name="marca"
                value={marca}
                onChange= {obtenerIformacion}

               >
                    <option value="">---Seleccione---</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                        
                </Select>
            </Campo>

            <Campo>
                <Label>Año: </Label>
                <Select  
                name="anio"
                value={anio}
                onChange= {obtenerIformacion}
                >
                    <option value="">---Seleccione---</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>

                </Select>
            </Campo>

            <Campo>
                <Label>Plan: </Label>
                
                    <InputRadio
                             type="radio"
                             name="plan"
                             value="basico"
                             checked={plan==="basico"}
                             onChange= {obtenerIformacion}> 
                    </InputRadio>&nbsp; Básico &nbsp;
                    {/* OTRA COPCION <label for="basico">Básico</label> */}

                    <InputRadio
                            type="radio"
                            name="plan" 
                            value="completo"
                            checked={plan==="completo"}
                            onChange= {obtenerIformacion}>
                    </InputRadio>&nbsp;Completo &nbsp;
                    
                    
              
            </Campo>        
           <InputButton type="submit" value="Cotizar"></InputButton>
        
           
        </form>
    );
}
Formulario.propTypes={
    guardarResumen:PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
 
export default Formulario;

//name igual que input basico para que solo pueda seleccionar uno de los dos 