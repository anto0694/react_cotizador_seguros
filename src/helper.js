
//OBTENER LA DIFERENCIA DE AÑOS
export function obtenerDiferenciaAnio (anio){
    return new Date().getFullYear() - anio; 
}

// getfullyear devolve el año actual


//CALCULAR EL TOTAL A PAGAR SEGUN LA MARCA
export function calcularMarca(marca){
    let incrementoMarca;

    switch(marca){
        
        case 'europeo':
            incrementoMarca= 1.35;
            break;
    
        case 'americano':
            incrementoMarca= 1.20;
            break;
        case 'asiatico':
            incrementoMarca=1.05;
            break;
        default: 
        break;
    }

    return incrementoMarca;}


//CALCULAR EL TOTAL A PAGAR SEGUN LA PLAN
export function calcularPlan(plan){
    let incrementoPlan;

    switch(plan){
        
        case 'completo':
            incrementoPlan= 1.50;
            break;
    
        case 'basico':
            incrementoPlan= 1.20;
            break;
        default: 
        break;
    }

    return incrementoPlan;
}

//MOSTRAR LA PRIMER LETRA EN MAYUSCULAS
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}