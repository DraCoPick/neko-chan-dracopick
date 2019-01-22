const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =("nc/")

bot.on('ready', function() {
    bot.user.setActivity("Commande: nc/help");
    console.log("Connecté");
});

bot.login(process.env.TOKEN)

//HELP

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
            description : `**Liste des commandes :** \n -ncb/help \n -ncb/ping \n -ncb/kick \n -ncb/clear`,
            fields: [{
                name:'Update 22/01/2019',
                value:'Ajout du /kick  \n Ajout du /clear'
            }],
            timestamp: new Date(),
            footer:{
                icon_url:bot.user.avatarURL,
                text: 'Par DraCoPick'
            }
        }});
    }

// SALUT

    if (message.content === "Salut"){
        message.reply("Nyah Nyah Nyah <3");
        console.log("Commande Nyah effectué");
    }

// PING

    if(message.content === prefix + "ping"){
        message.channel.send("Pong");
    }
});

// KICK

bot.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur ")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur ")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});

// CLEAR

bot.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas accès à cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de msg à supprimer")
        if (isNaN(count)) return message.channel.send("Veuille indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Saisissez un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
});

// ARRIVEE PERSONNE

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Quoi ? Un rescapé !? Viens trouver refuge chez nous ' + member.displayName);
    }).catch(console.error)
});

