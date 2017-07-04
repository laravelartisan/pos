<template>
  <div>
    <rw-entity-editor
      :id="id"
      :fields="fields"
      :options="options"
      editor-title="User"
      apiRoute="users"
      @form-loaded="updateForm"
    ></rw-entity-editor>

    <!--password-->
    <rw-title>Change Password</rw-title>
    <md-input-container>
      <label>Password</label>
      <md-input type="text" v-model="password"></md-input>
      <md-button class="md-raised md-primary" @click.native="setPassword">Save Password</md-button>
    </md-input-container>

    <!--api token-->
    <rw-title>API Token</rw-title>
    <rw-code>{{ form.ApiToken }}</rw-code>
    <md-button class="md-raised md-primary" @click.native="refreshApiToken">Refresh Token</md-button>
  </div>
</template>

<script>
  import User from '../models/User';

  export default {
    /**
     * The component's properties.
     */
    props: [
      'id',
    ],

    /**
     * The component's data.
     */
    data() {
      return {
        fields: [
          { id: 'FirstName', label: 'First Name', type: 'text' },
          { id: 'LastName', label: 'Last Name', type: 'text' },
          { id: 'Email', label: 'Email', type: 'text' },
          { id: 'PhoneNo', label: 'Phone No', type: 'text' },
          { id: 'CustomerId', label: 'Customer', type: 'text' },
          { id: 'UserRoleId', label: 'User Role', type: 'select', options: 'userRoles' },
          { id: 'EditableLanguages', label: 'Translatable Languages', type: 'checkbox-grid', options: 'languages'}
        ],
        options: {
          userRoles: [],
          languages: [],
        },
        password: '',
        form: {}
      }
    },

  methods:{
      /**
       * Set new password for user.
       */
      setPassword() {
        User.setPassword(this.id, { Password: this.password })
          .then(response => {
            this.$root.notify('done', 'Password Saved!')
            this.password = '';
          })
          .catch(error => this.$root.notify('error', 'Save Failed!'));
      },

      /**
       * Refresh API token for user.
       */
      refreshApiToken() {
        User.refreshApiToken(this.id)
          .then(response => this.form.ApiToken = response.Token)
          .catch(error => this.$root.notify('error', 'Token Not Generated!'));
      },

      /**
       * Updates the data with the current used form.
       *
       * @param {object} form
       */
      updateForm(form) {
        this.form = form;
      }
  },

    /**
     * The component has been created.
     */
    created() {
      User.init().then(response => {
        let roles = [];
        let languages = [];
        response.UserRoles.forEach(role => roles.push({ value: role.Id, text: role.Name }));
        response.Languages.forEach(language => languages.push({ value: language.LanguageId, text: language.Name }));

        this.options.userRoles = roles;
        this.options.languages = languages;
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
