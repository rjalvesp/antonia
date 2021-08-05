
const R = require('ramda');
const { datatype } = require('faker');
const { pickAuthor, pickAuthorName, pickCommandMember } = require("../utils/common");

module.exports = {
  '!love': (msg) => {
    const author = pickAuthor(msg);
    const isAzriel = R.includes(pickAuthorName(msg), ['AZRIEL', 'SEÑOR CROQUETAS']);
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
}