/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       06/13/2016
 * @copyright   Copyright 2016(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.messages
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
 * Messages
 *
 * @class Messages
 * @constructor
 */
exports.Messages = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Retrieve rooms information
 *
 * @method getRooms
 * @param company {String} Company ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.getRooms = function(company, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get a specific room information
 *
 * @method getRoomDetails
 * @param company {String} Company ID
 * @param roomId {String} Room ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.getRoomDetails = function(company, roomId, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get messages from a specific room
 *
 * @method getRoomMessages
 * @param company {String} Company ID
 * @param roomId {String} Room ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.getRoomMessages = function(company, roomId, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get a specific room by offer ID
 *
 * @method getRoomByOffer
 * @param company {String} Company ID
 * @param offerId {Integer} Offer ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.getRoomByOffer = function(company, offerId, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get a specific room by application ID
 *
 * @method getRoomByApplication
 * @param company {String} Company ID
 * @param applicationId {Integer} Application ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.getRoomByApplication = function(company, applicationId, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get a specific room by contract ID
 *
 * @method getRoomByContract
 * @param company {String} Company ID
 * @param contractId {Integer} Contract ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.getRoomByContract = function(company, contractId, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Create a new room
 *
 * @method createRoom
 * @param company {String} Company ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.createRoom = function(company, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Send a message to a room
 *
 * @method sendMessageToRoom
 * @param company {String} Company ID
 * @param roomId {String} Room ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.sendMessageToRoom = function(company, roomId, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Send a message to a batch of rooms
 *
 * @method sendMessageToRooms
 * @param company {String} Company ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.sendMessageToRooms = function(company, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Update a room settings
 *
 * @method updateRoomSettings
 * @param company {String} Company ID
 * @param roomId {String} Room ID
 * @param username {String} User ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.updateRoomSettings = function(company, roomId, username, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Update the metadata of a room
 *
 * @method updateRoomMetadata
 * @param company {String} Company ID
 * @param roomId {String} Room ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Messages.prototype.updateRoomMetadata = function(company, roomId, params, callback) {
  params = params || {};
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
