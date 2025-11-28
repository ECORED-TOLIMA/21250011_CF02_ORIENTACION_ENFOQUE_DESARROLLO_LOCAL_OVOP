<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Empoderamiento en el contexto comunitario
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El empoderamiento en el marco del desarrollo territorial representa un proceso mediante el cual las comunidades fortalecen su capacidad para tomar decisiones informadas, participar activamente en la gestión de sus iniciativas y generar transformaciones sostenibles en su entorno. En el enfoque OVOP Colombia, este proceso se convierte en un componente esencial para garantizar que los actores locales definan colectivamente su proyecto de desarrollo, consoliden su identidad territorial y lideren la puesta en marcha de productos y servicios con valor agregado.
    p.mb-0(data-aos="fade-down") El empoderamiento permite que la comunidad no solo reconozca sus recursos y potencialidades, sino que también participe en la construcción de una visión compartida y en la implementación de acciones estratégicas que respondan a sus necesidades reales. De esta forma, se convierte en un eje transversal que facilita la articulación institucional, fortalece la gobernanza local y promueve la sostenibilidad de las iniciativas.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Metodologías de empoderamiento
    p(data-aos="fade-down") Las metodologías de empoderamiento buscan generar capacidades colectivas y fortalecer habilidades individuales y grupales para la toma de decisiones, la gestión del conocimiento y la participación activa. En el contexto OVOP, estas metodologías se enfocan en dinamizar la participación social y promover la apropiación de los procesos comunitarios.
    p.mb-0(data-aos="fade-down") Entre las metodologías más representativas se encuentran:
    .row.justify-content-center.BG01.align-items-center.pt-5.pb-5.mb-4
      .col-lg-10.col-12
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2(data-aos="fade-down")
              h4 Aprendizaje participativo
              p Promueve la reflexión crítica, el intercambio de saberes y la toma de decisiones conjunta a partir de experiencias y conocimientos locales.
            .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img02.jpg', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img03.jpg', alt="Imagen decorativa")          
            .col-lg-5(data-aos="fade-down")
              h4 Mapeo de actores y recursos
              p Permite identificar las capacidades del territorio, los roles de los actores clave y las oportunidades de colaboración para potenciar la iniciativa OVOP.
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2(data-aos="fade-down")
              h4 Diálogo social estructurado
              p Facilita espacios de conversación guiada donde la comunidad analiza situaciones, propone soluciones y prioriza acciones de manera consensuada.
            .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img04.jpg', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img05.jpg', alt="Imagen decorativa")          
            .col-lg-5(data-aos="fade-down")
              h4 Metodologías OVOP (OVOP Value Mapping, Ruta del Producto, Cartografía de Valor) 
              p Herramientas propias del modelo que orientan a la comunidad a reconocer su identidad territorial, sus productos potenciales y las oportunidades de encadenamiento productivo.
          .row.justify-content-center
            .col-lg-5.order-lg-1.order-2(data-aos="fade-down")
              h4 Planeación participativa
              p Posibilita construir acuerdos en torno a objetivos, estrategias y acciones, promoviendo la corresponsabilidad entre los actores.
            .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img06.jpg', alt="Imagen decorativa") 
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.p-4.mb-0
          .row.justify-content-center
            .col-lg-11.col-12
              p.mb-0(data-aos="fade-down") Estas metodologías fortalecen la cohesión social, dinamizan la gobernanza territorial y ayudan a que los actores locales ejerzan un rol protagónico en la transformación de su territorio.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Habilidades para el liderazgo comunitario
    p(data-aos="fade-down") El liderazgo comunitario se reconoce como una competencia fundamental dentro del enfoque OVOP, dado que permite impulsar procesos colectivos, organizar equipos de trabajo y motivar la participación activa de la comunidad. El liderazgo se entiende como una capacidad distribuida, no limitada a una persona, sino compartida entre varios actores que orientan el proceso de transformación.
    p.mb-5(data-aos="fade-down") Entre las habilidades clave para el liderazgo comunitario se encuentran:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img07.svg' alt='AvatarTop')
          h4.text-center Comunicación asertiva
          p Facilita la expresión clara de ideas, la escucha activa y el diálogo respetuoso entre los actores.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img08.svg' alt='AvatarTop')
          h4.text-center Trabajo colaborativo
          p Promueve la cooperación, la corresponsabilidad y la construcción de acuerdos para alcanzar objetivos comunes.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img09.svg' alt='AvatarTop')
          h4.text-center Gestión de conflictos
          p Permite abordar diferencias y tensiones de manera constructiva, fortaleciendo la convivencia y la unidad comunitaria.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
          h4.text-center Toma de decisiones informada
          p Se basa en el análisis de información relevante y en la participación de todos los actores involucrados.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop')
          h4.text-center Innovación social
          p Impulsa la búsqueda de soluciones creativas a problemas comunitarios, aprovechando recursos y conocimientos locales.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema2/img12.svg' alt='AvatarTop')
          h4.text-center Visión estratégica
          p Facilita orientar esfuerzos hacia metas de largo plazo, especialmente en relación con el producto local priorizado y el sueño colectivo.
    p.mb-0(data-aos="fade-down") Estas habilidades contribuyen a consolidar liderazgos comprometidos con el bienestar comunitario, capaces de dinamizar procesos estratégicos y de fortalecer la identidad territorial.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Aplicación del empoderamiento en procesos OVOP
    p.mb-5(data-aos="fade-down") El enfoque OVOP incorpora el empoderamiento como una condición esencial para garantizar que las iniciativas sean lideradas y sostenidas por la comunidad. Su aplicación se evidencia en diferentes momentos del proceso metodológico:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-6.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Identificación del producto local")
            .col-12.mb-4.mb-md-0
              p.mb-0 La comunidad participa activamente en la selección del producto o servicio más representativo del territorio, fortaleciendo el sentido de pertenencia y la identidad territorial.
          .row(numero="2" titulo="Construcción del sueño colectivo")
            .col-12.mb-4.mb-md-0
              p.mb-0 A través de ejercicios participativos, los actores definen la visión de desarrollo del territorio, lo que aumenta su compromiso y responsabilidad con los resultados.
          .row(numero="3" titulo="Planificación participativa")
            .col-12.mb-4.mb-md-0
              p.mb-0 El uso de herramientas como la matriz de planificación, los árboles de problemas o la cartografía de valor permite que los participantes comprendan el contexto, identifiquen prioridades y definan estrategias conjuntas.
          .row(numero="4" titulo="Fortalecimiento organizacional")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se promueve la creación o consolidación de comités locales OVOP, mesas de trabajo y equipos de facilitación que lideran acciones en el territorio.
          .row(numero="5" titulo="Ejecución del plan de acción")
            .col-12.mb-4.mb-md-0
              p.mb-0 La comunidad asume un rol activo en la implementación de actividades, la gestión de recursos y el seguimiento de los resultados.
          .row(numero="6" titulo="Monitoreo y evaluación comunitaria")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se impulsa la autoevaluación para revisar avances, identificar aprendizajes y fortalecer la toma de decisiones.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Como resultado, la comunidad adquiere mayor autonomía, consolida sus capacidades colectivas y se posiciona como protagonista del desarrollo territorial. De manera progresiva, los actores locales mejoran su capacidad de gestión, fortalecen la gobernanza y garantizan la sostenibilidad del proceso OVOP en el tiempo.

</template>

<script>
export default {
  name: 'Tema2',
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
