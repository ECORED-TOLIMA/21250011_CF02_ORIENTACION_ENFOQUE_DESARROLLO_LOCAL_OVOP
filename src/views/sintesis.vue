<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los elementos esenciales para aplicar la metodología OVOP en los territorios, integrando herramientas estratégicas para la planificación comunitaria, el fortalecimiento organizacional y la gestión participativa. Se presentan diferentes guías que orientan la construcción del Plan de Acción Comunitario, el desarrollo del Negocio Colectivo, el análisis de actores, la estrategia de Marca Territorial, el <em>marketing</em> y la planificación basada en el marco lógico, facilitando procesos metodológicos estructurados. Además, se profundiza en el empoderamiento comunitario a través de metodologías participativas, el fortalecimiento del liderazgo y la puesta en práctica de estas capacidades en las etapas del proceso OVOP. Finalmente, se aborda la comunicación asertiva como eje transversal para promover relaciones colaborativas, gestionar la interacción con la comunidad y garantizar el flujo adecuado de información en cada una de las fases del proceso. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt=" En la síntesis del componente formativo se representa la relación entre las guías metodológicas de la ruta OVOP, los procesos de empoderamiento comunitario y los elementos de la comunicación asertiva.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
