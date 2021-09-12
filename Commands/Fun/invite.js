const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  let prefix = db.fetch(`${message.guild.id}prefix`) || "!";
  let farsidb = db.fetch(`fa_${message.guild.id}`);

  if (farsidb === null) {
    let embed = new Discord.MessageEmbed()
      .setTitle("📔 **Invite Page** 📔")
      .setThumbnail(bot.user.displayAvatarURL())
      .addField(
        "🔗 Invite Link",
        "[Elite Hafez Invite](https://discord.com/api/oauth2/authorize?client_id=886212613351018528&permissions=2163534400&scope=bot)"
      )
      .addField(
        "🔗 Supporter Server",
        "[Elite Server Invite](https://discord.gg/vczPTYfCsS)"
      )
      .setColor("#fffff0")
      .setFooter(
        " Requsted by : " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      );

    message.channel.send(embed);
  } else {
    let embed = new Discord.MessageEmbed()
      .setTitle("📔 **صفحه اینوایت** 📔")
      .setThumbnail(bot.user.displayAvatarURL())
      .addField(
        "لینک اینوایت من 🔗",
        "[Elite Hafez Invite](https://discord.com/api/oauth2/authorize?client_id=886212613351018528&permissions=2163534400&scope=bot)"
      )
      .addField(
        "لینک اینوایت سرور پشتیبانی 🔗",
        "[Elite Server Invite](https://discord.gg/vczPTYfCsS)"
      )
      .setColor("#fffff0")
      .setFooter(
        " : درخواست شده توسط " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      );

    message.channel.send(embed);
  }
};

module.exports.help = {
  name: "invite",
  aliases: ["i"]
};
