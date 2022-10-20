class ValidadorFecha {
    #dia
    #mes
    #anio
    #hora

    MINIMO_MES = 1
    MAXIMO_MES = 12
    constructor( { dia, mes, anio }, hora) {
        if ( !Number.isInteger( dia ) ) {
            throw new Error("El dia nos es Numerico")
        }

        if ( value <= 1 || value >= 31 ) {
            throw new Error("El dia ingresado es invalido")
        }

        if ( !Number.isInteger( mes ) ) {
            throw new Error("El mes nos es Numerico")
        }

        if ( value <= this.MINIMO_MES || value >= this.MAXIMO_MES ) {
            throw new Error("El dia ingresado es invalido")
        }

        if ( !Number.isInteger( anio ) ) {
            throw new Error("El dia nos es Numerico")
        }


    }
}