import Errors from './Errors';

class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }

  /**
   * Retrieve submittable data for the form.
   *
   * @return {object}
   */
  data() {
   let data = {};

   for (let property in this.originalData) {
    data[property] = this[property];
   }

    return data;
  }

  /**
   * Reset form fields.
   */
  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }

    this.errors.clear();
  }

  /**
   * Helper method for post request.
   *
   * @param {string} url
   */
  post(url) {
    return this.submit('post', url);
  }

  /**
   * Submit form.
   *
   * @param {string} requestType
   * @param {string} url
   *
   * @return {promise}
   */
  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          this.onFail(error.response.data);

          reject(error.response.data);
        });
    });
  }

  /**
   * Handle successful form submission.
   *
   * @param {object} data
   */
  onSuccess(data) {
    // Intentionally left blank
  }

  /**
   * Handle failed form submission.
   *
   * @param {object} errors
   */
  onFail(errors) {
    this.errors.store(errors.ValidationErrors);
  }
}

export default Form;
