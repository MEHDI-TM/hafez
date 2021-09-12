const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

  let farsidb = db.fetch(`fa_${message.guild.id}`)

    
  if(farsidb === null) chat896 = `❗ New prefix`
    
  if(farsidb === true) chat896 = `پریفیکس جدید ❗`
   
  if(farsidb === null) chat897 = `✅ New prefix set on this server`
    
  if(farsidb === true) chat897 = `پریفیکس جدید ست شد ✅`
   

  if(farsidb === null) chat898 = `🛑 Please enter your desired prefix`
    
  if(farsidb === true) chat898 = `لطفا پریفیکس مورد نظر خود را بنویسید 🛑`
   

  if(farsidb === null) chat899 = `🛑 You need to have \`ADMINISTRATOR 🐱‍🏍\` permission`
    
  if(farsidb === true) chat899 = `شما پریمیشن \`ADMINISTRATOR 🐱‍🏍\` را ندارید 🛑`
   


  if(!permission) {

    var embs_1 = new MessageEmbed()
    .setColor('#fffff0') //hex color
    .setTitle(chat899)
    
    message.channel.send(embs_1)
  
  } else {

    let cArgs = args[0];

    if(!cArgs)  {

 
      var embs_2 = new MessageEmbed()
         .setColor('#fffff0') //hex color
         .setTitle(chat898)
     
       message.channel.send(embs_2);

                } else {



                  db.set(`${message.guild.id}prefix`, cArgs)
 

                  var embs = new MessageEmbed()
                  .setColor('#fffff0') //hex color
                  .setTitle(chat897)
                  .addField(chat896, `${cArgs}`)
                 
                     message.channel.send(embs);

                }

  }

};

module.exports.help = {
  name: "prefix",
  aliases: ["set_prefix"]
};
