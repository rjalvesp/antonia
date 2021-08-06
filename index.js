try {
  require("dotenv").config(); //initialize dotenv
} catch (e) {
} finally {
  const replies = require("./replies");
  const Discord = require("discord.js");
  const {
    isMessageFromBot,
    isBotMentioned,
    pickCommand,
  } = require("./utils/common");

  const client = new Discord.Client(); //create new client

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.login(process.env.CLIENT_TOKEN);

  client.on("message", async (msg) => {
    if (isMessageFromBot(msg)) {
      return;
    }
    if (isBotMentioned(msg)) {
      replies["!antonia"](msg);
      return;
    }
    const fn = replies[pickCommand(msg)];

    if (!fn) return;
    return fn(msg);
  });
}
