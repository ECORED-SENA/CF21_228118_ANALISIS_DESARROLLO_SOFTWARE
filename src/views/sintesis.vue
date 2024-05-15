<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-up") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo:

    .row.justify-content-center(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5.p-4.p-lg-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/sintesis.svg", alt="Esquema general del componente formativo, que enuncia las temáticas desarrolladas y destaca aspectos clave estudiados. Tema central: construcción API – Entorno de Desarrollo Integrad. Temas integradores: características, Visual Studio Code, Node.js y nmp, desarrollo de la API REST y testing de la API REST.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
