<template>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head v-for="column in tblList.columns" :key="column.column">
            {{ column.header }}
          </md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="item in items" :key="item.Id">
          <md-table-cell v-for="column in tblList.columns" :key="column.column">
            {{ item[column.column] }}
          </md-table-cell>
          <md-table-cell>
            <router-link exact :to="itemUrl(item.Id)">
              edit
            </router-link>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
</template>

<script>
  export default {

    /**
     * The component's properties.
     */
    props: {
        tblList: {
        type: Object,
        required: true
      },
      items:{
        type: Array,
        required: true
      }
    },

    methods: {
      /**
       * Get url to view and edit the item.
       *
       * @param {string} id
       *
       * @return {string}
       */
      itemUrl(id) {
        return '/' + this.tblList.apiRoute + '/' + id;
      },

    }
  }
</script>
