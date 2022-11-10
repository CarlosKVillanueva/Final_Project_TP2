const ZERO = 0
const HORARIO_APERTURA = 9
const HORARIO_CIERRE = 18

export function requerido( campo ) {
    if ( !campo ) throw new Error( `El ${ campo } es obligatorio` )
}

export function validadorAlfabetico( valor ) {
    return !valor.match( /^[a-zA-Z\-]+$/ )
}

export function validadorDni( valor ) {
    return !valor.match( /^\d{1,3}\.?\d{3}\.?\d{3}$/ )
}

export function validadorMail( valor ) {
    return !valor.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ )
}

export function validadorAlfanumerico( valor ) {
    return !valor.match( /^[a-zA-Z0-9]*$/ )
}

export function validadorNumerico( valor ) {
    return !valor.match( /^[0-9]*$/ )
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
    if ( validadorAlfanumerico( id ) ) return false
    if ( validadorAlfabetico( nombre ) ) return false
    if ( validadorAlfabetico( raza ) ) return false
    if ( esFechaValida( fechaNacimiento ) ) return false
    if ( validadorNumerico( edad ) ) return false
    if ( validadorNumerico( peso ) ) return false
}

export function esFamiliarValido( { dni, nombre, apellido, email, telefono, direccion } ) {
    if ( validadorDni( dni ) ) return false
    if ( validadorAlfabetico( nombre ) ) return false
    if ( validadorAlfabetico( apellido ) ) return false
    if ( validadorMail( email ) ) return false
    if ( validadorNumerico( telefono ) ) return false
    if ( validadorAlfanumerico( direccion ) ) return false
}
