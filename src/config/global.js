export default {
  global: {
    componenteFormativo: 'Construcción API',
    descripcionCurso:
      'En este componente formativo se abordarán los conceptos relacionados con la configuración del entorno de desarrollo como espacio de trabajo para la API REST. Se revisarán las buenas prácticas de los estándares de codificación para el desarrollo de la API, la cual será construida con las tecnologías de Node.js, Express y MongoDB y se abordará el renting de la API creada, a través de la herramienta Postman.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La internet y la web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos sobre el entorno de desarrollo integrado - IDE',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Instalación del Visual Studio Code',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Instalación y configuración del Node.js y npm',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instalación de módulo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Codificación de la API REST con Node.js',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Buenas prácticas en la codificación de Node.js',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Testing</em> de la API REST con Postman',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF21_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Entidades de información digital ',
      referencia:
        'Coding, G. (2020). Cómo instalar Node.js en Windows 2024 [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BgtB31gXkoA ',
    },
    {
      tema: 'Información digital',
      referencia:
        'Dominicode. (2018). "Postman en Español: ¡El tutorial definitivo para el éxito en las pruebas API! [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qsejysrhJiU',
    },
    {
      tema: 'Entidades de información digital',
      referencia:
        'DiSimone, K. (2020). mLab to Atlas for existing NS users [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hXSLBACjYQo ',
    },
  ],
  glosario: [
    {
      termino: 'Identación',
      significado:
        'dentro del contexto de desarrollo de <em>software</em> identar es un término que significa mover un bloque de código hacia la derecha insertando espacios o tabulaciones, para así separarlo del margen izquierdo y distinguirlo mejor del texto adyacente, es decir, organizar mejor el código. La identación se considera un principio fundamental de buena práctica de la programación de <em>software</em>. ',
    },
    {
      termino: 'JSON',
      significado:
        '<em>Java Script Object Notation</em> (JSON) es un formato basado en texto estándar que se utiliza para representar datos estructurados en la sintaxis de objetos de JavaScript. Se utiliza principalmente para transmitir datos en aplicaciones web (como es el caso de enviar algunos datos desde el servidor al cliente, por lo tanto, estos datos pueden ser mostrados en páginas web o viceversa). ',
    },
    {
      termino: '<em>Localhost</em>',
      significado:
        'en el contexto de las redes de computadoras, <em>localhost</em> es una computadora que ejecuta un programa. La computadora que se tiene al frente funciona también como un servidor virtual; este modo es comúnmente utilizado para realizar pruebas en el desarrollo web. ',
    },
    {
      termino: 'Manejadores o <em>handlers</em> de eventos',
      significado:
        'en la programación con JavaScript un evento por sí mismo carece de utilidad; para que los eventos resulten útiles o aplicables se debe asociar funciones o código JavaScript a cada evento. De esta forma, cuando se produce un evento de manera inmediata se ejecuta el código indicado, por lo que la aplicación responde ante cualquier evento que se produzca durante su ejecución. Las funciones o código JavaScript que se realizan para cada evento se denominan "manejador de eventos”. ',
    },
    {
      termino: '<em>Middleware</em>',
      significado:
        'es un bloque de código que se ejecuta entre la petición que hace el usuario (<em>request</em>) hasta que esa petición llega al servidor. De esta manera, son funciones que tienen acceso al objeto de solicitud (req), el objeto de respuesta (res) y la siguiente función de <em>middleware</em> en el ciclo de solicitud-respuesta de la aplicación. ',
    },
  ],
  referencias: [
    {
      referencia: 'Chrome web store. (2021). Postman.',
      link:
        'https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=es-419',
    },
    {
      referencia: 'Express. (2021). Direccionamiento básico.',
      link: 'https://expressjs.com/es/starter/basic-routing.html ',
    },
    {
      referencia: 'Gómez, D. (2017). Nodemon. Vortexbird.',
      link:
        'https://vortexbird.com/nodemon/#:%7E:text=Nodemon%20es%20una%20utilidad%20que,desarrollo%20de%20aplicaciones%20en%20nodojs ',
    },
    {
      referencia:
        'López, A. (2021). Qué es Postman y para qué sirve. OpenWebinars.',
      link: 'https://openwebinars.net/blog/que-es-postman/',
    },
    {
      referencia: 'Mozilla. (2021). Await. MDN Web Docs.',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await ',
    },
    {
      referencia: 'Mozilla. (2021). Introducción a Express/Node. MDN Web Docs.',
      link:
        'https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction',
    },
    {
      referencia: 'Nodejs.org. (2021). Acerca de Node.js. Node.js.',
      link: 'https://nodejs.org/es/about/',
    },
    {
      referencia: 'npm. (2021). About npm.',
      link: 'https://www.npmjs.com/about ',
    },
    {
      referencia: 'Red Hat. (2021). El concepto de IDE.',
      link: 'https://www.redhat.com/es/topics/middleware/what-is-ide ',
    },
    {
      referencia: 'Google. (s.f.). Google TypeScript Style Guide.',
      link: 'https://google.github.io/styleguide/tsguide.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta Temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabían Zárate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
