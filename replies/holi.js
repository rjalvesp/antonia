const { pickAuthor } = require("../utils/common");

module.exports = {
  "holi": (msg) => {
    const author = pickAuthor(msg);
    msg.channel.send(`Pa' ti mi coli ${author}.`);
  },
  "hola": (msg) => {
    const author = pickAuthor(msg);
    msg.channel.send(`Pa' ti mi cola ${author}.`);
  }
}
