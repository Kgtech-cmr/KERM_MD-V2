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
global.sudo = process.env.SUDO || "221772793284";
global.owner = process.env.OWNER_NUMBER || "221772793284";
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
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RrZGRhZnpxZDVvSGFiU1ZLVDBWSXVuNldwR3ZlOEJ3bjV0ZjBhUUZWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWNqbU5QQWFFcEV6OEwwSHRNMlVNSlprbzFYSS9Ob0tQNmgwT2RpNlRqTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSFhlWDhaK1NaZGFKQmZseWZpSFQwbG1OWmRXTVNvVXVHQVNjR1BBM1dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpYlh1eEUwRnJITmVLRmVBMzNqVGQ5SFJYMlFoN2g2alByL2VyV1VsR25vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FTXJ3Wk5sOGhIaWFvYWlIZEgvTzU5M0IwUGQ5ZnhqVmYrMit4cVBZRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhHdVQ3WVBGVE81Z3pRNFk5Mm1Delk3Vkg3RDNHeTFMRGFTM3JTOEpyR289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0Q4bmlmckJKREVDdmVEL1ViMmVaTGJTcFZXdmRGeTR6ajNNU2RiT1lXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam44Z0JmcEMzOEo0TEF0N3BhVEdYOG03UXdWSlBLTUZQQm1ONjVZOGxpWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxTNTM0ZCtVS3FjRG14bU80MXZlSWp5aUo0dyt2d3JiR3BDR0cxSUlhaDhHVG5uWmFhazQ1YnhuVWFUTUJpU3BFc0F4ZnkvaGcxRkRBK0FKdlU5NGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJpTkF3bmNqeFB4NW1acUFoMDFXSWRCRWE0QVo3Wmp6aXdmdkVPTmM0OGlVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBdHFsdmNhQlN1cW9XS3BKZVhyLW9RIiwicGhvbmVJZCI6ImNhNmYzODk3LTk1NjEtNGUxMy1hMDNlLWM1MTUwOTNkY2Y2NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZlJIVU14R1NxMWt2MkhpTzlUNDBWVEhQSFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVl4aElMaUxNbGR5a2xZMkpzZ2RXTTFNdmVJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhCWDU0UzdSIiwibWUiOnsiaWQiOiIyMjE3NzI3OTMyODQ6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoicm9pIGTDqW1vbiBhbHBoYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUNLbkxVRUVKS2IxN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHhjVWpwc2ZWUjl0VnNZUUNtL3NsbGRKN25yN1hnYTdpTlJhK3Fxc0Nndz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT1RkaTVCdHNVYmQ1QTI5c1NGMFphd2pxTVk2TEt5NlNrSDdjL3lpdWUvalBITWY2VGFIRE42UXhKSWpYd2VFWHg2UlJ4eXBTU1R6cm9udTJjLzZOQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6InZQTk5qTVJlNUw4TlJTenBGa0hlSHZUWHJBTnk4QlRaM2c5djJDK1FJbjY3WTU0b2FZRnU5Qis3WWdNaWdqWm1EYklocG1weWJPMU92dFlCNGNpL2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzcyNzkzMjg0OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE4WEZJNmJIMVVmYlZiR0VBcHY3SlpYU2U1NisxNEd1NGpVV3ZxcXJBb00ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjczODQ5OTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0hKIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "hanos",
  errorChat: process.env.ERROR_CHAT || "hanos",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "hanos",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "hanos",
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
