module.exports = {
  "!matiasdrogas": (msg) => msg.channel.send(`Se vienen las cartas de patas :woman_facepalming:.`)
}


const replyMatutec = (msg) => {
  msg.channel.send(`Ese comando es como mi almuerzo, inexistente.`);
}

const replyLinen = (msg) => {
  msg.channel.send(`illo! Como dejai k me acushillen!!?`);
}

const replyAntonia = (msg) => {
  const author = pickAuthor(msg);
  msg.channel.send(`¡¿${author}, qué quieres pesao?!`);
}

const replyMoni = (msg) => {
  msg.channel.send('Ah bueno me voy');
}