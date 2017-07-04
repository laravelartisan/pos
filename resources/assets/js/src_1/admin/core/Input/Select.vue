<template>
  <div>
    <md-input-container :class="{ 'md-input-invalid': form.errors.has(id) }">
      <label>{{ label }}</label>
      <md-select v-model="form[id]">
        <md-option v-for="option in options" :key="option.value" :value="option.value">{{option.text}}</md-option>
      </md-select>
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
      options: Array,
      form: Object
    }
  }
</script>
