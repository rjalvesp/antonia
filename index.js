require('dotenv').config(); //initialize dotenv
const R = require('ramda');
const Discord = require('discord.js');
const { datatype } = require('faker');

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);


const pickAuthorName = R.pipe(R.pathOr('', ['author', 'username']), R.toUpper);
const pickAuthor = R.pipe(R.path(['author', 'id']), value => `<@!${value}>`);
const pickCommandMember = R.pipe(R.propOr('', 'content'), R.split(' '), R.prop(1));
const pickCommand = R.pipe(R.propOr('', 'content'), R.split(' '), R.head, R.toLower);

const replyLove = (msg) => {
  const author = pickAuthor(msg);
  const isAzriel = pickAuthorName(msg) === 'AZRIEL';
  const commandMember = pickCommandMember(msg);
  if (commandMember.toUpperCase() === 'croquetas' && isAzriel) {
    msg.reply(`¿Qué vienes a buscar? No hay OnlyFans de croquetas.`);
    return;
  }
  
  const value = datatype.number({
    min: 0,
    max: 100,
  });
  msg.channel.send(`Hay un ${value}% de probabilidades entre ${author} y ${commandMember}`);
}

const replyManueh = (msg) => {
  msg.channel.send(`Manuéh, la manita relajá'`);
}

const replyCaps = (msg) => {
  msg.channel.send(`El grave uso de las mayusculas puede afectar seriamente a tu cerebro, y a tu capacidad de escribir en este chat.`);
}

const replyPozo = (msg) => {
  msg.channel.send(`Venga subnormal, a tu casa.`);
}

const reply25 = (msg) => {
  const author = pickAuthor(msg);
  msg.channel.send(`Venga @${author} subnormal, a tu casa.`);
}

const replyAzriel = (msg) => {
  const commandMember = pickCommandMember(msg);
  msg.channel.send(`Hora de que te comas un anuncio${commandMember? ` ${commandMember}` : '' }.`);
}

client.on('message', async msg => {
  
  switch (pickCommand(msg)) {
    case "!love":
      replyLove(msg);
      break;
    case "!manueh":
      replyManueh(msg);
      break;
    case "!gaby":
    case "!caps":
      replyCaps(msg);
      break;
    case "!azriel":
      replyAzriel(msg);
      break;
    case "!parras":
      reply25(msg);
      break;
    case "!pozo":
      replyPozo(msg);
      break;
  }
});
