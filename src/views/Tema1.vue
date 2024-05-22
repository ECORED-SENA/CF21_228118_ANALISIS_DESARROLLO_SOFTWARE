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
        
        p(data-aos="fade-right") Como primera medida, es necesario tener en cuenta la definición de un entorno de desarrollo integrado IDE, que es un espacio de trabajo basado en tecnologías y #[em software], que sirve de plataforma para el diseño de aplicaciones que componen una serie de herramientas para el desarrollador de #[em software]. Un IDE cuenta con las siguientes características:
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

    br
    .cont_1_2.mt-4
      .row.justify-content-center
        .col-lg-4.mb-5.mb-lg-0.col-md-8
          .p-4.pt-0.bg-white.text-center.h-100(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:15px;" data-aos="zoom-in")
            figure.m-auto.text-center
              img(src="@/assets/curso/tema1/5.svg" style="max-width:120px;display:inline;margin-top:-35px;")
            p.mt-4.mb-0 Visual Studio Code resalta las palabras clave del código en diferentes colores para ayudar a identificar fácilmente los patrones de codificación y aprender más rápido.
        .col-lg-4.mb-5.mb-lg-0.col-md-8
          .p-4.pt-0.bg-white.text-center.h-100(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:15px;" data-aos="zoom-in")
            figure.m-auto.text-center
              img(src="@/assets/curso/tema1/6.svg" style="max-width:120px;display:inline;margin-top:-35px;")
            p.mt-4.mb-0 A medida que se codifica, Visual Studio Code brinda sugerencias para completar líneas de código y soluciones rápidas para errores comunes.
        .col-lg-4.mb-5.mb-lg-0.col-md-8
          .p-4.pt-0.bg-white.text-center.h-100(style="box-shadow:0px 4px 20px rgba(0,0,0,.1);border-radius:15px;" data-aos="zoom-in")
            figure.m-auto.text-center
              img(src="@/assets/curso/tema1/7.svg" style="max-width:120px;display:inline;margin-top:-35px;")
            p.mt-4.mb-0 Se aprovecha porque este entorno tiene incorporada la terminal, lo cual hace mucho más fácil el desarrollo, sobre todo con las tecnologías de Node.js, porque trae los paquetes necesarios para el proyecto.
      p.mt-5(data-aos="fade-up") En el proceso de alistamiento del entorno para iniciar el proyecto de desarrollo de la API, se deberá contar con los siguientes recursos:

    .cont_semicircle_absolute
      .row.mt-4(style="position:relative;z-index:2;")
        .col-md-6.col-lg-3.mb-4.mb-lg-0
          .h-100.p-4.p-lg-5.text-white.text-center(style="background-color:#3A1D71;border-radius:15px;" data-aos="zoom-in")
            figure.m-auto.text-center
              img(src="@/assets/curso/tema1/8.svg" style="max-width:120px;display:inline;")
            p.fw-bold.mb-0 Visual Studio Code
        .col-md-6.col-lg-3.mb-4.mb-lg-0
          .h-100.p-4.p-lg-5.text-white.text-center(style="background-color:#3A1D71;border-radius:15px;" data-aos="zoom-in")
            figure.m-auto.text-center
              img(src="@/assets/curso/tema1/9.svg" style="max-width:120px;display:inline;")
            p.fw-bold.mb-0 Node.js
        .col-md-6.col-lg-3.mb-4.mb-lg-0
          .h-100.p-4.p-lg-5.text-white.text-center(style="background-color:#3A1D71;border-radius:15px;" data-aos="zoom-in")
            figure.m-auto.text-center
              img(src="@/assets/curso/tema1/10.svg" style="max-width:120px;display:inline;")
            p.fw-bold.mb-0 Express.js
        .col-md-6.col-lg-3.mb-4.mb-lg-0
          .h-100.p-4.p-lg-5.text-white.text-center(style="background-color:#3A1D71;border-radius:15px;" data-aos="zoom-in")
            figure.m-auto.text-center
              img(src="@/assets/curso/tema1/11.svg" style="max-width:120px;display:inline;")
            p.fw-bold.mb-0 MongoDB
      .semicircle_absolute.d-none.d-md-block(style="top: unset !important;bottom: 25px;")
      
      Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Instalación del Visual Studio Code
    
    p(data-aos="fade-right") Para la instalación se deben seguir los siguientes pasos (para este caso se ha tomado como plataforma el sistema operativo Windows 10):

    .tarjeta.tarjeta--gris.p-4.pt-lg-5.pb-lg-5.mt-4.cont_slyder_1
      PasosB.color-secundario
        .row.col-xl-11.m-auto(titulo="Paso 1")
          .col-md.mb-4.mb-md-0
            h4 Paso 1
            p Descargar el instalador de la página principal para Visual Studio Code en Windows.
            p Enlace: #[a.fw-bold(href="https://code.visualstudio.com/docs?dv=win" target="_blank" style="color:#0B47DB;text-decoration:none;") https://code.visualstudio.com/docs?dv=win]
          .col-md-auto
            figure.m-auto.col-8.col-md-12
              img(src='@/assets/curso/tema1/13.svg')
        .row.col-xl-11.m-auto(titulo="Paso 2")
          .col-md.mb-4.mb-md-0
            h4 Paso 2
            p Una vez descargado, se debe correr el instalador y seguir con el #[em wizard] o paneles de instalación. Luego dar clic en finalizar.
            p Por defecto, el Visual Studio Code se instala en la siguiente ruta:
            p C:\users\{username}\AppData\Local\Programs\Microsoft VS Code
          .col-md-auto
            figure.m-auto.col-8.col-md-12
              img(src='@/assets/curso/tema1/14.svg')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_3 1.3 Instalación y configuración del Node.js y npm 
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/15.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p Node.js está considerado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, de igual manera, está diseñado para crear aplicaciones #[em network] escalables y pensado en principio como tecnología #[em back-end] (node.js.org, 2021).
        p.mb-0.fw-bold(style="color:#8722E2;") Los pasos para instalar el Node.js son los siguientes:
    
    .tarjeta.tarjeta--gris.p-4.pt-lg-5.pb-lg-5.mt-4.cont_slyder_1
      PasosB.color-secundario
        .row.col-xl-11.m-auto(titulo="Paso 1")
          .col-md.mb-4.mb-md-0
            h4 Paso 1
            p Se ingresa a la página oficial, se selecciona el sistema operativo, y hace clic en descargar.
            p Enlace: #[a.fw-bold(href="https://nodejs.org/en/download " target="_blank" style="color:#0B47DB;text-decoration:none;") https://nodejs.org/en/download ]
          .col-md-auto
            figure.m-auto.col-8.col-md-12
              img(src='@/assets/curso/tema1/16.svg')
        .row.col-xl-11.m-auto(titulo="Paso 2")
          .col-md.mb-4.mb-md-0
            h4 Paso 2
            p Una vez descargado, se debe correr el instalador y seguir con el #[em wizard] o paneles de instalación. 
          .col-md-auto
            figure.m-auto.col-8.col-md-12
              img(src='@/assets/curso/tema1/17.svg')
        .row.col-xl-11.m-auto(titulo="Paso 3")
          .col-md.mb-4.mb-md-0
            h4 Paso 3
            p Posterior a la instalación, se verifica que tanto el Node.js como el npm estén instalados, para eso se utiliza la línea de comandos en la terminal del Visual Studio Code: node -v o npm – v.
          .col-md-auto
            figure.m-auto.col-8.col-md-12
              img(src='@/assets/curso/tema1/18.svg')
    
    Separador

    .cont_1_3.pt-3.pb-4
      .titulo-segundo(data-aos="flip-up")
        h2#t_1_4 1.4 Instalación de módulo
      
      p(data-aos="fade-right") Un paquete en Node.js contiene todos los archivos que se necesitan para instalar un módulo; los módulos son bibliotecas de JavaScript que se pueden incluir en el proyecto. Instalar módulos es una de las principales tareas que debe aprender a hacer al comenzar con el administrador de paquetes Node. #[strong(style="color:#8722E2;") El comando para instalar un módulo en el directorio actual es el siguiente:]

      .col-xl-6.m-auto.mt-5
        .row
          .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100.p-3(style="background-color:#0B47DB;border-radius:8px;")
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/tema1/20.svg")
                .col(style="place-self:center;")
                  p.mb-0.text-white $ npm install < módulo >
          .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100.p-3(style="background-color:#0B47DB;border-radius:8px;")
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/tema1/21.svg")
                .col(style="place-self:center;")
                  p.mb-0.text-white $ npm i < módulo >
      
      p.mt-4(data-aos="fade-right") El primer módulo a instalar es Express, el cual es el #[em framework] web más popular de Node y proporciona mecanismos para (Mozilla, 2021).
    
      .row.mt-5
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-white.p-4.p-lg-5.h-100(style="border-radius:12px;border:1px #3A1D71 solid;")
            ol.lista-ol--cuadro.mb-0
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                  span.fw-bold(style="color:#12263F;") 1
                div Escritura de manejadores de peticiones con diferentes verbos HTTP, en diferentes caminos URL (rutas).
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                  span.fw-bold(style="color:#12263F;") 2
                div Integración con motores de renderización de “vistas”, para generar respuestas mediante la introducción de datos en plantillas.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                  span.fw-bold(style="color:#12263F;") 3
                div Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
              li.d-flex.mb-0
                .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                  span.fw-bold(style="color:#12263F;") 4
                div Añadir el procesamiento de peticiones “middleware” adicional en cualquier punto dentro de la tubería de manejo de la petición. 
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema1/22.png")
      
      p.mt-4(data-aos="fade-right") El segundo módulo para instalar es nodemon, que es una utilidad que monitorea los cambios en el código fuente que se está desarrollando y de manera automática reinicia el servidor. Es una herramienta muy útil para el desarrollo de aplicaciones en Node.js (Gómez, 2017).
      p.fw-bold(style="color:#8722E2;") A continuación, se muestra la línea de comando que se debe ejecutar desde la terminal del Visual Studio Code.

      .col-xl-6.m-auto.mt-5
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="zoom-in-down")
          h5 Figura 1.
          span Comando para la instalación de Express y nodemon
    .col-xl-6.m-auto
      figure(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/23.png" alt="Imagen que presenta el comando para la instalación de Express y nodemon.")
    
    .p-4.mt-5(style="background-color:#8722E2;border-radius:6px;" data-aos="flip-up")
      .row
        .col-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/tema1/24.svg")
        .col(style="place-self:center;")
          p.mb-0.text-white Hasta esta parte se ha abordado la instalación y configuración del espacio de trabajo para iniciar con el desarrollo de la API. No obstante, es necesario revisar las buenas prácticas de codificación para que el desarrollo no solo sea prolijo en su estructura, sino que también siga estándares de codificación, permitiendo que el código tenga un alto desempeño.





          

    

    
 

      
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
  height: 80%
  top: 20%
  background: url(../assets/curso/tema1/4.png)
  background-size: 100% 100%
.cont_slyder_1
  background: url(../assets/curso/tema1/12.png)
  background-size: cover
.linea-tiempo-c__header__btn, .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right, .pasos-b__header__btn--left, .pasos-b__header__btn--right
  border: 2px solid #FFCE00
  background-color: #FFCE00
.pasos-b.color-secundario .pasos-b__header__item--active .pasos-b__header__item__dot span
  color: #fff
.pasos-b__header__item__line-container:after, .pasos-b__header__item__line-container:before
  background-color: #3A1D71
.pasos-b__header__item__dot
  border: 3px solid #fff
  background-color: white
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/19.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_1_2:before,.cont_1_3:before
    background-size: cover
</style>
