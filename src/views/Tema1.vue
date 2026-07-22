<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Instalación y primeros pasos en Python

      figure
        img(src='@/assets/curso/temas/t1/1.png', style="width: 1220px").m-auto

      p.mt-4 El aprendizaje de Python inicia con la preparación del entorno de trabajo, ya que este permite escribir, ejecutar y verificar instrucciones de código de manera organizada. Contar con una instalación adecuada facilita el desarrollo de ejercicios prácticos, la revisión de errores y la comprensión progresiva de los fundamentos de programación.

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/2.png', style="width: 490px").m-auto
        .col-lg-7
          .row.justify-content-center.mt-4
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color1.p-4
                    p Python es un lenguaje de programación de propósito general, reconocido por su sintaxis clara, su legibilidad y su amplia aplicación en áreas como desarrollo de software, análisis de datos, automatización e inteligencia artificial. Estas características lo convierten en una herramienta adecuada para iniciar la construcción de programas secuenciales, en los que las instrucciones se ejecutan paso a paso.

          .row.align-items-start.mt-2
            .col-lg-2.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/3.svg', style='width: 100px').m-auto
            
            .col
              p Antes de iniciar la instalación, es necesario descargar el instalador desde el sitio oficial de Python: https://www.python.org/downloads/. Esta fuente garantiza que el archivo corresponda a una versión reciente, estable y libre de modificaciones no autorizadas. El uso de páginas no oficiales puede exponer el equipo a instaladores desactualizados o con código malicioso.

      p.mt-4 La preparación inicial en Python requiere aplicar buenas prácticas que facilitan la escritura, comprensión y corrección del código. Entre las más importantes se encuentran:

      .row
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Usar comentarios
            p.text-center Permiten explicar partes importantes del código y facilitar su comprensión durante la revisión o modificación del programa.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Leer mensajes de error
            p.text-center Ayuda a identificar fallas de escritura, sintaxis o ejecución, y orienta la corrección del código.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Escribir código claro
            p.text-center Favorece que las instrucciones sean comprensibles, ordenadas y fáciles de seguir durante la ejecución del programa.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-1.p-5.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Mantener buenas prácticas
            p.text-center Contribuye a crear soluciones más organizadas, legibles y sencillas de actualizar. 

      p.mt-4 Estas prácticas fortalecen el proceso de aprendizaje, porque permiten comprender mejor el funcionamiento del código y corregir errores de manera progresiva antes de avanzar hacia la escritura de instrucciones básicas en Python.    

      .row.justify-content-center.mt-4.align-items-center(data-aos="fade-down")
        .col-lg-10
          .row.align-items-center
            .col-lg-2.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/4.svg', style='width: 80px').m-auto
            
            .col
              p.bg-1.p-4 Con esta preparación, se orienta la instalación de Python y la verificación del entorno de trabajo, de modo que las herramientas necesarias queden disponibles antes de escribir las primeras instrucciones.

          p.mt-4 Como apoyo visual, la Figura 1 muestra la página oficial de descargas de Python. Esta referencia permite reconocer el sitio correcto, aunque su apariencia puede variar con las actualizaciones de la plataforma.

      .row.justify-content-center
        .col-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Figura 1.
            span Sitio oficial para la descarga de Python.
          figure
            img.d-none.d-md-block.m-auto(
              src='@/assets/curso/temas/t1/6.png')
            figcaption.mt-2.d-none.d-md-block Nota. Tomada de Python Software Foundation (s.f.-a).
        

      separador
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1. Proceso de instalación

      .row.align-items-center.justify-content-center
        .col-lg-12
          .row.justify-content-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/temas/t1/7.png', class="w-100 h-100 object-fit-cover", style="margin-left:-11px")
                .col-lg
                  figure
                    img(src="@/assets/curso/temas/t1/8.svg", alt="", style="width: 90px")

                  p.mt-2 La instalación de Python permite preparar el entorno de trabajo necesario para escribir, ejecutar y comprobar instrucciones básicas de programación. En este proceso se incorpora el intérprete del lenguaje al equipo, herramienta que permite que las instrucciones escritas en Python puedan ser interpretadas y ejecutadas correctamente.

                  p Antes de iniciar, es importante contar con conexión a internet, permisos de administrador y acceso al sitio oficial de Python. Estos elementos ayudan a realizar una instalación segura, estable y adecuada para comenzar el trabajo práctico con el lenguaje.

      p.mt-4 A continuación, se presentan los pasos para realizar la instalación en un equipo con sistema operativo Windows:

      .row.justify-content-center.mt-4 
        .col-lg-10
          LineaTiempoD.color-primario.linea-bold
            .row(numero="1" titulo="Paso 1. Acceder al sitio oficial de Python")
              p Ingresar al sitio web oficial del lenguaje a través de la URL http://www.python.org. Es fundamental utilizar esta página oficial para garantizar que el instalador descargado sea seguro y corresponda a la versión más reciente y estable del lenguaje.
      
            .row(numero="2" titulo="Paso 2. Descargar el instalador ejecutable")
              .col-md-12.mb-4.mb-md-0
                p En la página oficial de descargas, ubicar la sección “Descargar la última versión para Windows”. Luego, seleccionar el enlace Python 3.14.6, disponible en la opción “O consiga el instalador independiente para Python 3.14.6”. Esta opción permite obtener el archivo ejecutable para instalar la versión indicada en un equipo con sistema operativo Windows.

                p Si el equipo utiliza otro sistema operativo, se debe seleccionar el enlace correspondiente en la línea “#[b Python para Windows, Linux/Unix, macOS, Android, iOS u otros]”, según la necesidad de instalación.
      
            .row(numero="3" titulo="Paso 3. Iniciar la instalación")
              .col-md-12.mb-4.mb-md-0
                p Una vez descargado el archivo, localizarlo en la carpeta de descargas y ejecutarlo haciendo doble clic sobre él. Se abrirá la ventana del asistente de instalación de Python.

            .row(numero="4" titulo="Paso 4. Seleccionar la casilla Add Python to PATH")
              .col-md-12.mb-4.mb-md-0
                p Antes de continuar con la instalación, es indispensable marcar la casilla "Add Python to PATH" que aparece en la parte inferior de la ventana inicial del instalador. Esta opción es clave, ya que permite ejecutar Python desde cualquier ubicación en la línea de comandos sin necesidad de escribir la ruta completa del ejecutable. Omitir este paso obligará posteriormente a configurar las variables de entorno de forma manual.

            .row(numero="5" titulo="Paso 5. Completar el proceso de instalación")
              .col-md-12.mb-4.mb-md-0
                p Seleccionar la opción de instalación recomendada (Install Now) y esperar a que el asistente finalice el proceso. Al terminar, se mostrará un mensaje de confirmación que indica que la instalación fue exitosa.

            .row(numero="6" titulo="Paso 6. Comprobar la instalación desde la línea de comandos")
              .col-md-12.mb-4.mb-md-0

                p Para verificar que Python quedó correctamente instalado, realizar las siguientes acciones:

                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta2
                      span.text-black a
                    p.mb-0 Abrir la línea de comandos de Windows ejecutando el programa cmd.exe (puede buscarse desde el menú Inicio escribiendo "cmd").

                  li 
                    .lista-ol--cuadro__vineta2
                      span.text-black b
                    p.mb-0 En la ventana de la consola, escribir la palabra Python y presionar la tecla ENTER.

                  li 
                    .lista-ol--cuadro__vineta2
                      span.text-black c
                    p.mb-0 Si la instalación es correcta, se iniciará el entorno interactivo de Python, mostrando la versión instalada y el símbolo del sistema >>>, donde es posible introducir comandos y probar instrucciones del lenguaje.


            .row(numero="7" titulo="Paso 7. Salir del entorno interactivo")
              .col-md-12.mb-4.mb-md-0
                p Para cerrar la sesión del intérprete interactivo y regresar a la línea de comandos de Windows, utilizar el comando quit() y presionar ENTER.
      
      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/temas/t1/9.png', style='width: 100px').m-auto
                  
                  .col
                    p Además del intérprete estándar, Python puede ejecutarse en entornos locales y en plataformas en la nube. La elección depende del tipo de práctica, la disponibilidad de internet, el nivel de configuración requerido y la forma como se desea organizar el trabajo con el código. 


      p.mt-4 A continuación, se describen las principales alternativas para ejecutar Python y sus usos recomendados según el tipo de actividad:

      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/10.svg')          
          h3.text-center Entornos locales
          p Son herramientas instaladas en el equipo, como Visual Studio Code, PyCharm o IDLE. Permiten trabajar sin depender totalmente de internet, guardar proyectos, depurar código y configurar extensiones, según necesidad técnica. 
        
        .col-md.tarjeta.bg-3.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/11.svg')          
          h3.text-center Entornos en la nube
          p Son plataformas accesibles desde navegador, como Google Colab y Jupyter Notebook. Permiten ejecutar código Python, compartir archivos, trabajar colaborativamente y realizar prácticas sin instalar programas en el equipo local previamente. 

        .col-md.tarjeta.bg-4.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/12.svg')          
          h3.text-center Uso recomendado de herramientas locales
          p Convienen cuando se requiere administrar carpetas del proyecto, instalar extensiones, usar terminal integrada, depurar archivos completos y conservar configuraciones propias del equipo de trabajo local. 
        
        .col-md.tarjeta.bg-5.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/13.svg')          
          h3.text-center Uso recomendado de la nube
          p Conviene para practicar rápidamente, compartir cuadernos, ejecutar ejemplos guiados y trabajar con datos, sin depender de instalaciones previas ni configuraciones avanzadas del equipo personal local. 

      p.mt-4 Comprender estas alternativas permite seleccionar el entorno más adecuado según el tipo de actividad, los recursos disponibles y el nivel de configuración requerido. En este contexto, Visual Studio Code se presenta como una opción local recomendada para escribir, ejecutar y revisar programas en Python de manera organizada.

      .titulo-tercer-nivel.mb-5.mt-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/14.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Instalación de Visual Studio Code

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t1/15.png', style="width: 390px").m-auto
        .col-lg-8
          p Visual Studio Code, también conocido como VS Code, es un editor de código gratuito y multiplataforma desarrollado por Microsoft. Su uso facilita la escritura, revisión y ejecución de programas en Python mediante herramientas como resaltado de sintaxis, terminal integrada, depuración y extensiones.

          .row.justify-content-center.mt-2
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color2.p-4
                    p En el trabajo con Python, VS Code permite organizar archivos, ejecutar instrucciones y revisar errores desde un mismo entorno. Esta integración favorece una práctica más ordenada, ya que el código, la consola y los mensajes de verificación pueden consultarse en una sola interfaz.

          p.mt-2 Para utilizar Python en VS Code, es necesario instalar la extensión oficial del lenguaje. Esta extensión permite ejecutar archivos, reconocer la sintaxis, apoyar la depuración y aplicar buenas prácticas de codificación. Con ello, el editor se convierte en un entorno adecuado para iniciar la construcción de programas secuenciales.

      .tarjeta.bg-6.p-4.p-md-5.mb-5.mt-4
        .row.justify-content-around.align-items-center
          .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t1/16.svg")

          .col-md.col-lg-6

            .titulo-segundo.color-acento-contenido
              h3 Instalación de Python en Visual Studio Code

            p Para reforzar la instalación y configuración del entorno de trabajo, se recomienda consultar el recurso audiovisual sobre el uso de Visual Studio Code con Python. Este material orienta, de manera visual, el procedimiento para preparar el editor y ejecutar los primeros programas.
            
            a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=gEg1lxY5ioA  " target="_blank")
              span Abrir video
              i.fas.fa-file-download      
              


      p.mt-4 El uso de un editor de código facilita la escritura organizada de instrucciones y la revisión de los resultados obtenidos. Esta base permite avanzar hacia una práctica esencial en programación, documentar el código mediante comentarios que expliquen su propósito sin afectar la ejecución del programa.

      separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2. Comentarios en Python

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/17.png', style="width: 490px").m-auto
        .col-lg-7
          .row.align-items-start.mt-4
            .col-lg-2.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/18.svg', style='width: 100px').m-auto
            
            .col
              p Los comentarios permiten documentar el propósito de una instrucción sin afectar la ejecución del programa. Su uso resulta útil para explicar decisiones, registrar observaciones y facilitar que otras personas comprendan el código cuando deban revisarlo o modificarlo.

          .row.justify-content-center.mt-2
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color1.p-4
                    p Un comentario es una línea de texto no ejecutable; esto significa que el intérprete de Python no la toma como una instrucción del programa. Por esta razón, los comentarios ayudan a mejorar la claridad del código sin cambiar los resultados de la ejecución.

          p.mt-2 En Visual Studio Code, los comentarios se escriben dentro del archivo de Python con extensión .py. Para ejecutarlos, se guarda el archivo y se usa la terminal integrada del editor. El intérprete omite los comentarios y solo ejecuta las instrucciones de código.
        
      
      p Hay dos formas de escribir comentarios en Python:

      .row.bg-7
        .col-12
          .p-5
            .row.justify-content-center
              .col-11
                SlyderA.p-4.bg-8.bg-r8(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p 
                        b A. Comentarios de una línea

                      p Se escriben con el símbolo # al inicio de la línea. Se utilizan para explicar una instrucción breve o una acción específica del programa.

                      p # esto es una línea de comentario
                    
                    .col-lg-6
                      figure(data-aos="fade-down")
                        img(src='@/assets/curso/temas/t1/19.png', style='width: 572px')
                
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p B. Comentarios de varias líneas

                      p Pueden escribirse usando varias líneas iniciadas con # o mediante comillas triples al inicio y al final del bloque de texto, cuando se requiere una explicación más amplia.


                      p.mb-0 # Autor: Pepito Pérez
                      p.mb-0 # Ciudad: Bogotá
                      p.mb-0 >>> x = 0
                      p.mb-0 >>> y = 8 # Los comentarios también pueden estar dentro de una línea
                      p.mb-0 """ Este es un comentario multilínea.
                      p Podemos escribir varias líneas. """
                    
                    .col-lg-6
                      figure(data-aos="fade-down")
                        img(src='@/assets/curso/temas/t1/20.png', style='width: 572px')
                

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p Para comprobar su funcionamiento en VS Code, se puede crear un archivo llamado comentarios.py, copiar el código anterior y ejecutarlo desde la terminal. Al hacerlo, Python ignorará los comentarios y procesará únicamente las instrucciones ejecutables.          

      p.mt-4 Los comentarios fortalecen la comprensión y el mantenimiento del código. Para usarlos de manera adecuada, se recomienda tener en cuenta los siguientes aspectos:

      .row
        .col-11       
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg-9.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/21.svg').img100.m-auto
              p.text-center
                  b Lectura del código
              p.text-center.mb-0 Facilitan que otras personas comprendan la lógica del programa sin revisar cada instrucción en detalle. 
                    
            .tarjeta.bg-9.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/22.svg').img100.m-auto
              p.text-center
                  b Revisión y corrección
              p.text-center.mb-0 Ayudan a identificar la intención de una línea o bloque de código durante procesos de ajuste, prueba o depuración. 
                    
            .tarjeta.bg-9.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/23.svg').img100.m-auto
              p.text-center
                  b Mantenimiento del programa
              p.text-center.mb-0 Permiten actualizar, ampliar o modificar el código con mayor facilidad, especialmente cuando el proyecto crece o es revisado tiempo después. 
                    
            .tarjeta.bg-9.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/24.svg').img100.m-auto
              p.text-center
                  b Claridad de las explicaciones
              p.text-center.mb-0 Deben redactarse como oraciones breves, completas y pertinentes, sin repetir de forma innecesaria lo que el código ya expresa. 
                    
            .tarjeta.bg-9.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/25.svg').img100.m-auto
              p.text-center
                  b Actualización permanente
              p.text-center.mb-0 Deben revisarse cuando el código cambia, para evitar explicaciones desactualizadas o inconsistentes con la lógica implementada. 
                    
            
      p.mt-4 El uso adecuado de comentarios contribuye a escribir programas más legibles, ordenados y fáciles de mantener. Por esta razón, deben emplearse como apoyo a la comprensión del código y no como una repetición literal de cada instrucción.  

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t1/26.png', style="width: 390px").m-auto
        .col-lg-8
          .row.align-items-start.mt-4
            .col-lg-2.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/31.svg', style='width: 100px').m-auto
            
            .col
              p Para fortalecer la comprensión sobre el uso de comentarios en Python, se presenta el siguiente pódcast instruccional. Este recurso explica, de manera sencilla y aplicada, cómo los comentarios ayudan a documentar instrucciones, aclarar la intención del código y facilitar su revisión en un entorno de programación como Visual Studio Code.

          .row.align-items-center.p-4.bg-10.bg-r8
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t1/32.svg', style="width: 100%").m-auto
            .col-lg-8
              .tarjeta.clr--pink.p-4.rounded-0.h-100
                  .tarjeta.bg-white.p-4
                    TarjetaAudio.color-acento-contenido.mb-3(
                    texto="Pódcast"
                    :audio="require_src('@/assets/componentes/audios/audio-ej.mp3')"
                )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.mb-0 Pódcast
          

          
      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p El pódcast presentado permite reforzar la importancia de los comentarios como apoyo para comprender y mantener el código escrito en Python. Su uso adecuado favorece la lectura del programa, evita confusiones durante la revisión y facilita que otras personas comprendan la lógica implementada.            
  


      p.mt-4 Además de documentar el código mediante comentarios, es necesario aprender a interpretar los mensajes que Python muestra cuando una instrucción no se ejecuta correctamente. Estos mensajes permiten identificar errores de escritura, sintaxis o ejecución, y orientan la corrección del programa de manera progresiva. Por ello, el siguiente apartado aborda los errores de tecleo y las excepciones como elementos clave para revisar, ajustar y mejorar el código.

      separador
      #t_1_3.titulo-segundo.color-acento-contenido
        h2 1.3. Errores de tecleo y excepciones

      figure
        img(src='@/assets/curso/temas/t1/40.png', style="width: 1280px").m-auto

      p.mt-4 Los mensajes de error deben leerse como información de diagnóstico. En Python, cada excepción indica una posible causa del problema y ayuda a localizar la instrucción que requiere revisión, por lo que su interpretación hace parte del proceso de aprendizaje de la programación.

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t1/42.png', style="width: 390px").m-auto
        .col-lg-6
          .row.align-items-start.mt-4
            .col-lg-2.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/41.svg', style='width: 84px').m-auto
            
            .col
              p Si se digita incorrectamente una expresión, Python lo indicará con un mensaje de error. El mensaje de error proporciona información acerca del tipo de error cometido y del lugar en el que ha sido detectado.

          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11 Código. Ejemplo de error de sintaxis.

          .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | >>> 1 + 2)
                | SyntaxError: unmatched ')'


      .row.justify-content-center.mt-2
        .col-lg-10
          p p.mt-2 En este ejemplo se ha cerrado un paréntesis cuando no había otro abierto previamente. Python indica un error de sintaxis (SyntaxError) y señala con el carácter ^ el lugar del error.

          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/43.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-2 En Python, los errores que se producen durante el análisis o la ejecución de una instrucción se conocen como excepciones. Estas permiten identificar la causa del problema y orientar la corrección del código de manera más precisa.

          
      p.mt-4 La siguiente tabla presenta algunas excepciones frecuentes en Python y su descripción general. Este recurso facilita la lectura de los mensajes de error y ayuda a reconocer situaciones comunes durante la escritura de programas básicos.

      .titulo-sexto.color-acento-contenido.mb-3.mt-4
        h5 Tabla 1.
        span Excepciones comunes en Python

      .tabla-a.color-acento-contenido 
        table
          thead(style="background-color: #FE9841")
            tr
              th(style="width: 30%") Tipo de excepción
              th Descripción
          tbody
            tr(style="background-color: #F6F9F4")
              td SyntaxError
              td Error en la estructura del código (paréntesis, comillas, indentación).
            tr
              td NameError
              td Se usa una variable que no ha sido definida previamente.
            tr(style="background-color: #F6F9F4")
              td TypeError
              td Se aplica una operación a un tipo de dato incompatible.

            tr
              td ValueError
              td El valor pasado a una función no es válido, aunque el tipo sea correcto.

            tr(style="background-color: #F6F9F4")
              td ZeroDivisionError
              td Se intenta dividir un número entre cero.

            tr
              td IndentationError
              td La indentación del código no es correcta.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-2
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/temas/t1/44.svg', style='width: 120px').m-auto
                  
                  .col
                    p Reconocer estas excepciones permite interpretar los mensajes de error con mayor seguridad y avanzar en la depuración del código. Por ello, se recomienda revisar la última línea del mensaje, donde Python suele indicar el tipo de excepción y una breve descripción del problema.

          p.mt-4 La revisión de errores y excepciones permite comprender que muchos problemas en Python se originan por el uso incorrecto de nombres, valores o tipos de datos. Por esta razón, después de reconocer cómo interpretar los mensajes del intérprete, es necesario estudiar las variables como elementos básicos para almacenar información, asignar valores y organizar los datos que serán procesados en un programa.




</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

export default {
  name: 'Tema1',
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
