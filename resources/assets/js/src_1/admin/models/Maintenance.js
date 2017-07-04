class Maintenance {
  /**
   * Get initialization data.
   *
   * @return {promise}
   */
  static init() {
    return axios.get('maintenance/init');
  }
}

export default Maintenance;
