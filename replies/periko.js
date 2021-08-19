const R = require("ramda");
const {
  pickFromArray,
  pickAuthor,
  pickRandomUser,
} = require("../utils/common");

module.exports = {
  "!periko": (msg) => {
    msg.channel.send("- Alexa! Vamos al tema. \n- No");
  },
};
