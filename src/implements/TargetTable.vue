<template>
  <table class="table">
    <tbody>
      <tr 
        v-for="element in data"
        :key="element.name"
      >
        <th class="small-title"> {{ element.name }} </th>
        <td class="color-black font-monospace"> {{ element.value }} </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'TargetTable',
    props: {
      data: {
        type: Array,
        default: []
      }
    }
  }
</script>