const fs = require('fs');

const button = require ('discord-buttons');

// takes in current server from the Main function
module.exports = (client, Discord, current_server) =>{

    const load_dir = (dirs) =>{
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
        for(const file of event_files){
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            //passes the current server and other function to each event when called
            if(event_name == 'clickButton'){
                client.on(event_name, event.bind(null, Discord, client, current_server));
            }else{
                client.on(event_name, event.bind(null, Discord, client, current_server));
            }
        }
    }
    ['client', 'guild'].forEach(e=> load_dir(e));
}