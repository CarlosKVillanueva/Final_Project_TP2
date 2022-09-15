# Veterinaria CaRoKaGe

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

### Caso Uso 1: _Registro Rapido_ **(Carlos)**
Con este registro rapido se busca celeridad para el registro de la mascota,  ante el requerimiento del familiar

Nos piden solicitar la minima informacion posible necesaria para realizar el registro,
con el fin de brindar una mejor experiencia de usuario.

#### Recibe:
- Fecha
- Hora
- nombreMascota
- dniFamiliar

```
registroRapido(fecha, hora, nombreMascota, dniFamiliar) {

Si hay disponibilidad (fecha, hora)

Si la mascota no está registrada => Damos Alta (nombreMascota, dniFamiliar) return => idMascota

reservarTurno(fecha, hora, idMascota) => Estado de LIBRE a RESERVADO

Manejo de Errores con Excepciones
}
```
### Caso Uso 2: _Registro Completo_ **(Voluntario)**
Al momento de realizar la atencion de la mascota, nos solicitan poder completar el registro del familiar (para comunicaciones necesarias),
como asi tambien de la mascota para realizar una mejor atencion de las misma.

#### Recibe:
- idMascota
- nombreMascota
- razaMascota
- edadMascota
- pesoMascota
- dniFamiliar
- nombreFamiliar
- apellidoFamiliar
- correoFamiliar
- telefonoFamiliar
- direccionFamiliar

```
registroCompleto(idMascota, nombreMascota, razaMascota, edadMascota, pesoMascota, dniFamiliar, 
nombreFamiliar, apellidoFamiliar, correoFamiliar, telefonoFamiliar, direccionFamiliar)

    cambiarEstadoTurno()
    registroCompletoMascota(idMascota, nombreMascota, razaMascota, edadMascota, pesoMascota)
    registroCompletoFamiliar(dniFamiliar, nombreFamiliar, apellidoFamiliar, correoFamiliar, telefonoFamiliar, direccionFamiliar)
}

```

### Caso Uso 3: _Disponibilidad Horaria_ **(Voluntario)**
Nos solicitan poder mostrar de manera clara los turnos disponibles dada una fecha especificada

#### Recibe:
- fecha

```
horariosDisponibles(fecha) {
    retorna => Array de Horarios disponibles para la fecha dada 
}
```

### Caso Uso 4: _Cancelacion Turno_ **(Voluntario)**
Nos solicitan poder cancelar un turno ya reservado

#### Recibe:
- fecha
- hora

```
cancelarTurno(fecha, hora) {
    cambiarEstadoTurno(fecha, hora)
}
```

