import { MongoClient } from 'mongodb'
import { stringMongo } from "../../../config/config.js"
import Turno from "../models/Turno.js"

const client = new MongoClient( stringMongo, { useNewUrlParser: true, useUnifiedTopology: true } );

await client.connect()

export default class Turnera {
    #turnos

    constructor() {
        this.#turnos = client.db( "VeterinariaTP2" ).collection( "turnera" )
    }

    async buscarTurno( fecha, hora ) {
        const dto = await this.#turnos.findOne( { fecha, hora } )
        if (dto) {
            throw new Error("Turno ocupado")
        }
        return dto
    }

    async asignarTurno( turno ) {
        await this.#turnos.insertOne( turno.asDto() )
    }

    async cancelarTurno( fecha, hora ) {
        let result
        try {
            result = await this.#turnos.deleteOne( { fecha, hora } )
        } catch ( e ) {
            throw new Error( 'Internal server error' );
        }
        if ( result.deletedCount === 0 ) {
            throw new Error( 'No lo encontramos' );
        }
    }

    async listarTurnos() {
        const dtos = await this.#turnos.find().toArray()
        return dtos.map( d => new Turno( d ) )
    }

    async limpiarMDB() {
        await this.#turnos.remove( {} )
    }
}
