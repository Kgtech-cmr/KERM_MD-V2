//#ENJOY
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
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237653001207";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBxVjJNRVhDY2tIck8waXFVREFSY2UreW9vSDBna0lIbTFtTXZhYlBsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibStvSUQ3dnBiY0hROUlaNEFtQytmOHVRUFRTcjVxRlVBaHl3YXFNMW5IUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3THR6MmpXQnU1M3pFL3M3T1RUQ09nTlgyTnU1YzZMSVMvRHVhUklielhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUnVmTnFLZ3NUNjZCYkw1RlY5eDlYTTlQUS9VT3ZCUWxCZzh5WGFRc0FFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKRURaLzRRczVyZWNLSmlkbzNmMzc0M0s2a05rcUFUMTJNOTF5YTgvVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZDbU5lZzNnLzRZZTVVV3NrellhNjA5QU8zTFAvQlRlMno2U0Y5ZUFGQVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVuak1uYk82VytUaGhYN3NzMUQ1N3drZ20xb2dpSjBsdzRaMVUrQnlHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJSTzU2SnNWdnNnR3ZCTk93UlVVK2ZiVTFNTEs0Q3ozZkNXVlFvQ00xTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhaV0RtbjNFd292Y1NBWVFpRm9aZGt3aGdGYXpySWhvNVBTb1c1dTZvNnJwbWZBWkdJbytsTmRML1NGVHNxZHpKc1BZVGhSNWhtZXpDNm80RWlLeWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJqV05IVEVmL1kzb2NFV29sQ3FrSWZhL2QrMUhTVkNQcTFObzByb1lHaThRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0dGwwNVlsX1RMaUpURkVlWERrcFF3IiwicGhvbmVJZCI6IjhhYTU5NGRlLTE0NmEtNDllOS05ODdjLTllYjAxZmFhY2Q3MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzQ0dUVlI0ZzF5MTdpbEF4TFBnekNsTkRXcEU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBMZlVTWFJzOVRiTDVJd2RxOFkxUmRCOHVVTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xhcnFjc0JFS3ZoMkxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5Ka1hwaGM3c3Z2Ky9IejdtQzZpc2VkczhrdFpJaGR1UDlsS3hweWJSMm89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdQc1crVGZVVVk0WVBNNzkyTWVtTlUwN1JmWklVWXZwKzYyUC9yNEpURVRGNktkMkVaYVhYZGo3QnVwdEtYZ0d2ellUUDR5RnZBVjYweXYzVk9pVmhnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2MHpPa0hRRXBxaGFrTk1DQ2JUa0V5cGxyc2N3ZERRVytsbEk0WGFwWlptMlVnejVuTUlWR3NiRTlITHBYRGRIcnpzWkRwWmFaRXpHbkVhTHRoTmJpZz09In0sIm1lIjp7ImlkIjoiMjM3NjUzMDAxMjA3OjQ5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkavwnZKG8J2Sk/CdkoLwnZKP8J2SkPCdko0uLu+jvy7CtCIsImxpZCI6IjI3Nzk3NDk5NzgyNzcxNDo0OUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjUzMDAxMjA3OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp5WkY2WVhPN0w3L3Z4OCs1Z3VvckhuYlBKTFdTSVhiai9aU3NhY20wZHEifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzIxNjA1NSwibGFzdFByb3BIYXNoIjoiMWxPU0VJIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜DERANOL☜",
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
