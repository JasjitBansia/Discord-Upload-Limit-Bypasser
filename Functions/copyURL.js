const copyPaste = require("copy-paste");
module.exports = {
  copyURL(text) {
    copyPaste.copy(text);
  },
};
