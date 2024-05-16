<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 #[em Testing] de la API REST con Postman
    
    .cont_semicircle_absolute
      .cont_3_1.pt-4
        .row(style="z-index:2;")
          .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#D6E1FD;border-radius:13px;")
              p.mb-0 En la definición de la arquitectura de despliegue de aplicaciones y servicios, es muy importante la definición de los componentes desde el punto de vista de la plataforma tecnológica que serán utilizados en el momento de iniciar el proceso de desarrollo y en el de hacer el despliegue o puesta en producción, para lo cual el equipo de desarrollo deberá elegir qué tipo de plataforma tecnológica será la utilizada.
          .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
            figure.m-auto.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema3/2.svg")
          .col-lg-4(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#FFEFAF;border-radius:13px;")
              p.mb-0 Si bien la plataforma tecnológica exige la selección de varios componentes como sistema operativo, servidor web, gestor de base de datos y lenguaje de programación, en la actualidad se debe tener claro qué tipo de despliegue se requiere para la construcción local del producto en las máquinas de los equipos de desarrollo y para el despliegue en producción (generalmente debe ser el mismo). 
        
        .semicircle_absolute.d-none.d-md-block(style="left: unset !important;right: -190px !important;top:140px;")

        .tarjeta.color-primario.p-3.mt-5(style="background: rgb(146,41,238);background: linear-gradient(180deg, rgba(146,41,238,1) 0%, rgba(98,17,170,1) 45%, rgba(52,9,90,1) 100%);z-index:2;" data-aos="zoom-in")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1(style="color:#00FFDF;") Instalación Postman
                  p.text-small.text-white Lo invitamos a revisar el PDF #[strong Instalación herramienta Postman], en el cual se explica su instalación. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Instalacion_herramienta_Postman.pdf')" target="_blank")
                    span(style="color:#12263F;") Descargar
                    i.fas.fa-file-download(style="color:#12263F;")
    
  
  

      
</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 90%
  top: 0
  background: url(../assets/curso/tema3/1.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_3_1:before
    background-size: cover
</style>
