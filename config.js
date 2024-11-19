//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bayashikatakuri@gmail.com";
global.location = "Pretoria, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Pretoria";
global.github = process.env.GITHUB || "https://github.com/Phantom-kin/King_Phantom";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "27748255848";
global.sudo = process.env.SUDO || "27748255848, 2349123731026";
global.owner = process.env.OWNER_NUMBER || "27748255848";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://king-phantom.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFHMTY3MG8wdkxvQ0hKY0hmWklyY095dS9US2NBci9oY1RLWWdlOE9sVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3NjY3FzbWJzZHIyVEN5RG5mMTFlVU5vTXdGTEtJejVGU1VtbXl5c016ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRnRNcEhIQVlwdDYzc0NJNjlleDByaGl6VjdHbGJYc0VCU2FTbUsvM0dzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPdVkzeEk2MTVaTWkwalFCRU9SR2R6bHlQOW1jYVdhazdrdWo1MkwyeDE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MOFBUT2o4TUNxbktnVkFNMnZuRk10dE5peHdmMnBaY3ZpWllLTTdPa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5mL0FxbzZ4c1htVDlqZ0lkVVN3ai82UXAwVmx6dTg3SklNdytBUWVQMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05kMjk1dHo0SG11eE5YKzczeWlwaXNnRUVvR0QrQ2R6K3FjSHlzNVozcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JzeGNzeXF2RUlFYWRTYURrR3BIV1VackI2SjdVMTZxZnZEUE9QQlNRUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd4VTZuM2pqV1J5b08xSkYySUxwYm16UDlwamxDRm81ZXZPWWpoR3VwVWFlQ2ZJcGVZY2laYzNZbWN2SFFQR3BtQmdxRmdvMm8vRFE4RllZVWRYMGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJ4Yll6dG1XTitYSTBLeFBTZ1JhTnJ3NE1TTmJZdXo4cEpIRy9jNDRmQUZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoak9YeGxBN1NwU2NSTU5zMHJaMG53IiwicGhvbmVJZCI6ImZlZWRkMWZmLWExYjctNGQzYS05OTI0LTc5MDIwZmZkYzkyMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZ0p2Qlp3Q2NyUFpXWVRvZDh4RU4yK0RYbkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2hPVFA0Kyt6bTVJcGF2U0duRHBrMWwxVXZJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM3VjlHUVNXIiwibWUiOnsiaWQiOiIyNzc0ODI1NTg0ODoxM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGIvOXZNR0VNbWs5TGtHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXp5OUtRWTRiQzkyN1h2bnd1SGl4L0dzMk9ldjI4L3ZpSGk4U3pYTVF4RT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT05Id05Gb3J4bDFtUFV5ZkJ2ZVJkd1grZm45ckhDTnV3V3JIMFk2ZFRFUTNxZGNmd0ZJdmRXS09JVWVIKzh2cDcwMUg4N2J5cDM1VUhuZ2JOcEtLRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjEwUC8zQWRoMmNTaVpIenZlRktpdmd0RHV6dGIwSU9MZlZWWHJ3YTFwWDYxQXQ2Z1EwZEp4RzVIbnR6cENUR2YwRmdLdTRHYVZSYWRkQjNESE9EMWhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3NDgyNTU4NDg6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk04dlNrR09Hd3ZkdTE3NThMaDRzZnhyTmpucjl2UDc0aDR2RXMxekVNUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjA1NTY0NH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝙋𝙃𝘼𝙉𝙏𝙊𝙈™`",
  author: process.env.PACK_AUTHER || "𝙋𝙃𝘼𝙉𝙏𝙊𝙈",
  packname: process.env.PACK_NAME || "𝙋 𝙃 𝘼 𝙉 𝙏 𝙊 𝙈",
  botname: process.env.BOT_NAME || "𝙆𝙄𝙉𝙂 𝙋𝙃𝘼𝙉𝙏𝙊𝙈 ",
  ownername: process.env.OWNER_NAME || "𝙋𝙃𝘼𝙉𝙏𝙊𝙈",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝙋 𝙃 𝘼 𝙉 𝙏 𝙊 𝙈").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
