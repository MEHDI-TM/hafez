const { MessageEmbed } = require("discord.js");
const os = require("os");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

  let farsidb = db.fetch(`fa_${message.guild.id}`)

  
  if(farsidb === null) {

    const embed2 = new MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle("📔 **SpiRaL fal Bot Stats** 📔")
    .setFooter(
      " Requsted by : " + message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setColor("#fffff0")
    .addFields(
      {
        name: "🌐 Servers",
        value: `**.${client.guilds.cache.size}.**`,
        inline: true
      },
      {
        name: "📺 Channels",
        value: `**.${client.channels.cache.size}.**`,
        inline: true
      },
      {
        name: "👥 Users",
        value: `**.${client.users.cache.size}.**`,
        inline: true
      },
      {
        name: "⏳ Ping",
        value: `**.${Math.round(client.ws.ping)}ms.**`,
        inline: true
      },
      {
        name: "👨‍💻 Developers",
        value: "**❥ᴀᴘᴏʟʟᴏ#4934**",
        inline: true
      },

      {
        name: "⏱ Uptime",
        value: os.uptime(),
        inline: true
      },
      {
        name: "💻 Memory Usage",
        value: os.freemem(),
        inline: true
      },
      {
        name: "💻 Platform",
        value: os.platform() + " " + `(${os.version()})`,
        inline: true
      },
      {
        name: "💻 CPU",
        value: os.cpus()[0].model,
        inline: true
      }
    );

  await message.channel.send(embed2);

    } else {

      const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle("📔 **آمار بات حافظ** 📔")
      .setFooter(
        " : درخواست شده توسط " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setColor("#fffff0")
      .addFields(
        {
          name: "تعداد سرور های فعال 🌐",
          value: `فعال در **.${client.guilds.cache.size}.** سرور`,
          inline: true
        },
        {
          name: "تعداد چنل های فعال 📺",
          value: `فعال در **.${client.channels.cache.size}.** چنل`,
          inline: true
        },
        {
          name: "تعداد ممبر های فعال 👥",
          value: `فعال برای **.${client.users.cache.size}.** ممبر`,
          inline: true
        },
        {
          name: "پینگ ربات ⏳",
          value: `**.${Math.round(client.ws.ping)}ms.**`,
          inline: true
        },
        {
          name: "سازنده 👨‍💻",
          value: "**❥ᴀᴘᴏʟʟᴏ#4934**",
          inline: true
        },
  
        {
          name: "⏱ Uptime",
          value: os.uptime(),
          inline: true
        },
        {
          name: "💻 Memory Usage",
          value: os.freemem(),
          inline: true
        },
        {
          name: "💻 Platform",
          value: os.platform() + " " + `(${os.version()})`,
          inline: true
        },
        {
          name: "💻 CPU",
          value: os.cpus()[0].model,
          inline: true
        }
      );
  
    await message.channel.send(embed);

    }
};

module.exports.help = {
  name: "botinfo",
  aliases: ["bi"]
};
