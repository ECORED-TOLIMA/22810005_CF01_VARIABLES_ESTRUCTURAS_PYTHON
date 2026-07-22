<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta los fundamentos iniciales del lenguaje Python, con énfasis en la instalación del entorno de trabajo, el uso de comentarios, el reconocimiento de errores, la declaración de variables y el manejo de tipos de datos. A partir de estos elementos, se abordan los datos numéricos, booleanos y cadenas de caracteres, las operaciones aritméticas y las estructuras de datos compuestas, como listas, tuplas, rangos, diccionarios y conjuntos, las cuales permiten almacenar, organizar y transformar información dentro de un programa.

    p El recorrido continúa con la conversión de tipos de datos, las funciones de entrada y salida, los operadores aritméticos, lógicos, relacionales y de cadena, así como las funciones integradas, los módulos, las librerías y los estándares de codificación PEP 8. De este modo, se construye una base conceptual y práctica para elaborar programas secuenciales claros, funcionales y fáciles de mantener. A continuación, el mapa conceptual organiza de manera visual los ejes temáticos del componente formativo y las relaciones que los articulan.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado “Fundamentos de programación en Python” organiza el tema central en seis ejes: instalación y primeros pasos, variables y tipos de datos, estructuras de datos compuestas, entrada y salida de datos, operadores y funciones integradas, y módulos, librerías y estándares. Cada eje presenta los conceptos básicos para iniciar la programación en Python, desde la instalación del entorno y el uso de comentarios, hasta la declaración de variables, el manejo de listas, tuplas, rangos y conjuntos, el uso de las funciones input() y print(), la aplicación de operadores y la incorporación de módulos, librerías y buenas prácticas de codificación con PEP 8.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
