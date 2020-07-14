import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

import PropTypes from 'prop-types';


const Mensaje = styled.p`
background-color:#65c47b;
margin-top: 2rem;
padding: 1rem;
text-align: center;
`;

const ResultadoCotizacion = styled.div`
background-color:#65c47b;
margin-top: 2rem;
padding: .5rem;
text-align: center;
border: 1px solid #65c47b;
position: relative;
`;

const TextoCotizacion = styled.p`
background-color:#65c47b;
padding: 1rem;
text-transform:uppercase;
font-weight:bold;
margin:0;
`;
const Resultado = ({cotizacion}) => {
    return (

        (cotizacion === 0)? (<Mensaje>Selecciona un plan, marca y año de tu automovil.</Mensaje>)
        : (<ResultadoCotizacion>
                    <TransitionGroup
                        component="span"
                        className="resultado">
                                <CSSTransition
                                classNames="resultado"
                                key={cotizacion}
                                timeout={{enter:500,exit:500}}>
                                        <TextoCotizacion> El total es: <span>${cotizacion}</span></TextoCotizacion>
                                </CSSTransition>
                    </TransitionGroup>
            </ResultadoCotizacion>
            ) 
      );
}
Resultado.propTypes={
        cotizacion:PropTypes.number.isRequired,
      
    }
export default Resultado;