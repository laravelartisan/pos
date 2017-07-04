<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" md-elevation="1" class="main-header">
      <md-button class="md-icon-button nav-trigger" @click.native="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <md-icon>{{ pageIcon }}</md-icon>
      <div class="md-title">{{ pageTitle }}</div>

      <md-menu>
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item>Logout</md-menu-item>
        </md-menu-content>
      </md-menu>

    </md-whiteframe>

    <slot></slot>
  </div>
</template>

<script>
  export default {

    /**
     * The component's properties.
     */
    props: {
      pageTitle: String,
      pageIcon: String
    },

    methods: {
      /**
       * Toggle side navigation visibility.
       */
      toggleSidenav() {
        this.$root.toggleSidenav();
      }
    },

    /**
     * Prepare the component.
     */
    mounted() {
      document.title = this.pageTitle + ' - RebelWalls';
    }
  };
</script>
