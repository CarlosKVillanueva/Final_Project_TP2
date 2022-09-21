# Veterinaria && Estetica CaRoKaGe

## OBJETIVO
El objetivo del sistema es facilitarles de manera **rapida** un turno a los familiares de las mascotas para
su pronta atencion, con un registro rapido al momento de la solictud del mismo

Al momento de atender a la mascota, completar el registro de la mascota y el dueno en el sistema. Para asi
poder brindar un mejor servicio

## ALCANCE
- Registro Rapido (Celeridad a la hora de otorgar el turno)
- Registro Completo (Captar informacion del Familiar y de la Mascota para una correcta atencion y comunicacion posterior)
- Chequear la disponibilidad horaria para atencion de mascotas
- Cancelacion de Turno


### **_REQUISITOS FUNCIONALES DEL SISTEMA_**

### Caso Uso 1: _Sacar Turno_ **(Kaio)**
Con este registro rapido se busca celeridad para el registro de la mascota,  ante el requerimiento del familiar

Nos piden solicitar la minima informacion posible necesaria para realizar el registro,
con el fin de brindar una mejor experiencia de usuario.

#### Recibe:
- Fecha:String (a partir del dia actual)
- Hora:String (a partir de la hora actual)
- nombreMascota:String (longitud maxima: 16 caracteres)
- dniFamiliar:String (10 caracteres)\
- telefonoFamiliar:String (10 caracteres)
#### Retorna
- Turno con **Estado RESERVADO**



### Caso Uso 2: _Disponibilidad Horaria_ **(Caro)**
Nos solicitan poder mostrar de manera clara los turnos disponibles dada una fecha especificada

#### Recibe:
- fecha:String

#### Retorna:
- Array con horarios disponibles en la fecha dada

e
### Caso Uso 3: _Completar Registro_ **(Sherman)**

Al momento de realizar la atencion de la mascota, se deben completar los siguientes atributos:

#### Recibe:
- idMascota:String
- nombreMascota:String
- razaMascota:String
- fechaNacMascota:String
- edadMascota:Number
- pesoMascota:Number

- dniFamiliar:String
- nombreFamiliar:String
- apellidoFamiliar:String
- correoFamiliar:String
- telefonoFamiliar:String
- direccionFamiliar:String

#### Retorna:
- String





### Caso Uso 4: _Cancelacion Turno_ **(Romi)**

Para cancelar un turno, se debe validar que la fecha y la hora sean correctas y que el turno se encuentre
en estado RESERVADO

#### Recibe:
- fecha
- hora
#### Retorna:
- String Confirmacion


### Caso Uso 5: _Cambio de Estados de Turnos_ **(Sherman)**

- Libre:ESTADO => Default
- Reservado:ESTADO => Cuando un turno fue tomado.
- Confirmado:ESTADO => Cuando se realiza el cobro de la consulta.



### Caso Uso 6: _Modificar Datos de la Mascota_ **(Caro)**

Solo se podrá modificar los datos de una mascota menos el idMascota.

En caso de que se haya modificado correctamente el sistema devolverá como mensaje:
“El registro fue modificado exitosamente” en caso contrario se arrojará una exception con el sig.
Mensaje: “No se pudo realizar la modificación correspondiente”


### Caso Uso 7: _Eliminar registro de la Mascota_ **(Romi)**
Se podrá eliminar a una mascota cuando la fecha de Nacimiento supere los 25 anios


### Caso Uso 8: _Generar Factura_ **(Kaio)**

Se deben registrar el monto final por los servicios prestados y se debe cambiar el Estado a **CONFIRMADO**

