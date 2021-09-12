const Discord = require("discord.js");
const axios = require("axios");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

  let farsidb = db.fetch(`fa_${message.guild.id}`)

  var number_random = Math.floor(Math.random() * 495);

  let getInfo = async () => {
    let response = await axios.get(`https://api.falehafez.org/`);
    let info = response.data;
    return info;
  };
  let data = await getInfo();

  
  let poem = `${data.poem[0]} — ${data.poem[1]}\n${data.poem[2]} — ${data.poem[3]}\n${data.poem[4]} — ${data.poem[5]}\n${data.poem[6]} — ${data.poem[7]}\n${data.poem[8]} — ${data.poem[9]}\n${data.poem[10]} — ${data.poem[11]}`;
  


  let replies = [
    "Before, you thought more of lovers — Your kindness to us was Shohreh Afagh",
    "Remember that night talk with Noushin Laban — The discussion was about love and mentioning the circle of lovers",
    "Before this, Cain should break the green roof and the enamel arch — The sight of my eyes was the eyebrows of Janan Tagh",
    "From the beginning of the morning until the end of the evening — Friendship and love were based on a covenant and a covenant",
    "What if the shadow of the beloved fell on the lover? — We needed him. He wanted us.",
    "Hassan Meh Royan Majles, although he takes heart and religion — Our discussion was thanks to nature and good morals",
    "He made a point at the begging king — God said, 'Every time I sat down, God was pleased"
  ];



  var num_ = Math.floor(Math.random() * 7);
  let poem_en = replies[num_];

  if(farsidb === null) {

    let embed12 = new Discord.MessageEmbed()
    .setColor("#fffff0")
    .setDescription(`📔 **Hafez Peoms (${number_random})** 📔`)
    .addField(
      "**📔 Poem :**",
      `> ${poem_en}`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/814790984830550027/886211459724484608/9k.png"
    )
    .setFooter(
      " Requsted by : " + message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(embed12);


  } else {

    let embed1 = new Discord.MessageEmbed()
    .setColor("#fffff0")
    .setDescription(`📔 **(${number_random}) غزلیات حافظ** 📔`)
    .addField(
      "**: شعر 📔**",
      `> ${poem}`
    )
    
    .setImage(
      "https://cdn.discordapp.com/attachments/814790984830550027/886211459724484608/9k.png"
    )
    .setFooter(
      " : درخواست شده توسط " + message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(embed1);

 
}};

module.exports.help = {
  name: "ghazal",
  aliases: ["peom"]
};
