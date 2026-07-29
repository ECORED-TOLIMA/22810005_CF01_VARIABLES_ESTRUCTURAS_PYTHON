<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Entrada y salida de datos

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/1.png', alt='', style="width: 490px").m-auto
        .col-lg-7
          .row.justify-content-center.mt-4
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color1.p-4
                    p La entrada y la salida de datos permiten que un programa interactúe con la persona que lo utiliza. A través de input(), Python captura información durante la ejecución; mediante print(), presenta mensajes, resultados y datos procesados en la consola.

          .row.align-items-start.mt-4
            .col-lg-2.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t4/2.svg', style='width: 90px').m-auto
            
            .col
              p Para comprender este proceso, es necesario diferenciar las operaciones que permiten recibir información, mostrar resultados, convertir valores y organizar la salida. Estos conceptos fortalecen la construcción de programas secuenciales claros, verificables y fáciles de interpretar.

      p.mt-4 A continuación, se presentan los conceptos básicos que orientan la entrada y salida de datos en Python:

      .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/t4/3.svg')          
            h3.text-center Entrada de datos
            p Es el proceso mediante el cual un programa recibe información durante su ejecución. En Python se realiza con input(), función que captura texto y permite iniciar cálculos, decisiones o mensajes personalizados según la necesidad planteada.
          
          .col-md.tarjeta.bg-3.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/t4/4.svg')          
            h3.text-center Salida de datos
            p Es la operación que permite mostrar al usuario los resultados producidos por el programa. En Python se usa print(), función que presenta textos, números y mensajes formateados en consola de forma clara durante la ejecución.

          .col-md.tarjeta.bg-4.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/t4/5.svg')          
            h3.text-center Conversión de tipos
            p Consiste en transformar un dato de un tipo a otro para usarlo correctamente en operaciones. Como input() siempre devuelve texto, funciones como int() y float() permiten convertir valores antes de calcular o comparar información ingresada.
          
          .col-md.tarjeta.bg-5.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/t4/6.svg')          
            h3.text-center Formato de salida
            p Hace referencia a la forma en que se presentan los resultados para facilitar su lectura. En Python pueden emplearse f-strings, format() o separadores para organizar valores, unidades y mensajes comprensibles en consola, durante la ejecución.

      p.mt-4 Estos conceptos permiten reconocer que la interacción básica con el usuario no termina al capturar un dato: también exige validar su tipo, procesarlo de manera adecuada y presentar una respuesta comprensible. Con esta base, se aborda la función input() como primer mecanismo de entrada estándar en Python.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p Capturar un dato es apenas el primer paso. También es necesario validarlo, procesarlo y presentarlo de forma comprensible para el usuario. El siguiente apartado profundiza en la función input(), como el primer mecanismo de entrada estándar en Python.

      separador
      #t_4_1.titulo-segundo.color-acento-contenido
        h2 4.1. Entradas estándar: concepto y función input()

      .row.align-items-center.justify-content-center
        .col-lg-12
          .row.justify-content-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/temas/t4/7.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                .col-lg

                  figure
                    img(src="@/assets/curso/temas/t4/8.svg", alt="", style="width: 90px")

                  p.mt-2  La entrada estándar permite que un programa reciba información durante su ejecución. En Python, este proceso se realiza mediante la función input(), la cual muestra un mensaje orientador en pantalla y espera que se ingrese un dato desde el teclado.

                  p El valor capturado con input() siempre se recibe como una cadena de caracteres (str), aunque se escriba un número. Por esta razón, cuando el dato se necesita para realizar cálculos, debe convertirse al tipo correspondiente mediante funciones como int() o float().


      p.mt-4 Para comprender el uso de la entrada estándar en Python, se deben tener en cuenta los siguientes aspectos:

      .row.justify-content-center 
        .col-lg-6
          LineaTiempoD.color-primario.linea-bold
            .row(numero="1" titulo="Captura de texto")
              .col-md-12.mb-4.mb-md-0
                p La función input() permite recibir nombres, ciudades, códigos o mensajes escritos por el usuario. Por ejemplo, nombre = input("Ingrese su nombre: ") guarda el dato como texto y permite mostrarlo posteriormente con print(nombre). 
      
            .row(numero="2" titulo="Conversión a entero")
              .col-md-12.mb-4.mb-md-0
                p Cuando se necesita trabajar con edades, cantidades o conteos, el valor capturado debe convertirse con int(). Por ejemplo, edad = int(input("Ingrese su edad: ")) permite usar la edad en operaciones numéricas. 
      
            .row(numero="3" titulo="Conversión a flotante")
              .col-md-12.mb-4.mb-md-0
                p Cuando se capturan datos con decimales, como estaturas, precios, promedios o medidas, se utiliza float(). Por ejemplo, estatura = float(input("Ingrese su estatura: ")) convierte el dato ingresado en un número decimal. 

            .row(numero="4" titulo="Validación de entrada")
              .col-md-12.mb-4.mb-md-0
                p Si se ingresa un valor que no puede convertirse al tipo esperado, Python genera un error. Por ejemplo, al escribir letras en una entrada que espera un número, puede generarse un ValueError. 
      
        .col-lg-6.d-none.d-lg-block
          figure(data-aos="fade-up")
            img(src='@/assets/curso/temas/t4/9.png', alt='', style="width: 100%").m-auto



      p.mt-4 Estas acciones permiten construir programas interactivos que solicitan datos, los transforman y los preparan para realizar operaciones. El uso adecuado de input() fortalece la lógica secuencial del programa, porque permite pasar de datos fijos escritos en el código a información ingresada durante la ejecución.


      .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Código de captura de datos con input()

      p El siguiente código muestra cómo capturar un nombre, una edad y una estatura. Este ejemplo permite observar que el nombre se conserva como texto, mientras que la edad y la estatura se convierten a tipos numéricos para poder procesarse correctamente.

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/10.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Captura de texto y conversión de datos con input()
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | # Entrada básica de datos
                  | nombre = input("Ingrese su nombre: ")
                  | print(nombre)
                  | print(type(nombre))
                  |
                  | edad = int(input("Ingrese su edad: "))
                  | print(edad)
                  | print(type(edad))
                  |
                  | estatura = float(input("Ingrese su estatura: "))
                  | print(estatura)
                  | print(type(estatura))


      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t4/11.png', alt='', style="width: 490px").m-auto
        .col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Resultado esperado
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | Ingrese su nombre: Maria
                  | Maria
                  | &lt;class 'str'&gt;
                  | Ingrese su edad: 25
                  | 25
                  | &lt;class 'int'&gt;
                  | Ingrese su estatura: 1.75
                  | 1.75
                  | &lt;class 'float'&gt;


      p El resultado permite verificar que Python reconoce cada dato según la conversión aplicada. El nombre queda como str, la edad se transforma en int y la estatura se convierte en float. Esta diferencia es importante porque cada tipo de dato permite realizar operaciones distintas.

      .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Código. Programa secuencial para calcular un promedio

      p La función input() también se puede utilizar dentro de programas secuenciales que reciben varios datos, realizan cálculos y muestran un resultado. En el siguiente caso, se capturan tres notas, se convierten a valores decimales y se calcula el promedio académico.

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/12.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Programa secuencial: cálculo de promedio
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | # Programa: calcular promedio de tres notas
                  |
                  | nota1 = float(input("Ingrese la primera nota: "))
                  | nota2 = float(input("Ingrese la segunda nota: "))
                  | nota3 = float(input("Ingrese la tercera nota: "))
                  |
                  | promedio = (nota1 + nota2 + nota3) / 3
                  |
                  | print(f"El promedio es: {promedio:.1f}")

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Resultado esperado
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | Ingrese la primera nota: 4.5
                  | Ingrese la segunda nota: 3.8
                  | Ingrese la tercera nota: 4.2
                  | El promedio es: 4.2

          p Este ejemplo integra entrada de datos, conversión de tipos, operación aritmética y salida formateada. La expresión f"El promedio es: {promedio:.1f}" permite presentar el resultado con una cifra decimal, lo que mejora la claridad del mensaje mostrado en pantalla.

      .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Código de programa secuencial: registro académico

      p El siguiente ejemplo integra varios tipos de datos en un mismo programa. Se captura información de un estudiante, se calculan notas ponderadas y se determina si aprueba según el promedio obtenido. Este caso permite observar cómo input(), float(), operadores aritméticos y operadores de comparación trabajan de forma conjunta.


      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Registro académico
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | # Programa: registro académico de un estudiante
                  | print("=== Registro Académico ===")
                  |
                  | nombre = input("Nombre del estudiante: ")
                  | codigo = input("Código del estudiante: ")
                  | nota1 = float(input("Nota primer corte (0 a 5): "))
                  | nota2 = float(input("Nota segundo corte (0 a 5): "))
                  | nota3 = float(input("Nota tercer corte (0 a 5): "))
                  | promedio = (nota1 * 0.30) + (nota2 * 0.30) + (nota3 * 0.40)
                  | aprueba = promedio >= 3.0
                  | print()
                  | print(f"Estudiante: {nombre}")
                  | print(f"Código: {codigo}")
                  | print(f"Nota 1: {nota1:.1f} (30 %)")
                  | print(f"Nota 2: {nota2:.1f} (30 %)")
                  | print(f"Nota 3: {nota3:.1f} (40 %)")
                  | print(f"Promedio: {promedio:.2f}")
                  | print(f"Aprueba: {aprueba}")


      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Asignación múltiple e intercambio de valores en Python

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t4/13.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | === Registro Académico ===
                  | Nombre del estudiante: Ana
                  | Código del estudiante: A001
                  | Nota primer corte (0 a 5): 4.0
                  | Nota segundo corte (0 a 5): 3.5
                  | Nota tercer corte (0 a 5): 4.2
                  |
                  | Estudiante: Ana
                  | Código: A001
                  | Nota 1: 4.0 (30 %)
                  | Nota 2: 3.5 (30 %)
                  | Nota 3: 4.2 (40 %)
                  | Promedio: 3.93


      p.mt-4 El ejemplo anterior permite reconocer cómo diferentes tipos de datos pueden coexistir en un mismo programa. El nombre y el código se trabajan como cadenas de caracteres (str), las notas y el promedio como números decimales (float), y la aprobación como un valor booleano (bool).


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p La función input() permite construir programas más cercanos a situaciones reales, porque recibe información ingresada durante la ejecución. Sin embargo, como todo dato capturado llega inicialmente como texto, es necesario convertirlo al tipo adecuado antes de calcular, comparar o validar información.

          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t4/14.svg', style='width: 100px').m-auto
            
            .col
              p Una vez capturados y procesados los datos, el programa debe presentar resultados claros para quien lo utiliza. Por ello, el siguiente apartado aborda la salida estándar mediante la función print() y algunas técnicas de formato que permiten mostrar mensajes, valores y resultados de manera ordenada y comprensible.


      separador
      #t_4_2.titulo-segundo.color-acento-contenido
        h2 4.2. Salidas estándar: función print() y técnicas de formato

      figure
        img(src='@/assets/curso/temas/t4/15.png', alt='', style="width: 1280px").m-auto

      p.mt-4 La salida estándar permite que un programa comunique información a la persona que lo utiliza. En Python, esta acción se realiza principalmente con la función print(), que muestra en pantalla mensajes, valores almacenados en variables, resultados de cálculos o textos organizados con formato.

      p Para utilizar correctamente la salida estándar en Python, se deben reconocer los siguientes elementos:

      .row.justify-content-center 
        .col-lg-5.d-none.d-lg-block
          figure(data-aos="fade-up")
            img(src='@/assets/curso/temas/t4/16.png', alt='', style="width: 100%").m-auto
        .col-lg-7
          LineaTiempoD.color-primario.linea-bold
            .row(numero="A" titulo="Función print()")
              .col-md-12.mb-4.mb-md-0
                p Permite mostrar información en la consola. Puede recibir textos, números, variables o resultados de operaciones.
      
            .row(numero="B" titulo="Parámetro sep")
              .col-md-12.mb-4.mb-md-0
                p Permite definir el separador entre varios valores mostrados por print(). Por defecto, Python usa un espacio.
      
            .row(numero="C" titulo="Parámetro end")
              .col-md-12.mb-4.mb-md-0
                p Permite definir cómo termina la salida. Por defecto, Python agrega un salto de línea al final.

            .row(numero="D" titulo="<em>F-strings</em>")
              .col-md-12.mb-4.mb-md-0
                p Permiten insertar variables y expresiones dentro de una cadena de texto mediante llaves {}. Son recomendadas por su legibilidad.
      
            .row(numero="E" titulo="Método format()")
              .col-md-12.mb-4.mb-md-0
                p Permite insertar valores dentro de una cadena usando marcadores {}. Sigue siendo válido y útil en diferentes versiones de Python.
      
            .row(numero="F" titulo="Operador %")
              .col-md-12.mb-4.mb-md-0
                p Permite dar formato a cadenas mediante especificadores como %s, %d o %.2f. Aunque sigue funcionando, se recomienda priorizar las f-strings en código moderno.
      
      p.mt-4 Estos elementos ayudan a presentar resultados de forma ordenada y comprensible. Su uso es importante cuando el programa debe mostrar nombres, fechas, valores monetarios, promedios, porcentajes o mensajes dirigidos al usuario.      


      .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uso básico de print()

      p La función print() puede mostrar uno o varios valores en pantalla. Cuando recibe varios argumentos separados por comas, Python los imprime con un espacio entre ellos. También es posible modificar ese comportamiento con los parámetros sep y end.

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t4/17.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Uso básico de print() con múltiples argumentos
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | # Uso básico de print()
                  | print("Hola", "Mundo")
                  |
                  | # Personalizar separador
                  | print("A", "B", "C", sep="-")
                  |
                  | # Mostrar una fecha con separador personalizado
                  | print("08", "07", "2026", sep="/")
                  |
                  | # Personalizar fin de línea
                  | print("Línea 1", end=" | ")
                  | print("Línea 2")

      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Resultado esperado

          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | Hola Mundo
                  | A-B-C
                  | 08/07/2026
                  | Línea 1 | Línea 2


      .row.justify-content-center
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p Este código muestra que print() no solo sirve para imprimir mensajes, sino también para organizar la salida. El parámetro sep define cómo se separan los valores, mientras que end controla el cierre de la línea y permite continuar la salida en la misma fila.



      p.mt-4 Las f-strings permiten construir mensajes claros al combinar texto, variables y expresiones dentro de una misma salida. Esta técnica facilita la lectura del código y mejora la presentación de los resultados, porque evita concatenaciones extensas y permite controlar la forma en que se muestran los datos. En Python, su uso es frecuente en tres situaciones principales:

      .row.justify-content-center
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-14")
            .tarjeta.clr--pink02.p-4(titulo="A. Formato de salida con <em>f-strings</em>")
              .row.align-items-center
                .col-lg-8
                  p Las f-strings permiten construir mensajes claros combinando texto y variables. Para utilizarlas, se antepone la letra f antes de la cadena y se escriben las variables o expresiones entre llaves {}. Esta técnica es recomendada por su claridad y facilidad de lectura.

                  p 
                    b Código. Formato de salida con f-strings

                  p.mb-0 nombre = "María"
                  p.mb-0 edad = 25
                  p precio = 49.999

                  p.mb-0 print(f"{nombre} tiene {edad} años.")
                  p.mb-0 print(f"Precio: ${precio:.2f}")
                  p print(f"{'Python':>15}")

                  p Resultado esperado

                  p.mb-0 María tiene 25 años.
                  p.mb-0 Precio: $50.00
                  p Python

                  p El resultado muestra tres usos frecuentes de las f-strings: insertar variables en un mensaje, presentar un número con dos decimales y alinear texto hacia la derecha. Esta técnica es útil para construir salidas claras en reportes, facturas, promedios o resúmenes de información.

                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t4/18.png', alt='', style="width: 480px").m-auto
      
            div(titulo="B. Formato de salida con el método format()")
              .row.align-items-center
                .col-lg-8
                  p El método format() permite insertar valores dentro de una cadena mediante marcadores representados con llaves {}. Los valores se ubican en el orden en que aparecen dentro del método, aunque también pueden numerarse para reutilizarlos o reorganizarlos dentro del mensaje.

                  p Código. Formato de salida con el método format()

                  p.mb-0 nombre = "María"
                  p edad = 25

                  p.mb-0 print("{} tiene {} años.".format(nombre, edad))
                  p print("{1} tiene {0} años.".format(edad, nombre))

                  p Resultado esperado

                  p.mb-0 María tiene 25 años.
                  p María tiene 25 años.

                  p En este ejemplo, el método format() permite insertar datos dentro de una cadena de texto. En la primera línea, los valores se ubican en el mismo orden en que aparecen dentro del método. En la segunda línea, se usan posiciones numéricas: {0} representa la edad y {1} representa el nombre. Por eso, aunque los datos se escriben como format(edad, nombre), la salida final sigue siendo: María tiene 25 años. 
                
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t4/19.png', alt='', style="width: 480px").m-auto
      
            div(titulo="C. Formato de salida con el operador %")
              .row.align-items-center
                .col-lg-8
                  p El operador % corresponde a un estilo clásico de formato. Utiliza especificadores como %s para cadenas, %d para enteros y %.2f para números decimales con dos cifras. Aunque sigue siendo válido, se recomienda utilizarlo principalmente para comprender o mantener código existente.

                  p Código. Formato de salida con el operador %

                  p.mb-0 nombre = "María"
                  p edad = 25

                  p.mb-0 print("%s tiene %d años." % (nombre, edad))
                  p print("Valor: %.2f" % 3.14159)

                  p Resultado esperado

                  p.mb-0 María tiene 25 años.
                  p Valor: 3.14

                  p El resultado muestra cómo el operador % reemplaza los especificadores por los valores indicados después de la cadena. Esta técnica permite controlar el tipo de dato y la cantidad de decimales, aunque las f-strings ofrecen una escritura más clara para programas actuales.
                
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t4/20.png', alt='', style="width: 480px").m-auto


      p.mt-4 Para comparar los principales especificadores de formato, la siguiente tabla reúne los símbolos más utilizados, el tipo de dato al que se aplican y un ejemplo de salida. Esta referencia permite identificar cómo presentar cadenas, enteros y números decimales con mayor precisión.

      .row.justify-content-center.mt-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Tabla 8.
            span Formatos para la salida de datos en Python

          .tabla-a.color-acento-contenido 
            table
              thead(style="background-color: #FE9841")
                tr
                  th(style="width: 20%") Especificador
                  th Tipo de dato
                  th Ejemplo
                  th Resultado esperado


              tbody
                tr(style="background-color: #F6F9F4")
                  td %s
                  td Cadena de caracteres
                  td "%s" % "Hola"
                  td Hola

                tr
                  td %d
                  td Número entero
                  td "%d" % 25
                  td 25


                tr(style="background-color: #F6F9F4")
                  td %f
                  td Número decimal
                  td "%f" % 3.141593
                  td 3.141593

                tr
                  td %.2f
                  td Número decimal con dos cifras
                  td "%.2f" % 3.141593
                  td 3.14

                tr(style="background-color: #F6F9F4")
                  td %10d
                  td Número entero alineado a la derecha
                  td "%10d" % 25
                  td 25

                tr
                  td {:>10}
                  td Texto alineado a la derecha
                  td "{:>10}".format("Python")
                  td Python

                tr(style="background-color: #F6F9F4")
                  td {:.2f}
                  td Decimal con dos cifras en format()
                  td "{:.2f}".format(49.999)
                  td 50.00

                tr
                  td {precio:.2f}
                  td Decimal con dos cifras en f-string
                  td f"{precio:.2f}"
                  td 50.00


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p El uso de estos formatos permite presentar la información de manera clara, ordenada y precisa. Esta práctica es útil cuando se muestran valores monetarios, promedios, porcentajes, fechas, códigos o resultados que requieren una salida uniforme y fácil de interpretar.


      p.mt-4 Para presentar resultados claros en Python, no basta con mostrar los datos en pantalla. También es necesario definir cómo se organizarán los mensajes, cuántos decimales se mostrarán, qué etiquetas acompañarán los valores y qué técnica de formato será más adecuada para facilitar su lectura.

      .bg--gradientBlue.p-5.bg-4
        SlyderB(:datos="datosSlyder")

      p.mt-4 Aplicar estas recomendaciones permite que la salida del programa sea comprensible, precisa y útil para quien la interpreta. Una presentación adecuada de los resultados fortalece la calidad del código y reduce errores de lectura, especialmente cuando se trabajan datos numéricos o información destinada a la toma de decisiones.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p La salida de datos debe comunicar resultados de forma clara, precisa y ordenada. Un programa que presenta etiquetas comprensibles, unidades correctas y decimales adecuados facilita la interpretación de la información y demuestra buenas prácticas de programación.


      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/27.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El manejo de la entrada y la salida de datos permite que el programa reciba información, la procese y presente resultados comprensibles. A partir de esta base, el estudio de los operadores y las funciones integradas amplía las posibilidades de procesamiento, porque permite calcular, comparar, validar, transformar datos y construir instrucciones más completas dentro de un programa secuencial en Python.

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

