<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La internet y la web
    
    .cont_1_1
      .cont_semicircle_absolute
        .p-4.p-lg-0(style="background-color:#3A1D71;border-radius:10px;position:relative;z-index:2;")
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure.col-md-7.col-lg-12.col-8.m-auto
                img(src="@/assets/curso/tema1/2.svg")
            .col-lg.p-0.p-lg-5.ps-lg-0(style="place-self:center;" data-aos="fade-left")
              p.mb-0.text-white Para todo proyecto #[em software] es recomendable alistar las herramientas necesarias y mínimas para iniciar con un desarrollo. En ese sentido, dependiendo del alcance, la tecnología y/o lenguaje se sugiere definir muy bien este tipo de recursos para realizar el ejercicio. En este orden de ideas se abordarán algunos conceptos fundamentales.
        Separador
        .titulo-segundo(data-aos="flip-up")
          h2#t_1_1 1.1 Conceptos sobre el entorno de desarrollo integrado - IDE
        
        p(data-aos="fade-right") Como primera medida, es necesario tener en cuenta la definición de un entorno de desarrollo integrado IDE, que es un espacio de trabajo basado en tecnologías y #[em software], que sirven de plataforma para el diseño de aplicaciones que componen una serie de herramientas para el desarrollador de #[em software]. Un IDE cuenta con las siguientes características:
        .semicircle_absolute.d-none.d-md-block(style="left: unset !important;right: -190px !important;top:140px;")
      
      .row.mt-4
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/3.svg")
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Editor de código fuente")
              p.mb-0 Es un editor de texto que ayuda a escribir en el lenguaje de programación definido; esta herramienta apoya la sintaxis o construcción de instrucciones, para que se realicen de la manera correcta. Una de sus funcionalidades más importantes es resaltar ciertas partes del código que se están desarrollando, para tener una referencia sobre el flujo o línea lógica del desarrollo de la aplicación. De manera adicional, hay editores que ayudan a autocompletar ciertas funciones ya preestablecidas del lenguaje.
            .row.col-xl-11.m-auto(titulo="Automatización de compilaciones locales")
              p.mb-0 Es un recurso que permite automatizar tareas sencillas e iterativas como parte de la creación de una compilación local del #[em software] para su uso por parte del desarrollador.
            .row.col-xl-11.m-auto(titulo="Depurador")
              p.mb-0 “Programa que sirve para probar otros programas y mostrar la ubicación de un error en el código original de forma gráfica” (Red Hat, 2021). Además, hay entornos que ayudan con varias opciones de la sintaxis para corregir el código.
    
    p.mt-4.fw-bold(data-aos="fade-right") Para el caso de este componente formativo se utilizará el IDE Visual Studio Code por las siguientes razones:

    .cont_1_2.mt-4

    

    
 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
<style lang="sass">
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 75%
  top: 0
  background: url(../assets/curso/tema1/1.png)
  background-size: cover
.acordion__accion__btn--a
  background-color: #FCA651
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,.3)
.acordion .tarjeta--azul
  background-color: #3A1D71
.acordion .tarjeta--azul h3
  color: #fff
.acordion .tarjeta.tarjeta--azul.acordion__activo
  background-color: #EAD6FC
.acordion .tarjeta.tarjeta--azul.acordion__activo h3
  color: #12263F
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/4.png)
  background-size: cover
</style>
