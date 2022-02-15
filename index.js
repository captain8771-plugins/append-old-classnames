const { Plugin } = require('powercord/entities');
const classes = require('./classes.json');
module.exports = class appendOldClassnames extends Plugin {
    startPlugin() {
        var mutate = new window.MutationObserver(() => {
          for (const el of document.body.getElementsByTagName("*")) {
            for (const className of el.classList) {
              if (classes[className]) {
                el.classList.add(classes[className]);
              }
            }
          }
        })
        mutate.observe(document.body, {childList: true, subtree: true})
    }
      pluginWillUnload() {
        // no inject because im stupid
    }
};
