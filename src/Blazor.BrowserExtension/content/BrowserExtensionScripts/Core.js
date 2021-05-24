﻿(async () => {
  const projectName = "__ProjectName__";
  const environmentName = "__EnvironmentName__";

  if (globalThis.ImportBrowserPolyfill !== false) {
    // import browser extension API polyfill
    // @ts-ignore JS is not a module
    await import("./lib/browser-polyfill.min.js");
  }

  const initializeInternal = (await import("./Modules/CoreInternal.js")).initializeInternal;
  const url = globalThis.browser.runtime.getURL("");
  const browserExtension = initializeInternal(projectName, url, "Standard");

  if (globalThis.StartBlazorBrowserExtension !== false) {
    await browserExtension.InitializeAsync(environmentName);
  }
})();