module.exports = {
    name: 'button',
    description: 'button for role select',
    async execute(client, message, args, Discord, current_server) {
        if (message.guild.member(message.author).roles.cache.has(current_server.lobster_id)) {
            const disbut = require("discord-buttons");

            let row1 = new disbut.MessageActionRow();
            let row2 = new disbut.MessageActionRow();
            let row3 = new disbut.MessageActionRow();
            let row4 = new disbut.MessageActionRow();
            let row5 = new disbut.MessageActionRow();

            let msg_components = [];

            let role_emb = new Discord.MessageEmbed()
                .setColor('f2a299')
                .setTitle(`Select Your Roles`)
                .setDescription('Click on a button to gain access to a role. To remove yourself from the role, click the button again.')
                .setThumbnail('https://i.imgur.com/UPrTHRZ.png');

            let button_array = [];
            var title_count = 0;

            var allowed_roles = current_server.roles;

            allowed_roles.forEach(elm => {
                let assigned_role = "";
                message.guild.roles.cache.find(i => {
                    if (`${i.id}` == elm) {
                        assigned_role = i;
                    }
                });


                let role_button = new disbut.MessageButton()
                    .setLabel(`${assigned_role.name}`)
                    .setID(`${assigned_role.id}`)
                    .setStyle("green");

                button_array.push(role_button);
                // Add a field to the embed here if you want
                // role_emb.addField('Member:', 'Grants access to the server, welcome!', true);
                if (title_count <= 4) {
                    //1 - 5
                    row1.addComponent(role_button);
                    msg_components = [row1];
                } else if (4 < title_count <= 9) {
                    //6 - 10
                    row2.addComponent(role_button);
                    msg_components = [row1, row2];
                } else if (9 < title_count <= 14) {
                    //11 - 15
                    row3.addComponent(role_button);
                    msg_components = [row1, row2, row3];
                } else if (15 < title_count <= 19) {
                    //16 - 20
                    row4.addComponent(role_button);
                    msg_components = [row1, row2, row3, row4];
                } else if (20 < title_count <= 24) {
                    //21 - 25
                    row5.addComponent(role_button);
                    msg_components = [row1, row2, row3, row4, row5];
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



