<template>
  <div class="container" >
    <md-sidenav class="main-sidebar md-left md-fixed" md-swipeable ref="main-sidebar">
      <md-toolbar class="rebel-walls-logo" md-theme="white">
        <img src="/images/Rebel-Walls-Logo-Tag.svg" alt="Rebel Walls Logo">
        <span>Administration</span>
      </md-toolbar>

      <div class="main-sidebar-links">
        <md-list>
          <md-list-item>
            <router-link exact to="/">
              Dashboard
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/users">
              Users
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/customers">
              Customers
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/maintenance">
              Maintenance
            </router-link>
          </md-list-item>

          <md-list-item>
            <span>Test</span>

            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/test">Test</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>

    <transition name="md-router" appear>
      <router-view></router-view>
    </transition>

    <notification ref="notification"></notification>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {

    /**
     * The component's data.
     */
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: '',
      };
    },

    methods: {
      /**
       * Toggle side navigation visibility.
       */
      toggleSidenav() {
        this.$refs['main-sidebar'].toggle();
      },

      /**
       * Close side navigation.
       */
      closeSidenav() {
        this.$refs['main-sidebar'].close();
      },

      /**
       * Display notification message.
       *
       * @param {string} type
       * @param {string} message
       */
      notify(type, message) {
        this.$refs['notification'][type](message);
      }
    }
  };
</script>
