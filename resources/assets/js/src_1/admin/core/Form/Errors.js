class Errors {
  /**
   * Create a new Errors instance.
   */
  constructor() {
    this.errors = {};
  }

  /**
   * Determine if error exists for given field.
   *
   * @param {string} field
   *
   * @return {boolean}
   */
  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  /**
   * Determine if there are any errors.
   *
   * @return {boolean}
   */
  any() {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Retrieve error message for given field.
   *
   * @param {string} field
   *
   * @return {string}
   */
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  /**
   * Store collection of errors.
   *
   * @param {object} errors
   */
  store(errors) {
    this.errors = errors;
  }

  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear(field) {
    if (field) {
      delete this.errors[field];
      return;
    }

    this.errors = {};
  }
}

export default Errors;
