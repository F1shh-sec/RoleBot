const format = require('../bot_format');
const text_colors = format.text_colors;
const fs = require('fs');
module.exports = {
    name: 'rr',
    description: 'removes a role to the list',
    async execute(client, message, args, Discord, current_server) {
        if(message.guild.member(message.author).roles.cache.has(current_server.lobster_id)){
            let role_id = args[0].slice(3, 21);

            let role_exists = false;
            current_server.roles.forEach(elm =>{
                if(elm == role_id){
                    role_exists = true
                }
            });
            if (role_exists) {
                let role_list = current_server.roles;
                var index_to_delete = role_list.indexOf(role_id);
                delete role_list[index_to_delete];
                let filtered_roles = role_list.filter(function (elm){
                    return elm != null;
                });
                console.log(filtered_roles);
                current_server.set_roles = filtered_roles;
                console.log(current_server.roles);


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