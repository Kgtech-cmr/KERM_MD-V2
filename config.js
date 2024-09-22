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
global.devs = "https://wa.me/242064765597 , https://wa.me/24160019857";
global.sudo = process.env.SUDO || "24160019857";
global.owner = process.env.OWNER_NUMBER || "242064765597";
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
global.save_status_from = process.env.SAVE_STATUS_FROM || "on";
global.read_status_from = process.env.READ_STATUS_FROM || "nn";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =  eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURxa2FZcDQ3TnVUeENxN3FaZVN1MnhCMHhpMmtqd1FwYzZrZTB1RlMxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0J2N3Z1TC9TeXdSZ0l4Q3IxVmRHMjZDUU9OR3REdGJjYTlrUnJ0aTVFTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRlprdnFlZmQxcjJrNDhHT1pWTTBTbDJZSjNCZFdDOHBCVTV2b3N4N0VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUL2dBNmlQWHVUU3BQZWhSZ2Q1NXh1L1phc1MxeTZjL3RhQ0JYeVdOTkU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FWGNJeC83NmdqczdVWGsvMVI4ZjBtbnpKdlJVbFpOb012ZnZLVExmVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpOWlpIeklWelZwRzIrT3BkMmhIcC9DdDVzMFBCcGhsMFJqakp5d213RlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BHeVFXRXBYYXNCbXBLemlwZ1ZBZm1OeEc1ckdybjJwd0lhMkszWVVXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEhzd1NMRnE5WmhsdkpxSU1PNXRJbkRIU2lkSWt0cUhkWWUvczJablBIYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFnZHgrcnlqSlFJK2xnVFZkV24rZEdIWTJoRGIyNXpqQ1BsbmYrV2pvM09UcTBQd3ZWelVtRFJoUG90bzRUNzM5VDJOQzhqSTM5ZTlQa1BTQzFueGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJUM1hlRG1SYzNMZjB4K0ZidHZlWDYzTm1mekNqQ1M5QkhzRHRiSmZPdmRjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFY2xMNG5aSFNjZUc5Ni1IQVRLODZnIiwicGhvbmVJZCI6ImVmYmEyNTc1LTJjOWUtNDM0Zi05MTYwLTNhMTQ5N2U5ZDY0NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVzFNdzlhMXZ1TmkvdDByRUlJc1NJSUo0TXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGZGWW1Nc0dYNjVEQU1Rc3JmYk14c3J1bUk0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhDTTFMQkNTIiwibWUiOnsiaWQiOiIyNDIwNjQ3NjU1OTc6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZGz8J2RtvCdkbnwnZGrXyZfU2hhZG93In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQRzh0UEVGRUlQUHY3Y0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiNEZVQzJSblU3ekR6Q3FBTDNXNjlIU1dyRENIZlkxeEhWdE1VWHRPMDJRPSIsImFjY291bnRTaWduYXR1cmUiOiJYSytTRjJlOE1EMThmSUZtc1JnSUpiMFpEZ0crd1E1YmVTR2tFTTNIcGlwSmdiVlBGWjZzamRVanEzaFJSWjFKa2dCRGVLVXN0Q2ExRm41YkRYTnhEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaGllOGZYZllDYWdmcDFncVh4d3R1SFB4SjhiVXRGZmlObFhsUVA4dGhQRFBLdnJKTVdFVFRGOXJwYlF1Qmpya3hOSVNKTkJXWXA1cTJuMStKWXRlaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNjQ3NjU1OTc6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXK0JWQXRrWjFPOHc4d3FnQzkxdXZSMGxxd3doMzJOY1IxYlRGRjdUdE5rIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2OTk4NDE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU85WSJ9
  process.env.SESSION_ID ||
  "PUT YOUR SESSION HERE"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ l'éternel inconnu",
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
