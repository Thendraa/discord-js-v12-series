const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {

    if(args[0] == "ayarla") {
    const channel = message.mentions.channels.first()
    if(!channel) return message.reply(`:x: **Yanlış Kullanım! Örnek: a-mutelog ayarla #kanal**`)
    db.set(`ThdMuteLog_${message.guild.id}`, channel.id)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Akhyls - Mute-Log Sistemi`)
    .setDescription(`<:onay:894244398940954654> Mute-Log Kanalı başarıyla ${kanal} olarak ayarlandı!`)
    .setColor('GREEN')
    .setFooter(`© 2021 Akhyls`, client.user.avatarURL())
    .setTimestamp()
    message.channel.send(embed)
    }

    if(args[0] == "sıfırla") {

    db.delete(`ThdMuteLog_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Akhyls - Mute-Log Sistemi`)
    .setDescription(`<:onay:894244398940954654> Mute-Log Kanalı başarıyla sıfırlandı!`)
    .setColor('RED')
    .setFooter(`© 2021 Akhyls`, client.user.avatarURL())
    .setTimestamp()
    message.channel.send(embed)
    }
}

exports.conf = {
    permLevel: 2,
    aliases: []
}

exports.help = {
    name: "mutelog",
    description: "botun pingini gösterir",
    usage: "mutelog"
}
