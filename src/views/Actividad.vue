<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        'Objetivo: lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La ruta metodológica OVOP utiliza guías que orientan la planificación, el desarrollo comunitario y la gestión del producto territorial.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La Guía para la elaboración del Plan de Acción Comunitario permite identificar roles, tiempos y responsables de cada actividad comunitaria.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La Guía de Negocio Colectivo solo se enfoca en aspectos financieros y no incluye elementos organizativos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La Guía para el análisis de actores ayuda a reconocer los intereses y niveles de influencia de las partes involucradas en un proceso comunitario.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La Guía de Estrategia de Marca Territorial se centra en diseñar logotipos y no aborda la identidad cultural de un territorio.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La Guía de participación y desarrollo comunitario promueve procesos colaborativos y la toma de decisiones incluyente.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La Guía de <em>Marketing</em> proporciona orientaciones para la promoción de productos OVOP y su posicionamiento en mercados.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La planificación participativa basada en el marco lógico permite estructurar objetivos, resultados, actividades y riesgos de manera ordenada.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La guía para la realización de talleres ofrece herramientas para facilitar espacios educativos y participativos en la comunidad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Las metodologías de empoderamiento buscan fortalecer la autonomía y las capacidades locales de los grupos comunitarios.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 11,
          texto:
            'El liderazgo comunitario se basa únicamente en habilidades de autoridad y control.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 12,
          texto:
            'El liderazgo comunitario involucra capacidades como la comunicación, la gestión emocional y la motivación colectiva.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 13,
          texto:
            'El empoderamiento dentro del enfoque OVOP permite que las comunidades tomen decisiones informadas sobre su proyecto territorial.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,
          texto:
            'La comunicación asertiva busca expresar ideas de forma clara, respetuosa y orientada al diálogo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,
          texto:
            'En OVOP, la comunicación solo es necesaria durante el cierre de los proyectos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,
          texto:
            'La comunicación verbal y no verbal son tipos de comunicación relevantes para los procesos comunitarios.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,
          texto:
            'La interacción con la comunidad implica escuchar activamente y reconocer los aportes de cada participante.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,
          texto:
            'En los procesos OVOP, la comunicación se considera clave para la construcción del acuerdo colectivo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,
          texto:
            'La comunicación asertiva evita conflictos, pues facilita el intercambio claro de expectativas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunititaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,
          texto:
            'Una comunidad empoderada y con buena comunicación fortalece el desarrollo de su producto OVOP y su identidad territorial.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos asociados a la metodología OVOP, la participación comunitaria y la comunicación asertiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
