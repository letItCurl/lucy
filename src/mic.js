const lyrics = require('./lyrics.js')

exports.mic = ()=> {
    return `${lyrics.intro} ${lyrics.couplet} ${lyrics.refrain} ${lyrics.outro}`
}