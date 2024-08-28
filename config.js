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
global.sudo = process.env.SUDO || "2376582222828";
global.owner = process.env.OWNER_NUMBER || "237658222828";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg,https://telegra.ph/file/9deb04066bb23928364eb.jpg,https://telegra.ph/file/a883ea1d150f9db4033ac.jpg,https://telegra.ph/file/a449aee68cc980769cf24.jpg,https://telegra.ph/file/0ed72840be5821352f6e1.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUg0KysxNW5KZ3EyQ1lZaUVhQm9tM0ttRmhySmsxZmJjUnpkWC91bmRYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSitqWXJ2Tm0vdGtSVk1rdWNZYmIrVU1QeU51cVF0L2p6YndldEJ3ZUNFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQk45ZDE0L1loM2dXTmF0SUVtVncrRTRCL1pxb2ltb3VzeHBWcVJmbGtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjZEYvSkNXZ2JrMFNudnVLc0pXTjlsSmFHcFRuUnhQZEQ3NExMQTg4cVdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHeEhjeXZEM2cyaGdLL213L1RCWUozZjhzRkdXYjgyWWFjOWJBcWJwbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNLdkRQMnFGWUtjZzJBTnJCYXdrUThJd0dTK0w3YU9RNk9YV2I2ZmtTSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0J2YlBIa1RONFVEKyt4SUFhdmJiNlUyVVV5alFOSWNqbDF4Wjk5ZWszQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkpsR3hHd3VKQkZpaWU5M2ZVeHJqeGU0anRMTEYyTDl0YVU1UmtpcXlqVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii92R3plY1hBVkw2cDFQWmxicUJ4bG0yVm9CNkwzL1YwQnVZQnBWVzQ0bzZtdHYrV284c3RkS0JyVHJXL3ZINDE4S2NkeFAzU2NocWR3dXJLZEdNbWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJMLzBJc0JvdjRxQXpQTzR6TVM4SVd5MmR4cmNrMTF5aWVVbHVNRjdnZTRnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmajRUdkd5OVM3U3p6aDlmSWt5SVJ3IiwicGhvbmVJZCI6ImM4NmY1ZTJiLTYyNWUtNDJjYy1hNTNkLTZkYWYxZDE4NmM4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6am94N2ZJTjVrb1RWVElLenBQaHByZngxb2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3pSSFRwZ1FXSTZoLzZXQ0V4SlFCU3FDb0NZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE4TktDQ0tLIiwibWUiOnsiaWQiOiIyMzc2NTgyMjI4Mjg6MjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w2UXhha0VFSU9qbExZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVpdmxTdEpvOEF6R1VUa2R5bGxGS1FJQTJjM1c5Sm4raDM5MEp6U3R5RnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkMyczVLMWhCMVQ3aXVYL2tnaDFUamh4T2dXNVc4dmNvcEQ2YThDSWFLR1ByNWo5c2c4TUlpb1cxZWx0ZjZoSXdzOCtzUHJLTEJ4OEtpV1dxcVZyZUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0WlFUdkNIQkhjODBXL2hsRm9DVjZrSzhpaVVxT2pQdHkrMjJiME5BT1lyMHIzUXVSeDE5U0NQZjZwWmZZL0N2WXNmM213VTB2ZnZxSDJIc0N0U2lnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1ODIyMjgyODoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJib3I1VXJTYVBBTXhsRTVIY3BaUlNrQ0FObk4xdlNaL29kL2RDYzByY2hiIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MTkxMTIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdtYiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐*",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
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
