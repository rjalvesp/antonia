const caps = (msg) =>
  msg.channel.send(`El grave uso de las mayusculas puede afectar seriamente a tu cerebro, y a tu capacidad de escribir en este chat.`);

module.exports = {
  '!caps': caps,
  '!gaby': caps
}
