<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 160px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #00FFDF !important
.curso-main-container > .container
  overflow: clip !important
.titulo-segundo:after
  border-left-color: #00FFDF !important
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #12263F !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 42% !important
  right: 56% !important
.banner-principal-decorativo-2
  animation: float1 3s ease-in-out infinite alternate !important
  top: 40% !important
  right: 8% !important
.banner-principal-decorativo-3
  animation: float1 3s ease-in-out infinite alternate !important
  top: 70% !important
  right: 17% !important
.titulo-principal.color-acento-contenido .titulo-principal__numero
  background-color: #00FFDF !important
.cont_titulo_decorativo, .cont_titulo_decorativo *
  position: relative
.cont_titulo_decorativo
  width: fit-content
  margin-bottom: 1.7rem
.cont_titulo_decorativo:before
  content: ''
  position: absolute
  height: 90%
  width: 100%
  left: 0
  bottom: 0
  background: rgb(119,55,240)
  background: linear-gradient(180deg, rgba(119,55,240,1) 0%, rgba(41,17,85,1) 100%)
  border-radius: 5px
.banner-principal__row .banner-principal__img
  padding-bottom: 0rem !important
.banner-principal__row .banner-principal__img img
  max-width: 450px
  margin: 0 auto
.semicircle_absolute
  position: absolute !important
  width: 300px
  left: -190px
  top: 0
  height: 300px
  border-radius: 50%
  background-color: white
  box-shadow: 0px 0px 35px rgba(0,0,0,.1)
  z-index: 0
.cont_semicircle_absolute, .cont_semicircle_absolute *
  position: relative
@media screen and (max-width: 992px)
  .banner-principal .tarjeta
    background-size: cover !important
</style>
