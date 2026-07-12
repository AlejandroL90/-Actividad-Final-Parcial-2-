<<<<<<< HEAD
import { Schema,model } from "mongoose";

const Esqueleto_alumno = new Schema({
    Nombre : String,
    Matricula : String,
    Carrera : String,
    Status : Boolean, 
    
    // Agregamos el Parcial_3 y el campo Aprobado
    Vision_por_computadora: {
        Parcial_1: Number,
        Parcial_2: Number,
        Parcial_3: Number, // Aquí guardaremos la predicción
        Aprobado: Boolean  // True si pasó, False si no
    },
    Machine_Learning: {
        Parcial_1: Number,
        Parcial_2: Number,
        Parcial_3: Number,
        Aprobado: Boolean
    },
    Machine_Learning: {
        Parcial_1: Number,
        Parcial_2: Number,
        Parcial_3: Number,
        Aprobado: Boolean
    },
    Ingles: {
        Parcial_1: Number,
        Parcial_2: Number,
        Parcial_3: Number,
        Aprobado: Boolean
    },
    Mineria_de_datos: {
        Parcial_1: Number,
        Parcial_2: Number,
        Parcial_3: Number,
        Aprobado: Boolean
    },
    Proyecto_integrador: {
        Parcial_1: Number,
        Parcial_2: Number,
        Parcial_3: Number,
        Aprobado: Boolean
    }
})

export const Tabla = new model("Tabla de alumno",Esqueleto_alumno)
=======
import { Schema } from "mongoose" 

const Esqueleto_alumnos = new Schema{(
    alumno : String,
    materia : String,
    calificacion : Number,
    asistencia : Number,
    promedia : Number,
    grado : Number
)}

export const Tabla = new model("Tabla de alumnos",Esqueleto_alumnos)
>>>>>>> 4c9ec53b08d514b1ee1332e873635ae033a53c82
