const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const updatemember = () =>{
  const channelId = '774437115286126602';
  const guild = client.guilds.cache.get('611908098780561441');
  const channel = guild.channels.cache.get(channelId);
  channel.setName(`Members : ${guild.memberCount.toLocaleString()}`)
}

client.on('ready',()=>{
    console.log(`Logged on as ${client.user.tag}`)
    updatemember()
})

client.on('guildMemberAdd',(member)=>{
  updatemember()
})

client.on('guildMemberRemove',(member)=>{
  updatemember()
})

client.on('messageReactionAdd',async (reaction,user)=>{
    if(reaction.message.channel.id !== '771318669112246283')return;
    if(reaction.message.id === '771588558372732938'){
        let emot = reaction.emoji.name
        let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emot.toLowerCase());
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);

        member.roles.add(role.id);
    }
})

client.on('messageReactionRemove',async (reaction,user)=>{
    if(reaction.message.channel.id !== '771318669112246283')return;
    if(reaction.message.id === '771588558372732938'){
        let emot = reaction.emoji.name
        let role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === emot.toLowerCase());
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id);

        member.roles.remove(role.id);
    }
})




client.login(process.env.TOKEN);
