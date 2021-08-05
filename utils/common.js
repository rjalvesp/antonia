const R = require('ramda');

module.exports = {
  pickAuthorName: R.pipe(R.pathOr('', ['author', 'username']), R.toUpper),
  pickAuthor: R.pipe(R.path(['author', 'id']), value => `<@!${value}>`),
  pickCommandMember: R.pipe(R.propOr('', 'content'), R.split(' '), R.prop(1)),
  pickCommand: R.pipe(R.propOr('', 'content'), R.split(' '), R.head, R.toLower),
  isMessageFromBot: R.pipe(
    R.pathOr('', ['author', 'id']),
    R.equals(process.env.BOT_ID),
  ),
  isBotMentioned: R.pipe(
    R.pathOr([], ['mentions', 'users']),
    R.find(R.propEq('id', process.env.BOT_ID)),
  ),
};