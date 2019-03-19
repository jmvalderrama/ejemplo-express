const express = require('express'); // Invoco Express
const app = express(); // Creo una instancia de Express en la constante app
const { cursos, listarCursos } = require('./courses'); // Invoco la función y el arreglo de objetos del archivo courses.js
const opciones = require('./options'); // Defino las opciones para yargs

let isCreated = false; // Defino una variable que me va a indicar si el archivo matricula.txt ha sido creado
const argv = require('yargs').command(
  // Defino el comando "inscribir" y le paso las opciones
  'inscribir',
  'Proceso de inscripción',
  opciones,
  (crearArchivo = argv => {
    // Recibe los argumentos como parámetro
    let curso = cursos.find(item => item.id == argv.id); // Si el argumento id es igual al id de algunos de los cursos, me trae el curso
    if (curso == undefined) {
      // Si no encuentra el curso, imprime este mensaje y saca de nuevo el listado, ya que la variable isCreated sigue en false
      console.log('Ha ingresado un ID que no corresponde a ningún curso.');
    } else {
      console.log(
        'Ha completado la inscripción. Abra su navegador en la dirección localhost:5000 para más detalles'
      );
      // Si encuentra el curso, armo el html con los parámetros y las propiedades del objeto curso
      app.get('/', (req, res) => {
        // Para concatenar más fácilmente variables con cadenas de texto, utilizo "template literals" o plantillas de cadena de texto
        res.send(`
        <h2>Preinscripción</h2>
        <p>El estudiante <strong>${
          argv.nombre
        }</strong>, identificado con el número de cédula <strong>${
          argv.cedula
        }</strong>, se ha inscrito correctamente al curso
        llamado <em>"${curso.name}"</em>, con ID ${curso.id}, una duración de ${
          curso.duration
        } horas y un valor de $${curso.price} pesos
        </p>
      `);
      });

      isCreated = true; // Hago isCreated igual a true dentro del contexto de la función para indicar que ya he creado el archivo matricula.txt
    }
  })
).argv;

if (isCreated == false) {
  listarCursos(cursos, listado =>
    // Llamo el método enviando como parámetro nuestro arreglo de cursos y declarando una función anónima como callback
    console.log(
      // Para concatenar más fácilmente variables con cadenas de texto, utilizo "template literals" o plantillas de cadena de texto
      `El curso "${listado.name}", con el ID ${
        listado.id
      }, tiene una duración de ${listado.duration} y un valor de ${
        listado.price
      }.`
    )
  );
}

const PORT = 5000;

app.listen(PORT);

// Para saber más sobre "Template literals", te invito a que revises este link: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
