import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

//Styled components. Estilos que combinan Js con CSS. Se comportan como componentes 

const ContenedorHeader = styled.header`
background-color:#26C6DA;
padding:10 px;
font-weight: bold;
color: #FFFFFF;
`;

const TextoHeader = styled.h1`
font-size: 2rem;
margin:0;
font-family:'Slabo 27px', serif;
text-align: center;
`

const Header = ({titulo}) => {
    return ( 
    <ContenedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
     );
}
Header.propTypes={
    titulo:PropTypes.string.isRequired,
  
}
export default Header;