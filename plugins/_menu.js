function hi() {
  console.log("Hello World!");
}
hi();
const os = require('os');
const Config = require('../config');
const { fancytext, tiny, runtime, formatp } = require("../lib");
const astro_patch = require("../lib/plugins");
const long = String.fromCharCode(0x200e);
const readmore = long.repeat(0xfa1);

astro_patch.smd({
  'cmdname': "menu",
  'desc': "Help list",
  'react': '🤴',
  'desc': "To show all available commands.",
  'type': 'user',
  'filename': __filename
}, async (context, message) => {
  try {
    const { commands } = require("../lib");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const currentDate = currentTime.toLocaleDateString();
    let greeting = "";

    if (hours >= 5 && hours < 12) {
      greeting = "Good day!";
    } else if (hours >= 12 && hours < 18) {
      greeting = "Good day!";
    } else if (hours >= 18 && hours < 22) {
      greeting = "Good Evening!";
    } else {
      greeting = "Good evening!";
    }

    const commandCategories = {};
    commands.forEach(cmd => {
      if (!cmd.dontAddCommandList && cmd.pattern) {
        if (!commandCategories[cmd.category]) {
          commandCategories[cmd.category] = [];
        }
        commandCategories[cmd.category].push(cmd.pattern);
      }
    });

    // Classy menu content
    let menuContent = `✨ *${Config.botname}* ✨\n`;
    menuContent += `👑 *Owner Name:* KING PHANTOM\n`;
    menuContent += `💻 *Uptime:* ${runtime(process.uptime())}\n`;
    menuContent += `🤖 *RAM Usage:* ${formatp(os.totalmem() - os.freemem())}\n`;
    menuContent += `📅 *Date:* ${currentDate}\n`;
    menuContent += `❤️ *THANKS TO:* BARAKA BEGA\n`;
    menuContent += `👋 😄 ${greeting}\n\n`;

    menuContent += readmore + "\n\n"; // Adding readmore before commands

    // List commands by category
    for (const category in commandCategories) {
      menuContent += `👑❯─「👑 ${tiny(category)} 👑」─❮👑\n`; // Decorative line with category inside
      commandCategories[category].forEach(cmd => {
        menuContent += `|👑|  ${fancytext(cmd, 1)}\n`; // Changed emoji here
      });
      menuContent += `CONTINUE GOING 🐉\n${readmore}\n\n`; // Adding readmore with 👇 after each category
    }

    // Prepare the final message content
    const finalMessage = menuContent + `\nYour King 👑*${Config.botname}*!\n© PHANTOM`;

    // Send the image with the menu
    await context.send(
      "https://files.catbox.moe/5zxe1k.jpg", // Replace with your image URL
      { caption: finalMessage },
      "img",
      message
    );

  } catch (error) {
    await context.error(error + "\nCommand: menu", error);
  }
});

