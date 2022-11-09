import { MongoClient } from 'mongodb'
import Turno from "./Turno.js"
import { stringMongo } from "../config/config.js"

const client = new MongoClient(stringMongo, { useNewUrlParser: true, useUnifiedTopology: true });
    
await client.connect()

export default class Turnera {
    #turnos

    constructor() {
        this.#turnos = client.db("VeterinariaTP2").collection("turnera")
    }

    async buscarTurno( fechaParam, horaParam ) {
        return await this.#turnos.findOne( {fecha: fechaParam, hora: horaParam} )
    }

    async asignarTurno( fecha, hora, mascota, familiar ) {
        await this.#turnos.insertOne( new Turno ( fecha, hora, mascota, familiar ))
    }

    async cancelarTurno( fecha, hora) {
        const turnoBuscado = await this.buscarTurno( fecha, hora )
        await this.#turnos.deleteOne( turnoBuscado )
    }
}
