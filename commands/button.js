const bot_settings = require("../bot-settings.json");

module.exports = {
    name: 'button',
    description: 'button for role select',
    async execute(client, message, args, Discord, current_server) {
        if (message.guild.member(message.author).roles.cache.has(current_server.lobster_id)) {
            const disbut = require("discord-buttons");
            
            // You can add a max of 5 action rows to an Message. I created five empty ones that will be populated later
            let row1 = new disbut.MessageActionRow();
            let row2 = new disbut.MessageActionRow();
            let row3 = new disbut.MessageActionRow();
            let row4 = new disbut.MessageActionRow();
            let row5 = new disbut.MessageActionRow();

            // An array of rows that will be added to the final message embed
            let msg_components = [];

            // Creates a embed to tell the user how to use the buttons
            let role_emb = new Discord.MessageEmbed()
                .setColor('f2a299')
                .setTitle(`Select Your Roles`)
                .setDescription('Click on a button to gain access to a role. To remove yourself from the role, click the button again.')
                .setThumbnail(bot_settings.imagelink);
            // Add a field to the embed here if you want
            // role_emb.addField('Member:', 'Grants access to the server, welcome!', true);
            
            
            // An array of buttons that will be added to a message bar
            let button_array = [];
            
            // counter var because im lazy
            let title_count = 0;
            
            // In the end, it gets the allowed roles from the roles.json file.
            // Roles are actively worked on in current_server.roles and written to roles.json later async
            // This is done so we dont need to constantly read from roles.json which would require a blocking call
            let allowed_roles = current_server.roles;
            
            // For each id in the roles.json file
            allowed_roles.forEach(elm => {

                // Search through the guilds cached rolls for ids to see if we get one that matches the current elms id
                let assigned_role = "";
                message.guild.roles.cache.find(i => {
                    if (`${i.id}` == elm) {
                        // if we get a hit, store it in assinged_role
                        assigned_role = i;
                    }
                });

                // Create a button for this role we found
                let role_button = new disbut.MessageButton()
                    .setLabel(`${assigned_role.name}`)
                    .setID(`${assigned_role.id}`)
                    .setStyle("green");
                
                // Add this button we just created to the array for the current row
                button_array.push(role_button);
                
                //Check to see how many buttons are already created. I know i can do this with array.length but im too lazy to refactor.
                if (title_count <= 4) {
                    //1 - 5
                    // Add the button to the first row
                    row1.addComponent(role_button);
                    // and only add one row to the components
                    msg_components = [row1];
                } else if (4 < title_count <= 9) {
                    //6 - 10
                    row2.addComponent(role_button);
                    // add two component roles
                    msg_components = [row1, row2];
                } else if (9 < title_count <= 14) {
                    //11 - 15
                    row3.addComponent(role_button);
                    // three
                    msg_components = [row1, row2, row3];
                } else if (15 < title_count <= 19) {
                    //16 - 20
                    row4.addComponent(role_button);
                    // so on and so forth
                    msg_components = [row1, row2, row3, row4];
                } else if (20 < title_count <= 24) {
                    //21 - 25
                    row5.addComponent(role_button);
                    msg_components = [row1, row2, row3, row4, row5];
                }else{
                    console.log("you have reached the max amount of buttons")
                }
                title_count++;
            });

            //adds the buttons to action rows

            //sends the message in the channel
            message.channel.send(role_emb, {
                components: msg_components
            });

        }
    }
}



