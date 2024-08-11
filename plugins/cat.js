const { smd } = require("../lib");

smd(
  {
    cmdname: "cat",
    desc: "Send Images of randome Cats!",
    type: "misc",
    react: "🐈",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://cataas.com/cat",
        { caption: "*Meyaooooooooo🐈!*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: cat`, e, false);
    }
  }
);
