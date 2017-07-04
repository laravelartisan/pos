import BaseModel from './BaseModel';

class User extends BaseModel {
  /**
   * Get initialization data.
   *
   * @return {promise}
   */
  static init() {
    return this.get('users/init');
  }

  /**
   * Refresh API token for user.
   *
   * @param {string} id
   *
   * @return {promise}
   */
  static refreshApiToken(id) {
    return this.get('users/' + id + '/token');
  }

  /**
   * Set password for user.
   *
   * @param {string} id
   * @param {object} payload
   *
   * @return {promise}
   */
  static setPassword(id, payload) {
    return this.post('users/' + id + '/password', payload);
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

export default User;
