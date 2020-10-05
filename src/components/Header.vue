<template>
  <div class="content grid-row">
    <h1 class="paddign-top-buttom-min title"> {{ title }} </h1>
    <div class="text paddign-top-buttom-min"> {{ description }} </div>
    <div class="target-end flex-row">
      <div class="bold padding padding-left-right color-primary">URL: </div>
      <a class="link" :href="url"> {{ url }} </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data () {
      return {
        title: 'TaskLab',
        description: "TaskLab es un API desarrollado para controlar las funciones de un sistema gestor de proyectos; La app puede controlar la organización de un equipo de trabajo, por ejemplo: almacenamiento de tareas , agendar eventos y la interaccione de usuarios mediante un chat (mensajes).",
        url: "https://github.com/developerOmega/TaskLab"
      }
    }
  }
</script>