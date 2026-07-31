export default {
  global: {
    Name: 'Fundamentos de programación en Python',
    Description:
      'El componente formativo aborda los fundamentos de la programación en Python, a partir del uso de variables, tipos de datos, estructuras compuestas, conversión de valores, funciones de entrada y salida, operadores, funciones integradas, módulos, librerías y estándares de codificación PEP 8. Estos elementos permiten comprender cómo se recibe, procesa y presenta la información en programas secuenciales básicos, de manera clara, ordenada y funcional.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Instalación y primeros pasos en Python',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Proceso de instalación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Comentarios en Python',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Errores de tecleo y excepciones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables: nombre y declaración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificar el tipo de variable',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Datos numéricos, booleanos y cadenas de caracteres (str)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Operaciones aritméticas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estructuras de datos compuestas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Listas, tuplas, rangos y diccionarios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Conjuntos (set)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Conversión de tipos de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Entrada y salida de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Entradas estándar: concepto y función input()',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Salidas estándar: función print() y técnicas de formato',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Operadores y funciones integradas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Operadores aritméticos y precedencia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Operadores lógicos y relacionales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Funciones integradas para entrada, salida y secuencias',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Módulos, librerías y estándares de codificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto de módulo, librería y formas de importación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Estándares de codificación PEP 8',
            hash: 't_6_2',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_22810005_DU.pdf',
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
  glosario: [
    {
      termino: '<em>Casting</em>',
      significado:
        'Conversión explícita de un dato a otro tipo mediante funciones como int(), float() o str().',
    },
    {
      termino: 'Concatenación',
      significado:
        'Unión de dos o más cadenas de caracteres en una sola salida mediante el operador +.',
    },
    {
      termino: 'Función',
      significado:
        'Bloque reutilizable de instrucciones que realiza una tarea específica dentro de un programa.',
    },
    {
      termino: 'Indentación',
      significado:
        'espacio al inicio de una línea que permite organizar bloques de código en Python.',
    },
    {
      termino: 'Intérprete',
      significado:
        'programa que ejecuta las instrucciones de Python línea por línea.',
    },
    {
      termino: 'Librería',
      significado:
        'conjunto organizado de módulos que ofrece funcionalidades relacionadas para resolver tareas específicas.',
    },
    {
      termino: 'Módulo',
      significado:
        'archivo de Python con extensión .py que contiene funciones, clases o variables reutilizables.',
    },
    {
      termino: 'Operador',
      significado:
        'símbolo o palabra que permite realizar operaciones sobre uno o más valores.',
    },
    {
      termino: 'PEP 8',
      significado:
        'guía de estilo oficial de Python que establece convenciones de codificación para mejorar la legibilidad del código fuente.',
    },
    {
      termino: '<em>Prompt</em>',
      significado:
        'mensaje que se muestra al usuario para solicitar la entrada de un dato.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cuevas, A. (2017). <em>Python 3: Curso práctico</em>. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Fazt Tech. (2019). <em>Curso Python para principiantes</em> [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=chPhlsHoEPo',
    },
    {
      referencia:
        'Guzdial, B., & Vidal, A. (2013). <em>Introducción a la computación y programación con Python</em>. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Hinojosa, A. (2016). <em>Python paso a paso</em>. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        "Lutz, M. (2013). <em>Learning Python</em> (5.ª ed.). O'Reilly Media.",
      link: '',
    },
    {
      referencia:
        'Pérez, A. (2016). <em>Python fácil</em>. Alfaomega Grupo Editor.',
      link: '',
    },
    {
      referencia:
        'Python Software Foundation. (s.f.). <em>The Python tutorial</em>.',
      link: 'https://docs.python.org/3/tutorial/index.html',
    },
    {
      referencia:
        'Salazar, P. (2019). <em>Empezando a programar en Python</em>. Editorial Escuela Colombiana de Ingeniería.',
      link: '',
    },
    {
      referencia:
        'Van Rossum, G., Warsaw, B., & Coghlan, N. (2001). <em>PEP 8 – Style guide for Python code</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo ',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
