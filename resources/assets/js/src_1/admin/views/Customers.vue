<template>
  <page-content page-title="Customers" page-icon="group">
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
            { header: 'No', column: 'No', sortable: 'No' },
            { header: 'Name', column: 'Name', sortable: 'Name' },
            { header: 'Default User Name', column: 'DefaultUserName', sortable: null },
            { header: 'Group', column: 'CustomerGroupName', sortable: null },
            { header: 'Country', column: 'Country', sortable: null }
          ],
          apiRoute: 'customers'
        }
      }
    }
  }
</script>
