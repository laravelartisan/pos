<template>
  <md-snackbar md-position="top right" ref="snackbar" :md-duration="duration">
    <md-icon>{{ icon }}</md-icon>
    <span v-text="message"></span>
    <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Close</md-button>
  </md-snackbar>
</template>

<script>
export default {
  /**
   * The component's data.
   */
  data() {
    return {
      icon: '',
      message: '',
      duration: 4000
    };
  },

  methods: {
    /**
     * Display error message.
     *
     * @param {string} message
     */
    error(message) {
      this.icon = 'error';
      this.message = message;

      this.$refs.snackbar.open();
    },

    /**
     * Display done message.
     *
     * @param {string} message
     */
    done(message) {
      this.icon = 'done';
      this.message = message;

      this.$refs.snackbar.open();
    }
  }
}
</script>
