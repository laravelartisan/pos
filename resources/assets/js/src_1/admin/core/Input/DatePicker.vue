<template>
  <div class="md-input-container md-theme-default md-has-value">
    <label>{{ label }}</label>
    <date-picker :date="date" :option="option" class="md-input"></date-picker>
  </div>
</template>

<script>
  /**
   * Import vendor date picker component.
   *
   * @link https://github.com/hilongjw/vue-datepicker
   */
  import Datepicker from 'vue-datepicker';

  export default {
    /**
     * The component's properties.
     */
    props: {
      form: Object,
      id: String,
      label: String
    },

    /**
     * The component's data.
     */
    data() {
      return {
        option: {
          type: 'day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD',
          placeholder: '',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#607d8b',
          },
        }
      }
    },

    /**
     * The component's computed properties.
     */
    computed: {
      date() {
        return {
          time: this.form[this.id] || ''
        };
      }
    },

    /**
     * The component's required vendor components.
     */
    components: {
      'date-picker': Datepicker
    }
  }
</script>
