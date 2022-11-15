const ZERO = 0
const HORARIO_APERTURA = 9
const HORARIO_CIERRE = 18

export function requerido( campo ) {
    if ( !campo ) throw new Error( `El ${ campo } es obligatorio` )
    console.log(typeof campo)
    return campo
}

export function validadorAlfabetico( valor ) {
    return valor.match( /^[a-zA-Z\-]+$/ )
}

export function validadorDni( valor ) {
    if ( valor.length < 7 || valor.length >= 9 ) {
        throw new Error( 'Dni invalido, solo disponible ente 7 y 8 caracteres' )
    }

}

export function validadorMail( valor ) {
    return valor.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ )
}

export function validadorAlfanumerico( valor ) {
    return valor.match( /^[a-zA-Z0-9]*$/ )
}

export function validadorNumerico( valor ) {
    return valor.match( /^[0-9]*$/ )
}

export function esFechaValida( fecha ) {

    const date = new Date( fecha );

    return date.toISOString().startsWith( fecha );
}

export function esHoraValida( valor ) {
    return valor >= HORARIO_APERTURA && valor <= HORARIO_CIERRE
}

export function numerosPositivos( valor ) {
    return valor > ZERO
}

export function esMascotaValida( { id, nombre, raza, fechaNacimiento, edad, peso } ) {
    return validadorAlfanumerico( id ) && validadorAlfabetico( nombre ) && validadorAlfabetico( raza ) && esFechaValida( fechaNacimiento ) && validadorNumerico( edad ) && validadorNumerico( peso )
}

export function esFamiliarValido( { dni, nombre, apellido, email, telefono, direccion } ) {
    return validadorDni( dni ) && validadorAlfabetico( nombre ) && validadorAlfabetico( apellido ) && validadorMail( email ) && validadorNumerico( telefono ) && validadorAlfanumerico( direccion )
}
