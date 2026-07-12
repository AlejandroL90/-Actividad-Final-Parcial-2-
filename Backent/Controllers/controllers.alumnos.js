<<<<<<< HEAD
import { Tabla } from "../Models/models.alumnos.js"

const v_p1 = 8.5, v_p2 = 7.0; // Visión por computadora
const m_p1 = 9.0, m_p2 = 9.8; // Machine Learning
const i_p1 = 6.0, i_p2 = 5.0; // Inglés
const d_p1 = 7.5, d_p2 = 8.0; // Minería de datos
const p_p1 = 10.0, p_p2 = 9.0; // Proyecto Integrador

// 2. Sacamos la predicción básica (Promedio de los 2 parciales)
const v_p3 = (v_p1 + v_p2) / 2;
const m_p3 = (m_p1 + m_p2) / 2;
const i_p3 = (i_p1 + i_p2) / 2;
const d_p3 = (d_p1 + d_p2) / 2;
const p_p3 = (p_p1 + p_p2) / 2;

// 3. Evaluamos si pasó la materia (Si saca 6 o más es true, si no es false)
const v_pasa = v_p3 >= 6;
const m_pasa = m_p3 >= 6;
const i_pasa = i_p3 >= 6;
const d_pasa = d_p3 >= 6;
const p_pasa = p_p3 >= 6;

Tabla.create({
    Nombre: "Juan Perez",
    Matricula: "20260123",
    Carrera: "Ingeniería en Inteligencia Artificial",
    Status: true,

    Vision_por_computadora: {
        Parcial_1: v_p1,
        Parcial_2: v_p2,
        Parcial_3: v_p3, 
        Aprobado: v_pasa  
    },
    Machine_Learning: {
        Parcial_1: m_p1,
        Parcial_2: m_p2,
        Parcial_3: m_p3,
        Aprobado: m_pasa
    },
    Ingles: {
        Parcial_1: i_p1,
        Parcial_2: i_p2,
        Parcial_3: i_p3,
        Aprobado: i_pasa
    },
    Mineria_de_datos: {
        Parcial_1: d_p1,
        Parcial_2: d_p2,
        Parcial_3: d_p3,
        Aprobado: d_pasa
    },
    Proyecto_integrador: {
        Parcial_1: p_p1,
        Parcial_2: p_p2,
        Parcial_3: p_p3,
        Aprobado: p_pasa
    }
})



export const test = () => console.log("LLamar el controlador de la app")
=======
import { Table } from "../Models/models.alumnos";

Tabla.create(
    {
    alumno : "Alejandro Yahir Marquez Hurtado",
    materia : "Matematematicas",
    calificacion : 10, 
    asitencia : 10,
    promedia : "10",
    grado : 5
},
{
    alumno : "Gael Osbaldo Fernandez Garcia",
    materia : "Ingles",
    calificacion : 10, 
    asitencia : 10,
    promedia : "10",
    grado : 5
},
{
    alumno : "Alan Rafael Marquez Hurtado",
    materia : "Artes",
    calificacion : 6, 
    asitencia : 10,
    promedia : "10",
    grado : 5
},
{
    alumno : "Oziel Juarez Montona",
    materia : "Aprendizaje Maquina",
    calificacion : 7, 
    asitencia : 1,
    promedia : "10",
    grado : 5
},
{
    alumno : "Juan Valentin ",
    materia : "Deep Learnig",
    calificacion : 9, 
    asitencia : 5,
    promedia : "10",
    grado : 5
},
{
    alumno : "Cristi Yaretzi ",
    materia : "Proyecto Integrador",
    calificacion : 4, 
    asitencia : 6,
    promedia : "10" 
    grado : 5
},
{
    alumno : "Carlos Andres Joto Fernandez ",
    materia : "Violadas al Fallo",
    calificacion : 10, 
    asitencia : 10,
    promedia : 6,
    grado : 5
},
{
    alumno : "Chema Pendejo",
    materia : "Chupadas al Fallo",
    calificacion : 10, 
    asitencia : 10,
    promedia : 9,
    grado : 5
},
{
    alumno : "Hiram tetona",
    materia : "Vision en Computadora",
    calificacion : 7, 
    asitencia : 7,
    promedia : 7,
    grado : 5
},
{
    alumno : "Angel Lopez Chupadas",
    materia : "Hablar al fallo a lo pendejo",
    calificacion : 10, 
    asitencia : 10,
    promedia : 1,
    grado : 5
}
)

export const test  () => console.log("LLamar el controlador de la app")
>>>>>>> 4c9ec53b08d514b1ee1332e873635ae033a53c82
