const fs = require('fs');
module.exports = {
    name: 'ar',
    description: 'Adds a role to the list',
    async execute(client, message, args, Discord, current_server) {
        if(message.guild.member(message.author).roles.cache.has(current_server.lobster_id)){
            let role_exists = false;
            let role_id = args[0].slice(3, 21);
            let role = '';
            message.guild.roles.cache.find(i => {
                if (`${i.id}` == `${role_id}`) {
                    role = i;
                    role_exists = true;
                }
            });

            //console.log(role);
            if (role_exists) {
                current_server.add_role = `${role.id}`;
                const newRoles = {
                    roles: current_server.roles
                }

                const jsonString = JSON.stringify(newRoles);
                console.log("New JSON" + jsonString);
                fs.writeFile("roles.json", JSON.stringify(newRoles), err => {
                    if (err) {
                        console.log(err);
                    }
                })
            } else {
                message.channel.send("Sorry, that role does not exist :( ");
            }
        }
    }
}