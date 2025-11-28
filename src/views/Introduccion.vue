<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") Este componente presenta los elementos fundamentales de la Ruta Metodológica OVOP y su aplicación en los procesos comunitarios orientados al desarrollo territorial. Se describen las principales guías operativas que acompañan la planeación, ejecución y evaluación de las iniciativas locales, abarcando aspectos como la elaboración del plan de acción comunitario, la gestión del Negocio Colectivo, el análisis de actores, la estrategia de marca territorial, la participación comunitaria, el <em>marketing</em> y la planificación participativa basada en el marco lógico. También se incluyen orientaciones para la realización de talleres, entendidos como espacios clave para la articulación de actores y la construcción colaborativa.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.col-md-7.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
      .col-lg-7.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4.mb-3
          p.mb-0(data-aos="fade-down") Además, el componente profundiza en el empoderamiento desde una perspectiva comunitaria, presentando metodologías, habilidades de liderazgo y su relación con la implementación del enfoque OVOP. Finalmente, se aborda la comunicación asertiva como una herramienta estratégica para facilitar el diálogo, fortalecer el tejido social y promover la interacción efectiva entre los diferentes actores del territorio.
        p.mb-0(data-aos="fade-down") Este conjunto de contenidos permite comprender cómo se construyen, fortalecen y consolidan las iniciativas OVOP, asegurando procesos participativos, incluyentes y orientados a la transformación del entorno desde una visión colectiva.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Onqjryx3f3A?si=-XRo4ySCJWIklSfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
