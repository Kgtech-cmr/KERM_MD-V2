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
global.sudo = process.env.SUDO || "237654499814";
global.owner = process.env.OWNER_NUMBER || "237654499814";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5PZW53T3NObnlvL1VZWVhXRGswYVdhSURDWWJqUE45cm9OYTRwZ3QzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFQektSeTJGRFI1WFZBSXZmM09wVGZMVWhHbXBsZWZ3YmNYQ3lHenhqVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSTlSVWxiNksrZ1BLOFVtL0pKenBaenlZbUhzYkxxemNaaFVOdUJsNTFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TGR1VjVUQlBLa05ESkZMYW13U0ZNTGNMakpJSGNrQ2E2WWEwWGhSTFM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNPTVVJNWRscWkrV1NpQkxjTjhZY3J2Q1pzUWduMWQ2MHF5QzdaT0VJMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNkVlZnMXdKcXdaRnpmU3UwSkZ4MXowN2dGQVNTdnVJaDg4VkJJQWo2MWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZRWXNtYlp0cUdsL2xZOGJCaFVCWThWdFc3STBraDBueXVWazJId1dIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHdTSjIyZGp3Wjd5UDc5QVA5bElMK2pkQ1RGUGxHOUlObkk0SHNnLzBqWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlVFAzeTBZVmkyNWZYNzFpa3VOL1RLWVprTkxXZXJQTzJVL0VYNWR2aXA0eHNDRTlxY2J5RUlsM2VMRzNSTmpTUHNRNGx1UUlEVk9WcVFlSzA1cUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6InB1OGZFcXdQU1JqYU9aVjNuM050UXlVemtlMEk4bnN3UEEvcHZIdnpwOVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InYtaVNaczhZUXZXSzRUTWFMS0luOHciLCJwaG9uZUlkIjoiMDM2MDE5NmMtNThlZi00MDY4LWIzNGQtZDJiOTk0N2VmYjYxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1pOU5FOUhrRWl6VXZvandQOUdqNS9PYjg1TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySkc2cklQaUFBMlJtUnZDekZwVStWODNBN2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUU5M0hLMlQiLCJtZSI6eyJpZCI6IjIzNzY1NDQ5OTgxNDoxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcVB0YUVGRUliWDVMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqdEVFWklqSUZFVFRhMmRleFdSRy96OWRsQzgvN3dRTk94QnpxUnVWN1Q4PSIsImFjY291bnRTaWduYXR1cmUiOiJHWk96cjJKRzJFaEVOcTVvOVBzbndZNVFwNGdzcW9WRGdESlYraWNsWVB2aUlVSHZMbjR3ZHlzUHpxczQvd2JjbFRXYnZYd1RVbzF1RTNNUCtkb2REdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibEFoOFRlTWxCdUo4TWNNV0FvdU9Td0lPcjUvUXRYd0dsai9nMnZJcUVXU0M0ZzBKQ3AzR1hzVzIyYUQ3azVoV0k1T1lUY2g0SWRrTS9KMEp6c3hVQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NTQ0OTk4MTQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZN1JCR1NJeUJSRTAydG5Yc1ZrUnY4L1haUXZQKzhFRFRzUWM2a2JsZTAvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNDExMzQ2fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜AIZEN⌝☜`",
  author: process.env.PACK_AUTHER || "AIZEN",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐*",
  ownername: process.env.OWNER_NAME || "☞⌜ AIZEN ⌝☜",
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
