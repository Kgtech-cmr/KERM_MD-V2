//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermmd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kermhack/KERM_MD-v2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-v2-session.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS005SnkxdngzcHpWQTRleWV6N3Z4RTkwSnU0OERkeGpPMWl6WEZXSnhGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3pNaHpjVmFWR1hQblZRQVVhWHR4OHFTbzZzMVk3Y1hVZHNHc29ndnVUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWtHUWU5UkpmZFRZek9tL1BqdWlZWUZZcVd1YitYYjE5eWZXbFFxL2trPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3M09FYlpoeGlOTytUQm9CaWF1R2J0Ui95NmpieVhLazlpNldZVXFlMlVFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNEMTBKQ2NJTXJ6aXI2SjRaVktLbHp3RE9XYVdrbERmMnBaUWdhZlpyRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZCV1lUT1FPVlVxZ0IrUFVTTHcwbzUrZHlpMEtDK1lZU2JHdldhV2tKQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEIzZEdpdTg2cEhucnl6eVc5NHc0dnJTMkh2Mk12Nk9DTEpPQnhsVmozOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmtMTW1TTDlrWFZubTJsU1hZd1c5MXZMN0FJWEptbGJTRkl4MnN4dkNGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdpOGdSa1BxV1ZESnBNTHR1NEppaW4xSnc5WXlhT2ovdytDLzZLbktNeHdSSHBvSHBxYnpiOWkyYUZCa3E2QkM0bHhoWmZxUnhDMlZWVlk1RUFRdURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiI1aTY3NWxHZzFGcTBqU0dwZ3JyMm1KUVBhSm1HMEFMRDBkVXRUMlo4RTZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY5Mjk1MDYyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MTBDQjJGMjYxM0ZFMzNCNThFOTJENkE3QTEzQkExQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMTg2NzIxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2OTI5NTA2MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzFBMDUwMjA4OUM5RUNBMTQ0MDIzNEEyQ0JEMEQwOUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzE4NjcyMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOHNzYkRIYkpTMTYtVlBpRTFXaHBUdyIsInBob25lSWQiOiIxMmMzNDM2NS0yZmNjLTQ0NmYtYjNmZC1kZGMxZGM1MTQxYjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWCt4MDRYZzhXb0M4aGpqb3JEc3pPVmJJVDF3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIvaVovbHRreXdadkNBNVhHb1NDUktkNTZycz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxSloxOVFTSCIsIm1lIjp7ImlkIjoiMjM3NjkyOTUwNjI4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGF5cm9u8J+YgSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkRWd3ZzRkVKTDgxclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVVhKN2VYZkI0MmFzbnVUR2cvQnFkNWozUU5Ia1JqVk1LamVJRzlJY0htMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRzdkejgwR1FWV3NyM0MrRVUyMGpnVXUzcFY2a0tjV21uWHdmbWRMSjczK0V1UWt4d3VKRC92R2dRQmlqQ3BXVW9LZlhZZWRUSEFabjhXK0prbHY0RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlQvVFVtWWxZb0VyazRqOTJoQXdJcWs2WktvZWZLeFZMZnk3MWVVWmVNcTJkVFVhRHZNTTI5Rk9uYWQyaHppeWNEaWxKMkRGdjEzZWJJbzBpV3ZISUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjkyOTUwNjI4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVkZ5ZTNsM3dlTm1ySjdreG9Qd2FuZVk5MERSNUVZMVRDbzNpQnZTSEI1dCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzE4NjcxOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNVnUifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "> BRAND PRODUCT OF ☞⌜ KG TECH⌝☜",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
