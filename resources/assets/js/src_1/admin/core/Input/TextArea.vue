<template>
  <div>
    <md-input-container :class="{ 'md-input-invalid': form.errors.has(id) }">
      <label>{{ label }}</label>
      <md-textarea v-model="form[id]"></md-textarea>
      <span class="md-error" v-text="form.errors.get(id)"></span>
    </md-input-container>
  </div>
</template>

<script>
  export default {
    /**
     * The component's properties.
     */
    props: {
      id: String,
      label: String,
      form: Object
    }
  }
</script>
