const { pickCommandMember } = require("../utils/common");

module.exports = {
  '!pozo': (msg) => {
    const commandMember = pickCommandMember(msg);
    msg.channel.send(`Venga ${commandMember? `${commandMember} ` : ' ' }subnormal, a tu casa.`);
  }
}
