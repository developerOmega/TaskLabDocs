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
        title: 'DStore',
        description: "Dstore es un API desarrollado para controlar las funciones de una tienda departamental; el sistema es capas de almacenar usuarios, productos, marcas y tickets. Los clientes podar hacer peticiones siempre y cuando estén autenticados como Administradores o Usuarios; este ultimo solo tendrá acceso a la vista de la información con excepción de los tickets que podrá generar siempre y cuando realice una compra.",
        url: "https://d-store-dev-omega.herokuapp.com"
      }
    }
  }
</script>