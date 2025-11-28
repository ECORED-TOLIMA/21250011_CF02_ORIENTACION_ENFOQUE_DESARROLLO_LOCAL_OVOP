export default {
  global: {
    componenteFormativo:
      'Gestión y empoderamiento comunitario bajo el enfoque OVOP',
    descripcionCurso:
      'Este componente profundiza en la ruta metodológica del enfoque OVOP, fortaleciendo la capacidad de las comunidades para planificar acciones, liderar procesos y gestionar iniciativas locales. Incluye herramientas para el empoderamiento, el liderazgo comunitario y la comunicación asertiva, fundamentales para dinamizar proyectos territoriales y consolidar la participación colectiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      // {
      //   clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
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
        titulo: 'Ruta metodológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Guía para la elaboración del Plan de Acción Comunitario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Guía de Negocio Colectivo para la gestión de Mi Producto OVOP',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Guía para el análisis de actores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Guía de Estrategia de Marca Territorial',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Guía de participación y desarrollo comunitario',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Guía de <em>Marketing</em>',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Guía de planificación participativa basada en el marco lógico',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Guía para la realización de talleres',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Empoderamiento en el contexto comunitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodologías de empoderamiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Habilidades para el liderazgo comunitario',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aplicación del empoderamiento en procesos OVOP',
            hash: 't_2_3',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación asertiva según el enfoque OVOP',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Tipos de comunicación', hash: 't_3_1' },
          {
            numero: '3.2',
            titulo: 'Interacción con la comunidad',
            hash: 't_3_2',
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema:
        '1.2. Guía de Negocio Colectivo para la gestión de Mi Producto OVOP',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <em>Fase 4 Metodología OVOP</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mKTOkhi3A0Q',
    },
    {
      tema: '3. Comunicación asertiva según el enfoque OVOP',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Naturaleza de la comunicación</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lLLPhToBtgI',
    },
    {
      tema: '3.1. Tipos de comunicación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). <em>Tipos de comunicación</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HEFAvzcIzM8',
    },
  ],
  glosario: [
    {
      termino: 'Actor clave',
      significado:
        'se refiere a cualquier persona, grupo u organización que tiene un interés directo en una iniciativa y posee la capacidad de influir positiva o negativamente en su desarrollo.',
    },
    {
      termino: 'Análisis de actores',
      significado:
        'consiste en la identificación y valoración de los diferentes actores presentes en un territorio, así como de su influencia, intereses y relaciones, con el fin de orientar estrategias de participación y articulación.',
    },
    {
      termino: 'Articulación comunitaria',
      significado:
        'hace referencia al proceso mediante el cual diferentes actores del territorio coordinan esfuerzos, recursos y capacidades para avanzar hacia un propósito común.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'es la habilidad para expresar ideas, emociones y necesidades de manera clara y respetuosa, facilitando la interacción efectiva entre los miembros de una comunidad.',
    },
    {
      termino: 'Empoderamiento comunitario',
      significado:
        'describe el fortalecimiento de las capacidades individuales y colectivas que permite a la comunidad tomar decisiones informadas, liderar procesos y asumir un rol activo en su propio desarrollo.',
    },
    {
      termino: 'Liderazgo comunitario',
      significado:
        'alude a la capacidad de una persona o grupo para motivar, guiar y coordinar acciones colectivas orientadas al desarrollo del territorio.',
    },
    {
      termino: 'Marca territorial',
      significado:
        'corresponde a la estrategia mediante la cual un territorio construye una identidad propia basada en su cultura, historia, valores y productos distintivos, con el fin de posicionarse en diferentes mercados.',
    },
    {
      termino: 'Metodología OVOP',
      significado:
        'representa el enfoque “Un Pueblo, Un Producto”, que impulsa el desarrollo territorial a partir del fortalecimiento de un producto identitario construido colectivamente.',
    },
    {
      termino: 'Plan de acción comunitario',
      significado:
        'se entiende como el documento que organiza las actividades, responsabilidades y tiempos necesarios para alcanzar los objetivos definidos por la comunidad en su proceso de transformación.',
    },
    {
      termino: 'Taller participativo',
      significado:
        'es una metodología de trabajo que reúne a diferentes actores para construir conocimiento, dialogar, tomar decisiones y planear acciones de manera conjunta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calderón, N. (s. f.). <em>Capital social y desarrollo económico local: Posibilidades y límites de OVOP en Colombia</em> (Trabajo de grado, Magíster en Estudios Interdisciplinarios sobre Desarrollo). Universidad de los Andes.',
      link: '',
    },
    {
      referencia:
        'Fondo de Promoción del Periodismo (FCP). (2022). <em>Ficha técnica y presupuesto emprendimientos</em> (p. 12).',
      link:
        'https://fcp.gov.co/wp-content/uploads/2022/11/FICHA-TECNICA-Y-PRESUPUESTO-EMPRENDIMIENTOS.pdf',
    },
    {
      referencia:
        'Founderz. (s. f.). <em>Lean Canvas: qué es y plantilla</em>. Founderz.',
      link: 'https://founderz.com/es/blog/que-es-lean-canvas/',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía de Estrategia de Marca Territorial</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_09_Guia_de_Estrategia_de_Marca_Territorial.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía de Marketing</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_11_Guia_de_Marketing.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía de Negocio Colectivo para la gestión de Mi Producto</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_07_Guia_de_Negocio_Colectivo_para_la_gestion_de_Mi_Producto_OVOP.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía de participación y desarrollo comunitario</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_10_Guia_de_participacion_y_desarrollo_comunitario.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía de Planificación participativa basada en el marco lógico</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_12_Guia_de_Planificacion_participativa_basado_en_el_marco_logico.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía para el Análisis de actores</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_08_Guia_para_analisis_de_actores.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía para la elaboración del Plan de Acción Comunitario</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_06_Guia_taller_para_la_elaboracion_del_plan_de_accion_OVOP.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía para la realización de talleres</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_13_Guia_para_la_realizacion_de_talleres.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (s. f.). <em>OVOP Colombia</em>.',
      link: 'https://www.sena.edu.co/es-co/sena/Paginas/ovop_colombia.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Cecilia Dumar Acosta',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
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
          nombre: 'Jorge Bustos Gómez',
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
