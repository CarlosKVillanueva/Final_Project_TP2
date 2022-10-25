import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://veterinariaTP2:<password>@veterinariatp2.6ptwb5y.mongodb.net/?retryWrites=true&w=majority";
    
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
await client.connect()
export default class RegistroFamiliares {
    #familiares

    constructor() {
        this.#familiares = client.db("VeterinariaTP2").collection("familiares")
    }

    async registrar(familiar) {
        await this.#familiares.insertOne( familiar )
    }

    async buscarPorDni( dniParam ) {
        return await this.#familiares.findOne( {dni: dniParam})
    }

    async modificarDatos ( familiar ) {
        const familiarBuscado = this.buscarPorDni( familiar.dni )
        //usar update
        if ( familiarBuscado ) {
            familiarBuscado.cambiarDatos( familiar )
        } else {
            throw new Error( "No se pudo modificar los datos porque el dni esta incorrecto." );
        }
    }

    async eliminarRegistro( familiar ) {
        await this.#familiares.deleteOne( familiar )
    }

    async listarFamiliares() {
        return await this.#familiares.find({})
    }
}