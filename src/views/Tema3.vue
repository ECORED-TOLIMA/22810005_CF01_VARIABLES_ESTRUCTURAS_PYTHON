<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estructuras de datos compuestas y conversión de tipos

    figure
      img(src='@/assets/curso/temas/t3/1.png', alt='', style="width: 1280px").m-auto

    p.mt-4 Las estructuras de datos compuestas permiten agrupar varios valores dentro de una sola variable. Esta capacidad es necesaria cuando se manejan listas de elementos, pares clave-valor, secuencias numéricas o colecciones sin elementos repetidos.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t3/3.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t3/2.svg', style='width: 84px').m-auto
          
          .col
            p El estudio de estas estructuras se complementa con la conversión de tipos, porque en muchos programas es necesario transformar un dato para poder compararlo, calcularlo o presentarlo correctamente. Esta relación resulta especialmente importante cuando los datos provienen de una entrada por teclado.

        .row.justify-content-center.mt-2
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Además de los tipos básicos, Python dispone de estructuras de datos compuestas que permiten agrupar información relacionada dentro de una misma variable. Estas estructuras son útiles cuando un programa debe manejar varios datos al mismo tiempo, como registros de clientes, listas de productos, turnos de atención, calificaciones, inventarios o resultados de una encuesta.


    p.mt-4 Para seleccionar una estructura de datos compuesta, es necesario reconocer cómo se comporta la información que se desea almacenar. Esta decisión ayuda a organizar los datos de forma coherente y evita usar estructuras poco adecuadas para el problema que se quiere resolver.

    .row.bg-13
      .col-12
        .p-5
          .row.justify-content-center.mt-4
            .col-lg-10
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black A
                  p.mb-0 Usar una lista cuando los datos pueden cambiar, agregarse, eliminarse o reorganizarse durante la ejecución del programa.
                hr
          
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black B
                  p.mb-0 Usar una tupla cuando los datos deben permanecer estables y no requieren modificación posterior.
                hr
          
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black C
                  p.mb-0 Usar un rango cuando se necesita generar una secuencia numérica para conteos, repeticiones o recorridos.
                hr

                li 
                  .lista-ol--cuadro__vineta
                    span.text-black D
                  p.mb-0 Usar un diccionario cuando cada dato necesita asociarse con una clave que facilite su consulta.
                hr

          
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black E
                  p.mb-0 Usar un conjunto cuando se requiere evitar duplicados o comparar grupos de elementos.
                hr
          
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black F
                  p.mb-0 Aplicar conversión de tipos cuando los datos recibidos no tienen el formato necesario para calcular, comparar o presentar resultados.
          


    p.mt-4 Esta selección permite pasar de valores individuales a colecciones organizadas de información. Con esta base, el siguiente apartado presenta las características y usos de las listas, tuplas, rangos y diccionarios, estructuras fundamentales para almacenar, recorrer y consultar datos en Python.



    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1. Listas, tuplas, rangos y diccionarios

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/temas/t3/4.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                figure
                  img(src="@/assets/curso/temas/t3/5.svg", alt="", style="width: 90px")

                p.mt-2 En Python, las listas, las tuplas, los rangos y los diccionarios permiten organizar varios datos dentro de una misma estructura. Su uso facilita almacenar información relacionada, recorrer elementos y construir soluciones más ordenadas que trabajar con variables aisladas.

                p De acuerdo con la documentación oficial de Python, list, tuple y range hacen parte de los tipos secuencia, mientras que dict corresponde a los tipos de mapeo. Esta diferencia es clave: las secuencias se recorren por posición y los diccionarios recuperan valores mediante claves (Python Software Foundation, s. f.).


    p.mt-4 Para comprender el uso de listas, tuplas, rangos y diccionarios, se presenta un caso aplicado a una pequeña empresa comercial en Colombia. En este ejemplo, se organiza la información básica de pedidos de una tienda que vende productos de la canasta familiar y necesita registrar clientes, productos, turnos de atención y datos de ubicación.

    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Lista
          p.text-center Almacena productos modificables del pedido; permite agregar, eliminar, ordenar y actualizar durante la venta.
    
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Tupla
          p.text-center Conserva datos fijos de ubicación, como coordenadas o códigos que no deben cambiar accidentalmente. 
    
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Rango
          p.text-center Genera secuencias numéricas automáticas para turnos, repeticiones o conteos definidos dentro del programa empresarial. 
    
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-1.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Diccionario
          p.text-center Organiza información mediante claves y valores; facilita consultar clientes, productos o datos asociados rápidamente.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Estas estructuras permiten representar de manera organizada los datos que intervienen en una situación real de programación. En un mismo proceso empresarial, una lista puede guardar productos, una tupla puede conservar datos fijos, un rango puede generar turnos y un diccionario puede reunir información asociada a un cliente.


        p.mt-4 Para observar esta relación en el lenguaje Python, el siguiente código muestra cómo se pueden declarar y consultar estas estructuras dentro de un mismo caso de uso empresarial.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")  
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Uso básico de listas, tuplas, rangos y diccionarios en Python
      
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | # Caso de uso: registro básico de un pedido en una tienda colombiana
                |productos = ["arroz", "café", "panela"]
                |productos.append("aceite")
                |ubicacion_sede = (4.7110, -74.0721)
                |turnos = range(1, 6)
                |cliente = {
                |    "nombre": "Ana",
                |    "ciudad": "Cali",
                |    "estado": "activo"
                |}
                |print(productos)
                |print(ubicacion_sede)
                |print(list(turnos))
                |print(cliente["nombre"])


    p Este ejemplo muestra que cada estructura cumple una función específica dentro del programa. La lista permite modificar productos, la tupla conserva datos fijos, el rango genera una secuencia de turnos y el diccionario facilita la consulta de información mediante claves.                    

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Cada estructura de datos cumple una función específica: las listas organizan datos modificables, las tuplas conservan valores fijos, los rangos generan secuencias y los diccionarios relacionan claves con valores. Reconocer estas diferencias facilita elegir la estructura adecuada en cada programa.                

          
    .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Después de revisar las estructuras que permiten almacenar datos ordenados o asociados mediante claves, resulta necesario estudiar una estructura orientada a conservar elementos únicos. En Python, los conjuntos facilitan la eliminación de datos repetidos y la comparación entre grupos de información. Por ejemplo, en una empresa colombiana, pueden usarse para depurar ciudades repetidas en una base de clientes, identificar productos únicos en un inventario o comparar registros de asistencia entre dos jornadas de capacitación.              


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2. Conjuntos

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/7.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t3/8.svg', style='width: 100px').m-auto
          
          .col
            p Después de estudiar las listas, las tuplas, los rangos y los diccionarios, resulta necesario reconocer una estructura de datos orientada a un propósito distinto, garantizar que cada elemento aparezca una sola vez dentro de una colección. Esta necesidad surge con frecuencia al procesar información real, donde los datos capturados pueden contener registros duplicados que es preciso depurar antes de analizarlos.

        .row.justify-content-center.mt-2
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p En Python, esta estructura se denomina conjunto (set): una colección no ordenada de elementos únicos, que no admite valores repetidos ni conserva un orden de posición. En una empresa colombiana, un conjunto permite depurar ciudades repetidas en una base de clientes, identificar productos únicos en un inventario o comparar los registros de asistencia entre dos jornadas de capacitación, sin recorrer manualmente cada dato para detectar coincidencias.

    p.mt-4 Antes de explorar su uso mediante código, conviene precisar los conceptos y las operaciones fundamentales que caracterizan a los conjuntos en Python. Cada definición incluye un ejemplo breve que puede copiarse directamente en Visual Studio Code para observar el resultado:              
                  
    .row.bg-7
        .col-12
          .p-5
            .row.justify-content-center
              .col-11
                .tarjeta.tarjeta--gris.p-4
                  PasosB.color-acento-botones
                    .row(titulo="")
                      .col-md-6
                        figure
                          img(src='@/assets/curso/temas/t3/9.png')

                      .col-md-6.mb-4.mb-md-0
                        p #[b Conjunto (set)]: colección no ordenada de elementos únicos, definida con la función set() o con llaves { }. No permite valores duplicados ni almacena los elementos en un orden fijo de posición. Por ejemplo: 

                        p #[b VS Code]

                        p colores = {'rojo', 'azul', 'verde', 'azul'}
                        p   print(colores)

                        p Al ejecutarlo en VS Code, el resultado es {'rojo', 'azul', 'verde'}: el valor repetido se elimina automáticamente, porque un conjunto nunca conserva duplicados.
                      

                    .row(titulo="")
                      .col-md-6
                        figure
                          img(src='@/assets/curso/temas/t3/10.png')

                      .col-md-6.mb-4.mb-md-0
                        p #[b Unión (|)]: operación que combina dos conjuntos en uno solo, incluyendo todos los elementos presentes en cualquiera de los dos conjuntos originales, sin repetir ningún valor en el resultado. Por ejemplo: 

                        p #[b VS Code]

                        p.mb-0 a = {1, 2, 3}
                        p.mb-0 b = {3, 4, 5}
                        p print(a | b)

                        p Al ejecutarlo en VS Code, el resultado es {1, 2, 3, 4, 5}, reuniendo los elementos de ambos conjuntos sin duplicar el 3.

                    .row(titulo="")
                      .col-md-6
                        figure
                          img(src='@/assets/curso/temas/t3/11.png')

                      .col-md-6.mb-4.mb-md-0
                        p #[b Intersección (&)]: operación que devuelve únicamente los elementos que se repiten en ambos conjuntos al mismo tiempo; si no existe ningún valor en común, el resultado es un conjunto vacío. Por ejemplo:

                        p #[b VS Code]

                        p.mb-0 a = {1, 2, 3}
                        p.mb-0 b = {3, 4, 5}
                        p print(a & b)

                        p Al ejecutarlo en VS Code, el resultado es {3}, el único valor presente en los dos conjuntos.

                    .row(titulo="")
                      .col-md-6
                        figure
                          img(src='@/assets/curso/temas/t3/12.png')

                      .col-md-6.mb-4.mb-md-0
                        p #[b Diferencia (-)]: operación que retorna los elementos que pertenecen únicamente al primer conjunto y no al segundo; el orden de los conjuntos dentro de la operación cambia el resultado. Por ejemplo:

                        p #[b VS Code]

                        p.mb-0 a = {1, 2, 3}
                        p.mb-0 b = {3, 4, 5}
                        p print(a - b)

                        p Al ejecutarlo en VS Code, el resultado es {1, 2}, los valores exclusivos de a.

                    .row(titulo="")
                      .col-md-6
                        figure
                          img(src='@/assets/curso/temas/t3/13.png')

                      .col-md-6.mb-4.mb-md-0
                        p #[b Diferencia simétrica (^)]: operación que devuelve los elementos presentes en alguno de los dos conjuntos, pero excluye los valores que se repiten de forma simultánea en ambos. Por ejemplo:

                        p #[b VS Code]

                        p.mb-0 a = {1, 2, 3}
                        p.mb-0 b = {3, 4, 5}
                        p print(a ^ b)

                        p Al ejecutarlo en VS Code, el resultado es {1, 2, 4, 5}, todos los valores no compartidos.

                    .row(titulo="")
                      .col-md-6
                        figure
                          img(src='@/assets/curso/temas/t3/14.png')

                      .col-md-6.mb-4.mb-md-0
                        p #[b Método add()]: instrucción que agrega un nuevo elemento a un conjunto ya existente; si el valor ya está presente en el conjunto, Python no genera ningún error ni lo duplica. Por ejemplo:

                        p #[b VS Code]

                        p.mb-0 frutas = {'mango', 'pera'}
                        p.mb-0 frutas.add('limón')
                        p print(frutas)

                        p Al ejecutarlo en VS Code, el resultado es {'mango', 'pera', 'limón'}, con el nuevo elemento incorporado.

                    .row(titulo="")
                      .col-md-6
                        figure
                          img(src='@/assets/curso/temas/t3/15.png')

                      .col-md-6.mb-4.mb-md-0
                        p #[b Método discard()]: instrucción que elimina un elemento específico de un conjunto de forma segura; a diferencia del método remove(), no genera ningún error si el valor buscado no existe. Por ejemplo:

                        p #[b VS Code]

                        p.mb-0 frutas = {'mango', 'pera'}
                        p.mb-0 frutas.discard('uva')
                        p print(frutas)

                        p Al ejecutarlo en VS Code, el resultado es {'mango', 'pera'}, sin ningún error, aunque 'uva' no estaba presente.


    p.mt-4 Estas definiciones, ya verificadas en código, permiten comprender el propósito de cada operación antes de aplicarla en los ejemplos integrados que se presentan a continuación: mientras que la creación y las operaciones matemáticas manipulan el conjunto como un todo, los métodos add() y discard() permiten modificar sus elementos de forma individual.              
                  
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Además de las operaciones y los métodos que modifican un conjunto, Python ofrece dos métodos que permiten comparar la relación entre dos conjuntos sin alterarlos: issubset(), que verifica si todos los elementos de un conjunto están contenidos en otro, e issuperset(), que verifica la relación inversa, es decir, si un conjunto contiene todos los elementos del otro. Ambos métodos devuelven un valor booleano y son complementarios: si A es subconjunto de B, entonces B es, necesariamente, superconjunto de A.

        p.mt-4 El siguiente código aplica ambos métodos sobre los mismos dos conjuntos, evidenciando esta relación complementaria.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/16.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Relación entre conjuntos con issubset() e issuperset()
      
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | primarios = {'rojo', 'azul', 'amarillo'}
                | muestra = {'rojo', 'azul'}
                | print(muestra.issubset(primarios))
                | print(primarios.issuperset(muestra))  

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Resultado esperado
      
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | True
                | True              


    p.mt-4 El resultado anterior confirma la relación descrita: como muestra es subconjunto de primarios, se cumple automáticamente que primarios es superconjunto de muestra. Reconocer esta relación resulta útil en la práctica, ya que permite inferir una condición a partir de la otra sin necesidad de comprobarlas de forma independiente, lo que agiliza la verificación de datos cuando se trabaja con grupos de información relacionados entre sí.                  

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p El siguiente código ejecuta en un solo bloque las cuatro operaciones entre conjuntos que se presentaron anteriormente, lo que permite comparar directamente el resultado que produce cada operador sobre el mismo par de valores. Este tipo de comparación conjunta resulta útil, por ejemplo, al cruzar los conjuntos de clientes de la sede Bogotá y la sede Medellín para responder distintas preguntas de análisis sin necesidad de reescribir los datos en cada caso.   

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t3/17.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Operaciones matemáticas de conjuntos
      
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | A = {1, 2, 3, 4}
                | B = {3, 4, 5, 6}
                | print(A | B)    # Unión
                | print(A & B)    # Intersección
                | print(A - B)    # Diferencia
                | print(A ^ B)    # Diferencia simétrica
        
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Resultado esperado
      
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | {1, 2, 3, 4, 5, 6}
                | {3, 4}
                | {1, 2}
                | {1, 2, 5, 6}


    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/temas/t3/18.svg', style='width: 180px').m-auto
                
                .col
                  p Al ejecutar las operaciones entre conjuntos, se observa que cada operador cumple una función específica: la unión reúne todos los elementos, la intersección conserva los comunes, la diferencia muestra los exclusivos de un conjunto y la diferencia simétrica identifica los valores no compartidos. Comparar estos resultados facilita comprender cómo se relacionan los datos y qué información aporta cada operación.         

    p.mt-4 Para consultar estas operaciones sin necesidad de ejecutar código cada vez, la siguiente tabla las organiza en un formato de referencia rápida, con un ejemplo de uso aplicado a una empresa colombiana con varias sucursales.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 5.
          span Operaciones de conjuntos en Python

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th(style="width: 30%") Operación
                th Descripción
                th Ejemplo de uso

            tbody
              tr(style="background-color: #F6F9F4")
                td 
                  b A | B (unión)
                td Todos los elementos de ambos conjuntos.
                td Reunir los clientes registrados en la sede Bogotá y en la sede Medellín.


              tr
                td 
                  b A y B (intersección)
                td Solo los elementos comunes a ambos.
                td Identificar los clientes que compraron en ambas sedes.
  

              tr(style="background-color: #F6F9F4")
                td 
                  b A - B (diferencia)
                td Elementos de A que no están en B.
                td Encuentre los productos que solo se ofrecen en la sede Bogotá.


              tr
                td 
                  b A ^ B (diferencia simétrica)
                td Elementos en A o en B, pero no en ambos.
                td Detectar los clientes que solo compraron en una de las dos sedes.


    p.mt-4 Reconocer qué pregunta responde cada operación evita aplicar la fórmula equivocada al analizar datos reales, la unión reúne, la intersección aísla lo común, la diferencia identifica lo exclusivo de un grupo y la diferencia simétrica resalta lo que no comparten entre sí.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además de las operaciones matemáticas entre conjuntos, Python dispone de métodos que permiten modificar sus elementos. El método add() agrega un valor nuevo; discard() elimina un elemento sin generar error cuando el dato no existe, y clear() vacía el conjunto por completo. Estas acciones son útiles cuando se necesita actualizar información sin permitir valores duplicados.             


    p.mt-4 El siguiente código muestra cómo agregar y eliminar elementos de un conjunto. Para visualizar el resultado en Visual Studio Code, se utiliza la función print(), ya que las instrucciones por sí solas no siempre muestran la salida cuando se ejecutan desde un archivo .py.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Actualización de elementos en un conjunto
      
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | # Métodos para modificar conjuntos
                | colores = {"rojo", "verde", "azul"}
                | 
                | colores.add("amarillo")       # Agrega un nuevo elemento.
                | colores.discard("negro")     # No genera error, aunque el elemento no exista.
                | colores.discard("rojo")        # Elimina el elemento indicado.
                | print(colores)


        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Resultado esperado
      
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | {'verde', 'amarillo', 'azul'}

        p El resultado puede mostrarse en un orden diferente, porque los conjuntos no conservan una posición fija para sus elementos. Lo importante es verificar que el valor "amarillo" fue agregado, que "rojo" fue eliminado y que "negro" no generó error al no estar presente en el conjunto.


    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Además de modificar elementos, los conjuntos permiten verificar relaciones entre grupos de datos. Los métodos issubset() e issuperset() ayudan a comprobar si un conjunto está contenido dentro de otro o si contiene todos los elementos de otro conjunto.               

    p.mt-4 Para consolidar el estudio de las estructuras de datos compuestas, la Tabla 6 compara las características principales de listas, tuplas, conjuntos y diccionarios. Esta referencia permite identificar sus diferencias en sintaxis, orden, mutabilidad, manejo de duplicados, forma de acceso y uso frecuente dentro de un programa en Python.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 6.
          span Comparación de estructuras de datos compuestas en Python

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th(style="width: 30%") Importancia
                th Lista ( list)
                th Tupla ( tuple)
                th Conjunto ( set)
                th Diccionario ( dict)

            tbody
              tr(style="background-color: #F6F9F4")
                td 
                  b Sintaxis
                td []
                td ()
                td {} o set()
                td {clave: valor}


              tr
                td 
                  b Orden
                td Conserva el orden.
                td Conserva el orden.
                td No tiene orden posicional fijo.
                td Conserva el orden de inserción desde Python 3.7.
  

              tr(style="background-color: #F6F9F4")
                td 
                  b Mutabilidad
                td Se puede modificar.
                td No se puede modificar.
                td Se puede modificar.
                td Se puede modificar.


              tr
                td 
                  b Duplicados
                td Permite valores repetidos.
                td Permite valores repetidos.
                td No permite valores repetidos.
                td No permite claves repetidas.

              tr(style="background-color: #F6F9F4")
                td 
                  b Forma de acceso
                td Por índice.
                td Por índice.
                td Por recorrido o pertenencia.
                td Por clave.


              tr
                td 
                  b Uso típico
                td Colecciones que cambian.
                td Datos fijos.
                td Elementos únicos.
                td Pares clave-valor.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/20.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t3/21.svg', style='width: 100px').m-auto
          
          .col
            p Esta comparación facilita la selección de la estructura más adecuada según la necesidad del programa. Las listas son útiles cuando los datos deben cambiar; las tuplas, cuando se requiere conservar información fija; los conjuntos, cuando se necesita evitar duplicados, y los diccionarios, cuando la información debe consultarse mediante claves.

        .row.justify-content-center.mt-2
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Una vez reconocidas las estructuras de datos compuestas, es frecuente que los valores deban transformarse antes de calcularlos, compararlos o mostrarlos. Por esta razón, el siguiente apartado aborda la conversión de tipos de datos, un proceso necesario para adaptar la información al formato requerido por cada operación en Python.                   


    separador
    #t_3_3titulo-segundo.color-acento-contenido
      h2 3.3. Conversión de tipos de datos  

    .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La conversión de tipos de datos permite transformar un valor de un tipo a otro para que pueda utilizarse correctamente dentro de una operación. En Python, esta acción es frecuente cuando se reciben datos como texto, se realizan cálculos numéricos, se comparan valores o se preparan resultados para mostrarlos en pantalla.         


    p.mt-4 Esta conversión debe aplicarse de manera intencional, porque no todos los valores pueden transformarse a cualquier tipo. Por ejemplo, la cadena "25" puede convertirse en número entero con int("25"), pero la cadena "hola" no puede convertirse en número, ya que no representa un valor numérico válido.

    p Para comprender las funciones de conversión más utilizadas en Python, se presentan las siguientes definiciones con ejemplos básicos:

    .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
      img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
      h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones de conversión en Python

    .row.justify-content-center 
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="int()")
            .col-md-12.mb-4.mb-md-0
              p Convierte un valor válido en número entero. Por ejemplo, int("25") transforma la cadena "25" en el número 25, lo que permite realizar operaciones como sumar, restar o comparar edades, cantidades o conteos. 
    
          .row(numero="2" titulo="float()")
            .col-md-12.mb-4.mb-md-0
              p Convierte un valor válido en número decimal. Por ejemplo, float("18.66") transforma el texto "18.66" en un valor numérico con decimales, útil para precios, promedios, porcentajes o medidas. 
    
          .row(numero="3" titulo="str()")
            .col-md-12.mb-4.mb-md-0
              p Convierte un valor en cadena de caracteres. Por ejemplo, str(35) transforma el número 35 en texto, lo que permite unirlo con mensajes o mostrarlo dentro de una salida informativa. 

          .row(numero="4" titulo="bool()")
            .col-md-12.mb-4.mb-md-0
              p Convierte un valor a su equivalente lógico. Por ejemplo, bool(0) devuelve False, mientras que bool("hola") devuelve True. Esta función es útil para validar si un dato está vacío o contiene información. 
    
          .row(numero="5" titulo="list(), tuple() y set()")
            .col-md-12.mb-4.mb-md-0
              p Convierten secuencias en listas, tuplas o conjuntos. Por ejemplo, list("Python") separa cada carácter en una lista, mientras que set([1, 1, 2]) elimina valores repetidos. 
    
          .row(numero="6" titulo="ord() y chr()")
            .col-md-12.mb-4.mb-md-0
              p Permiten trabajar con códigos Unicode. Por ejemplo, ord("A") devuelve 65, y chr(65) devuelve "A". Estas funciones son útiles cuando se requiere relacionar caracteres con su código numérico. 
    
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/t3/23.png', alt='', style="width: 100%").m-auto



    p.mt-4 Estas funciones facilitan la adaptación de los datos según la necesidad del programa. Su uso adecuado evita errores al calcular, comparar, validar o presentar información, especialmente cuando los valores provienen de entradas externas o formularios.


    .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
      img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
      h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Código de ejemplo


    p El siguiente código muestra cómo convertir datos recibidos como texto en valores numéricos y, posteriormente, transformar un resultado numérico en cadena de caracteres. Este proceso es común cuando se capturan datos desde teclado o desde formularios.


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Conversión básica con int(), float() y str()
    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/24.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | edad_texto = "25"
                | edad = int(edad_texto)
                | edad_futura = edad + 10
                | 
                | precio_texto = "18.66"
                | precio = float(precio_texto)
                | 
                | mensaje = "Edad futura: " + str(edad_futura)
                | 
                | print(edad_futura)
                | print(precio)
                | print(mensaje)

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Resultado esperado
    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | 35
                | 18.66
                | Edad futura: 35


    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p El código permite observar que la edad, inicialmente almacenada como texto, se convierte en número entero para realizar una suma. Luego, el resultado se transforma en cadena de caracteres para integrarlo dentro de un mensaje.


    p.mt-4 La siguiente tabla reúne funciones de conversión y utilidad frecuentes en Python. Este recurso sirve como referencia rápida para reconocer qué función aplicar según el tipo de dato que se necesita obtener.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 6.
          span Comparación de estructuras de datos compuestas en Python

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th(style="width: 30%") Función
                th Descripción
                th Ejemplo de uso

            tbody
              tr(style="background-color: #F6F9F4")
                td 
                  b int(x)
                td Convertir xun número entero. Si xes así float, elimina la parte decimal.
                td int("25") → 25

              tr
                td 
                  b float(x)
                td Convierta xun número de punto flotante.
                td float("18.66") → 18.66

              tr(style="background-color: #F6F9F4")
                td 
                  b str(x)
                td Convertir xuna cadena de caracteres.
                td str(35) → "35"

              tr
                td 
                  b bool(x)
                td Convierte xun valor booleano: Trueo False.
                td bool("") → Falso

              tr(style="background-color: #F6F9F4")
                td 
                  b list(x)
                td Convierte xa lista.
                td list("Py") → ["P", "y"]

              tr
                td 
                  b tuple(x)
                td Convierte xa tupla.
                td tuple([1, 2]) → (1, 2)

              tr(style="background-color: #F6F9F4")
                td 
                  b set(x)
                td Convierte xun conjunto y elimina duplicados.
                td set([1, 1, 2]) → {1, 2}

              tr
                td 
                  b ord(c)
                td Devuelve el código Unicode del carácter c.
                td ord("A") → 65

              tr(style="background-color: #F6F9F4")
                td 
                  b chr(n)
                td Devuelve el carácter correspondiente al código n.
                td chr(65) → "A"

    p.mt-4 El reconocimiento de estas funciones permite seleccionar la conversión más adecuada según la operación que se desea realizar. Así, se reducen errores al procesar entradas de usuario, transformar secuencias, depurar duplicados o preparar datos para su presentación.                  

    .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
      img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
      h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Código de aplicación

    p El siguiente código aplica varias funciones de conversión y utilidad sobre valores simples y secuencias. Este ejemplo permite comparar cómo cambia la representación de un dato según la función utilizada.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Conversión de tipos y funciones auxiliares

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t3/25.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        
    
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | print(bool(0))
                |print(bool("hola"))
                |
                |print(list("Python"))
                |print(tuple([1, 2, 3]))
                |print(set([1, 1, 2, 3]))
                |
                |print(ord("A"))
                |print(chr(65))

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.bg-11.p-1 Resultado esperado

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/26.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        
    
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | False
                | True
                | ['P', 'y', 't', 'h', 'o', 'n']
                | (1, 2, 3)
                | {1, 2, 3}
                | 65
                | A



    p.mt-4 El resultado muestra que bool() interpreta valores vacíos o cero como False, mientras que los valores con contenido se interpretan como True. También se observa que list(), tuple() y set() cambian la forma de organizar una secuencia, y que ord() y chr() permiten relacionar caracteres con sus códigos Unicode.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t3/27.svg', style='width: 100px').m-auto
          
          .col
            p En síntesis, la conversión de tipos es una práctica necesaria para asegurar que cada dato tenga el formato adecuado antes de ser procesado. Esta habilidad resulta especialmente importante cuando los datos provienen de una entrada por teclado, de un formulario o de una fuente externa.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Con esta base, el siguiente tema aborda la entrada y salida de datos, proceso mediante el cual un programa recibe información del usuario, la procesa y presenta resultados. Esta relación es fundamental, porque los datos capturados con input() llegan como texto y, en muchos casos, deben convertirse antes de realizar cálculos, comparaciones o validaciones.





</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

export default {
  name: 'Tema3',
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
