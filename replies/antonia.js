const { pickAuthor } = require("../utils/common");

const replyAntonia = (msg) => {
  const author = pickAuthor(msg);
  msg.channel.send(`¡¿${author}, qué quieres pesao?!`);
}

module.exports = {
  "antonia": replyAntonia,
  "!antonia": replyAntonia,
}
