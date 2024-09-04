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
global.sudo = process.env.SUDO || "50948748102";
global.owner = process.env.OWNER_NUMBER || "50948748102";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/7d8f9f70c06a3b1927e38.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0RtTnd4d0RxSHNIMyt3aExIUm9FNlJlK1lBVWtwRWY2c3poZGNEQkxVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxIY3FTSlN3cDQ5YklhR2YvTThtZ0pkb21mWXRsdWZyMVlCSGdqQTVWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ3Z4NnhjOCt1a0E4WUlydXU0OEVEYWh5NkZNQlNVc0U4MGViUmMrRm1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGOUZOT3pLK3NZWk9PaWNTR3ZmTGF4bjA4TXYzL3hFYUpocmxIaEFxcXl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDUXZjNStUNmdFcUt1eVVDS2dpdlFERzhpZXlaVTROVnE0bGY0aW9YVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZnVW1nQ0Y4Znp0WkZPOUVMbzkwMkZYcTNRYUxMdS9VT1NCYU1jRWhkeDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktISlYrZ3U2bDc2amFwTGx6VFBmdzZXK1JVU0k0Q1o1bXM1Q01Qd0kzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMxQVpCSnhuZWRpR3d4eHpuOUVsV05Hakh2dFpkV1k2cDQwSHhiMS9EZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild3Z2FCN2pkS01zZGZjQ2Q4NmJ2dXRVMnJBZSt2dTM3TkxLOFVFSUs4dGR4UWJvaTJBTWJmcHZRbUoxOTN3dXFQT2xEQmo0UmhIU2pSZWpjNldoS2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6IloxNjdMN0ZJU04relQ1YmVlK0tVUjNLWXNYYjBMbldudmxnbVNTRkhlckE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii1wRGpFUzZZU2x1bjB6ZUNSUVgwU3ciLCJwaG9uZUlkIjoiNTlmNGJiNWMtY2U2ZC00Nzk3LTg1MGItOWEyYjJhYTYxNzhjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks2Q2RoV2VuQ2RNRWRDZm12dExYSlU2VFdsaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZHBpTnpBQ2RKNDdPRVRDdi9hbVVNdmVES3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMjdOQ1FKQVYiLCJtZSI6eyJpZCI6IjUwOTQ4NzQ4MTAyOjc0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbk8xZklIRUovVjRyWUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuYUl2SWNVTlBMSFhqbCtucXdVRFhET2FtaWVvVXA5T2FodGRiVldnUGk0PSIsImFjY291bnRTaWduYXR1cmUiOiJOb3BQR1hiaHNiYk1sa01IYXNJWDZodHlnVm1zQ2xpOFQzNmdZMVRJdy9kNFA2eFJNTG1JVWFjMWJWQ1FWTTNsTlVXYVdLRTJ1dFBQS3B0ZVdhMHJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWZzZ1h4RkU2V3djT1RxZ1pXZHVaL1QyTjZhdlAzKy9oOHlKaFdINXhOdjAzcUpnV3pUQ1JoTG1Mem0zYU1ob285ZFRsU1RYZXFUUFBJVkpadmRNaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0ODc0ODEwMjo3NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaMmlMeUhGRFR5eDE0NWZwNnNGQTF3em1wb25xRktmVG1vYlhXMVZvRDR1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NDc1NDk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9VZiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "𓄂⍣⃝𝐆𝚯𝐃𝄟✮͢≛ 𝐒𝚫𝐒𝐔𝐊𝚵⃝𝄟✮⃝🥷",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝𝐆𝚯𝐃𝄟✮͢≛ 𝐒𝚫𝐒𝐔𝐊𝚵⃝𝄟✮⃝🥷",
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
