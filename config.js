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
global.owner = process.env.OWNER_NUMBER || "237656520674";
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
global.scan = "https://kerm-v2-session.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBma0x0TmV1Tmg4dm5TQ1FCVElwZDdZMyt1VElUTzExNHVBVUx2YlBITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDdWNWNDMlZnTTNEb2xYSjYzMkxpeU40ZlZrN1lXK2pwdXRlVkIrdXUwdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR0dQVVAvSlFuL0JTN1BZU2JlMjlyUncxWmZiUGhQQkNFOE9RVTBLQUhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QythWTBONFJhaUh6V2JSeGk1ZVJFUUVzZGlGazl1VFZvVHU1cE5hWWpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKd2crUXkySTRJU1FyNjlWMDh4dExWa1Z6d1NqKy9KSVIzWDVPSFNURzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZqdUZjdld0MUxzUzRnRXFDSlZGdi8zMS9jVFlBVTJKYUYwOTdKeEpjbk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0J1ZzYxVTc4dWNuUjA1WGQwaElSV0NtMk5JOHZ1WDNBZnJTbUNnYzhFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2FsNFhMSFhsWlE5NXArNTBJZU5mT0N5NXBQR0NwM3VCZXpQQkxtdnIxND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxEcjYyYUxMaGwyU2Z6SXdpT2JLOEFQMHhPRG13c0dPeklRV0E1NXFSVU9tNlVUR000cUVici9yOXEraCt4U2pZUnNFbDVZKytqL3paWDRJRkNRekJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiIvNXBFdmJweW1yd1p0bUppcjdnb3gzQkhBR012OVMvTzM5KytlcVpNU3pRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1NHdQN1VFN1JyV0MwLTFwVWswTXh3IiwicGhvbmVJZCI6ImZhZDU5YzYzLWM1OGMtNDFhMC1hMDM2LTAyZmNkZTU4NzFmNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0M1U1YmRtWHJzZEM2T0gvN1plVXJ3TGl3NHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajJpUWZtNXR5K3ExQW8rY016TTVTNG5RNmljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdDWVIxN01XIiwibWUiOnsiaWQiOiIyMzc2OTM2NDYwODA6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Zh/CdnpjwnZ6c8J2YvvCdnpfwnZmH8J2enCDwnZ6R8J2ZkPCdnpLwnZ6S8J2el/CdmZLwnZmOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJN2NxZFFIRU5lbDJMVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQU2xsdDk0M0dwd1d6NlhmQVRlYVlhelZVbXhOVjhhSmhIa29BNzJCeWxzPSIsImFjY291bnRTaWduYXR1cmUiOiI5SEZubllWQjJEcFBYN2ZoWk4xdmM0MmVIZnQ2UWh6TmJIV1lpdGEzSi9KK3lFMWVlTDJrbWJMa2NWRXZtcVR5L3lvak9rWUI2akhXTUlNeEk3Z0dDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQXFOTzIrRlhRQk43YThpN1k2ZFkvWm1tNU9ERk9hVm5SZ2t1WnpjaTNGd08wd0tDSFpNd2tGeGQxOWdzQS9WSTAyaWlJL0oya01Idk02RDMwU2ZMQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTM2NDYwODA6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDBwWmJmZU54cWNGcytsM3dFM21tR3MxVkpzVFZmR2lZUjVLQU85Z2NwYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzIwODQyMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPWkIifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
