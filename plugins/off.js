smd(
 {
   cmdname: "restart",
   info: "To restart bot",
   type: "tools",
   fromMe: s_ser,
   filename: __filename,
 },
 async (cld) => {
   const { exec } = require("child_process");
   cld.reply("Restarting");
   exec("pm2 restart all");
 }
);