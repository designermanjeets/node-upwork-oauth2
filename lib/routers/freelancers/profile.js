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
 * @module routes.freelancers.profile
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
 * @class Profile
 * @constructor
 */
exports.Profile = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get specific Freelancer Profile
 *
 * @method getSpecific
 * @param key {String} Profile key
 * @param callback {String} Callback function
 * @async
 */
exports.Profile.prototype.getSpecific = function(key, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get specific Freelancer Profile in brief
 *
 * @method getSpecificBrief
 * @param key {String} Profile key
 * @param callback {String} Callback function
 * @async
 */
exports.Profile.prototype.getSpecificBrief = function(key, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
