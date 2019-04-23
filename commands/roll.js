exports.run = (client, message, args) => {
    let min = 1
    let max = 100
    let rollDice = Math.floor(Math.random() * (max - min + 1)) + min;
    message.reply({embed: {
        color: 3447003,
        title: "Loot Roll",
        description: `You rolled a ${rollDice}!`
      }}).catch(console.error);
}