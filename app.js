<<<<<<< HEAD
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {test} from "./Backent/Controllers/controllers.alumnos.js"

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("Todo funciona bien"))
.catch((error) => console.log("No funciona la BD"))

const app = express();
app.use((cors));

app.listen(4000, () => console.log("Si escucha"))

test();
=======
import moogose from "mongoose";
import cors from "cors";
import dotenv from "dotenv" 
import express from "expres"; 
import { test } from "./Backent/Controllers/controllers.alumnos";
moogose.connect(process.env.url_db)

.then(() => console.log("Todo funciona bien"))
.catch((error) => console.log("No funciona la BD"))

const app = express() 
app.use((cors));

app.listen( () => console.log("Si escucha")) 
>>>>>>> 4c9ec53b08d514b1ee1332e873635ae033a53c82
