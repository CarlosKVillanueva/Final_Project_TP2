import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://veterinariaTP2:LERIzSJ7jtuZKcns@veterinariatp2.6ptwb5y.mongodb.net/?retryWrites=true&w=majority";
    
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
await client.connect()

export default class RegistroFamiliares {
    #familiares

    constructor() {
        this.#familiares = client.db("VeterinariaTP2").collection("familiares")
    }

    async registrar(familiar) {
        let result
        try {
            result = await this.#familiares.insertOne( familiar )
        } catch (e) {
            console.error(e);
        }
    }

    async buscarPorDni( dniParam ) {
        return await this.#familiares.findOne( {dni: dniParam})
    }

    async modificarDatos ( familiar ) {
        let result
        try {
            result = await this.#familiares.updateOne({ dni: familiar.dni }, { 
                $set:{
                    dni: familiar.dni,
                    nombre: familiar.nombre,
                    apellido: familiar.apellido,
                    email: familiar.email,
                    telefono: familiar.telefono,
                    direccion: familiar.direccion,
            }})
        } catch (error) {
            throw new Error( 'Internal server error ' );
        }

        if ( result.matchedCount === 0 ) {
            //http bad request
            throw new Error( "No se pudo modificar los datos porque el dni es incorrecto." );
        }

        if ( result.modifiedCount === 0 ) {
            //http internal server error
            throw new Error( 'No pudo actualizarse por error de conexion a la base de datos.' )
        }
    }

    async eliminarRegistro( familiar ) {
        let result = await this.#familiares.deleteOne( familiar )
        if ( result.deletedCount === 0 ) {
            throw new Error( 'No se pudo eliminar al familiar.' )
        }
    }

    async listarFamiliares() {
        return await this.#familiares.find().toArray()
    }
}