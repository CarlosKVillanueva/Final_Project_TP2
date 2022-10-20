export function requerido( campo ) {
    if ( !campo ) throw new Error(`El ${campo} es obligatorio`)
}

export function validadorAlfabetico( valor ) {
    return !valor.match( /^[a-zA-Z\-]+$/ )
}

