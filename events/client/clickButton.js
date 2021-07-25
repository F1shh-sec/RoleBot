module.exports = (Discord, client, current_server, button)=>{
    // Roles
    let allowed_roles = current_server.roles;
    allowed_roles.forEach(elm =>{
        if(elm == button.id){
            add_role(elm, button);
        }
    });
}

function add_role(role, button){
    let user = button.clicker.user;
    let guild = button.guild;

    // Gets the role with a matching id from cache
    let assigned_role = "";
    guild.roles.cache.find(i =>{
        if(`${i.id}` == role){
            assigned_role = i;
        }
    });

    // If the user already has the role
    if(guild.member(user).roles.cache.has(assigned_role.id)){
        let failed = false;
        guild.member(user).roles.remove(assigned_role).catch(err => failed = true);
        if(!failed){
            console.log(`${user.username} was removed from the ${assigned_role.name} role`);
            button.reply.send(`You have been removed from the "${assigned_role.name}" role`, true);
        }else{
            button.reply.send(`You do not have permission to do that`, true);
        }
    }else{
        let failed = false;
        // If the user does not already have the role
        guild.member(user).roles.add(assigned_role).catch(err => {
            failed = true
        });
        if(!failed){
            console.log(`${user.username} was added to the ${assigned_role.name} role`);
            button.reply.send(`You have been given the "${assigned_role.name}" role`, true);
        }else{
            button.reply.send(`You do not have permission to do that`, true);
        }
    }
}