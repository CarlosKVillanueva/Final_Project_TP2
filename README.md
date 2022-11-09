Para correr los test primero se debe instalar Vitest con el siguiente comando

`npm install -D vitest`

Una vez instalado el framework, para correr los test, se debera ejecutar (en la carpeta raiz del proyecto)

`npm run test`

Una vez instalado el framework, para correr los test con GUI, se debera ejecutar (en la carpeta raiz del proyecto)

`npm run testUI`


# Veterinaria && Estetica CaRoKaGe
## Grupo 1

## Integrantes
- [Romina Closter](romina.closter89@gmail.com)
- [Carolina Destepa](carolinadestepa@gmail.com)
- [German Schmitz](germanschmitz123@gmail.com)
- [Carlos Villanueva](carloskvillanueva@gmail.com)

## OBJETIVO
Los objetivos del sistema son:
- cargar un turno a una mascota, asociada a un familiar, para agendar y organizar los horarios de atención.
- Guardar los registros de las mascotas que pertenecen a la veterinaria.

## ALCANCE
- Registro del familiar.
- Registro de la mascota.
- Asignar turnos.

### **_REQUISITOS FUNCIONALES DEL SISTEMA_**

### Caso Uso 1: _Registrar Familiar_ 
Si el dni del familiar no se encuentra dentro de la base. Se procederá a registrar completando
los siguientes atributos requeridos:
- dni:       campo requerido:Si, tipo:numerico, longitud máxima: 8 caracteres.
- nombre:    campo requerido:SI, tipo:alfabetico, longitud máxima: 64 caracteres.
- apellido:  tipo:alfabetico, longitud máxima: 64 caracteres.
- email:     tipo:alfanumerico, longitud máxima: 100 caracteres.
- telefono:  tipo:alfanumerico, longitud máxima: 64 caracteres.
- Direccion: tipo:alfanumerico, longitud máxima: 64 caracteres.

Si el registro no se pudo guardar exitosamente el sistema arrojará un error y mostrará el siguiente mensaje: "El familiar No fue registrado, por favor vuelva a intentarlo"

### Caso Uso 2: _Registrar Mascota_ 
Para registrar a una mascota se deben cumplir dos condiciones.
1) EL familiar debe estar registrado 
2) el id de la mascota no debe existir dentro de la base. 
Si se cumplen estas dos condiciones se procederá a registrar completando
los siguientes atributos requeridos:
- id:        campo requerido:Si, tipo:alfanumerico, longitud máxima: 72 caracteres.
- nombre:    campo requerido:SI, tipo:alfabetico, longitud máxima: 64 caracteres.
- raza:      campo requerido:SI, tipo:alfabetico, longitud máxima: 64 caracteres.
- fechaNacimiento: campo requerido:SI,tipo:alfanumerico, longitud máxima: 10 caracteres.
- edad:  campo requerido:Si, tipo:numerico, longitud máxima: 2 caracteres.
- peso:  campo requerido:Si, tipo:numerico, longitud máxima: 3 caracteres.

Si el registro no se pudo guardar exitosamente el sistema arrojará un error y mostrará el siguiente mensaje: "La mascota No fue 
registrada, por favor vuelva a intentarlo"

### Caso Uso 3: _Sacar Turno_ 

Para Reservar un turno se deben cumplir las siguientes condiciones:

El familiar debe estar registrado. En caso contrario se procederá a dar el alta correspondiente Caso Uso 1 Registrar Familiar. 
La mascota debe estar registrada.En caso contrario se procederá a dar el alta correspondiente Caso Uso 2 Registrar Mascota.
El turno debe estar disponible.En caso contrario el sistema arrojará un error y mostrará el siguiente mensaje: "No contamos con un
turno disponible en esa fecha y hora".
Si se cumplen estas condiciones se deberán completar los siguientes atributos para que el turno sea guardado correctamente:

- Fecha:alfanumerico (a partir del dia actual)
- Hora:alfanumerico (a partir de la hora actual)
- nombreMascota:alfabetico (longitud maxima: 64 caracteres)
- dniFamiliar:alfanumerico (longitud maxima: 10 caracteres)
- telefonoFamiliar:alfanumerico (longitud maxima: 16 caracteres)


### Caso Uso 4: _Cancelacion Turno_ 

Para poder cancelar un turno, se debera validar que la fecha y la hora sean correctas.

En caso contrario debera arrojar un error en los siguientes casos:

- Si la fecha y la hora no son correctas.El sistema mostrara el siguiente mensaje: "Los datos ingresados no son correctos "

- Si la fecha es anterior a la actual el sistema mostrara el siguiente mensaje: "No se puede cancelar un turno con fecha anterior a la actual"

- Si la Fecha es vigente pero la hora es anterior a la actual el sistema mostrara el siguiente mensaje: "No se puede cancelar un turno con una hora anterior a la actual"


### Caso Uso 5: _Modificar Datos de la Mascota_ 

Se podrán modificar todos los datos de las mascotas menos el id de la Mascota y el nombre.

En caso de que no se haya modificado correctamente el sistema arrojará un error y mostrará el siguiente mensaje:  “No se pudo pudo modificar porque el id es incorrecto”

### Caso Uso 6: _Eliminar registro de la Mascota_ 
Se podrá eliminar a una mascota cuando la fecha de Nacimiento supere los 25 anios.

### Caso Uso 7: _Modificar Datos del Familiar_ 

Se podrán modificar todos los datos del familiar menos el dni.

En caso de que no se haya modificado correctamente el sistema arrojará un error y mostrará el siguiente mensaje:  “No se pudo pudo modificar porque el dni es incorrecto”

### Caso Uso 8: _Eliminar registro del Familiar_ 
Se podrá eliminar a un familiar cuando el cliente lo solicite o cuando haya pasado un plazo de 110 anios. En caso de que el familiar se elimine se deberán eliminar las mascotas asociadas? VER
