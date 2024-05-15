<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro1
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-lg-12.col-9.col-md-8
            img(src="@/assets/curso/intro2.svg")
        .col-lg-7(data-aos="fade-left")
          p #[strong(style="color:#8722E2;") En este componente formativo se estudiarán los conceptos y pasos para el desarrollo de una API REST, utilizando las tecnologías del #[em back-end] como Node.js, Express y el sistema de bases de datos no relacional como lo es MongoDB]. De esta forma se inicia con la puesta a punto del entorno de desarrollo con Visual Studio Code, el cual será el espacio de trabajo donde se construirá la API. Adicionalmente, se comprenderá la importancia del uso de los comandos (en la terminal) para la instalación y configuración de paquetes necesarios para el correcto funcionamiento del proyecto; de igual manera, se ilustran algunas buenas prácticas de desarrollo y herramientas que harán más prolijo el código.
          .row.mt-4
            .col-auto
              figure
                img(src="@/assets/curso/intro3.svg")
            .col(style="place-self:center;")
              p.mb-0 Una vez construida la API se inicia con un #[em testing] a través de la herramienta Postman, que es muy utilizada para este tipo de desarrollos. Así, se corroboran las respuestas y solicitudes de un tipo de proyecto de esta naturaleza. 
      


    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro1, .cont_intro1 *
  position: relative
.cont_intro1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 115%
  top: 0
  background: url(../assets/curso/intro1.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_intro1:before
    background-size: cover
</style>
