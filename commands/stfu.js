/**
 * Created by Will on 8/25/2016.
 */

const storage = require('../storage/playlists');

/**
 * @param {Client} client
 * @param {Message} msg
 * @param {[]} args
 * @return {string|undefined}
 */
function Stfu(client, msg, args)    {
    if(!msg.guild)  {
        return;
    }
    const playlist = storage.get(msg.guild.id);

    if(playlist)  {
        playlist.destroy();
        storage.delete(msg.guild.id);
    }   else if(msg.guild.voiceConnection)  {
        msg.guild.voiceConnection.disconnect();
    }

    return 'k 😢';
}

module.exports = Stfu;