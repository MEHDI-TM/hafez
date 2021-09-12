const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

let farsidb = db.fetch(`fa_${message.guild.id}`)

if(farsidb === null) chat899 = `🛑 You need to have \`ADMINISTRATOR 🐱‍🏍\` permission`
    
if(farsidb === true) chat899 = `شما پریمیشن \`ADMINISTRATOR 🐱‍🏍\` را ندارید 🛑`
 


  if (!message.member.hasPermission("ADMINISTRATOR")){
    message.channel.send(`${chat899}`)

  } else {

 
  if (args[0] === 'fa') {
      
    db.set(`fa_${message.guild.id}`, true)
     message.channel.send('**زبان فارسی انتخاب شد** :flag_ir:');

  } else if (args[0] === 'en') {
     
    db.delete(`fa_${message.guild.id}`, true)
       message.channel.send(':flag_us: **English language is set**');
  }
}
};

module.exports.help = {
  name: "language",
  aliases: ["zaban"]
};
