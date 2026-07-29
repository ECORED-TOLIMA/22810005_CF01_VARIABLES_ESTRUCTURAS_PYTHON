<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Operadores y funciones integradas

      .row.align-items-center.justify-content-center
        .col-lg-12
          .row.justify-content-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/temas/t5/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                .col-lg
                  figure
                    img(src="@/assets/curso/temas/t5/2.svg", alt="", style="width: 90px")

                  p.mt-2 Los operadores y las funciones integradas permiten transformar datos en resultados útiles dentro de un programa. Con estos recursos es posible calcular valores, comparar condiciones, validar información, convertir tipos de datos y recorrer secuencias sin construir instrucciones adicionales desde cero.

                  p Este tema integra los aprendizajes previos sobre variables, tipos de datos, estructuras compuestas, entrada y salida. Las variables almacenan valores, los tipos definen qué operaciones son válidas y los operadores o funciones permiten procesar la información de manera ordenada.

      p.mt-4 Para facilitar la comprensión, se presentan las principales categorías que intervienen en el procesamiento de datos en Python:

      .row.justify-content-center.mt-4
        .col-lg-8
          LineaTiempoD.color-primario.linea-bold
            .row(numero="1" titulo="Operadores aritméticos")
              .col-md-12.mb-4.mb-md-0
                p Realizan cálculos matemáticos entre valores numéricos, como suma, resta, multiplicación, división, módulo y potencia. Su aplicación permite resolver operaciones básicas y expresar fórmulas dentro de programas secuenciales.
      
            .row(numero="2" titulo="Operadores de asignación")
              .col-md-12.mb-4.mb-md-0
                p Almacenan o actualizan valores en una variable. Además de la asignación simple, permiten abreviar operaciones frecuentes, como sumar y guardar el resultado en la misma variable durante la ejecución del programa.
      
            .row(numero="3" titulo="Operadores relacionales")
              .col-md-12.mb-4.mb-md-0
                p Comparan dos valores y devuelven un resultado booleano: verdadero o falso. Son útiles para verificar igualdad, diferencia, mayor que, menor que y otras condiciones necesarias en validaciones.

            .row(numero="4" titulo="Operadores lógicos")
              .col-md-12.mb-4.mb-md-0
                p Combinan expresiones booleanas mediante and, or y not. Facilitan la construcción de condiciones más completas, especialmente cuando una decisión depende de varios criterios evaluados al mismo tiempo.
      
            .row(numero="5" titulo="Operadores de cadena")
              .col-md-12.mb-4.mb-md-0
                p Permiten manipular texto mediante concatenación, repetición y comparación. Su uso ayuda a construir mensajes, validar entradas y presentar información textual de forma clara para quien ejecuta el programa.
      
            .row(numero="6" titulo="Funciones integradas")
              .col-md-12.mb-4.mb-md-0
                p Son herramientas disponibles directamente en Python para realizar tareas comunes, como mostrar datos, convertir tipos, calcular longitudes, ordenar valores o explorar objetos, sin importar módulos externos.
      
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="fade-up")
            img(src='@/assets/curso/temas/t5/3.png', alt='', style="width: 100%").m-auto
      


      p.mt-4 Estas categorías permiten comprender cómo Python procesa los datos después de recibirlos y antes de presentarlos como salida. A partir de esta base, se profundiza en los operadores aritméticos y en la precedencia, ya que estos determinan el orden en que se resuelven las expresiones numéricas dentro de un programa.


      separador
      #t_5_1.titulo-segundo.color-acento-contenido
        h2 5.1. Operadores aritméticos y precedencia

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t5/4.png', alt='', style="width: 490px").m-auto
        .col-lg-7
          p Los operadores aritméticos permiten realizar cálculos matemáticos con valores numéricos. En Python se utilizan para sumar, restar, multiplicar, dividir, calcular potencias y obtener residuos de una división. Su uso es frecuente en programas que procesan precios, cantidades, promedios, porcentajes, medidas o cualquier información que requiera operaciones numéricas.

          .row.justify-content-center.mt-2
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color2.p-4
                    p Además de conocer el símbolo de cada operador, es necesario comprender la precedencia. Esta regla indica el orden en que Python evalúa una expresión cuando contiene varios operadores. Por ejemplo, en una operación combinada, primero se calculan las potencias, luego multiplicaciones, divisiones y módulos, y finalmente sumas y restas. Los paréntesis permiten modificar ese orden para hacer más clara la operación.



      p.mt-4 Para interpretar correctamente las expresiones aritméticas, conviene tener presentes estos aspectos:

      .row
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 A
            p.text-center 
              b Identificar el operador utilizado
            p.text-center Permite reconocer si la operación corresponde a suma, resta, multiplicación, división, módulo o potencia. 
      
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 B
            p.text-center 
              b Revisar el tipo de división
            p.text-center El operador / devuelve una división real, mientras que // devuelve una división entera, descartando la parte decimal. 
      
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 C
            p.text-center 
              b Aplicar la precedencia
            p.text-center Python evalúa primero los operadores de mayor prioridad. Cuando se requiere alterar el orden natural, se emplean paréntesis.
      
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-1.p-5.h-100
            .tarjeta-numerada__numero
              .h2 D
            p.text-center 
              b Validar el resultado
            p.text-center Comparar la salida obtenida con el cálculo esperado permite detectar errores de escritura, interpretación o lógica. 

      p.mt-4 Estos criterios ayudan a escribir expresiones matemáticas más claras y reducen errores frecuentes al combinar varios operadores en una misma instrucción.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p Para observar cómo Python interpreta las operaciones aritméticas, el siguiente código presenta cálculos básicos y un ejemplo de precedencia. Este bloque permite verificar la diferencia entre división real, división entera, módulo y potencia.


      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t5/5.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Operadores aritméticos y precedencia en Python
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | print(10 + 3)          # 13
                  | print(10 - 3)           # 7
                  | print(10 * 3)          # 30
                  | print(10 / 3)          # 3.3333333333333335
                  | print(10 // 3)         # 3
                  | print(10 % 3)         # 1 
                  | print(2 ** 5)           # 32 
                  |
                  | # Precedencia
                  | print(2 + 3 * 4)      # 14
                  | print((2 + 3) * 4)   # 20



      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.bg-11.p-1 Resultado esperado

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t5/6.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | 13
                  | 7
                  | 30
                  | 3.3333333333333335
                  | 3
                  | 1
                  | 32
                  | 14
                  | 20


      p Este ejemplo muestra que Python respeta el orden matemático de las operaciones: primero calcula potencias, luego multiplicaciones, divisiones y módulos, y finalmente sumas o restas. Al usar paréntesis, la operación encerrada se resuelve primero, lo que permite controlar el resultado de una expresión.


      .row.justify-content-center.mt-2
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t5/7.svg', style='width: 100px').m-auto
            
            .col
              p Los operadores de asignación compuesta permiten actualizar el valor de una variable mediante una operación abreviada. En lugar de escribir una expresión completa, como x = x + 5, Python permite usar x += 5. Esta forma reduce la extensión del código y facilita la lectura cuando una variable debe modificarse durante la ejecución del programa.



      .row.justify-content-center.mt-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.bg-11.p-1 Código. Operadores de asignación compuesta en Python

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t5/8.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          
    
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | x = 10
                  |
                  | x += 5      # x = x + 5
                  | print(x)
                  |
                  | x -= 3      # x = x - 3
                  | print(x)
                  |
                  | x *= 2      # x = x * 2
                  | print(x)
                  |
                  | x /= 4      # x = x / 4
                  | print(x)
                  |
                  | x //= 2     # x = x // 2
                  | print(x)
                  |
                  | x **= 2     # x = x ** 2
                  | print(x)


      .row.justify-content-center.mt-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.bg-11.p-1 Resultado esperado

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t5/9.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          
    
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | 15
                  | 12
                  | 24
                  | 6.0
                  | 3.0
                  | 9.0


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p Este ejemplo permite observar cómo una misma variable cambia de valor a medida que se aplican operadores de asignación compuesta. Esta forma abreviada facilita la escritura de instrucciones cuando se requiere actualizar contadores, acumuladores, totales o valores intermedios dentro de un programa.



      p.mt-4 La siguiente tabla organiza los operadores aritméticos más utilizados. Para mejorar la lectura, el ejemplo de uso y el resultado esperado se presentan en columnas separadas.

      .row.justify-content-center.mt-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Tabla 9.
            span Operadores aritméticos y precedencia en Python

          .tabla-a.color-acento-contenido 
            table
              thead(style="background-color: #FE9841")
                tr
                  th Operador
                  th Nombre
                  th Precedencia general
                  th Ejemplo de uso
                  th Resultado esperado

              tbody
                tr(style="background-color: #F6F9F4")
                  td 
                    b **
                  td Potencia
                  td Mayor
                  td 2 ** 3
                  td 8

                tr
                  td 
                    b *
                  td Multiplicación
                  td Alta
                  td 5 * 3
                  td 15
    

                tr(style="background-color: #F6F9F4")
                  td 
                    b /
                  td División real
                  td Alta
                  td 7 / 2
                  td 3.5


                tr
                  td 
                    b //
                  td División entera
                  td Alta
                  td 7 // 2
                  td 3

                tr(style="background-color: #F6F9F4")
                  td 
                    b %
                  td Módulo o residuo
                  td Alta
                  td 7 % 2
                  td 1


                tr
                  td 
                    b +
                  td Suma
                  td Media
                  td 5 + 3
                  td 8

                tr(style="background-color: #F6F9F4")
                  td 
                    b -
                  td Resta
                  td Media
                  td 5 - 3
                  td 2

      p.mt-4 El dominio de estos operadores permite construir expresiones matemáticas claras, precisas y coherentes con el cálculo esperado. Cuando una operación combina varios operadores, se recomienda usar paréntesis para facilitar la lectura y evitar ambigüedades.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p Una vez comprendido cómo Python realiza cálculos numéricos, es necesario estudiar los operadores que permiten comparar valores y evaluar condiciones. Estos operadores son la base para construir expresiones que devuelven resultados lógicos como True o False.




      separador
      #t_5_2.titulo-segundo.color-acento-contenido
        h2 5.2. Operadores lógicos, relacionales y de cadena

      .row.align-items-start.mt-4
        .col-lg-1.mb-lg-0.mb-4
          figure(data-aos="fade-down")
            img(src='@/assets/curso/temas/t5/10.svg', style='width: 100px').m-auto
        
        .col
          p Los operadores lógicos, relacionales y de cadena permiten comparar valores, combinar condiciones y trabajar con textos dentro de un programa en Python. Su uso es fundamental para construir expresiones que devuelven resultados booleanos, validar información ingresada por el usuario y preparar reglas que orientan la ejecución del programa.


      .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mt-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En la práctica, estos operadores suelen utilizarse de forma conjunta. Los operadores relacionales comparan dos valores; los operadores lógicos combinan una o varias condiciones, y los operadores de cadena permiten unir, repetir o verificar la presencia de un texto dentro de otro. Esta integración facilita la construcción de instrucciones más claras y funcionales.

      p.mt-4 Para comprender su aplicación, se presentan primero los operadores lógicos más utilizados en Python. Estos operadores permiten evaluar condiciones compuestas y determinar si una expresión debe considerarse verdadera o falsa.

      .row.justify-content-center.mt-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Tabla 10.
            span Operadores lógicos en Python

          .tabla-a.color-acento-contenido 
            table
              thead(style="background-color: #FE9841")
                tr
                  th Operador
                  th Descripción
                  th Ejemplo de uso
                  th Resultado esperado


              tbody
                tr(style="background-color: #F6F9F4")
                  td 
                    b and
                  td Devuelve Truesi ambas condiciones son verdaderas.
                  td (5 > 3) and (2 < 4)
                  td True


                tr
                  td 
                    b or
                  td Devuelve Truesi al menos una condición es verdadera.
                  td (5 > 3) or (2 > 4)
                  td True

    

                tr(style="background-color: #F6F9F4")
                  td 
                    b not
                  td Invierta el valor lógico de una condición.
                  td not (5 > 3)
                  td False



      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t5/12.png', alt='', style="width: 490px").m-auto
        .col-lg-8
          .row.justify-content-center.mt-4
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color2.p-4
                    p Esta información permite interpretar condiciones compuestas y obtener el resultado lógico de una expresión. El uso adecuado de and, or y not favorece la construcción de reglas claras, especialmente cuando un programa debe evaluar más de un criterio.

          .row.align-items-start.mt-2
            .col-lg-2.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t5/13.svg', style='width: 100px').m-auto
            
            .col
              p Los operadores relacionales, también llamados operadores de comparación, permiten establecer relaciones entre dos valores. Su resultado siempre es booleano: True, cuando la comparación se cumple, o False, cuando no se cumple. Es importante diferenciar el operador de asignación = del operador de igualdad ==, ya que el primero guarda un valor en una variable y el segundo compara dos valores.



      p.mt-4 Para diferenciar estos operadores, la siguiente tabla presenta el símbolo, su nombre, un ejemplo de uso y el resultado esperado.


      .row.justify-content-center.mt-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Tabla 11.
            span Operadores relacionales en Python

          .tabla-a.color-acento-contenido 
            table
              thead(style="background-color: #FE9841")
                tr
                  th Operador
                  th Nombre
                  th Ejemplo de uso
                  th Resultado esperado


              tbody
                tr(style="background-color: #F6F9F4")
                  td ==
                  td Igual a
                  td 5 == 5
                  td True

                tr
                  td !=
                  td Diferente de
                  td 5 != 3
                  td True

                tr(style="background-color: #F6F9F4")
                  td >
                  td Mayor que
                  td 5 > 3
                  td True

                tr
                  td <
                  td Menor que
                  td 5 < 3
                  td True

                tr(style="background-color: #F6F9F4")
                  td >=
                  td Mayor o igual que
                  td 5 >= 5
                  td True

                tr
                  td <=
                  td Menor o igual que
                  td 3 <= 5
                  td True


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p Los ejemplos presentados en la tabla anterior permiten reconocer cómo Python compara dos valores y devuelve un resultado booleano. Esta distinción es importante porque evita confundir el operador de asignación = con el operador de igualdad ==: el primero guarda un valor en una variable, mientras que el segundo verifica si dos valores son iguales.


      p.mt-4 A partir de estas comparaciones, los operadores relacionales pueden combinarse con operadores lógicos para evaluar varias condiciones en una misma expresión. El siguiente código presenta un caso sencillo en el que se revisan dos datos: la edad y el salario. Con estos valores, Python determina si las condiciones se cumplen y muestra el resultado en la consola.


      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t5/14.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Ejemplo combinado de operadores lógicos y relacionales
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | # Ejemplo combinado de operadores lógicos y relacionales
                  |
                  | edad = 25
                  | salario = 2500000
                  |
                  | print((edad >= 18) and (salario > 1000000))
                  | print((edad < 18) or (salario > 1000000))
                  | print(not (edad < 18))



      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t5/15.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Resultado esperado
      
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | True
                  | True
                  | True



      p El resultado evidencia que las expresiones evaluadas son verdaderas. En la primera línea, se cumplen las dos condiciones: la edad es mayor o igual a 18 y el salario supera 1.000.000. En la segunda línea, basta con que una condición sea verdadera para que or devuelva True. En la tercera línea, not invierte la condición edad < 18, que era falsa, y por eso el resultado final es True.

      .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mt-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/16.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Además de comparar números y combinar condiciones, Python permite trabajar con cadenas de caracteres. Estos operadores facilitan unir textos, repetir mensajes y verificar si una palabra o fragmento aparece dentro de una cadena. Esta funcionalidad es útil cuando se procesan nombres, códigos, respuestas del usuario o mensajes generados por el programa.


      .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Operadores de cadena

      p Además de comparar números y combinar condiciones, Python permite trabajar con cadenas de caracteres. Estos operadores facilitan unir textos, repetir mensajes y verificar si una palabra o fragmento aparece dentro de otra cadena. Esta funcionalidad es útil cuando se procesan nombres, códigos, respuestas del usuario o mensajes generados por el programa.

      p Para comprender su uso, se presentan las operaciones más frecuentes con cadenas de caracteres:

      .row
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 A
            p.text-center 
              b Concatenación con +
            p.text-center Permite unir dos o más cadenas en una sola salida. Por ejemplo, "Hola " + "Mundo" genera el mensaje Hola Mundo.
      
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 B
            p.text-center 
              b Repetición con *
            p.text-center Permite repetir una cadena el número de veces indicado. Por ejemplo, "Ja" * 3 genera JaJaJa.
      
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 C
            p.text-center 
              b Pertenencia con in
            p.text-center Verifica si una palabra, letra o fragmento aparece dentro de otra cadena. Por ejemplo, "Python" in "Aprende Python hoy" devuelve True.
      
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-1.p-5.h-100
            .tarjeta-numerada__numero
              .h2 D
            p.text-center 
              b No pertenencia con not in
            p.text-center Verifica si una palabra, letra o fragmento no aparece dentro de otra cadena. Por ejemplo, "Java" not in "Aprende Python hoy" devuelve True.

      p.mt-4 Estas operaciones permiten manipular texto de forma sencilla y son útiles para construir mensajes, validar respuestas o revisar información ingresada por el usuario.



      .row.justify-content-center.mt-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Operadores de concatenación, repetición y pertenencia

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t5/17.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .tarjeta-codigo
              pre.language-python(language="python").mb-5
                code
                  | # Concatenación de cadenas
                  | print("Hola " + "Mundo")
                  |
                  | # Repetición de cadenas
                  | print("Ja" * 3)
                  | print("-" * 40)
                  |
                  | # Pertenencia en cadenas
                  | print("Python" in "Aprende Python hoy")
                  | print("Java" not in "Aprende Python hoy")


      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.bg-11.p-1 Resultado esperado

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t5/18.png', alt='', style="width: 490px").m-auto
        .col-lg-5
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | Hola Mundo
                  | JaJaJa
                  | ----------------------------------------
                  | True
                  | True




      .row.justify-content-center.mt-4
        .col-lg-10
          p El resultado muestra que Python puede unir cadenas, repetirlas y verificar si un texto está presente o ausente dentro de otro. Estas operaciones fortalecen el manejo de información textual y facilitan la construcción de salidas más claras en los programas.
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/temas/t5/19.svg', style='width: 180px').m-auto
                  
                  .col
                    p Después de reconocer cómo los operadores permiten calcular, comparar y manipular textos, se estudian las funciones integradas de Python, útiles para resolver tareas frecuentes como recibir datos, mostrar resultados, convertir valores y trabajar con secuencias de forma clara y eficiente.


      separador
      #t_5_3.titulo-segundo.color-acento-contenido
        h2 5.3. Funciones integradas para entrada, salida y secuencias

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/20.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Python dispone de funciones integradas, conocidas en inglés como <em>built-in functions</em>, que están disponibles sin importar módulos adicionales. Estas funciones forman parte del núcleo del lenguaje y pueden utilizarse directamente en cualquier programa para realizar tareas frecuentes, como calcular valores, convertir tipos de datos, consultar información de objetos, recibir entradas, mostrar salidas y manipular secuencias.

      p.mt-4 El uso de estas funciones permite escribir código más claro, breve y eficiente. En lugar de crear instrucciones desde cero para resolver tareas comunes, el programador puede utilizar funciones ya disponibles en Python, lo que facilita la lectura, la depuración y el mantenimiento del programa.

      p Para organizar su estudio, las funciones integradas se pueden agrupar según el propósito que cumplen dentro de un programa:

      .row.bg-7
          .col-12
            .p-5
              .row.justify-content-center
                .col-11
                  SlyderA.p-4.bg-8.bg-r8(tipo="b")
                    .row.justify-content-center.align-items-center
                      .col-lg-6.mb-4.mb-lg-0
                        p 
                          b A. Funciones matemáticas básicas

                        p Permiten realizar operaciones matemáticas comunes sin necesidad de importar el módulo math. Entre las más utilizadas se encuentran:

                        ul.lista-ul--color
                          li
                            i.lista-ul__vineta
                            p.mb-0 abs(): devuelve el valor absoluto de un número.

                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 max(): retorna el valor máximo de una secuencia o conjunto de argumentos.

                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 min(): retorna el valor mínimo de una secuencia o conjunto de argumentos.


                          li
                            i.lista-ul__vineta
                            p.mb-0 sum(): calcula la suma total de los elementos de una secuencia numérica.

                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 round(): redondea un número al entero más cercano o al número de decimales indicado.

                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 pow(): calcula la potencia de un número; equivale al operador **.


                      .col-lg-6
                        figure(data-aos="fade-down")
                          img(src='@/assets/curso/temas/t5/21.png', style='width: 572px')
                  

                    .row.justify-content-center.align-items-center
                      .col-lg-6.mb-4.mb-lg-0
                        p 
                          b B. Funciones de información

                        p Se emplean para obtener datos sobre los objetos durante la ejecución del programa. Son útiles al momento de depurar el código, validar tipos de datos y comprender cómo Python interpreta cada valor:

                        ul.lista-ul--color
                          li
                            i.lista-ul__vineta
                            p.mb-0 type(): devuelve el tipo de un objeto.
                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 isinstance(): verifica si un objeto pertenece a un tipo determinado.
                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 id(): retorna la dirección de memoria donde se encuentra el objeto.

                          li
                            i.lista-ul__vineta
                            p.mb-0 len(): devuelve la longitud o cantidad de elementos de una secuencia.
                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 dir(): lista todos los atributos y métodos disponibles para un objeto.
                        
                          li
                            i.lista-ul__vineta
                            p.mb-0 help(): muestra la documentación de un objeto, función o módulo.


                      .col-lg-6
                        figure(data-aos="fade-down")
                          img(src='@/assets/curso/temas/t5/22.png', style='width: 572px')

                    .row.justify-content-center.align-items-center
                      .col-lg-6.mb-4.mb-lg-0
                        p 
                          b C. Funciones de conversión de tipos

                        p Permiten convertir un valor de un tipo de dato a otro. Son indispensables al trabajar con la función input(), ya que el valor ingresado por el usuario siempre llega como cadena de caracteres:

                        ul.lista-ul--color
                          li
                            i.lista-ul__vineta
                            p.mb-0 int(): convierte un valor a entero. 
                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 float(): convierte un valor a número de punto flotante. 
                        
                          li
                            i.lista-ul__vineta
                            p.mb-0 str(): convierte un valor a cadena de caracteres. 

                          li
                            i.lista-ul__vineta
                            p.mb-0 bool(): convierte un valor a su equivalente booleano (True o False). 
                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 list(): convierte una secuencia en una lista. 
                          
                          li
                            i.lista-ul__vineta
                            p.mb-0 tuple(): convierte una secuencia en una tupla. 

                          li
                            i.lista-ul__vineta
                            p.mb-0 set(): convierte una secuencia en un conjunto y elimina duplicados. 


                      .col-lg-6
                        figure(data-aos="fade-down")
                          img(src='@/assets/curso/temas/t5/23.png', style='width: 572px')

  
                    
      p.mt-4 Para facilitar la consulta de las funciones integradas más utilizadas, la siguiente tabla las organiza según su propósito dentro de un programa. Esta clasificación permite identificar qué función usar cuando se requiere calcular, consultar información, convertir datos, interactuar con el usuario o manipular secuencias.

      .tarjeta.bg-14.p-4.mb-5.mt-4
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/t5/24.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Enlace de consulta
                p.mb-0 Para ampliar el reconocimiento de las funciones integradas de Python, se recomienda consultar la documentación oficial del lenguaje. 
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://docs.python.org/3/library/functions.html" target="_blank")
                  span Descargar
                  i.fas.fa-file-download




      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p Aunque las funciones integradas permiten resolver muchas tareas habituales, algunos problemas requieren funcionalidades más especializadas. Para estos casos, Python organiza el código en módulos y librerías reutilizables, los cuales amplían las capacidades del lenguaje y permiten desarrollar programas más completos.


</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

export default {
  name: 'Tema5',
  data() {
    return {
      mostrarIndicador: true,
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
