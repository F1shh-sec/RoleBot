module.exports = (Discord, client, current_server, button)=>{
    // Gets the roles from current server object
    let allowed_roles = current_server.roles;
    allowed_roles.forEach(elm =>{
        if(elm == button.id){
            // for each allowed role, handle it
            add_role(elm, button);
        }
    });
}

/**
 * Takes in an ID for a role and adds a user to that role. It also takes in the button object so we can tell 
 * who we need to add the role to. 
 * @param {string} role The ID of the role that we want to add
 * @param {discord button} button the button that was clicked
 */
function add_role(role, button){
    let user = button.clicker.user;
    // Discord just calls servers guilds
    let guild = button.guild;

    // Gets the role with a matching id from the cache of the guild the button was clicked on
    let assigned_role = "";
    guild.roles.cache.find(i =>{
        if(`${i.id}` == role){
            // if that server has a role of that id, store it in assigned role
            assigned_role = i;
        }
    });

    // If the user already has the role
    if(guild.member(user).roles.cache.has(assigned_role.id)){
        // The whole failed flag thing is broken. Go figure.
        let failed = false;
        //Removes the role from the 
        guild.member(user).roles.remove(assigned_role).catch(err => failed = true);
        if(!failed){
            // Sends the user a message that they were removed from the role
            console.log(`${user.username} was removed from the ${assigned_role.name} role`);
            button.reply.send(`You have been removed from the "${assigned_role.name}" role`, true);
        }else{
            // Lets them know we cant give them that role
            button.reply.send(`You do not have permission to do that`, true);
        }
    }else{
        let failed = false;
        // If the user does not already have the role, give it to them
        guild.member(user).roles.add(assigned_role).catch(err => {
            failed = true
        });
        if(!failed){
            // Tells the user we added them to the role
            console.log(`${user.username} was added to the ${assigned_role.name} role`);
            button.reply.send(`You have been given the "${assigned_role.name}" role`, true);
        }else{
            button.reply.send(`You do not have permission to do that`, true);
        }
    }
}