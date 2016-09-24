/**
 * Created by Will on 9/23/2016.
 */

const rp = require('request-promise-native');
function Memes(client, msg, args)   {
    new Promise(function(resolve, reject)   {
        if (msg.guild.reddit && msg.guild.reddit.expires_in > Date.now()) {
            resolve(msg.guild.reddit);
        } else {
            rp.post({
                url: 'https://www.reddit.com/api/v1/access_token',
                body: 'grant_type=client_credentials',
                auth: {
                    username: 'ulcHmSmo4fXHTQ',
                    password: 'bnUfbR-o-gZ8UbADmOuPimWLxv4'
                }
            }).then(function (res) {
                msg.guild.reddit = res;
                resolve(JSON.parse(res));
            }).catch(function (err) {
                console.error(err);
                reject(err);
            });
        }
    }).then(function(auth)  {
        return rp.get({
            headers: {
                Authorization: 'bearer ' + auth.access_token,
                'User-Agent': 'node.js:appellation/pleb:v2.0 (by /u/appellation_)'
            },
            url: 'https://oauth.reddit.com/r/memes'
        });
    }).then(function(res)   {
        res = JSON.parse(res);
        const list = res.data.children;
        var item = list[Math.floor(Math.random()*list.length)];
        msg.channel.sendMessage("https://www.reddit.com" + item.data.permalink);
    }).catch(function(err)  {
        console.error(err);
    });
}

module.exports = Memes;