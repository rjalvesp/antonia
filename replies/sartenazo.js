const R = require("ramda");
const {
  pickFromArray,
  pickAuthor,
  pickRandomUser,
} = require("../utils/common");

module.exports = {
  "!sartenazo": (msg) => {
    const user = pickRandomUser(msg);
    msg.channel.send(
      `${pickAuthor(
        msg
      )} Le da un sartenazo 🍳 a ${user} y... winner winner chicken dinner 🍗🍗`
    );
  },
};
