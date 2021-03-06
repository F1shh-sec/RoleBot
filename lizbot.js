const Discord = require('discord.js');
const client = new Discord.Client();
require ('discord-buttons')(client);
const bot_settings = require('./bot-settings');
var fs = require('fs');

// Creates a object to store which information about the current server
let current_server = {
    // Variables
    _msg_limit: 10,
    _id: bot_settings.default_server_id,
    _guild: null,
    _channel_id: bot_settings.default_channel_id,
    _dm_channel: null,
    _channel: null,
    _roles: [],
    _lobster_id: bot_settings.default_admin_role_id,
    // Setters
    set add_role(x){
        this._roles.push(x);
    },
    set set_roles(x){
        this._roles = x;
    },
    // Setters
    set id(x){
        this._id = x;
    },
    set guild(x){
        this._guild = x;
        this._id = x.id;
    },
    set channel_id(x){
        this._channel_id = x;
    },
    set dm_channel(x){
        this._dm_channel = x;
    },
    set channel(x){
        this._channel = x;
    },

    // Getters
    get roles(){
        return this._roles;
    },
    get id(){
        return this._id;
    },
    get guild(){
        return this._guild;
    },
    get channel_id(){
        return this._channel_id;
    },
    get dm_channel(){
        return this._dm_channel;
    },
    get channel(){
        return this._channel;
    },
    get message_limit(){
        return this._msg_limit;
    },
    get lobster_id(){
        return this._lobster_id;
    }

};

//sets the guild parameter.
client.guilds.fetch(current_server.id).then(newguild => current_server.guild = newguild);

// Gets information form roles.json and stores it in the current_server.roles
var data = fs.readFileSync('roles.json');
var roles = JSON.parse(data).roles;
roles.forEach(elm =>{
    current_server.add_role = elm;
});

// These should always match or we messed up
console.log(roles)
console.log(current_server.roles)


// Starts up the handlers.
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    //passes the current server to each of the handlers
    require(`./handlers/${handler}`)(client, Discord, current_server)
})

//Logs in with the token 
client.login(bot_settings.token);