<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad
        ActividadController(:cuestionario="cuestionario")

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Activa tu lógica en Python.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los fundamentos de Python: instalación del entorno, variables, tipos de datos, operadores, entrada y salida, conversión de tipos, módulos, librerías y estándares PEP 8.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué opción es importante seleccionar durante la instalación de Python en Windows para poder ejecutarlo desde cualquier ubicación en la línea de comandos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Install launcher for all users.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Add Python to PATH.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Customize installation.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disable path length limit.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La opción "Add Python to PATH" permite ejecutar Python desde cualquier ubicación en la línea de comandos sin necesidad de escribir la ruta completa del ejecutable.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de dato se asigna automáticamente a una variable en Python cuando se le asigna un valor, sin necesidad de declarar su tipo explícitamente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tipado estático.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tipado fuerte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tipado dinámico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tipado manual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'En Python el tipo de dato se asigna automáticamente en tiempo de ejecución según el valor asignado; esta característica se conoce como tipado dinámico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones corresponde a un nombre de variable válido en Python?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '2nombre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'edad-usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '_total.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'mi variable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Un nombre de variable puede comenzar con una letra o con el carácter guion bajo (_); _total cumple con todas las reglas de nombrado en Python.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál función en Python permite determinar el tipo de dato que contiene una variable?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'print().',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'type().',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'input().',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'len().',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La función type() recibe como parámetro un objeto y devuelve el tipo de este, lo cual resulta útil para verificar en tiempo de ejecución si una variable contiene el tipo de dato esperado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de dato en Python solo puede tener dos valores posibles: True o False?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'int.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'str.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'bool.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'float.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'En Python los valores booleanos se representan con bool, clase que solo puede instanciarse con dos valores: True para verdadero y False para falso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es el resultado de la operación 31 // 4 en Python?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '3.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '7.75.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '7.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '8.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El operador // representa la división entera en Python; 31 dividido 4 da 7 como cociente entero, descartando la parte decimal.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes estructuras de datos en Python es inmutable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lista (list).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tupla (tuple).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diccionario (dict).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conjunto (set).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La principal diferencia entre lista y tupla es que las tuplas son inmutables, no se pueden modificar después de creadas, lo que las hace útiles para almacenar datos que no deben cambiar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué característica tienen los conjuntos (set) en Python?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Son una colección ordenada que permite elementos duplicados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Son una colección indexable a la que se accede mediante corchetes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Son una colección no ordenada y sin elementos repetidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Son una colección que almacena pares clave-valor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los conjuntos son una colección no ordenada y sin elementos repetidos, especialmente útiles para eliminar duplicados y realizar operaciones matemáticas de conjuntos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué función se utiliza en Python para convertir una cadena de caracteres en un número entero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'str().',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'float().',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'int().',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'bool().',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La función int() devuelve un entero a partir de un número o cadena; es una de las funciones más utilizadas para convertir el valor devuelto por input() en un tipo numérico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de dato devuelve siempre la función input() en Python?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'int.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'str.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'float.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'bool.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El valor devuelto por input() siempre es de tipo str (cadena de caracteres), independientemente de lo que el usuario escriba; si se requiere un número, es necesario convertirlo mediante int() o float().',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la técnica recomendada a partir de Python 3.6 para dar formato a una cadena insertando expresiones entre llaves { }?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Operador % (estilo clásico).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Método format().',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'f-strings (cadenas f).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Método join().',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las f-strings anteponen la letra f a la cadena y permiten insertar expresiones entre llaves { }; es la técnica recomendada a partir de Python 3.6.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál operador en Python se utiliza para calcular el módulo (residuo) de una división?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '//',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '**',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '%',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '/',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El operador % calcula el módulo o residuo de una división; por ejemplo, 7 % 2 da como resultado 1.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué operador lógico en Python devuelve True únicamente cuando ambas expresiones son verdaderas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'or.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'not.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'xor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'and.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El operador and devuelve True únicamente cuando ambas expresiones son verdaderas; si al menos una es falsa, el resultado es False.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            "¿Qué resultado se obtiene al ejecutar la expresión 'Ja' * 3 en Python?",
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ja Ja Ja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'JaJaJa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Error de tipo (TypeError).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ja3.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            "El operador * aplicado entre una cadena y un número funciona como operador de repetición, por lo que 'Ja' * 3 produce la cadena 'JaJaJa'.",
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué significa la expresión "<em>batteries included</em>" en el contexto de Python?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que Python requiere baterías físicas para funcionar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que Python incluye una amplia biblioteca estándar con cientos de módulos para tareas comunes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que Python solo funciona en dispositivos portátiles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que Python necesita compilarse antes de ejecutarse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La expresión "<em>batteries included</em>" se refiere a que Python incluye una amplia biblioteca estándar con cientos de módulos para tareas comunes, lo que constituye una de las principales fortalezas del lenguaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de las siguientes es una forma correcta de importar únicamente la función sqrt del módulo math?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'import math.sqrt.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'from math import sqrt.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'include math.sqrt.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'import sqrt from math.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La sentencia from math import sqrt permite importar funciones específicas de un módulo, lo que se recomienda siguiendo las buenas prácticas de PEP 8.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué tipo de excepción genera Python cuando se intenta usar una variable que no ha sido definida previamente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'SyntaxError.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ValueError.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'NameError.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ZeroDivisionError.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La excepción NameError se genera cuando se usa una variable que no ha sido definida previamente en el programa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Según el estándar PEP 8, ¿cuál es la convención de nomenclatura recomendada para nombrar variables y funciones en Python?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CamelCase.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'snake_case.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mayúsculas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'kebab-case.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El estándar PEP 8 recomienda utilizar snake_case para variables y funciones (por ejemplo, total_ventas), mientras que las constantes se escriben en MAYÚSCULAS y las clases en CamelCase.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué método de las cadenas de caracteres (str) en Python elimina los espacios en blanco al inicio y al final?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'upper()',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'split()',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'strip()',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'replace()',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            "El método strip() elimina los espacios en blanco al inicio y al final de una cadena; por ejemplo, “espacios \".strip() devuelve 'espacios'.",
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de las siguientes opciones describe correctamente los comentarios multilínea en Python?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se inician con el símbolo # al principio de cada línea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se escriben entre paréntesis dobles (( y )).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se escriben entre corchetes [ y ].',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se delimitan con triple comilla (""") al principio y al final del comentario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'En Python los comentarios multilínea se delimitan con triple comilla al principio y al final; también se pueden hacer comentarios de una sola línea con el símbolo #.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestras apropiación de los fundamentos de Python relacionados con instalación, variables, tipos de datos, operadores, entrada y salida, conversión de tipos, módulos, librerías y estándares PEP 8.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
