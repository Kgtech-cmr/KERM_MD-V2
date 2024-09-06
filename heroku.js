/* Copyright (C) 2024 KG TECH.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/
const {
    Module
} = require('../main');
const {
    chatBot
} = require('./misc/misc');
const Config = require('../config');
const Heroku = require('heroku-client');
const got = require('got');
const {
    getString
} = require('./misc/lang');
const Lang = getString('heroku');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

function secondsToHms(d) {
    d = Number(d)
    var h = Math.floor(d / 3600)
    var m = Math.floor((d % 3600) / 60)
    var s = Math.floor((d % 3600) % 60)

    var hDisplay =
        h > 0 ? h + (h == 1 ? " " + Lang.HOUR + ", " : " " + Lang.HOUR + ", ") : ""
    var mDisplay =
        m > 0 ?
        m + (m == 1 ? " " + Lang.MINUTE + ", " : " " + Lang.MINUTE + ", ") :
        ""
    var sDisplay =
        s > 0 ? s + (s == 1 ? " " + Lang.SECOND : " " + Lang.SECOND) : ""
    return hDisplay + mDisplay + sDisplay
}
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

Module({
    pattern: 'restart$',
    fromMe: true,
    dontAddCommandList: true
}, (async (message, match) => {

    await message.sendReply(Lang.RESTART_MSG)
    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.sendMessage(error.message)
    });
}));

Module({
    pattern: 'shutdown$',
    fromMe: true,
    dontAddCommandList: true
}, (async (message, match) => {

    await heroku.get(baseURI + '/formation').then(async (formation) => {
        forID = formation[0].id;
        await message.sendReply(Lang.SHUTDOWN_MSG)
        await heroku.patch(baseURI + '/formation/' + forID, {
            body: {
                quantity: 0
            }
        });
    }).catch(async (err) => {
        await message.sendMessage(error.message)
    });
}));

Module({
    pattern: 'dyno$',
    fromMe: true,
    dontAddCommandList: true
}, (async (message, match) => {

    heroku.get('/account').then(async (account) => {
        url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
        headers = {
            "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
            "Authorization": "Bearer " + Config.HEROKU.API_KEY,
            "Accept": "application/vnd.heroku+json; version=3.account-quotas",
        }
        await got(url, {
            headers: headers
        }).then(async (res) => {
            const resp = JSON.parse(res.body);
            total_quota = Math.floor(resp.account_quota);
            quota_used = Math.floor(resp.quota_used);
            percentage = Math.round((quota_used / total_quota) * 100);
            remaining = total_quota - quota_used;
            await message.sendReply(
                Lang.DYNO_TOTAL + ": ```{}```\n\n".format(secondsToHms(total_quota)) +
                Lang.DYNO_USED + ": ```{}```\n".format(secondsToHms(quota_used)) +
                Lang.PERCENTAGE + ": ```{}```\n\n".format(percentage) +
                Lang.DYNO_LEFT + ": ```{}```\n".format(secondsToHms(remaining)))

        }).catch(async (err) => {
            await message.sendMessage(error.message)
        });
    });
}));

Module({
    pattern: 'setvar ?(.*)',
    fromMe: true,
    desc: Lang.SETVAR_DESC
}, (async (message, match) => {

    if (match[1] === '' || !match[1].includes(":")) return await message.sendReply(Lang.KEY_VAL_MISSING)

    if ((varKey = match[1].split(':')[0]) && (varValue = match[1].replace(match[1].split(':')[0] + ":", ""))) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                [varKey]: varValue
            }
        }).then(async (app) => {
            await message.sendReply(Lang.SET_SUCCESS.format(varKey, varValue))
        });
    } else {
        await message.sendReply(Lang.INVALID)
    }
}));


Module({
    pattern: 'delvar ?(.*)',
    fromMe: true,
    desc: Lang.DELVAR_DESC
}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(Lang.NOT_FOUND)
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        key = match[1].trim();
        for (vr in vars) {
            if (key == vr) {
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        [key]: null
                    }
                });
                return await message.sendReply(Lang.DEL_SUCCESS.format(key))
            }
        }
        await await message.sendReply(Lang.NOT_FOUND)
    }).catch(async (error) => {
        await message.sendReply(error.message)
    });

}));
Module({
    pattern: 'getvar ?(.*)',
    fromMe: true,
    desc: Lang.GETVAR_DESC
}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(Lang.NOT_FOUND)
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        for (vr in vars) {
            if (match[1].trim() == vr) return await message.sendReply(vars[vr])
        }
        await await message.sendReply(Lang.NOT_FOUND)
    }).catch(async (error) => {
        await await message.sendMessage(error.message)
    });
}));
Module({
        pattern: "allvar",
        fromMe: true,
        desc: Lang.ALLVAR_DESC
    },
    async (message, match) => {
        let msg = Lang.ALL_VARS + "\n\n\n```"
        await heroku
            .get(baseURI + "/config-vars")
            .then(async (keys) => {
                for (let key in keys) {
                    msg += `${key} : ${keys[key]}\n\n`
                }
                return await await message.sendReply(msg += '```')
            })
            .catch(async (error) => {
                await message.sendMessage(error.message)
            })
    }
);
Module({
    pattern: 'chatbot ?(.*)',
    fromMe: true,
    desc: "Activates chatbot",
    usage: '.chatbot on / off'
}, (async (message, match) => {
    var toggle = match[1] == 'off' ? 'off' : 'on'
    await heroku.patch(baseURI + '/config-vars', {
        body: {
            ['CHATBOT']: toggle
        }
    });
    if (toggle === 'on') await message.sendMessage("*Chatbot activated ✅*")
    if (toggle === 'off') await message.sendMessage("*Chatbot deactivated ✔*")
}));
Module({
    on: 'text',
    fromMe: false
}, (async (message, match) => {
    if (Config.CHATBOT === 'on') {
        await chatBot(message, Config.BOT_NAME)
    }
}));