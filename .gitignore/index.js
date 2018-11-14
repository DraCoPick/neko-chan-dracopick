const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =("nc/")

bot.on('ready', function() {
    bot.user.setGame("Commande: nc/help");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on('message', message =>{
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -nc/help");
    }

    if (message.content === "Salut"){
        message.reply("Nyah Nyah Nyah <3");
        console.log("Commande Nyah effectué");
    }
})
