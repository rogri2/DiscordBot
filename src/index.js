require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// client.on() => sirve para escuchar eventos
client.on("ready", (cli) => {
  // cli.user.tag => trae el usuario del bot con su tag
  // cli.user.username => trae el usuario del bot
  console.log(`✅ ${cli.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (msg.content === "toribio") {
    msg.reply("dijiste la palabra secreta!");
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