/**smd(
  {
    pattern: "list",
    type: "MENU list",
    info: "user",
    dontAddCommandList: true,
  },
  async (m) => {
    try {
      let menuMessage = `
👑 *𝙆𝙄𝙉𝙂 𝙋𝙃𝘼𝙉𝙏𝙊𝙈 * 👑


🐉  **𝕽𝖚𝖓𝖙𝖎𝖒𝖊:** ${runtime(process.uptime())} 
🐉  **𝕯𝖆𝖙𝖊:** ${m.date} 
🐉  **𝕿𝖎𝖒𝖊:** ${m.time} 
🐉  **𝕻𝖗𝖊𝖋𝖎𝖝:** *${prefix}*
🐉  **𝕺𝖜𝖓𝖊𝖗:** ${Config.ownername} 
🐉  **𝕹𝖚𝖒:** ${owner.split(",")[0]} 
🐉  **𝕸𝖊𝖒𝖔𝖗𝖞:** ${formatp(os.totalmem() - os.freemem())} 
 ᴍᴇɴᴜꜱ 👇👇👇👇👇

${readmore} 

╭───────────────
│   **✨ᴀʟʟ ᴍᴇɴᴜꜱ ✨**
│❱  
│⚔️ 𝔏ɪꜱᴛ  
│⚔️ ℭᴀᴛᴇɢᴏʀʏ  
│⚔️ ℌᴇʟᴘ  
│⚔️ 𝔄ʟɪᴠᴇ  
│⚔️ 𝔘ᴘᴛɪᴍᴇ  
│⚔️ 𝔚ᴇᴀᴛʜᴇʀ  
│⚔️ 𝔏ɪɴᴋ  
│⚔️ ℭᴘᴜ  
│⚔️ ℜᴇᴘᴏꜱɪᴛᴏʀʏ 
│   `𝙆𝙄𝙉𝙂 𝙋𝙃𝘼𝙉𝙏𝙊𝙈 `
╰───────────────
`;
      await m.send(
        "https://files.catbox.moe/epj5f4.jpg", // Replace with your image URL
        { caption: menuMessage },
        "img",
        m
      ); 
    } catch (error) {
      await m.error(error + "\nCommand: menus", error);
    }
  }
);
// Command: Set Custom Command
astro_patch.cmd(
{
  pattern: "setcmd",
    desc: "To set a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      if (!query) {
        return await message.send(
          "*_Please provide cmd name by replying a Sticker_*"
        );
      }

      let queryParts = query.split(",");
      let newCommand, originalCommand;
      let isSticker = false;

      if (message.quoted) {
        let quotedType = message.quoted.mtype;
        if (quotedType === "stickerMessage" && query) {
          isSticker = true;
          newCommand = query.split(" ")[0];
          originalCommand = "sticker-" + message.quoted.msg.fileSha256;
        }
      }

      if (!isSticker && queryParts.length > 1) {
        originalCommand = queryParts[0].trim().toLowerCase();
        newCommand = queryParts[1].trim().toLowerCase();
      } else if (!isSticker) {
        return await message.send(
          "*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*"
        );
      }

      if (newCommand.length < 1) {
        return await message.reply(
          "*_Uhh Please, Provide New_Cmd Name First_*"
        );
      }

      if (global.setCmdAlias[newCommand]) {
        return await message.send(
          `*_"${isSticker ? "Given Sticker" : newCommand}" Already set for "${
            global.setCmdAlias[newCommand]
          }" Cmd, Please try another ${isSticker ? "Sticker" : "Name"}_*`
        );
      }

      const foundCommand =
        astro_patch.commands.find((cmd) => cmd.pattern === originalCommand) ||
        astro_patch.commands.find(
          (cmd) => cmd.alias && cmd.alias.includes(originalCommand)
        );

      if (foundCommand) {
        global.setCmdAlias[newCommand] = foundCommand.pattern;
        return await message.send(
          `*_Cmd "${global.setCmdAlias[newCommand]}" Successfully set to "${
            isSticker ? "Sticker" : newCommand
          }"._*\n*_These all names are reset if the bot restarts_*`
        );
      } else {
        return await message.send(
          `*_Provided Cmd (${originalCommand}) not found in bot commands. Please provide a valid command name_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:setcmd", error);
    }
  }
);
// Command: Delete Custom Command
astro_patch.cmd(
  {
    pattern: "delcmd",
    desc: "To delete a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      let commandName = query ? query.split(" ")[0].trim().toLowerCase() : "";
      let isSticker = false;

      if (message.quoted) {
        if (message.quoted.mtype === "stickerMessage") {
          isSticker = true;
          commandName = "sticker-" + message.quoted.msg.fileSha256;
        } else if (!query) {
          return await message.send(
            "*_Please reply to a Sticker that was set for a command_*"
          );
        }
      } else if (!query) {
        return await message.send(
          "*_Uhh Dear, provide the name that was set for a command_*\n*Eg: _.delcmd Cmd_Name_*"
        );
      }

      if (global.setCmdAlias[commandName]) {
        await message.send(
          `*_"${
            isSticker ? "Given Sticker" : commandName
          }" deleted successfully for "${
            global.setCmdAlias[commandName]
          }" command_*`
        );
        delete global.setCmdAlias[commandName];
        return;
      } else {
        return await message.send(
          `*_"${
            isSticker ? "Given Sticker" : commandName
          }" is not set for any command._*\n *_Please provide a valid ${
            isSticker ? "Sticker" : "command name"
          } to delete_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:delcmd", error);
    }
  }
);
// Command: Uptime
astro_patch.cmd(
  {
    pattern: "uptime",
    alias: ["runtime"],
    desc: "Tells runtime/uptime of bot.",
    category: "misc",
    filename: __filename,
  },
  async (message) => {
    try {
      message.reply(
        `*_Uptime of ${tlang().title}: ${runtime(process.uptime())}_*`
      );
    } catch (error) {
      await message.error(error + "\n\ncommand : uptime", error, false);
    }
  }
);

// Command: List Menu
astro_patch.cmd(
  {
    pattern: "list2",
    desc: "list menu",
    category: "user",
    react: "🥀",
  },
  async (message) => {
    try {
      const { commands } = require("../lib");
      let listMessage = `\n  
╭━━👉 * ${Config.botname} * 👈    
┃ 👑︎︎ 𝚙𝚛𝚎𝚏𝚒𝚡: ${Config.HANDLERS}
┃ 👑︎︎ 𝚘𝚠𝚗𝚎𝚛: ${Config.ownername}
┃ 👑︎ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜: ${commands.length}
┃ 👑︎︎ 𝚞𝚙𝚝𝚒𝚖𝚎: ${runtime(process.uptime())}
┃ 👑︎︎ 𝚖𝚎𝚖: ${formatp(os.totalmem() - os.freemem())}
╰━━━━━━━━━━━━━━⊷\n`;

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern === undefined) {
          continue;
        }
        listMessage += `*${i + 1} ${fancytext(commands[i].pattern, 1)}*\n`;
        listMessage += `  ${fancytext(commands[i].desc, 1)}\n`;
      }

      return await message.sendUi(message.chat, {
        caption: listMessage + Config.caption,
      });
    } catch (error) {
      await message.error(error + "\nCommand:list", error);
    }
  }
);
//Command: Owner
astro_patch.smd(
  {
    pattern: "owner",
    desc: "To display owner information",
    category: "owner",
    filename: __filename,
  },
  async (message) => {
    try {
      const vcard =
        "BEGIN:VCARD\nVERSION:3.0\nFN:" +
        Config.ownername +
        "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
        global.owner?.split(",")[0] +
        ":+" +
        global.owner?.split(",")[0] +
        "\nEND:VCARD";

      let contactMessage = {
        contacts: {
          displayName: Config.ownername,
          contacts: [
            {
              vcard,
            },
          ],
        },
        contextInfo: {
          externalAdReply: {
            title: Config.ownername,
            body: "Touch here.",
            renderLargerThumbnail: true,
            thumbnailUrl: "",
            thumbnail: log0,
            mediaType: 1,
            mediaUrl: "",
            sourceUrl:
              "https://wa.me/+" +
              global.owner?.split(",")[0] +
              "?text=Hii+" +
              Config.ownername,
          },
        },
      };

      return await message.sendMessage(message.jid, contactMessage, {
        quoted: message,
      });
    } catch (error) {
      await message.error(error + "\nCommand:owner", error);
    }
  }
);
// Command: Translate
astro_patch.cmd(
  {
    pattern: "trt",
    alias: ["translate"],
    category: "user",
    filename: __filename,
    use: "< text >",
    desc: "Translates the given text to the desired language.",
  },
  async (message, query) => {
    try {
      let targetLanguage = query ? query.split(" ")[0].toLowerCase() : "en";
      if (!message.reply_text) {
        var textToTranslate =
          query.replace(targetLanguage, "")?.trim() || false;
      } else {
        var textToTranslate = message.reply_text;
      }

      if (!textToTranslate) {
        return await message.reply(
          `*Please provide the text to translate. Example: ${prefix}trt en Who are you*`
        );
      }

      var translation = await translatte(textToTranslate, {
        from: "auto",
        to: targetLanguage,
      });

      if ("text" in translation) {
        return await message.reply(translation.text);
      }
    } catch (error) {
      await message.error(error + "\n\nCommand: trt", error);
    }
  }
);
const readDirectory = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject("Error reading directory");
      } else {
        resolve(files);
      }
    });
  });
};
astro_patch.cmd(
  {
    pattern: "file",
    desc: "to get the exact name and location of the command in the repository, so the user can edit it.",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (message, query) => {
    try {
      if (!query) {
        return message.reply("*Please provide a command or directory*");
      }

      if (query.startsWith(".")) {
        let result = "*------------- FILE MANAGER -2------------*\n";
        try {
          const files = await readDirectory(query);
          files.forEach((file) => {
            result += file + "\n";
          });
          await message.reply(result.toString());
        } catch (error) {
          message.reply(error);
        }
        return;
      }

      const { commands } = require("../lib");
      let output = [];
      let command = query.split(" ")[0].toLowerCase().trim();
      let commandInfo =
        commands.find((cmd) => cmd.pattern === command) ||
        commands.find((cmd) => cmd.alias && cmd.alias.includes(command));

      if (!commandInfo) {
        return await message.reply("*❌No such command.*");
      }

      output.push("*🍁Command:* " + commandInfo.pattern);
      if (commandInfo.category) {
        output.push("*🧩Type:* " + commandInfo.category);
      }
      if (commandInfo.alias && commandInfo.alias[0]) {
        output.push("*🧩Alias:* " + commandInfo.alias.join(", "));
      }
      if (commandInfo.desc) {
        output.push("*✨Description:* " + commandInfo.desc);
      }
      if (commandInfo.use) {
        output.push(
          "*〽️Usage:*\n ```" +
            prefix +
            commandInfo.pattern +
            " " +
            commandInfo.use +
            "```"
        );
      }
      if (commandInfo.usage) {
        output.push("*〽️Usage:*\n ```" + commandInfo.usage + "```");
      }
      if (commandInfo.filename) {
        output.push("*✨FileName:* " + commandInfo.filename);
      }
      try {
        if (
          query.includes("function") &&
          commandInfo.function &&
          message.isAsta &&
          commandInfo.pattern !== "file"
        ) {
          output.push("*🧩Function:* " + commandInfo.function.toString());
        }
      } catch {}
      await message.reply(output.join("\n"));
    } catch (error) {
      await message.error(error + "\nCommand:file", error);
    }
  }
);
astro_patch.cmd(
  {
    pattern: "eval",
    alias: ["$"],
    category: "tools",
    filename: __filename,
    fromMe: true,
    desc: "Runs JavaScript code on the Node.js server.",
    use: "< run code >",
    dontAddCommandList: true,
  },
  async (message, query, { isCreator, cmdName, Void }) => {
    try {
      if (!query) {
        return message.reply("*Provide a query to run*");
      }
      let result = eval("const a = async()=>{\n" + query + "\n}\na()");
      if (typeof result === "object") {
        await message.reply(JSON.stringify(result));
      } else {
        await message.reply(result.toString());
      }
    } catch (error) {
      return await message.reply(error.toString());
    }
  }
);
astro_patch.smd(
  {
    pattern: "cofounders",
    desc: "To display cofounders information",
    category: "owner",
    filename: __filename,
  },
  async (message) => {
    try {
      // Define cofounders list
      const subowners = [
        { name: "Haki", waid: "2349112171078" },
        { name: "Alya", waid: "" }
      ];

      // Construct contact messages for each cofounder
      let contactMessages = cofounders.map(cofounder => {
        const vcard =
          "BEGIN:VCARD\nVERSION:3.0\nFN:" +
          cofounder.name + // cofounder's name
          "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
          cofounder.waid + // cofounder's WhatsApp ID
          ":+" +
          cofounder.waid +
          "\nEND:VCARD";

        return {
          contacts: {
            displayName: cofounder.name,
            contacts: [
              {
                vcard,
              },
            ],
          },
          contextInfo: {
            externalAdReply: {
              title: cofounder.name,
              body: "Touch here.",
              renderLargerThumbnail: true,
              thumbnailUrl: "",
              thumbnail: log0,
              mediaType: 1,
              mediaUrl: "",
              sourceUrl:
                "https://wa.me/+" +
                cofounder.waid +
                "?text=Hello+" +
                cofounder.name,
            },
          },
        };
      });

      // Send each contact message
      for (let contactMessage of contactMessages) {
        await message.sendMessage(message.jid, contactMessage, {
          quoted: message,
        });
      }
      
    } catch (error) {
      await message.error(error + "\nCommand:cofounder", error);
    }
  }
);
