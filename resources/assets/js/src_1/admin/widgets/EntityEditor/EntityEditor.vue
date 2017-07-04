<template>
  <div>
    <span class="md-headline" v-text="title"></span>

    <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
      <div style="text-align: right;">
        <md-button type="submit" class="md-raised md-primary" :disabled="form.errors.any()">
          Save
        </md-button>
      </div>

      <div v-for="field in fields" :key="field.id">
        <rw-title v-if="field.type == 'header'">{{ field.label }}</rw-title>

        <rw-text-input
          :form="form"
          :id="field.id"
          :label="field.label"
          v-if="field.type == 'text'"></rw-text-input>

        <rw-textarea-input
          :form="form"
          :id="field.id"
          :label="field.label"
          v-if="field.type == 'textarea'"></rw-textarea-input>

        <rw-select-input
          :form="form"
          :id="field.id"
          :label="field.label"
          :options="options[field.options]"
          v-if="field.type == 'select'"></rw-select-input>

        <rw-date-picker
          :form="form"
          :id="field.id"
          :label="field.label"
          v-if="field.type == 'date'"></rw-date-picker>

        <rw-checkbox-input
          :form="form"
          :id="field.id"
          :label="field.label"
          v-if="field.type == 'checkbox'"></rw-checkbox-input>

        <rw-checkbox-grid
          :form="form"
          :id="field.id"
          :label="field.label"
          :options="options[field.options]"
          v-if="field.type == 'checkbox-grid'"></rw-checkbox-grid>
      </div>
    </form>
  </div>
</template>

<script>
  import Manager from './Manager';

  export default {

    /**
     * The component's properties.
     */
    props: {
      id: String,
      fields: Array,
      options: Object,
      editorTitle: String,
      apiRoute: String
    },

    /**
     * The component's data.
     */
    data() {
      return {
        form: {}
      };
    },

    /**
     * The component's computed properties.
     */
    computed: {
      title() {
        let id = this.form.Id;
        let prefix = (id == 'new') ? 'Create ' : 'Edit ';

        return prefix + this.editorTitle;
      }
    },

    methods: {
      /**
       * Load data for selected entity.
       */
      loadEntity() {
        if (this.id == 'new') {
          this.initForm({Id: 'new'});
          return;
        }

        let url = this.apiRoute + '/' + this.id;

        axios.get(url).then(response => {
          this.form = new Form(response.data.data);
          this.$emit('form-loaded', this.form);
        });
      },

      /**
       * Submit the form.
       */
      onSubmit() {
        this.form.post(this.apiRoute)
          .then(response => this.$root.notify('done', 'Saved!'))
          .catch(error => this.$root.notify('error', 'Save Failed!'));
      },

      /**
       * Setup a new form.
       */
      initForm(overrides) {
        let init = {};
        this.fields.forEach(field => init[field.id] = '');

        if (overrides) {
          init = Object.assign(init, overrides);
        }

        this.form = new Form(init);
      }
    },

    /**
     * The component has been created.
     */
    created() {
      this.initForm();
      this.loadEntity();
    },

    /**
     * The component's watchers.
     */
    watch: {
      id() {
        this.loadEntity();
      }
    }
  }
</script>
