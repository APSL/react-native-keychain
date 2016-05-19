/**
 * Mocked module for Android
 * @providesModule Keychain
 */
'use strict';

var Keychain = {
  /**
   * Saves the `username` and `password` combination for `server`
   * and calls `callback` with an `Error` if there is any.
   * Returns a `Promise` object.
   */
  setInternetCredentials: function(
    server: string,
    username: string,
    password: string,
    callback?: ?(error: ?Error) => void
  ): Promise {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  /**
   * Fetches login combination for `server` as an object with the format `{ username, password }`
   * and passes the result to `callback`, along with an `Error` if there is any.
   * Returns a `Promise` object.
   */
  getInternetCredentials: function(
    server: string,
    callback?: ?(error: ?Error, result: ?string) => void
  ): Promise {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  /**
   * Deletes all internet password keychain entries for `server` and calls `callback` with an
   * `Error` if there is any.
   * Returns a `Promise` object.
   */
  resetInternetCredentials: function(
    server: string,
    callback?: ?(error: ?Error) => void
  ): Promise {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  /**
   * Saves the `username` and `password` combination for `service` (defaults to `bundleId`)
   * and calls `callback` with an `Error` if there is any.
   * Returns a `Promise` object.
   */
  setGenericPassword: function(
    username: string,
    password: string,
    service?: string,
    callback?: ?(error: ?Error) => void
  ): Promise {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  /**
   * Fetches login combination for `service` (defaults to `bundleId`) as an object with the format
   * `{ username, password }` and passes the result to `callback`, along with an `Error` if
   * there is any.
   * Returns a `Promise` object.
   */
  getGenericPassword: function(
    service?: string,
    callback?: ?(error: ?Error, result: ?string) => void
  ): Promise {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  /**
   * Deletes all generic password keychain entries for `service` (defaults to `bundleId`) and calls
   * `callback` with an `Error` if there is any.
   * Returns a `Promise` object.
   */
  resetGenericPassword: function(
    service?: string,
    callback?: ?(error: ?Error) => void
  ): Promise {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

};

function convertError(err) {
  if (!err) {
    return null;
  }
  var out = new Error(err.message);
  out.key = err.key;
  return out;
}

module.exports = Keychain;
