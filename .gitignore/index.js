const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =("nc/")

bot.on('ready', function() {
    bot.user.setGame("Commande: nc/help");
    console.log("Connecté");
});

bot.login(process.env.TOKEN)

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Quoi ? Un rescapé !? Viens trouver refuge chez nous ' + member.displayName);
    }).catch(console.error)

bot.on('message', message =>{
    if (message.content === prefix + "help"){
        message.channel.send( {embed: {
            color: 3447003,
            author: {
                name:bot.user.username,
                icon_url: bot.user.avatarURL
            },
            title: "Commandes:",
            url: 'https://twitter.com/NekoCha88477547',
            description : `**Liste des commandes :** \n -ncb/help \n -ncb/ping`,
            fields: [{
                name:'Update',
                value:'Ajout du embed du /help  \n Ajout du lien Twitter'
            }],
            timestamp: new Date(),
            footer:{
                icon_url:bot.user.avatarURL,
                text: 'Par DraCoPick'
            }
        }});

    if (message.content === "Salut"){
        message.reply("Nyah Nyah Nyah <3");
        console.log("Commande Nyah effectué");
    }

    if(message.content === prefix + "ping"){
        message.channel.send("Pong");
    }

});
