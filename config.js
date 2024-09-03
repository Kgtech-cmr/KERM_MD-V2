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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/6ef72927ba5b862d3811c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "25766486303";
global.owner = process.env.OWNER_NUMBER || "25766486303";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6ef72927ba5b862d3811c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFraGdEc2NwVlBHUXZUbFZNdzhEUDZVaVpCNzA4RXNkVHBXOVdqUmdWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclpJS01DZ296dC85WXBYK1VLS3JHTUxiajdHQitGTGJsdEVRWnhPOVpYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUFM1WGxEN3kyMjFsS3dBL3NOYkpjT2ZzMXljWkYzUklxeDJwUnBpaG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnclpHdnpGU2w0aUI2WS93U3FoTnNpbUFxVmI4VUVaK0Nzem82V2FBMERBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVEUWFoZ2hUeUhqcCtJNUx3b2l2UnF0QVFKcFM5aWd0aHFGaTRiUU9hM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild4Y3lGUjJESXJPdGVrNnNjRnNUSFp1R1I2VTZZek4wVnRYMUJCV0M1VWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUg1aW1ZS1ZXanRGSVNGZVBTVVpNSXhTd1JENkN6UW5hRnhaSkxlbFozWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkYvS1hTdWV0cEhHcWUwRVVOY1RFWFdrRXE0WUtsSGJnRlZvM2xFWkxnVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5qYnpJbGxDMTEwUlpBcVZXMUhoRERXSjFEL3ZLUldxcnB5ZmU5Z2hwR0c1KzZRVHp6S3JoVzNsK0FnQkJVV2M5bTVsck1HbUJGRE9zUnBEaVM1OGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJUOTViL0pSUWhrWXpjRmxYTnFLYWIvSWlFSVgzSjRWU2NoRlNEa3B3YWxrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlV3FjSDZxVVNfZWlkak1DblJmQWd3IiwicGhvbmVJZCI6IjVlZmYzNGJiLWI5ODktNDA0NS1iOTFkLWQzOTUxN2JjYmQyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIydHRhYnVHWEJyOXFQRFhkVXY5eFJTdnZ4Rmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEtIYkJTM1p5aUlwZndpaHhnQ3YvMndaQUJZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJaTDRFRDY1IiwibWUiOnsiaWQiOiIyNTc2NjQ4NjMwMzoxNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVQ2a2NNREVQS3kzTFlHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia3RrTWpRd1JpZ1A3SUJ5aWFUNlFhQ3FXMlVBdHpPUlduRlhtZjZSRTNHVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOS9obXlUem5IQ3VJNFN2bkpKM2pTazBiajlFWTdaa3RtYjVpeUhGVTRZZ3BTRTc5SG5lQVVlYlZ0eTFzbmZPN3lxSmZpRmhyRGI1TFN3STJSUWR4QWc9PSIsImRldmljZVNpZ25hdHVyZSI6InZKb0YxWm50MW9ZSXVsM1hRREZQRFR5TmVRbjJXc0xIT0xha3JxL2x3cmtRMjdyd3ZsMlBMVjVNVnFQV2QyTXdUckhGWkxNc1hDUUhrbWJ6TktDeWdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU3NjY0ODYzMDM6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkxaREkwTUVZb0QreUFjb21rK2tHZ3FsdGxBTGN6a1ZweFY1bitrUk54bCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM3Mjc5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCckMifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "-.,#!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "QG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD",
  botname: process.env.BOT_NAME || "*kerm-MD*",
  ownername: process.env.OWNER_NAME || "👑͢𝐋𝐎𝐍𝐄❄️𝐊𝐘𝐎𝐓𝐀𝐊𝐀❄️𝐀𝐘𝐀𝐍𝐎𝐊𝐎𝐉𝐈👑⁩",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
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
