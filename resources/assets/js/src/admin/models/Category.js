import BaseModel from './BaseModel';

class Category extends BaseModel {
  /**
   * Get initialization data.
   *
   * @return {promise}
   */
  static init() {

    return this.get('categories/init');
  }

  static store(playload){
    return this.post('categories/store', playload);
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

export default Category;
