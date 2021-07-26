const fs = require('fs');
module.exports = {
    name: 'ar',
    description: 'Adds a role to the list',
    async execute(client, message, args, Discord, current_server) {

        // If the user who used the command has the admin role from bot-setting.json then process the command
        if(message.guild.member(message.author).roles.cache.has(current_server.lobster_id)){

            // Flags used for checking if the role is real
            let role_exists = false;
            // Gets the random garbage that discord adds to the id out of the string 
            let role_id = args[0].slice(3, 21);

            // Stores the role object that gets returned
            let role = '';

            //Checks to see if the role is on the server
            message.guild.roles.cache.find(i => {
                //if we find it
                if (`${i.id}` == `${role_id}`) {
                    //returns the role and sets the flag to true
                    role = i;
                    role_exists = true;
                }
            });

            // If the role exists
            if (role_exists) {
                // Add it to the list of roles in current server
                current_server.add_role = `${role.id}`;
                // creates a new role object to store in the json file 
                const newRoles = {
                    roles: current_server.roles
                }

                // writes that new object to roles.json
                const jsonString = JSON.stringify(newRoles);
                console.log("New JSON" + jsonString);
                fs.writeFile("roles.json", JSON.stringify(newRoles), err => {
                    if (err) {
                        console.log(err);
                    }
                })
            } else {
                // If we couldnt find the role, say so
                message.channel.send("Sorry, that role does not exist :( ");
            }
        }
    }
}