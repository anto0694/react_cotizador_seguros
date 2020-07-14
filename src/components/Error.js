import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//Styled componets para error

const ContenedorError = styled.div`
background-color:#C83C3C;
color: #ffffff;
padding: 1rem;
width: 100%;
text-align: center;
font-weight: bold;
margin-bottom: 2rem;
 `;


const Error = ({mensaje}) => {
    return (
    <ContenedorError>
    {mensaje}
    </ContenedorError>
    );
}
Error.propTypes={
    mensaje:PropTypes.string.isRequired,
  
}
export default Error;