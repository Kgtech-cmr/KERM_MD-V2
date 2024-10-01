//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "alibo01@icloud.com";
global.location = "congo, kinshasa";
global.mongodb = process.env.ALTON_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kinshasa";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/243970113745 , https://wa.me/243970113745";
global.sudo = process.env.SUDO || "243970113745";
global.owner = process.env.OWNER_NUMBER || "243970113745";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURhY2NpaXFTYkJpdnpvWGo3TnZTTHQzRXZaRVovb095dUtaaTAvZnIyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG9BZ3E0U0Ixc2xsSHVzNjZoblJ5Y2ZZbS9pK0hDSWJuOEsxTWY3WUcyTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSGUzQlRHaTlwU2ExZmxWWTFxRUNTTDJCU2tpSWhjTkllQlMxSG91bWw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxcWJoV2JnRkdyci9ydWNPUmhFalNuNnFNVmh0N1ArQzFmSDFYdkRSVVdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKM29KQk9UTW1PYWJ5RlRxK3g4Nk9QVE1QbThQb1F5Y1FwSWsySmtDbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRQVTBHNk00MlMvSEdoZ3JLZnMvVml6Vmg4WGZaSFMvbjBXK1JXVWRoRVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hETUhhcHBJZFFZWTRFZ25uOGdTdk9CcndvSVpBZGt3cVZ0dTFSNFkwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhFNDN6RFNIYVF1SXg0akJDZEh6eGhjeWJLVlJUYnJBRm9GSU1Xd2NtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcrcWp0UHhBQjBKQy94TzFiOHI0VTBhVC9tUmt2VEFFWDlheU1mai9ldml0cWpoSitSQ1gydHdVMzl5OW5aVG80M2lHZnFEQzUzYXAzTkdQdUQvU2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiIyL1pjMU9PYVdrVjhPS3E1R3J3TW52Q2l3ZzVTTkVqalJJZlladWs2WWFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqb1dwbXZya1IwNldxUWpwUzhuclp3IiwicGhvbmVJZCI6IjZjMjdiYWU0LTJlODYtNGI2Mi1hYmYxLTdkNjczMjAzM2Q1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuRlh5NmJ5NG9ReU9Na1JUWFgyendQa1NOT3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWhxSFQwdU5RNUhQbjdLU0pLZUh1NjhHUXNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ5OE1OU0g5IiwibWUiOnsiaWQiOiIyNDM5NzAxMTM3NDU6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJgYGDwlqS5xZJpbCBkZSBmYXVjb27vo7/ljY1gYGAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l1ZXNJZ0pFUEdyN0xjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdhVXdoRE5CcVUrVW50TzdDalNJRklIYjRhRHllQ0E5L08wWDJ4a0FWbm89IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1qTDhZU0xSNmhUMld5enVsckQ4bkhjRXBnN1U4S0xCdFJvblZwM0h3YjU5ajlhVjEvTEkxdWdDK3VjU1FLeUk5YkQzd1liMVZ5Q005SzBMVGpoR0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzVS85U0NsUmNrSnZuOVBLT0RJY2pDVDl5MTVkUFBvMS9zd1RzN0I5RCs2ZERLeEpnMEtPNldQazNsM3JYUzliVFhBbi96WEUxdVhScmRQbnVHWnBpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzk3MDExMzc0NTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUybE1JUXpRYWxQbEo3VHV3bzBpQlNCMitHZzhuZ2dQZnp0RjlzWkFGWjYifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc3MzExOTh9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ ALL TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "```𖤹Œil de faucon卍```",
  botname: process.env.BOT_NAME || "ᵏᵍ┘ALTON_𝚅6𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ ALTON ALIBO⌝☜",
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
