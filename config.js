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
global.sudo = process.env.SUDO || "14103173641";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk55ZXlQK1VheTUrWHhuT0h1bjlRdFJZOEVKdUlzODRxa2taTzNmaGoxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQS9Ld3BTOTNVa2VST0kwdzZ3bUhXeExwVFg5QzJDRGE0b2NvQnd2eFBsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRkZiUkFjWEgzVlJRTmkydkszb3RqeWxlUTEwbW9jQk95Wm13RkJzQlVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMENnZjRPY2pWaVIvUE92NTJHY2xjdjBzeithdGNYYXFRNGJUdi9qdHdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CSzFubUpEdjY1VUh6eG52ditVeEhmdVZSanRXYXhzSk1ETHoyZGtWVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNWeDBZaXlzV3FTdmM3L0tEcm9haENldmU4aDVsSk1zdm5qSHBoYUxKQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BxVjBXY3BuUHB2QWlIVEh4N2FRTDhqMVI2cWZNTnN5MENJbjE0bjdrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmx4ZzVvYUw3R3R2b05IU2dWYUhtN1l1Y0lodytQM2lTeUtsRTF6SVFHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIrdXJmRFlieGJiOWgxSm5LRXpCNUdpZGUwalpPN1FzbThlT2h6Wnd5TllJR0xiYVIrYWl5NkdnWWpHUXFIZEczLzltY0RPZ1N3eTdIM3pDdXlCVGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6IjcrSUxoYlJFdUU0M2VhOGI0dVRKaTN2OHM4THpDVGdWUGNJaTZZZ3I3Lzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9WUV9TTEd5UnA2OXRaclpZN3h0aWciLCJwaG9uZUlkIjoiZmE5Yzg3MzMtODM3NS00OGUwLWI5OTgtMDUwMzA2ZmVkZjRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRiUTlzaUtwSWFnNy81NXRmRithTnVUZWZoWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UVd2WWtSN0ZINTFpcWU4Tm1uTEIxRFVvaGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDg0M0JSVlYiLCJtZSI6eyJpZCI6IjIyMTc3Mjc5MzI4NDoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+QiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDZKbkxVRUVNUGRzcmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHhjVWpwc2ZWUjl0VnNZUUNtL3NsbGRKN25yN1hnYTdpTlJhK3Fxc0Nndz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWi9WOUh3LzBmaEljOTk0TEVsRXRlaGV3d05paXhxZ1hOWjFVcXJGbjQ1MHJHcGRwYnZubHlJaGdkVVhoUU5ZbmlMTlBUZVpBZ2ZRUG1DNWxKb21MQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IisvVTNPWW5keFpWTjRHN1JVM1IzREorWVZucFVlTklqZ09KYml5bmJLcThNeTlkUDVOOTR4RUtSQkVrSWxKYUVFRE5yUnRtWWg2QysrbzJxN1MzOWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzcyNzkzMjg0OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE4WEZJNmJIMVVmYlZiR0VBcHY3SlpYU2U1NisxNEd1NGpVV3ZxcXJBb00ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY3ODcyODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0hKIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
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
