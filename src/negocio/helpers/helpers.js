const ZERO = 0
const HORARIO_APERTURA = 9
const HORARIO_CIERRE = 18

export function requerido( campo ) {
    if ( !campo )
        throw new Error( `El campo es obligatorio` )
    return campo
}

export function validadorAlfabetico( valor ) {
    return valor.match( /^[a-zA-Z]+$/ )
}

export function validadorDni( valor ) {
    if ( valor.length < 7 || valor.length > 9 ) {
        throw new Error( 'Dni invalido, solo disponible ente 7 y 8 caracteres' )
    }
    if ( !validadorNumerico( valor ) ) {
        throw new Error( 'El Dni solo acepta caracteres numericos' )
    }
}

export function validadorMail( valor ) {
    return valor.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ )
}

export function validadorAlfanumerico( valor ) {
    return valor.match( /^[a-zA-Z0-9\-\s]*$/ )
}

export function validadorNumerico( valor ) {
    return valor.match( /^[0-9]*$/ )
}

export function esFechaValida( fecha ) {

    const date = new Date( fecha );

    return date.toISOString().startsWith( fecha );
}

export function validadorDireccion( valor ) {
    return valor.match( /^[a-zA-Z0-9\s,'-]*$/ )
}

export function esHoraValida( valor ) {
    return valor >= HORARIO_APERTURA && valor <= HORARIO_CIERRE
}

export function numerosPositivos( valor ) {
    return valor > ZERO
}
