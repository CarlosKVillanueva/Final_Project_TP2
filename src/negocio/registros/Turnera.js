import { MongoClient } from 'mongodb'
import { stringMongo } from "config/config.js"

const client = new MongoClient( stringMongo, { useNewUrlParser: true, useUnifiedTopology: true } );

await client.connect()

export default class Turnera {
    #turnos

    constructor() {
        this.#turnos = client.db( "VeterinariaTP2" ).collection( "turnera" )
    }

    async buscarTurno( fechaParam, horaParam ) {
        return await this.#turnos.findOne( { "fecha": fechaParam, "hora": horaParam } )
    }

    async asignarTurno( turno ) {
        await this.#turnos.insertOne( turno )
    }

    async cancelarTurno( fecha, hora ) {
        let result
        try {
            result = await this.#turnos.findOne( { fecha, hora } )
        } catch ( e ) {
        }
        if ( result.deletedCount === 0 ) {
            await this.#turnos.deleteOne( turnoBuscado )
        }
    }

    async listarTurnos() {
        return await this.#turnos.find().toArray()
    }

    async limpiarMDB() {
        this.#turnos.remove({})
    }
}
