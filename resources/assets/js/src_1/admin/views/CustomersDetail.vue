<template>
  <div>
    <rw-entity-editor
      :id="id"
      :fields="fields"
      :options="options"
      editor-title="Customer"
      apiRoute="customers"
    ></rw-entity-editor>

    <div style="text-align: right;">
      <md-button class="md-raised md-primary">
        Show User
      </md-button>
    </div>

    <div>
        <rw-title>Order</rw-title>
        <div style="text-align: right;">
            <md-button @click.native="showOrders" class="md-raised md-primary">
                Show Orders
            </md-button>

            <rw-table
                    :tblList="list"
                    :items="orders"
                    v-if="orders && orders.length>0"
                    ></rw-table>
        </div>
    </div>


  </div>
</template>

<script>
  import Customer from '../models/Customer';

  export default {

    /**
     * The component's properties.
     */
    props: ['id'],

    /**
     * The component's data.
     */
    data() {
      return {
        fields: [
          { id: 'No', label: 'No', type: 'text' },
          { id: 'Name', label: 'Customer Name', type: 'text' },
          { id: 'AddressHeader', label: 'Delivery Address', type: 'header' },
          { id: 'DefaultDeliveryAddress.Address1', label: 'Address 1', type: 'text' },
          { id: 'DefaultDeliveryAddress.Address2', label: 'Address 2', type: 'text' },
          { id: 'DefaultDeliveryAddress.PostCode', label: 'Post Code', type: 'text' },
          { id: 'DefaultDeliveryAddress.City', label: 'City', type: 'text' },
          { id: 'DefaultDeliveryAddress.CountryId', label: 'Country', type: 'select', options: 'countries' },
          { id: 'DefaultDeliveryAddress.StateId', label: 'States', type: 'select', options: 'states' },
          { id: 'InternalComment', label: 'Internal Comment', type: 'textarea' },
          { id: 'OrgNo', label: 'Org No', type: 'text' },
          { id: 'IsCompany', label: 'Is Company', type: 'checkbox' },
          { id: 'PriceListId', label: 'Price List', type: 'select', options: 'pricelists' },
          { id: 'PaymentTypeId', label: 'Payment Type', type: 'select', options: 'paymentTypes' },
          { id: 'FreightTypeId', label: 'Freight Type', type: 'select', options: 'freightTypes' },
          { id: 'TermsOfPaymentId', label: 'Terms of Payment', type: 'select', options: 'paymentTerms' },
          { id: 'DefaultUserHeader', label: 'Default User', type: 'header' },
          { id: 'DefaultUser', label: 'Change Default User', type: 'select', options: 'defaultUsers' },
          { id: 'FirstName', label: 'First Name', type: 'text' },
          { id: 'LastName', label: 'Last Name', type: 'text' },
          { id: 'Email', label: 'Email', type: 'text' },
          { id: 'PhoneNo', label: 'Phone No', type: 'text' },
          { id: 'UserRoleId', label: 'User Role', type: 'select', options: 'userRoles' },
        ],

          list: {
              columns: [
                  { header: 'No', column: 'No' },
                  { header: 'Date', column: 'Date' },
                  { header: 'Order Sum incl. Vat', column: 'CurrencyPriceSumInclVat' }
              ],
              apiRoute: 'customers'
          },

        options: {
          countries:[],
          states: [],
          pricelists: [],
          customerGroups: [],
          paymentTypes: [],
          freightTypes: [],
          paymentTerms: [],
          defaultUsers: [],
          userRoles: [],

        },

        orders: [],
      }
    },

  methods:{
      /**
       * Get orders for a customer.
       */
      showOrders(){
          Customer.showOrders(this.id)
                  .then(response => this.orders = response)
                  .catch(error => this.$root.notify('error', 'Orders Not Loaded!'));
      },

      getInitialData(response){
          let data = [];
          response.forEach(option => data.push({
              value: option.Id,
              text:option.Name,
          }));

          return data;
      }
  },

  created() {
      /**
       * Get user roles.
       */
    Customer.init().then(response => {
          this.options.countries = this.getInitialData(response.countries);
          this.options.states = this.getInitialData(response.states);
          this.options.pricelists = this.getInitialData(response.priceLists);
          this.options.customerGroups = this.getInitialData(response.customerGroups);
          this.options.paymentTypes = this.getInitialData(response.paymentTypes);
          this.options.freightTypes = this.getInitialData(response.freightTypes);
          this.options.paymentTerms = this.getInitialData(response.termsOfPayments);
          this.options.userRoles = this.getInitialData(response.userRoles);
      });
  },

    watch: {
      /**
       * Watches route object for changes.
       */
      $route() {
        this.id = this.$route.params.id;
      }
    }
  }
</script>
