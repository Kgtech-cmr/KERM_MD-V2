//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "yes";
global.video = "yes";
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
global.sudo = process.env.SUDO || "243855264975";
global.owner = process.env.OWNER_NUMBER || "243855264975";
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
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVB2ZDVhc2dHcjh4YURiTnhtUXBBeUFCVDFicmJ6SWNjekZyZCtkL24wUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3EwWjR5bTRpalN5aDBKZm9yOEVOSWZVOXpZR1BaTC9uWmRGUnBqSEIwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSG95T1E2UlVzUzl1TlZ2a3BhMXZmOGN6Nzc5ZGZNQnd6aCsxc1V1VDBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVm41dFpadnZWWjRzMU4xb1ZyRFZ0S29yQjZtWXRIQTlRYys5SWhIdDBBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGQ2NEcEZiY3RVWUJ0eVVsdXorcjdxaytNY1o3STRsMEFoS1dpSnpOR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9IMFQvdGJMRW82MWRDL256bDRRMTMrRHV2bnNtQk9vV0NnSGpPOTVad2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RKZTNWTzR3MnFNWVpRaWFYTmY5bWlCckloNENlcE1IRWJDOUpKL1IzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1J6a0pka3F3MXVlbDhtQVNuTkNIelJvdnAzK3UxWXBVMmxMWTlDRHMydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhYajRKazZrR3U4UnI2VHhVanBiM0wya2ZqdmNwQ2JTZ3NTeC84c3BkeXkrNjBEemRiRFhRaGdCK1lQeU0xdTNKUEIwVnpFWFhiNDFQTW9XQTZpVmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6IitLdCtFaGp4NUZVOGFBMEtJbGhhRGozS2FZZkthUmY1ekZYV1NZSUUxdjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImktdkFRRThfU1hlRXZVVnQwLTRUVHciLCJwaG9uZUlkIjoiNDQxOWRmMzUtZGE4Ni00NjNhLWFhNjQtNTkyNGI0ODFlZDZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVdXZtMFVxdXluOVBMMW5IK2RxajRuTVNORT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdmpqS0p0dXNzSHlZeE4yU3JRUDA0MDIwNWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzRQOEJHM1ciLCJtZSI6eyJpZCI6IjI0Mzg1NTI2NDk3NTo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFSU8OITkUgS0FaQURJIPCdl6HwnZesIPCdl5vwnZeU8J2Xl/Cdl5jwnZemwrLCuUkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l2TnRha0RFTEh1akxZR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRDSDBtRHZHaS8reVFCNVdMaVhmcEwzYTl2Yy85M3BXNzlONEhvaklJRmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZLT0oyLzlRV1lIS0xFZVJyWDg2c3VLUFlldE1YalhWU3RCVit3cEFLUVVRQWRYbUxSRXQ4cXJwcUx4RnEybTVwS294NUFhSXJwWEtPMDlEMjNmSURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQcXdZUEltNDhIZUs0T3VRR0phcWdHVzlVa0dvSlVEVnVTalNacUgwenhxMGYxbUlPWjVrRmYxVGpnclA0M29PYUFOZGFmbHRBWFFOdEFKNWJpS0Rodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzg1NTI2NDk3NTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlF3aDlKZzd4b3Yvc2tBZVZpNGwzNlM5MnZiM1AvZDZWdS9UZUI2SXlDQlgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQwNjk2OTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzYyIn0=
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVB2ZDVhc2dHcjh4YURiTnhtUXBBeUFCVDFicmJ6SWNjekZyZCtkL24wUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3EwWjR5bTRpalN5aDBKZm9yOEVOSWZVOXpZR1BaTC9uWmRGUnBqSEIwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSG95T1E2UlVzUzl1TlZ2a3BhMXZmOGN6Nzc5ZGZNQnd6aCsxc1V1VDBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVm41dFpadnZWWjRzMU4xb1ZyRFZ0S29yQjZtWXRIQTlRYys5SWhIdDBBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGQ2NEcEZiY3RVWUJ0eVVsdXorcjdxaytNY1o3STRsMEFoS1dpSnpOR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9IMFQvdGJMRW82MWRDL256bDRRMTMrRHV2bnNtQk9vV0NnSGpPOTVad2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RKZTNWTzR3MnFNWVpRaWFYTmY5bWlCckloNENlcE1IRWJDOUpKL1IzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1J6a0pka3F3MXVlbDhtQVNuTkNIelJvdnAzK3UxWXBVMmxMWTlDRHMydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhYajRKazZrR3U4UnI2VHhVanBiM0wya2ZqdmNwQ2JTZ3NTeC84c3BkeXkrNjBEemRiRFhRaGdCK1lQeU0xdTNKUEIwVnpFWFhiNDFQTW9XQTZpVmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6IitLdCtFaGp4NUZVOGFBMEtJbGhhRGozS2FZZkthUmY1ekZYV1NZSUUxdjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImktdkFRRThfU1hlRXZVVnQwLTRUVHciLCJwaG9uZUlkIjoiNDQxOWRmMzUtZGE4Ni00NjNhLWFhNjQtNTkyNGI0ODFlZDZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVdXZtMFVxdXluOVBMMW5IK2RxajRuTVNORT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdmpqS0p0dXNzSHlZeE4yU3JRUDA0MDIwNWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzRQOEJHM1ciLCJtZSI6eyJpZCI6IjI0Mzg1NTI2NDk3NTo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFSU8OITkUgS0FaQURJIPCdl6HwnZesIPCdl5vwnZeU8J2Xl/Cdl5jwnZemwrLCuUkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l2TnRha0RFTEh1akxZR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRDSDBtRHZHaS8reVFCNVdMaVhmcEwzYTl2Yy85M3BXNzlONEhvaklJRmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZLT0oyLzlRV1lIS0xFZVJyWDg2c3VLUFlldE1YalhWU3RCVit3cEFLUVVRQWRYbUxSRXQ4cXJwcUx4RnEybTVwS294NUFhSXJwWEtPMDlEMjNmSURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQcXdZUEltNDhIZUs0T3VRR0phcWdHVzlVa0dvSlVEVnVTalNacUgwenhxMGYxbUlPWjVrRmYxVGpnclA0M29PYUFOZGFmbHRBWFFOdEFKNWJpS0Rodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzg1NTI2NDk3NTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlF3aDlKZzd4b3Yvc2tBZVZpNGwzNlM5MnZiM1AvZDZWdS9UZUI2SXlDQlgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQwNjk2OTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzYyIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ARSÈNE GEEK",
  ownername: process.env.OWNER_NAME || "arsene",
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
