class Turnera {
    #turnos

    constructor() {
        this.#turnos = []
    }

    buscarTurno( fecha, hora ) {
        return this.#turnos.find( t => t.fecha === fecha && t.hora === hora )
    }

    asignarTurno( fecha, hora, mascota, familiar ) {
        this.#turnos.push( new Turno ( fecha, hora, mascota, familiar ))
    }

    cancelarTurno( fecha, hora) {
        const indexTurno = this.#turnos.findIndex( t => t.fecha === fecha && t.hora === hora )
        if ( indexTurno !== -1) { 
            this.#turnos.splice( indexTurno, 1 )
        }
    }
}