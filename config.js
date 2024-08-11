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
global.sudo = process.env.SUDO || "+25766486303";
global.owner = process.env.OWNER_NUMBER || "+25766486303";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZXaDhsS3lyODNWNmN6TWFhYXhQZWY1YjRPbzdlQ3JoWGRzSURHU29tVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzVHNXkrOG9VVlNma1NyZW1NN0grWDRnL0c0NGgyTVFWdXN0TStsMDFVMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Ry9DbFg2ZjBvdkxKZ0dUenYvdjFPL01xSGZIYzJqRTBUeHM5aFFjNEdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5NmpZbkw5UWt5Z2tSQXh1Z3NsU0ZtaUt3Vll6RTEwUmk0TkhvcUpsSDI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCOHF2OHBsSnF4N2hPUDN2OXlXMEdTb015ajgzVXZHVEYyLy9ZZk9NbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZLTzlaVUVUS3ZDSjdTckQ2UDg4RzZEanY0Sll1bnpQcFR6WEpsc2dLZzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVtOEFHUTY4TFVhUWltNHA1ZE1hV1l2YmJVdWVwVmpmbnp6aXJGSGpHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWFNK2NLMDBTTXc2Zk5lSExxRk4rMVA5UjJnVUh2Tzc0dlJjaTBNb0lVTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF1NVFXUzlzODZQSFBKdnh1eWJtcnRkV1dDREJVckdoREFQajR6YnE2eXVOTTA4UVkzc0hJdFdyRS90RGtwcFJFYW81WGRGQXNpQzJRNEZVMUZ5a2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJaRU5kZVZIYU94c08rTGxESEVFUzllSlpGYWlmZHdqMzUxL3l5MmgzZzVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0cFFiNThTdlFDYW1fQ2pCSTlWeXVnIiwicGhvbmVJZCI6ImEzYTI3MDliLTEyZWYtNGQwMS05OTliLTdmZjEzYTM3N2QyMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyL0lWNVNjNEhYTHRhdEpvZi9Pbnd6dTdianc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRiOEovQXU5aWljaWtiazEwNXZpRmN2NldvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJKWENOUU45IiwibWUiOnsiaWQiOiIyNTc2NjQ4NjMwMzo2NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5GR8J2Qi/CdkI7wnZCN8J2QhOKdhO+4j/CdkIrwnZCI8J2QmPCdkI7wnZCT8J2QgPCdkIrwnZCA4p2E77iP8J2QgPCdkJjwnZCA8J2QjfCdkI7wnZCK8J2QjvCdkInwnZCI8J+RkSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEw2a2NNREVJMnE0clVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia3RrTWpRd1JpZ1A3SUJ5aWFUNlFhQ3FXMlVBdHpPUlduRlhtZjZSRTNHVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZjUrdjdPRWt6b3FjZGVRblRsZ0V0UWZ0RjNFV3VwckNpLzRhWjBqbVBEVEtTa0s3N3pyZHlYUjgxSXJHdnFOQjJiZ1JBNVNrT25SUlJndXVUKytHQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhYQVI3OHovNHMwRnQ0aHlnS2l1ekY0ZTVabHFxWXYvbnkvdk8zZEN5czVWTlFFZTdvN09zTzgxNEhDeDE1NmYraUtpY1RCOHU0WkxuN1F1QU9tbmpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU3NjY0ODYzMDM6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkxaREkwTUVZb0QreUFjb21rK2tHZ3FsdGxBTGN6a1ZweFY1bitrUk54bCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzM3MjgyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJbGsifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ATLAS-MD*",
  ownername: process.env.OWNER_NAME || "LONE KIYOTAKA",
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
