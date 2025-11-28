<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Comunicación asertiva según el enfoque OVOP
    figure.mb-5(data-aos="fade-up") 
      img(src="@/assets/curso/temas/tema3/img01.png", alt="Imagen decorativa")
    p.mb-4(data-aos="fade-down") La comunicación asertiva se comprende como un proceso fundamental para fortalecer la interacción entre los actores del territorio, promoviendo relaciones colaborativas y el intercambio efectivo de ideas. En el enfoque OVOP, esta comunicación facilita la articulación entre instituciones, líderes y comunidad, permitiendo que las iniciativas avancen de manera coordinada y transparente. Su adecuada práctica contribuye a que las decisiones se tomen con base en el consenso, la confianza y el reconocimiento de la diversidad cultural y social presente en los territorios.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Tipos de comunicación
    p(data-aos="fade-down") La comunicación se manifiesta a través de diversas formas que resultan esenciales para los procesos comunitarios.
    p.mb-5(data-aos="fade-down") Se reconocen los siguientes tipos de comunicación:
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C01(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img02.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Comunicación verbal
                p.mb-0 Se expresa mediante el uso de la palabra en espacios como reuniones, talleres y encuentros comunitarios. Facilita la exposición clara de ideas y la toma de decisiones colectivas.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C01(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img03.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Comunicación no verbal
                p.mb-0 Comprende gestos, posturas, movimientos corporales y expresiones que acompañan o complementan el mensaje verbal. En escenarios comunitarios, esta forma de comunicación ayuda a interpretar emociones, actitudes y niveles de compromiso.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C01(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img04.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Comunicación escrita
                p.mb-0 Se materializa en documentos, actas, relatorías, boletines y material informativo que permiten registrar acuerdos y avances. En OVOP es clave para garantizar transparencia y trazabilidad en los procesos.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C01(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img05.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Comunicación digital
                p.mb-0 Incluye el uso de plataformas virtuales, redes sociales y medios tecnológicos que facilitan la difusión de información y la participación de actores que no pueden asistir presencialmente a las actividades.
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C01.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img02_.png', alt='Imagen decorativa')
            h4 Comunicación verbal
            p.mb-0 Se expresa mediante el uso de la palabra en espacios como reuniones, talleres y encuentros comunitarios. Facilita la exposición clara de ideas y la toma de decisiones colectivas.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C01.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img03_.png', alt='Imagen decorativa')
            h4 Comunicación no verbal
            p.mb-0 Comprende gestos, posturas, movimientos corporales y expresiones que acompañan o complementan el mensaje verbal. En escenarios comunitarios, esta forma de comunicación ayuda a interpretar emociones, actitudes y niveles de compromiso.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C01.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img05_.png', alt='Imagen decorativa')
            h4 Comunicación escrita
            p.mb-0 Se materializa en documentos, actas, relatorías, boletines y material informativo que permiten registrar acuerdos y avances. En OVOP es clave para garantizar transparencia y trazabilidad en los procesos.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C01.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img05_.png', alt='Imagen decorativa')
            h4 Comunicación digital
            p.mb-0 Incluye el uso de plataformas virtuales, redes sociales y medios tecnológicos que facilitan la difusión de información y la participación de actores que no pueden asistir presencialmente a las actividades.
    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La comprensión equilibrada de estos tipos de comunicación permite a las comunidades desarrollar estrategias más efectivas para transmitir sus ideas, visibilizar sus iniciativas y mantener una participación constante.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Interacción con la comunidad
    p.mb-0(data-aos="fade-down") La interacción con la comunidad constituye un eje central del enfoque OVOP, ya que promueve la construcción colectiva y el fortalecimiento del tejido social. Una comunicación asertiva facilita la generación de ambientes de confianza, en los cuales los actores pueden expresar sus opiniones, necesidades y expectativas sin temor a ser desestimados.
    .row.justify-content-center.BG03.align-items-center.pt-5.pb-5.mb-4
      .col-lg-11.col-12
        .row.justify-content-center
          .col-lg-9.col-12.order-lg-2.order-2
            h5.mb-4 La interacción adecuada se caracteriza por:
            ol.lista-ol--cuadro.lista-ol--separador.mb-0
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Escucha activa, que permite comprender las perspectivas de todos los participantes.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Promoción del diálogo, que fomenta el intercambio de conocimientos y experiencias para enriquecer los procesos.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Respeto por la diversidad, reconociendo que las diferencias culturales, sociales y económicas aportan valor a las iniciativas.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Retroalimentación constructiva, que fortalece el aprendizaje colectivo y orienta la toma de decisiones.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                | Participación inclusiva, que busca integrar a mujeres, jóvenes, personas mayores, organizaciones y actores institucionales.
          .col-lg-3.col-8.col-md-7.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/tema3/img06.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En el contexto de las iniciativas OVOP, esta interacción contribuye a que la comunidad se sienta involucrada y comprometida con el diseño, la implementación y el seguimiento de las acciones. Además, favorece la consolidación de acuerdos, la resolución de conflictos y la creación de alianzas estratégicas que potencian el desarrollo territorial.

</template>

<script>
export default {
  name: 'Tema3',
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
