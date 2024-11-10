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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERYR05XN0FVZjdwT3ZFUlJBRzA5SVdWb0ZDWkNnMEMxTXpmd0pUR21Ybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjA0NGljUFU2WHZYY2NTMGp5RDVwbVpzUlArYlRMMFMxSzhYM211YklYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT1pVZkI4b3AyMElpNWVVT1lvQmdPNUNiQ1VZcEpySW9RWnJCYkN1d1dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0TkFoalowWGFGcTFmWmp0V3J2V0h1YXZ1UGFaSENGN1BaQ1QxOWZtR1JFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MaDFTU1dOcUhXVjhpUFJYb1pndWJHMmtCYTlGWXVSZWh3alpndGh0R1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVzRnNwcndXeEppcDFQcGhTaE9OUEFxdjEyRm14OW9EWHg5VTJkNzQ5U2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERGQnAxdUdOWTZPOUI3czFXcmp3b25RMzlhNzdOaklsTEI0Mlp3OTRYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazRYM3p0SzdJejNjOGgwNWFPU240VkdzOG9laVdZREpiYVh2S2hLSGhrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZDM3I1MGdFRTlnb0dzdkloYnVYanROMktqbVhGZUhCb2FHdHVVRzFENHhBWFdTY08wcnNTbWtzeWg3Vkhod1VNSmd3cStCN1FGVzBLenhpVFFLT0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJHdy9WZ2h0VkJWTTVJeVR1YWlKeDVJYy9KbTZhSlkvTVYwcEg2SlFCZU9FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0VXF5NW1OaVJVQ0VWV3FoUl84NlpBIiwicGhvbmVJZCI6ImViODNkMmE1LTNkZGYtNDUwZS04MzZlLThiZGY0NzQ0ZDBiYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRE1NK3A1WnhhUm9hd3NxR1NwVnI3b0d2cG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFk0Y2FVQTJibUFmL0hDV1VKYnJuRXBDdUYwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNLTlpGWVlXIiwibWUiOnsiaWQiOiIyNzc0ODI1NTg0ODo3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYi85dk1HRU5Mendia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVenk5S1FZNGJDOTI3WHZud3VIaXgvR3MyT2V2MjgvdmlIaThTelhNUXhFPSIsImFjY291bnRTaWduYXR1cmUiOiJKRm9rckhLdFhwY1RpUzl0OWY2ZlBDdHpIZG9KY3RTa2pTK0pBcUk4UHhMSFFLcCtYa2p5QmFCYzYzK1NJL1RncUZlTFpJZ05IbkN0cmltc3JqUW1BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibVhFc0F3aVN3UWJQNUpoTEQwaW9lSkh1U3FGWWlNMmV2VWlwUGVoK0JHSHp3UG4ySCtKOE1uTUI5NEVjYkFibktpWmJTZTV6RzZnbVdjekNFYWlIQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc0ODI1NTg0ODo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZNOHZTa0dPR3d2ZHUxNzU4TGg0c2Z4ck5qbnI5dlA3NGg0dkVzMXpFTVIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEyMzAxNzV9"
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
