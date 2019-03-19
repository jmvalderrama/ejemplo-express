# Ejemplo con Express y Yargs

Este es un ejemplo donde vamos utilizar Express y Yargs para simular un proceso de inscripción a determinados cursos.
Para detener la ejecución, estando en tu terminal presiona las teclas `Ctrl + C`.

Antes de comenzar, escribe en tu terminal `npm install` para instalar y/o actualizar todas las dependencias del proyecto.

Para ver la oferta de cursos, escribe en tu terminal `node index`

Para más información sobre el proceso de inscripción, escribe en tu terminal `node index inscribir`

Para inscribirse a un curso, escribe en tu terminal `node index inscribir -i=xxxx -n=xxxx -c=xxxx`, donde `-i` es el ID del curso,
`-n` es tu nombre y `-c` es tu cédula.

Al terminar, te muestra un mensaje donde debes ir en tu navegador a la dirección `http://localhost:5000` para ver tus datos con más detalle.
