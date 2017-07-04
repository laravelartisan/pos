class BaseModel {
  /**
   * Helper method for get request.
   *
   * @param {string} url
   *
   * @return {promise}
   */
  static get(url) {
    return this.request('get', url);
  }

  /**
   * Helper method for get request.
   *
   * @param {string} url
   * @param {object} payload
   *
   * @return {promise}
   */
  static post(url, payload) {
    return this.request('post', url, payload);
  }

  /**
   * Make API request.
   *
   * @param {string} requestType
   * @param {string} url
   * @param {object} payload
   *
   * @return {promise}
   */
  static request(requestType, url, payload) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, payload)
        .then(response => {
          resolve(response.data.data);
        })
        .catch(error => {
          this.onFail(error.response.data);

          reject(error.response.data);
        });
    });
  }
}

export default BaseModel;
