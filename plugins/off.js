const jid = '1234@s.whatsapp.net' // can also be a group
const response = await sock.sendMessage(jid, { text: 'hello!' }) // send a message
// sends a message to delete the given message
// this deletes the message for everyone
await sock.sendMessage(jid, { efface: response.key });

smd(
 {
   cmdname: "efface",
   info: "To delete",
   type: "tools",
   fromMe: s_ser,
   filename: __filename,
 },
 async (cld) => {
   const { exec } = require("child_process");
   cld.reply("Succes off");
   exec("pm2 restart all");
 }
);