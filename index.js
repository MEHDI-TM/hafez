const config = require("./config.json");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");


const bot = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" } }})

const webhookClient = new Discord.WebhookClient('886221296013295657', '-ce6vwMBfoKiiHWD3OoAI8B4sQ1zaOwLAVEHNdC_wrNO_rAwFBX11zRUOz3lD8rzECRu');

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();



fs.readdir("./commands/fun/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/fun/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.on("ready", async () => {
  console.log(
    `|\n| Logged in as ${bot.user.tag}!` +
    `|\n| SpiRaL Hafez Bot\n| Developer: ❥ᴀᴘᴏʟʟᴏ\n|\n| Last Update: 4/15/2021\n|`
  );

  bot.user.setPresence({status: "idle"});

  setInterval(() => {
    bot.user.setActivity(`-help |code by ❥ᴀᴘᴏʟʟᴏ`, { type: "WATCHING" });
  }, 5000);
  
  const newembed3 = new Discord.MessageEmbed()
  .setTitle(`**من دوباره آنلاین شدم** 🤖`)
  .setAuthor(`❥ᴀᴘᴏʟʟᴏ`, 'https://cdn.discordapp.com/attachments/814790984830550027/886214262375198730/hafez.jpg') 
  .setDescription(`--------------------------- \n\n ${bot.guilds.cache.size} : تعداد سرور ها هم اکنون 🌐 \n\n---------------------------`)
  .setTimestamp()
  .setColor("#32ba7c")
  webhookClient.send({
    username: `❥ᴀᴘᴏʟʟᴏ`,
    avatarURL: 'https://cdn.discordapp.com/attachments/814790984830550027/886214262375198730/hafez.jpg',
    embeds: [newembed3]
});

  bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = db.fetch(`${message.guild.id}prefix`) || config.prefix;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
      commandfile = bot.commands.get(bot.aliases.get(cmd));
    }

    if (!message.content.startsWith(prefix)) return;

    try {
      commandfile.run(bot, message, args);
    } catch (e) {}
  });
});

bot.on("message", async message => {
  let farsidb = db.fetch(`fa_${message.guild.id}`)

  if(farsidb === null) chat899 = `❗ My prefix was \`${db.fetch(`${message.guild.id}prefix`) || config.prefix}\``
    
  if(farsidb === true) chat899 = `پرفیکس من ❗ \`${db.fetch(`${message.guild.id}prefix`) || config.prefix}\` است`
   

  const prefixRegex = new RegExp(`^(<@!?${bot.user.id}>)\\s*`);

  var embs_1 = new MessageEmbed()
  .setColor('#fffff0') //hex color
  .setTitle(chat899)

  if (prefixRegex.test(message.content)) message.channel.send(embs_1);

});


bot.on("guildCreate", async  guild => {
  const guildICON = guild.iconURL({ dynamic: true }) || 'https://variety.com/wp-content/uploads/2018/05/discord-logo.jpg'

  const newembed1 = new Discord.MessageEmbed()
  .setDescription(`**🌐بات به یک سرور اضاف شد 🌐**`)
  .setAuthor(`${guild.name}`, guildICON) 
  .addField(`نام سرور :white_check_mark:`, `${guild.name}`)
 
  .addField(`آیدی سرور :white_check_mark:`, `${guild.id}`)
  .addField(`تعداد سرور ها هم اکنون :white_check_mark:`, `${bot.guilds.cache.size}`)

  .setColor("#32ba7c")
  webhookClient.send({
    username: `❥ᴀᴘᴏʟʟᴏ`,
    avatarURL: 'https://cdn.discordapp.com/attachments/814790984830550027/886214262375198730/hafez.jpg',
    embeds: [newembed1]
  });
});

bot.on("guildDelete", guild => {
const guildICON1 = guild.iconURL({ dynamic: true }) || 'https://variety.com/wp-content/uploads/2018/05/discord-logo.jpg'

  const newembed2 = new Discord.MessageEmbed()
  .setDescription(`**🌐بات از یک سرور حذف شد 🌐**`)
  .setAuthor(`${guild.name}`, guildICON1) 
  .addField(`نام سرور 🛑`, `${guild.name}`)

  .addField(`آیدی سرور 🛑`, `${guild.id}`)
  .addField(`تعداد سرور ها هم اکنون 🛑`, `${bot.guilds.cache.size}`)

  .setColor("#f15249")
  webhookClient.send({
    username: `❥ᴀᴘᴏʟʟᴏ`,
    avatarURL: 'https://cdn.discordapp.com/attachments/814790984830550027/886214262375198730/hafez.jpg',
    embeds: [newembed2]
});
});

process.on("unhandledRejection", (reason, promise) => {
  try {
      console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
  } catch {
      console.error(reason);
  }
});

bot.login(config.token);
