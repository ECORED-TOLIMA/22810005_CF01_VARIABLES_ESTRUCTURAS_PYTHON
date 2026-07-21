<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/1.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/intro/2.svg', style='width: 100px').m-auto
          
          .col
            p La construcción de programas secuenciales en Python requiere comprender los fundamentos que permiten recibir, almacenar, procesar y presentar información de manera clara. Estos elementos constituyen la base para escribir instrucciones organizadas, interpretar datos y desarrollar soluciones básicas orientadas a resolver necesidades concretas mediante código.

        p.mt-2 En la programación con Python, las variables cumplen un papel fundamental, ya que permiten guardar valores que pueden utilizarse durante la ejecución de un programa. A partir de ellas, es posible trabajar con diferentes tipos de datos, como números, cadenas de caracteres, valores booleanos y estructuras compuestas, los cuales facilitan la representación de información diversa dentro de una solución informática.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p.mb-0 De igual manera, las funciones de entrada y salida permiten establecer la comunicación entre el programa y la persona que lo utiliza. La función input() facilita la captura de datos, mientras que print() permite mostrar resultados en pantalla. Estas operaciones se complementan con la conversión de tipos, los operadores, las funciones integradas, los módulos, las librerías y los estándares de codificación que orientan la escritura de programas claros y ordenados.

    p.mt-4 Para fortalecer la comprensión de los conceptos abordados y contextualizar su aplicación en la construcción de programas secuenciales en Python, se recomienda acceder al recurso audiovisual que acompaña este componente formativo.


    .row.justify-content-center.align-items-center.mt-4(data-aos="fade-down")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
