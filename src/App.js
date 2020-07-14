import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


// contenedor para centrar el contenido
const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
background-color:#FFFFFF;
padding: 3rem;
`


function App() {
  //State de resumen

  const[resumen, guardarResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      anio:'',
      plan:''
    }
  });

  //extraer datos
  const {cotizacion,datos}= resumen

  //State para spinner
  const [cargando, guardarCargando]= useState(false);

  return (

    <Contenedor>
    <Header
    titulo= 'Cotizador de Seguros'  
    />
     <ContenedorFormulario>
     <Formulario
     guardarResumen={guardarResumen}
     guardarCargando={guardarCargando}/>
    
    {cargando ? <Spinner/> :<Resumen
    datos={datos}/> }   
   
    {!cargando ?<Resultado
    cotizacion={cotizacion}/> : null}
    </ContenedorFormulario>
   
    </Contenedor>

   
    
  );
}

export default App;
