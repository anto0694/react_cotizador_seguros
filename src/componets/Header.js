import React from 'react';
import styled from '@emotion/styled';


//Styled components. Estilos que combinan Js con HTML. Se comportan como componentes 

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
 
export default Header;