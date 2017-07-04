<template>
  <page-content page-title="Maintenance" page-icon="build">
    <div class="main-content">

      <md-layout md-gutter>
        <md-layout md-column md-gutter style="display: block">
          <md-layout md-row>
            <span class="md-headline">Artisan Commands</span>
          </md-layout>

          <md-input-container>
            <label for="command">Command</label>
            <md-select name="command" id="command" v-model="command">
              <md-option v-for="command in commands" :value="command" :key="command">{{ command }}</md-option>
            </md-select>
          </md-input-container>

          <md-button class="md-raised md-primary" @click.native="fire" :disabled="!canFire">Fire Command</md-button>
        </md-layout>

        <md-layout md-column md-gutter style="display: block">
          <md-layout md-row>
            <span class="md-headline">Command History</span>
          </md-layout>

          <md-button class="md-raised md-warn">Clear History</md-button>
        </md-layout>
      </md-layout>

    </div>
  </page-content>
</template>

<script>
  import Maintenance from '../models/Maintenance';

  export default {
    /**
     * The component's data.
     */
    data() {
      return {
        command: null,
        commands: {}
      };
    },

    /**
     * The component's computed properties.
     */
    computed: {
      /**
       * Determine if a command can be fired.
       *
       * @return {bool}
       */
      canFire() {
        return this.command != null;
      }
    },

    methods: {
      /**
       * Fire artisan command.
       */
      fire() {
        this.$root.notify('done', this.command + ' was fired');
      },
    },

    /**
     * The component has been created.
     */
    created() {
      Maintenance.init()
        .then(response => {
          this.commands = response.data.commands;
          this.history = response.data.history;
        });
    }
  }
</script>