import img1 from '@/assets/curso/temas/t4/22.png'
import img2 from '@/assets/curso/temas/t4/23.png'
import img3 from '@/assets/curso/temas/t4/24.png'
import img4 from '@/assets/curso/temas/t4/25.png'
import img5 from '@/assets/curso/temas/t4/26.png'

export default {
  name: 'Tema4',
  data() {
    return {
      mostrarIndicador: true,
      datosSlyder: [
        {
          titulo: 'Usar <em>f-strings</em> como técnica principal',
          texto:
            'Se recomienda emplearlas en programas actuales por su claridad y facilidad de lectura. Permiten insertar variables, expresiones y formatos dentro de una misma cadena sin construir mensajes extensos o difíciles de interpretar. ',
          imagen: img1,
        },
        {
          titulo: 'Definir la cantidad de decimales',
          texto:
            'Cuando se presentan precios, promedios, porcentajes o medidas, es conveniente indicar cuántas cifras decimales deben mostrarse. Por ejemplo, {precio:.2f} permite presentar un valor con dos decimales.',
          imagen: img2,
        },
        {
          titulo: 'Incluir etiquetas claras',
          texto:
            'Cada resultado debe ir acompañado de una palabra o frase que explique su significado. Por ejemplo, escribir Promedio: 4.25 es más claro que mostrar únicamente el número 4.25. ',
          imagen: img3,
        },
        {
          titulo: 'Cuidar unidades y símbolos',
          texto:
            'Cuando el resultado corresponde a dinero, porcentaje, medida o cantidad, debe presentarse con la unidad adecuada. Esta práctica evita confusiones y mejora la interpretación de la información. ',
          imagen: img4,
        },
        {
          titulo: 'Organizar la salida visualmente',
          texto:
            'La alineación, los espacios y los saltos de línea ayudan a que los resultados sean más fáciles de leer. Esta organización es útil en reportes, facturas, listados o resúmenes generados por el programa.',
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
