<template>
  <page-content page-title="Users" page-icon="group">
    <div class="main-content">

      <md-layout md-gutter>
        <md-layout md-column md-gutter>
          <list-table :props="list" ref="listtable"></list-table>
        </md-layout>

        <md-layout md-column md-gutter>
          <router-view></router-view>
        </md-layout>
      </md-layout>

    </div>
  </page-content>
</template>

<script>
  export default {
    /**
     * The component's data.
     */
    data() {
      return {
        list: {
          columns: [
            { header: 'Email', column: 'Email', sortable: 'Email' },
            { header: 'First Name', column: 'FirstName', sortable: 'FirstName' },
            { header: 'Last Name', column: 'LastName', sortable: 'LastName' }
          ],
          apiRoute: 'users'
        }
      }
    }
  }
</script>
