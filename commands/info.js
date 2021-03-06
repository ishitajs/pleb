/**
 * Created by Will on 10/29/2016.
 */

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {[]} args
 */
function Info(client, msg, args)    {
    const packageJSON = require('../package.json');

    msg.author.sendMessage("**Bot Info:**\n" +
        "Version: `" + packageJSON.version + "`\n" +
        "Author: `Will Nelson <nelson.will@live.com>`\n" +
        "Contributors: <https://github.com/appellation/pleb/graphs/contributors>\n" +
        "Help: `@Pleb help`\n" +
        "Licence: `" + packageJSON.license + "`\n" +
        "Repository: <https://github.com/appellation/pleb>\n\n" +
        "**Runtime Info:**\n" +
        "Language: `Javascript`\n" +
        "Node.JS version: `" + process.version + "`\n" +
        "v8 version: `" + process.versions.v8 + "`\n");
}

module.exports = Info;