/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/23/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.workdiary
 */

/**
 * @property entryPoint
 * @type String
 * @default api
 * @static
 * @final
 */
var entryPoint = 'api';

/**
 * @class Workdiary
 * @constructor
 */
exports.Workdiary = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Workdiary
 *
 * @method get
 * @param company {String} Company
 * @param date {String} Date
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Workdiary.prototype.get = function(company, date, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get Work Diary by Contract
 *
 * @method getByContract
 * @param contract {String} Contract ID
 * @param date {String} Date
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Workdiary.prototype.getByContract = function(contract, date, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
