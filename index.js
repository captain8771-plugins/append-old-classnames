const { Plugin } = require('powercord/entities');
const classes = require('./classes.json');
module.exports = class appendOldClassnames extends Plugin {
    mutate;
    startPlugin() {
        this.mutate = new window.MutationObserver(() => {
          for (const el of document.body.getElementsByTagName("*")) {
            for (const className of el.classList) {
              if (classes[className]) {
                el.classList.add(classes[className]);
              }
            }
          }
        })
        this.mutate.observe(document.body, {childList: true, subtree: true})
    }
      pluginWillUnload() {
        this.mutate.disconnect();
        for (const cls of Object.keys(classes)) {
          for (const el of document.getElementsByClassName(cls)) {
            el.classList.remove(classes[cls]);
          }
        }
    }
};
