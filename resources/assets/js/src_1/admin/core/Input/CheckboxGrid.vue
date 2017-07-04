<template>
  <div>
    <rw-title>{{ label }}</rw-title>
    <div v-for="option in options" :key="option.value">
      <md-checkbox></md-checkbox>
      <label>{{ option.text }}</label>
    </div>
  </div>
</template>

<script>
  export default {
    /**
     * The component's properties.
     */
    props: {
      form: Object,
      id: String,
      options: Array,
      label: String
    }
  }
</script>
