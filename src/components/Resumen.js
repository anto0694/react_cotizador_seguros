import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper';
import PropTypes from 'prop-types';

//Styed resumen
const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838F;
color: #FFFFFF;
margin-top: 1rem;
`

const Resumen = ({datos}) => {

    //extraer de datos

    const {marca,anio,plan}= datos;

    if (marca.trim()===''|| anio.trim()===''|| plan.trim()===''){
        return null;
    }
    
    return (  
        
            <ContenedorResumen>
            <h2>Resumen de cotización</h2>
        <ul>
            <li>Marca:{primerMayuscula(marca)} </li>
            <li>Año:{anio} </li>
            <li>Plan: {primerMayuscula(plan)}</li>
        </ul>
            </ContenedorResumen>
       
      
    );
}
Resumen.propTypes={
    datos:PropTypes.object.isRequired,
  
}
 
export default Resumen ;