import { MongoClient } from 'mongodb'
import { stringMongo } from "../config/config.js"

const client = new MongoClient(stringMongo, { useNewUrlParser: true, useUnifiedTopology: true });
    
await client.connect()

export default class Turnera {
    #turnos

    constructor() {
        this.#turnos = client.db("VeterinariaTP2").collection("turnera")
    }

    async buscarTurno( fechaParam, horaParam ) {
        const dto = await this.#turnos.findOne( {fecha: fechaParam, hora: horaParam} )
        return new Turno(dto)
    }

<<<<<<< HEAD:src/negocio/registros/Turnera.js
    async asignarTurno( fecha, hora, mascota, familiar ) {
        const turnoCreado = new Turno ( fecha, hora, mascota, familiar );
        await this.#turnos.insertOne( turnoCreado )
        return turnoCreado
=======
    async asignarTurno( turno ) {
        await this.#turnos.insertOne( turno.asDto() )
>>>>>>> master:src/Turnera.js
    }

    async cancelarTurno( fecha, hora) {
        const turnoBuscado = await this.buscarTurno( fecha, hora )
        await this.#turnos.deleteOne( turnoBuscado )
    }

    async listarTurnos() {
        return await this.#turnos.find().toArray()
    }
}
