import { MongoClient } from 'mongodb'
import { stringMongo } from "../../../config/config.js"

const client = new MongoClient( stringMongo, { useNewUrlParser: true, useUnifiedTopology: true } );

await client.connect()

export default class Turnera {
    #turnos

    constructor() {
        this.#turnos = client.db( "VeterinariaTP2" ).collection( "turnera" )
    }

    async existeTurno( fecha, hora ) {
        const dto = await this.#turnos.findOne( { fecha, hora } )
        return !!dto;

    }

    async asignarTurno( turno ) {
        await this.#turnos.insertOne( turno.asDto(), { forceServerObjectId: true } )
    }

    async cancelarTurno( fecha, hora ) {
        console.log( fecha, hora );
        let result = await this.#turnos.deleteOne( { "fecha": fecha, "hora": hora } )
        console.log( result );
        if ( result.deletedCount === 0 ) {
            throw new Error( 'No existe el turno a eliminar' );
        }
    }

    async listarTurnos() {
        return await this.#turnos.find().toArray()
    }

    async limpiarMDB() {
        await this.#turnos.remove( {} )
    }
}
