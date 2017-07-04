import BaseModel from './BaseModel';

class Customer extends BaseModel {
  /**
   * Get initialization data.
   *
   * @return {promise}
   */
  static init() {
    return this.get('customers/init');
  }

  /**
   * Get orders for a customer.
   *
   * @param {string} id
   *
   * @return {promise}
   */
  static showOrders(id) {
    return this.get('customers/' + id + '/orders');
  }

  /**
   * Handle failed requests.
   *
   * @param {object} errors
   */
  static onFail(errors) {
    // intentionally left blank
  }
}

export default Customer;
