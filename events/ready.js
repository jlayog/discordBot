module.exports = (client) => {
    console.log(`${client.user.tag} is now online in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}