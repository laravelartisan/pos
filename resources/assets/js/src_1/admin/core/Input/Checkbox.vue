<template>
  <div>
    <md-checkbox :id="id" :name="id" :model="form[id]">{{ label }}</md-checkbox>
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
      label: String
    }
  }
</script>
