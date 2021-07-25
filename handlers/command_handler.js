const fs = require('fs');

module.exports = (client, Discord, message, current_server) =>{
    //console.log("the command handler has " + current_server.id);
    let command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../commands/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else{
            continue;
        }
    }
}