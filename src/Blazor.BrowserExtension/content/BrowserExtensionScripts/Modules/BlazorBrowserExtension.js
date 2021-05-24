﻿/**
 * @callback InitializeFunction
 * @param {string} environmentName
 * @returns {Promise<import("./BrowserExtension").default>}
 */

export default class BlazorBrowserExtension {
  /** @type {string} */ Url;
  /** @type {import("./BrowserExtensionModes").BrowserExtensionModesEnum} */ Modes;
  /** @type {InitializeFunction} */ InitializeAsync;
}