const bot_settings = require('../../bot-settings');

module.exports = (Discord, client, current_server, message)=>{
    //set prefix
   //console.log("the Message Event has: " + current_server.id);

    const prefix = bot_settings.prefix;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // prefix is split off
    const args = message.content.slice(prefix.length).split(/ +/);

    //command to lowercase
    const cmd = args.shift().toLowerCase();

    // Executes the command if messaged by the bot maker
    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, Discord, current_server);

}

