/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/24/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.hr.engagements
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
 * @class Engagements
 * @constructor
 */
exports.Engagements = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get list of engagements
 *
 * @method getList
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Engagements.prototype.getList = function(params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get specific engagement
 *
 * @method getSpecific
 * @param reference {Integer} Engagement reference
 * @param callback {String} Callback function
 * @async
 */
exports.Engagements.prototype.getSpecific = function(reference, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
