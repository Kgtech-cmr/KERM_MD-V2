//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237690768603";
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
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFxb0lrNjBialhkU21zOWVBMUR0bktRUE4yaExBZTBuelVORmIvTkMwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTlnKzdsWDdSZlE1SDJtT25VMW1DSk5yTkc2WjlLUFU0TUhuMFh1M0pHZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS1dUZWZNb3R4alA0cVdLTE5lOFBKTmpzMGtyd2V1dVdQN1IrdkgrVTI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ2FRRzVzazluWHlqbWFWSk9WL0NMT3RtYmwxbm5xb2NTZ01LbEVTaG1NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIKytXMU9UbnIxclNTSndzU0JLV1gyU2J0WEd2bHNKVDBaQTh1NU1PV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpjcExqYmdCQkVCWHlZdk90M0w1enlqMnBQcUxiUkllbWpIb0pHSTVxQ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUp6bXJvREJBQW1uZFBKa01ESFFIZTFibDcrenhSMjRRek9IandCeVJraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmlOb1NPUElJeWt1TmY1ZXVFdmNzNXZHcGhTMEQyM2Y4QmVDME0vejQxOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBzNjFVWU5aaG5YTHBWOUhZZkF3eHRhNVAwYVQvelVBMEpxNWtxaG5BZkx2MWtXdzJkZGpXMVp6eVhsclk1ZFN3ejRsNE1pMVgzUEFla3NZV0l4cWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJmVjRSZklZRkpkb28rdm5MNTc0ck9aSUljY0QwVFQ5bmpGb2tHK091eC9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfMllINHZqR1NDR3pNaXU4VllhT053IiwicGhvbmVJZCI6IjEyYzdkZjNjLTU3NGEtNDNlOC04ZjYyLTZhZWJlYWM3MmExNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPVzB6ZXFiK2x3clhSblZ5Z05IMHNpU1lscWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDNNcUUzNmhwQkdNcDRURmN4ZTNVUXZydjJRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNZVFhSVkQ0IiwibWUiOnsiaWQiOiIyMzc2OTA3Njg2MDM6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2hyaXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01PazZhd0RFS3VQa3JjR0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijd2MnA3UHhZcC80eUJGdStWTDlnWVh1MnpyV0FERmc0Y1FzYk9EVG1DR009IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhVUGJ0UnVDTXJUajRqSnNhM0hQcjY1NUdxV3hLcWdYajZuRW9LQzB2aUZhb3BVTVdNTmJ5bE4wUkw0cDZmWVRVMXd4ZjNDN3JkTnd3SEk3c3lNMEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXcG02ZFRiaG9lemUwem9WTnZRdWhESUFlWmlzUUFaNHNZWkQrNDZIMmxTYmE3dVc3eElwOVN6LzY3S2FOa3dzL3JJSmpNT2NtdFlxRVVhUjZ1UlBoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5MDc2ODYwMzoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlNzlxZXo4V0tmK01nUmJ2bFMvWUdGN3RzNjFnQXhZT0hFTEd6ZzA1Z2hqIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MjUyOTg1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUEzViJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘Dior",
  ownername: process.env.OWNER_NAME || "☞⌜Dior⌝☜",
  errorChat: process.env.ERROR_CHAT || "Dior",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "Dior",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "Dior",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
