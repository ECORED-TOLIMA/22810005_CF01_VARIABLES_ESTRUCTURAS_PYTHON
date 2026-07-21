<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Variables: nombre, declaración y tipos de datos

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/temas/t2/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                figure
                  img(src="@/assets/curso/temas/t2/2.svg", alt="", style="width: 80px")
                p.mt-4 Las variables son la base para almacenar y recuperar información durante la ejecución de un programa. En Python, su uso se apoya en nombres descriptivos, asignación de valores y reconocimiento del tipo de dato que contiene cada variable.

                p Comprender esta relación evita errores frecuentes al operar con números, textos o valores lógicos. Por esta razón, el tema inicia con las reglas de nombrado y continúa con la identificación de tipos, la clasificación de datos básicos y las operaciones aritméticas que permiten procesarlos.

    p.mt-4 En Python, las variables permiten almacenar y recuperar información durante la ejecución de un programa. Para comprender su uso, es necesario reconocer cómo se nombran, cómo reciben valores y cómo Python identifica automáticamente el tipo de dato asignado:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/3.svg', alt='Texto que describa la imagen')          
        h3.text-center Variable
        p Es un nombre asociado a un valor almacenado en memoria durante la ejecución. Permite recuperar y modificar información según la lógica del programa. Por ejemplo, nombre = "María" guarda una cadena para usarla después en mensajes o procesos. 
      
      .col-md.tarjeta.bg-3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/4.svg', alt='Texto que describa la imagen')          
        h3.text-center Asignación de valor
        p Corresponde al uso del signo igual (=) para asociar un dato con una variable. Por ejemplo, edad = 25 indica que la variable edad almacena un número entero que puede utilizarse en operaciones posteriores. 

      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/5.svg', alt='Texto que describa la imagen')          
        h3.text-center Tipado dinámico
        p Significa que Python identifica el tipo de dato según el valor asignado, sin declararlo previamente. Por ejemplo, precio = 2500.5 se reconoce como decimal, mientras que activo = True se interpreta como valor booleano. 
      
      .col-md.tarjeta.bg-5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/6.svg', alt='Texto que describa la imagen')          
        h3.text-center Cambio de valor
        p Una variable puede recibir un nuevo dato durante la ejecución del programa. Por ejemplo, estado = "pendiente" y luego estado = "finalizado" muestran cómo el contenido puede actualizarse según el proceso realizado.    


    p.mt-4 En conjunto, estos elementos permiten comprender cómo una variable almacena información y cómo Python interpreta el tipo de dato asignado. Su uso adecuado favorece la escritura de instrucciones claras, organizadas y fáciles de revisar durante la construcción de programas básicos.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Para evitar errores de sintaxis y facilitar la lectura del código, los nombres de variables deben cumplir reglas básicas de escritura. Estas reglas permiten construir identificadores claros, válidos y coherentes con las convenciones del lenguaje Python:


        ol.lista-ol--cuadro.mt-4
          li 
            .lista-ol--cuadro__vineta
              span.text-black 1
            p.mb-0 Debe comenzar con una letra (a-z, A-Z) o con el carácter guion bajo (_).

          hr
    
          li 
            .lista-ol--cuadro__vineta
              span.text-black 2
            p.mb-0 Puede contener letras, dígitos (0-9) y guiones bajos.

          hr
    
          li 
            .lista-ol--cuadro__vineta
              span.text-black 3
            p.mb-0 No puede comenzar con un dígito.

          hr

          li 
            .lista-ol--cuadro__vineta
              span.text-black 4
            p.mb-0 No puede ser una palabra reservada del lenguaje (if, else, for, while, class, def, return, import, True, False, None, entre otras).

        

        .row.align-items-start.mt-5
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/7.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 Aplicar estas reglas desde el inicio favorece la escritura de código legible y evita errores de sintaxis asociados a nombres mal construidos o palabras reservadas.

        p.mt-4 Las palabras reservadas son términos propios del lenguaje Python que tienen una función específica dentro de su sintaxis. Por esta razón, no deben utilizarse como nombres de variables, funciones, clases u otros identificadores. En la versión instalada de Python, la lista activa puede consultarse directamente desde el intérprete mediante el módulo keyword.

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Palabras reservadas de Python.

        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | import keyword
                | print(keyword.kwlist)
                | ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 
                |'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 
                |'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 
                |'try', 'while', 'with', 'yield']


    

    .bloque-texto-g.bg-2.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este comando muestra las palabras reservadas reconocidas por la versión de Python instalada en el equipo. Consultar esta lista permite verificar qué términos no deben usarse como nombres de variables y ayuda a evitar errores de sintaxis durante la escritura del código.

   

    p.mt-4 Para reconocer con mayor claridad qué nombres de variables acepta Python y cuáles generan error, es necesario revisar algunos criterios básicos de nomenclatura. Estos criterios ayudan a escribir identificadores válidos, evitar errores de sintaxis y mantener un código comprensible desde las primeras prácticas de programación:

    .row
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 A
            p.text-center 
              b Diferenciar mayúsculas y minúsculas
            p.text-center Python distingue entre edad, Edad y EDAD; por tanto, cada escritura representa una variable diferente.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 B
            p.text-center 
              b Usar nombres descriptivos
            p.text-center El nombre de la variable debe indicar el dato que almacena. Por ejemplo, edad_usuario es más claro que x.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 C
            p.text-center 
              b Evitar nombres inválidos
            p.text-center No se deben usar identificadores que inicien con números, contengan espacios, incluyan guion medio o coincidan con palabras reservadas del lenguaje.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-1.p-5.h-100
            .tarjeta-numerada__numero
              .h2 D
            p.text-center 
              b Comparar ejemplos concretos
            p.text-center Revisar nombres válidos e inválidos permite comprender las reglas de escritura y reconocer la causa de los errores más frecuentes al declarar variables.

    p.mt-4 Aplicar estos criterios favorece la escritura de código claro, ordenado y fácil de revisar. La Tabla 2 presenta ejemplos contrastados de nombres válidos e inválidos para fortalecer la comprensión de las reglas de nomenclatura en Python.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2.
          span Ejemplos de nombres válidos e inválidos de variables

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th(style="width: 30%") Nombre válido
                th Nombre inválido
            tbody
              tr(style="background-color: #F6F9F4")
                td 
                  b nombre
                td nombre (comienza con dígito)

              tr
                td 
                  b edad_usuario
                td edad-usuario (guion medio)

              tr(style="background-color: #F6F9F4")
                td 
                  b _total
                td class (palabra reservada)

              tr
                td 
                  b valor1
                td mi variable (espacio)

              tr(style="background-color: #F6F9F4")
                td 
                  b CONSTANTE_PI
                td import (palabra reservada)

    
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/9.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 Estos ejemplos comparativos ayudan a escribir nombres de variables claros, correctos y compatibles con el intérprete, evitando errores desde la primera asignación.

        p.mt-3 En síntesis, un nombre de variable válido en Python solo puede contener letras, números y guion bajo, no debe comenzar con un dígito, ni coincidir con una palabra reservada. Respetar estas reglas evita errores de sintaxis y da lugar a un código más claro y fácil de mantener.


    .row.justify-content-center.mt-2
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Usar nombres descriptivos desde las primeras prácticas permite reconocer con facilidad qué dato almacena cada variable. Esta decisión mejora la lectura del código, reduce errores de interpretación y facilita su revisión o mantenimiento.




    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/10.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        p Para aplicar las reglas de nomenclatura, es útil observar cómo se declaran variables con distintos tipos de datos. El siguiente ejemplo muestra nombres descriptivos asociados a cadenas de caracteres, números enteros, valores decimales y valores booleanos.

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Ejemplos de declaración y asignación de variables.

        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | >>> nombre = "María"
                | >>> edad = 25
                | >>> _total = 100.5
                | >>> es_activo = True
                | >>> PI = 3.14159  # Convención: mayúsculas para constantes


    p.mt-4 En estos ejemplos, cada variable recibe un valor mediante el operador de asignación =. Además, se observa que Python identifica automáticamente el tipo de dato según el valor asignado: texto, número entero, número decimal o valor lógico.



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Según el estándar PEP 8, se recomienda escribir los nombres de variables en snake_case, como total_ventas o nombre_completo, y reservar las mayúsculas sostenidas para constantes, como MAX_INTENTOS, IVA o PI.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/11.svg', style='width: 100px').m-auto
          
          .col
            p Las variables en Python facilitan el almacenamiento, la modificación y el uso de datos durante la ejecución de un programa. Comprender sus características permite escribir instrucciones claras, evitar errores frecuentes y reconocer cómo el lenguaje interpreta la información asignada.

    p.mt-4 Para presentar estas propiedades de forma sintética, la siguiente figura organiza las características que ayudan a comprender el uso de las variables en Python dentro de un programa secuencial.

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 2.
          span Características para comprender el uso de variables en Python 
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/temas/t2/12.svg',
            alt='Figura 2. Características para comprender el uso de variables en Python. Presenta cinco características: tipado dinámico, asignación directa, referencia a objetos, reasignación de valores y asignación múltiple. En conjunto, permiten comprender cómo Python gestiona la información durante la ejecución de un programa. '
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/temas/t2/12m.svg',
          )


    p.mt-4 En conjunto, estas características muestran que una variable en Python no es un simple contenedor fijo, sino un nombre que puede recibir, cambiar y compartir información durante la ejecución del programa. Reconocerlas permite anticipar cómo se comportará una variable en distintas situaciones y escribir código con mayor seguridad.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Para comprender cómo se comportan las variables durante la ejecución de un programa, es necesario observar ejemplos prácticos que muestren la asignación, la reasignación y el intercambio de valores. Los siguientes códigos permiten reconocer cómo Python identifica automáticamente el tipo de dato, actualiza el contenido de una variable y facilita la asignación de varios valores en una sola instrucción.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/13.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Asignación múltiple e intercambio de valores en Python

        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | # Asignación múltiple
                | >>> a, b, c = 1, 2, 3
                | >>> print(a, b, c)
                | 1 2 3
                | # Intercambio de valores
                | >>> a, b = b, a
                | >>> print(a, b)
                | 2 1


    p.mt-4 Una vez comprendido que las variables pueden recibir, cambiar e intercambiar valores durante la ejecución del programa, es necesario reconocer qué tipo de dato almacena cada una. Esta identificación permite validar si una variable contiene un número, una cadena de caracteres, un valor lógico u otro tipo de objeto, lo cual facilita la escritura de operaciones correctas y evita errores durante el procesamiento de la información.


    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Identificación del tipo de variable

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/temas/t2/14.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                figure
                  img(src="@/assets/curso/temas/t2/15.svg", alt="", style="width: 80px")

                p.mt-2 Identificar el tipo de dato de una variable permite comprobar qué clase de información almacena durante la ejecución del programa. Esta verificación es importante porque Python interpreta de manera diferente un número entero, un valor decimal, una cadena de caracteres o un valor lógico.

                p En Python, las funciones type() e isinstance() permiten revisar el tipo de dato asociado a una variable. La función type() devuelve el tipo del objeto consultado, mientras que isinstance() permite comprobar si un valor pertenece a un tipo determinado, considerando también relaciones de herencia entre clases.


    p.mt-4 Para comprender su utilidad, es necesario diferenciar el propósito de cada función y reconocer en qué situaciones conviene aplicarlas:

    .row.justify-content-center 
      .col-lg-6
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Función type()")
            .col-md-12.mb-4.mb-md-0
              p Permite conocer el tipo exacto de un objeto. Por ejemplo, si se declara edad = 25, la instrucción type(edad) devuelve &lt;class 'int'&gt;, porque el valor almacenado corresponde a un número entero que puede usarse en operaciones aritméticas.

          .row(numero="2" titulo="Función isinstance()")
            .col-md-12.mb-4.mb-md-0
              p Permite verificar si un valor pertenece a un tipo de dato específico. Por ejemplo, isinstance(edad, int) devuelve True cuando edad contiene un número entero, lo cual resulta útil antes de realizar cálculos o validar datos ingresados. 

          .row(numero="3" titulo="Validación de datos")
            .col-md-12.mb-4.mb-md-0
              p Estas funciones ayudan a revisar si una variable contiene el tipo esperado antes de procesarla. Por ejemplo, antes de sumar una cantidad y un precio, puede comprobarse que ambos valores sean numéricos para evitar errores durante la operación. 

          .row(numero="4" titulo="Uso de dir()")
            .col-md-12.mb-4.mb-md-0
              p Permite explorar nombres de atributos y métodos asociados a un objeto. Por ejemplo, dir(str) muestra operaciones disponibles para cadenas, como lower, replace o split; sin embargo, su resultado es una guía de exploración, no una lista estrictamente completa.

      .col-lg-6.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/t2/16.png', alt='', style="width: 100%").m-auto


    p.mt-4 El uso de type(), isinstance() y dir() fortalece la revisión del código, porque permite reconocer la naturaleza de los datos y explorar operaciones disponibles. Esta práctica ayuda a prevenir errores y facilita la escritura de programas más claros y confiables.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Asignación múltiple e intercambio de valores en Python

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/17.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | edad = 25
                | precio = 3.14
                | mensaje = "Hola mundo"
                | activo = True
                |
                | print(type(edad))
                | print(type(precio))
                | print(type(mensaje))
                | print(type(activo))
                |
                | print(isinstance(edad, int))
                | print(isinstance(precio, float))
                | print(isinstance(mensaje, str))
                | print(isinstance(activo, bool))



    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Resultado esperado

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/18.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | &lt;class 'int'&gt;
              | &lt;class 'float'&gt;
              | &lt;class 'str'&gt;
              | &lt;class 'bool'&gt;
              | True
              | True
              | True
              | True



    p.mt-4 Este ejemplo muestra que Python reconoce el tipo de dato según el valor asignado a cada variable. Además, permite comprobar si una variable pertenece a un tipo específico, lo cual resulta útil cuando se requiere validar información antes de realizar cálculos, comparaciones o conversiones.


    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/19.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Exploración de métodos con dir()
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | print(dir(str))

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Exploración de métodos con dir()
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | 'capitalize', 'casefold', 'center', 'count', 'encode',
              | 'endswith', 'find', 'format', 'index', 'isalnum',
              | 'isalpha', 'lower', 'replace', 'split', 'strip', 'upper']

    p.mt-4 La función dir() permite explorar nombres asociados a un objeto, como métodos y atributos. En este caso, al consultar dir(str), se identifican operaciones disponibles para cadenas de caracteres. Esta exploración sirve como apoyo para reconocer qué acciones pueden aplicarse a cada tipo de dato.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Después de reconocer cómo se identifica el tipo de dato de una variable, es necesario estudiar los datos básicos más utilizados en Python. Esta base permite comprender cómo funcionan los números, los valores booleanos y las cadenas de caracteres, así como las operaciones que pueden realizarse con cada uno de ellos.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Datos numéricos, booleanos y cadenas de caracteres

    figure
      img(src='@/assets/curso/temas/t2/20.png', alt='', style="width: 1280px").m-auto

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/21.svg', style='width: 100px').m-auto
          
          .col
            p Los tipos de datos en Python permiten representar la información que utiliza un programa durante su ejecución. Cada tipo cumple una función específica y orienta las operaciones que pueden realizarse con los valores almacenados, como calcular, comparar, validar, recorrer o mostrar información.


    p.mt-4 Para comprender su uso inicial, es útil reconocer las categorías más frecuentes mediante una definición breve y un ejemplo de asignación. Esta revisión facilita la selección del tipo de dato adecuado según la naturaleza de la información que se necesita procesar:


    .row.justify-content-center.mt-4
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Datos numéricos")
            .col-md-12.mb-4.mb-md-0
              p Representan cantidades usadas en cálculos. Incluyen enteros (int), decimales (float) y complejos (complex). Por ejemplo, edad = 25, precio = 1250.50 y z = 5 + 3j almacenan valores numéricos con diferentes niveles de precisión. 

          .row(numero="2" titulo="Datos booleanos")
            .col-md-12.mb-4.mb-md-0
              p Representan valores de verdad. Solo admiten True o False, por lo que son útiles para validar condiciones. Por ejemplo, activo = True puede indicar que un usuario está habilitado, mientras que pago_realizado = False señala una acción pendiente. 

          .row(numero="3" titulo="Cadenas de caracteres")
            .col-md-12.mb-4.mb-md-0
              p Representan información textual mediante el tipo str. Se emplean para nombres, mensajes, códigos o descripciones. Por ejemplo, nombre = "María" almacena texto que puede mostrarse, compararse, transformarse o combinarse con otros valores dentro del programa. 

          .row(numero="4" titulo="Secuencias")
            .col-md-12.mb-4.mb-md-0
              p Agrupan varios elementos en un orden determinado. Incluyen listas (list), tuplas (tuple) y rangos (range). Por ejemplo, notas = [4.0, 3.8, 5.0] permite almacenar varias calificaciones para consultarlas o recorrerlas durante la ejecución. 

          .row(numero="5" titulo="Conjuntos")
            .col-md-12.mb-4.mb-md-0
              p Almacenan elementos únicos mediante el tipo set. Son útiles para eliminar duplicados y comparar grupos de datos. Por ejemplo, ciudades = {"Cali", "Bogotá", "Cali"} conserva cada ciudad una sola vez, aunque se haya escrito repetida. 

          .row(numero="6" titulo="Mapas o diccionarios")
            .col-md-12.mb-4.mb-md-0
              p Almacenan información en pares clave-valor mediante el tipo dict. Facilitan asociar un dato con su significado. Por ejemplo, persona = {"nombre": "Ana", "edad": 30} permite consultar la edad o el nombre usando sus claves. 

          .row(numero="7" titulo="Valor nulo")
            .col-md-12.mb-4.mb-md-0
              p Representa ausencia de valor mediante None. Se utiliza cuando una variable aún no tiene información asignada. Por ejemplo, resultado = None puede indicar que el dato será calculado o recibido en una etapa posterior del programa.


      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/t2/22.png', alt='', style="width: 100%").m-auto



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/temas/t2/23.svg', style='width: 180px').m-auto
                
                .col
                  p Reconocer estas categorías permite comprender cómo Python organiza la información antes de procesarla. Esta base favorece la escritura de instrucciones coherentes, evita errores de tipo y facilita la selección de estructuras adecuadas para cada necesidad del programa.


    p.mt-4 La siguiente tabla reúne los tipos de datos más utilizados en Python, su palabra clave y un ejemplo sencillo de asignación. Esta síntesis funciona como una referencia rápida para comparar las categorías y reconocer cómo se declara cada valor dentro del lenguaje.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3.
          span Resumen de los tipos de datos en Python

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th(style="width: 30%") Tipo de dato
                th Palabra clave
                th Uso principal
                th Ejemplo
            tbody
              tr(style="background-color: #F6F9F4")
                td 
                  b Entero
                td int
                td Representa números sin parte decimal.
                td edad = 25

              tr
                td 
                  b Flotante
                td float
                td Representa números con parte decimal.
                td precio = 1250.50

              tr(style="background-color: #F6F9F4")
                td 
                  b Complejo
                td complex
                td Representa números con parte real e imaginaria.
                td z = 5 + 3j

              tr
                td 
                  b Booleano
                td bool
                td Representa valores de verdad.
                td activo = True

              tr(style="background-color: #F6F9F4")
                td 
                  b Cadena de caracteres
                td str
                td Representa texto.
                td nombre = "María"

              tr
                td 
                  b Valor nulo
                td NoneType
                td Representa ausencia de valor.
                td dato = None


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Esta clasificación facilita la selección del tipo de dato adecuado según la información que se necesita almacenar, calcular, comparar o mostrar. Además, permite evitar errores de tipo al momento de combinar valores dentro de una operación.


    .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Datos numéricos

    p Los datos numéricos permiten representar cantidades y realizar operaciones matemáticas. En Python, se utilizan principalmente los enteros, los flotantes y los complejos. Los enteros tienen precisión ilimitada según la memoria disponible; los flotantes representan números reales con precisión finita, y los complejos incluyen una parte real y una parte imaginaria.

    .row
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-12.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t2/24.svg', style="width: 116px").m-auto
          h3.text-center Enteros (int)
          p.mb-0.text-center  Representan números sin parte decimal. Se utilizan para contar elementos, edades, cantidades o posiciones. Por ejemplo, cantidad = 8 almacena un número entero que puede emplearse en sumas, restas, multiplicaciones o divisiones dentro de un programa. 

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-12.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t2/25.svg', style="width: 116px").m-auto
          h3.text-center Flotantes (float)
          p.mb-0.text-center  Representan números con parte decimal. Son útiles para precios, promedios, temperaturas, porcentajes o medidas. Por ejemplo, precio = 1250.50 almacena un valor decimal que puede utilizarse en cálculos donde se requiere mayor detalle numérico. 

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.bg-12.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t2/26.svg', style="width: 116px").m-auto
          h3.text-center Complejos (complex)
          p.mb-0.text-center  Representan números formados por una parte real y una parte imaginaria. Se utilizan en contextos matemáticos o científicos específicos. Por ejemplo, z = 5 + 3j permite acceder a la parte real con z.real y a la imaginaria con z.imag.



    .row.justify-content-center.mt-4
      .col-lg-10
        p Los datos numéricos permiten representar cantidades con distintos niveles de complejidad como los valores enteros, decimales o complejos. Reconocer estas diferencias facilita la selección del tipo adecuado para realizar cálculos, expresar medidas, representar resultados matemáticos y evitar errores al operar con valores que tienen naturaleza distinta.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/27.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        p Las operaciones con números enteros permiten observar cómo Python calcula valores, asigna resultados a variables y muestra información en pantalla. En el siguiente código se realiza una suma a partir de una variable inicial y luego se aplica la función round() para redondear el resultado de una división.

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Operaciones con números enteros
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> v = -3
              | >>> m = v + 8
              | >>> print(m)
              | 5
              | >>> z = round(m/2)
              | >>> print(z)
              | 2


    p.mt-4 Además de la forma decimal habitual, Python permite escribir números enteros en bases numéricas como binaria, octal y hexadecimal. Estas representaciones son útiles para comprender cómo un mismo valor puede expresarse de diferentes maneras en contextos relacionados con sistemas, memoria o procesamiento interno.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/28.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Representación en binario, octal y hexadecimal
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> decimal = 8
              | >>> binario = 0b1101   # 13
              | >>> octal = 0o11       # 9
              | >>> hexadecimal = 0xc  # 12

    p Python también ofrece funciones integradas para convertir valores entre bases numéricas. Estas funciones permiten transformar un número decimal a binario, octal o hexadecimal, así como convertir una cadena escrita en una base específica a su equivalente decimal.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/29.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Conversión entre bases numéricas
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> bin(10)          # '0b1010'
              | >>> oct(10)          # '0o12'
              | >>> hex(10)          # '0xa'
              | >>> int('1010', 2)   # 10 (binario a decimal)

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p En Python, los números enteros son inmutables. Esto significa que cuando realizas una operación sobre una variable entera, no estás modificando el objeto original, sino creando uno nuevo con el resultado de la operación.



    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/30.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        p Los números de punto flotante permiten representar valores decimales. Sin embargo, su precisión es limitada debido a la forma como se almacenan internamente en el computador. Por esta razón, algunas operaciones pueden mostrar resultados con más cifras decimales de las esperadas.

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Precisión de los números flotantes
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> real = 1.1 + 2.2
              | >>> print(real)
              | 3.3000000000000003
              | >>> print(round(real, 1))
              | 3.3



    .bloque-texto-g.bg-2.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El resultado anterior muestra que los números flotantes pueden presentar pequeñas variaciones de precisión. Cuando se requiere exactitud en cálculos financieros o monetarios, se recomienda utilizar el módulo decimal, ya que permite controlar mejor la representación de valores decimales.


    p.mt-4 La notación científica permite escribir números muy grandes o pequeños de manera compacta. En Python, esta forma de representación utiliza la letra e para indicar potencias de diez, lo cual resulta útil en cálculos científicos, físicos o estadísticos.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/32.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Notación científica en Python
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | # Notación científica
              | >>> avogadro = 6.022e23
              | >>> micro = 1.5e-6

    .row.justify-content-center
      .col-lg-10
        p Los números complejos se representan en Python con el tipo complex. Estos valores incluyen una parte real y una parte imaginaria, identificada con la letra j. El siguiente código permite consultar cada parte del número y calcular su módulo mediante la función abs().


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/33.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Operaciones con números complejos
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> complejo = 5+3j
              | >>> complejo.real    # 5.0
              | >>> complejo.imag    # 3.0
              | >>> abs(complejo)    # 5.83 (módulo)


    p A diferencia de otros lenguajes, donde un entero puede estar limitado a 32 o 64 bits, en Python los enteros tienen precisión arbitraria. En la práctica, esto significa que pueden crecer según la memoria disponible en el equipo.


    .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Datos booleanos

    p Los datos booleanos permiten representar condiciones dentro de un programa. En Python se expresan con el tipo bool y solo tienen dos valores posibles: True, cuando una condición se cumple, y False, cuando no se cumple.

    .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/34.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center John Doe
                p.mb-0 moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/35.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center John Doe
                p.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/36.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Greatness isn’t the height
                p.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.


    p Estos valores permiten tomar decisiones dentro del programa, especialmente cuando se trabajan condiciones, validaciones o estructuras de control. Reconocer qué elementos se interpretan como verdaderos o falsos ayuda a evitar errores lógicos en la ejecución.


    .row.justify-content-center
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/37.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 La declaración de valores booleanos permite comprobar cómo Python reconoce los tipos bool y NoneType. En el siguiente código se asignan valores lógicos y se verifica su tipo mediante la función type().


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/38.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Declaración de variables booleanas y None
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> a = False
              | >>> b = True
              | >>> type(a)
              | &lt;class 'bool'&gt;
              | >>> c = None
              | >>> type(c)
              | &lt;class 'NoneType'&gt;

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/39.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Conversión a booleano con bool()
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> bool(0)       # False
              | >>> bool(1)       # True
              | >>> bool("")      # False
              | >>> bool("Hola")  # True
              | >>> bool([])      # False
              | >>> bool([1, 2])  # True
      

    p El código muestra que los valores vacíos o nulos devuelven False, mientras que los valores con contenido devuelven True. Esta regla es fundamental al validar formularios, entradas del usuario o estructuras de datos antes de procesarlas.


    .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cadenas de caracteres


    p Las cadenas de caracteres permiten representar texto en Python. Se identifican con el tipo str y pueden contener letras, números, signos, espacios o símbolos. Se escriben entre comillas simples, dobles o triples, según la necesidad del contenido.

    .row
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-12.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t2/40.svg', style="width: 116px").m-auto
          h3.text-center Texto entre comillas
          p.mb-0.text-center  Una cadena puede escribirse con comillas simples o dobles. Por ejemplo, nombre = "María" almacena texto y permite mostrarlo, compararlo o combinarlo con otros valores. 

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-12.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t2/41.svg', style="width: 116px").m-auto
          h3.text-center Comillas dentro del texto
          p.mb-0.text-center  Cuando una cadena contiene comillas internas, se pueden combinar comillas simples y dobles o usar barra invertida (\) para escaparlas. Esto permite que Python las interprete como parte del texto. 

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.bg-12.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t2/42.svg', style="width: 116px").m-auto
          h3.text-center Cadenas inmutables
          p.mb-0.text-center  Las cadenas no se modifican directamente. Cuando se transforma un texto, Python crea una nueva cadena con el resultado. Esta característica permite conservar el valor original y generar nuevas versiones del contenido.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Estas características permiten trabajar con datos textuales de manera clara y segura. Su comprensión facilita la construcción de mensajes, la validación de entradas y la transformación de información escrita dentro de un programa.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/43.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        p El siguiente código muestra diferentes formas de incluir comillas dentro de una cadena. Esta práctica permite escribir textos que contienen expresiones entre comillas sin generar errores de sintaxis.
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Escritura de cadenas con comillas
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> saludo1 = 'Hola "María"'
              | >>> saludo2 = 'Hola \'María\''
              | >>> saludo3 = "Hola 'María'"
              | >>> print(saludo1)
              | Hola "María"  

    p.mt-4 El uso combinado de comillas simples, dobles o caracteres de escape permite escribir cadenas que incluyen comillas dentro del texto. Esta práctica evita errores de sintaxis y facilita la presentación de mensajes, nombres o expresiones textuales dentro de un programa.

    .row.bg-13
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              .row.align-items-start
                .col-lg-1.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/temas/t2/44.svg', style='width: 100px').m-auto
                
                .col
                  p Además de combinar comillas dentro de una cadena, es necesario reconocer cómo Python representa y consulta el texto carácter por carácter. Para ello, conviene tener en cuenta lo siguiente:

              .row.align-items-center.bg-base.bg-r8.p-4
                .col-12
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span.text-black 1
                      p.mb-0 En Python, un carácter individual no es un tipo de dato aparte: se representa como una cadena de longitud uno.
                    hr

                    li 
                      .lista-ol--cuadro__vineta
                        span.text-black 2
                      p.mb-0 Las cadenas permiten consultar partes específicas del texto mediante índices y <em>slicing</em>.
                    hr
              
                    li 
                      .lista-ol--cuadro__vineta
                        span.text-black 3
                      p.mb-0 Las cadenas son inmutables, pero permiten generar nuevas cadenas mediante concatenación, repetición, acceso por índice y <em>slicing</em>.


    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Estas reglas explican por qué es posible extraer una letra, una palabra o un fragmento de una cadena sin alterar el texto original. Python siempre genera una nueva cadena a partir de la que ya existe.

        p.mt-4 El siguiente código muestra cómo consultar caracteres y obtener fragmentos de una cadena.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/45.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Acceso por índice y <em>slicing</em> en cadenas
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | # Acceso por índice
              | >>> texto = "Python"
              | >>> texto[0]       # 'P'
              | >>> texto[-1]      # 'n'
              | 
              | # Slicing
              | >>> texto[0:3]     # 'Pyt'
              | >>> texto[2:]      # 'thon'
              | >>> texto[::-1]    # 'nohtyP' (invertida)


    .row.justify-content-center.mt-4
      .col-lg-10
        p Las cadenas de caracteres incluyen métodos integrados que facilitan la transformación y organización del texto. Estos métodos se aplican escribiendo un punto después de la cadena y luego el nombre de la acción que se desea ejecutar, como convertir a mayúsculas, limpiar espacios, reemplazar palabras, dividir contenido o contar caracteres.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/46.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Métodos de cadenas de caracteres
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | # Métodos comunes
              | >>> "hola mundo".upper()               # 'HOLA MUNDO'
              | >>> "HOLA MUNDO".lower()          # 'hola mundo'
              | >>> "hola mundo".title()                  # 'Hola Mundo'
              | >>> "  espacios  ".strip()                  # 'espacios'
              | >>> "hola mundo".replace("mundo", "Python")
              | 'hola Python'
              | >>> "hola,mundo,python".split(",")
              | ['hola', 'mundo', 'python']
              | >>> len("Python")                              # 6

    p.mt-4 El uso de métodos de cadena permite preparar textos antes de mostrarlos, compararlos o almacenarlos. Por ejemplo, se pueden limpiar espacios innecesarios, unificar el uso de mayúsculas y minúsculas, reemplazar palabras o separar información escrita en una misma línea.

    .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/47.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El resultado anterior muestra que los números flotantes pueden presentar pequeñas variaciones de precisión. Cuando se requiere exactitud en cálculos financieros o monetarios, se recomienda utilizar el módulo decimal, ya que permite controlar mejor la representación de valores decimales.


    p.mt-4 Una vez reconocidos los tipos de datos básicos y algunas operaciones aplicadas a cadenas de caracteres, es necesario estudiar cómo Python procesa los valores numéricos. Las operaciones aritméticas permiten realizar cálculos, combinar variables y obtener resultados mediante reglas de precedencia que determinan el orden de ejecución de cada expresión.


    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3. Operaciones aritméticas

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/temas/t2/48.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                figure
                  img(src="@/assets/curso/temas/t2/49.svg", alt="", style="width: 90px")

                p.mt-2 Las operaciones aritméticas permiten realizar cálculos matemáticos con valores numéricos en Python. Estas operaciones son necesarias para sumar cantidades, restar valores, multiplicar datos, dividir resultados, calcular residuos o elevar números a una potencia dentro de un programa.

                p En Python, los operadores aritméticos se aplican sobre datos numéricos como int, float y complex. Cuando se combinan tipos diferentes, el lenguaje ajusta el resultado según la jerarquía numérica: al operar un entero con un flotante, el resultado es flotante; al incluir un complejo, el resultado conserva el tipo complejo.


    p.mt-4 Para comprender el uso de estos operadores, es necesario reconocer qué función cumple cada uno dentro de una expresión matemática:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/50.svg', style="width:128px").m-auto
        p.text-center
            b Suma (+)
        p.text-center.mb-0 Permite adicionar dos valores numéricos. Por ejemplo, 5 + 3 devuelve 8, resultado útil para acumular cantidades, calcular totales o actualizar valores dentro de una variable. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/51.svg', style="width:128px").m-auto
        p.text-center
            b Resta (-)
        p.text-center.mb-0 Permite calcular la diferencia entre dos valores. Por ejemplo, 10 - 4 devuelve 6, operación frecuente cuando se comparan cantidades, descuentos, saldos o resultados parciales. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/52.svg', style="width:128px").m-auto
        p.text-center
            b Multiplicación (*)
        p.text-center.mb-0 Permite obtener el producto entre dos valores. Por ejemplo, 4 * 3 devuelve 12, resultado útil para calcular costos, repeticiones, áreas o cantidades acumuladas. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/53.svg', style="width:128px").m-auto
        p.text-center
            b División real (/)
        p.text-center.mb-0 Permite dividir dos valores y devuelve un resultado decimal. Por ejemplo, 7 / 2 devuelve 3.5, incluso cuando los números iniciales son enteros. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/54.svg', style="width:128px").m-auto
        p.text-center
            b División entera (//)
        p.text-center.mb-0 Permite dividir dos valores y conservar solo la parte entera del resultado. Por ejemplo, 7 // 2 devuelve 3, descartando los decimales. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/55.svg', style="width:128px").m-auto
        p.text-center
            b Módulo (%)
        p.text-center.mb-0 Permite obtener el residuo de una división. Por ejemplo, 7 % 2 devuelve 1, operación útil para verificar si un número es par o impar. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/56.svg', style="width:128px").m-auto
        p.text-center
            b Potencia (**)
        p.text-center.mb-0 Permite elevar un número a un exponente. Por ejemplo, 2 ** 3 devuelve 8, porque representa dos multiplicado por sí mismo tres veces.
              

    p.mt-4 El reconocimiento de estos operadores facilita la construcción de expresiones matemáticas claras y evita confusiones al interpretar los resultados. Su uso adecuado permite resolver cálculos básicos, validar operaciones numéricas y preparar datos para procesos posteriores.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/57.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        p El bloque de código permite observar cómo Python ejecuta operaciones aritméticas y cómo cambia el tipo de resultado cuando se combinan valores enteros, flotantes o complejos. Este ejemplo también muestra operadores frecuentes como potencia, división entera y módulo.
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Aritmética y jerarquía de tipos numéricos
        .tarjeta-codigo
          pre.language-python(language="python").mb-5
            code
              | >>> a = 2**3        # 8 (potencia)
              | >>> c = 31 // 4    # 7 (división entera)
              | >>> d = 31 % 4    # 3 (módulo)
              | >>> 1 + 2.0          # 3.0
              | >>> 2+3j + 5.7    # (7.7+3j)            # 6


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La secuencia anterior integra operaciones aritméticas frecuentes en Python: potencia (**), división entera (//), módulo (%) y combinación de tipos numéricos. Al operar un entero con un flotante, el resultado se expresa como float; al incluir un número complejo, se conserva la parte real e imaginaria del valor obtenido.


    p.mt-4 Para aplicar correctamente las operaciones aritméticas en un programa, conviene revisar tres aspectos básicos antes de escribir o ejecutar una expresión:

    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 A
          p.text-center 
            b Identificar el tipo de dato
          p.text-center Verificar si los valores son enteros, flotantes o complejos, ya que el tipo influye en el resultado.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 B
          p.text-center 
            b Reconocer el operador adecuado
          p.text-center Seleccionar suma, resta, multiplicación, división, módulo o potencia según el cálculo que se requiere realizar.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 C
          p.text-center 
            b Revisar la precedencia
          p.text-center Comprobar el orden en que Python evaluará la expresión, especialmente cuando se combinan varios operadores.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-1.p-5.h-100
          .tarjeta-numerada__numero
            .h2 D
          p.text-center 
            b Validar el resultado
          p.text-center Comparar la salida obtenida con el cálculo esperado para detectar posibles errores de escritura o interpretación.


    p.mt-4 La comprensión de las operaciones aritméticas permite procesar valores individuales. Con esta base, el estudio de las estructuras de datos compuestas amplía la capacidad del programa para agrupar varios elementos, recorrerlos, organizarlos y transformarlos según las necesidades del proceso.


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/58.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Después de estudiar las variables, los tipos de datos básicos y las operaciones aritméticas, es necesario avanzar hacia formas más organizadas de almacenar información. En Python, las estructuras de datos compuestas permiten reunir varios valores dentro de una misma variable, lo que facilita representar grupos de elementos, consultar datos relacionados y procesar información de manera más eficiente.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/59.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 Las estructuras de datos compuestas permiten pasar de datos individuales a conjuntos organizados de información. Su uso adecuado facilita la escritura de programas más claros, flexibles y útiles para resolver situaciones reales.

        p.mt-4 Una vez comprendido cómo Python procesa operaciones con valores numéricos individuales, es necesario avanzar hacia estructuras que permitan almacenar y organizar varios datos dentro de una misma variable. Este paso facilita el trabajo con listas de elementos, colecciones, rangos y asociaciones clave-valor, que serán abordados en el siguiente apartado.
     












</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

export default {
  name: 'Tema2',
  data() {
    return {
      mostrarIndicador: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
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
