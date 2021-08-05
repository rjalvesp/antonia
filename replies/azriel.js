const { pickCommandMember } = require("../utils/common");

module.exports = {
  "!azriel": (msg) => {
    const commandMember = pickCommandMember(msg);
    msg.channel.send(`Hora de que te comas un anuncio${commandMember? ` ${commandMember}` : '' }.`);
  }
}
