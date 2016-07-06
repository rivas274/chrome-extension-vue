function translate(message, args) {
  "use strict";
  return chrome.i18n.getMessage(message, args);
}
