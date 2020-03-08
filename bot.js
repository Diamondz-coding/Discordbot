const Discord = require('discord.js');
const client = new Discord.Client();

clent.login("NjgzNjc1NTY3NzQ0NDgzNTgw.XmTS5g.qJPmdmXg3TeQ_EF8rgwUtvBEgxk");

client.on('ready', ()=> {
console.log("The Bot Is Logged In!");

});

client.on('message', message =>{
  if(message.author.bot)
  return;

  if(message.content.toLowCase() === 'hello')
  message.channel.send("Hey!");




})
