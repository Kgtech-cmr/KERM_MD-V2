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
global.owner = process.env.OWNER_NUMBER || "2250700785815";
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
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZ1U0h1MlNjVzMzZHUwWFhNUDFkc09OZmx6U1FDV3lFQTlNNDFwNy9Wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlJXbm9HcFFTL0FNVEpJVkFLdmFJT04vWlh4NWtBWldSYWg1ZjZEVFdWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQTg2VnRMTWJqOEFrZlQxUnJVU2Z5LzFqekhJbk84TVhvcmFjZEVIRDFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWQStlQ0dobFBXUmlMS2ZQdjkyOWtINFJIbmFlMW5QVjV0L1VZc2d5MkNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLbGI0WjV6cm1UbmN0L1BBYWtBMU5hN0V4TWVpeWVsVFhJQmZGNlRFMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc5SFcxUEE4QkZkNXhSbG05MFQ0T0F2SjZIODRvcGt6bVVLbDl5M2xWUms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhHemc0L2xQWmgzWXlaQUdrNS84NDZya0lESGwxL0VEWjlxL3YrN3pYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGxoVGVPVFNJMmxZdzM5VW1SLzZicmljRWFFaG11V0xoMlp5NmkyY2VROD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1vaVFNSmlhM2VBRU9rTzFCNnQxYVY5N1EzRjloRWRCUHhhbFVPbWxPaWoyak9YbS9TSCtBaHJMaDRPYTVISThPM0c1bHdNcHM0T1IrTjNlVkIzdGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJkWmM5OVFpYzRUK0JyRFp3MkxIb0RaUnJjc1hkRzhlSGNxeUxFWHhMd2tJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTA3MDA3ODU4MTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EyNjE2REEzRDZEOTg1QTkwNDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzgzMTQ0Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1MDcwMDc4NTgxNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTUzRkFDOUY0NjEwNzA3QjlBMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzODMxNDQzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxb3MtN0wyU1Q0eTFmZGtjWjE2NVZ3IiwicGhvbmVJZCI6IjU5NDdhN2U0LTRmMDQtNGM2Ny04YmU1LTBiNWQ2NDgyY2VkOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSFJ2VGIvekRqR09EZC9GUWlZNmJmbUVXRUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJoY2RxN0NQdTVqTGNCelVTU3lGajVWeE5BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpCU1FZNUhWIiwibWUiOnsiaWQiOiIyMjUwNzAwNzg1ODE1OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTklLQV8g4L2R8JOGqfCdkanwnZG58J2RqPCdka/wnZG08J2RqPCdkbXwk4aq4L2MIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMR3JyNTRFRUlPcC9yVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDbHYvUVVsOWhGTlFZTDR6U0VLbm8xQUIxanZIMGRUTVMvYzBZMjhOZlJZPSIsImFjY291bnRTaWduYXR1cmUiOiJxVk5ocHVnNG9Ka2xHaTNwVjV1dmJXWTlkVGNDZnJqbjg5UDRoeWcvZm9PVEptcDZzYTI1Y3ZPbVJsa2NZMCszcXFQRGMwbUVZUUdRUU1COE1IM3RDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWVDVytabVQ4VW5Lak1HdnVqN203a28vQXpMTFF6eFhFbVN2MWg3SmVzQ20xQ1JRY0tjekRSQjdaZURkZ0ZnY0VMZ05Kd0VYT0lleE9qa01FTFhIanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjUwNzAwNzg1ODE1OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXBiLzBGSmZZUlRVR0MrTTBoQ3A2TlFBZFk3eDlIVXpFdjNOR052RFgwVyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzODMxNDQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlITCJ9
  "
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐*",
  ownername: process.env.OWNER_NAME || "NIKA_ ད𓆩𝑩𝑹𝑨𝑯𝑴𝑨𝑵𓆪ཌ",
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
