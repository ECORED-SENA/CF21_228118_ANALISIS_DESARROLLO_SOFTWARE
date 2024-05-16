<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Codificación de la API REST con Node.js
    
    .cont_2_1.pt-4
      .cont_semicircle_absolute
        .p-4.p-lg-0(style="background-color:#3A1D71;border-radius:10px;position:relative;z-index:2;")
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure.col-md-7.col-lg-12.col-8.m-auto
                img(src="@/assets/curso/tema2/2.svg")
            .col-lg.p-0.p-lg-5.ps-lg-0(style="place-self:center;" data-aos="fade-left")
              p.mb-0.text-white En este tema, se inicia con el desarrollo de la API REST, por lo que se verá la codificación de cada uno de los archivos que componen el proyecto. Para esto, es importante tener en cuenta dos cosas, la primera es realizar buenas prácticas de codificación, permitiendo que el código quede legible y mucho más limpio al momento de documentar y la segunda, es entender la estructura de directorios del proyecto, la cual va a dar el orden al proceso de búsqueda e indexación de las rutas y recursos que se necesitarán al momento del desarrollo.
        Separador
        .titulo-segundo(data-aos="flip-up")
          h2#t_2_1 2.1 Buenas prácticas en la codificación de Node.js
        .semicircle_absolute.d-none.d-md-block(style="left: unset !important;right: -190px !important;top:110px;")
      
      p(data-aoos="fade-right") Como primera medida, es necesario tener en cuenta la definición de un entorno de desarrollo integrado IDE, que es un espacio de trabajo basado en tecnologías y #[em software], que sirven de plataforma para el diseño de aplicaciones que componen una serie de herramientas para el desarrollador de #[em software]. Un IDE cuenta con las siguientes características:

      .row.mt-4
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4(style="background-color:#FFEFAF;border-radius:13px;")
            p El objetivo de seguir estándares de codificación, es alcanzar un código mantenible y se considera mantenible cuando el código es legible, consistente, predictivo y documentado. En la práctica, la corrección de errores y modificación del código desarrollado de un producto #[em software] toma demasiado tiempo y se llega algunas veces a que no es posible realizar del todo el desarrollo, por lo que se toma la decisión de iniciar de cero, debido a las malas prácticas. (Choque, 2016).
            figure.text-end
              img(src="@/assets/curso/tema2/3.svg" style="max-width:100px;display:inline;")
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema2/4.png")
    
    p.mt-4(data-aos="fade-right") A continuación, se indican las buenas prácticas enunciadas por uno de los mejores servicios de control de versiones y desarrollo de #[em software] colaborativo basado en Git, llamada GitLab. Esta comunidad sigue de igual manera estándares como Google JavaScript Style Guide (Whyte, 2021).

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/5.svg")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Código en general")
            ol.lista-ol
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 1. 
                div  Utilizar el punto y coma (;) como final de instrucción. Mejora la lectura y evita conflictos con herramientas de verificación de código.
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 2. 
                div Para delimitar y diferenciar cadenas de texto, se recomienda utilizar comillas simples con excepción de JSON.
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 3. 
                div La codificación en la sintaxis para los nombres de variables o procedimientos es lowerCamelCase, la cual establece que la letra inicial debe ser minúscula y las palabras siguientes deben tener la inicial en mayúscula, y el resto en minúscula, por ejemplo, var logFileName.
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 4. 
                div La codificación en la sintaxis de las clases e interfaces es UpperCamelCase que establece que la letra inicial debe ser mayúscula y las palabras siguientes deben tener la inicial en mayúscula, y el resto en minúscula.
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 5. 
                div Evitar escribir prefijos del tipo de dato a las variables. Se recuerda que las variables en JavaScript son sin tipo, es decir, que toman su tipo de dato dependiendo del valor.
          .row.col-xl-11.m-auto(titulo="Bloques de código")
            ol.lista-ol
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 1. 
                div Las líneas de código que tienen alguna relación, deben estar agrupadas sin espacio entre sus líneas.
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 2. 
                div La cantidad máxima de caracteres que debe tener una línea de código, debería ser de 120.
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 3. 
                div Los bloques de código que son alusivos a las clases, procedimientos y estructuras de control, deben estar identados con 4 espacios, que es lo mismo a una tabulación.
          .row.col-xl-11.m-auto(titulo="Procedimientos")
            p La cantidad de líneas que se recomiendan para un procedimiento es de 20, salvo casos excepcionales. En el caso que un procedimiento supere las 20 líneas, se debe evaluar la división del proceso en procesos más pequeños. Se debe tener en cuenta que un procedimiento debe realizar una tarea.
          .row.col-xl-11.m-auto(titulo="Manejo de errores y excepciones")
            ol.lista-ol
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 1. 
                div Como una buena práctica los errores y/o excepciones posibles, deben ser capturados (#[em catch]) y se debe lanzar (#[em throw]) un mensaje preciso, con el fin de evitar la finalización abrupta del programa.
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 2. 
                div En caso que el error requiera alguna acción por parte del usuario, como puede ser continuar, cancelar u otras opciones, el sistema debe informar al usuario sobre las consecuencias de cada elección.
          .row.col-xl-11.m-auto(titulo="Comentarios")
            ol.lista-ol
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 1. 
                div Los comentarios forman parte de la documentación de un proyecto, de hecho, esta buena práctica hace parte de la base del manual técnico de un proyecto de #[em software].
              li.d-flex
                span.fw-bold(style="color:#8722E2;") 2. 
                div Su principal ventaja es que, a partir de ellos, se logra reducir el costo de transferencia de conocimientos entre equipos de desarrollo, dado que es posible intervenir de manera más rápida en la continuación del desarrollo.
    
    .tarjeta.color-primario.p-3.mt-5(style="background: rgb(146,41,238);background: linear-gradient(180deg, rgba(146,41,238,1) 0%, rgba(98,17,170,1) 45%, rgba(52,9,90,1) 100%);" data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color:#00FFDF;") Desarrollo de la API REST
              p.text-small.text-white Lo invitamos a revisar el PDF #[strong Desarrollo API REST], en el cual se describen de manera sucinta, los pasos requeridos para el desarrollo de la API REST con Node.js. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Desarrollo_API_REST.pdf')" target="_blank")
                span(style="color:#12263F;") Descargar
                i.fas.fa-file-download(style="color:#12263F;")

              

   




      
  

      
</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 90%
  top: 0
  background: url(../assets/curso/tema2/1.png)
  background-size: 100% 100%
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
@media screen and (max-width: 992px)
  .cont_2_1:before
    background-size: cover
</style>
