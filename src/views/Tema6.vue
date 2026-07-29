<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Módulos, librerías y estándares de codificación

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los módulos, las librerías y los estándares de codificación permiten escribir programas en Python de forma más organizada, reutilizable y fácil de mantener. Estos recursos ayudan a resolver tareas comunes, evitar la repetición de instrucciones y presentar el código con una estructura comprensible para otras personas.

      p.mt-4 Para comprender su función dentro de un programa, es importante reconocer cómo cada elemento aporta a la construcción de soluciones más claras y eficientes:

      .row.justify-content-center 
        .col-lg-8
          LineaTiempoD.color-primario.linea-bold
            .row(numero="1" titulo="Módulos")
              .col-md-12.mb-4.mb-md-0
                p Son archivos de Python que reúnen funciones, clases o variables para reutilizarlas en otros programas. Por ejemplo, en una empresa que calcula descuentos de ventas, un módulo puede guardar las funciones de cálculo para usarlas en diferentes reportes sin escribirlas de nuevo. 
      
            .row(numero="2" titulo="Librerías")
              .col-md-12.mb-4.mb-md-0
                p Son conjuntos organizados de módulos que permiten resolver tareas más amplias o especializadas. Por ejemplo, una empresa que analiza ventas mensuales puede usar una librería para organizar datos, generar cálculos y presentar resultados sin construir todas las funciones desde cero. 
      
            .row(numero="3" titulo="Importaciones")
              .col-md-12.mb-4.mb-md-0
                p Permiten incorporar módulos o funciones dentro de un programa mediante la sentencia import. Por ejemplo, si se requiere calcular el área de un círculo, se puede importar un módulo matemático para usar el valor de pi y evitar escribirlo manualmente. 

            .row(numero="4" titulo="Estándares de codificación")
              .col-md-12.mb-4.mb-md-0
                p Son recomendaciones para escribir código claro, ordenado y fácil de revisar. Por ejemplo, usar nombres como total_ventas o nombre_cliente ayuda a comprender rápidamente qué información almacena cada variable dentro del programa. 
      
            .row(numero="5" titulo="PEP 8")
              .col-md-12.mb-4.mb-md-0
                p Es la guía de estilo oficial de Python para mejorar la legibilidad del código. Por ejemplo, recomienda organizar las importaciones al inicio del archivo, usar cuatro espacios por nivel de indentación y nombrar las variables con palabras descriptivas.
      
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="fade-up")
            img(src='@/assets/curso/temas/t6/2.png', alt='', style="width: 100%").m-auto



      p.mt-4 Estos elementos permiten construir programas más comprensibles y sostenibles. Al usar módulos, librerías y estándares de codificación, se fortalecen buenas prácticas de programación y se facilita que otras personas revisen, mantengan o amplíen el código.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p La programación moderna no consiste en escribir cada línea de código desde cero. Python se basa en la filosofía "<em>Batteries Included</em>" (Baterías incluidas), lo que significa que el lenguaje ya viene equipado con herramientas listas para usar. 

          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t6/3.svg', style='width: 100px').m-auto
            
            .col
              p Esta estructura permite a los desarrolladores mantener un código limpio, reutilizable y fácil de mantener, dividiendo problemas complejos en piezas más pequeñas y manejables. Gracias a este enfoque, el programador puede aprovechar soluciones ya probadas en lugar de reescribirlas, lo que ahorra tiempo y reduce la posibilidad de errores.


      separador
      #t_6_1.titulo-segundo.color-acento-contenido
        h2 6.1. Concepto de módulo, librería y formas de importación

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t6/4.png', alt='', style="width: 490px").m-auto
        .col-lg-7
          p Un módulo en Python es un archivo con extensión .py que contiene definiciones de funciones, clases y variables que pueden ser reutilizadas en otros programas. Una librería (o biblioteca) es un conjunto organizado de módulos que proveen funcionalidades especializadas.

          p Python incluye una amplia biblioteca estándar (standard library) con cientos de módulos para tareas comunes. La existencia de esta biblioteca tan completa es una de las principales fortalezas del lenguaje, resumida en la expresión "<em>batteries included</em>" (baterías incluidas).

          .row.justify-content-center.mt-4
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color1.p-4
                    p Además de la biblioteca estándar, existe una enorme cantidad de módulos desarrollados por la comunidad que pueden instalarse y reutilizarse, lo que amplía casi sin límites las posibilidades del lenguaje.


      .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Operadores de cadena

      p No todos los módulos tienen el mismo origen. Según su procedencia, pueden clasificarse en módulos integrados en el propio lenguaje, módulos desarrollados por terceros e instalables por el programador, y módulos propios creados por el desarrollador para su proyecto.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t6/5.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-2 Independientemente de su tipo, para emplear un módulo es necesario importarlo. La forma de hacerlo influye en cómo se invocan posteriormente sus funciones, por lo que conviene conocer las distintas variantes de la sentencia import.


      p.mt-4 En los siguientes apartados se describen estos tres tipos de módulos y, a continuación, las principales formas de importación con ejemplos prácticos.

      p En Python se distinguen tres tipos principales de módulos:

      .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t6/6.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Módulos integrados (built-in)
                p.mb-0 Forman parte del núcleo de Python. Ejemplos: math, os, sys, datetime, random.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t6/7.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Módulos de terceros
                p.mb-0 Desarrollados por la comunidad, instalables con pip. Ejemplos: numpy, pandas, matplotlib, requests.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t6/8.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Módulos propios
                p.mb-0 Archivos .py creados por el programador.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p Reconocer estos tres orígenes permite decidir con qué módulo trabajar: usar primero los integrados, recurrir a los de terceros cuando la tarea lo exija y crear módulos propios para organizar el código del proyecto.




      p.mt-4 A continuación, se ilustra en la tabla el resumen de los tipos de módulos más utilizados en Python:

      p Para reconocer la utilidad de la biblioteca estándar, la tabla relaciona módulos frecuentes con la funcionalidad principal que ofrecen.

      .row.justify-content-center.mt-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Tabla 13.
            span Módulos integrados de uso frecuente en Python

          .tabla-a.color-acento-contenido 
            table
              thead(style="background-color: #FE9841")
                tr
                  th Módulo
                  th Funcionalidad principal

              tbody
                tr(style="background-color: #F6F9F4")
                  td
                    b math
                  td Funciones matemáticas: sqrt, pi, sin, cos, log, factorial.

                tr
                  td
                    b random
                  td Números aleatorios: random(), randint(), choice(), shuffle().

                tr(style="background-color: #F6F9F4")
                  td
                    b datetime
                  td Manejo de fechas y horas: date, time, datetime, timedelta.

                tr
                  td
                    b os
                  td Interacción con el sistema operativo: rutas, directorios.

                tr(style="background-color: #F6F9F4")
                  td
                    b sys
                  td Información del sistema y del intérprete de Python.

                tr
                  td
                    b json
                  td Lectura y escritura de archivos JSON.

                tr(style="background-color: #F6F9F4")
                  td
                    b csv
                  td Lectura y escritura de archivos CSV.

                tr
                  td
                    b string
                  td Constantes y funciones para manipulación de cadenas.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p Estos módulos forman parte de la biblioteca estándar de Python, por lo que están disponibles sin instalaciones adicionales. Conocer su existencia evita "reinventar la rueda" y orienta al programador hacia la herramienta adecuada para cada tarea.


      p.mt-4 Para utilizar un módulo se emplea la sentencia import. Esta sentencia admite distintas formas, según se necesite importar el módulo completo, solo algunas de sus funciones o asignarle un alias más corto:

      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t6/9.svg')          
          h3.text-center Importación completa
          p Se importa todo el módulo y sus funciones se invocan anteponiendo el nombre del módulo seguido de un punto. Es la forma más explícita, porque deja claro de qué módulo proviene cada función. 
        
        .col-md.tarjeta.bg-3.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t6/10.svg')          
          h3.text-center Importación de funciones específicas
          p Se importan únicamente las funciones que se van a usar, las cuales se invocan directamente por su nombre, sin anteponer el del módulo. 
        
        .col-md.tarjeta.bg-4.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t6/11.svg')          
          h3.text-center Importación con alias
          p Se asigna al módulo un nombre más corto mediante la palabra clave as, que se utiliza luego en lugar del nombre original. Es una práctica habitual con librerías de nombre extenso o de uso muy frecuente.


      p.mt-4 Elegir entre estas tres formas depende del alcance del programa, la importación completa favorece la claridad, la importación de funciones específicas reduce la escritura, y el alias resulta útil con módulos de nombre extenso o de uso frecuente.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t6/12.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-2 Además de saber cómo importar correctamente un módulo, es necesario escribir el código siguiendo un estilo uniforme. El siguiente apartado presenta los estándares de codificación PEP 8, guía oficial para lograrlo.



      separador
      #t_6_2.titulo-segundo.color-acento-contenido
        h2 6.2. Estándares de codificación PEP 8

      p El PEP 8 es la guía de estilo oficial para la escritura de código Python. Su propósito es establecer convenciones que mejoren la legibilidad del código y faciliten la colaboración entre programadores.

      .bg--gradientBlue.p-5.bg-4
        SlyderB(:datos="datosSlyder")

      p.mt-4 Estas convenciones fortalecen la legibilidad del código y facilitan que otras personas comprendan, revisen y mantengan los programas escritos en Python.

      .tarjeta.bg-6.p-4.p-md-5.mb-5.mt-4
        .row.justify-content-around.align-items-center
          .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t6/18.svg")

          .col-md.col-lg-6

            .titulo-segundo.color-acento-contenido
              h3 Guía oficial del estándar PEP 8

            p Para fortalecer la escritura de código claro, ordenado y fácil de mantener, se recomienda consultar la guía oficial del estándar PEP 8. Este recurso orienta buenas prácticas sobre nombres de variables, uso de espacios, organización de importaciones, comentarios y estructura general del código en Python.
            
            a.boton.color-acento-botones.texto-blanco(href="https://peps.python.org/pep-0008/" target="_blank")
              span Enlace web
              i.fas.fa-file-download 

        
      p.mt-4 Seguir el estándar PEP 8 no responde a una exigencia estética, sino a una práctica que facilita el trabajo colaborativo y la sostenibilidad de un proyecto a lo largo del tiempo. Cuando distintos programadores escriben código bajo las mismas convenciones, cualquier persona del equipo puede leerlo, revisarlo o modificarlo sin necesidad de familiarizarse primero con un estilo particular.

      p Aplicar estas convenciones desde el inicio del aprendizaje aporta beneficios que van más allá de un solo programa:

      .row.justify-content-center.mt-4
        .col-lg-8
          .row.justify-content-center 
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-14").color-primario
              //-1ra pestaña
              .row(titulo="Facilita la colaboración")
                p Cuando varias personas trabajan sobre un mismo proyecto, seguir las mismas convenciones evita que cada programador nombre las variables o estructure el código a su manera. Por ejemplo, si todo el equipo aplica snake_case, cualquiera puede leer una variable como total_ventas y entender su propósito, aunque no haya participado en escribirla.
      
              //-2da pestaña  
              .row(titulo="Reduce errores")
                p Un código con indentación uniforme y espacios consistentes resulta más fácil de revisar antes de ejecutarlo. Por ejemplo, mantener siempre 4 espacios por nivel de indentación permite detectar a simple vista si una línea quedó fuera del bloque de un if o un for, antes de que Python genere un error.
              
              //-3ra pestaña
              .row(titulo="Prepara para el entorno profesional")
                p Muchas empresas de desarrollo de software exigen que el código cumpla con PEP 8 antes de aceptar una contribución. Por ejemplo, herramientas como los linters revisan automáticamente el estilo del código durante la revisión de un proyecto y señalan las líneas que no cumplen el estándar.

        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t6/19.png', alt='', style="width: 480px").m-auto
      

      p.mt-4 Con la aplicación del estándar PEP 8 se cierra el recorrido por los fundamentos de la programación en Python abordados en este componente formativo. Desde la instalación del entorno de trabajo hasta la escritura de código conforme a un estilo profesional, cada tema recorrido aportó un elemento necesario para construir programas secuenciales claros, funcionales y fáciles de mantener.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p El aprendiz cuenta ahora con las bases necesarias para declarar variables, gestionar tipos de datos, capturar y presentar información, aplicar operadores y organizar el código mediante módulos y buenas prácticas de codificación. Estos fundamentos constituyen el punto de partida para avanzar, en los siguientes componentes del programa, hacia el uso de estructuras de control y la construcción de soluciones cada vez más completas.





