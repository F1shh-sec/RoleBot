const format = require('../bot_format');
const text_colors = format.text_colors;
const fs = require('fs');
module.exports = {
    name: 'rr',
    description: 'removes a role to the list',
    async execute(client, message, args, Discord, current_server) {
        //Check commands/ar.js for comments on this bit
        if(message.guild.member(message.author).roles.cache.has(current_server.lobster_id)){
            let role_id = args[0].slice(3, 21);
            let role_exists = false;
            current_server.roles.forEach(elm =>{
                if(elm == role_id){
                    role_exists = true
                }
            });


            if (role_exists) {
                // Gets the current roles and stores them
                let role_list = current_server.roles;
                // Gets the index of the item we want to delete from the array
                var index_to_delete = role_list.indexOf(role_id);
                // delete whats at that index. scared to combine this with the line above even though it will work
                delete role_list[index_to_delete];
                
                // now what we just did actually replaced the item with null then just removing it
                // so we need to make a new array that is just the old one but with any nulls removed
                let filtered_roles = role_list.filter(function (elm){
                    return elm != null;
                });
                // Is that why people hate JS?

                // Quick sanity check that we did it right
                console.log(filtered_roles);
                // Set the current roles to the new filter list with the index removed
                current_server.set_roles = filtered_roles;
                // and this should be the same as the other thing we just printed. Panic if its not.
                console.log(current_server.roles);

                //Now we write the update to the JSON File Async
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
                //If its broken say so
                message.channel.send("Sorry, that role does not exist :( ");
            }
        }
    }
}