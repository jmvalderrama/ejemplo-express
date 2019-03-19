const cursos = [
  {
    id: 1,
    name: 'Curso básico de HTML y CSS',
    duration: 128,
    price: 120000
  },
  {
    id: 2,
    name: 'Curso de JavaScript',
    duration: 64,
    price: 150000
  },
  {
    id: 3,
    name: 'Curso de NodeJS',
    duration: 32,
    price: 70000
  }
];

// Declaro una función que recibe un arreglo(oferta) que contiene los cursos y un callback
let listarCursos = (oferta, callback) => {
  let time = 0; // Declaro una variable para aumentar el tiempo del setTimeOut de forma dinámica
  oferta.forEach(curso => {
    // Con el método .forEach, puedo recorrer el arreglo
    setTimeout(() => {
      callback(curso); // Retorno el curso
    }, (time += 2000)); // Aumento el tiempo de la siguiente iteración
  });
};

module.exports = { cursos, listarCursos };
