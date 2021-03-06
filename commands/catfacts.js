/**
 * Created by Will on 10/9/2016.
 */

const shuffle = require('knuth-shuffle').knuthShuffle,
    fs = require('fs');
    readline = require('readline');

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {[]} args
 * @return {Promise}
 */
function Catfacts(client, msg, args)    {
    return new Promise(resolve => {
        let arr = [];
        readline.createInterface({
            input: fs.createReadStream(__dirname + '/../assets/data/catfacts.txt')
        }).on('line', line => {
            arr.push(line);
        }).on('close', () => {
            arr = shuffle(arr);
            resolve(arr[0]);
        });
    })
}

module.exports = Catfacts;