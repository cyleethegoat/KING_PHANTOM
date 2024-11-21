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
    menuContent += `*Owner Name*: */KING PHANTOM*/\n`;
    menuContent += `*Uptime*: ${runtime(process.uptime())}\n`;
    menuContent += `*Date*: ${currentDate}\n`;
    menuContent += `*THANKS TO*: BARAKA BEGA\n`;
    menuContent += `👋 😄 ${greeting}\n\n`;

    menuContent += readmore + "\n\n"; // Adding readmore before commands

    // List commands by category
    for (const category in commandCategories) {
      menuContent += `${tiny(category)}╭═══════════════⊷❍\n`; // Decorative line with category inside
      commandCategories[category].forEach(cmd => {
        menuContent += `┊❍${fancytext(cmd, 1)}\n`; // Changed emoji here
      });
      menuContent += `CONTINUE\n${readmore}\n\n`; // Adding readmore with 👇 after each category
    }

    // Prepare the final message content
    const finalMessage = menuContent + `\nYour King 👑*${Config.botname}*!\n© PHANTOM`;

    // Send the image with the menu
    await context.send(
      "https://files.catbox.moe/kgvmip.webp", // Replace with your image URL
      { caption: finalMessage },
      "img",
      message
    );

  } catch (error) {
    await context.error(error + "\nCommand: menu", error);
  }
});
