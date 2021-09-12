const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

let prefix = db.fetch(`${message.guild.id}prefix`) || '!';
let farsidb = db.fetch(`fa_${message.guild.id}`)

  if(farsidb === null) {
    const embed2 = new MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("📔 **Help Page** 📔")
    .setDescription(
      `**📔 Hafez Omen :**\n \`${prefix}omen\`\n\n **📔 Hafez Peoms :**\n \`${prefix}peom\`\n\n **📔 Hafez Pictures :**\n \`${prefix}picture\`\n\n **📔 Hafez Biography :**\n \`${prefix}biography\`\n\n  **🌐 Bot language :**\n \`${prefix}language <en | fa>\`\n\n **❗ Custom Prefix :**\n \`${prefix}prefix <YOUR_PREFIX>\`\n\n**🤖 Bot Information :**\n \`${prefix}botinfo\` \n\n**🔗 Invite Bot :**\n \`${prefix}invite\``)

    .setFooter(
      " Requsted by : " + message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
    )

    .setColor("#fffff0");

  message.channel.send(embed2);

  } else {
  const embed = new MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("📔 **صفحه راهنمایی** 📔")
    .setDescription(
      `**: فال حافظ 📔**\n \`${prefix}hafez\`\n\n **: غزلیات حافظ 📔**\n \`${prefix}ghazal\` \n\n **: عکس های حافظ 📔**\n \`${prefix}aks\` \n\n **: زندگی نامه حافظ 📔**\n \`${prefix}zendegi_name\` \n\n  **: زبان بات 🌐**\n \`${prefix}zaban <fa | en>\` \n\n**: انتخاب پریفیکس ❗**\n \`${prefix}prefix <YOUR_PREFIX>\`\n\n**: اطلاعات بات 🤖**\n \`${prefix}botinfo\` \n\n**: اینوایت بات 🔗**\n \`${prefix}invite\``)

    .setFooter(
      " : درخواست شده توسط" + message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
    )

    .setColor("#fffff0");

  message.channel.send(embed);
    }};

module.exports.help = {
  name: "help",
  aliases: ["h"]
};
