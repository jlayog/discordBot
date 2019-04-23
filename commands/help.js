exports.run = (client, message, args) => {
    message.channel.send({embed: {
        color: 3447003,
        title: "Command List",
        description: "Type: \n /help \n /customs \n /roll \n /ping",
        timestamp: new Date(),
        footer: {
          text: "I am a bot made by @Im Helping You"
        }
      }}).catch(console.error);
}
