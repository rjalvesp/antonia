const { pickCommandMember } = require("../utils/common");

module.exports = {
  "!arantxa": (msg) => {
    const commandMember = pickCommandMember(msg);
    msg.channel.send(`${commandMember? `${commandMember}, p` : 'P'}esao, que no tus chistes no dan gracia!`);
  }
}