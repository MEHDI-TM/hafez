const Discord = require("discord.js");
const axios = require("axios");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

  let farsidb = db.fetch(`fa_${message.guild.id}`)


  if(farsidb === null) {

    let embed12 = new Discord.MessageEmbed()
    .setColor("#fffff0")
    .setDescription(`📔 **Hafez Biography** 📔`)
    .addField(
      "**📔 Biography :**",
      `> Khwaja Shams al-Din Muhammad ibn Baha'u'llah Muhammad Hafiz Shirazi (born 727 AH - died 792 AH in Shiraz), nicknamed the language of the unseen, translator of the secrets of Iran `
    )
    .addField('📔 Born :', `1315`)
    .addField('📔 Died :', `1390`)
    .addField('📔 Peom :', 'Divan Hafez')
    .addField('📔 Place of burial :', 'Shiraz')

    .setFooter(
      " Requsted by : " + message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(embed12);


  } else {

    let embed1 = new Discord.MessageEmbed()
    .setColor("#fffff0")
    .setDescription(`📔 **زندگی نامه حافظ** 📔`)
    .addField(
      "**: زندگی نامه 📔**",
      `> خواجه شمس‌ُالدّینْ محمّدِ بن بهاءُالدّینْ محمّدْ حافظ شیرازی (زادهٔ ۷۲۷ هجری قمری – درگذشتهٔ ۷۹۲ هجری قمری در شیراز)، ملقب به لِسان‌ُالْغِیْب، تَرجُمانُ الْاَسرار، لِسان‌ُالْعُرَفا و ناظِم‌ُالاُولیاء، شاعر سدهٔ هشتم هجری ایران است. بیش‌تر شعرهای او غزل هستند که به غزلیات شهرت دارند.`
    )
    .addField(': تولد 📔', `۷۰۶`)
    .addField(': فوت 📔', `۷۶۹`)
    .addField(': دیوان اشعار 📔', `دیوان حافظ`)
    .addField(': محل خاکسپاری 📔', `شیراز`)
    
    .setFooter(
      " : درخواست شده توسط " + message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(embed1);

 
}};

module.exports.help = {
  name: "biography",
  aliases: ["zendegi_name"]
};
