const ZERO = 0
const HORARIO_APERTURA = 9
const HORARIO_CIERRE = 18

export function requerido( campo ) {
    if ( !campo ) throw new Error(`El ${campo} es obligatorio`)
}

export function validadorAlfabetico( valor ) {
    return !valor.match( /^[a-zA-Z\-]+$/ )
}

export function validadorDni( valor ) {
    return !valor.match(/^\d{1,3}\.?\d{3}\.?\d{3}$/)
}

export function validadorMail( valor ) {
    return !valor.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}

export function validadorAlfanumerico( valor ) {
    return !valor.match(/^[a-zA-Z0-9]*$/)
}

export function Numerico( valor ) {
    return !valor.match(/^[0-9]*$/)
}

export function esFechaValida( { anio, mes, dia }) {

    const fechaValidar = `${anio}-${mes}-${dia}`

    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (fechaValidar.match(regex) === null) {
        return false;
    }

    const date = new Date(fechaValidar);

    const timestamp = date.getTime();

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        return false;
    }

    return date.toISOString().startsWith(fechaValidar);
}

export function esHoraValida( valor ) {
    return valor >= HORARIO_APERTURA && valor <= HORARIO_CIERRE
}


export function numerosPositivos( valor ) {
    return valor > ZERO
}