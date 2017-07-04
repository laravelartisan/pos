<template>

  <md-table-card class="list-table">
    <md-toolbar md-theme="green">
      <h1 class="md-title"></h1>
      <md-button class="md-icon-button">
        <md-icon>filter_list</md-icon>
      </md-button>

      <form v-if="search.display" @submit.prevent="onSearch">
        <md-input-container style="flex: 1;">
          <md-input placeholder="Search..." v-model="search.input" />
        </md-input-container>
      </form>

      <md-button class="md-icon-button" @click.native="toggleSearch">
        <md-icon>search</md-icon>
      </md-button>

      <router-link exact :to="itemUrl('new')">
        <md-button class="md-icon-button">
          <md-icon>add</md-icon>
        </md-button>
      </router-link>
    </md-toolbar>

    <md-table @sort="onSort">
      <md-table-header>
        <md-table-row>
          <md-table-head v-for="column in props.columns" :key="column.column" :md-sort-by="column.sortable">
            {{ column.header }}
          </md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="item in items" :key="item.Id">
          <md-table-cell v-for="column in props.columns" :key="column.column">
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

    <list-table-pagination
      :md-size="pagination.per_page"
      :md-total="pagination.total"
      :md-page="pagination.current_page"
      md-label="Rows"
      md-separator="of"
      :md-page-options="[10, 25, 50, 100]"
      @pagination="onPagination"></list-table-pagination>
  </md-table-card>
</template>

<script>
  export default {

    /**
     * The component's properties.
     */
    props: {
      props: {
        type: Object,
        required: true
      }
    },

    /**
     * The component's data.
     */
    data() {
      return {
        items: [],
        pagination: {
          total: 0,
          per_page: 10,
          current_page: 1
        },
        sort: {
          column: null,
          order: null
        },
        search: {
          input: '',
          current: '',
          display: false
        },
        totalItems: 0
      }
    },

    /**
     * The component has been created.
     */
    created() {
      this.loadCurrentPage();
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
        return '/' + this.props.apiRoute + '/' + id;
      },

      /**
       * Load new data set when pagination is triggered.
       *
       * @param {object} page
       */
      onPagination(page) {
        this.pagination.current_page = page.page;
        this.pagination.per_page = page.size;

        this.loadCurrentPage();
      },

      /**
       * Load new data set when sort is changed.
       *
       * @param {object} sort
       */
      onSort(sort) {
        this.sort.column = sort.name;
        this.sort.order = sort.type;

        this.loadCurrentPage();
      },

      /**
       * Load new data set when search query is submitted.
       */
      onSearch() {
        this.search.current = this.search.input;
        this.search.input = '';
        this.search.display = false;

        this.loadCurrentPage();
      },

      /**
       * Toggle search field.
       */
      toggleSearch() {
        this.search.display = ! this.search.display;
      },

      /**
       * Load data for current page.
       */
      loadCurrentPage() {
        // Handle pagination
        let queries = '?page=' + this.pagination.current_page;
        queries += '&per_page=' + this.pagination.per_page;

        // Handle sort
        if (this.sort.column) {
          queries += '&sort=' + this.sort.column + ':' + this.sort.order;
        }

        // Handle search
        if (this.search.current) {
          queries += '&q=' + this.search.current;
        }

        axios.get(this.props.apiRoute + queries)
          .then(response => this.updateTable(response.data))
          .catch(error => this.$root.notify('error', error.response.statusText));
      },

      /**
       * Update content in table when new data has been loaded.
       *
       * @param {object} data
       */
      updateTable(data) {
        this.items = data.data
        this.pagination = data.meta.pagination;
      }
    }
  }
</script>