</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

import img1 from '@/assets/curso/temas/t6/13.png'
import img2 from '@/assets/curso/temas/t6/14.png'
import img3 from '@/assets/curso/temas/t6/15.png'
import img4 from '@/assets/curso/temas/t6/16.png'
import img5 from '@/assets/curso/temas/t6/17.png'

export default {
  name: 'Tema6',
  data() {
    return {
      mostrarIndicador: true,
      datosSlyder: [
        {
          titulo: 'Indentación',
          texto:
            'Se deben utilizar 4 espacios por nivel de indentación. No se recomienda mezclar tabulaciones con espacios. La indentación define la estructura lógica del programa; un bloque mal indentado producirá un IndentationError.',
          imagen: img1,
        },
        {
          titulo: 'Longitud de línea',
          texto:
            'Las líneas no deben superar los 79 caracteres. Si una expresión es demasiado larga, se puede dividir usando paréntesis o la barra invertida.',
          imagen: img2,
        },
        {
          titulo: 'Nomenclatura',
          texto:
            'Variables y funciones en snake_case (total_ventas). Constantes en MAYÚSCULAS (MAX_INTENTOS, IVA). Clases en CamelCase (MiClase). Nombres descriptivos, sin abreviaciones ambiguas.',
          imagen: img3,
        },
        {
          titulo: 'Espacios en blanco',
          texto:
            'Un espacio alrededor de operadores de asignación (x = 5) y comparación (x == 5). Sin espacios dentro de paréntesis. Dos líneas en blanco antes de funciones de nivel superior.',
          imagen: img4,
        },
        {
          titulo: 'Importaciones',
          texto:
            'Al inicio del archivo, en tres grupos separados: módulos estándar, módulos de terceros y módulos propios. Se prefiere import math sobre from math import *.',
          imagen: img5,
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAllUnder(this.$el)
    })
  },
  updated() {
    this.$aosRefresh()
    Prism.highlightAllUnder(this.$el)
  },
}
</script>

<style lang="sass"></style>
